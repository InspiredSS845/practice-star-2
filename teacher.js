const signupForm = document.querySelector("#signupForm");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");
const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loggedOutArea = document.querySelector("#loggedOutArea");
const loggedInArea = document.querySelector("#loggedInArea");
const teacherEmail = document.querySelector("#teacherEmail");
const logoutButton = document.querySelector("#logoutButton");
const authMessage = document.querySelector("#authMessage");
const dashboardPanel = document.querySelector("#dashboardPanel");
const classCodeDisplay = document.querySelector("#classCodeDisplay");
const dashboardTabButtons = document.querySelectorAll(".tab-button");
const dashboardTabPanels = document.querySelectorAll(".dashboard-tab-panel");
const curriculumHomePanel = document.querySelector("#curriculumHomePanel");
const curriculumSummary = document.querySelector("#curriculumSummary");
const curriculumGradeTabs = document.querySelector("#curriculumGradeTabs");
const curriculumSubjectTabs = document.querySelector("#curriculumSubjectTabs");
const curriculumUnits = document.querySelector("#curriculumUnits");
const curriculumLessonPanel = document.querySelector("#curriculumLessonPanel");
const curriculumUnitTitle = document.querySelector("#curriculumUnitTitle");
const curriculumUnitGoal = document.querySelector("#curriculumUnitGoal");
const curriculumLessons = document.querySelector("#curriculumLessons");
const curriculumPreviewPanel = document.querySelector("#curriculumPreviewPanel");
const curriculumPreviewTitle = document.querySelector("#curriculumPreviewTitle");
const curriculumPreviewMeta = document.querySelector("#curriculumPreviewMeta");
const curriculumPreviewContent = document.querySelector("#curriculumPreviewContent");
const backToCurriculumButton = document.querySelector("#backToCurriculumButton");
const backToUnitButton = document.querySelector("#backToUnitButton");
const studentRosterForm = document.querySelector("#studentRosterForm");
const rosterStudentName = document.querySelector("#rosterStudentName");
const rosterStatus = document.querySelector("#rosterStatus");
const studentRosterList = document.querySelector("#studentRosterList");
const teacherWordListForm = document.querySelector("#teacherWordListForm");
const activeListId = document.querySelector("#activeListId");
const wordListName = document.querySelector("#wordListName");
const wordListWords = document.querySelector("#wordListWords");
const newListButton = document.querySelector("#newListButton");
const deleteListButton = document.querySelector("#deleteListButton");
const teacherStatus = document.querySelector("#teacherStatus");
const wordListCards = document.querySelector("#wordListCards");
const quizForm = document.querySelector("#quizForm");
const activeQuizId = document.querySelector("#activeQuizId");
const quizTitle = document.querySelector("#quizTitle");
const questionType = document.querySelector("#questionType");
const correctAnswer = document.querySelector("#correctAnswer");
const questionPrompt = document.querySelector("#questionPrompt");
const choiceFields = document.querySelector("#choiceFields");
const choiceInputs = [
  document.querySelector("#choiceOne"),
  document.querySelector("#choiceTwo"),
  document.querySelector("#choiceThree"),
  document.querySelector("#choiceFour")
];
const addQuestionButton = document.querySelector("#addQuestionButton");
const clearQuestionButton = document.querySelector("#clearQuestionButton");
const questionList = document.querySelector("#questionList");
const newQuizButton = document.querySelector("#newQuizButton");
const deleteQuizButton = document.querySelector("#deleteQuizButton");
const quizStatus = document.querySelector("#quizStatus");
const quizLibraryPanel = document.querySelector("#quizLibraryPanel");
const quizLibraryCount = document.querySelector("#quizLibraryCount");
const quizLibraryToggle = document.querySelector("#quizLibraryToggle");
const quizCards = document.querySelector("#quizCards");

let draftQuestions = [];
let quizLibraryQuizCount = 0;
let isQuizLibraryCollapsed = false;
let activeTeacher = null;
let curriculumLibraries = [];
let activeCurriculumUnitId = "";
let activeCurriculumLibraryId = "";
let activeCurriculumGrade = 5;
let activeCurriculumSubject = "Mathematics";

function appIsReady() {
  if (window.PracticeStar) {
    return true;
  }
  authMessage.textContent = "Practice Star is still loading. Please refresh this page once, then try logging in again.";
  return false;
}

function currentTeacher() {
  return activeTeacher;
}

async function renderTeacherPage(message = "") {
  if (!appIsReady()) {
    dashboardPanel.classList.add("hidden");
    return;
  }

  const teacher = await window.PracticeStar.getCurrentTeacher();
  activeTeacher = teacher;
  const isLoggedIn = Boolean(teacher);

  loggedOutArea.classList.toggle("hidden", isLoggedIn);
  loggedInArea.classList.toggle("hidden", !isLoggedIn);
  dashboardPanel.classList.toggle("hidden", !isLoggedIn);
  teacherEmail.textContent = teacher?.email || "";
  authMessage.textContent = message;

  if (isLoggedIn) {
    classCodeDisplay.textContent =
      teacher.classCode || window.PracticeStar.ensureTeacherClassCode(teacher.id) || "Not ready";
    await loadCurriculum();
    await renderStudentRoster();
    await renderLists();
    await renderQuizCards();
  }
}

