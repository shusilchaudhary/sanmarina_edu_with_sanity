import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase-server";

// ── OpenRouter API helper ─────────────────────────────────────────────────────
async function callOpenRouter(prompt: string, maxTokens = 4096): Promise<string> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://www.sanmarina.edu.np",
      "X-Title": "San Marina AI Blogger",
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3.3-70b-instruct:free",
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenRouter error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}

// ── Topic pool: rotates through high-value study abroad topics for Nepal ──────
const TOPIC_POOL = [
  // Destination guides
  { topic: "Complete guide to studying in Australia from Nepal 2026", keyword: "study in Australia from Nepal", category: "Study Abroad" },
  { topic: "How to study in UK from Nepal: universities, visa, costs", keyword: "study in UK from Nepal", category: "Study Abroad" },
  { topic: "Study in Canada from Nepal: process, universities, scholarships", keyword: "study in Canada from Nepal", category: "Study Abroad" },
  { topic: "Study in Germany from Nepal: free education and scholarships", keyword: "study in Germany from Nepal", category: "Study Abroad" },
  { topic: "Study in Japan from Nepal: MEXT scholarship and universities", keyword: "study in Japan from Nepal", category: "Study Abroad" },
  { topic: "Study in USA from Nepal: F1 visa process and top universities", keyword: "study in USA from Nepal", category: "Study Abroad" },
  { topic: "Study in South Korea from Nepal: GKS scholarship guide", keyword: "study in South Korea from Nepal", category: "Study Abroad" },
  { topic: "Study in New Zealand from Nepal: visa requirements 2026", keyword: "study in New Zealand from Nepal", category: "Study Abroad" },
  { topic: "Study in Ireland from Nepal: top courses and student visa", keyword: "study in Ireland from Nepal", category: "Study Abroad" },
  { topic: "Study in Hungary from Nepal: Stipendium Hungaricum scholarship", keyword: "study in Hungary from Nepal", category: "Scholarships" },
  { topic: "Study in Norway from Nepal: free tuition scholarships", keyword: "study in Norway from Nepal", category: "Study Abroad" },

  // Visa guides
  { topic: "Australia student visa requirements for Nepal students 2026", keyword: "Australia student visa Nepal", category: "Visa" },
  { topic: "UK student visa (Tier 4) requirements for Nepali students", keyword: "UK student visa Nepal", category: "Visa" },
  { topic: "Canada student visa process for Nepal: step by step guide", keyword: "Canada student visa Nepal", category: "Visa" },
  { topic: "Schengen student visa for Nepali students: complete guide", keyword: "Schengen student visa Nepal", category: "Visa" },
  { topic: "USA F1 student visa interview tips for Nepali students", keyword: "USA F1 visa Nepal", category: "Visa" },
  { topic: "How to get student visa rejection reasons and reapply: Nepal", keyword: "student visa rejection Nepal", category: "Visa" },

  // Scholarships
  { topic: "Top 10 fully funded scholarships for Nepali students 2026", keyword: "scholarships for Nepali students 2026", category: "Scholarships" },
  { topic: "DAAD scholarship for Nepali students: how to apply", keyword: "DAAD scholarship Nepal", category: "Scholarships" },
  { topic: "Erasmus+ scholarship for Nepali students: complete guide", keyword: "Erasmus+ scholarship Nepal", category: "Scholarships" },
  { topic: "Chevening scholarship Nepal: eligibility and application", keyword: "Chevening scholarship Nepal", category: "Scholarships" },
  { topic: "Commonwealth scholarship for Nepali students 2026", keyword: "Commonwealth scholarship Nepal", category: "Scholarships" },

  // Practical guides
  { topic: "IELTS vs PTE for study abroad: which is better for Nepali students", keyword: "IELTS vs PTE Nepal", category: "Test Prep" },
  { topic: "How to prepare for IELTS in Nepal: tips from experts", keyword: "IELTS preparation Nepal", category: "Test Prep" },
  { topic: "Cost of studying abroad from Nepal: complete budget guide 2026", keyword: "cost of studying abroad Nepal", category: "Study Abroad" },
  { topic: "SOP writing tips for Nepali students applying abroad", keyword: "SOP for study abroad Nepal", category: "Application Tips" },
  { topic: "Letter of recommendation for study abroad: guide for Nepal", keyword: "recommendation letter study abroad Nepal", category: "Application Tips" },
  { topic: "How to choose the right education consultancy in Nepal", keyword: "best education consultancy Nepal", category: "Study Abroad" },
  { topic: "Part-time work while studying abroad: rules for Nepali students", keyword: "part time work study abroad Nepal", category: "Study Abroad" },
  { topic: "Post-study work visa options for Nepali graduates abroad", keyword: "post study work visa Nepal", category: "Visa" },
  { topic: "Nursing abroad from Nepal: UK, Australia, Canada opportunities", keyword: "nursing abroad Nepal", category: "Study Abroad" },
  { topic: "IT and engineering study abroad from Nepal: best countries", keyword: "IT engineering study abroad Nepal", category: "Study Abroad" },
];

