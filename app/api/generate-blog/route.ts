import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase-server";

// Increase Vercel function timeout (requires Pro plan; Hobby is capped at 10s)
export const maxDuration = 60;

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY ?? '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';

// ── Model fallback chain — Claude 3.5 Sonnet first, paid backups, free last ──
const FREE_MODELS = [
  "anthropic/claude-3.5-sonnet",             // ~$0.015/post — best quality
  "deepseek/deepseek-chat-v3-0324",          // ~$0.001/post — best value backup
  "google/gemini-2.0-flash-001",             // ~$0.002/post — fast & reliable
  "meta-llama/llama-3.3-70b-instruct",       // ~$0.001/post — great writing
  "deepseek/deepseek-r1:free",               // free fallback
  "google/gemini-2.0-flash-exp:free",        // free fallback
  "meta-llama/llama-3.1-8b-instruct:free",   // free fallback
  "mistralai/mistral-7b-instruct:free",      // free fallback
];

// ── OpenRouter API helper ─────────────────────────────────────────────────────
async function callOpenRouter(prompt: string, maxTokens = 4096): Promise<string> {
  let lastError = "";

  for (const model of FREE_MODELS) {
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://www.sanmarina.edu.np",
          "X-Title": "San Marina AI Blogger",
        },
        body: JSON.stringify({
          model,
          max_tokens: maxTokens,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (res.status === 429 || res.status === 503) {
        lastError = `${model} rate-limited (${res.status})`;
        console.warn(`[generate-blog] ${lastError}, trying next model...`);
        continue;
      }

      if (!res.ok) {
        const err = await res.text();
        lastError = `${model} error ${res.status}: ${err}`;
        console.warn(`[generate-blog] ${lastError}, trying next model...`);
        continue;
      }

      const data = await res.json();
      const content = data.choices?.[0]?.message?.content ?? "";
      if (!content) {
        lastError = `${model} returned empty content`;
        continue;
      }

      console.log(`[generate-blog] ✅ Success with model: ${model}`);
      return content;
    } catch (e: any) {
      lastError = `${model} threw: ${e.message}`;
      console.warn(`[generate-blog] ${lastError}, trying next model...`);
      continue;
    }
  }

  throw new Error(`All models failed. Last error: ${lastError}`);
}

