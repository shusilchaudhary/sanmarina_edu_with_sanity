# Online Counselling Page – Implementation Guide

**San Marina Education Consultancy** | `/services/online-counselling/`  

Agency-level implementation guide for routing, design, SEO, schema, and conversion.

---

## PART 1 – TECHNICAL ROUTING (Next.js App Router)

### 1.1 Root Cause of 404

In **Next.js App Router**, routes are file-based. The 404 occurred because no page existed at the expected path:

- **Required path:** `app/services/online-counselling/page.tsx`
- **Cause:** Only the services hub (`app/services/page.tsx`) existed. The route `/services/online-counselling/` was never created.

### 1.2 Correct Folder Structure

```
app/
├── services/
│   ├── page.tsx                    # /services/
│   └── online-counselling/
│       ├── page.tsx                 # /services/online-counselling
│       └── components/
│           ├── FAQAccordion.tsx
│           └── StickyCTA.tsx
```

### 1.3 No App.jsx / React Router

This project uses **Next.js App Router**, not React Router or Vite. Routing is handled by file paths:

- `app/services/online-counselling/page.tsx` → `/services/online-counselling` and `/services/online-counselling/`

### 1.4 Refresh 404 in Vite vs Next.js

- **Vite / SPA:** Direct hits on `/services/online-counselling` fail unless you configure server rewrites (e.g. fallback `index.html`).
- **Next.js:** Server-side routing resolves paths correctly. No extra config for refresh 404s.

### 1.5 Route Structure Best Practice

For future service pages:

| Route | File Path |
|-------|-----------|
| /services/ | app/services/page.tsx |
| /services/online-counselling/ | app/services/online-counselling/page.tsx |
| /services/admission/ | app/services/admission/page.tsx |
| /services/visa/ | app/services/visa/page.tsx |

---

## PART 2 – PAGE STRUCTURE & DESIGN

### 2.1 Hero Section

- **H1:** Primary keyword + benefit (Nepali students, 2026 intake)
- **Subheadline:** Value prop (free consultation, virtual, no obligation)
- **Primary CTA:** WhatsApp
- **Secondary CTA:** Consultation form
- **Trust line:** Last updated, author credibility

### 2.2 Trust Signal Layout

4 badges in a responsive grid:

- Virtual video sessions
- Free first consultation
- 1,500+ students placed
- 98% visa success

### 2.3 Section Wireframe (Top to Bottom)

| Order | Section | Purpose |
|-------|---------|---------|
| 1 | Hero + CTAs | Attention, primary action |
| 2 | Featured Snippet / Quick Answer | AI & snippet optimization |
| 3 | Trust Signals | Social proof |
| 4 | What We Cover | Content depth, keywords |
| 5 | How It Works | Process clarity |
| 6 | Mid-Page CTA | Re-engagement |
| 7 | Who It's For | Persona match |
| 8 | Internal Links | SEO & navigation |
| 9 | FAQs | Long-tail, schema |
| 10 | Footer CTA | Final conversion |

### 2.4 CTA Placement Strategy

- **Hero:** WhatsApp + Book Consultation (above fold)
- **After “How It Works”:** Mid-page CTA block
- **Sticky (mobile only):** Bar at bottom after scroll
- **Footer:** Strong closing CTA with WhatsApp + form

### 2.5 Mobile-First Recommendations

- Sticky CTA shows after 400px scroll
- Tap targets ≥ 44px
- Single-column on small screens
- Collapsible FAQs (current: expand-all for schema clarity)

---

## PART 3 – SEO + AEO + GEO

### 3.1 H1

```
Online Counselling for Study Abroad
Free Consultation for Nepali Students – 2026 Intake
```

- Target: “online counselling study abroad nepal”, “study abroad counselling nepal 2026”

### 3.2 Meta Title (≈60 chars)

```
Online Counselling for Study Abroad | Free Consultation Nepal 2026 - San Marina
```

### 3.3 Meta Description (≈155 chars)

```
Online counselling for Nepali students planning study abroad in 2026. Free virtual consultation, profile evaluation, scholarship guidance. Best education consultancy in Kathmandu. Book now.
```

### 3.4 Long-Tail Keywords

- online counselling study abroad nepal
- free study abroad consultation nepal
- virtual counselling for nepali students
- study abroad consultancy kathmandu 2026
- scholarship counselling nepal
- study abroad counselling online nepal

### 3.5 AI Conversational Query Coverage

FAQ content answers:

- What is online counselling for study abroad?
- How do I book online counselling from Nepal?
- Is the first consultation free?
- Can parents join?
- What countries do you counsel for?
- When to book for 2026 intake?
- Do you speak Nepali?

### 3.6 Featured Snippet Box

Implemented as a “Quick Answer” block with:

- Direct definition
- Main facts
- Bullet summary

### 3.7 Internal Linking Strategy

