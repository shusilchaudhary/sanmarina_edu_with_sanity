import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_SECRET ?? "sanmarina2026";

function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get("authorization");
  if (authHeader === `Bearer ${ADMIN_PASSWORD}`) return true;
  const cookieStore = cookies();
  return cookieStore.get("admin_auth")?.value === ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  // Return all posts including deleted (admin needs to see trash)
  return NextResponse.json(data ?? []);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body || !body.title || !body.body_markdown) {
    return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
  }

  // Auto-generate slug from title if not provided
  const slug = (body.slug || body.title)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  const supabase = createServerSupabaseClient();

  // Ensure slug is unique
  const { data: existing } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("slug", slug)
    .single();
  const finalSlug = existing ? `${slug}-${Date.now()}` : slug;

  const status = body.status === "published" ? "published" : "draft";

  const { data: post, error } = await supabase
    .from("blog_posts")
    .insert({
      title: body.title.trim(),
      slug: finalSlug,
      excerpt: body.excerpt?.trim() ?? "",
      meta_description: body.meta_description?.trim() ?? null,
      focus_keyword: body.focus_keyword?.trim() ?? null,
      category: body.category?.trim() ?? "Study Abroad",
      author: body.author?.trim() ?? "San Marina Team",
      tags: Array.isArray(body.tags) ? body.tags : (body.tags ?? "").split(",").map((t: string) => t.trim()).filter(Boolean),
      image_url: body.image_url?.trim() || null,
      body_markdown: body.body_markdown,
      faq: Array.isArray(body.faq) ? body.faq : [],
      status,
      ai_generated: false,
      published_at: status === "published" ? new Date().toISOString() : null,
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, post });
}
