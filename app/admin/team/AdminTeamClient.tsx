"use client";

import { useState } from "react";
import AdminNav from "@/components/AdminNav";
import { Plus, Pencil, Trash2, Check, X, Eye, EyeOff, User } from "lucide-react";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image_url: string;
  branch: string;
  sort_order: number;
  active: boolean;
};

const BRANCHES = [
  { key: "head-office", label: "Head Office (Tinkune, Kathmandu)" },
  { key: "baneshwor",   label: "Baneshwor Branch" },
  { key: "dang",        label: "Dang Branch" },
  { key: "itahari",     label: "Itahari Branch" },
];

const BLANK: Omit<TeamMember, "id" | "created_at"> = {
  name: "", role: "", image_url: "", branch: "head-office", sort_order: 0, active: true,
};

export default function AdminTeamClient({ initialMembers }: { initialMembers: TeamMember[] }) {
  const [members, setMembers] = useState(initialMembers);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ ...BLANK });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const grouped = BRANCHES.map((b) => ({
    ...b,
    members: members
      .filter((m) => m.branch === b.key)
      .sort((a, b) => a.sort_order - b.sort_order),
  }));

  function startAdd() {
    setEditId(null);
    setForm({ ...BLANK });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startEdit(m: TeamMember) {
    setEditId(m.id);
    setForm({ name: m.name, role: m.role, image_url: m.image_url ?? "", branch: m.branch, sort_order: m.sort_order, active: m.active });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSave() {
    if (!form.name.trim() || !form.role.trim()) { setMsg("Name and role are required."); return; }
    setSaving(true);
    setMsg("");
    try {
      if (editId) {
        const res = await fetch(`/api/admin/team/${editId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Update failed");
        setMembers((prev) => prev.map((m) => (m.id === editId ? { ...m, ...form } : m)));
        setMsg("Team member updated successfully.");
      } else {
        const res = await fetch("/api/admin/team", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Create failed");
        const { member } = await res.json();
        setMembers((prev) => [...prev, member]);
        setMsg("Team member added successfully.");
      }
      setShowForm(false);
      setEditId(null);
    } catch (e: any) {
      setMsg(e.message || "Error saving.");
    }
    setSaving(false);
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete ${name}? This cannot be undone.`)) return;
    const res = await fetch(`/api/admin/team/${id}`, { method: "DELETE" });
    if (res.ok) {
      setMembers((prev) => prev.filter((m) => m.id !== id));
      setMsg(`${name} deleted.`);
    }
  }

  async function toggleActive(m: TeamMember) {
    const res = await fetch(`/api/admin/team/${m.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !m.active }),
    });
    if (res.ok) setMembers((prev) => prev.map((tm) => (tm.id === m.id ? { ...tm, active: !m.active } : tm)));
  }

  function field(label: string, node: React.ReactNode) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {node}
      </div>
    );
  }

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#001F3F]">Team Members</h1>
            <p className="text-gray-500 text-sm mt-1">
              {members.filter((m) => m.active).length} active · {members.length} total across {BRANCHES.length} branches
            </p>
          </div>
          <button
            onClick={startAdd}
            className="flex items-center gap-2 bg-[#001F3F] text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-blue-900 transition-colors"
          >
            <Plus size={18} /> Add Member
          </button>
        </div>

        {msg && (
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-xl text-sm">{msg}</div>
        )}

        {/* Add / Edit form */}
        {showForm && (
          <div className="mb-8 bg-white rounded-2xl shadow border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-[#001F3F] mb-5">
              {editId ? "Edit Team Member" : "Add New Member"}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {field("Full Name *",
                <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Sandip Baraili" className={inputCls} />
              )}
              {field("Role / Position *",
                <input value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} placeholder="e.g. Chief Operating Officer" className={inputCls} />
              )}
              {field("Branch",
                <select value={form.branch} onChange={(e) => setForm((f) => ({ ...f, branch: e.target.value }))} className={inputCls}>
                  {BRANCHES.map((b) => <option key={b.key} value={b.key}>{b.label}</option>)}
                </select>
              )}
              {field("Sort Order (lower = first)",
                <input type="number" value={form.sort_order} onChange={(e) => setForm((f) => ({ ...f, sort_order: parseInt(e.target.value) || 0 }))} className={inputCls} />
              )}
              <div className="md:col-span-2">
                {field("Photo Path",
                  <>
                    <input value={form.image_url} onChange={(e) => setForm((f) => ({ ...f, image_url: e.target.value }))} placeholder="/assets/name.jpg" className={inputCls} />
                    <p className="text-xs text-gray-400 mt-1">Put the photo in the <code>public/assets/</code> folder, then type the path here like <code>/assets/filename.jpg</code></p>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="chkActive" checked={form.active} onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))} className="w-4 h-4 rounded" />
                <label htmlFor="chkActive" className="text-sm font-medium text-gray-700">Visible on website</label>
              </div>
              {form.image_url && (
                <div className="flex items-center gap-3">
                  <img src={form.image_url} alt="preview" className="w-12 h-12 rounded-xl object-cover border" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  <span className="text-xs text-gray-400">Photo preview</span>
                </div>
              )}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 bg-[#001F3F] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-900 disabled:opacity-50 transition-colors">
                <Check size={16} /> {saving ? "Saving…" : "Save Member"}
              </button>
              <button onClick={() => { setShowForm(false); setEditId(null); }} className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                <X size={16} /> Cancel
              </button>
            </div>
          </div>
        )}

        {/* Team by branch */}
        {grouped.map((group) => (
          <div key={group.key} className="mb-8">
            <h2 className="text-base font-bold text-[#001F3F] mb-4 flex items-center gap-2 border-b pb-3">
              {group.label}
              <span className="text-sm font-normal text-gray-400">({group.members.length})</span>
            </h2>
            {group.members.length === 0 ? (
              <p className="text-gray-400 text-sm italic pl-1">No members. Click "Add Member" to add someone.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.members.map((m) => (
                  <div
                    key={m.id}
                    className={`bg-white rounded-2xl border p-4 flex gap-4 transition-opacity ${
                      m.active ? "border-gray-100 shadow-sm" : "opacity-50 border-gray-200"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                      {m.image_url ? (
                        <img src={m.image_url} alt={m.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <User size={26} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[#001F3F] truncate text-sm">{m.name}</p>
                      <p className="text-xs text-gray-500 truncate">{m.role}</p>
                      <p className="text-xs text-gray-300 mt-1">#{m.sort_order}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0">
                      <button onClick={() => toggleActive(m)} title={m.active ? "Hide from site" : "Show on site"} className="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                        {m.active ? <Eye size={14} /> : <EyeOff size={14} />}
                      </button>
                      <button onClick={() => startEdit(m)} title="Edit" className="p-1.5 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                        <Pencil size={14} />
                      </button>
                      <button onClick={() => handleDelete(m.id, m.name)} title="Delete" className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
          <strong>Tip:</strong> To add a new team photo, upload the image to the <code>public/assets/</code> folder in your project, then enter the path like <code>/assets/newphoto.jpg</code>. Changes save instantly to Supabase and appear on the About page.
        </div>
      </div>
    </div>
  );
}
