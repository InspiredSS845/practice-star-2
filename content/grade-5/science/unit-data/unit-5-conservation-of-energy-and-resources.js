window.PracticeStarUnit = window.PracticeStarUnit || {};
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
        "Review missed ideas before assigning the next Conservation of Energy and Resources lesson."
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
        version: "2026-08-28-science-unit-5-energy-resources-1",
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
    id: "grade-5-science-unit-5",
    title: "Conservation of Energy and Resources",
    strand: "Earth and Space Systems",
    unitGoal: "Students will compare energy sources, understand resource use, and practise stewardship-minded choices that conserve energy and materials.",
    lessons: [
      lesson({
        id: "grade-5-science-unit-5-forms-of-energy",
        title: "Forms of Energy in Everyday Life",
        learningGoal: "Students will identify common forms of energy and describe how they are used in everyday devices and systems.",
        successCriteria: [
          "I can identify light, sound, thermal, electrical, mechanical, and chemical energy.",
          "I can match forms of energy to everyday examples.",
          "I can explain that useful devices often involve more than one form of energy."
        ],
        vocabulary: ["energy", "light energy", "sound energy", "thermal energy", "electrical energy", "mechanical energy", "chemical energy"],
        teacherSummary: "Students practise identifying common forms of energy in everyday examples.",
        teacherOverview: "Students learn that energy is needed for change and motion and that energy appears in several useful forms.",
        christianFocus: "Students study energy as part of God's orderly created world and consider how energy should be used wisely.",
        lessonContent: [
          "Energy is the ability to cause change or do work.",
          "Light energy lets us see and can be produced by the sun, lamps, and screens.",
          "Sound energy is produced by vibrations.",
          "Thermal energy is connected to temperature and heat transfer.",
          "Electrical energy powers many devices and can be changed into other forms.",
          "Mechanical energy is connected to movement and position.",
          "Chemical energy is stored in substances such as food, batteries, and fuels."
        ],
        activityTitle: "Forms of Energy Mission",
        mission: "Practise spotting forms of energy in everyday examples.",
        levels: ["Level 1: Name the Energy", "Level 2: Energy in Devices"],
        quizTitle: "Forms of Energy in Everyday Life Quiz",
        quizFocus: "Forms of energy, examples, device use, and careful matching",
        steps: [
          intro("Level 1: Name the Energy", "Before You Begin", "Get ready: energy has different forms", "Energy is needed for motion, light, sound, heat, and many changes. Grade 5 students should be able to name common forms of energy and match them to examples."),
          intro("Level 1: Name the Energy", "Six Common Forms", "Look for what is happening", "Light, sound, thermal, electrical, mechanical, and chemical energy are common forms. A device or living thing may involve more than one form at the same time."),
          question("Level 1: Name the Energy", "Light", "Which example mainly shows light energy being used?", ["a lamp helping a student read", "a backpack resting on the floor", "a closed book sitting on a shelf"], "a lamp helping a student read", "Correct. The lamp gives off light energy.", "Look for seeing or illumination."),
          question("Level 1: Name the Energy", "Sound", "Which example mainly shows sound energy?", ["a bell vibrating after it is struck", "a cup holding cold water", "a battery stored in a drawer"], "a bell vibrating after it is struck", "Yes. Sound comes from vibrations.", "Sound needs vibrations."),
          question("Level 1: Name the Energy", "Chemical", "Which example includes stored chemical energy?", ["food that the body can use", "a mirror reflecting sunlight", "a pencil lying still on a desk"], "food that the body can use", "Correct. Food stores chemical energy.", "Think about stored energy in substances."),
          question("Level 1: Name the Energy", "True or False", "Thermal energy is connected to temperature and heat transfer.", ["True", "False"], "True", "Correct. Thermal energy is linked to heat.", "Warm and cool objects involve thermal energy."),
          complete("Level 1: Name the Energy", "Level 1 Complete", "You practised naming forms of energy."),
          intro("Level 2: Energy in Devices", "Devices Can Use Several Forms", "Follow the energy", "A device may take in one form of energy and give off another. A speaker uses electrical energy to produce sound. A toaster uses electrical energy to produce thermal energy."),
          question("Level 2: Energy in Devices", "Speaker", "A small speaker plays music from a tablet. Which energy change is most important?", ["electrical energy to sound energy", "thermal energy to chemical energy", "mechanical energy to stored food energy"], "electrical energy to sound energy", "Correct. The speaker uses electrical energy to make sound.", "The output is music you hear."),
          question("Level 2: Energy in Devices", "Toaster", "A toaster warms bread. Which energy form is the useful output?", ["thermal energy", "sound energy", "magnetic energy"], "thermal energy", "Yes. The toaster's useful output is heat.", "The bread gets warmer."),
          question("Level 2: Energy in Devices", "Moving Fan", "An electric fan spins its blades. Which energy form is shown by the moving blades?", ["mechanical energy", "chemical energy", "light energy only"], "mechanical energy", "Correct. Moving parts show mechanical energy.", "Movement is the clue."),
          question("Level 2: Energy in Devices", "True or False", "A device can involve more than one form of energy.", ["True", "False"], "True", "Correct. Many devices transform energy.", "Think about a lamp that gives light and also warms up."),
          complete("Level 2: Energy in Devices", "Mission Complete", "You practised identifying energy in devices.")
        ],
        quizQuestions: [
          quizQuestion("Energy Forms", "Energy Meaning", "multipleChoice", "Which statement best describes energy?", ["Energy is the ability to cause change or do work.", "Energy is only electricity from a wall outlet.", "Energy is only found in machines."], "Energy is the ability to cause change or do work.", "Energy is needed for work and change."),
          quizQuestion("Energy Forms", "Light", "multipleChoice", "Which example uses light energy?", ["a flashlight shining on a path", "a rock resting under a bench", "a folded paper towel"], "a flashlight shining on a path", "A flashlight gives light."),
          quizQuestion("Energy Forms", "Sound", "multipleChoice", "Sound energy is produced by...", ["vibrations", "all silent objects", "stored water only"], "vibrations", "Sound comes from vibrations."),
          quizQuestion("Energy Forms", "Thermal", "multipleChoice", "Which example is connected to thermal energy?", ["a mug of hot soup cooling on a table", "a ruler measuring length", "a pencil mark being erased"], "a mug of hot soup cooling on a table", "Thermal energy is linked to heat."),
          quizQuestion("Energy Forms", "Chemical", "multipleChoice", "Which item stores chemical energy?", ["a battery", "a mirror", "a glass window"], "a battery", "Batteries store chemical energy."),
          quizQuestion("Energy Forms", "Mechanical", "multipleChoice", "Which example shows mechanical energy?", ["a bicycle wheel turning", "a paper label on a bottle", "a light switch label"], "a bicycle wheel turning", "Motion is mechanical energy."),
          quizQuestion("Energy Forms", "True or False", "trueFalse", "A device can involve more than one form of energy.", ["True", "False"], "True", "Many devices transform energy."),
          quizQuestion("Energy Forms", "True or False", "trueFalse", "Food can store chemical energy that the body uses.", ["True", "False"], "True", "Food contains stored chemical energy.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-5-energy-sources",
        title: "Renewable and Non-Renewable Energy Sources",
        learningGoal: "Students will compare renewable and non-renewable energy sources using benefits, limits, reliability, and stewardship concerns.",
        successCriteria: [
          "I can identify renewable and non-renewable energy sources.",
          "I can compare benefits and limits of different energy sources.",
          "I can explain why energy choices often involve trade-offs."
        ],
        vocabulary: ["renewable", "non-renewable", "energy source", "fuel", "reliable", "trade-off"],
        teacherSummary: "Students practise comparing energy sources without oversimplifying their benefits and limits.",
        teacherOverview: "Students learn that energy sources can be renewable or non-renewable and that wise decisions compare reliability, cost, impact, and use.",
        christianFocus: "Students practise stewardship by thinking carefully about how people use the resources God has provided.",
        lessonContent: [
          "An energy source is something people use to get useful energy.",
          "Renewable energy sources can be replenished naturally in a relatively short time, such as sunlight, wind, moving water, and plant material.",
          "Non-renewable energy sources are used much faster than they are replaced, such as coal, oil, natural gas, and uranium.",
          "Every energy source has benefits and limits.",
          "Good decisions compare reliability, cost, location, technology, environmental effects, and human needs."
        ],
        activityTitle: "Energy Sources Mission",
        mission: "Practise comparing renewable and non-renewable energy sources.",
        levels: ["Level 1: Sort Energy Sources", "Level 2: Compare Trade-Offs"],
        quizTitle: "Renewable and Non-Renewable Energy Sources Quiz",
        quizFocus: "Energy sources, renewable and non-renewable examples, benefits, limits, reliability, and trade-offs",
        steps: [
          intro("Level 1: Sort Energy Sources", "Before You Begin", "Get ready: energy comes from sources", "People use different energy sources for heat, electricity, transportation, and machines. Some sources are renewable, and some are non-renewable."),
          intro("Level 1: Sort Energy Sources", "Renewable and Non-Renewable", "Think about replacement time", "Renewable sources are replenished naturally in a short time. Non-renewable sources are used much faster than they are replaced. Both kinds should be studied honestly."),
          question("Level 1: Sort Energy Sources", "Renewable Example", "Which energy source is renewable?", ["wind", "natural gas", "coal"], "wind", "Correct. Wind is naturally replenished.", "Think about what can be replaced in a short time."),
          question("Level 1: Sort Energy Sources", "Non-Renewable Example", "Which energy source is non-renewable?", ["oil", "sunlight", "moving water"], "oil", "Yes. Oil is used much faster than it is replaced.", "Think about underground fuels."),
          question("Level 1: Sort Energy Sources", "Uranium", "Why is uranium usually classified as non-renewable?", ["It is a limited resource mined from the earth.", "It is produced daily by wind turbines.", "It is the same as sunlight in every way."], "It is a limited resource mined from the earth.", "Correct. Uranium is limited and mined.", "Non-renewable does not only mean fuel that burns."),
          question("Level 1: Sort Energy Sources", "True or False", "Renewable means the source is naturally replenished in a relatively short time.", ["True", "False"], "True", "Correct. Replacement time matters.", "Renewable sources can be renewed naturally."),
          complete("Level 1: Sort Energy Sources", "Level 1 Complete", "You practised sorting energy sources."),
          intro("Level 2: Compare Trade-Offs", "No Source Is Perfect", "Compare benefits and limits", "Energy choices involve trade-offs. A source might be renewable but depend on weather. Another source might be reliable but create pollution or use a limited resource."),
          question("Level 2: Compare Trade-Offs", "Wind Trade-Off", "Which comparison is most accurate for wind energy?", ["It is renewable, but its output can change with wind conditions.", "It is non-renewable because turbines have moving parts.", "It works exactly the same in every location."], "It is renewable, but its output can change with wind conditions.", "Correct. Wind is renewable but variable.", "Think about both benefit and limit."),
          question("Level 2: Compare Trade-Offs", "Fuel Trade-Off", "Which statement is most accurate about coal, oil, and natural gas?", ["They can provide useful energy, but they are limited and can affect air quality.", "They are renewable because people use them often.", "They have no environmental effects when burned."], "They can provide useful energy, but they are limited and can affect air quality.", "Yes. This answer names both usefulness and concern.", "A fair comparison includes benefits and costs."),
          question("Level 2: Compare Trade-Offs", "Location", "Why does location matter when choosing an energy source?", ["Some places have more wind, sunlight, moving water, or fuel access than others.", "Location changes renewable sources into non-renewable sources.", "All energy sources work equally well everywhere."], "Some places have more wind, sunlight, moving water, or fuel access than others.", "Correct. Local conditions matter.", "Energy decisions depend on place."),
          question("Level 2: Compare Trade-Offs", "True or False", "A wise energy decision should compare benefits, limits, and human needs.", ["True", "False"], "True", "Correct. Energy decisions involve trade-offs.", "Simple one-word answers are usually not enough."),
          complete("Level 2: Compare Trade-Offs", "Mission Complete", "You practised comparing energy-source trade-offs.")
        ],
        quizQuestions: [
          quizQuestion("Energy Sources", "Renewable", "multipleChoice", "Which source is renewable?", ["sunlight", "coal", "natural gas"], "sunlight", "Sunlight is naturally replenished."),
          quizQuestion("Energy Sources", "Non-Renewable", "multipleChoice", "Which source is non-renewable?", ["oil", "wind", "moving water"], "oil", "Oil is used faster than it is replaced."),
          quizQuestion("Energy Sources", "Uranium", "multipleChoice", "Why is uranium non-renewable?", ["It is a limited mined resource.", "It is created whenever sunlight shines.", "It grows again each spring."], "It is a limited mined resource.", "Uranium is limited and mined."),
          quizQuestion("Trade-Offs", "Wind", "multipleChoice", "Which statement about wind energy is most accurate?", ["It is renewable, but output depends on wind conditions.", "It is non-renewable because turbines are built from materials.", "It has the same output in every location."], "It is renewable, but output depends on wind conditions.", "Wind energy is renewable but variable."),
          quizQuestion("Trade-Offs", "Fuels", "multipleChoice", "Which statement about coal, oil, and natural gas is most accurate?", ["They provide useful energy but are limited and can affect air quality.", "They are renewable because they are used often.", "They have no effects when burned."], "They provide useful energy but are limited and can affect air quality.", "This compares benefit and concern."),
          quizQuestion("Trade-Offs", "Location", "multipleChoice", "Why does location matter for energy choices?", ["Energy sources and conditions differ from place to place.", "Location removes all trade-offs.", "Location makes every source renewable."], "Energy sources and conditions differ from place to place.", "Local conditions affect choices."),
          quizQuestion("Energy Sources", "True or False", "trueFalse", "Renewable energy sources are replenished naturally in a relatively short time.", ["True", "False"], "True", "Renewable sources can be replenished."),
          quizQuestion("Trade-Offs", "True or False", "trueFalse", "A fair comparison should include both benefits and limits.", ["True", "False"], "True", "Energy decisions need careful comparison.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-5-electricity-heat-and-energy-choices",
        title: "Electricity, Heat, and Energy Choices",
        learningGoal: "Students will explain energy transformations in electrical devices and describe how heat can be conserved or wasted.",
        successCriteria: [
          "I can identify energy transformations in common devices.",
          "I can explain that some transformed energy may spread into the environment as heat, light, or sound.",
          "I can choose technology or habits that reduce wasted energy."
        ],
        vocabulary: ["transformation", "electrical energy", "thermal energy", "insulation", "efficiency", "waste energy"],
        teacherSummary: "Students practise tracking energy transformations and choosing efficient habits and technologies.",
        teacherOverview: "Students learn that energy changes form in devices and that thoughtful design can reduce wasted energy.",
        christianFocus: "Students practise stewardship by noticing ways to use energy wisely rather than carelessly.",
        lessonContent: [
          "Energy can be transformed from one form to another.",
          "Electrical devices often transform electrical energy into light, sound, thermal energy, or motion.",
          "Energy is not created or destroyed by a device; it changes form and may spread into the environment.",
          "Some energy transformations are useful, while some energy spreads away as heat, light, or sound that was not the main purpose.",
          "Insulation, efficient devices, and wise habits can reduce unnecessary energy loss."
        ],
        activityTitle: "Energy Transformation Mission",
        mission: "Practise following energy transformations and choosing efficient energy habits.",
        levels: ["Level 1: Follow the Transformation", "Level 2: Reduce Waste"],
        quizTitle: "Electricity, Heat, and Energy Choices Quiz",
        quizFocus: "Energy transformations, useful output, waste energy, insulation, efficiency, and technology choices",
        steps: [
          intro("Level 1: Follow the Transformation", "Before You Begin", "Get ready: energy changes form", "Energy can change from one form to another. A device usually takes in one form of energy and produces one or more outputs."),
          intro("Level 1: Follow the Transformation", "Useful and Unwanted Outputs", "Not every output is the goal", "A lamp is meant to give light, but it may also get warm. A blender is meant to move blades, but it also makes sound. Some energy spreads away instead of doing the main job."),
          question("Level 1: Follow the Transformation", "Lamp", "In a lamp, what is the main useful energy output?", ["light energy", "stored chemical energy", "sound energy"], "light energy", "Correct. A lamp's main job is to give light.", "Think about why people turn on a lamp."),
          question("Level 1: Follow the Transformation", "Blender", "A blender changes electrical energy mainly into what useful form?", ["mechanical energy of moving blades", "chemical energy stored in the cord", "solar energy in the jar"], "mechanical energy of moving blades", "Yes. The blades move.", "Look at the device's main job."),
          question("Level 1: Follow the Transformation", "Waste Heat", "A phone charger feels warm after use. What does this show?", ["Some energy spread into the environment as thermal energy.", "The charger created new energy from nothing.", "Electrical energy stopped existing completely."], "Some energy spread into the environment as thermal energy.", "Correct. Some transformed energy can spread as heat.", "Warmth is linked to thermal energy."),
          question("Level 1: Follow the Transformation", "True or False", "Energy can be transformed from one form to another.", ["True", "False"], "True", "Correct. Energy transformations happen in many devices.", "Think about electricity becoming light or motion."),
          complete("Level 1: Follow the Transformation", "Level 1 Complete", "You practised following energy transformations."),
          intro("Level 2: Reduce Waste", "Efficiency and Insulation", "Use energy wisely", "Efficiency means getting more useful output from the energy used. Insulation slows heat transfer, which can help keep warm things warm or cool things cool."),
          question("Level 2: Reduce Waste", "Insulation", "Why does a travel mug help a hot drink stay warm longer?", ["Insulation slows heat transfer to the surroundings.", "The mug creates extra heat from the air.", "The mug removes the drink's thermal energy."], "Insulation slows heat transfer to the surroundings.", "Correct. Insulation slows heat movement.", "Insulation does not create heat; it slows transfer."),
          question("Level 2: Reduce Waste", "Efficient Bulb", "Why might an LED bulb be chosen instead of an older bulb?", ["It can provide useful light while wasting less energy as heat.", "It changes all electricity into sound.", "It makes electricity renewable by itself."], "It can provide useful light while wasting less energy as heat.", "Yes. Efficient technology can reduce wasted energy.", "Think about useful light and unwanted heat."),
          question("Level 2: Reduce Waste", "Habit Choice", "Which habit reduces unnecessary electricity use?", ["turning off lights in an empty room", "opening a fridge door to cool the kitchen", "running two devices when one is enough"], "turning off lights in an empty room", "Correct. Turning off unused devices conserves energy.", "Use energy when it is needed."),
          question("Level 2: Reduce Waste", "True or False", "Energy-saving choices can include both better technology and wiser habits.", ["True", "False"], "True", "Correct. Devices and habits both matter.", "Conservation is not only about one tool."),
          complete("Level 2: Reduce Waste", "Mission Complete", "You practised reducing wasted energy.")
        ],
        quizQuestions: [
          quizQuestion("Transformations", "Lamp", "multipleChoice", "A lamp mainly transforms electrical energy into...", ["light energy", "stored food energy", "water energy"], "light energy", "The useful output is light."),
          quizQuestion("Transformations", "Fan", "multipleChoice", "An electric fan mainly transforms electrical energy into...", ["mechanical energy", "chemical energy", "magnetic north"], "mechanical energy", "The blades move."),
          quizQuestion("Transformations", "Waste Heat", "multipleChoice", "A charger gets warm. Which idea fits best?", ["Some energy has spread as thermal energy.", "The charger created energy from nothing.", "The cord became a renewable source."], "Some energy has spread as thermal energy.", "Warmth shows thermal energy spreading."),
          quizQuestion("Insulation", "Travel Mug", "multipleChoice", "How does insulation help a hot drink?", ["It slows heat transfer.", "It changes the drink into electricity.", "It removes all thermal energy."], "It slows heat transfer.", "Insulation slows heat movement."),
          quizQuestion("Efficiency", "LED", "multipleChoice", "Why can an efficient bulb conserve energy?", ["It gives useful light while wasting less energy as heat.", "It uses no energy at all.", "It turns every kind of energy into coal."], "It gives useful light while wasting less energy as heat.", "Efficiency means more useful output for the energy used."),
          quizQuestion("Conservation", "Habit", "multipleChoice", "Which habit conserves electricity?", ["turn off lights in an empty room", "leave a screen on overnight when not needed", "open the fridge often to cool the room"], "turn off lights in an empty room", "Turning off unused devices conserves energy."),
          quizQuestion("Transformations", "True or False", "trueFalse", "Energy can be transformed from one form to another.", ["True", "False"], "True", "Energy transformations happen in devices."),
          quizQuestion("Efficiency", "True or False", "trueFalse", "Some energy may spread into the environment as heat, light, or sound that was not the device's main purpose.", ["True", "False"], "True", "Some output is not useful for the main task.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-5-conservation-at-home-and-school",
        title: "Conservation at Home and School",
        learningGoal: "Students will identify practical conservation choices while respecting privacy and different family situations.",
        successCriteria: [
          "I can explain what conservation means.",
          "I can identify conservation choices for shared spaces such as classrooms.",
          "I can make respectful suggestions without judging private family choices."
        ],
        vocabulary: ["conservation", "reduce", "reuse", "waste", "shared space", "respectful suggestion"],
        teacherSummary: "Students practise conservation choices for school and community without requiring private home details.",
        teacherOverview: "Students learn that conservation means using energy and resources wisely and that suggestions should be respectful and realistic.",
        christianFocus: "Students connect conservation with stewardship, gratitude, and loving neighbours through responsible use of shared resources.",
        lessonContent: [
          "Conservation means using energy and resources wisely and avoiding unnecessary waste.",
          "Students can practise conservation in shared spaces such as classrooms, libraries, church buildings, and community spaces.",
          "Helpful conservation ideas are specific, realistic, and respectful.",
          "Students should not be required to share private details about family income, bills, appliances, or home routines.",
          "Small repeated habits can matter when many people practise them over time."
        ],
        activityTitle: "Conservation Choices Mission",
        mission: "Practise choosing respectful ways to conserve energy and resources.",
        levels: ["Level 1: Spot Conservation Choices", "Level 2: Make Respectful Suggestions"],
        quizTitle: "Conservation at Home and School Quiz",
        quizFocus: "Conservation meaning, classroom choices, respectful wording, privacy, and realistic action",
        steps: [
          intro("Level 1: Spot Conservation Choices", "Before You Begin", "Get ready: conservation means wise use", "Conservation is not only about using less. It means using energy and resources wisely, avoiding waste, and thinking about how choices affect others."),
          intro("Level 1: Spot Conservation Choices", "Shared Spaces", "Practise with school examples", "It is often best to practise conservation with shared spaces. Students can discuss classroom lights, paper use, water use, and device charging without sharing private home details."),
          question("Level 1: Spot Conservation Choices", "Classroom Lights", "Which choice best shows energy conservation in a classroom?", ["turn off lights when the room will be empty", "turn on every light before leaving", "cover the windows so daylight is never used"], "turn off lights when the room will be empty", "Correct. Turning off unused lights avoids waste.", "Think about using energy only when needed."),
          question("Level 1: Spot Conservation Choices", "Paper Use", "Which choice best conserves paper during a draft-writing activity?", ["use both sides or revise digitally when appropriate", "throw away every draft after one sentence", "print several copies before checking for mistakes"], "use both sides or revise digitally when appropriate", "Yes. This reduces unnecessary paper use.", "Think about avoiding waste while still learning well."),
          question("Level 1: Spot Conservation Choices", "Water Use", "Which habit conserves water?", ["turn off the tap while it is not being used", "let the tap run while finding supplies", "use extra water so the sink looks clean"], "turn off the tap while it is not being used", "Correct. Turning off unused water avoids waste.", "Use water when needed."),
          question("Level 1: Spot Conservation Choices", "True or False", "Conservation means using energy and resources wisely, not wasting them carelessly.", ["True", "False"], "True", "Correct. Conservation is wise use.", "Think stewardship."),
          complete("Level 1: Spot Conservation Choices", "Level 1 Complete", "You practised spotting conservation choices."),
          intro("Level 2: Make Respectful Suggestions", "Respect and Privacy", "Suggestions should be kind", "Good conservation suggestions do not shame people or demand private information. They name a realistic action and explain why it may help."),
          question("Level 2: Make Respectful Suggestions", "Respectful Wording", "Which suggestion is most respectful?", ["Could we turn off unused lights to save energy?", "Your family must be wasting energy if your bill is high.", "Only people with new appliances can conserve energy."], "Could we turn off unused lights to save energy?", "Correct. It is specific and respectful.", "Avoid judging private situations."),
          question("Level 2: Make Respectful Suggestions", "Privacy", "Which question should a class conservation activity avoid asking students to share?", ["How much does your family pay for electricity?", "What is one way a classroom could waste less paper?", "Why might a closed door help keep heat in a room?"], "How much does your family pay for electricity?", "Yes. Family bills are private.", "Choose the question that asks for private information."),
          question("Level 2: Make Respectful Suggestions", "Realistic Plan", "Which classroom plan is most realistic?", ["Assign a helper to check unused lights and devices at the end of the day.", "Stop using every device even when the teacher needs one for learning.", "Never use paper again for any subject."], "Assign a helper to check unused lights and devices at the end of the day.", "Correct. It is practical and respectful.", "A good plan can actually be followed."),
          question("Level 2: Make Respectful Suggestions", "True or False", "A conservation idea should be respectful of different family situations.", ["True", "False"], "True", "Correct. Conservation should not become shaming.", "Stewardship should be gracious."),
          complete("Level 2: Make Respectful Suggestions", "Mission Complete", "You practised respectful conservation suggestions.")
        ],
        quizQuestions: [
          quizQuestion("Conservation", "Meaning", "multipleChoice", "What does conservation mean?", ["using energy and resources wisely and avoiding waste", "never using any resources at all", "using more materials so a project looks larger"], "using energy and resources wisely and avoiding waste", "Conservation is wise use."),
          quizQuestion("Conservation", "Lights", "multipleChoice", "Which classroom action conserves energy?", ["turn off lights in an empty room", "leave every screen on overnight", "turn on unused equipment"], "turn off lights in an empty room", "Unused lights waste energy."),
          quizQuestion("Conservation", "Paper", "multipleChoice", "Which choice conserves paper?", ["use both sides when appropriate", "print extra copies before editing", "throw away paper after one sentence"], "use both sides when appropriate", "Using both sides can reduce waste."),
          quizQuestion("Conservation", "Water", "multipleChoice", "Which choice conserves water?", ["turn off the tap while not using it", "let the tap run while walking away", "use extra water to make a sink sound busy"], "turn off the tap while not using it", "Turning off unused water avoids waste."),
          quizQuestion("Respect", "Suggestion", "multipleChoice", "Which suggestion is most respectful?", ["Could we unplug unused chargers at the end of the day?", "Your home must waste energy.", "Only one kind of family can conserve resources."], "Could we unplug unused chargers at the end of the day?", "It is specific and respectful."),
          quizQuestion("Privacy", "Question", "multipleChoice", "Which question should a class avoid asking students to share?", ["What does your family pay for electricity?", "How can a classroom reduce paper waste?", "Why should taps be turned off when not in use?"], "What does your family pay for electricity?", "Bills and private home details should not be required."),
          quizQuestion("Conservation", "True or False", "trueFalse", "Small repeated habits can help conserve resources over time.", ["True", "False"], "True", "Repeated choices can matter."),
          quizQuestion("Respect", "True or False", "trueFalse", "Conservation suggestions should be realistic and respectful.", ["True", "False"], "True", "Good suggestions avoid shame and respect different situations.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-5-natural-resources-and-stewardship",
        title: "Natural Resources and Stewardship",
        learningGoal: "Students will identify natural resources and explain how stewardship guides responsible use.",
        successCriteria: [
          "I can identify natural resources used in everyday life.",
          "I can explain why resources should be used responsibly.",
          "I can connect stewardship to reducing waste, reusing, repairing, and recycling when appropriate."
        ],
        vocabulary: ["natural resource", "stewardship", "renewable resource", "non-renewable resource", "reuse", "repair"],
        teacherSummary: "Students practise identifying resources and making stewardship-minded choices.",
        teacherOverview: "Students learn that natural resources support daily life and should be used with gratitude, care, and responsibility.",
        christianFocus: "Students learn that the world belongs to God and people are called to steward resources wisely, not worship creation or waste it.",
        lessonContent: [
          "A natural resource is something from the earth that people use, such as water, soil, trees, minerals, plants, animals, sunlight, and fuels.",
          "Some resources are renewable if managed wisely, while others are non-renewable or very slow to replace.",
          "Stewardship means caring responsibly for what God has made and provided.",
          "Reducing waste, reusing, repairing, recycling, and choosing durable materials can be stewardship actions.",
          "Good stewardship considers people, the environment, cost, safety, and long-term needs."
        ],
        activityTitle: "Resource Stewardship Mission",
        mission: "Practise identifying resources and choosing responsible ways to use them.",
        levels: ["Level 1: Name the Resource", "Level 2: Stewardship Choices"],
        quizTitle: "Natural Resources and Stewardship Quiz",
        quizFocus: "Natural resources, renewable and non-renewable resources, stewardship, waste reduction, reuse, repair, and recycling",
        steps: [
          intro("Level 1: Name the Resource", "Before You Begin", "Get ready: resources support daily life", "People use natural resources every day. Water, trees, soil, minerals, fuels, plants, animals, and sunlight all support human needs in different ways."),
          intro("Level 1: Name the Resource", "Renewable and Non-Renewable", "Management matters", "Some resources can be renewed if managed wisely. Others are limited or take a very long time to replace. Responsible choices help resources serve people now and later."),
          question("Level 1: Name the Resource", "Paper", "Paper usually comes from which natural resource?", ["trees", "iron ore", "natural gas"], "trees", "Correct. Paper is made from wood fibres from trees.", "Think about wood pulp."),
          question("Level 1: Name the Resource", "Metal", "A metal spoon is made from materials that began as what kind of resource?", ["minerals mined from the earth", "fresh sunlight stored in clouds", "water vapour gathered from air"], "minerals mined from the earth", "Yes. Metals come from minerals or ores.", "Think about mining."),
          question("Level 1: Name the Resource", "Water", "Why is clean water an important resource?", ["People, plants, animals, and many systems need it.", "It is useful only when it becomes electricity.", "It can replace every other resource."], "People, plants, animals, and many systems need it.", "Correct. Clean water supports life and many human activities.", "Water has many uses."),
          question("Level 1: Name the Resource", "True or False", "Natural resources are used in many everyday objects and activities.", ["True", "False"], "True", "Correct. Resources support daily life.", "Look around a classroom and notice materials."),
          complete("Level 1: Name the Resource", "Level 1 Complete", "You practised identifying natural resources."),
          intro("Level 2: Stewardship Choices", "Stewardship Is Wise Care", "Use resources responsibly", "Christian stewardship means caring responsibly for what God made and provided. It includes gratitude, wise use, avoiding waste, and caring about people affected by resource choices."),
          question("Level 2: Stewardship Choices", "Repair", "A backpack zipper breaks, but the bag is otherwise strong. Which choice often shows good stewardship?", ["repair the zipper if it is reasonable", "throw away the bag immediately without checking", "buy several replacements just in case"], "repair the zipper if it is reasonable", "Correct. Repair can reduce waste.", "Think about using resources wisely."),
          question("Level 2: Stewardship Choices", "Reuse", "Which choice reuses a resource?", ["using a clean jar to store craft supplies", "throwing away a container that could safely be used again", "printing the same page several times by mistake"], "using a clean jar to store craft supplies", "Yes. Reuse gives an item another helpful purpose.", "Reuse means using again."),
          question("Level 2: Stewardship Choices", "Balanced Stewardship", "Which statement best fits stewardship?", ["Use resources wisely while considering people, safety, and long-term care.", "Never use any resource for any reason.", "Use resources as fast as possible before others do."], "Use resources wisely while considering people, safety, and long-term care.", "Correct. Stewardship includes wise, responsible use.", "Stewardship is not wastefulness or fear."),
          question("Level 2: Stewardship Choices", "True or False", "Stewardship can include reducing waste, repairing, reusing, and recycling when appropriate.", ["True", "False"], "True", "Correct. These can be stewardship choices.", "Think about wise care of resources."),
          complete("Level 2: Stewardship Choices", "Mission Complete", "You practised stewardship-minded resource choices.")
        ],
        quizQuestions: [
          quizQuestion("Resources", "Definition", "multipleChoice", "What is a natural resource?", ["something from the earth that people use", "only a thing made in a factory", "any object that has no value"], "something from the earth that people use", "Natural resources come from the earth."),
          quizQuestion("Resources", "Trees", "multipleChoice", "Paper is usually made from...", ["trees", "copper ore only", "natural gas only"], "trees", "Paper comes from wood fibres."),
          quizQuestion("Resources", "Minerals", "multipleChoice", "Metal objects often begin as...", ["minerals or ores mined from the earth", "fresh rain that hardens in a mould", "sunlight stored in glass"], "minerals or ores mined from the earth", "Metals come from mined minerals or ores."),
          quizQuestion("Resources", "Water", "multipleChoice", "Why is clean water important?", ["It supports people, plants, animals, and many systems.", "It is useful only when no one drinks it.", "It replaces every material people use."], "It supports people, plants, animals, and many systems.", "Clean water supports life and human needs."),
          quizQuestion("Stewardship", "Meaning", "multipleChoice", "Which statement best describes stewardship?", ["responsible care and wise use of what God has made and provided", "using resources carelessly before someone else can", "never making any product from natural resources"], "responsible care and wise use of what God has made and provided", "Stewardship means wise care."),
          quizQuestion("Stewardship", "Repair", "multipleChoice", "Which choice can reduce waste?", ["repairing a usable item when reasonable", "throwing away every item after one use", "buying extras with no purpose"], "repairing a usable item when reasonable", "Repair can extend usefulness."),
          quizQuestion("Resources", "True or False", "trueFalse", "Some resources can be renewed if managed wisely.", ["True", "False"], "True", "Renewable resources still require wise management."),
          quizQuestion("Stewardship", "True or False", "trueFalse", "Stewardship should consider both people and the created world.", ["True", "False"], "True", "Responsible care includes people and creation.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-5-environmental-effects-and-trade-offs",
        title: "Environmental Effects and Trade-Offs",
        learningGoal: "Students will compare effects of energy and resource use on society and the environment using evidence and balanced reasoning.",
        successCriteria: [
          "I can describe possible effects of energy and resource use.",
          "I can explain that choices can have benefits and costs.",
          "I can use careful, respectful wording when discussing environmental concerns."
        ],
        vocabulary: ["environmental effect", "society", "atmosphere", "carbon dioxide", "trade-off", "mitigate"],
        teacherSummary: "Students practise balanced reasoning about energy use, environmental effects, technology, and mitigation.",
        teacherOverview: "Students learn that energy and resource decisions affect people and the environment and should be compared honestly.",
        christianFocus: "Students practise truthful thinking, stewardship, and neighbour-love by considering how resource choices affect people and creation.",
        lessonContent: [
          "Energy and resource use can affect society and the environment.",
          "Benefits may include heat, electricity, transportation, jobs, food production, and useful materials.",
          "Costs may include pollution, habitat damage, waste, higher expenses, or health and safety concerns.",
          "Burning coal, oil, and natural gas can add gases such as carbon dioxide to the atmosphere.",
          "Students should discuss environmental concerns with evidence, humility, and hope, not fear or blame.",
          "To mitigate an effect means to reduce its harm."
        ],
        activityTitle: "Trade-Off Thinking Mission",
        mission: "Practise comparing benefits, costs, and mitigation choices.",
        levels: ["Level 1: Notice Effects", "Level 2: Compare Trade-Offs"],
        quizTitle: "Environmental Effects and Trade-Offs Quiz",
        quizFocus: "Benefits, costs, atmosphere, mitigation, evidence, technology, and balanced reasoning",
        steps: [
          intro("Level 1: Notice Effects", "Before You Begin", "Get ready: choices have effects", "Energy and resource use can help people, but it can also create problems. A careful student looks at both benefits and costs before making a judgement."),
          intro("Level 1: Notice Effects", "Use Evidence, Not Fear", "Think clearly and respectfully", "Environmental discussions should use evidence and careful wording. Christian stewardship includes truthfulness, neighbour-love, and hope instead of fear or blame."),
          question("Level 1: Notice Effects", "Benefit", "Which is a benefit of using energy resources?", ["homes can be heated and tools can operate", "all waste automatically disappears", "every energy source becomes perfect"], "homes can be heated and tools can operate", "Correct. Energy use provides real benefits.", "Think about human needs."),
          question("Level 1: Notice Effects", "Cost", "Which is a possible cost of using some energy resources?", ["air pollution from burning fuels", "electricity having no useful purpose", "solar panels making sunlight disappear"], "air pollution from burning fuels", "Yes. Some energy use can affect air quality.", "Think about environmental effects."),
          question("Level 1: Notice Effects", "Atmosphere", "Burning coal, oil, and natural gas can add which gas to the atmosphere?", ["carbon dioxide", "table salt", "liquid water only"], "carbon dioxide", "Correct. Carbon dioxide is one gas added by burning these fuels.", "Think about gases released during burning."),
          question("Level 1: Notice Effects", "True or False", "A fair discussion of energy use should consider both benefits and possible harms.", ["True", "False"], "True", "Correct. Balanced reasoning considers both.", "Avoid one-sided thinking."),
          complete("Level 1: Notice Effects", "Level 1 Complete", "You practised noticing benefits and costs."),
          intro("Level 2: Compare Trade-Offs", "Mitigate Means Reduce Harm", "Look for wise actions", "To mitigate an effect means to reduce its harm. Conservation, cleaner technology, careful planning, repair, reuse, and better habits may help reduce harmful effects."),
          question("Level 2: Compare Trade-Offs", "Mitigation", "Which choice best shows mitigation?", ["using insulation to reduce heating energy waste", "using more fuel because conservation takes planning", "ignoring pollution if a product is useful"], "using insulation to reduce heating energy waste", "Correct. Insulation can reduce energy waste and related impacts.", "Mitigation reduces harm."),
          question("Level 2: Compare Trade-Offs", "Technology", "Which statement about technology is most balanced?", ["Technology can solve some problems but should be evaluated for cost, materials, safety, and effects.", "Every new technology is automatically better in every way.", "Technology cannot affect energy use."], "Technology can solve some problems but should be evaluated for cost, materials, safety, and effects.", "Yes. Technology choices need careful evaluation.", "Look for benefits and limits."),
          question("Level 2: Compare Trade-Offs", "Respectful Reasoning", "Which sentence is best for a science discussion?", ["This choice may reduce energy use, but we should compare cost, safety, and usefulness.", "Anyone who disagrees is careless.", "Only one detail matters, so no evidence is needed."], "This choice may reduce energy use, but we should compare cost, safety, and usefulness.", "Correct. It is careful and respectful.", "Good reasoning compares evidence."),
          question("Level 2: Compare Trade-Offs", "True or False", "Mitigation means reducing harm from a problem or effect.", ["True", "False"], "True", "Correct. Mitigation reduces harm.", "Think about making a problem smaller."),
          complete("Level 2: Compare Trade-Offs", "Mission Complete", "You practised balanced trade-off thinking.")
        ],
        quizQuestions: [
          quizQuestion("Effects", "Benefit", "multipleChoice", "Which is a benefit of energy use?", ["heating homes and powering tools", "making all resources unlimited", "removing every need for conservation"], "heating homes and powering tools", "Energy use provides real benefits."),
          quizQuestion("Effects", "Cost", "multipleChoice", "Which can be a cost of burning some fuels?", ["air pollution", "sunlight disappearing", "water becoming non-matter"], "air pollution", "Burning fuels can affect air quality."),
          quizQuestion("Atmosphere", "Carbon Dioxide", "multipleChoice", "Burning coal, oil, and natural gas can add which gas to the atmosphere?", ["carbon dioxide", "table sugar", "solid copper"], "carbon dioxide", "Carbon dioxide is released when these fuels burn."),
          quizQuestion("Trade-Offs", "Balanced View", "multipleChoice", "Which statement shows balanced reasoning?", ["Energy choices can have benefits and costs.", "Only benefits matter in science.", "Only costs matter in science."], "Energy choices can have benefits and costs.", "Balanced reasoning considers both."),
          quizQuestion("Mitigation", "Meaning", "multipleChoice", "What does mitigate mean?", ["reduce harm", "make a problem larger", "ignore evidence"], "reduce harm", "Mitigation means reducing harm."),
          quizQuestion("Technology", "Evaluation", "multipleChoice", "How should an energy-saving technology be evaluated?", ["by comparing usefulness, cost, materials, safety, and effects", "by assuming it is perfect because it is new", "by ignoring how people will use it"], "by comparing usefulness, cost, materials, safety, and effects", "Technology should be evaluated carefully."),
          quizQuestion("Reasoning", "True or False", "trueFalse", "Environmental discussions should use evidence and respectful wording.", ["True", "False"], "True", "Evidence and respect matter."),
          quizQuestion("Stewardship", "True or False", "trueFalse", "Christian stewardship can include reducing waste and caring about how choices affect neighbours.", ["True", "False"], "True", "Stewardship includes care for people and creation.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-5-energy-saving-plan",
        title: "Design an Energy-Saving Plan",
        learningGoal: "Students will design a realistic energy-saving plan using observations, criteria, constraints, and respectful recommendations.",
        successCriteria: [
          "I can identify a conservation problem in a shared space.",
          "I can use criteria and constraints to choose a realistic plan.",
          "I can explain my recommendation with evidence and respectful wording."
        ],
        vocabulary: ["energy audit", "criteria", "constraints", "recommendation", "evidence", "action plan"],
        teacherSummary: "Students practise designing a conservation plan for a shared space using evidence and respectful recommendations.",
        teacherOverview: "Students learn to apply the design process to an energy-saving plan that is realistic, safe, respectful, and evidence-based.",
        christianFocus: "Students practise stewardship, humility, and service by proposing practical ways to care for shared spaces and people.",
        lessonContent: [
          "An energy-saving plan should begin with observations, not guesses.",
          "An energy audit is a careful check of how energy is being used in a space.",
          "Criteria describe what a successful plan should do.",
          "Constraints include time, cost, safety, permission, materials, and privacy.",
          "A good recommendation explains the evidence, action, expected benefit, and possible limit.",
          "Plans should be respectful and should not require private family information."
        ],
        activityTitle: "Energy-Saving Plan Mission",
        mission: "Practise building a realistic conservation plan for a shared space.",
        levels: ["Level 1: Gather Evidence", "Level 2: Make the Plan"],
        quizTitle: "Design an Energy-Saving Plan Quiz",
        quizFocus: "Energy audits, criteria, constraints, evidence, recommendations, respectful plans, and action steps",
        steps: [
          intro("Level 1: Gather Evidence", "Before You Begin", "Get ready: observe before recommending", "A good energy-saving plan starts with evidence. Instead of accusing people of wasting energy, a student can observe lights, devices, heating, cooling, paper use, water use, or routines in a shared space."),
          intro("Level 1: Gather Evidence", "Energy Audit", "A careful check", "An energy audit is a careful check of energy use. In Grade 5, an audit can be simple: list what is being used, when it is needed, and where waste might happen."),
          question("Level 1: Gather Evidence", "Audit Evidence", "Which note is best evidence for a classroom energy audit?", ["The projector was on during lunch when no one was using it.", "The room feels like it probably wastes energy.", "The class next door must be worse than ours."], "The projector was on during lunch when no one was using it.", "Correct. It is a specific observation.", "Look for evidence, not blame."),
          question("Level 1: Gather Evidence", "Privacy", "Which audit focus is safest for a class project?", ["shared classroom lights and devices", "private family electricity bills", "personal bedroom routines"], "shared classroom lights and devices", "Yes. Shared spaces protect privacy.", "Avoid private family details."),
          question("Level 1: Gather Evidence", "Criteria", "A plan must save energy without interrupting needed lessons. What is this?", ["a design criterion", "a chemical reaction", "a non-renewable fuel"], "a design criterion", "Correct. Criteria describe what the plan should accomplish.", "Criteria tell what success means."),
          question("Level 1: Gather Evidence", "True or False", "Evidence should come before recommendations in an energy-saving plan.", ["True", "False"], "True", "Correct. Good plans use evidence.", "Observe first, then recommend."),
          complete("Level 1: Gather Evidence", "Level 1 Complete", "You practised gathering evidence for a plan."),
          intro("Level 2: Make the Plan", "Criteria and Constraints", "Make it realistic", "A strong plan considers criteria and constraints. A recommendation should be possible, safe, respectful, and clear enough that others can understand it."),
          question("Level 2: Make the Plan", "Constraint", "A classroom plan cannot move plugs or change wiring. What is this limit?", ["a constraint", "a form of chemical energy", "a live load"], "a constraint", "Correct. Safety and permission limits are constraints.", "Constraints are limits."),
          question("Level 2: Make the Plan", "Recommendation", "Which recommendation is strongest?", ["Put a reminder near the door so the last person checks unused lights and devices.", "Never use classroom technology again.", "Tell students they are careless if a light is left on."], "Put a reminder near the door so the last person checks unused lights and devices.", "Yes. It is specific, realistic, and respectful.", "A good plan can be followed."),
          question("Level 2: Make the Plan", "Explain the Plan", "Which explanation best supports a recommendation?", ["The projector was unused during lunch three times, so turning it off then could reduce wasted electricity.", "I like posters, so the plan must work.", "The plan is best because no one should ask questions."], "The projector was unused during lunch three times, so turning it off then could reduce wasted electricity.", "Correct. It uses evidence and explains the expected benefit.", "Look for observation plus reason."),
          question("Level 2: Make the Plan", "True or False", "A good plan can include a possible limit or trade-off.", ["True", "False"], "True", "Correct. Honest plans can name limits.", "Real plans are not perfect."),
          complete("Level 2: Make the Plan", "Mission Complete", "You practised designing an energy-saving plan.")
        ],
        quizQuestions: [
          quizQuestion("Planning", "Energy Audit", "multipleChoice", "What is an energy audit?", ["a careful check of how energy is being used", "a guess about who is wasting energy", "a rule that bans every device"], "a careful check of how energy is being used", "An audit gathers evidence."),
          quizQuestion("Evidence", "Observation", "multipleChoice", "Which note is best evidence?", ["The computer cart was left plugged in after all devices were charged.", "Someone probably forgot something.", "This room is worse than every other room."], "The computer cart was left plugged in after all devices were charged.", "It is a specific observation."),
          quizQuestion("Privacy", "Shared Space", "multipleChoice", "Which focus best protects student privacy?", ["classroom energy use", "family electricity bills", "personal bedroom routines"], "classroom energy use", "Shared spaces avoid private family details."),
          quizQuestion("Design", "Criteria", "multipleChoice", "What do criteria tell?", ["what a successful plan should do", "which family uses the most electricity", "why evidence is not needed"], "what a successful plan should do", "Criteria define success."),
          quizQuestion("Design", "Constraints", "multipleChoice", "What are constraints?", ["limits such as time, cost, safety, permission, and materials", "the final score on a quiz only", "claims made without evidence"], "limits such as time, cost, safety, permission, and materials", "Constraints are limits."),
          quizQuestion("Recommendation", "Strong Plan", "multipleChoice", "Which recommendation is strongest?", ["Use a checklist to turn off unused classroom lights and devices.", "Stop all lessons that need electricity.", "Blame one student for every wasted watt."], "Use a checklist to turn off unused classroom lights and devices.", "It is practical and respectful."),
          quizQuestion("Evidence", "True or False", "trueFalse", "A recommendation should be connected to evidence.", ["True", "False"], "True", "Evidence supports recommendations."),
          quizQuestion("Planning", "True or False", "trueFalse", "A realistic plan may mention a limit or trade-off.", ["True", "False"], "True", "Honest plans can name limits.")
        ]
      }),
      {
        id: "grade-5-science-unit-5-final-quiz",
        title: "Unit 5 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherSummary: "The Unit 5 final quiz checks energy forms, transformations, renewable and non-renewable energy sources, conservation, resource stewardship, environmental effects, trade-offs, and energy-saving plans.",
        teacherOverview: "Use this quiz after students complete the Conservation of Energy and Resources lessons.",
        quiz: {
          title: "Conservation of Energy and Resources Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Energy Forms", "Energy Meaning", "multipleChoice", "Which statement best describes energy?", ["Energy is the ability to cause change or do work.", "Energy is only electricity from an outlet.", "Energy is only found in moving vehicles."], "Energy is the ability to cause change or do work.", "Energy causes work or change."),
            quizQuestion("Part A: Energy Forms", "Light", "multipleChoice", "Which example uses light energy?", ["a lamp shining on a desk", "a closed backpack on the floor", "a silent book on a shelf"], "a lamp shining on a desk", "A lamp gives light."),
            quizQuestion("Part A: Energy Forms", "Chemical", "multipleChoice", "Which item stores chemical energy?", ["a battery", "a mirror", "a clear window"], "a battery", "Batteries store chemical energy."),
            quizQuestion("Part B: Transformations", "Speaker", "multipleChoice", "A speaker mainly changes electrical energy into...", ["sound energy", "soil energy", "stored water energy"], "sound energy", "Speakers make sound."),
            quizQuestion("Part B: Transformations", "Fan", "multipleChoice", "A fan changes electrical energy mainly into...", ["mechanical energy", "chemical energy", "food energy"], "mechanical energy", "The blades move."),
            quizQuestion("Part B: Transformations", "Waste Heat", "multipleChoice", "A charger gets warm. What is likely happening?", ["Some energy is spreading as thermal energy.", "The charger is creating energy from nothing.", "The cord is turning into a fuel source."], "Some energy is spreading as thermal energy.", "Warmth shows thermal energy."),
            quizQuestion("Part C: Sources", "Renewable", "multipleChoice", "Which source is renewable?", ["moving water", "coal", "oil"], "moving water", "Moving water can be replenished naturally."),
            quizQuestion("Part C: Sources", "Non-Renewable", "multipleChoice", "Which source is non-renewable?", ["natural gas", "sunlight", "wind"], "natural gas", "Natural gas is limited and used faster than it is replaced."),
            quizQuestion("Part C: Sources", "Trade-Off", "multipleChoice", "Which statement is most balanced?", ["Wind energy is renewable, but output can change with wind conditions.", "Wind energy is non-renewable because turbines move.", "Wind energy works exactly the same everywhere."], "Wind energy is renewable, but output can change with wind conditions.", "It names a benefit and a limit."),
            quizQuestion("Part D: Conservation", "Meaning", "multipleChoice", "What does conservation mean?", ["using energy and resources wisely and avoiding waste", "never using any material for any reason", "using extra energy whenever it is available"], "using energy and resources wisely and avoiding waste", "Conservation is wise use."),
            quizQuestion("Part D: Conservation", "Classroom", "multipleChoice", "Which action conserves energy in a classroom?", ["turn off unused lights", "leave every screen on overnight", "open windows while heating on purpose"], "turn off unused lights", "Turning off unused lights avoids waste."),
            quizQuestion("Part D: Conservation", "Privacy", "multipleChoice", "Which question should a class activity avoid requiring?", ["How much does your family pay for electricity?", "How can a classroom reduce paper waste?", "Why might insulation slow heat transfer?"], "How much does your family pay for electricity?", "Family bills are private."),
            quizQuestion("Part E: Resources", "Natural Resource", "multipleChoice", "What is a natural resource?", ["something from the earth that people use", "only a product made entirely in a factory", "a material with no useful properties"], "something from the earth that people use", "Natural resources come from the earth."),
            quizQuestion("Part E: Resources", "Stewardship", "multipleChoice", "Which statement best describes Christian stewardship?", ["responsible care and wise use of what God has made and provided", "using resources carelessly before others can", "never using any resource for human needs"], "responsible care and wise use of what God has made and provided", "Stewardship is wise care."),
            quizQuestion("Part E: Resources", "Repair", "multipleChoice", "Which choice can reduce waste?", ["repairing a usable item when reasonable", "throwing away every item after one use", "buying several replacements with no purpose"], "repairing a usable item when reasonable", "Repair can extend usefulness."),
            quizQuestion("Part F: Environmental Effects", "Air", "multipleChoice", "Burning coal, oil, and natural gas can add which gas to the atmosphere?", ["carbon dioxide", "table salt", "solid copper"], "carbon dioxide", "Burning these fuels can release carbon dioxide."),
            quizQuestion("Part F: Environmental Effects", "Mitigation", "multipleChoice", "What does mitigate mean?", ["reduce harm", "ignore evidence", "make a problem larger"], "reduce harm", "Mitigation reduces harm."),
            quizQuestion("Part F: Environmental Effects", "Technology", "multipleChoice", "How should energy-saving technology be evaluated?", ["by comparing usefulness, cost, materials, safety, and effects", "by assuming every new device is perfect", "by ignoring how people will use it"], "by comparing usefulness, cost, materials, safety, and effects", "Technology should be evaluated carefully."),
            quizQuestion("Part G: Energy Plan", "Audit", "multipleChoice", "What is an energy audit?", ["a careful check of how energy is being used", "a guess about who wasted energy", "a rule that bans electricity"], "a careful check of how energy is being used", "An audit gathers evidence."),
            quizQuestion("Part G: Energy Plan", "Recommendation", "multipleChoice", "Which recommendation is strongest?", ["Use a checklist to turn off unused classroom lights and devices.", "Stop every activity that ever uses electricity.", "Blame classmates when a light is left on."], "Use a checklist to turn off unused classroom lights and devices.", "It is practical, specific, and respectful.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Conservation of Energy and Resources mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each Conservation of Energy and Resources lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The unit quiz checks forms of energy, transformations, renewable and non-renewable sources, conservation, stewardship, resource use, environmental effects, technology trade-offs, and energy-saving plans. Recommended weighting remains 40% lesson quizzes and 60% unit quiz."
    }
  };

  window.PracticeStarUnit["grade-5-science-unit-5"] = unit;
  var library = window.PracticeStarContent.grade5Science;
  library.units = Array.isArray(library.units) ? library.units : [];
  var index = library.units.findIndex(function (item) { return item && item.id === unit.id; });
  if (index >= 0) {
    library.units[index] = unit;
  } else {
    library.units.push(unit);
  }
}());
