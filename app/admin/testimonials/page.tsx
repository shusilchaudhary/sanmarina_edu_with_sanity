import { createServerSupabaseClient } from "@/lib/supabase-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminTestimonialsClient from "./AdminTestimonialsClient";

const ADMIN_PASSWORD = process.env.ADMIN_SECRET ?? "sanmarina2026";

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  return cookieStore.get("admin_auth")?.value === ADMIN_PASSWORD;
}

async function getTestimonials() {
  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase.from("testimonials").select("*").order("sort_order");
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function AdminTestimonialsPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const testimonials = await getTestimonials();
  return <AdminTestimonialsClient initialTestimonials={testimonials} />;
}
