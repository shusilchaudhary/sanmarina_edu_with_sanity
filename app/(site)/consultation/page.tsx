import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const ContactFormNative = dynamic(() => import('@/components/ContactFormNative'), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-gray-50 rounded-xl flex items-center justify-center">Loading form...</div>,
});
export const metadata: Metadata = {
  title: 'Free Study Abroad Consultation Nepal',
  description: 'Book free study abroad consultation in Kathmandu, Dang, Itahari. Expert guidance for Australia, UK, USA, Canada, Japan. No obligation. 1,500+ students placed.',
  keywords: 'free consultation study abroad nepal, study abroad consultation kathmandu, free counselling study abroad, book consultation san marina',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/consultation/',
  },
  openGraph: {
    title: 'Free Study Abroad Consultation | San Marina Nepal',
    description: 'Book free consultation. Expert guidance for Australia, UK, USA, Canada, Japan. No obligation.',
    url: 'https://www.sanmarina.edu.np/consultation/',
  },
};

const consultationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Book Free Consultation', item: 'https://www.sanmarina.edu.np/consultation/' },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to Book Free Study Abroad Consultation at San Marina',
      description: '4-step process: Profile assessment, destination guidance, roadmap planning, Q&A. 100% free, no obligation.',
      step: [
        { '@type': 'HowToStep', name: 'Profile Assessment', text: 'We evaluate your academic background, interests, and career goals.' },
        { '@type': 'HowToStep', name: 'Destination Guidance', text: 'Get recommendations on the best countries and universities for your profile.' },
        { '@type': 'HowToStep', name: 'Roadmap Planning', text: 'Receive a personalized timeline and action plan for your application.' },
        { '@type': 'HowToStep', name: 'Q&A Session', text: 'Ask any questions about admissions, visas, scholarships, and more.' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the study abroad consultation at San Marina free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. San Marina offers 100% free, no-obligation consultation for study abroad. Expert counselors guide you on Australia, UK, USA, Canada, Japan, and Europe.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens in a San Marina consultation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Profile assessment, destination guidance, roadmap planning, and Q&A. We evaluate your background and recommend the best countries and universities for your profile.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where can I book a free study abroad consultation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Online via the form on this page, or visit San Marina branches in Kathmandu (Tinkune, Baneshwor), Dang, or Itahari. Call 970-6987552.',
          },
        },
      ],
    },
  ],
};

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(consultationSchema) }} />
      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Book Free Consultation</span>
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
              Book Free Study Abroad Consultation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Take the first step towards your study abroad dream. Expert counselors for Australia, UK, USA, Canada, Japan & Europe. 100% free, no obligation.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">Visit our branches</Link>
              {' · '}
              <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">Explore destinations</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#001F3F] mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F3F] mb-1">Profile Assessment</h3>
                    <p className="text-gray-600">We&apos;ll evaluate your academic background, interests, and career goals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F3F] mb-1">Destination Guidance</h3>
                    <p className="text-gray-600">Get recommendations on the best countries and universities for your profile.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F3F] mb-1">Roadmap Planning</h3>
                    <p className="text-gray-600">Receive a personalized timeline and action plan for your application.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001F3F] mb-1">Q&A Session</h3>
                    <p className="text-gray-600">Ask any questions about admissions, visas, scholarships, and more.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-2xl">
                <h3 className="font-bold text-[#001F3F] mb-2">Why Choose Our Consultation?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ 100% Free - No hidden charges</li>
                  <li>✓ Expert counselors with 2+ years experience</li>
                  <li>✓ Personalized guidance for your profile</li>
                  <li>✓ Coverage of all major <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">destinations</Link></li>
                </ul>
              </div>

              {/* FAQ Section - AEO */}
              <div className="mt-10 space-y-4">
                <h3 className="font-bold text-[#001F3F] mb-3">Consultation FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-[#001F3F] text-sm">Is the consultation free?</p>
                    <p className="text-gray-600 text-sm">Yes. 100% free, no obligation. We guide you on Australia, UK, USA, Canada, Japan, Europe.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#001F3F] text-sm">What happens in the consultation?</p>
                    <p className="text-gray-600 text-sm">Profile assessment, destination guidance, roadmap planning, and Q&A on admissions, visas, scholarships.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#001F3F] text-sm">Can I visit in person?</p>
                    <p className="text-gray-600 text-sm">Yes. Visit our <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">4 branches</Link> in Kathmandu, Dang, or Itahari. Call 970-6987552.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#001F3F] mb-2">Book a Free Consultation</h2>
                <p className="text-gray-500 text-sm">Fill in your details and our experts will reach out to you.</p>
              </div>
              <Suspense fallback={null}>
                <ContactFormNative redirectPath="/consultation/" />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA / Internal Links */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            Explore <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">study abroad destinations</Link>
            , <Link href="/scholarships/" className="text-blue-600 font-semibold hover:underline">scholarships</Link>
            , and <Link href="/services/" className="text-blue-600 font-semibold hover:underline">our services</Link>.
          </p>
          <Link href="/contact/" className="inline-flex items-center px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#003366] transition-colors">
            Visit Our Office
          </Link>
        </div>
      </section>
    </main>
  );
}
