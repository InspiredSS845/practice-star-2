const codeScreen = document.querySelector("#codeScreen");
const readyScreen = document.querySelector("#readyScreen");
const activityScreen = document.querySelector("#activityScreen");
const practiceScreen = document.querySelector("#practiceScreen");
const resultsScreen = document.querySelector("#resultsScreen");
const quizScreen = document.querySelector("#quizScreen");
const quizResultsScreen = document.querySelector("#quizResultsScreen");
const learningScreen = document.querySelector("#learningScreen");
const rewardScreen = document.querySelector("#rewardScreen");
const studentCodeForm = document.querySelector("#studentCodeForm");
const studentCode = document.querySelector("#studentCode");
const studentName = document.querySelector("#studentName");
const studentPin = document.querySelector("#studentPin");
const rememberStudentLogin = document.querySelector("#rememberStudentLogin");
const forgetStudentLogin = document.querySelector("#forgetStudentLogin");
const studentMessage = document.querySelector("#studentMessage");
const readyTitle = document.querySelector("#readyTitle");
const readyDetails = document.querySelector("#readyDetails");
const continueNotice = document.querySelector("#continueNotice");
const continueButton = document.querySelector("#continueButton");
const startOverButton = document.querySelector("#startOverButton");
const activityTitle = document.querySelector("#activityTitle");
const activityDetails = document.querySelector("#activityDetails");
const studentProgressSummary = document.querySelector("#studentProgressSummary");
const activityList = document.querySelector("#activityList");
const studentLogoutButton = document.querySelector("#studentLogoutButton");
const wordNumber = document.querySelector("#wordNumber");
const totalWords = document.querySelector("#totalWords");
const progressBar = document.querySelector("#progressBar");
const scoreCount = document.querySelector("#scoreCount");
const levelPill = document.querySelector("#levelPill");
const clueLabel = document.querySelector("#clueLabel");
const wordClue = document.querySelector("#wordClue");
const practiceTip = document.querySelector("#practiceTip");
const answerForm = document.querySelector("#answerForm");
const answerInput = document.querySelector("#answerInput");
const checkButton = document.querySelector("#checkButton");
const feedback = document.querySelector("#feedback");
const resultTitle = document.querySelector("#resultTitle");
const finalScore = document.querySelector("#finalScore");
const resultsList = document.querySelector("#resultsList");
const practiceAgainButton = document.querySelector("#practiceAgainButton");
const doneButton = document.querySelector("#doneButton");
const quizQuestionNumber = document.querySelector("#quizQuestionNumber");
const quizTotalQuestions = document.querySelector("#quizTotalQuestions");
const quizProgressBar = document.querySelector("#quizProgressBar");
const quizScore = document.querySelector("#quizScore");
const quizTypeLabel = document.querySelector("#quizTypeLabel");
const quizPrompt = document.querySelector("#quizPrompt");
const quizChoices = document.querySelector("#quizChoices");
const quizFeedback = document.querySelector("#quizFeedback");
const quizNextButton = document.querySelector("#quizNextButton");
const quizResultTitle = document.querySelector("#quizResultTitle");
const quizFinalScore = document.querySelector("#quizFinalScore");
const quizResultsList = document.querySelector("#quizResultsList");
const quizDoneButton = document.querySelector("#quizDoneButton");
const finalQuizScreen = document.querySelector("#finalQuizScreen");
const finalQuizTitle = document.querySelector("#finalQuizTitle");
const finalQuizDetails = document.querySelector("#finalQuizDetails");
const finalQuizForm = document.querySelector("#finalQuizForm");
const learningStepNumber = document.querySelector("#learningStepNumber");
const learningTotalSteps = document.querySelector("#learningTotalSteps");
const learningProgressBar = document.querySelector("#learningProgressBar");
const learningStars = document.querySelector("#learningStars");
const learningLessonTitle = document.querySelector("#learningLessonTitle");
const learningLevelTitle = document.querySelector("#learningLevelTitle");
const learningCard = document.querySelector("#learningCard");
const learningExitButton = document.querySelector("#learningExitButton");
const rewardTitle = document.querySelector("#rewardTitle");
const rewardDetails = document.querySelector("#rewardDetails");
const starSummaryPreview = document.querySelector("#starSummaryPreview");
const rewardDoneButton = document.querySelector("#rewardDoneButton");

let activeList = null;
let activeSession = null;
let activeClass = null;
let activeQuiz = null;
let activeStudent = null;
let activeStudentName = "";
let quizIndex = 0;
let quizRunScore = 0;
let quizAnswered = false;
let quizAnswers = [];
let activeFinalQuiz = null;
let activeLearningActivity = null;
let activeLearningActivityId = "";
let learningStepIndex = 0;
let learningAnswered = false;
let learningEarnedStars = 0;
let selectedLearningChoice = "";
let learningNextButton = null;
let learningLevels = [];
let learningLevelIndex = 0;
let learningCurrentSteps = [];
let learningLevelCorrect = 0;
let learningLevelIncorrect = 0;
let learningMissedSteps = [];
let learningCurrentStepKeys = [];
let learningMissedStepKeys = [];
let learningCardMode = "question";
let learningCompletedSections = new Set();
let learningCanEarnStars = true;
let currentRun = null;
let answered = false;
let readyForNext = false;
const savedStudentLoginKey = "practiceStar2SavedStudentLogin";
const learningRewardsKey = "practiceStar2LearningRewardsV3";
const learningProgressKey = "practiceStar2LearningProgressV2";
const learningSectionStarBonus = 10;

function getSavedStudentLogin() {
  try {
    return JSON.parse(window.localStorage.getItem(savedStudentLoginKey)) || null;
  } catch (_error) {
    return null;
  }
}

function saveStudentLogin(code, name, pin) {
  window.localStorage.setItem(
    savedStudentLoginKey,
    JSON.stringify({ code, name, pin })
  );
  forgetStudentLogin.classList.remove("hidden");
}

function clearSavedStudentLogin() {
  window.localStorage.removeItem(savedStudentLoginKey);
  forgetStudentLogin.classList.add("hidden");
}

function getLearningRewards() {
  try {
    return JSON.parse(window.localStorage.getItem(learningRewardsKey)) || {};
  } catch (_error) {
    return {};
  }
}

function rewardClaimKey() {
  const studentKey = activeStudent?.id || activeStudentName || "student";
  return `${studentKey}:${activeLearningActivityId || activeLearningActivity?.title || "activity"}`;
}

function hasClaimedLearningReward() {
  return Boolean(getLearningRewards()[rewardClaimKey()]);
}

