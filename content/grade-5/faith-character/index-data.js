window.PracticeStarContent = window.PracticeStarContent || {};
window.PracticeStarContent.grade5FaithCharacter = {
  subject: "Faith and Character",
  grade: 5,
  title: "Faith and Character - Grade 5",
  description: "An optional Christian custom library for character formation, Bible-connected reflection, service, stewardship, and Bible and Church History.",
  contentGuardrails: [
    "This library is explicitly Christian in purpose and tone.",
    "Reflection prompts should invite thoughtful response without grading a student's private faith or sincerity.",
    "Bible references, prayer wording, and faith language should remain teacher-editable.",
    "Sensitive prompts should be previewed by the teacher before students see them."
  ],
  units: [
    {
      id: "grade-5-faith-character-belonging-identity-dignity",
      title: "Belonging, Identity, and Dignity",
      strand: "Christian Character",
      unitGoal: "Students will recognize that each person has worth and that classroom communities should help people feel safe, seen, respected, and valued as people made by God.",
      lessons: [
        {
          id: "grade-5-faith-character-identity-unique",
          title: "I Am Unique",
          type: "lesson",
          status: "model",
          teacherOverview: "Students notice gifts, strengths, interests, and growth areas while practising gratitude for how God made each person. The activity avoids asking students to reveal private family details or deeply personal struggles.",
          learningGoal: "Students will recognize that each person has God-given dignity and can name gifts, strengths, and interests without comparing themselves to others.",
          christianFocus: "Each person has worth because God made people with care and purpose. The lesson invites gratitude and respect, not pride or comparison.",
          bibleConnection: {
            reference: "Psalm 139:14",
            teacherNote: "Use the wording from the Bible translation preferred by the family, church, or school. Teachers may replace or add a different passage.",
            discussionPrompt: "What does this passage help Christians remember about the value of each person?"
          },
          teacherGuardrails: [
            "Do not rank gifts or make students compare whose gifts are better.",
            "Allow students to choose simple, non-private answers.",
            "Treat quiet, practical, creative, academic, physical, relational, and spiritual gifts with equal respect.",
            "Reflection should be completed for thoughtfulness, not graded for faith sincerity."
          ],
          studentActivityPlan: {
            title: "My Gifts and Gratitude Map",
            mission: "Notice gifts and strengths God has given you, then choose one way to use a gift to help someone else.",
            steps: [
              {
                title: "Notice",
                prompt: "Write or draw three things you enjoy, care about, or are learning to do."
              },
              {
                title: "Name Gifts",
                prompt: "Choose two strengths or gifts. They can be quiet, creative, practical, academic, physical, relational, or spiritual."
              },
              {
                title: "Use It for Good",
                prompt: "Choose one gift and name one simple way you could use it to serve, encourage, help, or care for someone."
              },
              {
                title: "Thankfulness",
                prompt: "Complete this sentence: God, thank You for making me able to..."
              }
            ]
          },
          "studentActivity": {
            "type": "faithCharacterMission",
            "title": "I Am Unique Mission",
            "mission": "Earn practice stars by thinking through real-life choices about worth, gifts, thankfulness, being humble, and helping others.",
            "reward": {
              "stars": 10
            },
            "steps": [
              {
                "kind": "question",
                "level": "Level 1: God-Given Worth",
                "title": "A Classmate Feels Small",
                "prompt": "A classmate says, \"I am not good at sports, so I do not really matter on this team.\" Which response best reminds them of their worth?",
                "choices": ["Sports do not decide your worth; your effort, attitude, and other strengths still matter here.", "Maybe your real strengths are somewhere else, so you do not need to worry about this team.", "If you practise enough, you will eventually matter to the team in the same way others do."],
                "correctAnswer": "Sports do not decide your worth; your effort, attitude, and other strengths still matter here.",
                "feedback": "Yes. A person's worth is not earned by being best at one skill.",
                "hint": "Look for the answer that separates a person's worth from one ability."
              },
              {
                "kind": "question",
                "level": "Level 1: God-Given Worth",
                "title": "Worth and Differences",
                "prompt": "Which statement best shows how Christians can notice differences and still show respect?",
                "choices": ["Notice differences honestly, but never use them to rank people's worth.", "Avoid talking about differences because noticing them is usually unkind.", "Focus on people's strongest gifts first because those show their value most clearly."],
                "correctAnswer": "Notice differences honestly, but never use them to rank people's worth.",
                "feedback": "Correct. People do not need to be the same to have the same worth.",
                "hint": "The best answer notices differences without using them to measure worth."
              },
              {
                "kind": "question",
                "level": "Level 1: God-Given Worth",
                "title": "Psalm Connection",
                "prompt": "A Christian reading Psalm 139:14 would most likely connect it to which idea?",
                "choices": ["Thanking God for making me and showing respect to others.", "Remembering that God values me, so other people's ideas do not matter much.", "Remembering that God made me, so I do not need to keep growing."],
                "correctAnswer": "Thanking God for making me and showing respect to others.",
                "feedback": "Right. The passage can lead to thanks, respect, and growth.",
                "hint": "Choose the answer that keeps both thankfulness and respect."
              },
              {
                "kind": "question",
                "level": "Level 1: God-Given Worth",
                "title": "Jealousy Moment",
                "prompt": "You notice a classmate has a gift you wish you had. Which response is wise and kind?",
                "choices": ["Be glad for their gift, then choose one next step for your own growth.", "Avoid thinking about their gift so comparison does not become a bigger problem.", "Work harder mainly so you can catch up and feel equal again."],
                "correctAnswer": "Be glad for their gift, then choose one next step for your own growth.",
                "feedback": "Yes. You can honour another person's gift and still keep growing.",
                "hint": "Look for the answer that avoids both envy and comparison."
              },
              {
                "kind": "question",
                "level": "Level 2: Gifts and Strengths",
                "title": "Gift and Growth",
                "prompt": "Which statement best shows thankfulness for gifts and a desire to grow?",
                "choices": ["I can be thankful for strengths and still practise what is hard for me.", "I should spend most of my time on hard things so my gifts do not make me proud.", "I should focus mostly on my strongest gifts because they show where I can serve best."],
                "correctAnswer": "I can be thankful for strengths and still practise what is hard for me.",
                "feedback": "Correct. Gratitude and growth belong together.",
                "hint": "The best answer does not pretend gifts remove the need for practice."
              },
              {
                "kind": "question",
                "level": "Level 2: Gifts and Strengths",
                "title": "Humility",
                "prompt": "Which answer best describes being humble when someone has a real strength?",
                "choices": ["Being honest about the strength and using it with thanks and care.", "Letting other people talk about the strength, but never naming it yourself.", "Focusing on harder areas first so the strength does not become too important."],
                "correctAnswer": "Being honest about the strength and using it with thanks and care.",
                "feedback": "Right. Humility is not pretending gifts do not exist; it is using them without pride.",
                "hint": "Think about whether being humble means honesty or hiding."
              },
              {
                "kind": "question",
                "level": "Level 2: Gifts and Strengths",
                "title": "Helping Without Taking Over",
                "prompt": "You are good at explaining math, and a friend is stuck. Which choice uses that gift wisely?",
                "choices": ["Ask if they want a hint and help them do their own thinking.", "Explain the whole solution clearly so they can copy the method next time.", "Wait until they ask twice, because helping too quickly may make them depend on you."],
                "correctAnswer": "Ask if they want a hint and help them do their own thinking.",
                "feedback": "Yes. Helpful service respects the other person's worth and learning.",
                "hint": "The best answer helps without controlling."
              },
              {
                "kind": "question",
                "level": "Level 2: Gifts and Strengths",
                "title": "Private Reflection",
                "prompt": "Which reflection prompt is thoughtful but still safe to share?",
                "choices": ["Name one strength and one way it could serve someone.", "Name a strength but leave out how it could help others so it stays personal.", "Describe a challenge you overcame so the reflection feels more honest."],
                "correctAnswer": "Name one strength and one way it could serve someone.",
                "feedback": "Correct. It invites thought without asking for private details.",
                "hint": "Choose the prompt that asks for learning, not private sharing."
              },
              {
                "kind": "question",
                "level": "Level 3: Using Gifts for Good",
                "title": "Creative Gift",
                "prompt": "You enjoy drawing, and your group is making a class poster. Which choice uses your gift for service?",
                "choices": ["Design the poster while inviting useful ideas from others.", "Let the group vote on every detail so no one feels your gift matters more.", "Finish the artwork yourself first, then ask the group whether they want small changes."],
                "correctAnswer": "Design the poster while inviting useful ideas from others.",
                "feedback": "Yes. A gift can lead while still making room for others.",
                "hint": "Look for helping joined with care, not pride."
              },
              {
                "kind": "question",
                "level": "Level 3: Using Gifts for Good",
                "title": "Quiet Service",
                "prompt": "Which statement best explains quiet service?",
                "choices": ["A small helpful act can matter even if nobody gives attention to it.", "A helpful act matters most when it encourages others to do the same thing.", "A small act is usually private practice for bigger service later."],
                "correctAnswer": "A small helpful act can matter even if nobody gives attention to it.",
                "feedback": "Correct. Service does not have to be public to matter.",
                "hint": "The best answer does not make attention or size the reason service matters."
              },
              {
                "kind": "question",
                "level": "Level 3: Using Gifts for Good",
                "title": "Receiving Praise",
                "prompt": "A teacher praises your work in front of the class. Which response shows thankfulness and being humble?",
                "choices": ["Say thank you, give credit where needed, and keep using the gift well.", "Say the project was easy so the praise does not make you seem proud.", "Quickly praise someone else so the attention moves away from you."],
                "correctAnswer": "Say thank you, give credit where needed, and keep using the gift well.",
                "feedback": "Yes. Gratitude can receive encouragement without turning it into pride.",
                "hint": "The best answer is neither bragging nor pretending."
              },
              {
                "kind": "question",
                "level": "Level 3: Using Gifts for Good",
                "title": "Mission Check",
                "prompt": "Which sentence best summarizes the lesson?",
                "choices": ["God gives me worth, and my gifts are for thanks, growth, and helping others.", "God gives me worth, so my gifts mainly help me understand myself.", "My gifts are for helping others, so I should focus first on what I do best."],
                "correctAnswer": "God gives me worth, and my gifts are for thanks, growth, and helping others.",
                "feedback": "Correct. This brings together worth, growth, thanks, and helping others.",
                "hint": "Look for the answer that includes worth, gifts, and purpose."
              }
            ]
          },
          "quiz": {
            "type": "lessonQuiz",
            "title": "I Am Unique Final Quiz",
            "questions": [
              {
                "type": "trueFalse",
                "section": "God-Given Worth",
                "prompt": "If people have God-given worth, then differences in ability can be noticed honestly but should not be used to measure a person's value.",
                "choices": ["True", "False"],
                "correctAnswer": "True",
                "reviewNote": "Worth does not depend on everyone having the same strengths."
              },
              {
                "type": "multipleChoice",
                "section": "God-Given Worth",
                "prompt": "A student says, \"I am not special because I am not the best at anything.\" Which answer best fits this lesson?",
                "choices": ["Your worth is not measured by being best; gifts can be quiet, growing, or used in small ways.", "You may feel better if you focus on a different activity where your strengths are easier to see.", "You can become more confident once you choose a skill and improve enough to stand out."],
                "correctAnswer": "Your worth is not measured by being best; gifts can be quiet, growing, or used in small ways.",
                "reviewNote": "The lesson separates worth from being best or comparing."
              },
              {
                "type": "trueFalse",
                "section": "Gifts and Strengths",
                "prompt": "Naming a real strength is always prideful unless someone else names it first.",
                "choices": ["True", "False"],
                "correctAnswer": "False",
                "reviewNote": "Being humble does not mean pretending strengths are not real."
              },
              {
                "type": "multipleChoice",
                "section": "Gifts and Strengths",
                "prompt": "Which choice best shows using a gift well?",
                "choices": ["Using a strength to help while still respecting other people's ideas.", "Using a strength only after the group agrees it is the best option.", "Using a strength quietly so nobody can accuse you of showing off."],
                "correctAnswer": "Using a strength to help while still respecting other people's ideas.",
                "reviewNote": "Using a gift well means helping with care and respect."
              },
              {
                "type": "multipleChoice",
                "section": "Gifts and Strengths",
                "prompt": "Which answer best explains being unique in this lesson?",
                "choices": ["Each person has God-given worth and can use different gifts for good.", "Each person should focus on the gift that makes them most different from others.", "Each person should discover a personal gift before trying to serve others."],
                "correctAnswer": "Each person has God-given worth and can use different gifts for good.",
                "reviewNote": "Being unique connects to worth, thanks, and helping others."
              },
              {
                "type": "trueFalse",
                "section": "Using Gifts for Good",
                "prompt": "A gift used quietly can still be helpful service, even if nobody notices it.",
                "choices": ["True", "False"],
                "correctAnswer": "True",
                "reviewNote": "Quiet service can still matter."
              },
              {
                "type": "multipleChoice",
                "section": "Using Gifts for Good",
                "prompt": "You feel jealous of a classmate's gift. Which response is wisest?",
                "choices": ["Name what is good in their gift, then choose one next step for your own growth.", "Focus on your own work and try not to notice their gift too much.", "Use the feeling as motivation to work harder until you feel equal again."],
                "correctAnswer": "Name what is good in their gift, then choose one next step for your own growth.",
                "reviewNote": "This response honours another person without giving up on growth."
              },
              {
                "type": "trueFalse",
                "section": "Safe Reflection",
                "prompt": "A reflection can be meaningful without asking students to share private family details or prove how strong their faith is.",
                "choices": ["True", "False"],
                "correctAnswer": "True",
                "reviewNote": "The reflection should check careful thinking without forcing private sharing."
              },
              {
                "type": "multipleChoice",
                "section": "Safe Reflection",
                "prompt": "Which reflection answer best fits this lesson?",
                "choices": ["I am thankful that I can listen well, and I can use that by helping a new student feel welcome.", "I am still figuring out my gifts, so I would rather not name one until I am sure.", "I am thankful for my strongest gift because it helps me feel confident around others."],
                "correctAnswer": "I am thankful that I can listen well, and I can use that by helping a new student feel welcome.",
                "reviewNote": "A strong response names a gift and connects it to helping without sharing too much."
              },
              {
                "type": "multipleChoice",
                "section": "Lesson Summary",
                "prompt": "Which summary best tells the main idea of the whole lesson?",
                "choices": ["God gives me worth, and my gifts can grow and help others.", "God gives me worth, so finding my gifts is mostly about confidence.", "My gifts can help others best when I focus on what comes naturally."],
                "correctAnswer": "God gives me worth, and my gifts can grow and help others.",
                "reviewNote": "The lesson connects worth, growth, thanks, and helping others."
              }
            ]
          },
          reflectionPrompts: [
            "One gift or strength I am thankful for is...",
            "One way I can use this gift to help someone is...",
            "One thing I am still learning or growing in is..."
          ],
          completionCheck: [
            "Student named at least one gift or strength.",
            "Student connected a gift to helping or encouraging others.",
            "Student completed a private or teacher-reviewed reflection."
          ],
          privacyNote: "Suggested default: teacher-visible only. Do not require students to share private reflections with the class.",
          homeConnection: "Optional family prompt: Tell your child one gift, strength, or good habit you see growing in them, and name one way that gift could bless others."
        },
        { id: "grade-5-faith-character-identity-belongs", title: "Everyone Belongs", type: "lesson", teacherOverview: "Planned activity about welcome, inclusion, and love of neighbour in classroom community." },
        { id: "grade-5-faith-character-identity-names-stories", title: "Names, Stories, and Respect", type: "lesson", teacherOverview: "Planned activity about listening respectfully and honouring each person's story." },
        { id: "grade-5-faith-character-identity-words-build-up", title: "Words That Build Up", type: "lesson", teacherOverview: "Planned activity about choosing speech that encourages, repairs, and protects dignity." },
        { id: "grade-5-faith-character-identity-welcoming", title: "Welcoming Others", type: "lesson", teacherOverview: "Planned scenario activity about noticing who may feel left out and choosing a welcoming response." },
        { id: "grade-5-faith-character-identity-respecting-differences", title: "Respecting Differences", type: "lesson", teacherOverview: "Planned activity about showing respect while keeping Christian convictions clear and gracious." },
        { id: "grade-5-faith-character-identity-gratitude-gifts", title: "Gratitude for Gifts and Strengths", type: "lesson", teacherOverview: "Planned gratitude activity about using gifts to serve others." },
        { id: "grade-5-faith-character-identity-class-covenant", title: "Creating a Class Covenant", type: "lesson", teacherOverview: "Planned activity for shaping classroom promises around respect, care, truthfulness, and welcome." },
        { id: "grade-5-faith-character-identity-reflection", title: "Collection Reflection", type: "review", teacherOverview: "Gentle reflection on belonging, dignity, and what students want to practice next." },
        { id: "grade-5-faith-character-identity-culminating-task", title: "Culminating Task", type: "lesson", teacherOverview: "Planned identity shield, belonging reflection, or class covenant response." }
      ]
    },
    {
      id: "grade-5-faith-character-kindness-empathy-compassion",
      title: "Kindness, Empathy, and Compassion",
      strand: "Christian Character",
      unitGoal: "Students will practice noticing feelings, listening well, and choosing caring responses that reflect love of neighbour.",
      lessons: [
        { id: "grade-5-faith-character-kindness-looks-like", title: "What Kindness Looks Like", type: "lesson", teacherOverview: "Planned activity about recognizing kindness in words, actions, tone, and follow-through." },
        { id: "grade-5-faith-character-kindness-reading-feelings", title: "Reading Feelings", type: "lesson", teacherOverview: "Planned activity about noticing emotions without making assumptions or embarrassing others." },
        { id: "grade-5-faith-character-kindness-listening-care", title: "Listening With Care", type: "lesson", teacherOverview: "Planned practice for attentive listening and gentle questions." },
        { id: "grade-5-faith-character-kindness-helping", title: "Helping Without Taking Over", type: "lesson", teacherOverview: "Planned scenarios about offering help respectfully." },
        { id: "grade-5-faith-character-kindness-including", title: "Including Someone Left Out", type: "lesson", teacherOverview: "Planned scenario activity about inclusion, courage, and compassion." },
        { id: "grade-5-faith-character-kindness-apology-encouragement", title: "Words for Apology and Encouragement", type: "lesson", teacherOverview: "Planned activity about helpful apology language and truthful encouragement." },
        { id: "grade-5-faith-character-kindness-compassion-action", title: "Compassion in Action", type: "lesson", teacherOverview: "Planned activity connecting compassion to small concrete choices." },
        { id: "grade-5-faith-character-kindness-challenge", title: "Planning a Kindness Challenge", type: "lesson", teacherOverview: "Planned class or home kindness challenge with teacher-selected boundaries." },
        { id: "grade-5-faith-character-kindness-reflection", title: "Collection Reflection", type: "review", teacherOverview: "Gentle reflection on empathy, kindness, and love of neighbour." },
        { id: "grade-5-faith-character-kindness-culminating-task", title: "Culminating Task", type: "lesson", teacherOverview: "Planned kindness challenge plan or empathy scenario response." }
      ]
    },
    {
      id: "grade-5-faith-character-honesty-responsibility-integrity",
      title: "Honesty, Responsibility, and Integrity",
      strand: "Christian Character",
      unitGoal: "Students will explore truthful choices, responsibility, trust, and repair after mistakes.",
      lessons: [
        { id: "grade-5-faith-character-integrity-truth-trust", title: "Truth and Trust", type: "lesson", teacherOverview: "Planned activity about how truthfulness supports trust and community." },
        { id: "grade-5-faith-character-integrity-owning-choices", title: "Owning My Choices", type: "lesson", teacherOverview: "Planned scenario activity about responsibility without shame." },
        { id: "grade-5-faith-character-integrity-small-choices", title: "Small Choices Matter", type: "lesson", teacherOverview: "Planned activity about small habits and integrity." },
        { id: "grade-5-faith-character-integrity-repairing-harm", title: "Repairing Harm", type: "lesson", teacherOverview: "Planned activity about apology, repair, and wise adult help when needed." },
        { id: "grade-5-faith-character-integrity-school", title: "Responsibility at School", type: "lesson", teacherOverview: "Planned activity about classroom responsibility and follow-through." },
        { id: "grade-5-faith-character-integrity-home-community", title: "Responsibility at Home or in Community", type: "lesson", teacherOverview: "Planned reflection that avoids requiring private family disclosures." },
        { id: "grade-5-faith-character-integrity-unseen", title: "Integrity When No One Is Watching", type: "lesson", teacherOverview: "Planned activity about choosing what is right even when it is quiet or unseen." },
        { id: "grade-5-faith-character-integrity-better-choice", title: "Making a Better Choice Plan", type: "lesson", teacherOverview: "Planned activity for next-step planning after a mistake." },
        { id: "grade-5-faith-character-integrity-reflection", title: "Collection Reflection", type: "review", teacherOverview: "Gentle reflection on truth, responsibility, and repair." },
        { id: "grade-5-faith-character-integrity-culminating-task", title: "Culminating Task", type: "lesson", teacherOverview: "Planned responsibility checklist, repair plan, or scenario reflection." }
      ]
    },
    {
      id: "grade-5-faith-character-courage-resilience-hope",
      title: "Courage, Resilience, and Hope",
      strand: "Christian Character",
      unitGoal: "Students will learn how courage, perseverance, help-seeking, and hopeful thinking can support growth through challenge.",
      lessons: [
        { id: "grade-5-faith-character-courage-meaning", title: "What Courage Means", type: "lesson", teacherOverview: "Planned activity about courage as wise, faithful action, not pretending nothing is hard." },
        { id: "grade-5-faith-character-courage-trying-again", title: "Trying Again", type: "lesson", teacherOverview: "Planned activity about perseverance and learning from attempts." },
        { id: "grade-5-faith-character-courage-help", title: "Asking for Help", type: "lesson", teacherOverview: "Planned activity about wise help-seeking from trusted adults and friends." },
        { id: "grade-5-faith-character-courage-mistakes", title: "Learning From Mistakes", type: "lesson", teacherOverview: "Planned activity about growth, humility, and next steps." },
        { id: "grade-5-faith-character-courage-encouraging", title: "Encouraging Myself and Others", type: "lesson", teacherOverview: "Planned activity about encouragement that is truthful and hopeful." },
        { id: "grade-5-faith-character-courage-hopeful-thinking", title: "Hopeful Thinking", type: "lesson", teacherOverview: "Planned activity connecting hope with trust, patience, and wise action." },
        { id: "grade-5-faith-character-courage-next-step", title: "Choosing a Next Step", type: "lesson", teacherOverview: "Planned activity for breaking challenges into manageable next steps." },
        { id: "grade-5-faith-character-courage-toolbox", title: "My Resilience Toolbox", type: "lesson", teacherOverview: "Planned activity for collecting healthy strategies and trusted supports." },
        { id: "grade-5-faith-character-courage-reflection", title: "Collection Reflection", type: "review", teacherOverview: "Gentle reflection on courage, resilience, help, and hope." },
        { id: "grade-5-faith-character-courage-culminating-task", title: "Culminating Task", type: "lesson", teacherOverview: "Planned resilience strategy card or story response." }
      ]
    },
    {
      id: "grade-5-faith-character-service-stewardship-community",
      title: "Service, Stewardship, and Community",
      strand: "Christian Service",
      unitGoal: "Students will connect character learning to service, care for creation and shared spaces, and contribution to the common good.",
      lessons: [
        { id: "grade-5-faith-character-service-meaning", title: "What It Means to Serve", type: "lesson", teacherOverview: "Planned activity about service as humble love in action." },
        { id: "grade-5-faith-character-service-classroom-needs", title: "Needs in Our Classroom", type: "lesson", teacherOverview: "Planned activity for noticing practical needs and helpful responses." },
        { id: "grade-5-faith-character-service-community-needs", title: "Needs in Our Community", type: "lesson", teacherOverview: "Planned activity for age-appropriate community awareness." },
        { id: "grade-5-faith-character-service-shared-spaces", title: "Caring for Shared Spaces", type: "lesson", teacherOverview: "Planned activity about stewardship of classrooms, homes, churches, and neighbourhood spaces." },
        { id: "grade-5-faith-character-service-stewardship-gratitude", title: "Stewardship and Gratitude", type: "lesson", teacherOverview: "Planned activity connecting gratitude, care, and responsible use of what God provides." },
        { id: "grade-5-faith-character-service-small-acts", title: "Small Acts With Big Impact", type: "lesson", teacherOverview: "Planned activity about faithful small actions." },
        { id: "grade-5-faith-character-service-action-plan", title: "Planning a Service Action", type: "lesson", teacherOverview: "Planned teacher-guided service planning activity." },
        { id: "grade-5-faith-character-service-reflecting", title: "Reflecting on Service", type: "lesson", teacherOverview: "Planned reflection about what students noticed, learned, and appreciated through service." },
        { id: "grade-5-faith-character-service-reflection", title: "Collection Reflection", type: "review", teacherOverview: "Gentle reflection on service, stewardship, gratitude, and community care." },
        { id: "grade-5-faith-character-service-culminating-task", title: "Culminating Task", type: "lesson", teacherOverview: "Planned service project plan or stewardship reflection." }
      ]
    },
    {
      id: "grade-5-faith-character-peace-forgiveness-leadership",
      title: "Peace, Forgiveness, and Leadership",
      strand: "Christian Character",
      unitGoal: "Students will practice peaceful problem solving, healthy forgiveness, boundary-aware conflict repair, and leadership through service.",
      lessons: [
        { id: "grade-5-faith-character-peace-words", title: "Peaceful Words", type: "lesson", teacherOverview: "Planned activity about choosing calm and truthful words during conflict." },
        { id: "grade-5-faith-character-peace-cooling-down", title: "Cooling Down Before Responding", type: "lesson", teacherOverview: "Planned activity about pausing, praying or reflecting, and seeking help before responding." },
        { id: "grade-5-faith-character-peace-solving-conflict", title: "Solving Conflict Fairly", type: "lesson", teacherOverview: "Planned scenarios for fair conflict repair with trusted adult support when needed." },
        { id: "grade-5-faith-character-peace-forgiveness-boundaries", title: "Forgiveness and Boundaries", type: "lesson", teacherOverview: "Planned sensitive activity distinguishing forgiveness, repair, trust, and safety." },
        { id: "grade-5-faith-character-peace-making-amends", title: "Making Amends", type: "lesson", teacherOverview: "Planned activity about apology, restitution, and changed behaviour." },
        { id: "grade-5-faith-character-peace-leadership-service", title: "Leadership Through Service", type: "lesson", teacherOverview: "Planned activity about leadership as responsibility and service." },
        { id: "grade-5-faith-character-peace-leading-example", title: "Leading by Example", type: "lesson", teacherOverview: "Planned activity about steady choices that help others." },
        { id: "grade-5-faith-character-peace-plan", title: "Preparing a Peace Plan", type: "lesson", teacherOverview: "Planned activity for building a personal or class peace plan." },
        { id: "grade-5-faith-character-peace-reflection", title: "Collection Reflection", type: "review", teacherOverview: "Gentle reflection on peace, forgiveness, boundaries, and leadership." },
        { id: "grade-5-faith-character-peace-culminating-task", title: "Culminating Task", type: "lesson", teacherOverview: "Planned peace plan, role play, or leadership reflection." }
      ]
    },
    {
      id: "grade-5-faith-character-bible-church-history",
      title: "Bible and Church History",
      strand: "Bible and Church History",
      unitGoal: "Students will learn the broad story of Scripture and selected parts of church history in a respectful, age-appropriate way, connecting Bible knowledge with Christian identity, worship, service, and faithful living.",
      lessons: [
        { id: "grade-5-faith-character-bible-big-story", title: "The Big Story of the Bible", type: "lesson", teacherOverview: "Planned Bible overview activity tracing creation, fall, promise, redemption, and restoration in age-appropriate language." },
        { id: "grade-5-faith-character-bible-creation-promise-covenant", title: "Creation, Fall, Promise, and Covenant", type: "lesson", teacherOverview: "Planned activity about key Old Testament themes and God's faithfulness." },
        { id: "grade-5-faith-character-bible-jesus-gospels", title: "Jesus in the Gospels", type: "lesson", teacherOverview: "Planned activity about Jesus' life, teaching, death, and resurrection with teacher-selected scripture references." },
        { id: "grade-5-faith-character-bible-acts-early-church", title: "The Early Church in Acts", type: "lesson", teacherOverview: "Planned activity about the early church, prayer, witness, community, and mission." },
        { id: "grade-5-faith-character-bible-christians-history", title: "Christians Through History", type: "lesson", teacherOverview: "Planned survey of selected Christians through history, avoiding denominational arguments unless a teacher customizes the activity." },
        { id: "grade-5-faith-character-bible-worship-scripture-prayer", title: "Worship, Scripture, and Prayer", type: "lesson", teacherOverview: "Planned activity about Christian practices, with wording editable for family, church, or school tradition." },
        { id: "grade-5-faith-character-bible-mission-service-witness", title: "Mission, Service, and Witness", type: "lesson", teacherOverview: "Planned activity connecting faith, service, and witness in gracious age-appropriate ways." },
        { id: "grade-5-faith-character-bible-my-place", title: "My Place in God's Story", type: "lesson", teacherOverview: "Planned reflection about belonging, calling, service, and faithful living without grading private faith." },
        { id: "grade-5-faith-character-bible-reflection", title: "Collection Reflection", type: "review", teacherOverview: "Gentle reflection on Scripture, church history, worship, service, and what students want to keep learning." },
        { id: "grade-5-faith-character-bible-culminating-task", title: "Culminating Task", type: "lesson", teacherOverview: "Planned Bible timeline, church history profile, family or church heritage reflection, or short presentation plan." }
      ]
    }
  ]
};
