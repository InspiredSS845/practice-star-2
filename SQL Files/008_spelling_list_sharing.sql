-- Practice Star spelling list sharing
-- Run this in Supabase after 007_content_assignment_sync_refresh.sql.

alter table public.spelling_lists
add column if not exists share_mode text not null default 'all';

alter table public.spelling_lists
add column if not exists target_student_ids uuid[] not null default '{}'::uuid[];

do $$
begin
  alter table public.spelling_lists
  add constraint spelling_lists_share_mode_check
  check (share_mode in ('all', 'selected'));
exception
  when duplicate_object then null;
end;
$$;

create or replace function public.spelling_lists_for_student(
  p_student_code text,
  p_first_name text,
  p_pin text
)
returns table (
  id uuid,
  teacher_id uuid,
  name text,
  is_shared boolean,
  share_mode text,
  target_student_ids uuid[],
  words jsonb,
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
    spelling_lists.id,
    spelling_lists.teacher_id,
    spelling_lists.name,
    spelling_lists.is_shared,
    spelling_lists.share_mode,
    spelling_lists.target_student_ids,
    coalesce(
      jsonb_agg(spelling_words.word order by spelling_words.sort_order)
        filter (where spelling_words.id is not null),
      '[]'::jsonb
    ) as words,
    spelling_lists.created_at,
    spelling_lists.updated_at
  from public.spelling_lists
  left join public.spelling_words on spelling_words.list_id = spelling_lists.id
  where spelling_lists.teacher_id = student_record.teacher_id
    and spelling_lists.is_shared = true
    and (
      spelling_lists.share_mode = 'all'
      or student_record.student_id = any(spelling_lists.target_student_ids)
    )
  group by spelling_lists.id
  order by spelling_lists.name;
end;
$$;

grant execute on function public.spelling_lists_for_student(text, text, text) to anon;
grant execute on function public.spelling_lists_for_student(text, text, text) to authenticated;

select pg_notify('pgrst', 'reload schema');
