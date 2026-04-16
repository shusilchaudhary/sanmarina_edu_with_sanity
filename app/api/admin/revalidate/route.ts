import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_SECRET ?? "sanmarina2026";

function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get("authorization");
  if (authHeader === `Bearer ${ADMIN_PASSWORD}`) return true;
  const cookieStore = cookies();
  return cookieStore.get("admin_auth")?.value === ADMIN_PASSWORD;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await req.json().catch(() => ({}));

  // Always revalidate the blog listing page
  revalidatePath("/blog");
  revalidatePath("/blog/");

  // Also revalidate the specific post page if slug is provided
  if (slug) {
    revalidatePath(`/blog/${slug}`);
    revalidatePath(`/blog/${slug}/`);
  }

  return NextResponse.json({ revalidated: true });
}
