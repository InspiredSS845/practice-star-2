-- Practice Star custom quiz sharing
-- Run this in Supabase after 008_spelling_list_sharing.sql.

alter table public.quizzes
add column if not exists share_mode text not null default 'all';

alter table public.quizzes
add column if not exists target_student_ids uuid[] not null default '{}'::uuid[];

do $$
begin
  alter table public.quizzes
  add constraint quizzes_share_mode_check
  check (share_mode in ('all', 'selected'));
exception
  when duplicate_object then null;
end;
$$;

create or replace function public.quizzes_for_student(
  p_student_code text,
  p_first_name text,
  p_pin text
)
returns table (
  id uuid,
  teacher_id uuid,
  title text,
  is_shared boolean,
  share_mode text,
  target_student_ids uuid[],
  questions jsonb,
  created_at timestamptz,
  updated_at timestamptz
)
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
    return;
  end if;

  return query
  select
    quizzes.id,
    quizzes.teacher_id,
    quizzes.title,
    quizzes.is_shared,
    quizzes.share_mode,
    quizzes.target_student_ids,
    coalesce(
      jsonb_agg(
        jsonb_build_object(
          'id', quiz_questions.id,
          'type', quiz_questions.question_type,
          'prompt', quiz_questions.prompt,
          'correctAnswer', quiz_questions.correct_answer,
          'choices', coalesce(choices.choice_list, '[]'::jsonb)
        )
        order by quiz_questions.sort_order
      ) filter (where quiz_questions.id is not null),
      '[]'::jsonb
    ) as questions,
    quizzes.created_at,
    quizzes.updated_at
  from public.quizzes
  left join public.quiz_questions on quiz_questions.quiz_id = quizzes.id
  left join lateral (
    select jsonb_agg(quiz_choices.choice_text order by quiz_choices.sort_order) as choice_list
    from public.quiz_choices
    where quiz_choices.question_id = quiz_questions.id
  ) choices on true
  where quizzes.teacher_id = student_record.teacher_id
    and quizzes.is_shared = true
    and (
      quizzes.share_mode = 'all'
      or student_record.student_id = any(quizzes.target_student_ids)
    )
  group by quizzes.id
  order by quizzes.title;
end;
$$;

grant execute on function public.quizzes_for_student(text, text, text) to anon;
grant execute on function public.quizzes_for_student(text, text, text) to authenticated;

select pg_notify('pgrst', 'reload schema');
