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
        "Use the lesson quiz as a scored reading check.",
        "Review missed questions before assigning the next Reading for Meaning lesson."
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
      assessmentPlan: "Use the activity for guided reading practice and the quiz to check independent understanding.",
      studentActivity: {
        type: "languageQuestionSet",
        version: "2026-08-26-language-unit-3-reading-1",
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
    id: "grade-5-language-unit-3",
    title: "Reading for Meaning",
    strand: "Comprehension: Understanding and Responding to Texts",
    unitGoal: "Students will read, listen to, and view texts carefully, identify main ideas and details, make inferences, compare texts, and explain their thinking with evidence.",
    lessons: [
      lesson({
        id: "grade-5-language-unit-3-text-evidence",
        title: "Choosing Just-Right Text Evidence",
        learningGoal: "Students will choose text evidence that strongly supports an answer.",
        successCriteria: [
          "I can find evidence that connects directly to the question.",
          "I can tell the difference between a detail and strong support.",
          "I can choose evidence that proves my answer, not just evidence that sounds interesting."
        ],
        vocabulary: ["evidence", "support", "quote", "detail", "prove"],
        teacherOverview: "Students practise choosing evidence that directly supports a reading answer.",
        lessonContent: [
          "Text evidence is information from the text that supports an answer.",
          "Strong evidence connects directly to the question being asked.",
          "A detail can be true but still not be the best evidence for a particular answer.",
          "A quote uses the author's exact words; a paraphrase says the idea in your own words.",
          "Good readers choose evidence that helps prove the answer they are giving."
        ],
        activityTitle: "Evidence Finder Mission",
        mission: "Choose the details that best support reading answers.",
        levels: ["Level 1: Match Evidence to the Question", "Level 2: Choose Stronger Support"],
        quizTitle: "Choosing Text Evidence Quiz",
        quizFocus: "Direct support, strong evidence, details, and paraphrasing",
        steps: [
          intro("Level 1: Match Evidence to the Question", "Before You Begin", "Get ready: evidence must match", "When you answer a reading question, do not choose a detail just because it is in the text. Choose evidence that helps prove your answer. Strong evidence matches the question closely."),
          intro("Level 1: Match Evidence to the Question", "Read the Question First", "Know what you are proving", "If the question asks why a character is nervous, look for words, actions, or thoughts that show nervousness. If the question asks where a story happens, look for setting clues instead."),
          question("Level 1: Match Evidence to the Question", "Setting Evidence", "Question: Where does the scene happen? Text: 'Maya tightened her skates and stepped onto the frozen pond.' Which evidence best answers the question?", ["stepped onto the frozen pond", "tightened her skates", "Maya stepped carefully"], "stepped onto the frozen pond", "Correct. That evidence tells where the scene happens.", "Look for the place clue."),
          question("Level 1: Match Evidence to the Question", "Feeling Evidence", "Text: 'Jonah reread the note, rubbed his forehead, and took a slow breath before knocking.' What evidence best supports that Jonah feels nervous?", ["reread the note and took a slow breath", "knocking happened after the note", "Jonah read before knocking"], "reread the note and took a slow breath", "Yes. Those actions suggest nervousness.", "Look for actions that show how he feels."),
          question("Level 1: Match Evidence to the Question", "True Detail or Strong Evidence", "Text: 'The class planted beans on Monday. By Friday, two tiny green shoots had pushed through the soil.' Which evidence best supports that the beans began to grow?", ["two tiny green shoots had pushed through the soil", "the class planted beans on Monday", "the beans were planted in soil"], "two tiny green shoots had pushed through the soil", "Correct. The shoots are the best proof of growth.", "Find the detail that proves growth happened."),
          question("Level 1: Match Evidence to the Question", "True or False", "A detail can be true but not be the best evidence for the question.", ["True", "False"], "True", "Correct. Evidence must fit the question.", "A true detail is not always the strongest support."),
          complete("Level 1: Match Evidence to the Question", "Level 1 Complete", "You practised matching evidence to a question."),
          intro("Level 2: Choose Stronger Support", "Compare Evidence", "Some evidence is stronger", "Two details may both be true, but one may support your answer better. Strong evidence is specific and connected to the exact answer."),
          question("Level 2: Choose Stronger Support", "Best Support", "Answer: The trail was difficult. Which evidence supports this answer best?", ["The hikers climbed over fallen branches and crossed muddy ground.", "The hikers started walking after breakfast.", "The trail was near a small lake."], "The hikers climbed over fallen branches and crossed muddy ground.", "Correct. Fallen branches and mud show difficulty.", "Choose the evidence that proves difficult."),
          question("Level 2: Choose Stronger Support", "Quote or Paraphrase", "Which sentence is a paraphrase of 'The storm rattled the windows all night'?", ["The wind and rain shook the windows through the night.", "The storm rattled the windows all night.", "The windows made noise during the storm."], "The wind and rain shook the windows through the night.", "Yes. It says the idea in different words.", "A paraphrase keeps the meaning but changes the wording."),
          question("Level 2: Choose Stronger Support", "Evidence for Character", "Text: 'Ava shared her lunch with Ben after he dropped his sandwich.' What does this evidence best show about Ava?", ["She is thoughtful.", "She is prepared for lunch.", "She notices what happens around her."], "She is thoughtful.", "Correct. Sharing lunch shows care for someone else.", "Ask what the action reveals."),
          question("Level 2: Choose Stronger Support", "True or False", "Good evidence should help prove the answer, not just repeat a detail that is nearby in the text.", ["True", "False"], "True", "Correct. Evidence should support the answer.", "Evidence has a job."),
          complete("Level 2: Choose Stronger Support", "Mission Complete", "You practised choosing stronger evidence.")
        ],
        quizQuestions: [
          quizQuestion("Text Evidence", "Setting", "multipleChoice", "Question: Where is the story happening? Text: 'The smell of chlorine filled the air as Caleb waited beside lane three.' Which evidence best answers the question?", ["chlorine and lane three", "Caleb waited beside lane three", "the air smelled strong"], "chlorine and lane three", "Those details point to a pool."),
          quizQuestion("Text Evidence", "Feeling", "multipleChoice", "Text: 'Nora checked the clock twice and tapped her pencil while she waited for her turn.' What evidence best shows Nora is impatient or nervous?", ["checked the clock twice and tapped her pencil", "waited for her turn", "Nora was next soon"], "checked the clock twice and tapped her pencil", "Those actions support the feeling."),
          quizQuestion("Text Evidence", "Best Support", "multipleChoice", "Answer: The garden needed rain. Which evidence best supports the answer?", ["The leaves drooped and the soil was cracked.", "The garden had carrots and beans.", "The garden had not been watered that morning."], "The leaves drooped and the soil was cracked.", "Drooping leaves and cracked soil support the answer."),
          quizQuestion("Text Evidence", "Paraphrase", "multipleChoice", "Which is a paraphrase of 'The room grew silent when the principal entered'?", ["Everyone became quiet when the principal came in.", "The room grew silent when the principal entered.", "The principal walked into the room."], "Everyone became quiet when the principal came in.", "A paraphrase says the same idea in new words."),
          quizQuestion("Text Evidence", "True or False", "trueFalse", "The strongest evidence is the detail that connects most clearly to the question.", ["True", "False"], "True", "Strong evidence directly supports the answer."),
          quizQuestion("Text Evidence", "True or False", "trueFalse", "Any sentence from the text is equally useful as evidence.", ["True", "False"], "False", "Evidence should be chosen for the answer."),
          quizQuestion("Text Evidence", "Character", "multipleChoice", "Text: 'Eli stayed after practice to help stack the chairs without being asked.' What does this best show?", ["Eli is helpful.", "Eli follows the practice schedule.", "Eli knows where the chairs belong."], "Eli is helpful.", "His action supports that trait."),
          quizQuestion("Text Evidence", "Precision", "multipleChoice", "Which habit helps most when choosing evidence?", ["Read the question, choose an answer, then find a detail that proves it.", "Use a detail from the same paragraph even if it supports a different idea.", "Choose a sentence that sounds important before checking the question."], "Read the question, choose an answer, then find a detail that proves it.", "Evidence should support the answer.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-3-main-idea-details",
        title: "Main Idea and Supporting Details",
        learningGoal: "Students will identify the main idea of a text and choose details that support it.",
        successCriteria: [
          "I can tell what a paragraph or short text is mostly about.",
          "I can choose details that support the main idea.",
          "I can avoid choosing a small detail as the main idea."
        ],
        vocabulary: ["main idea", "supporting detail", "topic", "summary", "mostly about"],
        teacherOverview: "Students practise separating the main idea from smaller supporting details.",
        lessonContent: [
          "The topic tells what the text is about in one or two words.",
          "The main idea tells the most important message or point about the topic.",
          "Supporting details explain, prove, or give examples of the main idea.",
          "A main idea is usually broader than one small detail.",
          "A good summary includes the main idea and the most important details without retelling every sentence."
        ],
        activityTitle: "Main Idea Builder",
        mission: "Find what a text is mostly about and choose the details that support it.",
        levels: ["Level 1: Find the Big Idea", "Level 2: Choose Supporting Details"],
        quizTitle: "Main Idea and Details Quiz",
        quizFocus: "Topics, main ideas, supporting details, and short summaries",
        steps: [
          intro("Level 1: Find the Big Idea", "Before You Begin", "Get ready: topic is not enough", "A topic might be 'bees,' but a main idea says more, such as 'Bees help plants grow by carrying pollen.' The main idea is the big point the details support."),
          intro("Level 1: Find the Big Idea", "Do Not Pick a Tiny Detail", "Look for the whole point", "A detail may be true, but it is usually too small to be the main idea. Ask: What are most of the sentences helping me understand?"),
          question("Level 1: Find the Big Idea", "Topic or Main Idea?", "Text: 'Beavers build dams from branches and mud. These dams slow moving water and create ponds. Many fish, birds, and insects use these ponds as homes.' Which is the best main idea?", ["Beaver dams create helpful habitats for other living things.", "Beavers use branches and mud.", "Some insects live near ponds."], "Beaver dams create helpful habitats for other living things.", "Correct. It covers the whole paragraph.", "Choose the answer that includes most of the details."),
          question("Level 1: Find the Big Idea", "Mostly About", "Text: 'During a class debate, students listened to each speaker, took notes, and responded politely. Even when they disagreed, they gave reasons instead of interrupting.' What is the text mostly about?", ["Respectful debate habits", "Taking notes with pencils", "The number of speakers"], "Respectful debate habits", "Yes. The details all point to respectful discussion.", "Look for the idea all details support."),
          question("Level 1: Find the Big Idea", "Too Narrow", "Which choice is too narrow to be the main idea of a paragraph about three ways libraries help communities?", ["Libraries offer useful services to communities.", "Some libraries have story time.", "Communities can use public spaces."], "Some libraries have story time.", "Correct. Story time is one detail, not the whole idea.", "Too narrow means it covers only one part."),
          question("Level 1: Find the Big Idea", "True or False", "A main idea should fit most of the important details in the text.", ["True", "False"], "True", "Correct. Details should connect to the main idea.", "The main idea is the big point."),
          complete("Level 1: Find the Big Idea", "Level 1 Complete", "You practised finding main ideas."),
          intro("Level 2: Choose Supporting Details", "Details Have a Job", "Details support the main idea", "Supporting details are not just extra facts. They help explain the main idea. If a detail does not connect to the main idea, it may belong in another paragraph."),
          question("Level 2: Choose Supporting Details", "Best Detail", "Main idea: Regular reading helps students build vocabulary. Which detail best supports it?", ["Students meet new words in stories, articles, and poems.", "Students can choose books that match their interests.", "Students may read silently or with a group."], "Students meet new words in stories, articles, and poems.", "Correct. The detail explains how reading builds vocabulary.", "Choose the detail that explains the main idea."),
          question("Level 2: Choose Supporting Details", "Summary Choice", "Text: 'The school garden gives students a place to study plants. Classes measure growth, compare soil, and learn how weather affects seedlings.' Which summary is best?", ["The school garden helps students learn about plants through observation.", "The garden has soil and seedlings.", "Students go outside sometimes."], "The school garden helps students learn about plants through observation.", "Yes. It includes the main point without retelling every detail.", "A summary should be brief and complete."),
          question("Level 2: Choose Supporting Details", "Unrelated Detail", "Main idea: Bicycling safely requires attention. Which detail does not belong?", ["A cyclist should check traffic before turning.", "A helmet should fit properly.", "Some cyclists ride longer distances on weekends."], "Some cyclists ride longer distances on weekends.", "Correct. Distance does not support the safety idea.", "Look for the detail that does not help prove the main idea."),
          question("Level 2: Choose Supporting Details", "True or False", "A summary should retell every small detail in the same order.", ["True", "False"], "False", "Correct. A summary should focus on the main idea and key details.", "A summary is shorter than the text."),
          complete("Level 2: Choose Supporting Details", "Mission Complete", "You practised main ideas, details, and summaries.")
        ],
        quizQuestions: [
          quizQuestion("Main Idea", "Topic vs Main Idea", "multipleChoice", "Text: 'A rain barrel catches water from the roof. Families can use this water for gardens during dry weeks. This saves treated water for other needs.' What is the best main idea?", ["Rain barrels help conserve water for outdoor use.", "Roofs can be wet after rain.", "Families sometimes have gardens."], "Rain barrels help conserve water for outdoor use.", "It covers the whole paragraph."),
          quizQuestion("Main Idea", "Mostly About", "multipleChoice", "A paragraph explains how guide dogs are trained, how they help people move safely, and why they must stay focused. What is it mostly about?", ["The work and training of guide dogs", "Dogs that enjoy walking", "People crossing streets"], "The work and training of guide dogs", "This is broad enough for all details."),
          quizQuestion("Details", "Supporting Detail", "multipleChoice", "Main idea: A good map helps hikers stay on a trail. Which detail supports it best?", ["Trail symbols show turns, water, and campsites.", "Some hikers carry snacks.", "Maps can be folded."], "Trail symbols show turns, water, and campsites.", "Symbols help hikers navigate."),
          quizQuestion("Details", "Too Narrow", "multipleChoice", "Which main idea is too narrow for a text about different ways music can affect mood, memory, and teamwork?", ["Music can help people in several ways.", "A drum keeps a steady beat.", "People listen to music."], "A drum keeps a steady beat.", "It is only one small detail."),
          quizQuestion("Summary", "Best Summary", "multipleChoice", "Which summary is best for a paragraph about how recycling paper saves trees, reduces waste, and uses less energy?", ["Recycling paper can protect resources in several ways.", "Recycling paper helps save trees.", "Recycling paper is one way people reduce waste."], "Recycling paper can protect resources in several ways.", "It includes the main point and key idea."),
          quizQuestion("Details", "Unrelated Detail", "multipleChoice", "Main idea: A class newsletter shares important school information. Which detail does not support it?", ["It lists upcoming events.", "It reminds families about forms.", "It is printed on white paper."], "It is printed on white paper.", "Paper colour does not support the purpose."),
          quizQuestion("Main Idea", "True or False", "trueFalse", "The main idea should be wider than one small example.", ["True", "False"], "True", "A main idea covers the important details."),
          quizQuestion("Summary", "True or False", "trueFalse", "A summary should include the main idea and key details, not every sentence.", ["True", "False"], "True", "A summary is shorter than the original.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-3-making-inferences",
        title: "Making Inferences",
        learningGoal: "Students will combine text clues with what they already know to make reasonable inferences.",
        successCriteria: [
          "I can find clues that are stated in the text.",
          "I can use those clues to make a reasonable inference.",
          "I can avoid inferences that go farther than the evidence allows."
        ],
        vocabulary: ["inference", "clue", "background knowledge", "reasonable", "evidence"],
        teacherOverview: "Students practise making inferences that are supported by text clues.",
        lessonContent: [
          "An inference is a thoughtful idea based on clues and what the reader already knows.",
          "A good inference is not a wild guess; it must fit the evidence.",
          "Text clues can include actions, words, thoughts, setting details, or repeated ideas.",
          "Readers should be willing to adjust an inference when new evidence appears.",
          "A careful answer explains both the inference and the clue that supports it."
        ],
        activityTitle: "Inference Investigator",
        mission: "Use text clues to make careful inferences.",
        levels: ["Level 1: Find the Clues", "Level 2: Choose a Reasonable Inference"],
        quizTitle: "Making Inferences Quiz",
        quizFocus: "Text clues, reasonable inferences, and evidence-based thinking",
        steps: [
          intro("Level 1: Find the Clues", "Before You Begin", "Get ready: infer carefully", "Authors do not always tell readers everything directly. You may need to use clues. A good inference fits the text and can be explained with evidence."),
          intro("Level 1: Find the Clues", "Use Clues Plus Thinking", "Do not guess wildly", "If a character grabs an umbrella and looks at dark clouds, you might infer rain is coming. That inference uses a text clue and common sense. If there is no clue, the answer is probably too big a guess."),
          question("Level 1: Find the Clues", "Feeling Clue", "Text: 'Sofia smiled at the letter and read the first line again.' What can you reasonably infer?", ["Sofia is pleased by the letter.", "Sofia wants to memorize the letter.", "Sofia is checking the letter for mistakes."], "Sofia is pleased by the letter.", "Correct. Smiling and rereading suggest she is pleased.", "Use the action clue."),
          question("Level 1: Find the Clues", "Weather Clue", "Text: 'Dad checked the dark sky and moved the picnic basket back inside.' What can you infer?", ["He thinks rain may be coming.", "He dislikes picnic baskets.", "He has already eaten lunch."], "He thinks rain may be coming.", "Yes. The dark sky and moving inside support that inference.", "Look at both clues together."),
          question("Level 1: Find the Clues", "Character Clue", "Text: 'Marcus waited until everyone had a turn before choosing a game for himself.' Which trait does this best support?", ["patient", "careless", "surprised"], "patient", "Correct. Waiting for others shows patience.", "Actions can reveal character."),
          question("Level 1: Find the Clues", "True or False", "An inference should be supported by clues from the text.", ["True", "False"], "True", "Correct. Evidence keeps an inference reasonable.", "A guess without clues is weak."),
          complete("Level 1: Find the Clues", "Level 1 Complete", "You practised finding clues for inferences."),
          intro("Level 2: Choose a Reasonable Inference", "Stay Close to the Evidence", "Avoid going too far", "Some answers may sound possible, but they go beyond what the text says. Choose the inference that fits the clues without adding too much."),
          question("Level 2: Choose a Reasonable Inference", "Best Inference", "Text: 'The recipe said ten minutes, but the muffins were still pale and soft in the middle.' What is the best inference?", ["They need more time to bake.", "The oven is broken forever.", "The recipe was written for soup."], "They need more time to bake.", "Correct. Pale and soft supports needing more baking time.", "Choose the answer closest to the evidence."),
          question("Level 2: Choose a Reasonable Inference", "Not Enough Evidence", "Text: 'Amir closed his notebook when the bell rang.' Which inference goes too far?", ["Amir was upset for the rest of the day.", "Class may be ending.", "Amir was using a notebook."], "Amir was upset for the rest of the day.", "Yes. The text does not give enough evidence for that bigger claim.", "Be careful with claims that go past the evidence."),
          question("Level 2: Choose a Reasonable Inference", "Changing an Inference", "A reader first thinks a character is angry, but later the text says the character was worried. What should the reader do?", ["Adjust the inference using the new clue.", "Keep both ideas but explain only the first one.", "Choose the idea that sounded strongest at the beginning."], "Adjust the inference using the new clue.", "Correct. Readers update inferences as evidence grows.", "New evidence matters."),
          question("Level 2: Choose a Reasonable Inference", "True or False", "A reasonable inference can be explained with clues from the text.", ["True", "False"], "True", "Correct. You should be able to explain your thinking.", "Evidence supports thinking."),
          complete("Level 2: Choose a Reasonable Inference", "Mission Complete", "You practised making careful inferences.")
        ],
        quizQuestions: [
          quizQuestion("Inference", "Feeling", "multipleChoice", "Text: 'Leah held the envelope tightly and whispered, \"I hope it is good news.\"' What can you infer?", ["Leah is anxious or hopeful.", "Leah has already read the news.", "Leah is sure the news is bad."], "Leah is anxious or hopeful.", "Her words and action support this."),
          quizQuestion("Inference", "Setting Clue", "multipleChoice", "Text: 'The announcer called the next swimmer to lane four as the crowd cheered.' Where is this likely happening?", ["At a swim meet", "At a school assembly", "At an outdoor race"], "At a swim meet", "Lane four and swimmer are clues."),
          quizQuestion("Inference", "Trait", "multipleChoice", "Text: 'Nadia checked every answer twice before handing in her quiz.' Which trait fits best?", ["careful", "worried", "competitive"], "careful", "Checking answers twice shows care."),
          quizQuestion("Inference", "Best Inference", "multipleChoice", "Text: 'The dog stood by the empty bowl and looked toward the cupboard.' What is the best inference?", ["The dog may want food.", "The dog expects someone to move the bowl.", "The dog is waiting for a walk."], "The dog may want food.", "The empty bowl and cupboard are clues."),
          quizQuestion("Inference", "Too Far", "multipleChoice", "Text: 'Cole missed the bus and sighed.' Which inference goes too far?", ["Cole missed an important appointment.", "Cole may feel disappointed.", "Cole did not catch the bus."], "Cole missed an important appointment.", "The evidence does not support that extra claim."),
          quizQuestion("Inference", "Adjusting", "multipleChoice", "What should readers do when new evidence changes an earlier inference?", ["Revise the inference.", "Mention the new clue but keep the old inference unchanged.", "Use only the first clue because it came first."], "Revise the inference.", "Good readers update their thinking."),
          quizQuestion("Inference", "True or False", "trueFalse", "An inference is stronger when it uses both text clues and careful thinking.", ["True", "False"], "True", "Both parts matter."),
          quizQuestion("Inference", "True or False", "trueFalse", "If an inference sounds interesting, it is correct even without evidence.", ["True", "False"], "False", "Evidence is needed.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-3-character-setting-plot",
        title: "Character, Setting, and Plot",
        learningGoal: "Students will identify how characters, setting, and plot events work together in a story.",
        successCriteria: [
          "I can identify important character actions and traits.",
          "I can explain how the setting affects the story.",
          "I can place plot events in a sensible order."
        ],
        vocabulary: ["character", "setting", "plot", "problem", "solution"],
        teacherOverview: "Students practise noticing how story elements connect instead of studying them as separate labels.",
        lessonContent: [
          "Characters are the people or beings in a story.",
          "Setting tells when and where a story happens.",
          "Plot is the chain of events, including the problem and how it is handled.",
          "A setting can affect what characters are able to do.",
          "A character's choices often move the plot forward."
        ],
        activityTitle: "Story Elements Mission",
        mission: "Track characters, setting, and plot events to understand how a story works.",
        levels: ["Level 1: Notice Story Elements", "Level 2: Connect Events and Choices"],
        quizTitle: "Character, Setting, and Plot Quiz",
        quizFocus: "Story elements, character traits, setting effects, problem, and solution",
        steps: [
          intro("Level 1: Notice Story Elements", "Before You Begin", "Get ready: story parts work together", "A story is more than separate labels. Characters make choices, settings create possibilities or limits, and plot events show what happens because of those choices."),
          intro("Level 1: Notice Story Elements", "Problem and Solution", "Follow the plot", "Many stories have a problem that matters to the character. As the plot moves forward, the character responds. The solution shows how the problem is solved, improved, or understood differently."),
          question("Level 1: Notice Story Elements", "Character Trait", "Text: 'Lily practised the same piano measure six times before trying the whole song again.' Which trait fits best?", ["determined", "careful", "musical"], "determined", "Correct. Practising again shows determination.", "Look at what Lily does."),
          question("Level 1: Notice Story Elements", "Setting", "Text: 'The lantern swung as the canoe drifted toward the dock after sunset.' Which detail tells the setting?", ["canoe drifted toward the dock after sunset", "the lantern swung", "the canoe drifted slowly"], "canoe drifted toward the dock after sunset", "Yes. It gives place and time clues.", "Setting tells where and when."),
          question("Level 1: Notice Story Elements", "Problem", "Text: 'The team arrived at the field, but the only soccer ball was flat.' What is the problem?", ["The ball cannot be used properly.", "The team needs to begin without warming up.", "The field may not be ready for a game."], "The ball cannot be used properly.", "Correct. A flat ball creates the problem.", "Find what gets in the way."),
          question("Level 1: Notice Story Elements", "True or False", "The setting can affect what characters are able to do.", ["True", "False"], "True", "Correct. Place and time can create limits or opportunities.", "Think about weather, location, or time."),
          complete("Level 1: Notice Story Elements", "Level 1 Complete", "You practised identifying story elements."),
          intro("Level 2: Connect Events and Choices", "Cause and Effect in Plot", "Ask what changed", "Plot events often connect by cause and effect. One event leads to another. A character's choice may make the problem better, worse, or clearer."),
          question("Level 2: Connect Events and Choices", "Event Order", "Which order makes the most sense?", ["The map tore, the group asked for directions, then they found the trail.", "The group found the trail, the map tore, then they asked for directions.", "The group asked for directions, then the map tore after they reached the trail."], "The map tore, the group asked for directions, then they found the trail.", "Correct. The torn map causes the group to ask for help.", "Look for cause and effect."),
          question("Level 2: Connect Events and Choices", "Choice Moves Plot", "Text: 'Instead of hiding the broken model, Theo told his group what happened and offered to help repair it.' How does Theo's choice affect the plot?", ["It gives the group a way to solve the problem honestly.", "It shifts the focus from the model to Theo's feelings only.", "It delays the problem because the group still does not know what happened."], "It gives the group a way to solve the problem honestly.", "Yes. His honest choice helps move toward a solution.", "Ask what changes because of the choice."),
          question("Level 2: Connect Events and Choices", "Setting Effect", "Text: 'Because the power went out, the family read by flashlight and cooked supper on the camp stove.' How does the setting affect the events?", ["The outage changes what the family can use.", "The family chooses camping activities for fun.", "The camp stove becomes the main problem."], "The outage changes what the family can use.", "Correct. The situation changes their choices.", "The power outage is the important condition."),
          question("Level 2: Connect Events and Choices", "True or False", "A character trait should be supported by actions or words in the story.", ["True", "False"], "True", "Correct. Traits need evidence.", "Actions reveal character."),
          complete("Level 2: Connect Events and Choices", "Mission Complete", "You practised connecting character, setting, and plot.")
        ],
        quizQuestions: [
          quizQuestion("Story Elements", "Character Trait", "multipleChoice", "Text: 'Owen stayed after art class to wash the paint trays even though recess had started.' Which trait fits best?", ["responsible", "helpful", "artistic"], "responsible", "His action shows responsibility."),
          quizQuestion("Story Elements", "Setting", "multipleChoice", "Text: 'Snow covered the driveway, and icicles hung from the porch roof.' What setting detail is shown?", ["It is winter or very cold.", "A storm has just ended.", "The family is leaving soon."], "It is winter or very cold.", "Snow and icicles are setting clues."),
          quizQuestion("Plot", "Problem", "multipleChoice", "Text: 'The costume zipper broke five minutes before the play began.' What is the problem?", ["The costume needs a quick repair.", "The actor needs to learn new lines.", "The play must move to a new setting."], "The costume needs a quick repair.", "The broken zipper creates the problem."),
          quizQuestion("Plot", "Event Order", "multipleChoice", "Which order makes the clearest plot sequence?", ["The key was lost, the class searched the room, then the cabinet was opened.", "The cabinet opened, the key was lost, then the class searched.", "The class searched after the cabinet was opened and before the key was lost."], "The key was lost, the class searched the room, then the cabinet was opened.", "The sequence follows cause and effect."),
          quizQuestion("Setting", "Effect", "multipleChoice", "How might a story set during a thunderstorm affect the plot?", ["Characters may need to change outdoor plans.", "Characters may feel nervous because of the noise.", "Characters may notice that the sky looks dark."], "Characters may need to change outdoor plans.", "Weather can limit choices."),
          quizQuestion("Character", "Evidence", "multipleChoice", "Which evidence best shows a character is generous?", ["She saves part of her snack for a classmate who forgot lunch.", "She offers to help carry a heavy box.", "She reminds her classmate about the lunch schedule."], "She saves part of her snack for a classmate who forgot lunch.", "Sharing supports generosity."),
          quizQuestion("Story Elements", "True or False", "trueFalse", "Plot events usually happen in an order that helps the story make sense.", ["True", "False"], "True", "Order helps readers follow the story."),
          quizQuestion("Story Elements", "True or False", "trueFalse", "A setting can affect what characters are able to do.", ["True", "False"], "True", "Setting can affect events and choices.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-3-theme-message",
        title: "Theme and Message",
        learningGoal: "Students will identify a story's theme or message and support it with evidence.",
        successCriteria: [
          "I can tell the difference between a topic and a theme.",
          "I can choose a theme that fits the whole story.",
          "I can support a theme with character choices and story events."
        ],
        vocabulary: ["theme", "message", "topic", "lesson", "evidence"],
        teacherOverview: "Students practise identifying themes that are supported by the whole story.",
        lessonContent: [
          "A topic is one word or phrase, such as friendship, courage, or honesty.",
          "A theme is a message about that topic, such as 'Honesty builds trust.'",
          "A strong theme fits the whole story, not just one small moment.",
          "Themes are supported by character choices, consequences, and changes.",
          "Different readers may word a theme differently, but the evidence still needs to fit."
        ],
        activityTitle: "Theme Tracker",
        mission: "Use story events and character choices to find a theme.",
        levels: ["Level 1: Topic or Theme", "Level 2: Support the Message"],
        quizTitle: "Theme and Message Quiz",
        quizFocus: "Topic, theme, message, evidence, and story events",
        steps: [
          intro("Level 1: Topic or Theme", "Before You Begin", "Get ready: theme says something", "A topic names what a story is about. A theme says a message about that topic. 'Friendship' is a topic. 'True friends tell the truth kindly' is a theme."),
          intro("Level 1: Topic or Theme", "Use the Whole Story", "Theme needs support", "Do not choose a theme from one tiny detail. Look at what the main character learns, how choices turn out, and what idea appears across the story."),
          question("Level 1: Topic or Theme", "Topic or Theme?", "Which choice is a theme rather than only a topic?", ["Courage means doing what is right even when it is hard.", "Courage", "A brave character"], "Courage means doing what is right even when it is hard.", "Correct. It gives a message about courage.", "A theme is usually a sentence."),
          question("Level 1: Topic or Theme", "Find the Topic", "A story is about two neighbours who learn to work together after arguing over a garden fence. What topic fits best?", ["cooperation", "winter weather", "lost treasure"], "cooperation", "Yes. Working together points to cooperation.", "Look for the big subject."),
          question("Level 1: Topic or Theme", "Theme Choice", "In a story, a student admits a mistake and earns back trust. Which theme fits best?", ["Telling the truth can help repair trust.", "Mistakes are impossible to fix.", "Trust depends on being perfect."], "Telling the truth can help repair trust.", "Correct. It fits the character's choice and result.", "Choose a message that fits the whole situation."),
          question("Level 1: Topic or Theme", "True or False", "A theme is usually broader than one small event.", ["True", "False"], "True", "Correct. Theme connects to the whole story.", "One event can support a theme, but does not usually state it all."),
          complete("Level 1: Topic or Theme", "Level 1 Complete", "You practised telling topics and themes apart."),
          intro("Level 2: Support the Message", "Evidence for Theme", "Use character choices", "A theme is stronger when you can support it. Look for what the character chooses, what happens because of the choice, and what the character understands by the end."),
          question("Level 2: Support the Message", "Best Evidence", "Theme: Small acts of kindness can encourage others. Which event supports it best?", ["Mina leaves a kind note, and later her classmate helps someone else.", "Mina writes neatly in her notebook.", "Mina and her classmate sit near each other."], "Mina leaves a kind note, and later her classmate helps someone else.", "Correct. The kindness affects someone else.", "Look for an event that shows the message."),
          question("Level 2: Support the Message", "Too Strong", "Which theme goes too far for a story where a student learns to ask for help with one difficult project?", ["Asking for help can be wise when a task is difficult.", "A person should ask for help before trying alone.", "One project can teach a student many lessons."], "Asking for help can be wise when a task is difficult.", "Yes. It fits without overclaiming.", "Choose the theme that fits the story without stretching it."),
          question("Level 2: Support the Message", "Character Change", "At first, Ben refuses to listen to advice. By the end, he accepts coaching and improves. Which theme fits?", ["Being teachable can help a person grow.", "Coaching is useful only after a person struggles.", "Winning is the clearest proof of growth."], "Being teachable can help a person grow.", "Correct. His change supports the theme.", "Look at how Ben changes."),
          question("Level 2: Support the Message", "True or False", "Two readers may word a theme differently if both versions fit the evidence.", ["True", "False"], "True", "Correct. Themes can be phrased in more than one clear way.", "Evidence is the important test."),
          complete("Level 2: Support the Message", "Mission Complete", "You practised finding and supporting themes.")
        ],
        quizQuestions: [
          quizQuestion("Theme", "Topic or Theme", "multipleChoice", "Which choice is a theme?", ["Perseverance can help people finish hard tasks.", "Perseverance", "A long race"], "Perseverance can help people finish hard tasks.", "A theme gives a message."),
          quizQuestion("Theme", "Topic", "multipleChoice", "A story is about classmates who learn to forgive after a misunderstanding. Which topic fits best?", ["forgiveness", "competition", "curiosity"], "forgiveness", "The story focuses on forgiveness."),
          quizQuestion("Theme", "Best Theme", "multipleChoice", "A character brags about doing everything alone, then learns that teamwork improves the project. Which theme fits?", ["Working with others can make good ideas stronger.", "Teamwork matters only when a project is unfinished.", "Confidence is the most important part of success."], "Working with others can make good ideas stronger.", "It matches the change in the story."),
          quizQuestion("Evidence", "Best Support", "multipleChoice", "Theme: Patience can help solve problems. Which evidence supports it best?", ["A character tries several careful solutions before fixing the kite.", "A character studies the kite before flying it.", "A character asks why the kite string is tangled."], "A character tries several careful solutions before fixing the kite.", "Careful repeated effort supports patience."),
          quizQuestion("Theme", "Too Broad", "multipleChoice", "Which theme is too broad for a story about one child learning to apologize after hurting a friend's feelings?", ["People can never avoid hurting others.", "A sincere apology can help repair a friendship.", "Feelings matter in friendships."], "People can never avoid hurting others.", "The evidence does not support such a broad claim."),
          quizQuestion("Theme", "Character Change", "multipleChoice", "A character begins by giving up quickly but later keeps practising. What theme might fit?", ["Growth often takes steady effort.", "Trying harder is the same as succeeding.", "Practice matters most when it is noticed."], "Growth often takes steady effort.", "The character's change supports this."),
          quizQuestion("Theme", "True or False", "trueFalse", "A topic is usually a word or phrase, while a theme is a message about the topic.", ["True", "False"], "True", "That is the key difference."),
          quizQuestion("Theme", "True or False", "trueFalse", "A theme should be supported by events and character choices from the story.", ["True", "False"], "True", "Evidence supports the theme.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-3-comparing-texts",
        title: "Comparing Two Texts",
        learningGoal: "Students will compare two texts by noticing similarities, differences, purpose, and point of view.",
        successCriteria: [
          "I can identify what two texts have in common.",
          "I can explain an important difference between two texts.",
          "I can choose evidence from both texts to support a comparison."
        ],
        vocabulary: ["compare", "contrast", "similarity", "difference", "point of view"],
        teacherOverview: "Students practise comparing two short texts without relying on surface details only.",
        lessonContent: [
          "To compare means to notice similarities.",
          "To contrast means to notice differences.",
          "Good comparisons use important ideas, not only small surface details.",
          "A reader can compare topic, purpose, point of view, structure, or evidence.",
          "A strong comparison uses evidence from both texts."
        ],
        activityTitle: "Two-Text Comparison Mission",
        mission: "Compare two texts and choose evidence from both.",
        levels: ["Level 1: Find Similarities and Differences", "Level 2: Compare Purpose and Evidence"],
        quizTitle: "Comparing Two Texts Quiz",
        quizFocus: "Compare, contrast, purpose, point of view, and evidence from two texts",
        steps: [
          intro("Level 1: Find Similarities and Differences", "Before You Begin", "Get ready: compare important ideas", "When you compare two texts, do more than notice that both have the word tree or both are short. Look for important similarities and differences in topic, message, purpose, or evidence."),
          intro("Level 1: Find Similarities and Differences", "Use Both Texts", "A comparison needs two sides", "A strong comparison says something about both texts. If an answer only talks about one text, it is not a complete comparison."),
          question("Level 1: Find Similarities and Differences", "Similarity", "Text A explains how bees pollinate flowers. Text B tells a story about a child protecting a bee garden. What do the texts have in common?", ["Both connect bees to helping plants.", "Both give instructions for planting a garden.", "Both focus mainly on honey production."], "Both connect bees to helping plants.", "Correct. Both texts connect bees and plants.", "Look for the shared idea."),
          question("Level 1: Find Similarities and Differences", "Difference", "Text A gives facts about recycling. Text B is a poem that describes a bottle becoming something new. What is an important difference?", ["Text A mainly explains information; Text B uses poetic description.", "Text A gives one person's feelings; Text B gives step-by-step directions.", "Text A focuses on one bottle; Text B explains many recycling facts."], "Text A mainly explains information; Text B uses poetic description.", "Yes. That compares the way the texts are written.", "Think about form and purpose."),
          question("Level 1: Find Similarities and Differences", "Both Texts", "Which answer uses evidence from both texts?", ["Text A says the bridge is old, and Text B says the bridge needs repairs.", "Both texts describe a bridge that matters to people nearby.", "Text A and Text B both include details about a river."], "Text A says the bridge is old, and Text B says the bridge needs repairs.", "Correct. It includes evidence from both texts.", "A two-text answer needs both sides."),
          question("Level 1: Find Similarities and Differences", "True or False", "A comparison should usually include evidence from both texts.", ["True", "False"], "True", "Correct. Both texts matter.", "Compare means two or more."),
          complete("Level 1: Find Similarities and Differences", "Level 1 Complete", "You practised comparing similarities and differences."),
          intro("Level 2: Compare Purpose and Evidence", "Purpose Matters", "Ask why each text was made", "Two texts can share a topic but have different purposes. One may inform, one may persuade, and one may entertain. Look at the author's choices and evidence."),
          question("Level 2: Compare Purpose and Evidence", "Purpose", "Text A lists safety steps for crossing a street. Text B is a story about a character learning to cross safely. How are the purposes different?", ["Text A gives instructions; Text B teaches through a story.", "Text A tells a personal memory; Text B gives numbered steps.", "Both texts mainly try to persuade readers to drive less."], "Text A gives instructions; Text B teaches through a story.", "Correct. The purposes are different even though the topic is related.", "One is instructional; one is narrative."),
          question("Level 2: Compare Purpose and Evidence", "Point of View", "Text A says, 'Plastic waste harms ocean animals.' Text B says, 'I picked up litter at the beach and wondered where it came from.' What is a difference in point of view?", ["Text A sounds general and factual; Text B uses a personal first-person view.", "Text A gives the writer's beach memory; Text B explains a general problem.", "Both texts mainly describe the writer's feelings about a beach."], "Text A sounds general and factual; Text B uses a personal first-person view.", "Yes. I shows first person in Text B.", "Look at who is speaking."),
          question("Level 2: Compare Purpose and Evidence", "Best Comparison", "Which comparison is strongest?", ["Both texts show that preparation helps people handle problems, but one uses facts and the other uses a story.", "Both texts discuss preparation, but only one text includes a problem.", "Both texts have the same message because both mention preparation."], "Both texts show that preparation helps people handle problems, but one uses facts and the other uses a story.", "Correct. It compares meaning and structure.", "Strong comparisons focus on important ideas."),
          question("Level 2: Compare Purpose and Evidence", "True or False", "Two texts can have the same topic but different purposes.", ["True", "False"], "True", "Correct. Topic and purpose are not the same.", "A text can inform, persuade, entertain, or explain."),
          complete("Level 2: Compare Purpose and Evidence", "Mission Complete", "You practised comparing two texts.")
        ],
        quizQuestions: [
          quizQuestion("Compare Texts", "Similarity", "multipleChoice", "Text A explains how rain forms. Text B is a poem describing a rainy afternoon. What is a similarity?", ["Both are connected to rain.", "Both explain a weather process.", "Both use feelings to describe rain."], "Both are connected to rain.", "Both share the topic of rain."),
          quizQuestion("Compare Texts", "Difference", "multipleChoice", "Text A gives facts about foxes. Text B tells a fictional story about a fox. What is an important difference?", ["Text A informs; Text B entertains through a story.", "Text A describes one made-up fox; Text B explains fox habitats.", "Text A and Text B both try to teach the same facts."], "Text A informs; Text B entertains through a story.", "The texts have different forms and purposes."),
          quizQuestion("Evidence", "Both Texts", "multipleChoice", "Which comparison uses evidence from both texts?", ["Text A says the river is polluted; Text B shows volunteers cleaning the same river.", "Both texts show people are worried about the river.", "Text A and Text B both describe the river as important."], "Text A says the river is polluted; Text B shows volunteers cleaning the same river.", "It uses both texts."),
          quizQuestion("Purpose", "Author's Purpose", "multipleChoice", "Text A tries to convince readers to bike to school. Text B explains how to adjust a bike helmet. How are the purposes different?", ["Text A persuades; Text B instructs.", "Text A instructs readers to bike; Text B persuades readers to use helmets.", "Both texts give advice, but neither has a main purpose."], "Text A persuades; Text B instructs.", "The purposes are different."),
          quizQuestion("Point of View", "First Person", "multipleChoice", "Which sentence suggests first-person point of view?", ["I watched the clouds gather over the lake.", "Clouds gathered over the lake while we waited.", "The lake looked calm before the storm."], "I watched the clouds gather over the lake.", "I signals first person."),
          quizQuestion("Compare Texts", "Strong Comparison", "multipleChoice", "Which comparison is strongest?", ["Both texts show that practice matters, but one uses a biography and the other uses step-by-step advice.", "Both texts mention learning, but one gives more dates and examples.", "Both texts seem helpful because they include advice about skills."], "Both texts show that practice matters, but one uses a biography and the other uses step-by-step advice.", "It compares important ideas and form."),
          quizQuestion("Compare Texts", "True or False", "trueFalse", "Contrast means to notice differences.", ["True", "False"], "True", "Contrast focuses on differences."),
          quizQuestion("Compare Texts", "True or False", "trueFalse", "A strong two-text answer should only mention one text.", ["True", "False"], "False", "A comparison should use both texts.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-3-nonfiction-features",
        title: "Reading Nonfiction Text Features",
        learningGoal: "Students will use nonfiction text features to locate information and understand ideas.",
        successCriteria: [
          "I can identify common nonfiction text features.",
          "I can explain how a feature helps the reader.",
          "I can use headings, captions, diagrams, and glossaries to answer questions."
        ],
        vocabulary: ["heading", "caption", "diagram", "glossary", "index"],
        teacherOverview: "Students practise using nonfiction features as reading tools, not decorations.",
        lessonContent: [
          "Nonfiction text features help readers find and understand information.",
          "Headings tell what a section is mostly about.",
          "Captions explain pictures, diagrams, maps, or photographs.",
          "Diagrams show parts, steps, or relationships that may be hard to explain in sentences only.",
          "A glossary gives meanings of important words; an index helps readers find where topics appear."
        ],
        activityTitle: "Nonfiction Feature Navigator",
        mission: "Use text features to find and understand information.",
        levels: ["Level 1: Identify the Feature", "Level 2: Use the Feature"],
        quizTitle: "Nonfiction Text Features Quiz",
        quizFocus: "Headings, captions, diagrams, glossaries, indexes, and using features",
        steps: [
          intro("Level 1: Identify the Feature", "Before You Begin", "Get ready: features guide readers", "Nonfiction often includes headings, captions, diagrams, maps, charts, glossaries, and indexes. These features help readers find information and understand ideas more clearly."),
          intro("Level 1: Identify the Feature", "Use Features With the Text", "Do not skip them", "Text features are part of the reading. A heading can prepare you for the main idea. A diagram can show how parts fit together. A caption can explain why an image matters."),
          question("Level 1: Identify the Feature", "Heading", "Which feature tells what a section is mostly about?", ["heading", "glossary", "page number"], "heading", "Correct. A heading names or previews the section.", "Look at titles inside the text."),
          question("Level 1: Identify the Feature", "Caption", "What is the job of a caption?", ["It explains a picture or diagram.", "It previews the next chapter.", "It gives the book's full title."], "It explains a picture or diagram.", "Yes. Captions help readers understand images.", "Captions sit near images."),
          question("Level 1: Identify the Feature", "Glossary", "Where would you look to find the meaning of a bold science word in a textbook?", ["glossary", "index", "section heading"], "glossary", "Correct. A glossary defines important words.", "A glossary is like a small dictionary for the text."),
          question("Level 1: Identify the Feature", "True or False", "A diagram can show information that is hard to explain with words alone.", ["True", "False"], "True", "Correct. Diagrams can show parts and relationships.", "Think of a labelled plant diagram."),
          complete("Level 1: Identify the Feature", "Level 1 Complete", "You practised identifying nonfiction features."),
          intro("Level 2: Use the Feature", "Choose the Best Feature", "Use the feature that fits the question", "If you need the meaning of a word, use a glossary. If you need where a topic appears, use an index. If you need how parts fit together, use a diagram."),
          question("Level 2: Use the Feature", "Find a Topic", "You need to find every page where 'evaporation' is discussed in a book. Which feature helps most?", ["index", "caption", "title page"], "index", "Correct. An index lists topics and page numbers.", "Think of finding a topic quickly."),
          question("Level 2: Use the Feature", "Understand Parts", "A page about the human ear includes a labelled picture of the eardrum and inner ear. Which feature is this?", ["diagram", "glossary", "subtitle"], "diagram", "Yes. A labelled picture that shows parts is a diagram.", "Parts and labels point to a diagram."),
          question("Level 2: Use the Feature", "Use a Caption", "A caption says, 'The darker rings show years with less rainfall.' What does the caption help explain?", ["what the darker rings mean", "how tree rings form each year", "where the topic appears in the index"], "what the darker rings mean", "Correct. The caption explains the image.", "Captions explain what readers should notice."),
          question("Level 2: Use the Feature", "True or False", "Text features are useful only before reading, never during or after reading.", ["True", "False"], "False", "Correct. Readers can use features before, during, and after reading.", "Features can help at many points."),
          complete("Level 2: Use the Feature", "Mission Complete", "You practised using nonfiction features.")
        ],
        quizQuestions: [
          quizQuestion("Text Features", "Heading", "multipleChoice", "Which feature usually tells what a section is about?", ["heading", "index", "caption"], "heading", "A heading previews the section."),
          quizQuestion("Text Features", "Caption", "multipleChoice", "A sentence under a photograph explains why the photo matters. What is it?", ["caption", "glossary", "table of contents"], "caption", "A caption explains an image."),
          quizQuestion("Text Features", "Diagram", "multipleChoice", "Which feature would best show the parts of a flower?", ["labelled diagram", "index", "chapter title"], "labelled diagram", "A diagram can show parts."),
          quizQuestion("Text Features", "Glossary", "multipleChoice", "Where would a reader find the meaning of the word habitat in a textbook?", ["glossary", "index entry", "chapter heading"], "glossary", "A glossary defines key words."),
          quizQuestion("Text Features", "Index", "multipleChoice", "Which feature helps find pages where a topic appears?", ["index", "caption", "diagram"], "index", "An index lists topics and page numbers."),
          quizQuestion("Text Features", "Best Feature", "multipleChoice", "You need to understand how water moves through a cycle. Which feature would help most?", ["a labelled cycle diagram", "a paragraph heading about water", "a glossary entry for evaporation"], "a labelled cycle diagram", "A cycle diagram shows steps and relationships."),
          quizQuestion("Text Features", "True or False", "trueFalse", "Text features should support understanding, not distract from it.", ["True", "False"], "True", "Features have a reading purpose."),
          quizQuestion("Text Features", "True or False", "trueFalse", "A glossary and an index do exactly the same job.", ["True", "False"], "False", "A glossary defines words; an index points to pages.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-3-full-answer-thinking",
        title: "Explaining Thinking in Full Answers",
        learningGoal: "Students will answer reading questions with a clear point, evidence, and explanation.",
        successCriteria: [
          "I can begin with a clear answer to the question.",
          "I can include evidence from the text.",
          "I can explain how the evidence supports my answer."
        ],
        vocabulary: ["answer", "evidence", "explanation", "because", "support"],
        teacherOverview: "Students practise building complete reading answers from a point, evidence, and explanation.",
        lessonContent: [
          "A strong reading answer begins by answering the question directly.",
          "Evidence from the text supports the answer.",
          "Explanation tells how the evidence proves or supports the answer.",
          "A full answer should be clear enough that someone can understand it without hearing the original question.",
          "Good readers avoid dropping in evidence without explaining why it matters."
        ],
        activityTitle: "Full Answer Builder",
        mission: "Build reading answers with a point, evidence, and explanation.",
        levels: ["Level 1: Build the Answer", "Level 2: Improve the Explanation"],
        quizTitle: "Explaining Thinking Quiz",
        quizFocus: "Direct answers, evidence, explanation, and clear reading responses",
        steps: [
          intro("Level 1: Build the Answer", "Before You Begin", "Get ready: answer, prove, explain", "A strong reading answer has three parts. First, answer the question. Next, use evidence from the text. Then explain how the evidence supports your answer."),
          intro("Level 1: Build the Answer", "Make It Complete", "Write so the answer stands alone", "Instead of writing 'because he did,' a full answer might say, 'Jonah is nervous because he rereads the note and takes a slow breath before knocking.' The reader can understand the answer without seeing the question."),
          question("Level 1: Build the Answer", "Clear Answer", "Question: Why is Ella proud? Which answer begins most clearly?", ["Ella is proud because her design finally held the weight.", "Ella's design worked after several tries.", "The design was tested with weight."], "Ella is proud because her design finally held the weight.", "Correct. It answers the question clearly.", "Choose the answer that stands alone."),
          question("Level 1: Build the Answer", "Evidence", "Which sentence uses evidence best?", ["The text says the seedlings grew three centimetres after the class moved them into sunlight.", "The seedlings grew after the class made a change.", "The class was studying plant growth."], "The text says the seedlings grew three centimetres after the class moved them into sunlight.", "Yes. It gives a specific text detail.", "Evidence comes from the text."),
          question("Level 1: Build the Answer", "Explanation", "Which sentence explains evidence?", ["This shows the sunlight helped because the seedlings grew after they were moved.", "The text includes sunlight and seedlings.", "The seedlings changed during the class experiment."], "This shows the sunlight helped because the seedlings grew after they were moved.", "Correct. It tells why the evidence matters.", "Explanation connects evidence to the answer."),
          question("Level 1: Build the Answer", "True or False", "A full reading answer should usually include evidence and explanation.", ["True", "False"], "True", "Correct. Evidence and explanation support the answer.", "Answer, prove, explain."),
          complete("Level 1: Build the Answer", "Level 1 Complete", "You practised building full answers."),
          intro("Level 2: Improve the Explanation", "Do Not Stop at a Quote", "Explain why it matters", "Evidence is important, but it cannot do all the work alone. After evidence, explain how that evidence supports the answer. This shows your thinking."),
          question("Level 2: Improve the Explanation", "Best Full Answer", "Question: How does the setting affect the story? Which answer is strongest?", ["The snowstorm traps the family indoors, so they must solve the problem without going for help.", "The setting is important because the story happens during a snowstorm.", "The family notices the weather, which is part of the setting."], "The snowstorm traps the family indoors, so they must solve the problem without going for help.", "Correct. It answers, uses evidence, and explains the effect.", "Look for answer plus why it matters."),
          question("Level 2: Improve the Explanation", "Missing Part", "Answer: 'The text says, \"Mila checked the map three times.\"' What is missing?", ["an explanation of what the evidence shows", "the exact quote", "any connection to the text"], "an explanation of what the evidence shows", "Yes. The evidence needs explanation.", "The quote is there, but why does it matter?"),
          question("Level 2: Improve the Explanation", "Question Restatement", "Which answer restates the question clearly?", ["The character changes because he learns to listen before judging.", "He learns to listen before judging by the end.", "This changes the character's decision."], "The character changes because he learns to listen before judging.", "Correct. It names the idea clearly.", "A clear answer names the topic."),
          question("Level 2: Improve the Explanation", "True or False", "Explanation tells how the evidence supports the answer.", ["True", "False"], "True", "Correct. Explanation shows your thinking.", "Evidence plus explanation is stronger."),
          complete("Level 2: Improve the Explanation", "Mission Complete", "You practised explaining reading answers.")
        ],
        quizQuestions: [
          quizQuestion("Full Answers", "Clear Answer", "multipleChoice", "Question: Why does the character apologize? Which answer is clearest?", ["The character apologizes because she realizes her words hurt her friend.", "She apologizes after talking with her friend.", "The character feels sorry in the story."], "The character apologizes because she realizes her words hurt her friend.", "It answers directly and clearly."),
          quizQuestion("Full Answers", "Evidence", "multipleChoice", "Which sentence gives the strongest evidence?", ["The text says Liam returned the lost wallet to the office.", "Liam made a responsible choice in the story.", "The office is where the wallet ended up."], "The text says Liam returned the lost wallet to the office.", "It gives a specific detail."),
          quizQuestion("Full Answers", "Explanation", "multipleChoice", "Which sentence explains evidence?", ["This shows Liam is honest because he returns something valuable instead of keeping it.", "Liam's choice is connected to the wallet.", "The wallet detail helps readers understand Liam."], "This shows Liam is honest because he returns something valuable instead of keeping it.", "It connects evidence to the answer."),
          quizQuestion("Full Answers", "Missing Part", "multipleChoice", "A student writes only, 'The text says, \"the path was blocked.\"' What should be added?", ["an explanation of how the blocked path affects the story", "a second quote from later in the same chapter", "a longer sentence that repeats the blocked-path detail"], "an explanation of how the blocked path affects the story", "Evidence needs explanation."),
          quizQuestion("Full Answers", "Best Answer", "multipleChoice", "Which is the strongest answer?", ["The theme is perseverance because the runner keeps training after several setbacks and improves by race day.", "The theme is perseverance because the runner joins a race.", "The runner has setbacks, so the story probably has a theme."], "The theme is perseverance because the runner keeps training after several setbacks and improves by race day.", "It includes answer and support."),
          quizQuestion("Full Answers", "Stand Alone", "multipleChoice", "Which answer can stand alone best?", ["The article says wetlands are important because they filter water and provide animal habitats.", "Wetlands are important because the article gives two reasons.", "They filter water and provide animal habitats."], "The article says wetlands are important because they filter water and provide animal habitats.", "The meaning is clear without the original question."),
          quizQuestion("Full Answers", "True or False", "trueFalse", "A quote or detail should be connected to the answer with explanation.", ["True", "False"], "True", "Explanation shows why the evidence matters."),
          quizQuestion("Full Answers", "True or False", "trueFalse", "A full answer can be clear even if it never answers the question.", ["True", "False"], "False", "It must answer the question.")
        ]
      }),
      {
        id: "grade-5-language-unit-3-final-quiz",
        title: "Unit 3 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherOverview: "Use this quiz after students complete the Reading for Meaning lessons.",
        teacherSummary: "The Unit 3 final quiz checks text evidence, main idea, inference, story elements, theme, comparing texts, nonfiction features, and full reading answers.",
        quiz: {
          title: "Reading for Meaning Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Text Evidence", "Best Evidence", "multipleChoice", "Answer: The room was quiet. Which evidence best supports it?", ["The students whispered and turned pages softly.", "The students were reading after lunch.", "The room felt different from the hallway."], "The students whispered and turned pages softly.", "Whispering and soft page-turning support quiet."),
            quizQuestion("Part A: Text Evidence", "Paraphrase", "multipleChoice", "Which is a paraphrase of 'The trail twisted through the dark forest'?", ["The path wound through shadowy trees.", "The trail twisted through the dark forest.", "The trail went through a forest."], "The path wound through shadowy trees.", "It keeps the meaning in new words."),
            quizQuestion("Part B: Main Idea", "Main Idea", "multipleChoice", "Text: 'Compost turns food scraps into rich soil. Gardeners use it to help plants grow. It also keeps useful material out of the garbage.' What is the main idea?", ["Compost is useful for gardens and waste reduction.", "Compost changes food scraps into soil.", "Gardeners can use compost during planting."], "Compost is useful for gardens and waste reduction.", "It covers the paragraph."),
            quizQuestion("Part B: Main Idea", "Supporting Detail", "multipleChoice", "Main idea: Sleep helps students learn well. Which detail best supports it?", ["Rested students can focus and remember information better.", "Students often sleep more on weekends.", "A quiet room can make sleep easier."], "Rested students can focus and remember information better.", "It explains how sleep helps learning."),
            quizQuestion("Part C: Inference", "Inference", "multipleChoice", "Text: 'Grace tucked the permission form into her backpack and smiled at the word approved.' What can you infer?", ["Grace is pleased she can go.", "Grace is careful with school papers.", "Grace knows where her backpack is."], "Grace is pleased she can go.", "Smiling at approved supports this."),
            quizQuestion("Part C: Inference", "Too Far", "multipleChoice", "Text: 'The bus was ten minutes late.' Which inference goes too far?", ["The bus route is usually unreliable.", "The bus did not arrive at the expected time.", "Someone waited longer than planned."], "The bus route is usually unreliable.", "One delay does not prove that pattern."),
            quizQuestion("Part D: Story Elements", "Character Trait", "multipleChoice", "Text: 'Harper saved her allowance for weeks so she could replace the library book she damaged.' Which trait fits best?", ["responsible", "patient", "careful"], "responsible", "Her action shows responsibility."),
            quizQuestion("Part D: Story Elements", "Problem", "multipleChoice", "Text: 'The science display was due in an hour, but the label cards had disappeared.' What is the problem?", ["The missing labels must be replaced quickly.", "The display needs more research notes.", "The students need to choose a new science topic."], "The missing labels must be replaced quickly.", "The missing cards create the problem."),
            quizQuestion("Part E: Theme", "Theme", "multipleChoice", "Which choice is a theme?", ["Courage can mean telling the truth even when it is difficult.", "Courage", "A nervous character"], "Courage can mean telling the truth even when it is difficult.", "A theme gives a message."),
            quizQuestion("Part E: Theme", "Evidence", "multipleChoice", "Theme: Forgiveness can help restore friendship. Which event supports it best?", ["Two friends talk honestly and choose to play together again.", "Two friends remember when they first met.", "One friend asks to borrow a soccer ball."], "Two friends talk honestly and choose to play together again.", "It shows forgiveness restoring friendship."),
            quizQuestion("Part F: Comparing Texts", "Similarity", "multipleChoice", "Text A gives facts about maple trees. Text B is a poem about a maple tree in autumn. What is a similarity?", ["Both are about maple trees.", "Both explain how maple trees grow.", "Both describe the writer's favourite tree."], "Both are about maple trees.", "They share the topic."),
            quizQuestion("Part F: Comparing Texts", "Purpose", "multipleChoice", "Text A explains how to make a bird feeder. Text B argues that families should feed birds in winter. How are the purposes different?", ["Text A instructs; Text B persuades.", "Text A persuades readers to build; Text B instructs readers to feed birds.", "Both texts give instructions for the same task."], "Text A instructs; Text B persuades.", "The texts have different purposes."),
            quizQuestion("Part G: Nonfiction Features", "Caption", "multipleChoice", "What is the purpose of a caption under a photograph?", ["to explain the photograph", "to introduce the section topic", "to define an important word"], "to explain the photograph", "Captions explain images."),
            quizQuestion("Part G: Nonfiction Features", "Index", "multipleChoice", "Which feature helps a reader find pages about a topic?", ["index", "caption", "heading"], "index", "An index lists topics and page numbers."),
            quizQuestion("Part G: Nonfiction Features", "Diagram", "trueFalse", "A labelled diagram can help readers understand how parts fit together.", ["True", "False"], "True", "Diagrams show parts and relationships."),
            quizQuestion("Part H: Full Answers", "Evidence and Explanation", "multipleChoice", "Which answer best explains thinking?", ["The character is patient because she tries several careful repairs before asking for help.", "The character is patient because the repair takes a long time.", "The story shows patience through the repair problem."], "The character is patient because she tries several careful repairs before asking for help.", "It gives answer and support."),
            quizQuestion("Part H: Full Answers", "Missing Part", "multipleChoice", "A student gives evidence but never explains it. What is missing?", ["how the evidence supports the answer", "another detail that repeats the same point", "a longer sentence that does not mention the question"], "how the evidence supports the answer", "Explanation connects evidence to the answer."),
            quizQuestion("Part H: Full Answers", "True or False", "trueFalse", "A strong reading answer should be clear enough to understand without hearing the original question.", ["True", "False"], "True", "A full answer stands alone."),
            quizQuestion("Part I: Review", "True or False", "trueFalse", "A good inference should fit the text clues and not go too far beyond them.", ["True", "False"], "True", "Inferences need evidence."),
            quizQuestion("Part I: Review", "True or False", "trueFalse", "A main idea is usually one small detail from a text.", ["True", "False"], "False", "The main idea is broader than one detail.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Reading for Meaning mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The final unit quiz checks text evidence, main ideas, inferences, story elements, theme, comparing texts, nonfiction features, and full-answer thinking."
    }
  };

  window.PracticeStarUnit["grade-5-language-unit-3"] = unit;
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
