-- Practice Star final quiz re-do helper
-- Run this in Supabase after 004_lesson_final_quiz_attempts.sql.

create or replace function public.delete_lesson_quiz_attempt_for_student(
  p_quiz_id text,
  p_student_id uuid
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1
    from public.students
    where students.id = p_student_id
      and students.teacher_id = auth.uid()
  ) then
    raise exception 'Student was not found for this teacher.';
  end if;

  delete from public.lesson_quiz_attempts
  where lesson_quiz_attempts.quiz_id = p_quiz_id
    and lesson_quiz_attempts.student_id = p_student_id
    and lesson_quiz_attempts.teacher_id = auth.uid();
end;
$$;

grant execute on function public.delete_lesson_quiz_attempt_for_student(text, uuid) to authenticated;

select pg_notify('pgrst', 'reload schema');
