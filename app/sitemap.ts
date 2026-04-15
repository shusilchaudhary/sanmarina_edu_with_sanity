import { MetadataRoute } from 'next';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.sanmarina.edu.np';
  const now = new Date().toISOString().split('T')[0];

  // ── Core / Static Pages ────────────────────────────────────────────────────
  const corePages = [
    { path: '/',                priority: 1.0,   freq: 'daily' as const },
    { path: '/about/',          priority: 0.7,   freq: 'monthly' as const },
    { path: '/contact/',        priority: 0.8,   freq: 'monthly' as const },
    { path: '/consultation/',   priority: 0.9,   freq: 'weekly' as const },
    { path: '/blog/',           priority: 0.8,   freq: 'daily' as const },
    { path: '/services/',       priority: 0.8,   freq: 'weekly' as const },
    { path: '/study-abroad/',   priority: 0.9,   freq: 'weekly' as const },
    { path: '/scholarships/',   priority: 0.9,   freq: 'weekly' as const },
    { path: '/career/',         priority: 0.6,   freq: 'monthly' as const },
    { path: '/career/apply/',   priority: 0.6,   freq: 'monthly' as const },
    { path: '/events/',         priority: 0.7,   freq: 'weekly' as const },
    { path: '/success-stories/', priority: 0.7,  freq: 'weekly' as const },
  ];

  // ── Scholarship Pages ────────────────────────────────────────────────────────
  const scholarshipPages = [
    '/scholarships/germany-for-nepali-students/',
    '/scholarships/norway-for-nepali-students/',
    '/scholarships/usa-for-nepali-students/',
    '/scholarships/austria-for-nepali-students/',
    '/scholarships/italy-for-nepali-students/',
    '/scholarships/slovakia-for-nepali-students/',
    '/scholarships/romania-for-nepali-students/',
  ];

  // ── Study Abroad Destinations ───────────────────────────────────────────────
  const studyAbroadPages = [
    '/study-abroad/uk/',
    '/study-abroad/usa/',
    '/study-abroad/can/',
    '/study-abroad/eur/',
    '/study-abroad/jp/',
    '/study-abroad/nz/',
    '/study-abroad/kr/',
    '/study-abroad/aus/',
    '/study-abroad/estonia/',
    '/study-abroad/georgia/',
    '/study-abroad/greece/',
    '/study-abroad/ireland/',
    '/study-abroad/hungary/',
    '/study-abroad/czech-republic/',
    '/study-abroad/romania/',
  ];

  // ── European Country Pages ──────────────────────────────────────────────────
  const eurCountryPages = [
    '/study-abroad/eur/germany/',
    '/study-abroad/eur/austria/',
    '/study-abroad/eur/belgium/',
    '/study-abroad/eur/cyprus/',
    '/study-abroad/eur/denmark/',
    '/study-abroad/eur/finland/',
    '/study-abroad/eur/fr/',
    '/study-abroad/eur/italy/',
    '/study-abroad/eur/latvia/',
    '/study-abroad/eur/lithuania/',
    '/study-abroad/eur/slovakia/',
    '/study-abroad/eur/luxembourg/',
    '/study-abroad/eur/malta/',
    '/study-abroad/eur/netherlands/',
    '/study-abroad/eur/norway/',
    '/study-abroad/eur/poland/',
    '/study-abroad/eur/portugal/',
    '/study-abroad/eur/spain/',
    '/study-abroad/eur/sweden/',
    '/study-abroad/eur/switzerland/',
  ];

  // ── Services Pages ──────────────────────────────────────────────────────────
  const servicePages = [
    '/services/online-counselling/',
    '/services/admission/',
    '/services/student-visa-service-nepal/',
    '/services/visa/',
    '/services/personality-test/',
    '/services/free-ielts-preparation-baneshwor/',
    '/services/test-prep/',
    '/services/test-prep/ielts/',
    '/services/test-prep/pte/',
    '/services/test-prep/japanese/',
    '/services/test-prep/german/',
  ];

  // ── Dynamic Blog Posts from Supabase ──────────────────────────────────────
  let blogEntries: MetadataRoute.Sitemap = [];
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const supabase = createServerSupabaseClient();
      const { data: blogPosts } = await supabase
        .from('blog_posts')
        .select('slug, published_at')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      blogEntries = (blogPosts ?? []).map((post) => ({
        url: `${baseUrl}/blog/${post.slug}/`,
        lastModified: post.published_at ? new Date(post.published_at).toISOString().split('T')[0] : now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));
    } catch {
      // Fallback — sitemap still works even if DB is unreachable
    }
  }

  // ── Format helper ──────────────────────────────────────────────────────────
  const buildEntries = (
    paths: string[],
    priority: number,
    freq: MetadataRoute.Sitemap[number]['changeFrequency']
  ) =>
    paths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    }));

  const coreEntries = corePages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  return [
    ...coreEntries,
    ...buildEntries(scholarshipPages, 0.9, 'weekly'),
    ...buildEntries(studyAbroadPages, 0.8, 'weekly'),
    ...buildEntries(eurCountryPages, 0.7, 'weekly'),
    ...buildEntries(servicePages, 0.7, 'monthly'),
    ...blogEntries,
  ];
}