// ── High-volume keyword topic pool (80+ topics from competitor analysis) ──────
const TOPIC_POOL = [
  // ── HIGHEST VOLUME: Destination guides ─────────────────────────────────────
  { topic: "Study in Australia from Nepal 2026: Cost, Visa 500, PR Pathway", keyword: "study in australia from nepal", category: "Study Abroad" },
  { topic: "Study in UK from Nepal 2026: Student Route Visa, Cost in NPR", keyword: "study in uk from nepal", category: "Study Abroad" },
  { topic: "Study in Canada from Nepal 2026: PGWP, Study Permit, Cost", keyword: "study in canada from nepal", category: "Study Abroad" },
  { topic: "Study in Japan from Nepal 2026: MEXT Scholarship, COE, Cost", keyword: "study in japan from nepal", category: "Study Abroad" },
  { topic: "Study in USA from Nepal 2026: F1 Visa, STEM OPT, Top Universities", keyword: "study in usa from nepal", category: "Study Abroad" },
  { topic: "Study in Germany from Nepal 2026: Free Tuition, APS, Blocked Account", keyword: "study in germany from nepal", category: "Study Abroad" },
  { topic: "Study in South Korea from Nepal 2026: GKS Scholarship, D-2 Visa", keyword: "study in south korea from nepal", category: "Study Abroad" },
  { topic: "Study in New Zealand from Nepal 2026: Student Visa, PSW, Cost", keyword: "study in new zealand from nepal", category: "Study Abroad" },
  { topic: "Study in Ireland from Nepal 2026: Student Visa, Top Universities", keyword: "study in ireland from nepal", category: "Study Abroad" },
  { topic: "Study in Dubai from Nepal 2026: UAE Student Visa, Cost, Universities", keyword: "study in dubai from nepal", category: "Study Abroad" },
  { topic: "Study in Malta from Nepal 2026: EU Residency, Cost, Universities", keyword: "study in malta from nepal", category: "Study Abroad" },
  { topic: "Study in Poland from Nepal 2026: Low Cost EU Education, Visa", keyword: "study in poland from nepal", category: "Study Abroad" },
  { topic: "Study in Hungary from Nepal 2026: Stipendium Hungaricum Scholarship", keyword: "study in hungary from nepal", category: "Study Abroad" },
  { topic: "Study in Finland from Nepal 2026: Free Education, Visa, Cost", keyword: "study in finland from nepal", category: "Study Abroad" },
  { topic: "Study in Netherlands from Nepal 2026: Holland Scholarship, Cost", keyword: "study in netherlands from nepal", category: "Study Abroad" },
  { topic: "Study in Norway from Nepal 2026: Free University, Student Visa", keyword: "study in norway from nepal", category: "Study Abroad" },
  { topic: "Study in France from Nepal 2026: Campus France, Cost in NPR", keyword: "study in france from nepal", category: "Study Abroad" },
  { topic: "Study in Italy from Nepal 2026: Study Visa, Scholarship, Cost", keyword: "study in italy from nepal", category: "Study Abroad" },
  { topic: "Study in Spain from Nepal 2026: Student Visa, Cost, Universities", keyword: "study in spain from nepal", category: "Study Abroad" },
  { topic: "Study in Switzerland from Nepal 2026: Universities, Cost, Visa", keyword: "study in switzerland from nepal", category: "Study Abroad" },
  { topic: "Study in Czech Republic from Nepal 2026: Free Education, Visa", keyword: "study in czech republic from nepal", category: "Study Abroad" },
  { topic: "Study in Georgia from Nepal 2026: MBBS, Cost, Visa", keyword: "study in georgia from nepal", category: "Study Abroad" },
  { topic: "Study in Romania from Nepal 2026: MBBS, Cost, Student Visa", keyword: "study in romania from nepal", category: "Study Abroad" },
  { topic: "Study in Slovakia from Nepal 2026: Low Cost EU, Visa, Universities", keyword: "study in slovakia from nepal", category: "Study Abroad" },

  // ── MBBS ABROAD — Very high volume ─────────────────────────────────────────
  { topic: "MBBS in Russia from Nepal 2026: Cost in NPR, Top Universities", keyword: "mbbs in russia from nepal", category: "Study Abroad" },
  { topic: "MBBS Abroad from Nepal 2026: Best Countries, Cost, Eligibility", keyword: "mbbs abroad from nepal", category: "Study Abroad" },
  { topic: "MBBS in China from Nepal 2026: Cost, Universities, MCI/NMC Recognition", keyword: "mbbs in china from nepal", category: "Study Abroad" },
  { topic: "MBBS in Bangladesh from Nepal 2026: Cost, Admission, Recognition", keyword: "mbbs in bangladesh from nepal", category: "Study Abroad" },
  { topic: "MBBS in Philippines from Nepal 2026: Cost, NMAT, Recognition", keyword: "mbbs in philippines from nepal", category: "Study Abroad" },

  // ── VISA GUIDES — High volume ───────────────────────────────────────────────
  { topic: "Australia Student Visa 500 from Nepal 2026: Documents, GTE, Cost", keyword: "australia student visa 500 nepal", category: "Visa" },
  { topic: "Canada Study Permit from Nepal 2026: SDS Ended, New Process", keyword: "canada study permit nepal 2026", category: "Visa" },
  { topic: "UK Student Route Visa from Nepal 2026: CAS, IHS, Step by Step", keyword: "uk student visa nepal 2026", category: "Visa" },
  { topic: "Japan Student Visa from Nepal 2026: COE, VFS, Documents", keyword: "japan student visa nepal", category: "Visa" },
  { topic: "USA F1 Visa Interview Tips for Nepali Students 2026", keyword: "usa f1 visa interview nepal", category: "Visa" },
  { topic: "Schengen Student Visa for Nepali Students 2026: Complete Guide", keyword: "schengen student visa nepal", category: "Visa" },
  { topic: "Student Visa Rejection Reasons Nepal and How to Reapply", keyword: "student visa rejection nepal", category: "Visa" },
  { topic: "How Much Bank Balance for Student Visa from Nepal 2026", keyword: "bank balance for student visa nepal", category: "Visa" },
  { topic: "South Korea D-2 Student Visa from Nepal 2026: Documents, Process", keyword: "south korea student visa nepal", category: "Visa" },
  { topic: "Gap Year Accepted for Student Visa: Which Countries Accept Nepal", keyword: "gap year accepted student visa nepal", category: "Visa" },

  // ── SCHOLARSHIPS — Very high volume ────────────────────────────────────────
  { topic: "Top 15 Fully Funded Scholarships for Nepali Students 2026", keyword: "fully funded scholarships for nepali students 2026", category: "Scholarships" },
  { topic: "Scholarships Without IELTS for Nepali Students 2026", keyword: "scholarships without ielts nepal", category: "Scholarships" },
  { topic: "DAAD Scholarship Nepal 2026: How to Apply, Eligibility, Amount", keyword: "daad scholarship nepal", category: "Scholarships" },
  { topic: "Chevening Scholarship Nepal 2026: Eligibility, Deadline, Apply", keyword: "chevening scholarship nepal", category: "Scholarships" },
  { topic: "Erasmus+ Scholarship for Nepali Students 2026: Complete Guide", keyword: "erasmus scholarship nepal", category: "Scholarships" },
  { topic: "Commonwealth Scholarship Nepal 2026: How to Apply", keyword: "commonwealth scholarship nepal", category: "Scholarships" },
  { topic: "MEXT Scholarship Nepal 2026: University, Embassy Track Guide", keyword: "mext scholarship nepal", category: "Scholarships" },
  { topic: "GKS Scholarship Nepal 2026: How to Apply for South Korea", keyword: "gks scholarship nepal", category: "Scholarships" },
  { topic: "Stipendium Hungaricum Scholarship Nepal 2026: Apply Guide", keyword: "stipendium hungaricum nepal", category: "Scholarships" },
  { topic: "Australia Awards Scholarship Nepal 2026: Eligibility, Apply", keyword: "australia awards scholarship nepal", category: "Scholarships" },
  { topic: "New Zealand Scholarships for Nepali Students 2026", keyword: "new zealand scholarship nepal", category: "Scholarships" },

  // ── WITHOUT IELTS — Extremely high volume ───────────────────────────────────
  { topic: "Study Abroad Without IELTS from Nepal 2026: Best Countries", keyword: "study abroad without ielts from nepal", category: "Study Abroad" },
  { topic: "Study in Australia Without IELTS from Nepal 2026: Alternatives", keyword: "study in australia without ielts nepal", category: "Study Abroad" },
  { topic: "Study in Canada Without IELTS from Nepal 2026: Which Colleges", keyword: "study in canada without ielts nepal", category: "Study Abroad" },
  { topic: "Study in UK Without IELTS from Nepal 2026: Pre-sessional Options", keyword: "study in uk without ielts nepal", category: "Study Abroad" },
  { topic: "Study in Europe Without IELTS from Nepal 2026: Germany, Hungary", keyword: "study in europe without ielts nepal", category: "Study Abroad" },

  // ── NURSING / HEALTHCARE — Very high volume ─────────────────────────────────
  { topic: "Nursing Abroad from Nepal 2026: UK, Australia, Canada Guide", keyword: "nursing abroad from nepal", category: "Study Abroad" },
  { topic: "Study Nursing in UK from Nepal 2026: NMC, Cost, Visa", keyword: "study nursing in uk from nepal", category: "Study Abroad" },
  { topic: "Study Nursing in Australia from Nepal 2026: AHPRA, Cost, Visa", keyword: "study nursing in australia from nepal", category: "Study Abroad" },
  { topic: "Study Nursing in Canada from Nepal 2026: NCLEX, Provinces", keyword: "study nursing in canada from nepal", category: "Study Abroad" },

  // ── COST GUIDES — High volume ───────────────────────────────────────────────
  { topic: "Cost of Studying in Australia from Nepal 2026 in NPR: Full Breakdown", keyword: "cost of studying in australia from nepal", category: "Study Abroad" },
  { topic: "Cost of Studying in Canada from Nepal 2026 in NPR", keyword: "cost of studying in canada from nepal", category: "Study Abroad" },
  { topic: "Cost of Studying in UK from Nepal 2026 in NPR", keyword: "cost of studying in uk from nepal", category: "Study Abroad" },
  { topic: "How Much Money Needed to Study Abroad from Nepal 2026", keyword: "how much money needed to study abroad from nepal", category: "Study Abroad" },

  // ── PR PATHWAYS — High volume ───────────────────────────────────────────────
  { topic: "PR After Study in Australia from Nepal: 189, 190, 491 Visa Guide", keyword: "pr after study in australia from nepal", category: "Visa" },
  { topic: "PR After Study in Canada from Nepal: Express Entry, PNP Guide", keyword: "pr after study in canada from nepal", category: "Visa" },
  { topic: "PR After Study in UK from Nepal: Skilled Worker Visa Guide", keyword: "pr after study in uk from nepal", category: "Visa" },

  // ── TEST PREP — High volume ─────────────────────────────────────────────────
  { topic: "IELTS vs PTE for Study Abroad from Nepal: Which is Easier 2026", keyword: "ielts vs pte nepal", category: "Test Prep" },
  { topic: "How to Prepare for IELTS in Nepal: Band 6.5 in 60 Days", keyword: "ielts preparation nepal", category: "Test Prep" },
  { topic: "PTE Score Required for Australia, Canada, UK from Nepal 2026", keyword: "pte score required study abroad nepal", category: "Test Prep" },
  { topic: "IELTS Score Required for Australia Student Visa from Nepal 2026", keyword: "ielts score for australia student visa nepal", category: "Test Prep" },
  { topic: "TOPIK Test in Nepal 2026: How to Prepare for South Korea", keyword: "topik test nepal", category: "Test Prep" },
  { topic: "JLPT N5 to N2 in Nepal 2026: Japan Language Test Guide", keyword: "jlpt preparation nepal", category: "Test Prep" },

  // ── APPLICATION TIPS — Medium-high volume ───────────────────────────────────
  { topic: "How to Write SOP for Study Abroad from Nepal: Complete Guide", keyword: "sop for study abroad nepal", category: "Application Tips" },
  { topic: "How to Choose Best Education Consultancy in Nepal 2026", keyword: "best education consultancy in nepal", category: "Application Tips" },
  { topic: "Document Checklist for Study Abroad from Nepal 2026", keyword: "documents required study abroad nepal", category: "Application Tips" },
  { topic: "How to Get Admission in Foreign University from Nepal 2026", keyword: "how to get admission in foreign university from nepal", category: "Application Tips" },
  { topic: "Part Time Work Rules While Studying Abroad for Nepali Students", keyword: "part time work study abroad nepal", category: "Study Abroad" },
  { topic: "Post Study Work Visa Options for Nepali Graduates 2026", keyword: "post study work visa nepal", category: "Visa" },
  { topic: "IT and Engineering Study Abroad from Nepal: Best Countries 2026", keyword: "it engineering study abroad nepal", category: "Study Abroad" },
  { topic: "Business Management Study Abroad from Nepal: MBA Options 2026", keyword: "business management study abroad nepal", category: "Study Abroad" },
  { topic: "Agriculture Study Abroad from Nepal: Best Countries, Scholarships", keyword: "agriculture study abroad nepal", category: "Study Abroad" },
];

