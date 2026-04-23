"use client";

import { useState } from "react";
import AdminNav from "@/components/AdminNav";
import { Save, Check } from "lucide-react";

type Setting = { key: string; value: string; label: string };

const GROUPS = [
  {
    title: "Phone Numbers",
    keys: ["phone_main", "phone_head_office", "phone_baneshwor", "phone_dang", "phone_itahari"],
  },
  {
    title: "Addresses",
    keys: ["address_head_office", "address_baneshwor", "address_dang", "address_itahari"],
  },
  {
    title: "Contact & WhatsApp",
    keys: ["email_main", "whatsapp_number"],
  },
  {
    title: "Website Statistics (shown on About page)",
    keys: ["stat_students", "stat_universities", "stat_branches", "stat_experience"],
  },
  {
    title: "Social Media Links",
    keys: ["facebook_url", "instagram_url", "linkedin_url"],
  },
];

export default function AdminSettingsClient({ initialSettings }: { initialSettings: Setting[] }) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(initialSettings.map((s) => [s.key, s.value]))
  );
  const labels = Object.fromEntries(initialSettings.map((s) => [s.key, s.label]));
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function handleSave() {
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      const payload = Object.entries(values).map(([key, value]) => ({
        key,
        value,
        label: labels[key] ?? key,
      }));
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to save settings");
      setSaved(true);
      setTimeout(() => setSaved(false), 4000);
    } catch (e: any) {
      setError(e.message || "Error saving.");
    }
    setSaving(false);
  }

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-4xl mx-auto px-4 py-8">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#001F3F]">Site Settings</h1>
            <p className="text-gray-500 text-sm mt-1">Update phone numbers, addresses, stats and social links</p>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-[#001F3F] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-900 disabled:opacity-50 transition-colors"
          >
            {saved ? <Check size={18} /> : <Save size={18} />}
            {saving ? "Saving…" : saved ? "Saved!" : "Save All"}
          </button>
        </div>

        {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">{error}</div>}
        {saved && <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm">All settings saved to Supabase successfully.</div>}

        <div className="space-y-6">
          {GROUPS.map((group) => (
            <div key={group.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-[#001F3F] mb-5 border-b pb-3">{group.title}</h2>
              <div className="space-y-4">
                {group.keys.map((key) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {labels[key] ?? key}
                    </label>
                    <input
                      value={values[key] ?? ""}
                      onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
                      className={inputCls}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-[#001F3F] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-900 disabled:opacity-50 transition-colors"
          >
            {saved ? <Check size={18} /> : <Save size={18} />}
            {saving ? "Saving…" : saved ? "All Saved!" : "Save All Settings"}
          </button>
        </div>

        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800">
          <strong>Note:</strong> Settings save to Supabase immediately. The website reads these values live — no redeploy needed for most settings. Stats shown on the About page will update on next page load.
        </div>
      </div>
    </div>
  );
}
