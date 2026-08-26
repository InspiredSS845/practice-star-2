window.PracticeStarUnit = window.PracticeStarUnit || {};
window.PracticeStarContent = window.PracticeStarContent || {};

(function () {
  function intro(level, title, prompt, text) {
    return {
      kind: "lessonIntro",
      level: level,
      title: title,
      prompt: prompt,
      text: text
    };
  }

  function question(level, title, prompt, choices, correctAnswer, feedback, hint) {
    return {
      kind: "question",
      level: level,
      title: title,
      prompt: prompt,
      choices: choices,
      correctAnswer: correctAnswer,
      feedback: feedback,
      hint: hint
    };
  }

  function complete(level, title, prompt) {
    return {
      kind: "levelComplete",
      level: level,
      title: title,
      prompt: prompt,
      stars: 10
    };
  }

  function quizQuestion(section, skill, type, prompt, choices, correctAnswer, reviewNote) {
    return {
      section: section,
      skill: skill,
      type: type,
      prompt: prompt,
      choices: choices,
      correctAnswer: correctAnswer,
      reviewNote: reviewNote
    };
  }

  function lesson(options) {
    return {
      id: options.id,
      title: options.title,
      type: "lesson",
      learningGoal: options.learningGoal,
      successCriteria: options.successCriteria,
      vocabulary: options.vocabulary,
      teacherOverview: options.teacherOverview,
      lessonContent: options.lessonContent,
      practiceIdeas: [
        "Share the student mission for practice stars.",
        "Use the lesson quiz as a scored check.",
        "Review missed questions before assigning the next Language lesson."
      ],
      studentActivityPlan: {
        title: options.activityTitle,
        description: options.mission,
        levels: options.levels,
        reward: "10 practice stars after each completed level"
      },
      quizPlan: {
        title: options.quizTitle,
        questionCount: options.quizQuestions.length,
        format: "Multiple choice and true/false questions with one score at the end.",
        focus: options.quizFocus
      },
      assessmentPlan: "Use the activity for guided practice and the quiz to check independent understanding.",
      studentActivity: {
        type: "languageQuestionSet",
        version: "2026-08-24-language-unit-2-content-1",
        title: options.activityTitle,
        mission: options.mission,
        reward: {
          stars: 20
        },
        steps: options.steps
      },
      quiz: {
        title: options.quizTitle,
        questions: options.quizQuestions
      },
      teacherSummary: options.teacherSummary || options.teacherOverview
    };
  }

  var unit = {
    "id": "grade-5-language-unit-2",
    "title": "Vocabulary, Grammar, and Sentence Skills",
    "strand": "Foundations of Language",
    "unitGoal": "Students will strengthen word meaning, grammar, sentence structure, punctuation, and editing skills so their reading and writing become clearer and more precise.",
    "lessons": [
      lesson({
        id: "grade-5-language-unit-2-context-clues",
        title: "Context Clues and Word Meaning",
        learningGoal: "Students will use nearby words, examples, contrasts, and explanations to figure out unfamiliar words.",
        successCriteria: [
          "I can use clues in a sentence to choose a likely word meaning.",
          "I can tell whether a clue gives an example, contrast, or explanation.",
          "I can check whether a word meaning makes sense in the whole sentence."
        ],
        vocabulary: ["context clue", "definition", "example", "contrast", "inference"],
        teacherOverview: "Students practise using context clues to infer word meaning in grade-level sentences.",
        lessonContent: [
          "Context clues are hints around an unfamiliar word that help the reader work out a likely meaning.",
          "A definition or explanation clue tells the meaning directly, often in the same sentence.",
          "An example clue gives one or more examples that help narrow the meaning.",
          "A contrast clue uses words such as but, unlike, although, or however to show an opposite or different idea.",
          "A careful reader checks the possible meaning in the whole sentence before choosing an answer."
        ],
        activityTitle: "Context Clue Detective",
        mission: "Use clues in sentences to figure out precise word meanings.",
        levels: ["Level 1: Find the Clue", "Level 2: Choose the Meaning"],
        quizTitle: "Context Clues and Word Meaning Quiz",
        quizFocus: "Context clues, inferred meanings, examples, and contrasts",
        steps: [
          intro("Level 1: Find the Clue", "Before You Begin", "Get ready: use nearby clues", "When you meet an unfamiliar word, do not guess too quickly. Read the words around it. A sentence may give an explanation, example, or contrast that helps you choose a meaning that fits."),
          intro("Level 1: Find the Clue", "How Context Clues Work", "Look for the kind of clue", "Some sentences explain the word directly: 'The fabric was transparent, or easy to see through.' Some give examples: 'nocturnal animals, such as owls and bats.' Some use contrast: 'Unlike the noisy hall, the room was tranquil.' First find the clue, then choose the meaning that fits the whole sentence."),
          question("Level 1: Find the Clue", "Explanation Clue", "The guide was cautious, moving slowly and checking the trail before each step. What does cautious most likely mean?", ["careful", "excited", "confused"], "careful", "Correct. Moving slowly and checking the trail shows careful behaviour.", "Look at what the guide is doing."),
          question("Level 1: Find the Clue", "Example Clue", "Many nocturnal animals, such as owls and bats, are active at night. Which clue helps explain nocturnal?", ["owls and bats are active at night", "many animals", "such as"], "owls and bats are active at night", "Yes. The examples point to animals that are active at night.", "The examples tell what kind of animals they are."),
          question("Level 1: Find the Clue", "Contrast Clue", "Unlike the noisy hallway, the library was tranquil. What does tranquil most likely mean?", ["peaceful", "crowded", "ordinary"], "peaceful", "Correct. Unlike noisy tells you tranquil means almost the opposite.", "The word unlike gives a contrast."),
          question("Level 1: Find the Clue", "True or False", "A context clue can appear after the unfamiliar word.", ["True", "False"], "True", "Correct. Clues can come before or after the word.", "Readers should check the whole sentence."),
          complete("Level 1: Find the Clue", "Level 1 Complete", "You practised finding clues around unfamiliar words."),
          intro("Level 2: Choose the Meaning", "Check the Whole Sentence", "A meaning must fit", "A word meaning has to fit the whole sentence, not just one nearby word. If two choices seem possible, reread and ask which one makes the sentence clearer and more exact."),
          question("Level 2: Choose the Meaning", "Choose the Meaning", "The student revised her paragraph to make the explanation more precise. What does precise most likely mean?", ["exact and clear", "long and emotional", "quick and unfinished"], "exact and clear", "Yes. A revised explanation should become more exact and clear.", "Think about what revision should improve."),
          question("Level 2: Choose the Meaning", "Multiple Clues", "The instructions were mandatory; everyone had to follow them before using the equipment. What does mandatory mean?", ["required", "optional", "confusing"], "required", "Correct. Everyone had to follow them is the clue.", "Had to follow is the strongest clue."),
          question("Level 2: Choose the Meaning", "Best Fit", "The old bridge was sturdy enough to hold the loaded cart. Which meaning best fits sturdy?", ["strong", "decorated", "new"], "strong", "Correct. Holding a loaded cart points to strength.", "Ask what quality helps a bridge hold weight."),
          question("Level 2: Choose the Meaning", "True or False", "If a meaning does not fit the sentence, a careful reader should try another meaning.", ["True", "False"], "True", "Correct. The meaning should make sense in context.", "Context is how you check the choice."),
          complete("Level 2: Choose the Meaning", "Mission Complete", "You practised choosing meanings that fit the context.")
        ],
        quizQuestions: [
          quizQuestion("Context Clues", "Explanation", "multipleChoice", "The path was narrow, barely wide enough for one person. What does narrow mean?", ["not very wide", "very bright", "covered in stones"], "not very wide", "Barely wide enough is the clue."),
          quizQuestion("Context Clues", "Example", "multipleChoice", "Aquatic plants, including water lilies and pondweed, grow in water. What does aquatic mean?", ["living or growing in water", "growing in dry soil", "covered in flowers"], "living or growing in water", "The examples grow in water."),
          quizQuestion("Context Clues", "Contrast", "multipleChoice", "The first draft was vague, but the final draft was specific. What does vague most likely mean?", ["not clear enough", "neatly written", "very detailed"], "not clear enough", "The contrast with specific helps."),
          quizQuestion("Context Clues", "Best Fit", "multipleChoice", "The class collaborated, sharing ideas and dividing the work fairly. What does collaborated mean?", ["worked together", "worked silently alone", "finished without planning"], "worked together", "Sharing ideas and dividing work point to working together."),
          quizQuestion("Context Clues", "True or False", "trueFalse", "A contrast clue often uses words such as but, unlike, or however.", ["True", "False"], "True", "Those words can signal contrast."),
          quizQuestion("Context Clues", "True or False", "trueFalse", "The first meaning that pops into your mind is always the best meaning.", ["True", "False"], "False", "A reader should check the context."),
          quizQuestion("Context Clues", "Inference", "multipleChoice", "The puppy was reluctant to enter the cold water and backed away from the shore. What does reluctant mean?", ["unwilling or hesitant", "eager and excited", "unable to see"], "unwilling or hesitant", "Backing away shows hesitation."),
          quizQuestion("Context Clues", "Precision", "multipleChoice", "Which habit best helps with context clues?", ["Reread the sentence and check which meaning fits.", "Skip every unfamiliar word.", "Choose the longest definition every time."], "Reread the sentence and check which meaning fits.", "The meaning must fit the sentence.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-2-word-parts",
        title: "Prefixes, Suffixes, and Roots",
        learningGoal: "Students will use prefixes, suffixes, and roots to understand and build words.",
        successCriteria: [
          "I can identify common prefixes and suffixes.",
          "I can use word parts to make a reasonable meaning.",
          "I can check a word-part meaning against the sentence."
        ],
        vocabulary: ["prefix", "suffix", "root word", "base word", "word part"],
        teacherOverview: "Students practise using word parts to understand meanings without treating word parts as shortcuts that replace context.",
        lessonContent: [
          "A prefix is added to the beginning of a base word and changes the meaning.",
          "A suffix is added to the end of a word and can change the meaning or the word's job in a sentence.",
          "The base word or root carries the main meaning, but the sentence still helps confirm the meaning.",
          "Common prefixes include re-, un-, pre-, and mis-. Common suffixes include -ful, -less, -ness, and -ly.",
          "Students should break a word into parts, build a possible meaning, then check whether that meaning fits the sentence."
        ],
        activityTitle: "Word Parts Builder",
        mission: "Break words into useful parts and use those parts to understand meaning.",
        levels: ["Level 1: Prefixes and Suffixes", "Level 2: Build and Check Meaning"],
        quizTitle: "Prefixes, Suffixes, and Roots Quiz",
        quizFocus: "Prefixes, suffixes, roots, and checking word meaning in context",
        steps: [
          intro("Level 1: Prefixes and Suffixes", "Before You Begin", "Get ready: word parts carry meaning", "Many English words have parts that help with meaning. The prefix re- often means again. The prefix un- often means not. The suffix -ful can mean full of, and -less can mean without."),
          intro("Level 1: Prefixes and Suffixes", "How to Break a Word", "Find the base word first", "Start by finding the main word inside. In unhappy, happy is the base word and un- changes it to not happy. In careful, care is the base word and -ful means full of. Word parts give strong clues, but always reread the sentence to make sure the meaning works."),
          question("Level 1: Prefixes and Suffixes", "Prefix Meaning", "In the word reread, what does re- mean?", ["again", "not", "before"], "again", "Correct. Reread means read again.", "Think of redo or replay."),
          question("Level 1: Prefixes and Suffixes", "Prefix Meaning", "In the word unfair, what does un- mean?", ["not", "again", "after"], "not", "Yes. Unfair means not fair.", "Un- often changes a word to its opposite."),
          question("Level 1: Prefixes and Suffixes", "Suffix Meaning", "Which word means full of hope?", ["hopeful", "hopeless", "rehoped"], "hopeful", "Correct. -ful can mean full of.", "Look for the suffix that means full of."),
          question("Level 1: Prefixes and Suffixes", "True or False", "A suffix is added to the end of a word.", ["True", "False"], "True", "Correct. Suffixes come at the end.", "Prefix begins; suffix ends."),
          complete("Level 1: Prefixes and Suffixes", "Level 1 Complete", "You practised common prefixes and suffixes."),
          intro("Level 2: Build and Check Meaning", "Use the Sentence Too", "Word parts help, but context matters", "Word parts give clues, but the sentence still matters. A careful reader uses both: the word parts and the sentence around the word."),
          question("Level 2: Build and Check Meaning", "Choose the Meaning", "The directions were unclear, so the group reread them. What does reread mean here?", ["read again", "read quickly", "read silently"], "read again", "Correct. Re- and the sentence both point to reading again.", "The group needed another look."),
          question("Level 2: Build and Check Meaning", "Suffix Choice", "Which word best completes the sentence: The cracked cup was ____ for carrying water.", ["useless", "useful", "reuse"], "useless", "Yes. A cracked cup would be without use for carrying water.", "Think about whether it can do the job."),
          question("Level 2: Build and Check Meaning", "Root Word", "What is the base word in disagreement?", ["agree", "dis", "ment"], "agree", "Correct. Dis- and -ment are added around agree.", "Find the main word inside."),
          question("Level 2: Build and Check Meaning", "True or False", "Word parts are helpful clues, but the sentence should still make sense.", ["True", "False"], "True", "Correct. Context helps confirm the meaning.", "Good readers use more than one clue."),
          complete("Level 2: Build and Check Meaning", "Mission Complete", "You practised using word parts and context together.")
        ],
        quizQuestions: [
          quizQuestion("Word Parts", "Prefix", "multipleChoice", "What does the prefix pre- usually mean in preview?", ["before", "not", "again"], "before", "Preview means view before."),
          quizQuestion("Word Parts", "Prefix", "multipleChoice", "What does mis- usually mean in misplace?", ["wrongly", "again", "full of"], "wrongly", "Misplace means place wrongly."),
          quizQuestion("Word Parts", "Suffix", "multipleChoice", "Which word means without care?", ["careless", "careful", "recare"], "careless", "-less means without."),
          quizQuestion("Word Parts", "Suffix", "multipleChoice", "Which word names the state of being kind?", ["kindness", "unkind", "kindly"], "kindness", "-ness can name a quality or state."),
          quizQuestion("Word Parts", "Root", "multipleChoice", "What is the base word in repainting?", ["paint", "re", "ing"], "paint", "Paint carries the main meaning."),
          quizQuestion("Word Parts", "Context", "multipleChoice", "The team had to reorganize the supplies after the boxes fell. What does reorganize mean?", ["organize again", "organize badly", "avoid organizing"], "organize again", "Re- means again, and the sentence supports it."),
          quizQuestion("Word Parts", "True or False", "trueFalse", "A prefix is added to the beginning of a word.", ["True", "False"], "True", "Prefixes come before the base word."),
          quizQuestion("Word Parts", "True or False", "trueFalse", "Word parts always give the full meaning without needing the sentence.", ["True", "False"], "False", "Context still matters.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-2-parts-of-speech",
        title: "Parts of Speech in Sentences",
        learningGoal: "Students will identify how nouns, verbs, adjectives, adverbs, pronouns, and prepositions work in sentences.",
        successCriteria: [
          "I can identify the job a word is doing in a sentence.",
          "I can choose words that make the sentence clearer.",
          "I can notice how parts of speech work together."
        ],
        vocabulary: ["noun", "verb", "adjective", "adverb", "pronoun", "preposition"],
        teacherOverview: "Students review parts of speech by focusing on how words function inside sentences.",
        lessonContent: [
          "A noun names a person, place, thing, or idea. A pronoun can stand in for a noun.",
          "A verb shows action or being and tells what the subject does or is.",
          "An adjective describes a noun by telling what kind, which one, or how many.",
          "An adverb often describes a verb by telling how, when, where, or how much.",
          "A preposition shows a relationship, often location or direction, such as under, beside, through, or before.",
          "The same word can sometimes do different jobs, so students should look at how the word is used in the sentence."
        ],
        activityTitle: "Sentence Word Jobs",
        mission: "Identify the job each word is doing inside a sentence.",
        levels: ["Level 1: Name the Word Job", "Level 2: Choose the Best Word"],
        quizTitle: "Parts of Speech in Sentences Quiz",
        quizFocus: "Word functions in grade-level sentences",
        steps: [
          intro("Level 1: Name the Word Job", "Before You Begin", "Get ready: words have jobs", "The same word can sometimes do different jobs, so pay attention to the sentence. In 'The light is bright,' light is a noun. In 'Please light the candle,' light is a verb."),
          intro("Level 1: Name the Word Job", "How to Test a Word", "Ask what job the word is doing", "To find a noun, ask who or what the sentence is about. To find a verb, ask what happens or what something is. To find an adjective, ask what kind. To find an adverb, ask how, when, where, or how much. To find a preposition, look for a word that shows a relationship, such as beside, under, after, or through."),
          question("Level 1: Name the Word Job", "Find the Verb", "In the sentence 'The canoe drifted across the quiet lake,' which word is the verb?", ["drifted", "canoe", "quiet"], "drifted", "Correct. Drifted shows the action.", "Ask what the canoe did."),
          question("Level 1: Name the Word Job", "Find the Adjective", "In 'The careful artist mixed blue paint,' which word is an adjective?", ["careful", "mixed", "artist"], "careful", "Yes. Careful describes the artist.", "Adjectives describe nouns."),
          question("Level 1: Name the Word Job", "Find the Adverb", "In 'Maya answered politely,' which word is an adverb?", ["politely", "Maya", "answered"], "politely", "Correct. Politely describes how Maya answered.", "Adverbs often tell how an action happened."),
          question("Level 1: Name the Word Job", "True or False", "A pronoun can replace a noun to avoid repeating the same name too often.", ["True", "False"], "True", "Correct. Pronouns such as she, he, they, and it can replace nouns.", "Pronouns stand in for nouns."),
          complete("Level 1: Name the Word Job", "Level 1 Complete", "You practised identifying word jobs."),
          intro("Level 2: Choose the Best Word", "Words Work Together", "Choose precise words", "Grammar is not only labelling words. It helps writers make meaning clear. Choose nouns, verbs, adjectives, and adverbs that fit the exact idea."),
          question("Level 2: Choose the Best Word", "Precise Verb", "Which verb makes the sentence most precise? 'The rabbit ____ under the fence.'", ["darted", "went", "was"], "darted", "Yes. Darted gives a clearer action than went.", "Choose the verb that shows a specific action."),
          question("Level 2: Choose the Best Word", "Pronoun Clarity", "Which sentence uses a pronoun most clearly?", ["After Sara thanked Lily, Sara packed her bag.", "After Sara thanked Lily, she packed her bag.", "After Sara thanked Lily, they packed it."], "After Sara thanked Lily, Sara packed her bag.", "Correct. Repeating Sara avoids confusion about who packed the bag.", "Sometimes a noun is clearer than a pronoun."),
          question("Level 2: Choose the Best Word", "Preposition", "Which word shows the relationship in 'The notebook is under the desk'?", ["under", "notebook", "desk"], "under", "Correct. Under shows where the notebook is.", "Prepositions often tell where or when."),
          question("Level 2: Choose the Best Word", "True or False", "A precise verb can make writing clearer than a general verb.", ["True", "False"], "True", "Correct. Precise verbs help readers picture the action.", "Think of sprinted instead of went."),
          complete("Level 2: Choose the Best Word", "Mission Complete", "You practised using parts of speech for clear meaning.")
        ],
        quizQuestions: [
          quizQuestion("Parts of Speech", "Verb", "multipleChoice", "In 'The thunder rumbled above the valley,' which word is the verb?", ["rumbled", "thunder", "valley"], "rumbled", "Rumbled shows the action."),
          quizQuestion("Parts of Speech", "Noun", "multipleChoice", "In 'Kindness matters in a classroom,' which word names an idea?", ["Kindness", "matters", "classroom"], "Kindness", "Kindness is an abstract noun."),
          quizQuestion("Parts of Speech", "Adjective", "multipleChoice", "Which word is an adjective in 'The narrow path curved sharply'?", ["narrow", "curved", "sharply"], "narrow", "Narrow describes path."),
          quizQuestion("Parts of Speech", "Adverb", "multipleChoice", "Which word is an adverb in 'The team worked steadily'?", ["steadily", "team", "worked"], "steadily", "Steadily tells how they worked."),
          quizQuestion("Parts of Speech", "Pronoun", "multipleChoice", "Which word is a pronoun?", ["they", "mountain", "describe"], "they", "They is a pronoun."),
          quizQuestion("Parts of Speech", "Preposition", "multipleChoice", "Which word is a preposition in 'The keys are beside the lamp'?", ["beside", "keys", "lamp"], "beside", "Beside shows location."),
          quizQuestion("Parts of Speech", "True or False", "trueFalse", "A word's job depends on how it is used in the sentence.", ["True", "False"], "True", "Sentence use matters."),
          quizQuestion("Parts of Speech", "Precision", "multipleChoice", "Which verb is most precise?", ["whispered", "said", "made"], "whispered", "Whispered gives the clearest action.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-2-sentence-structure",
        title: "Complete Sentences, Fragments, and Run-Ons",
        learningGoal: "Students will identify complete sentences, fragments, and run-ons and choose effective corrections.",
        successCriteria: [
          "I can tell whether a sentence has a subject and predicate.",
          "I can correct fragments by adding missing information.",
          "I can correct run-ons with punctuation or joining words."
        ],
        vocabulary: ["sentence", "fragment", "run-on", "subject", "predicate"],
        teacherOverview: "Students practise recognizing sentence boundaries and correcting common sentence errors.",
        lessonContent: [
          "A complete sentence has a subject and a predicate and expresses a complete thought.",
          "The subject tells who or what the sentence is about. The predicate tells what the subject does or is.",
          "A fragment is an incomplete sentence. It may be missing a subject, a predicate, or the rest of the thought.",
          "A run-on happens when two complete thoughts are pushed together without correct punctuation or a joining word.",
          "A writer can fix sentence problems by adding missing information, using a period, or joining ideas correctly."
        ],
        activityTitle: "Sentence Fixer",
        mission: "Choose complete sentences and fix fragments and run-ons.",
        levels: ["Level 1: Complete or Not?", "Level 2: Fix the Sentence"],
        quizTitle: "Complete Sentences, Fragments, and Run-Ons Quiz",
        quizFocus: "Sentence completeness, fragments, run-ons, and corrections",
        steps: [
          intro("Level 1: Complete or Not?", "Before You Begin", "Get ready: complete thoughts", "A complete sentence needs someone or something the sentence is about, plus what that subject does or is. A fragment may sound like it begins an idea but does not finish it."),
          intro("Level 1: Complete or Not?", "Subject and Predicate", "Check both parts", "Ask two questions: Who or what is the sentence about? What does that subject do or what is true about it? 'The lantern glowed' is complete because lantern is the subject and glowed tells what happened. 'After the lantern glowed' is a fragment because the word after starts an idea that needs more information."),
          question("Level 1: Complete or Not?", "Complete Sentence", "Which is a complete sentence?", ["The maple leaves turned red in October.", "Because the maple leaves.", "Turning red in October."], "The maple leaves turned red in October.", "Correct. It has a subject and tells what happened.", "Find the choice that gives a complete thought."),
          question("Level 1: Complete or Not?", "Fragment", "Which is a fragment?", ["After the bell rang.", "The class lined up quietly.", "Mrs. Green opened the door."], "After the bell rang.", "Yes. It starts an idea but does not finish it.", "Ask whether the thought feels complete."),
          question("Level 1: Complete or Not?", "Run-On", "Which sentence is a run-on?", ["The rain stopped we went outside.", "The rain stopped, so we went outside.", "After the rain stopped, we went outside."], "The rain stopped we went outside.", "Correct. Two complete ideas are pushed together without proper joining.", "Look for two sentences stuck together."),
          question("Level 1: Complete or Not?", "True or False", "A fragment can be corrected by adding the missing subject or predicate.", ["True", "False"], "True", "Correct. Add what is missing to complete the thought.", "Fragments are missing something important."),
          complete("Level 1: Complete or Not?", "Level 1 Complete", "You practised spotting complete sentences and sentence problems."),
          intro("Level 2: Fix the Sentence", "Choose a Clear Correction", "Fix without changing the meaning", "When you fix a fragment or run-on, keep the intended meaning. You may add missing words, use a period, use a comma with a joining word, or rewrite the sentence more clearly."),
          question("Level 2: Fix the Sentence", "Fix a Fragment", "Which best fixes the fragment 'While the soup simmered on the stove'?", ["While the soup simmered on the stove, Dad sliced bread.", "While the soup simmered on the stove.", "The soup while simmered on the stove."], "While the soup simmered on the stove, Dad sliced bread.", "Correct. It completes the thought.", "The word while starts an idea that needs finishing."),
          question("Level 2: Fix the Sentence", "Fix a Run-On", "Which best fixes 'The wind rose the branches shook'?", ["The wind rose, and the branches shook.", "The wind rose the, branches shook.", "The wind rose and the branches."], "The wind rose, and the branches shook.", "Yes. The comma and and join two complete ideas.", "Use punctuation and a joining word."),
          question("Level 2: Fix the Sentence", "Best Punctuation", "Which correction is clearest?", ["I packed my lunch. Then I filled my water bottle.", "I packed my lunch then I filled my water bottle.", "Packed my lunch then filled."], "I packed my lunch. Then I filled my water bottle.", "Correct. Two clear sentences work well here.", "A period can separate complete thoughts."),
          question("Level 2: Fix the Sentence", "True or False", "Every long sentence is a run-on.", ["True", "False"], "False", "Correct. A long sentence can be correct if it is joined and punctuated properly.", "Length alone is not the problem."),
          complete("Level 2: Fix the Sentence", "Mission Complete", "You practised fixing sentence problems.")
        ],
        quizQuestions: [
          quizQuestion("Sentence Structure", "Complete Sentence", "multipleChoice", "Which is a complete sentence?", ["The hikers reached the lookout before sunset.", "Before sunset at the lookout.", "Because the hikers reached."], "The hikers reached the lookout before sunset.", "It expresses a complete thought."),
          quizQuestion("Sentence Structure", "Fragment", "multipleChoice", "Which is a fragment?", ["Under the wooden bench.", "The dog slept under the wooden bench.", "The wooden bench creaked."], "Under the wooden bench.", "It does not say what is under the bench."),
          quizQuestion("Sentence Structure", "Run-On", "multipleChoice", "Which is a run-on?", ["The timer rang we removed the muffins.", "The timer rang, and we removed the muffins.", "When the timer rang, we removed the muffins."], "The timer rang we removed the muffins.", "Two complete ideas are joined incorrectly."),
          quizQuestion("Sentence Structure", "Correction", "multipleChoice", "Which best fixes 'Because the road was icy'?", ["Because the road was icy, the bus drove slowly.", "Because the road was icy.", "Road was icy because."], "Because the road was icy, the bus drove slowly.", "It completes the thought."),
          quizQuestion("Sentence Structure", "Correction", "multipleChoice", "Which best fixes 'The lights flickered the room went dark'?", ["The lights flickered, and the room went dark.", "The lights flickered the, room went dark.", "The lights flickered and the room."], "The lights flickered, and the room went dark.", "It joins the ideas correctly."),
          quizQuestion("Sentence Structure", "Subject", "multipleChoice", "In 'The little boat rocked gently,' what is the subject?", ["The little boat", "rocked gently", "gently"], "The little boat", "The subject tells what the sentence is about."),
          quizQuestion("Sentence Structure", "True or False", "trueFalse", "A complete sentence needs to express a complete thought.", ["True", "False"], "True", "A sentence should feel complete."),
          quizQuestion("Sentence Structure", "True or False", "trueFalse", "A run-on can sometimes be fixed by making two separate sentences.", ["True", "False"], "True", "A period can separate complete ideas.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-2-sentence-combining",
        title: "Combining Sentences with Conjunctions",
        learningGoal: "Students will combine related ideas using conjunctions and punctuation.",
        successCriteria: [
          "I can choose a conjunction that shows the right relationship.",
          "I can combine sentences without creating a run-on.",
          "I can use commas correctly in common compound sentences."
        ],
        vocabulary: ["conjunction", "compound sentence", "clause", "comma", "relationship"],
        teacherOverview: "Students practise combining related ideas with conjunctions such as and, but, so, because, although, and while.",
        lessonContent: [
          "A conjunction joins words, phrases, or clauses and shows how ideas are related.",
          "And adds a related idea. But shows contrast. So shows a result. Because gives a reason.",
          "Although and while can begin an idea that needs to be completed by the rest of the sentence.",
          "When two complete sentences are joined with and, but, or so, a comma often comes before the conjunction.",
          "Combining sentences should make the writing clearer, not just longer."
        ],
        activityTitle: "Sentence Connector Mission",
        mission: "Choose the best joining word and punctuation for related ideas.",
        levels: ["Level 1: Choose the Connector", "Level 2: Combine Clearly"],
        quizTitle: "Combining Sentences with Conjunctions Quiz",
        quizFocus: "Conjunction meanings, compound sentences, and clear sentence combining",
        steps: [
          intro("Level 1: Choose the Connector", "Before You Begin", "Get ready: joining words show relationships", "Conjunctions help readers understand how ideas connect. Use and to add, but to contrast, so to show a result, and because to give a reason."),
          intro("Level 1: Choose the Connector", "Choose by Meaning", "Ask how the ideas connect", "Before choosing a conjunction, decide the relationship between the ideas. If the second idea is surprising, but may fit. If the second idea happens because of the first, so may fit. If one idea explains why, because may fit. Good sentence combining keeps the meaning clear."),
          question("Level 1: Choose the Connector", "Show Contrast", "Which word best completes the sentence? 'The trail was muddy, ____ the hikers continued carefully.'", ["but", "because", "so"], "but", "Correct. But shows contrast between muddy conditions and continuing.", "The second idea is different from what you might expect."),
          question("Level 1: Choose the Connector", "Show Reason", "Which word best completes the sentence? 'We brought extra pencils ____ several students forgot theirs.'", ["because", "but", "although"], "because", "Yes. Because gives the reason.", "Ask why extra pencils were brought."),
          question("Level 1: Choose the Connector", "Show Result", "Which word best completes the sentence? 'The battery was low, ____ we plugged in the tablet.'", ["so", "while", "but"], "so", "Correct. So shows the result.", "The second idea happens because of the first."),
          question("Level 1: Choose the Connector", "True or False", "The conjunction but usually signals a contrast.", ["True", "False"], "True", "Correct. But often shows a different or surprising idea.", "Think of contrast."),
          complete("Level 1: Choose the Connector", "Level 1 Complete", "You practised choosing joining words."),
          intro("Level 2: Combine Clearly", "Punctuation Matters", "Join ideas carefully", "When two complete sentences are joined with and, but, or so, writers often use a comma before the conjunction. The punctuation helps readers see where one idea ends and the next begins."),
          question("Level 2: Combine Clearly", "Best Combination", "Which combines the ideas clearly? 'The sky darkened. The team packed up the equipment.'", ["The sky darkened, so the team packed up the equipment.", "The sky darkened the team packed up the equipment.", "The sky darkened because, the team packed up."], "The sky darkened, so the team packed up the equipment.", "Correct. So shows the result and the comma helps separate the ideas.", "Choose the sentence that is clear and correctly joined."),
          question("Level 2: Combine Clearly", "Avoid a Run-On", "Which sentence is correctly joined?", ["I finished the chapter, and I wrote a summary.", "I finished the chapter and, I wrote a summary.", "I finished the chapter I wrote a summary."], "I finished the chapter, and I wrote a summary.", "Yes. The comma and and join the ideas clearly.", "Avoid pushing two sentences together."),
          question("Level 2: Combine Clearly", "Subordinating Conjunction", "Which sentence uses because clearly?", ["Because the instructions changed, we reread the first step.", "Because the instructions changed.", "The instructions because changed we reread."], "Because the instructions changed, we reread the first step.", "Correct. The because phrase is completed by the main idea.", "Because starts a reason that needs a complete thought."),
          question("Level 2: Combine Clearly", "True or False", "Combining sentences should keep the meaning clear, not just make the sentence longer.", ["True", "False"], "True", "Correct. Combining should improve clarity.", "Longer is not always better."),
          complete("Level 2: Combine Clearly", "Mission Complete", "You practised combining sentences clearly.")
        ],
        quizQuestions: [
          quizQuestion("Conjunctions", "Addition", "multipleChoice", "Which conjunction adds a related idea?", ["and", "but", "although"], "and", "And adds ideas."),
          quizQuestion("Conjunctions", "Contrast", "multipleChoice", "Which conjunction best fits? 'The book was long, ____ it was interesting.'", ["but", "because", "so"], "but", "But shows contrast."),
          quizQuestion("Conjunctions", "Reason", "multipleChoice", "Which conjunction best fits? 'We waited inside ____ the rain was heavy.'", ["because", "but", "so"], "because", "Because gives a reason."),
          quizQuestion("Conjunctions", "Result", "multipleChoice", "Which conjunction best fits? 'The lid was loose, ____ the water spilled.'", ["so", "although", "and"], "so", "So shows a result."),
          quizQuestion("Sentence Combining", "Correct Sentence", "multipleChoice", "Which sentence is correctly combined?", ["The bell rang, and the students opened their books.", "The bell rang and, the students opened their books.", "The bell rang the students opened their books."], "The bell rang, and the students opened their books.", "The comma and conjunction join two complete ideas."),
          quizQuestion("Sentence Combining", "Clarity", "multipleChoice", "Which sentence is clearest?", ["Although the problem was difficult, Jonah kept working.", "Although the problem was difficult.", "The problem although difficult Jonah kept."], "Although the problem was difficult, Jonah kept working.", "The although idea is completed."),
          quizQuestion("Sentence Combining", "True or False", "trueFalse", "So can show that the second idea is a result of the first idea.", ["True", "False"], "True", "So often shows result."),
          quizQuestion("Sentence Combining", "True or False", "trueFalse", "A sentence is better simply because it is longer.", ["True", "False"], "False", "Clarity matters more than length.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-2-punctuation-and-dialogue",
        title: "Punctuation, Dialogue, and Commas",
        learningGoal: "Students will use commas, quotation marks, and end punctuation to clarify meaning.",
        successCriteria: [
          "I can choose punctuation that matches the sentence meaning.",
          "I can recognize correctly punctuated dialogue.",
          "I can use commas in lists, introductory phrases, and compound sentences."
        ],
        vocabulary: ["comma", "quotation marks", "dialogue", "end punctuation", "introductory phrase"],
        teacherOverview: "Students practise punctuation choices that help readers understand pauses, lists, speech, and sentence boundaries.",
        lessonContent: [
          "Punctuation is part of meaning because it shows readers where to pause, stop, ask, connect, or show speech.",
          "Commas can separate items in a list, follow introductory words or phrases, and help join two complete ideas.",
          "End punctuation shows whether a sentence is a statement, command, question, or exclamation.",
          "Quotation marks go around the exact words a person says.",
          "In dialogue, the punctuation for the spoken words usually stays inside the quotation marks."
        ],
        activityTitle: "Punctuation Patrol",
        mission: "Choose punctuation that makes sentences clear and easy to read.",
        levels: ["Level 1: Commas and End Marks", "Level 2: Dialogue and Meaning"],
        quizTitle: "Punctuation, Dialogue, and Commas Quiz",
        quizFocus: "Commas, end punctuation, quotation marks, and dialogue punctuation",
        steps: [
          intro("Level 1: Commas and End Marks", "Before You Begin", "Get ready: punctuation guides readers", "Punctuation is not decoration. It tells readers where ideas pause, stop, connect, or show speech. A small mark can change how a sentence is understood."),
          intro("Level 1: Commas and End Marks", "Three Common Comma Jobs", "Use commas to guide the reader", "Commas often do three useful jobs in Grade 5 writing. They separate items in a list: 'paper, pencils, and glue.' They follow an opening phrase: 'After lunch, we cleaned up.' They can help join two complete ideas: 'The rain stopped, and we went outside.'"),
          question("Level 1: Commas and End Marks", "Comma in a List", "Which sentence uses commas correctly in a list?", ["We packed water, snacks, maps, and jackets.", "We packed water snacks, maps and, jackets.", "We packed, water snacks maps and jackets."], "We packed water, snacks, maps, and jackets.", "Correct. Commas separate the items in the list.", "Look for the sentence where each item is clear."),
          question("Level 1: Commas and End Marks", "Introductory Phrase", "Which sentence is punctuated correctly?", ["After the storm, the streets were quiet.", "After, the storm the streets were quiet.", "After the storm the, streets were quiet."], "After the storm, the streets were quiet.", "Yes. The comma follows the introductory phrase.", "The first phrase sets up when."),
          question("Level 1: Commas and End Marks", "End Punctuation", "Which sentence needs a question mark?", ["Where did you put the library book", "Please put the book on the shelf", "The book is on the table"], "Where did you put the library book", "Correct. It asks a question.", "Questions need question marks."),
          question("Level 1: Commas and End Marks", "True or False", "A comma can help separate two complete ideas joined by and, but, or so.", ["True", "False"], "True", "Correct. This is common in compound sentences.", "Think of two sentences joined together."),
          complete("Level 1: Commas and End Marks", "Level 1 Complete", "You practised commas and end punctuation."),
          intro("Level 2: Dialogue and Meaning", "Punctuate Speech", "Show exactly what was said", "Dialogue uses quotation marks around the spoken words. The comma, question mark, or exclamation mark usually goes inside the closing quotation mark."),
          question("Level 2: Dialogue and Meaning", "Quotation Marks", "Which sentence punctuates dialogue correctly?", ["Lena said, \"I found the missing page.\"", "\"Lena said, I found the missing page.\"", "Lena said, I found \"the missing page.\""], "Lena said, \"I found the missing page.\"", "Correct. The spoken words are inside quotation marks.", "Only the words spoken go inside quotation marks."),
          question("Level 2: Dialogue and Meaning", "Question in Dialogue", "Which sentence is correct?", ["\"Are you ready?\" asked Noah.", "\"Are you ready\"? asked Noah.", "Are you ready? asked \"Noah.\""], "\"Are you ready?\" asked Noah.", "Yes. The question mark belongs inside the quotation marks.", "The spoken question is inside the quotation marks."),
          question("Level 2: Dialogue and Meaning", "Speaker Tag", "What is the speaker tag in this sentence? \"I can help,\" said Priya.", ["said Priya", "I can help", "can help"], "said Priya", "Correct. The speaker tag tells who spoke.", "Look for the part outside the quotation marks that names the speaker."),
          question("Level 2: Dialogue and Meaning", "True or False", "Quotation marks show the exact words a person says.", ["True", "False"], "True", "Correct. Quotation marks mark spoken words.", "They show direct speech."),
          complete("Level 2: Dialogue and Meaning", "Mission Complete", "You practised punctuation and dialogue.")
        ],
        quizQuestions: [
          quizQuestion("Commas", "List", "multipleChoice", "Which sentence uses commas correctly?", ["The garden had beans, carrots, lettuce, and peas.", "The garden had beans carrots, lettuce and, peas.", "The garden, had beans carrots lettuce and peas."], "The garden had beans, carrots, lettuce, and peas.", "Commas separate items in a list."),
          quizQuestion("Commas", "Introductory Phrase", "multipleChoice", "Which sentence is correct?", ["Before dinner, we washed the vegetables.", "Before, dinner we washed the vegetables.", "Before dinner we, washed the vegetables."], "Before dinner, we washed the vegetables.", "The comma follows the introductory phrase."),
          quizQuestion("Commas", "Compound Sentence", "multipleChoice", "Which sentence is correctly punctuated?", ["The snow melted, and the path became muddy.", "The snow melted and, the path became muddy.", "The snow melted the path became muddy."], "The snow melted, and the path became muddy.", "The comma and and join two complete ideas."),
          quizQuestion("End Marks", "Question Mark", "multipleChoice", "Which sentence needs a question mark?", ["How far is the museum", "The museum is nearby", "Walk to the museum"], "How far is the museum", "It asks a question."),
          quizQuestion("Dialogue", "Quotation Marks", "multipleChoice", "Which sentence is correct?", ["\"The bus is here,\" called Omar.", "The bus is here,\" called Omar.", "\"The bus is here, called Omar.\""], "\"The bus is here,\" called Omar.", "The spoken words are inside quotation marks."),
          quizQuestion("Dialogue", "Question", "multipleChoice", "Which sentence is correct?", ["\"May I borrow a ruler?\" asked Grace.", "\"May I borrow a ruler\"? asked Grace.", "May I borrow a ruler? \"asked Grace.\""], "\"May I borrow a ruler?\" asked Grace.", "The question mark belongs inside the quotation marks."),
          quizQuestion("Dialogue", "True or False", "trueFalse", "A speaker tag tells who said the words.", ["True", "False"], "True", "Speaker tags identify the speaker."),
          quizQuestion("Dialogue", "True or False", "trueFalse", "Punctuation can change how clearly a sentence is understood.", ["True", "False"], "True", "Punctuation guides meaning.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-2-editing-for-clarity",
        title: "Editing for Clarity and Style",
        learningGoal: "Students will revise sentences to improve clarity, precision, grammar, and style.",
        successCriteria: [
          "I can choose a clearer revision.",
          "I can remove unnecessary repetition.",
          "I can keep the meaning while improving grammar and word choice."
        ],
        vocabulary: ["revise", "edit", "clarity", "style", "word choice", "repetition"],
        teacherOverview: "Students practise choosing revisions that improve clarity without changing the intended meaning.",
        lessonContent: [
          "Revision improves ideas, order, sentence flow, and word choice.",
          "Editing checks grammar, punctuation, capitalization, and spelling.",
          "A clear revision keeps the intended meaning while making the sentence easier to understand.",
          "Precise nouns and verbs often make writing stronger than general words.",
          "Writers should watch for repeated ideas, unclear pronouns, awkward word order, and descriptions that are too far away from the words they describe."
        ],
        activityTitle: "Clear Sentence Editor",
        mission: "Choose revisions that make writing clearer and more precise.",
        levels: ["Level 1: Improve Word Choice", "Level 2: Revise for Clarity"],
        quizTitle: "Editing for Clarity and Style Quiz",
        quizFocus: "Revision, editing, precision, repetition, and sentence clarity",
        steps: [
          intro("Level 1: Improve Word Choice", "Before You Begin", "Get ready: make writing clearer", "Editing is not only finding mistakes. Writers also revise sentences so the meaning is clearer, the words are more precise, and the sentence sounds smoother."),
          intro("Level 1: Improve Word Choice", "Revision Choices", "Improve without changing the idea", "A good revision does not simply make a sentence longer. It keeps the meaning and makes it clearer. Specific nouns and verbs help: 'The squirrel scampered' is clearer than 'The animal went.' Removing repeated ideas also helps the sentence sound stronger."),
          question("Level 1: Improve Word Choice", "Precise Word", "Which revision is clearest? 'The animal moved across the yard.'", ["The squirrel scampered across the yard.", "The thing went across the yard.", "The animal did movement across the yard."], "The squirrel scampered across the yard.", "Correct. Squirrel and scampered are more precise.", "Choose specific nouns and verbs."),
          question("Level 1: Improve Word Choice", "Remove Repetition", "Which sentence avoids unnecessary repetition?", ["The bright lantern glowed beside the tent.", "The bright lantern was bright beside the tent.", "The lantern glowed with glowing light beside the tent."], "The bright lantern glowed beside the tent.", "Yes. It is clear without repeating the same idea.", "Avoid saying the same idea twice."),
          question("Level 1: Improve Word Choice", "Tone", "Which sentence sounds most appropriate for a school report?", ["The experiment showed that salt dissolved faster in warm water.", "The salt thing did stuff in the water.", "Warm water was super awesome with salt."], "The experiment showed that salt dissolved faster in warm water.", "Correct. It is clear and appropriate for a report.", "A school report needs precise, respectful wording."),
          question("Level 1: Improve Word Choice", "True or False", "Precise words can help readers picture the meaning more clearly.", ["True", "False"], "True", "Correct. Specific words help readers understand.", "Precise writing reduces guessing."),
          complete("Level 1: Improve Word Choice", "Level 1 Complete", "You practised improving word choice."),
          intro("Level 2: Revise for Clarity", "Keep the Meaning", "Improve without changing the idea", "A good revision keeps the writer's intended meaning while making the sentence clearer. Watch for confusing pronouns, missing information, awkward order, and repeated words."),
          question("Level 2: Revise for Clarity", "Clear Pronoun", "Which revision is clearest? 'Emma told Zoe she had won the contest.'", ["Emma told Zoe, \"You won the contest.\"", "Emma told Zoe she had won.", "She told her about the contest."], "Emma told Zoe, \"You won the contest.\"", "Correct. This makes it clear that Zoe won.", "The original pronoun she is unclear."),
          question("Level 2: Revise for Clarity", "Awkward Order", "Which revision is clearest? 'With a cracked handle, Noah carried the mug carefully.'", ["Noah carefully carried the mug with a cracked handle.", "With a cracked handle, carefully Noah carried.", "The cracked handle carefully carried Noah's mug."], "Noah carefully carried the mug with a cracked handle.", "Yes. The revision makes clear that the mug has the cracked handle.", "Place describing words near what they describe."),
          question("Level 2: Revise for Clarity", "Combine Ideas", "Which revision is smoothest? 'The room was cold. The window was open.'", ["The room was cold because the window was open.", "The room was cold the window open.", "The open room was window cold."], "The room was cold because the window was open.", "Correct. It connects the reason clearly.", "Use a joining word that shows the relationship."),
          question("Level 2: Revise for Clarity", "True or False", "A revision should improve clarity while keeping the intended meaning.", ["True", "False"], "True", "Correct. Revision should not accidentally change the idea.", "Writers revise to make meaning clearer."),
          complete("Level 2: Revise for Clarity", "Mission Complete", "You practised editing for clarity and style.")
        ],
        quizQuestions: [
          quizQuestion("Editing", "Word Choice", "multipleChoice", "Which sentence uses the most precise verb?", ["The eagle soared above the cliffs.", "The eagle went above the cliffs.", "The eagle did above the cliffs."], "The eagle soared above the cliffs.", "Soared is precise."),
          quizQuestion("Editing", "Repetition", "multipleChoice", "Which sentence avoids unnecessary repetition?", ["The cold wind rattled the windows.", "The cold wind was cold and windy.", "The wind blew with windy wind."], "The cold wind rattled the windows.", "It is clear without repeating ideas."),
          quizQuestion("Editing", "Tone", "multipleChoice", "Which sentence best fits a science report?", ["The seed sprouted after six days.", "The seed was doing its little thing.", "The seed totally woke up."], "The seed sprouted after six days.", "It is clear and appropriate for a report."),
          quizQuestion("Editing", "Pronoun Clarity", "multipleChoice", "Which revision is clearest? 'Mia gave Ava her notebook.'", ["Mia gave Ava Mia's notebook.", "Mia gave Ava her notebook.", "She gave her the notebook."], "Mia gave Ava Mia's notebook.", "This makes the owner clear."),
          quizQuestion("Editing", "Awkward Order", "multipleChoice", "Which sentence is clearest?", ["The student wearing a red scarf carried the books.", "Wearing a red scarf, the books were carried by the student.", "The books wearing a red scarf were carried."], "The student wearing a red scarf carried the books.", "The description is placed clearly."),
          quizQuestion("Editing", "Combining", "multipleChoice", "Which revision connects the ideas best? 'The game was cancelled. The field was flooded.'", ["The game was cancelled because the field was flooded.", "The game was cancelled the field was flooded.", "The flooded game was field cancelled."], "The game was cancelled because the field was flooded.", "Because shows the reason."),
          quizQuestion("Editing", "True or False", "trueFalse", "Revision can improve word choice and sentence order.", ["True", "False"], "True", "Revision improves the writing."),
          quizQuestion("Editing", "True or False", "trueFalse", "Editing should make a sentence confusing so readers have to work harder.", ["True", "False"], "False", "Editing should make writing clearer.")
        ]
      }),
      {
        id: "grade-5-language-unit-2-final-quiz",
        title: "Unit 2 Final Quiz",
        type: "unitTest",
        teacherOverview: "Use this quiz after students complete the vocabulary, grammar, punctuation, and sentence skills lessons.",
        teacherSummary: "The Unit 2 final quiz checks context clues, word parts, parts of speech, sentence structure, conjunctions, punctuation, dialogue, and editing choices.",
        quiz: {
          title: "Vocabulary, Grammar, and Sentence Skills Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Vocabulary", "Context Clues", "multipleChoice", "The instructions were brief, only three short steps. What does brief mean?", ["short", "confusing", "colourful"], "short", "Only three short steps gives the clue."),
            quizQuestion("Part A: Vocabulary", "Context Clues", "multipleChoice", "Unlike the crowded hallway, the office was spacious. What does spacious mean?", ["roomy", "noisy", "locked"], "roomy", "Unlike crowded gives a contrast clue."),
            quizQuestion("Part A: Vocabulary", "Word Parts", "multipleChoice", "What does the prefix un- mean in unfamiliar?", ["not", "again", "before"], "not", "Unfamiliar means not familiar."),
            quizQuestion("Part A: Vocabulary", "Word Parts", "multipleChoice", "Which word means without harm?", ["harmless", "harmful", "reharm"], "harmless", "-less means without."),
            quizQuestion("Part B: Grammar", "Parts of Speech", "multipleChoice", "In 'The careful gardener watered the seedlings gently,' which word is an adverb?", ["gently", "careful", "gardener"], "gently", "Gently tells how the gardener watered."),
            quizQuestion("Part B: Grammar", "Parts of Speech", "multipleChoice", "In 'The backpack is beside the desk,' which word is a preposition?", ["beside", "backpack", "desk"], "beside", "Beside shows location."),
            quizQuestion("Part B: Grammar", "Pronouns", "multipleChoice", "Which sentence is clearest?", ["After Liam helped Ethan, Liam packed his bag.", "After Liam helped Ethan, he packed his bag.", "After he helped him, his bag was packed."], "After Liam helped Ethan, Liam packed his bag.", "Repeating Liam avoids pronoun confusion."),
            quizQuestion("Part C: Sentences", "Complete Sentence", "multipleChoice", "Which is a complete sentence?", ["The class measured the plant each Friday.", "Measuring the plant each Friday.", "Because the class measured."], "The class measured the plant each Friday.", "It expresses a complete thought."),
            quizQuestion("Part C: Sentences", "Fragment", "multipleChoice", "Which is a fragment?", ["After the final whistle.", "The players shook hands.", "The coach smiled."], "After the final whistle.", "It starts an idea but does not finish it."),
            quizQuestion("Part C: Sentences", "Run-On", "multipleChoice", "Which is a run-on?", ["The lights dimmed the play began.", "The lights dimmed, and the play began.", "When the lights dimmed, the play began."], "The lights dimmed the play began.", "Two complete ideas are pushed together."),
            quizQuestion("Part C: Sentences", "Conjunction", "multipleChoice", "Which word best completes the sentence? 'The road was closed, ____ we took a different route.'", ["so", "although", "but"], "so", "So shows the result."),
            quizQuestion("Part C: Sentences", "Conjunction", "multipleChoice", "Which word best completes the sentence? 'The work was challenging, ____ the group finished it carefully.'", ["but", "because", "so"], "but", "But shows contrast."),
            quizQuestion("Part D: Punctuation", "Commas", "multipleChoice", "Which sentence uses commas correctly?", ["We need paper, markers, scissors, and glue.", "We need paper markers, scissors and, glue.", "We need, paper markers scissors and glue."], "We need paper, markers, scissors, and glue.", "Commas separate list items."),
            quizQuestion("Part D: Punctuation", "Dialogue", "multipleChoice", "Which sentence punctuates dialogue correctly?", ["\"Please pass the ruler,\" said Ben.", "Please pass the ruler,\" said Ben.", "\"Please pass the ruler, said Ben.\""], "\"Please pass the ruler,\" said Ben.", "The spoken words are in quotation marks."),
            quizQuestion("Part D: Punctuation", "Question Mark", "multipleChoice", "Which sentence needs a question mark?", ["Why did the magnet stick to the nail", "The magnet stuck to the nail", "Put the magnet beside the nail"], "Why did the magnet stick to the nail", "It asks a question."),
            quizQuestion("Part E: Editing", "Word Choice", "multipleChoice", "Which sentence uses the most precise verb?", ["The fox crept through the grass.", "The fox went through the grass.", "The fox did through the grass."], "The fox crept through the grass.", "Crept gives a clearer action."),
            quizQuestion("Part E: Editing", "Clarity", "multipleChoice", "Which revision is clearest? 'The backpack beside the lunch bag with the blue zipper is mine.'", ["The backpack with the blue zipper beside the lunch bag is mine.", "Beside the lunch bag mine is the backpack zipper.", "The lunch bag with mine is beside the blue backpack."], "The backpack with the blue zipper beside the lunch bag is mine.", "The describing phrase is placed more clearly."),
            quizQuestion("Part E: Editing", "True or False", "trueFalse", "Good editing should make writing clearer while keeping the intended meaning.", ["True", "False"], "True", "Editing should improve clarity without changing the idea.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Unit 2 mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    "unitAssessmentPlan": {
      "lessonQuizzes": "Each lesson has a short scored quiz to check the lesson focus.",
      "unitTest": "The final unit quiz checks context clues, word parts, grammar, sentence structure, punctuation, dialogue, and editing."
    }
  };

  window.PracticeStarUnit["grade-5-language-unit-2"] = unit;
  window.PracticeStarContent.grade5Language = window.PracticeStarContent.grade5Language || { subject: "Language", grade: 5, units: [] };
  var library = window.PracticeStarContent.grade5Language;
  library.units = Array.isArray(library.units) ? library.units : [];
  var index = library.units.findIndex(function (item) { return item && item.id === unit.id; });
  if (index >= 0) {
    library.units[index] = unit;
  } else {
    library.units.push(unit);
  }
}());
