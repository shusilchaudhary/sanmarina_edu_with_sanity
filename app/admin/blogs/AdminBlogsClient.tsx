"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus, Eye, Trash2, CheckCircle, XCircle,
  ExternalLink, LogOut, X, Save, HelpCircle, Pencil,
  Download, RotateCcw, AlertTriangle,
} from "lucide-react";
import type { BlogPost } from "@/lib/supabase";

interface Props {
  initialPosts: BlogPost[];
}

const CATEGORIES = ["Study Abroad", "Visa", "Scholarships", "Test Prep", "Application Tips", "News"];

const BLANK_FORM = {
  title: "",
  slug: "",
  excerpt: "",
  body_markdown: "",
  category: "Study Abroad",
  author: "San Marina Team",
  tags: "",
  image_url: "",
  focus_keyword: "",
  meta_description: "",
  status: "draft" as "draft" | "published",
};

type FaqItem = { question: string; answer: string };
const BLANK_FAQ: FaqItem = { question: "", answer: "" };

export default function AdminBlogsClient({ initialPosts }: Props) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null); // null = new post
  const [form, setForm] = useState(BLANK_FORM);
  const [faqs, setFaqs] = useState<FaqItem[]>([{ ...BLANK_FAQ }]);
  const [saving, setSaving] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const adminSecret =
    typeof window !== "undefined"
      ? (sessionStorage.getItem("admin_secret") ?? "sanmarina2026")
      : "sanmarina2026";

  function showMsg(type: "success" | "error", text: string) {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  }

  function openNewEditor() {
    setEditingPost(null);
    setForm(BLANK_FORM);
    setFaqs([{ ...BLANK_FAQ }]);
    setShowEditor(true);
  }

  function openEditEditor(post: BlogPost) {
    setEditingPost(post);
    setForm({
      title: post.title ?? "",
      slug: post.slug ?? "",
      excerpt: post.excerpt ?? "",
      body_markdown: post.body_markdown ?? "",
      category: post.category ?? "Study Abroad",
      author: post.author ?? "San Marina Team",
      tags: Array.isArray(post.tags) ? post.tags.join(", ") : (post.tags ?? ""),
      image_url: post.image_url ?? "",
      focus_keyword: post.focus_keyword ?? "",
      meta_description: post.meta_description ?? "",
      status: post.status ?? "draft",
    });
    setFaqs(
      Array.isArray(post.faq) && post.faq.length > 0
        ? post.faq
        : [{ ...BLANK_FAQ }]
    );
    setShowEditor(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeEditor() {
    setShowEditor(false);
    setEditingPost(null);
    setForm(BLANK_FORM);
    setFaqs([{ ...BLANK_FAQ }]);
  }

  function handleField(key: keyof typeof BLANK_FORM, value: string) {
    setForm((f) => {
      const next = { ...f, [key]: value };
      // Auto-generate slug from title only for new posts
      if (key === "title" && !editingPost && !f.slug) {
        next.slug = value
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-");
      }
      return next;
    });
  }

  async function handleSave(publishNow?: boolean) {
    if (!form.title.trim()) { showMsg("error", "Title is required."); return; }
    if (!form.body_markdown.trim()) { showMsg("error", "Content is required."); return; }

    setSaving(true);
    try {
      const payload = {
        ...form,
        faq: faqs.filter((f) => f.question.trim() && f.answer.trim()),
        status: publishNow ? "published" : form.status,
        ...(publishNow ? { published_at: new Date().toISOString() } : {}),
      };

      let savedSlug: string;

      if (editingPost) {
        // ── UPDATE existing post ──
        const res = await fetch(`/api/admin/posts/${editingPost.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${adminSecret}`,
          },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? `Error ${res.status}`);

        savedSlug = form.slug;
        setPosts((prev) =>
          prev.map((p) =>
            p.id === editingPost.id
              ? { ...p, ...payload, tags: payload.tags ? String(payload.tags).split(",").map((t: string) => t.trim()).filter(Boolean) : p.tags }
              : p
          )
        );
        showMsg("success", `Post updated${publishNow ? " and published" : ""}.`);
      } else {
        // ── CREATE new post ──
        const res = await fetch("/api/admin/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${adminSecret}`,
          },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? `Error ${res.status}`);

        savedSlug = data.post.slug;
        setPosts((prev) => [data.post, ...prev]);
        showMsg("success", `Post "${data.post.title}" saved${publishNow ? " and published" : " as draft"}.`);
      }

      // Purge blog cache so changes appear on site immediately
      await fetch("/api/admin/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${adminSecret}` },
        body: JSON.stringify({ slug: savedSlug }),
      }).catch(() => {});

      closeEditor();
    } catch (err: any) {
      showMsg("error", err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleStatusToggle(post: BlogPost) {
    setLoadingId(post.id);
    const newStatus = post.status === "published" ? "draft" : "published";
    try {
      const res = await fetch(`/api/admin/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${adminSecret}` },
        body: JSON.stringify({
          status: newStatus,
          published_at: newStatus === "published" ? new Date().toISOString() : null,
        }),
      });
      if (!res.ok) throw new Error("Update failed");
      setPosts((prev) => prev.map((p) => (p.id === post.id ? { ...p, status: newStatus } : p)));
      await fetch("/api/admin/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${adminSecret}` },
        body: JSON.stringify({ slug: post.slug }),
      }).catch(() => {});
      showMsg("success", `Post ${newStatus === "published" ? "published" : "moved to drafts"}.`);
    } catch (err: any) {
      showMsg("error", err.message);
    } finally {
      setLoadingId(null);
    }
  }

  async function handleDelete(post: BlogPost) {
    if (!confirm(`Move "${post.title}" to Trash? You can restore it later.`)) return;
    setLoadingId(post.id);
    try {
      const res = await fetch(`/api/admin/posts/${post.id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${adminSecret}` },
      });
      if (!res.ok) throw new Error("Move to trash failed");
      setPosts((prev) => prev.map((p) => p.id === post.id ? { ...p, status: "deleted" as any } : p));
      await fetch("/api/admin/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${adminSecret}` },
        body: JSON.stringify({ slug: post.slug }),
      }).catch(() => {});
      showMsg("success", `"${post.title}" moved to Trash. Restore it below if needed.`);
    } catch (err: any) {
      showMsg("error", err.message);
    } finally {
      setLoadingId(null);
    }
  }

  async function handleRestore(post: BlogPost) {
    setLoadingId(post.id);
    try {
      const res = await fetch(`/api/admin/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${adminSecret}` },
        body: JSON.stringify({ status: "draft" }),
      });
      if (!res.ok) throw new Error("Restore failed");
      setPosts((prev) => prev.map((p) => p.id === post.id ? { ...p, status: "draft" } : p));
      showMsg("success", `"${post.title}" restored to Drafts.`);
    } catch (err: any) {
      showMsg("error", err.message);
    } finally {
      setLoadingId(null);
    }
  }

  async function handlePermanentDelete(post: BlogPost) {
    if (!confirm(`PERMANENTLY delete "${post.title}"? This CANNOT be undone.`)) return;
    setLoadingId(post.id);
    try {
      const res = await fetch(`/api/admin/posts/${post.id}?permanent=true`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${adminSecret}` },
      });
      if (!res.ok) throw new Error("Permanent delete failed");
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
      showMsg("success", "Post permanently deleted.");
    } catch (err: any) {
      showMsg("error", err.message);
    } finally {
      setLoadingId(null);
    }
  }

  async function handleBackup() {
    try {
      const res = await fetch("/api/admin/export", {
        headers: { "Authorization": `Bearer ${adminSecret}` },
      });
      if (!res.ok) throw new Error("Backup failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `sanmarina-backup-${new Date().toISOString().split("T")[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showMsg("success", "Backup downloaded successfully.");
    } catch (err: any) {
      showMsg("error", err.message);
    }
  }

  const published = posts.filter((p) => p.status === "published");
  const drafts = posts.filter((p) => p.status === "draft");
  const trashed = posts.filter((p) => (p.status as any) === "deleted");
  const wordCount = form.body_markdown.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#001F3F] text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">San Marina — Blog Admin</h1>
          <p className="text-blue-300 text-sm">Manage your blog posts</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-blue-300 hover:text-white text-sm flex items-center gap-1">
            <ExternalLink size={14} /> View Site
          </Link>
          <button
            onClick={handleBackup}
            className="text-blue-300 hover:text-white text-sm flex items-center gap-1"
            title="Download full data backup"
          >
            <Download size={14} /> Backup
          </button>
          <Link href="/api/admin/logout" className="text-blue-300 hover:text-white text-sm flex items-center gap-1">
            <LogOut size={14} /> Logout
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Status message */}
        {message && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
            message.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            {message.type === "success" ? <CheckCircle size={18} /> : <XCircle size={18} />}
            {message.text}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-2xl font-bold text-[#001F3F]">{published.length + drafts.length}</p>
            <p className="text-gray-500 text-sm">Total Posts</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-2xl font-bold text-green-600">{published.length}</p>
            <p className="text-gray-500 text-sm">Published</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-2xl font-bold text-amber-500">{drafts.length}</p>
            <p className="text-gray-500 text-sm">Drafts</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-2xl font-bold text-red-400">{trashed.length}</p>
            <p className="text-gray-500 text-sm">Trash</p>
          </div>
        </div>

        {/* New Post Button */}
        {!showEditor && (
          <button
            onClick={openNewEditor}
            className="mb-8 flex items-center gap-2 bg-[#001F3F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors"
          >
            <Plus size={18} /> Write New Post
          </button>
        )}

        {/* ── Blog Editor ── */}
        {showEditor && (
          <div className="bg-white rounded-2xl shadow border mb-8 overflow-hidden">
            {/* Editor header */}
            <div className="bg-[#001F3F] text-white px-6 py-4 flex items-center justify-between">
              <h2 className="font-bold text-lg">
                {editingPost ? `Editing: ${editingPost.title.slice(0, 50)}${editingPost.title.length > 50 ? "…" : ""}` : "New Blog Post"}
              </h2>
              <button onClick={closeEditor} className="text-blue-300 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleField("title", e.target.value)}
                  placeholder="e.g. Study in Australia from Nepal 2026: Complete Guide"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  URL Slug <span className="text-gray-400 font-normal">(auto-filled from title)</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">/blog/</span>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => handleField("slug", e.target.value)}
                    placeholder="study-in-australia-from-nepal-2026"
                    className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-gray-400 text-sm">/</span>
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Excerpt / Summary</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => handleField("excerpt", e.target.value)}
                  placeholder="A 2-3 sentence summary shown in blog listings..."
                  rows={2}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
              </div>

              {/* Body */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-semibold text-gray-700">
                    Content (Markdown) <span className="text-red-500">*</span>
                  </label>
                  <span className="text-xs text-gray-400">{wordCount} words</span>
                </div>
                <textarea
                  value={form.body_markdown}
                  onChange={(e) => handleField("body_markdown", e.target.value)}
                  placeholder={`## Introduction\n\nWrite your blog post here using **Markdown**.\n\n## Section 2\n\nUse ## for headings, **bold**, *italic*, - bullet lists.\n\n| Column 1 | Column 2 |\n|----------|----------|\n| Value 1  | Value 2  |`}
                  rows={20}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Supports Markdown: ## headings, **bold**, *italic*, - lists, | tables |, [links](url)
                </p>
              </div>

              {/* Row: Category + Author */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => handleField("category", e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Author</label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => handleField("author", e.target.value)}
                    placeholder="San Marina Team"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Tags <span className="text-gray-400 font-normal">(comma separated)</span>
                </label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => handleField("tags", e.target.value)}
                  placeholder="study abroad, australia, student visa, nepal"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Cover Image URL</label>
                <input
                  type="url"
                  value={form.image_url}
                  onChange={(e) => handleField("image_url", e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* SEO Fields */}
              <details className="border border-gray-200 rounded-xl overflow-hidden">
                <summary className="px-4 py-3 text-sm font-semibold text-gray-700 cursor-pointer bg-gray-50 hover:bg-gray-100">
                  SEO Settings (optional)
                </summary>
                <div className="p-4 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Focus Keyword</label>
                    <input
                      type="text"
                      value={form.focus_keyword}
                      onChange={(e) => handleField("focus_keyword", e.target.value)}
                      placeholder="study in australia from nepal"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-sm font-semibold text-gray-700">Meta Description</label>
                      <span className={`text-xs ${form.meta_description.length > 160 ? "text-red-500" : "text-gray-400"}`}>
                        {form.meta_description.length}/160
                      </span>
                    </div>
                    <textarea
                      value={form.meta_description}
                      onChange={(e) => handleField("meta_description", e.target.value)}
                      placeholder="150–160 character description shown in Google search results..."
                      rows={2}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </div>
              </details>

              {/* FAQ Section */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <HelpCircle size={16} /> FAQ (shown as rich snippet on Google)
                  </span>
                  <button
                    type="button"
                    onClick={() => setFaqs((f) => [...f, { ...BLANK_FAQ }])}
                    className="text-xs text-blue-600 font-semibold hover:text-blue-800"
                  >
                    + Add Question
                  </button>
                </div>
                <div className="p-4 space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-100 rounded-xl p-3 space-y-2 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500">Q{i + 1}</span>
                        {faqs.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setFaqs((f) => f.filter((_, idx) => idx !== i))}
                            className="text-xs text-red-400 hover:text-red-600"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => setFaqs((f) => f.map((item, idx) => idx === i ? { ...item, question: e.target.value } : item))}
                        placeholder="e.g. How much does it cost to study in Australia from Nepal?"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      />
                      <textarea
                        value={faq.answer}
                        onChange={(e) => setFaqs((f) => f.map((item, idx) => idx === i ? { ...item, answer: e.target.value } : item))}
                        placeholder="Direct answer in 1-2 sentences (50–60 words max for best snippet ranking)..."
                        rows={2}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setFaqs((f) => [...f, { ...BLANK_FAQ }])}
                    className="w-full border border-dashed border-gray-300 rounded-xl py-2 text-sm text-gray-400 hover:text-blue-600 hover:border-blue-400 transition-colors"
                  >
                    + Add another question
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => handleSave(false)}
                  disabled={saving}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-200 disabled:opacity-50 transition-colors"
                >
                  <Save size={16} />
                  {saving ? "Saving…" : editingPost ? "Save Changes" : "Save as Draft"}
                </button>
                <button
                  onClick={() => handleSave(true)}
                  disabled={saving}
                  className="flex items-center gap-2 bg-[#001F3F] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-900 disabled:opacity-50 transition-colors"
                >
                  <CheckCircle size={16} />
                  {saving ? "Publishing…" : "Publish Now"}
                </button>
                <button
                  onClick={closeEditor}
                  className="ml-auto text-gray-400 hover:text-gray-600 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Drafts */}
        {drafts.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-[#001F3F] mb-4 text-lg">Drafts ({drafts.length})</h2>
            <div className="space-y-3">
              {drafts.map((post) => (
                <PostRow
                  key={post.id}
                  post={post}
                  loading={loadingId === post.id}
                  onEdit={openEditEditor}
                  onToggle={handleStatusToggle}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        )}

        {/* Published */}
        <div>
          <h2 className="font-bold text-[#001F3F] mb-4 text-lg">Published ({published.length})</h2>
          {published.length > 0 ? (
            <div className="space-y-3">
              {published.map((post) => (
                <PostRow
                  key={post.id}
                  post={post}
                  loading={loadingId === post.id}
                  onEdit={openEditEditor}
                  onToggle={handleStatusToggle}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border p-8 text-center text-gray-400">
              No published posts yet. Write one above!
            </div>
          )}
        </div>

        {/* Trash */}
        {trashed.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Trash2 size={16} className="text-red-400" />
              <h2 className="font-bold text-red-500 text-lg">Trash ({trashed.length})</h2>
              <span className="text-xs text-gray-400 ml-1">— Posts here are NOT visible on your site</span>
            </div>
            <div className="space-y-3">
              {trashed.map((post) => (
                <div key={post.id} className="bg-white rounded-xl border border-red-100 shadow-sm p-4 flex items-start gap-4 opacity-75">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-500 text-sm line-clamp-1 line-through">{post.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">
                      {post.category} · {new Date(post.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleRestore(post)}
                      disabled={loadingId === post.id}
                      className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg font-medium bg-green-50 text-green-700 hover:bg-green-100 disabled:opacity-50 transition-colors"
                      title="Restore to drafts"
                    >
                      <RotateCcw size={12} /> Restore
                    </button>
                    <button
                      onClick={() => handlePermanentDelete(post)}
                      disabled={loadingId === post.id}
                      className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg font-medium bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50 transition-colors"
                      title="Delete permanently"
                    >
                      <AlertTriangle size={12} /> Delete Forever
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data safety notice */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-amber-800 mb-1">Keep your data safe</p>
            <p className="text-amber-700">
              Download a backup regularly using the <strong>Backup</strong> button in the header.
              {' '}If you are on Supabase free plan, your database may pause after 1 week of no traffic — upgrade to Pro to prevent this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostRow({
  post,
  loading,
  onEdit,
  onToggle,
  onDelete,
}: {
  post: BlogPost;
  loading: boolean;
  onEdit: (p: BlogPost) => void;
  onToggle: (p: BlogPost) => void;
  onDelete: (p: BlogPost) => void;
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 flex items-start gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            post.status === "published" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
          }`}>
            {post.status}
          </span>
          <span className="text-xs text-gray-400">{post.category}</span>
        </div>
        <p className="font-semibold text-[#001F3F] text-sm line-clamp-1">{post.title}</p>
        <p className="text-gray-400 text-xs mt-0.5">
          {post.author && <span className="mr-2">by {post.author}</span>}
          {post.focus_keyword && <span className="mr-2">· {post.focus_keyword}</span>}
          {new Date(post.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {post.status === "published" && (
          <a
            href={`/blog/${post.slug}/`}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"
            title="View live"
          >
            <Eye size={16} />
          </a>
        )}
        <button
          onClick={() => onEdit(post)}
          disabled={loading}
          className="p-1.5 text-gray-400 hover:text-[#001F3F] transition-colors disabled:opacity-50"
          title="Edit post"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => onToggle(post)}
          disabled={loading}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 ${
            post.status === "published"
              ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
              : "bg-green-50 text-green-700 hover:bg-green-100"
          }`}
        >
          {post.status === "published" ? "Unpublish" : "Publish"}
        </button>
        <button
          onClick={() => onDelete(post)}
          disabled={loading}
          className="p-1.5 text-gray-300 hover:text-red-500 transition-colors disabled:opacity-50"
          title="Delete post"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