// ── Top 5 competitor sites (actual Nepal consultancy rankings) ────────────────
const COMPETITOR_SITES = [
  "https://www.aeccglobal.com/np/",
  "https://www.alfabetaglobal.com/study-abroad/",
  "https://niec.edu.np/study-abroad/",
  "https://thenext.edu.np/study-abroad/",
  "https://www.idp.com/nepal/",
];

// ── Curated Unsplash images per category/keyword ─────────────────────────────
// Format: high-quality, free-to-use Unsplash photos relevant to study abroad
const CATEGORY_IMAGES: Record<string, string[]> = {
  "Study Abroad": [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80", // graduation caps
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80", // university building
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80", // campus students
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=80", // happy students
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80", // studying laptop
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80", // lecture hall
  ],
  "Visa": [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80", // passport travel
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80", // documents paperwork
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80", // person at desk
    "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80", // office work
  ],
  "Scholarships": [
    "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=1200&q=80", // award achievement
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80", // books library
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80", // student studying
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80", // library
  ],
  "Test Prep": [
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80", // student writing exam
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80", // books open
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80", // laptop studying
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&q=80", // pen and paper
  ],
  "Application Tips": [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80", // documents
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80", // laptop code
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80", // person writing
    "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80", // office desk
  ],
};

// Country-specific images for destination posts
const COUNTRY_IMAGES: Record<string, string> = {
  australia:    "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80",
  uk:           "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
  "united kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
  canada:       "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&q=80",
  germany:      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80",
  usa:          "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&q=80",
  "united states": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&q=80",
  japan:        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
  "south korea": "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=1200&q=80",
  korea:        "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=1200&q=80",
  "new zealand": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=80",
  ireland:      "https://images.unsplash.com/photo-1590005354167-6da97870c757?w=1200&q=80",
  hungary:      "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=1200&q=80",
  norway:       "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80",
  france:       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
  italy:        "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=80",
  spain:        "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80",
  netherlands:  "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80",
};

