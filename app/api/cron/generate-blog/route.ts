import { NextRequest, NextResponse } from "next/server";

/**
 * Vercel Cron Job endpoint — called automatically on schedule defined in vercel.json.
 * Internally calls the main /api/generate-blog route to keep logic in one place.
 *
 * Schedule: every day at 06:00 AM Nepal time (00:15 UTC)
 */
export async function GET(req: NextRequest) {
  // Vercel sends the CRON_SECRET automatically in the Authorization header
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sanmarina.edu.np";

  try {
    const response = await fetch(`${baseUrl}/api/generate-blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CRON_SECRET}`,
      },
      body: JSON.stringify({ auto_publish: true }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Blog generation failed:", result);
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    console.log("Auto-blog generated:", result.post?.title);
    return NextResponse.json({ success: true, post: result.post });
  } catch (error: any) {
    console.error("Cron job error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
