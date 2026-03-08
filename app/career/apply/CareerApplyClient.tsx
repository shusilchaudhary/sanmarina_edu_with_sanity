'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JobApplicationForm from '@/components/JobApplicationForm';

function CareerApplyContent() {
  const searchParams = useSearchParams();
  const defaultPosition = searchParams.get('position') || '';

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F]">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/career/" className="hover:text-[#001F3F]">Careers</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-[#001F3F] font-medium">Apply</span>
          </nav>

          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Job Application
            </h1>
            <p className="text-gray-600 mb-8">
              Join our team and help students achieve their study abroad dreams.
            </p>

            <JobApplicationForm defaultPosition={defaultPosition} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default function CareerApplyClient() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </main>
    }>
      <CareerApplyContent />
    </Suspense>
  );
}
