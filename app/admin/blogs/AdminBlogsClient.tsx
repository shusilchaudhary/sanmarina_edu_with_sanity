"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, RefreshCw, Eye, Trash2, CheckCircle, XCircle, ExternalLink, Bot, LogOut } from "lucide-react";
import type { BlogPost } from "@/lib/supabase";

interface Props {
  initialPosts: BlogPost[];
}

export default function AdminBlogsClient({ initialPosts }: Props) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [generating, setGenerating] = useState(false);
  const [generateTopic, setGenerateTopic] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const adminSecret = typeof window !== "undefined"
    ? document.cookie.match(/admin_auth=([^;]+)/)?.[1] ?? ""
    : "";

  function showMessage(type: "success" | "error", text: string) {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  }

  async function handleGenerate() {
    setGenerating(true);
    try {
      const res = await fetch("/api/generate-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminSecret}`,
        },
        body: JSON.stringify({
          topic: generateTopic || undefined,
          auto_publish: false,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      showMessage("success", `Generated: "${data.post.title}"`);
      setGenerateTopic("");
      // Refresh posts
      const refreshed = await fetch("/api/admin/posts", {
        headers: { Authorization: `Bearer ${adminSecret}` },
      });
      if (refreshed.ok) setPosts(await refreshed.json());
      else window.location.reload();
    } catch (err: any) {
      showMessage("error", err.message);
    } finally {
      setGenerating(false);
    }
  }

  async function handleStatusToggle(post: BlogPost) {
    setLoadingId(post.id);
    const newStatus = post.status === "published" ? "draft" : "published";
    try {
      const res = await fetch(`/api/admin/posts/${post.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminSecret}`,
        },
        body: JSON.stringify({
          status: newStatus,
          published_at: newStatus === "published" ? new Date().toISOString() : null,
        }),
      });
      if (!res.ok) throw new Error("Update failed");
      setPosts((prev) =>
        prev.map((p) => (p.id === post.id ? { ...p, status: newStatus } : p))
      );
      showMessage("success", `Post ${newStatus === "published" ? "published" : "unpublished"}.`);
    } catch (err: any) {
      showMessage("error", err.message);
    } finally {
      setLoadingId(null);
    }
  }

  async function handleDelete(post: BlogPost) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setLoadingId(post.id);
    try {
      const res = await fetch(`/api/admin/posts/${post.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${adminSecret}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
      showMessage("success", "Post deleted.");
    } catch (err: any) {
      showMessage("error", err.message);
    } finally {
      setLoadingId(null);
    }
  }

  const published = posts.filter((p) => p.status === "published");
  const drafts = posts.filter((p) => p.status === "draft");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#001F3F] text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">San Marina — Blog Admin</h1>
          <p className="text-blue-300 text-sm">AI-powered blog management</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-blue-300 hover:text-white text-sm flex items-center gap-1">
            <ExternalLink size={14} /> View Site
          </Link>
          <Link
            href="/api/admin/logout"
            className="text-blue-300 hover:text-white text-sm flex items-center gap-1"
          >
            <LogOut size={14} /> Logout
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Status message */}
        {message && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
            message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
          }`}>
            {message.type === "success" ? <CheckCircle size={18} /> : <XCircle size={18} />}
            {message.text}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <p className="text-2xl font-bold text-[#001F3F]">{posts.length}</p>
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
        </div>

        {/* Generate New Post */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-8">
          <h2 className="font-bold text-[#001F3F] mb-4 flex items-center gap-2">
            <Bot size={20} /> Generate AI Blog Post
          </h2>
          <div className="flex gap-3">
            <input
              type="text"
              value={generateTopic}
              onChange={(e) => setGenerateTopic(e.target.value)}
              placeholder="Optional: specific topic (leave blank to auto-pick)"
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="flex items-center gap-2 bg-[#001F3F] text-white px-5 py-2 rounded-xl font-semibold text-sm hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {generating ? (
                <><RefreshCw size={16} className="animate-spin" /> Generating...</>
              ) : (
                <><Plus size={16} /> Generate Post</>
              )}
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            AI analyzes competitor sites and generates an SEO/AEO/GEO-optimized post. Saved as draft for review.
          </p>
        </div>

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
                  onToggle={handleStatusToggle}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border p-8 text-center text-gray-400">
              No published posts yet. Generate one above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PostRow({
  post,
  loading,
  onToggle,
  onDelete,
}: {
  post: BlogPost;
  loading: boolean;
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
          {post.ai_generated && (
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Bot size={10} /> AI
            </span>
          )}
          <span className="text-xs text-gray-400">{post.category}</span>
        </div>
        <p className="font-semibold text-[#001F3F] text-sm line-clamp-1">{post.title}</p>
        <p className="text-gray-400 text-xs mt-0.5">
          {post.focus_keyword && <span className="mr-2">🔑 {post.focus_keyword}</span>}
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
