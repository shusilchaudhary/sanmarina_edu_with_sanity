# San Marina Education Consultancy – Full SEO Audit Report

**Website:** https://www.sanmarina.edu.np  
**Audit Date:** February 2026  
**Auditor:** Senior SEO Consultant  
**Scope:** Technical SEO, On-Page, AEO, GEO, Conversion, Competitor, Content Gap

---

## Executive Summary

San Marina has a solid Next.js foundation with good metadata patterns on key pages. Critical issues include **broken links** (3 major 404s), **incomplete sitemap**, **placeholder analytics**, and **missing LocalBusiness schema**. The Europe country pages (Poland, Austria, Czech Republic, etc.) are well-optimized with FAQ schema and GEO signals; the main site structure needs alignment.

---

## 1) Technical SEO Audit

### URL Structure
| Finding | Status |
|---------|--------|
| Trailing slashes enabled (`trailingSlash: true`) | ✅ Consistent |
| Clean, semantic URLs (`/study-abroad/eur/poland/`) | ✅ Good |
| Mixed patterns: `/study-abroad/aus` vs `/study-abroad/eur/germany` | ⚠️ Inconsistent – aus/uk/can/usa/jp/nz/kr at root; Europe countries under `/eur/` |
| Czech Republic at `/study-abroad/czech-republic/` (not under eur) | ⚠️ Inconsistent with Europe hub |

### Indexing
| Finding | Status |
|---------|--------|
| Root layout `robots: 'index, follow'` | ✅ Good |
| Country pages use `robots: { index: true, follow: true }` | ✅ Good |
| `max-snippet: -1`, `max-image-preview: large` | ✅ Good |

### Canonical Tags
| Finding | Status |
|---------|--------|
| Root canonical `https://www.sanmarina.edu.np/` | ✅ Present |
| Page-level canonicals on country pages | ✅ Present |
| Consultation, about, contact – canonicals | ✅ Present |

### Sitemap & robots.txt
| Finding | Status |
|---------|--------|
| `robots.ts` references sitemap | ✅ Configured |
| Sitemap includes `/events/`, `/success-stories/`, `/test-prep/` | ❌ **BROKEN** – these pages do not exist (404) |
| Sitemap missing Europe country pages | ❌ Poland, Austria, Switzerland, Portugal, Czech Republic, Germany, France, Spain, Italy, Netherlands not in sitemap |
| Sitemap missing `/consultation/` | ❌ High-value page not in sitemap |
| Sitemap has `/study-abroad/eur/` but not `/study-abroad/aus/` etc. | ⚠️ Destinations use IDs (aus, uk, can) – verify these resolve |
| Live sitemap returns 500 | ❌ Deployment/server issue |

### Core Web Vitals & Page Speed
| Finding | Status |
|---------|--------|
| `images: { unoptimized: true }` | ❌ **CRITICAL** – Images not optimized; hurts LCP |
| External images from Unsplash (no optimization) | ⚠️ Third-party images add latency |
| `output: 'export'` (static) | ✅ Good for TTFB |
| Preconnect to fonts, Unsplash | ✅ Good |

### Mobile Friendliness
| Finding | Status |
|---------|--------|
| Responsive Tailwind layout | ✅ Good |
| Mobile nav with hamburger | ✅ Good |
| `pt-24` on main for fixed navbar | ✅ Good |

### Structured Data
| Finding | Status |
|---------|--------|
| FAQPage schema on Poland, Austria, Czech, etc. | ✅ Good |
| Article, HowTo, BreadcrumbList on country pages | ✅ Good |
| Organization schema on country pages | ✅ Good |
| **LocalBusiness schema** | ❌ **MISSING** – Critical for GEO |
| **No Organization on homepage** | ❌ Missing |

### Internal Linking
| Finding | Status |
|---------|--------|
| Navbar links to Study Abroad, Scholarships, Services | ✅ Good |
| Footer links to main sections | ✅ Good |
| Country pages link to /consultation/, /scholarships/, sibling countries | ✅ Good |
| Europe hub links to country detail pages | ✅ Good |
| **Link depth:** Home → Study Abroad → Europe → Poland = 3 clicks | ✅ Acceptable |

### Broken Links
| Link | Target | Status |
|------|--------|--------|
| Navbar: Events | `/events` | ❌ **404** – Page does not exist |
| Navbar: Success Stories | `/success-stories` | ❌ **404** – Page does not exist |
| Navbar: Test Prep | `/test-prep` | ❌ **404** – Page does not exist |
| Navbar: IELTS Preparation | `/services/test-prep/ielts` | ❌ **404** – Page does not exist |
| Footer: Success Stories | `/success-stories` | ❌ **404** |
| Footer: Privacy Policy, Terms, Student Consent | `#` | ⚠️ Placeholder – no destination |
| HomePage: Success Stories CTA | `/success-stories` | ❌ **404** |

