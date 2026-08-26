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
        "Use the lesson quiz as a scored writing and research check.",
        "Review missed questions before assigning the next Writing Forms and Research lesson."
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
      assessmentPlan: "Use the activity for guided writing decisions and the quiz to check independent understanding.",
      studentActivity: {
        type: "languageQuestionSet",
        version: "2026-08-26-language-unit-4-writing-1",
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
    id: "grade-5-language-unit-4",
    title: "Writing Forms and Research",
    strand: "Composition: Expressing Ideas and Creating Texts",
    unitGoal: "Students will plan, draft, revise, edit, and publish writing for different purposes, including narrative, opinion, informational, and research-based writing.",
    lessons: [
      lesson({
        id: "grade-5-language-unit-4-planning-before-writing",
        title: "Planning Before Writing",
        learningGoal: "Students will choose a purpose, audience, and useful plan before drafting.",
        successCriteria: [
          "I can identify the purpose of a writing task.",
          "I can choose details that fit my audience.",
          "I can select a plan that will help my draft stay organized."
        ],
        vocabulary: ["purpose", "audience", "topic", "plan", "draft"],
        teacherOverview: "Students practise making strong planning choices before beginning a draft.",
        lessonContent: [
          "Good writing usually starts with a plan.",
          "Purpose means why the piece is being written.",
          "Audience means who will read, hear, or view the piece.",
          "A plan helps the writer choose details before drafting.",
          "Different writing forms need different kinds of planning."
        ],
        activityTitle: "Writing Plan Builder",
        mission: "Choose purposes, audiences, and plans that fit different writing tasks.",
        levels: ["Level 1: Purpose and Audience", "Level 2: Choose Useful Plans"],
        quizTitle: "Planning Before Writing Quiz",
        quizFocus: "Purpose, audience, topic, planning details, and draft preparation",
        steps: [
          intro("Level 1: Purpose and Audience", "Before You Begin", "Get ready: know why and for whom", "Before writing, ask two questions: Why am I writing this? Who will read it? A letter to a friend, a report for science, and an opinion paragraph for class all need different choices."),
          intro("Level 1: Purpose and Audience", "Purpose Guides Choices", "Match details to the job", "If the purpose is to explain, choose clear facts and examples. If the purpose is to persuade, choose reasons and evidence. If the purpose is to tell a story, choose events, characters, and setting details."),
          question("Level 1: Purpose and Audience", "Purpose", "A student is writing to convince the principal to add more outdoor reading time. What is the purpose?", ["to persuade with reasons", "to explain what outdoor reading would look like", "to describe a favourite outdoor reading memory"], "to persuade with reasons", "Correct. The student wants to convince someone.", "Ask what the writer wants the reader to think or do."),
          question("Level 1: Purpose and Audience", "Audience", "A class will read your instructions for caring for the class plant. Which detail best fits the audience?", ["where to place the plant and how often to water it", "why plants need sunlight and water to grow", "what the plant looked like when it first arrived"], "where to place the plant and how often to water it", "Yes. The class needs useful directions.", "Think about what the readers need."),
          question("Level 1: Purpose and Audience", "Best Topic", "Which topic is narrow enough for a one-page report?", ["how honeybees help apple trees", "how insects help farms", "why fruit trees are useful"], "how honeybees help apple trees", "Correct. It is focused enough for a short report.", "A narrower topic is easier to explain well."),
          question("Level 1: Purpose and Audience", "True or False", "The audience can affect which details a writer should include.", ["True", "False"], "True", "Correct. Writers choose details for readers.", "Audience matters before drafting."),
          complete("Level 1: Purpose and Audience", "Level 1 Complete", "You practised choosing purpose, audience, and topic."),
          intro("Level 2: Choose Useful Plans", "Choose the Right Plan", "Plans should fit the writing form", "A story plan may use beginning, middle, and end. An opinion plan may use claim, reasons, and evidence. A report plan may use headings or categories."),
          question("Level 2: Choose Useful Plans", "Narrative Plan", "Which plan best fits a short story about a lost notebook?", ["setting, problem, events, solution", "claim, reason, evidence, closing", "heading, definition, diagram, glossary"], "setting, problem, events, solution", "Correct. Stories need events and a solution.", "Look for story parts."),
          question("Level 2: Choose Useful Plans", "Opinion Plan", "Which plan best fits an opinion paragraph?", ["opinion, reason, evidence, closing sentence", "characters, setting, problem, solution", "materials, steps, safety warning, result"], "opinion, reason, evidence, closing sentence", "Yes. Opinion writing needs a clear view and support.", "Look for claim and reasons."),
          question("Level 2: Choose Useful Plans", "Planning Details", "A report about the water cycle needs clear sections. Which plan would help most?", ["evaporation, condensation, precipitation, collection", "rainy weather, snowy weather, sunny weather, windy weather", "spring changes, summer activities, fall colours, winter storms"], "evaporation, condensation, precipitation, collection", "Correct. The sections match the topic.", "Use categories that organize the information."),
          question("Level 2: Choose Useful Plans", "True or False", "A plan should help the writer decide what belongs before writing the draft.", ["True", "False"], "True", "Correct. Planning helps before drafting.", "A plan is a guide."),
          complete("Level 2: Choose Useful Plans", "Mission Complete", "You practised choosing useful writing plans.")
        ],
        quizQuestions: [
          quizQuestion("Planning", "Purpose", "multipleChoice", "A student writes a paragraph giving reasons why the class should visit a pioneer village. What is the purpose?", ["to persuade", "to retell a dream", "to define every history word"], "to persuade", "Reasons are used to convince."),
          quizQuestion("Planning", "Audience", "multipleChoice", "You are writing directions for younger students. Which choice best fits the audience?", ["short steps with clear action words", "detailed paragraphs with extra background information", "directions written for adults with few examples"], "short steps with clear action words", "Younger readers need clear steps."),
          quizQuestion("Planning", "Narrow Topic", "multipleChoice", "Which topic is best for a short report?", ["how maple syrup is made", "how sweet foods are made in Canada", "why maple trees are important"], "how maple syrup is made", "It is focused enough."),
          quizQuestion("Planning", "Story Plan", "multipleChoice", "Which plan fits a narrative?", ["character, setting, problem, solution", "claim, reason, evidence, conclusion", "topic, subheading, fact, source"], "character, setting, problem, solution", "Narratives need story elements."),
          quizQuestion("Planning", "Opinion Plan", "multipleChoice", "Which belongs in an opinion plan?", ["a clear claim and supporting reasons", "a list of events that happened in order", "a topic with headings and facts"], "a clear claim and supporting reasons", "Opinion writing needs support."),
          quizQuestion("Planning", "Report Plan", "multipleChoice", "Which plan best organizes a report about an animal?", ["habitat, diet, life cycle, helpful features", "problem, suspense, surprise ending, dialogue", "favourite animal, funny story, personal memory"], "habitat, diet, life cycle, helpful features", "Those categories organize information."),
          quizQuestion("Planning", "True or False", "trueFalse", "A writer should think about purpose before choosing details.", ["True", "False"], "True", "Purpose guides details."),
          quizQuestion("Planning", "True or False", "trueFalse", "Every writing task needs exactly the same plan.", ["True", "False"], "False", "Different forms need different plans.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-4-narrative-writing",
        title: "Narrative Writing",
        learningGoal: "Students will identify and build narrative parts that make a story clear and interesting.",
        successCriteria: [
          "I can identify character, setting, problem, events, and solution.",
          "I can choose details that help readers picture a story.",
          "I can tell whether events follow a clear order."
        ],
        vocabulary: ["narrative", "character", "setting", "problem", "solution"],
        teacherOverview: "Students practise the choices that make a narrative organized and meaningful.",
        lessonContent: [
          "Narrative writing tells a story.",
          "A story usually includes characters, setting, a problem, events, and a solution.",
          "Events should be in an order that readers can follow.",
          "Dialogue and description can help readers understand characters.",
          "A strong ending shows how the problem is solved or what the character learns."
        ],
        activityTitle: "Story Builder Mission",
        mission: "Choose story details that help a narrative make sense.",
        levels: ["Level 1: Story Parts", "Level 2: Events and Endings"],
        quizTitle: "Narrative Writing Quiz",
        quizFocus: "Story elements, event order, description, dialogue, and endings",
        steps: [
          intro("Level 1: Story Parts", "Before You Begin", "Get ready: stories need shape", "Narrative writing tells what happened. A clear story gives readers enough information to understand who is involved, where it happens, what problem matters, and how events change."),
          intro("Level 1: Story Parts", "Use Details With Purpose", "Description should help the story", "Not every detail belongs in a story. Useful details help readers picture the setting, understand a character, or follow the problem and solution."),
          question("Level 1: Story Parts", "Story Problem", "Which sentence gives the clearest story problem?", ["Ava reached the bus stop and realized her permission form was still on the kitchen table.", "Ava wondered whether the permission form would be checked.", "Ava packed her snack and waited with the other students."], "Ava reached the bus stop and realized her permission form was still on the kitchen table.", "Correct. The missing form creates a problem.", "A problem gets in the way."),
          question("Level 1: Story Parts", "Setting Detail", "Which detail best helps readers picture the setting?", ["Frost sparkled on the schoolyard fence before the morning bell.", "Mason had a notebook in his desk.", "The class would begin soon."], "Frost sparkled on the schoolyard fence before the morning bell.", "Yes. It gives place, time, and sensory detail.", "Look for where, when, or what can be sensed."),
          question("Level 1: Story Parts", "Character Action", "Which detail best shows that a character is nervous?", ["He tapped his speech cards and read the first line again.", "He stood beside the classroom door.", "He had practised the speech yesterday."], "He tapped his speech cards and read the first line again.", "Correct. The action suggests nervousness.", "Actions can show feelings."),
          question("Level 1: Story Parts", "True or False", "Narrative details should help readers understand the story, not just fill space.", ["True", "False"], "True", "Correct. Details need a purpose.", "Good details do work."),
          complete("Level 1: Story Parts", "Level 1 Complete", "You practised choosing useful story parts."),
          intro("Level 2: Events and Endings", "Put Events in Order", "Cause and effect matter", "Story events should usually connect. If one event causes another, readers can follow why the story changes."),
          question("Level 2: Events and Endings", "Event Order", "Which order makes the most sense?", ["The dog slipped out, the family searched the yard, then they found him by the shed.", "The family found paw prints, then the dog slipped out, then they closed the gate.", "The family searched the yard before noticing that the gate was open."], "The dog slipped out, the family searched the yard, then they found him by the shed.", "Correct. The order follows the problem and solution.", "Follow cause and effect."),
          question("Level 2: Events and Endings", "Dialogue", "Which line of dialogue best moves the story forward?", ["\"I found the map under the bench,\" said Luca.", "\"I think the trail may be near the river,\" said Luca.", "\"We should wait here until we know more,\" said Luca."], "\"I found the map under the bench,\" said Luca.", "Yes. It gives new information for the plot.", "Choose dialogue that changes what happens next."),
          question("Level 2: Events and Endings", "Ending", "Which ending best fits a story about a student learning to ask for help?", ["Mira thanked her group and admitted the project improved when everyone shared ideas.", "Mira finished the poster but did not tell the group what she learned.", "Mira decided the project was finished because the poster looked neat."], "Mira thanked her group and admitted the project improved when everyone shared ideas.", "Correct. It connects to the lesson learned.", "The ending should fit the story problem."),
          question("Level 2: Events and Endings", "True or False", "A narrative ending should connect to the main problem or change in the story.", ["True", "False"], "True", "Correct. Endings should feel connected.", "A strong ending belongs to the story."),
          complete("Level 2: Events and Endings", "Mission Complete", "You practised building narrative events and endings.")
        ],
        quizQuestions: [
          quizQuestion("Narrative", "Problem", "multipleChoice", "Which sentence gives the clearest narrative problem?", ["The class pet escaped while the students cleaned its cage.", "The class pet kept hiding whenever students opened the cage.", "The students wanted to clean the cage before the bell."], "The class pet escaped while the students cleaned its cage.", "The escape creates a problem."),
          quizQuestion("Narrative", "Setting", "multipleChoice", "Which detail best builds setting?", ["Rain tapped on the tent while the campers zipped their sleeping bags.", "The campers had a plan.", "The tent was useful."], "Rain tapped on the tent while the campers zipped their sleeping bags.", "It gives sensory place details."),
          quizQuestion("Narrative", "Trait", "multipleChoice", "Which detail best shows patience?", ["Noah tried three careful knots before asking his grandfather to check the rope.", "Noah held the rope in both hands.", "Noah knew the rope was important."], "Noah tried three careful knots before asking his grandfather to check the rope.", "His repeated careful effort shows patience."),
          quizQuestion("Narrative", "Event Order", "multipleChoice", "Which sequence is clearest?", ["The power went out, Jana found a flashlight, then she helped her brother finish reading.", "Jana helped her brother finish reading, the power went out, then she found a flashlight.", "The flashlight worked after the reading was finished before the power went out."], "The power went out, Jana found a flashlight, then she helped her brother finish reading.", "The order follows cause and effect."),
          quizQuestion("Narrative", "Dialogue", "multipleChoice", "Which dialogue best moves a story forward?", ["\"The bridge is closed, so we need another path,\" said Priya.", "\"The bridge has railings,\" said Priya.", "\"I have seen bridges before,\" said Priya."], "\"The bridge is closed, so we need another path,\" said Priya.", "It creates a next action."),
          quizQuestion("Narrative", "Ending", "multipleChoice", "Which ending best fits a story about a boy learning responsibility?", ["Evan returned the borrowed tools clean and on time.", "Evan promised to organize the tools later in the week.", "Evan explained that he had planned to return the tools soon."], "Evan returned the borrowed tools clean and on time.", "It shows responsible action."),
          quizQuestion("Narrative", "True or False", "trueFalse", "A narrative usually needs events that readers can follow in order.", ["True", "False"], "True", "Order helps readers follow the story."),
          quizQuestion("Narrative", "True or False", "trueFalse", "Every detail in a story should be unrelated to the characters or problem.", ["True", "False"], "False", "Useful details connect to the story.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-4-opinion-writing",
        title: "Opinion Writing",
        learningGoal: "Students will identify claims, reasons, evidence, and fair conclusions in opinion writing.",
        successCriteria: [
          "I can identify a clear opinion or claim.",
          "I can choose reasons and evidence that support the claim.",
          "I can avoid overclaiming or using weak support."
        ],
        vocabulary: ["opinion", "claim", "reason", "evidence", "conclusion"],
        teacherOverview: "Students practise supporting an opinion with reasons and evidence rather than simply stating a preference.",
        lessonContent: [
          "Opinion writing explains what a writer thinks and why.",
          "A claim is the main opinion the writer wants to support.",
          "Reasons explain why the writer holds that opinion.",
          "Evidence gives facts, examples, or details that support the reasons.",
          "A strong opinion piece is respectful and fair, even when trying to persuade."
        ],
        activityTitle: "Opinion Support Mission",
        mission: "Choose claims, reasons, and evidence that make opinion writing stronger.",
        levels: ["Level 1: Claims and Reasons", "Level 2: Evidence and Fairness"],
        quizTitle: "Opinion Writing Quiz",
        quizFocus: "Claims, reasons, evidence, respectful tone, and conclusions",
        steps: [
          intro("Level 1: Claims and Reasons", "Before You Begin", "Get ready: opinion needs support", "An opinion is stronger when readers can see the thinking behind it. A writer should state a clear claim and then give reasons that truly support it."),
          intro("Level 1: Claims and Reasons", "Reasons Must Match", "Do not wander from the claim", "If the claim is that a school garden would help students learn, reasons should connect to learning, plants, responsibility, or science. A reason about favourite recess games would not fit."),
          question("Level 1: Claims and Reasons", "Claim", "Which sentence states a clear opinion?", ["Our class should have a weekly library period because it supports reading habits.", "The library has books and tables.", "Students went to the library on Tuesday."], "Our class should have a weekly library period because it supports reading habits.", "Correct. It states a view and begins to support it.", "A claim tells what the writer thinks."),
          question("Level 1: Claims and Reasons", "Matching Reason", "Claim: Students should learn basic first aid. Which reason supports it best?", ["It can help students respond calmly to small injuries.", "It connects to health and safety lessons.", "It is a skill many adults know."], "It can help students respond calmly to small injuries.", "Yes. The reason connects to the claim.", "Reasons should explain why the claim matters."),
          question("Level 1: Claims and Reasons", "Weak Reason", "Claim: Our school should add a chess club. Which reason is weakest?", ["The room beside the office has two windows.", "Chess can help students practise careful thinking.", "A club could give interested students a place to play together."], "The room beside the office has two windows.", "Correct. It does not really support the claim.", "Choose the reason that does the least work."),
          question("Level 1: Claims and Reasons", "True or False", "A reason should support the claim, not just mention the same topic.", ["True", "False"], "True", "Correct. Support must connect clearly.", "A related topic is not always a reason."),
          complete("Level 1: Claims and Reasons", "Level 1 Complete", "You practised matching claims and reasons."),
          intro("Level 2: Evidence and Fairness", "Use Evidence", "Reasons need proof", "Evidence can be a fact, example, detail, or observation. Evidence makes a reason stronger because it gives readers something specific to consider."),
          question("Level 2: Evidence and Fairness", "Best Evidence", "Claim: A quiet reading corner would help students focus. Which evidence supports it best?", ["During silent reading, students finish more pages when the room is calm.", "The corner could have a small rug.", "Some students like colourful bookmarks."], "During silent reading, students finish more pages when the room is calm.", "Correct. It connects calm space to focus.", "Look for evidence that proves the reason."),
          question("Level 2: Evidence and Fairness", "Respectful Tone", "Which sentence has the most respectful persuasive tone?", ["A later lunch could help students concentrate because many are hungry by noon.", "Early lunch should be changed because it causes too many problems.", "My idea is clearly better than the current lunch schedule."], "A later lunch could help students concentrate because many are hungry by noon.", "Yes. It gives a reason without insulting others.", "Persuasion can be firm and respectful."),
          question("Level 2: Evidence and Fairness", "Conclusion", "Which conclusion best fits an opinion paragraph about adding more class read-aloud time?", ["For these reasons, read-aloud time would be a helpful part of our week.", "Reading happened yesterday after math.", "Some books are longer than others."], "For these reasons, read-aloud time would be a helpful part of our week.", "Correct. It closes the opinion clearly.", "A conclusion should return to the claim."),
          question("Level 2: Evidence and Fairness", "True or False", "Opinion writing can be persuasive without being rude or unfair.", ["True", "False"], "True", "Correct. Respectful support is stronger.", "Tone matters."),
          complete("Level 2: Evidence and Fairness", "Mission Complete", "You practised evidence and respectful opinion writing.")
        ],
        quizQuestions: [
          quizQuestion("Opinion", "Claim", "multipleChoice", "Which sentence states a clear claim?", ["Students should have more time for independent reading because it builds stamina.", "Students read books.", "Some books have chapters."], "Students should have more time for independent reading because it builds stamina.", "It states an opinion and support."),
          quizQuestion("Opinion", "Reason", "multipleChoice", "Claim: The class should keep a nature journal. Which reason fits best?", ["It helps students observe changes carefully over time.", "It gives students a place to write outside.", "It can be kept with other science materials."], "It helps students observe changes carefully over time.", "The reason supports the claim."),
          quizQuestion("Opinion", "Weak Support", "multipleChoice", "Claim: Students should practise typing. Which reason is weakest?", ["Many students already use computers sometimes.", "Typing can help students prepare final drafts.", "Typing practice can improve speed and accuracy."], "Many students already use computers sometimes.", "It mentions computers but does not strongly support typing practice."),
          quizQuestion("Opinion", "Evidence", "multipleChoice", "Which evidence best supports a school recycling program?", ["A classroom audit found many clean paper scraps in the garbage.", "The recycling bin is near the door.", "Some students know what paper is."], "A classroom audit found many clean paper scraps in the garbage.", "It gives specific support."),
          quizQuestion("Opinion", "Tone", "multipleChoice", "Which sentence is most respectful?", ["Our class could improve the plan by adding clear cleanup jobs.", "This plan needs to be fixed before anyone uses it.", "People may disagree, but the cleanup jobs are the main problem."], "Our class could improve the plan by adding clear cleanup jobs.", "It gives a fair suggestion."),
          quizQuestion("Opinion", "Conclusion", "multipleChoice", "Which conclusion best closes an opinion paragraph?", ["For these reasons, a class garden would be worth trying this spring.", "Gardens have soil.", "My paragraph is finished now."], "For these reasons, a class garden would be worth trying this spring.", "It returns to the claim."),
          quizQuestion("Opinion", "True or False", "trueFalse", "A claim should be supported with reasons or evidence.", ["True", "False"], "True", "Support strengthens the claim."),
          quizQuestion("Opinion", "True or False", "trueFalse", "A rude sentence is stronger because it sounds more confident.", ["True", "False"], "False", "Respectful evidence is stronger.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-4-informational-writing",
        title: "Informational Writing",
        learningGoal: "Students will organize facts and explanations clearly in informational writing.",
        successCriteria: [
          "I can identify a clear informational topic.",
          "I can choose facts and examples that explain the topic.",
          "I can organize information with headings or categories."
        ],
        vocabulary: ["informational", "fact", "example", "heading", "category"],
        teacherOverview: "Students practise explaining a topic with organized facts, examples, and clear sections.",
        lessonContent: [
          "Informational writing teaches or explains a topic.",
          "A strong informational piece has a clear focus.",
          "Facts, examples, and definitions help readers understand the topic.",
          "Headings and categories can organize information.",
          "The writer should explain ideas in a sensible order."
        ],
        activityTitle: "Information Organizer Mission",
        mission: "Choose facts, headings, and examples that help explain a topic.",
        levels: ["Level 1: Facts and Focus", "Level 2: Organize Information"],
        quizTitle: "Informational Writing Quiz",
        quizFocus: "Topic focus, facts, examples, headings, categories, and order",
        steps: [
          intro("Level 1: Facts and Focus", "Before You Begin", "Get ready: explain clearly", "Informational writing helps readers learn. The writer needs a clear topic and details that explain that topic accurately."),
          intro("Level 1: Facts and Focus", "Stay Focused", "Every detail should help", "A detail may be true but still not belong. If you are explaining how tadpoles become frogs, a detail about a favourite pond picnic may not help the reader learn the science."),
          question("Level 1: Facts and Focus", "Best Focus", "Which topic is focused enough for a short informational article?", ["how seeds sprout into plants", "how plants grow in different seasons", "why plants are important to people"], "how seeds sprout into plants", "Correct. It is focused enough to explain.", "Choose a topic that can be covered well."),
          question("Level 1: Facts and Focus", "Best Fact", "Topic: How owls hunt at night. Which fact fits best?", ["Owls have excellent hearing that helps them locate prey.", "Some owl drawings are used on notebooks.", "Many people have heard stories about owls."], "Owls have excellent hearing that helps them locate prey.", "Yes. It explains the topic.", "Pick the fact that teaches the topic."),
          question("Level 1: Facts and Focus", "Example", "Which sentence gives a useful example for a report about simple machines?", ["A ramp is an inclined plane that can help move heavy objects upward.", "A ramp can be made from wood, metal, or plastic.", "A ramp is often placed near stairs or doors."], "A ramp is an inclined plane that can help move heavy objects upward.", "Correct. It explains with an example.", "A good example helps readers understand."),
          question("Level 1: Facts and Focus", "True or False", "Informational writing should use details that help readers understand the topic.", ["True", "False"], "True", "Correct. Details should teach or explain.", "Focus matters."),
          complete("Level 1: Facts and Focus", "Level 1 Complete", "You practised choosing focused information."),
          intro("Level 2: Organize Information", "Use Sections", "Organize so readers can follow", "Informational writing often uses headings, categories, or steps. These help readers see how ideas fit together."),
          question("Level 2: Organize Information", "Best Heading", "Which heading best fits facts about what beavers eat?", ["Beaver Diet", "Beaver Habitat", "Beaver Dams"], "Beaver Diet", "Correct. Diet means what an animal eats.", "Choose the heading that matches the facts."),
          question("Level 2: Organize Information", "Best Order", "Which order best explains how bread is made?", ["mix ingredients, knead dough, let it rise, bake", "bake, let it rise, buy flour, mix ingredients", "eat bread, knead dough, plant wheat, open oven"], "mix ingredients, knead dough, let it rise, bake", "Yes. The steps follow a sensible order.", "Process writing should follow the process."),
          question("Level 2: Organize Information", "Category", "A report about Canada geese has details about nesting, eggs, and caring for young. Which category fits?", ["Reproduction and Young", "Migration Routes", "Food Sources"], "Reproduction and Young", "Correct. The details are about raising young.", "Group related facts together."),
          question("Level 2: Organize Information", "True or False", "Headings can help readers predict what a section will explain.", ["True", "False"], "True", "Correct. Headings guide readers.", "Headings are reading tools."),
          complete("Level 2: Organize Information", "Mission Complete", "You practised organizing information.")
        ],
        quizQuestions: [
          quizQuestion("Informational", "Focus", "multipleChoice", "Which topic is best for a short informational text?", ["how salmon return to spawning streams", "how fish live in different habitats", "why freshwater is important"], "how salmon return to spawning streams", "It is focused enough."),
          quizQuestion("Informational", "Fact", "multipleChoice", "Topic: How a thermometer works. Which fact fits best?", ["The liquid or sensor changes with temperature.", "Thermometers can be kept in drawers.", "Some thermometers are small."], "The liquid or sensor changes with temperature.", "It explains the topic."),
          quizQuestion("Informational", "Example", "multipleChoice", "Which example helps explain erosion?", ["Fast water can carry soil away from a riverbank.", "A riverbank may have trees nearby.", "Some people walk near rivers."], "Fast water can carry soil away from a riverbank.", "It shows erosion happening."),
          quizQuestion("Informational", "Heading", "multipleChoice", "Which heading best fits facts about how animals survive cold winters?", ["Winter Adaptations", "Animal Habitats", "Seasonal Weather"], "Winter Adaptations", "It matches the facts."),
          quizQuestion("Informational", "Order", "multipleChoice", "Which order best explains a life cycle?", ["egg, larva, pupa, adult", "adult, pupa, egg, larva", "pupa, adult, larva, egg"], "egg, larva, pupa, adult", "It follows the process."),
          quizQuestion("Informational", "Category", "multipleChoice", "Details about roots, stems, leaves, and flowers belong under which heading?", ["Plant Parts", "Garden Jobs", "Weather Changes"], "Plant Parts", "The details name parts of plants."),
          quizQuestion("Informational", "True or False", "trueFalse", "A true fact can still be left out if it does not fit the topic.", ["True", "False"], "True", "Writers choose relevant facts."),
          quizQuestion("Informational", "True or False", "trueFalse", "Informational writing should be organized so readers can follow the ideas.", ["True", "False"], "True", "Organization helps understanding.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-4-sources-and-notes",
        title: "Using Sources and Notes",
        learningGoal: "Students will identify reliable source habits and take useful notes without copying whole passages.",
        successCriteria: [
          "I can choose sources that fit a research question.",
          "I can take notes in my own words.",
          "I can tell the difference between a copied sentence and a useful note."
        ],
        vocabulary: ["source", "research", "note", "paraphrase", "credit"],
        teacherOverview: "Students practise using sources honestly and taking notes that support research writing.",
        lessonContent: [
          "A source is where information comes from.",
          "A research question helps guide what information to look for.",
          "Useful notes are short and focused.",
          "Writers should use their own words instead of copying whole passages.",
          "Important sources should be credited so readers know where information came from."
        ],
        activityTitle: "Research Notes Mission",
        mission: "Choose useful sources and turn information into honest notes.",
        levels: ["Level 1: Choose Sources", "Level 2: Take Notes Honestly"],
        quizTitle: "Using Sources and Notes Quiz",
        quizFocus: "Research questions, useful sources, notes, paraphrasing, and credit",
        steps: [
          intro("Level 1: Choose Sources", "Before You Begin", "Get ready: research with a question", "Research writing starts with a question. A clear question helps you choose sources and ignore information that does not help."),
          intro("Level 1: Choose Sources", "Choose Useful Sources", "Match the source to the question", "A source should answer your research question. A book about birds may not help much if your question is about how maple sap becomes syrup."),
          question("Level 1: Choose Sources", "Research Question", "Which research question is focused enough?", ["How do honeybees help apple trees produce fruit?", "How do insects affect plants in gardens?", "Why are orchards important to farmers?"], "How do honeybees help apple trees produce fruit?", "Correct. It can guide research.", "A focused question is easier to answer."),
          question("Level 1: Choose Sources", "Best Source", "Question: How did early settlers make candles? Which source would probably help most?", ["a museum article about pioneer household work", "a history book section about settler homes", "a social studies article about pioneer tools"], "a museum article about pioneer household work", "Yes. It matches the question.", "Choose the source that likely answers the question."),
          question("Level 1: Choose Sources", "Source Fit", "Question: What do red foxes eat? Which source fits best?", ["a wildlife guide section about red fox diet", "a wildlife article about where red foxes live", "a nature book chapter about forest animals"], "a wildlife guide section about red fox diet", "Correct. It is about the exact topic.", "Look for topic and purpose."),
          question("Level 1: Choose Sources", "True or False", "A research question helps a writer decide which information matters.", ["True", "False"], "True", "Correct. It guides the research.", "Questions focus the search."),
          complete("Level 1: Choose Sources", "Level 1 Complete", "You practised choosing sources."),
          intro("Level 2: Take Notes Honestly", "Use Your Own Words", "Notes are not full copied paragraphs", "Good notes capture important ideas in short phrases. Copying whole sentences without credit is not honest research writing."),
          question("Level 2: Take Notes Honestly", "Best Note", "Source sentence: 'Monarch butterflies travel thousands of kilometres to warmer places for winter.' Which note is best?", ["monarchs migrate long distances for winter warmth", "Monarch butterflies travel thousands of kilometres to warmer places for winter.", "butterflies are pretty and travel"], "monarchs migrate long distances for winter warmth", "Correct. It is short and in the student's own words.", "A note should keep the idea, not copy the sentence."),
          question("Level 2: Take Notes Honestly", "Copied or Note?", "Which choice is too close to copying?", ["Beavers build dams from branches and mud.", "beavers use sticks and mud for dams", "beaver dams made with natural materials"], "Beavers build dams from branches and mud.", "Yes. It repeats the sentence exactly.", "Exact words need quotation marks or should be changed."),
          question("Level 2: Take Notes Honestly", "Credit", "Why should writers keep track of sources?", ["so they can give credit and find information again", "so their notes look longer", "so they can avoid reading carefully"], "so they can give credit and find information again", "Correct. Source tracking is honest and useful.", "Credit matters in research."),
          question("Level 2: Take Notes Honestly", "True or False", "Putting information in your own words still requires careful honesty.", ["True", "False"], "True", "Correct. The idea still came from a source.", "Paraphrasing does not make research disappear."),
          complete("Level 2: Take Notes Honestly", "Mission Complete", "You practised using research notes honestly.")
        ],
        quizQuestions: [
          quizQuestion("Research", "Question", "multipleChoice", "Which research question is most focused?", ["How do earthworms help garden soil?", "How do small animals change soil?", "Why is soil useful for gardens?"], "How do earthworms help garden soil?", "It gives a clear research target."),
          quizQuestion("Research", "Source", "multipleChoice", "Question: How are snowflakes formed? Which source fits best?", ["a science article about ice crystals in clouds", "a weather article about winter storms", "a science book chapter about water"], "a science article about ice crystals in clouds", "It matches the question."),
          quizQuestion("Research", "Relevant Source", "multipleChoice", "Question: What did voyageurs carry in their canoes? Which source fits best?", ["a history text about fur trade travel", "a history map of fur trade routes", "a museum article about birchbark canoes"], "a history text about fur trade travel", "It is most likely to answer the question."),
          quizQuestion("Notes", "Paraphrase", "multipleChoice", "Source: 'Bats use echoes to find insects in the dark.' Which note is best?", ["bats find night insects by using echoes", "Bats use echoes to find insects in the dark.", "bats and insects are both animals"], "bats find night insects by using echoes", "It keeps the idea in note form."),
          quizQuestion("Notes", "Too Much Copying", "multipleChoice", "Which note copies too closely?", ["The roots absorb water and minerals from soil.", "roots take in water and minerals", "roots help plants get materials from soil"], "The roots absorb water and minerals from soil.", "It repeats the sentence exactly."),
          quizQuestion("Research", "Credit", "multipleChoice", "Why should a writer list sources?", ["to show where information came from", "to help readers see the order of research", "to remind the writer which notes were used"], "to show where information came from", "Credit is part of research honesty."),
          quizQuestion("Research", "True or False", "trueFalse", "A source should help answer the research question.", ["True", "False"], "True", "A useful source matches the question."),
          quizQuestion("Research", "True or False", "trueFalse", "Research notes should usually copy full paragraphs word for word.", ["True", "False"], "False", "Notes should be short and honest.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-4-introductions-conclusions",
        title: "Organizing Introductions and Conclusions",
        learningGoal: "Students will choose introductions and conclusions that fit the writing form and purpose.",
        successCriteria: [
          "I can identify what an introduction should do.",
          "I can identify what a conclusion should do.",
          "I can choose openings and endings that fit narrative, opinion, and informational writing."
        ],
        vocabulary: ["introduction", "conclusion", "hook", "closing", "main idea"],
        teacherOverview: "Students practise choosing beginnings and endings that help writing feel complete.",
        lessonContent: [
          "An introduction begins the writing and prepares the reader.",
          "A conclusion closes the writing and leaves the reader with a final thought.",
          "Different writing forms need different kinds of openings and endings.",
          "A narrative introduction may introduce character, setting, or problem.",
          "An opinion or informational introduction should make the topic or claim clear."
        ],
        activityTitle: "Opening and Closing Mission",
        mission: "Choose introductions and conclusions that fit the writing purpose.",
        levels: ["Level 1: Strong Introductions", "Level 2: Clear Conclusions"],
        quizTitle: "Introductions and Conclusions Quiz",
        quizFocus: "Openings, closings, hooks, claims, topics, and form-fit",
        steps: [
          intro("Level 1: Strong Introductions", "Before You Begin", "Get ready: begin with direction", "An introduction should help readers know where the writing is going. It may name the topic, state the opinion, or begin a story with a meaningful moment."),
          intro("Level 1: Strong Introductions", "Match the Form", "Openings depend on purpose", "A report introduction should clearly name the topic. An opinion introduction should introduce the claim. A narrative introduction should invite readers into the story."),
          question("Level 1: Strong Introductions", "Report Introduction", "Which introduction best fits a report about how cranes are used in construction?", ["Cranes help builders lift heavy materials safely on construction sites.", "I once saw a tall crane near a road.", "Construction can be noisy sometimes."], "Cranes help builders lift heavy materials safely on construction sites.", "Correct. It clearly introduces the topic.", "A report opening should name the focus."),
          question("Level 1: Strong Introductions", "Opinion Introduction", "Which introduction best starts an opinion paragraph?", ["Our class should start a book exchange because it would help students share good books.", "Books can be found in many places.", "Last Tuesday, I put a book on my desk."], "Our class should start a book exchange because it would help students share good books.", "Yes. It gives a claim and direction.", "Look for the opinion."),
          question("Level 1: Strong Introductions", "Narrative Opening", "Which opening best starts a story?", ["The canoe scraped against the rocks just as the fog covered the shore.", "Canoes are boats that people can paddle.", "This story will be about a canoe."], "The canoe scraped against the rocks just as the fog covered the shore.", "Correct. It begins with a story moment.", "A narrative opening can pull readers into action."),
          question("Level 1: Strong Introductions", "True or False", "An introduction should give readers a helpful starting point.", ["True", "False"], "True", "Correct. It prepares the reader.", "Openings guide readers."),
          complete("Level 1: Strong Introductions", "Level 1 Complete", "You practised choosing strong introductions."),
          intro("Level 2: Clear Conclusions", "End With Purpose", "A conclusion should feel connected", "A conclusion should not feel pasted on. It should connect to the main idea, claim, lesson, or story problem."),
          question("Level 2: Clear Conclusions", "Opinion Conclusion", "Which conclusion best closes an opinion paragraph about using reusable water bottles?", ["Reusable bottles are a simple way for our class to reduce waste each day.", "Water bottles can be different sizes.", "Some bottles have lids that twist."], "Reusable bottles are a simple way for our class to reduce waste each day.", "Correct. It returns to the opinion.", "A conclusion should close the claim."),
          question("Level 2: Clear Conclusions", "Report Conclusion", "Which conclusion best fits an informational report about animal migration?", ["Migration helps many animals find food, safer weather, or places to raise young.", "Some animals are larger than others.", "My report has reached the end."], "Migration helps many animals find food, safer weather, or places to raise young.", "Yes. It sums up the topic.", "A report conclusion should leave a final understanding."),
          question("Level 2: Clear Conclusions", "Narrative Ending", "Which ending best fits a story about a girl learning courage?", ["Lena still felt nervous, but she stepped onto the stage and began her speech.", "The school had a stage with curtains.", "Speeches can happen in many places."], "Lena still felt nervous, but she stepped onto the stage and began her speech.", "Correct. It shows the character's change.", "A story ending should connect to character and problem."),
          question("Level 2: Clear Conclusions", "True or False", "A conclusion should connect back to the main idea or purpose.", ["True", "False"], "True", "Correct. Endings should connect.", "Closings should fit the piece."),
          complete("Level 2: Clear Conclusions", "Mission Complete", "You practised organizing introductions and conclusions.")
        ],
        quizQuestions: [
          quizQuestion("Introductions", "Report", "multipleChoice", "Which introduction best starts a report about wetlands?", ["Wetlands are important ecosystems that filter water and provide habitats.", "I walked near a wetland once.", "Wetlands can look muddy."], "Wetlands are important ecosystems that filter water and provide habitats.", "It introduces the topic clearly."),
          quizQuestion("Introductions", "Opinion", "multipleChoice", "Which introduction best starts an opinion paragraph?", ["Students should learn basic cooking skills because they are useful at home.", "Cooking uses tools and ingredients.", "My cousin once baked muffins."], "Students should learn basic cooking skills because they are useful at home.", "It states a claim."),
          quizQuestion("Introductions", "Narrative", "multipleChoice", "Which opening best starts a narrative?", ["The attic door creaked open, and a dusty box slid into view.", "Attics are found at the top of some houses.", "Boxes can hold many things."], "The attic door creaked open, and a dusty box slid into view.", "It begins with a story moment."),
          quizQuestion("Conclusions", "Opinion", "multipleChoice", "Which conclusion best closes an opinion paragraph about daily quiet reading?", ["Daily quiet reading would give students steady practice and a calm start.", "Some books are quiet to read.", "The classroom has chairs."], "Daily quiet reading would give students steady practice and a calm start.", "It returns to the claim."),
          quizQuestion("Conclusions", "Report", "multipleChoice", "Which conclusion best closes a report about food chains?", ["Food chains show how living things depend on one another for energy.", "Some animals eat plants.", "This is the last sentence."], "Food chains show how living things depend on one another for energy.", "It sums up the idea."),
          quizQuestion("Conclusions", "Narrative", "multipleChoice", "Which ending best fits a story about learning honesty?", ["Caleb returned the coin and felt relieved when he told the truth.", "Coins can be shiny.", "Caleb walked past the desk."], "Caleb returned the coin and felt relieved when he told the truth.", "It connects to honesty."),
          quizQuestion("Introductions", "True or False", "trueFalse", "A good introduction helps readers understand the direction of the writing.", ["True", "False"], "True", "Introductions guide readers."),
          quizQuestion("Conclusions", "True or False", "trueFalse", "A conclusion should feel connected to the piece, not dropped in from another topic.", ["True", "False"], "True", "Endings should fit.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-4-revising-for-audience-purpose",
        title: "Revising for Audience and Purpose",
        learningGoal: "Students will choose revisions that make writing clearer for its audience and purpose.",
        successCriteria: [
          "I can identify whether a sentence fits the audience.",
          "I can choose words that fit the purpose.",
          "I can revise details so writing becomes clearer and stronger."
        ],
        vocabulary: ["revise", "audience", "purpose", "tone", "clarity"],
        teacherOverview: "Students practise revision choices that improve meaning, tone, and usefulness for readers.",
        lessonContent: [
          "Revision means improving ideas, organization, word choice, and clarity.",
          "A writer may revise to better fit the audience.",
          "A writer may revise to better fit the purpose.",
          "Tone is the attitude or feeling of the writing.",
          "Good revision keeps the intended meaning while making the writing stronger."
        ],
        activityTitle: "Revision Choice Mission",
        mission: "Choose revisions that better fit audience, purpose, tone, and clarity.",
        levels: ["Level 1: Audience and Tone", "Level 2: Clarity and Purpose"],
        quizTitle: "Revising for Audience and Purpose Quiz",
        quizFocus: "Audience, purpose, tone, precise wording, and clear revisions",
        steps: [
          intro("Level 1: Audience and Tone", "Before You Begin", "Get ready: revision improves writing", "Revision is more than fixing spelling. Writers revise to make ideas clearer, stronger, and better suited to the people who will read the writing."),
          intro("Level 1: Audience and Tone", "Think About Readers", "Choose words for the audience", "Directions for younger students may need shorter steps. A report for class may need precise vocabulary. A thank-you note may need a warm and respectful tone."),
          question("Level 1: Audience and Tone", "Younger Audience", "Which revision best fits younger students?", ["Put your lunch bag on the shelf, then sit on the carpet.", "Place your food container in the classroom storage area.", "Keep your lunch bag where the class usually stores lunches."], "Put your lunch bag on the shelf, then sit on the carpet.", "Correct. It is clear and age-appropriate.", "Choose simple, direct wording."),
          question("Level 1: Audience and Tone", "Respectful Tone", "Which revision has the most respectful wording for a formal note?", ["Could we please consider adding more shade near the playground?", "The playground would be better if shade were added soon.", "Students need more shade because the playground gets very hot."], "Could we please consider adding more shade near the playground?", "Yes. It is polite and clear.", "Respectful does not mean weak."),
          question("Level 1: Audience and Tone", "Purpose Fit", "Purpose: explain how to care for a pet rabbit. Which sentence fits best?", ["Fresh water should be available every day.", "Rabbits need a quiet place to rest.", "A rabbit's cage should be cleaned often."], "Fresh water should be available every day.", "Correct. It gives clear care information.", "Match the sentence to the purpose."),
          question("Level 1: Audience and Tone", "True or False", "The same idea may need different wording for different audiences.", ["True", "False"], "True", "Correct. Audience affects wording.", "Writers adjust for readers."),
          complete("Level 1: Audience and Tone", "Level 1 Complete", "You practised revising for audience and tone."),
          intro("Level 2: Clarity and Purpose", "Make Meaning Clearer", "Remove confusion", "Revision can fix vague words, unclear pronouns, weak details, or sentences that wander from the purpose."),
          question("Level 2: Clarity and Purpose", "Precise Word", "Which revision uses the most precise verb?", ["The hawk soared above the field.", "The hawk went above the field.", "The hawk was above the field."], "The hawk soared above the field.", "Correct. Soared gives a clearer action.", "Precise words help readers picture the idea."),
          question("Level 2: Clarity and Purpose", "Clear Pronoun", "Which revision is clearest? 'Emma gave Sara her notebook after class.'", ["Emma gave Sara Emma's notebook after class.", "Emma gave Sara her notebook after class.", "She gave her the notebook after it happened."], "Emma gave Sara Emma's notebook after class.", "Yes. The owner is clear.", "Clarify who or what a pronoun means."),
          question("Level 2: Clarity and Purpose", "Remove Off-Topic Detail", "Purpose: explain how to prepare for a science fair display. Which sentence should probably be removed?", ["The display board can be set up near the cafeteria.", "Labels should be large enough to read.", "The display should show the question and results."], "The display board can be set up near the cafeteria.", "Correct. It is about location, not preparing the display itself.", "Remove details that do not belong."),
          question("Level 2: Clarity and Purpose", "True or False", "Revision can improve a sentence without changing the main meaning.", ["True", "False"], "True", "Correct. Revision keeps the idea and improves it.", "Revision is improvement."),
          complete("Level 2: Clarity and Purpose", "Mission Complete", "You practised revising for clarity and purpose.")
        ],
        quizQuestions: [
          quizQuestion("Revision", "Audience", "multipleChoice", "Which sentence best fits directions for younger students?", ["Wash your hands, dry them, and line up by the door.", "Clean your hands carefully before the class leaves.", "After handwashing, wait where the teacher can see you."], "Wash your hands, dry them, and line up by the door.", "It is clear and direct."),
          quizQuestion("Revision", "Tone", "multipleChoice", "Which revision has the most respectful tone?", ["Please return the borrowed book by Friday so others can use it.", "The book needs to come back by Friday for the next reader.", "Please remember that other students are waiting for the book."], "Please return the borrowed book by Friday so others can use it.", "It is respectful and clear."),
          quizQuestion("Revision", "Purpose", "multipleChoice", "Purpose: explain how to stay safe near a campfire. Which detail fits best?", ["Keep a bucket of water nearby in case sparks spread.", "Stand where smoke will not blow into your face.", "Use a long stick if an adult says you may roast food."], "Keep a bucket of water nearby in case sparks spread.", "It supports the safety purpose."),
          quizQuestion("Revision", "Precise Verb", "multipleChoice", "Which sentence uses the most precise verb?", ["The creek rushed over the rocks.", "The creek went over the rocks.", "The creek was by the rocks."], "The creek rushed over the rocks.", "Rushed is precise."),
          quizQuestion("Revision", "Pronoun Clarity", "multipleChoice", "Which revision is clearest? 'Lucas told Ben his idea was ready.'", ["Lucas told Ben that Lucas's idea was ready.", "Lucas told Ben his idea was ready.", "He told him it was ready."], "Lucas told Ben that Lucas's idea was ready.", "It clarifies whose idea."),
          quizQuestion("Revision", "Off Topic", "multipleChoice", "Purpose: persuade the class to reduce paper waste. Which detail is least useful?", ["The classroom clock is above the recycling bin.", "Students often use only one side of scrap paper.", "A paper-saving tray could collect reusable sheets."], "The classroom clock is above the recycling bin.", "It is nearby but not useful support."),
          quizQuestion("Revision", "True or False", "trueFalse", "Revision can improve word choice, tone, and organization.", ["True", "False"], "True", "Revision improves writing."),
          quizQuestion("Revision", "True or False", "trueFalse", "Audience does not matter once the writer has chosen a topic.", ["True", "False"], "False", "Audience affects choices.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-4-publishing-reflecting",
        title: "Publishing and Reflecting",
        learningGoal: "Students will identify final publishing checks and reflect on writing choices.",
        successCriteria: [
          "I can choose final checks before sharing writing.",
          "I can identify what makes a piece ready for its audience.",
          "I can reflect on a writing strength and a next step."
        ],
        vocabulary: ["publish", "proofread", "format", "reflect", "next step"],
        teacherOverview: "Students practise final checks and simple reflection before sharing writing.",
        lessonContent: [
          "Publishing means preparing writing to share with an audience.",
          "Proofreading checks spelling, punctuation, capitals, and small errors.",
          "Formatting choices should make the writing easy to read.",
          "Reflection helps writers notice what improved and what to practise next.",
          "A piece is ready when it fits the purpose, audience, and final checklist."
        ],
        activityTitle: "Publish and Reflect Mission",
        mission: "Choose final checks and reflections that help writing become ready to share.",
        levels: ["Level 1: Ready to Publish", "Level 2: Reflect and Improve"],
        quizTitle: "Publishing and Reflecting Quiz",
        quizFocus: "Proofreading, formatting, audience readiness, reflection, and next steps",
        steps: [
          intro("Level 1: Ready to Publish", "Before You Begin", "Get ready: final checks matter", "Before sharing writing, writers check that the piece is clear, complete, and readable. This includes proofreading and formatting, but also checking that the writing still fits its purpose."),
          intro("Level 1: Ready to Publish", "Proofread and Format", "Help the reader", "Proofreading catches small errors. Formatting uses choices such as title, spacing, headings, or paragraphs so readers can follow the piece easily."),
          question("Level 1: Ready to Publish", "Proofreading", "Which check is proofreading?", ["checking capitals, punctuation, and spelling", "adding a new main idea after the conclusion", "changing the topic to something easier"], "checking capitals, punctuation, and spelling", "Correct. Proofreading checks surface errors.", "Proofreading is a final careful read."),
          question("Level 1: Ready to Publish", "Formatting", "Which formatting choice helps readers follow an informational report?", ["clear headings for each section", "larger spaces between random sentences", "a picture before every paragraph"], "clear headings for each section", "Yes. Headings guide readers.", "Formatting should make reading easier."),
          question("Level 1: Ready to Publish", "Final Read", "Before publishing an opinion paragraph, which question should the writer ask?", ["Did I state my claim and support it with reasons?", "Did I add a personal example near the end?", "Did I make my strongest sentence the longest?"], "Did I state my claim and support it with reasons?", "Correct. The check fits the purpose.", "Use the purpose as a checklist."),
          question("Level 1: Ready to Publish", "True or False", "Publishing checks should help the audience read and understand the work.", ["True", "False"], "True", "Correct. The audience still matters.", "Publishing is for sharing."),
          complete("Level 1: Ready to Publish", "Level 1 Complete", "You practised final publishing checks."),
          intro("Level 2: Reflect and Improve", "Reflect Like a Writer", "Notice strengths and next steps", "Reflection is not just saying the writing is good or bad. A useful reflection names one strength and one next step."),
          question("Level 2: Reflect and Improve", "Best Reflection", "Which reflection is most useful?", ["My reasons were clear, and next time I will add stronger evidence.", "My conclusion repeats my opinion, and my title is neat.", "My draft has three paragraphs, and next time I may add one more."], "My reasons were clear, and next time I will add stronger evidence.", "Correct. It names a strength and next step.", "Useful reflection is specific."),
          question("Level 2: Reflect and Improve", "Next Step", "A student's report has strong facts but confusing order. What is the best next step?", ["Group related facts under clearer headings.", "Add one more fact to each paragraph.", "Write a new introduction that names the topic."], "Group related facts under clearer headings.", "Yes. That matches the problem.", "Choose a next step that fixes the weakness."),
          question("Level 2: Reflect and Improve", "Audience Check", "A student is publishing directions for a Grade 2 class. Which final check matters most?", ["Are the steps short, clear, and in order?", "Does each step include a helpful reason?", "Are the headings written in a formal style?"], "Are the steps short, clear, and in order?", "Correct. The check fits the audience.", "Think about what the readers need."),
          question("Level 2: Reflect and Improve", "True or False", "A reflection can help a writer know what to practise next.", ["True", "False"], "True", "Correct. Reflection guides growth.", "Reflection looks back and ahead."),
          complete("Level 2: Reflect and Improve", "Mission Complete", "You practised publishing and reflection choices.")
        ],
        quizQuestions: [
          quizQuestion("Publishing", "Proofreading", "multipleChoice", "Which action is proofreading?", ["checking spelling and punctuation before sharing", "choosing a brand-new topic", "removing the whole introduction"], "checking spelling and punctuation before sharing", "Proofreading checks small errors."),
          quizQuestion("Publishing", "Formatting", "multipleChoice", "Which formatting choice helps a reader?", ["using headings to separate sections", "making all text crowded together", "hiding the title at the bottom"], "using headings to separate sections", "Headings organize information."),
          quizQuestion("Publishing", "Purpose Check", "multipleChoice", "Before publishing a narrative, which question fits best?", ["Does the ending connect to the story problem?", "Did I list three research sources?", "Does every paragraph state a claim?"], "Does the ending connect to the story problem?", "Narratives need connected endings."),
          quizQuestion("Publishing", "Audience Check", "multipleChoice", "Before sharing instructions with younger students, which check matters most?", ["Are the steps clear and in order?", "Does each step include a reason?", "Is the topic introduced in the first sentence?"], "Are the steps clear and in order?", "The audience needs usable steps."),
          quizQuestion("Reflection", "Specific Reflection", "multipleChoice", "Which reflection is most useful?", ["My introduction is clear, and next time I will organize my evidence better.", "My title fits the topic, and the paragraphs look even.", "My evidence is interesting, and I finished on time."], "My introduction is clear, and next time I will organize my evidence better.", "It names a strength and next step."),
          quizQuestion("Reflection", "Next Step", "multipleChoice", "A paragraph has a clear opinion, but the reasons do not explain enough. What next step fits best?", ["Add reasons that explain why the opinion makes sense.", "Rewrite the title so the opinion seems stronger.", "Move the conclusion closer to the beginning."], "Add reasons that explain why the opinion makes sense.", "The next step matches the need."),
          quizQuestion("Publishing", "True or False", "trueFalse", "Formatting should help the reader follow the writing.", ["True", "False"], "True", "Format supports reading."),
          quizQuestion("Reflection", "True or False", "trueFalse", "A useful reflection can include both a strength and a next step.", ["True", "False"], "True", "That makes reflection specific.")
        ]
      }),
      {
        id: "grade-5-language-unit-4-final-quiz",
        title: "Unit 4 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherOverview: "Use this quiz after students complete the Writing Forms and Research lessons.",
        teacherSummary: "The Unit 4 final quiz checks planning, narrative, opinion, informational writing, research notes, introductions, conclusions, revision, publishing, and reflection.",
        quiz: {
          title: "Writing Forms and Research Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Planning", "Purpose", "multipleChoice", "A student writes to convince the class to try a weekly cleanup job chart. What is the purpose?", ["to persuade with reasons", "to tell a fictional adventure", "to explain how charts are printed"], "to persuade with reasons", "The writer wants to convince."),
            quizQuestion("Part A: Planning", "Audience", "multipleChoice", "Which detail best fits directions for younger students?", ["Put your finished page in the class hand-in basket.", "Place completed materials in the proper classroom location.", "Put the page where your teacher usually collects work."], "Put your finished page in the class hand-in basket.", "The wording is clear for younger readers."),
            quizQuestion("Part B: Narrative", "Problem", "multipleChoice", "Which sentence gives a clear story problem?", ["The class display fell just before visitors arrived.", "The display leaned forward when students opened the door.", "The visitors arrived before the class expected them."], "The class display fell just before visitors arrived.", "The fallen display creates a problem."),
            quizQuestion("Part B: Narrative", "Event Order", "multipleChoice", "Which order makes the most sense?", ["The kite string snapped, the kite drifted into a tree, then the children asked for help.", "The children asked for help, the kite string snapped, then the kite flew normally.", "The children noticed the wind, packed the kite, then saw it in the tree."], "The kite string snapped, the kite drifted into a tree, then the children asked for help.", "The order follows cause and effect."),
            quizQuestion("Part C: Opinion", "Claim", "multipleChoice", "Which sentence states a clear opinion?", ["Our school should start a walking club because it would encourage healthy habits.", "Many students walk in hallways.", "A club can meet after lunch."], "Our school should start a walking club because it would encourage healthy habits.", "It states a supported claim."),
            quizQuestion("Part C: Opinion", "Evidence", "multipleChoice", "Claim: A class garden would help learning. Which evidence supports it best?", ["Students could measure plant growth and record changes each week.", "Gardens can have fences.", "Some students have seen gardens before."], "Students could measure plant growth and record changes each week.", "It connects the garden to learning."),
            quizQuestion("Part C: Opinion", "Tone", "multipleChoice", "Which sentence has the most respectful persuasive tone?", ["Please consider adding another recycling bin near the lunch area.", "A recycling bin near the lunch area would solve the problem.", "Students should agree that another recycling bin is needed."], "Please consider adding another recycling bin near the lunch area.", "It is polite and clear."),
            quizQuestion("Part D: Informational", "Focus", "multipleChoice", "Which topic is focused enough for a short informational report?", ["how a seed becomes a sunflower", "how flowers grow in spring", "why plants need sunlight"], "how a seed becomes a sunflower", "It can be explained in a short piece."),
            quizQuestion("Part D: Informational", "Heading", "multipleChoice", "Which heading best fits facts about what turtles eat?", ["Turtle Diet", "Turtle Habitat", "Turtle Features"], "Turtle Diet", "Diet means what an animal eats."),
            quizQuestion("Part D: Informational", "Order", "multipleChoice", "Which order best explains a process?", ["collect materials, build the frame, test the model, improve weak parts", "test the model, collect materials, improve parts, build the frame", "improve weak parts before anything has been built"], "collect materials, build the frame, test the model, improve weak parts", "The steps follow a sensible order."),
            quizQuestion("Part E: Research", "Source", "multipleChoice", "Question: How did voyageurs travel long distances? Which source fits best?", ["a history article about canoes and fur trade routes", "a history map showing fur trade posts", "a museum page about birchbark canoe building"], "a history article about canoes and fur trade routes", "It matches the research question."),
            quizQuestion("Part E: Research", "Notes", "multipleChoice", "Source: 'The heart pumps blood through the body.' Which note is best?", ["heart moves blood through body", "The heart pumps blood through the body.", "heart keeps blood moving"], "heart moves blood through body", "It is short and in the student's own words."),
            quizQuestion("Part E: Research", "Credit", "trueFalse", "Writers should keep track of sources so they can give credit and check information again.", ["True", "False"], "True", "Source tracking is useful and honest."),
            quizQuestion("Part F: Introductions", "Report Opening", "multipleChoice", "Which opening best starts a report about pulleys?", ["Pulleys are simple machines that help people lift or move loads.", "I saw a pulley once.", "This report starts right now."], "Pulleys are simple machines that help people lift or move loads.", "It introduces the topic."),
            quizQuestion("Part F: Conclusions", "Narrative Ending", "multipleChoice", "Which ending best fits a story about learning courage?", ["Although her voice shook, Tessa stepped forward and gave her answer.", "The classroom had windows.", "Answers can be written or spoken."], "Although her voice shook, Tessa stepped forward and gave her answer.", "It connects to courage."),
            quizQuestion("Part G: Revision", "Precise Word", "multipleChoice", "Which sentence uses the most precise verb?", ["The rabbit darted under the fence.", "The rabbit went under the fence.", "The rabbit was near the fence."], "The rabbit darted under the fence.", "Darted gives a clearer action."),
            quizQuestion("Part G: Revision", "Audience", "multipleChoice", "Which revision best fits a formal note to the principal?", ["Would it be possible to add another bench near the playground?", "Please add a playground bench because students need one.", "We think a new bench would make the playground better."], "Would it be possible to add another bench near the playground?", "It uses respectful wording."),
            quizQuestion("Part H: Publishing", "Proofreading", "multipleChoice", "Which check is proofreading?", ["checking capitals, punctuation, and spelling", "choosing a completely new topic", "adding a second conclusion after publishing"], "checking capitals, punctuation, and spelling", "Proofreading checks surface errors."),
            quizQuestion("Part H: Reflection", "Next Step", "multipleChoice", "A student says, 'My facts are strong, but my order is confusing.' What next step fits best?", ["Group related facts under headings.", "Add one more fact to each paragraph.", "Write a stronger closing sentence."], "Group related facts under headings.", "The next step matches the problem."),
            quizQuestion("Part I: Review", "True or False", "trueFalse", "Different writing forms can require different plans.", ["True", "False"], "True", "A story, report, and opinion paragraph are planned differently.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Writing Forms and Research mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The final unit quiz checks planning, narrative writing, opinion writing, informational writing, research notes, introductions and conclusions, revision, publishing, and reflection."
    }
  };

  window.PracticeStarUnit["grade-5-language-unit-4"] = unit;
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
