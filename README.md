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
- Grade 5 Math curriculum content structure started
- Teacher Curriculum tab can browse Grade 5 Math units and lessons
- Teacher Curriculum tab can preview lesson sections
- Teacher Curriculum tab now has a Grade 5 picker and subject tabs for Math, Language, Science and Technology, Social Studies, Health, Arts, French, and Faith and Character
- Non-math subjects are planned shells so curriculum can be added one subject at a time without breaking Math
- Faith and Character now has a Grade 5 shell with 7 Christian custom-library collections and 70 planned items

## Current Storage

Teacher signup, login, and logout now use Supabase Auth.

The Students tab now saves roster students and PINs in Supabase.

Student login now checks the Supabase roster.

Spelling lists, quizzes, activity content, and progress still use browser storage while we migrate carefully.

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
- `content/grade-5/faith-character/index.json` - Grade 5 Faith and Character collection shell
- `content/grade-5/faith-character/index-data.js` - browser-friendly Faith and Character shell for local testing
- `supabase-config.js` - Supabase browser connection settings
- `SQL Files/001_initial_schema.sql` - first Supabase database setup
- `SQL Files/002_student_access_function.sql` - secure student code/name/PIN check
- `docs/SUPABASE_SETUP.md` - Supabase setup notes

## Next Backend Steps

1. Create the first full Grade 5 Math lesson and quiz.
2. Add curriculum sharing controls for teachers.
3. Move spelling lists and quizzes to Supabase.
4. Move student activity loading and progress saving to Supabase.
