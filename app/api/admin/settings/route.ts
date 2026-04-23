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
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase.from("site_settings").select("*").order("key");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const supabase = createServerSupabaseClient();
  const updates = (Array.isArray(body) ? body : [body]).map((u: any) => ({
    key: u.key,
    value: u.value,
    label: u.label ?? u.key,
    updated_at: new Date().toISOString(),
  }));
  const { error } = await supabase.from("site_settings").upsert(updates);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
