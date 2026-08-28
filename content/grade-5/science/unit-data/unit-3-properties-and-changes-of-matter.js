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
        "Review missed ideas before assigning the next Properties and Changes of Matter lesson."
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
        version: "2026-08-28-science-unit-3-matter-1",
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
    id: "grade-5-science-unit-3",
    title: "Properties and Changes of Matter",
    strand: "Matter and Energy",
    unitGoal: "Students will describe matter by its properties, compare physical and chemical changes, and investigate mixtures, solutions, and changes of state.",
    lessons: [
      lesson({
        id: "grade-5-science-unit-3-describing-matter",
        title: "Describing Matter by Its Properties",
        learningGoal: "Students will describe matter using observable and measurable properties instead of opinions or guesses.",
        successCriteria: [
          "I can explain what matter is.",
          "I can describe a material using properties such as colour, texture, hardness, flexibility, magnetism, and solubility.",
          "I can choose properties that help compare or identify materials."
        ],
        vocabulary: ["matter", "property", "mass", "volume", "solubility", "magnetism"],
        teacherSummary: "Students practise describing matter by observable and measurable properties.",
        teacherOverview: "Students learn that matter has properties and that careful property descriptions are stronger than opinions or guesses.",
        christianFocus: "Matter is part of God's created world. Students should describe it honestly and carefully, using evidence rather than guesses.",
        lessonContent: [
          "Matter is anything that has mass and takes up space.",
          "A property is a feature that can be observed or measured.",
          "Physical properties include state, colour, texture, hardness, flexibility, magnetism, transparency, mass, volume, and solubility.",
          "A scientific description should tell what can be noticed or measured, not just whether someone likes the material.",
          "More than one property is often needed to compare or identify a material."
        ],
        activityTitle: "Matter Properties Mission",
        mission: "Practise describing and comparing materials by their properties.",
        levels: ["Level 1: Name Useful Properties", "Level 2: Compare Materials"],
        quizTitle: "Describing Matter by Its Properties Quiz",
        quizFocus: "Matter, properties, observation, measurement, and comparing materials",
        steps: [
          intro("Level 1: Name Useful Properties", "Before You Begin", "Get ready: matter has properties", "Matter is anything that has mass and takes up space. A property is a feature you can observe or measure. Useful property words help someone else understand the material clearly."),
          intro("Level 1: Name Useful Properties", "Property, Not Opinion", "Use careful science words", "A property might be colour, texture, hardness, flexibility, magnetism, transparency, mass, volume, or solubility. An opinion, such as 'nice' or 'boring,' does not describe the material scientifically."),
          question("Level 1: Name Useful Properties", "Choose a Property", "Which sentence describes a property of a material?", ["The strip bends without breaking.", "The strip would make a good bookmark.", "The strip reminds me of a toy."], "The strip bends without breaking.", "Correct. Flexibility is a property that can be observed.", "Look for the choice that tells what the material does or is like."),
          question("Level 1: Name Useful Properties", "Magnet Test", "A shiny grey object is attracted to a magnet. Which property is being tested?", ["magnetism", "solubility", "transparency"], "magnetism", "Yes. Attraction to a magnet is a magnetic property.", "A magnet helps test one specific property."),
          question("Level 1: Name Useful Properties", "Careful Description", "Which description is most useful in science?", ["The material is transparent and smooth.", "The material is probably expensive.", "The material looks like something from a drawer."], "The material is transparent and smooth.", "Correct. It uses properties that can be checked.", "Useful descriptions can be observed by another person."),
          question("Level 1: Name Useful Properties", "True or False", "A property should be based on what can be observed or measured, not just personal liking.", ["True", "False"], "True", "Correct. Scientific descriptions need careful evidence.", "Think about what another person could check."),
          complete("Level 1: Name Useful Properties", "Level 1 Complete", "You practised choosing useful property words."),
          intro("Level 2: Compare Materials", "Properties Help Us Compare", "One property may not be enough", "Two materials can look alike but behave differently. If two powders are both white, solubility, texture, or reaction with a safe test may help tell them apart."),
          question("Level 2: Compare Materials", "Powder Comparison", "Two white powders look similar. One dissolves in water, and the other settles at the bottom. Which property helps tell them apart?", ["solubility", "colour", "shape of the cup"], "solubility", "Correct. Solubility describes whether a substance dissolves.", "The sentence is about dissolving in water."),
          question("Level 2: Compare Materials", "Measuring Mass", "Which tool would best help compare the mass of two samples?", ["a balance", "a thermometer", "a hand lens"], "a balance", "Yes. A balance compares or measures mass.", "Mass is not measured by how clear or warm something is."),
          question("Level 2: Compare Materials", "Transparency", "Which observation compares transparency?", ["One sample lets light pass clearly, while the other blocks most light.", "One sample is heavier than the other sample.", "One sample dissolves faster in warm water."], "One sample lets light pass clearly, while the other blocks most light.", "Correct. Transparency is about how light passes through.", "Think about clear, cloudy, or opaque materials."),
          question("Level 2: Compare Materials", "True or False", "Two objects can share some properties and still differ in other properties.", ["True", "False"], "True", "Correct. Materials can be alike in one way and different in another.", "For example, two objects may be blue but have different masses."),
          complete("Level 2: Compare Materials", "Mission Complete", "You practised using properties to compare materials.")
        ],
        quizQuestions: [
          quizQuestion("Matter", "Definition", "multipleChoice", "Which statement best describes matter?", ["Anything that has mass and takes up space.", "Only things that are hard enough to hold.", "Only materials that can be seen from across a room."], "Anything that has mass and takes up space.", "Matter has mass and volume."),
          quizQuestion("Properties", "Physical Property", "multipleChoice", "Which is a physical property?", ["whether a material is flexible", "whether a student likes the material", "whether the material is useful for a craft"], "whether a material is flexible", "Flexibility is a property that can be tested."),
          quizQuestion("Properties", "Magnetism", "multipleChoice", "A paper clip is attracted to a magnet. Which property is shown?", ["magnetism", "transparency", "solubility"], "magnetism", "Magnetism is tested with a magnet."),
          quizQuestion("Properties", "Solubility", "multipleChoice", "What does solubility describe?", ["whether a substance dissolves in another substance", "whether a substance can be bent into a new shape", "whether a substance lets light pass through it"], "whether a substance dissolves in another substance", "Solubility is about dissolving."),
          quizQuestion("Properties", "Scientific Description", "multipleChoice", "Which description is most scientific?", ["The fabric is rough and dark blue.", "The fabric would look best on a poster.", "The fabric seems like something from a store."], "The fabric is rough and dark blue.", "It uses observable properties."),
          quizQuestion("Measurement", "Mass", "multipleChoice", "Which tool is best for comparing mass?", ["balance", "ruler", "magnet"], "balance", "A balance can compare mass."),
          quizQuestion("Properties", "True or False", "trueFalse", "An opinion can replace a property when describing a material scientifically.", ["True", "False"], "False", "Scientific descriptions should use observable or measurable properties."),
          quizQuestion("Properties", "True or False", "trueFalse", "A material may need more than one property to be identified carefully.", ["True", "False"], "True", "Several properties can give stronger evidence.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-3-solids-liquids-gases",
        title: "Solids, Liquids, and Gases",
        learningGoal: "Students will compare solids, liquids, and gases by shape, volume, and particle behaviour.",
        successCriteria: [
          "I can describe solids, liquids, and gases.",
          "I can explain how shape and volume help identify a state of matter.",
          "I can use a simple particle model to compare states of matter."
        ],
        vocabulary: ["solid", "liquid", "gas", "particle", "state of matter", "volume"],
        teacherSummary: "Students practise comparing solids, liquids, and gases using shape, volume, and a simple particle model.",
        teacherOverview: "Students learn that matter can be solid, liquid, or gas and that the state of matter affects how a material behaves.",
        christianFocus: "Students can notice order and patterns in God's created world as they compare different states of matter.",
        lessonContent: [
          "A state of matter describes whether a material is a solid, liquid, or gas.",
          "A solid usually keeps its own shape and volume.",
          "A liquid keeps its volume but takes the shape of its container.",
          "A gas spreads out to fill the space available and can often be compressed more easily than a liquid or solid.",
          "A simple particle model helps explain why solids, liquids, and gases behave differently."
        ],
        activityTitle: "States of Matter Mission",
        mission: "Practise comparing solids, liquids, and gases.",
        levels: ["Level 1: Shape and Volume", "Level 2: Particle Clues"],
        quizTitle: "Solids, Liquids, and Gases Quiz",
        quizFocus: "States of matter, shape, volume, particles, and examples",
        steps: [
          intro("Level 1: Shape and Volume", "Before You Begin", "Get ready: three common states", "Matter is often described as a solid, liquid, or gas. Shape and volume are two helpful clues for telling the states apart."),
          intro("Level 1: Shape and Volume", "Shape and Volume", "Use both clues", "A solid usually keeps its own shape and volume. A liquid keeps its volume but takes the shape of its container. A gas spreads out to fill the space available."),
          question("Level 1: Shape and Volume", "Solid Clue", "Which statement best describes a solid block of wax?", ["It keeps its own shape and volume.", "It keeps its volume but takes the shape of any container.", "It spreads out to fill all available space."], "It keeps its own shape and volume.", "Correct. A solid usually keeps its shape and volume.", "Think about whether it flows or spreads out."),
          question("Level 1: Shape and Volume", "Liquid Clue", "Water is poured from a cup into a bowl. What usually changes?", ["the shape of the water", "the material the water is made of", "the fact that it has volume"], "the shape of the water", "Yes. A liquid takes the shape of its container.", "The water is still water."),
          question("Level 1: Shape and Volume", "Gas Clue", "Which statement best describes air inside a balloon?", ["It spreads out inside the space of the balloon.", "It keeps a cube shape after entering the balloon.", "It has no connection to matter because it cannot be held by hand."], "It spreads out inside the space of the balloon.", "Correct. A gas spreads out to fill the space available.", "Air is matter even though it can be hard to see."),
          question("Level 1: Shape and Volume", "True or False", "A liquid usually keeps its own shape after it is poured into a different container.", ["True", "False"], "False", "Correct. A liquid usually takes the shape of its container.", "Liquids flow."),
          complete("Level 1: Shape and Volume", "Level 1 Complete", "You practised using shape and volume clues."),
          intro("Level 2: Particle Clues", "Particles Explain Behaviour", "A simple model helps", "In a simple particle model, particles in a solid are close together and mostly vibrate in place. Particles in a liquid are close but can slide past one another. Particles in a gas are farther apart and move freely."),
          question("Level 2: Particle Clues", "Solid Particles", "Which particle description best fits a solid?", ["Particles are packed closely and mostly vibrate in place.", "Particles are far apart and fill any space available.", "Particles slide past each other and take the container's shape."], "Particles are packed closely and mostly vibrate in place.", "Correct. Solid particles are close together.", "A solid keeps its shape."),
          question("Level 2: Particle Clues", "Liquid Particles", "Why can a liquid be poured?", ["Its particles can slide past one another.", "Its particles stay locked in one fixed shape.", "Its particles disappear when the container changes."], "Its particles can slide past one another.", "Yes. Liquid particles can move past each other.", "Pouring means the material can flow."),
          question("Level 2: Particle Clues", "Gas Particles", "Why can a gas spread through a container?", ["Its particles are farther apart and move freely.", "Its particles are joined in a fixed pattern.", "Its particles become solid when they touch air."], "Its particles are farther apart and move freely.", "Correct. Gas particles move freely and spread out.", "Think about air filling a balloon."),
          question("Level 2: Particle Clues", "True or False", "A simple particle model can help explain why the same matter behaves differently in different states.", ["True", "False"], "True", "Correct. Particle spacing and movement help explain state behaviour.", "Models help explain patterns we observe."),
          complete("Level 2: Particle Clues", "Mission Complete", "You practised comparing particles in solids, liquids, and gases.")
        ],
        quizQuestions: [
          quizQuestion("States", "Solid", "multipleChoice", "Which statement best describes a solid?", ["It usually keeps its own shape and volume.", "It keeps its volume but always changes its shape.", "It spreads out to fill every available space."], "It usually keeps its own shape and volume.", "A solid keeps shape and volume."),
          quizQuestion("States", "Liquid", "multipleChoice", "Which statement best describes a liquid?", ["It keeps its volume but takes the shape of its container.", "It keeps one shape no matter where it is placed.", "It has no volume because it can be poured."], "It keeps its volume but takes the shape of its container.", "A liquid flows and takes the container's shape."),
          quizQuestion("States", "Gas", "multipleChoice", "Which statement best describes a gas?", ["It spreads out to fill the space available.", "It always stays at the bottom of a container.", "It keeps the same shape as a cube."], "It spreads out to fill the space available.", "A gas spreads out."),
          quizQuestion("Particles", "Solid Particles", "multipleChoice", "In a simple model, particles in a solid are usually...", ["close together and mostly vibrating in place", "far apart and moving freely through a room", "spaced like a liquid but with no volume"], "close together and mostly vibrating in place", "Solid particles are close together."),
          quizQuestion("Particles", "Liquid Particles", "multipleChoice", "Why can liquid water take the shape of a glass?", ["Its particles can move past one another.", "Its particles stop being matter inside glass.", "Its particles become a gas when poured."], "Its particles can move past one another.", "Liquid particles can slide past one another."),
          quizQuestion("Particles", "Gas Particles", "multipleChoice", "Which particle description best fits a gas?", ["Particles are far apart and move freely.", "Particles are packed in a fixed pattern.", "Particles have no motion at all."], "Particles are far apart and move freely.", "Gas particles are farther apart."),
          quizQuestion("States", "True or False", "trueFalse", "Air is matter even though it is not easy to see.", ["True", "False"], "True", "Air has mass and takes up space."),
          quizQuestion("States", "True or False", "trueFalse", "Shape and volume can help identify a state of matter.", ["True", "False"], "True", "Shape and volume are useful clues.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-3-changes-of-state",
        title: "Changes of State",
        learningGoal: "Students will explain melting, freezing, evaporation, and condensation as changes of state caused by heating or cooling.",
        successCriteria: [
          "I can name common changes of state.",
          "I can connect heating and cooling to changes of state.",
          "I can explain that a change of state does not usually make a new substance."
        ],
        vocabulary: ["melting", "freezing", "evaporation", "condensation", "water vapour", "state change"],
        teacherSummary: "Students practise identifying changes of state and explaining how heating or cooling affects matter.",
        teacherOverview: "Students learn that changes of state can change how matter behaves while the substance itself may stay the same.",
        christianFocus: "Students study patterns in created matter with careful attention to cause and effect.",
        lessonContent: [
          "A change of state happens when matter changes between solid, liquid, and gas.",
          "Melting changes a solid to a liquid.",
          "Freezing changes a liquid to a solid.",
          "Evaporation changes a liquid to a gas. Condensation changes a gas to a liquid.",
          "Heating or cooling can change the state of matter, but the substance may still be the same material."
        ],
        activityTitle: "State Change Mission",
        mission: "Practise identifying changes of state and explaining the role of heating and cooling.",
        levels: ["Level 1: Name the Change", "Level 2: Explain the Cause"],
        quizTitle: "Changes of State Quiz",
        quizFocus: "Melting, freezing, evaporation, condensation, heating, cooling, and substance identity",
        steps: [
          intro("Level 1: Name the Change", "Before You Begin", "Get ready: matter can change state", "When matter changes between solid, liquid, and gas, it has changed state. The material may look different, but it may still be the same substance."),
          intro("Level 1: Name the Change", "Four Important Words", "Know the direction", "Melting changes solid to liquid. Freezing changes liquid to solid. Evaporation changes liquid to gas. Condensation changes gas to liquid."),
          question("Level 1: Name the Change", "Melting", "An ice cube becomes liquid water on a warm counter. What change of state happened?", ["melting", "condensation", "freezing"], "melting", "Correct. Melting changes a solid to a liquid.", "The ice started as a solid."),
          question("Level 1: Name the Change", "Freezing", "Liquid water becomes ice in a freezer. What change of state happened?", ["freezing", "evaporation", "melting"], "freezing", "Yes. Freezing changes a liquid to a solid.", "The ending state is solid."),
          question("Level 1: Name the Change", "Condensation", "Tiny water drops form on the outside of a cold glass. Which change is involved?", ["condensation", "melting", "dissolving"], "condensation", "Correct. Water vapour in the air can cool and become liquid droplets.", "Gas changing to liquid is the clue."),
          question("Level 1: Name the Change", "True or False", "Evaporation changes a liquid into a gas.", ["True", "False"], "True", "Correct. Evaporation is liquid to gas.", "Think of water slowly drying from a puddle."),
          complete("Level 1: Name the Change", "Level 1 Complete", "You practised naming changes of state."),
          intro("Level 2: Explain the Cause", "Heating and Cooling", "Energy affects particle movement", "Heating usually makes particles move more, which can lead to melting or evaporation. Cooling usually makes particles move less, which can lead to freezing or condensation."),
          question("Level 2: Explain the Cause", "Heating Example", "Which change usually happens when enough heat is added to ice?", ["It melts into liquid water.", "It freezes into harder ice.", "It dissolves into air."], "It melts into liquid water.", "Correct. Heating ice can cause melting.", "Ice is solid water."),
          question("Level 2: Explain the Cause", "Cooling Example", "Which change usually happens when water vapour cools on a cold surface?", ["It condenses into liquid droplets.", "It melts into a solid block.", "It becomes salt."], "It condenses into liquid droplets.", "Yes. Cooling water vapour can cause condensation.", "Gas to liquid is condensation."),
          question("Level 2: Explain the Cause", "Same Substance", "Why is melting ice usually a physical change?", ["The state changes, but the substance is still water.", "The water changes into a new metal.", "The water disappears from matter completely."], "The state changes, but the substance is still water.", "Correct. Ice and liquid water are both water.", "Ask whether a new substance formed."),
          question("Level 2: Explain the Cause", "True or False", "Heating or cooling can change a material's state without making a new substance.", ["True", "False"], "True", "Correct. State changes usually keep the same substance.", "Water is still water as ice, liquid water, or water vapour."),
          complete("Level 2: Explain the Cause", "Mission Complete", "You practised explaining changes of state.")
        ],
        quizQuestions: [
          quizQuestion("State Changes", "Melting", "multipleChoice", "What is melting?", ["solid changing to liquid", "liquid changing to solid", "gas changing to liquid"], "solid changing to liquid", "Melting is solid to liquid."),
          quizQuestion("State Changes", "Freezing", "multipleChoice", "What is freezing?", ["liquid changing to solid", "solid changing to gas", "gas changing to liquid"], "liquid changing to solid", "Freezing is liquid to solid."),
          quizQuestion("State Changes", "Evaporation", "multipleChoice", "A puddle slowly dries on a warm day. Which change is happening?", ["evaporation", "freezing", "condensation"], "evaporation", "Liquid water is becoming water vapour."),
          quizQuestion("State Changes", "Condensation", "multipleChoice", "Water drops form on a cold mirror after a warm shower. Which change is happening?", ["condensation", "melting", "dissolving"], "condensation", "Water vapour cools and becomes liquid."),
          quizQuestion("Cause", "Heating", "multipleChoice", "What can enough heating do to a solid such as ice?", ["cause it to melt", "cause it to become a different element", "cause it to stop taking up space"], "cause it to melt", "Heating can cause melting."),
          quizQuestion("Cause", "Cooling", "multipleChoice", "What can enough cooling do to liquid water?", ["cause it to freeze", "cause it to become salt", "cause it to lose all mass"], "cause it to freeze", "Cooling can cause freezing."),
          quizQuestion("State Changes", "True or False", "trueFalse", "A change of state usually means a new substance has formed.", ["True", "False"], "False", "A state change often keeps the same substance."),
          quizQuestion("State Changes", "True or False", "trueFalse", "Water can exist as ice, liquid water, and water vapour.", ["True", "False"], "True", "Water can be solid, liquid, or gas.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-3-physical-changes",
        title: "Physical Changes",
        learningGoal: "Students will identify physical changes and explain that physical changes do not make a new substance.",
        successCriteria: [
          "I can describe a physical change.",
          "I can explain why some physical changes are easy to reverse and some are not.",
          "I can compare physical changes with changes that may form new substances."
        ],
        vocabulary: ["physical change", "substance", "reversible", "dissolving", "mixture"],
        teacherSummary: "Students practise identifying physical changes, including changes in size, shape, state, and mixtures.",
        teacherOverview: "Students learn that a physical change affects form or appearance without producing a new substance.",
        christianFocus: "Students practise honest observation and careful reasoning when studying changes in the materials God made.",
        lessonContent: [
          "A physical change changes the form, size, shape, state, or arrangement of matter.",
          "A physical change does not make a new substance.",
          "Cutting, folding, crushing, melting, freezing, and many kinds of mixing are physical changes.",
          "Some physical changes are easy to reverse, but a change can be physical even if it is not easy to reverse.",
          "The key question is whether a new substance formed."
        ],
        activityTitle: "Physical Change Mission",
        mission: "Practise deciding whether a change is physical and explaining your evidence.",
        levels: ["Level 1: Spot Physical Changes", "Level 2: Explain the Evidence"],
        quizTitle: "Physical Changes Quiz",
        quizFocus: "Physical changes, substance identity, reversibility, dissolving, mixtures, and evidence",
        steps: [
          intro("Level 1: Spot Physical Changes", "Before You Begin", "Get ready: form can change", "A physical change changes how matter looks or behaves, but it does not make a new substance. The material is still the same kind of matter."),
          intro("Level 1: Spot Physical Changes", "Not Always Easy to Reverse", "Reversibility is not the only clue", "Melting ice is easy to reverse by freezing. Cutting paper is harder to reverse, but it is still a physical change because the paper did not become a new substance."),
          question("Level 1: Spot Physical Changes", "Cut Paper", "Why is cutting paper usually a physical change?", ["The size and shape change, but the paper remains paper.", "The paper becomes a new chemical substance.", "The paper stops being matter because it is smaller."], "The size and shape change, but the paper remains paper.", "Correct. The paper's form changed, not its substance.", "Ask whether a new substance formed."),
          question("Level 1: Spot Physical Changes", "Melting Chocolate", "Chocolate melts in a warm room. Which explanation is best?", ["Its state changes, but it is still chocolate.", "It changes into a gas because it is warm.", "It becomes a new metal because heat was added."], "Its state changes, but it is still chocolate.", "Yes. Melting is a physical change.", "Melting changes state."),
          question("Level 1: Spot Physical Changes", "Mixture", "Sand and water are stirred together. Why is this usually a physical change?", ["The materials are mixed but no new substance is made.", "The sand becomes part of the water molecules.", "The water changes into a solid rock."], "The materials are mixed but no new substance is made.", "Correct. Mixing can be a physical change.", "The sand and water are still sand and water."),
          question("Level 1: Spot Physical Changes", "True or False", "A physical change must always be easy to undo.", ["True", "False"], "False", "Correct. Some physical changes are not easy to reverse.", "Cutting paper is not easy to undo, but it is physical."),
          complete("Level 1: Spot Physical Changes", "Level 1 Complete", "You practised spotting physical changes."),
          intro("Level 2: Explain the Evidence", "Use the New Substance Question", "Evidence matters", "When deciding whether a change is physical, ask: Did the material only change form, size, shape, state, or arrangement? Or did it make a new substance?"),
          question("Level 2: Explain the Evidence", "Dissolving Sugar", "Sugar dissolves in water. Which explanation is most accurate?", ["The sugar spreads evenly in the water, but the sugar has not simply vanished.", "The sugar stops being matter as soon as it cannot be seen.", "The water changes the sugar into sand."], "The sugar spreads evenly in the water, but the sugar has not simply vanished.", "Correct. Dissolving is often a physical change.", "Not seeing something does not mean it is gone."),
          question("Level 2: Explain the Evidence", "Physical or Chemical", "Which change is most clearly physical?", ["crushing a piece of chalk into powder", "rust forming on an iron nail", "wood burning in a fire"], "crushing a piece of chalk into powder", "Yes. The chalk changes size and shape but remains chalk.", "Look for a change in form without a new substance."),
          question("Level 2: Explain the Evidence", "Best Evidence", "A student says a change is physical. Which evidence best supports that claim?", ["The material changed shape but kept the same substance.", "The material looked different and was surprising.", "The material was hard to put back exactly as it was."], "The material changed shape but kept the same substance.", "Correct. Same substance is the important evidence.", "A change can look different without making a new substance."),
          question("Level 2: Explain the Evidence", "True or False", "If matter changes from solid to liquid, it has always formed a new substance.", ["True", "False"], "False", "Correct. Melting usually keeps the same substance.", "Think about ice and liquid water."),
          complete("Level 2: Explain the Evidence", "Mission Complete", "You practised explaining physical changes.")
        ],
        quizQuestions: [
          quizQuestion("Physical Changes", "Definition", "multipleChoice", "What happens during a physical change?", ["Matter changes form or appearance without making a new substance.", "Matter must become a completely different substance.", "Matter loses all properties and cannot be described."], "Matter changes form or appearance without making a new substance.", "Physical changes do not make new substances."),
          quizQuestion("Physical Changes", "Cutting", "multipleChoice", "Why is cutting cardboard usually a physical change?", ["The shape changes, but the cardboard remains cardboard.", "The cardboard becomes a new gas.", "The cardboard stops having mass."], "The shape changes, but the cardboard remains cardboard.", "Cutting changes size and shape."),
          quizQuestion("Physical Changes", "Melting", "multipleChoice", "Which change is physical?", ["ice melting into liquid water", "iron rusting after being left outside", "paper burning into ash and smoke"], "ice melting into liquid water", "Melting is a state change."),
          quizQuestion("Physical Changes", "Dissolving", "multipleChoice", "Sugar dissolves in water. Which idea is most accurate?", ["The sugar particles are spread through the water.", "The sugar has stopped existing because it cannot be seen.", "The water has turned the sugar into glass."], "The sugar particles are spread through the water.", "Dissolved sugar is still present."),
          quizQuestion("Physical Changes", "Reversibility", "multipleChoice", "Which statement about physical changes is correct?", ["Some are easy to reverse, and some are not.", "All physical changes are impossible to reverse.", "Every physical change forms a new substance."], "Some are easy to reverse, and some are not.", "Reversibility is helpful but not the only clue."),
          quizQuestion("Physical Changes", "Evidence", "multipleChoice", "Which question is most useful when identifying a physical change?", ["Did a new substance form?", "Did the material look less useful?", "Did the material become harder to describe?"], "Did a new substance form?", "New substance formation is the key question."),
          quizQuestion("Physical Changes", "True or False", "trueFalse", "Crushing a cracker into crumbs is usually a physical change.", ["True", "False"], "True", "The size and shape change, but the substance remains cracker."),
          quizQuestion("Physical Changes", "True or False", "trueFalse", "A change must be easy to undo in order to be physical.", ["True", "False"], "False", "Some physical changes are difficult to reverse.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-3-chemical-changes",
        title: "Chemical Changes",
        learningGoal: "Students will identify evidence that a chemical change may have formed a new substance.",
        successCriteria: [
          "I can explain what a chemical change is.",
          "I can identify signs that a new substance may have formed.",
          "I can remember that one sign alone may not prove a chemical change."
        ],
        vocabulary: ["chemical change", "new substance", "gas", "precipitate", "rust", "evidence"],
        teacherSummary: "Students practise recognizing chemical changes and using evidence carefully.",
        teacherOverview: "Students learn that a chemical change forms one or more new substances and that signs of chemical change should be interpreted carefully.",
        christianFocus: "Students should use careful evidence and safe habits when studying chemical changes in God's created world.",
        lessonContent: [
          "A chemical change happens when one or more new substances form.",
          "Possible signs include gas bubbles, a colour change, heat or light being produced, a new odour, or a new solid forming.",
          "A sign is a clue, not always proof by itself. For example, boiling water has bubbles but is still a physical change.",
          "Rusting, burning, baking, and some reactions between substances are examples of chemical changes.",
          "Chemical investigations should be done only with teacher-approved materials and safety instructions."
        ],
        activityTitle: "Chemical Change Mission",
        mission: "Practise using evidence to decide whether a chemical change may have happened.",
        levels: ["Level 1: New Substance Clues", "Level 2: Use Evidence Carefully"],
        quizTitle: "Chemical Changes Quiz",
        quizFocus: "New substances, signs of chemical change, evidence, safety, and common examples",
        steps: [
          intro("Level 1: New Substance Clues", "Before You Begin", "Get ready: look for new substances", "A chemical change forms one or more new substances. The new substance may have different properties from the starting materials."),
          intro("Level 1: New Substance Clues", "Signs Are Clues", "Do not jump too quickly", "Gas bubbles, colour change, heat, light, new odour, or a new solid can be signs of chemical change. But one sign alone may not prove it, because some physical changes can look similar."),
          question("Level 1: New Substance Clues", "Rusting", "An iron nail is left damp and reddish-brown rust forms. What kind of change is this?", ["chemical change", "change of state", "simple dissolving"], "chemical change", "Correct. Rust is a new substance.", "Ask whether a new substance formed."),
          question("Level 1: New Substance Clues", "Baking", "Dough is baked and becomes bread with new smell, texture, and colour. Which explanation is best?", ["Chemical changes helped form new substances in the bread.", "The dough only changed container shape.", "The dough simply froze and melted at the same time."], "Chemical changes helped form new substances in the bread.", "Yes. Baking involves chemical changes.", "Think about new properties after heating."),
          question("Level 1: New Substance Clues", "Gas Clue", "Two safe classroom liquids are mixed by the teacher and bubbles form. What is the careful conclusion?", ["Gas bubbles may be evidence of a chemical change, but the whole situation should be checked.", "Bubbles always prove the substance is boiling.", "Bubbles mean the mixture is no longer matter."], "Gas bubbles may be evidence of a chemical change, but the whole situation should be checked.", "Correct. Bubbles can be a clue, but evidence should be checked carefully.", "A clue is helpful, but not always proof alone."),
          question("Level 1: New Substance Clues", "True or False", "A chemical change forms one or more new substances.", ["True", "False"], "True", "Correct. New substance formation is the key idea.", "Chemical changes change substance identity."),
          complete("Level 1: New Substance Clues", "Level 1 Complete", "You practised spotting chemical change clues."),
          intro("Level 2: Use Evidence Carefully", "Compare With Physical Changes", "Some clues need checking", "Boiling water makes bubbles, but it is still water changing from liquid to gas. A chemical change needs evidence that a new substance formed."),
          question("Level 2: Use Evidence Carefully", "Bubbles in Boiling", "Water boils in a kettle and bubbles rise. Why is this not enough to prove a chemical change?", ["The bubbles are water vapour forming during a change of state.", "Boiling removes all matter from the kettle.", "Bubbles only happen when rust forms."], "The bubbles are water vapour forming during a change of state.", "Correct. Boiling is a physical change of state.", "The substance is still water."),
          question("Level 2: Use Evidence Carefully", "Best Evidence", "Which observation gives the strongest evidence that a new substance may have formed?", ["A new solid appears after two clear liquids are mixed.", "A block is cut into two smaller pieces.", "Water is poured into a taller container."], "A new solid appears after two clear liquids are mixed.", "Yes. A new solid can be evidence of a chemical change.", "The new solid is called a precipitate."),
          question("Level 2: Use Evidence Carefully", "Safety", "What should students do before mixing materials in a science investigation?", ["follow teacher-approved instructions and safety rules", "taste a tiny amount to identify it", "mix larger amounts to make the result clearer"], "follow teacher-approved instructions and safety rules", "Correct. Chemical investigations require careful safety.", "Unknown materials should never be tasted."),
          question("Level 2: Use Evidence Carefully", "True or False", "A colour change can be a clue for a chemical change, but it should be considered with other evidence.", ["True", "False"], "True", "Correct. A colour change is a clue, not always proof by itself.", "Careful scientists use several pieces of evidence."),
          complete("Level 2: Use Evidence Carefully", "Mission Complete", "You practised using chemical change evidence carefully.")
        ],
        quizQuestions: [
          quizQuestion("Chemical Changes", "Definition", "multipleChoice", "What happens during a chemical change?", ["One or more new substances form.", "Only the shape changes while the substance stays the same.", "Matter stops having mass and volume."], "One or more new substances form.", "Chemical changes make new substances."),
          quizQuestion("Chemical Changes", "Rust", "multipleChoice", "Which is an example of a chemical change?", ["rust forming on iron", "ice melting in a cup", "paper being folded in half"], "rust forming on iron", "Rust is a new substance."),
          quizQuestion("Chemical Changes", "Signs", "multipleChoice", "Which can be a sign of chemical change?", ["a new gas, new solid, colour change, heat, light, or odour", "only a change in container shape", "only a material being moved to a new table"], "a new gas, new solid, colour change, heat, light, or odour", "These can be clues that a new substance formed."),
          quizQuestion("Chemical Changes", "Bubbles", "multipleChoice", "Why do bubbles not always prove a chemical change?", ["Boiling water also makes bubbles during a physical change.", "Bubbles can only happen in solids.", "Bubbles mean the matter has no particles."], "Boiling water also makes bubbles during a physical change.", "Bubbles are clues that need context."),
          quizQuestion("Chemical Changes", "Baking", "multipleChoice", "Why can baking dough involve chemical changes?", ["New substances with different properties can form.", "The dough only changes its container.", "The dough simply becomes colder."], "New substances with different properties can form.", "Baking can produce new substances."),
          quizQuestion("Safety", "Investigation", "multipleChoice", "Which safety rule is best for chemical investigations?", ["Use only teacher-approved materials and instructions.", "Taste unknown materials if they look safe.", "Mix extra amounts to make a larger reaction."], "Use only teacher-approved materials and instructions.", "Chemical investigations need careful safety."),
          quizQuestion("Chemical Changes", "True or False", "trueFalse", "A new substance forming is the key idea in a chemical change.", ["True", "False"], "True", "That is the main difference from a physical change."),
          quizQuestion("Chemical Changes", "True or False", "trueFalse", "Every colour change automatically proves a chemical change.", ["True", "False"], "False", "A colour change is a clue, but evidence should be checked.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-3-mixtures-and-solutions",
        title: "Mixtures and Solutions",
        learningGoal: "Students will compare mixtures and solutions and explain what happens when a substance dissolves.",
        successCriteria: [
          "I can describe a mixture.",
          "I can describe a solution as a special kind of mixture.",
          "I can explain that a dissolved substance is still present."
        ],
        vocabulary: ["mixture", "solution", "dissolve", "solute", "solvent", "evenly mixed"],
        teacherSummary: "Students practise distinguishing mixtures from solutions and explaining dissolving.",
        teacherOverview: "Students learn that mixtures contain substances together and that solutions are mixtures with a substance dissolved evenly.",
        christianFocus: "Students practise careful stewardship by using materials thoughtfully and avoiding waste during investigations.",
        lessonContent: [
          "A mixture contains two or more substances together.",
          "A solution is a special kind of mixture where one substance dissolves evenly in another.",
          "The solute is the substance that dissolves. The solvent is the substance that does the dissolving.",
          "Salt water and sugar water are common examples of solutions.",
          "When a substance dissolves, it may become hard to see, but it has not simply disappeared."
        ],
        activityTitle: "Mixtures and Solutions Mission",
        mission: "Practise comparing mixtures, solutions, solutes, and solvents.",
        levels: ["Level 1: Mixture or Solution", "Level 2: Dissolving Details"],
        quizTitle: "Mixtures and Solutions Quiz",
        quizFocus: "Mixtures, solutions, dissolving, solute, solvent, and separation ideas",
        steps: [
          intro("Level 1: Mixture or Solution", "Before You Begin", "Get ready: substances can be combined", "A mixture contains two or more substances together. Some mixtures are easy to see, like trail mix. Other mixtures may look the same throughout."),
          intro("Level 1: Mixture or Solution", "Solutions Are Special Mixtures", "Dissolved evenly", "A solution forms when one substance dissolves evenly in another. In salt water, salt is the solute and water is the solvent."),
          question("Level 1: Mixture or Solution", "Mixture", "Which is the best example of a mixture?", ["sand and small pebbles together", "a single ice cube made of water", "one clean copper wire"], "sand and small pebbles together", "Correct. Sand and pebbles are substances together.", "Look for two or more substances combined."),
          question("Level 1: Mixture or Solution", "Solution", "Which is the best example of a solution?", ["sugar dissolved evenly in water", "dry rice mixed with dry beans", "marbles sorted by colour"], "sugar dissolved evenly in water", "Yes. Sugar water is a solution.", "A solution is mixed evenly after dissolving."),
          question("Level 1: Mixture or Solution", "Not a Solution", "Why is sand mixed with water usually not a solution?", ["The sand does not dissolve evenly in the water.", "The water stops being matter when sand is added.", "The sand becomes invisible after one stir."], "The sand does not dissolve evenly in the water.", "Correct. Sand usually settles instead of dissolving.", "Solutions involve dissolving."),
          question("Level 1: Mixture or Solution", "True or False", "A solution is a kind of mixture.", ["True", "False"], "True", "Correct. A solution is a special mixture.", "Solutions contain substances together."),
          complete("Level 1: Mixture or Solution", "Level 1 Complete", "You practised comparing mixtures and solutions."),
          intro("Level 2: Dissolving Details", "Solute and Solvent", "Name the parts", "The solute is the substance that dissolves. The solvent is the substance that does the dissolving. In most classroom examples, water is the solvent."),
          question("Level 2: Dissolving Details", "Solute", "In salt water, what is the solute?", ["salt", "water", "the glass"], "salt", "Correct. Salt is the substance being dissolved.", "The solute dissolves."),
          question("Level 2: Dissolving Details", "Solvent", "In sugar water, what is the solvent?", ["water", "sugar", "the spoon"], "water", "Yes. Water does the dissolving.", "The solvent is the substance that dissolves another substance."),
          question("Level 2: Dissolving Details", "Still Present", "A student says, 'The salt disappeared when it dissolved.' Which response is most accurate?", ["The salt is still present but spread through the water.", "The salt stopped being matter because it cannot be seen.", "The salt turned into empty space between water particles."], "The salt is still present but spread through the water.", "Correct. Dissolved substances are still present.", "Dissolved does not mean gone."),
          question("Level 2: Dissolving Details", "True or False", "If a substance dissolves, it may be hard to see but it is still part of the solution.", ["True", "False"], "True", "Correct. Dissolved substances are still there.", "Think about tasting salt in salt water, though students should not taste unknown mixtures."),
          complete("Level 2: Dissolving Details", "Mission Complete", "You practised explaining dissolving.")
        ],
        quizQuestions: [
          quizQuestion("Mixtures", "Definition", "multipleChoice", "What is a mixture?", ["two or more substances together", "only one substance with no other material", "a material that has no properties"], "two or more substances together", "A mixture combines substances."),
          quizQuestion("Solutions", "Definition", "multipleChoice", "What is a solution?", ["a mixture where one substance dissolves evenly in another", "a mixture where all parts must be large enough to pick up", "a solid that changes shape but not volume"], "a mixture where one substance dissolves evenly in another", "A solution is an evenly mixed dissolved mixture."),
          quizQuestion("Solutions", "Example", "multipleChoice", "Which is most likely a solution?", ["salt dissolved in water", "sand settled at the bottom of water", "buttons sorted into a jar"], "salt dissolved in water", "Salt water is a solution."),
          quizQuestion("Mixtures", "Not Solution", "multipleChoice", "Why is gravel in water not usually a solution?", ["The gravel does not dissolve evenly.", "The water has no volume after gravel is added.", "The gravel becomes a gas immediately."], "The gravel does not dissolve evenly.", "A solution needs dissolving."),
          quizQuestion("Dissolving", "Solute", "multipleChoice", "What is the solute in sugar water?", ["sugar", "water", "cup"], "sugar", "The solute dissolves."),
          quizQuestion("Dissolving", "Solvent", "multipleChoice", "What is the solvent in salt water?", ["water", "salt", "spoon"], "water", "The solvent does the dissolving."),
          quizQuestion("Dissolving", "True or False", "trueFalse", "A dissolved substance has simply stopped existing.", ["True", "False"], "False", "A dissolved substance is still present."),
          quizQuestion("Solutions", "True or False", "trueFalse", "Solutions are mixtures, but not all mixtures are solutions.", ["True", "False"], "True", "A solution is a special kind of mixture.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-3-separating-mixtures",
        title: "Separating Mixtures Responsibly",
        learningGoal: "Students will choose suitable methods for separating mixtures based on material properties.",
        successCriteria: [
          "I can match separation methods to material properties.",
          "I can explain why filtering, sieving, magnetism, settling, or evaporation may work.",
          "I can choose safe and responsible habits when using materials."
        ],
        vocabulary: ["separate", "filter", "sieve", "evaporate", "settle", "responsible"],
        teacherSummary: "Students practise choosing separation methods and using materials responsibly.",
        teacherOverview: "Students learn that mixtures can often be separated by using differences in properties.",
        christianFocus: "Students connect science choices with stewardship by using materials carefully, avoiding waste, and following safe disposal instructions.",
        lessonContent: [
          "Many mixtures can be separated by using differences in properties.",
          "A magnet can separate magnetic materials from non-magnetic materials.",
          "A sieve or filter can separate materials by particle size or by whether a solid stays behind.",
          "Settling and careful pouring can help separate some mixtures.",
          "Evaporation can help recover a dissolved solid from a solution, but it should be done only with teacher-approved materials.",
          "Responsible science uses small amounts, avoids waste, and follows safety and disposal instructions."
        ],
        activityTitle: "Separate It Safely Mission",
        mission: "Practise choosing safe methods to separate mixtures.",
        levels: ["Level 1: Choose the Method", "Level 2: Explain Responsible Choices"],
        quizTitle: "Separating Mixtures Responsibly Quiz",
        quizFocus: "Separation methods, material properties, safety, stewardship, and responsible disposal",
        steps: [
          intro("Level 1: Choose the Method", "Before You Begin", "Get ready: properties guide the method", "To separate a mixture, look for a property difference. One part might be magnetic, larger, smaller, insoluble, floating, settled, or dissolved."),
          intro("Level 1: Choose the Method", "Common Methods", "Match method to evidence", "Magnets separate magnetic materials. Sieves separate by size. Filters can catch some solids. Evaporation can leave dissolved solids behind after water changes to vapour."),
          question("Level 1: Choose the Method", "Magnetism", "A mixture contains sand and iron filings. Which method is most useful?", ["using a magnet", "waiting for evaporation", "measuring the temperature"], "using a magnet", "Correct. Iron filings are magnetic.", "Use the property that is different."),
          question("Level 1: Choose the Method", "Particle Size", "A mixture contains gravel and fine sand. Which method would likely work best?", ["using a sieve", "using a thermometer", "adding more water until both dissolve"], "using a sieve", "Yes. A sieve can separate by particle size.", "Gravel and fine sand have different sizes."),
          question("Level 1: Choose the Method", "Filtering", "Muddy water contains solid soil particles. Which method may help remove many solids?", ["filtering", "checking magnetism only", "freezing the cup without looking"], "filtering", "Correct. A filter can trap some solid particles.", "Think about solid particles being caught."),
          question("Level 1: Choose the Method", "True or False", "The best separation method depends on the properties of the materials in the mixture.", ["True", "False"], "True", "Correct. Properties guide the method.", "Different mixtures need different methods."),
          complete("Level 1: Choose the Method", "Level 1 Complete", "You practised choosing separation methods."),
          intro("Level 2: Explain Responsible Choices", "Responsible Science", "Use materials wisely", "Good science includes stewardship. Use only the amount needed, keep unknown materials away from mouths and eyes, and follow instructions for cleanup and disposal."),
          question("Level 2: Explain Responsible Choices", "Evaporation", "A teacher wants students to recover salt from salt water. Which method fits the property difference?", ["evaporating the water with approved equipment", "using a magnet on the salt water", "sieving the liquid through a large mesh"], "evaporating the water with approved equipment", "Correct. Evaporation can leave dissolved salt behind.", "The salt is dissolved, so size sorting will not work well."),
          question("Level 2: Explain Responsible Choices", "Settling", "A jar has water and a heavy insoluble solid. After time, the solid sinks. What helped separate it?", ["settling because of differences in how the materials behave in water", "condensation because gas became liquid", "magnetism because all solids are magnetic"], "settling because of differences in how the materials behave in water", "Yes. Settling can separate some insoluble solids.", "The solid sinks instead of dissolving."),
          question("Level 2: Explain Responsible Choices", "Stewardship", "Which choice shows responsible material use?", ["use small amounts and follow cleanup instructions", "pour unknown mixtures down the sink without asking", "mix extra materials to make the investigation look bigger"], "use small amounts and follow cleanup instructions", "Correct. Responsible science avoids waste and follows safety directions.", "Think about safety and stewardship."),
          question("Level 2: Explain Responsible Choices", "True or False", "Students should never taste unknown materials during a separation investigation.", ["True", "False"], "True", "Correct. Unknown materials should not be tasted.", "Safety comes first."),
          complete("Level 2: Explain Responsible Choices", "Mission Complete", "You practised separating mixtures responsibly.")
        ],
        quizQuestions: [
          quizQuestion("Separation", "Magnet", "multipleChoice", "Which method is best for separating iron filings from sand?", ["using a magnet", "evaporating the sand", "measuring the colour of both materials"], "using a magnet", "Iron is magnetic."),
          quizQuestion("Separation", "Sieve", "multipleChoice", "Which method is best for separating gravel from fine sand?", ["using a sieve", "using a magnet only", "condensing water vapour"], "using a sieve", "A sieve separates by particle size."),
          quizQuestion("Separation", "Filter", "multipleChoice", "Which method may help remove solid particles from muddy water?", ["filtering", "folding", "melting"], "filtering", "A filter can catch some solids."),
          quizQuestion("Separation", "Evaporation", "multipleChoice", "How could salt be recovered from salt water with teacher-approved equipment?", ["evaporate the water and leave salt behind", "use a magnet to pull out dissolved salt", "sieve the solution through a large mesh"], "evaporate the water and leave salt behind", "Evaporation can leave dissolved solids behind."),
          quizQuestion("Separation", "Settling", "multipleChoice", "Why might settling help separate a mixture?", ["One solid may sink instead of dissolving.", "Every solution forms a new gas.", "All liquids become magnetic over time."], "One solid may sink instead of dissolving.", "Settling works when materials behave differently in water."),
          quizQuestion("Responsible Science", "Stewardship", "multipleChoice", "Which habit shows responsible science?", ["use small amounts and follow disposal instructions", "throw mixed materials anywhere after testing", "taste materials to find out what they are"], "use small amounts and follow disposal instructions", "Responsible science uses materials wisely."),
          quizQuestion("Separation", "True or False", "trueFalse", "A separation method should be chosen based on material properties.", ["True", "False"], "True", "Properties guide separation methods."),
          quizQuestion("Responsible Science", "True or False", "trueFalse", "Unknown materials should not be tasted during investigations.", ["True", "False"], "True", "Safety comes first.")
        ]
      }),
      {
        id: "grade-5-science-unit-3-final-quiz",
        title: "Unit 3 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherSummary: "The Unit 3 final quiz checks properties of matter, states of matter, changes of state, physical changes, chemical changes, mixtures, solutions, separation methods, and responsible material use.",
        teacherOverview: "Use this quiz after students complete the Properties and Changes of Matter lessons.",
        quiz: {
          title: "Properties and Changes of Matter Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Properties", "Matter", "multipleChoice", "Which statement best describes matter?", ["Anything that has mass and takes up space.", "Only things that are solid and can be held.", "Only objects that are made by people."], "Anything that has mass and takes up space.", "Matter has mass and volume."),
            quizQuestion("Part A: Properties", "Description", "multipleChoice", "Which description uses properties well?", ["The material is rough, flexible, and dark green.", "The material is the best choice because I like it.", "The material probably came from a store."], "The material is rough, flexible, and dark green.", "It uses observable properties."),
            quizQuestion("Part A: Properties", "Solubility", "multipleChoice", "Which property describes whether a substance dissolves?", ["solubility", "magnetism", "transparency"], "solubility", "Solubility is about dissolving."),
            quizQuestion("Part B: States", "Solid", "multipleChoice", "Which statement best describes a solid?", ["It usually keeps its own shape and volume.", "It takes the shape of its container and spreads everywhere.", "It has no particles if it cannot be poured."], "It usually keeps its own shape and volume.", "Solids usually keep shape and volume."),
            quizQuestion("Part B: States", "Liquid", "multipleChoice", "Water is poured from a bottle into a bowl. What usually changes?", ["its shape", "the fact that it has volume", "the substance it is made of"], "its shape", "A liquid takes the shape of its container."),
            quizQuestion("Part B: States", "Gas", "multipleChoice", "Which particle model best fits a gas?", ["particles far apart and moving freely", "particles packed closely in a fixed pattern", "particles close together but sliding slowly"], "particles far apart and moving freely", "Gas particles are farther apart and move freely."),
            quizQuestion("Part C: State Changes", "Melting", "multipleChoice", "Ice becoming liquid water is called...", ["melting", "freezing", "condensation"], "melting", "Melting is solid to liquid."),
            quizQuestion("Part C: State Changes", "Condensation", "multipleChoice", "Water drops forming from cooled water vapour is called...", ["condensation", "dissolving", "sieving"], "condensation", "Condensation is gas to liquid."),
            quizQuestion("Part C: State Changes", "Same Substance", "multipleChoice", "Why is freezing water usually a physical change?", ["The state changes, but the substance is still water.", "Water changes into a new metal.", "Water stops being matter when it freezes."], "The state changes, but the substance is still water.", "The substance remains water."),
            quizQuestion("Part D: Physical Changes", "Cutting", "multipleChoice", "Why is cutting paper usually a physical change?", ["The size and shape change, but the paper remains paper.", "A new substance forms every time paper is cut.", "The paper becomes a gas because it has more edges."], "The size and shape change, but the paper remains paper.", "Cutting changes form, not substance."),
            quizQuestion("Part D: Physical Changes", "Dissolving", "multipleChoice", "What happens when sugar dissolves in water?", ["The sugar is spread through the water but is still present.", "The sugar stops existing because it cannot be seen.", "The water changes the sugar into air."], "The sugar is spread through the water but is still present.", "Dissolved substances are still present."),
            quizQuestion("Part D: Physical Changes", "Reversibility", "multipleChoice", "Which statement about physical changes is correct?", ["A physical change can be hard to reverse and still be physical.", "A physical change always creates a new substance.", "A physical change means matter loses its volume."], "A physical change can be hard to reverse and still be physical.", "Reversibility is not the only clue."),
            quizQuestion("Part E: Chemical Changes", "Definition", "multipleChoice", "What is the key idea in a chemical change?", ["One or more new substances form.", "Matter only moves to a new container.", "The material must become easier to see."], "One or more new substances form.", "Chemical changes form new substances."),
            quizQuestion("Part E: Chemical Changes", "Rust", "multipleChoice", "Which change is chemical?", ["rust forming on iron", "ice melting on a plate", "sand being mixed with pebbles"], "rust forming on iron", "Rust is a new substance."),
            quizQuestion("Part E: Chemical Changes", "Evidence", "multipleChoice", "Why do bubbles not always prove a chemical change?", ["Boiling also makes bubbles during a physical state change.", "Bubbles only happen when matter disappears.", "Bubbles are never useful evidence in science."], "Boiling also makes bubbles during a physical state change.", "Bubbles are clues that need context."),
            quizQuestion("Part F: Mixtures", "Mixture", "multipleChoice", "What is a mixture?", ["two or more substances together", "one substance with no other material", "matter with no measurable properties"], "two or more substances together", "Mixtures contain substances together."),
            quizQuestion("Part F: Mixtures", "Solution", "multipleChoice", "Which example is a solution?", ["salt dissolved evenly in water", "gravel settled in a jar of water", "pencils sorted by length"], "salt dissolved evenly in water", "Salt water is a solution."),
            quizQuestion("Part F: Mixtures", "Solute", "multipleChoice", "In sugar water, what is the solute?", ["sugar", "water", "cup"], "sugar", "The solute is dissolved."),
            quizQuestion("Part G: Separating", "Method", "multipleChoice", "Which method best separates gravel from fine sand?", ["sieving", "condensation", "measuring temperature"], "sieving", "A sieve separates by particle size."),
            quizQuestion("Part G: Separating", "Responsible Science", "multipleChoice", "Which choice shows responsible science?", ["use small amounts and follow cleanup instructions", "taste a mixture if it looks familiar", "pour unknown materials away without asking"], "use small amounts and follow cleanup instructions", "Responsible science includes safety and stewardship.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Properties and Changes of Matter mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each Properties and Changes of Matter lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The unit quiz checks properties, states of matter, changes of state, physical changes, chemical changes, mixtures, solutions, separation methods, safety, and stewardship. Recommended weighting remains 40% lesson quizzes and 60% unit quiz."
    }
  };

  window.PracticeStarUnit["grade-5-science-unit-3"] = unit;
  var library = window.PracticeStarContent.grade5Science;
  library.units = Array.isArray(library.units) ? library.units : [];
  var index = library.units.findIndex(function (item) { return item && item.id === unit.id; });
  if (index >= 0) {
    library.units[index] = unit;
  } else {
    library.units.push(unit);
  }
}());
