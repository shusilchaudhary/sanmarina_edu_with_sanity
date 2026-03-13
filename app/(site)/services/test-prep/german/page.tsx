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
  Globe,
} from 'lucide-react';
import FAQAccordion from '../../admission/components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'German Language Classes in Itahari | A1–B2 Course Nepal – San Marina',
  description:
    'German language classes in Itahari. German language course in Nepal. A1 A2 B1 German. Goethe exam preparation Nepal. German for Germany student visa. German language institute in Itahari. Enroll now.',
  keywords:
    'German language classes in Itahari, German language course in Nepal, German language institute in Itahari, A1 German course in Nepal, German language training near me, German language preparation for Germany, German language course fee in Nepal, learn German for study in Germany, Goethe exam preparation Nepal, German language certification Nepal, German A1 A2 B1 classes in Nepal, German language for Germany student visa',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/test-prep/german/',
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/test-prep/german/',
    title: 'German Language Classes Itahari | German Course Nepal - San Marina',
    description: 'German language classes in Itahari. German language course in Nepal. A1–B2. Goethe exam preparation. German for Germany student visa.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'German Language Classes Itahari | German Course Nepal',
    description: 'German language classes in Itahari. German language course in Nepal. Goethe exam preparation.',
  },
  other: {
    'geo.region': 'NP-P1',
    'geo.placename': 'Itahari, Sunsari, Nepal',
    'geo.position': '26.6640;87.2719',
    ICBM: '26.6640, 87.2719',
  },
};

