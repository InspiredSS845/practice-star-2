-- Practice Star learning progress reports
-- Run this in Supabase after 001_initial_schema.sql and 002_student_access_function.sql.

create table if not exists public.learning_progress (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  activity_id text not null,
  activity_title text not null,
  level_index integer not null default 0,
  step_index integer not null default 0,
  earned_stars integer not null default 0,
  completed_sections jsonb not null default '[]'::jsonb,
  status text not null default 'in_progress' check (status in ('in_progress', 'completed')),
  saved_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (student_id, activity_id)
);

create table if not exists public.learning_attempts (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.teacher_profiles(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  activity_id text not null,
  activity_title text not null,
  earned_stars integer not null default 0,
  levels_completed integer not null default 0,
  total_questions integer not null default 0,
  reward_collected boolean not null default false,
  created_at timestamptz not null default now()
);

drop trigger if exists learning_progress_updated_at on public.learning_progress;
create trigger learning_progress_updated_at
before update on public.learning_progress
for each row execute function public.set_updated_at();

alter table public.learning_progress enable row level security;
alter table public.learning_attempts enable row level security;

drop policy if exists "Teachers view learning progress" on public.learning_progress;
create policy "Teachers view learning progress"
on public.learning_progress for select
to authenticated
using (auth.uid() = teacher_id);

drop policy if exists "Teachers view learning attempts" on public.learning_attempts;
create policy "Teachers view learning attempts"
on public.learning_attempts for select
to authenticated
using (auth.uid() = teacher_id);

create or replace function public.lookup_student_for_progress(
  p_student_code text,
  p_first_name text,
  p_pin text
)
returns table (
  teacher_id uuid,
  student_id uuid,
  student_name text
)
language sql
security definer
set search_path = public
as $$
  select
    teacher_profiles.id as teacher_id,
    students.id as student_id,
    students.first_name as student_name
  from public.teacher_profiles
  join public.students on students.teacher_id = teacher_profiles.id
  where upper(teacher_profiles.student_code) = upper(regexp_replace(coalesce(p_student_code, ''), '[^A-Za-z0-9]', '', 'g'))
    and lower(students.first_name) = lower(trim(coalesce(p_first_name, '')))
    and students.pin = regexp_replace(coalesce(p_pin, ''), '\D', '', 'g')
    and students.is_active = true
  limit 1;
$$;

create or replace function public.upsert_student_learning_progress(
  p_student_code text,
  p_first_name text,
  p_pin text,
  p_activity_id text,
  p_activity_title text,
  p_level_index integer,
  p_step_index integer,
  p_earned_stars integer,
  p_completed_sections jsonb,
  p_status text default 'in_progress'
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

  insert into public.learning_progress (
    teacher_id,
    student_id,
    activity_id,
    activity_title,
    level_index,
    step_index,
    earned_stars,
    completed_sections,
    status,
    saved_at
  )
  values (
    student_record.teacher_id,
    student_record.student_id,
    p_activity_id,
    coalesce(nullif(trim(p_activity_title), ''), 'Learning mission'),
    greatest(coalesce(p_level_index, 0), 0),
    greatest(coalesce(p_step_index, 0), 0),
    greatest(coalesce(p_earned_stars, 0), 0),
    coalesce(p_completed_sections, '[]'::jsonb),
    case when p_status = 'completed' then 'completed' else 'in_progress' end,
    now()
  )
  on conflict (student_id, activity_id)
  do update set
    activity_title = excluded.activity_title,
    level_index = excluded.level_index,
    step_index = excluded.step_index,
    earned_stars = excluded.earned_stars,
    completed_sections = excluded.completed_sections,
    status = excluded.status,
    saved_at = now();
end;
$$;

create or replace function public.record_student_learning_attempt(
  p_student_code text,
  p_first_name text,
  p_pin text,
  p_activity_id text,
  p_activity_title text,
  p_earned_stars integer,
  p_levels_completed integer,
  p_total_questions integer,
  p_reward_collected boolean
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

  insert into public.learning_attempts (
    teacher_id,
    student_id,
    activity_id,
    activity_title,
    earned_stars,
    levels_completed,
    total_questions,
    reward_collected
  )
  values (
    student_record.teacher_id,
    student_record.student_id,
    p_activity_id,
    coalesce(nullif(trim(p_activity_title), ''), 'Learning mission'),
    greatest(coalesce(p_earned_stars, 0), 0),
    greatest(coalesce(p_levels_completed, 0), 0),
    greatest(coalesce(p_total_questions, 0), 0),
    coalesce(p_reward_collected, false)
  );

  perform public.upsert_student_learning_progress(
    p_student_code,
    p_first_name,
    p_pin,
    p_activity_id,
    p_activity_title,
    greatest(coalesce(p_levels_completed, 0) - 1, 0),
    p_total_questions,
    p_earned_stars,
    '[]'::jsonb,
    'completed'
  );
end;
$$;

grant execute on function public.lookup_student_for_progress(text, text, text) to anon;
grant execute on function public.lookup_student_for_progress(text, text, text) to authenticated;
grant execute on function public.upsert_student_learning_progress(text, text, text, text, text, integer, integer, integer, jsonb, text) to anon;
grant execute on function public.upsert_student_learning_progress(text, text, text, text, text, integer, integer, integer, jsonb, text) to authenticated;
grant execute on function public.record_student_learning_attempt(text, text, text, text, text, integer, integer, integer, boolean) to anon;
grant execute on function public.record_student_learning_attempt(text, text, text, text, text, integer, integer, integer, boolean) to authenticated;

select pg_notify('pgrst', 'reload schema');
