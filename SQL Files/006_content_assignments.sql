-- Practice Star curriculum sharing
-- Run this in Supabase after 003_learning_progress_reports.sql.

create table if not exists public.content_assignments (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  item_id text not null,
  item_type text not null check (item_type in ('activity', 'finalQuiz', 'list', 'quiz')),
  is_shared boolean not null default false,
  share_mode text not null default 'all' check (share_mode in ('all', 'selected')),
  target_student_ids uuid[] not null default '{}'::uuid[],
  retake_student_ids uuid[] not null default '{}'::uuid[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (teacher_id, item_id, item_type)
);

drop trigger if exists content_assignments_updated_at on public.content_assignments;
create trigger content_assignments_updated_at
before update on public.content_assignments
for each row execute function public.set_updated_at();

alter table public.content_assignments enable row level security;

drop policy if exists "Teachers manage content assignments" on public.content_assignments;
create policy "Teachers manage content assignments"
on public.content_assignments for all
to authenticated
using (auth.uid() = teacher_id)
with check (auth.uid() = teacher_id);

create index if not exists content_assignments_teacher_idx
on public.content_assignments (teacher_id);

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
  where content_assignments.teacher_id = student_record.teacher_id
    and content_assignments.is_shared = true
    and (
      content_assignments.share_mode = 'all'
      or student_record.student_id = any(content_assignments.target_student_ids)
    );
end;
$$;

grant execute on function public.content_assignments_for_student(text, text, text) to anon;
grant execute on function public.content_assignments_for_student(text, text, text) to authenticated;

select pg_notify('pgrst', 'reload schema');
