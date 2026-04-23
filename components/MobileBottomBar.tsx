'use client';

import React from 'react';
import { Phone, CalendarClock } from 'lucide-react';
import Link from 'next/link';

const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] flex pb-safe">
      <a
        href="tel:9706987552"
        className="flex-1 flex flex-col items-center justify-center py-3 text-[#001F3F] hover:bg-gray-50 transition-colors border-r border-gray-200"
      >
        <Phone size={20} className="mb-1" />
        <span className="text-[11px] font-bold uppercase tracking-wider">Call Us</span>
      </a>
      <Link
        href="/consultation/"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-[#0056b3] text-white hover:bg-[#004494] transition-colors"
      >
        <CalendarClock size={20} className="mb-1" />
        <span className="text-[11px] font-bold uppercase tracking-wider">Enquire Now</span>
      </Link>
    </div>
  );
};

export default MobileBottomBar;
