const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const targetUnitId = process.argv[2] || "";
const errors = [];
const warnings = [];

function walkFiles(dir, matcher, files = []) {
  if (!fs.existsSync(dir)) {
    return files;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, matcher, files);
    } else if (matcher(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function loadScript(context, filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  vm.runInContext(code, context, { filename: path.relative(root, filePath) });
}

function noteError(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function noteWarning(scope, message) {
  warnings.push(`${scope}: ${message}`);
}

function isText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function checkText(scope, object, key) {
  if (!isText(object?.[key])) {
    noteError(scope, `missing ${key}`);
  }
}

function checkList(scope, object, key, minimum = 1) {
  if (!Array.isArray(object?.[key]) || object[key].length < minimum) {
    noteError(scope, `missing ${key} list`);
  }
}

function checkChoices(scope, item) {
  if (item?.type === "spelling") {
    checkText(scope, item, "correctAnswer");
    return;
  }

  const choices = item?.choices;
  if (!Array.isArray(choices) || choices.length < 2) {
    noteError(scope, "missing answer choices");
    return;
  }
  if (!isText(item.correctAnswer)) {
    noteError(scope, "missing correctAnswer");
    return;
  }
  if (!choices.includes(item.correctAnswer)) {
    noteError(scope, `correctAnswer "${item.correctAnswer}" is not one of the choices`);
  }
}

function checkStudentActivity(scope, lesson) {
  if (!lesson.studentActivity) {
    noteWarning(scope, "no student activity");
    return;
  }
  const activity = lesson.studentActivity;
  checkText(`${scope} activity`, activity, "title");
  checkText(`${scope} activity`, activity, "mission");
  checkList(`${scope} activity`, activity, "steps", 3);

  const steps = Array.isArray(activity.steps) ? activity.steps : [];
  const introCount = steps.filter((step) => step?.kind === "lessonIntro").length;
  const questionSteps = steps.filter((step) => step?.kind === "question" || step?.kind === "spelling");
  if (!introCount) {
    noteError(`${scope} activity`, "missing lessonIntro step");
  }
  if (!questionSteps.length) {
    noteError(`${scope} activity`, "missing scored question or spelling steps");
  }

  steps.forEach((step, index) => {
    const stepScope = `${scope} step ${index + 1}`;
    checkText(stepScope, step, "kind");
    checkText(stepScope, step, "title");
    if (step.kind === "question") {
      checkText(stepScope, step, "prompt");
      checkChoices(stepScope, step);
    }
    if (step.kind === "spelling") {
      checkText(stepScope, step, "prompt");
      checkText(stepScope, step, "correctAnswer");
    }
  });
}

function checkQuiz(scope, lesson) {
  if (!lesson.quiz) {
    noteWarning(scope, "no quiz");
    return;
  }
  const questions = Array.isArray(lesson.quiz.questions) ? lesson.quiz.questions : [];
  checkText(`${scope} quiz`, lesson.quiz, "title");
  if (!questions.length) {
    noteError(`${scope} quiz`, "missing questions");
  }
  questions.forEach((question, index) => {
    const questionScope = `${scope} quiz question ${index + 1}`;
    checkText(questionScope, question, "prompt");
    checkChoices(questionScope, question);
  });
}

function checkLesson(unit, lesson, index) {
  const scope = `${unit.id} / ${lesson?.id || `lesson ${index + 1}`}`;
  checkText(scope, lesson, "id");
  checkText(scope, lesson, "title");
  checkText(scope, lesson, "type");

  if (lesson.type !== "unitTest") {
    checkText(scope, lesson, "learningGoal");
    checkList(scope, lesson, "lessonContent");
    checkList(scope, lesson, "successCriteria");
    checkStudentActivity(scope, lesson);
  }
  checkQuiz(scope, lesson);
}

function checkUnit(unit) {
  const scope = unit?.id || "unknown unit";
  checkText(scope, unit, "id");
  checkText(scope, unit, "title");
  checkText(scope, unit, "strand");
  checkText(scope, unit, "unitGoal");
  checkList(scope, unit, "lessons");

  const lessonIds = new Set();
  (unit.lessons || []).forEach((lesson, index) => {
    if (lesson?.id) {
      if (lessonIds.has(lesson.id)) {
        noteError(scope, `duplicate lesson id ${lesson.id}`);
      }
      lessonIds.add(lesson.id);
    }
    checkLesson(unit, lesson, index);
  });
}

const context = vm.createContext({
  console,
  window: {
    PracticeStarContent: {},
    PracticeStarUnit: {}
  }
});

const dataFiles = [
  path.join(root, "content", "catalog-data.js"),
  ...walkFiles(path.join(root, "content"), (file) => file.endsWith("index-data.js")).sort(),
  ...walkFiles(path.join(root, "content"), (file) => file.includes(`${path.sep}unit-data${path.sep}`) && file.endsWith(".js")).sort()
];

dataFiles.forEach((file) => loadScript(context, file));

const units = Object.values(context.window.PracticeStarUnit || {});
const selectedUnits = targetUnitId ? units.filter((unit) => unit?.id === targetUnitId) : units;

if (targetUnitId && selectedUnits.length === 0) {
  noteError("curriculum", `could not find unit ${targetUnitId}`);
}

const seenUnitIds = new Set();
units.forEach((unit) => {
  if (!unit?.id) {
    return;
  }
  if (seenUnitIds.has(unit.id)) {
    noteError("curriculum", `duplicate unit id ${unit.id}`);
  }
  seenUnitIds.add(unit.id);
});

selectedUnits.forEach(checkUnit);

warnings.forEach((warning) => console.warn(`Warning: ${warning}`));

if (errors.length) {
  console.error(`Curriculum check failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Curriculum check passed for ${targetUnitId || `${selectedUnits.length} units`}.`);
