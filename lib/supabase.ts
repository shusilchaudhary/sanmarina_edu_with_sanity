import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ── Types ──────────────────────────────────────────────────────────────────────

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body_markdown: string;
  image_url: string | null;
  author: string;
  category: string;
  focus_keyword: string | null;
  meta_description: string | null;
  faq: Array<{ question: string; answer: string }>;
  tags: string[];
  status: 'published' | 'draft';
  ai_generated: boolean;
  published_at: string;
  created_at: string;
};

export type Job = {
  id: string;
  title: string;
  department: string | null;
  location: string;
  type: string;
  description: string | null;
  is_active: boolean;
  created_at: string;
};

export type Event = {
  id: string;
  title: string;
  description: string | null;
  date: string | null;
  time: string | null;
  location: string | null;
  location_link: string | null;
  image_url: string | null;
  event_type: 'upcoming' | 'past';
  cta_text: string | null;
  cta_link: string | null;
  created_at: string;
};

export type JobApplication = {
  id: string;
  applicant_name: string;
  email: string;
  phone: string | null;
  applied_for: string | null;
  cover_letter: string | null;
  resume_url: string | null;
  status: string;
  created_at: string;
};