function showDashboardTab(tabId) {
  dashboardTabButtons.forEach((button) => {
    const isActive = button.id === tabId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  dashboardTabPanels.forEach((panel) => {
    const isActive = panel.getAttribute("aria-labelledby") === tabId;
    panel.classList.toggle("active", isActive);
  });
}

function clearListForm() {
  activeListId.value = "";
  wordListName.value = "";
  wordListWords.value = "";
  teacherStatus.textContent = "";
  deleteListButton.disabled = true;
  wordListName.focus();
}

function selectedStudentIds(container) {
  return Array.from(container.querySelectorAll("input[data-student-share]:checked")).map((input) => input.value);
}

function renderAudienceControls(item, students, typeLabel) {
  const isShared = item.isShared === true;
  const shareMode = item.shareMode === "selected" ? "selected" : "all";
  const targetStudentIds = Array.isArray(item.targetStudentIds) ? item.targetStudentIds : [];
  const itemId = window.PracticeStar.escapeHtml(item.id || item.itemId);
  const itemType = window.PracticeStar.escapeHtml(item.itemType || typeLabel);
  return `
    <div class="share-controls" data-share-item-id="${itemId}" data-share-item-type="${itemType}">
      <div class="share-status-row">
        <span>Status: <strong>${isShared ? "Shared" : "Not shared"}</strong></span>
        <button class="${isShared ? "danger" : "secondary"} share-toggle-button" type="button" data-shared="${isShared ? "true" : "false"}">
          ${isShared ? "Stop Sharing" : "Share"}
        </button>
      </div>
      <label>
        Share with
        <select class="share-mode-select">
          <option value="all" ${shareMode === "all" ? "selected" : ""}>All students</option>
          <option value="selected" ${shareMode === "selected" ? "selected" : ""}>Selected students</option>
        </select>
      </label>
      <div class="student-share-list ${shareMode === "selected" ? "" : "hidden"}">
        ${students.length
          ? students.map((student) => `
            <label>
              <input data-student-share type="checkbox" value="${student.id}" ${targetStudentIds.includes(student.id) ? "checked" : ""} />
              ${window.PracticeStar.escapeHtml(student.name)}
            </label>
          `).join("")
          : `<p class="hint">Add students before choosing individuals.</p>`}
      </div>
    </div>
  `;
}

function attachAudienceControlHandlers(container, onChange) {
  container.querySelectorAll(".share-controls").forEach((shareControl) => {
    const modeSelect = shareControl.querySelector(".share-mode-select");
    const studentList = shareControl.querySelector(".student-share-list");
    const saveSettings = () => {
      onChange({
        itemId: shareControl.dataset.shareItemId,
        itemType: shareControl.dataset.shareItemType,
        isShared: shareControl.querySelector(".share-toggle-button").dataset.shared === "true",
        shareMode: modeSelect.value,
        targetStudentIds: selectedStudentIds(shareControl)
      });
    };

    shareControl.querySelector(".share-toggle-button").addEventListener("click", () => {
      const button = shareControl.querySelector(".share-toggle-button");
      button.dataset.shared = button.dataset.shared === "true" ? "false" : "true";
      saveSettings();
    });

    modeSelect.addEventListener("change", () => {
      studentList.classList.toggle("hidden", modeSelect.value !== "selected");
      saveSettings();
    });

    shareControl.querySelectorAll("input[data-student-share]").forEach((input) => {
      input.addEventListener("change", saveSettings);
    });
  });
}

function showCurriculumView(viewName) {
  curriculumHomePanel.classList.toggle("hidden", viewName !== "home");
  curriculumLessonPanel.classList.toggle("hidden", viewName !== "unit");
  curriculumPreviewPanel.classList.toggle("hidden", viewName !== "preview");
}

async function loadCurriculum() {
  if (curriculumLibraries.length) {
    renderCurriculum();
    return;
  }

  curriculumLibraries = window.PracticeStar.curriculumLibraries();
  if (curriculumLibraries.length) {
    await fillMissingFileBackedCurriculum();
    renderCurriculum();
    return;
  }

  curriculumSummary.textContent = "Loading curriculum...";
  try {
    const catalogResponse = await fetch("content/catalog.json");
    if (!catalogResponse.ok) {
      throw new Error("The curriculum catalog file could not be loaded.");
    }
    const catalog = await catalogResponse.json();
    curriculumLibraries = await Promise.all((catalog.libraries || []).map(loadCurriculumLibraryFromFiles));
    renderCurriculum();
  } catch (_error) {
    curriculumSummary.textContent =
      "Curriculum is ready in the project files, but this browser could not load it from the local file. It should load once the site is opened from GitHub or a web host.";
    curriculumUnits.innerHTML = "";
    showCurriculumView("home");
  }
}

async function fillMissingFileBackedCurriculum() {
  const librariesToLoad = curriculumLibraries.filter((library) =>
    library.indexFile && (!library.units || library.units.length === 0)
  );

  if (!librariesToLoad.length) {
    return;
  }

  const loadedLibraries = await Promise.all(librariesToLoad.map(async (library) => {
    try {
      return await loadCurriculumLibraryFromFiles(library);
    } catch (_error) {
      return library;
    }
  }));

  curriculumLibraries = curriculumLibraries.map((library) =>
    loadedLibraries.find((loadedLibrary) => loadedLibrary.id === library.id) || library
  );
}

async function loadCurriculumLibraryFromFiles(library) {
  const indexResponse = await fetch(library.indexFile);
  if (!indexResponse.ok) {
    throw new Error(`${library.title} index could not be loaded.`);
  }
  const curriculumIndex = await indexResponse.json();
  const basePath = library.basePath || library.indexFile.split("/").slice(0, -1).join("/");
  const units = await Promise.all((curriculumIndex.units || []).map(async (unit) => {
    if (!unit.file) {
      return unit;
    }
    const unitResponse = await fetch(`${basePath}/${unit.file}`);
    if (!unitResponse.ok) {
      throw new Error(`${unit.title} could not be loaded.`);
    }
    return unitResponse.json();
  }));
  return {
    ...library,
    subject: curriculumIndex.subject || library.subject,
    grade: curriculumIndex.grade || library.grade,
    title: curriculumIndex.title || library.title,
    units
  };
}

function renderCurriculum() {
  showCurriculumView("home");
  ensureActiveCurriculumSelection();
  renderCurriculumControls();

  const library = activeCurriculumLibrary();
  const units = library?.units || [];
  const lessonCount = units.reduce((total, unit) => total + (unit.lessons || []).length, 0);
  const isShellLibrary = library?.status === "shell";

  if (!library) {
    curriculumSummary.textContent = "Choose a grade and subject to browse the curriculum library.";
    curriculumUnits.innerHTML = "";
    return;
  }

  curriculumSummary.textContent = isShellLibrary
    ? `${library.subject} - Grade ${library.grade}: ${units.length} collections and ${lessonCount} planned items.`
    : units.length
    ? `${library.subject} - Grade ${library.grade}: ${units.length} units and ${lessonCount} lessons, reviews, and tests.`
    : `${library.subject} - Grade ${library.grade}: planned curriculum shell. Units and lessons will be added next.`;

  if (!units.length) {
    curriculumUnits.innerHTML = `
      <article class="unit-card planned-subject-card">
        <div>
          <span class="stage-pill">Planned</span>
          <p class="hint">${window.PracticeStar.escapeHtml(library.subject)} - Grade ${window.PracticeStar.escapeHtml(library.grade)}</p>
          <h3>${window.PracticeStar.escapeHtml(library.title || library.subject)}</h3>
          <p>${window.PracticeStar.escapeHtml(library.description || "This subject is ready for unit planning.")}</p>
          <p class="hint">This tab is a placeholder so the site structure can grow one subject at a time.</p>
        </div>
      </article>
    `;
    return;
  }

  curriculumUnits.innerHTML = units
    .map((unit, index) => ({ library, unit, index }))
    .map(({ library, unit, index }) => `
      <article class="unit-card">
        <div>
          <span class="stage-pill">${unit.strand}</span>
          <p class="hint">${window.PracticeStar.escapeHtml(library.subject)} - Grade ${window.PracticeStar.escapeHtml(library.grade)}</p>
          <h3>Unit ${index + 1}: ${window.PracticeStar.escapeHtml(unit.title)}</h3>
          <p>${window.PracticeStar.escapeHtml(unit.unitGoal || "Lesson details will be added as the curriculum library grows.")}</p>
          <p class="hint">${unit.lessons.length} ${library.status === "shell" ? "planned item" : "lesson"}${unit.lessons.length === 1 ? "" : "s"}${library.status === "shell" ? "" : ", reviews, and tests"}</p>
        </div>
        <button class="secondary view-unit-button" type="button" data-library-id="${library.id}" data-unit-id="${unit.id}">View Lessons</button>
      </article>
    `)
    .join("");

  document.querySelectorAll(".view-unit-button").forEach((button) => {
    button.addEventListener("click", () => {
      renderCurriculumUnit(button.dataset.libraryId, button.dataset.unitId);
    });
  });
}

function uniqueValues(values) {
  return Array.from(new Set(values.filter((value) => value !== "" && value !== null && value !== undefined)));
}

function curriculumGrades() {
  return uniqueValues(curriculumLibraries.map((library) => Number(library.grade))).sort((a, b) => a - b);
}

function curriculumSubjectsForGrade(grade) {
  return curriculumLibraries
    .filter((library) => Number(library.grade) === Number(grade))
    .map((library) => library.subject);
}

function activeCurriculumLibrary() {
  return curriculumLibraries.find((library) =>
    Number(library.grade) === Number(activeCurriculumGrade) &&
    library.subject === activeCurriculumSubject
  ) || null;
}

function ensureActiveCurriculumSelection() {
  const grades = curriculumGrades();
  if (!grades.includes(Number(activeCurriculumGrade))) {
    activeCurriculumGrade = grades[0] || 5;
  }

  const subjects = curriculumSubjectsForGrade(activeCurriculumGrade);
  if (!subjects.includes(activeCurriculumSubject)) {
    activeCurriculumSubject = subjects[0] || "";
  }
}

function renderCurriculumControls() {
  const grades = curriculumGrades();
  curriculumGradeTabs.innerHTML = grades
    .map((grade) => `
      <button
        class="pill-tab${Number(grade) === Number(activeCurriculumGrade) ? " active" : ""}"
        type="button"
        data-grade="${grade}"
        aria-pressed="${Number(grade) === Number(activeCurriculumGrade) ? "true" : "false"}"
      >Grade ${window.PracticeStar.escapeHtml(grade)}</button>
    `)
    .join("");

  const subjects = curriculumSubjectsForGrade(activeCurriculumGrade);
  curriculumSubjectTabs.innerHTML = subjects
    .map((subject, index) => `
      <button
        class="pill-tab${subject === activeCurriculumSubject ? " active" : ""}"
        type="button"
        data-subject-index="${index}"
        aria-pressed="${subject === activeCurriculumSubject ? "true" : "false"}"
      >${window.PracticeStar.escapeHtml(subject)}</button>
    `)
    .join("");

  curriculumGradeTabs.querySelectorAll("button[data-grade]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCurriculumGrade = Number(button.dataset.grade);
      activeCurriculumSubject = curriculumSubjectsForGrade(activeCurriculumGrade)[0] || "";
      renderCurriculum();
    });
  });

  curriculumSubjectTabs.querySelectorAll("button[data-subject-index]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCurriculumSubject = subjects[Number(button.dataset.subjectIndex)] || "";
      renderCurriculum();
    });
  });
}

