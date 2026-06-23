import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight, CheckCircle2, BookOpen, MapPin, Clock, Award } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Free IELTS Classes | Kathmandu Baneshwor',
  description: 'Free IELTS preparation classes in Baneshwor, Kathmandu. IELTS preparation without tuition fee. Best IELTS institute in Nepal. 4-week program, mock tests, speaking practice. Enroll now.',
  keywords: 'IELTS preparation classes in Nepal, free IELTS classes in Kathmandu, best IELTS institute in Nepal, IELTS preparation near Baneshwor, IELTS course fee in Nepal, IELTS classes near me Kathmandu',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/free-ielts-preparation-baneshwor/',
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/free-ielts-preparation-baneshwor/',
    title: 'Free IELTS Classes in Baneshwor Kathmandu | No Tuition Fee - San Marina',
    description: 'IELTS preparation without tuition fee. 4-week program near Baneshwor. Best IELTS institute in Nepal.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free IELTS Preparation Baneshwor | Best IELTS Institute Nepal',
    description: 'IELTS preparation classes in Nepal. Free IELTS classes in Kathmandu.',
  },
};

const pageData = {
  lastUpdated: 'February 2026',
  location: {
    name: 'Baneshwor Branch',
    area: 'Baneshwor, Kathmandu',
    fullAddress: 'Baneshwor, Kathmandu, Nepal',
    nearMeKeywords: 'IELTS preparation near Baneshwor, IELTS classes near me Kathmandu',
  },
  fourWeekProgram: [
    { week: 1, focus: 'Listening & Reading', desc: 'Format overview, question types, time management, practice tasks' },
    { week: 2, focus: 'Writing Task 1 & 2', desc: 'Structure, vocabulary, coherence, sample essays and review' },
    { week: 3, focus: 'Speaking', desc: 'Part 1, 2, 3 practice, fluency, pronunciation, mock interviews' },
    { week: 4, focus: 'Full Mock Tests & Revision', desc: 'Complete practice tests, band score feedback, weak area revision' },
  ],
  examFormat: [
    { section: 'Listening', duration: '30 min', tasks: '4 sections, 40 questions' },
    { section: 'Reading', duration: '60 min', tasks: '3 passages, 40 questions' },
    { section: 'Writing', duration: '60 min', tasks: 'Task 1 (150 words), Task 2 (250 words)' },
    { section: 'Speaking', duration: '11–14 min', tasks: 'Part 1, 2, 3 with examiner' },
  ],
  trustStats: [
    { value: '1,500+', label: 'Students trained' },
    { value: 'Free', label: 'No tuition fee' },
    { value: '4 weeks', label: 'Structured program' },
    { value: 'Top 5', label: 'Consultancy in Nepal' },
  ],
  faqs: [
    {
      question: 'Is free IELTS preparation really free?',
      answer: 'Yes. San Marina offers IELTS preparation without tuition fee at our Baneshwor branch. The free IELTS classes in Kathmandu include structured lessons, practice materials, and mock test opportunities. Some materials (e.g. official Cambridge books) may incur a small cost if you choose to purchase—we will clarify during enrollment. The core program is free to help Nepali students access quality IELTS preparation classes in Nepal.',
    },
    {
      question: 'How to score 7+ in IELTS in one month?',
      answer: 'Scoring 7+ in one month requires focused practice. Our 4-week free IELTS program covers all sections: Listening, Reading, Writing, Speaking. Key tips: practice daily (at least 2 hours), take mock tests weekly, work on weak areas identified by feedback, use official materials, and follow the structured plan. Many students improve 0.5–1 band with consistent effort. We provide IELTS preparation near Baneshwor with expert guidance.',
    },
    {
      question: 'Can I prepare IELTS in 4 weeks?',
      answer: 'Yes. A 4-week IELTS preparation timeline is realistic if you are disciplined. Our free IELTS preparation Baneshwor program is structured for 4 weeks: Week 1 Listening & Reading, Week 2 Writing, Week 3 Speaking, Week 4 mock tests and revision. Your starting level matters—if you are already at 6.0+, 4 weeks can get you to 6.5–7.0. We assess your level and suggest a plan during enrollment.',
    },
    {
      question: 'Which IELTS is better paper or computer?',
      answer: 'Both formats are equally valid. Paper-based IELTS suits those who prefer writing by hand (especially for Writing). Computer-delivered IELTS offers faster results (3–5 days vs 13 days) and on-screen formatting. Choose based on preference—content and scoring are identical. Our free IELTS classes in Kathmandu cover strategies for both formats. We recommend checking test centre availability in Nepal.',
    },
    {
      question: 'What is the IELTS course fee in Nepal?',
      answer: 'IELTS course fee in Nepal varies by institute. San Marina offers IELTS preparation without tuition fee at our Baneshwor branch—our free IELTS classes in Kathmandu are part of our commitment to students. The official IELTS exam fee (paid to British Council or IDP) is separate and applies regardless of where you prepare. We provide free coaching; you pay only the test fee when you book your exam.',
    },
    {
      question: 'Where are the free IELTS classes in Kathmandu held?',
      answer: 'Our free IELTS classes are held at our Baneshwor branch in Kathmandu. IELTS preparation near Baneshwor is convenient for students from Baneshwor, Putalisadak, Koteshwor, and surrounding areas. We also offer IELTS classes near me options—search for "IELTS classes near me Kathmandu" to find us. Visit or contact us for exact address and batch timings.',
    },
    {
      question: 'How to get 7.5 band in IELTS Nepal?',
      answer: 'To get 7.5 band in IELTS Nepal: understand each section format, practice with official materials, take mock tests regularly, work on vocabulary and grammar (especially Writing), practice IELTS speaking with partners or trainers, and manage time in Reading. Our free IELTS preparation Baneshwor program targets all four sections. Many students achieve 7.0–7.5 with 4–6 weeks of focused preparation.',
    },
    {
      question: 'Is there IELTS mock test free in Nepal?',
      answer: 'Yes. San Marina offers IELTS mock test free for enrolled students at our Baneshwor branch. Mock tests help you gauge your level, practice under exam conditions, and identify weak areas. We provide feedback on your band score. Enroll in our free IELTS preparation to access mock tests. Some standalone mock tests may have a nominal fee—check with us when you book.',
    },
    {
      question: 'What does IELTS speaking practice in Nepal include?',
      answer: 'IELTS speaking practice in Nepal at San Marina includes: Part 1 (intro/familiar topics), Part 2 (long turn/Cue Card), Part 3 (discussion). We cover common topics, vocabulary, fluency tips, and pronunciation. Students practice with trainers and peers. Mock speaking tests with feedback are part of our 4-week program. Best IELTS institute in Nepal offers structured speaking sessions.',
    },
    {
      question: 'What are the IELTS preparation classes in Nepal timings?',
      answer: 'IELTS preparation classes in Nepal at San Marina Baneshwor are scheduled in batches. Typical timings include morning and evening slots to suit students. Contact us via WhatsApp or consultation form for current batch schedule. We aim to accommodate working professionals and +2 students. IELTS preparation near Baneshwor—flexible and free.',
    },
    {
      question: 'How do I enroll in free IELTS preparation?',
      answer: 'Enroll via: 1) Our consultation form on the website, 2) WhatsApp +977 015927731, 3) Visit our Baneshwor office. Mention "Free IELTS Baneshwor" when booking. We confirm your slot and share batch details. No obligation—just register to secure your place. Limited seats per batch.',
    },
    {
      question: 'Why choose San Marina for IELTS preparation in Nepal?',
      answer: 'San Marina is among the best IELTS institute in Nepal—Top 5 education consultancy, QEAC certified, 1,500+ students trained. We offer IELTS preparation without tuition fee at Baneshwor, structured 4-week program, mock tests, speaking practice, and expert trainers. Convenient location—IELTS preparation near Baneshwor, IELTS classes near me Kathmandu. Free enrollment for qualified students.',
    },
  ],
};

export default function FreeIELTSPreparationBaneshworPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Free IELTS Preparation Baneshwor',
        description: 'Free IELTS preparation classes in Kathmandu. IELTS preparation without tuition fee. 4-week program, mock tests, speaking practice.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          telephone: '+977015927731',
        },
        areaServed: { '@type': 'City', name: 'Kathmandu', containedInPlace: { '@type': 'Country', name: 'Nepal' } },
        serviceType: 'IELTS Preparation',
      },
      {
        '@type': 'LocalBusiness',
        name: 'San Marina Education Consultancy - Baneshwor',
        description: 'Free IELTS preparation classes. Best IELTS institute in Nepal. IELTS preparation near Baneshwor.',
        url: 'https://www.sanmarina.edu.np/services/free-ielts-preparation-baneshwor/',
        telephone: '+977015927731',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Baneshwor',
          addressRegion: 'Kathmandu',
          addressCountry: 'NP',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 27.6870,
          longitude: 85.3179,
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: pageData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.sanmarina.edu.np/services/' },
          { '@type': 'ListItem', position: 3, name: 'Free IELTS Preparation Baneshwor', item: 'https://www.sanmarina.edu.np/services/free-ielts-preparation-baneshwor/' },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyCTA />

      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#001F3F] via-[#002244] to-[#001a33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/services/" className="hover:text-white">Services</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/services/test-prep/ielts/" className="hover:text-white">IELTS</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Free IELTS – Baneshwor</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Free IELTS Preparation in Kathmandu
            <br />
            <span className="text-blue-300">IELTS Classes Near Baneshwor – No Tuition Fee</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            IELTS preparation classes in Nepal without tuition fee. Best IELTS institute in Nepal. 4-week program, mock tests, IELTS speaking practice. Enroll at our Baneshwor branch.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/977015927731?text=Hi%2C%20I%20want%20to%20enroll%20in%20Free%20IELTS%20Baneshwor" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /> WhatsApp – Enroll Free
            </a>
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Quick Answer</h2>
          <p className="text-gray-700 mb-4">
            <strong>Free IELTS preparation Baneshwor:</strong> San Marina offers IELTS preparation without tuition fee at our Baneshwor branch in Kathmandu. Best IELTS institute in Nepal—4-week structured program covering Listening, Reading, Writing, Speaking. Includes IELTS mock test free for enrolled students, IELTS speaking practice, and expert feedback. IELTS preparation near Baneshwor. IELTS classes near me Kathmandu. Enroll via website or WhatsApp.
          </p>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>IELTS preparation classes in Nepal – no tuition fee</li>
            <li>4-week program, mock tests, speaking practice</li>
            <li>Location: Baneshwor, Kathmandu</li>
          </ul>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pageData.trustStats.map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="text-[#001F3F]">
                  {i === 0 && <Award size={28} />}
                  {i === 1 && <BookOpen size={28} />}
                  {i === 2 && <Clock size={28} />}
                  {i === 3 && <CheckCircle2 size={28} />}
                </div>
                <div>
                  <p className="text-xl font-bold text-[#001F3F]">{s.value}</p>
                  <p className="text-sm text-gray-600">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO – Location */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">IELTS Preparation Near Baneshwor</h2>
          <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
            <MapPin className="text-[#001F3F] shrink-0" size={32} />
            <div>
              <p className="font-bold text-[#001F3F] mb-2">{pageData.location.name}</p>
              <p className="text-gray-700">{pageData.location.area} · Kathmandu, Nepal</p>
              <p className="text-sm text-gray-600 mt-2">
                {pageData.location.nearMeKeywords}. Search &quot;IELTS classes near me Kathmandu&quot; to find us. Contact for exact address and directions.
              </p>
              <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                Get directions via WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Week Program */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">4-Week IELTS Program Structure</h2>
        <div className="space-y-6">
          {pageData.fourWeekProgram.map((w) => (
            <div key={w.week} className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#001F3F] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                {w.week}
              </div>
              <div>
                <h3 className="font-bold text-[#001F3F] mb-1">Week {w.week}: {w.focus}</h3>
                <p className="text-gray-600 text-sm">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4">
          How to get 7.5 band in IELTS Nepal: Follow the program, practice daily, take mock tests. Many students improve in 4 weeks.
        </p>
      </section>

      {/* Exam Format */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">IELTS Examination Format</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-3">Section</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Tasks</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {pageData.examFormat.map((r, i) => (
                  <tr key={i} className="border-b last:border-b-0">
                    <td className="p-3 font-semibold">{r.section}</td>
                    <td className="p-3">{r.duration}</td>
                    <td className="p-3">{r.tasks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Paper-based or computer-delivered—both formats available in Nepal. Our free IELTS preparation covers strategies for both.
          </p>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Enroll in Free IELTS Classes Today</h2>
          <p className="text-blue-200 mb-6">
            IELTS preparation without tuition fee. Limited seats per batch. Book your slot at our Baneshwor branch.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Enroll Now – Free
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp – Enroll
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links – Connect to test-prep/ielts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-6">More IELTS Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/services/test-prep/ielts/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors border-2 border-blue-200">
              Full IELTS Prep Guide →
            </Link>
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Book Consultation</Link>
            <Link href="/services/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">All Services</Link>
            <Link href="/blog/ielts-preparation-tips/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">IELTS Tips Blog</Link>
            <Link href="/study-abroad/aus/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Study in Australia</Link>
            <Link href="/contact/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={pageData.faqs} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your IELTS Journey – Free</h2>
          <p className="text-blue-200 mb-8">
            Best IELTS institute in Nepal. IELTS preparation near Baneshwor. No tuition fee. Enroll today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Enroll Now – Free
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