function markLearningRewardClaimed() {
  const rewards = getLearningRewards();
  rewards[rewardClaimKey()] = {
    claimedAt: new Date().toISOString(),
    activity: activeLearningActivity?.title || "",
    stars: learningEarnedStars
  };
  window.localStorage.setItem(learningRewardsKey, JSON.stringify(rewards));
}

function getLearningProgress() {
  try {
    return JSON.parse(window.localStorage.getItem(learningProgressKey)) || {};
  } catch (_error) {
    return {};
  }
}

function learningProgressClaimKey() {
  return rewardClaimKey();
}

function saveLearningProgress(mode = "question", savedStepIndex = learningStepIndex) {
  if (!activeLearningActivity || !activeLearningActivityId) {
    return;
  }

  const progress = getLearningProgress();
  progress[learningProgressClaimKey()] = {
    activityId: activeLearningActivityId,
    levelIndex: learningLevelIndex,
    stepIndex: savedStepIndex,
    earnedStars: learningEarnedStars,
    canEarnStars: learningCanEarnStars,
    completedSections: Array.from(learningCompletedSections),
    currentStepKeys: learningCurrentStepKeys,
    missedStepKeys: learningMissedStepKeys,
    levelCorrect: learningLevelCorrect,
    levelIncorrect: learningLevelIncorrect,
    mode,
    savedAt: new Date().toISOString()
  };
  window.localStorage.setItem(learningProgressKey, JSON.stringify(progress));
  window.PracticeStar.saveLearningProgress({
    teacherId: activeClass?.teacher?.id || activeStudent?.teacherId || "",
    studentId: activeStudent?.id || "",
    studentCode: activeClass?.code || activeClass?.teacher?.classCode || studentCode.value,
    studentPin: activeStudent?.pin || studentPin.value,
    studentName: activeStudent?.name || activeStudentName,
    activityId: activeLearningActivityId,
    activityTitle: activeLearningActivity.title || "Learning mission",
    levelIndex: learningLevelIndex,
    stepIndex: savedStepIndex,
    earnedStars: learningEarnedStars,
    completedSections: Array.from(learningCompletedSections),
    status: "in_progress"
  });
}

function getLearningCheckpoint() {
  return getLearningProgress()[learningProgressClaimKey()] || null;
}

function clearLearningProgress() {
  const progress = getLearningProgress();
  delete progress[learningProgressClaimKey()];
  window.localStorage.setItem(learningProgressKey, JSON.stringify(progress));
}

function fillStudentLogin({ code, name, pin }) {
  studentCode.value = code || "";
  studentName.value = name || "";
  studentPin.value = pin || "";
}

function logOutStudent(message = "Logged out.") {
  clearSavedStudentLogin();
  activeList = null;
  activeSession = null;
  activeClass = null;
  activeQuiz = null;
  activeStudent = null;
  activeStudentName = "";
  studentCodeForm.reset();
  rememberStudentLogin.checked = true;
  studentMessage.textContent = message;
  showScreen(codeScreen);
  studentCode.focus();
}

function showScreen(screen) {
  [codeScreen, readyScreen, activityScreen, practiceScreen, resultsScreen, quizScreen, quizResultsScreen, finalQuizScreen, learningScreen, rewardScreen].forEach((item) => {
    item.classList.toggle("active", item === screen);
  });
  document.body.classList.toggle("learning-mode", screen === learningScreen);
}

function pilotLearningActivities() {
  const lessons = window.PracticeStar.curriculumLibraries().flatMap((library) =>
    (library.units || []).flatMap((unit) =>
      (unit.lessons || []).map((lesson) => ({
      ...lesson,
      libraryId: library.id,
      unitTitle: unit.title,
      subject: library.subject,
      grade: library.grade
    }))
    )
  );

  return lessons
    .filter((lesson) => lesson.studentActivity)
    .map((lesson) => ({
      id: lesson.id,
      title: lesson.studentActivity.title,
      lessonTitle: lesson.title,
      unitTitle: lesson.unitTitle,
      subject: lesson.subject,
      grade: lesson.grade,
      activity: lesson.studentActivity
    }));
}

function pilotLessonQuizzes() {
  const lessons = window.PracticeStar.curriculumLibraries().flatMap((library) =>
    (library.units || []).flatMap((unit) =>
      (unit.lessons || []).map((lesson) => ({
      ...lesson,
      libraryId: library.id,
      unitTitle: unit.title
    }))
    )
  );

  return lessons
    .filter((lesson) => lesson.quiz?.questions?.length)
    .map((lesson) => {
      const quizId = `${lesson.id}:final-quiz`;
      return {
        id: quizId,
        lessonTitle: lesson.title,
        unitTitle: lesson.unitTitle,
        quiz: {
          ...lesson.quiz,
          id: quizId,
          teacherId: activeClass?.teacher?.id || activeStudent?.teacherId || "",
          lessonTitle: lesson.title,
          isFinalLessonQuiz: true
        }
      };
    });
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase();
}

function maskWord(word, level) {
  const letters = Array.from(word);
  if (level <= 0) {
    return word;
  }
  if (level === 1) {
    return letters
      .map((letter, index) => (index % 2 === 0 || letter === " " ? letter : "_"))
      .join("");
  }
  return "Write the word on your own.";
}

function stageForWord(progress) {
  if (progress.level >= 2) {
    return {
      level: 2,
      title: "No clues",
      clue: "Now write the word on your own.",
      display: maskWord(progress.word, 2),
      tip: "Try to remember the spelling from the first two tries."
    };
  }

  const labels = [
    "Copy the word",
    "Some letters hidden"
  ];
  const tips = [
    "Look carefully, then type the whole word.",
    "Use the visible letters to help your brain remember."
  ];

  return {
    level: progress.level,
    title: `Clue ${progress.level + 1}`,
    clue: labels[progress.level],
    display: maskWord(progress.word, progress.level),
    tip: tips[progress.level]
  };
}

function nextUnmasteredIndex(session) {
  const start = session.currentWordIndex || 0;
  const words = session.wordProgress;
  const fromCurrent = words.findIndex((word, index) => index >= start && !word.mastered);
  if (fromCurrent !== -1) {
    return fromCurrent;
  }
  return words.findIndex((word) => !word.mastered);
}

function beginRun(reset) {
  if (reset) {
    activeSession = window.PracticeStar.updateStudentSession(activeSession.id, (session) => {
      session.currentWordIndex = 0;
      session.completed = false;
      session.wordProgress = activeList.words.map((word) => ({
        word,
        level: 0,
        correct: 0,
        missed: 0,
        mastered: false,
        lastPracticedAt: null
      }));
      session.activeRun = null;
    });
  }

  activeSession = window.PracticeStar.updateStudentSession(activeSession.id, (session) => {
    session.activeRun = {
      startedAt: new Date().toISOString(),
      attempts: [],
      correct: 0,
      total: 0
    };
  });
  currentRun = activeSession.activeRun;
  showScreen(practiceScreen);
  showQuestion();
}

