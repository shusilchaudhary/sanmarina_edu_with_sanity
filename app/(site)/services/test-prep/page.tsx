import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Test Preparation | IELTS, PTE, TOEFL Nepal - San Marina',
  description: 'IELTS, PTE, TOEFL preparation in Nepal. Free IELTS classes in Kathmandu at Baneshwor.',
  alternates: { canonical: 'https://www.sanmarina.edu.np/services/test-prep/' },
};

export default function TestPrepPage() {
  const tests = [
    { id: 'ielts', name: 'IELTS', desc: 'Free IELTS classes at Baneshwor. Best IELTS institute in Nepal.', href: '/services/test-prep/ielts/' },
    { id: 'german', name: 'German Language', desc: 'German language classes in Itahari. A1–B2. Goethe exam preparation. German for Germany student visa.', href: '/services/test-prep/german/' },
    { id: 'japanese', name: 'Japanese Language (JLPT)', desc: 'Japanese language classes in Nepal. JLPT preparation Nepal. Free N4 N5 at Baneshwor by Prajwal sir.', href: '/services/test-prep/japanese/' },
  ];
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 pb-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Test Preparation</h1>
          <p className="text-blue-100">IELTS, PTE, TOEFL. Free IELTS classes in Kathmandu.</p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          {tests.map((t) => (
            <Link key={t.id} href={t.href} className="block p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <BookOpen className="text-[#001F3F]" size={32} />
                  <div>
                    <h2 className="text-xl font-bold text-[#001F3F]">{t.name}</h2>
                    <p className="text-gray-600">{t.desc}</p>
                  </div>
                </div>
                <ArrowRight size={24} className="text-[#001F3F]" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
