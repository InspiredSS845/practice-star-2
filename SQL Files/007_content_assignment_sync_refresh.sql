-- Practice Star content assignment sync refresh
-- Run this in Supabase after 006_content_assignments.sql.
--
-- This lets student logins refresh old shares, new shares, and removed shares
-- instead of only seeing rows that are currently shared.

create or replace function public.content_assignments_for_student(
  p_student_code text,
  p_first_name text,
  p_pin text
)
returns table (
  id uuid,
  teacher_id uuid,
  item_id text,
  item_type text,
  is_shared boolean,
  share_mode text,
  target_student_ids uuid[],
  retake_student_ids uuid[],
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
    content_assignments.id,
    content_assignments.teacher_id,
    content_assignments.item_id,
    content_assignments.item_type,
    content_assignments.is_shared,
    content_assignments.share_mode,
    content_assignments.target_student_ids,
    content_assignments.retake_student_ids,
    content_assignments.created_at,
    content_assignments.updated_at
  from public.content_assignments
  where content_assignments.teacher_id = student_record.teacher_id;
end;
$$;

grant execute on function public.content_assignments_for_student(text, text, text) to anon;
grant execute on function public.content_assignments_for_student(text, text, text) to authenticated;

select pg_notify('pgrst', 'reload schema');