function curriculumLibraryById(libraryId) {
  return curriculumLibraries.find((library) => library.id === libraryId) || null;
}

function curriculumUnitById(libraryId, unitId) {
  const library = curriculumLibraryById(libraryId);
  const unit = library?.units.find((item) => item.id === unitId);
  return { library, unit };
}

function curriculumLessonLabel(library, lesson) {
  if (library.status === "shell") {
    return lesson.status === "model" ? "Model lesson" : "Planned item";
  }

  if (lesson.type === "unitTest") {
    return "Unit Quiz";
  }

  if (lesson.type === "review") {
    return "Review";
  }

  return "Lesson";
}

function renderCurriculumUnit(libraryId, unitId) {
  const { library, unit } = curriculumUnitById(libraryId, unitId);
  if (!library || !unit) {
    return;
  }

  activeCurriculumUnitId = unit.id;
  activeCurriculumLibraryId = library.id;
  showCurriculumView("unit");
  curriculumUnitTitle.textContent = unit.title;
  curriculumUnitGoal.textContent = `${library.subject} - Grade ${library.grade}. ${unit.unitGoal || `${unit.strand} lessons.`}`;
  curriculumLessons.innerHTML = unit.lessons
    .map((lesson, index) => `
      <article class="lesson-row">
        <div>
          <strong>${index + 1}. ${window.PracticeStar.escapeHtml(lesson.title)}</strong>
          <p class="hint">${curriculumLessonLabel(library, lesson)}</p>
        </div>
        <button class="secondary small-button preview-lesson-button" type="button" data-library-id="${library.id}" data-unit-id="${unit.id}" data-lesson-id="${lesson.id}">Preview</button>
      </article>
    `)
    .join("");

  document.querySelectorAll(".preview-lesson-button").forEach((button) => {
    button.addEventListener("click", () => {
      renderCurriculumLessonPreview(button.dataset.libraryId, button.dataset.unitId, button.dataset.lessonId);
    });
  });
}

function renderListItems(items, emptyText) {
  if (!items || items.length === 0) {
    return `<p class="empty-note">${emptyText}</p>`;
  }

  return `<ul>${items.map((item) => `<li>${window.PracticeStar.escapeHtml(item)}</li>`).join("")}</ul>`;
}

function chartValue(value) {
  if (value === "" || value === null || value === undefined) {
    return "__";
  }
  return String(value);
}

function renderPlaceValueChart(step) {
  const chart = step.chart || step;
  return `
    <div class="place-value-chart" aria-label="Place value chart">
      <div>Hundreds</div>
      <div>Tens</div>
      <div>Ones</div>
      <strong>${window.PracticeStar.escapeHtml(chartValue(chart.hundreds))}</strong>
      <strong>${window.PracticeStar.escapeHtml(chartValue(chart.tens))}</strong>
      <strong>${window.PracticeStar.escapeHtml(chartValue(chart.ones))}</strong>
    </div>
  `;
}

function isScoredActivityStep(step) {
  return step?.kind === "question" || step?.kind === "spelling";
}

function renderSpellingStepPreview(step) {
  return `
    <div class="activity-spelling-preview">
      ${step.display ? `<span>${window.PracticeStar.escapeHtml(step.display)}</span>` : ""}
      ${step.sentence ? `<p>${window.PracticeStar.escapeHtml(step.sentence)}</p>` : ""}
      <p class="hint">Typed answer: ${window.PracticeStar.escapeHtml(step.correctAnswer || "")}</p>
    </div>
  `;
}

function renderActivityStep(step, index) {
  const choices = step.choices || [];
  const rewardClass = step.kind === "reward" ? " reward-step" : "";
  const spellingClass = step.kind === "spelling" ? " spelling-step" : "";
  return `
    <article class="activity-step-card${rewardClass}${spellingClass}">
      <span class="stage-pill">Step ${index + 1}</span>
      <h4>${window.PracticeStar.escapeHtml(step.title || "Activity Step")}</h4>
      ${step.number ? `<p class="activity-number">${step.number}</p>` : ""}
      ${step.kind === "build" || step.chart ? renderPlaceValueChart(step) : ""}
      ${step.prompt ? `<p><strong>${window.PracticeStar.escapeHtml(step.prompt)}</strong></p>` : ""}
      ${step.kind === "spelling" ? renderSpellingStepPreview(step) : ""}
      ${choices.length ? `
        <div class="activity-choice-preview">
          ${choices.map((choice) => `<span>${window.PracticeStar.escapeHtml(choice)}</span>`).join("")}
        </div>
      ` : ""}
      <p>${window.PracticeStar.escapeHtml(step.text || step.feedback || "")}</p>
    </article>
  `;
}

function groupActivityLevels(steps = []) {
  const levels = [];
  steps.forEach((step) => {
    const name = step.level || "Learning Mission";
    let level = levels.find((item) => item.name === name);
    if (!level) {
      level = { name, steps: [] };
      levels.push(level);
    }
    level.steps.push(step);
  });
  return levels;
}