function pickImage(topic: string, category: string): string {
  const topicLower = topic.toLowerCase();

  // Check for country-specific image first
  for (const [country, url] of Object.entries(COUNTRY_IMAGES)) {
    if (topicLower.includes(country)) return url;
  }

  // Fall back to category image pool (random pick for variety)
  const pool = CATEGORY_IMAGES[category] ?? CATEGORY_IMAGES["Study Abroad"];
  return pool[Math.floor(Math.random() * pool.length)];
}

async function getExistingSlugs(): Promise<string[]> {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase.from("blog_posts").select("slug, focus_keyword");
  return (data ?? []).map((p) => p.focus_keyword ?? p.slug);
}

async function scrapeCompetitorHeadlines(): Promise<string[]> {
  // Scrape all competitor sites IN PARALLEL with a 3s timeout each
  const results = await Promise.allSettled(
    COMPETITOR_SITES.map(async (site) => {
      const res = await fetch(site, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(3000),
      });
      const html = await res.text();
      const titleMatches = html.match(/<title[^>]*>(.*?)<\/title>/gi) ?? [];
      const h1Matches = html.match(/<h1[^>]*>(.*?)<\/h1>/gi) ?? [];
      const h2Matches = html.match(/<h2[^>]*>(.*?)<\/h2>/gi) ?? [];
      return [...titleMatches, ...h1Matches, ...h2Matches]
        .map((m) => m.replace(/<[^>]+>/g, "").trim())
        .filter((m) => m.length > 10 && m.length < 200)
        .slice(0, 5);
    })
  );

  const headlines: string[] = [];
  for (const result of results) {
    if (result.status === "fulfilled") headlines.push(...result.value);
  }
  return headlines;
}

