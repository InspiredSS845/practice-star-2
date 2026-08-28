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
        "Review missed ideas before assigning the next Forces Acting on Structures and Mechanisms lesson."
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
        version: "2026-08-28-science-unit-4-forces-1",
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
    id: "grade-5-science-unit-4",
    title: "Forces Acting on Structures and Mechanisms",
    strand: "Structures and Mechanisms",
    unitGoal: "Students will identify forces, loads, materials, shapes, and design choices that help structures and mechanisms work safely.",
    lessons: [
      lesson({
        id: "grade-5-science-unit-4-structures-and-forces",
        title: "Structures and Forces",
        learningGoal: "Students will identify structures, mechanisms, forces, and loads in everyday examples.",
        successCriteria: [
          "I can tell the difference between a structure and a mechanism.",
          "I can identify pushes, pulls, and loads acting on objects.",
          "I can explain how forces can change motion, shape, or stability."
        ],
        vocabulary: ["structure", "mechanism", "force", "push", "pull", "load"],
        teacherSummary: "Students practise identifying structures, mechanisms, pushes, pulls, and loads.",
        teacherOverview: "Students learn that structures are built to support loads and mechanisms use moving parts to transfer force and motion.",
        christianFocus: "Students can study design with gratitude for the order in God's created world and with care for the people who use structures and mechanisms.",
        lessonContent: [
          "A structure is something made of parts arranged to support a load or hold a shape.",
          "A mechanism is a system with moving parts that transfers force or motion.",
          "A force is a push or a pull.",
          "Forces can change an object's motion, shape, or stability.",
          "A load is a force carried by a structure, such as the weight of people, furniture, wind, snow, or the structure itself."
        ],
        activityTitle: "Structures and Forces Mission",
        mission: "Practise spotting structures, mechanisms, forces, and loads.",
        levels: ["Level 1: Structures and Mechanisms", "Level 2: Forces and Loads"],
        quizTitle: "Structures and Forces Quiz",
        quizFocus: "Structures, mechanisms, pushes, pulls, loads, and everyday force examples",
        steps: [
          intro("Level 1: Structures and Mechanisms", "Before You Begin", "Get ready: built things have jobs", "A structure supports something or holds a shape. A mechanism has moving parts that transfer force or motion. Some objects, such as a bicycle, include both structures and mechanisms."),
          intro("Level 1: Structures and Mechanisms", "Look for the Main Job", "Support or motion?", "To decide whether something is mainly a structure or mechanism, ask what its main job is. A bridge mainly supports loads. A door hinge mainly helps motion happen in a controlled way."),
          question("Level 1: Structures and Mechanisms", "Structure Example", "Which object is mainly a structure?", ["a bridge deck that supports traffic", "a gear train that turns another gear", "a wheel and axle that helps a cart roll"], "a bridge deck that supports traffic", "Correct. A bridge deck is built to support loads.", "Look for the choice whose main job is support."),
          question("Level 1: Structures and Mechanisms", "Mechanism Example", "Which object is mainly a mechanism?", ["a hand-cranked pencil sharpener", "a bookshelf standing against a wall", "a tower holding a sign"], "a hand-cranked pencil sharpener", "Yes. It has moving parts that transfer motion.", "Mechanisms usually include moving parts."),
          question("Level 1: Structures and Mechanisms", "Both at Once", "Why can a bicycle be described as both a structure and a mechanism?", ["Its frame supports the rider, and its moving parts transfer force and motion.", "It is colourful, and colourful objects always have two science jobs.", "It has wheels, so its frame no longer needs to support anything."], "Its frame supports the rider, and its moving parts transfer force and motion.", "Correct. One object can include both support and motion systems.", "Think about the frame and the moving parts."),
          question("Level 1: Structures and Mechanisms", "True or False", "A structure can be designed to hold a shape and support a load.", ["True", "False"], "True", "Correct. Support and shape are key structure ideas.", "A structure is not only a building."),
          complete("Level 1: Structures and Mechanisms", "Level 1 Complete", "You practised sorting structures and mechanisms."),
          intro("Level 2: Forces and Loads", "Forces Are Pushes and Pulls", "Loads are forces too", "A force is a push or pull. A load is a force a structure carries. A shelf carries the load of books, and a bridge carries loads from itself, traffic, wind, and weather."),
          question("Level 2: Forces and Loads", "Push or Pull", "A student closes a drawer by pressing on it. What force is being used?", ["a push", "a pull", "a load with no direction"], "a push", "Correct. Pressing the drawer inward is a push.", "A push moves away from the person applying it."),
          question("Level 2: Forces and Loads", "Load Example", "Which is a load on a classroom chair?", ["a student sitting on it", "the colour of the seat", "the distance from the door"], "a student sitting on it", "Yes. The chair must support the student's weight.", "A load is a force the structure carries."),
          question("Level 2: Forces and Loads", "Force Effect", "A heavy backpack bends a hook slightly downward. What effect did the force have?", ["It changed the hook's shape a little.", "It turned the hook into a mechanism.", "It removed all load from the hook."], "It changed the hook's shape a little.", "Correct. Forces can change shape.", "The hook bent under the load."),
          question("Level 2: Forces and Loads", "True or False", "Wind can act as a load on a tall outdoor structure.", ["True", "False"], "True", "Correct. Wind can push on a structure.", "Loads are not only people or boxes."),
          complete("Level 2: Forces and Loads", "Mission Complete", "You practised identifying forces and loads.")
        ],
        quizQuestions: [
          quizQuestion("Structures", "Definition", "multipleChoice", "What is a structure?", ["parts arranged to support a load or hold a shape", "any object that must include a battery", "a material that cannot bend under any load"], "parts arranged to support a load or hold a shape", "Structures support loads or hold shapes."),
          quizQuestion("Mechanisms", "Definition", "multipleChoice", "What is a mechanism?", ["a system with moving parts that transfers force or motion", "a structure that can never move", "a load that is only caused by weather"], "a system with moving parts that transfers force or motion", "Mechanisms use moving parts."),
          quizQuestion("Forces", "Push Pull", "multipleChoice", "What is a force?", ["a push or pull", "only the weight of an object", "only something caused by machines"], "a push or pull", "A force is a push or pull."),
          quizQuestion("Loads", "Example", "multipleChoice", "Which is a load on a bridge?", ["cars travelling across it", "the name painted on a sign", "the colour of the railing"], "cars travelling across it", "Traffic is a load the bridge carries."),
          quizQuestion("Effects", "Shape", "multipleChoice", "A shelf sags under heavy books. What has the load affected?", ["the shelf's shape", "the meaning of the word shelf", "the fact that the books are books"], "the shelf's shape", "The shelf has bent under the load."),
          quizQuestion("Structures and Mechanisms", "Bicycle", "multipleChoice", "Why can a bicycle include both a structure and mechanisms?", ["The frame supports the rider, and the moving parts transfer motion.", "The wheels are round, so the frame cannot support anything.", "It has many parts, and every object with many parts is a mechanism only."], "The frame supports the rider, and the moving parts transfer motion.", "A bicycle frame supports, while pedals, chain, and wheels move."),
          quizQuestion("Forces", "True or False", "trueFalse", "A force can be a push or a pull.", ["True", "False"], "True", "Forces are pushes or pulls."),
          quizQuestion("Loads", "True or False", "trueFalse", "Wind can be a load on an outdoor structure.", ["True", "False"], "True", "Wind can push against structures.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-4-compression-tension-torsion-shear",
        title: "Compression, Tension, Torsion, and Shear",
        learningGoal: "Students will identify four common types of forces and explain how they affect structures.",
        successCriteria: [
          "I can describe compression, tension, torsion, and shear.",
          "I can match force types to everyday examples.",
          "I can explain why knowing force types helps with safer design."
        ],
        vocabulary: ["compression", "tension", "torsion", "shear", "twist", "stretch"],
        teacherSummary: "Students practise identifying compression, tension, torsion, and shear in everyday examples.",
        teacherOverview: "Students learn that different forces affect structures in different ways and that designers must plan for those forces.",
        christianFocus: "Students connect careful design with loving their neighbours by thinking about safety, reliability, and wise use of materials.",
        lessonContent: [
          "Compression is a squeezing or pressing force.",
          "Tension is a stretching or pulling force.",
          "Torsion is a twisting force.",
          "Shear is a force that pushes parts of a material in opposite directions so they may slide or tear.",
          "A structure may face more than one kind of force at the same time."
        ],
        activityTitle: "Force Types Mission",
        mission: "Practise naming force types in real examples.",
        levels: ["Level 1: Name the Force", "Level 2: Explain the Effect"],
        quizTitle: "Compression, Tension, Torsion, and Shear Quiz",
        quizFocus: "Four force types, examples, effects, and design thinking",
        steps: [
          intro("Level 1: Name the Force", "Before You Begin", "Get ready: forces have different patterns", "Forces do not all act the same way. A force may squeeze, stretch, twist, or make parts slide past each other. Naming the force helps explain what is happening."),
          intro("Level 1: Name the Force", "Four Force Words", "Compression, tension, torsion, shear", "Compression squeezes. Tension stretches. Torsion twists. Shear pushes parts in opposite directions, like when scissors cut paper."),
          question("Level 1: Name the Force", "Compression", "A stack of books presses down on a cardboard box. Which force is the box experiencing?", ["compression", "torsion", "shear"], "compression", "Correct. The box is being squeezed by the load.", "Compression presses or squeezes."),
          question("Level 1: Name the Force", "Tension", "A rope is pulled tight during a tug-of-war. Which force is acting on the rope?", ["tension", "compression", "settling"], "tension", "Yes. Tension stretches or pulls a material.", "Think about the rope being pulled."),
          question("Level 1: Name the Force", "Torsion", "A screwdriver twists a screw into wood. Which force is being applied?", ["torsion", "compression only", "filtering"], "torsion", "Correct. Torsion is a twisting force.", "Look for twisting."),
          question("Level 1: Name the Force", "True or False", "Shear can happen when forces push parts of a material in opposite directions.", ["True", "False"], "True", "Correct. Shear can cause sliding, tearing, or cutting.", "Scissors cutting paper show shear."),
          complete("Level 1: Name the Force", "Level 1 Complete", "You practised naming force types."),
          intro("Level 2: Explain the Effect", "Forces Affect Design", "Designers plan for force", "A safe structure needs to handle the forces it will face. Designers choose materials, shapes, and supports that resist compression, tension, torsion, and shear."),
          question("Level 2: Explain the Effect", "Bridge Cable", "A bridge cable is pulled tight while supporting part of a bridge. Which force is most important in the cable?", ["tension", "compression", "evaporation"], "tension", "Correct. Cables often work well in tension.", "Cables are pulled."),
          question("Level 2: Explain the Effect", "Table Leg", "A table leg supports weight pressing downward from the tabletop. Which force is most likely acting on the leg?", ["compression", "torsion", "magnetism"], "compression", "Yes. The leg is being squeezed by the load.", "Table legs carry downward loads."),
          question("Level 2: Explain the Effect", "Scissors", "Why do scissors show shear force?", ["The blades push material in opposite directions to cut it.", "The handles make paper dissolve.", "The metal changes state when the blades touch."], "The blades push material in opposite directions to cut it.", "Correct. Shear can cut or tear material.", "Think about how the blades pass each other."),
          question("Level 2: Explain the Effect", "True or False", "A real structure can experience more than one type of force at the same time.", ["True", "False"], "True", "Correct. Structures often face several forces at once.", "A bridge may face weight, wind, and movement."),
          complete("Level 2: Explain the Effect", "Mission Complete", "You practised explaining force effects.")
        ],
        quizQuestions: [
          quizQuestion("Force Types", "Compression", "multipleChoice", "Which force squeezes or presses a material?", ["compression", "tension", "torsion"], "compression", "Compression squeezes."),
          quizQuestion("Force Types", "Tension", "multipleChoice", "Which force stretches or pulls a material?", ["tension", "shear", "compression"], "tension", "Tension stretches or pulls."),
          quizQuestion("Force Types", "Torsion", "multipleChoice", "Which force twists a material?", ["torsion", "tension", "settling"], "torsion", "Torsion twists."),
          quizQuestion("Force Types", "Shear", "multipleChoice", "Which example best shows shear?", ["scissors cutting paper", "a table leg being pressed downward", "a rope being pulled tight"], "scissors cutting paper", "Shear can cut or tear as parts move in opposite directions."),
          quizQuestion("Examples", "Cable", "multipleChoice", "A cable pulled tight on a bridge mainly experiences...", ["tension", "compression", "evaporation"], "tension", "Cables are pulled."),
          quizQuestion("Examples", "Column", "multipleChoice", "A column holding up a roof mainly experiences...", ["compression", "magnetism", "dissolving"], "compression", "Columns are pressed by loads."),
          quizQuestion("Design", "True or False", "trueFalse", "Designers should think about the forces a structure will face.", ["True", "False"], "True", "Forces affect safety and strength."),
          quizQuestion("Design", "True or False", "trueFalse", "A structure can face compression and tension at the same time.", ["True", "False"], "True", "Real structures often face several forces.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-4-loads-and-stability",
        title: "Loads and Stability",
        learningGoal: "Students will explain how loads, centre of gravity, base size, and balance affect stability.",
        successCriteria: [
          "I can compare live loads, dead loads, and environmental loads.",
          "I can explain how centre of gravity and base size affect stability.",
          "I can choose design changes that improve stability."
        ],
        vocabulary: ["live load", "dead load", "environmental load", "stability", "base", "centre of gravity"],
        teacherSummary: "Students practise reasoning about loads, balance, centre of gravity, and stability.",
        teacherOverview: "Students learn that stable structures resist tipping, sliding, or collapsing under expected loads.",
        christianFocus: "Students learn that safe design is one way people can serve and protect others.",
        lessonContent: [
          "A dead load is the weight of the structure itself.",
          "A live load is the weight of things added to or moving on a structure, such as people, books, or vehicles.",
          "Environmental loads include wind, rain, snow, ice, and earthquakes.",
          "Stability means a structure resists tipping, sliding, or collapsing.",
          "A lower centre of gravity and a wider base often make a structure more stable."
        ],
        activityTitle: "Stability Mission",
        mission: "Practise identifying loads and choosing ways to improve stability.",
        levels: ["Level 1: Identify Loads", "Level 2: Improve Stability"],
        quizTitle: "Loads and Stability Quiz",
        quizFocus: "Dead loads, live loads, environmental loads, centre of gravity, base size, and stability",
        steps: [
          intro("Level 1: Identify Loads", "Before You Begin", "Get ready: structures carry different loads", "Structures must carry their own weight and other forces added to them. Designers think about expected loads before building."),
          intro("Level 1: Identify Loads", "Three Load Types", "Dead, live, environmental", "Dead load is the structure's own weight. Live load is added weight such as people or vehicles. Environmental load comes from wind, snow, rain, ice, or ground movement."),
          question("Level 1: Identify Loads", "Dead Load", "Which is part of a bridge's dead load?", ["the weight of the bridge materials", "cars crossing during rush hour", "wind pushing from the side"], "the weight of the bridge materials", "Correct. Dead load is the structure's own weight.", "Dead load is built in."),
          question("Level 1: Identify Loads", "Live Load", "Which is a live load on a school floor?", ["students walking across it", "the weight of the floor itself", "wind against the outside wall"], "students walking across it", "Yes. People moving on a structure are live loads.", "Live loads can change."),
          question("Level 1: Identify Loads", "Environmental Load", "Which is an environmental load on a roof?", ["heavy snow after a storm", "the wooden beams in the roof", "a chair placed in the classroom"], "heavy snow after a storm", "Correct. Snow is an environmental load.", "Weather can add loads."),
          question("Level 1: Identify Loads", "True or False", "A safe design should consider loads that may change over time.", ["True", "False"], "True", "Correct. Live and environmental loads can change.", "Think about people, weather, and use."),
          complete("Level 1: Identify Loads", "Level 1 Complete", "You practised identifying load types."),
          intro("Level 2: Improve Stability", "What Makes Structures Stable?", "Balance matters", "A stable structure resists tipping, sliding, or collapsing. A wide base, lower centre of gravity, strong connections, and balanced loads can improve stability."),
          question("Level 2: Improve Stability", "Wider Base", "A tall tower model tips easily. Which change would likely improve stability?", ["widen the base", "make the top heavier", "remove supports from the bottom"], "widen the base", "Correct. A wider base can improve stability.", "A broad base helps resist tipping."),
          question("Level 2: Improve Stability", "Centre of Gravity", "Why can placing heavy parts lower make a structure more stable?", ["It lowers the centre of gravity.", "It removes all environmental loads.", "It changes tension into dissolving."], "It lowers the centre of gravity.", "Yes. A lower centre of gravity often improves stability.", "Think about balance."),
          question("Level 2: Improve Stability", "Balanced Load", "A shelf has all heavy books on one far end. What is a reasonable improvement?", ["spread the load more evenly if the shelf is designed for it", "add more heavy books to the same end", "ignore it because loads cannot affect stability"], "spread the load more evenly if the shelf is designed for it", "Correct. Better load distribution can improve stability.", "Uneven loads can matter."),
          question("Level 2: Improve Stability", "True or False", "A structure can be strong in one situation but unstable if the load changes.", ["True", "False"], "True", "Correct. Load conditions affect stability.", "A structure must match the load it faces."),
          complete("Level 2: Improve Stability", "Mission Complete", "You practised improving stability.")
        ],
        quizQuestions: [
          quizQuestion("Loads", "Dead Load", "multipleChoice", "What is a dead load?", ["the weight of the structure itself", "people moving across a structure", "wind pushing against a structure"], "the weight of the structure itself", "Dead load is built-in weight."),
          quizQuestion("Loads", "Live Load", "multipleChoice", "Which is a live load on a bridge?", ["a truck crossing it", "the concrete in the bridge deck", "snow resting on the bridge overnight"], "a truck crossing it", "Vehicles are live loads."),
          quizQuestion("Loads", "Environmental Load", "multipleChoice", "Which is an environmental load?", ["wind pushing against a tower", "the tower's own metal frame", "a person climbing indoor stairs"], "wind pushing against a tower", "Wind is an environmental load."),
          quizQuestion("Stability", "Meaning", "multipleChoice", "What does stability mean?", ["resisting tipping, sliding, or collapsing", "having the tallest possible shape", "using only one type of material"], "resisting tipping, sliding, or collapsing", "Stable structures resist unwanted movement or failure."),
          quizQuestion("Stability", "Base", "multipleChoice", "Which change often makes a tower model more stable?", ["a wider base", "a heavier top", "a smaller bottom support"], "a wider base", "A wider base can resist tipping."),
          quizQuestion("Stability", "Centre of Gravity", "multipleChoice", "Why can a lower centre of gravity improve stability?", ["The structure is less likely to tip.", "The structure no longer has dead load.", "The structure cannot be affected by wind."], "The structure is less likely to tip.", "A lower centre of gravity helps with balance."),
          quizQuestion("Loads", "True or False", "trueFalse", "Live loads can change while a structure is being used.", ["True", "False"], "True", "People, vehicles, and movable objects can change."),
          quizQuestion("Stability", "True or False", "trueFalse", "A safe design should consider likely loads before the structure is used.", ["True", "False"], "True", "Designers plan for loads.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-4-materials-shapes-and-strength",
        title: "Materials, Shapes, and Strength",
        learningGoal: "Students will explain how materials, shapes, and bracing can make structures stronger or more stable.",
        successCriteria: [
          "I can compare materials by useful properties for structure design.",
          "I can explain how shapes such as triangles, arches, and tubes can add strength.",
          "I can choose design improvements using evidence from a test."
        ],
        vocabulary: ["material", "strength", "brace", "triangle", "arch", "beam"],
        teacherSummary: "Students practise connecting material properties, shapes, and bracing to structure strength.",
        teacherOverview: "Students learn that structures are not made stronger only by adding more material; shape and arrangement matter too.",
        christianFocus: "Students consider wise stewardship by choosing materials thoughtfully instead of wasting them.",
        lessonContent: [
          "Materials have properties that affect how they perform in structures.",
          "Strong structures often use shapes that spread forces well.",
          "Triangles are often used because they resist changing shape.",
          "Arches can spread loads outward and downward.",
          "Tubes, folded shapes, and bracing can add strength without simply using much more material.",
          "A good design uses evidence from testing to improve the structure."
        ],
        activityTitle: "Shape and Strength Mission",
        mission: "Practise choosing materials, shapes, and supports for stronger structures.",
        levels: ["Level 1: Materials and Properties", "Level 2: Shapes and Bracing"],
        quizTitle: "Materials, Shapes, and Strength Quiz",
        quizFocus: "Material properties, triangles, arches, tubes, bracing, strength, and testing evidence",
        steps: [
          intro("Level 1: Materials and Properties", "Before You Begin", "Get ready: material choices matter", "Different materials have different properties. A designer may think about strength, flexibility, mass, cost, water resistance, and how safely the material can be used."),
          intro("Level 1: Materials and Properties", "Strength Is Not the Only Property", "Choose for the job", "A material that is good for one structure may not be best for another. A bridge, umbrella, desk, and tent each need materials with different properties."),
          question("Level 1: Materials and Properties", "Bridge Material", "A model bridge bends too much under a load. Which material property should the designer consider first?", ["stiffness and strength under load", "whether the material is the brightest colour", "whether the material floats in a cup"], "stiffness and strength under load", "Correct. The bridge needs to resist bending under load.", "Think about the problem shown in the test."),
          question("Level 1: Materials and Properties", "Water Resistance", "A structure will be used outdoors in rain. Which property may matter?", ["water resistance", "how loudly it falls", "whether it tastes salty"], "water resistance", "Yes. Rain can affect material choice.", "Outdoor use adds weather concerns."),
          question("Level 1: Materials and Properties", "Wise Use", "Why should a designer avoid using far more material than needed?", ["It may waste resources without improving the design much.", "More material always makes every structure safer.", "Using extra material removes the need for testing."], "It may waste resources without improving the design much.", "Correct. Wise design balances strength, safety, and resource use.", "Stewardship means using resources carefully."),
          question("Level 1: Materials and Properties", "True or False", "A material should be chosen based on the job the structure needs to do.", ["True", "False"], "True", "Correct. Materials should fit the design problem.", "Different jobs need different properties."),
          complete("Level 1: Materials and Properties", "Level 1 Complete", "You practised choosing materials by properties."),
          intro("Level 2: Shapes and Bracing", "Shape Can Add Strength", "Arrangement matters", "A structure's shape can help it carry loads. Triangles often resist changing shape. Arches spread loads. Braces can stop parts from bending or leaning too far."),
          question("Level 2: Shapes and Bracing", "Triangle Brace", "A rectangular frame wobbles side to side. Which change would likely help?", ["add a diagonal brace to make triangles", "paint the frame a darker colour", "remove one corner connection"], "add a diagonal brace to make triangles", "Correct. Diagonal bracing can reduce wobbling.", "Triangles resist changing shape."),
          question("Level 2: Shapes and Bracing", "Arch", "Why can an arch be useful in a structure?", ["It helps spread a load outward and downward.", "It removes all forces from the structure.", "It works only when no load is present."], "It helps spread a load outward and downward.", "Yes. An arch spreads forces.", "Think about how the load travels through the shape."),
          question("Level 2: Shapes and Bracing", "Testing Evidence", "A student tests two paper beams. One folded beam holds more washers than a flat sheet. What does the evidence suggest?", ["Folding changed the shape in a way that improved strength.", "The washers became lighter during the second test.", "Flat paper is not matter if it cannot hold a load."], "Folding changed the shape in a way that improved strength.", "Correct. Shape can affect strength.", "The material may be the same, but the shape changed."),
          question("Level 2: Shapes and Bracing", "True or False", "Adding braces can help a structure resist bending or leaning.", ["True", "False"], "True", "Correct. Bracing can strengthen a structure.", "Braces support parts of a frame."),
          complete("Level 2: Shapes and Bracing", "Mission Complete", "You practised using shapes and bracing to improve structures.")
        ],
        quizQuestions: [
          quizQuestion("Materials", "Properties", "multipleChoice", "Which property is important for a bridge material?", ["strength under load", "whether everyone likes its colour", "whether it is stored near scissors"], "strength under load", "Bridge materials must carry loads."),
          quizQuestion("Materials", "Outdoor Use", "multipleChoice", "Which property may matter for an outdoor structure?", ["water resistance", "how sweet it smells", "whether it dissolves instantly"], "water resistance", "Rain and moisture can affect materials."),
          quizQuestion("Stewardship", "Material Use", "multipleChoice", "Why should designers avoid wasting materials?", ["Resources should be used wisely while still meeting safety needs.", "Less planning always makes structures stronger.", "Testing is unnecessary if extra material is added."], "Resources should be used wisely while still meeting safety needs.", "Good design considers stewardship and safety."),
          quizQuestion("Shapes", "Triangles", "multipleChoice", "Why are triangles often used in structures?", ["They resist changing shape.", "They remove all live loads.", "They turn every force into magnetism."], "They resist changing shape.", "Triangles are strong shapes for frames."),
          quizQuestion("Shapes", "Arches", "multipleChoice", "How can an arch help a structure?", ["It spreads a load outward and downward.", "It makes the structure have no dead load.", "It keeps all force in one tiny point."], "It spreads a load outward and downward.", "Arches spread forces."),
          quizQuestion("Shapes", "Bracing", "multipleChoice", "A frame wobbles. Which change is most likely to help?", ["add diagonal bracing", "remove one support", "place all weight on one side"], "add diagonal bracing", "Bracing can reduce wobbling."),
          quizQuestion("Testing", "True or False", "trueFalse", "A change in shape can make the same material stronger in a structure.", ["True", "False"], "True", "Shape affects strength."),
          quizQuestion("Materials", "True or False", "trueFalse", "The best material depends on the structure's purpose and conditions.", ["True", "False"], "True", "Designers choose materials for the job.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-4-mechanisms-and-motion",
        title: "Mechanisms and Motion",
        learningGoal: "Students will explain how simple mechanisms transfer force and motion to do useful work.",
        successCriteria: [
          "I can identify simple mechanisms in everyday objects.",
          "I can explain how a mechanism changes or transfers motion.",
          "I can connect mechanism design to safety and usefulness."
        ],
        vocabulary: ["mechanism", "motion", "lever", "wheel and axle", "gear", "pulley"],
        teacherSummary: "Students practise identifying mechanisms and explaining how they transfer force and motion.",
        teacherOverview: "Students learn that mechanisms use moving parts to make tasks easier, change direction, change speed, or transfer motion.",
        christianFocus: "Students can think about technology as a tool that should be designed and used to serve people wisely.",
        lessonContent: [
          "A mechanism has moving parts that transfer force or motion.",
          "Levers, wheels and axles, gears, pulleys, hinges, and ramps are common mechanism examples.",
          "A mechanism may change the direction of a force, change speed, or make a task easier.",
          "Mechanisms need safe design because moving parts can pinch, slip, or break.",
          "Useful technology should solve real problems without ignoring safety."
        ],
        activityTitle: "Mechanisms and Motion Mission",
        mission: "Practise explaining how mechanisms transfer force and motion.",
        levels: ["Level 1: Identify Mechanisms", "Level 2: Explain Motion"],
        quizTitle: "Mechanisms and Motion Quiz",
        quizFocus: "Levers, wheels and axles, gears, pulleys, hinges, ramps, motion transfer, and safety",
        steps: [
          intro("Level 1: Identify Mechanisms", "Before You Begin", "Get ready: moving parts have jobs", "A mechanism uses moving parts to transfer force or motion. Mechanisms are found in scissors, bicycles, door hinges, can openers, clocks, and many machines."),
          intro("Level 1: Identify Mechanisms", "Simple Mechanisms", "Know common examples", "Levers, wheels and axles, gears, pulleys, hinges, and ramps can help people move loads, change direction, or make work easier."),
          question("Level 1: Identify Mechanisms", "Lever", "Which object uses a lever?", ["a seesaw lifting one side as the other side goes down", "a plain brick wall holding its shape", "a glass window that does not open"], "a seesaw lifting one side as the other side goes down", "Correct. A seesaw is a lever.", "A lever pivots around a point."),
          question("Level 1: Identify Mechanisms", "Wheel and Axle", "Which example uses a wheel and axle?", ["a doorknob turning a spindle", "a fixed shelf holding books", "a paper tower standing still"], "a doorknob turning a spindle", "Yes. A doorknob uses wheel-and-axle motion.", "Look for round turning parts."),
          question("Level 1: Identify Mechanisms", "Gears", "Why are gears useful in some mechanisms?", ["They can transfer turning motion between parts.", "They make a structure support loads without materials.", "They dissolve when force is added."], "They can transfer turning motion between parts.", "Correct. Gears transfer turning motion.", "Gears have teeth that mesh."),
          question("Level 1: Identify Mechanisms", "True or False", "A mechanism must have some part that moves.", ["True", "False"], "True", "Correct. Mechanisms transfer force or motion through moving parts.", "Moving parts are key."),
          complete("Level 1: Identify Mechanisms", "Level 1 Complete", "You practised identifying mechanisms."),
          intro("Level 2: Explain Motion", "Motion Can Change", "Direction, speed, or effort", "Mechanisms can change the direction of motion, transfer motion from one part to another, or make a task require less effort. Safe mechanisms also control motion so people are protected."),
          question("Level 2: Explain Motion", "Pulley", "How can a pulley help lift a flag?", ["It changes the direction of the pulling force.", "It makes the flag have no weight.", "It changes the rope into a solid beam."], "It changes the direction of the pulling force.", "Correct. Pulling down on the rope can lift the flag up.", "Think about direction."),
          question("Level 2: Explain Motion", "Ramp", "Why can a ramp help move a load upward?", ["It spreads the lifting over a longer distance.", "It removes the force of gravity completely.", "It turns the load into a gas."], "It spreads the lifting over a longer distance.", "Yes. A ramp can reduce effort by increasing distance.", "A ramp is an inclined plane."),
          question("Level 2: Explain Motion", "Safety", "Why should moving parts be designed carefully?", ["They can pinch, slip, jam, or break if used poorly.", "Moving parts never affect safety.", "Fast-moving parts always make a mechanism safer."], "They can pinch, slip, jam, or break if used poorly.", "Correct. Mechanism design must include safety.", "Think about fingers, loads, and control."),
          question("Level 2: Explain Motion", "True or False", "A useful mechanism should solve a problem while still being safe to use.", ["True", "False"], "True", "Correct. Usefulness and safety both matter.", "Good design serves people."),
          complete("Level 2: Explain Motion", "Mission Complete", "You practised explaining mechanisms and motion.")
        ],
        quizQuestions: [
          quizQuestion("Mechanisms", "Definition", "multipleChoice", "What does a mechanism do?", ["transfers force or motion using moving parts", "supports a load only by standing still", "measures weather without any movement"], "transfers force or motion using moving parts", "Mechanisms involve moving parts."),
          quizQuestion("Mechanisms", "Lever", "multipleChoice", "Which example is a lever?", ["a seesaw", "a solid wall", "a still tabletop"], "a seesaw", "A seesaw pivots like a lever."),
          quizQuestion("Mechanisms", "Wheel and Axle", "multipleChoice", "Which object uses a wheel and axle?", ["a doorknob", "a flat sheet of paper", "a brick tower"], "a doorknob", "A doorknob turns around an axle."),
          quizQuestion("Mechanisms", "Gears", "multipleChoice", "What can gears transfer?", ["turning motion", "only water pressure", "only dead loads"], "turning motion", "Gears transfer rotation."),
          quizQuestion("Mechanisms", "Pulley", "multipleChoice", "How can a pulley help raise a flag?", ["It changes the direction of the pulling force.", "It removes all weight from the flag.", "It makes the rope rigid like a beam."], "It changes the direction of the pulling force.", "A pulley redirects force."),
          quizQuestion("Mechanisms", "Ramp", "multipleChoice", "Why can a ramp help move something upward?", ["It spreads the work over a longer distance.", "It makes gravity stop acting on the load.", "It turns sliding into dissolving."], "It spreads the work over a longer distance.", "A ramp can make lifting easier by increasing distance."),
          quizQuestion("Safety", "True or False", "trueFalse", "Moving parts can create safety concerns if they pinch, jam, or break.", ["True", "False"], "True", "Moving parts need careful design."),
          quizQuestion("Mechanisms", "True or False", "trueFalse", "A mechanism can change the direction of a force.", ["True", "False"], "True", "Some mechanisms redirect force.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-4-designing-and-testing",
        title: "Designing and Testing a Structure",
        learningGoal: "Students will use the engineering design process to build, test, improve, and explain a structure.",
        successCriteria: [
          "I can identify design criteria and constraints.",
          "I can plan a fair test for a structure.",
          "I can use test evidence to improve a design."
        ],
        vocabulary: ["design criteria", "constraint", "prototype", "test", "improve", "evidence"],
        teacherSummary: "Students practise designing, testing, improving, and explaining a structure using evidence.",
        teacherOverview: "Students learn that good design uses criteria, constraints, fair tests, evidence, and improvement.",
        christianFocus: "Students practise perseverance, honesty, and stewardship as they improve designs and use materials wisely.",
        lessonContent: [
          "Design criteria tell what a design must do to be successful.",
          "Constraints are limits such as time, materials, size, cost, or safety rules.",
          "A prototype is a test version of a design.",
          "A fair test changes one important thing at a time when possible and measures results carefully.",
          "A good redesign is based on evidence, not just guessing or copying."
        ],
        activityTitle: "Design and Test Mission",
        mission: "Practise planning fair structure tests and improving designs with evidence.",
        levels: ["Level 1: Plan the Design", "Level 2: Test and Improve"],
        quizTitle: "Designing and Testing a Structure Quiz",
        quizFocus: "Criteria, constraints, prototypes, fair tests, measurements, redesign, and evidence",
        steps: [
          intro("Level 1: Plan the Design", "Before You Begin", "Get ready: design has a goal", "A design problem needs clear criteria and constraints. Criteria tell what success means. Constraints tell the limits you must work within."),
          intro("Level 1: Plan the Design", "Prototype First", "Test versions help learning", "A prototype is a test version. It may not work perfectly at first. Testing helps a designer learn what to improve."),
          question("Level 1: Plan the Design", "Criteria", "A class must build a paper bridge that holds at least 20 washers. What is the design criterion?", ["It must hold at least 20 washers.", "It must be made during science class.", "It must use only the paper provided."], "It must hold at least 20 washers.", "Correct. Criteria tell what success means.", "Look for the goal the design must meet."),
          question("Level 1: Plan the Design", "Constraint", "A group may use only 2 sheets of paper and 30 cm of tape. What is this?", ["a constraint", "a live load", "a chemical change"], "a constraint", "Yes. Material limits are constraints.", "Constraints are limits."),
          question("Level 1: Plan the Design", "Prototype", "Why build a prototype?", ["to test and improve a design before treating it as finished", "to avoid measuring anything", "to prove the first idea is always best"], "to test and improve a design before treating it as finished", "Correct. Prototypes help designers learn.", "A prototype is a test version."),
          question("Level 1: Plan the Design", "True or False", "A design can have both criteria and constraints.", ["True", "False"], "True", "Correct. Designs have goals and limits.", "Most real design problems have both."),
          complete("Level 1: Plan the Design", "Level 1 Complete", "You practised planning a design."),
          intro("Level 2: Test and Improve", "Evidence Guides Redesign", "Measure before changing", "A fair test uses careful measurements and clear conditions. If a bridge fails, the designer should notice where and how it failed before making changes."),
          question("Level 2: Test and Improve", "Fair Test", "Two bridge designs are tested. Which setup is fairest?", ["Use the same supports and add washers one at a time in the same place.", "Use different supports and different loads for each bridge.", "Stop testing the second bridge when it looks weaker."], "Use the same supports and add washers one at a time in the same place.", "Correct. Fair tests keep important conditions the same.", "Compare one design difference at a time when possible."),
          question("Level 2: Test and Improve", "Useful Evidence", "A bridge bends in the middle after 12 washers. Which note is most useful for redesign?", ["The middle span needs better support or shape.", "The bridge did not like the washers.", "The group should choose the answer before testing."], "The middle span needs better support or shape.", "Yes. It uses evidence from where the bridge failed.", "Look for the evidence-based improvement."),
          question("Level 2: Test and Improve", "Redesign", "Which redesign choice is most responsible?", ["Improve one part based on test evidence and retest.", "Add random materials until the bridge looks larger.", "Ignore the failed test and submit the same prototype."], "Improve one part based on test evidence and retest.", "Correct. Redesign should use evidence.", "Good improvement is not random."),
          question("Level 2: Test and Improve", "True or False", "A design that fails a test can still teach useful information.", ["True", "False"], "True", "Correct. Testing helps reveal what to improve.", "A failed test is evidence, not wasted learning."),
          complete("Level 2: Test and Improve", "Mission Complete", "You practised testing and improving a structure.")
        ],
        quizQuestions: [
          quizQuestion("Design", "Criteria", "multipleChoice", "What are design criteria?", ["the features a design must have to be successful", "the weather around an outdoor structure", "the total weight of a finished bridge only"], "the features a design must have to be successful", "Criteria define success."),
          quizQuestion("Design", "Constraints", "multipleChoice", "What are constraints?", ["limits such as materials, time, size, cost, or safety rules", "extra loads added after testing only", "opinions that replace evidence"], "limits such as materials, time, size, cost, or safety rules", "Constraints are limits."),
          quizQuestion("Design", "Prototype", "multipleChoice", "What is a prototype?", ["a test version of a design", "a final answer that cannot change", "a material with no measurable properties"], "a test version of a design", "A prototype is built to test and learn."),
          quizQuestion("Testing", "Fair Test", "multipleChoice", "Which testing setup is fairest?", ["same supports and same way of adding load for each bridge", "different supports and different load positions for each bridge", "testing only the design that looks strongest"], "same supports and same way of adding load for each bridge", "Fair tests keep conditions consistent."),
          quizQuestion("Evidence", "Redesign", "multipleChoice", "What should guide a redesign?", ["evidence from testing", "only the first idea", "only which design looks tallest"], "evidence from testing", "Evidence guides improvement."),
          quizQuestion("Evidence", "Failure", "multipleChoice", "A tower tips when weight is added high up. Which improvement fits the evidence?", ["lower the heavy part or widen the base", "make the top heavier again", "remove the base supports"], "lower the heavy part or widen the base", "This addresses the stability problem."),
          quizQuestion("Design", "True or False", "trueFalse", "A design problem can include both criteria and constraints.", ["True", "False"], "True", "Designs usually have goals and limits."),
          quizQuestion("Testing", "True or False", "trueFalse", "A failed prototype can provide useful evidence for improvement.", ["True", "False"], "True", "Failures can show what needs redesign.")
        ]
      }),
      lesson({
        id: "grade-5-science-unit-4-real-world-structures",
        title: "Real-World Structures and Safety",
        learningGoal: "Students will connect structure and mechanism ideas to real-world safety, maintenance, and responsible design.",
        successCriteria: [
          "I can identify forces and loads in real-world structures.",
          "I can explain why inspection and maintenance matter.",
          "I can choose responsible design decisions that consider safety and use."
        ],
        vocabulary: ["maintenance", "inspection", "safety factor", "failure point", "user", "stewardship"],
        teacherSummary: "Students practise applying structure and mechanism ideas to bridges, towers, buildings, playground equipment, and safety decisions.",
        teacherOverview: "Students learn that real-world structures must be designed, inspected, maintained, and used responsibly.",
        christianFocus: "Students connect safety and maintenance with loving their neighbours and caring for the built world responsibly.",
        lessonContent: [
          "Real-world structures and mechanisms are designed for users and conditions.",
          "Designers must consider loads, forces, materials, shapes, weather, and how people will use the object.",
          "Inspection means checking for damage, wear, weakness, or unsafe conditions.",
          "Maintenance means caring for and repairing a structure or mechanism so it keeps working safely.",
          "Responsible design thinks about safety, usefulness, cost, materials, and care for people."
        ],
        activityTitle: "Real-World Safety Mission",
        mission: "Practise applying forces, structures, mechanisms, and safety ideas to real examples.",
        levels: ["Level 1: Real-World Clues", "Level 2: Safety and Maintenance"],
        quizTitle: "Real-World Structures and Safety Quiz",
        quizFocus: "Real-world forces, loads, inspection, maintenance, safety, users, and responsible design",
        steps: [
          intro("Level 1: Real-World Clues", "Before You Begin", "Get ready: real structures face real conditions", "Bridges, towers, shelves, playground equipment, bicycles, and buildings all face forces. Designers must think about how each structure or mechanism will actually be used."),
          intro("Level 1: Real-World Clues", "Users and Conditions", "Design for real life", "A real design should consider users, loads, weather, materials, motion, and safety. A structure that works indoors may need changes before it is safe outdoors."),
          question("Level 1: Real-World Clues", "Bridge Use", "Why must a pedestrian bridge be designed for more than its own weight?", ["It must also support people, weather loads, and movement.", "Its colour controls how much force exists.", "A bridge's own weight is never a load."], "It must also support people, weather loads, and movement.", "Correct. Real bridges face several loads.", "Think about dead, live, and environmental loads."),
          question("Level 1: Real-World Clues", "Playground Equipment", "Which question is most important for playground safety?", ["Can it support expected users and remain stable during use?", "Does it look like the tallest structure nearby?", "Can every moving part be hidden from view?"], "Can it support expected users and remain stable during use?", "Yes. Safety depends on loads, stability, and proper use.", "Think about the children who use it."),
          question("Level 1: Real-World Clues", "Outdoor Conditions", "A structure is moved from a dry classroom to an outdoor garden. What new condition may matter?", ["rain, wind, sun, and changing temperature", "whether the structure has a title", "whether it was tested by only one student"], "rain, wind, sun, and changing temperature", "Correct. Outdoor conditions can affect design.", "Weather creates new loads and material concerns."),
          question("Level 1: Real-World Clues", "True or False", "A real-world structure should be designed for the way people will actually use it.", ["True", "False"], "True", "Correct. User needs and real conditions matter.", "Design is for real use, not just appearance."),
          complete("Level 1: Real-World Clues", "Level 1 Complete", "You practised noticing real-world design clues."),
          intro("Level 2: Safety and Maintenance", "Structures Need Care", "Safe today and later", "Even a well-designed structure can wear out or become damaged. Inspection and maintenance help people notice problems before they become dangerous."),
          question("Level 2: Safety and Maintenance", "Inspection", "What is the purpose of inspecting a structure?", ["to look for damage, wear, weakness, or unsafe conditions", "to prove no structure can ever fail", "to replace design criteria with opinions"], "to look for damage, wear, weakness, or unsafe conditions", "Correct. Inspection checks for possible problems.", "Inspection means careful checking."),
          question("Level 2: Safety and Maintenance", "Maintenance", "Why does maintenance matter?", ["It helps a structure or mechanism keep working safely over time.", "It makes all loads disappear from the structure.", "It means no testing was ever needed."], "It helps a structure or mechanism keep working safely over time.", "Yes. Maintenance supports safety and function.", "Think about repairs and care."),
          question("Level 2: Safety and Maintenance", "Responsible Design", "Which design choice best shows care for users?", ["include safety, expected loads, and clear use instructions", "focus only on appearance and ignore load tests", "make moving parts faster without checking pinch points"], "include safety, expected loads, and clear use instructions", "Correct. Responsible design protects users.", "Safety is part of serving people well."),
          question("Level 2: Safety and Maintenance", "True or False", "A structure that was safe when new may still need inspection later.", ["True", "False"], "True", "Correct. Wear, damage, and changing conditions can matter.", "Safe design includes care over time."),
          complete("Level 2: Safety and Maintenance", "Mission Complete", "You practised applying safety and maintenance ideas.")
        ],
        quizQuestions: [
          quizQuestion("Real Structures", "Loads", "multipleChoice", "Why must a bridge be designed for more than its own weight?", ["It may carry people, vehicles, wind, snow, and movement.", "Its colour changes all loads into dead loads.", "Its own weight is never part of design."], "It may carry people, vehicles, wind, snow, and movement.", "Bridges face dead, live, and environmental loads."),
          quizQuestion("Real Structures", "Outdoor Use", "multipleChoice", "Which outdoor condition can affect a structure?", ["wind and rain", "the number of words in its name", "whether it has been drawn in a notebook"], "wind and rain", "Weather can affect structures."),
          quizQuestion("Safety", "Playground", "multipleChoice", "Which question matters most for playground equipment?", ["Is it stable and strong enough for expected users?", "Is it the brightest object outside?", "Can it avoid all inspection forever?"], "Is it stable and strong enough for expected users?", "Safety depends on expected use."),
          quizQuestion("Maintenance", "Inspection", "multipleChoice", "What does inspection mean?", ["checking for damage, wear, weakness, or unsafe conditions", "using a structure without looking at it", "choosing the tallest possible design"], "checking for damage, wear, weakness, or unsafe conditions", "Inspection is careful checking."),
          quizQuestion("Maintenance", "Repair", "multipleChoice", "Why is maintenance important?", ["It helps structures and mechanisms keep working safely.", "It means forces no longer act on structures.", "It replaces the need for responsible use."], "It helps structures and mechanisms keep working safely.", "Maintenance supports safety over time."),
          quizQuestion("Safety", "Users", "multipleChoice", "Which design choice best shows care for users?", ["testing expected loads and giving clear use instructions", "hiding weak parts because they look untidy", "choosing only the cheapest material without testing"], "testing expected loads and giving clear use instructions", "Responsible design considers users."),
          quizQuestion("Real Structures", "True or False", "trueFalse", "Real structures should be designed for the conditions they will face.", ["True", "False"], "True", "Conditions affect safety and performance."),
          quizQuestion("Maintenance", "True or False", "trueFalse", "A safe structure may still need inspection as it gets older.", ["True", "False"], "True", "Structures can wear or become damaged.")
        ]
      }),
      {
        id: "grade-5-science-unit-4-final-quiz",
        title: "Unit 4 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherSummary: "The Unit 4 final quiz checks structures, mechanisms, forces, loads, stability, material choices, shapes, mechanisms, design testing, real-world safety, and maintenance.",
        teacherOverview: "Use this quiz after students complete the Forces Acting on Structures and Mechanisms lessons.",
        quiz: {
          title: "Forces Acting on Structures and Mechanisms Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Structures and Mechanisms", "Structure", "multipleChoice", "What is a structure?", ["parts arranged to support a load or hold a shape", "any object that must have a motor", "a moving part with no load"], "parts arranged to support a load or hold a shape", "Structures support loads or hold shape."),
            quizQuestion("Part A: Structures and Mechanisms", "Mechanism", "multipleChoice", "What is a mechanism?", ["a system with moving parts that transfers force or motion", "a solid material that can never move", "a weather load on a bridge"], "a system with moving parts that transfers force or motion", "Mechanisms transfer force or motion."),
            quizQuestion("Part A: Forces", "Force", "multipleChoice", "What is a force?", ["a push or pull", "only the colour of a material", "only the height of a structure"], "a push or pull", "A force is a push or pull."),
            quizQuestion("Part B: Force Types", "Compression", "multipleChoice", "Which force squeezes a material?", ["compression", "tension", "torsion"], "compression", "Compression squeezes."),
            quizQuestion("Part B: Force Types", "Tension", "multipleChoice", "Which force stretches or pulls a material?", ["tension", "shear", "settling"], "tension", "Tension stretches or pulls."),
            quizQuestion("Part B: Force Types", "Torsion", "multipleChoice", "Which example shows torsion?", ["twisting a screw with a screwdriver", "placing books on a shelf", "letting sand settle in water"], "twisting a screw with a screwdriver", "Torsion twists."),
            quizQuestion("Part B: Force Types", "Shear", "multipleChoice", "Which example shows shear?", ["scissors cutting paper", "a rope being pulled tight", "a column carrying a roof"], "scissors cutting paper", "Shear can happen when parts are pushed in opposite directions."),
            quizQuestion("Part C: Loads", "Dead Load", "multipleChoice", "What is a dead load?", ["the weight of the structure itself", "a person walking across a floor", "wind pushing against a tower"], "the weight of the structure itself", "Dead load is built-in weight."),
            quizQuestion("Part C: Loads", "Live Load", "multipleChoice", "Which is a live load?", ["students sitting on classroom chairs", "the wood in the chair frame", "snow on the school roof"], "students sitting on classroom chairs", "People using a structure are live loads."),
            quizQuestion("Part C: Loads", "Environmental Load", "multipleChoice", "Which is an environmental load?", ["heavy snow on a roof", "the roof's own beams", "a backpack placed on a desk"], "heavy snow on a roof", "Weather can create environmental loads."),
            quizQuestion("Part D: Stability", "Stable Design", "multipleChoice", "Which change often improves a tower's stability?", ["widen the base", "make the top heavier", "remove lower supports"], "widen the base", "A wider base can resist tipping."),
            quizQuestion("Part D: Stability", "Centre of Gravity", "multipleChoice", "Why can heavy parts lower down improve stability?", ["They lower the centre of gravity.", "They remove all live loads.", "They turn compression into evaporation."], "They lower the centre of gravity.", "A lower centre of gravity can reduce tipping."),
            quizQuestion("Part E: Materials", "Material Choice", "multipleChoice", "Which property matters for a structure used outdoors?", ["water resistance", "whether it has the nicest name", "whether it can be tasted safely"], "water resistance", "Outdoor structures may face rain or moisture."),
            quizQuestion("Part E: Shapes", "Triangle", "multipleChoice", "Why are triangles often used in frames?", ["They resist changing shape.", "They remove the need for connections.", "They make all materials magnetic."], "They resist changing shape.", "Triangles are useful for strength."),
            quizQuestion("Part E: Shapes", "Bracing", "multipleChoice", "A rectangular frame wobbles. What is a likely improvement?", ["add diagonal bracing", "remove a corner support", "place every load on one side"], "add diagonal bracing", "Bracing can reduce wobbling."),
            quizQuestion("Part F: Mechanisms", "Pulley", "multipleChoice", "How can a pulley help lift a flag?", ["It changes the direction of the pulling force.", "It removes the flag's weight.", "It changes the rope into a beam."], "It changes the direction of the pulling force.", "Pulleys can redirect force."),
            quizQuestion("Part F: Mechanisms", "Gear", "multipleChoice", "What can gears transfer?", ["turning motion", "only dead load", "only water pressure"], "turning motion", "Gears transfer rotation."),
            quizQuestion("Part G: Design", "Fair Test", "multipleChoice", "Which bridge test is fairest?", ["same supports and same method for adding load", "different supports and different loads each time", "testing only the bridge that looks strongest"], "same supports and same method for adding load", "Fair tests keep conditions consistent."),
            quizQuestion("Part G: Design", "Redesign", "multipleChoice", "What should guide a redesign?", ["evidence from testing", "only the first idea", "only which design looks larger"], "evidence from testing", "Evidence guides improvement."),
            quizQuestion("Part H: Safety", "Maintenance", "multipleChoice", "Why are inspection and maintenance important?", ["They help structures and mechanisms stay safe over time.", "They make all loads disappear.", "They mean testing was never needed."], "They help structures and mechanisms stay safe over time.", "Structures need care after they are built.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Forces Acting on Structures and Mechanisms mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each Forces Acting on Structures and Mechanisms lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The unit quiz checks structures, mechanisms, forces, compression, tension, torsion, shear, dead loads, live loads, environmental loads, stability, materials, shapes, mechanisms, design testing, safety, and maintenance. Recommended weighting remains 40% lesson quizzes and 60% unit quiz."
    }
  };

  window.PracticeStarUnit["grade-5-science-unit-4"] = unit;
  var library = window.PracticeStarContent.grade5Science;
  library.units = Array.isArray(library.units) ? library.units : [];
  var index = library.units.findIndex(function (item) { return item && item.id === unit.id; });
  if (index >= 0) {
    library.units[index] = unit;
  } else {
    library.units.push(unit);
  }
}());