function renderActivityLevel(level, index) {
  const scoredCount = level.steps.filter(isScoredActivityStep).length;
  return `
    <article class="activity-level-preview">
      <div class="activity-level-heading">
        <span class="stage-pill">Level ${index + 1}</span>
        <div>
          <h4>${window.PracticeStar.escapeHtml(level.name)}</h4>
          <p class="hint">${scoredCount || level.steps.length} practice step${(scoredCount || level.steps.length) === 1 ? "" : "s"} in this level</p>
        </div>
      </div>
      <div class="activity-step-grid">
        ${level.steps.map(renderActivityStep).join("")}
      </div>
    </article>
  `;
}

function renderStudentActivity(activity) {
  if (!activity) {
    return `<p>Student activity content will be added later.</p>`;
  }

  const levels = groupActivityLevels(activity.steps || []);
  const questionCount = (activity.steps || []).filter(isScoredActivityStep).length;
  return `
    <div class="student-activity-hero">
      <div>
        <span class="stage-pill">Student Mission</span>
        <h3>${window.PracticeStar.escapeHtml(activity.title || "Learning Mission")}</h3>
        <p>${window.PracticeStar.escapeHtml(activity.mission || "")}</p>
        <p class="hint">${levels.length} level${levels.length === 1 ? "" : "s"} - ${questionCount} practice step${questionCount === 1 ? "" : "s"} total</p>
      </div>
      <div class="reward-preview">
        <span>Tracks</span>
        <strong>Stars</strong>
      </div>
    </div>
    <details class="preview-details">
      <summary>Show level details</summary>
      <div class="activity-level-list">
        ${levels.map(renderActivityLevel).join("")}
      </div>
    </details>
  `;
}

function renderLessonQuiz(quiz) {
  if (!quiz?.questions?.length) {
    return `<p>Quiz content will be added later.</p>`;
  }

  const quizLabel = quiz.type === "unitTest" ? "unit quiz" : "lesson quiz";
  const sections = quiz.questions.reduce((allSections, question, index) => {
    const sectionName = question.section || "Final Quiz";
    let section = allSections.find((item) => item.name === sectionName);
    if (!section) {
      section = { name: sectionName, questions: [] };
      allSections.push(section);
    }
    section.questions.push({ ...question, number: index + 1 });
    return allSections;
  }, []);

  return `
    <h4>${window.PracticeStar.escapeHtml(quiz.title || "Lesson Quiz")}</h4>
    <p class="hint">${quiz.questions.length} questions - ${quizLabel}</p>
    <details class="preview-details">
      <summary>Show quiz questions and answers</summary>
      <div class="lesson-quiz-list">
        ${sections.map((section) => `
          <section class="quiz-preview-section">
            <h4>${window.PracticeStar.escapeHtml(section.name)}</h4>
            ${section.questions.map((question) => `
              <div class="question-row">
                <div>
                  <strong>${question.number}. ${window.PracticeStar.escapeHtml(question.prompt)}</strong>
                  ${question.type === "spelling" ? `<p class="hint">Typed spelling question</p>` : renderListItems(question.choices, "Choices will be added later.")}
                  <p class="hint">Answer: ${window.PracticeStar.escapeHtml(question.correctAnswer)}</p>
                </div>
              </div>
            `).join("")}
          </section>
        `).join("")}
      </div>
    </details>
  `;
}

function renderChristianTeacherNotes(lesson) {
  const bible = lesson.bibleConnection || {};
  return `
    <div class="preview-section christian-model-section">
      <span class="stage-pill">Model Lesson</span>
      <h3>Teacher Notes</h3>
      <p>${window.PracticeStar.escapeHtml(lesson.teacherOverview || "Teacher overview will be added later.")}</p>
      ${lesson.learningGoal ? `<p><strong>Learning goal:</strong> ${window.PracticeStar.escapeHtml(lesson.learningGoal)}</p>` : ""}
      ${lesson.christianFocus ? `<p><strong>Christian focus:</strong> ${window.PracticeStar.escapeHtml(lesson.christianFocus)}</p>` : ""}
      <p class="hint">This lesson is now built like the Math lessons: a shareable student mission plus a scored final quiz.</p>
    </div>
    <div class="preview-section">
      <h3>Optional Bible Connection</h3>
      <p><strong>${window.PracticeStar.escapeHtml(bible.reference || "Teacher-selected passage")}</strong></p>
      ${bible.teacherNote ? `<p>${window.PracticeStar.escapeHtml(bible.teacherNote)}</p>` : ""}
      ${bible.discussionPrompt ? `<p><strong>Discussion prompt:</strong> ${window.PracticeStar.escapeHtml(bible.discussionPrompt)}</p>` : ""}
    </div>
    <div class="preview-section">
      <h3>Privacy-Safe Reflection</h3>
      ${renderListItems(lesson.reflectionPrompts, "Reflection prompts will be added later.")}
      ${lesson.privacyNote ? `<p class="hint">${window.PracticeStar.escapeHtml(lesson.privacyNote)}</p>` : ""}
    </div>
    <div class="preview-section">
      <h3>Gentle Completion Check</h3>
      ${renderListItems(lesson.completionCheck, "Completion checks will be added later.")}
    </div>
    <div class="preview-section">
      <h3>Teacher Guardrails</h3>
      ${renderListItems(lesson.teacherGuardrails, "Teacher guardrails will be added later.")}
    </div>
    <div class="preview-section">
      <h3>Home Connection</h3>
      <p>${window.PracticeStar.escapeHtml(lesson.homeConnection || "Optional home connection will be added later.")}</p>
    </div>
  `;
}

function hasSavedAudienceSettings(assignment) {
  return Boolean(
    assignment?.id ||
    assignment?.isShared ||
    assignment?.shareMode === "selected" ||
    assignment?.targetStudentIds?.length ||
    assignment?.retakeStudentIds?.length
  );
}

function audienceSettingsFromAssignment(assignment) {
  return {
    isShared: assignment?.isShared === true,
    shareMode: assignment?.shareMode === "selected" ? "selected" : "all",
    targetStudentIds: Array.isArray(assignment?.targetStudentIds) ? assignment.targetStudentIds.filter(Boolean) : []
  };
}

