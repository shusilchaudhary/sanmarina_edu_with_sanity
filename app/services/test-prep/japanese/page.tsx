import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  MapPin,
  Award,
  Target,
  FileCheck,
  MessageCircle,
  GraduationCap,
  Zap,
  User,
} from 'lucide-react';
import FAQAccordion from '../../admission/components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Japanese Language Classes in Nepal | JLPT N5–N3 Preparation – San Marina',
  description:
    'Japanese language classes in Nepal. JLPT preparation Nepal. Free N4 N5 Japanese course at Baneshwor by Prajwal sir. Japanese for Japan student visa. Enroll now.',
  keywords:
    'Japanese language classes in Nepal, JLPT preparation Nepal, Japanese language course in Nepal, Japanese language institute in Nepal, N5 Japanese course in Nepal, N4 Japanese course Nepal, Japanese language course fee in Nepal, learn Japanese for study in Japan, JLPT exam preparation Nepal, Japanese language training near me, Japanese language for Japan student visa',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/test-prep/japanese/',
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/test-prep/japanese/',
    title: 'Japanese Language Classes Nepal | JLPT Preparation – San Marina',
        description: 'Japanese language classes in Nepal. JLPT preparation Nepal. Free N4 N5 Japanese at Baneshwor by Prajwal sir.',
        siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japanese Language Classes Nepal | JLPT Preparation',
    description: 'Japanese language classes in Nepal. JLPT preparation Nepal. Free N4 N5 at Baneshwor.',
  },
  other: {
    'geo.region': 'NP-BA',
    'geo.placename': 'Kathmandu, Nepal',
    'geo.position': '27.6878;85.3494',
    ICBM: '27.6878, 85.3494',
  },
};

