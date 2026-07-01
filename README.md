# Practice Star

Practice Star is a kid-friendly curriculum, practice, and progress app for teachers, parents, and students.

## Current Features

- Teacher account screen
- Reusable student code
- Student roster with PINs saved in Supabase
- Spelling lists with sharing on/off
- Spelling practice that saves progress in the browser
- Multiple choice and true/false quizzes
- Student progress dashboard
- Favicon and saved-to-device icon setup
- Supabase Auth connected for teacher signup, login, and logout
- Students tab connected to Supabase
- Student code/name/PIN check connected to Supabase
- Built-in curriculum lesson sharing connected to Supabase
- Spelling lists and spelling-list sharing connected to Supabase
- Extra practice quizzes and quiz sharing connected to Supabase
- Grade 5 Math curriculum content structure started
- Teacher Curriculum tab can browse Grade 5 Math units and lessons
- Teacher Curriculum tab can preview lesson sections
- Teacher Curriculum tab now has a Grade 5 picker and subject tabs for Math, Language, Science and Technology, Social Studies, Health, Arts, French, and Bible and Church History
- Non-math subjects are planned shells so curriculum can be added one subject at a time without breaking Math
- Bible and Church History now has seven Grade 5 planned unit cards ready for student activity development

## Current Storage

Teacher signup, login, and logout now use Supabase Auth.

The Students tab now saves roster students and PINs in Supabase.

Student login now checks the Supabase roster.

Built-in curriculum lesson sharing now saves in Supabase so "all students" and "selected students" work across devices.

Spelling lists now save in Supabase so shared lists can appear on student devices.

Extra practice quizzes now save in Supabase so shared quizzes can appear on student devices.

Activity progress and quiz progress still use browser storage while we migrate carefully.

## Project Files

- `index.html` - home page
- `student.html` - student app
- `teacher.html` - teacher dashboard
- `styles.css` - shared styles
- `shared.js` - shared app data helpers
- `student.js` - student app behavior
- `teacher.js` - teacher dashboard behavior
- `content/catalog.json` - list of available grade and subject curriculum libraries
- `content/catalog-data.js` - browser-friendly curriculum catalog for local testing
- `content/grade-5/math/index.json` - Grade 5 Math curriculum index
- `content/grade-5/math/units/` - separate Grade 5 Math unit JSON files
- `content/grade-5/math/index-data.js` and `content/grade-5/math/unit-data/` - browser-friendly curriculum files for local testing
- `content/grade-5/bible-church-history/index.json` - Grade 5 Bible and Church History curriculum index
- `content/grade-5/bible-church-history/units/` - separate Bible and Church History unit JSON files
- `content/grade-5/bible-church-history/index-data.js` and `content/grade-5/bible-church-history/unit-data/` - browser-friendly Bible and Church History curriculum files for local testing
- `supabase-config.js` - Supabase browser connection settings
- `SQL Files/001_initial_schema.sql` - first Supabase database setup
- `SQL Files/002_student_access_function.sql` - secure student code/name/PIN check
- `SQL Files/006_content_assignments.sql` - online sharing for built-in curriculum lessons and quizzes
- `SQL Files/008_spelling_list_sharing.sql` - online sharing for spelling lists
- `SQL Files/009_custom_quiz_sharing.sql` - online sharing for extra practice quizzes
- `docs/SUPABASE_SETUP.md` - Supabase setup notes

## Next Backend Steps

1. Build Unit 3 Bible and Church History as the next student-facing question activity set and final quiz.
2. Move spelling lists and extra practice quizzes to Supabase.
3. Move student activity progress and quiz progress fully to Supabase.
4. Expand curriculum sharing from Grade 5 into the future grade picker.
