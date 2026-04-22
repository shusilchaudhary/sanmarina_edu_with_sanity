"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#001F3F] text-white px-4 py-4 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-blue-100 flex-1 leading-relaxed">
          We use cookies to improve your experience and analyse site traffic. By clicking{" "}
          <strong className="text-white">Accept</strong>, you agree to our use of cookies.{" "}
          <Link href="/privacy-policy/" className="underline text-blue-300 hover:text-white">
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link href="/terms/" className="underline text-blue-300 hover:text-white">
            Terms
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium border border-blue-400 text-blue-200 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold bg-white text-[#001F3F] rounded-lg hover:bg-blue-50 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