function refreshReadyScreen() {
  const remaining = activeSession.wordProgress.filter((word) => !word.mastered).length;
  const practiced = activeSession.history.length;
  readyTitle.textContent = `${activeList.name}`;
  readyDetails.textContent = `${activeList.words.length} spelling word${activeList.words.length === 1 ? "" : "s"} for ${activeSession.studentName}.`;

  if (practiced > 0 || activeSession.currentWordIndex > 0) {
    continueNotice.innerHTML = `
      <strong>Welcome back.</strong>
      You have ${remaining} word${remaining === 1 ? "" : "s"} still practicing.
      Practice sessions finished: ${practiced}.
    `;
    startOverButton.textContent = "Restart from Beginning";
    continueButton.classList.remove("hidden");
  } else {
    continueNotice.textContent = "This is a new practice list. Start when you are ready.";
    startOverButton.textContent = "Start Practice";
    continueButton.classList.add("hidden");
  }
}

function studentNameMatches(value) {
  return value?.toLowerCase() === activeStudentName.toLowerCase();
}

function progressForCurrentStudent() {
  const studentKey = activeStudent?.id || activeStudentName || "student";
  return Object.entries(getLearningProgress())
    .filter(([key, progress]) => key.startsWith(`${studentKey}:`) && progress?.activityId)
    .map(([, progress]) => progress);
}

function rewardsForCurrentStudent() {
  const studentKey = activeStudent?.id || activeStudentName || "student";
  return Object.entries(getLearningRewards())
    .filter(([key]) => key.startsWith(`${studentKey}:`))
    .map(([, reward]) => reward);
}

function renderStudentProgressSummary() {
  const sessions = window.PracticeStar.sessionsForTeacher(activeClass.teacher?.id || activeStudent?.teacherId || "")
    .filter((session) =>
      (activeStudent?.id && session.studentId === activeStudent.id) ||
      (!activeStudent?.id && studentNameMatches(session.studentName))
    );
  const localQuizAttempts = (window.PracticeStar.localQuizAttemptsForStudent?.(activeStudent?.id || "", activeStudentName) || []);
  const rewards = rewardsForCurrentStudent();
  const progress = progressForCurrentStudent();
  const completedStars = rewards.reduce((sum, reward) => sum + (Number(reward.stars) || 0), 0);
  const progressStars = progress.reduce((sum, item) => sum + (Number(item.earnedStars) || 0), 0);
  const spellingPractices = sessions.reduce((sum, session) => sum + session.history.length, 0);
  const masteredWords = sessions.reduce((sum, session) => sum + session.wordProgress.filter((word) => word.mastered).length, 0);
  const recentMissions = rewards.slice(-3).reverse();
  const recentQuizzes = localQuizAttempts.slice(0, 3);

  studentProgressSummary.innerHTML = `
    <div class="student-report-panel student-own-report">
      <div class="student-report-header">
        <div>
          <h4>${window.PracticeStar.escapeHtml(activeStudentName)}'s Progress</h4>
          <p class="hint">Stars, missions, spelling practice, and quizzes.</p>
        </div>
        <div class="student-report-stars">
          <span>${completedStars + progressStars}</span>
          <p>stars earned</p>
        </div>
      </div>
      <div class="student-report-metrics">
        <div><strong>${rewards.length}</strong><span>missions completed</span></div>
        <div><strong>${progress.length}</strong><span>missions in progress</span></div>
        <div><strong>${spellingPractices}</strong><span>spelling sessions</span></div>
        <div><strong>${localQuizAttempts.length}</strong><span>quiz attempts</span></div>
      </div>
      <div class="student-report-sections">
        <section>
          <h4>Curriculum Work</h4>
          <ul>
            ${recentMissions.length
              ? recentMissions.map((reward) => `<li><strong>${window.PracticeStar.escapeHtml(reward.activity || "Learning mission")}</strong><span>${reward.stars || 0} stars earned</span></li>`).join("")
              : `<li><span>No completed missions yet.</span></li>`}
            ${progress.length
              ? progress.slice(0, 2).map((item) => `<li><strong>In progress</strong><span>${item.earnedStars || 0} stars so far</span></li>`).join("")
              : ""}
          </ul>
        </section>
        <section>
          <h4>Spelling Practice</h4>
          <ul>
            ${sessions.length
              ? sessions.slice(0, 3).map((session) => {
                const mastered = session.wordProgress.filter((word) => word.mastered).length;
                return `<li><strong>${window.PracticeStar.escapeHtml(session.listName)}</strong><span>${mastered} of ${session.wordProgress.length} words mastered</span></li>`;
              }).join("")
              : `<li><span>No spelling practice yet.</span></li>`}
            ${masteredWords ? `<li><strong>Total mastered</strong><span>${masteredWords} word${masteredWords === 1 ? "" : "s"}</span></li>` : ""}
          </ul>
        </section>
        <section>
          <h4>Quizzes</h4>
          <ul>
            ${recentQuizzes.length
              ? recentQuizzes.map((attempt) => {
                const percent = attempt.percent || Math.round((attempt.score / attempt.total) * 100);
                return `<li><strong>${window.PracticeStar.escapeHtml(attempt.quizTitle || "Quiz")}</strong><span>${percent}% - ${attempt.score} of ${attempt.total}</span></li>`;
              }).join("")
              : `<li><span>No quiz attempts yet.</span></li>`}
          </ul>
        </section>
      </div>
    </div>
  `;
}

