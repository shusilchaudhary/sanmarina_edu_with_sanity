"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Users, Star, Settings, ExternalLink, LogOut, Download } from "lucide-react";

const NAV = [
  { href: "/admin/blogs",        label: "Blogs",         icon: FileText },
  { href: "/admin/team",         label: "Team",          icon: Users },
  { href: "/admin/testimonials", label: "Testimonials",  icon: Star },
  { href: "/admin/settings",     label: "Settings",      icon: Settings },
];

export default function AdminNav() {
  const pathname = usePathname();

  async function handleBackup() {
    const secret = sessionStorage.getItem("admin_secret") ?? "sanmarina2026";
    const res = await fetch("/api/admin/export", { headers: { Authorization: `Bearer ${secret}` } });
    if (!res.ok) return;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sanmarina-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <nav className="bg-[#001F3F] text-white px-4 py-3 flex items-center gap-2 shadow-lg sticky top-0 z-50">
      <span className="font-bold text-sm whitespace-nowrap mr-2 hidden sm:block">San Marina CMS</span>
      <div className="flex gap-1 flex-1 overflow-x-auto">
        {NAV.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              pathname.startsWith(href)
                ? "bg-white/20 text-white"
                : "text-blue-200 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon size={15} />
            {label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 ml-2 shrink-0">
        <Link href="/" target="_blank" className="text-blue-300 hover:text-white text-xs flex items-center gap-1 hidden sm:flex">
          <ExternalLink size={13} /> Site
        </Link>
        <button onClick={handleBackup} className="text-blue-300 hover:text-white text-xs flex items-center gap-1 hidden sm:flex">
          <Download size={13} /> Backup
        </button>
        <Link href="/api/admin/logout" className="text-blue-300 hover:text-white text-xs flex items-center gap-1">
          <LogOut size={13} /> Logout
        </Link>
      </div>
    </nav>
  );
}