const pageData = {
  lastUpdated: 'February 2026',
  trustStats: [
    { value: '400+', label: 'Students trained' },
    { value: 'A1–B2', label: 'Course levels' },
    { value: '95%', label: 'Visa success rate' },
    { value: 'Top', label: 'Consultancy in Nepal' },
  ],
  courseLevels: [
    { level: 'A1', desc: 'Beginner. Basic phrases, introductions, simple questions. German language for Germany student visa foundation.', duration: '~2–3 months' },
    { level: 'A2', desc: 'Elementary. Daily situations, travel, routine. Often required for language preparatory programmes.', duration: '~2–3 months' },
    { level: 'B1', desc: 'Intermediate. Main points, work, travel. Common for Studienkolleg and some degree programmes.', duration: '~3–4 months' },
    { level: 'B2', desc: 'Upper intermediate. Fluency for academic study. Required for direct admission to many German universities.', duration: '~3–4 months' },
  ],
  trainingStructure: [
    { phase: 1, focus: 'Grammar Foundation', desc: 'Core grammar for A1–B2. Articles, cases, verb conjugations, sentence structure. German language certification Nepal standards.' },
    { phase: 2, focus: 'Vocabulary Building', desc: 'Theme-based vocabulary for study and visa contexts. Academic and daily-life German.' },
    { phase: 3, focus: 'Speaking Practice', desc: 'Conversation, pronunciation, Goethe oral format. German language training near me—practice with certified trainers.' },
    { phase: 4, focus: 'Mock Goethe Exams', desc: 'Goethe exam preparation Nepal. Timed practice, listening, reading, writing, speaking. Real exam format.' },
    { phase: 5, focus: 'Visa-Focused Preparation', desc: 'German language for Germany student visa. Required levels, documentation, embassy interview tips.' },
  ],
  whyChoose: [
    { icon: GraduationCap, title: 'Certified Trainers', desc: 'Goethe- certified and experienced German teachers' },
    { icon: Target, title: 'Small Batch Size', desc: 'Max 10–12 students for personalized attention' },
    { icon: Globe, title: 'Germany-Focused Guidance', desc: 'Curriculum aligned with German university and visa requirements' },
    { icon: CheckCircle2, title: 'Admission + Visa Support', desc: 'University application and visa documentation guidance' },
  ],
  beyondSupport: [
    { title: 'University Application Guidance', desc: 'Help selecting universities, preparing applications for Germany' },
    { title: 'Block Account Guidance', desc: 'Blocked account setup (e.g. Fintiba, Coracle) for visa' },
    { title: 'Visa Documentation Support', desc: 'Document checklist, attestation, APS if required' },
  ],
  faqs: [
    {
      question: 'Is German language required to study in Germany?',
      answer:
        'It depends on the programme. Many German-taught Bachelor’s and Master’s require B2 or C1. English-taught programmes may require IELTS/TOEFL but often expect A2–B1 German for daily life. German language preparation for Germany is essential for most paths. Our German language classes in Itahari prepare you for both German-taught and English-taught routes. Learn German for study in Germany at our German language institute in Itahari.',
    },
    {
      question: 'How long does it take to complete A1 or A2 German?',
      answer:
        'A1 German typically takes 2–3 months with regular classes (3–4 sessions/week). A2 takes another 2–3 months. Total A1–A2: about 4–6 months. Our A1 German course in Nepal at the German language institute in Itahari follows a structured timeline. German language course in Nepal—contact us for exact duration based on your schedule.',
    },
    {
      question: 'What level of German is required for Germany student visa?',
      answer:
        'For German language for Germany student visa: Studienkolleg usually requires B1–B2. Direct university admission often needs B2 or C1 for German-taught programmes. Language course visa (to study German in Germany) may require A1 or A2. Our German language preparation for Germany covers all levels. Goethe exam preparation Nepal at our German language institute in Itahari.',
    },
    {
      question: 'Can I study in Germany without German language?',
      answer:
        'Yes, for English-taught programmes. Over 2,000 programmes are taught in English. However, A2–B1 German helps for daily life, part-time work, and networking. Some universities expect basic German. Our German language classes in Itahari offer flexible paths—full German or German alongside English programmes. Learn German for study in Germany.',
    },
    {
      question: 'How much does German language course cost in Nepal?',
      answer:
        'German language course fee in Nepal varies by institute and level. A1 German course in Nepal at San Marina Itahari is competitively priced. Contact us for current German language course fee in Nepal. We offer transparent pricing for German A1 A2 B1 classes in Nepal. German language training near me—enquire at our Itahari branch.',
    },
    {
      question: 'Where are the German language classes in Itahari?',
      answer:
        'Our German language institute in Itahari is at our Itahari branch in Sunsari. German language classes in Itahari—convenient for students from Itahari, Dharan, Biratnagar, and surrounding areas. German language training near me. Contact 980003731 or WhatsApp for exact address and batch timings.',
    },
    {
      question: 'What is Goethe exam preparation Nepal?',
      answer:
        'Goethe exam preparation Nepal covers the Goethe-Institut certificate exams (A1–C2). Goethe certificates are widely accepted for German university admission and visa. Our German language institute in Itahari offers Goethe exam preparation Nepal with mock tests and structured practice. German language certification Nepal—we prepare you for Goethe and TELC.',
    },
    {
      question: 'What are German A1 A2 B1 classes in Nepal?',
      answer:
        'German A1 A2 B1 classes in Nepal follow the Common European Framework (CEFR). A1: beginner. A2: elementary. B1: intermediate (often for Studienkolleg). Our German language course in Nepal covers all levels. German language institute in Itahari—structured German A1 A2 B1 classes in Nepal with certified trainers.',
    },
    {
      question: 'What is German language certification Nepal?',
      answer:
        'German language certification Nepal: Goethe-Institut and TELC offer internationally recognised certificates. Goethe A1–C2; TELC similar. Required for Germany student visa and university admission. Our Goethe exam preparation Nepal helps you achieve the level you need. German language certification Nepal—we guide you through exam booking and preparation.',
    },
    {
      question: 'Why choose San Marina for German language in Itahari?',
      answer:
        'San Marina is a Top consultancy in Nepal with a dedicated German language institute in Itahari. We offer German language classes in Itahari with certified trainers, small batches, Goethe exam preparation Nepal, and Germany-focused guidance. German language for Germany student visa—admission and visa support included. German language training near me.',
    },
    {
      question: 'What level do I need for Studienkolleg in Germany?',
      answer:
        'Studienkolleg typically requires B1 or B2 German, depending on the institution. Our German language preparation for Germany includes Studienkolleg-level preparation. German A1 A2 B1 classes in Nepal at our German language institute in Itahari build you up to B1/B2. Learn German for study in Germany.',
    },
    {
      question: 'What are the batch timings for German language classes in Itahari?',
      answer:
        'German language classes in Itahari run in morning and evening batches. Contact us for the current schedule. German language training near me—we offer flexible timings for +2 students and working professionals. German language institute in Itahari. WhatsApp 980003731 for batch details. Limited seats per batch.',
    },
    {
      question: 'Is there German language training near me in Eastern Nepal?',
      answer:
        'Yes. Our German language institute in Itahari serves Eastern Nepal—Itahari, Dharan, Biratnagar, and surrounding areas. German language training near me. German language classes in Itahari. German language course in Nepal. Contact us for directions and enrollment.',
    },
    {
      question: 'Do you offer visa support with German language course?',
      answer:
        'Yes. Our German language preparation for Germany includes visa documentation support. We help with block account, university applications, and document checklist. German language for Germany student visa. German language institute in Itahari—end-to-end support from language to visa.',
    },
    {
      question: 'What is TELC vs Goethe for German language certification Nepal?',
      answer:
        'Both Goethe and TELC are recognised for German language certification Nepal. Goethe is from Goethe-Institut; TELC from telc GmbH. Universities and embassies accept both. Our Goethe exam preparation Nepal covers Goethe format; we can advise on TELC if needed. German language certification Nepal.',
    },
  ],
};

