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
        "Review missed ideas before assigning the next Human Health and Body Systems lesson."
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
        version: "2026-08-28-science-unit-2-body-systems-1",
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
    id: "grade-5-science-unit-2",
    title: "Human Health and Body Systems",
    strand: "Life Systems",
    unitGoal: "Students will learn how major body systems work together and how wise habits support health, safety, and care for the body.",
    lessons: [
      lesson({
        id: "grade-5-science-unit-2-body-systems-work-together",
        title: "Body Systems Work Together",
        learningGoal: "Students will identify major body systems and explain how systems work together to keep the body alive and active.",
        successCriteria: [
          "I can name major body systems and describe their jobs.",
          "I can explain how two or more systems work together.",
          "I can use evidence from a scenario to decide which systems are involved."
        ],
        vocabulary: ["body system", "organ", "function", "interact", "cell"],
        teacherSummary: "Students practise identifying body systems and explaining how systems interact.",
        teacherOverview: "Students learn that organs and body systems have different jobs, but they work together as one body.",
        christianFocus: "The human body is wonderfully made by God. Students should study it with care, gratitude, and respect.",
        lessonContent: [
          "A body system is a group of organs and tissues that work together to do an important job.",
          "Major body systems include the digestive, respiratory, circulatory, skeletal, muscular, nervous, and excretory systems.",
          "No body system works completely by itself. Systems interact so the whole body can function.",
          "Cells need oxygen, nutrients, water, and waste removal to keep working.",
          "When one system has trouble, other systems may also be affected."
        ],
        activityTitle: "Body Systems Team Mission",
        mission: "Practise matching body systems to their jobs and connections.",
        levels: ["Level 1: System Jobs", "Level 2: Systems Working Together"],
        quizTitle: "Body Systems Work Together Quiz",
        quizFocus: "Major body systems, organ jobs, system interaction, cells, and evidence from scenarios",
        steps: [
          intro("Level 1: System Jobs", "Before You Begin", "Get ready: the body works as one", "Your body is made of many parts with different jobs. A body system is a group of organs and tissues that work together. The systems are different, but they are connected."),
          intro("Level 1: System Jobs", "Know the Main Jobs", "Each system has a role", "The digestive system breaks down food. The respiratory system brings in oxygen. The circulatory system moves materials in the blood. The skeletal and muscular systems help with support and movement. The nervous system sends messages."),
          question("Level 1: System Jobs", "System Match", "Which system moves oxygen, nutrients, and wastes through the body in the blood?", ["circulatory system", "respiratory system", "digestive system"], "circulatory system", "Correct. The circulatory system moves blood through the body.", "Think about which system includes the heart and blood vessels."),
          question("Level 1: System Jobs", "Organ Job", "Which statement best describes the lungs?", ["They help oxygen enter the body and carbon dioxide leave.", "They pump blood to body cells.", "They break food into smaller nutrient pieces."], "They help oxygen enter the body and carbon dioxide leave.", "Yes. The lungs are part of the respiratory system.", "The lungs are linked to breathing."),
          question("Level 1: System Jobs", "Support and Movement", "Which two systems work most directly when you raise your hand?", ["skeletal and muscular systems", "digestive and respiratory systems", "circulatory and excretory systems"], "skeletal and muscular systems", "Correct. Bones support the arm, and muscles move it.", "Movement usually needs bones and muscles."),
          question("Level 1: System Jobs", "True or False", "Body systems have separate jobs, but they also depend on each other.", ["True", "False"], "True", "Correct. The systems are connected.", "Different jobs can still work together."),
          complete("Level 1: System Jobs", "Level 1 Complete", "You practised body system jobs."),
          intro("Level 2: Systems Working Together", "Connections Matter", "Cells need several systems", "Body cells need oxygen and nutrients. They also need wastes carried away. This means the respiratory, digestive, circulatory, and excretory systems all support cells in different ways."),
          question("Level 2: Systems Working Together", "Oxygen Path", "A student breathes in before running. Which systems work together to bring oxygen to leg muscles?", ["respiratory and circulatory systems", "digestive and skeletal systems", "nervous and excretory systems"], "respiratory and circulatory systems", "Correct. The lungs take in oxygen, and blood carries it.", "Oxygen enters through breathing and travels in blood."),
          question("Level 2: Systems Working Together", "Food to Energy", "After lunch, nutrients from food are absorbed and carried to cells. Which systems are most involved?", ["digestive and circulatory systems", "skeletal and muscular systems", "respiratory and nervous systems"], "digestive and circulatory systems", "Yes. Digestion breaks down food, and blood carries nutrients.", "Think about food first, then transport."),
          question("Level 2: Systems Working Together", "Body Response", "A student touches a warm mug and pulls a hand away. Which system quickly sends the message?", ["nervous system", "digestive system", "circulatory system"], "nervous system", "Correct. The nervous system sends fast messages.", "This is about sensing and responding."),
          question("Level 2: Systems Working Together", "True or False", "A healthy body needs systems to interact, not just do separate jobs.", ["True", "False"], "True", "Correct. Interaction keeps the body functioning.", "The whole body works together."),
          complete("Level 2: Systems Working Together", "Mission Complete", "You practised explaining body system connections.")
        ],
        quizQuestions: [
          quizQuestion("Body Systems", "Circulatory", "multipleChoice", "Which system moves materials through the body in blood?", ["circulatory system", "digestive system", "skeletal system"], "circulatory system", "The circulatory system includes the heart, blood, and blood vessels."),
          quizQuestion("Body Systems", "Respiratory", "multipleChoice", "Which organ helps oxygen enter the body?", ["lungs", "stomach", "skull"], "lungs", "The lungs are part of the respiratory system."),
          quizQuestion("Body Systems", "Movement", "multipleChoice", "Which systems work together most directly when a student walks across the room?", ["skeletal and muscular systems", "digestive and excretory systems", "respiratory and digestive systems"], "skeletal and muscular systems", "Bones and muscles work together for movement."),
          quizQuestion("Body Systems", "Interaction", "multipleChoice", "Why do body systems need to interact?", ["Cells need oxygen, nutrients, messages, support, and waste removal.", "Each system can do every body job by itself.", "Organs change systems whenever the body is active."], "Cells need oxygen, nutrients, messages, support, and waste removal.", "Different systems meet different body needs."),
          quizQuestion("Body Systems", "Scenario", "multipleChoice", "A runner breathes faster and the heart beats faster. Which systems are clearly working together?", ["respiratory and circulatory systems", "digestive and skeletal systems", "excretory and muscular systems"], "respiratory and circulatory systems", "Breathing brings oxygen in, and blood moves it."),
          quizQuestion("Body Systems", "Messages", "multipleChoice", "Which system sends messages between the brain and body?", ["nervous system", "circulatory system", "digestive system"], "nervous system", "The nervous system sends and receives messages."),
          quizQuestion("Body Systems", "True or False", "trueFalse", "Organs in a body system work together to do a job.", ["True", "False"], "True", "A body system is made of working parts."),
          quizQuestion("Body Systems", "True or False", "trueFalse", "The digestive system and circulatory system can both be involved after a meal.", ["True", "False"], "True", "Digestion breaks down food, and blood carries nutrients.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-2-digestion-and-nutrients",
        title: "Digestion and Nutrients",
        learningGoal: "Students will describe how digestion breaks food into nutrients and how nutrients support body cells.",
        successCriteria: [
          "I can explain the main job of digestion.",
          "I can identify how nutrients help the body.",
          "I can connect digestion to energy, growth, repair, and body care."
        ],
        vocabulary: ["digestion", "nutrient", "energy", "absorb", "fibre"],
        teacherSummary: "Students practise understanding digestion, nutrients, and healthy food choices without personal food tracking.",
        teacherOverview: "Students learn that digestion breaks down food and that nutrients support body energy, growth, and repair.",
        christianFocus: "Food is part of God's provision. Students can learn wise habits without judging people by what they eat.",
        lessonContent: [
          "Digestion breaks food into smaller parts that the body can use.",
          "Nutrients include carbohydrates, proteins, fats, vitamins, minerals, water, and fibre.",
          "Different nutrients support different needs such as energy, growth, repair, and healthy body processes.",
          "The small intestine absorbs many nutrients into the blood.",
          "Wise food choices over time can support health, but one snack or meal does not tell a person's whole health story."
        ],
        activityTitle: "Digestion and Nutrients Mission",
        mission: "Practise explaining how food is broken down and used by the body.",
        levels: ["Level 1: Digestion Jobs", "Level 2: Nutrient Choices"],
        quizTitle: "Digestion and Nutrients Quiz",
        quizFocus: "Digestive organs, nutrient jobs, absorption, energy, fibre, and balanced choices",
        steps: [
          intro("Level 1: Digestion Jobs", "Before You Begin", "Get ready: food must be broken down", "Food cannot help body cells until it is broken into usable parts. Digestion uses chewing, stomach mixing, and chemical changes to break food down."),
          intro("Level 1: Digestion Jobs", "From Food to Nutrients", "Absorption matters", "After food is broken down, many nutrients are absorbed through the small intestine into the blood. Then the circulatory system carries them where they are needed."),
          question("Level 1: Digestion Jobs", "Main Job", "What is the main job of the digestive system?", ["break food into parts the body can use", "move oxygen from the lungs to cells", "send messages from the brain to muscles"], "break food into parts the body can use", "Correct. Digestion breaks food into usable parts.", "Think about what happens to food."),
          question("Level 1: Digestion Jobs", "Organ Role", "Which organ mixes food with digestive juices after it is swallowed?", ["stomach", "heart", "lungs"], "stomach", "Yes. The stomach mixes food during digestion.", "Food goes to this organ after the esophagus."),
          question("Level 1: Digestion Jobs", "Absorption", "Why is the small intestine important?", ["Many nutrients are absorbed there into the blood.", "It pumps blood through arteries.", "It protects the brain from injury."], "Many nutrients are absorbed there into the blood.", "Correct. Absorption is a key job of the small intestine.", "Think about nutrients entering the blood."),
          question("Level 1: Digestion Jobs", "True or False", "Digestion and circulation can work together after a meal.", ["True", "False"], "True", "Correct. Digestion breaks food down, and blood carries nutrients.", "Food and transport connect."),
          complete("Level 1: Digestion Jobs", "Level 1 Complete", "You practised digestion jobs."),
          intro("Level 2: Nutrient Choices", "Different Nutrients Help Different Ways", "The body needs variety", "Nutrients do different jobs. Carbohydrates can provide energy. Protein helps growth and repair. Vitamins and minerals support body processes. Water helps many body systems work."),
          question("Level 2: Nutrient Choices", "Energy", "Which nutrient group is often a main source of quick energy for the body?", ["carbohydrates", "minerals", "water"], "carbohydrates", "Correct. Carbohydrates often provide energy.", "Bread, rice, fruit, and potatoes contain carbohydrates."),
          question("Level 2: Nutrient Choices", "Growth and Repair", "Why does the body need protein?", ["to help build and repair body tissues", "to replace the job of drinking water", "to make bones bend like muscles"], "to help build and repair body tissues", "Yes. Protein supports growth and repair.", "Think about building and fixing tissues."),
          question("Level 2: Nutrient Choices", "Fibre", "Which choice best explains fibre?", ["It helps food move through the digestive system.", "It carries oxygen in red blood cells.", "It sends nerve messages from the spinal cord."], "It helps food move through the digestive system.", "Correct. Fibre supports digestion.", "Fibre is connected to digestion."),
          question("Level 2: Nutrient Choices", "True or False", "A balanced eating pattern includes different kinds of nutrients over time.", ["True", "False"], "True", "Correct. Variety helps meet body needs.", "One food cannot provide every need."),
          complete("Level 2: Nutrient Choices", "Mission Complete", "You practised connecting nutrients to body needs.")
        ],
        quizQuestions: [
          quizQuestion("Digestion", "Main Job", "multipleChoice", "What does digestion do?", ["breaks food into usable parts", "moves air through the lungs", "protects the spinal cord"], "breaks food into usable parts", "Digestion helps the body use food."),
          quizQuestion("Digestion", "Stomach", "multipleChoice", "Which organ mixes food after it is swallowed?", ["stomach", "heart", "kidney"], "stomach", "The stomach mixes food with digestive juices."),
          quizQuestion("Digestion", "Small Intestine", "multipleChoice", "Why is the small intestine important?", ["It absorbs many nutrients into the blood.", "It controls the heartbeat.", "It moves bones at joints."], "It absorbs many nutrients into the blood.", "Many nutrients enter the blood there."),
          quizQuestion("Nutrients", "Energy", "multipleChoice", "Which nutrient group often gives the body energy?", ["carbohydrates", "bones", "nerves"], "carbohydrates", "Carbohydrates are a common energy source."),
          quizQuestion("Nutrients", "Protein", "multipleChoice", "Protein helps the body mainly by...", ["supporting growth and repair", "bringing oxygen into the lungs", "filtering light through the eyes"], "supporting growth and repair", "Protein helps build and repair tissues."),
          quizQuestion("Nutrients", "Water", "multipleChoice", "Why does the body need water?", ["Many body processes depend on it.", "It becomes oxygen in the lungs.", "It replaces all other nutrients."], "Many body processes depend on it.", "Water supports many systems."),
          quizQuestion("Nutrients", "True or False", "trueFalse", "The digestive and circulatory systems work together when nutrients enter the blood.", ["True", "False"], "True", "Nutrients are carried in blood."),
          quizQuestion("Nutrients", "True or False", "trueFalse", "One food choice tells everything about a person's health.", ["True", "False"], "False", "Health is supported by many habits over time.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-2-breathing-blood-and-heart",
        title: "Breathing, Blood, and the Heart",
        learningGoal: "Students will explain how the respiratory and circulatory systems work together to move oxygen and carbon dioxide.",
        successCriteria: [
          "I can describe the job of the respiratory system.",
          "I can describe the job of the heart, blood, and blood vessels.",
          "I can explain how oxygen and carbon dioxide move through the body."
        ],
        vocabulary: ["respiratory system", "circulatory system", "oxygen", "carbon dioxide", "blood vessel"],
        teacherSummary: "Students practise connecting breathing, blood flow, oxygen movement, and carbon dioxide removal.",
        teacherOverview: "Students learn how the lungs, heart, blood, and blood vessels work together to support cells.",
        christianFocus: "Breathing and heartbeat remind students that life is a precious gift and the body should be treated with care.",
        lessonContent: [
          "The respiratory system brings oxygen into the body and removes carbon dioxide.",
          "The lungs are the main organs of the respiratory system.",
          "The circulatory system includes the heart, blood, and blood vessels.",
          "Blood carries oxygen and nutrients to cells and carries wastes away.",
          "During exercise, breathing and heart rate may increase because cells need more oxygen and produce more carbon dioxide."
        ],
        activityTitle: "Oxygen Delivery Mission",
        mission: "Practise tracing how breathing and blood flow help body cells.",
        levels: ["Level 1: Breathing and Blood", "Level 2: Changing Body Needs"],
        quizTitle: "Breathing, Blood, and the Heart Quiz",
        quizFocus: "Respiratory system, circulatory system, oxygen, carbon dioxide, heart rate, and exercise",
        steps: [
          intro("Level 1: Breathing and Blood", "Before You Begin", "Get ready: oxygen has a path", "When you breathe in, oxygen enters the lungs. From there, oxygen moves into the blood. The heart pumps blood so oxygen can reach body cells."),
          intro("Level 1: Breathing and Blood", "Carbon Dioxide Leaves", "The path works both ways", "Cells use oxygen and give off carbon dioxide. Blood carries carbon dioxide back to the lungs, and the respiratory system removes it when you breathe out."),
          question("Level 1: Breathing and Blood", "Respiratory Job", "What is one main job of the respiratory system?", ["bring oxygen into the body", "break food into nutrients", "hold bones together at joints"], "bring oxygen into the body", "Correct. Breathing brings oxygen into the body.", "The respiratory system is linked to lungs and breathing."),
          question("Level 1: Breathing and Blood", "Circulatory Job", "What is one main job of the circulatory system?", ["move blood through the body", "digest protein in the stomach", "sense heat through the skin"], "move blood through the body", "Yes. The heart pumps blood through blood vessels.", "Think about the heart and blood."),
          question("Level 1: Breathing and Blood", "Oxygen Delivery", "Which order best shows oxygen reaching body cells?", ["lungs, blood, heart, body cells", "stomach, bones, blood, lungs", "brain, stomach, muscles, skin"], "lungs, blood, heart, body cells", "Correct. Oxygen enters at the lungs and travels in blood.", "Start with breathing in."),
          question("Level 1: Breathing and Blood", "True or False", "Blood can carry both useful materials and wastes.", ["True", "False"], "True", "Correct. Blood carries oxygen and nutrients, and it helps carry wastes away.", "Blood is a transport system."),
          complete("Level 1: Breathing and Blood", "Level 1 Complete", "You practised breathing and blood flow."),
          intro("Level 2: Changing Body Needs", "Activity Changes Demand", "Cells need more during movement", "When muscles work harder, they need more oxygen and nutrients. They also produce more carbon dioxide. Breathing and heart rate often change to meet that need."),
          question("Level 2: Changing Body Needs", "Exercise", "Why might breathing become faster during a long run?", ["Working muscles need more oxygen and must get rid of more carbon dioxide.", "The stomach needs extra time to absorb fibre.", "Bones need to make new blood vessels quickly."], "Working muscles need more oxygen and must get rid of more carbon dioxide.", "Correct. Breathing changes when cells need more gas exchange.", "Think about active muscles."),
          question("Level 2: Changing Body Needs", "Heart Rate", "Why might the heart beat faster during exercise?", ["to move blood more quickly to and from active muscles", "to make air enter the stomach more quickly", "to stop bones from bending at joints"], "to move blood more quickly to and from active muscles", "Yes. Faster blood flow can help meet increased needs.", "The heart pumps blood."),
          question("Level 2: Changing Body Needs", "Carbon Dioxide", "What happens to carbon dioxide made by body cells?", ["Blood carries it to the lungs so it can be breathed out.", "The stomach changes it into nutrients.", "Bones store it until the body rests."], "Blood carries it to the lungs so it can be breathed out.", "Correct. Carbon dioxide is removed through breathing.", "Carbon dioxide leaves through the lungs."),
          question("Level 2: Changing Body Needs", "True or False", "Respiratory and circulatory systems work together to support active muscles.", ["True", "False"], "True", "Correct. Breathing and blood flow work together.", "Oxygen enters through breathing and travels in blood."),
          complete("Level 2: Changing Body Needs", "Mission Complete", "You practised connecting breathing, blood, and body needs.")
        ],
        quizQuestions: [
          quizQuestion("Breathing", "Respiratory", "multipleChoice", "What does the respiratory system do?", ["brings in oxygen and removes carbon dioxide", "breaks food into nutrients", "controls bone shape"], "brings in oxygen and removes carbon dioxide", "That is the gas exchange job."),
          quizQuestion("Breathing", "Lungs", "multipleChoice", "Which organs are central to breathing?", ["lungs", "stomach", "muscles"], "lungs", "The lungs are part of the respiratory system."),
          quizQuestion("Circulation", "Heart", "multipleChoice", "What does the heart do?", ["pumps blood through the body", "stores oxygen inside bones", "digests food in the intestine"], "pumps blood through the body", "The heart pumps blood."),
          quizQuestion("Circulation", "Blood", "multipleChoice", "What does blood carry to body cells?", ["oxygen and nutrients", "light and sound", "bones and muscles"], "oxygen and nutrients", "Blood transports useful materials."),
          quizQuestion("Gas Exchange", "Carbon Dioxide", "multipleChoice", "How does carbon dioxide leave the body?", ["It is carried to the lungs and breathed out.", "It is turned into bones.", "It is stored in the stomach."], "It is carried to the lungs and breathed out.", "Carbon dioxide leaves through breathing."),
          quizQuestion("Exercise", "Heart Rate", "multipleChoice", "Why can heart rate increase during exercise?", ["Active muscles need materials moved more quickly.", "The digestive system stops needing nutrients.", "The nervous system turns into a muscle."], "Active muscles need materials moved more quickly.", "Blood flow supports active muscles."),
          quizQuestion("Breathing", "True or False", "trueFalse", "The respiratory and circulatory systems work together.", ["True", "False"], "True", "Oxygen enters through lungs and travels in blood."),
          quizQuestion("Breathing", "True or False", "trueFalse", "Carbon dioxide is a waste gas made by cells.", ["True", "False"], "True", "Cells produce carbon dioxide.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-2-bones-muscles-and-nerves",
        title: "Bones, Muscles, and Nerves",
        learningGoal: "Students will explain how the skeletal, muscular, and nervous systems support movement, protection, and response.",
        successCriteria: [
          "I can describe jobs of bones, muscles, and nerves.",
          "I can explain how muscles and bones work together at joints.",
          "I can use a scenario to identify nervous system messages."
        ],
        vocabulary: ["skeletal system", "muscular system", "nervous system", "joint", "reflex"],
        teacherSummary: "Students practise connecting bones, muscles, joints, nerves, and body responses.",
        teacherOverview: "Students learn how the skeletal, muscular, and nervous systems work together for support, movement, protection, and response.",
        christianFocus: "Students study the body's design with respect and care, recognizing that each person should be treated with dignity.",
        lessonContent: [
          "The skeletal system supports the body and protects important organs.",
          "Muscles pull on bones to create movement.",
          "Joints are places where bones meet and movement can happen.",
          "The nervous system includes the brain, spinal cord, and nerves.",
          "Nerves carry messages that help the body sense, decide, and respond."
        ],
        activityTitle: "Movement and Messages Mission",
        mission: "Practise explaining how bones, muscles, joints, and nerves work together.",
        levels: ["Level 1: Support and Movement", "Level 2: Messages and Responses"],
        quizTitle: "Bones, Muscles, and Nerves Quiz",
        quizFocus: "Skeleton, muscles, joints, protection, nervous system messages, senses, and responses",
        steps: [
          intro("Level 1: Support and Movement", "Before You Begin", "Get ready: movement needs teamwork", "Your skeleton gives support and shape. Muscles pull on bones to move body parts. Joints allow many movements to happen in controlled ways."),
          intro("Level 1: Support and Movement", "Bones Protect", "Support is not the only job", "Some bones protect important organs. The skull protects the brain, and the ribs help protect the heart and lungs."),
          question("Level 1: Support and Movement", "Skeleton Job", "Which statement best describes one job of the skeletal system?", ["It supports the body and protects some organs.", "It breaks food into nutrients in the stomach.", "It carries oxygen into the lungs."], "It supports the body and protects some organs.", "Correct. Support and protection are skeletal system jobs.", "Think about bones."),
          question("Level 1: Support and Movement", "Muscle Job", "How do muscles help the body move?", ["They pull on bones at joints.", "They pump blood through arteries.", "They absorb nutrients from food."], "They pull on bones at joints.", "Yes. Muscles pull to create movement.", "Muscles and bones work together."),
          question("Level 1: Support and Movement", "Protection", "Which body part is protected by the skull?", ["brain", "stomach", "calf muscle"], "brain", "Correct. The skull protects the brain.", "The skull is the bone structure around the head."),
          question("Level 1: Support and Movement", "True or False", "A joint is a place where two bones meet.", ["True", "False"], "True", "Correct. Joints are places where bones meet.", "Joints help movement happen."),
          complete("Level 1: Support and Movement", "Level 1 Complete", "You practised support, protection, and movement."),
          intro("Level 2: Messages and Responses", "Nerves Carry Messages", "The body senses and responds", "The nervous system sends messages between the brain, spinal cord, and body. These messages help you notice your surroundings, move, and respond."),
          question("Level 2: Messages and Responses", "Nervous System", "Which parts belong to the nervous system?", ["brain, spinal cord, and nerves", "heart, blood, and blood vessels", "stomach, small intestine, and large intestine"], "brain, spinal cord, and nerves", "Correct. These parts send and receive messages.", "Think about messages and control."),
          question("Level 2: Messages and Responses", "Fast Response", "A student touches a hot pan handle and pulls the hand away quickly. Which system helps with this quick response?", ["nervous system", "digestive system", "circulatory system"], "nervous system", "Yes. The nervous system helps the body respond quickly.", "This scenario is about sensing heat and responding."),
          question("Level 2: Messages and Responses", "Coordinated Movement", "Which systems work together when a student catches a ball?", ["nervous, muscular, and skeletal systems", "digestive, excretory, and respiratory systems", "circulatory, digestive, and excretory systems"], "nervous, muscular, and skeletal systems", "Correct. The body senses, decides, and moves.", "Catching needs messages and movement."),
          question("Level 2: Messages and Responses", "True or False", "The nervous system helps the body respond to information from the senses.", ["True", "False"], "True", "Correct. Senses send information through the nervous system.", "The body responds to messages."),
          complete("Level 2: Messages and Responses", "Mission Complete", "You practised movement and nervous system responses.")
        ],
        quizQuestions: [
          quizQuestion("Movement", "Skeleton", "multipleChoice", "Which is a job of the skeletal system?", ["supporting the body and protecting organs", "absorbing nutrients into blood", "bringing air into lungs"], "supporting the body and protecting organs", "Bones provide support and protection."),
          quizQuestion("Movement", "Muscles", "multipleChoice", "How do muscles move body parts?", ["by pulling on bones", "by pumping blood", "by digesting food"], "by pulling on bones", "Muscles pull to create movement."),
          quizQuestion("Movement", "Joints", "multipleChoice", "What is a joint?", ["a place where bones meet", "a tube that carries blood", "a part that absorbs nutrients"], "a place where bones meet", "Joints are where bones meet."),
          quizQuestion("Protection", "Skull", "multipleChoice", "What does the skull protect?", ["brain", "stomach", "lungs"], "brain", "The skull protects the brain."),
          quizQuestion("Messages", "Nervous System", "multipleChoice", "Which parts belong to the nervous system?", ["brain, spinal cord, and nerves", "heart, lungs, and stomach", "bones, joints, and blood"], "brain, spinal cord, and nerves", "These parts send messages."),
          quizQuestion("Messages", "Response", "multipleChoice", "A student hears a whistle and stops running. Which system helps process the sound and response?", ["nervous system", "digestive system", "excretory system"], "nervous system", "The nervous system helps sense and respond."),
          quizQuestion("Messages", "True or False", "trueFalse", "Bones and muscles work together during movement.", ["True", "False"], "True", "Muscles pull on bones."),
          quizQuestion("Messages", "True or False", "trueFalse", "The nervous system sends messages that help the body respond.", ["True", "False"], "True", "Messages help the body respond.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-2-healthy-habits",
        title: "Healthy Habits and Body Care",
        learningGoal: "Students will connect wise health habits with body systems while respecting privacy and individual needs.",
        successCriteria: [
          "I can explain how sleep, movement, nutrition, hygiene, and hydration support body systems.",
          "I can choose general health advice that is safe and respectful.",
          "I can avoid judging a person by one habit, meal, or moment."
        ],
        vocabulary: ["habit", "hydration", "hygiene", "nutrition", "well-being"],
        teacherSummary: "Students practise general health-habit reasoning without personal health disclosure.",
        teacherOverview: "Students learn how general healthy habits support the body while avoiding private personal sharing or judging others.",
        christianFocus: "The body is a gift from God. Students can learn wise care while showing kindness and respect to every person.",
        lessonContent: [
          "Healthy habits can support many body systems over time.",
          "Sleep helps the body rest, grow, repair, learn, and focus.",
          "Movement strengthens muscles, bones, heart, lungs, and coordination.",
          "Hygiene habits, such as handwashing, help reduce the spread of germs.",
          "Health advice should be general, respectful, and safe. Private health questions should go to a parent, guardian, teacher, or health professional."
        ],
        activityTitle: "Body Care Choices Mission",
        mission: "Practise choosing general habits that support body systems wisely and respectfully.",
        levels: ["Level 1: Habits and Systems", "Level 2: Wise and Respectful Choices"],
        quizTitle: "Healthy Habits and Body Care Quiz",
        quizFocus: "Sleep, movement, nutrition, water, hygiene, respectful advice, and privacy",
        steps: [
          intro("Level 1: Habits and Systems", "Before You Begin", "Get ready: habits support systems", "Healthy habits do not make every person the same, but they can support the body over time. Sleep, movement, water, nutrition, and hygiene can help several systems work well."),
          intro("Level 1: Habits and Systems", "Think Generally", "No private sharing needed", "This lesson uses general science examples. Students do not need to share private health details, family routines, medical information, or personal food records."),
          question("Level 1: Habits and Systems", "Sleep", "Why is sleep important for the body?", ["It supports rest, growth, repair, learning, and focus.", "It replaces the need for food and water.", "It makes the digestive system do every body job."], "It supports rest, growth, repair, learning, and focus.", "Correct. Sleep supports many body needs.", "Think about what rest helps the body do."),
          question("Level 1: Habits and Systems", "Movement", "Which statement best connects movement to body systems?", ["Movement can strengthen muscles, bones, heart, lungs, and coordination.", "Movement mainly strengthens muscles but has little effect on breathing.", "Movement supports bones but does not connect much to coordination."], "Movement can strengthen muscles, bones, heart, lungs, and coordination.", "Yes. Movement can support several systems.", "Many systems are involved when the body moves."),
          question("Level 1: Habits and Systems", "Hydration", "Why does the body need water?", ["Water supports many body processes and helps transport materials.", "Water changes directly into protein.", "Water keeps the skeleton from needing joints."], "Water supports many body processes and helps transport materials.", "Correct. Water helps many body systems.", "Water is used throughout the body."),
          question("Level 1: Habits and Systems", "True or False", "Handwashing can help reduce the spread of germs.", ["True", "False"], "True", "Correct. Handwashing is an important hygiene habit.", "Hygiene can help prevent illness."),
          complete("Level 1: Habits and Systems", "Level 1 Complete", "You practised connecting habits to body systems."),
          intro("Level 2: Wise and Respectful Choices", "Respect People", "Health is not for judging", "Good health learning should not be used to embarrass or judge people. A student can learn general habits while remembering that families, bodies, medical needs, and circumstances can be different."),
          question("Level 2: Wise and Respectful Choices", "Respectful Advice", "Which advice is most respectful and useful for a class health poster?", ["Choose water often and ask a trusted adult if you are unsure about health needs.", "Choose a routine that works for one student and use it as the class rule.", "Compare meals to decide which student has the healthiest habits."], "Choose water often and ask a trusted adult if you are unsure about health needs.", "Correct. It is general, safe, and respectful.", "Look for advice that helps without judging."),
          question("Level 2: Wise and Respectful Choices", "Privacy", "Which question should not be required for a class science activity?", ["What private medical condition has your family dealt with?", "Which body system helps move oxygen?", "What general habit can help reduce germs?"], "What private medical condition has your family dealt with?", "Yes. Private medical details should not be required.", "Science class can learn without private health sharing."),
          question("Level 2: Wise and Respectful Choices", "Trusted Help", "A student has a personal health question after a lesson. Which response is best?", ["Ask a parent, guardian, teacher, or health professional for help.", "Compare class notes and decide what the answer must be.", "Ask classmates what they think before telling an adult."], "Ask a parent, guardian, teacher, or health professional for help.", "Correct. Personal health questions need trusted help.", "Personal health questions need care."),
          question("Level 2: Wise and Respectful Choices", "True or False", "General health learning should be respectful and should not require private health details.", ["True", "False"], "True", "Correct. Privacy and respect matter.", "Health learning should be safe."),
          complete("Level 2: Wise and Respectful Choices", "Mission Complete", "You practised wise and respectful body-care choices.")
        ],
        quizQuestions: [
          quizQuestion("Healthy Habits", "Sleep", "multipleChoice", "Which statement about sleep is most accurate?", ["Sleep supports rest, learning, growth, and repair.", "Sleep replaces oxygen during the day.", "Sleep makes bones move without muscles."], "Sleep supports rest, learning, growth, and repair.", "Sleep supports many body needs."),
          quizQuestion("Healthy Habits", "Movement", "multipleChoice", "Which systems can movement support?", ["muscular, skeletal, respiratory, circulatory, and nervous systems", "only the digestive system", "only the skin and hair"], "muscular, skeletal, respiratory, circulatory, and nervous systems", "Movement uses and supports several systems."),
          quizQuestion("Healthy Habits", "Water", "multipleChoice", "Why is water important?", ["It supports many body processes.", "It becomes every nutrient.", "It controls every system by itself."], "It supports many body processes.", "Water has many roles in the body."),
          quizQuestion("Healthy Habits", "Hygiene", "multipleChoice", "Why is handwashing useful?", ["It can reduce the spread of germs.", "It replaces sleep when a student is tired.", "It makes blood carry less oxygen."], "It can reduce the spread of germs.", "Handwashing is a hygiene habit."),
          quizQuestion("Respect", "Advice", "multipleChoice", "Which health advice is best for a general class poster?", ["Choose habits that support your body, and ask a trusted adult when unsure.", "Every student must follow the same private family routine.", "One snack choice shows whether someone is healthy."], "Choose habits that support your body, and ask a trusted adult when unsure.", "It is general and respectful."),
          quizQuestion("Respect", "Privacy", "multipleChoice", "Which question is suitable for class science?", ["Which system helps oxygen travel through the body?", "What medicine does your family use?", "Which private health concern has affected your home?"], "Which system helps oxygen travel through the body?", "It checks science understanding without private details."),
          quizQuestion("Respect", "True or False", "trueFalse", "Health learning should avoid embarrassing or judging people.", ["True", "False"], "True", "Respect matters."),
          quizQuestion("Respect", "True or False", "trueFalse", "Personal health questions should be handled with trusted adults or health professionals.", ["True", "False"], "True", "Personal health needs careful guidance.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-2-prevention-and-wise-choices",
        title: "Prevention and Wise Choices",
        learningGoal: "Students will identify prevention habits and wise choices that reduce risk and support body health.",
        successCriteria: [
          "I can explain how prevention habits can reduce risk.",
          "I can choose safe actions in age-appropriate health and safety scenarios.",
          "I can identify when a trusted adult should be involved."
        ],
        vocabulary: ["prevention", "risk", "germ", "safety", "trusted adult"],
        teacherSummary: "Students practise prevention and safety choices, including illness prevention and trusted adult support.",
        teacherOverview: "Students learn that prevention means taking wise steps before harm or illness happens.",
        christianFocus: "Wise choices show stewardship of the body God has given and care for neighbours who may be affected by our actions.",
        lessonContent: [
          "Prevention means taking wise steps to reduce risk before a problem happens.",
          "Some prevention habits reduce the spread of germs, such as handwashing and staying home when truly sick.",
          "Safety habits reduce the chance of injury during activity, tools, travel, and experiments.",
          "Trusted adults can help when a situation is confusing, unsafe, or personal.",
          "Wise choices can protect both the person making the choice and other people nearby."
        ],
        activityTitle: "Prevention Choices Mission",
        mission: "Practise choosing prevention and safety actions in everyday scenarios.",
        levels: ["Level 1: Reduce Risk", "Level 2: Ask for Help"],
        quizTitle: "Prevention and Wise Choices Quiz",
        quizFocus: "Prevention, germs, safety habits, risk reduction, trusted adults, and care for others",
        steps: [
          intro("Level 1: Reduce Risk", "Before You Begin", "Get ready: prevention happens early", "Prevention means making a wise choice before a problem happens. It does not remove every risk, but it can lower the chance of harm or illness."),
          intro("Level 1: Reduce Risk", "Care for Others", "Choices can affect people nearby", "Health and safety choices often affect more than one person. Washing hands, using tools properly, and following safety instructions can help protect a whole group."),
          question("Level 1: Reduce Risk", "Germs", "Which action helps reduce the spread of germs before snack time?", ["wash hands carefully with soap and water", "check whether the snack package has a label", "move desks so everyone has more space"], "wash hands carefully with soap and water", "Correct. Handwashing can reduce germs.", "Think about hygiene before eating."),
          question("Level 1: Reduce Risk", "Safety Gear", "Why might a helmet be important when cycling?", ["It helps protect the head if a fall happens.", "It makes the bike move with less effort.", "It improves how the legs push the pedals."], "It helps protect the head if a fall happens.", "Yes. Safety gear reduces risk.", "Think about preventing injury."),
          question("Level 1: Reduce Risk", "Science Safety", "A student is not sure whether a material is safe to touch during an investigation. What should the student do?", ["ask the teacher before handling it", "read the label and decide alone", "move it with another tool to save time"], "ask the teacher before handling it", "Correct. Unknown materials need adult guidance.", "Unclear safety instructions require help."),
          question("Level 1: Reduce Risk", "True or False", "Prevention means taking wise steps before a problem happens.", ["True", "False"], "True", "Correct. Prevention happens before the problem when possible.", "Prevention is early action."),
          complete("Level 1: Reduce Risk", "Level 1 Complete", "You practised risk-reducing choices."),
          intro("Level 2: Ask for Help", "Trusted Adults Matter", "Some choices need guidance", "Students do not need to solve every health or safety problem alone. A parent, guardian, teacher, or health professional can help with personal, confusing, or unsafe situations."),
          question("Level 2: Ask for Help", "Personal Health", "A student has a personal question about a symptom that is not part of a class activity. Which choice is best?", ["talk with a parent, guardian, teacher, or health professional", "compare class notes and decide what the symptom means", "ask classmates whether they have heard of the symptom"], "talk with a parent, guardian, teacher, or health professional", "Correct. Personal health questions need trusted help.", "Personal health needs care."),
          question("Level 2: Ask for Help", "Unsafe Situation", "A teammate wants to skip safety instructions during a science task. What is the wisest response?", ["pause and ask the teacher to review the instructions", "continue only with the steps that seem familiar", "let the teammate decide because speed is helpful"], "pause and ask the teacher to review the instructions", "Yes. Safety is worth pausing for.", "Unsafe pressure needs adult support."),
          question("Level 2: Ask for Help", "Careful Information", "Which source is strongest for a personal health question?", ["a trusted adult or health professional", "a comment from an unknown person online", "a short video that does not name its source"], "a trusted adult or health professional", "Correct. Personal health questions need reliable guidance.", "Think about safety and reliability."),
          question("Level 2: Ask for Help", "True or False", "Asking for help can be a wise prevention choice.", ["True", "False"], "True", "Correct. Help can prevent unsafe choices.", "Help is part of safety."),
          complete("Level 2: Ask for Help", "Mission Complete", "You practised prevention and trusted-help choices.")
        ],
        quizQuestions: [
          quizQuestion("Prevention", "Meaning", "multipleChoice", "What does prevention mean?", ["taking wise steps before a problem happens", "waiting until every risk is gone", "choosing the fastest option in a task"], "taking wise steps before a problem happens", "Prevention is early risk reduction."),
          quizQuestion("Prevention", "Germs", "multipleChoice", "Which action can reduce the spread of germs?", ["washing hands before eating", "checking a food label before eating", "wiping crumbs from a desk after eating"], "washing hands before eating", "Handwashing is a prevention habit."),
          quizQuestion("Prevention", "Helmet", "multipleChoice", "Why use a helmet for cycling?", ["to help protect the head during a fall", "to make the bicycle easier to steer", "to help the lungs take in more oxygen"], "to help protect the head during a fall", "A helmet helps reduce injury risk."),
          quizQuestion("Prevention", "Science Safety", "multipleChoice", "What should a student do if a science instruction is unclear?", ["ask the teacher before continuing", "try the step and see what happens", "skip the safety part of the task"], "ask the teacher before continuing", "Asking protects safety."),
          quizQuestion("Trusted Help", "Personal Question", "multipleChoice", "Who should help with a personal health question?", ["a parent, guardian, teacher, or health professional", "a website comment from someone not known to the student", "a classmate who once had a similar question"], "a parent, guardian, teacher, or health professional", "Personal health questions need trusted help."),
          quizQuestion("Trusted Help", "Pressure", "multipleChoice", "A group wants to rush through a safety step. What is the best choice?", ["pause and check with the teacher", "rush only if the materials look familiar", "let the quickest student choose"], "pause and check with the teacher", "Safety comes before speed."),
          quizQuestion("Prevention", "True or False", "trueFalse", "Prevention choices can help protect other people too.", ["True", "False"], "True", "Many safety and health choices affect others."),
          quizQuestion("Prevention", "True or False", "trueFalse", "A careful student can ask for help when a situation feels unsafe or confusing.", ["True", "False"], "True", "Asking for help is wise.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-2-body-systems-case-studies",
        title: "Body Systems Case Studies",
        learningGoal: "Students will use body-system evidence to reason through simple health and activity scenarios.",
        successCriteria: [
          "I can identify which systems are involved in a scenario.",
          "I can explain a body-system connection using evidence.",
          "I can choose a wise next step when a scenario includes safety or health concerns."
        ],
        vocabulary: ["case study", "scenario", "evidence", "interaction", "technology"],
        teacherSummary: "Students practise applying body-system knowledge to case studies and health technology scenarios.",
        teacherOverview: "Students use age-appropriate scenarios to reason about interacting body systems, evidence, and wise choices.",
        christianFocus: "Students learn to apply knowledge with humility, care for the body, and respect for people who may need support or medical technology.",
        lessonContent: [
          "A case study is a short scenario used for careful thinking.",
          "Body-system case studies ask which systems are involved and what evidence supports the answer.",
          "Health technologies can help people observe, protect, or support body systems.",
          "A good explanation connects the scenario details to body-system jobs.",
          "Some scenarios need a trusted adult or health professional instead of a student guess."
        ],
        activityTitle: "Body Systems Case Mission",
        mission: "Practise using evidence to explain body-system scenarios.",
        levels: ["Level 1: Identify the Systems", "Level 2: Explain and Choose Wisely"],
        quizTitle: "Body Systems Case Studies Quiz",
        quizFocus: "Scenario evidence, interacting systems, activity changes, health technology, and wise next steps",
        steps: [
          intro("Level 1: Identify the Systems", "Before You Begin", "Get ready: use clues from the case", "A body-system case study gives clues. Look for breathing, blood flow, movement, digestion, messages, support, waste removal, or safety needs."),
          intro("Level 1: Identify the Systems", "Evidence First", "Do not guess from one word", "A careful explanation uses details from the scenario. If a student is running, the muscular system may be involved, but breathing and blood flow may also matter."),
          question("Level 1: Identify the Systems", "Running Scenario", "During a relay, a student's breathing and heart rate increase. Which systems are most clearly involved?", ["respiratory and circulatory systems", "digestive and skeletal systems", "excretory and digestive systems"], "respiratory and circulatory systems", "Correct. The scenario mentions breathing and heart rate.", "Use the clues in the sentence."),
          question("Level 1: Identify the Systems", "Lunch Scenario", "After lunch, nutrients from food are carried through the blood. Which systems are most clearly connected?", ["digestive and circulatory systems", "nervous and skeletal systems", "muscular and respiratory systems"], "digestive and circulatory systems", "Yes. Food is digested, and nutrients travel in blood.", "Food plus blood gives the clue."),
          question("Level 1: Identify the Systems", "Reaction Scenario", "A student hears the teacher's signal and stops moving. Which systems work together?", ["nervous, muscular, and skeletal systems", "digestive and excretory systems", "circulatory and digestive systems"], "nervous, muscular, and skeletal systems", "Correct. The student senses a signal and changes movement.", "Sensing and movement are both involved."),
          question("Level 1: Identify the Systems", "True or False", "A scenario can involve more than one body system at the same time.", ["True", "False"], "True", "Correct. Many body activities need several systems.", "Body systems interact."),
          complete("Level 1: Identify the Systems", "Level 1 Complete", "You practised identifying systems in scenarios."),
          intro("Level 2: Explain and Choose Wisely", "Explain With Evidence", "Show your thinking", "A strong answer says which systems are involved and why. If a scenario includes an injury, illness, or personal health concern, the wise next step may involve a trusted adult."),
          question("Level 2: Explain and Choose Wisely", "Evidence Explanation", "Which explanation best fits this case: A student climbs stairs and begins breathing faster.", ["Muscles need more oxygen, so breathing and blood flow help meet the need.", "The stomach is absorbing more fibre, so the lungs slow down.", "Bones begin pumping blood, so breathing becomes less important."], "Muscles need more oxygen, so breathing and blood flow help meet the need.", "Correct. It connects movement to oxygen needs.", "Look for systems connected by evidence."),
          question("Level 2: Explain and Choose Wisely", "Health Technology", "Why might a thermometer be useful during a health concern?", ["It measures body temperature, which can be useful information for a trusted adult.", "It tells which nutrients are in a meal.", "It shows how fast blood is moving through every vessel."], "It measures body temperature, which can be useful information for a trusted adult.", "Yes. A thermometer gives information that can help decision-making.", "Think about what the tool actually measures."),
          question("Level 2: Explain and Choose Wisely", "Wise Next Step", "A student feels unwell during class and is unsure what to do. Which next step is best?", ["tell the teacher or another trusted adult", "wait until the end of class before deciding what to do", "compare symptoms with classmates before asking for help"], "tell the teacher or another trusted adult", "Correct. Personal health concerns need trusted help.", "Students should not handle personal health concerns alone."),
          question("Level 2: Explain and Choose Wisely", "True or False", "A good body-system explanation should connect evidence from the case to the system's job.", ["True", "False"], "True", "Correct. Evidence supports the explanation.", "Explain why the system fits."),
          complete("Level 2: Explain and Choose Wisely", "Mission Complete", "You practised explaining body-system case studies.")
        ],
        quizQuestions: [
          quizQuestion("Case Studies", "Running", "multipleChoice", "A student runs across the playground and breathes faster. Which systems are clearly involved?", ["respiratory, circulatory, and muscular systems", "digestive, excretory, and skeletal systems", "nervous, digestive, and excretory systems"], "respiratory, circulatory, and muscular systems", "Running uses muscles and increases oxygen needs."),
          quizQuestion("Case Studies", "Lunch", "multipleChoice", "Nutrients from lunch enter the blood and travel to cells. Which systems are connected?", ["digestive and circulatory systems", "skeletal and nervous systems", "respiratory and muscular systems"], "digestive and circulatory systems", "Digestion and blood transport are connected."),
          quizQuestion("Case Studies", "Reaction", "multipleChoice", "A student sees a ball coming and moves hands to catch it. Which systems are involved?", ["nervous, muscular, and skeletal systems", "digestive and respiratory systems", "circulatory and excretory systems"], "nervous, muscular, and skeletal systems", "Seeing, deciding, and moving are involved."),
          quizQuestion("Case Studies", "Evidence", "multipleChoice", "Which explanation uses evidence well?", ["The heart and lungs are involved because the case mentions faster heartbeat and breathing.", "The stomach is involved because all activities use energy.", "The skeleton is involved because the student is in Grade 5."], "The heart and lungs are involved because the case mentions faster heartbeat and breathing.", "It connects details to systems."),
          quizQuestion("Technology", "Thermometer", "multipleChoice", "What does a thermometer measure?", ["temperature", "oxygen in blood vessels", "nutrients in food"], "temperature", "A thermometer measures temperature."),
          quizQuestion("Wise Choice", "Trusted Adult", "multipleChoice", "What should a student do with a personal health concern at school?", ["tell a teacher or trusted adult", "keep guessing until it goes away", "ask classmates for a diagnosis"], "tell a teacher or trusted adult", "Trusted adults can help."),
          quizQuestion("Case Studies", "True or False", "trueFalse", "A case study can involve several body systems.", ["True", "False"], "True", "Many scenarios involve interacting systems."),
          quizQuestion("Case Studies", "True or False", "trueFalse", "Evidence from the scenario should support the body-system explanation.", ["True", "False"], "True", "Evidence makes the explanation stronger.")
        ]
      }),
      {
        id: "grade-5-science-unit-2-final-quiz",
        title: "Unit 2 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherSummary: "The Unit 2 final quiz checks body systems, digestion, nutrients, breathing, blood flow, movement, healthy habits, prevention, trusted adults, and case-study reasoning.",
        teacherOverview: "Use this quiz after students complete the Human Health and Body Systems lessons.",
        quiz: {
          title: "Human Health and Body Systems Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Body Systems", "System Jobs", "multipleChoice", "Which system moves blood through the body?", ["circulatory system", "digestive system", "skeletal system"], "circulatory system", "The circulatory system moves blood."),
            quizQuestion("Part A: Body Systems", "System Interaction", "multipleChoice", "Why do body systems need to work together?", ["Cells need oxygen, nutrients, messages, support, and waste removal.", "Most systems do similar jobs and can switch roles when needed.", "Organs usually work best when systems stay separate."], "Cells need oxygen, nutrients, messages, support, and waste removal.", "Systems meet different needs."),
            quizQuestion("Part B: Digestion", "Digestive Job", "multipleChoice", "What is the main job of the digestive system?", ["break food into parts the body can use", "send messages between brain and body", "pump blood through vessels"], "break food into parts the body can use", "Digestion breaks down food."),
            quizQuestion("Part B: Digestion", "Absorption", "multipleChoice", "Why is the small intestine important?", ["Many nutrients are absorbed there into the blood.", "It protects the brain from injury.", "It helps air move into the lungs."], "Many nutrients are absorbed there into the blood.", "Absorption is a key job of the small intestine."),
            quizQuestion("Part B: Nutrients", "Protein", "multipleChoice", "Which nutrient job is connected to protein?", ["growth and tissue repair", "moving oxygen into the lungs", "protecting the brain with bone"], "growth and tissue repair", "Protein supports growth and repair."),
            quizQuestion("Part C: Breathing and Blood", "Respiratory", "multipleChoice", "What does the respiratory system do?", ["brings in oxygen and removes carbon dioxide", "absorbs nutrients and fibre", "holds the body upright"], "brings in oxygen and removes carbon dioxide", "Breathing supports gas exchange."),
            quizQuestion("Part C: Breathing and Blood", "Oxygen Path", "multipleChoice", "Which path best shows oxygen reaching cells?", ["lungs, blood, heart, body cells", "stomach, bones, blood, body cells", "kidneys, muscles, lungs, body cells"], "lungs, blood, heart, body cells", "Oxygen enters through lungs and travels in blood."),
            quizQuestion("Part C: Exercise", "Heart Rate", "multipleChoice", "Why can heart rate increase during exercise?", ["Active muscles need materials moved more quickly.", "The stomach stops digesting all food.", "The skeleton begins carrying oxygen by itself."], "Active muscles need materials moved more quickly.", "Blood flow supports active muscles."),
            quizQuestion("Part D: Bones and Muscles", "Skeleton", "multipleChoice", "Which is a job of the skeletal system?", ["supporting the body and protecting organs", "absorbing nutrients into blood", "moving air through the nose"], "supporting the body and protecting organs", "Bones support and protect."),
            quizQuestion("Part D: Bones and Muscles", "Movement", "multipleChoice", "How do muscles help body parts move?", ["They pull on bones at joints.", "They carry carbon dioxide out of the body.", "They break food into vitamins."], "They pull on bones at joints.", "Muscles pull on bones."),
            quizQuestion("Part D: Nervous System", "Messages", "multipleChoice", "Which system sends messages between the brain and body?", ["nervous system", "digestive system", "excretory system"], "nervous system", "The nervous system sends messages."),
            quizQuestion("Part E: Healthy Habits", "Sleep", "multipleChoice", "Which statement about sleep is most accurate?", ["Sleep supports rest, growth, repair, learning, and focus.", "Sleep replaces oxygen and nutrients.", "Sleep makes every body system stop working."], "Sleep supports rest, growth, repair, learning, and focus.", "Sleep supports the body in many ways."),
            quizQuestion("Part E: Healthy Habits", "Movement", "multipleChoice", "Which statement about movement is most accurate?", ["Movement can support muscles, bones, heart, lungs, and coordination.", "Movement only affects one body system.", "Movement prevents the body from needing rest."], "Movement can support muscles, bones, heart, lungs, and coordination.", "Movement connects to several systems."),
            quizQuestion("Part E: Healthy Habits", "Privacy", "multipleChoice", "Which question is suitable for a class science activity?", ["Which system carries oxygen in blood?", "What private health condition has your family faced?", "What medicine does someone in your home use?"], "Which system carries oxygen in blood?", "It checks science without private sharing."),
            quizQuestion("Part F: Prevention", "Meaning", "multipleChoice", "What does prevention mean?", ["taking wise steps before a problem happens", "waiting until a problem has become worse", "choosing a faster option instead of a safer one"], "taking wise steps before a problem happens", "Prevention happens early."),
            quizQuestion("Part F: Prevention", "Safety", "multipleChoice", "What should a student do if science safety instructions are unclear?", ["ask the teacher before continuing", "continue with the parts that seem familiar", "let a classmate decide the next step"], "ask the teacher before continuing", "Safety needs clear instructions."),
            quizQuestion("Part G: Case Studies", "Scenario", "multipleChoice", "A student hears a signal and moves to stop. Which systems are clearly involved?", ["nervous, muscular, and skeletal systems", "digestive and excretory systems", "respiratory and digestive systems"], "nervous, muscular, and skeletal systems", "The student senses, decides, and moves."),
            quizQuestion("Part G: Case Studies", "Technology", "multipleChoice", "What does a thermometer measure?", ["temperature", "mass", "blood speed"], "temperature", "A thermometer measures temperature."),
            quizQuestion("Part H: Review", "True or False", "trueFalse", "Body systems often work together during one activity.", ["True", "False"], "True", "Activities usually involve several systems."),
            quizQuestion("Part H: Review", "True or False", "trueFalse", "A personal health concern should be handled with help from a trusted adult or health professional.", ["True", "False"], "True", "Personal health concerns need trusted help.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Human Health and Body Systems mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each Human Health and Body Systems lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The unit quiz checks major body systems, system interactions, digestion, nutrients, breathing, blood flow, bones, muscles, nerves, healthy habits, prevention, trusted adults, health technology, and case-study reasoning. Recommended weighting remains 40% lesson quizzes and 60% unit quiz."
    }
  };

  window.PracticeStarUnit["grade-5-science-unit-2"] = unit;
  var library = window.PracticeStarContent.grade5Science;
  library.units = Array.isArray(library.units) ? library.units : [];
  var index = library.units.findIndex(function (item) { return item && item.id === unit.id; });
  if (index >= 0) {
    library.units[index] = unit;
  } else {
    library.units.push(unit);
  }
}());
