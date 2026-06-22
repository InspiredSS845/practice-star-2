# Supabase Setup

This folder prepares Practice Star for a real shared database.

## What Supabase Will Store

- Teacher profiles
- Student roster entries
- Spelling lists and words
- Quizzes, questions, and choices
- Spelling practice sessions and attempts
- Quiz attempts and answers

## First Setup

1. Create a new Supabase project.
2. Open the Supabase SQL editor.
3. Copy the contents of `SQL Files/001_initial_schema.sql`.
4. Run the SQL.
5. Copy the contents of `SQL Files/002_student_access_function.sql`.
6. Run the SQL.
7. Copy your Supabase project URL and publishable key.
8. Add those values to `supabase-config.js`.

## Important Security Note

Teacher signup, login, and logout now use Supabase Auth.

Roster students and PINs are now saved in Supabase.

Student login now uses the `student_access_for_code` database function so the browser does not need to read the whole roster table.

Student access with a classroom code, first name, and PIN should be handled carefully so roster PINs are not exposed publicly. The safest later step is to use Supabase Edge Functions or carefully written security-definer database functions for student login and progress saving.

## Why This Is Split Into Steps

The app already works locally. Moving to Supabase should be done in stages so we do not break the student practice flow:

1. Create the database.
2. Test teacher signup/login with Supabase Auth.
3. Test adding and removing roster students with Supabase.
4. Test student code/name/PIN login with Supabase.
5. Move spelling lists and quizzes to Supabase.
6. Move student activity loading to Supabase.
7. Move progress saving to Supabase.
8. Remove the old browser-storage data layer.