function renderActivities(classBundle, student) {
  activeClass = classBundle;
  activeStudent = student;
  activeStudentName = student.name;
  const teacherId = classBundle.teacher?.id || "";
  const learningActivities = pilotLearningActivities().filter((item) =>
    window.PracticeStar.contentItemIsSharedWithStudent(teacherId, item.id, "activity", student.id) ||
    window.PracticeStar.contentItemIsSharedWithStudent(teacherId, `${item.id}:activity`, "activity", student.id)
  );
  const lessonQuizzes = pilotLessonQuizzes().filter((item) =>
    window.PracticeStar.contentItemIsSharedWithStudent(teacherId, item.id, "finalQuiz", student.id)
  );
  const totalActivities = classBundle.lists.length + classBundle.quizzes.length + learningActivities.length + lessonQuizzes.length;
  activityTitle.textContent = "Class activities";
  activityDetails.textContent = `${totalActivities} activit${totalActivities === 1 ? "y" : "ies"} for ${student.name}.`;
  renderStudentProgressSummary();

  if (totalActivities === 0) {
    activityList.innerHTML = `<p class="empty-note">There are no activities for this code yet.</p>`;
    showScreen(activityScreen);
    return;
  }

  const spellingCards = classBundle.lists.map((list) => `
    <article class="activity-row">
      <div>
        <h3>${window.PracticeStar.escapeHtml(list.name)}</h3>
        <p class="hint">Spelling practice - ${list.words.length} word${list.words.length === 1 ? "" : "s"}</p>
      </div>
      <button class="start-activity-button" type="button" data-type="spelling" data-id="${list.id}">Start</button>
    </article>
  `);

  const quizCards = classBundle.quizzes.map((quiz) => `
    <article class="activity-row">
      <div>
        <h3>${window.PracticeStar.escapeHtml(quiz.title)}</h3>
        <p class="hint">Quiz - ${quiz.questions.length} question${quiz.questions.length === 1 ? "" : "s"}</p>
      </div>
      <button class="start-activity-button" type="button" data-type="quiz" data-id="${quiz.id}">Start</button>
    </article>
  `);

  const learningCards = learningActivities.map((item) => `
    <article class="activity-row learning-activity-row">
      <div>
        <h3>${window.PracticeStar.escapeHtml(item.lessonTitle)}: ${window.PracticeStar.escapeHtml(item.title)}</h3>
        <p class="hint">Learning mission - ${window.PracticeStar.escapeHtml(item.unitTitle)}</p>
      </div>
      <button class="start-activity-button" type="button" data-type="learning" data-id="${item.id}">${getLearningProgress()[`${activeStudent?.id || activeStudentName || "student"}:${item.id}`] ? "Continue" : "Start"}</button>
    </article>
  `);

  const finalQuizCards = lessonQuizzes.map((item) => {
    const priorAttempt = window.PracticeStar.quizAttemptForStudent(item.id, activeStudent?.id || "", activeStudentName);
    const canRetake = window.PracticeStar.finalQuizRetakeForStudent(activeClass.teacher?.id || "", item.id, activeStudent?.id || "");
    return `
      <article class="activity-row final-quiz-row">
        <div>
          <h3>${window.PracticeStar.escapeHtml(item.lessonTitle)}: ${window.PracticeStar.escapeHtml(item.quiz.title)}</h3>
          <p class="hint">Final lesson quiz - ${item.quiz.questions.length} questions - one scored attempt</p>
          ${priorAttempt && !canRetake ? `<p class="hint">Recorded score: ${Math.round((priorAttempt.score / priorAttempt.total) * 100)}%</p>` : ""}
          ${canRetake ? `<p class="hint">Your teacher opened this quiz for another try.</p>` : ""}
        </div>
        <button class="start-activity-button" type="button" data-type="finalQuiz" data-id="${item.id}" ${priorAttempt && !canRetake ? "disabled" : ""}>${priorAttempt && !canRetake ? "Completed" : "Start Final Quiz"}</button>
      </article>
    `;
  });

  activityList.innerHTML = [...learningCards, ...finalQuizCards, ...spellingCards, ...quizCards].join("");
  document.querySelectorAll(".start-activity-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.type === "learning") {
        activeLearningActivityId = button.dataset.id;
        activeLearningActivity = learningActivities.find((item) => item.id === button.dataset.id)?.activity;
        startLearningActivity();
        return;
      }

      if (button.dataset.type === "finalQuiz") {
        activeFinalQuiz = lessonQuizzes.find((item) => item.id === button.dataset.id)?.quiz;
        startFinalQuiz();
        return;
      }

      if (button.dataset.type === "spelling") {
        activeList = classBundle.lists.find((list) => list.id === button.dataset.id);
        activeSession = window.PracticeStar.getOrCreateStudentSession(activeList, activeStudentName, activeStudent.id);
        refreshReadyScreen();
        showScreen(readyScreen);
        return;
      }

      activeQuiz = classBundle.quizzes.find((quiz) => quiz.id === button.dataset.id);
      startQuiz();
    });
  });
  showScreen(activityScreen);
}

function learningChartValue(value) {
  if (value === "" || value === null || value === undefined) {
    return "__";
  }
  return String(value);
}

function renderLearningChart(step) {
  const chart = step.chart || step;
  return `
    <div class="place-value-chart learning-place-chart" aria-label="Place value chart">
      <div>Hundreds</div>
      <div>Tens</div>
      <div>Ones</div>
      <strong>${window.PracticeStar.escapeHtml(learningChartValue(chart.hundreds))}</strong>
      <strong>${window.PracticeStar.escapeHtml(learningChartValue(chart.tens))}</strong>
      <strong>${window.PracticeStar.escapeHtml(learningChartValue(chart.ones))}</strong>
    </div>
  `;
}

