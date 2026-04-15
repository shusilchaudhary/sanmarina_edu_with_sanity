-- ============================================================
-- San Marina Education Consultancy — Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- ── Blog Posts ────────────────────────────────────────────────────────────────
create table if not exists blog_posts (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  slug            text unique not null,
  excerpt         text,
  body_markdown   text not null default '',
  image_url       text,
  author          text not null default 'San Marina Team',
  category        text not null default 'Study Abroad',
  focus_keyword   text,
  meta_description text,
  faq             jsonb not null default '[]'::jsonb,
  tags            text[] not null default '{}',
  status          text not null default 'draft' check (status in ('published', 'draft')),
  ai_generated    boolean not null default false,
  published_at    timestamptz,
  created_at      timestamptz not null default now()
);

-- Index for fast blog listing
create index if not exists blog_posts_status_published_at
  on blog_posts (status, published_at desc);

create index if not exists blog_posts_slug
  on blog_posts (slug);

-- ── Jobs ──────────────────────────────────────────────────────────────────────
create table if not exists jobs (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  department  text,
  location    text not null default 'Kathmandu',
  type        text not null default 'Full Time',
  description text,
  is_active   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Seed initial jobs
insert into jobs (title, department, location, type, description) values
  ('Content Creator', 'Marketing', 'Kathmandu', 'Full Time',
   'Create engaging content for social media, blog, and digital platforms. Develop videos, reels, and written content to showcase study abroad opportunities.'),
  ('Europe Counsellor', 'Counseling', 'Kathmandu', 'Full Time',
   'Guide students through study abroad options in Europe. Advise on universities, scholarships (DAAD, Erasmus+, Stipendium Hungaricum), and visa requirements.')
on conflict do nothing;

-- ── Events ───────────────────────────────────────────────────────────────────
create table if not exists events (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  description   text,
  date          text,
  time          text,
  location      text,
  location_link text,
  image_url     text,
  event_type    text not null default 'upcoming' check (event_type in ('upcoming', 'past')),
  cta_text      text,
  cta_link      text,
  created_at    timestamptz not null default now()
);

-- ── Job Applications ──────────────────────────────────────────────────────────
create table if not exists job_applications (
  id              uuid primary key default gen_random_uuid(),
  applicant_name  text not null,
  email           text not null,
  phone           text,
  applied_for     text,
  cover_letter    text,
  resume_url      text,
  status          text not null default 'new',
  created_at      timestamptz not null default now()
);

-- ── Row Level Security ────────────────────────────────────────────────────────
-- Blog posts: public can read published posts only
alter table blog_posts enable row level security;
create policy "Public read published blog posts"
  on blog_posts for select
  using (status = 'published');

-- Jobs: public can read active jobs
alter table jobs enable row level security;
create policy "Public read active jobs"
  on jobs for select
  using (is_active = true);

-- Events: public can read all events
alter table events enable row level security;
create policy "Public read all events"
  on events for select
  using (true);

-- Job applications: no public read (admin only via service key)
alter table job_applications enable row level security;

-- ── Supabase Storage Bucket for Resumes ──────────────────────────────────────
-- Run this separately in Supabase Dashboard → Storage → New Bucket
-- Bucket name: job-applications
-- Public: false (private bucket)
-- OR use the SQL below if your Supabase version supports it:
-- insert into storage.buckets (id, name, public) values ('job-applications', 'job-applications', false);