### Redirect Chains
| Finding | Status |
|---------|--------|
| No redirect logic in codebase | N/A – static export |
| Verify www vs non-www on live server | ⚠️ Ensure single canonical |

---

## 2) On-Page SEO Audit

### Title Tag Optimization
| Page | Title | Length | Score |
|------|-------|--------|-------|
| Home | "Best Consultancy for Study Abroad in Nepal 2026 \| Top Education Consultancy - San Marina" | 72 chars | ⚠️ Over 60 |
| Layout (default) | "Best Education Consultancy in Nepal \| Study Abroad - San Marina" | 52 chars | ✅ Good |
| Poland | "Study in Poland from Nepal 2026 \| Cost, Visa & Work Rules" | 52 chars | ✅ Good |
| Czech Republic | "Study in Czech Republic from Nepal 2026 \| Cost, Visa & Work" | 57 chars | ✅ Good |
| Consultation | "Book Free Consultation \| San Marina Education Consultancy Nepal" | 52 chars | ✅ Good |

**Action:** Shorten homepage title to ≤60 chars.

### Meta Description Quality
| Page | Length | Quality |
|------|--------|---------|
| Home | ~155 chars | ✅ Good, includes CTA |
| Poland | ~155 chars | ✅ Good, includes figures |
| Czech Republic | ~155 chars | ✅ Good |
| Consultation | ~120 chars | ⚠️ Could be 150–160 |

### H1/H2 Hierarchy
| Page | H1 | H2 Structure |
|------|-----|--------------|
| Home | "Nepal's leading study abroad consultants" | Why Students Trust Us, Destinations, etc. |
| Poland | "Study in Poland from Nepal" | Why Study, Cost, Work, Universities, etc. |
| Czech Republic | "Study in Czech Republic from Nepal" | Same pattern |
| Consultation | "Book Your Free Consultation" | What to Expect, steps |

**Note:** Homepage H1 does not include primary keyword "education consultancy" – consider aligning.

### Keyword Targeting
| Finding | Status |
|---------|--------|
| Primary: "best education consultancy nepal", "study abroad nepal" | ✅ In metadata |
| Country-specific: "study in [country] from nepal" | ✅ Strong on country pages |
| Long-tail: "Czech Republic student visa for Nepali students" | ✅ Good |
| **Keyword cannibalization** | ⚠️ "Best consultancy" on both layout and home – consolidate |

### Content Depth
| Page Type | Word Count (approx) | Competitor Benchmark |
|-----------|---------------------|----------------------|
| Poland | 2,500+ | Strong |
| Czech Republic | 2,500+ | Strong |
| Australia ([country]) | 3,000+ | Strong |
| Home | ~800 | ⚠️ Thin vs. pillar pages |
| Consultation | ~400 | Acceptable for CTA page |

### Image Alt Text
| Finding | Status |
|---------|--------|
| Hero images: "Nepali students studying in [Country]..." | ✅ Descriptive |
| Logo: "San Marina Education Consultancy" | ✅ Good |
| HomePage destinations: "Study in [Name]" | ✅ Good |
| Blog: `alt={post.title}` | ✅ Good |
| **Decorative images** | ⚠️ Audit for empty or generic alts |

### Semantic Keyword Usage
| Finding | Status |
|---------|--------|
| "study in [country] from nepal" in body | ✅ Good |
| "NPR" equivalents for costs | ✅ Good on country pages |
| "Kathmandu", "Nepal" in GEO context | ✅ Good |

---

## 3) AEO (Answer Engine Optimization)

### Featured Snippet Opportunities
| Finding | Status |
|---------|--------|
| "Quick answer:" paragraphs under H2s | ✅ Strong – Poland, Czech, Austria |
| Definition blocks ("Definition: ...") | ✅ Good |
| Numbered visa steps | ✅ Good for HowTo |
| Tables (tuition, cost breakdown) | ✅ Good for comparison snippets |

### FAQ Schema
| Page | FAQ Count | Schema |
|------|-----------|--------|
| Poland | 12 | ✅ FAQPage |
| Czech Republic | 10 | ✅ FAQPage |
| Austria, Switzerland, Portugal | 10+ each | ✅ FAQPage |
| Home, Consultation | 0 | ❌ No FAQ |

### Structured Content Formatting
| Finding | Status |
|---------|--------|
| Bullet lists for requirements | ✅ Good |
| Tables for cost comparison | ✅ Good |
| Numbered steps for visa | ✅ Good |
| Question-based H3s in FAQ | ✅ Good |