function shuffledLearningChoices(choices) {
  const shuffled = [...choices];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function groupLearningLevels(steps) {
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

function learningStepKey(levelIndex, step) {
  return learningLevels[levelIndex]?.steps.indexOf(step) ?? -1;
}

function learningStepsFromKeys(levelIndex, keys) {
  return (keys || [])
    .map((key) => learningLevels[levelIndex]?.steps[key])
    .filter(Boolean);
}

function startLearningActivity() {
  learningLevels = groupLearningLevels(activeLearningActivity.steps || []);
  learningLevelIndex = 0;
  learningEarnedStars = 0;
  learningCompletedSections = new Set();
  learningCanEarnStars = !hasClaimedLearningReward();
  showScreen(learningScreen);
  requestAnimationFrame(() => {
    learningScreen.scrollIntoView({ block: "start" });
  });
  const checkpoint = getLearningCheckpoint();
  if (checkpoint?.activityId === activeLearningActivityId) {
    restoreLearningProgress(checkpoint);
    return;
  }
  startLearningLevel(0, learningLevels[0]?.steps || []);
}

function startLearningLevel(levelIndex, steps, stepKeys = null) {
  learningLevelIndex = levelIndex;
  learningCurrentSteps = steps;
  learningCurrentStepKeys = stepKeys || steps.map((step) => learningStepKey(levelIndex, step));
  learningStepIndex = 0;
  learningLevelCorrect = 0;
  learningLevelIncorrect = 0;
  learningMissedSteps = [];
  learningMissedStepKeys = [];
  learningAnswered = false;
  selectedLearningChoice = "";
  learningCardMode = "question";
  saveLearningProgress();
  showLearningStep();
}

function restoreLearningProgress(checkpoint) {
  learningLevelIndex = Math.min(checkpoint.levelIndex || 0, learningLevels.length - 1);
  learningCurrentStepKeys = checkpoint.currentStepKeys?.length
    ? checkpoint.currentStepKeys
    : learningLevels[learningLevelIndex]?.steps.map((_step, index) => index) || [];
  learningCurrentSteps = learningStepsFromKeys(learningLevelIndex, learningCurrentStepKeys);
  learningStepIndex = Math.min(checkpoint.stepIndex || 0, Math.max(learningCurrentSteps.length - 1, 0));
  learningEarnedStars = checkpoint.earnedStars || 0;
  learningCanEarnStars = Boolean(checkpoint.canEarnStars) && !hasClaimedLearningReward();
  learningCompletedSections = new Set(checkpoint.completedSections || []);
  learningLevelCorrect = checkpoint.levelCorrect || 0;
  learningLevelIncorrect = checkpoint.levelIncorrect || 0;
  learningMissedStepKeys = checkpoint.missedStepKeys || [];
  learningMissedSteps = learningStepsFromKeys(learningLevelIndex, learningMissedStepKeys);
  learningAnswered = false;
  selectedLearningChoice = "";
  learningCardMode = "question";
  if (checkpoint.mode === "summary" || learningStepIndex >= learningCurrentSteps.length) {
    showLearningLevelSummary();
    return;
  }
  showLearningStep();
}

function showLearningStep() {
  const steps = learningCurrentSteps;
  const step = steps[learningStepIndex];
  const isQuestion = step.kind === "question";
  learningAnswered = false;
  selectedLearningChoice = "";
  learningCardMode = "question";
  learningStepNumber.textContent = String(learningStepIndex + 1);
  learningTotalSteps.textContent = String(steps.length);
  learningProgressBar.style.width = `${(learningStepIndex / steps.length) * 100}%`;
  learningStars.textContent = String(learningEarnedStars);
  learningLessonTitle.textContent = activeLearningActivity.title || "Place Value";
  learningLevelTitle.textContent = step.level || "Learning Mission";
  const actionText = isQuestion ? "Submit" : "Next";
  const displayChoices = step.choices ? shuffledLearningChoices(step.choices) : [];
  learningCard.className = `learning-card${step.kind === "build" || step.chart ? " learning-card-chart" : ""}`;

  learningCard.innerHTML = `
    <h2>${window.PracticeStar.escapeHtml(step.title)}</h2>
    ${step.number ? `<p class="activity-number">${step.number}</p>` : ""}
    ${step.kind === "build" || step.chart ? renderLearningChart(step) : ""}
    ${step.prompt ? `<p class="learning-prompt">${window.PracticeStar.escapeHtml(step.prompt)}</p>` : ""}
    ${step.choices ? `
      <div class="choice-grid">
        ${displayChoices.map((choice) => `<button class="learning-choice-button choice-button" type="button" data-choice="${window.PracticeStar.escapeHtml(choice)}">${window.PracticeStar.escapeHtml(choice)}</button>`).join("")}
      </div>
    ` : ""}
    <p>${window.PracticeStar.escapeHtml(step.text || "")}</p>
    <div class="learning-card-actions">
      <button id="learningNextButton" type="button" ${isQuestion ? "disabled" : ""}>${actionText}</button>
    </div>
  `;

  document.querySelectorAll(".learning-choice-button").forEach((button) => {
    button.addEventListener("click", () => checkLearningAnswer(button.dataset.choice, button));
  });

  learningNextButton = document.querySelector("#learningNextButton");
  learningNextButton.addEventListener("click", handleLearningAction);
}

function checkLearningAnswer(choice, button) {
  if (learningAnswered) {
    return;
  }

  selectedLearningChoice = choice;
  document.querySelectorAll(".learning-choice-button").forEach((choiceButton) => {
    choiceButton.classList.remove("selected-choice", "correct-choice", "wrong-choice");
  });
  button.classList.add("selected-choice");
  learningNextButton.disabled = false;
}

function handleLearningAction() {
  if (learningCardMode === "summary") {
    if (learningMissedSteps.length > 0) {
      startLearningLevel(learningLevelIndex, [...learningMissedSteps], [...learningMissedStepKeys]);
      return;
    }

    const nextLevelIndex = learningLevelIndex + 1;
    if (nextLevelIndex < learningLevels.length) {
      startLearningLevel(nextLevelIndex, learningLevels[nextLevelIndex].steps);
      return;
    }

    showLearningReward();
    return;
  }

  const step = learningCurrentSteps[learningStepIndex];
  if (step?.kind === "question") {
    if (!learningAnswered) {
      submitLearningAnswer(step);
      return;
    }
    nextLearningStep();
    return;
  }

  nextLearningStep();
}

function submitLearningAnswer(step) {
  if (!selectedLearningChoice) {
    return;
  }

  learningAnswered = true;
  const isCorrect = selectedLearningChoice === step.correctAnswer;

  if (isCorrect) {
    learningLevelCorrect += 1;
    if (learningCanEarnStars) {
      learningEarnedStars += 1;
    }
    learningStars.textContent = String(learningEarnedStars);
  } else {
    learningLevelIncorrect += 1;
    learningMissedSteps.push(step);
    learningMissedStepKeys.push(learningCurrentStepKeys[learningStepIndex]);
  }

  renderLearningResult(isCorrect);
  saveLearningProgress("after-answer", learningStepIndex + 1);
}

function renderLearningResult(isCorrect) {
  learningCardMode = "result";
  learningCard.className = "learning-card learning-card-result";
  learningCard.innerHTML = `
    <div class="learning-result-slide ${isCorrect ? "correct" : "try-again"}">
      <span>${isCorrect ? "CORRECT" : "INCORRECT"}</span>
    </div>
    <div class="learning-card-actions">
      <button id="learningNextButton" type="button">Next</button>
    </div>
  `;

  learningNextButton = document.querySelector("#learningNextButton");
  learningNextButton.addEventListener("click", handleLearningAction);
}

function nextLearningStep() {
  learningStepIndex += 1;
  if (learningStepIndex >= learningCurrentSteps.length) {
    showLearningLevelSummary();
    return;
  }
  saveLearningProgress();
  showLearningStep();
}

function showLearningLevelSummary() {
  const levelName = learningLevels[learningLevelIndex]?.name || "Level";
  const mastered = learningLevelIncorrect === 0;
  const sectionKey = `${learningLevelIndex}:${levelName}`;
  const earnsSectionBonus = learningCanEarnStars && mastered && !learningCompletedSections.has(sectionKey);
  if (earnsSectionBonus) {
    learningCompletedSections.add(sectionKey);
    learningEarnedStars += learningSectionStarBonus;
    learningStars.textContent = String(learningEarnedStars);
  } else if (mastered) {
    learningCompletedSections.add(sectionKey);
  }
  saveLearningProgress("summary");
  learningCardMode = "summary";
  learningCard.className = "learning-card learning-card-summary";
  learningStepNumber.textContent = String(learningCurrentSteps.length);
  learningTotalSteps.textContent = String(learningCurrentSteps.length);
  learningProgressBar.style.width = "100%";
  learningLessonTitle.textContent = activeLearningActivity.title || "Place Value";
  learningLevelTitle.textContent = levelName;
  learningCard.innerHTML = `
    <div class="learning-summary-slide">
      <h2>${mastered ? "Level Complete!" : "Try Missed Questions"}</h2>
      <div class="level-score-grid">
        <div class="level-score-card correct">
          <span>${learningLevelCorrect}</span>
          <p>Correct</p>
        </div>
        <div class="level-score-card missed">
          <span>${learningLevelIncorrect}</span>
          <p>Incorrect</p>
        </div>
      </div>
      ${mastered && learningCanEarnStars ? `
        <div class="section-star-bonus">
          <span>+${learningSectionStarBonus}</span>
          <p>Practice stars earned for this section</p>
        </div>
      ` : ""}
      <p>${mastered ? learningCanEarnStars ? `Great work. You got them all right. Total stars: ${learningEarnedStars}.` : "Great work. You already collected the stars for this mission, so this replay is just for practice." : "Practice only the missed questions, then try the level check again."}</p>
      <div class="learning-card-actions">
        <button id="learningNextButton" type="button">${learningMissedSteps.length > 0 ? "Practice Missed Questions" : learningLevelIndex + 1 < learningLevels.length ? "Next Level" : "Finish Mission"}</button>
      </div>
    </div>
  `;

  learningNextButton = document.querySelector("#learningNextButton");
  learningNextButton.addEventListener("click", handleLearningAction);
}

function showLearningReward() {
  const alreadyClaimed = hasClaimedLearningReward();

  if (!alreadyClaimed) {
    markLearningRewardClaimed();
  }
  clearLearningProgress();
  window.PracticeStar.saveLearningAttempt({
    teacherId: activeClass?.teacher?.id || activeStudent?.teacherId || "",
    studentId: activeStudent?.id || "",
    studentName: activeStudentName,
    studentCode: activeClass?.code || activeClass?.teacher?.classCode || studentCode.value,
    studentPin: activeStudent?.pin || studentPin.value,
    activityId: activeLearningActivityId,
    activityTitle: activeLearningActivity.title || "Learning mission",
    earnedStars: learningEarnedStars,
    levelsCompleted: learningLevels.length,
    totalQuestions: activeLearningActivity.steps?.length || 0,
    rewardCollected: !alreadyClaimed
  });

  rewardTitle.textContent = alreadyClaimed ? "Mission complete!" : "Stars earned!";
  rewardDetails.textContent = alreadyClaimed
    ? `${activeStudentName}, you earned ${learningEarnedStars} practice stars. You already collected the stars for this mission.`
    : `${activeStudentName}, you earned ${learningEarnedStars} practice stars.`;
  starSummaryPreview.innerHTML = `
    <div class="star-summary-card">
      <span>${learningEarnedStars}</span>
      <p>${alreadyClaimed ? "Stars already counted for this mission" : "Practice stars added"}</p>
    </div>
  `;
  showScreen(rewardScreen);
}

function showQuestion() {
  const index = nextUnmasteredIndex(activeSession);

  if (index === -1) {
    finishRun();
    return;
  }

  activeSession.currentWordIndex = index;
  const progress = activeSession.wordProgress[index];
  const stage = stageForWord(progress);
  const mastered = activeSession.wordProgress.filter((word) => word.mastered).length;

  answered = false;
  readyForNext = false;
  wordNumber.textContent = String(index + 1);
  totalWords.textContent = String(activeSession.wordProgress.length);
  progressBar.style.width = `${(mastered / activeSession.wordProgress.length) * 100}%`;
  scoreCount.textContent = String(currentRun.correct);
  levelPill.textContent = stage.title;
  clueLabel.textContent = stage.clue;
  wordClue.textContent = stage.display;
  practiceTip.textContent = stage.tip;
  answerInput.value = "";
  answerInput.disabled = false;
  checkButton.disabled = false;
  checkButton.textContent = "Check";
  feedback.textContent = "Take your time. You can do this.";
  feedback.className = "feedback";
  answerInput.focus();

  activeSession = window.PracticeStar.updateStudentSession(activeSession.id, (session) => {
    session.currentWordIndex = index;
  });

}

function checkAnswer(event) {
  event.preventDefault();
  if (readyForNext) {
    showQuestion();
    return;
  }

  if (answered) {
    return;
  }

  const index = activeSession.currentWordIndex;
  const progress = activeSession.wordProgress[index];
  const childAnswer = answerInput.value.trim();
  const isCorrect = normalizeAnswer(childAnswer) === normalizeAnswer(progress.word);

  activeSession = window.PracticeStar.updateStudentSession(activeSession.id, (session) => {
    const word = session.wordProgress[index];
    const run = session.activeRun;
    run.total += 1;
    run.attempts.push({
      word: word.word,
      answer: childAnswer || "(blank)",
      correct: isCorrect,
      stage: stageForWord(word).title,
      at: new Date().toISOString()
    });

    if (isCorrect) {
      run.correct += 1;
      word.correct += 1;
      if (word.level >= 2) {
        word.mastered = true;
      } else {
        word.level += 1;
      }
    } else {
      word.missed += 1;
      word.level = Math.max(0, word.level - 1);
      word.mastered = false;
    }

    word.lastPracticedAt = new Date().toISOString();
    session.currentWordIndex = word.mastered ? index + 1 : index;
  });
  currentRun = activeSession.activeRun;

  if (isCorrect) {
    answered = true;
    feedback.textContent = "Yes. Great spelling!";
    feedback.className = "feedback correct";
  } else {
    answered = false;
    feedback.textContent = `Good try. The word is spelled "${progress.word}".`;
    feedback.className = "feedback try-again";
  }

  scoreCount.textContent = String(currentRun.correct);
  if (isCorrect) {
    answerInput.disabled = true;
    readyForNext = true;
    if (nextUnmasteredIndex(activeSession) === -1) {
      checkButton.textContent = "See Results";
    } else {
      checkButton.textContent = activeSession.currentWordIndex === index ? "Next Clue" : "Next Word";
    }
    checkButton.focus();
  } else {
    answerInput.value = "";
    answerInput.focus();
  }
}

function finishRun() {
  activeSession = window.PracticeStar.updateStudentSession(activeSession.id, (session) => {
    const run = session.activeRun || {
      startedAt: new Date().toISOString(),
      attempts: [],
      correct: 0,
      total: 0
    };
    run.endedAt = new Date().toISOString();
    session.history.push(run);
    session.activeRun = null;
    session.completed = session.wordProgress.every((word) => word.mastered);
  });

  currentRun = activeSession.history.at(-1);
  showResults();
}

function showResults() {
  const mastered = activeSession.wordProgress.filter((word) => word.mastered);
  const needsPractice = activeSession.wordProgress.filter((word) => !word.mastered);

  resultTitle.textContent = activeSession.completed ? "All words mastered!" : "Practice saved!";
  finalScore.textContent = `You got ${currentRun.correct} of ${currentRun.total} attempts correct this time.`;
  progressBar.style.width = `${(mastered.length / activeSession.wordProgress.length) * 100}%`;
  resultsList.innerHTML = `
    <div class="review-item">
      <span class="review-mark">OK</span>
      <span><strong>Mastered:</strong> ${mastered.length ? mastered.map((item) => item.word).join(", ") : "Keep going."}</span>
    </div>
    <div class="review-item">
      <span class="review-mark missed">!</span>
      <span><strong>Still practicing:</strong> ${needsPractice.length ? needsPractice.map((item) => item.word).join(", ") : "None right now."}</span>
    </div>
  `;
  showScreen(resultsScreen);
}

function groupedFinalQuizQuestions(questions) {
  const sections = [];
  questions.forEach((question, index) => {
    const sectionName = question.section || "Final Quiz";
    let section = sections.find((item) => item.name === sectionName);
    if (!section) {
      section = { name: sectionName, questions: [] };
      sections.push(section);
    }
    section.questions.push({ ...question, originalIndex: index });
  });
  return sections;
}

function normalizeQuizAnswer(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function startFinalQuiz() {
  if (!activeFinalQuiz) {
    return;
  }

  const existingAttempt = window.PracticeStar.quizAttemptForStudent(activeFinalQuiz.id, activeStudent?.id || "", activeStudentName);
  const canRetake = window.PracticeStar.finalQuizRetakeForStudent(activeFinalQuiz.teacherId, activeFinalQuiz.id, activeStudent?.id || "");
  if (existingAttempt && !canRetake) {
    renderActivities(activeClass, activeStudent);
    return;
  }

  finalQuizTitle.textContent = activeFinalQuiz.title;
  finalQuizDetails.textContent = `${activeFinalQuiz.questions.length} questions. Answer each one carefully. You will see your score after you submit.`;
  finalQuizForm.innerHTML = `
    ${groupedFinalQuizQuestions(activeFinalQuiz.questions).map((section) => `
      <section class="final-quiz-section">
        <h3>${window.PracticeStar.escapeHtml(section.name)}</h3>
        ${section.questions.map((question) => `
          <fieldset class="final-quiz-question">
            <legend>${question.originalIndex + 1}. ${window.PracticeStar.escapeHtml(question.prompt)}</legend>
            <div class="final-quiz-choices">
              ${question.choices.map((choice, choiceIndex) => `
                <label>
                  <input type="radio" name="finalQuestion${question.originalIndex}" value="${choiceIndex}" required />
                  <span>${window.PracticeStar.escapeHtml(choice)}</span>
                </label>
              `).join("")}
            </div>
          </fieldset>
        `).join("")}
      </section>
    `).join("")}
    <div class="final-quiz-submit-row">
      <button type="submit">Submit Final Quiz</button>
      <button class="secondary" type="button" id="cancelFinalQuizButton">Back to Activities</button>
    </div>
  `;

  document.querySelector("#cancelFinalQuizButton").addEventListener("click", () => {
    renderActivities(activeClass, activeStudent);
  });
  showScreen(finalQuizScreen);
  finalQuizScreen.scrollIntoView({ block: "start" });
}

function submitFinalQuiz(event) {
  event.preventDefault();
  if (!activeFinalQuiz) {
    return;
  }

  const formData = new FormData(finalQuizForm);
  const answers = activeFinalQuiz.questions.map((question, index) => {
    const selectedChoiceIndex = Number(formData.get(`finalQuestion${index}`));
    const answer = Number.isInteger(selectedChoiceIndex) ? question.choices[selectedChoiceIndex] || "" : "";
    const isCorrect = normalizeQuizAnswer(answer) === normalizeQuizAnswer(question.correctAnswer);
    return {
      prompt: question.prompt,
      answer,
      correctAnswer: question.correctAnswer,
      correct: isCorrect,
      section: question.section || "Final Quiz",
      reviewNote: question.reviewNote || ""
    };
  });
  const score = answers.filter((answer) => answer.correct).length;
  const total = activeFinalQuiz.questions.length;
  const percent = Math.round((score / total) * 100);
  const missed = answers.filter((answer) => !answer.correct);
  const reviewNotes = missed.map((answer) => ({
    prompt: answer.prompt,
    section: answer.section,
    answer: answer.answer,
    correctAnswer: answer.correctAnswer,
    note: answer.reviewNote
  }));

  window.PracticeStar.saveQuizAttempt({
    quizId: activeFinalQuiz.id,
    quizTitle: activeFinalQuiz.title,
    teacherId: activeFinalQuiz.teacherId,
    studentName: activeStudentName,
    studentId: activeStudent?.id || "",
    studentCode: activeClass?.code || activeClass?.teacher?.classCode || studentCode.value,
    studentPin: activeStudent?.pin || studentPin.value,
    score,
    total,
    percent,
    answers,
    isFinalLessonQuiz: true,
    allowRetake: window.PracticeStar.finalQuizRetakeForStudent(activeFinalQuiz.teacherId, activeFinalQuiz.id, activeStudent?.id || ""),
    reviewNotes
  });

  quizResultTitle.textContent = `${activeFinalQuiz.title} complete`;
  quizFinalScore.textContent = `${activeStudentName}, your mark is ${percent}% (${score} out of ${total}).`;
  quizResultsList.innerHTML = missed.length
    ? missed.map((answer) => `
      <div class="review-item">
        <span class="review-mark missed">!</span>
        <span>
          <strong>${window.PracticeStar.escapeHtml(answer.section)}</strong><br />
          ${window.PracticeStar.escapeHtml(answer.prompt)}<br />
          Your answer: ${window.PracticeStar.escapeHtml(answer.answer)}. Correct answer: ${window.PracticeStar.escapeHtml(answer.correctAnswer)}.<br />
          ${window.PracticeStar.escapeHtml(answer.reviewNote)}
        </span>
      </div>
    `).join("")
    : `
      <div class="review-item">
        <span class="review-mark">OK</span>
        <span><strong>Excellent work.</strong><br />You answered every question correctly.</span>
      </div>
    `;
  activeFinalQuiz = null;
  showScreen(quizResultsScreen);
}

function startQuiz() {
  quizIndex = 0;
  quizRunScore = 0;
  quizAnswered = false;
  quizAnswers = [];
  showScreen(quizScreen);
  showQuizQuestion();
}

function showQuizQuestion() {
  const question = activeQuiz.questions[quizIndex];
  quizAnswered = false;
  quizQuestionNumber.textContent = String(quizIndex + 1);
  quizTotalQuestions.textContent = String(activeQuiz.questions.length);
  quizProgressBar.style.width = `${(quizIndex / activeQuiz.questions.length) * 100}%`;
  quizScore.textContent = String(quizRunScore);
  quizTypeLabel.textContent = activeQuiz.title;
  quizPrompt.textContent = question.prompt;
  quizFeedback.textContent = "Choose an answer.";
  quizFeedback.className = "feedback";
  quizNextButton.classList.remove("show");
  quizChoices.innerHTML = question.choices
    .map((choice) => `<button class="choice-button" type="button" data-choice="${window.PracticeStar.escapeHtml(choice)}">${window.PracticeStar.escapeHtml(choice)}</button>`)
    .join("");

  document.querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => checkQuizAnswer(button.dataset.choice, button));
  });
}

