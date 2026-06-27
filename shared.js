const PracticeStar = (() => {
  const storageKey = "practiceStar2LocalData";
  const sessionKey = "practiceStar2TeacherSession";
  let cachedSupabaseClient = null;

  function hasSupabaseConfig() {
    const config = window.PracticeStarSupabase;
    return Boolean(config?.url && config?.publishableKey);
  }

  function supabaseLoadError() {
    return {
      ok: false,
      message: "The online login connection did not load. Check your internet connection, then refresh this page."
    };
  }

  function getSupabaseClient() {
    const config = window.PracticeStarSupabase;
    if (!window.supabase || !config?.url || !config?.publishableKey) {
      return null;
    }
    if (!cachedSupabaseClient) {
      cachedSupabaseClient = window.supabase.createClient(config.url, config.publishableKey);
    }
    return cachedSupabaseClient;
  }

  function teacherFromProfile(profile, user) {
    return {
      id: profile?.id || user.id,
      email: profile?.email || user.email || "",
      classCode: profile?.student_code || "",
      createdAt: profile?.created_at || user.created_at || ""
    };
  }

  async function getTeacherProfile(user) {
    const client = getSupabaseClient();
    if (!client || !user) {
      return null;
    }

    for (let attempt = 0; attempt < 3; attempt += 1) {
      const { data, error } = await client
        .from("teacher_profiles")
        .select("id, email, student_code, created_at")
        .eq("id", user.id)
        .maybeSingle();

      if (data && !error) {
        return teacherFromProfile(data, user);
      }

      await new Promise((resolve) => setTimeout(resolve, 250));
    }

    return teacherFromProfile(null, user);
  }

  function readData() {
    try {
      return JSON.parse(window.localStorage.getItem(storageKey)) || emptyData();
    } catch (_error) {
      return emptyData();
    }
  }

  function writeData(data) {
    window.localStorage.setItem(storageKey, JSON.stringify(data));
  }

  function emptyData() {
    return {
      teachers: [],
      students: [],
      lists: [],
      quizzes: [],
      sessions: [],
      quizAttempts: [],
      learningProgress: [],
      learningAttempts: [],
      contentAssignments: []
    };
  }

  function getData() {
    const data = readData();
    data.teachers ||= [];
    data.students ||= [];
    data.lists ||= [];
    data.quizzes ||= [];
    data.sessions ||= [];
    data.quizAttempts ||= [];
    data.learningProgress ||= [];
    data.learningAttempts ||= [];
    data.contentAssignments ||= [];
    return data;
  }

  function saveData(data) {
    writeData(data);
    return data;
  }

  function uid(prefix) {
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  }

  function normalizedSharingSettings(item = {}) {
    return {
      isShared: item.isShared === true,
      shareMode: item.shareMode === "selected" ? "selected" : "all",
      targetStudentIds: Array.isArray(item.targetStudentIds) ? item.targetStudentIds.filter(Boolean) : []
    };
  }

  function isItemSharedWithStudent(item, studentId) {
    const settings = normalizedSharingSettings(item);
    if (!settings.isShared) {
      return false;
    }
    if (settings.shareMode === "selected") {
      return settings.targetStudentIds.includes(studentId);
    }
    return true;
  }

  function normalizedIdList(value) {
    return Array.isArray(value) ? value.map(String).filter(Boolean) : [];
  }

  function isUuid(value) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || ""));
  }

  function contentAssignmentFromRow(row = {}) {
    return {
      id: row.id || uid("assignment"),
      teacherId: row.teacher_id || row.teacherId || "",
      itemId: row.item_id || row.itemId || "",
      itemType: row.item_type || row.itemType || "",
      isShared: row.is_shared === true || row.isShared === true,
      shareMode: (row.share_mode || row.shareMode) === "selected" ? "selected" : "all",
      targetStudentIds: normalizedIdList(row.target_student_ids || row.targetStudentIds),
      retakeStudentIds: normalizedIdList(row.retake_student_ids || row.retakeStudentIds),
      createdAt: row.created_at || row.createdAt || new Date().toISOString(),
      updatedAt: row.updated_at || row.updatedAt || new Date().toISOString()
    };
  }

  function contentAssignmentKey(assignment) {
    return `${assignment.teacherId}::${assignment.itemId}::${assignment.itemType}`;
  }

  function contentAssignmentToRow(assignment) {
    return {
      teacher_id: assignment.teacherId,
      item_id: assignment.itemId,
      item_type: assignment.itemType,
      is_shared: assignment.isShared === true,
      share_mode: assignment.shareMode === "selected" ? "selected" : "all",
      target_student_ids: assignment.shareMode === "selected" ? normalizedIdList(assignment.targetStudentIds) : [],
      retake_student_ids: normalizedIdList(assignment.retakeStudentIds)
    };
  }

  function upsertContentAssignmentInData(data, assignment) {
    data.contentAssignments ||= [];
    const normalizedAssignment = {
      ...assignment,
      targetStudentIds: normalizedIdList(assignment.targetStudentIds),
      retakeStudentIds: normalizedIdList(assignment.retakeStudentIds)
    };
    const index = data.contentAssignments.findIndex(
      (item) =>
        item.teacherId === normalizedAssignment.teacherId &&
        item.itemId === normalizedAssignment.itemId &&
        item.itemType === normalizedAssignment.itemType
    );
    if (index >= 0) {
      data.contentAssignments[index] = {
        ...data.contentAssignments[index],
        ...normalizedAssignment
      };
      return data.contentAssignments[index];
    }
    data.contentAssignments.push(normalizedAssignment);
    return normalizedAssignment;
  }

  function cacheContentAssignments(assignments = []) {
    if (!assignments.length) {
      return;
    }
    const data = getData();
    assignments.forEach((assignment) => upsertContentAssignmentInData(data, assignment));
    saveData(data);
  }

  function replaceContentAssignmentsForTeacher(teacherId, assignments = []) {
    if (!teacherId) {
      cacheContentAssignments(assignments);
      return;
    }

    const data = getData();
    data.contentAssignments = data.contentAssignments.filter((assignment) => assignment.teacherId !== teacherId);
    assignments.forEach((assignment) => upsertContentAssignmentInData(data, assignment));
    saveData(data);
  }

  function addCurrentActivityAliases(assignments = []) {
    const assignmentKeys = new Set(assignments.map(contentAssignmentKey));
    const aliases = [];

    assignments.forEach((assignment) => {
      if (assignment.itemType !== "activity" || !assignment.itemId.endsWith(":activity")) {
        return;
      }

      const currentItemId = assignment.itemId.slice(0, -":activity".length);
      const currentKey = `${assignment.teacherId}::${currentItemId}::activity`;
      if (assignmentKeys.has(currentKey)) {
        return;
      }

      assignmentKeys.add(currentKey);
      aliases.push({
        ...assignment,
        id: `${assignment.id || uid("assignment")}_current`,
        itemId: currentItemId
      });
    });

    return [...assignments, ...aliases];
  }

  function normalizeEmail(email) {
    return email.trim().toLowerCase();
  }

  function normalizeCode(code) {
    return code.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  }

  function generateCode() {
    const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const numbers = "23456789";
    let code = "STAR";
    for (let index = 0; index < 2; index += 1) {
      code += letters[Math.floor(Math.random() * letters.length)];
    }
    for (let index = 0; index < 2; index += 1) {
      code += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return code;
  }

  function generatePin() {
    const numbers = "23456789";
    let pin = "";
    for (let index = 0; index < 4; index += 1) {
      pin += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return pin;
  }

  function parseLines(value) {
    return value
      .split(/[\n,]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function uniqueWords(words) {
    return words.filter((word, index, allWords) => {
      const normalized = word.toLowerCase();
      return allWords.findIndex((item) => item.toLowerCase() === normalized) === index;
    });
  }

  function parseWords(value) {
    return uniqueWords(parseLines(value));
  }

  function setText(selector, message) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = message;
    }
  }

  async function createTeacher(email, password) {
    const cleanEmail = normalizeEmail(email);
    const client = getSupabaseClient();

    if (!client && hasSupabaseConfig()) {
      return supabaseLoadError();
    }

    if (client) {
      if (!cleanEmail || !password) {
        return { ok: false, message: "Enter an email and password." };
      }

      if (password.length < 6) {
        return { ok: false, message: "Use at least 6 characters for the password." };
      }

      const { data, error } = await client.auth.signUp({
        email: cleanEmail,
        password
      });

      if (error) {
        return { ok: false, message: error.message };
      }

      if (!data.session) {
        return {
          ok: true,
          teacher: null,
          message: "Account created. Check your email, then log in."
        };
      }

      const teacher = await getTeacherProfile(data.user);
      return { ok: true, teacher, message: "Account created. You are logged in." };
    }

    const data = getData();

    if (!cleanEmail || !password) {
      return { ok: false, message: "Enter an email and password." };
    }

    if (password.length < 6) {
      return { ok: false, message: "Use at least 6 characters for the password." };
    }

    if (data.teachers.some((teacher) => teacher.email === cleanEmail)) {
      return { ok: false, message: "That account already exists. Please log in." };
    }

    const teacher = {
      id: uid("teacher"),
      email: cleanEmail,
      password,
      classCode: ensureUniqueCode(data),
      createdAt: new Date().toISOString()
    };
    data.teachers.push(teacher);
    saveData(data);
    setCurrentTeacherId(teacher.id);
    return { ok: true, teacher, message: "Account created. You are logged in." };
  }

  async function loginTeacher(email, password) {
    const cleanEmail = normalizeEmail(email);
    const client = getSupabaseClient();

    if (!client && hasSupabaseConfig()) {
      return supabaseLoadError();
    }

    if (client) {
      if (!cleanEmail || !password) {
        return { ok: false, message: "Enter an email and password." };
      }

      const { data, error } = await client.auth.signInWithPassword({
        email: cleanEmail,
        password
      });

      if (error) {
        return { ok: false, message: error.message };
      }

      const teacher = await getTeacherProfile(data.user);
      return { ok: true, teacher, message: "Logged in." };
    }

    const teacher = getData().teachers.find(
      (item) => item.email === cleanEmail && item.password === password
    );

    if (!teacher) {
      return { ok: false, message: "Email or password did not match." };
    }

    setCurrentTeacherId(teacher.id);
    return { ok: true, teacher, message: "Logged in." };
  }

  async function logoutTeacher() {
    const client = getSupabaseClient();
    if (client) {
      await client.auth.signOut();
    }
    window.localStorage.removeItem(sessionKey);
  }

  function setCurrentTeacherId(teacherId) {
    window.localStorage.setItem(sessionKey, teacherId);
  }

  async function getCurrentTeacher() {
    const client = getSupabaseClient();
    if (client) {
      const { data } = await client.auth.getSession();
      if (!data.session?.user) {
        return null;
      }
      return getTeacherProfile(data.session.user);
    }

    const teacherId = window.localStorage.getItem(sessionKey);
    if (!teacherId) {
      return null;
    }
    return getData().teachers.find((teacher) => teacher.id === teacherId) || null;
  }

  function ensureUniqueCode(data) {
    let code = generateCode();
    while (
      data.lists.some((list) => list.code === code) ||
      data.teachers.some((teacher) => teacher.classCode === code)
    ) {
      code = generateCode();
    }
    return code;
  }

  function ensureTeacherClassCode(teacherId) {
    const data = getData();
    const teacher = data.teachers.find((item) => item.id === teacherId);
    if (!teacher) {
      return null;
    }
    if (!teacher.classCode) {
      teacher.classCode = ensureUniqueCode(data);
      saveData(data);
    }
    return teacher.classCode;
  }

  function ensureUniqueStudentPin(data, teacherId) {
    let pin = generatePin();
    while (data.students.some((student) => student.teacherId === teacherId && student.pin === pin)) {
      pin = generatePin();
    }
    return pin;
  }

  function studentFromRow(row) {
    return {
      id: row.id,
      teacherId: row.teacher_id,
      name: row.first_name,
      pin: row.pin,
      isActive: row.is_active,
      createdAt: row.created_at
    };
  }

  function learningAttemptFromRow(row) {
    return {
      id: row.id,
      teacherId: row.teacher_id,
      studentId: row.student_id,
      studentName: row.student_name || "",
      activityId: row.activity_id,
      activityTitle: row.activity_title,
      earnedStars: row.earned_stars,
      levelsCompleted: row.levels_completed,
      totalQuestions: row.total_questions,
      rewardCollected: row.reward_collected,
      createdAt: row.created_at,
      status: "completed"
    };
  }

  function learningProgressFromRow(row) {
    return {
      id: row.id,
      teacherId: row.teacher_id,
      studentId: row.student_id,
      activityId: row.activity_id,
      activityTitle: row.activity_title,
      earnedStars: row.earned_stars,
      levelIndex: row.level_index,
      stepIndex: row.step_index,
      completedSections: row.completed_sections || [],
      status: row.status || "in_progress",
      savedAt: row.saved_at,
      updatedAt: row.updated_at
    };
  }

  function lessonQuizAttemptFromRow(row) {
    return {
      id: row.id,
      quizId: row.quiz_id,
      quizTitle: row.quiz_title,
      teacherId: row.teacher_id,
      studentId: row.student_id,
      studentName: "",
      score: row.score,
      total: row.total,
      percent: row.percent,
      answers: row.answers || [],
      isFinalLessonQuiz: true,
      reviewNotes: row.review_notes || [],
      createdAt: row.created_at
    };
  }

  async function studentsForTeacher(teacherId) {
    const client = getSupabaseClient();
    if (client) {
      const { data, error } = await client
        .from("students")
        .select("id, teacher_id, first_name, pin, is_active, created_at")
        .eq("teacher_id", teacherId)
        .eq("is_active", true)
        .order("first_name", { ascending: true });

      if (error) {
        return [];
      }

      return data.map(studentFromRow);
    }

    return getData()
      .students.filter((student) => student.teacherId === teacherId)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async function addStudent(teacherId, name) {
    const cleanName = normalizeName(name);
    const client = getSupabaseClient();

    if (client) {
      if (!teacherId) {
        return { ok: false, message: "Please log in before adding students." };
      }

      if (!cleanName) {
        return { ok: false, message: "Enter a student first name." };
      }

      const { data: existing, error: lookupError } = await client
        .from("students")
        .select("id, teacher_id, first_name, pin, is_active, created_at")
        .eq("teacher_id", teacherId)
        .ilike("first_name", cleanName)
        .maybeSingle();

      if (lookupError) {
        return { ok: false, message: lookupError.message };
      }

      if (existing) {
        if (existing.is_active === false) {
          const { data: restored, error } = await client
            .from("students")
            .update({ is_active: true })
            .eq("id", existing.id)
            .select("id, teacher_id, first_name, pin, is_active, created_at")
            .single();

          if (error) {
            return { ok: false, message: error.message };
          }

          return {
            ok: true,
            student: studentFromRow(restored),
            message: `${cleanName} is back on the roster.`
          };
        }

        return {
          ok: true,
          student: studentFromRow(existing),
          message: `${cleanName} is already on the roster.`
        };
      }

      const currentStudents = await studentsForTeacher(teacherId);
      const pinData = { students: currentStudents };
      const { data: student, error } = await client
        .from("students")
        .insert({
          teacher_id: teacherId,
          first_name: cleanName,
          pin: ensureUniqueStudentPin(pinData, teacherId)
        })
        .select("id, teacher_id, first_name, pin, is_active, created_at")
        .single();

      if (error) {
        return { ok: false, message: error.message };
      }

      return { ok: true, student: studentFromRow(student), message: `Added ${cleanName}.` };
    }

    const data = getData();

    if (!teacherId) {
      return { ok: false, message: "Please log in before adding students." };
    }

    if (!cleanName) {
      return { ok: false, message: "Enter a student first name." };
    }

    const existing = data.students.find(
      (student) =>
        student.teacherId === teacherId &&
        student.name.toLowerCase() === cleanName.toLowerCase()
    );

    if (existing) {
      existing.isActive = true;
      saveData(data);
      return { ok: true, student: existing, message: `${cleanName} is already on the roster.` };
    }

    const student = {
      id: uid("student"),
      teacherId,
      name: cleanName,
      pin: ensureUniqueStudentPin(data, teacherId),
      isActive: true,
      createdAt: new Date().toISOString()
    };
    data.students.push(student);
    saveData(data);
    return { ok: true, student, message: `Added ${cleanName}.` };
  }

  async function removeStudent(teacherId, studentId) {
    const client = getSupabaseClient();
    if (client) {
      const { error } = await client
        .from("students")
        .update({ is_active: false })
        .eq("teacher_id", teacherId)
        .eq("id", studentId);

      return !error;
    }

    const data = getData();
    const before = data.students.length;
    data.students = data.students.filter(
      (student) => !(student.teacherId === teacherId && student.id === studentId)
    );
    saveData(data);
    return before !== data.students.length;
  }

  function wordListFromRow(row = {}) {
    const rowWords = Array.isArray(row.words)
      ? row.words
      : Array.isArray(row.spelling_words)
        ? row.spelling_words
          .slice()
          .sort((a, b) => (Number(a.sort_order) || 0) - (Number(b.sort_order) || 0))
          .map((wordRow) => wordRow.word)
        : [];

    return {
      id: row.id || uid("list"),
      teacherId: row.teacher_id || row.teacherId || "",
      name: row.name || "Untitled spelling list",
      words: rowWords.map((word) => String(word).trim()).filter(Boolean),
      isShared: row.is_shared === true || row.isShared === true,
      shareMode: (row.share_mode || row.shareMode) === "selected" ? "selected" : "all",
      targetStudentIds: normalizedIdList(row.target_student_ids || row.targetStudentIds),
      createdAt: row.created_at || row.createdAt || new Date().toISOString(),
      updatedAt: row.updated_at || row.updatedAt || new Date().toISOString()
    };
  }

  function upsertWordListInData(data, list) {
    data.lists ||= [];
    const index = data.lists.findIndex((item) => item.id === list.id && item.teacherId === list.teacherId);
    if (index >= 0) {
      data.lists[index] = {
        ...data.lists[index],
        ...list,
        words: Array.isArray(list.words) ? list.words : []
      };
      return data.lists[index];
    }
    data.lists.push(list);
    return list;
  }

  function replaceWordListsForTeacher(teacherId, lists = []) {
    const data = getData();
    data.lists = data.lists.filter((list) => list.teacherId !== teacherId);
    lists.forEach((list) => upsertWordListInData(data, list));
    saveData(data);
  }

  async function syncWordListsForTeacher(teacherId) {
    const client = getSupabaseClient();
    const localLists = listsForTeacher(teacherId);
    if (!client || !teacherId) {
      return localLists;
    }

    const unsyncedLists = localLists.filter((list) => !isUuid(list.id) && list.words?.length);
    for (const list of unsyncedLists) {
      await saveWordList({
        teacherId,
        listId: list.id,
        name: list.name,
        words: list.words
      });
    }

    const { data, error } = await client
      .from("spelling_lists")
      .select("id, teacher_id, name, is_shared, share_mode, target_student_ids, created_at, updated_at, spelling_words(word, sort_order)")
      .eq("teacher_id", teacherId)
      .order("name", { ascending: true });

    if (error) {
      console.warn("Spelling list sync error:", error);
      return listsForTeacher(teacherId);
    }

    const lists = (data || []).map(wordListFromRow);
    replaceWordListsForTeacher(teacherId, lists);
    return listsForTeacher(teacherId);
  }

  async function saveWordList({ teacherId, listId, name, words }) {
    const cleanName = name.trim() || "Untitled spelling list";
    const cleanWords = uniqueWords(words.map((word) => word.trim()).filter(Boolean));
    const data = getData();

    if (!teacherId) {
      return { ok: false, message: "Please log in before saving a list." };
    }

    if (cleanWords.length === 0) {
      return { ok: false, message: "Enter at least one spelling word." };
    }

    const existing = data.lists.find(
      (list) => list.id === listId && list.teacherId === teacherId
    );

    let savedList = existing || null;
    if (existing) {
      existing.name = cleanName;
      existing.words = cleanWords;
      existing.isShared = existing.isShared === true;
      existing.shareMode ||= "all";
      existing.targetStudentIds ||= [];
      existing.updatedAt = new Date().toISOString();
      saveData(data);
    } else {
      savedList = {
        id: uid("list"),
        teacherId,
        name: cleanName,
        words: cleanWords,
        isShared: false,
        shareMode: "all",
        targetStudentIds: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      data.lists.push(savedList);
      saveData(data);
    }

    const client = getSupabaseClient();
    if (!client) {
      return { ok: true, list: savedList, message: `${listId ? "Saved" : "Created"} ${cleanName}.` };
    }

    const shareSettings = {
      is_shared: savedList.isShared === true,
      share_mode: savedList.shareMode === "selected" ? "selected" : "all",
      target_student_ids: savedList.shareMode === "selected" ? normalizedIdList(savedList.targetStudentIds) : []
    };
    const listPayload = {
      teacher_id: teacherId,
      name: cleanName,
      ...shareSettings
    };

    const query = isUuid(savedList.id)
      ? client
        .from("spelling_lists")
        .update(listPayload)
        .eq("teacher_id", teacherId)
        .eq("id", savedList.id)
        .select("id, teacher_id, name, is_shared, share_mode, target_student_ids, created_at, updated_at")
        .single()
      : client
        .from("spelling_lists")
        .insert(listPayload)
        .select("id, teacher_id, name, is_shared, share_mode, target_student_ids, created_at, updated_at")
        .single();

    const { data: savedRow, error } = await query;
    if (error) {
      return { ok: false, list: savedList, message: `Could not save this list online: ${error.message}` };
    }

    const { error: deleteWordsError } = await client
      .from("spelling_words")
      .delete()
      .eq("list_id", savedRow.id);

    if (deleteWordsError) {
      return { ok: false, list: savedList, message: `Could not update the words online: ${deleteWordsError.message}` };
    }

    if (cleanWords.length) {
      const { error: insertWordsError } = await client
        .from("spelling_words")
        .insert(cleanWords.map((word, index) => ({
          list_id: savedRow.id,
          word,
          sort_order: index
        })));

      if (insertWordsError) {
        return { ok: false, list: savedList, message: `Could not save the words online: ${insertWordsError.message}` };
      }
    }

    const onlineList = wordListFromRow({ ...savedRow, words: cleanWords });
    const freshData = getData();
    freshData.lists = freshData.lists.filter((item) =>
      !(item.teacherId === teacherId && (item.id === savedList.id || item.id === listId))
    );
    upsertWordListInData(freshData, onlineList);
    saveData(freshData);
    return { ok: true, list: onlineList, message: `${listId ? "Saved" : "Created"} ${cleanName}.` };
  }

  async function deleteWordList(teacherId, listId) {
    const data = getData();
    const before = data.lists.length;
    data.lists = data.lists.filter(
      (list) => !(list.id === listId && list.teacherId === teacherId)
    );
    data.sessions = data.sessions.filter((session) => session.listId !== listId);
    saveData(data);
    const client = getSupabaseClient();
    if (client && isUuid(listId)) {
      await client
        .from("spelling_lists")
        .delete()
        .eq("teacher_id", teacherId)
        .eq("id", listId);
    }
    return before !== data.lists.length;
  }

  function listsForTeacher(teacherId) {
    return getData()
      .lists.filter((list) => list.teacherId === teacherId)
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  function getListByCode(code) {
    const cleanCode = normalizeCode(code);
    return getData().lists.find((list) => list.code === cleanCode) || null;
  }

  async function saveWordListSharingToSupabase(teacherId, list) {
    const client = getSupabaseClient();
    if (!client || !isUuid(list?.id)) {
      return list || null;
    }

    const { data, error } = await client
      .from("spelling_lists")
      .update({
        is_shared: list.isShared === true,
        share_mode: list.shareMode === "selected" ? "selected" : "all",
        target_student_ids: list.shareMode === "selected" ? normalizedIdList(list.targetStudentIds) : []
      })
      .eq("teacher_id", teacherId)
      .eq("id", list.id)
      .select("id, teacher_id, name, is_shared, share_mode, target_student_ids, created_at, updated_at")
      .single();

    if (error) {
      console.warn("Spelling list sharing save error:", error);
      return list;
    }

    const savedList = wordListFromRow({ ...data, words: list.words });
    const freshData = getData();
    upsertWordListInData(freshData, savedList);
    saveData(freshData);
    return savedList;
  }

  async function setWordListSharing(teacherId, listId, isShared) {
    const data = getData();
    const list = data.lists.find((item) => item.id === listId && item.teacherId === teacherId);
    if (!list) {
      return null;
    }
    list.isShared = Boolean(isShared);
    list.shareMode ||= "all";
    list.targetStudentIds ||= [];
    list.updatedAt = new Date().toISOString();
    saveData(data);
    return saveWordListSharingToSupabase(teacherId, list);
  }

  async function setWordListAudience(teacherId, listId, shareMode, targetStudentIds = []) {
    const data = getData();
    const list = data.lists.find((item) => item.id === listId && item.teacherId === teacherId);
    if (!list) {
      return null;
    }
    list.shareMode = shareMode === "selected" ? "selected" : "all";
    list.targetStudentIds = Array.isArray(targetStudentIds) ? targetStudentIds.filter(Boolean) : [];
    list.updatedAt = new Date().toISOString();
    saveData(data);
    return saveWordListSharingToSupabase(teacherId, list);
  }

  function getTeacherByClassCode(code) {
    const cleanCode = normalizeCode(code);
    const data = getData();
    return data.teachers.find((teacher) => teacher.classCode === cleanCode) || null;
  }

  function quizFromRow(row = {}) {
    const rowQuestions = Array.isArray(row.questions)
      ? row.questions
      : Array.isArray(row.quiz_questions)
        ? row.quiz_questions
          .slice()
          .sort((a, b) => (Number(a.sort_order) || 0) - (Number(b.sort_order) || 0))
          .map((questionRow) => {
            const choices = Array.isArray(questionRow.quiz_choices)
              ? questionRow.quiz_choices
                .slice()
                .sort((a, b) => (Number(a.sort_order) || 0) - (Number(b.sort_order) || 0))
                .map((choiceRow) => choiceRow.choice_text)
              : Array.isArray(questionRow.choices)
                ? questionRow.choices
                : [];
            return {
              id: questionRow.id || uid("question"),
              type: questionRow.question_type || questionRow.type || "multipleChoice",
              prompt: questionRow.prompt || "",
              choices,
              correctAnswer: questionRow.correct_answer || questionRow.correctAnswer || ""
            };
          })
        : [];

    return {
      id: row.id || uid("quiz"),
      teacherId: row.teacher_id || row.teacherId || "",
      title: row.title || "Untitled quiz",
      questions: rowQuestions.map((question) => normalizeQuizQuestion(question)).filter(Boolean),
      isShared: row.is_shared === true || row.isShared === true,
      shareMode: (row.share_mode || row.shareMode) === "selected" ? "selected" : "all",
      targetStudentIds: normalizedIdList(row.target_student_ids || row.targetStudentIds),
      createdAt: row.created_at || row.createdAt || new Date().toISOString(),
      updatedAt: row.updated_at || row.updatedAt || new Date().toISOString()
    };
  }

  function upsertQuizInData(data, quiz) {
    data.quizzes ||= [];
    const index = data.quizzes.findIndex((item) => item.id === quiz.id && item.teacherId === quiz.teacherId);
    if (index >= 0) {
      data.quizzes[index] = {
        ...data.quizzes[index],
        ...quiz,
        questions: Array.isArray(quiz.questions) ? quiz.questions : []
      };
      return data.quizzes[index];
    }
    data.quizzes.push(quiz);
    return quiz;
  }

  function replaceQuizzesForTeacher(teacherId, quizzes = []) {
    const data = getData();
    data.quizzes = data.quizzes.filter((quiz) => quiz.teacherId !== teacherId);
    quizzes.forEach((quiz) => upsertQuizInData(data, quiz));
    saveData(data);
  }

  async function syncQuizzesForTeacher(teacherId) {
    const client = getSupabaseClient();
    const localQuizzes = quizzesForTeacher(teacherId);
    if (!client || !teacherId) {
      return localQuizzes;
    }

    const unsyncedQuizzes = localQuizzes.filter((quiz) => !isUuid(quiz.id) && quiz.questions?.length);
    for (const quiz of unsyncedQuizzes) {
      await saveQuiz({
        teacherId,
        quizId: quiz.id,
        title: quiz.title,
        questions: quiz.questions
      });
    }

    const { data, error } = await client
      .from("quizzes")
      .select("id, teacher_id, title, is_shared, share_mode, target_student_ids, created_at, updated_at, quiz_questions(id, question_type, prompt, correct_answer, sort_order, quiz_choices(choice_text, sort_order))")
      .eq("teacher_id", teacherId)
      .order("title", { ascending: true });

    if (error) {
      console.warn("Quiz sync error:", error);
      return quizzesForTeacher(teacherId);
    }

    const quizzes = (data || []).map(quizFromRow);
    replaceQuizzesForTeacher(teacherId, quizzes);
    return quizzesForTeacher(teacherId);
  }

  async function saveQuiz({ teacherId, quizId, title, questions }) {
    const cleanTitle = title.trim() || "Untitled quiz";
    const cleanQuestions = questions
      .map((question) => normalizeQuizQuestion(question))
      .filter(Boolean);
    const data = getData();

    if (!teacherId) {
      return { ok: false, message: "Please log in before saving a quiz." };
    }

    if (cleanQuestions.length === 0) {
      return { ok: false, message: "Add at least one quiz question." };
    }

    const existing = data.quizzes.find(
      (quiz) => quiz.id === quizId && quiz.teacherId === teacherId
    );

    let savedQuiz = existing || null;
    if (existing) {
      existing.title = cleanTitle;
      existing.questions = cleanQuestions;
      existing.isShared = existing.isShared === true;
      existing.shareMode ||= "all";
      existing.targetStudentIds ||= [];
      existing.updatedAt = new Date().toISOString();
      saveData(data);
    } else {
      savedQuiz = {
        id: uid("quiz"),
        teacherId,
        title: cleanTitle,
        questions: cleanQuestions,
        isShared: false,
        shareMode: "all",
        targetStudentIds: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      data.quizzes.push(savedQuiz);
      saveData(data);
    }

    const client = getSupabaseClient();
    if (!client) {
      return { ok: true, quiz: savedQuiz, message: `${quizId ? "Saved" : "Created"} ${cleanTitle}.` };
    }

    const quizPayload = {
      teacher_id: teacherId,
      title: cleanTitle,
      is_shared: savedQuiz.isShared === true,
      share_mode: savedQuiz.shareMode === "selected" ? "selected" : "all",
      target_student_ids: savedQuiz.shareMode === "selected" ? normalizedIdList(savedQuiz.targetStudentIds) : []
    };

    const query = isUuid(savedQuiz.id)
      ? client
        .from("quizzes")
        .update(quizPayload)
        .eq("teacher_id", teacherId)
        .eq("id", savedQuiz.id)
        .select("id, teacher_id, title, is_shared, share_mode, target_student_ids, created_at, updated_at")
        .single()
      : client
        .from("quizzes")
        .insert(quizPayload)
        .select("id, teacher_id, title, is_shared, share_mode, target_student_ids, created_at, updated_at")
        .single();

    const { data: savedRow, error } = await query;
    if (error) {
      return { ok: false, quiz: savedQuiz, message: `Could not save this quiz online: ${error.message}` };
    }

    const { data: oldQuestions, error: oldQuestionsError } = await client
      .from("quiz_questions")
      .select("id")
      .eq("quiz_id", savedRow.id);

    if (oldQuestionsError) {
      return { ok: false, quiz: savedQuiz, message: `Could not update the quiz questions online: ${oldQuestionsError.message}` };
    }

    const oldQuestionIds = (oldQuestions || []).map((question) => question.id);
    if (oldQuestionIds.length) {
      await client
        .from("quiz_choices")
        .delete()
        .in("question_id", oldQuestionIds);
      const { error: deleteQuestionsError } = await client
        .from("quiz_questions")
        .delete()
        .eq("quiz_id", savedRow.id);
      if (deleteQuestionsError) {
        return { ok: false, quiz: savedQuiz, message: `Could not replace quiz questions online: ${deleteQuestionsError.message}` };
      }
    }

    for (const [questionIndex, question] of cleanQuestions.entries()) {
      const { data: questionRow, error: questionError } = await client
        .from("quiz_questions")
        .insert({
          quiz_id: savedRow.id,
          question_type: question.type,
          prompt: question.prompt,
          correct_answer: question.correctAnswer,
          sort_order: questionIndex
        })
        .select("id")
        .single();

      if (questionError) {
        return { ok: false, quiz: savedQuiz, message: `Could not save a quiz question online: ${questionError.message}` };
      }

      const { error: choicesError } = await client
        .from("quiz_choices")
        .insert((question.choices || []).map((choice, choiceIndex) => ({
          question_id: questionRow.id,
          choice_text: choice,
          sort_order: choiceIndex
        })));

      if (choicesError) {
        return { ok: false, quiz: savedQuiz, message: `Could not save answer choices online: ${choicesError.message}` };
      }
    }

    const onlineQuiz = quizFromRow({ ...savedRow, questions: cleanQuestions });
    const freshData = getData();
    freshData.quizzes = freshData.quizzes.filter((item) =>
      !(item.teacherId === teacherId && (item.id === savedQuiz.id || item.id === quizId))
    );
    upsertQuizInData(freshData, onlineQuiz);
    saveData(freshData);
    return { ok: true, quiz: onlineQuiz, message: `${quizId ? "Saved" : "Created"} ${cleanTitle}.` };
  }

  function normalizeQuizQuestion(question) {
    const prompt = String(question.prompt || "").trim();
    const type = question.type === "trueFalse" ? "trueFalse" : "multipleChoice";

    if (!prompt) {
      return null;
    }

    if (type === "trueFalse") {
      const correctAnswer = question.correctAnswer === "False" ? "False" : "True";
      return {
        id: question.id || uid("question"),
        type,
        prompt,
        choices: ["True", "False"],
        correctAnswer
      };
    }

    const choices = uniqueWords((question.choices || []).map((choice) => String(choice).trim()))
      .slice(0, 4);
    const correctAnswer = String(question.correctAnswer || "").trim();

    if (choices.length < 2 || !correctAnswer || !choices.includes(correctAnswer)) {
      return null;
    }

    return {
      id: question.id || uid("question"),
      type,
      prompt,
      choices,
      correctAnswer
    };
  }

  function quizzesForTeacher(teacherId) {
    return getData()
      .quizzes.filter((quiz) => quiz.teacherId === teacherId)
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  async function deleteQuiz(teacherId, quizId) {
    const data = getData();
    const before = data.quizzes.length;
    data.quizzes = data.quizzes.filter(
      (quiz) => !(quiz.id === quizId && quiz.teacherId === teacherId)
    );
    data.quizAttempts = data.quizAttempts.filter((attempt) => attempt.quizId !== quizId);
    saveData(data);
    const client = getSupabaseClient();
    if (client && isUuid(quizId)) {
      await client
        .from("quizzes")
        .delete()
        .eq("teacher_id", teacherId)
        .eq("id", quizId);
    }
    return before !== data.quizzes.length;
  }

  async function saveQuizSharingToSupabase(teacherId, quiz) {
    const client = getSupabaseClient();
    if (!client || !isUuid(quiz?.id)) {
      return quiz || null;
    }

    const { data, error } = await client
      .from("quizzes")
      .update({
        is_shared: quiz.isShared === true,
        share_mode: quiz.shareMode === "selected" ? "selected" : "all",
        target_student_ids: quiz.shareMode === "selected" ? normalizedIdList(quiz.targetStudentIds) : []
      })
      .eq("teacher_id", teacherId)
      .eq("id", quiz.id)
      .select("id, teacher_id, title, is_shared, share_mode, target_student_ids, created_at, updated_at")
      .single();

    if (error) {
      console.warn("Quiz sharing save error:", error);
      return quiz;
    }

    const savedQuiz = quizFromRow({ ...data, questions: quiz.questions });
    const freshData = getData();
    upsertQuizInData(freshData, savedQuiz);
    saveData(freshData);
    return savedQuiz;
  }

  async function setQuizSharing(teacherId, quizId, isShared) {
    const data = getData();
    const quiz = data.quizzes.find((item) => item.id === quizId && item.teacherId === teacherId);
    if (!quiz) {
      return null;
    }
    quiz.isShared = Boolean(isShared);
    quiz.shareMode ||= "all";
    quiz.targetStudentIds ||= [];
    quiz.updatedAt = new Date().toISOString();
    saveData(data);
    if (!isUuid(quiz.id)) {
      const result = await saveQuiz({
        teacherId,
        quizId: quiz.id,
        title: quiz.title,
        questions: quiz.questions
      });
      return result.ok ? result.quiz : quiz;
    }
    return saveQuizSharingToSupabase(teacherId, quiz);
  }

  async function setQuizAudience(teacherId, quizId, shareMode, targetStudentIds = []) {
    const data = getData();
    const quiz = data.quizzes.find((item) => item.id === quizId && item.teacherId === teacherId);
    if (!quiz) {
      return null;
    }
    quiz.shareMode = shareMode === "selected" ? "selected" : "all";
    quiz.targetStudentIds = Array.isArray(targetStudentIds) ? targetStudentIds.filter(Boolean) : [];
    quiz.updatedAt = new Date().toISOString();
    saveData(data);
    if (!isUuid(quiz.id)) {
      const result = await saveQuiz({
        teacherId,
        quizId: quiz.id,
        title: quiz.title,
        questions: quiz.questions
      });
      return result.ok ? result.quiz : quiz;
    }
    return saveQuizSharingToSupabase(teacherId, quiz);
  }

  function getContentAssignment(data, teacherId, itemId, itemType) {
    return data.contentAssignments.find(
      (assignment) =>
        assignment.teacherId === teacherId &&
        assignment.itemId === itemId &&
        assignment.itemType === itemType
    ) || null;
  }

  function contentAssignmentForTeacher(teacherId, itemId, itemType) {
    const data = getData();
    const assignment = getContentAssignment(data, teacherId, itemId, itemType);
    return assignment || {
      teacherId,
      itemId,
      itemType,
      isShared: false,
      shareMode: "all",
      targetStudentIds: [],
      retakeStudentIds: []
    };
  }

  function contentAssignmentsForTeacher(teacherId) {
    return getData().contentAssignments.filter((assignment) => assignment.teacherId === teacherId);
  }

  async function syncContentAssignmentsForTeacher(teacherId) {
    const client = getSupabaseClient();
    const localAssignments = contentAssignmentsForTeacher(teacherId);
    if (!client || !teacherId) {
      return localAssignments;
    }

    const { data, error } = await client
      .from("content_assignments")
      .select("id, teacher_id, item_id, item_type, is_shared, share_mode, target_student_ids, retake_student_ids, created_at, updated_at")
      .eq("teacher_id", teacherId);

    if (error) {
      console.warn("Content assignment sync error:", error);
      return contentAssignmentsForTeacher(teacherId);
    }

    const assignments = (data || []).map(contentAssignmentFromRow);
    cacheContentAssignments(assignments);
    const onlineAssignmentKeys = new Set(assignments.map(contentAssignmentKey));
    const localAssignmentsToUpload = localAssignments.filter((assignment) =>
      !onlineAssignmentKeys.has(contentAssignmentKey(assignment)) &&
      (
        assignment.isShared === true ||
        normalizedIdList(assignment.targetStudentIds).length > 0 ||
        normalizedIdList(assignment.retakeStudentIds).length > 0
      )
    );

    if (localAssignmentsToUpload.length) {
      const { data: uploadedRows, error: uploadError } = await client
        .from("content_assignments")
        .upsert(localAssignmentsToUpload.map(contentAssignmentToRow), {
          onConflict: "teacher_id,item_id,item_type"
        })
        .select("id, teacher_id, item_id, item_type, is_shared, share_mode, target_student_ids, retake_student_ids, created_at, updated_at");

      if (uploadError) {
        console.warn("Content assignment upload error:", uploadError);
      } else {
        cacheContentAssignments((uploadedRows || []).map(contentAssignmentFromRow));
      }
    }

    return contentAssignmentsForTeacher(teacherId);
  }

  async function syncContentAssignmentsForStudentLogin(code, name, pin, teacherId = "") {
    const client = getSupabaseClient();
    if (!client) {
      return { ok: true, assignments: [] };
    }

    const { data, error } = await client.rpc("content_assignments_for_student", {
      p_student_code: normalizeCode(code),
      p_first_name: normalizeName(name),
      p_pin: String(pin || "").trim().replace(/\D/g, "")
    });

    if (error) {
      console.warn("Student content assignment sync error:", error);
      replaceContentAssignmentsForTeacher(teacherId, []);
      return {
        ok: false,
        message: `Shared lessons could not refresh: ${error.message}`
      };
    }

    const assignments = addCurrentActivityAliases((data || []).map(contentAssignmentFromRow));
    replaceContentAssignmentsForTeacher(teacherId, assignments);
    return { ok: true, assignments };
  }

  async function syncWordListsForStudentLogin(code, name, pin, teacherId = "") {
    const client = getSupabaseClient();
    if (!client) {
      return { ok: true, lists: [] };
    }

    const { data, error } = await client.rpc("spelling_lists_for_student", {
      p_student_code: normalizeCode(code),
      p_first_name: normalizeName(name),
      p_pin: String(pin || "").trim().replace(/\D/g, "")
    });

    if (error) {
      replaceWordListsForTeacher(teacherId, []);
      return {
        ok: false,
        message: `Spelling lists could not refresh: ${error.message}`
      };
    }

    const lists = (data || []).map(wordListFromRow);
    replaceWordListsForTeacher(teacherId, lists);
    return { ok: true, lists };
  }

  async function syncQuizzesForStudentLogin(code, name, pin, teacherId = "") {
    const client = getSupabaseClient();
    if (!client) {
      return { ok: true, quizzes: [] };
    }

    const { data, error } = await client.rpc("quizzes_for_student", {
      p_student_code: normalizeCode(code),
      p_first_name: normalizeName(name),
      p_pin: String(pin || "").trim().replace(/\D/g, "")
    });

    if (error) {
      replaceQuizzesForTeacher(teacherId, []);
      return {
        ok: false,
        message: `Quizzes could not refresh: ${error.message}`
      };
    }

    const quizzes = (data || []).map(quizFromRow);
    replaceQuizzesForTeacher(teacherId, quizzes);
    return { ok: true, quizzes };
  }

  async function setContentAssignment(teacherId, itemId, itemType, settings = {}) {
    const data = getData();
    let assignment = getContentAssignment(data, teacherId, itemId, itemType);
    if (!assignment) {
      assignment = {
        id: uid("assignment"),
        teacherId,
        itemId,
        itemType,
        isShared: false,
        shareMode: "all",
        targetStudentIds: [],
        retakeStudentIds: [],
        createdAt: new Date().toISOString()
      };
      data.contentAssignments.push(assignment);
    }

    if (Object.prototype.hasOwnProperty.call(settings, "isShared")) {
      assignment.isShared = Boolean(settings.isShared);
    }
    if (settings.shareMode) {
      assignment.shareMode = settings.shareMode === "selected" ? "selected" : "all";
    }
    if (Array.isArray(settings.targetStudentIds)) {
      assignment.targetStudentIds = settings.targetStudentIds.filter(Boolean);
    }
    if (Array.isArray(settings.retakeStudentIds)) {
      assignment.retakeStudentIds = settings.retakeStudentIds.filter(Boolean);
    }
    assignment.updatedAt = new Date().toISOString();
    saveData(data);

    const client = getSupabaseClient();
    if (!client || !teacherId) {
      return assignment;
    }

    const { data: savedRow, error } = await client
      .from("content_assignments")
      .upsert(contentAssignmentToRow(assignment), {
        onConflict: "teacher_id,item_id,item_type"
      })
      .select("id, teacher_id, item_id, item_type, is_shared, share_mode, target_student_ids, retake_student_ids, created_at, updated_at")
      .single();

    if (error) {
      console.warn("Content assignment save error:", error);
      return assignment;
    }

    const savedAssignment = contentAssignmentFromRow(savedRow);
    const freshData = getData();
    upsertContentAssignmentInData(freshData, savedAssignment);
    saveData(freshData);
    return savedAssignment;
  }

  function contentItemIsSharedWithStudent(teacherId, itemId, itemType, studentId) {
    const assignment = contentAssignmentForTeacher(teacherId, itemId, itemType);
    return isItemSharedWithStudent(assignment, studentId);
  }

  function finalQuizRetakeForStudent(teacherId, quizId, studentId) {
    const assignment = contentAssignmentForTeacher(teacherId, quizId, "finalQuiz");
    return Array.isArray(assignment.retakeStudentIds) && assignment.retakeStudentIds.includes(studentId);
  }

  async function allowFinalQuizRetake(teacherId, quizId, studentId) {
    const data = getData();
    let assignment = getContentAssignment(data, teacherId, quizId, "finalQuiz");
    if (!assignment) {
      assignment = {
        id: uid("assignment"),
        teacherId,
        itemId: quizId,
        itemType: "finalQuiz",
        isShared: false,
        shareMode: "all",
        targetStudentIds: [],
        retakeStudentIds: [],
        createdAt: new Date().toISOString()
      };
      data.contentAssignments.push(assignment);
    }
    assignment.retakeStudentIds ||= [];
    if (!assignment.retakeStudentIds.includes(studentId)) {
      assignment.retakeStudentIds.push(studentId);
    }
    data.quizAttempts = data.quizAttempts.filter(
      (attempt) => !(attempt.quizId === quizId && attempt.studentId === studentId)
    );
    assignment.updatedAt = new Date().toISOString();
    saveData(data);
    await setContentAssignment(teacherId, quizId, "finalQuiz", {
      isShared: assignment.isShared,
      shareMode: assignment.shareMode,
      targetStudentIds: assignment.targetStudentIds,
      retakeStudentIds: assignment.retakeStudentIds
    });

    const client = getSupabaseClient();
    if (client) {
      const { error } = await client.rpc("delete_lesson_quiz_attempt_for_student", {
        p_quiz_id: quizId,
        p_student_id: studentId
      });
      if (error) {
        console.error("Final quiz retake error:", error);
      }
    }
    return assignment;
  }

  function consumeFinalQuizRetake(teacherId, quizId, studentId) {
    const data = getData();
    const assignment = getContentAssignment(data, teacherId, quizId, "finalQuiz");
    if (!assignment?.retakeStudentIds?.length) {
      return null;
    }
    assignment.retakeStudentIds = assignment.retakeStudentIds.filter((id) => id !== studentId);
    assignment.updatedAt = new Date().toISOString();
    saveData(data);
    return assignment;
  }

  function activitiesForClassCode(code) {
    const teacher = getTeacherByClassCode(code);
    if (!teacher) {
      return null;
    }
    const data = getData();
    return {
      teacher,
      code: teacher.classCode,
      lists: data.lists.filter((list) => list.teacherId === teacher.id && list.isShared === true && list.shareMode !== "selected"),
      quizzes: data.quizzes.filter((quiz) => quiz.teacherId === teacher.id && quiz.isShared === true && quiz.shareMode !== "selected")
    };
  }

  async function studentAccessForClassCode(code, name, pin) {
    const client = getSupabaseClient();
    if (client) {
      const cleanCode = normalizeCode(code);
      const cleanName = normalizeName(name);
      const cleanPin = String(pin || "").trim().replace(/\D/g, "");

      if (!cleanCode || !cleanName || !cleanPin) {
        return { ok: false, message: "Enter your code, first name, and PIN." };
      }

      const { data, error } = await client.rpc("student_access_for_code", {
        p_student_code: cleanCode,
        p_first_name: cleanName,
        p_pin: cleanPin
      });

      if (error) {
        console.error("Student Supabase login error:", error);
        return {
          ok: false,
          message: `Student login setup error: ${error.message}`
        };
      }

      const match = data?.[0];
      if (!match) {
        return { ok: false, message: "Name or PIN did not match this class." };
      }

      const assignmentSync = await syncContentAssignmentsForStudentLogin(cleanCode, cleanName, cleanPin, match.teacher_id);
      if (!assignmentSync.ok) {
        return {
          ok: false,
          message: assignmentSync.message
        };
      }
      const wordListSync = await syncWordListsForStudentLogin(cleanCode, cleanName, cleanPin, match.teacher_id);
      if (!wordListSync.ok) {
        return {
          ok: false,
          message: wordListSync.message
        };
      }
      const quizSync = await syncQuizzesForStudentLogin(cleanCode, cleanName, cleanPin, match.teacher_id);
      if (!quizSync.ok) {
        return {
          ok: false,
          message: quizSync.message
        };
      }
      const localData = getData();
      const teacher = {
        id: match.teacher_id,
        email: match.teacher_email,
        classCode: match.student_code
      };
      const student = {
        id: match.student_id,
        teacherId: match.teacher_id,
        name: match.student_name,
        pin: cleanPin,
        isActive: true
      };

      return {
        ok: true,
        student,
        teacher,
        code: match.student_code,
        lists: wordListSync.lists,
        quizzes: quizSync.quizzes
      };
    }

    const teacher = getTeacherByClassCode(code);
    const cleanName = normalizeName(name);
    const cleanPin = String(pin || "").trim().replace(/\D/g, "");

    if (!teacher) {
      return { ok: false, message: "That code was not found. Check it with your teacher." };
    }

    const data = getData();
    const student = data.students.find(
      (item) =>
        item.teacherId === teacher.id &&
        item.isActive !== false &&
        item.name.toLowerCase() === cleanName.toLowerCase() &&
        item.pin === cleanPin
    );

    if (!student) {
      return { ok: false, message: "Name or PIN did not match this class." };
    }

    return {
      ok: true,
      student,
      teacher,
      code: teacher.classCode,
      lists: data.lists.filter((list) => list.teacherId === teacher.id && isItemSharedWithStudent(list, student.id)),
      quizzes: data.quizzes.filter((quiz) => quiz.teacherId === teacher.id && isItemSharedWithStudent(quiz, student.id))
    };
  }

  function getQuizById(quizId) {
    return getData().quizzes.find((quiz) => quiz.id === quizId) || null;
  }

  function saveQuizAttempt({ quizId, quizTitle, teacherId, studentId, studentName, studentCode, studentPin, score, total, answers, isFinalLessonQuiz, percent, reviewNotes, allowRetake }) {
    const data = getData();
    if (isFinalLessonQuiz) {
      const existing = data.quizAttempts.find(
        (item) =>
          item.quizId === quizId &&
          (
            (studentId && item.studentId === studentId) ||
            (!studentId && item.studentName.toLowerCase() === normalizeName(studentName).toLowerCase())
          )
      );
      if (existing && !allowRetake) {
        return existing;
      }
      if (existing && allowRetake) {
        data.quizAttempts = data.quizAttempts.filter((attempt) => attempt.id !== existing.id);
      }
    }

    const attempt = {
      id: uid("quizAttempt"),
      quizId,
      quizTitle: quizTitle || "",
      teacherId,
      studentId: studentId || "",
      studentName: normalizeName(studentName),
      score,
      total,
      percent: Number(percent) || Math.round((score / total) * 100),
      answers,
      isFinalLessonQuiz: Boolean(isFinalLessonQuiz),
      reviewNotes: reviewNotes || [],
      createdAt: new Date().toISOString()
    };
    data.quizAttempts.push(attempt);
    if (isFinalLessonQuiz && allowRetake && studentId) {
      const assignment = getContentAssignment(data, teacherId, quizId, "finalQuiz");
      if (assignment?.retakeStudentIds?.length) {
        assignment.retakeStudentIds = assignment.retakeStudentIds.filter((id) => id !== studentId);
        assignment.updatedAt = new Date().toISOString();
      }
    }
    saveData(data);

    const client = getSupabaseClient();
    if (client && isFinalLessonQuiz) {
      const cleanCode = normalizeCode(studentCode || "");
      const cleanName = normalizeName(studentName || "");
      const cleanPin = String(studentPin || "").trim().replace(/\D/g, "");
      if (cleanCode && cleanName && cleanPin && quizId) {
        client.rpc("record_student_lesson_quiz_attempt", {
          p_student_code: cleanCode,
          p_first_name: cleanName,
          p_pin: cleanPin,
          p_quiz_id: quizId,
          p_quiz_title: quizTitle || "Final lesson quiz",
          p_score: Number(score) || 0,
          p_total: Number(total) || 0,
          p_percent: Number(percent) || Math.round((score / total) * 100),
          p_answers: answers || [],
          p_review_notes: reviewNotes || []
        }).then(({ error }) => {
          if (error) {
            console.error("Final quiz save error:", error);
          }
        });
      }
    }

    return attempt;
  }

  async function quizAttemptsForTeacher(teacherId) {
    const localAttempts = getData()
      .quizAttempts.filter((attempt) => attempt.teacherId === teacherId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const client = getSupabaseClient();
    if (client) {
      const { data, error } = await client
        .from("lesson_quiz_attempts")
        .select("id, teacher_id, student_id, quiz_id, quiz_title, score, total, percent, answers, review_notes, created_at")
        .eq("teacher_id", teacherId)
        .order("created_at", { ascending: false });

      if (error) {
        return localAttempts;
      }

      const onlineAttempts = data.map(lessonQuizAttemptFromRow);
      const onlineKeys = new Set(onlineAttempts.map((attempt) => `${attempt.studentId}:${attempt.quizId}`));
      return [
        ...onlineAttempts,
        ...localAttempts.filter((attempt) => !onlineKeys.has(`${attempt.studentId}:${attempt.quizId}`))
      ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return localAttempts;
  }

  function quizAttemptForStudent(quizId, studentId, studentName) {
    const cleanName = normalizeName(studentName || "");
    return getData()
      .quizAttempts
      .find((attempt) =>
        attempt.quizId === quizId &&
        (
          (studentId && attempt.studentId === studentId) ||
          (!studentId && attempt.studentName.toLowerCase() === cleanName.toLowerCase())
        )
      ) || null;
  }

  function localQuizAttemptsForStudent(studentId, studentName) {
    const cleanName = normalizeName(studentName || "");
    return getData()
      .quizAttempts
      .filter((attempt) =>
        (studentId && attempt.studentId === studentId) ||
        (!studentId && attempt.studentName.toLowerCase() === cleanName.toLowerCase())
      )
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  function saveLocalLearningProgress({ teacherId, studentId, studentName, activityId, activityTitle, levelIndex, stepIndex, earnedStars, completedSections, status }) {
    const data = getData();
    const existing = data.learningProgress.find(
      (progress) =>
        progress.activityId === activityId &&
        (
          (studentId && progress.studentId === studentId) ||
          (!studentId && progress.studentName.toLowerCase() === normalizeName(studentName).toLowerCase())
        )
    );
    const progressRecord = existing || {
      id: uid("learningProgress"),
      teacherId,
      studentId: studentId || "",
      studentName: normalizeName(studentName),
      activityId,
      createdAt: new Date().toISOString()
    };

    progressRecord.teacherId = teacherId || progressRecord.teacherId || "";
    progressRecord.studentId = studentId || progressRecord.studentId || "";
    progressRecord.studentName = normalizeName(studentName);
    progressRecord.activityTitle = activityTitle || "Learning mission";
    progressRecord.levelIndex = Number(levelIndex) || 0;
    progressRecord.stepIndex = Number(stepIndex) || 0;
    progressRecord.earnedStars = Number(earnedStars) || 0;
    progressRecord.completedSections = completedSections || [];
    progressRecord.status = status || "in_progress";
    progressRecord.savedAt = new Date().toISOString();
    progressRecord.updatedAt = progressRecord.savedAt;

    if (!existing) {
      data.learningProgress.push(progressRecord);
    }
    saveData(data);
    return progressRecord;
  }

  function saveLearningProgress({ teacherId, studentId, studentCode, studentPin, studentName, activityId, activityTitle, levelIndex, stepIndex, earnedStars, completedSections, status }) {
    if (!activityId) {
      return null;
    }

    const localRecord = saveLocalLearningProgress({
      teacherId,
      studentId,
      studentName,
      activityId,
      activityTitle,
      levelIndex,
      stepIndex,
      earnedStars,
      completedSections,
      status
    });
    const client = getSupabaseClient();
    if (!client) {
      return localRecord;
    }

    const cleanCode = normalizeCode(studentCode || "");
    const cleanName = normalizeName(studentName || "");
    const cleanPin = String(studentPin || "").trim().replace(/\D/g, "");
    if (!cleanCode || !cleanName || !cleanPin || !activityId) {
      return localRecord;
    }

    client.rpc("upsert_student_learning_progress", {
      p_student_code: cleanCode,
      p_first_name: cleanName,
      p_pin: cleanPin,
      p_activity_id: activityId,
      p_activity_title: activityTitle || "Learning mission",
      p_level_index: Number(levelIndex) || 0,
      p_step_index: Number(stepIndex) || 0,
      p_earned_stars: Number(earnedStars) || 0,
      p_completed_sections: completedSections || [],
      p_status: status || "in_progress"
    }).then(({ error }) => {
      if (error) {
        console.error("Learning progress save error:", error);
      }
    });

    return localRecord;
  }

  function saveLearningAttempt({ teacherId, studentId, studentName, studentCode, studentPin, activityId, activityTitle, earnedStars, levelsCompleted, totalQuestions, rewardCollected }) {
    const data = getData();
    const attempt = {
      id: uid("learningAttempt"),
      teacherId,
      studentId: studentId || "",
      studentName: normalizeName(studentName),
      activityId,
      activityTitle,
      earnedStars: Number(earnedStars) || 0,
      levelsCompleted: Number(levelsCompleted) || 0,
      totalQuestions: Number(totalQuestions) || 0,
      rewardCollected: Boolean(rewardCollected),
      createdAt: new Date().toISOString(),
      status: "completed"
    };
    data.learningAttempts.push(attempt);
    saveData(data);

    const client = getSupabaseClient();
    if (client) {
      const cleanCode = normalizeCode(studentCode || "");
      const cleanName = normalizeName(studentName || "");
      const cleanPin = String(studentPin || "").trim().replace(/\D/g, "");
      if (cleanCode && cleanName && cleanPin && activityId) {
        client.rpc("record_student_learning_attempt", {
          p_student_code: cleanCode,
          p_first_name: cleanName,
          p_pin: cleanPin,
          p_activity_id: activityId,
          p_activity_title: activityTitle || "Learning mission",
          p_earned_stars: Number(earnedStars) || 0,
          p_levels_completed: Number(levelsCompleted) || 0,
          p_total_questions: Number(totalQuestions) || 0,
          p_reward_collected: Boolean(rewardCollected)
        }).then(({ error }) => {
          if (error) {
            console.error("Learning attempt save error:", error);
          }
        });
      }

      return attempt;
    }

    return attempt;
  }

  async function learningAttemptsForTeacher(teacherId) {
    const localAttempts = getData()
      .learningAttempts.filter((attempt) => attempt.teacherId === teacherId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const client = getSupabaseClient();
    if (client) {
      const { data, error } = await client
        .from("learning_attempts")
        .select("id, teacher_id, student_id, activity_id, activity_title, earned_stars, levels_completed, total_questions, reward_collected, created_at")
        .eq("teacher_id", teacherId)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Learning attempts fetch error:", error);
        return localAttempts;
      }

      const onlineAttempts = data.map(learningAttemptFromRow);
      return onlineAttempts.length > 0 ? onlineAttempts : localAttempts;
    }

    return localAttempts;
  }

  async function learningProgressForTeacher(teacherId) {
    const localProgress = getData()
      .learningProgress.filter((progress) => progress.teacherId === teacherId)
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    const client = getSupabaseClient();
    if (client) {
      const { data, error } = await client
        .from("learning_progress")
        .select("id, teacher_id, student_id, activity_id, activity_title, level_index, step_index, earned_stars, completed_sections, status, saved_at, updated_at")
        .eq("teacher_id", teacherId)
        .order("updated_at", { ascending: false });

      if (error) {
        console.error("Learning progress fetch error:", error);
        return localProgress;
      }

      const onlineProgress = data.map(learningProgressFromRow);
      return onlineProgress.length > 0 ? onlineProgress : localProgress;
    }

    return localProgress;
  }

  function normalizeName(name) {
    return name.trim().replace(/\s+/g, " ");
  }

  function wordProgressFromList(words) {
    return words.map((word) => ({
      word,
      level: 0,
      correct: 0,
      missed: 0,
      mastered: false,
      lastPracticedAt: null
    }));
  }

  function getOrCreateStudentSession(list, studentName, studentId = "") {
    const cleanName = normalizeName(studentName);
    const data = getData();
    let session = data.sessions.find(
      (item) =>
        item.listId === list.id &&
        (
          (studentId && item.studentId === studentId) ||
          (!studentId && item.studentName.toLowerCase() === cleanName.toLowerCase())
        )
    );

    if (!session) {
      session = {
        id: uid("session"),
        listId: list.id,
        listCode: list.code,
        listName: list.name,
        teacherId: list.teacherId,
        studentId,
        studentName: cleanName,
        currentWordIndex: 0,
        completed: false,
        wordProgress: wordProgressFromList(list.words),
        history: [],
        activeRun: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      data.sessions.push(session);
    } else {
      syncSessionWords(session, list.words);
    }

    saveData(data);
    return session;
  }

  function syncSessionWords(session, words) {
    const existing = new Map(session.wordProgress.map((item) => [item.word.toLowerCase(), item]));
    session.wordProgress = words.map((word) => {
      return existing.get(word.toLowerCase()) || {
        word,
        level: 0,
        correct: 0,
        missed: 0,
        mastered: false,
        lastPracticedAt: null
      };
    });
    session.currentWordIndex = Math.min(session.currentWordIndex || 0, session.wordProgress.length - 1);
  }

  function updateStudentSession(sessionId, updater) {
    const data = getData();
    const session = data.sessions.find((item) => item.id === sessionId);
    if (!session) {
      return null;
    }
    updater(session);
    session.updatedAt = new Date().toISOString();
    saveData(data);
    return session;
  }

  function sessionsForTeacher(teacherId) {
    return getData()
      .sessions.filter((session) => session.teacherId === teacherId)
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  function formatDateTime(value) {
    if (!value) {
      return "Not yet";
    }
    return new Date(value).toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => {
      const replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };
      return replacements[char];
    });
  }

  function curriculumCatalog() {
    const catalog = window.PracticeStarContent?.catalog;
    if (catalog?.libraries?.length) {
      return catalog;
    }

    const fallback = window.PracticeStarContent?.grade5Math;
    if (!fallback) {
      return { libraries: [] };
    }

    return {
      libraries: [
        {
          id: "grade-5-math",
          grade: fallback.grade,
          subject: fallback.subject,
          title: fallback.title || `${fallback.subject} - Grade ${fallback.grade}`,
          basePath: "content/grade-5/math",
          indexFile: "content/grade-5/math/index.json",
          dataKey: "grade5Math"
        }
      ]
    };
  }

  function curriculumLibraries() {
    const catalog = curriculumCatalog();
    return (catalog.libraries || [])
      .map((library) => {
        const data = window.PracticeStarContent?.[library.dataKey];
        if (!data) {
          return {
            ...library,
            units: []
          };
        }
        return {
          ...library,
          subject: data.subject || library.subject,
          grade: data.grade || library.grade,
          title: data.title || library.title,
          units: curriculumUnitsFromLibraryData(data)
        };
      })
      .filter(Boolean);
  }

  function curriculumUnitsFromLibraryData(data) {
    const loadedUnits = Array.isArray(data.units) ? data.units : [];
    const unitFiles = Array.isArray(data.unitFiles) ? data.unitFiles : [];

    if (!unitFiles.length) {
      return loadedUnits;
    }

    return unitFiles.map((unitInfo) => {
      const unitDataKey = unitKeyFromDataFile(unitInfo.dataFile);
      const matchingLoadedUnit = loadedUnits.find((unit) => unit.id === unitInfo.id);
      const matchingGlobalUnit =
        window.PracticeStarUnit?.[unitInfo.id] ||
        window.PracticeStarUnit?.[unitDataKey] ||
        Object.values(window.PracticeStarUnit || {}).find((unit) => unit?.id === unitInfo.id);
      const resolvedUnit = matchingLoadedUnit || matchingGlobalUnit || {};

      return {
        ...unitInfo,
        ...resolvedUnit,
        id: resolvedUnit.id || unitInfo.id,
        title: resolvedUnit.title || unitInfo.title,
        strand: resolvedUnit.strand || unitInfo.strand,
        unitGoal: resolvedUnit.unitGoal || unitInfo.unitGoal || "",
        lessons: resolvedUnit.lessons || []
      };
    });
  }

  function unitKeyFromDataFile(dataFile) {
    return String(dataFile || "")
      .split("/")
      .pop()
      .replace(/\.js$/, "");
  }

  function curriculumLibraryFor({ grade, subject, libraryId } = {}) {
    const normalizedSubject = String(subject || "").toLowerCase();
    return curriculumLibraries().find((library) => {
      if (libraryId && library.id !== libraryId) {
        return false;
      }
      if (grade && Number(library.grade) !== Number(grade)) {
        return false;
      }
      if (normalizedSubject && String(library.subject || "").toLowerCase() !== normalizedSubject) {
        return false;
      }
      return true;
    }) || null;
  }

  function curriculumUnitsFor(options = {}) {
    const library = curriculumLibraryFor(options);
    const units = library?.units || [];
    return options.unitId ? units.filter((unit) => unit.id === options.unitId) : units;
  }

  function curriculumLessonsFor(options = {}) {
    return curriculumUnitsFor(options).flatMap((unit) =>
      (unit.lessons || []).map((lesson) => ({
        ...lesson,
        unitId: unit.id,
        unitTitle: unit.title,
        subject: curriculumLibraryFor(options)?.subject || "",
        grade: curriculumLibraryFor(options)?.grade || ""
      }))
    );
  }

  return {
    addStudent,
    createTeacher,
    activitiesForClassCode,
    deleteQuiz,
    deleteWordList,
    ensureTeacherClassCode,
    escapeHtml,
    formatDateTime,
    getCurrentTeacher,
    getListByCode,
    getQuizById,
    getTeacherByClassCode,
    getOrCreateStudentSession,
    contentAssignmentForTeacher,
    contentAssignmentsForTeacher,
    contentItemIsSharedWithStudent,
    curriculumCatalog,
    curriculumLibraries,
    curriculumLibraryFor,
    curriculumLessonsFor,
    curriculumUnitsFor,
    learningAttemptsForTeacher,
    learningProgressForTeacher,
    listsForTeacher,
    loginTeacher,
    logoutTeacher,
    normalizeCode,
    normalizeName,
    parseLines,
    parseWords,
    quizAttemptsForTeacher,
    quizAttemptForStudent,
    localQuizAttemptsForStudent,
    quizzesForTeacher,
    saveQuiz,
    saveLearningAttempt,
    saveLearningProgress,
    saveQuizAttempt,
    saveWordList,
    sessionsForTeacher,
    allowFinalQuizRetake,
    finalQuizRetakeForStudent,
    setContentAssignment,
    setQuizAudience,
    setQuizSharing,
    setText,
    syncContentAssignmentsForTeacher,
    syncQuizzesForTeacher,
    syncWordListsForTeacher,
    setWordListAudience,
    setWordListSharing,
    studentAccessForClassCode,
    studentsForTeacher,
    removeStudent,
    uniqueWords,
    updateStudentSession
  };
})();

window.PracticeStar = PracticeStar;