async function generateBlogPost(topicItem: typeof TOPIC_POOL[0], competitorHeadlines: string[]): Promise<any> {
  const competitorContext = competitorHeadlines.length > 0
    ? `\nCOMPETITOR ANALYSIS — sites ranking for this keyword now cover:\n${competitorHeadlines.slice(0, 12).map((h) => `• ${h}`).join("\n")}\n\nYour post MUST beat every competitor by being: more specific (real numbers, real universities, real visa fees), more structured (clear tables + numbered steps), and more actionable (step-by-step checklists a student can follow today).\n`
    : "";

  const prompt = `You are Shusil Bharati, Senior Counsellor at San Marina Education Consultancy (sanmarina.edu.np), Kathmandu. 15 years experience. 1,500+ students sent abroad. You write blog posts that rank #1 on Google Nepal for study-abroad keywords and beat AECC Global, Alfa Beta, NIEC, The Next, and IDP Nepal in both depth and specificity.

═══════════════════════════════════════════════════
ASSIGNMENT
═══════════════════════════════════════════════════
TOPIC: ${topicItem.topic}
PRIMARY KEYWORD: "${topicItem.keyword}"
CATEGORY: ${topicItem.category}
TARGET LENGTH: 2,500–3,000 words
${competitorContext}
═══════════════════════════════════════════════════
SEO & AEO RULES (NON-NEGOTIABLE)
═══════════════════════════════════════════════════
1. PRIMARY KEYWORD must appear in:
   • H1 title (within first 5 words)
   • First sentence of the post
   • At least 2 × H2 subheadings
   • Meta description (150–160 chars, end with a benefit/CTA)
   • Slug (hyphens, no stop words)

2. LSI / RELATED KEYWORDS to weave in naturally (2–3 each):
   • Variants of the primary keyword with "2026", "from Nepal", "cost in NPR"
   • Related terms: admission requirements, scholarship, PR pathway, work permit
   • People Also Ask phrasing: "How much does it cost to...", "Can Nepali students..."

3. FEATURED SNIPPET / PEOPLE-ALSO-ASK CAPTURE:
   • Every H2 section must open with a 1–2 sentence direct answer (40–60 words) that Google can pull as a snippet
   • FAQ answers MUST start with the answer, not "It depends" or a question repeat

4. INTERNAL LINKS — link these anchor texts naturally inside body:
   • "free consultation" → /consultation/
   • "study abroad options" → /study-abroad/
   • "scholarships for Nepali students" → /scholarships/
   • "our services" → /services/

5. CONTENT DEPTH — beat competitors with:
   • Named universities (5+ real institutions with ranking/location)
   • Real visa processing times and fees in BOTH NPR and USD
   • Step-by-step numbered process (not just bullets)
   • Cost comparison table (tuition, living, visa, insurance, travel)
   • Common mistakes Nepali students make + how to avoid them

═══════════════════════════════════════════════════
WRITING STYLE
═══════════════════════════════════════════════════
• First person as Shusil — warm, direct, honest, like a trusted elder sibling
• NEVER use: "in today's world", "in conclusion", "it is worth noting", "delve into", "navigating", "it is important to note", "comprehensive", "look no further"
• Mention Nepali cities naturally: Kathmandu, Pokhara, Chitwan, Biratnagar, Itahari, Dang, Dhangadhi
• ALL costs in BOTH USD and NPR (use rate: 1 USD ≈ 135 NPR)
• Use real 2025–2026 data — name real universities, real visa offices, real scholarship amounts

═══════════════════════════════════════════════════
MANDATORY POST STRUCTURE (in this exact order)
═══════════════════════════════════════════════════

## [H1 — SEO title with primary keyword in first 5 words]

**Opening hook paragraph (80–120 words):** Start with a vivid, true-feeling story about a named Nepali student (e.g., Suman from Chitwan, Puja from Pokhara, Raju from Biratnagar). Describe the exact moment they came to San Marina — uncertain, overwhelmed — and left with a clear, actionable plan. First sentence MUST naturally contain the primary keyword "${topicItem.keyword}".

**Bridge sentence:** One sentence introducing what this post covers, naturally including the keyword.

---

## H2: [Eligibility / Requirements — include keyword variant]
[Open with 1-sentence direct answer for featured snippet]
- Named real universities/colleges (5+) with their specific requirements
- Real academic score requirements (GPA, percentage, IELTS/PTE bands)
- Step-by-step numbered eligibility checklist

## H2: [Step-by-Step Application Process — include keyword variant]
[Open with 1-sentence direct answer]
- Numbered 6–8 step process with real timelines
- Real office names (e.g., VFS, embassy names, online portals)
- Real processing durations

## H2: [Cost Breakdown — include "cost" and "NPR"]
[Open with direct cost summary sentence]
[MARKDOWN TABLE: 5–7 rows, columns: Expense | Amount (USD) | Amount (NPR) | Notes]
- Real figures — tuition for specific universities, real rent ranges, real visa fees

## H2: [Scholarships Available — include "scholarship" and country/keyword]
[Open with 1-sentence overview of scholarship availability]
List 4–6 scholarships as:
**[Scholarship Name]** — [Amount] — [Key Eligibility] — [Deadline/Application link hint]

## H2: [Work & PR Opportunities — include "work" or "PR"]
[Open with direct answer about work rights]
- Part-time work hours allowed during study
- Post-study work visa / PR pathway details
- Real examples of Nepali graduates who succeeded (generic but specific)

## H2: [Common Mistakes Nepali Students Make + How to Avoid Them]
[Open with direct insight]
- 4–5 specific, real mistakes (wrong bank statement format, missing GTE, late SOP)
- Exact fix for each mistake

## H2: [FAQ — "${topicItem.keyword}"]
List EXACTLY 5 questions that mirror "People Also Ask" on Google:
Each answer: MAX 60 words, starts with direct answer, no hedging.

**Q: [Most searched question about topic]?**
A: [Direct answer in ≤60 words]

(repeat for all 5)

---

**Closing CTA (100 words):** Warm, personal invite to book a free counselling session at San Marina. Mention Kathmandu main office + Dang and Itahari branches. Include [book your free consultation](/consultation/) as a natural in-text link. Sound like a friend, not an ad.

═══════════════════════════════════════════════════
OUTPUT FORMAT — ONLY valid JSON, no code fences, no extra text:
═══════════════════════════════════════════════════
{
  "title": "SEO H1 title — max 65 chars, primary keyword in first 5 words",
  "slug": "primary-keyword-2026",
  "excerpt": "2–3 sentence engaging summary that includes keyword and mentions San Marina",
  "meta_description": "150–160 character meta with keyword + benefit + soft CTA",
  "focus_keyword": "${topicItem.keyword}",
  "category": "${topicItem.category}",
  "author": "Shusil Bharati",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
  "image_url": null,
  "body_markdown": "Full 2500-3000 word markdown post following the exact structure above — opening story, 6 H2 sections, cost table, scholarship list, FAQ, closing CTA",
  "faq": [
    {"question": "Question 1 matching H2 FAQ exactly?", "answer": "Direct answer ≤60 words."},
    {"question": "Question 2?", "answer": "Answer 2."},
    {"question": "Question 3?", "answer": "Answer 3."},
    {"question": "Question 4?", "answer": "Answer 4."},
    {"question": "Question 5?", "answer": "Answer 5."}
  ]
}`;

  let jsonText = await callOpenRouter(prompt, 4096);
  jsonText = jsonText.trim();

  // Strip markdown code fences if present
  if (jsonText.startsWith("```")) {
    jsonText = jsonText.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim();
  }

  // Find the JSON object boundaries in case of extra text
  const firstBrace = jsonText.indexOf("{");
  const lastBrace = jsonText.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    jsonText = jsonText.slice(firstBrace, lastBrace + 1);
  }

  try {
    return JSON.parse(jsonText);
  } catch (parseErr: any) {
    throw new Error(`JSON parse failed: ${parseErr.message}. Raw (first 500 chars): ${jsonText.slice(0, 500)}`);
  }
}

