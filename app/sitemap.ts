import { MetadataRoute } from 'next';

/**
 * sitemap.ts — Auto-generated sitemap for San Marina Education Consultancy
 * Updated: 2026-03-07
 * Covers: homepage, study-abroad, scholarships, services, blog, GEO pages, events, consultation
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sanmarina.edu.np';
  const now = new Date('2026-03-07');

  // ── Core / Static Pages ────────────────────────────────────────────────────
  const corePages = [
    { path: '/',                priority: 1.0,   freq: 'daily'   },
    { path: '/about/',          priority: 0.7,   freq: 'monthly' },
    { path: '/contact/',        priority: 0.8,   freq: 'monthly' },
    { path: '/consultation/',   priority: 0.9,   freq: 'weekly'  },
    { path: '/blog/',           priority: 0.8,   freq: 'daily'   },
    { path: '/services/',       priority: 0.8,   freq: 'weekly'  },
    { path: '/study-abroad/',   priority: 0.9,   freq: 'weekly'  },
    { path: '/scholarships/',   priority: 0.9,   freq: 'weekly'  },
    { path: '/career/',         priority: 0.6,   freq: 'monthly' },
    { path: '/career/apply/',   priority: 0.6,   freq: 'monthly' },
    { path: '/events/',         priority: 0.7,   freq: 'weekly'  },
    { path: '/success-stories/', priority: 0.7,  freq: 'weekly'  },
  ] as const;

  // ── Scholarship Pages (primary — -for-nepali-students) ────────────────────
  const scholarshipPages = [
    '/scholarships/germany-for-nepali-students/',
    '/scholarships/norway-for-nepali-students/',
    '/scholarships/usa-for-nepali-students/',
    '/scholarships/austria-for-nepali-students/',
    '/scholarships/italy-for-nepali-students/',
    '/scholarships/slovakia-for-nepali-students/',
    '/scholarships/romania-for-nepali-students/',
  ];

  // ── Study Abroad — Main Destination Hubs ──────────────────────────────────
  const studyAbroadHubs = [
    '/study-abroad/aus/',
    '/study-abroad/uk/',
    '/study-abroad/usa/',
    '/study-abroad/can/',
    '/study-abroad/eur/',
    '/study-abroad/jp/',
    '/study-abroad/nz/',
    '/study-abroad/kr/',
    '/study-abroad/eu/',
    '/study-abroad/georgia/',
    '/study-abroad/greece/',
    '/study-abroad/ireland/',
    '/study-abroad/hungary/',
    '/study-abroad/czech-republic/',
    '/study-abroad/romania/',
    '/study-abroad/south-korea/',
    '/study-abroad/belgium/',
  ];

  // ── Study Abroad — European Country Pages ─────────────────────────────────
  const eurCountryPages = [
    '/study-abroad/eur/germany/',
    '/study-abroad/eur/austria/',
    '/study-abroad/eur/norway/',
    '/study-abroad/eur/italy/',
    '/study-abroad/eur/france/',
    '/study-abroad/eur/netherlands/',
    '/study-abroad/eur/spain/',
    '/study-abroad/eur/portugal/',
    '/study-abroad/eur/poland/',
    '/study-abroad/eur/sweden/',
    '/study-abroad/eur/denmark/',
    '/study-abroad/eur/finland/',
    '/study-abroad/eur/switzerland/',
    '/study-abroad/eur/belgium/',
    '/study-abroad/eur/luxembourg/',
    '/study-abroad/eur/estonia/',
    '/study-abroad/eur/latvia/',
    '/study-abroad/eur/lithuania/',
    '/study-abroad/eur/cyprus/',
    '/study-abroad/eur/malta/',
    '/study-abroad/eur/georgia/',
    '/study-abroad/eur/fr/',
  ];

  // ── Services Pages ─────────────────────────────────────────────────────────
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

  // ── Blog Posts ─────────────────────────────────────────────────────────────
  const blogPosts = [
    '/blog/best-education-consultancy-nepal-2026/',
    '/blog/top-study-abroad-consultancy-nepal/',
    '/blog/best-consultancy-australia-uk-usa-nepal/',
    '/blog/scholarships-nepali-students-2026/',
    '/blog/study-abroad-guide-nepal/',
  ];

  // ── GEO Landing Pages ──────────────────────────────────────────────────────
  const geoPages: string[] = [];
  // Add if they exist: /baneshwor/, /tinkune/ etc.
  // Uncomment when GEO pages are published:
  // '/baneshwor/',
  // '/tinkune/',

  // ── Combine & format ───────────────────────────────────────────────────────
  const core = corePages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: p.priority,
  }));

  const buildEntries = (paths: string[], priority: number, freq: string) =>
    paths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: freq as MetadataRoute.Sitemap[number]['changeFrequency'],
      priority,
    }));

  return [
    ...core,
    ...buildEntries(scholarshipPages,  0.9, 'weekly'),
    ...buildEntries(studyAbroadHubs,   0.8, 'weekly'),
    ...buildEntries(eurCountryPages,   0.7, 'weekly'),
    ...buildEntries(servicePages,      0.7, 'monthly'),
    ...buildEntries(blogPosts,         0.7, 'monthly'),
    ...buildEntries(geoPages,          0.8, 'weekly'),
  ];
}