const pageData = {
  lastUpdated: 'February 2026',
  trustStats: [
    { value: '300+', label: 'Students trained' },
    { value: 'N5–N3', label: 'Course levels' },
    { value: '94%', label: 'Visa success rate' },
    { value: 'Top', label: 'Consultancy in Nepal' },
  ],
  courseLevels: [
    { level: 'N5', desc: 'Beginner. Hiragana, Katakana, basic Kanji, everyday expressions. Japanese language for Japan student visa foundation.', duration: '~3–4 months' },
    { level: 'N4', desc: 'Elementary. More Kanji, basic reading. Often required for language schools and some vocational programmes.', duration: '~3–4 months' },
    { level: 'N3', desc: 'Intermediate. Daily-life Japanese, newspaper headlines. Useful for higher education and work.', duration: '~4–6 months' },
  ],
  trainingStructure: [
    { phase: 1, focus: 'Hiragana & Katakana Foundation', desc: 'Master both syllabaries. Reading, writing, pronunciation. JLPT preparation Nepal foundation.' },
    { phase: 2, focus: 'Kanji Basics', desc: 'Essential Kanji for N5–N3. Reading and recognition. N5 Japanese course in Nepal, N4 Japanese course Nepal progression.' },
    { phase: 3, focus: 'Speaking Practice', desc: 'Conversation, listening, JLPT-style oral. Japanese language training near me with certified instructors.' },
    { phase: 4, focus: 'JLPT Mock Exams', desc: 'JLPT exam preparation Nepal. Timed practice for Vocabulary, Grammar, Reading, Listening. Real exam format.' },
    { phase: 5, focus: 'Visa-Focused Preparation', desc: 'Japanese language for Japan student visa. Required levels, COE preparation, embassy interview tips.' },
  ],
  whyChoose: [
    { icon: GraduationCap, title: 'Certified Instructors', desc: 'Qualified and experienced Japanese language teachers' },
    { icon: Target, title: 'Small Batch Size', desc: 'Max 10–12 students for personalized attention' },
    { icon: User, title: 'Japan-Focused Counselling', desc: 'Study in Japan, work visa, and career guidance' },
    { icon: CheckCircle2, title: 'Admission + Visa Guidance', desc: 'University application, COE, and visa documentation support' },
  ],
  beyondSupport: [
    { title: 'Japan University Application Support', desc: 'Help selecting universities and language schools in Japan' },
    { title: 'COE (Certificate of Eligibility) Guidance', desc: 'COE application support for Japan student visa' },
    { title: 'Visa Documentation Support', desc: 'Document checklist, attestation, embassy requirements' },
  ],
  faqs: [
    {
      question: 'Is Japanese language required to study in Japan?',
      answer:
        'It depends. Language schools in Japan typically require N5 or basic Japanese for enrollment. Universities may require N2–N1 for Japanese-taught programmes. English-taught programmes exist but basic Japanese (N5–N4) helps for daily life. Japanese language for Japan student visa—our Japanese language classes in Nepal prepare you for all paths. Learn Japanese for study in Japan at our Japanese language institute in Nepal.',
    },
    {
      question: 'How long does it take to complete N5 or N4?',
      answer:
        'N5 Japanese course in Nepal typically takes 3–4 months with regular classes (4–5 sessions/week). N4 Japanese course Nepal takes another 3–4 months. Total N5–N4: about 6–8 months. Our Japanese language course in Nepal at the Japanese language institute in Nepal follows a structured timeline. JLPT preparation Nepal.',
    },
    {
      question: 'What level of Japanese is required for Japan student visa?',
      answer:
        'For Japanese language for Japan student visa: language schools often require N5 or equivalent. Vocational schools may need N4. Universities (Japanese-taught) usually require N2 or N1. Our Japanese language preparation covers N5–N3. JLPT exam preparation Nepal at our Japanese language institute in Nepal.',
    },
    {
      question: 'Can I study in Japan without Japanese language?',
      answer:
        'Yes, for English-taught programmes. Some universities offer degrees in English. However, N5–N4 Japanese helps for daily life, part-time work (baito), and integration. Many students take a 1–2 year language course in Japan first. Our Japanese language classes in Nepal offer flexible paths. Learn Japanese for study in Japan.',
    },
    {
      question: 'How much does Japanese language course cost in Nepal?',
      answer:
        'Japanese language course fee in Nepal varies by institute and level. We offer free N4 and N5 Japanese classes at our Baneshwor branch by Prajwal sir. N3 and above are fee-based. Contact us for current Japanese language course fee in Nepal. Japanese language training near me.',
    },
    {
      question: 'Where are the free N4 N5 Japanese language classes in Baneshwor?',
      answer:
        'Free N4 and N5 Japanese language classes are conducted at our Baneshwor branch by Prajwal sir. Located at Beside Sky Bridge, 5th Floor, Baneshwor, Kathmandu. Japanese language training near me—convenient for Baneshwor, Putalisadak, Koteshwor. Contact 015927731 or WhatsApp for batch timings and enrollment.',
    },
    {
      question: 'Who is Prajwal sir and what does the free N4 N5 Japanese class include?',
      answer:
        'Prajwal sir is our experienced Japanese language instructor at the Baneshwor branch. The free N4 and N5 Japanese language class at Baneshwor covers Hiragana, Katakana, Kanji basics, vocabulary, and JLPT N5–N4 preparation. Only N4 and N5 are free; N3 and above are fee-based. Japanese language institute in Nepal. Limited seats; enroll early.',
    },
    {
      question: 'What is JLPT preparation Nepal?',
      answer:
        'JLPT preparation Nepal covers the Japanese-Language Proficiency Test (N5–N1). JLPT certificates are required for study and work in Japan. Our Japanese language institute in Nepal offers JLPT exam preparation Nepal with mock tests and structured practice. Japanese language classes in Nepal.',
    },
    {
      question: 'What are N5 Japanese course in Nepal and N4 Japanese course Nepal?',
      answer:
        'N5 and N4 are JLPT levels. N5 Japanese course in Nepal: beginner (Hiragana, Katakana, basic Kanji). N4 Japanese course Nepal: elementary (more Kanji, basic reading). Our Japanese language course in Nepal covers N5–N3. Japanese language institute in Nepal—structured N5 Japanese course in Nepal and N4 Japanese course Nepal.',
    },
    {
      question: 'Why choose San Marina for Japanese language in Nepal?',
      answer:
        'San Marina is a Top consultancy in Nepal with a dedicated Japanese language institute in Nepal. We offer Japanese language classes in Nepal with certified instructors, small batches, JLPT exam preparation Nepal, and free N4 N5 Japanese classes at Baneshwor by Prajwal sir. Japanese language for Japan student visa—admission and visa support included.',
    },
    {
      question: 'What level do I need for Japanese language school in Japan?',
      answer:
        'Most language schools in Japan require N5 or basic Japanese (equivalent to 150-hour course). Some accept complete beginners. Our Japanese language preparation for Japan includes N5 Japanese course in Nepal. Learn Japanese for study in Japan. Free N4 N5 Japanese classes at Baneshwor by Prajwal sir help you start.',
    },
    {
      question: 'What are the batch timings for Japanese language classes in Nepal?',
      answer:
        'Japanese language classes in Nepal run in morning and evening batches at our Baneshwor branch. Free N4 N5 classes by Prajwal sir have specific timings—contact us for schedule. Japanese language training near me. WhatsApp 9802372602 or call 015927731 for batch details. Limited seats per batch.',
    },
    {
      question: 'Is there Japanese language training near me in Kathmandu?',
      answer:
        'Yes. Our Japanese language institute in Nepal is at Baneshwor, Kathmandu. Japanese language training near me—convenient for Baneshwor, Putalisadak, Koteshwor, and surrounding areas. Japanese language classes in Nepal. Free N4 N5 classes at Baneshwor by Prajwal sir. Contact us for directions.',
    },
    {
      question: 'Do you offer visa support with Japanese language course?',
      answer:
        'Yes. Our Japanese language preparation for Japan includes visa documentation support. We help with COE (Certificate of Eligibility), university applications, and document checklist. Japanese language for Japan student visa. Japanese language institute in Nepal—end-to-end support from language to visa.',
    },
    {
      question: 'What is the JLPT exam format and when is it held?',
      answer:
        'JLPT has five levels (N1–N5). Exam sections: Vocabulary, Grammar, Reading, Listening. Held twice yearly (July, December) in Kathmandu. Our JLPT exam preparation Nepal covers the full format. Japanese language certification. See jlpt.jp for official details.',
    },
  ],
};