function checkQuizAnswer(choice, button) {
  if (quizAnswered) {
    return;
  }

  const question = activeQuiz.questions[quizIndex];
  const isCorrect = choice === question.correctAnswer;
  quizAnswered = true;

  if (isCorrect) {
    quizRunScore += 1;
    button.classList.add("correct-choice");
    quizFeedback.textContent = "Correct!";
    quizFeedback.className = "feedback correct";
  } else {
    button.classList.add("wrong-choice");
    quizFeedback.textContent = `Good try. The answer is ${question.correctAnswer}.`;
    quizFeedback.className = "feedback try-again";
  }

  quizAnswers.push({
    prompt: question.prompt,
    answer: choice,
    correctAnswer: question.correctAnswer,
    correct: isCorrect
  });
  quizScore.textContent = String(quizRunScore);
  quizProgressBar.style.width = `${((quizIndex + 1) / activeQuiz.questions.length) * 100}%`;
  quizNextButton.textContent = quizIndex === activeQuiz.questions.length - 1 ? "See Results" : "Next Question";
  quizNextButton.classList.add("show");
}

function nextQuizQuestion() {
  quizIndex += 1;
  if (quizIndex >= activeQuiz.questions.length) {
    showQuizResults();
    return;
  }
  showQuizQuestion();
}