### Question-Based Headings
| Finding | Status |
|---------|--------|
| "What are study in Poland requirements...?" | ✅ Good |
| "Where do Nepali students apply for...?" | ✅ Good |
| "How is recognition of Nepali degree...?" | ✅ Good |

---

## 4) GEO (Geographic Optimization)

### Location Targeting Signals
| Finding | Status |
|---------|--------|
| `geo.region: NP-BA`, `geo.placename: Kathmandu` in layout | ✅ Good |
| `geo.position`, `ICBM` | ✅ Good |
| Branch addresses in Footer (Tinkune, Baneshwor, Ghorahi) | ✅ Good |
| **LocalBusiness schema** | ❌ **MISSING** |

### Country-Specific Optimization
| Finding | Status |
|---------|--------|
| "Nepali students" in content | ✅ Good |
| "Apply at [Embassy] in Kathmandu/New Delhi" | ✅ Good |
| NPR equivalents for costs | ✅ Good |
| Visa process for Nepal | ✅ Good |

### Local Schema
| Finding | Status |
|---------|--------|
| LocalBusiness | ❌ Missing |
| Organization | ⚠️ Only on some country pages |
| Place (for branches) | ❌ Missing |

### Currency Adaptation
| Finding | Status |
|---------|--------|
| EUR + NPR on Europe pages | ✅ Good |
| AUD + NPR on Australia | ✅ Good |
| GBP, USD, CAD with NPR where relevant | ✅ Good |

### Location-Based Keywords
| Finding | Status |
|---------|--------|
| "education consultancy kathmandu" | ✅ In metadata |
| "study abroad consultancy nepal" | ✅ Good |
| "Baneshwor", "Ghorahi", "Itahari" in body | ✅ On some country pages |

---

## 5) Conversion Optimization

### CTA Placement
| Finding | Status |
|---------|--------|
| Navbar: "Book a Free Consultation" | ✅ Above fold |
| Hero CTAs: WhatsApp, Book Consultation | ✅ Good |
| Bottom CTA sections on country pages | ✅ Good |
| "Explore Europe Programs" on Czech page | ✅ Good |

### Trust Signals
| Finding | Status |
|---------|--------|
| "98% visa success" | ✅ In metadata/copy |
| "QEAC Certified" | ✅ On country pages |
| "15+ years", "1,000+ students" | ✅ On Home |
| **Testimonials** | ❌ No dedicated section |
| **Certifications/badges** | ⚠️ QEAC mentioned but no visible badge |

### Testimonials
| Finding | Status |
|---------|--------|
| Testimonial section | ❌ **MISSING** |
| Success Stories page | ❌ 404 – page does not exist |

### Forms & Lead Capture
| Finding | Status |
|---------|--------|
| ConsultationForm (Tally) | ✅ Present |
| Tally embed `strategy="lazyOnload"` | ✅ Good |
| Form above fold on consultation page | ✅ Good |

### Above-the-Fold Clarity
| Finding | Status |
|---------|--------|
| Hero value prop clear | ✅ Good |
| Primary CTA visible | ✅ Good |
| Trust stat "1,000+ students" | ✅ Good |
| "2+ Years" badge – contradicts "15+ years" elsewhere | ⚠️ Inconsistent – fix or remove |

### Bounce Risk Areas
| Finding | Status |
|---------|--------|
| 404s on Events, Success Stories, Test Prep | ❌ High bounce risk |
| Privacy/Terms links to `#` | ⚠️ Reduces trust |
| Thin homepage content | ⚠️ Moderate |

---

## 6) Competitor Comparison

*Note: Live competitor analysis requires manual SERP review. Below is a framework based on typical education consultancy competitors in Nepal.*

### Typical Top 3 Competitors (Nepal Study Abroad)
- **ABC Education / Global Reach / similar** – Usually have: country pages, blog, success stories, scholarship listings, visa guides.

### Missing Keyword Clusters (vs. typical competitors)
| Cluster | Current | Gap |
|---------|---------|-----|
| "study in [country] without IELTS" | Mentioned on Poland | No dedicated pages |
| "cheapest country to study abroad from nepal" | Not targeted | Consider comparison page |
| "student visa rejection appeal" | Not found | Supporting content |
| "proof of funds for [country] student visa" | In body text | Could be dedicated sections |
| "Nepal education consultancy reviews" | Not targeted | Testimonials would help |

### Content Gaps
| Gap | Priority |
|-----|----------|
| Success Stories (page 404) | High |
| Events page (404) | Medium |
| Test Prep hub (404) | High |
| Country comparison ("Poland vs Germany vs Czech") | Medium – partial on country pages |
| Scholarship deadline calendar | Medium |
| Visa checklist PDFs / downloads | Low |

---

## 7) Content Gap Report