async function renderCurriculumLessonPreview(libraryId, unitId, lessonId) {
  const { library, unit } = curriculumUnitById(libraryId, unitId);
  const lesson = unit?.lessons.find((item) => item.id === lessonId);
  if (!library || !unit || !lesson) {
    return;
  }

  const lessonType = lesson.type === "unitTest" ? "Unit Quiz" : lesson.type === "review" ? "Review" : "Lesson";
  const teacher = currentTeacher();
  const students = await window.PracticeStar.studentsForTeacher(teacher.id);
  await window.PracticeStar.syncContentAssignmentsForTeacher(teacher.id);
  const activityId = lesson.id;
  const legacyActivityId = `${lesson.id}:activity`;
  const quizId = `${lesson.id}:final-quiz`;
  let activityAssignment = window.PracticeStar.contentAssignmentForTeacher(teacher.id, activityId, "activity");
  let legacyActivityAssignment = window.PracticeStar.contentAssignmentForTeacher(teacher.id, legacyActivityId, "activity");
  if (!hasSavedAudienceSettings(activityAssignment) && hasSavedAudienceSettings(legacyActivityAssignment)) {
    await window.PracticeStar.setContentAssignment(
      teacher.id,
      activityId,
      "activity",
      audienceSettingsFromAssignment(legacyActivityAssignment)
    );
    activityAssignment = window.PracticeStar.contentAssignmentForTeacher(teacher.id, activityId, "activity");
    legacyActivityAssignment = window.PracticeStar.contentAssignmentForTeacher(teacher.id, legacyActivityId, "activity");
  }
  const visibleActivityAssignment = activityAssignment;
  const quizAssignment = window.PracticeStar.contentAssignmentForTeacher(teacher.id, quizId, "finalQuiz");
  activeCurriculumUnitId = unit.id;
  activeCurriculumLibraryId = library.id;
  showCurriculumView("preview");
  curriculumPreviewTitle.textContent = lesson.title;
  curriculumPreviewMeta.textContent = `${library.subject} - Grade ${library.grade} - ${unit.title} - ${lessonType}`;
  if (library.status === "shell") {
    if (lesson.status === "model" && (lesson.studentActivity || lesson.quiz?.questions?.length)) {
      const activitySection = lesson.studentActivity ? `
        <div class="preview-section student-preview-section">
          <h3>Ready-to-Share Student Activity</h3>
          ${renderAudienceControls({ ...visibleActivityAssignment, id: activityId, itemType: "activity" }, students, "activity")}
          ${renderStudentActivity(lesson.studentActivity)}
        </div>
      ` : "";
      const quizSection = lesson.quiz?.questions?.length ? `
        <div class="preview-section">
          <h3>${lesson.type === "unitTest" ? "Ready-to-Share Unit Quiz" : "Ready-to-Share Lesson Quiz"}</h3>
          ${renderAudienceControls({ ...quizAssignment, id: quizId, itemType: "finalQuiz" }, students, "finalQuiz")}
          ${renderLessonQuiz(lesson.quiz)}
        </div>
      ` : "";
      curriculumPreviewContent.innerHTML = `
        ${activitySection}
        ${quizSection}
      `;
      attachAudienceControlHandlers(curriculumPreviewContent, async ({ itemId, itemType, isShared, shareMode, targetStudentIds }) => {
        const teacher = currentTeacher();
        const settings = {
          isShared,
          shareMode,
          targetStudentIds
        };
        await window.PracticeStar.setContentAssignment(teacher.id, itemId, itemType, settings);
        if (itemType === "activity" && itemId === activityId) {
          await window.PracticeStar.setContentAssignment(teacher.id, legacyActivityId, itemType, settings);
        }
        await renderCurriculumLessonPreview(libraryId, unitId, lessonId);
      });
    } else {
      curriculumPreviewContent.innerHTML = `
        <div class="preview-section">
          <h3>Planned ${window.PracticeStar.escapeHtml(library.subject)} Item</h3>
          <p>${window.PracticeStar.escapeHtml(lesson.teacherOverview || "This planned item will be expanded into a teacher-previewed activity.")}</p>
          <p class="hint">This shell is not ready to share with students yet. Student prompts, Bible references, reflection settings, and privacy choices should be reviewed before assignment.</p>
        </div>
        <div class="preview-section">
          <h3>Christian Content Guardrails</h3>
          <ul>
            <li>Keep wording explicitly Christian, gracious, and age-appropriate.</li>
            <li>Do not grade private faith, prayer sincerity, or personal family beliefs.</li>
            <li>Keep Bible references and prayer wording editable for the teacher, family, church, or school context.</li>
            <li>Preview sensitive prompts before students see them.</li>
          </ul>
        </div>
      `;
    }
    return;
  }

  if (lesson.type === "unitTest") {
    curriculumPreviewContent.innerHTML = `
      <div class="preview-section">
        <h3>Unit Quiz</h3>
        ${renderAudienceControls({ ...quizAssignment, id: quizId, itemType: "finalQuiz" }, students, "finalQuiz")}
        ${renderLessonQuiz(lesson.quiz)}
      </div>
      <div class="preview-section">
        <h3>Teacher Summary</h3>
        <p>${window.PracticeStar.escapeHtml(lesson.teacherSummary || lesson.teacherOverview || "Teacher summary will be added later.")}</p>
      </div>
    `;
  } else {
    curriculumPreviewContent.innerHTML = `
      <div class="preview-section student-preview-section">
        <h3>Ready-to-Share Student Activity</h3>
        ${renderAudienceControls({ ...visibleActivityAssignment, id: activityId, itemType: "activity" }, students, "activity")}
        ${renderStudentActivity(lesson.studentActivity)}
      </div>
      <div class="preview-section">
        <h3>Ready-to-Share Lesson Quiz</h3>
        ${renderAudienceControls({ ...quizAssignment, id: quizId, itemType: "finalQuiz" }, students, "finalQuiz")}
        ${renderLessonQuiz(lesson.quiz)}
      </div>
      <div class="preview-section">
        <h3>Teacher Summary</h3>
        <p>${window.PracticeStar.escapeHtml(lesson.teacherSummary || lesson.teacherOverview || "Teacher summary will be added later.")}</p>
      </div>
    `;
  }

  attachAudienceControlHandlers(curriculumPreviewContent, async ({ itemId, itemType, isShared, shareMode, targetStudentIds }) => {
    const teacher = currentTeacher();
    const settings = {
      isShared,
      shareMode,
      targetStudentIds
    };
    await window.PracticeStar.setContentAssignment(teacher.id, itemId, itemType, settings);
    if (itemType === "activity" && itemId === activityId) {
      await window.PracticeStar.setContentAssignment(teacher.id, legacyActivityId, itemType, settings);
    }
    await renderCurriculumLessonPreview(libraryId, unitId, lessonId);
  });
}

function getBrowserLearningCheckpoints() {
  try {
    const progress = JSON.parse(window.localStorage.getItem("practiceStar2LearningProgressV2")) || {};
    return Object.entries(progress).map(([key, value]) => {
      const separatorIndex = key.indexOf(":");
      return {
        studentKey: separatorIndex >= 0 ? key.slice(0, separatorIndex) : "",
        activityId: value.activityId || (separatorIndex >= 0 ? key.slice(separatorIndex + 1) : ""),
        activityTitle: value.activityTitle || "Learning mission",
        earnedStars: Number(value.earnedStars) || 0,
        levelIndex: Number(value.levelIndex) || 0,
        stepIndex: Number(value.stepIndex) || 0,
        status: "in_progress",
        savedAt: value.savedAt,
        updatedAt: value.savedAt
      };
    });
  } catch (_error) {
    return [];
  }
}

