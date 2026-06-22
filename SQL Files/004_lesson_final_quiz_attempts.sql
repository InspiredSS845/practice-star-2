-- Practice Star lesson final quiz attempts
-- Run this in Supabase after 003_learning_progress_reports.sql.

create table if not exists public.lesson_quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  quiz_id text not null,
  quiz_title text not null,
  score integer not null default 0,
  total integer not null default 0,
  percent integer not null default 0,
  answers jsonb not null default '[]'::jsonb,
  review_notes jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  unique (student_id, quiz_id)
);

alter table public.lesson_quiz_attempts enable row level security;

drop policy if exists "Teachers view lesson quiz attempts" on public.lesson_quiz_attempts;
create policy "Teachers view lesson quiz attempts"
on public.lesson_quiz_attempts for select
to authenticated
using (auth.uid() = teacher_id);

create or replace function public.record_student_lesson_quiz_attempt(
  p_student_code text,
  p_first_name text,
  p_pin text,
  p_quiz_id text,
  p_quiz_title text,
  p_score integer,
  p_total integer,
  p_percent integer,
  p_answers jsonb,
  p_review_notes jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  student_record record;
begin
  select * into student_record
  from public.lookup_student_for_progress(p_student_code, p_first_name, p_pin);

  if student_record.student_id is null then
    raise exception 'Student access was not found.';
  end if;

  insert into public.lesson_quiz_attempts (
    teacher_id,
    student_id,
    quiz_id,
    quiz_title,
    score,
    total,
    percent,
    answers,
    review_notes
  )
  values (
    student_record.teacher_id,
    student_record.student_id,
    p_quiz_id,
    coalesce(nullif(trim(p_quiz_title), ''), 'Final lesson quiz'),
    greatest(coalesce(p_score, 0), 0),
    greatest(coalesce(p_total, 0), 0),
    greatest(coalesce(p_percent, 0), 0),
    coalesce(p_answers, '[]'::jsonb),
    coalesce(p_review_notes, '[]'::jsonb)
  )
  on conflict (student_id, quiz_id) do nothing;
end;
$$;

grant execute on function public.record_student_lesson_quiz_attempt(text, text, text, text, text, integer, integer, integer, jsonb, jsonb) to anon;
grant execute on function public.record_student_lesson_quiz_attempt(text, text, text, text, text, integer, integer, integer, jsonb, jsonb) to authenticated;

select pg_notify('pgrst', 'reload schema');
