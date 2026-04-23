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
  const { data, error } = await supabase.from("testimonials").select("*").order("sort_order");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.destination || !body?.quote) {
    return NextResponse.json({ error: "Name, destination, and quote are required" }, { status: 400 });
  }
  const supabase = createServerSupabaseClient();
  const { data, error } = await supabase
    .from("testimonials")
    .insert({
      name: body.name.trim(),
      destination: body.destination.trim(),
      date_label: body.date_label?.trim() ?? "",
      quote: body.quote.trim(),
      active: body.active ?? true,
      sort_order: body.sort_order ?? 0,
    })
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, testimonial: data });
}