function renderStudentReport(student, sessions, quizAttempts, learningAttempts, learningProgress, browserLearningCheckpoints) {
  const nameMatches = (value) => value?.toLowerCase() === student.name.toLowerCase();
  const studentLearning = learningAttempts.filter((attempt) => attempt.studentId === student.id || nameMatches(attempt.studentName));
  const completedActivityIds = new Set(studentLearning.map((attempt) => attempt.activityId));
  const savedLearningProgress = learningProgress.filter(
    (progress) => progress.studentId === student.id && progress.status !== "completed" && !completedActivityIds.has(progress.activityId)
  );
  const savedProgressIds = new Set(savedLearningProgress.map((progress) => progress.activityId));
  const studentBrowserProgress = browserLearningCheckpoints
    .filter((progress) =>
      (progress.studentKey === student.id || progress.studentKey.toLowerCase() === student.name.toLowerCase()) &&
      !completedActivityIds.has(progress.activityId) &&
      !savedProgressIds.has(progress.activityId)
    )
    .map((progress) => ({
      ...progress,
      studentId: student.id,
      studentName: student.name
    }));
  const studentLearningProgress = [...savedLearningProgress, ...studentBrowserProgress];
  const studentSessions = sessions.filter((session) => session.studentId === student.id || nameMatches(session.studentName));
  const studentQuizzes = quizAttempts.filter((attempt) => attempt.studentId === student.id || nameMatches(attempt.studentName));
  const starsEarned = studentLearning.reduce((sum, attempt) => sum + (Number(attempt.earnedStars) || 0), 0) +
    studentLearningProgress.reduce((sum, progress) => sum + (Number(progress.earnedStars) || 0), 0);
  const spellingPractices = studentSessions.reduce((sum, session) => sum + session.history.length, 0);
  const masteredForStudent = studentSessions.reduce(
    (sum, session) => sum + session.wordProgress.filter((word) => word.mastered).length,
    0
  );

  const progressDetails = studentLearningProgress.map((progress) => `
    <li>
      <strong>In progress: ${window.PracticeStar.escapeHtml(progress.activityTitle || "Learning mission")}</strong>
      <span>Level ${(Number(progress.levelIndex) || 0) + 1}, step ${(Number(progress.stepIndex) || 0) + 1}, ${progress.earnedStars} stars so far - saved ${window.PracticeStar.formatDateTime(progress.savedAt || progress.updatedAt)}</span>
    </li>
  `).join("");

  const completedLearningDetails = studentLearning.map((attempt) => `
        <li>
          <strong>${window.PracticeStar.escapeHtml(attempt.activityTitle || "Learning mission")}</strong>
          <span>${attempt.levelsCompleted} level${attempt.levelsCompleted === 1 ? "" : "s"}, ${attempt.totalQuestions} question${attempt.totalQuestions === 1 ? "" : "s"}, ${attempt.earnedStars} stars - ${window.PracticeStar.formatDateTime(attempt.createdAt)}</span>
        </li>
      `).join("");

  const learningDetails = progressDetails || completedLearningDetails
    ? `${progressDetails}${completedLearningDetails}`
    : `<li><span>No curriculum missions started yet.</span></li>`;

  const spellingDetails = studentSessions.length
    ? studentSessions.map((session) => {
      const mastered = session.wordProgress.filter((word) => word.mastered).length;
      const missed = session.wordProgress.filter((word) => word.missed > 0 && !word.mastered);
      const missedText = missed.length
        ? missed.map((item) => window.PracticeStar.escapeHtml(item.word)).join(", ")
        : "No current trouble words";
      return `
        <li>
          <strong>${window.PracticeStar.escapeHtml(session.listName)}</strong>
          <span>${session.history.length} practice session${session.history.length === 1 ? "" : "s"}, mastered ${mastered} of ${session.wordProgress.length}. Needs review: ${missedText}.</span>
        </li>
      `;
    }).join("")
    : `<li><span>No spelling practice yet.</span></li>`;

  const quizDetails = studentQuizzes.length
    ? studentQuizzes.map((attempt) => {
      const quiz = window.PracticeStar.getQuizById(attempt.quizId);
      const percent = attempt.percent || Math.round((attempt.score / attempt.total) * 100);
      const reviewNotes = attempt.reviewNotes?.length
        ? ` Review: ${attempt.reviewNotes.map((note) => window.PracticeStar.escapeHtml(note.section || note.note || "Missed question")).join("; ")}.`
        : "";
      return `
        <li>
          <strong>${window.PracticeStar.escapeHtml(attempt.quizTitle || quiz?.title || "Quiz")}</strong>
          <span>${percent}% - ${attempt.score} of ${attempt.total} - ${window.PracticeStar.formatDateTime(attempt.createdAt)}.${reviewNotes}</span>
          ${attempt.isFinalLessonQuiz ? `<button class="secondary small-button allow-retake-button" type="button" data-student-id="${student.id}" data-quiz-id="${window.PracticeStar.escapeHtml(attempt.quizId)}">Allow Re-do</button>` : ""}
        </li>
      `;
    }).join("")
    : `<li><span>No quiz attempts yet.</span></li>`;

  return `
    <div class="student-report-panel hidden" id="student-report-${student.id}">
      <div class="student-report-header">
        <div>
          <h4>${window.PracticeStar.escapeHtml(student.name)}'s Report</h4>
          <p class="hint">Curriculum missions, spelling practice, quizzes, and stars earned.</p>
        </div>
        <div class="student-report-stars">
          <span>${starsEarned}</span>
          <p>stars earned</p>
        </div>
      </div>
      <div class="student-report-metrics">
        <div><strong>${studentLearning.length + studentLearningProgress.length}</strong><span>missions</span></div>
        <div><strong>${spellingPractices}</strong><span>spelling sessions</span></div>
        <div><strong>${studentQuizzes.length}</strong><span>quiz attempts</span></div>
        <div><strong>${masteredForStudent}</strong><span>words mastered</span></div>
      </div>
      <div class="student-report-sections">
        <section>
          <h4>Curriculum Work</h4>
          <ul>${learningDetails}</ul>
        </section>
        <section>
          <h4>Spelling Practice</h4>
          <ul>${spellingDetails}</ul>
        </section>
        <section>
          <h4>Quizzes</h4>
          <ul>${quizDetails}</ul>
        </section>
      </div>
    </div>
  `;
}

async function renderStudentRoster() {
  const teacher = currentTeacher();
  studentRosterList.innerHTML = `<p class="empty-note">Loading students...</p>`;
  const students = await window.PracticeStar.studentsForTeacher(teacher.id);
  const sessions = window.PracticeStar.sessionsForTeacher(teacher.id);
  const quizAttempts = await window.PracticeStar.quizAttemptsForTeacher(teacher.id);
  const learningAttempts = await window.PracticeStar.learningAttemptsForTeacher(teacher.id);
  const learningProgress = await window.PracticeStar.learningProgressForTeacher(teacher.id);
  const browserLearningCheckpoints = getBrowserLearningCheckpoints();

  if (students.length === 0) {
    studentRosterList.innerHTML = `<p class="empty-note">No students yet. Add students before sharing the code.</p>`;
    return;
  }

  studentRosterList.innerHTML = students
    .map((student) => `
      <article class="student-card">
        <div>
          <h3>${window.PracticeStar.escapeHtml(student.name)}</h3>
          <p class="hint">Give this student the class code and their PIN.</p>
        </div>
        <div class="code-box compact-code">
          <span>PIN</span>
          <strong>${student.pin}</strong>
          <button class="secondary view-student-report-button" type="button" data-student-id="${student.id}" aria-expanded="false" aria-controls="student-report-${student.id}">View Report</button>
          <button class="danger remove-student-button" type="button" data-student-id="${student.id}">Remove</button>
        </div>
        ${renderStudentReport(student, sessions, quizAttempts, learningAttempts, learningProgress, browserLearningCheckpoints)}
      </article>
    `)
    .join("");

  document.querySelectorAll(".view-student-report-button").forEach((button) => {
    button.addEventListener("click", () => {
      const report = document.querySelector(`#student-report-${button.dataset.studentId}`);
      const isOpening = report.classList.contains("hidden");
      report.classList.toggle("hidden", !isOpening);
      button.setAttribute("aria-expanded", String(isOpening));
      button.textContent = isOpening ? "Hide Report" : "View Report";
    });
  });

  document.querySelectorAll(".remove-student-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const teacher = currentTeacher();
      const removed = await window.PracticeStar.removeStudent(teacher.id, button.dataset.studentId);
      rosterStatus.textContent = removed ? "Student removed." : "Could not remove that student.";
      await renderStudentRoster();
    });
  });

  document.querySelectorAll(".allow-retake-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const teacher = currentTeacher();
      await window.PracticeStar.allowFinalQuizRetake(teacher.id, button.dataset.quizId, button.dataset.studentId);
      rosterStatus.textContent = "That final quiz is open for a re-do.";
      await renderStudentRoster();
    });
  });
}