export default function JapaneseLanguagePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.sanmarina.edu.np/services/test-prep/japanese/#webpage',
        url: 'https://www.sanmarina.edu.np/services/test-prep/japanese/',
        name: 'Japanese Language Classes in Nepal | JLPT Preparation – San Marina',
        description: 'Japanese language classes in Nepal. JLPT preparation Nepal. N5–N3. Free N4 N5 at Baneshwor by Prajwal sir.',
        datePublished: '2025-01-15',
        dateModified: '2026-02-27',
        publisher: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
        },
      },
      {
        '@type': 'Service',
        name: 'Japanese Language Classes in Nepal',
        description: 'Japanese language course in Nepal. JLPT preparation Nepal. N5–N3. Free N4 N5 at Baneshwor by Prajwal sir. Japanese for Japan student visa.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          telephone: '+9779802372602',
        },
        areaServed: { '@type': 'City', name: 'Kathmandu', containedInPlace: { '@type': 'Country', name: 'Nepal' } },
        serviceType: 'Japanese Language Training',
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.sanmarina.edu.np/#baneshwor-japanese',
        name: 'San Marina Education Consultancy - Japanese Language Institute in Nepal',
        description: 'Japanese language classes in Nepal. JLPT preparation Nepal. Free N4 N5 at Baneshwor by Prajwal sir.',
        url: 'https://www.sanmarina.edu.np/services/test-prep/japanese/',
        telephone: '+97715927731',
        email: 'info@sanmarina.edu.np',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Baneshwor',
          addressRegion: 'Kathmandu',
          streetAddress: 'Beside Sky Bridge, 5th Floor',
          addressCountry: 'NP',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 27.687,
          longitude: 85.318,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        sameAs: [
          'https://www.facebook.com/profile.php?id=61578047634707',
          'https://www.instagram.com/sanmarinaeducation',
          'https://www.linkedin.com/company/san-marina-education-consultancy/',
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
          { '@type': 'ListItem', position: 3, name: 'Test Prep', item: 'https://www.sanmarina.edu.np/services/test-prep/' },
          { '@type': 'ListItem', position: 4, name: 'Japanese Language', item: 'https://www.sanmarina.edu.np/services/test-prep/japanese/' },
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
          <nav className="text-sm text-blue-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/services/" className="hover:text-white">Services</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/services/test-prep/" className="hover:text-white">Test Prep</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Japanese Language</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Japanese Language Classes in Nepal
            <br />
            <span className="text-blue-300">N5–N3 JLPT Preparation – Japanese for Japan Student Visa</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            Japanese language institute in Nepal. JLPT preparation Nepal. N5 Japanese course in Nepal, N4 Japanese course Nepal. Free N4 and N5 Japanese classes at Baneshwor branch by Prajwal sir. Japanese language training near me.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {pageData.trustStats.map((s, i) => (
              <div key={i} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-blue-200 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:015927731"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone size={18} /> Call Us
            </a>
            <a
              href="https://wa.me/9779802372602?text=Hi%2C%20I%20want%20to%20enroll%20in%20Japanese%20language%20classes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg"
            >
              <Phone size={18} /> WhatsApp Us
            </a>
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* Free Japanese Class – Baneshwor by Prajwal Sir */}
      <section className="py-12 bg-amber-50 border-b-2 border-amber-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white rounded-2xl shadow-lg">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#001F3F] mb-2">Free N4 & N5 Japanese Language Class at Baneshwor</h2>
              <p className="text-gray-700 mb-4">
                <strong>Free N4 and N5 Japanese language classes are going on at our Baneshwor branch by Prajwal sir.</strong> Hiragana, Katakana, Kanji basics, vocabulary—to start your JLPT preparation Nepal journey. Only N4 and N5 are free; N3 and above are fee-based. Japanese language institute in Nepal. Japanese language training near me. Limited seats.
              </p>
              <Link
                href="/consultation/"
                className="inline-flex items-center gap-2 bg-[#001F3F] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#002244] transition-colors"
              >
                Enroll Free – Baneshwor
              </Link>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={24} />
              <span>Beside Sky Bridge, 5th Floor · Baneshwor, Kathmandu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-6">Quick Answers</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">Is Japanese required for Japan?</h3>
              <p className="text-gray-700 text-sm">
                For language schools: usually N5 or basic Japanese. For Japanese-taught degrees: N2–N1. English-taught programmes exist but N5–N4 helps for daily life. Japanese language for Japan student visa depends on your path. Our Japanese language preparation covers all levels.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">What JLPT level is needed?</h3>
              <p className="text-gray-700 text-sm">
                Language schools: N5 or equivalent. Vocational: N4. Universities (Japanese-taught): N2–N1. Work visa: varies. Our JLPT preparation Nepal covers N5–N3. Japanese language institute in Nepal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">How long does it take?</h3>
              <p className="text-gray-700 text-sm">
                N5: 3–4 months. N4: 3–4 months. N3: 4–6 months. Full N5–N3: about 10–14 months with regular classes. Our Japanese language course in Nepal follows this timeline. N5 Japanese course in Nepal, N4 Japanese course Nepal at our Baneshwor branch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
          <BookOpen size={32} className="text-[#001F3F]" />
          Course Levels – N5, N4, N3
        </h2>
        <p className="text-gray-700 mb-8">
          N5 Japanese course in Nepal, N4 Japanese course Nepal, N3. Who needs which level? Japanese language for Japan student visa—depends on your programme. Japanese language institute in Nepal.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {pageData.courseLevels.map((c) => (
            <div key={c.level} className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#001F3F]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[#001F3F] text-xl">{c.level}</h3>
                <span className="text-sm text-gray-500">{c.duration}</span>
              </div>
              <p className="text-gray-700 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Training Structure */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 flex items-center gap-3">
            <Target size={28} className="text-[#001F3F]" />
            Training Structure
          </h2>
          <div className="space-y-6">
            {pageData.trainingStructure.map((t) => (
              <div key={t.phase} className="flex gap-6 p-6 bg-white rounded-xl">
                <div className="w-10 h-10 bg-[#001F3F] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {t.phase}
                </div>
                <div>
                  <h3 className="font-bold text-[#001F3F] mb-1">{t.focus}</h3>
                  <p className="text-gray-600 text-sm">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam & Certification */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
          <FileCheck size={28} className="text-[#001F3F]" />
          JLPT Exam &amp; Certification
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="font-bold text-[#001F3F] mb-2">JLPT (Japanese-Language Proficiency Test)</h3>
            <p className="text-gray-700 text-sm mb-2">
              JLPT has five levels: N1 (highest) to N5 (beginner). JLPT preparation Nepal at our Japanese language institute in Nepal covers N5–N3. Sections: Vocabulary, Grammar, Reading, Listening. Held twice yearly (July, December) in Kathmandu. JLPT exam preparation Nepal.
            </p>
            <a href="https://www.jlpt.jp" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline text-sm">
              JLPT Official Site →
            </a>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>Required levels:</strong> Language school N5; vocational N4; university (Japanese-taught) N2–N1. Japanese language for Japan student visa. Our JLPT preparation Nepal prepares you.
            </p>
          </div>
        </div>
      </section>

      {/* Local SEO – Baneshwor Branch */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Japanese Language Institute in Nepal – Baneshwor Branch</h2>
          <p className="text-gray-700 mb-6">
            Japanese language classes in Nepal. Japanese language training near me—Baneshwor. Free N4 N5 Japanese classes at Baneshwor branch by Prajwal sir. Japanese language institute in Nepal.
          </p>
          <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
            <MapPin className="text-[#001F3F] shrink-0" size={32} />
            <div>
              <p className="font-bold text-[#001F3F] mb-2">Baneshwor Branch – Japanese Language</p>
              <p className="text-gray-700">Beside Sky Bridge, 5th Floor · Baneshwor, Kathmandu, Nepal</p>
              <a href="tel:015927731" className="inline-flex items-center gap-1 mt-2 text-blue-600 font-semibold hover:underline">
                <Phone size={14} /> 015927731
              </a>
              <p className="text-sm text-gray-500 mt-2">
                NAP: San Marina Education Consultancy, Baneshwor, Kathmandu. Free N4 N5 classes by Prajwal sir. Japanese language training near me.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Opening hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM. <strong>Map:</strong> Search &quot;San Marina Baneshwor&quot; on Google Maps for directions.
              </p>
              <a
                href="https://wa.me/9779802372602?text=Hi%2C%20I%20need%20directions%20to%20your%20Baneshwor%20branch%20for%20Japanese%20classes"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Get directions via WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Why Choose Our Japanese Language Program?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pageData.whyChoose.map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
              <item.icon size={28} className="text-[#001F3F] shrink-0" />
              <div>
                <p className="font-bold text-[#001F3F] mb-1">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Language Training */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
            <Zap size={28} className="text-[#001F3F]" />
            Beyond Language Training
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pageData.beyondSupport.map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-blue-100">
                <h3 className="font-bold text-[#001F3F] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Limited Seats – Enroll Now</h2>
          <p className="text-amber-200 text-sm font-semibold mb-2">Free N4 N5 Japanese classes at Baneshwor by Prajwal sir. Next batch filling fast.</p>
          <p className="text-blue-200 mb-6">
            Japanese language classes in Nepal. JLPT preparation Nepal. N5 Japanese course in Nepal. Japanese language for Japan student visa. Japanese language institute in Nepal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-all"
            >
              Enroll Free – Baneshwor
            </Link>
            <a
              href="https://wa.me/9779802372602?text=Hi%2C%20I%20want%20to%20enroll%20in%20Japanese%20language%20classes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all"
            >
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-6">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/study-abroad/jp/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors border-2 border-blue-200">
              Study in Japan →
            </Link>
            <Link href="/services/test-prep/ielts/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              IELTS Preparation
            </Link>
            <Link href="/services/admission/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Admission Counselling
            </Link>
            <Link href="/services/test-prep/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              All Test Prep
            </Link>
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Book Consultation
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>External resources:</strong> <a href="https://www.jlpt.jp" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">JLPT Official</a>, <a href="https://www.studyinjapan.go.jp" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Study in Japan</a>, <a href="https://www.jasso.go.jp" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">JASSO</a>.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
            <MessageCircle size={28} className="text-[#001F3F]" />
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={pageData.faqs} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Japanese Journey – Japanese Language Institute in Nepal</h2>
          <p className="text-blue-200 mb-4">
            Free N4 N5 Japanese classes at Baneshwor by Prajwal sir. Japanese language classes in Nepal. JLPT preparation Nepal. Learn Japanese for study in Japan. Enroll today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-all"
            >
              Enroll Free – Baneshwor
            </Link>
            <a
              href="https://wa.me/9779802372602?text=Hi%2C%20I%20want%20to%20enroll%20in%20Japanese%20language%20classes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all"
            >
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
