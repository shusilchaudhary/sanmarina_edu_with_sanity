"use client";

import { useState } from "react";
import AdminNav from "@/components/AdminNav";
import { Plus, Pencil, Trash2, Check, X, Eye, EyeOff } from "lucide-react";

type Testimonial = {
  id: string;
  name: string;
  destination: string;
  date_label: string;
  quote: string;
  active: boolean;
  sort_order: number;
};

const DESTINATIONS = ["Australia", "UK", "Canada", "Japan", "Germany", "USA", "Norway", "Italy", "Slovakia", "Romania", "Other"];

const BLANK: Omit<Testimonial, "id"> = {
  name: "", destination: "Australia", date_label: "", quote: "", active: true, sort_order: 0,
};

export default function AdminTestimonialsClient({ initialTestimonials }: { initialTestimonials: Testimonial[] }) {
  const [items, setItems] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ ...BLANK });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  function startAdd() {
    setEditId(null);
    setForm({ ...BLANK });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startEdit(t: Testimonial) {
    setEditId(t.id);
    setForm({ name: t.name, destination: t.destination, date_label: t.date_label ?? "", quote: t.quote, active: t.active, sort_order: t.sort_order });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSave() {
    if (!form.name.trim() || !form.quote.trim()) { setMsg("Name and testimonial text are required."); return; }
    setSaving(true);
    setMsg("");
    try {
      if (editId) {
        const res = await fetch(`/api/admin/testimonials/${editId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Update failed");
        setItems((prev) => prev.map((t) => (t.id === editId ? { ...t, ...form } : t)));
        setMsg("Testimonial updated.");
      } else {
        const res = await fetch("/api/admin/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Create failed");
        const { testimonial } = await res.json();
        setItems((prev) => [...prev, testimonial]);
        setMsg("Testimonial added.");
      }
      setShowForm(false);
      setEditId(null);
    } catch (e: any) {
      setMsg(e.message || "Error saving.");
    }
    setSaving(false);
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Delete ${name}'s testimonial? This cannot be undone.`)) return;
    const res = await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
    if (res.ok) {
      setItems((prev) => prev.filter((t) => t.id !== id));
      setMsg("Deleted.");
    }
  }

  async function toggleActive(t: Testimonial) {
    const res = await fetch(`/api/admin/testimonials/${t.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !t.active }),
    });
    if (res.ok) setItems((prev) => prev.map((tm) => (tm.id === t.id ? { ...tm, active: !t.active } : tm)));
  }

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const sorted = [...items].sort((a, b) => a.sort_order - b.sort_order);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-5xl mx-auto px-4 py-8">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#001F3F]">Success Stories</h1>
            <p className="text-gray-500 text-sm mt-1">
              {items.filter((t) => t.active).length} visible · {items.length} total
            </p>
          </div>
          <button onClick={startAdd} className="flex items-center gap-2 bg-[#001F3F] text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-blue-900 transition-colors">
            <Plus size={18} /> Add Story
          </button>
        </div>

        {msg && <div className="mb-4 p-3 bg-blue-50 border border-blue-200 text-blue-800 rounded-xl text-sm">{msg}</div>}

        {showForm && (
          <div className="mb-8 bg-white rounded-2xl shadow border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-[#001F3F] mb-5">{editId ? "Edit Story" : "Add Success Story"}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name *</label>
                <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Suman Thapa" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination Country</label>
                <select value={form.destination} onChange={(e) => setForm((f) => ({ ...f, destination: e.target.value }))} className={inputCls}>
                  {DESTINATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date (e.g. January 2026)</label>
                <input value={form.date_label} onChange={(e) => setForm((f) => ({ ...f, date_label: e.target.value }))} placeholder="January 2026" className={inputCls} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order (lower = first)</label>
                <input type="number" value={form.sort_order} onChange={(e) => setForm((f) => ({ ...f, sort_order: parseInt(e.target.value) || 0 }))} className={inputCls} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Testimonial Text *</label>
                <textarea value={form.quote} onChange={(e) => setForm((f) => ({ ...f, quote: e.target.value }))} rows={4} placeholder="Student's experience in their own words…" className={`${inputCls} resize-none`} />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="tActive" checked={form.active} onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))} className="w-4 h-4 rounded" />
                <label htmlFor="tActive" className="text-sm font-medium text-gray-700">Visible on website</label>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 bg-[#001F3F] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-900 disabled:opacity-50 transition-colors">
                <Check size={16} /> {saving ? "Saving…" : "Save Story"}
              </button>
              <button onClick={() => { setShowForm(false); setEditId(null); }} className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                <X size={16} /> Cancel
              </button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {sorted.map((t) => (
            <div key={t.id} className={`bg-white rounded-2xl border p-5 ${!t.active ? "opacity-50 border-gray-200" : "border-gray-100 shadow-sm"}`}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#001F3F] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold text-[#001F3F] text-sm">{t.name}</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{t.destination}</span>
                    {t.date_label && <span className="text-xs text-gray-400">{t.date_label}</span>}
                    {!t.active && <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Hidden</span>}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{t.quote}</p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button onClick={() => toggleActive(t)} title={t.active ? "Hide" : "Show"} className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    {t.active ? <Eye size={15} /> : <EyeOff size={15} />}
                  </button>
                  <button onClick={() => startEdit(t)} title="Edit" className="p-2 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition-colors">
                    <Pencil size={15} />
                  </button>
                  <button onClick={() => handleDelete(t.id, t.name)} title="Delete" className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {sorted.length === 0 && (
            <p className="text-center text-gray-400 py-12">No testimonials yet. Click "Add Story" to add the first one.</p>
          )}
        </div>
      </div>
    </div>
  );
}
