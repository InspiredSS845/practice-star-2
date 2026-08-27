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
        "Use the lesson quiz as a scored media literacy check.",
        "Review missed questions before assigning the next Media Literacy and Digital Texts lesson."
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
      assessmentPlan: "Use the activity for guided media literacy decisions and the quiz to check independent understanding.",
      studentActivity: {
        type: "languageQuestionSet",
        version: "2026-08-27-language-unit-5-media-1",
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
    id: "grade-5-language-unit-5",
    title: "Media Literacy and Digital Texts",
    strand: "Literacy Connections and Applications",
    unitGoal: "Students will interpret media messages, notice audience and purpose, evaluate digital information, and create responsible media responses.",
    lessons: [
      lesson({
        id: "grade-5-language-unit-5-media-message",
        title: "What Is a Media Message?",
        learningGoal: "Students will identify media messages and explain what they are trying to communicate.",
        successCriteria: [
          "I can identify a media text.",
          "I can explain the main message in a media text.",
          "I can notice how words, images, and sounds work together."
        ],
        vocabulary: ["media", "message", "text", "image", "communicate"],
        teacherOverview: "Students practise identifying media texts and explaining their main messages.",
        lessonContent: [
          "A media text shares a message using words, images, sound, video, design, or a mix of these.",
          "Posters, videos, websites, announcements, maps, labels, and advertisements are all media texts.",
          "A media message is what the text wants the audience to notice, understand, feel, or do.",
          "The words and images in a media text usually work together.",
          "Careful readers look beyond the first impression and ask what message is being sent."
        ],
        activityTitle: "Media Message Detective",
        mission: "Decide what different media texts are trying to communicate.",
        levels: ["Level 1: Notice the Message", "Level 2: Words and Images Together"],
        quizTitle: "What Is a Media Message? Quiz",
        quizFocus: "Media texts, messages, audience clues, images, words, and purpose",
        steps: [
          intro("Level 1: Notice the Message", "Before You Begin", "Get ready: media texts send messages", "Media is not only television or the internet. A school poster, a cereal box, a bus sign, a website button, or a church bulletin notice can all send a message."),
          intro("Level 1: Notice the Message", "Ask What It Communicates", "Look for the main idea", "A media text may inform, invite, warn, explain, entertain, or persuade. To find the message, ask what the creator wants people to notice or do."),
          question("Level 1: Notice the Message", "Media Text", "Which item is a media text?", ["a poster inviting families to a school open house", "a folder used to carry school notices", "a printer used to make classroom signs"], "a poster inviting families to a school open house", "Correct. The poster uses words and design to communicate.", "Choose the item that sends a message to an audience."),
          question("Level 1: Notice the Message", "Main Message", "A poster says, 'Bring a reusable bottle on field trip day' and shows a bottle beside a backpack. What is the main message?", ["Students should remember to bring a reusable bottle.", "Students should choose a backpack with side pockets.", "Field trips often include outdoor activities."], "Students should remember to bring a reusable bottle.", "Yes. The words and picture point to that reminder.", "Use both the words and image."),
          question("Level 1: Notice the Message", "Message Type", "A sign near a trail says, 'Stay on marked paths to protect plants.' What is the sign mostly doing?", ["giving a safety and care instruction", "advertising a new trail map", "telling a story about plant growth"], "giving a safety and care instruction", "Correct. The sign tells people what to do and why.", "Ask what action the sign wants."),
          question("Level 1: Notice the Message", "True or False", "A media text can use both words and images to send one clear message.", ["True", "False"], "True", "Correct. Words and images often work together.", "Media messages can have several parts."),
          complete("Level 1: Notice the Message", "Level 1 Complete", "You practised identifying media messages."),
          intro("Level 2: Words and Images Together", "Read the Whole Message", "Images can change meaning", "A picture, colour, symbol, or layout can change how a message feels. A warning sign and a celebration poster may use very different design choices."),
          question("Level 2: Words and Images Together", "Image Support", "A library poster says, 'Try a new book this week' and shows students choosing books from different shelves. How does the image help?", ["It shows the action the poster is encouraging.", "It gives the exact rules for borrowing books.", "It explains how libraries buy new books."], "It shows the action the poster is encouraging.", "Correct. The image supports the message.", "Look for what the picture adds."),
          question("Level 2: Words and Images Together", "Symbol", "A website uses a small magnifying glass icon beside a search box. What does the icon help users understand?", ["where to search for information", "how to change the website colours", "which page was opened most recently"], "where to search for information", "Yes. The symbol gives a quick clue.", "Think about common symbols."),
          question("Level 2: Words and Images Together", "Best Message", "Which message best fits a school announcement that says, 'Concert tickets are available until Friday'?", ["Families should get tickets before Friday.", "Students should practise music every Friday.", "The concert program will include many songs."], "Families should get tickets before Friday.", "Correct. The announcement gives a time-sensitive action.", "Find what the audience is expected to do."),
          question("Level 2: Words and Images Together", "True or False", "A media message is always stated in one sentence at the top.", ["True", "False"], "False", "Correct. The message may come from the whole design.", "Look at the full text, not just the title."),
          complete("Level 2: Words and Images Together", "Mission Complete", "You practised reading words and images together.")
        ],
        quizQuestions: [
          quizQuestion("Media Messages", "Media Text", "multipleChoice", "Which choice is a media text?", ["a website page explaining summer reading", "a keyboard used to type a website page", "a camera used to take a website photo"], "a website page explaining summer reading", "The website page communicates a message."),
          quizQuestion("Media Messages", "Message", "multipleChoice", "A classroom poster says, 'Return shared supplies after use.' What is the main message?", ["Students should put shared supplies back.", "The classroom has many supplies.", "Some supplies are used during lessons."], "Students should put shared supplies back.", "The poster gives a clear reminder."),
          quizQuestion("Media Messages", "Purpose", "multipleChoice", "A sign says, 'Please wash hands before lunch.' What is the sign mostly doing?", ["reminding people about a healthy routine", "explaining the history of lunch", "describing different handwashing sinks"], "reminding people about a healthy routine", "The sign asks people to follow a routine."),
          quizQuestion("Media Messages", "Image", "multipleChoice", "A poster about a food drive shows cans being placed in a box. How does the image help?", ["It shows what people are being asked to donate.", "It lists every family taking part.", "It explains how food is delivered to stores."], "It shows what people are being asked to donate.", "The image supports the request."),
          quizQuestion("Media Messages", "Symbol", "multipleChoice", "On a map, a parking symbol marks a certain area. What does the symbol help readers do?", ["find where parking is located", "choose the best entrance to start from", "know which route has the most traffic"], "find where parking is located", "Symbols can give quick information."),
          quizQuestion("Media Messages", "Audience Action", "multipleChoice", "A notice says, 'Permission forms are due Thursday.' What should the audience understand?", ["Forms need to be handed in by Thursday.", "Forms are usually printed on paper.", "Thursday is part of the school week."], "Forms need to be handed in by Thursday.", "The notice gives a deadline."),
          quizQuestion("Media Messages", "True or False", "trueFalse", "Media texts can include posters, signs, websites, videos, and labels.", ["True", "False"], "True", "These are all ways to communicate messages."),
          quizQuestion("Media Messages", "True or False", "trueFalse", "Images in a media text can affect the message.", ["True", "False"], "True", "Images often shape meaning.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-5-audience-purpose",
        title: "Audience and Purpose",
        learningGoal: "Students will identify the intended audience and purpose of media texts.",
        successCriteria: [
          "I can decide who a media text is made for.",
          "I can identify whether a media text informs, persuades, entertains, or warns.",
          "I can explain which clues helped me decide."
        ],
        vocabulary: ["audience", "purpose", "inform", "persuade", "clue"],
        teacherOverview: "Students practise using clues to identify the audience and purpose of media texts.",
        lessonContent: [
          "Audience means who a media text is meant for.",
          "Purpose means why the media text was made.",
          "A media text might inform, persuade, entertain, remind, warn, or invite.",
          "Words, images, examples, and design can all give audience clues.",
          "A good media reader explains which clues led to an answer."
        ],
        activityTitle: "Audience and Purpose Mission",
        mission: "Use clues to decide who a media text is for and why it was made.",
        levels: ["Level 1: Find the Audience", "Level 2: Name the Purpose"],
        quizTitle: "Audience and Purpose Quiz",
        quizFocus: "Audience clues, purpose, word choice, age fit, and intended action",
        steps: [
          intro("Level 1: Find the Audience", "Before You Begin", "Get ready: media is made for someone", "A media creator makes choices for a particular audience. A poster for Grade 1 students will not sound exactly like a letter to parents."),
          intro("Level 1: Find the Audience", "Use Clues", "Audience clues are everywhere", "Look at the vocabulary, examples, pictures, topic, and where the message appears. These clues help you decide who the creator had in mind."),
          question("Level 1: Find the Audience", "Audience Clue", "A flyer says, 'Parents and guardians are invited to meet the teachers at 6:30 p.m.' Who is the main audience?", ["parents and guardians", "students choosing a recess game", "newspaper readers studying weather"], "parents and guardians", "Correct. The flyer names the audience directly.", "Look for who is addressed."),
          question("Level 1: Find the Audience", "Age Fit", "Which media text is most likely meant for younger children?", ["a picture chart showing how to tie shoes step by step", "a student handbook page about attendance routines", "a family newsletter about school readiness"], "a picture chart showing how to tie shoes step by step", "Yes. The topic and pictures fit younger children.", "Think about what the audience needs."),
          question("Level 1: Find the Audience", "Audience Detail", "A sports camp website includes prices, drop-off times, and registration forms. Who needs that information most?", ["families deciding whether to register a child", "players learning a new warm-up drill", "students writing a report about sports"], "families deciding whether to register a child", "Correct. Those details help families make a decision.", "Ask who would use the information."),
          question("Level 1: Find the Audience", "True or False", "The same topic can be explained differently for different audiences.", ["True", "False"], "True", "Correct. Audience affects wording and detail.", "Audience changes choices."),
          complete("Level 1: Find the Audience", "Level 1 Complete", "You practised identifying audiences."),
          intro("Level 2: Name the Purpose", "Purpose Is the Job", "What is the media text trying to do?", "A media text can have more than one purpose, but usually one purpose is strongest. It may inform people, persuade them, entertain them, or warn them."),
          question("Level 2: Name the Purpose", "Inform", "A school website page lists the date, time, and location of the winter concert. What is its main purpose?", ["to inform families about event details", "to persuade students to join the choir", "to entertain readers with a concert story"], "to inform families about event details", "Correct. It gives information people need.", "Look for facts and details."),
          question("Level 2: Name the Purpose", "Persuade", "A poster says, 'Join the cleanup team and help keep our playground ready for everyone.' What is its main purpose?", ["to persuade students to join", "to explain how playground equipment is built", "to compare two different schoolyards"], "to persuade students to join", "Yes. It encourages action.", "Look for a call to action."),
          question("Level 2: Name the Purpose", "Warn", "A digital notice says, 'Do not share your password with anyone.' What is its main purpose?", ["to warn users about online safety", "to describe how passwords are made", "to invite users to design a new login page"], "to warn users about online safety", "Correct. It gives a safety warning.", "Safety messages often warn."),
          question("Level 2: Name the Purpose", "True or False", "A media text can persuade politely without pressuring or misleading people.", ["True", "False"], "True", "Correct. Persuasion should still be fair.", "Persuasion can be respectful."),
          complete("Level 2: Name the Purpose", "Mission Complete", "You practised identifying purpose.")
        ],
        quizQuestions: [
          quizQuestion("Audience", "Audience", "multipleChoice", "A notice says, 'Families may book interview times online.' Who is the main audience?", ["families of students", "students choosing library books", "people visiting a community museum"], "families of students", "The notice speaks to families."),
          quizQuestion("Audience", "Clue", "multipleChoice", "Which detail is the strongest clue that a webpage is for students?", ["It uses student login steps and class activity buttons.", "It has a heading at the top of the page.", "It uses a large button for one section."], "It uses student login steps and class activity buttons.", "The features match student use."),
          quizQuestion("Audience", "Age Fit", "multipleChoice", "Which choice best fits directions for Grade 5 students?", ["Use your notes to choose two facts that support your answer.", "Copy the sentence starter before adding your answer.", "Write a formal proposal with outside references."], "Use your notes to choose two facts that support your answer.", "The task fits Grade 5 reading and writing."),
          quizQuestion("Purpose", "Inform", "multipleChoice", "A schedule shows practice times and room numbers. What is the main purpose?", ["to inform people where and when to go", "to convince people to change the rooms", "to tell a story about the team"], "to inform people where and when to go", "A schedule gives information."),
          quizQuestion("Purpose", "Persuade", "multipleChoice", "A class poster says, 'Bring one canned item to help stock the food shelf.' What is the purpose?", ["to persuade people to donate", "to explain where donation boxes are kept", "to describe how the food shelf is organized"], "to persuade people to donate", "The poster asks for an action."),
          quizQuestion("Purpose", "Warn", "multipleChoice", "A message says, 'Check with an adult before downloading a new app.' What is the purpose?", ["to warn about safe digital choices", "to describe where apps are stored", "to advertise a school tablet"], "to warn about safe digital choices", "The message gives safety guidance."),
          quizQuestion("Purpose", "True or False", "trueFalse", "Audience means the people a media text is mainly meant to reach.", ["True", "False"], "True", "That is the audience."),
          quizQuestion("Purpose", "True or False", "trueFalse", "Purpose means only the colour choices used in a media text.", ["True", "False"], "False", "Purpose means why it was made.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-5-images-layout-design",
        title: "Images, Layout, and Design Choices",
        learningGoal: "Students will explain how visual and layout choices affect a media message.",
        successCriteria: [
          "I can identify design choices such as colour, size, placement, and spacing.",
          "I can explain how an image supports or changes a message.",
          "I can choose a layout that helps readers understand information."
        ],
        vocabulary: ["layout", "design", "image", "font", "emphasis"],
        teacherOverview: "Students practise interpreting visual choices and choosing clear layouts for media texts.",
        lessonContent: [
          "Layout means how words, images, headings, and space are arranged.",
          "Design choices can make information easier or harder to understand.",
          "Large text, bold headings, and strong contrast can show importance.",
          "Images should support the message, not distract from it.",
          "Good design helps the audience find and understand information."
        ],
        activityTitle: "Design Choices Mission",
        mission: "Choose design and layout choices that make media messages clearer.",
        levels: ["Level 1: Notice Design Choices", "Level 2: Choose Clear Layouts"],
        quizTitle: "Images, Layout, and Design Choices Quiz",
        quizFocus: "Layout, image support, emphasis, readability, and visual organization",
        steps: [
          intro("Level 1: Notice Design Choices", "Before You Begin", "Get ready: design affects meaning", "Design is part of the message. A large headline, a warning colour, a photograph, or a clear icon can guide what the audience notices first."),
          intro("Level 1: Notice Design Choices", "Look at What Stands Out", "Emphasis guides attention", "When a media text makes something bigger, brighter, centred, or repeated, it may be showing that this part is important."),
          question("Level 1: Notice Design Choices", "Emphasis", "A poster puts 'Registration closes Friday' in the largest text. Why?", ["The deadline is important for the audience to notice.", "The designer wanted every sentence to look different.", "The poster has no other way to include dates."], "The deadline is important for the audience to notice.", "Correct. Larger text creates emphasis.", "Ask why that part stands out."),
          question("Level 1: Notice Design Choices", "Image Choice", "Which image best supports a notice about bicycle safety?", ["a child wearing a helmet while riding on a path", "a close-up of a bicycle bell", "a photo of many bikes in a shop window"], "a child wearing a helmet while riding on a path", "Yes. It directly supports the safety message.", "Choose the image that matches the message."),
          question("Level 1: Notice Design Choices", "Colour Meaning", "A weather alert uses a strong red banner behind the warning. What effect does this likely have?", ["It helps the warning feel urgent.", "It shows the alert is only for adults.", "It proves the forecast will be correct."], "It helps the warning feel urgent.", "Correct. Colour can affect mood and importance.", "Think about how the colour makes the message feel."),
          question("Level 1: Notice Design Choices", "True or False", "Images and layout can affect how people understand a media text.", ["True", "False"], "True", "Correct. Design is part of meaning.", "Visual choices communicate."),
          complete("Level 1: Notice Design Choices", "Level 1 Complete", "You practised noticing design choices."),
          intro("Level 2: Choose Clear Layouts", "Make It Easy to Read", "Good layout supports the audience", "A clear layout places information where readers can find it. Headings, spacing, lists, and labels can make a media text easier to use."),
          question("Level 2: Choose Clear Layouts", "Event Poster", "Which layout would help people understand a school concert poster?", ["title at top, date and time together, location clearly labelled", "small date in one corner, location inside a long paragraph, title at bottom", "three different headings for the same event and no time listed"], "title at top, date and time together, location clearly labelled", "Correct. Important details are easy to find.", "Choose the layout that helps the audience use the information."),
          question("Level 2: Choose Clear Layouts", "Website Button", "A website wants students to begin an activity. Which button label is clearest?", ["Start Activity", "Continue to the next learning area", "Click here for possible steps"], "Start Activity", "Yes. It is short and direct.", "Button labels should tell users what will happen."),
          question("Level 2: Choose Clear Layouts", "Readability", "Which design choice makes a digital poster easier to read?", ["dark text on a light background with enough space", "small pale text over a busy picture", "four fonts changing every few words"], "dark text on a light background with enough space", "Correct. Contrast and spacing help readers.", "Readability matters more than decoration."),
          question("Level 2: Choose Clear Layouts", "True or False", "A beautiful design can still be weak if the audience cannot find the important information.", ["True", "False"], "True", "Correct. Design should help communication.", "Clear comes before fancy."),
          complete("Level 2: Choose Clear Layouts", "Mission Complete", "You practised choosing clear layouts.")
        ],
        quizQuestions: [
          quizQuestion("Design", "Emphasis", "multipleChoice", "Why might a poster make one deadline larger than the rest of the text?", ["to show it is important to notice", "to make the poster use more space", "to avoid using a heading"], "to show it is important to notice", "Size can show importance."),
          quizQuestion("Design", "Image", "multipleChoice", "Which image best supports a poster about reading outside?", ["students reading on a blanket under a tree", "a stack of books beside a closed door", "a school hallway after dismissal"], "students reading on a blanket under a tree", "The image matches the message."),
          quizQuestion("Design", "Layout", "multipleChoice", "Which layout is clearest for a field trip reminder?", ["date, destination, items to bring, and return time in labelled sections", "one paragraph mixing all details in any order", "large title with most details in very small print"], "date, destination, items to bring, and return time in labelled sections", "Labels help readers find details."),
          quizQuestion("Design", "Button Label", "multipleChoice", "Which button label is clearest for submitting a quiz?", ["Submit Quiz", "Finish with the thing", "Move forward from here"], "Submit Quiz", "The label tells what will happen."),
          quizQuestion("Design", "Readability", "multipleChoice", "Which design choice improves readability?", ["clear contrast between text and background", "decorative letters for every sentence", "placing labels far from the items they name"], "clear contrast between text and background", "Contrast helps readers."),
          quizQuestion("Design", "Image Fit", "multipleChoice", "A poster is about washing hands before snack. Which image fits best?", ["hands being washed at a sink", "students sitting at desks with notebooks", "a lunch bag beside a backpack"], "hands being washed at a sink", "It supports the message directly."),
          quizQuestion("Design", "True or False", "trueFalse", "Layout means how text, images, headings, and space are arranged.", ["True", "False"], "True", "That is layout."),
          quizQuestion("Design", "True or False", "trueFalse", "Design choices should never affect how a media message is understood.", ["True", "False"], "False", "Design choices can strongly affect understanding.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-5-fact-opinion-persuasion",
        title: "Fact, Opinion, and Persuasion",
        learningGoal: "Students will distinguish facts, opinions, and persuasive techniques in media texts.",
        successCriteria: [
          "I can identify a fact that can be checked.",
          "I can identify an opinion or judgement.",
          "I can notice persuasive words and decide whether support is strong."
        ],
        vocabulary: ["fact", "opinion", "persuasion", "claim", "evidence"],
        teacherOverview: "Students practise telling the difference between checkable facts, opinions, and persuasive messages.",
        lessonContent: [
          "A fact can be checked or proven.",
          "An opinion tells what someone thinks, feels, believes, or prefers.",
          "Persuasion tries to convince the audience to think, feel, choose, or do something.",
          "Persuasive media should use fair reasons and evidence.",
          "Careful readers ask whether a claim is supported."
        ],
        activityTitle: "Fact or Persuasion Mission",
        mission: "Sort facts, opinions, and persuasive claims in media texts.",
        levels: ["Level 1: Fact and Opinion", "Level 2: Persuasion and Support"],
        quizTitle: "Fact, Opinion, and Persuasion Quiz",
        quizFocus: "Facts, opinions, claims, evidence, persuasive wording, and fair support",
        steps: [
          intro("Level 1: Fact and Opinion", "Before You Begin", "Get ready: not every statement works the same way", "A media text may mix facts and opinions. The reader's job is to know which statements can be checked and which statements are judgements or preferences."),
          intro("Level 1: Fact and Opinion", "Checkable or Judgement?", "Facts can be checked", "If a statement gives a date, number, location, or proven detail, it may be a fact. If it tells what is best, easiest, most exciting, or most beautiful, it is probably an opinion."),
          question("Level 1: Fact and Opinion", "Fact", "Which sentence is a fact?", ["The school concert begins at 7:00 p.m.", "The concert will be the best event of the year.", "Everyone will enjoy the concert more than sports day."], "The school concert begins at 7:00 p.m.", "Correct. The time can be checked.", "Facts can be proven or checked."),
          question("Level 1: Fact and Opinion", "Opinion", "Which sentence is an opinion?", ["The new playground design is more inviting than the old one.", "The playground has two slides and one climbing wall.", "The playground opened on Monday morning."], "The new playground design is more inviting than the old one.", "Yes. It gives a judgement.", "Opinions often use judgement words."),
          question("Level 1: Fact and Opinion", "Mixed Message", "A flyer says, 'The bake sale starts at 10:00. These treats are the tastiest way to support our team.' Which part is an opinion?", ["These treats are the tastiest way to support our team.", "The bake sale starts at 10:00.", "The flyer is about a bake sale."], "These treats are the tastiest way to support our team.", "Correct. Tastiest is a judgement.", "Look for the part that cannot be proven for everyone."),
          question("Level 1: Fact and Opinion", "True or False", "A media text can include both facts and opinions.", ["True", "False"], "True", "Correct. Many media texts use both.", "One text can do several things."),
          complete("Level 1: Fact and Opinion", "Level 1 Complete", "You practised sorting facts and opinions."),
          intro("Level 2: Persuasion and Support", "Notice Persuasion", "Persuasion tries to convince", "Persuasive media may use strong words, emotional pictures, examples, promises, or reasons. A careful reader asks whether the message is fair and supported."),
          question("Level 2: Persuasion and Support", "Persuasive Claim", "Which sentence is trying to persuade?", ["Choose the library helper club if you want to make reading time better for younger students.", "The library helper club meets on Tuesdays after lunch.", "The library helper club has eight members this term."], "Choose the library helper club if you want to make reading time better for younger students.", "Correct. It encourages a choice.", "Persuasion often asks people to act."),
          question("Level 2: Persuasion and Support", "Strong Support", "Claim: A walking school bus would help students arrive safely. Which support is strongest?", ["Students would walk in a supervised group on planned routes.", "Walking can happen in many neighbourhoods.", "Some students already own comfortable shoes."], "Students would walk in a supervised group on planned routes.", "Yes. It explains how safety would improve.", "Strong support connects directly to the claim."),
          question("Level 2: Persuasion and Support", "Weak Support", "Claim: Our class should use labelled recycling bins. Which support is weakest?", ["The labels could be printed on white paper.", "Labels would help students sort paper, plastic, and cans correctly.", "Clear bin signs would reduce mistakes during cleanup."], "The labels could be printed on white paper.", "Correct. It mentions labels but does not strongly support the claim.", "Weak support may be related but not convincing."),
          question("Level 2: Persuasion and Support", "True or False", "A persuasive message is stronger when it uses reasons that can be checked or explained.", ["True", "False"], "True", "Correct. Support matters.", "Persuasion should not rely only on strong feelings."),
          complete("Level 2: Persuasion and Support", "Mission Complete", "You practised finding persuasive support.")
        ],
        quizQuestions: [
          quizQuestion("Fact and Opinion", "Fact", "multipleChoice", "Which statement is a fact?", ["The museum opens at 9:30 a.m.", "The museum would be a useful trip choice for our class.", "The museum exhibits seem easier to understand than the website."], "The museum opens at 9:30 a.m.", "The opening time can be checked."),
          quizQuestion("Fact and Opinion", "Opinion", "multipleChoice", "Which statement is an opinion?", ["The poster uses a photograph of a school garden.", "The garden club meets every second Wednesday.", "The garden club is the best way to spend recess."], "The garden club is the best way to spend recess.", "Best is a judgement."),
          quizQuestion("Fact and Opinion", "Mixed Text", "multipleChoice", "Which phrase is opinion in this sentence: 'The race begins at 2:00, and it will be the most exciting race yet'?", ["it will be the most exciting race yet", "The race begins at 2:00", "race begins"], "it will be the most exciting race yet", "Exciting is a judgement."),
          quizQuestion("Persuasion", "Persuasive Wording", "multipleChoice", "Which sentence is most persuasive?", ["Join the reading challenge and help our class reach its goal.", "The reading challenge begins next week.", "Students may record books on a chart."], "Join the reading challenge and help our class reach its goal.", "It asks the audience to join."),
          quizQuestion("Persuasion", "Evidence", "multipleChoice", "Claim: Bike racks should be added near the front door. Which support is strongest?", ["More students could lock bikes in a visible, organized place.", "Bike racks can be made from metal.", "The front door is where many people enter."], "More students could lock bikes in a visible, organized place.", "It supports the claim clearly."),
          quizQuestion("Persuasion", "Weak Support", "multipleChoice", "Claim: The class should use reusable containers. Which support is weakest?", ["Some containers have colourful lids.", "Reusable containers can reduce daily garbage.", "Families can wash and use the same containers again."], "Some containers have colourful lids.", "It is related but not strong support."),
          quizQuestion("Fact and Opinion", "True or False", "trueFalse", "A fact can be checked or proven.", ["True", "False"], "True", "Facts can be checked."),
          quizQuestion("Persuasion", "True or False", "trueFalse", "Persuasive media should be read carefully to see whether the claim is supported.", ["True", "False"], "True", "Careful readers check support.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-5-online-credibility",
        title: "Online Information and Credibility",
        learningGoal: "Students will evaluate whether online information seems useful, current, and trustworthy.",
        successCriteria: [
          "I can check who made or published online information.",
          "I can decide whether a source fits my question.",
          "I can notice clues that information may need to be checked with another source."
        ],
        vocabulary: ["credible", "source", "current", "author", "verify"],
        teacherOverview: "Students practise safe, age-appropriate habits for judging online information.",
        lessonContent: [
          "Credible information is trustworthy enough to use after careful checking.",
          "Online readers should ask who made the information and why it was made.",
          "A source should fit the question being researched.",
          "Dates can matter because some information changes over time.",
          "Important information should be checked with more than one reliable source."
        ],
        activityTitle: "Online Source Checker",
        mission: "Choose online information habits that help readers check sources carefully.",
        levels: ["Level 1: Source Clues", "Level 2: Check Before Trusting"],
        quizTitle: "Online Information and Credibility Quiz",
        quizFocus: "Credibility, source fit, author, dates, verification, and careful online reading",
        steps: [
          intro("Level 1: Source Clues", "Before You Begin", "Get ready: online information needs checking", "Online information can be helpful, but not everything online is equally reliable. A careful reader checks the source before trusting or sharing information."),
          intro("Level 1: Source Clues", "Who Made It?", "Look for source clues", "Check whether the page names an author, organization, date, and purpose. These clues help you decide whether the information is useful for your question."),
          question("Level 1: Source Clues", "Author", "Which source clue is most helpful when deciding whether to trust an article about local weather safety?", ["the article is published by the city's emergency information page", "the article uses a large weather photograph", "the article has a short title that is easy to remember"], "the article is published by the city's emergency information page", "Correct. The publisher connects to the topic.", "Ask who is responsible for the information."),
          question("Level 1: Source Clues", "Date", "You are checking school bus cancellation information. Which date matters most?", ["today's update date", "the date the website was first designed", "the date of last year's winter break"], "today's update date", "Yes. Current information matters for bus cancellations.", "Some information changes quickly."),
          question("Level 1: Source Clues", "Purpose", "A webpage about a snack says many good things about one brand and has a 'Buy Now' button. What should readers notice?", ["the page may be trying to sell the snack", "the page may be written for families choosing snacks", "the page may include facts mixed with advertising"], "the page may be trying to sell the snack", "Correct. Selling can affect the message.", "Look at why the page was made."),
          question("Level 1: Source Clues", "True or False", "The person or group behind online information can affect how trustworthy it is.", ["True", "False"], "True", "Correct. Source matters.", "Who made it is an important clue."),
          complete("Level 1: Source Clues", "Level 1 Complete", "You practised checking source clues."),
          intro("Level 2: Check Before Trusting", "Fit and Verify", "Use more than one clue", "A source can look polished but still not answer your question. A careful reader checks whether the source fits, whether the information is current, and whether another reliable source agrees."),
          question("Level 2: Check Before Trusting", "Source Fit", "Question: How do maple trees produce sap? Which source fits best?", ["a science article about maple sap and tree growth", "a recipe page for maple cookies", "a travel page about fall colours in Canada"], "a science article about maple sap and tree growth", "Correct. It directly answers the question.", "Match the source to the research question."),
          question("Level 2: Check Before Trusting", "Verify", "A website gives a surprising fact for a science report, but it does not name an author or source. What should a student do?", ["check the fact with another reliable source", "use it only if it fits the report question", "save the page and look for the date first"], "check the fact with another reliable source", "Yes. Important information should be checked.", "Surprising claims deserve careful checking."),
          question("Level 2: Check Before Trusting", "Outdated", "A page from 2014 lists current tablet prices for students. What is the main concern?", ["the prices may be outdated", "the page uses numbers", "the topic includes technology"], "the prices may be outdated", "Correct. Prices and technology information can change.", "Dates matter when information changes."),
          question("Level 2: Check Before Trusting", "True or False", "A source can look attractive and still need careful checking.", ["True", "False"], "True", "Correct. Design alone does not prove accuracy.", "Do not judge only by looks."),
          complete("Level 2: Check Before Trusting", "Mission Complete", "You practised checking online credibility.")
        ],
        quizQuestions: [
          quizQuestion("Credibility", "Publisher", "multipleChoice", "Which source is likely strongest for school weather closure information?", ["the school board's official update page", "a student's old slideshow about winter", "a general article about snow activities"], "the school board's official update page", "The official page fits the information need."),
          quizQuestion("Credibility", "Date", "multipleChoice", "Why does the date matter for a webpage about bus routes?", ["routes may change over time", "the page may use last term's school schedule", "the route names may look similar each year"], "routes may change over time", "Current information matters for routes."),
          quizQuestion("Credibility", "Purpose", "multipleChoice", "A page praises one backpack brand and includes a shopping link. What is a careful reader's best thought?", ["The page may be trying to sell the backpack.", "The page must be a neutral school report.", "The page cannot include any useful facts."], "The page may be trying to sell the backpack.", "A selling purpose can shape the message."),
          quizQuestion("Credibility", "Source Fit", "multipleChoice", "Question: Why do leaves change colour in fall? Which source fits best?", ["a science article about pigments in leaves", "a craft page about leaf rubbings", "a photo gallery of autumn parks"], "a science article about pigments in leaves", "It directly answers the question."),
          quizQuestion("Credibility", "Verify", "multipleChoice", "What should a student do with an important online fact that appears in only one unclear source?", ["check it with another reliable source", "include it because one source is enough", "make the title more exciting"], "check it with another reliable source", "Important facts should be verified."),
          quizQuestion("Credibility", "Author", "multipleChoice", "Which clue helps readers judge credibility?", ["the page names the author or organization", "the page has a bright button", "the page loads quickly on a tablet"], "the page names the author or organization", "The author or organization is an important clue."),
          quizQuestion("Credibility", "True or False", "trueFalse", "Online information should be checked before it is used for important work.", ["True", "False"], "True", "Careful checking matters."),
          quizQuestion("Credibility", "True or False", "trueFalse", "A polished website design automatically proves the information is accurate.", ["True", "False"], "False", "Design does not prove accuracy.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-5-digital-citizenship",
        title: "Digital Citizenship and Respectful Communication",
        learningGoal: "Students will choose safe, respectful, and responsible ways to communicate online.",
        successCriteria: [
          "I can identify private information that should not be shared online.",
          "I can choose respectful wording for digital communication.",
          "I can decide when to ask a trusted adult for help."
        ],
        vocabulary: ["digital citizenship", "private information", "respectful", "permission", "trusted adult"],
        teacherOverview: "Students practise wise and respectful digital communication habits.",
        lessonContent: [
          "Digital citizenship means using technology responsibly and respectfully.",
          "Private information should be protected.",
          "Online messages should be truthful, kind, and clear.",
          "Pictures, names, and personal details should not be shared without permission.",
          "If something online feels unsafe or confusing, students should ask a trusted adult for help."
        ],
        activityTitle: "Digital Citizenship Mission",
        mission: "Choose safe and respectful responses for common digital situations.",
        levels: ["Level 1: Privacy and Permission", "Level 2: Respectful Communication"],
        quizTitle: "Digital Citizenship and Respectful Communication Quiz",
        quizFocus: "Privacy, permission, respectful tone, online choices, and asking for help",
        steps: [
          intro("Level 1: Privacy and Permission", "Before You Begin", "Get ready: protect private information", "Digital tools can be useful for learning, but students need wise habits. Some information belongs only with family, teachers, or trusted adults."),
          intro("Level 1: Privacy and Permission", "Think Before Sharing", "Permission matters", "Before sharing someone's picture, name, work, or personal details online, ask whether you have permission. When unsure, ask a trusted adult."),
          question("Level 1: Privacy and Permission", "Private Information", "Which detail should a student avoid posting in a public class comment?", ["home address", "favourite school subject", "first name only"], "home address", "Correct. A home address is private.", "Choose the detail that could identify where someone lives."),
          question("Level 1: Privacy and Permission", "Permission", "A student wants to post a photo of classmates from a project. What should happen first?", ["check with the teacher or get permission", "post it quickly before anyone leaves", "add more classmates to make the photo better"], "check with the teacher or get permission", "Yes. Photos of others need care.", "Permission protects people."),
          question("Level 1: Privacy and Permission", "Trusted Adult", "A message from an unknown person asks a student for personal information. What should the student do?", ["stop and tell a trusted adult", "answer only one question", "ask the person to explain first"], "stop and tell a trusted adult", "Correct. Students should get help.", "Unknown requests need adult help."),
          question("Level 1: Privacy and Permission", "True or False", "Students should protect private information when using digital tools.", ["True", "False"], "True", "Correct. Privacy matters.", "Personal details need care."),
          complete("Level 1: Privacy and Permission", "Level 1 Complete", "You practised privacy and permission choices."),
          intro("Level 2: Respectful Communication", "Words Still Matter Online", "Digital messages should be respectful", "Online writing can feel quick, but it still affects real people. Respectful messages are clear, honest, and kind, even when people disagree."),
          question("Level 2: Respectful Communication", "Respectful Reply", "Which reply is most respectful after a classmate shares an idea online?", ["I disagree because the evidence points to a different answer.", "That answer cannot be right because I dislike it.", "Your idea should be replaced with mine."], "I disagree because the evidence points to a different answer.", "Correct. It disagrees with a reason and respect.", "Respectful disagreement explains the idea, not the person."),
          question("Level 2: Respectful Communication", "Tone", "Which message has the clearest helpful tone?", ["Could you please add the source for this fact?", "You forgot the source again.", "The source part is missing, so this is not useful."], "Could you please add the source for this fact?", "Yes. It is clear and respectful.", "Helpful tone asks or explains without shaming."),
          question("Level 2: Respectful Communication", "Slow Down", "A student feels angry after reading a comment. What is the wisest next step?", ["pause before replying and ask for help if needed", "send a quick reply while still angry", "copy the message to more classmates"], "pause before replying and ask for help if needed", "Correct. Pausing helps prevent unwise replies.", "Strong feelings are a good time to slow down."),
          question("Level 2: Respectful Communication", "True or False", "Respectful online communication can still include disagreement.", ["True", "False"], "True", "Correct. Disagreement can be respectful.", "Respect is about how ideas are expressed."),
          complete("Level 2: Respectful Communication", "Mission Complete", "You practised responsible digital communication.")
        ],
        quizQuestions: [
          quizQuestion("Digital Citizenship", "Privacy", "multipleChoice", "Which detail should not be shared in a public online comment?", ["home address", "book title being discussed", "the name of a school subject"], "home address", "A home address is private."),
          quizQuestion("Digital Citizenship", "Permission", "multipleChoice", "Before posting a photo of classmates, what should a student do?", ["ask the teacher or get permission", "crop the photo without telling anyone", "post it only if the picture is clear"], "ask the teacher or get permission", "Photos of others need permission."),
          quizQuestion("Digital Citizenship", "Trusted Adult", "multipleChoice", "What should a student do if an unknown person asks for personal details online?", ["tell a trusted adult", "answer with shorter details", "move the conversation to another app"], "tell a trusted adult", "Students should get adult help."),
          quizQuestion("Respectful Communication", "Tone", "multipleChoice", "Which comment is most respectful?", ["I see your point, but the paragraph gives different evidence.", "Your answer is not worth using.", "Everyone should choose my answer instead."], "I see your point, but the paragraph gives different evidence.", "It disagrees respectfully."),
          quizQuestion("Respectful Communication", "Helpful Reply", "multipleChoice", "Which reply is most helpful for peer feedback?", ["Your main idea is clear; adding one example would make it stronger.", "It needs work.", "I would write it differently."], "Your main idea is clear; adding one example would make it stronger.", "It gives a specific strength and next step."),
          quizQuestion("Digital Citizenship", "Pause", "multipleChoice", "What is wise before replying to an upsetting online comment?", ["pause and think before responding", "reply immediately so the feeling is clear", "send the comment to several friends first"], "pause and think before responding", "Pausing helps students respond wisely."),
          quizQuestion("Digital Citizenship", "True or False", "trueFalse", "Private information should be protected online.", ["True", "False"], "True", "Privacy matters."),
          quizQuestion("Respectful Communication", "True or False", "trueFalse", "Online messages should be respectful because real people read them.", ["True", "False"], "True", "Digital words affect people.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-5-comparing-media-texts",
        title: "Comparing Media Texts",
        learningGoal: "Students will compare how two media texts communicate similar topics in different ways.",
        successCriteria: [
          "I can identify what two media texts have in common.",
          "I can compare audience, purpose, and design choices.",
          "I can explain which text is stronger for a particular job."
        ],
        vocabulary: ["compare", "contrast", "similar", "different", "effective"],
        teacherOverview: "Students practise comparing media texts by audience, purpose, message, and design choices.",
        lessonContent: [
          "Two media texts can be about the same topic but communicate differently.",
          "Comparing means noticing what is similar and what is different.",
          "Media texts can differ in audience, purpose, wording, images, and layout.",
          "A text is effective when its choices help it do its job well.",
          "The stronger text depends on the purpose and audience."
        ],
        activityTitle: "Media Compare Mission",
        mission: "Compare media texts and decide which choices fit the audience and purpose best.",
        levels: ["Level 1: Compare Message and Audience", "Level 2: Compare Effectiveness"],
        quizTitle: "Comparing Media Texts Quiz",
        quizFocus: "Similarities, differences, audience, purpose, design choices, and effectiveness",
        steps: [
          intro("Level 1: Compare Message and Audience", "Before You Begin", "Get ready: same topic, different choices", "Two media texts may both be about reading, recycling, safety, or an event. They can still use different words, images, and designs because they are made for different audiences or purposes."),
          intro("Level 1: Compare Message and Audience", "Use Fair Comparisons", "Compare the same features", "Good comparisons look at message, audience, purpose, design, and evidence. Do not just say one is better; explain why one works better for a certain job."),
          question("Level 1: Compare Message and Audience", "Similar Topic", "Text A is a school poster asking students to join the choir. Text B is an email giving parents choir concert details. What do they have in common?", ["Both are about choir.", "Both are mainly asking students to register.", "Both are written for parents only."], "Both are about choir.", "Correct. The topic is shared.", "Find the common topic first."),
          question("Level 1: Compare Message and Audience", "Different Audience", "How are the choir poster and parent email different?", ["They are made for different audiences.", "They must have the same purpose.", "They cannot share any information."], "They are made for different audiences.", "Yes. One is for students and one is for parents.", "Audience can change the message."),
          question("Level 1: Compare Message and Audience", "Purpose Difference", "One recycling poster says, 'Sort waste correctly.' Another chart shows which items go in each bin. How are their purposes different?", ["The poster reminds or persuades; the chart gives detailed guidance.", "The poster is about science; the chart is about art.", "The chart tries to sell recycling bins."], "The poster reminds or persuades; the chart gives detailed guidance.", "Correct. They help in different ways.", "Think about the job each text does."),
          question("Level 1: Compare Message and Audience", "True or False", "Two media texts can share a topic but have different audiences.", ["True", "False"], "True", "Correct. Topic and audience are not the same.", "Same topic does not mean same audience."),
          complete("Level 1: Compare Message and Audience", "Level 1 Complete", "You practised comparing message and audience."),
          intro("Level 2: Compare Effectiveness", "Which Works Better?", "Effectiveness depends on the job", "A colourful poster may work well to catch attention. A detailed webpage may work better for directions. The best choice depends on what the audience needs."),
          question("Level 2: Compare Effectiveness", "Best for Quick Reminder", "Which media text is best for reminding students quickly to bring indoor shoes tomorrow?", ["a short poster by the classroom door", "a long article about winter footwear", "a slideshow about shoe manufacturing"], "a short poster by the classroom door", "Correct. A quick reminder should be easy to see.", "Match the text to the purpose."),
          question("Level 2: Compare Effectiveness", "Best for Details", "Which media text is best for families who need field trip cost, timing, lunch details, and permission information?", ["a detailed email with labelled sections", "a hallway poster with one large picture", "a short slogan on a bookmark"], "a detailed email with labelled sections", "Yes. Families need several specific details.", "Details need space and organization."),
          question("Level 2: Compare Effectiveness", "Design Choice", "Two food drive posters have the same facts. Poster A uses clear headings and a photo of donation boxes. Poster B uses small text in one crowded paragraph. Which is likely more effective?", ["Poster A, because the information is easier to find.", "Poster B, because crowded text includes more words.", "They are equally effective because facts are the same."], "Poster A, because the information is easier to find.", "Correct. Design affects usefulness.", "Effectiveness includes readability."),
          question("Level 2: Compare Effectiveness", "True or False", "The most effective media text is the one that best fits its audience and purpose.", ["True", "False"], "True", "Correct. Fit matters.", "Effective means it does its job well."),
          complete("Level 2: Compare Effectiveness", "Mission Complete", "You practised comparing media effectiveness.")
        ],
        quizQuestions: [
          quizQuestion("Compare", "Common Topic", "multipleChoice", "A poster invites students to chess club. An email tells parents chess club pickup time. What do they have in common?", ["Both are about chess club.", "Both are written mainly for parents.", "Both give pickup instructions only."], "Both are about chess club.", "They share a topic."),
          quizQuestion("Compare", "Audience", "multipleChoice", "A lunch menu with pictures is posted for students. A nutrition newsletter is sent to families. How are they different?", ["They are made for different audiences.", "They cannot include the same foods.", "They must use the same amount of detail."], "They are made for different audiences.", "Audience changes choices."),
          quizQuestion("Compare", "Purpose", "multipleChoice", "A safety poster says, 'Walk in the hallway.' A handbook page explains all hallway rules. How are their purposes different?", ["The poster gives a quick reminder; the handbook gives fuller details.", "The handbook is persuasive; the poster is a story.", "The poster is only for teachers; the handbook is only for visitors."], "The poster gives a quick reminder; the handbook gives fuller details.", "They do different jobs."),
          quizQuestion("Compare", "Best Medium", "multipleChoice", "Which text is best for a quick reminder about tomorrow's library books?", ["a short classroom notice", "a long research report", "a detailed website privacy policy"], "a short classroom notice", "A quick reminder should be easy to see."),
          quizQuestion("Compare", "Best Details", "multipleChoice", "Which text is best for explaining how to complete an online assignment?", ["a step-by-step guide with screenshots", "a poster with only the assignment title", "a short announcement over the speaker"], "a step-by-step guide with screenshots", "Detailed instructions need clear steps."),
          quizQuestion("Compare", "Effectiveness", "multipleChoice", "Which media text is more effective for a map of a school fair?", ["a labelled map with entrances, activity areas, and washrooms", "a paragraph describing every table in order", "a poster with only the fair title and date"], "a labelled map with entrances, activity areas, and washrooms", "A map should help people find places."),
          quizQuestion("Compare", "True or False", "trueFalse", "Comparing media texts means noticing similarities and differences.", ["True", "False"], "True", "That is comparing."),
          quizQuestion("Compare", "True or False", "trueFalse", "A media text can be strong for one audience and less useful for another.", ["True", "False"], "True", "Audience affects usefulness.")
        ]
      }),
      lesson({
        id: "grade-5-language-unit-5-creating-media-message",
        title: "Creating a Simple Media Message",
        learningGoal: "Students will plan a simple media message that fits a clear audience and purpose.",
        successCriteria: [
          "I can choose a clear audience and purpose.",
          "I can select words and images that support the message.",
          "I can check whether my media message is truthful, respectful, and easy to understand."
        ],
        vocabulary: ["create", "audience", "purpose", "design", "revise"],
        teacherOverview: "Students practise planning and checking a simple media message before sharing it.",
        lessonContent: [
          "Creating media begins with audience and purpose.",
          "Words, images, layout, and design should all support the same message.",
          "A media creator should be truthful and respectful.",
          "The message should be easy for the audience to understand.",
          "Revision helps improve clarity before the media text is shared."
        ],
        activityTitle: "Create a Media Message Mission",
        mission: "Plan and revise simple media messages that fit the audience and purpose.",
        levels: ["Level 1: Plan the Message", "Level 2: Check and Revise"],
        quizTitle: "Creating a Simple Media Message Quiz",
        quizFocus: "Audience, purpose, wording, image choice, layout, truthfulness, and revision",
        steps: [
          intro("Level 1: Plan the Message", "Before You Begin", "Get ready: plan before creating", "A media message works best when the creator knows the audience and purpose first. Then every choice can support the same message."),
          intro("Level 1: Plan the Message", "Choose Fitting Parts", "Words, images, and layout should agree", "If your message asks students to bring library books, the title, image, date, and button or reminder should all point to that job."),
          question("Level 1: Plan the Message", "Audience", "A student is making a poster to remind Grade 5 classmates about a science fair deadline. Which audience should guide the choices?", ["Grade 5 classmates", "families reading the school newsletter", "students visiting the science fair later"], "Grade 5 classmates", "Correct. The poster is for Grade 5 classmates.", "Use the audience named in the task."),
          question("Level 1: Plan the Message", "Purpose", "What is the purpose of a poster that says, 'Bring your science fair display board by Monday'?", ["to remind students about a deadline", "to explain every step of the science fair", "to entertain students with a science story"], "to remind students about a deadline", "Yes. It gives a clear reminder.", "Ask what the poster wants people to do."),
          question("Level 1: Plan the Message", "Image Choice", "Which image best fits a poster about bringing a reusable lunch container?", ["a lunch container beside a lunch bag", "a lunch table with students eating", "a school backpack packed for the day"], "a lunch container beside a lunch bag", "Correct. The image supports the message.", "Choose the image that matches the action."),
          question("Level 1: Plan the Message", "True or False", "A simple media message should have a clear audience and purpose.", ["True", "False"], "True", "Correct. Planning matters.", "Audience and purpose guide choices."),
          complete("Level 1: Plan the Message", "Level 1 Complete", "You practised planning media messages."),
          intro("Level 2: Check and Revise", "Review Before Sharing", "Creators are responsible", "Before sharing a media message, check that it is accurate, respectful, readable, and complete. If something might confuse the audience, revise it."),
          question("Level 2: Check and Revise", "Truthfulness", "A poster says, 'Every participant will win a prize,' but only ten prizes are available. What should the creator do?", ["revise the message so it is accurate", "change the poster to say prizes are limited", "ask whether the teacher can add more prizes"], "revise the message so it is accurate", "Correct. Media messages should be truthful.", "Accuracy matters before sharing."),
          question("Level 2: Check and Revise", "Readable Layout", "Which revision would make a poster easier to use?", ["put the date, time, and place in a clear list", "add three more background pictures", "make the title use several different fonts"], "put the date, time, and place in a clear list", "Yes. A list helps the audience find details.", "Choose the revision that improves clarity."),
          question("Level 2: Check and Revise", "Respectful Message", "Which slogan is best for a poster encouraging careful tablet use?", ["Use tablets wisely so everyone can learn.", "Careless tablet use slows learning for the class.", "Good tablet habits help devices last longer."], "Use tablets wisely so everyone can learn.", "Correct. It is positive and respectful.", "A strong message can still be respectful."),
          question("Level 2: Check and Revise", "True or False", "Creators should revise a media message if the audience might misunderstand it.", ["True", "False"], "True", "Correct. Revision improves communication.", "Clear communication matters."),
          complete("Level 2: Check and Revise", "Mission Complete", "You practised creating and revising media messages.")
        ],
        quizQuestions: [
          quizQuestion("Create Media", "Audience", "multipleChoice", "A poster is made to remind Grade 5 students about indoor shoes. Who is the main audience?", ["Grade 5 students", "families buying winter coats", "teachers planning report cards"], "Grade 5 students", "The poster is for Grade 5 students."),
          quizQuestion("Create Media", "Purpose", "multipleChoice", "A message says, 'Sign up for the class cleanup team by Thursday.' What is its purpose?", ["to persuade students to sign up by a deadline", "to explain how cleaners are trained", "to compare two classroom jobs"], "to persuade students to sign up by a deadline", "It asks for action."),
          quizQuestion("Create Media", "Image", "multipleChoice", "Which image best supports a poster about returning library books?", ["a library book being placed in a return bin", "a student writing a math answer", "a stack of lunch trays"], "a library book being placed in a return bin", "The image matches the action."),
          quizQuestion("Create Media", "Layout", "multipleChoice", "Which layout helps readers understand an event poster?", ["event name, date, time, place, and what to bring clearly separated", "title and picture only, with details in tiny print", "several paragraphs with the time mentioned near the end"], "event name, date, time, place, and what to bring clearly separated", "Important details are easy to find."),
          quizQuestion("Create Media", "Accuracy", "multipleChoice", "A flyer says a club meets every Friday, but it meets every second Friday. What should the creator do?", ["correct the schedule before sharing", "leave it because the flyer looks finished", "add more pictures instead of changing the words"], "correct the schedule before sharing", "The information must be accurate."),
          quizQuestion("Create Media", "Revision", "multipleChoice", "A poster has a good message but the date is hard to find. What revision fits best?", ["make the date easy to see near the main reminder", "move the date into the paragraph below the title", "add a second picture to balance the layout"], "make the date easy to see near the main reminder", "The revision solves the problem."),
          quizQuestion("Create Media", "True or False", "trueFalse", "A media creator should check that the message is truthful and respectful.", ["True", "False"], "True", "Creators have responsibility."),
          quizQuestion("Create Media", "True or False", "trueFalse", "The best design is always the one with the most decoration.", ["True", "False"], "False", "Design should support communication.")
        ]
      }),
      {
        id: "grade-5-language-unit-5-final-quiz",
        title: "Unit 5 Final Quiz",
        type: "unitTest",
        status: "model",
        teacherOverview: "Use this quiz after students complete the Media Literacy and Digital Texts lessons.",
        teacherSummary: "The Unit 5 final quiz checks media messages, audience and purpose, design choices, fact and opinion, persuasion, online credibility, digital citizenship, media comparison, and media creation.",
        quiz: {
          title: "Media Literacy and Digital Texts Unit Quiz",
          type: "unitTest",
          questions: [
            quizQuestion("Part A: Media Messages", "Media Text", "multipleChoice", "Which choice is a media text?", ["a poster advertising a school play", "a printer used to make theatre programs", "a box used to store stage supplies"], "a poster advertising a school play", "The poster communicates a message."),
            quizQuestion("Part A: Media Messages", "Message", "multipleChoice", "A notice says, 'Bring your recorder for music class on Tuesday.' What is the main message?", ["Students need their recorders on Tuesday.", "Music class includes instruments.", "Tuesday is part of the school schedule."], "Students need their recorders on Tuesday.", "The notice tells students what to bring and when."),
            quizQuestion("Part B: Audience", "Audience", "multipleChoice", "A webpage has student activity buttons, practice stars, and a class code login. Who is the main audience?", ["students using the learning site", "parents paying school fees", "teachers writing report cards"], "students using the learning site", "The features are for students."),
            quizQuestion("Part B: Purpose", "Purpose", "multipleChoice", "A poster says, 'Join the lunchtime walking club.' What is its main purpose?", ["to persuade students to join", "to explain how shoes are made", "to compare gym and outdoor games"], "to persuade students to join", "It encourages action."),
            quizQuestion("Part C: Design", "Emphasis", "multipleChoice", "A poster makes 'Forms due Friday' larger than the other text. Why?", ["to help the audience notice the deadline", "to make the poster look longer", "to show the date is less important"], "to help the audience notice the deadline", "Size can show importance."),
            quizQuestion("Part C: Design", "Layout", "multipleChoice", "Which layout is clearest for a field trip reminder?", ["date, place, cost, and what to bring in labelled sections", "one long paragraph with details mixed together", "a large picture with the time placed in tiny print"], "date, place, cost, and what to bring in labelled sections", "Labels help the audience find information."),
            quizQuestion("Part D: Fact and Opinion", "Fact", "multipleChoice", "Which sentence is a fact?", ["The school fair starts at 5:30 p.m.", "The fair will be the best event of spring.", "The fair games are more fun than the food table."], "The school fair starts at 5:30 p.m.", "The time can be checked."),
            quizQuestion("Part D: Fact and Opinion", "Opinion", "multipleChoice", "Which sentence is an opinion?", ["The new poster is more eye-catching than the old one.", "The poster has three headings.", "The poster was printed on Monday."], "The new poster is more eye-catching than the old one.", "Eye-catching is a judgement."),
            quizQuestion("Part D: Persuasion", "Support", "multipleChoice", "Claim: Our class should use a homework checklist. Which support is strongest?", ["A checklist can help students remember each part before handing work in.", "Checklists can be printed on half sheets.", "Many classrooms have paper near the printer."], "A checklist can help students remember each part before handing work in.", "It explains why the checklist would help."),
            quizQuestion("Part E: Credibility", "Source", "multipleChoice", "Which source is likely strongest for current school event dates?", ["the official school website listing current dates", "a classroom newsletter from last term", "a student's paragraph about favourite school events"], "the official school website listing current dates", "The official website fits the need."),
            quizQuestion("Part E: Credibility", "Verify", "multipleChoice", "A website gives a surprising health fact but does not say where it came from. What should a student do?", ["check another reliable source or ask a trusted adult", "use it only if it matches the paragraph topic", "write it down and look for the page date"], "check another reliable source or ask a trusted adult", "Important unclear facts need checking."),
            quizQuestion("Part F: Digital Citizenship", "Privacy", "multipleChoice", "Which information should not be posted in a public class comment?", ["home address", "favourite book genre", "first name only"], "home address", "A home address is private."),
            quizQuestion("Part F: Digital Citizenship", "Respect", "multipleChoice", "Which online reply is most respectful?", ["I see your idea, but the evidence supports a different answer.", "Your answer should be ignored.", "My answer is better, so use it."], "I see your idea, but the evidence supports a different answer.", "It disagrees with respect and a reason."),
            quizQuestion("Part G: Compare Media", "Audience", "multipleChoice", "A student poster invites classmates to a club. A parent email gives pickup details. How are they different?", ["They are made for different audiences.", "They cannot be about the same club.", "They must use the same amount of detail."], "They are made for different audiences.", "Audience affects choices."),
            quizQuestion("Part G: Compare Media", "Effectiveness", "multipleChoice", "Which media text is best for helping visitors find booths at a school fair?", ["a labelled map of the fair area", "a slogan about fair day", "a paragraph listing last year's events"], "a labelled map of the fair area", "A map fits the audience need."),
            quizQuestion("Part H: Create Media", "Plan", "multipleChoice", "Before creating a media message, what should the creator decide first?", ["audience and purpose", "the number of decorations", "where to put the smallest text"], "audience and purpose", "Audience and purpose guide every choice."),
            quizQuestion("Part H: Create Media", "Accuracy", "multipleChoice", "A poster lists an incorrect start time for an event. What should the creator do?", ["correct the time before sharing", "move the time closer to the title", "ask someone to check the design colours"], "correct the time before sharing", "Media information should be accurate."),
            quizQuestion("Part I: Review", "True or False", "trueFalse", "A media text can use words, images, layout, and symbols to communicate.", ["True", "False"], "True", "Media messages can use many features."),
            quizQuestion("Part I: Review", "True or False", "trueFalse", "A polished website design proves the information is correct.", ["True", "False"], "False", "Design does not prove accuracy."),
            quizQuestion("Part I: Review", "True or False", "trueFalse", "Respectful online communication can include disagreement.", ["True", "False"], "True", "People can disagree respectfully.")
          ]
        },
        unitGradePlan: {
          unitTestWeight: 60,
          lessonQuizAverageWeight: 40,
          note: "Final Media Literacy and Digital Texts mark recommendation: 60% unit quiz and 40% average of lesson quizzes."
        }
      }
    ],
    unitAssessmentPlan: {
      lessonQuizzes: "Each lesson has a short scored quiz to check the lesson focus.",
      unitTest: "The final unit quiz checks media messages, audience and purpose, design choices, fact and opinion, persuasion, online credibility, digital citizenship, comparing media texts, and creating a simple media message."
    }
  };

  window.PracticeStarUnit["grade-5-language-unit-5"] = unit;
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