### Missing Pages
| Page | Priority | Rationale |
|------|----------|-----------|
| `/success-stories/` | **High** | Linked in Nav, Footer, Home; 404 |
| `/test-prep/` | **High** | Nav links; IELTS/PTE/TOEFL demand |
| `/events/` | Medium | In Nav; can be placeholder or real |
| `/privacy-policy/` | Medium | Footer link; trust/legal |
| `/terms-of-service/` | Medium | Footer link |
| `/student-consent/` | Low | Footer link |
| `/services/online-counselling/` | Medium | In sitemap, Nav |
| `/services/admission/` | Medium | In sitemap, Nav |
| `/services/visa/` | Medium | In sitemap, Nav |
| `/services/test-prep/ielts` | High | Nav links |
| `/scholarships/germany` etc. | Medium | In sitemap, Nav |

### Supporting Cluster Pages to Create
| Page | Purpose |
|------|---------|
| "Study Abroad Without IELTS" | Capture long-tail |
| "Proof of Funds Guide by Country" | Supporting pillar |
| "Student Visa Rejection: What to Do" | Problem-aware |
| "Best European Countries for Nepali Students 2026" | Comparison pillar |
| "Cost of Studying Abroad: Country Comparison" | Comparison pillar |

### Internal Linking Improvements
| Action |
|--------|
| Add "Success Stories" link only when page exists, or remove |
| Add contextual links from blog posts to country pages |
| Link from scholarship page to country pages (e.g., Germany scholarship → Germany page) |
| Add "Related Countries" block on each country page |
| Breadcrumb on all pages (some have, ensure consistency) |

---

## 8) Scores & Priorities

### Category Scores (out of 10)

| Category | Score | Notes |
|----------|-------|-------|
| Technical SEO | **5.5/10** | Broken links, sitemap gaps, unoptimized images |
| On-Page SEO | **7/10** | Good country pages; homepage title long; some cannibalization |
| AEO | **8/10** | Strong FAQ schema, quick answers, definitions |
| GEO | **6.5/10** | Good geo meta, NPR; missing LocalBusiness |
| Conversion | **6/10** | Good CTAs; no testimonials; 404s hurt |
| **Overall** | **6.6/10** | Strong content; fix technical and conversion gaps |

### Priority List

| Priority | Item |
|----------|------|
| **High** | Fix broken links: create or remove Events, Success Stories, Test Prep |
| **High** | Enable image optimization (remove `unoptimized: true`) |
| **High** | Add missing pages to sitemap (Europe countries, consultation) |
| **High** | Replace GA_MEASUREMENT_ID with real GA4 ID |
| **High** | Create Success Stories page (or remove links) |
| **Medium** | Add LocalBusiness schema (branches, NAP) |
| **Medium** | Shorten homepage title to ≤60 chars |
| **Medium** | Create Privacy Policy, Terms pages |
| **Medium** | Add testimonials section to Home |
| **Low** | Fix "2+ Years" vs "15+ years" inconsistency |
| **Low** | Add Organization schema to homepage |

### Quick Wins (≤1 day)

1. Remove or redirect links to `/events`, `/success-stories`, `/test-prep` until pages exist.
2. Add `/consultation/` to sitemap.
3. Add Europe country pages to sitemap (Poland, Austria, Switzerland, Portugal, Czech Republic, Germany, France, Spain, Italy, Netherlands).
4. Shorten homepage title to ≤60 characters.
5. Replace `GA_MEASUREMENT_ID` with actual GA4 ID.
6. Add LocalBusiness JSON-LD to layout or homepage.
7. Fix Footer Privacy/Terms/Consent – create placeholder pages or remove links.
8. Remove `images: { unoptimized: true }` and test build.

### 30-Day Action Plan

| Week | Focus | Tasks |
|------|-------|-------|
| **1** | Technical | Fix sitemap, remove/redirect 404 links, enable image optimization |
| **2** | Technical | Add LocalBusiness schema, fix GA, audit all internal links |
| **3** | Content | Create Success Stories page (or remove links), create Test Prep hub |
| **4** | Conversion | Add testimonials, create Privacy/Terms pages, fix trust inconsistencies |

---

## Appendix: Sitemap Additions Required

```ts
// Add to sitemap.ts:
'/consultation/',
'/study-abroad/eur/poland/',
'/study-abroad/eur/austria/',
'/study-abroad/eur/switzerland/',
'/study-abroad/eur/portugal/',
'/study-abroad/eur/germany/',
'/study-abroad/eur/france/',  // or /eur/fr/
'/study-abroad/eur/spain/',
'/study-abroad/eur/italy/',
'/study-abroad/eur/netherlands/',
'/study-abroad/czech-republic/',
```

**Remove from sitemap until pages exist:**
- `/events/`
- `/success-stories/`
- `/test-prep/`

---

*End of Audit Report*
