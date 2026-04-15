import { createServerSupabaseClient } from "@/lib/supabase-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminBlogsClient from "./AdminBlogsClient";
import type { BlogPost } from "@/lib/supabase";

// Simple cookie-based auth gate
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  return cookieStore.get("admin_auth")?.value === process.env.ADMIN_SECRET;
}

async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function AdminBlogsPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  const posts = await getAllPosts();

  return <AdminBlogsClient initialPosts={posts} />;
}