function showQuizResults() {
  window.PracticeStar.saveQuizAttempt({
    quizId: activeQuiz.id,
    quizTitle: activeQuiz.title,
    teacherId: activeQuiz.teacherId,
    studentName: activeStudentName,
    studentId: activeStudent?.id || "",
    score: quizRunScore,
    total: activeQuiz.questions.length,
    answers: quizAnswers,
    isFinalLessonQuiz: false
  });

  quizResultTitle.textContent = "Quiz complete!";
  quizFinalScore.textContent = `${activeStudentName}, you scored ${quizRunScore} out of ${activeQuiz.questions.length}.`;
  quizResultsList.innerHTML = quizAnswers
    .map((answer) => `
      <div class="review-item">
        <span class="review-mark${answer.correct ? "" : " missed"}">${answer.correct ? "OK" : "!"}</span>
        <span><strong>${window.PracticeStar.escapeHtml(answer.prompt)}</strong><br />Your answer: ${window.PracticeStar.escapeHtml(answer.answer)}</span>
      </div>
    `)
    .join("");
  showScreen(quizResultsScreen);
}

studentCodeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const code = window.PracticeStar.normalizeCode(studentCode.value);
  const name = window.PracticeStar.normalizeName(studentName.value);
  const pin = studentPin.value;

  if (!code || !name || !pin.trim()) {
    studentMessage.textContent = "Enter your code, first name, and PIN.";
    return;
  }

  studentMessage.textContent = "Checking your login...";
  const access = await window.PracticeStar.studentAccessForClassCode(code, name, pin);

  if (access.ok) {
    if (rememberStudentLogin.checked) {
      saveStudentLogin(code, name, pin);
    } else {
      clearSavedStudentLogin();
    }
    studentMessage.textContent = "";
    renderActivities(access, access.student);
    return;
  }

  studentMessage.textContent = access.message;
});

