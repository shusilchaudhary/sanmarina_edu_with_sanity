'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, X } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400 && !dismissed) setVisible(true);
      if (scrollY < 200) setVisible(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <button onClick={() => setDismissed(true)} className="absolute top-2 right-3 text-gray-400 hover:text-gray-600" aria-label="Close">
        <X size={20} />
      </button>
      <div className="flex gap-3">
        <Link href="/consultation/" className="flex-1 py-3 px-4 rounded-xl bg-[#001F3F] text-white font-semibold text-center text-sm">
          Book Free Test
        </Link>
        <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-center text-sm inline-flex items-center justify-center gap-2">
          <Phone size={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
