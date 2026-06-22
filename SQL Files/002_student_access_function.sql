-- Student access check for Practice Star
-- Run this after 001_initial_schema.sql.

create or replace function public.student_access_for_code(
  p_first_name text,
  p_pin text,
  p_student_code text
)
returns table (
  teacher_id uuid,
  teacher_email text,
  student_code text,
  student_id uuid,
  student_name text
)
language sql
security definer
set search_path = public
as $$
  select
    teacher_profiles.id as teacher_id,
    teacher_profiles.email as teacher_email,
    teacher_profiles.student_code,
    students.id as student_id,
    students.first_name as student_name
  from public.teacher_profiles
  join public.students on students.teacher_id = teacher_profiles.id
  where upper(regexp_replace(teacher_profiles.student_code, '[^A-Z0-9]', '', 'g')) =
    upper(regexp_replace(coalesce(p_student_code, ''), '[^A-Z0-9]', '', 'g'))
    and lower(students.first_name) = lower(trim(coalesce(p_first_name, '')))
    and students.pin = regexp_replace(coalesce(p_pin, ''), '\D', '', 'g')
    and students.is_active = true
  limit 1;
$$;

grant execute on function public.student_access_for_code(text, text, text) to anon;
grant execute on function public.student_access_for_code(text, text, text) to authenticated;