async function renderLists() {
  const teacher = currentTeacher();
  await window.PracticeStar.syncWordListsForTeacher(teacher.id);
  const lists = window.PracticeStar.listsForTeacher(teacher.id);
  const students = await window.PracticeStar.studentsForTeacher(teacher.id);

  if (lists.length === 0) {
    wordListCards.innerHTML = `<p class="empty-note">No lists yet. Create your first spelling list above.</p>`;
    return;
  }

  wordListCards.innerHTML = lists
    .map((list) => {
      const words = list.words.map((word) => window.PracticeStar.escapeHtml(word)).join(", ");
      const isShared = list.isShared === true;
      return `
        <article class="list-card">
          <div>
            <h3>${window.PracticeStar.escapeHtml(list.name)}</h3>
            <p class="hint">${list.words.length} word${list.words.length === 1 ? "" : "s"} - ${isShared ? "Shared" : "Not shared"}</p>
            <p>${words}</p>
          </div>
          <div class="share-card-actions">
            <button class="secondary edit-list-button" type="button" data-list-id="${list.id}">Edit</button>
            ${renderAudienceControls(list, students, "list")}
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".edit-list-button").forEach((button) => {
    button.addEventListener("click", () => {
      const list = lists.find((item) => item.id === button.dataset.listId);
      if (!list) {
        return;
      }
      activeListId.value = list.id;
      wordListName.value = list.name;
      wordListWords.value = list.words.join("\n");
      deleteListButton.disabled = false;
      teacherStatus.textContent = `Editing ${list.name}.`;
      wordListName.focus();
    });
  });

  attachAudienceControlHandlers(wordListCards, async ({ itemId, isShared, shareMode, targetStudentIds }) => {
    const teacher = currentTeacher();
    await window.PracticeStar.setWordListSharing(teacher.id, itemId, isShared);
    await window.PracticeStar.setWordListAudience(teacher.id, itemId, shareMode, targetStudentIds);
    await renderLists();
  });
}

function updateCorrectAnswerChoices() {
  const type = questionType.value;
  choiceFields.classList.toggle("hidden", type === "trueFalse");

  if (type === "trueFalse") {
    const trueFalseCount = draftQuestions.filter((question) => question.type === "trueFalse").length;
    const defaultAnswer = trueFalseCount % 2 === 0 ? "True" : "False";
    correctAnswer.innerHTML = `
      <option value="True" ${defaultAnswer === "True" ? "selected" : ""}>True</option>
      <option value="False" ${defaultAnswer === "False" ? "selected" : ""}>False</option>
    `;
    return;
  }

  correctAnswer.innerHTML = `
    <option value="">Choose the correct choice</option>
    <option value="0">Choice 1</option>
    <option value="1">Choice 2</option>
    <option value="2">Choice 3</option>
    <option value="3">Choice 4</option>
  `;
}

function clearQuestionForm() {
  questionPrompt.value = "";
  choiceInputs.forEach((input) => {
    input.value = "";
  });
  questionType.value = "multipleChoice";
  updateCorrectAnswerChoices();
  questionPrompt.focus();
}

function renderDraftQuestions() {
  if (draftQuestions.length === 0) {
    questionList.innerHTML = `<p class="empty-note">No questions added yet.</p>`;
    return;
  }

  questionList.innerHTML = draftQuestions
    .map((question, index) => `
      <div class="question-row">
        <div>
          <strong>${index + 1}. ${window.PracticeStar.escapeHtml(question.prompt)}</strong>
          <p class="hint">${question.type === "trueFalse" ? "True/false" : "Multiple choice"} - Answer: ${window.PracticeStar.escapeHtml(question.correctAnswer)}</p>
        </div>
        <button class="danger remove-question-button" type="button" data-index="${index}">Remove</button>
      </div>
    `)
    .join("");

  document.querySelectorAll(".remove-question-button").forEach((button) => {
    button.addEventListener("click", () => {
      draftQuestions.splice(Number(button.dataset.index), 1);
      renderDraftQuestions();
    });
  });
}

function addQuestion() {
  const type = questionType.value;
  const prompt = questionPrompt.value.trim();

  if (!prompt) {
    quizStatus.textContent = "Enter a question.";
    questionPrompt.focus();
    return;
  }

  if (type === "trueFalse") {
    draftQuestions.push({
      type,
      prompt,
      choices: ["True", "False"],
      correctAnswer: correctAnswer.value
    });
    quizStatus.textContent = "Question added.";
    clearQuestionForm();
    renderDraftQuestions();
    return;
  }

  const choices = window.PracticeStar.uniqueWords(choiceInputs.map((input) => input.value.trim()).filter(Boolean));
  if (choices.length < 2) {
    quizStatus.textContent = "Add at least two choices.";
    return;
  }

  if (correctAnswer.value === "") {
    quizStatus.textContent = "Choose the correct answer.";
    return;
  }

  const correctChoice = choiceInputs[Number(correctAnswer.value)]?.value.trim() || "";
  if (!correctChoice) {
    quizStatus.textContent = "Fill in the choice you marked as correct.";
    return;
  }

  draftQuestions.push({
    type,
    prompt,
    choices,
    correctAnswer: correctChoice
  });
  quizStatus.textContent = "Question added.";
  clearQuestionForm();
  renderDraftQuestions();
}

function clearQuizForm() {
  activeQuizId.value = "";
  quizTitle.value = "";
  draftQuestions = [];
  deleteQuizButton.disabled = true;
  quizStatus.textContent = "";
  clearQuestionForm();
  renderDraftQuestions();
  quizTitle.focus();
}

function updateQuizLibraryState(quizCount) {
  quizLibraryQuizCount = quizCount;
  const canCollapse = quizCount > 1;

  if (!canCollapse) {
    isQuizLibraryCollapsed = false;
  }

  quizLibraryPanel.classList.toggle("is-collapsible", canCollapse);
  quizLibraryPanel.classList.toggle("is-collapsed", canCollapse && isQuizLibraryCollapsed);
  quizLibraryToggle.hidden = !canCollapse;
  quizLibraryToggle.textContent = isQuizLibraryCollapsed ? "Show extra practice quizzes" : "Hide extra practice quizzes";
  quizLibraryToggle.setAttribute("aria-expanded", String(!isQuizLibraryCollapsed));

  if (quizCount === 0) {
    quizLibraryCount.textContent = "No extra practice quizzes yet.";
  } else if (quizCount === 1) {
    quizLibraryCount.textContent = "1 extra practice quiz saved.";
  } else {
    quizLibraryCount.textContent = `${quizCount} extra practice quizzes saved.`;
  }
}

async function renderQuizCards() {
  const teacher = currentTeacher();
  await window.PracticeStar.syncQuizzesForTeacher(teacher.id);
  const quizzes = window.PracticeStar.quizzesForTeacher(teacher.id);
  const students = await window.PracticeStar.studentsForTeacher(teacher.id);
  updateQuizLibraryState(quizzes.length);

  if (quizzes.length === 0) {
    quizCards.innerHTML = `<p class="empty-note">No extra practice quizzes yet. Create your first one above.</p>`;
    return;
  }

  quizCards.innerHTML = quizzes
    .map((quiz) => {
      const isShared = quiz.isShared === true;
      return `
      <article class="list-card">
        <div>
          <h3>${window.PracticeStar.escapeHtml(quiz.title)}</h3>
          <p class="hint">${quiz.questions.length} question${quiz.questions.length === 1 ? "" : "s"} - ${isShared ? "Shared" : "Not shared"}</p>
          <p>Students find shared extra practice quizzes with your student code.</p>
        </div>
        <div class="share-card-actions">
          <button class="secondary edit-quiz-button" type="button" data-quiz-id="${quiz.id}">Edit</button>
          ${renderAudienceControls(quiz, students, "quiz")}
        </div>
      </article>
    `;
    })
    .join("");

  document.querySelectorAll(".edit-quiz-button").forEach((button) => {
    button.addEventListener("click", () => {
      const quiz = quizzes.find((item) => item.id === button.dataset.quizId);
      if (!quiz) {
        return;
      }
      activeQuizId.value = quiz.id;
      quizTitle.value = quiz.title;
      draftQuestions = quiz.questions.map((question) => ({ ...question }));
      deleteQuizButton.disabled = false;
      quizStatus.textContent = `Editing extra practice quiz: ${quiz.title}.`;
      renderDraftQuestions();
      quizTitle.focus();
    });
  });

  attachAudienceControlHandlers(quizCards, async ({ itemId, isShared, shareMode, targetStudentIds }) => {
    const teacher = currentTeacher();
    const sharedQuiz = await window.PracticeStar.setQuizSharing(teacher.id, itemId, isShared);
    await window.PracticeStar.setQuizAudience(teacher.id, sharedQuiz?.id || itemId, shareMode, targetStudentIds);
    await renderQuizCards();
  });
}

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!appIsReady()) {
    return;
  }
  authMessage.textContent = "Checking account...";
  try {
    const result = await window.PracticeStar.createTeacher(signupEmail.value, signupPassword.value);
    if (result.ok) {
      signupForm.reset();
      loginForm.reset();
    }
    await renderTeacherPage(result.message);
  } catch (error) {
    authMessage.textContent = `Account setup error: ${error.message}`;
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!appIsReady()) {
    return;
  }
  authMessage.textContent = "Logging in...";
  try {
    const result = await window.PracticeStar.loginTeacher(loginEmail.value, loginPassword.value);
    if (result.ok) {
      loginForm.reset();
    }
    await renderTeacherPage(result.message);
  } catch (error) {
    authMessage.textContent = `Login error: ${error.message}`;
  }
});

logoutButton.addEventListener("click", async () => {
  await window.PracticeStar.logoutTeacher();
  clearListForm();
  clearQuizForm();
  await renderTeacherPage("Logged out.");
});

studentRosterForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const teacher = currentTeacher();
  const result = await window.PracticeStar.addStudent(teacher?.id, rosterStudentName.value);
  rosterStatus.textContent = result.message;
  if (result.ok) {
    rosterStudentName.value = "";
    await renderStudentRoster();
  }
});

teacherWordListForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const teacher = currentTeacher();
  const result = await window.PracticeStar.saveWordList({
    teacherId: teacher?.id,
    listId: activeListId.value,
    name: wordListName.value,
    words: window.PracticeStar.parseWords(wordListWords.value)
  });

  teacherStatus.textContent = result.message;
  if (result.ok) {
    activeListId.value = result.list.id;
    deleteListButton.disabled = false;
    await renderLists();
  }
});

newListButton.addEventListener("click", clearListForm);

deleteListButton.addEventListener("click", async () => {
  const teacher = currentTeacher();
  if (!activeListId.value) {
    teacherStatus.textContent = "Choose a list to delete first.";
    return;
  }

  const deleted = await window.PracticeStar.deleteWordList(teacher.id, activeListId.value);
  clearListForm();
  teacherStatus.textContent = deleted ? "List deleted." : "Could not delete that list.";
  await renderLists();
});

questionType.addEventListener("change", updateCorrectAnswerChoices);
dashboardTabButtons.forEach((button) => {
  button.addEventListener("click", () => showDashboardTab(button.id));
});
backToCurriculumButton.addEventListener("click", () => {
  activeCurriculumUnitId = "";
  activeCurriculumLibraryId = "";
  showCurriculumView("home");
});
backToUnitButton.addEventListener("click", () => {
  if (activeCurriculumLibraryId && activeCurriculumUnitId) {
    renderCurriculumUnit(activeCurriculumLibraryId, activeCurriculumUnitId);
    return;
  }
  showCurriculumView("home");
});
addQuestionButton.addEventListener("click", addQuestion);
clearQuestionButton.addEventListener("click", clearQuestionForm);
newQuizButton.addEventListener("click", clearQuizForm);
quizLibraryToggle.addEventListener("click", () => {
  if (quizLibraryQuizCount <= 1) {
    return;
  }
  isQuizLibraryCollapsed = !isQuizLibraryCollapsed;
  updateQuizLibraryState(quizLibraryQuizCount);
});

quizForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const teacher = currentTeacher();
  const result = await window.PracticeStar.saveQuiz({
    teacherId: teacher?.id,
    quizId: activeQuizId.value,
    title: quizTitle.value,
    questions: draftQuestions
  });

  quizStatus.textContent = result.message;
  if (result.ok) {
    activeQuizId.value = result.quiz.id;
    deleteQuizButton.disabled = false;
    await renderQuizCards();
  }
});

deleteQuizButton.addEventListener("click", async () => {
  const teacher = currentTeacher();
  if (!activeQuizId.value) {
    quizStatus.textContent = "Choose an extra practice quiz to delete first.";
    return;
  }
  const deleted = await window.PracticeStar.deleteQuiz(teacher.id, activeQuizId.value);
  clearQuizForm();
  quizStatus.textContent = deleted ? "Extra practice quiz deleted." : "Could not delete that extra practice quiz.";
  await renderQuizCards();
});

renderTeacherPage();
deleteListButton.disabled = true;
deleteQuizButton.disabled = true;
updateCorrectAnswerChoices();
renderDraftQuestions();