// ── Competitor sites to analyze for topic gaps ────────────────────────────────
const COMPETITOR_SITES = [
  "https://icanmigrate.com",
  "https://aeccglobal.com.np",
  "https://embassyedu.com.np",
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
  const headlines: string[] = [];
  for (const site of COMPETITOR_SITES) {
    try {
      const res = await fetch(site, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(5000),
      });
      const html = await res.text();
      // Extract title tags and h1/h2 tags from HTML
      const titleMatches = html.match(/<title[^>]*>(.*?)<\/title>/gi) ?? [];
      const h1Matches = html.match(/<h1[^>]*>(.*?)<\/h1>/gi) ?? [];
      const h2Matches = html.match(/<h2[^>]*>(.*?)<\/h2>/gi) ?? [];
      const allMatches = [...titleMatches, ...h1Matches, ...h2Matches]
        .map((m) => m.replace(/<[^>]+>/g, "").trim())
        .filter((m) => m.length > 10 && m.length < 200);
      headlines.push(...allMatches.slice(0, 5));
    } catch {
      // Skip if site is unreachable
    }
  }
  return headlines;
}

async function generateBlogPost(topicItem: typeof TOPIC_POOL[0], competitorHeadlines: string[]): Promise<any> {
  const competitorContext = competitorHeadlines.length > 0
    ? `Competitor sites currently cover:\n${competitorHeadlines.slice(0, 10).map((h) => `- ${h}`).join("\n")}\n\nWrite content that is MORE detailed, MORE specific with real numbers, and MORE helpful than these.`
    : "";

  const prompt = `You are Shusil Ai, a study abroad counsellor at San Marina Education Consultancy (sanmarina.edu.np) in Kathmandu with 15 years of experience helping Nepali students go abroad. You have guided over 800 students to Australia, Japan, UK, USA, Canada, and South Korea. You write in first person as Priya — warm like a trusted didi giving honest advice over tea.

TOPIC: ${topicItem.topic}
FOCUS KEYWORD: ${topicItem.keyword}
CATEGORY: ${topicItem.category}

${competitorContext}

TARGET AUDIENCE: Nepali students aged 18-28 from Kathmandu, Pokhara, Chitwan, Biratnagar and their parents.

STRICT WRITING RULES:
— Write in first person throughout as Shusil Ai
— Warm, honest, specific — like a trusted didi giving advice over tea
— NEVER use: "in today's world", "in conclusion", "it is worth noting", "delve into", "navigating", "it is important to note"
— Give REAL numbers, REAL university names, REAL visa steps, REAL timelines
— Mention Nepali cities naturally (Kathmandu, Pokhara, Chitwan, Biratnagar, Dang, Itahari)
— Costs MUST appear in both NPR and USD
— Target: 2000–2500 words total

EXACT STRUCTURE TO FOLLOW — in this order:

1. Opening story (100 words): A true-feeling story about a named Nepali student (e.g. Suraj from Chitwan, Anita from Pokhara, Rajan from Biratnagar). First person. Describe the moment they walked into San Marina uncertain and left with a clear plan. Make it feel real.

2. One bridge sentence saying what this post covers — naturally include the focus keyword "${topicItem.keyword}".

3. Five to seven H2 sections (200–300 words each):
   - Practical and specific
   - Real university names, real visa office steps, real processing times
   - Use bullet points and numbered lists where helpful

4. Cost breakdown: A markdown table with costs in both NPR and USD (tuition, living, visa fee, health insurance, travel — row by row)

5. Top scholarships: 3–5 scholarships listed as: **Scholarship Name** — Amount — One-line eligibility requirement

6. FAQ section — EXACTLY 5 questions:
   - Each answer MAX 50 words
   - Written to directly answer and capture Google featured snippets
   - Start answers with a direct statement, not "It depends"

7. Closing paragraph: Warm invite to book a free counselling session at San Marina — mention our Kathmandu office, mention Dang and Itahari branches too. Warm, not salesy. Link naturally to /consultation/

SEO REQUIREMENTS:
- Focus keyword "${topicItem.keyword}" must appear in: title, first 100 words, at least 2 H2 headings
- Meta description: exactly 150-160 characters, include keyword and a reason to click
- Include natural internal links to /consultation/, /study-abroad/, /scholarships/, /services/

Respond with ONLY valid JSON (no markdown code blocks, no extra text):
{
  "title": "SEO title max 60 chars with focus keyword",
  "slug": "url-slug-with-hyphens",
  "excerpt": "2-3 sentence compelling summary",
  "meta_description": "Exactly 150-160 character meta description with keyword and click reason",
  "focus_keyword": "${topicItem.keyword}",
  "category": "${topicItem.category}",
  "author": "Shusil Ai",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "image_url": null,
  "body_markdown": "Full 2000-2500 word markdown post with opening story, all H2 sections, cost table, scholarships, FAQ, closing CTA",
  "faq": [
    {"question": "Exact question as written in the FAQ section?", "answer": "Max 50 word direct answer."},
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

  return JSON.parse(jsonText);
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
