import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";

/**
 * Diagnostic endpoint — tests all connections without generating content.
 * GET /api/diagnose/ with Authorization header
 */
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET ?? process.env.ADMIN_SECRET;
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results: Record<string, any> = {};

  // ── 1. Check env vars ────────────────────────────────────────────────────────
  results.env = {
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ set" : "❌ missing",
    SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ set" : "❌ missing",
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? "✅ set" : "❌ missing",
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY ? "✅ set" : "❌ missing",
    ADMIN_SECRET: process.env.ADMIN_SECRET ? "✅ set" : "❌ missing",
    CRON_SECRET: process.env.CRON_SECRET ? "✅ set" : "❌ missing",
  };

  // ── 2. Test Supabase connection ──────────────────────────────────────────────
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("count")
      .single();
    if (error) throw new Error(error.message);
    results.supabase = { status: "✅ connected", blog_posts_count: data?.count ?? 0 };
  } catch (e: any) {
    results.supabase = { status: "❌ failed", error: e.message };
  }

  // ── 3. Test jobs table ───────────────────────────────────────────────────────
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase.from("jobs").select("title");
    if (error) throw new Error(error.message);
    results.jobs_table = { status: "✅ ok", jobs: (data ?? []).map((j: any) => j.title) };
  } catch (e: any) {
    results.jobs_table = { status: "❌ failed", error: e.message };
  }

  // ── 4. Test OpenRouter API key ───────────────────────────────────────────────
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://www.sanmarina.edu.np",
        "X-Title": "San Marina AI Blogger",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-haiku",
        max_tokens: 10,
        messages: [{ role: "user", content: "Reply with just: ok" }],
      }),
    });
    if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`);
    const data = await res.json();
    results.openrouter = { status: "✅ connected", response: data.choices?.[0]?.message?.content };
  } catch (e: any) {
    results.openrouter = { status: "❌ failed", error: e.message };
  }

  const allOk = Object.values(results).every((r: any) =>
    typeof r === "object" && (r.status?.startsWith("✅") || Object.values(r).every((v: any) => v?.toString().startsWith("✅")))
  );

  return NextResponse.json({
    overall: allOk ? "✅ All systems ready" : "❌ Some checks failed",
    ...results,
  });
}
