-- Practice Star initial Supabase schema
-- Run this in the Supabase SQL editor after creating a project.

create extension if not exists pgcrypto;

create table public.teacher_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  student_code text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.students (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  first_name text not null,
  pin text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index students_teacher_name_unique
on public.students (teacher_id, lower(first_name));

create table public.spelling_lists (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  name text not null,
  is_shared boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.spelling_words (
  id uuid primary key default gen_random_uuid(),
  list_id uuid not null references public.spelling_lists(id) on delete cascade,
  word text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.quizzes (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  title text not null,
  is_shared boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  question_type text not null check (question_type in ('multipleChoice', 'trueFalse')),
  prompt text not null,
  correct_answer text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.quiz_choices (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.quiz_questions(id) on delete cascade,
  choice_text text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.spelling_sessions (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  list_id uuid not null references public.spelling_lists(id) on delete cascade,
  current_word_index integer not null default 0,
  completed boolean not null default false,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  updated_at timestamptz not null default now()
);

create table public.spelling_word_progress (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.spelling_sessions(id) on delete cascade,
  word_id uuid not null references public.spelling_words(id) on delete cascade,
  level integer not null default 0,
  correct_count integer not null default 0,
  missed_count integer not null default 0,
  mastered boolean not null default false,
  last_practiced_at timestamptz,
  unique (session_id, word_id)
);

create table public.spelling_attempts (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.spelling_sessions(id) on delete cascade,
  word_id uuid not null references public.spelling_words(id) on delete cascade,
  answer text not null,
  was_correct boolean not null,
  stage text not null,
  created_at timestamptz not null default now()
);

create table public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  score integer not null default 0,
  total integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.quiz_answers (
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.quiz_attempts(id) on delete cascade,
  question_id uuid not null references public.quiz_questions(id) on delete cascade,
  answer text not null,
  correct_answer text not null,
  was_correct boolean not null,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger teacher_profiles_updated_at
before update on public.teacher_profiles
for each row execute function public.set_updated_at();

create trigger students_updated_at
before update on public.students
for each row execute function public.set_updated_at();

create trigger spelling_lists_updated_at
before update on public.spelling_lists
for each row execute function public.set_updated_at();

create trigger quizzes_updated_at
before update on public.quizzes
for each row execute function public.set_updated_at();

create trigger spelling_sessions_updated_at
before update on public.spelling_sessions
for each row execute function public.set_updated_at();

create or replace function public.random_student_code()
returns text
language plpgsql
as $$
declare
  chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  result text := 'STAR';
  i integer;
begin
  for i in 1..4 loop
    result := result || substr(chars, floor(random() * length(chars) + 1)::integer, 1);
  end loop;
  return result;
end;
$$;

create or replace function public.handle_new_teacher()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  candidate_code text;
begin
  loop
    candidate_code := public.random_student_code();
    exit when not exists (
      select 1 from public.teacher_profiles where student_code = candidate_code
    );
  end loop;

  insert into public.teacher_profiles (id, email, student_code)
  values (new.id, new.email, candidate_code);

  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_teacher();

alter table public.teacher_profiles enable row level security;
alter table public.students enable row level security;
alter table public.spelling_lists enable row level security;
alter table public.spelling_words enable row level security;
alter table public.quizzes enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_choices enable row level security;
alter table public.spelling_sessions enable row level security;
alter table public.spelling_word_progress enable row level security;
alter table public.spelling_attempts enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.quiz_answers enable row level security;

create policy "Teachers can view their profile"
on public.teacher_profiles for select
to authenticated
using (auth.uid() = id);

create policy "Teachers can update their profile"
on public.teacher_profiles for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Teachers manage their students"
on public.students for all
to authenticated
using (auth.uid() = teacher_id)
with check (auth.uid() = teacher_id);

create policy "Teachers manage their spelling lists"
on public.spelling_lists for all
to authenticated
using (auth.uid() = teacher_id)
with check (auth.uid() = teacher_id);

create policy "Teachers manage words through their lists"
on public.spelling_words for all
to authenticated
using (
  exists (
    select 1 from public.spelling_lists
    where spelling_lists.id = spelling_words.list_id
      and spelling_lists.teacher_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.spelling_lists
    where spelling_lists.id = spelling_words.list_id
      and spelling_lists.teacher_id = auth.uid()
  )
);

create policy "Teachers manage their quizzes"
on public.quizzes for all
to authenticated
using (auth.uid() = teacher_id)
with check (auth.uid() = teacher_id);

create policy "Teachers manage questions through their quizzes"
on public.quiz_questions for all
to authenticated
using (
  exists (
    select 1 from public.quizzes
    where quizzes.id = quiz_questions.quiz_id
      and quizzes.teacher_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.quizzes
    where quizzes.id = quiz_questions.quiz_id
      and quizzes.teacher_id = auth.uid()
  )
);

create policy "Teachers manage choices through their quizzes"
on public.quiz_choices for all
to authenticated
using (
  exists (
    select 1
    from public.quiz_questions
    join public.quizzes on quizzes.id = quiz_questions.quiz_id
    where quiz_questions.id = quiz_choices.question_id
      and quizzes.teacher_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.quiz_questions
    join public.quizzes on quizzes.id = quiz_questions.quiz_id
    where quiz_questions.id = quiz_choices.question_id
      and quizzes.teacher_id = auth.uid()
  )
);

create policy "Teachers view spelling sessions"
on public.spelling_sessions for select
to authenticated
using (auth.uid() = teacher_id);

create policy "Teachers view spelling progress"
on public.spelling_word_progress for select
to authenticated
using (
  exists (
    select 1 from public.spelling_sessions
    where spelling_sessions.id = spelling_word_progress.session_id
      and spelling_sessions.teacher_id = auth.uid()
  )
);

create policy "Teachers view spelling attempts"
on public.spelling_attempts for select
to authenticated
using (
  exists (
    select 1 from public.spelling_sessions
    where spelling_sessions.id = spelling_attempts.session_id
      and spelling_sessions.teacher_id = auth.uid()
  )
);

create policy "Teachers view quiz attempts"
on public.quiz_attempts for select
to authenticated
using (auth.uid() = teacher_id);

create policy "Teachers view quiz answers"
on public.quiz_answers for select
to authenticated
using (
  exists (
    select 1 from public.quiz_attempts
    where quiz_attempts.id = quiz_answers.attempt_id
      and quiz_attempts.teacher_id = auth.uid()
  )
);

