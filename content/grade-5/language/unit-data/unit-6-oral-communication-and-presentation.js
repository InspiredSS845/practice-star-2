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
      status: "model",
      learningGoal: options.learningGoal,
      successCriteria: options.successCriteria,
      vocabulary: options.vocabulary,
      teacherOverview: options.teacherOverview,
      teacherSummary: options.teacherSummary || options.teacherOverview,
      lessonContent: options.lessonContent,
      practiceIdeas: [
        "Share the student mission for practice stars.",
        "Use the lesson quiz as a scored oral communication check.",
        "Review missed questions before assigning the next Oral Communication and Presentation lesson."
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
      assessmentPlan: "Use the activity for guided speaking and listening decisions and the quiz to check independent understanding.",
      studentActivity: {
        type: "languageQuestionSet",
        version: "2026-08-28-language-unit-6-oral-1",
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
      }
    };
  }

  var unit = {
    id: "grade-5-language-unit-6",
    title: "Oral Communication and Presentation",
    strand: "Literacy Connections and Applications",
    unitGoal: "Students will listen actively, contribute to discussion, organize ideas for speaking, use clear voice and body language, and present information respectfully.",
    lessons: [
      lesson({
        id: "grade-5-language-unit-6-active-listening",
        title: "Active Listening",
        learningGoal: "Students will listen for main ideas, important details, and meaning before responding.",
        successCriteria: [
          "I can listen for the main idea and key details.",
          "I can ask for clarification when something is unclear.",
          "I can respond in a way that shows I understood the speaker."
        ],
        vocabulary: ["active listening", "main idea", "key detail", "clarify", "respond"],
        teacherOverview: "Students practise listening closely, checking meaning, and responding thoughtfully.",
        lessonContent: [
          "Active listening means paying attention to what the speaker is saying and what the speaker means.",
          "A careful listener listens for the main idea, not just a few separate words.",
          "Important details help explain, prove, or support the main idea.",
          "When something is unclear, a listener can ask a specific question.",
          "A good response connects to what the speaker actually said."
        ],
        activityTitle: "Active Listening Mission",
        mission: "Choose listening choices that help you understand and respond well.",
        levels: ["Level 1: Listen for Meaning", "Level 2: Respond Thoughtfully"],
        quizTitle: "Active Listening Quiz",
        quizFocus: "Main ideas, key details, clarification, note-taking, and thoughtful responses",
        steps: [
          intro("Level 1: Listen for Meaning", "Before You Begin", "Get ready: listening is active work", "Listening is more than staying quiet. A listener has to think about the speaker's main idea, notice important details, and decide what still needs to be clarified."),
          intro("Level 1: Listen for Meaning", "Main Idea and Details", "Find the point first", "The main idea is the speaker's biggest point. Details are the examples, reasons, or facts that help explain that point."),
          question("Level 1: Listen for Meaning", "Listening Goal", "During a class talk about a science investigation, what is the strongest listening goal?", ["understand the speaker's main point and the evidence used", "copy as many exact words as possible into notes", "think of a related story to share after the talk"], "understand the speaker's main point and the evidence used", "Correct. Listening should focus on meaning and support.", "The best goal helps you understand the message."),
          question("Level 1: Listen for Meaning", "Main Idea", "A speaker says, 'Our group changed the amount of sunlight each plant received. The plant with steady sunlight grew the tallest.' What is the main idea?", ["Sunlight affected the plant growth in the investigation.", "The group measured plant height during science class.", "The tallest plant received attention from the group."], "Sunlight affected the plant growth in the investigation.", "Yes. That answer explains the speaker's main point.", "Look for the idea the details support."),
          question("Level 1: Listen for Meaning", "Clarifying", "A speaker uses the term 'controlled variable,' and you are not sure what it means. Which question is most helpful?", ["Could you explain which part stayed the same in your test?", "Could you repeat your whole talk from the beginning?", "Did your group enjoy doing the investigation?"], "Could you explain which part stayed the same in your test?", "Correct. The question targets the unclear idea.", "A clarification question should be specific."),
          question("Level 1: Listen for Meaning", "True or False", "Active listening includes thinking about how details connect to the speaker's main idea.", ["True", "False"], "True", "Correct. Active listeners connect details to meaning.", "Details are useful when they support an idea."),
          complete("Level 1: Listen for Meaning", "Level 1 Complete", "You practised listening for meaning."),
          intro("Level 2: Respond Thoughtfully", "Show You Understood", "Respond to the speaker's idea", "A thoughtful response often summarizes, asks a follow-up question, or adds a related point. It should show that you heard the speaker before adding your own thinking."),
          question("Level 2: Respond Thoughtfully", "Best Response", "A classmate explains that a character changed because she learned to trust her friend. Which response best shows active listening?", ["So your point is that the character's trust changed her choices later in the story.", "That reminds me of a different book with a friendship problem.", "I wrote about the setting because it was easier to describe."], "So your point is that the character's trust changed her choices later in the story.", "Correct. It connects directly to the speaker's idea.", "Choose the response that proves you heard the point."),
          question("Level 2: Respond Thoughtfully", "Helpful Notes", "Which note would be most useful while listening to a short presentation?", ["main idea plus two details that support it", "every date and number even if their purpose is unclear", "questions to ask before the speaker gives the conclusion"], "main idea plus two details that support it", "Yes. Useful notes help you remember meaning.", "Notes should help you respond later."),
          question("Level 2: Respond Thoughtfully", "Respectful Disagreement", "Which response respectfully disagrees with a speaker's conclusion?", ["I understand your reason, but the paragraph gives different evidence.", "I heard the topic, but I chose a different answer earlier.", "The conclusion may need one more example before I agree with it."], "I understand your reason, but the paragraph gives different evidence.", "Correct. It disagrees respectfully and gives a reason.", "Respectful disagreement should connect to evidence."),
          question("Level 2: Respond Thoughtfully", "True or False", "A good response can include a question if the question builds on what the speaker said.", ["True", "False"], "True", "Correct. Follow-up questions can show careful listening.", "Questions can be part of active listening."),
          complete("Level 2: Respond Thoughtfully", "Mission Complete", "You practised thoughtful listening responses.")
        ],
        quizQuestions: [
          quizQuestion("Active Listening", "Main Idea", "multipleChoice", "What should a listener usually find first?", ["the speaker's main idea", "the speaker's exact first sentence", "the longest word the speaker used"], "the speaker's main idea", "The main idea helps the listener understand the message."),
          quizQuestion("Active Listening", "Details", "multipleChoice", "Which detail best supports the idea that the class garden needs more watering?", ["Several plants had dry soil by noon.", "The garden has six rows of plants.", "The watering can is stored near the door."], "Several plants had dry soil by noon.", "Dry soil supports the need for watering."),
          quizQuestion("Active Listening", "Clarify", "multipleChoice", "Which question asks for clarification?", ["Could you explain what you mean by 'reliable source'?", "Which colour did you use on your title page?", "How long did it take you to finish the poster?"], "Could you explain what you mean by 'reliable source'?", "That question asks about an unclear term."),
          quizQuestion("Active Listening", "Notes", "multipleChoice", "Which notes would best help after a presentation?", ["main idea, two supporting details, and one question", "a list of side comments from nearby classmates", "only the speaker's last sentence"], "main idea, two supporting details, and one question", "Those notes focus on understanding."),
          quizQuestion("Active Listening", "Response", "multipleChoice", "Which response shows the listener understood?", ["Your main point is that the evidence changed your first prediction.", "I noticed the chart during your presentation.", "I was thinking about my own presentation topic."], "Your main point is that the evidence changed your first prediction.", "It summarizes the speaker's idea."),
          quizQuestion("Active Listening", "Disagreement", "multipleChoice", "Which response disagrees respectfully?", ["I see your point, but the data table shows another pattern.", "My answer is different from yours.", "The topic has more than one possible detail."], "I see your point, but the data table shows another pattern.", "It gives a respectful reason."),
          quizQuestion("Active Listening", "True or False", "trueFalse", "Active listening means thinking about meaning while the speaker is talking.", ["True", "False"], "True", "Listening includes thinking."),
          quizQuestion("Active Listening", "True or False", "trueFalse", "A listener should ask every question that comes to mind before the speaker finishes.", ["True", "False"], "False", "A listener should choose helpful questions at a suitable time.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-6-asking-good-questions",
        title: "Asking Good Questions",
        learningGoal: "Students will ask clear questions that deepen understanding and keep discussion focused.",
        successCriteria: [
          "I can ask questions that match the topic.",
          "I can choose questions that ask for evidence, explanation, or clarification.",
          "I can use follow-up questions to learn more."
        ],
        vocabulary: ["question", "clarify", "follow-up", "evidence", "open question"],
        teacherOverview: "Students practise choosing questions that help a speaker explain, clarify, and support ideas.",
        lessonContent: [
          "Good questions help people understand a topic more deeply.",
          "A clarifying question asks a speaker to explain something that is unclear.",
          "A follow-up question connects to what the speaker already said.",
          "Some questions ask for evidence or examples.",
          "Strong questions stay connected to the topic and purpose."
        ],
        activityTitle: "Question Builder Mission",
        mission: "Choose questions that help a discussion or presentation become clearer.",
        levels: ["Level 1: Match the Question", "Level 2: Deepen the Thinking"],
        quizTitle: "Asking Good Questions Quiz",
        quizFocus: "Clarifying questions, follow-up questions, evidence questions, topic fit, and open questions",
        steps: [
          intro("Level 1: Match the Question", "Before You Begin", "Get ready: questions have jobs", "A question can ask for a fact, an explanation, an example, evidence, or clarification. The strongest question depends on what you need to understand."),
          intro("Level 1: Match the Question", "Stay on Topic", "Useful questions connect", "A good question grows out of the presentation or discussion. It should help the speaker explain the idea, not move the group to a different subject."),
          question("Level 1: Match the Question", "Clarifying Question", "A speaker says, 'The narrator is unreliable.' Which question best asks for clarification?", ["What does unreliable mean in this part of the story?", "Which page number has your favourite sentence?", "Did you use a chart to plan your answer?"], "What does unreliable mean in this part of the story?", "Correct. It asks the speaker to explain the unclear term.", "Clarifying questions target confusion."),
          question("Level 1: Match the Question", "Evidence Question", "Which question asks a speaker to support an opinion with evidence?", ["Which detail from the text made you think that?", "How many slides did you include in your talk?", "Would you choose the same topic next time?"], "Which detail from the text made you think that?", "Yes. It asks for evidence.", "Evidence questions ask how the speaker knows."),
          question("Level 1: Match the Question", "Topic Fit", "A student presents about how bees help plants. Which question best fits the topic?", ["How does pollination help a plant make seeds?", "How long did it take to decorate your poster?", "Which animal topic will you study next month?"], "How does pollination help a plant make seeds?", "Correct. It stays with bees and plants.", "Choose the question connected to the topic."),
          question("Level 1: Match the Question", "True or False", "A helpful question can ask the speaker to explain an important word.", ["True", "False"], "True", "Correct. Important words sometimes need explanation.", "Clarifying vocabulary can help everyone."),
          complete("Level 1: Match the Question", "Level 1 Complete", "You practised matching questions to their purpose."),
          intro("Level 2: Deepen the Thinking", "Ask More Than One Kind", "Questions can go deeper", "Some questions need only a short answer. Other questions invite explanation, evidence, or comparison. Both can be useful, but deeper questions often help discussion grow."),
          question("Level 2: Deepen the Thinking", "Open Question", "Which question would most likely lead to a deeper answer?", ["Why do you think the author chose that ending?", "What is the title of the story?", "How many paragraphs did you read?"], "Why do you think the author chose that ending?", "Correct. It asks for thinking and explanation.", "Open questions often begin with why or how."),
          question("Level 2: Deepen the Thinking", "Follow-Up", "A speaker says, 'Our group changed our design after the first test.' Which follow-up question fits best?", ["What did the first test show that made you change it?", "What colour was the final design?", "Did you finish before the other groups?"], "What did the first test show that made you change it?", "Yes. It builds on what the speaker said.", "A follow-up connects to the previous answer."),
          question("Level 2: Deepen the Thinking", "Compare Question", "Which question asks the speaker to compare ideas?", ["How is this solution different from the one your group tried first?", "Where did you put your conclusion on the display?", "Which classmate read the introduction?"], "How is this solution different from the one your group tried first?", "Correct. It asks about similarities or differences.", "Compare questions ask how ideas relate."),
          question("Level 2: Deepen the Thinking", "True or False", "A question can be polite and still ask the speaker to explain evidence more clearly.", ["True", "False"], "True", "Correct. Respectful questions can be thoughtful and specific.", "Good questions can be both kind and challenging."),
          complete("Level 2: Deepen the Thinking", "Mission Complete", "You practised asking deeper questions.")
        ],
        quizQuestions: [
          quizQuestion("Good Questions", "Clarify", "multipleChoice", "Which question asks for clarification?", ["Could you explain what you mean by 'theme'?", "Did you use three colours in your chart?", "What did you name your project?"], "Could you explain what you mean by 'theme'?", "It asks the speaker to explain a meaning."),
          quizQuestion("Good Questions", "Evidence", "multipleChoice", "Which question asks for evidence?", ["Which sentence from the text supports your idea?", "How long did you spend reading?", "Which font did you choose for your title?"], "Which sentence from the text supports your idea?", "It asks for support from the text."),
          quizQuestion("Good Questions", "Follow-Up", "multipleChoice", "A speaker says, 'The second strategy worked better.' Which follow-up question fits best?", ["What made the second strategy work better?", "Which strategy did you write down first?", "Did your group use lined paper?"], "What made the second strategy work better?", "It asks for more about the speaker's point."),
          quizQuestion("Good Questions", "Topic Fit", "multipleChoice", "A talk is about healthy sleep routines. Which question best fits?", ["How can bedtime routines affect energy the next day?", "Which colour is used on the sleep chart?", "How many chairs are near the poster?"], "How can bedtime routines affect energy the next day?", "It matches the topic and invites explanation."),
          quizQuestion("Good Questions", "Open Question", "multipleChoice", "Which question is most open-ended?", ["How did the setting affect the character's choice?", "What is the character's name?", "How many chapters are in the book?"], "How did the setting affect the character's choice?", "It asks for explanation."),
          quizQuestion("Good Questions", "Purpose", "multipleChoice", "Why might a listener ask a question after a presentation?", ["to understand the speaker's idea more clearly", "to change the presentation topic", "to make the question time longer"], "to understand the speaker's idea more clearly", "Questions should support understanding."),
          quizQuestion("Good Questions", "True or False", "trueFalse", "A strong question can ask for an example.", ["True", "False"], "True", "Examples can make ideas clearer."),
          quizQuestion("Good Questions", "True or False", "trueFalse", "A follow-up question should connect to what the speaker just said.", ["True", "False"], "True", "Follow-up questions build on previous ideas.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-6-speaking-clearly",
        title: "Speaking Clearly",
        learningGoal: "Students will choose speaking habits that make ideas easier for an audience to hear and understand.",
        successCriteria: [
          "I can choose an appropriate volume and pace.",
          "I can explain why clear pronunciation and pauses help listeners.",
          "I can keep my spoken message focused on the purpose."
        ],
        vocabulary: ["volume", "pace", "pronunciation", "pause", "focus"],
        teacherOverview: "Students practise decisions about volume, pace, pronunciation, pauses, and focused speaking.",
        lessonContent: [
          "Clear speaking helps the audience follow the message.",
          "Volume should be loud enough for the room without sounding forced.",
          "Pace means how quickly or slowly a person speaks.",
          "Pauses give listeners time to understand important ideas.",
          "Clear speakers stay focused on the purpose and use words the audience can understand."
        ],
        activityTitle: "Clear Speaker Mission",
        mission: "Choose speaking choices that help an audience understand a message.",
        levels: ["Level 1: Voice Choices", "Level 2: Clear Message"],
        quizTitle: "Speaking Clearly Quiz",
        quizFocus: "Volume, pace, pauses, pronunciation, audience fit, and focused messages",
        steps: [
          intro("Level 1: Voice Choices", "Before You Begin", "Get ready: your voice guides listeners", "When you speak, your voice helps the audience follow your ideas. Volume, pace, pronunciation, and pauses all affect understanding."),
          intro("Level 1: Voice Choices", "Choose for the Room", "Clear is the goal", "A speaker should adjust for the room, the audience, and the purpose. A small group discussion and a class presentation may need different volume and pace."),
          question("Level 1: Voice Choices", "Volume", "A student is presenting to the whole class. Which volume choice is strongest?", ["speak loudly enough for the back row to hear without forcing the voice", "use the same soft voice used for a partner conversation", "raise the voice only when saying the final sentence"], "speak loudly enough for the back row to hear without forcing the voice", "Correct. Volume should fit the room.", "Think about everyone in the audience."),
          question("Level 1: Voice Choices", "Pace", "A speaker notices classmates are missing important points. Which change would help most?", ["slow down slightly and pause after key ideas", "add more details without changing the pace", "finish the talk and answer questions later"], "slow down slightly and pause after key ideas", "Yes. Pace and pauses help listeners follow.", "The problem is understanding while listening."),
          question("Level 1: Voice Choices", "Pronunciation", "Why should a speaker practise difficult words before presenting?", ["so listeners can understand important terms clearly", "so the introduction has more formal wording", "so the speaker can use fewer examples"], "so listeners can understand important terms clearly", "Correct. Practising words supports understanding.", "Pronunciation affects meaning."),
          question("Level 1: Voice Choices", "True or False", "Pauses can help listeners understand an important idea.", ["True", "False"], "True", "Correct. Pauses give listeners time to think.", "A pause can support meaning."),
          complete("Level 1: Voice Choices", "Level 1 Complete", "You practised voice choices."),
          intro("Level 2: Clear Message", "Keep the Message Focused", "Clear speaking needs clear thinking", "A strong speaker chooses details that fit the purpose. Extra details can be interesting, but they should not make the main point harder to follow."),
          question("Level 2: Clear Message", "Focus", "A student gives a short talk about how to care for a class plant. Which detail best belongs?", ["how much water the plant needs each week", "where the plant pot was bought", "which window has the best view of recess"], "how much water the plant needs each week", "Correct. It fits the purpose of plant care.", "Choose the detail the audience needs."),
          question("Level 2: Clear Message", "Audience Words", "Which sentence is clearest for Grade 5 classmates?", ["The experiment showed that more sunlight helped the seedlings grow.", "The data suggest phototropic response variation across specimens.", "The thing with the plants changed because light was involved."], "The experiment showed that more sunlight helped the seedlings grow.", "Yes. It is clear and precise for the audience.", "Choose wording that is accurate and easy to follow."),
          question("Level 2: Clear Message", "Transition", "Which phrase helps listeners follow a sequence?", ["The next step is", "Another interesting thing is", "I also remembered"], "The next step is", "Correct. It signals order.", "Transitions guide the audience."),
          question("Level 2: Clear Message", "True or False", "A clear speaker chooses details that match the purpose of the talk.", ["True", "False"], "True", "Correct. Purpose guides the details.", "Clear messages stay focused."),
          complete("Level 2: Clear Message", "Mission Complete", "You practised clear speaking choices.")
        ],
        quizQuestions: [
          quizQuestion("Speaking Clearly", "Volume", "multipleChoice", "Which volume choice fits a class presentation?", ["loud enough for the audience to hear comfortably", "soft enough that only nearby students hear", "loud only when reading headings"], "loud enough for the audience to hear comfortably", "Volume should fit the audience and room."),
          quizQuestion("Speaking Clearly", "Pace", "multipleChoice", "What should a speaker do if the audience looks confused during key points?", ["slow down and pause after important ideas", "add extra examples as quickly as possible", "skip the next point to save time"], "slow down and pause after important ideas", "Pace and pauses can improve understanding."),
          quizQuestion("Speaking Clearly", "Pronunciation", "multipleChoice", "Why practise unfamiliar words before a talk?", ["to say important words clearly", "to avoid using examples", "to make the talk sound more formal"], "to say important words clearly", "Clear words help listeners."),
          quizQuestion("Speaking Clearly", "Focus", "multipleChoice", "A talk explains how to use a class website. Which detail belongs?", ["where to click to open the assignment", "which browser icon looks best", "how many students used the website last term"], "where to click to open the assignment", "It helps the audience use the website."),
          quizQuestion("Speaking Clearly", "Audience", "multipleChoice", "Which wording is clearest for Grade 5 listeners?", ["The character changes because he learns from his mistake.", "The protagonist experiences a major developmental shift.", "The person in the book becomes different somehow."], "The character changes because he learns from his mistake.", "It is clear and accurate."),
          quizQuestion("Speaking Clearly", "Transition", "multipleChoice", "Which phrase helps listeners follow the order of steps?", ["After that", "Another thought", "For a different reason"], "After that", "It shows sequence."),
          quizQuestion("Speaking Clearly", "True or False", "trueFalse", "Speaking clearly includes choosing a suitable pace.", ["True", "False"], "True", "Pace affects understanding."),
          quizQuestion("Speaking Clearly", "True or False", "trueFalse", "A speaker should include every interesting fact even if it does not fit the purpose.", ["True", "False"], "False", "Details should support the purpose.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-6-organizing-a-short-talk",
        title: "Organizing a Short Talk",
        learningGoal: "Students will organize a short talk with a clear opening, connected points, and a closing idea.",
        successCriteria: [
          "I can plan an opening that tells the topic and purpose.",
          "I can arrange points in a logical order.",
          "I can use a closing sentence that brings the talk together."
        ],
        vocabulary: ["opening", "main point", "sequence", "transition", "closing"],
        teacherOverview: "Students practise planning short talks with logical order, transitions, and clear conclusions.",
        lessonContent: [
          "A short talk needs a clear beginning, middle, and ending.",
          "The opening tells the audience the topic and purpose.",
          "The middle gives main points with examples or evidence.",
          "Transitions help listeners move from one idea to the next.",
          "The closing reminds the audience of the most important idea."
        ],
        activityTitle: "Short Talk Organizer",
        mission: "Choose strong ways to organize and connect ideas in a short talk.",
        levels: ["Level 1: Build the Structure", "Level 2: Connect the Ideas"],
        quizTitle: "Organizing a Short Talk Quiz",
        quizFocus: "Opening, main points, order, transitions, support, and closing",
        steps: [
          intro("Level 1: Build the Structure", "Before You Begin", "Get ready: structure helps listeners", "A short talk is easier to follow when the speaker has a plan. The audience should know the topic, hear connected points, and understand the final message."),
          intro("Level 1: Build the Structure", "Opening, Middle, Closing", "Every part has a job", "The opening introduces the topic. The middle explains the main points. The closing brings the ideas together."),
          question("Level 1: Build the Structure", "Opening", "Which opening is strongest for a talk about keeping a reading journal?", ["Today I will explain how a reading journal helps readers track ideas.", "A reading journal can be kept in many kinds of notebooks.", "Reading journals are something we used last month."], "Today I will explain how a reading journal helps readers track ideas.", "Correct. It states the topic and purpose.", "A strong opening helps the audience know what to expect."),
          question("Level 1: Build the Structure", "Main Points", "A student's topic is 'three ways to prepare for a quiz.' Which set of main points fits best?", ["review notes, practise sample questions, get supplies ready", "choose materials, open notes, write a title", "read a chapter, organize a binder, write a story"], "review notes, practise sample questions, get supplies ready", "Yes. All three points fit the topic.", "Main points should work together."),
          question("Level 1: Build the Structure", "Logical Order", "Which order works best for explaining how to make a simple slideshow?", ["choose topic, gather information, make slides, practise speaking", "practise speaking, choose topic, make slides, gather information", "make slides, gather information, practise speaking, choose topic"], "choose topic, gather information, make slides, practise speaking", "Correct. The steps are in a sensible order.", "Think about what must happen first."),
          question("Level 1: Build the Structure", "True or False", "An organized talk helps the audience follow the speaker's thinking.", ["True", "False"], "True", "Correct. Organization supports understanding.", "Structure helps listeners."),
          complete("Level 1: Build the Structure", "Level 1 Complete", "You practised building a short talk structure."),
          intro("Level 2: Connect the Ideas", "Use Transitions", "Guide the audience", "Transitions are words and phrases that show how ideas connect. They can show order, add another point, give an example, or signal a conclusion."),
          question("Level 2: Connect the Ideas", "Transition", "Which transition would best introduce a second reason?", ["Another reason is", "In conclusion", "Before the topic begins"], "Another reason is", "Correct. It signals an added reason.", "Look for a phrase that adds a point."),
          question("Level 2: Connect the Ideas", "Support", "A speaker says, 'Daily reading builds stamina.' Which sentence best supports the point?", ["Reading a little each day can help students focus for longer texts.", "Some books have chapter titles and page numbers.", "Many people choose different places to read."], "Reading a little each day can help students focus for longer texts.", "Yes. It explains how the point works.", "Support should explain or prove the point."),
          question("Level 2: Connect the Ideas", "Closing", "Which closing best fits a talk about using a planner?", ["A planner can help students remember tasks, manage time, and prepare for learning.", "The planner has a calendar section near the front.", "I used my planner yesterday and wrote homework in it."], "A planner can help students remember tasks, manage time, and prepare for learning.", "Correct. It brings the main points together.", "A closing should leave the main message."),
          question("Level 2: Connect the Ideas", "True or False", "Transitions can help listeners hear how one idea connects to the next.", ["True", "False"], "True", "Correct. Transitions guide listeners.", "Transitions are guide words."),
          complete("Level 2: Connect the Ideas", "Mission Complete", "You practised connecting ideas in a short talk.")
        ],
        quizQuestions: [
          quizQuestion("Short Talk", "Opening", "multipleChoice", "Which opening clearly introduces a talk about safe online research?", ["Today I will explain three habits that make online research safer.", "Online research can happen on different devices.", "My presentation has four slides and a title."], "Today I will explain three habits that make online research safer.", "It names the topic and purpose."),
          quizQuestion("Short Talk", "Main Points", "multipleChoice", "Which main points fit a talk about preparing for a field trip?", ["check permission form, pack needed items, review behaviour expectations", "choose lunch items, reread class notes, review a spelling list", "open a laptop, write a paragraph, count supplies"], "check permission form, pack needed items, review behaviour expectations", "All three match the topic."),
          quizQuestion("Short Talk", "Order", "multipleChoice", "Which order best explains how to write a paragraph?", ["choose idea, plan details, draft, revise", "draft, revise, choose idea, plan details", "revise, plan details, draft, choose idea"], "choose idea, plan details, draft, revise", "The order is logical."),
          quizQuestion("Short Talk", "Transition", "multipleChoice", "Which phrase adds another point?", ["In addition", "To sum up", "Before the topic"], "In addition", "It adds information."),
          quizQuestion("Short Talk", "Support", "multipleChoice", "Which sentence supports the point 'A checklist helps teamwork'?", ["It lets group members see which jobs are finished and which still need work.", "A checklist can be written on paper or typed on a screen.", "Some checklists use boxes beside each line."], "It lets group members see which jobs are finished and which still need work.", "It explains why the checklist helps."),
          quizQuestion("Short Talk", "Closing", "multipleChoice", "Which closing fits a talk about choosing reliable sources?", ["Reliable sources help readers trust that information has been checked.", "Some websites use menus at the top of the page.", "I found three websites during research time."], "Reliable sources help readers trust that information has been checked.", "It leaves the main message."),
          quizQuestion("Short Talk", "True or False", "trueFalse", "A short talk should have connected points instead of unrelated facts.", ["True", "False"], "True", "Connected points help the audience."),
          quizQuestion("Short Talk", "True or False", "trueFalse", "The closing should help the audience remember the main idea.", ["True", "False"], "True", "A closing brings the talk together.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-6-voice-and-body-language",
        title: "Using Voice and Body Language",
        learningGoal: "Students will explain how voice, posture, gestures, and eye contact support a spoken message.",
        successCriteria: [
          "I can match voice choices to the purpose of a message.",
          "I can choose body language that helps the audience listen.",
          "I can identify gestures or movement that support meaning."
        ],
        vocabulary: ["tone", "expression", "posture", "gesture", "eye contact"],
        teacherOverview: "Students practise choosing voice and body language that supports meaning without distracting from the message.",
        lessonContent: [
          "Voice and body language are part of oral communication.",
          "Tone and expression help show the feeling or purpose of a message.",
          "Posture and eye contact can show confidence and respect for the audience.",
          "Gestures should support the message instead of distracting from it.",
          "Different purposes may call for different voice and body choices."
        ],
        activityTitle: "Voice and Body Language Mission",
        mission: "Choose presentation choices that support the spoken message.",
        levels: ["Level 1: Voice Meaning", "Level 2: Body Language Choices"],
        quizTitle: "Using Voice and Body Language Quiz",
        quizFocus: "Tone, expression, posture, eye contact, gesture, and audience support",
        steps: [
          intro("Level 1: Voice Meaning", "Before You Begin", "Get ready: voice carries meaning", "The same words can sound different depending on tone, expression, pace, and volume. Voice choices should match the purpose and audience."),
          intro("Level 1: Voice Meaning", "Match the Purpose", "Use voice intentionally", "A safety announcement, a story reading, and a research presentation do not need exactly the same voice. The speaker should choose a tone that fits the message."),
          question("Level 1: Voice Meaning", "Tone", "Which tone best fits a reminder about careful hallway movement?", ["calm and serious", "excited and dramatic", "quiet and uncertain"], "calm and serious", "Correct. The tone matches a safety reminder.", "Think about the purpose of the message."),
          question("Level 1: Voice Meaning", "Expression", "A student reads a funny moment from a story. Which choice would help the audience understand the mood?", ["use light expression while still reading clearly", "use the same flat voice for every sentence", "rush through the sentence before explaining it"], "use light expression while still reading clearly", "Yes. Expression can support mood.", "Voice can show feeling without losing clarity."),
          question("Level 1: Voice Meaning", "Emphasis", "A speaker wants listeners to remember one key word. What voice choice could help?", ["pause briefly before the key word and say it clearly", "make every word sound equally important", "add a new detail right after the key word"], "pause briefly before the key word and say it clearly", "Correct. A pause and clear voice can create emphasis.", "Emphasis shows importance."),
          question("Level 1: Voice Meaning", "True or False", "Tone can change how listeners understand a spoken message.", ["True", "False"], "True", "Correct. Tone affects meaning.", "Voice choices communicate."),
          complete("Level 1: Voice Meaning", "Level 1 Complete", "You practised matching voice to meaning."),
          intro("Level 2: Body Language Choices", "Support the Message", "Body language should help", "Posture, eye contact, gestures, and movement can help the audience follow a presentation. The goal is to support the message, not take attention away from it."),
          question("Level 2: Body Language Choices", "Posture", "Which body language choice best supports a class presentation?", ["stand in a balanced way and face the audience", "turn toward the screen for most of the talk", "shift position each time a new sentence begins"], "stand in a balanced way and face the audience", "Correct. It helps the audience listen.", "Body language should make communication easier."),
          question("Level 2: Body Language Choices", "Gesture", "A speaker explains three steps in a process. Which gesture would support the message?", ["show one, two, and three with fingers as each step is named", "tap the notes each time a word is read", "point to different parts of the room between steps"], "show one, two, and three with fingers as each step is named", "Yes. The gesture matches the structure.", "Gestures should connect to meaning."),
          question("Level 2: Body Language Choices", "Eye Contact", "What is a good way to use eye contact during a presentation?", ["look up from notes regularly to include different parts of the audience", "look only at the first row to stay focused", "read every sentence from notes before looking up"], "look up from notes regularly to include different parts of the audience", "Correct. It helps connect with the audience.", "Eye contact can be brief and natural."),
          question("Level 2: Body Language Choices", "True or False", "Gestures are most helpful when they support what the speaker is saying.", ["True", "False"], "True", "Correct. Gestures should fit the message.", "Useful gestures add meaning."),
          complete("Level 2: Body Language Choices", "Mission Complete", "You practised voice and body language choices.")
        ],
        quizQuestions: [
          quizQuestion("Voice and Body", "Tone", "multipleChoice", "Which tone best fits a report about a science result?", ["clear and thoughtful", "playful and exaggerated", "uncertain and barely audible"], "clear and thoughtful", "The tone fits an informational report."),
          quizQuestion("Voice and Body", "Expression", "multipleChoice", "Why use expression when reading part of a story aloud?", ["to help listeners understand the mood and speaker", "to make the reading sound longer", "to replace the need to understand the words"], "to help listeners understand the mood and speaker", "Expression can support meaning."),
          quizQuestion("Voice and Body", "Emphasis", "multipleChoice", "How can a speaker emphasize an important point?", ["pause before it and say it clearly", "add several extra points right after it", "look down while saying it"], "pause before it and say it clearly", "A pause can help important ideas stand out."),
          quizQuestion("Voice and Body", "Posture", "multipleChoice", "Which posture helps during a presentation?", ["balanced and facing the audience", "turned away while reading slides", "leaning over notes for most of the talk"], "balanced and facing the audience", "It supports communication."),
          quizQuestion("Voice and Body", "Gesture", "multipleChoice", "Which gesture best supports directions with three steps?", ["briefly count the steps with fingers", "move the hands the same way for each sentence", "hold the paper higher during the conclusion"], "briefly count the steps with fingers", "It matches the structure."),
          quizQuestion("Voice and Body", "Eye Contact", "multipleChoice", "Which eye contact choice is strongest?", ["look up regularly and include different parts of the audience", "look at one friend for the whole talk", "look only at the notes until question time"], "look up regularly and include different parts of the audience", "It helps include the audience."),
          quizQuestion("Voice and Body", "True or False", "trueFalse", "Body language can support or weaken a spoken message.", ["True", "False"], "True", "Body language affects communication."),
          quizQuestion("Voice and Body", "True or False", "trueFalse", "The same tone is best for every speaking purpose.", ["True", "False"], "False", "Tone should fit the purpose.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-6-group-discussion-skills",
        title: "Group Discussion Skills",
        learningGoal: "Students will contribute to group discussions by listening, building on ideas, and sharing respectfully.",
        successCriteria: [
          "I can add an idea that connects to the discussion.",
          "I can build on another person's idea with a reason or example.",
          "I can help a group stay respectful and focused."
        ],
        vocabulary: ["discussion", "contribute", "build on", "turn-taking", "respectful"],
        teacherOverview: "Students practise discussion choices that keep group work focused, respectful, and useful.",
        lessonContent: [
          "A group discussion works best when members listen and contribute.",
          "A contribution should connect to the topic or task.",
          "Building on an idea means adding a reason, example, question, or connection.",
          "Turn-taking helps more voices be heard.",
          "Respectful discussion can include different opinions when people use reasons and listen well."
        ],
        activityTitle: "Discussion Team Mission",
        mission: "Choose discussion moves that help a group think and work together.",
        levels: ["Level 1: Contribute Clearly", "Level 2: Build Together"],
        quizTitle: "Group Discussion Skills Quiz",
        quizFocus: "Topic fit, building on ideas, turn-taking, respectful disagreement, and group focus",
        steps: [
          intro("Level 1: Contribute Clearly", "Before You Begin", "Get ready: discussion is shared work", "In a discussion, the goal is not only to say something. The goal is to help the group understand the topic, solve a problem, or make a thoughtful decision."),
          intro("Level 1: Contribute Clearly", "Connect to the Topic", "Useful contributions fit", "A strong contribution connects to the question or task. It can add a reason, example, question, or careful disagreement."),
          question("Level 1: Contribute Clearly", "Topic Fit", "A group is discussing which source is best for a research project. Which comment best fits?", ["The official museum page has dates and author information, so it may be reliable.", "I found a website with a bright homepage and many pictures.", "Our group should decide who will print the final copy."], "The official museum page has dates and author information, so it may be reliable.", "Correct. It fits the discussion and gives a reason.", "Choose the comment that helps the group think about sources."),
          question("Level 1: Contribute Clearly", "Add a Reason", "A student says, 'I think paragraph two is the strongest.' Which addition would help most?", ["It gives two examples that support the topic sentence.", "It is near the middle of the page.", "It was the paragraph I read first."], "It gives two examples that support the topic sentence.", "Yes. It gives a useful reason.", "A reason should explain the thinking."),
          question("Level 1: Contribute Clearly", "Question Move", "Which question would help a group choose evidence for an answer?", ["Which detail best proves our main point?", "Who wants to read the next paragraph aloud?", "How much space is left on the poster?"], "Which detail best proves our main point?", "Correct. It focuses on evidence.", "Evidence questions help academic discussion."),
          question("Level 1: Contribute Clearly", "True or False", "A discussion contribution should connect to the group's topic or task.", ["True", "False"], "True", "Correct. Topic fit matters.", "Connected ideas help the group."),
          complete("Level 1: Contribute Clearly", "Level 1 Complete", "You practised clear discussion contributions."),
          intro("Level 2: Build Together", "Build on Ideas", "Use what others say", "Building on someone else's idea shows listening. You might add an example, compare ideas, ask a follow-up question, or offer a reasoned disagreement."),
          question("Level 2: Build Together", "Build On", "A classmate says, 'The character seems nervous.' Which response builds on that idea?", ["Yes, and the repeated short sentences show how rushed her thoughts are.", "I chose a different character for my answer.", "The chapter also has a setting description."], "Yes, and the repeated short sentences show how rushed her thoughts are.", "Correct. It adds evidence to the idea.", "Build by adding support or connection."),
          question("Level 2: Build Together", "Turn-Taking", "Two students have spoken several times, and one student has not shared yet. Which group move is strongest?", ["invite the student to share if they would like to add an idea", "continue with the speakers who have the most prepared notes", "switch to writing so the group can finish faster"], "invite the student to share if they would like to add an idea", "Yes. It makes room without forcing.", "Good discussion includes others respectfully."),
          question("Level 2: Build Together", "Respectful Difference", "Which sentence gives a different opinion respectfully?", ["I see the evidence differently because the last paragraph changes the meaning.", "That answer is not the one our group should use.", "My idea has more details, so it should go first."], "I see the evidence differently because the last paragraph changes the meaning.", "Correct. It gives a reason and stays respectful.", "Different opinions should include reasons."),
          question("Level 2: Build Together", "True or False", "A group can disagree respectfully when members explain their reasons and listen.", ["True", "False"], "True", "Correct. Respectful disagreement can improve thinking.", "Discussion is not only agreement."),
          complete("Level 2: Build Together", "Mission Complete", "You practised building ideas together.")
        ],
        quizQuestions: [
          quizQuestion("Discussion", "Topic Fit", "multipleChoice", "A group is choosing evidence for a reading response. Which comment fits best?", ["This sentence supports our answer because it shows the character's motive.", "The book cover uses dark colours.", "We should decide who writes the title."], "This sentence supports our answer because it shows the character's motive.", "It fits the evidence task."),
          quizQuestion("Discussion", "Reason", "multipleChoice", "Which contribution includes a reason?", ["I think the first source is better because it lists the author and date.", "I found the first source before the second one.", "The first source has a longer title."], "I think the first source is better because it lists the author and date.", "It explains the thinking."),
          quizQuestion("Discussion", "Question", "multipleChoice", "Which question helps a group check its answer?", ["Does our evidence match the question we were asked?", "Who has the neatest handwriting?", "Which paragraph is closest to the top?"], "Does our evidence match the question we were asked?", "It checks the quality of the answer."),
          quizQuestion("Discussion", "Build On", "multipleChoice", "Which sentence builds on a classmate's idea?", ["I agree, and the chart gives another example of that pattern.", "I also have a different idea about the next topic.", "I remember seeing a chart in another book."], "I agree, and the chart gives another example of that pattern.", "It adds support."),
          quizQuestion("Discussion", "Turn-Taking", "multipleChoice", "What helps a group hear more voices?", ["make space for students who have not shared yet", "let the fastest speaker lead each answer", "choose one person to answer every question"], "make space for students who have not shared yet", "Turn-taking supports participation."),
          quizQuestion("Discussion", "Disagreement", "multipleChoice", "Which disagreement is respectful and useful?", ["I read that sentence differently because it describes the opposite effect.", "I do not think that answer should count.", "Our group already has enough ideas."], "I read that sentence differently because it describes the opposite effect.", "It gives a reason."),
          quizQuestion("Discussion", "True or False", "trueFalse", "Building on an idea can include adding evidence or an example.", ["True", "False"], "True", "That is one way to build."),
          quizQuestion("Discussion", "True or False", "trueFalse", "A group discussion should stay connected to the task.", ["True", "False"], "True", "Focus helps the group.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-6-giving-and-receiving-feedback",
        title: "Giving and Receiving Feedback",
        learningGoal: "Students will give and receive feedback that is specific, respectful, and useful for revision.",
        successCriteria: [
          "I can identify feedback that is specific and helpful.",
          "I can give feedback that names a strength and a next step.",
          "I can use feedback to decide what to revise."
        ],
        vocabulary: ["feedback", "specific", "revision", "strength", "next step"],
        teacherOverview: "Students practise recognizing helpful feedback and using it to improve speaking or writing.",
        lessonContent: [
          "Feedback is information that helps a learner improve.",
          "Helpful feedback is specific, respectful, and connected to the goal.",
          "A strength names something that is already working.",
          "A next step suggests one useful improvement.",
          "Receiving feedback well means considering it and deciding what revision would help."
        ],
        activityTitle: "Helpful Feedback Mission",
        mission: "Choose feedback that helps a speaker or writer improve.",
        levels: ["Level 1: Spot Helpful Feedback", "Level 2: Use Feedback Well"],
        quizTitle: "Giving and Receiving Feedback Quiz",
        quizFocus: "Specific feedback, strengths, next steps, revision choices, and respectful response",
        steps: [
          intro("Level 1: Spot Helpful Feedback", "Before You Begin", "Get ready: feedback should help", "Feedback is useful when it helps someone understand what is working and what could improve. It should be specific enough to guide the next revision."),
          intro("Level 1: Spot Helpful Feedback", "Strength and Next Step", "Name what works and what to try next", "Good feedback often includes a strength and a next step. The strength tells what to keep. The next step tells what to revise."),
          question("Level 1: Spot Helpful Feedback", "Specific Feedback", "Which feedback is most useful after a short talk?", ["Your opening clearly tells the topic; add one example to support your second point.", "Your talk was interesting and had a good topic.", "You should make the middle part better."], "Your opening clearly tells the topic; add one example to support your second point.", "Correct. It names a strength and a specific next step.", "Useful feedback gives clear information."),
          question("Level 1: Spot Helpful Feedback", "Strength", "Which comment names a clear strength?", ["Your voice was easy to hear from the back of the room.", "Your presentation had several parts.", "You finished close to the time limit."], "Your voice was easy to hear from the back of the room.", "Yes. It names a clear speaking strength.", "A strength says what worked well."),
          question("Level 1: Spot Helpful Feedback", "Next Step", "A student's presentation has good facts but no closing sentence. Which next step fits best?", ["Add a closing sentence that reminds listeners of the main idea.", "Use a larger title on the first slide.", "Practise saying the first sentence more slowly."], "Add a closing sentence that reminds listeners of the main idea.", "Correct. It matches the need.", "The next step should solve the problem."),
          question("Level 1: Spot Helpful Feedback", "True or False", "Helpful feedback should connect to the assignment goal.", ["True", "False"], "True", "Correct. Feedback should match the goal.", "Goal-connected feedback is easier to use."),
          complete("Level 1: Spot Helpful Feedback", "Level 1 Complete", "You practised spotting helpful feedback."),
          intro("Level 2: Use Feedback Well", "Decide What to Revise", "Feedback is a tool", "You do not need to change everything at once. A learner should look for the feedback that best matches the goal and choose a clear revision step."),
          question("Level 2: Use Feedback Well", "Revision Choice", "Feedback says, 'Your examples are strong, but your main point is not clear until the end.' What revision fits best?", ["Move the main point into the opening and keep the examples.", "Replace the examples with shorter sentences.", "Add a new picture before each example."], "Move the main point into the opening and keep the examples.", "Correct. It keeps the strength and fixes the issue.", "Use the feedback to guide one helpful change."),
          question("Level 2: Use Feedback Well", "Receiving Feedback", "Which response shows a student is using feedback well?", ["I will check whether my second point needs clearer evidence.", "I will revise the whole presentation before checking the goal.", "I will keep the presentation the same because it is finished."], "I will check whether my second point needs clearer evidence.", "Yes. It considers a specific improvement.", "Good response focuses on revision."),
          question("Level 2: Use Feedback Well", "Peer Feedback", "Which peer feedback would best help a classmate improve a visual aid?", ["The chart supports your point, but the labels need to be easier to read.", "The chart is my favourite part of the whole presentation.", "The chart has lines, labels, and two colours."], "The chart supports your point, but the labels need to be easier to read.", "Correct. It names what works and what to fix.", "Specific feedback helps revision."),
          question("Level 2: Use Feedback Well", "True or False", "Receiving feedback well means thinking about it before deciding what to revise.", ["True", "False"], "True", "Correct. Feedback needs thoughtful use.", "Feedback is considered, not copied without thought."),
          complete("Level 2: Use Feedback Well", "Mission Complete", "You practised giving and using feedback.")
        ],
        quizQuestions: [
          quizQuestion("Feedback", "Specific", "multipleChoice", "Which feedback is most specific?", ["Your second reason is clear; add evidence from the article to support it.", "Your work is good and easy to read.", "You should improve the answer a bit."], "Your second reason is clear; add evidence from the article to support it.", "It gives a clear strength and next step."),
          quizQuestion("Feedback", "Strength", "multipleChoice", "Which comment names a strength?", ["Your conclusion connects back to the main idea.", "Your paragraph is about the topic.", "Your work has a title and sentences."], "Your conclusion connects back to the main idea.", "It names what is working."),
          quizQuestion("Feedback", "Next Step", "multipleChoice", "A talk has strong facts but no order. Which next step fits best?", ["Put the facts into an order that helps listeners follow.", "Choose a different topic for the talk.", "Read the final sentence with more expression."], "Put the facts into an order that helps listeners follow.", "It addresses the problem."),
          quizQuestion("Feedback", "Revision", "multipleChoice", "Feedback says, 'Your voice is clear, but your visual has too much small text.' What should the student revise?", ["make the visual easier to read", "change the speaking voice completely", "add more facts to the visual"], "make the visual easier to read", "The feedback points to readability."),
          quizQuestion("Feedback", "Response", "multipleChoice", "Which response to feedback is most useful?", ["I will decide which suggestion best helps my goal.", "I will change whatever my partner mentions first.", "I will focus only on the positive comment."], "I will decide which suggestion best helps my goal.", "The student thinks about the goal."),
          quizQuestion("Feedback", "Visual Aid", "multipleChoice", "Which feedback helps improve a poster?", ["Your headings are clear; make the date easier to find.", "Your poster uses a clear title and one image.", "Your topic is one many students know."], "Your headings are clear; make the date easier to find.", "It gives a useful next step."),
          quizQuestion("Feedback", "True or False", "trueFalse", "Helpful feedback is specific, respectful, and connected to the goal.", ["True", "False"], "True", "Those qualities make feedback useful."),
          quizQuestion("Feedback", "True or False", "trueFalse", "A next step should help the learner know what to try next.", ["True", "False"], "True", "A next step guides revision.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-6-preparing-a-presentation",
        title: "Preparing a Presentation",
        learningGoal: "Students will prepare a presentation by planning audience, purpose, content, visuals, practice, and final checks.",
        successCriteria: [
          "I can plan a presentation for a clear audience and purpose.",
          "I can choose notes and visuals that support the message.",
          "I can practise and revise before presenting."
        ],
        vocabulary: ["presentation", "audience", "purpose", "visual aid", "practice"],
        teacherOverview: "Students practise planning presentation choices from purpose and audience through final revision.",
        lessonContent: [
          "A strong presentation starts with audience and purpose.",
          "The speaker should choose main points that fit the purpose.",
          "Notes should guide the speaker without becoming a script to read word for word.",
          "Visual aids should make ideas clearer for the audience.",
          "Practising helps the speaker check timing, clarity, voice, and confidence."
        ],
        activityTitle: "Presentation Prep Mission",
        mission: "Choose preparation steps that make a presentation clear and ready.",
        levels: ["Level 1: Plan the Presentation", "Level 2: Practise and Revise"],
        quizTitle: "Preparing a Presentation Quiz",
        quizFocus: "Audience, purpose, main points, notes, visuals, practice, timing, and final checks",
        steps: [
          intro("Level 1: Plan the Presentation", "Before You Begin", "Get ready: preparation starts early", "A presentation is easier to give when the speaker knows the audience, purpose, main points, and support before making slides or notes."),
          intro("Level 1: Plan the Presentation", "Audience and Purpose", "Decide what listeners need", "Audience and purpose guide almost every choice. A talk for classmates may use different examples than a talk for parents or younger students."),
          question("Level 1: Plan the Presentation", "Audience", "A student is presenting to Grade 2 students about playground safety. Which choice best fits the audience?", ["use simple examples from recess routines", "include a detailed report about school policy", "compare several playground designs from different schools"], "use simple examples from recess routines", "Correct. The examples fit younger listeners.", "Choose what the audience can use."),
          question("Level 1: Plan the Presentation", "Purpose", "A presentation is meant to teach classmates how to check a source. Which main point belongs?", ["Look for the author, date, and evidence before trusting information.", "Websites can use menus, images, and search boxes.", "Some students prefer doing research with a partner."], "Look for the author, date, and evidence before trusting information.", "Yes. It fits the teaching purpose.", "Choose the point that matches the goal."),
          question("Level 1: Plan the Presentation", "Main Points", "Which plan is strongest for a short presentation about a favourite Canadian animal?", ["habitat, diet, adaptations, and one interesting fact", "animal name, poster colour, project partner, and font choice", "book title, class period, drawing size, and presentation day"], "habitat, diet, adaptations, and one interesting fact", "Correct. The points fit the topic.", "Main points should help the audience learn."),
          question("Level 1: Plan the Presentation", "True or False", "Audience and purpose should guide presentation choices.", ["True", "False"], "True", "Correct. They shape content, wording, and visuals.", "Planning begins with audience and purpose."),
          complete("Level 1: Plan the Presentation", "Level 1 Complete", "You practised planning presentation choices."),
          intro("Level 2: Practise and Revise", "Check Before Sharing", "Preparation includes practice", "Practising helps a speaker notice unclear parts, timing problems, missing support, or visual aids that are hard to read."),
          question("Level 2: Practise and Revise", "Notes", "Which note style would best support a student during a presentation?", ["short cue words for each main point and key example", "full paragraphs to read from the page", "only the title and the final sentence"], "short cue words for each main point and key example", "Correct. Cue words help the speaker speak naturally.", "Notes should guide, not replace speaking."),
          question("Level 2: Practise and Revise", "Visual Aid", "Which visual aid best supports a talk comparing two habitats?", ["a simple labelled chart showing key similarities and differences", "a large decorative title with small facts below", "a photo that looks interesting but is not explained"], "a simple labelled chart showing key similarities and differences", "Yes. It helps the audience compare.", "Visuals should make ideas clearer."),
          question("Level 2: Practise and Revise", "Practice Check", "What should a student check while practising a presentation?", ["timing, clear voice, order of ideas, and hard words", "whether every slide uses the same number of words", "whether the longest section comes first"], "timing, clear voice, order of ideas, and hard words", "Correct. Those checks improve delivery.", "Practice helps find problems before presenting."),
          question("Level 2: Practise and Revise", "True or False", "A speaker can revise a presentation after practising it.", ["True", "False"], "True", "Correct. Practice often shows what needs revision.", "Practise, notice, revise."),
          complete("Level 2: Practise and Revise", "Mission Complete", "You practised preparing a presentation.")
        ],
        quizQuestions: [
          quizQuestion("Presentation Prep", "Audience", "multipleChoice", "A talk is for younger students learning library routines. Which choice fits best?", ["simple steps with familiar school examples", "a long explanation of library classification", "a comparison of several research databases"], "simple steps with familiar school examples", "The audience needs clear, familiar examples."),
          quizQuestion("Presentation Prep", "Purpose", "multipleChoice", "A presentation is meant to persuade classmates to join a cleanup team. Which point belongs?", ["The team helps keep shared spaces ready for everyone.", "The sign-up sheet is printed on white paper.", "The classroom has several recycling containers."], "The team helps keep shared spaces ready for everyone.", "It supports the persuasive purpose."),
          quizQuestion("Presentation Prep", "Main Points", "multipleChoice", "Which set of main points fits a presentation about a book character?", ["goal, challenge, important choice, and how the character changes", "cover colour, chapter count, page numbers, and font size", "author name, library shelf, due date, and reading spot"], "goal, challenge, important choice, and how the character changes", "Those points help explain a character."),
          quizQuestion("Presentation Prep", "Notes", "multipleChoice", "Which notes are best for speaking naturally?", ["cue words and key examples", "full paragraphs to read word for word", "only the opening sentence"], "cue words and key examples", "Cue words guide the speaker."),
          quizQuestion("Presentation Prep", "Visual Aid", "multipleChoice", "Which visual aid best supports a presentation about a process?", ["a labelled sequence chart", "a background picture with small text", "a title page with no details"], "a labelled sequence chart", "A sequence chart shows process order."),
          quizQuestion("Presentation Prep", "Practice", "multipleChoice", "Why practise before presenting?", ["to check timing, clarity, and order", "to memorize every possible audience question", "to make the presentation longer"], "to check timing, clarity, and order", "Practice helps a speaker revise."),
          quizQuestion("Presentation Prep", "True or False", "trueFalse", "Visual aids should support the message, not distract from it.", ["True", "False"], "True", "Visuals should help communication."),
          quizQuestion("Presentation Prep", "True or False", "trueFalse", "A presentation plan should begin with audience and purpose.", ["True", "False"], "True", "Audience and purpose guide the plan.")
        ]
      }),
      {
        id: "grade-5-language-unit-6-final-quiz",
        title: "Unit 6 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherOverview: "Use this quiz after students complete the Oral Communication and Presentation lessons.",
        teacherSummary: "The Unit 6 final quiz checks active listening, good questions, clear speaking, short talk organization, voice and body language, group discussion, feedback, and presentation preparation.",
        quiz: {
          title: "Oral Communication and Presentation Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Active Listening", "Main Idea", "multipleChoice", "A speaker says, 'Our group tested three materials. The felt kept the ice cold longest.' What is the main idea?", ["The test showed felt worked best as an insulator.", "The group used three materials in a test.", "The speaker used ice during the investigation."], "The test showed felt worked best as an insulator.", "The main idea explains what the test showed."),
            quizQuestion("Part A: Active Listening", "Clarify", "multipleChoice", "Which question best clarifies an unclear word?", ["What do you mean by 'conclusion' in this investigation?", "Which slide has your chart on it?", "How long did your group practise?"], "What do you mean by 'conclusion' in this investigation?", "It asks for the meaning of the unclear word."),
            quizQuestion("Part A: Active Listening", "Response", "multipleChoice", "Which response shows active listening?", ["So your evidence is that the character changes after chapter four.", "I chose a different book for my project.", "Your presentation had five slides."], "So your evidence is that the character changes after chapter four.", "It connects to the speaker's idea."),
            quizQuestion("Part B: Good Questions", "Evidence", "multipleChoice", "Which question asks for evidence?", ["Which fact from your source supports that claim?", "How many pictures did your source include?", "Did you find the source yesterday?"], "Which fact from your source supports that claim?", "It asks for support."),
            quizQuestion("Part B: Good Questions", "Follow-Up", "multipleChoice", "A speaker says, 'The second design was stronger.' Which follow-up question fits?", ["What change made the second design stronger?", "Which colour was the first design?", "Who carried the materials to the table?"], "What change made the second design stronger?", "It builds on the speaker's statement."),
            quizQuestion("Part C: Speaking Clearly", "Volume", "multipleChoice", "Which voice choice helps in a classroom presentation?", ["speak loudly enough for the audience to hear comfortably", "use the same quiet voice as a partner talk", "make only the introduction louder"], "speak loudly enough for the audience to hear comfortably", "Volume should fit the room."),
            quizQuestion("Part C: Speaking Clearly", "Pace", "multipleChoice", "What should a speaker do when listeners seem to miss key points?", ["slow down and pause after important ideas", "add more details before moving on", "read the rest from notes without stopping"], "slow down and pause after important ideas", "Pace and pauses help understanding."),
            quizQuestion("Part D: Short Talk", "Opening", "multipleChoice", "Which opening is strongest?", ["Today I will explain how three safety habits help during science investigations.", "Science investigations can use several kinds of materials.", "My presentation has a title and a conclusion."], "Today I will explain how three safety habits help during science investigations.", "It names topic and purpose."),
            quizQuestion("Part D: Short Talk", "Transition", "multipleChoice", "Which phrase signals a final summary?", ["To sum up", "For example", "Another reason"], "To sum up", "It signals a closing summary."),
            quizQuestion("Part D: Short Talk", "Support", "multipleChoice", "Which sentence supports the point 'Practice improves a presentation'?", ["Practice helps a speaker notice unclear words and timing problems.", "Practice can happen at a desk or in front of a mirror.", "Some students practise during the morning."], "Practice helps a speaker notice unclear words and timing problems.", "It explains why practice helps."),
            quizQuestion("Part E: Voice and Body", "Tone", "multipleChoice", "Which tone fits a serious safety reminder?", ["calm and clear", "playful and dramatic", "uncertain and rushed"], "calm and clear", "The tone fits the purpose."),
            quizQuestion("Part E: Voice and Body", "Gesture", "multipleChoice", "Which gesture best supports explaining three steps?", ["briefly count the steps with fingers", "hold notes higher each time", "move to a new spot for every sentence"], "briefly count the steps with fingers", "The gesture supports the structure."),
            quizQuestion("Part F: Discussion", "Build On", "multipleChoice", "Which sentence builds on another student's idea?", ["I agree, and the chart gives another example of that pattern.", "I want to talk about a different part now.", "I wrote down the same answer earlier."], "I agree, and the chart gives another example of that pattern.", "It adds support to the idea."),
            quizQuestion("Part F: Discussion", "Respectful Difference", "multipleChoice", "Which response gives a different opinion respectfully?", ["I read the evidence differently because the last sentence changes the meaning.", "Our group should use my answer instead.", "That idea is not the one I wrote down."], "I read the evidence differently because the last sentence changes the meaning.", "It disagrees with a reason."),
            quizQuestion("Part G: Feedback", "Specific Feedback", "multipleChoice", "Which feedback is most useful?", ["Your main idea is clear; add one example to support your second point.", "Your presentation is nice and has good parts.", "You should change the part in the middle."], "Your main idea is clear; add one example to support your second point.", "It is specific and useful."),
            quizQuestion("Part G: Feedback", "Use Feedback", "multipleChoice", "Feedback says, 'Your facts are strong, but the order is hard to follow.' What should the student revise?", ["organize the facts in a clearer order", "replace the facts with shorter ones", "change the title and leave the facts"], "organize the facts in a clearer order", "The revision matches the feedback."),
            quizQuestion("Part H: Presentation Prep", "Audience", "multipleChoice", "A talk is for younger students. Which choice fits best?", ["use simple examples they already understand", "include technical terms from older grades", "focus mainly on how the slideshow was made"], "use simple examples they already understand", "Audience affects word choice and examples."),
            quizQuestion("Part H: Presentation Prep", "Notes", "multipleChoice", "Which notes best support natural speaking?", ["cue words for main points and examples", "full paragraphs to read word for word", "only the title and closing sentence"], "cue words for main points and examples", "Cue words guide the speaker."),
            quizQuestion("Part I: Review", "True or False", "trueFalse", "A strong oral response should connect to what the speaker said.", ["True", "False"], "True", "Responses should show listening."),
            quizQuestion("Part I: Review", "True or False", "trueFalse", "A visual aid should make the message easier for the audience to understand.", ["True", "False"], "True", "Visual aids should support the message.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Oral Communication and Presentation mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The final unit quiz checks active listening, good questions, clear speaking, short talk organization, voice and body language, group discussion, feedback, and presentation preparation."
    }
  };

  window.PracticeStarUnit["grade-5-language-unit-6"] = unit;
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
