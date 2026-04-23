import { createServerSupabaseClient } from "@/lib/supabase-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSettingsClient from "./AdminSettingsClient";

const ADMIN_PASSWORD = process.env.ADMIN_SECRET ?? "sanmarina2026";

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  return cookieStore.get("admin_auth")?.value === ADMIN_PASSWORD;
}

async function getSettings() {
  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase.from("site_settings").select("*").order("key");
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function AdminSettingsPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const settings = await getSettings();
  return <AdminSettingsClient initialSettings={settings} />;
}
