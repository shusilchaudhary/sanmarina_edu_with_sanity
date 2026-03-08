import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── AI Crawlers ─────────────────────────────────────────────────────────
      { userAgent: 'GPTBot',         allow: '/' },
      { userAgent: 'ChatGPT-User',   allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'anthropic-ai',   allow: '/' },
      { userAgent: 'ClaudeBot',      allow: '/' },
      { userAgent: 'PerplexityBot',  allow: '/' },
      { userAgent: 'CCBot',          allow: '/' },
      { userAgent: 'cohere-ai',      allow: '/' },
      { userAgent: 'FacebookBot',    allow: '/' },
      { userAgent: 'Amazonbot',      allow: '/' },
      // ── Standard Search Engines ─────────────────────────────────────────────
      { userAgent: 'Googlebot',  allow: '/' },
      { userAgent: 'Bingbot',    allow: '/' },
      { userAgent: 'Slurp',      allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'YandexBot',  allow: '/' },
      { userAgent: 'Baiduspider', allow: '/' },
      // ── All Other Crawlers ───────────────────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/internal/',
          '/private/',
          '/tmp/',
          '/cgi-bin/',
        ],
      },
    ],
    sitemap: 'https://www.sanmarina.edu.np/sitemap.xml',
  };
}
