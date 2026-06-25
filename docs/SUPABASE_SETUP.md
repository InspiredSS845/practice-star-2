# Supabase Setup

This folder prepares Practice Star for a real shared database.

## What Supabase Will Store

- Teacher profiles
- Student roster entries
- Spelling lists and words
- Quizzes, questions, and choices
- Spelling practice sessions and attempts
- Quiz attempts and answers
- Built-in curriculum sharing settings

## First Setup

1. Create a new Supabase project.
2. Open the Supabase SQL editor.
3. Copy the contents of `SQL Files/001_initial_schema.sql`.
4. Run the SQL.
5. Copy the contents of `SQL Files/002_student_access_function.sql`.
6. Run the SQL.
7. Run the remaining numbered SQL files in order when the matching features are added.
8. Copy your Supabase project URL and publishable key.
9. Add those values to `supabase-config.js`.

## Important Security Note

Teacher signup, login, and logout now use Supabase Auth.

Roster students and PINs are now saved in Supabase.

Student login now uses the `student_access_for_code` database function so the browser does not need to read the whole roster table.

Built-in curriculum lesson sharing uses `SQL Files/006_content_assignments.sql`. Run that file before testing "Share with all students" or "Selected students" on another device.

Student access with a classroom code, first name, and PIN should be handled carefully so roster PINs are not exposed publicly. The safest later step is to use Supabase Edge Functions or carefully written security-definer database functions for student login and progress saving.

## Why This Is Split Into Steps

The app already works locally. Moving to Supabase should be done in stages so we do not break the student practice flow:

1. Create the database.
2. Test teacher signup/login with Supabase Auth.
3. Test adding and removing roster students with Supabase.
4. Test student code/name/PIN login with Supabase.
5. Move built-in curriculum sharing to Supabase.
6. Move spelling lists and custom quizzes to Supabase.
7. Move student activity loading to Supabase.
8. Move progress saving to Supabase.
9. Remove the old browser-storage data layer.
