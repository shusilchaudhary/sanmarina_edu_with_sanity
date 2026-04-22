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

  const [posts, jobs, events, applications] = await Promise.all([
    supabase.from("blog_posts").select("*").order("created_at", { ascending: false }),
    supabase.from("jobs").select("*").order("created_at", { ascending: false }),
    supabase.from("events").select("*").order("created_at", { ascending: false }),
    supabase.from("job_applications").select("*").order("created_at", { ascending: false }),
  ]);

  const backup = {
    exported_at: new Date().toISOString(),
    site: "sanmarina.edu.np",
    data: {
      blog_posts: posts.data ?? [],
      jobs: jobs.data ?? [],
      events: events.data ?? [],
      job_applications: applications.data ?? [],
    },
    totals: {
      blog_posts: posts.data?.length ?? 0,
      jobs: jobs.data?.length ?? 0,
      events: events.data?.length ?? 0,
      job_applications: applications.data?.length ?? 0,
    },
  };

  const filename = `sanmarina-backup-${new Date().toISOString().split("T")[0]}.json`;

  return new NextResponse(JSON.stringify(backup, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