const ADMIN_PASSWORD = process.env.ADMIN_SECRET ?? "sanmarina2026";
const CRON_PASSWORD = process.env.CRON_SECRET ?? "sm-cron-7x9k2p4m8n3qr5wz";

function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get("authorization");
  if (authHeader === `Bearer ${CRON_PASSWORD}`) return true;
  if (authHeader === `Bearer ${ADMIN_PASSWORD}`) return true;
  const cookieStore = cookies();
  return cookieStore.get("admin_auth")?.value === ADMIN_PASSWORD;
}

// ── Main handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const requestedTopic = body.topic as string | undefined;
  const autoPublish = body.auto_publish !== false; // default true

  try {
    // Step 1 — Test Supabase
    let supabase: any;
    try {
      supabase = createServerSupabaseClient();
      console.log("[generate-blog] ✅ Supabase client created");
    } catch (e: any) {
      console.error("[generate-blog] ❌ Supabase init failed:", e.message);
      return NextResponse.json({
        error: "Supabase init failed",
        detail: e.message,
        env_check: {
          SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          SERVICE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
          OPENROUTER: !!process.env.OPENROUTER_API_KEY,
        }
      }, { status: 500 });
    }

    // Step 2 — Fetch existing slugs
    const existingKeywords = await getExistingSlugs();
    console.log("[generate-blog] ✅ Existing keywords fetched:", existingKeywords.length);

    // Step 3 — Scrape competitors (non-blocking)
    const competitorHeadlines = await scrapeCompetitorHeadlines();
    console.log("[generate-blog] ✅ Competitor headlines:", competitorHeadlines.length);

    // Pick a topic — use requested topic or rotate through pool
    let topicItem: typeof TOPIC_POOL[0];
    if (requestedTopic) {
      topicItem = {
        topic: requestedTopic,
        keyword: requestedTopic.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(),
        category: body.category ?? "Study Abroad",
      };
    } else {
      // Find a topic not yet covered
      const uncovered = TOPIC_POOL.filter(
        (t) => !existingKeywords.some((k) => k.includes(t.keyword.split(" ")[0]))
      );
      topicItem = uncovered.length > 0
        ? uncovered[Math.floor(Math.random() * uncovered.length)]
        : TOPIC_POOL[Math.floor(Math.random() * TOPIC_POOL.length)];
    }

    // Step 4 — Generate with Claude
    console.log("[generate-blog] ⏳ Calling Claude for topic:", topicItem.topic);
    let generated: any;
    try {
      generated = await generateBlogPost(topicItem, competitorHeadlines);
      console.log("[generate-blog] ✅ Claude generation complete, title:", generated?.title);
    } catch (e: any) {
      console.error("[generate-blog] ❌ Claude generation failed:", e.message);
      return NextResponse.json({ error: "Claude API failed", detail: e.message }, { status: 500 });
    }

    // Ensure unique slug
    let slug = generated.slug ?? topicItem.keyword.replace(/\s+/g, "-").toLowerCase();
    const { data: existing } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("slug", slug)
      .single();
    if (existing) slug = `${slug}-${Date.now()}`;

    // Pick the best image for this post
    const imageUrl = generated.image_url ?? pickImage(topicItem.topic, generated.category ?? topicItem.category);

    // Save to Supabase
    const { data: savedPost, error } = await supabase
      .from("blog_posts")
      .insert({
        title: generated.title,
        slug,
        excerpt: generated.excerpt,
        meta_description: generated.meta_description,
        focus_keyword: generated.focus_keyword,
        category: generated.category,
        author: generated.author ?? "Shusil Ai",
        tags: generated.tags ?? [],
        image_url: imageUrl,
        body_markdown: generated.body_markdown,
        faq: generated.faq ?? [],
        status: autoPublish ? "published" : "draft",
        ai_generated: true,
        published_at: autoPublish ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save post", detail: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      post: {
        id: savedPost.id,
        title: savedPost.title,
        slug: savedPost.slug,
        status: savedPost.status,
        url: `https://www.sanmarina.edu.np/blog/${savedPost.slug}/`,
      },
    });
  } catch (err: any) {
    console.error("Blog generation error:", err);
    return NextResponse.json({ error: err.message ?? "Generation failed" }, { status: 500 });
  }
}

// ── GET: returns next topic to be generated (for admin preview) ───────────────
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existingKeywords = await getExistingSlugs();
  const uncovered = TOPIC_POOL.filter(
    (t) => !existingKeywords.some((k) => k.includes(t.keyword.split(" ")[0]))
  );

  return NextResponse.json({
    total_topics: TOPIC_POOL.length,
    covered: TOPIC_POOL.length - uncovered.length,
    next_topics: uncovered.slice(0, 5),
  });
}