export default function GermanLanguagePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.sanmarina.edu.np/services/test-prep/german/#webpage',
        url: 'https://www.sanmarina.edu.np/services/test-prep/german/',
        name: 'German Language Classes in Itahari | German Course Nepal - San Marina',
        description: 'German language classes in Itahari. German language course in Nepal. A1–B2. Goethe exam preparation. German for Germany student visa.',
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
        name: 'German Language Classes in Itahari',
        description: 'German language course in Nepal. A1–B2. Goethe exam preparation Nepal. German language for Germany student visa. German language institute in Itahari.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          telephone: '+977980003731',
        },
        areaServed: { '@type': 'City', name: 'Itahari', containedInPlace: { '@type': 'Country', name: 'Nepal' } },
        serviceType: 'German Language Training',
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.sanmarina.edu.np/#itahari-german',
        name: 'San Marina Education Consultancy - German Language Institute in Itahari',
        description: 'German language classes in Itahari. German language course in Nepal. A1 A2 B1 German. Goethe exam preparation Nepal.',
        url: 'https://www.sanmarina.edu.np/services/test-prep/german/',
        telephone: '+977980003731',
        email: 'info@sanmarina.edu.np',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Itahari',
          addressRegion: 'Sunsari',
          addressCountry: 'NP',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 26.664,
          longitude: 87.2719,
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
          { '@type': 'ListItem', position: 4, name: 'German Language', item: 'https://www.sanmarina.edu.np/services/test-prep/german/' },
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
            <span className="text-white">German Language</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            German Language Classes in Itahari
            <br />
            <span className="text-blue-300">A1–B2 Course Nepal – German for Germany Student Visa</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            German language institute in Itahari. German language course in Nepal. Goethe exam preparation Nepal. A1 German course in Nepal. German language for Germany student visa. German language training near me.
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
              href="tel:980003731"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone size={18} /> Call Us
            </a>
            <a
              href="https://wa.me/977980003731?text=Hi%2C%20I%20want%20to%20enroll%20in%20German%20language%20classes"
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

      {/* Quick Answer Box */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-6">Quick Answers</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">Is German required for Germany?</h3>
              <p className="text-gray-700 text-sm">
                For German-taught programmes: yes—typically B2 or C1. For English-taught programmes: basic A2–B1 helps. German language for Germany student visa depends on your path. Our German language preparation for Germany covers all levels.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">What level is needed?</h3>
              <p className="text-gray-700 text-sm">
                Studienkolleg: B1–B2. Direct admission (German-taught): B2–C1. Language course visa: A1–A2. English-taught programmes: often A2–B1 for daily life. German language institute in Itahari—we help you identify your target level.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">How long does it take?</h3>
              <p className="text-gray-700 text-sm">
                A1: 2–3 months. A2: 2–3 months. B1: 3–4 months. B2: 3–4 months. Full A1–B2: about 10–14 months with regular classes. Our German language course in Nepal follows this timeline. A1 German course in Nepal at our Itahari branch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
          <BookOpen size={32} className="text-[#001F3F]" />
          Course Levels – A1, A2, B1, B2
        </h2>
        <p className="text-gray-700 mb-8">
          German A1 A2 B1 classes in Nepal follow CEFR. Who needs which level? German language for Germany student visa—depends on your programme. German language institute in Itahari.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
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
          Exam &amp; Certification
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="font-bold text-[#001F3F] mb-2">Goethe-Institut Certificates</h3>
            <p className="text-gray-700 text-sm mb-2">
              Goethe exam preparation Nepal: A1–C2. Goethe certificates are accepted by German universities and embassies. Our German language institute in Itahari offers Goethe exam preparation Nepal with mock tests. German language certification Nepal.
            </p>
            <a href="https://www.goethe.de/en/index.html" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline text-sm">
              Goethe-Institut Official →
            </a>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl">
            <h3 className="font-bold text-[#001F3F] mb-2">TELC Certificates</h3>
            <p className="text-gray-700 text-sm">
              TELC (The European Language Certificates) is also recognised for German language certification Nepal. Accepted for visa and university admission. We advise on Goethe vs TELC based on your destination.
            </p>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-sm text-gray-700">
              <strong>Required levels for Germany visa:</strong> Studienkolleg B1–B2; direct degree B2–C1; language course visa A1–A2. German language for Germany student visa.
            </p>
          </div>
        </div>
      </section>

      {/* Local SEO – Itahari Branch */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">German Language Institute in Itahari</h2>
          <p className="text-gray-700 mb-6">
            German language classes in Itahari. German language training near me—Eastern Nepal. German language institute in Itahari at our San Marina branch.
          </p>
          <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
            <MapPin className="text-[#001F3F] shrink-0" size={32} />
            <div>
              <p className="font-bold text-[#001F3F] mb-2">Itahari Branch – German Language</p>
              <p className="text-gray-700">Itahari, Sunsari, Nepal</p>
              <a href="tel:980003731" className="inline-flex items-center gap-1 mt-2 text-blue-600 font-semibold hover:underline">
                <Phone size={14} /> 980003731
              </a>
              <p className="text-sm text-gray-500 mt-2">
                NAP: San Marina Education Consultancy, Itahari, Sunsari. German language classes in Itahari. German language training near me.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Opening hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM. <strong>Map:</strong> Search &quot;San Marina Itahari&quot; on Google Maps for directions.
              </p>
              <a
                href="https://wa.me/977980003731?text=Hi%2C%20I%20need%20directions%20to%20your%20Itahari%20branch"
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
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Why Choose Our German Language Program?</h2>
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

      {/* Beyond Language Support */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
            <Zap size={28} className="text-[#001F3F]" />
            Beyond Language Support
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
          <p className="text-amber-200 text-sm font-semibold mb-2">Next batch filling fast. Secure your spot today.</p>
          <p className="text-blue-200 mb-6">
            German language classes in Itahari. German language course in Nepal. A1 German course in Nepal. German language for Germany student visa. German language institute in Itahari.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-all"
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/977980003731?text=Hi%2C%20I%20want%20to%20enroll%20in%20German%20language%20classes"
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
            <Link href="/study-abroad/eur/germany/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors border-2 border-blue-200">
              Study in Germany →
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
            <Link href="/scholarships/germany-for-nepali-students/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Germany Scholarships
            </Link>
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Book Consultation
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>External resources:</strong> <a href="https://www.goethe.de/en/index.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Goethe-Institut</a>, <a href="https://www.study-in-germany.de" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Study in Germany</a>, <a href="https://www.daad.de/en" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DAAD</a>.
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
          <h2 className="text-3xl font-bold text-white mb-4">Start Your German Journey – German Language Institute in Itahari</h2>
          <p className="text-blue-200 mb-8">
            German language classes in Itahari. German language course in Nepal. Learn German for study in Germany. German language for Germany student visa. Enroll today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-all"
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/977980003731?text=Hi%2C%20I%20want%20to%20enroll%20in%20German%20language%20classes"
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
