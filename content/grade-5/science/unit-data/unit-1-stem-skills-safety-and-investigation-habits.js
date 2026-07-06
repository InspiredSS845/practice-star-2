window.PracticeStarContent = window.PracticeStarContent || {};
window.PracticeStarContent.grade5Science = window.PracticeStarContent.grade5Science || { subject: "Science and Technology", grade: 5, units: [] };

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
      teacherSummary: options.teacherSummary,
      teacherOverview: options.teacherOverview,
      christianFocus: options.christianFocus,
      lessonContent: options.lessonContent,
      practiceIdeas: [
        "Share the student mission for practice stars.",
        "Use the lesson quiz as the scored check.",
        "Review missed ideas before assigning the next STEM lesson."
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
      assessmentPlan: "Use the activity to build confidence and the quiz to check independent understanding.",
      studentActivity: {
        type: "scienceQuestionSet",
        version: "2026-07-06-science-unit-1",
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
    id: "grade-5-science-unit-1",
    title: "STEM Skills, Safety, and Investigation Habits",
    strand: "STEM Skills and Connections",
    unitGoal: "Students will practise asking testable questions, planning fair tests, using tools safely, recording data, and explaining conclusions with evidence.",
    lessons: [
      lesson({
        id: "grade-5-science-unit-1-careful-observation",
        title: "Science as Careful Observation",
        learningGoal: "Students will separate observations from guesses and describe details accurately.",
        successCriteria: [
          "I can tell the difference between an observation and an inference.",
          "I can use specific details instead of vague descriptions.",
          "I can notice when a claim needs more evidence."
        ],
        vocabulary: ["observation", "inference", "evidence", "description", "detail"],
        teacherSummary: "Students practise careful observation, inference, and evidence-based description.",
        teacherOverview: "Students learn that good science begins with careful observation. They practise telling what they can actually notice apart from what they think might be happening.",
        christianFocus: "Science is one way to carefully study God's created world. Students should practise honesty, patience, and humility when they observe.",
        lessonContent: [
          "An observation is something you notice using your senses or a tool.",
          "An inference is a careful idea based on observations, but it is not the same as proof.",
          "Clear observations use exact details, measurements, and careful wording."
        ],
        activityTitle: "Careful Observation Mission",
        mission: "Practise noticing details and separating observations from guesses.",
        levels: ["Level 1: Observe First", "Level 2: Use Evidence Carefully"],
        quizTitle: "Science as Careful Observation Quiz",
        quizFocus: "Observations, inferences, and evidence-based descriptions",
        steps: [
          intro(
            "Level 1: Observe First",
            "Before You Begin",
            "Get ready: observe before you explain",
            "Scientists do not begin by guessing wildly. They observe first. An observation tells what you can notice with your senses or tools. An inference is a careful idea about what the observation may mean."
          ),
          question(
            "Level 1: Observe First",
            "Observation or Inference?",
            "A student says, 'The liquid is clear and has small bubbles on the sides of the cup.' What is this?",
            ["An observation", "An inference", "A conclusion after testing"],
            "An observation",
            "Correct. The student is describing what can be seen.",
            "Look for wording that tells what is directly noticed."
          ),
          question(
            "Level 1: Observe First",
            "Careful Wording",
            "Which sentence is the best scientific observation?",
            ["The powder looks like salt because it is white.", "The powder is white and has small grains.", "The powder is probably safe because it looks clean."],
            "The powder is white and has small grains.",
            "Yes. It describes what is noticed without jumping ahead.",
            "A good observation avoids guessing what the object is."
          ),
          question(
            "Level 1: Observe First",
            "Tools Help",
            "Why might a hand lens improve an observation?",
            ["It can show details that are hard to see with eyes alone.", "It proves the first guess was correct.", "It changes the object so the answer is easier."],
            "It can show details that are hard to see with eyes alone.",
            "Correct. Tools can help us notice more accurate details.",
            "Think about what the tool helps you see."
          ),
          question(
            "Level 1: Observe First",
            "True or False",
            "A careful observation should include only what a person hopes will happen.",
            ["True", "False"],
            "False",
            "Correct. Observations should report what is noticed, not what someone wants to be true.",
            "Honest science does not change details to match a wish."
          ),
          complete("Level 1: Observe First", "Level 1 Complete", "You practised making careful observations."),
          intro(
            "Level 2: Use Evidence Carefully",
            "Inference and Evidence",
            "Use observations to support ideas",
            "An inference can be useful, but it needs evidence. If two explanations could fit the same observation, a scientist should keep investigating instead of pretending the answer is already certain."
          ),
          question(
            "Level 2: Use Evidence Carefully",
            "Inference Check",
            "A plant's leaves are drooping. Which is the best inference?",
            ["The plant may need water, but more checking is needed.", "The plant is definitely dead.", "The plant is trying to look sad."],
            "The plant may need water, but more checking is needed.",
            "Correct. It is a reasonable idea, but it still needs evidence.",
            "Choose the answer that is careful, not overconfident."
          ),
          question(
            "Level 2: Use Evidence Carefully",
            "Evidence Needed",
            "Which observation would best help check whether a ramp is steeper than another ramp?",
            ["Measure each ramp's height and length.", "Notice which ramp looks more exciting.", "Ask which ramp a friend likes better."],
            "Measure each ramp's height and length.",
            "Yes. Measurements give better evidence than opinions.",
            "A fair comparison needs measurable details."
          ),
          question(
            "Level 2: Use Evidence Carefully",
            "Not Enough Evidence",
            "A student sees one bird near a feeder and says, 'All birds like this seed best.' What is the main problem?",
            ["One observation is not enough to make such a broad claim.", "Birds cannot be observed scientifically.", "Seed choice is always impossible to study."],
            "One observation is not enough to make such a broad claim.",
            "Correct. A big claim needs stronger evidence.",
            "Think about whether the evidence is enough for the claim."
          ),
          question(
            "Level 2: Use Evidence Carefully",
            "True or False",
            "It is honest to say 'I need more evidence' when the observations are not enough.",
            ["True", "False"],
            "True",
            "Correct. Careful scientists admit when more evidence is needed.",
            "Good science includes humility."
          ),
          complete("Level 2: Use Evidence Carefully", "Mission Complete", "You practised using evidence carefully.")
        ],
        quizQuestions: [
          quizQuestion("Observation Basics", "Observation", "multipleChoice", "Which sentence is an observation?", ["The rock is rough and grey.", "The rock must be very old.", "The rock is probably from a river."], "The rock is rough and grey.", "An observation describes what can be noticed."),
          quizQuestion("Observation Basics", "Inference", "multipleChoice", "Which sentence is an inference?", ["The cup feels warm.", "The cup is blue.", "The drink may have been heated."], "The drink may have been heated.", "An inference is an idea based on observations."),
          quizQuestion("Observation Basics", "Tools", "multipleChoice", "Why do scientists often use tools when observing?", ["Tools can make observations more accurate.", "Tools replace the need for careful thinking.", "Tools make every inference automatically true."], "Tools can make observations more accurate.", "Tools can extend our senses and improve accuracy."),
          quizQuestion("Evidence", "Careful Claims", "multipleChoice", "Which claim is the most careful?", ["The plant may need water because the soil feels dry.", "The plant is ruined because one leaf is drooping.", "The plant is happy because it is green."], "The plant may need water because the soil feels dry.", "Careful claims connect evidence to a reasonable idea."),
          quizQuestion("Evidence", "Enough Evidence", "multipleChoice", "What should a student do if two explanations fit the same observation?", ["Keep investigating and gather more evidence.", "Choose the explanation that sounds easiest.", "Ignore the observation."], "Keep investigating and gather more evidence.", "More evidence can help choose between possible explanations."),
          quizQuestion("Evidence", "True or False", "trueFalse", "An inference can be useful, but it should not be treated as proof without evidence.", ["True", "False"], "True", "Inferences need evidence."),
          quizQuestion("Evidence", "True or False", "trueFalse", "Good science allows a student to change observations so they fit the expected answer.", ["True", "False"], "False", "Observations should be reported honestly."),
          quizQuestion("Evidence", "Reasoning", "multipleChoice", "A student says, 'The metal spoon is colder than the wooden spoon.' What would make this observation stronger?", ["Measuring each spoon's temperature with a thermometer", "Choosing the spoon that looks shinier", "Asking which spoon feels nicer to hold"], "Measuring each spoon's temperature with a thermometer", "A measurement gives stronger evidence than a quick feeling.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-1-testable-questions",
        title: "Asking Testable Questions",
        learningGoal: "Students will turn broad science questions into questions that can be investigated.",
        successCriteria: [
          "I can recognize a testable question.",
          "I can improve a question so it can be investigated.",
          "I can avoid questions that only ask for opinions."
        ],
        vocabulary: ["testable question", "investigate", "compare", "measure", "opinion"],
        teacherSummary: "Students practise choosing and improving questions that can be investigated with evidence.",
        teacherOverview: "Students learn that a testable question can be answered by collecting observations or measurements, not just by giving an opinion.",
        christianFocus: "Wonder is a good starting point, but students should learn to ask honest questions that can be explored carefully.",
        lessonContent: [
          "A testable question can be investigated using observations, measurements, or a fair comparison.",
          "Opinion questions can be interesting, but they are not the same as testable science questions.",
          "Strong questions are clear enough that another person could understand what to test."
        ],
        activityTitle: "Testable Questions Mission",
        mission: "Practise turning wonder questions into questions you can investigate.",
        levels: ["Level 1: Spot Testable Questions", "Level 2: Improve the Question"],
        quizTitle: "Asking Testable Questions Quiz",
        quizFocus: "Testable questions, opinion questions, and improved investigation questions",
        steps: [
          intro(
            "Level 1: Spot Testable Questions",
            "Before You Begin",
            "Get ready: questions that can be tested",
            "A science question is stronger when it can be investigated with observations or measurements. 'Which paper towel absorbs more water?' can be tested. 'Which paper towel is best?' is too vague unless you explain what best means."
          ),
          question(
            "Level 1: Spot Testable Questions",
            "Choose the Testable Question",
            "Which question could be investigated with measurements?",
            ["Which cup keeps water warm the longest?", "Which cup is the prettiest?", "Which cup would my friend choose?"],
            "Which cup keeps water warm the longest?",
            "Correct. You could measure temperature over time.",
            "Look for something that can be measured."
          ),
          question(
            "Level 1: Spot Testable Questions",
            "Opinion or Test?",
            "Which question is mostly asking for an opinion?",
            ["Which magnet is strongest?", "Which magnet looks coolest?", "Which magnet can pick up the most paper clips?"],
            "Which magnet looks coolest?",
            "Yes. 'Coolest' depends on personal opinion unless it is defined.",
            "Opinion words often need clearer meanings."
          ),
          question(
            "Level 1: Spot Testable Questions",
            "Clear Comparison",
            "Which question gives the clearest comparison?",
            ["Does sunlight affect plant growth over two weeks?", "Are plants nice?", "Do plants grow in a special way?"],
            "Does sunlight affect plant growth over two weeks?",
            "Correct. It names what is being studied and gives a time frame.",
            "A clear question often names what will be changed or measured."
          ),
          question(
            "Level 1: Spot Testable Questions",
            "True or False",
            "A testable question should be clear enough that someone could plan what evidence to collect.",
            ["True", "False"],
            "True",
            "Correct. A testable question guides the investigation.",
            "Think about whether the question points to evidence."
          ),
          complete("Level 1: Spot Testable Questions", "Level 1 Complete", "You can spot questions that are easier to investigate."),
          intro(
            "Level 2: Improve the Question",
            "Make Questions Stronger",
            "Narrow the question",
            "Many weak questions can be improved. Add what will be compared, what will be measured, and how long the test will last. This makes the question easier to investigate fairly."
          ),
          question(
            "Level 2: Improve the Question",
            "Make It Testable",
            "How could you improve 'Which soil is best?'",
            ["Which soil helps bean plants grow tallest in three weeks?", "Which soil has the nicest colour?", "Which soil would everyone like most?"],
            "Which soil helps bean plants grow tallest in three weeks?",
            "Correct. It says what will be measured and when.",
            "A stronger question explains what 'best' means."
          ),
          question(
            "Level 2: Improve the Question",
            "Too Broad",
            "Why is 'How does weather affect people?' too broad for a simple class investigation?",
            ["It does not say which weather effect or what will be measured.", "Weather cannot ever be studied.", "People cannot describe weather."],
            "It does not say which weather effect or what will be measured.",
            "Yes. It needs to be narrowed.",
            "Broad questions usually need more focus."
          ),
          question(
            "Level 2: Improve the Question",
            "Better Question",
            "Which version is best for a fair investigation?",
            ["Which ball bounces highest when dropped from one metre?", "Which ball is the most fun?", "Why are balls round?"],
            "Which ball bounces highest when dropped from one metre?",
            "Correct. It can be tested and measured.",
            "Find the version with a clear action and measurement."
          ),
          question(
            "Level 2: Improve the Question",
            "True or False",
            "Adding a measurement can often make a science question easier to investigate.",
            ["True", "False"],
            "True",
            "Correct. Measurements help turn ideas into evidence.",
            "Think of height, time, distance, mass, or temperature."
          ),
          complete("Level 2: Improve the Question", "Mission Complete", "You practised improving science questions.")
        ],
        quizQuestions: [
          quizQuestion("Testable Questions", "Identify", "multipleChoice", "Which question is most testable?", ["Which paper airplane flies farthest?", "Which paper airplane is nicest?", "Which paper airplane looks fast?"], "Which paper airplane flies farthest?", "Distance can be measured."),
          quizQuestion("Testable Questions", "Opinion", "multipleChoice", "Which question mostly asks for an opinion?", ["Which design is most beautiful?", "Which design holds the most weight?", "Which design lasts longest in water?"], "Which design is most beautiful?", "Beauty is an opinion unless it is clearly defined."),
          quizQuestion("Testable Questions", "Improve", "multipleChoice", "What makes 'Which ice cube melts fastest in different places?' testable?", ["The melting time can be measured.", "The answer depends only on what someone likes.", "The question avoids comparing anything."], "The melting time can be measured.", "A measurable outcome makes it testable."),
          quizQuestion("Better Wording", "Narrow", "multipleChoice", "Which version best improves 'Do seeds grow well?'", ["Which seed sprouts first in damp paper towel?", "Are seeds interesting?", "Do seeds know when to grow?"], "Which seed sprouts first in damp paper towel?", "It names what will be measured."),
          quizQuestion("Better Wording", "Fair Plan", "multipleChoice", "A strong testable question usually helps a student decide...", ["what evidence to collect", "which answer sounds most popular", "how to avoid measuring"], "what evidence to collect", "The question should guide the investigation."),
          quizQuestion("Better Wording", "True or False", "trueFalse", "A question can be interesting but still not be testable in a science investigation.", ["True", "False"], "True", "Some questions are better for discussion or research."),
          quizQuestion("Better Wording", "True or False", "trueFalse", "The question 'Which towel absorbs the most water?' is more testable than 'Which towel is best?'", ["True", "False"], "True", "It defines what is being compared."),
          quizQuestion("Better Wording", "Measurement", "multipleChoice", "Which detail would make a ramp question easier to test?", ["Measure how far the toy car travels.", "Choose the ramp colour first.", "Ask which ramp looks more professional."], "Measure how far the toy car travels.", "A distance measurement gives evidence.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-1-fair-tests-and-variables",
        title: "Fair Tests and Variables",
        learningGoal: "Students will identify changed, measured, and controlled variables in a fair test.",
        successCriteria: [
          "I can identify what is changed in a fair test.",
          "I can identify what is measured.",
          "I can explain why other conditions should stay the same."
        ],
        vocabulary: ["fair test", "variable", "controlled variable", "measure", "compare"],
        teacherSummary: "Students practise planning fair tests by changing one thing, measuring one result, and keeping other conditions the same.",
        teacherOverview: "Students learn that a fair test changes one main thing at a time so the evidence is easier to understand.",
        christianFocus: "Fair testing encourages honesty and carefulness. Students should not design a test to force the answer they already want.",
        lessonContent: [
          "The changed variable is the one thing you choose to change.",
          "The measured variable is the result you observe or measure.",
          "Controlled variables are conditions kept the same so the test stays fair."
        ],
        activityTitle: "Fair Test Mission",
        mission: "Practise spotting variables and keeping investigations fair.",
        levels: ["Level 1: Find the Variables", "Level 2: Keep It Fair"],
        quizTitle: "Fair Tests and Variables Quiz",
        quizFocus: "Changed variables, measured variables, controlled variables, and fair comparisons",
        steps: [
          intro(
            "Level 1: Find the Variables",
            "Before You Begin",
            "Get ready: change one thing",
            "In a fair test, you change one main thing and measure what happens. If too many things change at once, it becomes hard to know what caused the result."
          ),
          question(
            "Level 1: Find the Variables",
            "Changed Variable",
            "A student tests whether ramp height affects how far a toy car travels. What is the changed variable?",
            ["The ramp height", "The colour of the car", "The distance the car travels"],
            "The ramp height",
            "Correct. Ramp height is the thing being changed on purpose.",
            "Look for what the student changes."
          ),
          question(
            "Level 1: Find the Variables",
            "Measured Result",
            "In the ramp test, what should the student measure?",
            ["How far the car travels", "Which ramp looks best", "How many friends watch"],
            "How far the car travels",
            "Yes. The distance is the result of the test.",
            "Look for the outcome."
          ),
          question(
            "Level 1: Find the Variables",
            "Controlled Variable",
            "Which condition should stay the same in a fair ramp test?",
            ["Use the same toy car each time.", "Change the car and ramp each time.", "Let each student choose any starting place."],
            "Use the same toy car each time.",
            "Correct. Keeping the same car makes the comparison fairer.",
            "A controlled variable stays the same."
          ),
          question(
            "Level 1: Find the Variables",
            "True or False",
            "Changing one main thing at a time makes it easier to understand the results.",
            ["True", "False"],
            "True",
            "Correct. That is the point of a fair test.",
            "Too many changes make the evidence confusing."
          ),
          complete("Level 1: Find the Variables", "Level 1 Complete", "You can identify variables in a test."),
          intro(
            "Level 2: Keep It Fair",
            "Watch for Hidden Changes",
            "Small changes can matter",
            "Sometimes a test seems fair, but hidden changes make it weaker. A different amount of water, a different measuring tool, or a different starting point can change the result."
          ),
          question(
            "Level 2: Keep It Fair",
            "Hidden Problem",
            "Two plants are tested with different amounts of light. One also gets more water. Why is this a problem?",
            ["The test changed light and water, so the result is harder to explain.", "Plants cannot be compared in science.", "Water is never a variable."],
            "The test changed light and water, so the result is harder to explain.",
            "Correct. More than one important thing changed.",
            "Ask whether only one main thing changed."
          ),
          question(
            "Level 2: Keep It Fair",
            "Fairer Plan",
            "Which plan is fairest for testing which paper towel absorbs more water?",
            ["Use the same amount of water and the same towel size.", "Use more water on the thicker towel.", "Let each towel soak for a different length of time."],
            "Use the same amount of water and the same towel size.",
            "Yes. The towels can be compared more fairly.",
            "Keep conditions the same except the towel type."
          ),
          question(
            "Level 2: Keep It Fair",
            "Repeat Trials",
            "Why might a student repeat the same test several times?",
            ["To check whether the result is consistent", "To make the test less fair", "To avoid recording data"],
            "To check whether the result is consistent",
            "Correct. Repeating trials can make evidence stronger.",
            "Think about whether one try is always enough."
          ),
          question(
            "Level 2: Keep It Fair",
            "True or False",
            "If a test is unfair, the data may still be written down, but the conclusion should be careful.",
            ["True", "False"],
            "True",
            "Correct. Weak data needs careful explanation.",
            "Being honest about limits matters."
          ),
          complete("Level 2: Keep It Fair", "Mission Complete", "You practised planning fair tests.")
        ],
        quizQuestions: [
          quizQuestion("Variables", "Changed Variable", "multipleChoice", "In a test about whether ball material affects bounce height, what is the changed variable?", ["Ball material", "Bounce height", "The ruler used to measure"], "Ball material", "The changed variable is what is changed on purpose."),
          quizQuestion("Variables", "Measured Variable", "multipleChoice", "In that same test, what is the measured variable?", ["Bounce height", "Ball material", "The table colour"], "Bounce height", "The measured variable is the result."),
          quizQuestion("Variables", "Controlled Variable", "multipleChoice", "Which condition should stay the same in a fair bounce test?", ["The drop height", "The ball material", "The measured bounce height"], "The drop height", "The drop height should be controlled."),
          quizQuestion("Fair Tests", "One Change", "multipleChoice", "Why should a fair test usually change only one main thing?", ["So the result is easier to explain", "So the test becomes impossible to repeat", "So measurements are not needed"], "So the result is easier to explain", "One main change helps connect cause and result."),
          quizQuestion("Fair Tests", "Problem Spotting", "multipleChoice", "A student tests plant growth, changing both soil type and water amount. What is the concern?", ["It will be hard to know which change affected growth.", "Soil and water cannot be studied together in any way.", "The plants will all grow exactly the same."], "It will be hard to know which change affected growth.", "Two changed variables make the test confusing."),
          quizQuestion("Fair Tests", "True or False", "trueFalse", "Controlled variables are the things kept the same in a fair test.", ["True", "False"], "True", "Controlled variables help keep the test fair."),
          quizQuestion("Fair Tests", "True or False", "trueFalse", "A fair test should avoid recording measurements because they make results less clear.", ["True", "False"], "False", "Measurements usually make results clearer."),
          quizQuestion("Fair Tests", "Repeat Trials", "multipleChoice", "Repeating a test can help students...", ["notice whether results are consistent", "remove the need for a question", "change all variables at once"], "notice whether results are consistent", "Repeated trials can strengthen evidence.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-1-measuring-and-recording-data",
        title: "Measuring and Recording Data",
        learningGoal: "Students will choose suitable tools and record data clearly in tables or charts.",
        successCriteria: [
          "I can choose a tool that matches what I need to measure.",
          "I can use units correctly.",
          "I can organize data so another person can understand it."
        ],
        vocabulary: ["data", "measurement", "unit", "table", "graph", "estimate"],
        teacherSummary: "Students practise choosing tools, units, tables, and charts for clear science data.",
        teacherOverview: "Students learn that data is more useful when it is measured carefully and recorded in an organized way.",
        christianFocus: "Careful records show respect for truth. Students should record what happened, not what they hoped would happen.",
        lessonContent: [
          "Data is information collected during an investigation.",
          "Measurements need suitable tools and correct units.",
          "Tables and graphs help people notice patterns in data."
        ],
        activityTitle: "Data Recording Mission",
        mission: "Practise choosing tools, units, and clear ways to record science data.",
        levels: ["Level 1: Choose Tools and Units", "Level 2: Organize the Data"],
        quizTitle: "Measuring and Recording Data Quiz",
        quizFocus: "Measurement tools, units, tables, graphs, and clear records",
        steps: [
          intro(
            "Level 1: Choose Tools and Units",
            "Before You Begin",
            "Get ready: measure carefully",
            "A measurement is only useful if it matches the question. Length might be measured in centimetres. Temperature might be measured in degrees Celsius. Time might be measured in seconds or minutes."
          ),
          question(
            "Level 1: Choose Tools and Units",
            "Choose the Tool",
            "Which tool would best measure how far a toy car travels?",
            ["Metre stick or measuring tape", "Thermometer", "Balance scale"],
            "Metre stick or measuring tape",
            "Correct. Distance needs a length tool.",
            "Think about what is being measured."
          ),
          question(
            "Level 1: Choose Tools and Units",
            "Choose the Unit",
            "Which unit would best record the temperature of water?",
            ["Degrees Celsius", "Centimetres", "Grams"],
            "Degrees Celsius",
            "Yes. Temperature is measured in degrees Celsius.",
            "Match the unit to the kind of measurement."
          ),
          question(
            "Level 1: Choose Tools and Units",
            "Estimate First",
            "Why can estimating before measuring be useful?",
            ["It helps you notice if the measurement seems unreasonable.", "It replaces the need to measure.", "It guarantees the exact answer."],
            "It helps you notice if the measurement seems unreasonable.",
            "Correct. Estimating can help catch mistakes.",
            "An estimate is not exact, but it can be helpful."
          ),
          question(
            "Level 1: Choose Tools and Units",
            "True or False",
            "A measurement without a unit can be confusing.",
            ["True", "False"],
            "True",
            "Correct. '12' could mean many different things without a unit.",
            "Units tell what kind of amount was measured."
          ),
          complete("Level 1: Choose Tools and Units", "Level 1 Complete", "You practised matching tools and units."),
          intro(
            "Level 2: Organize the Data",
            "Record So Others Understand",
            "Use tables and graphs clearly",
            "A good data table has labels. It shows what was tested and what was measured. A graph can make patterns easier to notice, but the graph still needs a clear title and labels."
          ),
          question(
            "Level 2: Organize the Data",
            "Table Labels",
            "Why should a data table have headings?",
            ["Headings explain what each column means.", "Headings make the numbers less important.", "Headings replace the need for units."],
            "Headings explain what each column means.",
            "Correct. Headings make data easier to understand.",
            "A table should be clear to someone else."
          ),
          question(
            "Level 2: Organize the Data",
            "Graph Choice",
            "Which graph would work well for comparing the bounce heights of three balls?",
            ["Bar graph", "Map of Canada", "Calendar"],
            "Bar graph",
            "Yes. A bar graph is useful for comparing categories.",
            "Think about comparing separate items."
          ),
          question(
            "Level 2: Organize the Data",
            "Missing Information",
            "A table says 'Trial 1: 24, Trial 2: 26.' What is missing?",
            ["The unit or what was measured", "The student's favourite colour", "The answer key"],
            "The unit or what was measured",
            "Correct. The numbers need labels and units.",
            "Numbers alone are often not enough."
          ),
          question(
            "Level 2: Organize the Data",
            "True or False",
            "Changing data after a test to make it look better is a poor scientific habit.",
            ["True", "False"],
            "True",
            "Correct. Data should be honest.",
            "Science records should tell what happened."
          ),
          complete("Level 2: Organize the Data", "Mission Complete", "You practised recording data clearly.")
        ],
        quizQuestions: [
          quizQuestion("Measurement", "Tools", "multipleChoice", "Which tool would best measure mass?", ["Balance scale", "Thermometer", "Stopwatch"], "Balance scale", "A balance scale measures mass."),
          quizQuestion("Measurement", "Units", "multipleChoice", "Which unit matches length?", ["Centimetres", "Degrees Celsius", "Litres"], "Centimetres", "Centimetres measure length."),
          quizQuestion("Measurement", "Temperature", "multipleChoice", "Which tool would best measure water temperature?", ["Thermometer", "Measuring tape", "Graduated cylinder"], "Thermometer", "A thermometer measures temperature."),
          quizQuestion("Recording", "Tables", "multipleChoice", "Why should a data table include units?", ["So the measurements are clear", "So the question disappears", "So the data cannot be compared"], "So the measurements are clear", "Units explain what the numbers mean."),
          quizQuestion("Recording", "Graphs", "multipleChoice", "Which display is useful for comparing categories?", ["Bar graph", "Paragraph only", "Random list"], "Bar graph", "Bar graphs compare categories clearly."),
          quizQuestion("Recording", "True or False", "trueFalse", "Data should be recorded honestly, even when it is different from the expected result.", ["True", "False"], "True", "Unexpected results should still be recorded."),
          quizQuestion("Recording", "True or False", "trueFalse", "The number 15 is always clear enough without a label or unit.", ["True", "False"], "False", "A number needs context."),
          quizQuestion("Recording", "Estimate", "multipleChoice", "Why might a student estimate before measuring?", ["To notice if a measurement seems far off", "To avoid collecting data", "To make the answer whatever they want"], "To notice if a measurement seems far off", "Estimates can help catch mistakes.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-1-evidence-and-conclusions",
        title: "Evidence and Conclusions",
        learningGoal: "Students will use evidence to support conclusions and describe limits in an investigation.",
        successCriteria: [
          "I can connect a conclusion to data.",
          "I can recognize when evidence is weak.",
          "I can explain a possible source of error."
        ],
        vocabulary: ["conclusion", "evidence", "pattern", "source of error", "claim"],
        teacherSummary: "Students practise making conclusions that fit the evidence and noticing limits in data.",
        teacherOverview: "Students learn that conclusions should be based on evidence, not on guesses, preferences, or pressure to get a certain answer.",
        christianFocus: "Truthfulness matters. Students should be willing to follow evidence even when the result is surprising.",
        lessonContent: [
          "A conclusion explains what the evidence shows.",
          "A strong conclusion names the data or pattern that supports it.",
          "A careful scientist can also name possible errors or limits."
        ],
        activityTitle: "Evidence and Conclusions Mission",
        mission: "Practise choosing conclusions that match the evidence.",
        levels: ["Level 1: Match Claims to Evidence", "Level 2: Notice Limits"],
        quizTitle: "Evidence and Conclusions Quiz",
        quizFocus: "Claims, evidence, conclusions, patterns, and sources of error",
        steps: [
          intro(
            "Level 1: Match Claims to Evidence",
            "Before You Begin",
            "Get ready: conclusions need evidence",
            "A conclusion should be connected to data. If a student says, 'The tall ramp made the car go farther,' the data should show that the car travelled farther from the tall ramp."
          ),
          question(
            "Level 1: Match Claims to Evidence",
            "Best Conclusion",
            "A car rolled 45 cm from a low ramp and 92 cm from a high ramp. Which conclusion fits best?",
            ["The higher ramp made the car travel farther in this test.", "The low ramp is always better.", "The car was impossible to measure."],
            "The higher ramp made the car travel farther in this test.",
            "Correct. That conclusion matches the data.",
            "Choose the answer that stays close to the evidence."
          ),
          question(
            "Level 1: Match Claims to Evidence",
            "Evidence Support",
            "Which statement gives evidence?",
            ["The plant grew 6 cm more in sunlight than in the cupboard.", "The plant probably liked the sunny spot.", "The sunny plant looked happier to me."],
            "The plant grew 6 cm more in sunlight than in the cupboard.",
            "Yes. It gives a measurement.",
            "Evidence often uses observations or measurements."
          ),
          question(
            "Level 1: Match Claims to Evidence",
            "Too Strong",
            "One test shows that one paper towel held more water. Which conclusion is too strong?",
            ["This towel held more water in our test.", "This brand is always the best for every spill.", "More trials would make the evidence stronger."],
            "This brand is always the best for every spill.",
            "Correct. That claim goes beyond the evidence.",
            "Watch for words like always or every."
          ),
          question(
            "Level 1: Match Claims to Evidence",
            "True or False",
            "A conclusion should fit the evidence collected during the investigation.",
            ["True", "False"],
            "True",
            "Correct. Evidence and conclusion should match.",
            "Conclusions should not float away from the data."
          ),
          complete("Level 1: Match Claims to Evidence", "Level 1 Complete", "You practised matching conclusions to evidence."),
          intro(
            "Level 2: Notice Limits",
            "Careful Conclusions",
            "Name limits honestly",
            "Sometimes evidence is helpful but not complete. A careful conclusion can say what the data suggests and also name a limit, such as a small number of trials or a possible measuring mistake."
          ),
          question(
            "Level 2: Notice Limits",
            "Source of Error",
            "Which could be a source of error in a plant-height test?",
            ["Measuring from a different starting point each time", "Using a ruler carefully", "Writing down the unit"],
            "Measuring from a different starting point each time",
            "Correct. Inconsistent measuring can affect the data.",
            "A source of error can make data less accurate."
          ),
          question(
            "Level 2: Notice Limits",
            "Careful Language",
            "Which conclusion uses careful language?",
            ["Our data suggests the thicker string held more weight.", "The thicker string will never break.", "The thinner string is useless for everything."],
            "Our data suggests the thicker string held more weight.",
            "Yes. It uses the evidence without exaggerating.",
            "Careful conclusions avoid overclaiming."
          ),
          question(
            "Level 2: Notice Limits",
            "Weak Evidence",
            "Why is one trial often weaker than several trials?",
            ["One trial could be affected by a mistake or unusual result.", "One trial always proves the opposite.", "Several trials make data disappear."],
            "One trial could be affected by a mistake or unusual result.",
            "Correct. More trials can make a pattern clearer.",
            "Think about mistakes and unusual results."
          ),
          question(
            "Level 2: Notice Limits",
            "True or False",
            "A student should hide possible errors so the conclusion sounds stronger.",
            ["True", "False"],
            "False",
            "Correct. Honest science names possible errors.",
            "Strong work can admit limits."
          ),
          complete("Level 2: Notice Limits", "Mission Complete", "You practised writing careful conclusions.")
        ],
        quizQuestions: [
          quizQuestion("Evidence", "Conclusion", "multipleChoice", "Which conclusion best fits data showing Trial A took 12 s and Trial B took 20 s?", ["Trial A was faster in this test.", "Trial B was always worse in every way.", "The test had no result."], "Trial A was faster in this test.", "The conclusion should match the measured time."),
          quizQuestion("Evidence", "Support", "multipleChoice", "Which sentence uses evidence?", ["The bridge held 800 g before bending.", "The bridge seemed brave.", "The bridge was definitely perfect."], "The bridge held 800 g before bending.", "A measurement can support a claim."),
          quizQuestion("Evidence", "Overclaim", "multipleChoice", "Which phrase often makes a conclusion too strong?", ["always", "in our test", "the data suggests"], "always", "Always often goes beyond limited evidence."),
          quizQuestion("Limits", "Error", "multipleChoice", "Which is a possible source of error?", ["Starting the stopwatch late", "Labelling the graph clearly", "Repeating the same steps carefully"], "Starting the stopwatch late", "Timing mistakes can affect data."),
          quizQuestion("Limits", "Trials", "multipleChoice", "Why can repeated trials improve an investigation?", ["They can show whether results are consistent.", "They remove the need to record data.", "They make every answer a guess."], "They can show whether results are consistent.", "Repeated trials can strengthen evidence."),
          quizQuestion("Limits", "True or False", "trueFalse", "A conclusion should be based on data, not only on what the student wanted to happen.", ["True", "False"], "True", "A conclusion should follow the evidence."),
          quizQuestion("Limits", "True or False", "trueFalse", "Naming a possible source of error can make a science explanation more honest.", ["True", "False"], "True", "Honest limits help others understand the evidence."),
          quizQuestion("Limits", "Careful Claim", "multipleChoice", "Which wording is best for limited data?", ["The data suggests...", "This proves forever that...", "No one should test this again because..."], "The data suggests...", "This wording fits evidence that may still be limited.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-1-stem-design-process",
        title: "The STEM Design Process",
        learningGoal: "Students will use a design process to solve problems, test ideas, and improve solutions.",
        successCriteria: [
          "I can describe steps in the STEM design process.",
          "I can explain why testing and improving matter.",
          "I can connect design choices to a problem and criteria."
        ],
        vocabulary: ["criteria", "constraint", "prototype", "test", "improve", "design"],
        teacherSummary: "Students practise the STEM design process: identify, imagine, plan, create, test, improve, and communicate.",
        teacherOverview: "Students learn that STEM design is not simply building. A good design responds to a problem, criteria, constraints, test results, and improvements.",
        christianFocus: "Design work can serve others. Students should value careful work, creativity, honesty, and stewardship of materials.",
        lessonContent: [
          "Criteria describe what a successful design should do.",
          "Constraints are limits such as time, materials, size, or cost.",
          "A prototype is a first model that can be tested and improved."
        ],
        activityTitle: "STEM Design Process Mission",
        mission: "Practise planning, testing, and improving a design solution.",
        levels: ["Level 1: Plan the Design", "Level 2: Test and Improve"],
        quizTitle: "The STEM Design Process Quiz",
        quizFocus: "Criteria, constraints, prototypes, testing, improvement, and communication",
        steps: [
          intro(
            "Level 1: Plan the Design",
            "Before You Begin",
            "Get ready: design solves a problem",
            "A STEM design challenge begins with a problem. The design also has criteria, which say what success looks like, and constraints, which are limits you must work within."
          ),
          question(
            "Level 1: Plan the Design",
            "Design Problem",
            "Which statement is a clear design problem?",
            ["Build a paper bridge that can hold 500 g using only two sheets of paper.", "Make something interesting.", "Use supplies until the time is gone."],
            "Build a paper bridge that can hold 500 g using only two sheets of paper.",
            "Correct. It gives a problem, goal, and limit.",
            "A clear design problem includes what the design should do."
          ),
          question(
            "Level 1: Plan the Design",
            "Criteria",
            "In a bridge challenge, which is a criterion?",
            ["The bridge must hold at least 500 g.", "Only two sheets of paper may be used.", "The class period ends in 30 minutes."],
            "The bridge must hold at least 500 g.",
            "Yes. That tells what success should look like.",
            "Criteria describe success."
          ),
          question(
            "Level 1: Plan the Design",
            "Constraint",
            "Which is a constraint?",
            ["Only tape and paper may be used.", "The bridge should hold weight.", "The design should be improved after testing."],
            "Only tape and paper may be used.",
            "Correct. A constraint is a limit.",
            "Look for a limit on materials, time, size, or cost."
          ),
          question(
            "Level 1: Plan the Design",
            "True or False",
            "A design plan can help a team avoid wasting materials.",
            ["True", "False"],
            "True",
            "Correct. Planning supports careful material use.",
            "Planning before building is part of stewardship."
          ),
          complete("Level 1: Plan the Design", "Level 1 Complete", "You practised planning a design."),
          intro(
            "Level 2: Test and Improve",
            "Improve with Evidence",
            "Testing is not failure",
            "A prototype is a first model. Testing a prototype helps you learn what works and what needs to change. Improving a design is a normal and important part of STEM."
          ),
          question(
            "Level 2: Test and Improve",
            "Prototype",
            "What is a prototype?",
            ["A model built to test and improve an idea", "A final answer that cannot be changed", "A drawing that replaces all testing"],
            "A model built to test and improve an idea",
            "Correct. Prototypes are made for testing and learning.",
            "Think of a first model."
          ),
          question(
            "Level 2: Test and Improve",
            "Use the Test",
            "A paper tower falls when weight is added. What should the team do next?",
            ["Use the test results to improve the base or supports.", "Pretend the tower worked.", "Throw away all data and start guessing."],
            "Use the test results to improve the base or supports.",
            "Yes. Testing helps guide improvements.",
            "A failed test can still teach something."
          ),
          question(
            "Level 2: Test and Improve",
            "Communicate",
            "Why should a team explain both what worked and what did not work?",
            ["It helps others understand the design choices and evidence.", "It makes the design look weaker automatically.", "It replaces the need to test."],
            "It helps others understand the design choices and evidence.",
            "Correct. Communication should be honest and useful.",
            "STEM includes explaining."
          ),
          question(
            "Level 2: Test and Improve",
            "True or False",
            "Improving a design after testing means the first design was useless.",
            ["True", "False"],
            "False",
            "Correct. The first design can teach what to improve.",
            "Testing and improving are normal."
          ),
          complete("Level 2: Test and Improve", "Mission Complete", "You practised the STEM design process.")
        ],
        quizQuestions: [
          quizQuestion("Design Planning", "Problem", "multipleChoice", "Which design problem is clearest?", ["Create a container that keeps an ice cube from melting quickly for 20 minutes.", "Make a nice container.", "Use supplies to make something."], "Create a container that keeps an ice cube from melting quickly for 20 minutes.", "It gives a goal and time frame."),
          quizQuestion("Design Planning", "Criteria", "multipleChoice", "Criteria tell a team...", ["what a successful design should do", "which data to ignore", "why testing is not allowed"], "what a successful design should do", "Criteria describe success."),
          quizQuestion("Design Planning", "Constraints", "multipleChoice", "Which is a constraint?", ["The tower must use only 20 straws.", "The tower should stand by itself.", "The tower should be stable."], "The tower must use only 20 straws.", "A material limit is a constraint."),
          quizQuestion("Testing", "Prototype", "multipleChoice", "A prototype is...", ["a test model of a design idea", "a final design that cannot change", "a list of opinions"], "a test model of a design idea", "A prototype is made to test and improve."),
          quizQuestion("Testing", "Improve", "multipleChoice", "What should guide design improvements?", ["Test results and observations", "Only the first guess", "The choice that uses the most supplies"], "Test results and observations", "Evidence should guide improvements."),
          quizQuestion("Testing", "True or False", "trueFalse", "A design that needs improvement can still be part of good STEM work.", ["True", "False"], "True", "Improvement is part of design."),
          quizQuestion("Testing", "True or False", "trueFalse", "Communication in STEM should include evidence, not only a finished product.", ["True", "False"], "True", "Explaining evidence is part of STEM."),
          quizQuestion("Testing", "Stewardship", "multipleChoice", "Which habit shows responsible design work?", ["Plan before using materials.", "Use extra materials because they are nearby.", "Hide test results that do not look good."], "Plan before using materials.", "Planning helps use materials wisely.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-1-safety-and-research",
        title: "Safety and Research Habits",
        learningGoal: "Students will identify safe investigation habits and reliable research habits.",
        successCriteria: [
          "I can choose safe actions during an investigation.",
          "I can recognize why some sources are more reliable than others.",
          "I can explain why teamwork and honesty matter in science."
        ],
        vocabulary: ["safety", "reliable source", "claim", "credit", "teamwork", "digital research"],
        teacherSummary: "Students practise safety, reliable research, source checking, credit, and respectful teamwork.",
        teacherOverview: "Students learn that good science includes safe procedures, trustworthy information, respectful collaboration, and honest credit for ideas.",
        christianFocus: "Students should care for people, tell the truth, and give credit when using another person's work.",
        lessonContent: [
          "Safety rules protect people and materials.",
          "Reliable sources should be checked for accuracy, expertise, and purpose.",
          "Research notes should use your own words and give credit for information."
        ],
        activityTitle: "Safety and Research Mission",
        mission: "Practise safe investigation choices and wise research habits.",
        levels: ["Level 1: Safety First", "Level 2: Research Wisely"],
        quizTitle: "Safety and Research Habits Quiz",
        quizFocus: "Safety, reliable sources, digital research, teamwork, and credit",
        steps: [
          intro(
            "Level 1: Safety First",
            "Before You Begin",
            "Get ready: safety protects people",
            "Science activities should be safe and respectful. Read instructions before starting, use tools the right way, and ask an adult if something is unclear or unsafe."
          ),
          question(
            "Level 1: Safety First",
            "Unknown Substance",
            "What should a student do before touching or smelling an unknown substance?",
            ["Ask the teacher or trusted adult for instructions.", "Smell it closely to identify it.", "Taste a tiny bit if it looks familiar."],
            "Ask the teacher or trusted adult for instructions.",
            "Correct. Unknown substances need adult direction.",
            "Safety comes before curiosity."
          ),
          question(
            "Level 1: Safety First",
            "Tool Safety",
            "Which action shows safe tool use?",
            ["Carry scissors closed and pointed down.", "Wave scissors to get attention.", "Use a tool without reading directions."],
            "Carry scissors closed and pointed down.",
            "Yes. Tools should be handled carefully.",
            "Choose the action that protects people."
          ),
          question(
            "Level 1: Safety First",
            "Spill Response",
            "What should a student do after a spill during an investigation?",
            ["Tell the teacher and follow cleanup instructions.", "Hide it so no one worries.", "Keep working and step around it."],
            "Tell the teacher and follow cleanup instructions.",
            "Correct. Spills should be handled safely.",
            "A spill can affect safety and data."
          ),
          question(
            "Level 1: Safety First",
            "True or False",
            "Safety rules are only needed when an investigation seems dangerous.",
            ["True", "False"],
            "False",
            "Correct. Safety habits matter in every investigation.",
            "Even simple activities need care."
          ),
          complete("Level 1: Safety First", "Level 1 Complete", "You practised safe investigation choices."),
          intro(
            "Level 2: Research Wisely",
            "Check the Source",
            "Not every source is equally reliable",
            "Research is stronger when sources are reliable. Check who made the source, why it was made, whether it is current enough, and whether other trustworthy sources agree."
          ),
          question(
            "Level 2: Research Wisely",
            "Reliable Source",
            "Which source is likely strongest for learning about weather data?",
            ["A weather agency page with recent measurements", "A random comment that says 'storms are cool'", "A drawing of a cloud with no explanation"],
            "A weather agency page with recent measurements",
            "Correct. It gives recent data from a relevant source.",
            "Look for expertise and evidence."
          ),
          question(
            "Level 2: Research Wisely",
            "Credit",
            "Why should a student give credit when using information from a source?",
            ["It shows honesty and helps others find the source.", "It makes the project longer for no reason.", "It means the student did not learn anything."],
            "It shows honesty and helps others find the source.",
            "Yes. Credit is part of honest research.",
            "Using someone else's work requires honesty."
          ),
          question(
            "Level 2: Research Wisely",
            "Teamwork",
            "Which teamwork habit is best during a STEM task?",
            ["Listen to evidence and share jobs fairly.", "Let one student do everything.", "Ignore questions from teammates."],
            "Listen to evidence and share jobs fairly.",
            "Correct. STEM teamwork should be respectful and useful.",
            "Good teamwork helps the investigation."
          ),
          question(
            "Level 2: Research Wisely",
            "True or False",
            "A website can look nice and still need to be checked for reliability.",
            ["True", "False"],
            "True",
            "Correct. Appearance is not the same as reliability.",
            "Reliable sources need more than a nice design."
          ),
          complete("Level 2: Research Wisely", "Mission Complete", "You practised safe and wise research habits.")
        ],
        quizQuestions: [
          quizQuestion("Safety", "Unknowns", "multipleChoice", "What should a student do with an unknown substance?", ["Ask for adult instructions before touching or smelling it.", "Taste it only if it looks safe.", "Mix it with another substance to see what happens."], "Ask for adult instructions before touching or smelling it.", "Unknown substances require safety care."),
          quizQuestion("Safety", "Tools", "multipleChoice", "Which action is safest?", ["Use tools only as instructed.", "Use tools quickly without listening.", "Share sharp tools by tossing them carefully."], "Use tools only as instructed.", "Tools should be used as instructed."),
          quizQuestion("Safety", "Spill", "multipleChoice", "What is the best response to a spill?", ["Tell the teacher and follow directions.", "Cover it with paper and leave it.", "Ignore it if no one saw it."], "Tell the teacher and follow directions.", "Spills can affect safety and the investigation."),
          quizQuestion("Research", "Reliable Sources", "multipleChoice", "Which question helps judge reliability?", ["Who made this source and what evidence does it use?", "Does this source have the brightest colours?", "Is this source the shortest one?"], "Who made this source and what evidence does it use?", "Source creator and evidence matter."),
          quizQuestion("Research", "Credit", "multipleChoice", "Giving credit to sources is important because it...", ["shows honesty and helps others check the information", "makes every source correct", "means the student cannot explain the idea"], "shows honesty and helps others check the information", "Credit is an honest research habit."),
          quizQuestion("Research", "True or False", "trueFalse", "A source can be unreliable even if it has a professional-looking design.", ["True", "False"], "True", "Appearance does not prove accuracy."),
          quizQuestion("Research", "True or False", "trueFalse", "Safe science includes asking for help when instructions are unclear.", ["True", "False"], "True", "Asking for help can prevent unsafe choices."),
          quizQuestion("Research", "Teamwork", "multipleChoice", "Which teamwork habit best supports STEM work?", ["Respectfully discuss evidence before deciding.", "Ignore data from teammates.", "Choose the loudest person's idea every time."], "Respectfully discuss evidence before deciding.", "Respectful evidence-based discussion helps teams.")
        ]
      }),
      {
        id: "grade-5-science-unit-1-final-quiz",
        title: "Unit 1 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherSummary: "The Unit 1 final quiz checks careful observation, testable questions, fair tests, measurement, evidence, design process, safety, and research habits.",
        teacherOverview: "Use this quiz after students complete the STEM Skills, Safety, and Investigation Habits lessons.",
        quiz: {
          title: "STEM Skills, Safety, and Investigation Habits Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Observation", "Observation", "multipleChoice", "Which statement is the clearest observation?", ["The liquid is light blue and has bubbles near the top.", "The liquid is probably a cleaner.", "The liquid wants to turn into foam."], "The liquid is light blue and has bubbles near the top.", "A clear observation describes what is noticed."),
            quizQuestion("Part A: Observation", "Inference", "multipleChoice", "Which statement is an inference?", ["The soil may be dry because it feels crumbly.", "The soil is brown.", "The soil is in a cup."], "The soil may be dry because it feels crumbly.", "An inference is an idea based on observations."),
            quizQuestion("Part B: Questions", "Testable Question", "multipleChoice", "Which question is easiest to investigate fairly?", ["Which material keeps water cold longest?", "Which material is the nicest?", "Which material feels special?"], "Which material keeps water cold longest?", "Temperature over time can be measured."),
            quizQuestion("Part B: Questions", "Improve", "multipleChoice", "Which version best improves 'Which glue is best?'", ["Which glue holds two craft sticks together under the most weight?", "Which glue has the best bottle?", "Which glue do students like more?"], "Which glue holds two craft sticks together under the most weight?", "This version defines what best means."),
            quizQuestion("Part C: Fair Tests", "Changed Variable", "multipleChoice", "A student tests whether the amount of water affects plant height. What is the changed variable?", ["Amount of water", "Plant height", "The ruler"], "Amount of water", "The changed variable is what is changed on purpose."),
            quizQuestion("Part C: Fair Tests", "Measured Variable", "multipleChoice", "In the same plant test, what is the measured variable?", ["Plant height", "Amount of water", "The pot colour"], "Plant height", "The measured variable is the result."),
            quizQuestion("Part C: Fair Tests", "Controlled Variable", "multipleChoice", "Which should stay the same in a fair plant test?", ["The type of plant", "The amount of water if that is being tested", "The measured height"], "The type of plant", "The type of plant should be controlled."),
            quizQuestion("Part D: Data", "Tools", "multipleChoice", "Which tool measures time?", ["Stopwatch", "Thermometer", "Balance scale"], "Stopwatch", "A stopwatch measures time."),
            quizQuestion("Part D: Data", "Units", "multipleChoice", "Which unit could record the mass of a small object?", ["Grams", "Centimetres", "Seconds"], "Grams", "Grams measure mass."),
            quizQuestion("Part D: Data", "Recording", "trueFalse", "A data table should be labelled clearly enough that another person can understand it.", ["True", "False"], "True", "Clear labels make data useful."),
            quizQuestion("Part E: Evidence", "Conclusion", "multipleChoice", "Which conclusion is most careful?", ["The data suggests the taller ramp made the car travel farther.", "The tall ramp is always the best ramp in the world.", "The short ramp never works for anything."], "The data suggests the taller ramp made the car travel farther.", "Careful conclusions avoid overclaiming."),
            quizQuestion("Part E: Evidence", "Source of Error", "multipleChoice", "Which could be a source of error?", ["Reading the ruler from the wrong end", "Repeating the test", "Writing down the unit"], "Reading the ruler from the wrong end", "A ruler mistake can affect data."),
            quizQuestion("Part F: Design", "Criteria", "multipleChoice", "In a design challenge, criteria tell the team...", ["what the design must do to succeed", "why data should be ignored", "which source is most colourful"], "what the design must do to succeed", "Criteria describe success."),
            quizQuestion("Part F: Design", "Constraint", "multipleChoice", "Which is a constraint?", ["Use only ten craft sticks.", "The bridge should hold weight.", "The tower should stand."], "Use only ten craft sticks.", "A constraint is a limit."),
            quizQuestion("Part F: Design", "Prototype", "trueFalse", "A prototype is a model that can be tested and improved.", ["True", "False"], "True", "Prototypes are made for testing and improvement."),
            quizQuestion("Part G: Safety and Research", "Safety", "multipleChoice", "What should a student do if instructions are unclear?", ["Ask the teacher or trusted adult before continuing.", "Guess quickly before anyone notices.", "Skip safety steps to save time."], "Ask the teacher or trusted adult before continuing.", "Asking for help is a safe habit."),
            quizQuestion("Part G: Safety and Research", "Reliable Source", "multipleChoice", "Which question helps check a source?", ["Who made it, and what evidence does it use?", "Is it the first result online?", "Does it have the biggest picture?"], "Who made it, and what evidence does it use?", "Source creator and evidence help judge reliability."),
            quizQuestion("Part G: Safety and Research", "Honesty", "trueFalse", "Students should record what actually happened, even if the result is unexpected.", ["True", "False"], "True", "Honest data matters in science.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final STEM Skills mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each STEM Skills lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The unit quiz checks observation, questions, fair tests, variables, measurement, data, conclusions, design, safety, and research. Recommended weighting remains 40% lesson quizzes and 60% unit quiz."
    }
  };

  var library = window.PracticeStarContent.grade5Science;
  library.units = Array.isArray(library.units) ? library.units : [];
  var index = library.units.findIndex(function (item) { return item && item.id === unit.id; });
  if (index >= 0) {
    library.units[index] = unit;
  } else {
    library.units.push(unit);
  }
}());
