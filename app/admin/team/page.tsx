import { createServerSupabaseClient } from "@/lib/supabase-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminTeamClient from "./AdminTeamClient";

const ADMIN_PASSWORD = process.env.ADMIN_SECRET ?? "sanmarina2026";

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = cookies();
  return cookieStore.get("admin_auth")?.value === ADMIN_PASSWORD;
}

async function getTeamMembers() {
  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from("team_members")
      .select("*")
      .order("branch")
      .order("sort_order");
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function AdminTeamPage() {
  if (!(await isAuthenticated())) redirect("/admin/login");
  const members = await getTeamMembers();
  return <AdminTeamClient initialMembers={members} />;
}