- Home → Services → Online Counselling
- Online Counselling → Consultation, Services Hub, Scholarships, Study Abroad, Contact
- Services hub → Online Counselling

### 3.8 External Authority Suggestions

- [DAAD – Deutscher Akademischer Austauschdienst](https://www.daad.de)
- [Study in Norway](https://studyinnorway.no)
- [Study in Italy – DSU](https://www.studiare-in-italia.it)
- [British Council – Study UK](https://study-uk.britishcouncil.org)
- [Australian Government – Study](https://www.studyaustralia.gov.au)

### 3.9 EEAT Compliance

- Clear author/org attribution: San Marina Education Consultancy
- Expertise: QEAC, 98% visa success, 1,500+ students
- Experience: Since 2014, Nepal-focused
- Trust: Transparent free consultation, no-obligation framing

---

## PART 4 – SCHEMA + TECHNICAL SEO

### 4.1 FAQ Schema (JSON-LD)

FAQ schema is output via the `@graph` object with `@type: FAQPage` and `mainEntity` array of Question/Answer objects.

### 4.2 Service Schema

```json
{
  "@type": "Service",
  "name": "Online Counselling for Study Abroad",
  "provider": { "@type": "Organization", "name": "San Marina Education Consultancy" },
  "areaServed": { "@type": "Country", "name": "Nepal" },
  "serviceType": "Education Counselling"
}
```

### 4.3 LocalBusiness Schema

Add to site-wide layout if not already present:

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

### 4.4 Breadcrumb Schema

Implemented in the page `@graph`:

- Home → Services → Online Counselling

### 4.5 Canonical Tag

```ts
alternates: {
  canonical: 'https://www.sanmarina.edu.np/services/online-counselling/',
},
```

### 4.6 Next.js Metadata (No React Helmet)

Next.js uses `metadata` export instead of React Helmet:

```tsx
export const metadata: Metadata = {
  title: '...',
  description: '...',
  alternates: { canonical: '...' },
  openGraph: { ... },
  twitter: { ... },
};
```

---

## PART 5 – CONVERSION OPTIMIZATION

### 5.1 Lead Form Structure

- Reuse `/consultation/` page with `ConsultationForm`
- Fields: Name, Email, Phone, Destination, Intake, Message
- Pre-filled subject: “Online Counselling – [Name]”

### 5.2 WhatsApp Integration

- Primary CTA: `https://wa.me/9779802372602`
- Pre-filled message (optional):  
  `https://wa.me/9779802372602?text=Hi%2C%20I%20want%20to%20book%20online%20counselling%20for%20study%20abroad`

### 5.3 Sticky CTA Strategy

- **Mobile only** (`md:hidden`)
- Visible after 400px scroll
- Two buttons: Book Free Call | WhatsApp
- Dismissible (X) so it doesn’t annoy return visitors

### 5.4 Trust Badge Placement

- After hero: 4 metrics (Virtual, Free, 1,500+, 98%)
- Within content: QEAC, “since 2014”
- Footer: Author/org attribution

### 5.5 Social Proof Strategy

- “1,500+ students placed”
- “98% visa success”
- Optional: Testimonials, success stories, logo badges

### 5.6 Exit Intent Strategy

For future implementation:

- Modal on desktop exit intent
- Message: “Get your free consultation before you go”
- CTA: Book or WhatsApp
- Use `beforeunload` or mouse-leave detection

---

## PRIORITIZED ACTION PLAN

| Priority | Action | Status |
|----------|--------|--------|
| P0 | Create `app/services/online-counselling/page.tsx` | ✅ Done |
| P0 | Fix 404 for /services/online-counselling/ | ✅ Done |
| P1 | Add FAQ schema, Service schema, Breadcrumb | ✅ Done |
| P1 | Sticky CTA for mobile | ✅ Done |
| P1 | Meta title, description, canonical | ✅ Done |
| P2 | Add LocalBusiness schema to layout | Pending |
| P2 | Create /services/admission/, /services/visa/ | Pending |
| P3 | Exit intent modal (optional) | Pending |
| P3 | Pre-filled WhatsApp message | Optional |

---

## FILES CREATED/MODIFIED

| File | Purpose |
|------|---------|
| `app/services/online-counselling/page.tsx` | Main page, metadata, JSON-LD |
| `app/services/online-counselling/components/FAQAccordion.tsx` | FAQ display (schema-ready) |
| `app/services/online-counselling/components/StickyCTA.tsx` | Mobile sticky CTA |
| `app/sitemap.ts` | Already includes `/services/online-counselling/` |

---

## VERIFICATION CHECKLIST

1. Visit `/services/online-counselling` and `/services/online-counselling/` – both should load
2. Check meta title and description in page source
3. Validate JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results)
4. Test WhatsApp and consultation form links
5. Test sticky CTA on mobile (scroll past 400px)
