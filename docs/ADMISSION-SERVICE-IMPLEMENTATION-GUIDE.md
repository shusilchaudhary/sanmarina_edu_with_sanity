# Admission Service Page – Implementation Guide

**San Marina Education Consultancy** | `/services/admission/`  

Agency-level guide for routing, design, SEO, schema, and conversion.

---

## PART 1 – FIX 404 IN NEXT.JS

### 1.1 Root Cause of 404

In **Next.js App Router**, routes are file-based. The 404 occurred because no page existed at:

- **Required path:** `app/services/admission/page.tsx`
- **Fix:** Create the page file at that path.

### 1.2 Correct Folder Structure

**App Router (Next.js 13+):**
```
app/
├── services/
│   ├── page.tsx           → /services/
│   ├── admission/
│   │   ├── page.tsx       → /services/admission/  ✅
│   │   └── components/
│   │       ├── FAQAccordion.tsx
│   │       └── StickyCTA.tsx
│   └── online-counselling/
│       └── ...
```

**Pages Router (if you ever switch):**
```
pages/
├── services/
│   ├── index.js          → /services
│   └── admission.js      → /services/admission  (or admission/index.js)
```

### 1.3 Working page.tsx (App Router)

```tsx
// app/services/admission/page.tsx
export default function AdmissionPage() {
  return (
    <main>
      <h1>Admission Counselling</h1>
      {/* Content */}
    </main>
  );
}
```

### 1.4 Working admission.js (Pages Router)

```jsx
// pages/services/admission.js
export default function AdmissionPage() {
  return (
    <main>
      <h1>Admission Counselling</h1>
      {/* Content */}
    </main>
  );
}
```

### 1.5 Trailing Slash Behavior

This project uses `trailingSlash: true` in `next.config.js`:

- **Canonical URL:** `https://www.sanmarina.edu.np/services/admission/`
- **Both work:** `/services/admission` and `/services/admission/` (Next.js redirects as configured)
- **Internal links:** Use trailing slash for consistency: `/services/admission/`

### 1.6 Best Practice Service Route Structure

| Route | File Path |
|-------|-----------|
| /services/ | app/services/page.tsx |
| /services/admission/ | app/services/admission/page.tsx |
| /services/online-counselling/ | app/services/online-counselling/page.tsx |
| /services/visa/ | app/services/visa/page.tsx |
| /services/[slug]/ | app/services/[slug]/page.tsx (dynamic) |

---

## PART 2 – PAGE DESIGN

### 2.1 Hero Section Structure

- **H1:** Primary keyword + benefit (Nepali students, 2026 intake)
- **Subheadline:** Value prop (end-to-end, SOP, scholarship, visa)
- **Primary CTA:** WhatsApp
- **Secondary CTA:** Consultation form
- **Breadcrumb:** Home → Services → Admission Counselling

### 2.2 Trust Signal Placement

4 metrics after hero:

- 1,500+ students placed
- 98% visa success rate
- 100+ partner universities
- 10+ years experience

### 2.3 Step-by-Step Admission Process

1. Profile Evaluation & Goal Setting  
2. University & Course Shortlisting  
3. Document Preparation  
4. Application Submission  
5. Offer Management & Visa Coordination  

### 2.4 Country Selection Guidance

Links to Australia, UK, USA, Canada, Germany, Norway, Italy, Japan—plus study-abroad hub.

### 2.5 Scholarship Advisory Section

DAAD, Norwegian Quota, Italian DSU, Romanian Govt, OeAD, university awards. Link to /scholarships/.

### 2.6 Visa Coordination Explanation

Handover from admission to visa team; optional admission + visa package.

### 2.7 Conversion Layout & Mobile UX

- CTAs: Hero, mid-page, footer, sticky (mobile)
- Mobile-first: Sticky CTA after 400px scroll, tap targets ≥44px
- Single-column layout on small screens

---

## PART 3 – SEO + AEO + GEO

### 3.1 H1

```
Admission Counselling for Study Abroad
University Application Support for Nepali Students – 2026 Intake
```

### 3.2 Meta Title (Next.js Metadata API)

```tsx
export const metadata: Metadata = {
  title: 'Admission Counselling Nepal | University Application Guide for Nepali Students 2026 - San Marina',
  // ...
};
```

### 3.3 Meta Description

```
Admission consultancy in Nepal for study abroad. End-to-end university application support: shortlisting, SOP, LOR, scholarship guidance. Best admission process for Nepali students 2026. Book free consultation.
```

### 3.4 Long-Tail Keywords

- admission consultancy nepal
- study abroad admission process nepal
- university admission guidance nepali students
- admission counselling nepal 2026
- study abroad admission consultancy kathmandu

### 3.5 AI Conversational Query Coverage

FAQs answer queries such as:

- What is admission consultancy in Nepal?
- What is the study abroad admission process for Nepali students?
- How do I get university admission guidance?
- Does admission counselling include scholarship guidance?
- When should I start for September 2026 intake?

### 3.6 Featured Snippet Box

Implemented as “Quick Answer” with definition + bullet facts.

### 3.7 Internal Linking Strategy

- Home → Services → Admission
- Admission → Consultation, Online Counselling, Services, Scholarships, Study Abroad, Contact
- Admission → Country pages (Australia, UK, Germany, etc.)

### 3.8 External Authority Links (Suggested)

- [DAAD – Study in Germany](https://www.daad.de)
- [UCAS – UK applications](https://www.ucas.com)
- [Study in Norway](https://studyinnorway.no)
- [Study in Italy](https://www.studiare-in-italia.it)

### 3.9 EEAT Enhancement

- Author: San Marina Education Consultancy
- Expertise: QEAC certified, 98% success, 1,500+ placed
- Experience: Since 2014, Nepal-focused
- Trust: Transparent fees, no false promises

---

## PART 4 – SCHEMA IMPLEMENTATION

### 4.1 Implementation Pattern

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { /* Service */ },
    { /* FAQPage */ },
    { /* BreadcrumbList */ },
  ],
};

return (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    {/* Page content */}
  </>
);
```

### 4.2 FAQ JSON-LD

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is admission consultancy in Nepal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Admission consultancy in Nepal helps..."
      }
    }
  ]
}
```

### 4.3 Service Schema

```json
{
  "@type": "Service",
  "name": "Admission Counselling for Study Abroad",
  "provider": { "@type": "Organization", "name": "San Marina Education Consultancy" },
  "areaServed": { "@type": "Country", "name": "Nepal" },
  "serviceType": "University Admission Counselling"
}
```

### 4.4 Breadcrumb Schema

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanmarina.edu.np/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.sanmarina.edu.np/services/" },
    { "@type": "ListItem", "position": 3, "name": "Admission Counselling", "item": "https://www.sanmarina.edu.np/services/admission/" }
  ]
}
```

### 4.5 LocalBusiness Schema (Site-Wide)

Add to root layout for EEAT:

```json
{
  "@type": "LocalBusiness",
  "name": "San Marina Education Consultancy",
  "url": "https://www.sanmarina.edu.np",
  "address": { "addressCountry": "NP", "addressLocality": "Kathmandu" },
  "telephone": "+9779802372602",
  "openingHoursSpecification": [{"dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "18:00"}]
}
```

---

## PART 5 – PERFORMANCE & TECHNICAL SEO

### 5.1 next/image Usage

Use when adding images:

```tsx
import Image from 'next/image';

<Image
  src="/assets/admission-hero.jpg"
  alt="Admission counselling for Nepali students"
  width={1200}
  height={630}
  priority
  className="..."
/>
```

### 5.2 Lazy Loading Strategy

- Hero images: `priority` for LCP
- Below-fold images: Default lazy load
- Sticky CTA: Client component with scroll listener (only renders when visible)

### 5.3 Core Web Vitals

- `revalidate = 86400` for ISR (reduces server load)
- Semantic HTML: `<main>`, `<section>`, `<h1>`–`<h3>`
- Passive scroll listener for Sticky CTA

### 5.4 Canonical Tag

```tsx
alternates: {
  canonical: 'https://www.sanmarina.edu.np/services/admission/',
},
```

### 5.5 Sitemap Structure

Already in `app/sitemap.ts`:

```ts
const services = [
  'online-counselling',
  'admission',
  'visa',
  'test-prep',
  'scholarship',
  'pre-departure',
].map((service) => ({
  url: `${baseUrl}/services/${service}/`,
  changeFrequency: 'monthly',
  priority: 0.6,
}));
```

---

## PRIORITIZED ACTION PLAN

| Priority | Action | Status |
|----------|--------|--------|
| P0 | Create app/services/admission/page.tsx | ✅ Done |
| P0 | Fix 404 for /services/admission/ | ✅ Done |
| P1 | Add FAQ, Service, Breadcrumb schema | ✅ Done |
| P1 | Sticky CTA, meta, canonical | ✅ Done |
| P2 | Add LocalBusiness schema to layout | Pending |
| P2 | Add next/image for hero (if image added) | Optional |
| P3 | Create /services/visa/ page | Pending |

---

## FILES CREATED

| File | Purpose |
|------|---------|
| app/services/admission/page.tsx | Main page, metadata, JSON-LD |
| app/services/admission/components/FAQAccordion.tsx | FAQ display (schema-ready) |
| app/services/admission/components/StickyCTA.tsx | Mobile sticky CTA |

---

## VERIFICATION CHECKLIST

1. Visit `/services/admission/` – should load
2. Check meta title and description in page source
3. Validate JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results)
4. Test WhatsApp and consultation links
5. Test sticky CTA on mobile
6. Run Lighthouse for LCP, CLS, INP