forgetStudentLogin.addEventListener("click", () => {
  logOutStudent("Saved login removed from this browser.");
});

studentLogoutButton.addEventListener("click", () => logOutStudent());
continueButton.addEventListener("click", () => beginRun(false));
startOverButton.addEventListener("click", () => beginRun(true));
answerForm.addEventListener("submit", checkAnswer);
quizNextButton.addEventListener("click", nextQuizQuestion);
finalQuizForm.addEventListener("submit", submitFinalQuiz);
practiceAgainButton.addEventListener("click", () => {
  refreshReadyScreen();
  showScreen(readyScreen);
});
doneButton.addEventListener("click", () => {
  if (activeClass) {
    renderActivities(activeClass, activeStudent);
  } else {
    showScreen(codeScreen);
    studentCode.focus();
  }
});
quizDoneButton.addEventListener("click", () => renderActivities(activeClass, activeStudent));
learningExitButton.addEventListener("click", () => renderActivities(activeClass, activeStudent));
rewardDoneButton.addEventListener("click", () => renderActivities(activeClass, activeStudent));

async function initStudentPage() {
  const savedStudentLogin = getSavedStudentLogin();
  if (savedStudentLogin) {
    fillStudentLogin(savedStudentLogin);
    forgetStudentLogin.classList.remove("hidden");
    studentMessage.textContent = "Checking saved login...";
    const access = await window.PracticeStar.studentAccessForClassCode(
      savedStudentLogin.code,
      savedStudentLogin.name,
      savedStudentLogin.pin
    );
    if (access.ok) {
      studentMessage.textContent = "";
      renderActivities(access, access.student);
    } else {
      clearSavedStudentLogin();
      studentMessage.textContent = "Saved login needs to be checked with your teacher.";
      studentCode.focus();
    }
  } else {
    studentCode.focus();
  }
}

initStudentPage();
