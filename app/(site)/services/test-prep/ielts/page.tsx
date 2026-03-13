import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  MapPin,
  Clock,
  Award,
  Monitor,
  Target,
  Users,
  MessageCircle,
  GraduationCap,
  Zap,
} from 'lucide-react';
import FAQAccordion from '../../admission/components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Best IELTS Institute Kathmandu | IELTS Prep Nepal – Score 7.5+ | San Marina',
  description:
    'Best IELTS institute in Kathmandu. IELTS preparation classes in Nepal – free mock tests, Cambridge materials, 7.5+ target. IELTS training center in Baneshwor. Free IELTS classes. Enroll today.',
  keywords:
    'IELTS preparation classes in Nepal, best IELTS institute in Kathmandu, free IELTS mock test Nepal, IELTS course fee in Nepal, IELTS preparation near me, how to get 7.5 band in IELTS Nepal, IELTS speaking practice Nepal, IELTS exam format 2026, computer-based IELTS Nepal, IELTS training center in Baneshwor',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/test-prep/ielts/',
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/test-prep/ielts/',
    title: 'IELTS Preparation Nepal | Best IELTS Institute Kathmandu - San Marina',
    description:
      'Best IELTS institute in Kathmandu. IELTS preparation classes in Nepal. Free IELTS mock test Nepal. IELTS training center in Baneshwor.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IELTS Preparation Nepal | Best IELTS Institute Kathmandu',
    description: 'IELTS preparation classes in Nepal. Best IELTS institute in Kathmandu. Free IELTS mock test Nepal.',
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
    { value: '500+', label: 'Students trained' },
    { value: '7.5+', label: 'Target band' },
    { value: '92%', label: 'Success rate' },
    { value: 'Top', label: 'Consultancy in Nepal' },
  ],
  fourWeekTraining: [
    {
      week: 1,
      focus: 'Diagnostic Test & Baseline',
      desc: 'Initial assessment to identify strengths and gaps. IELTS exam format 2026 overview. Set personalized targets. Understand Listening, Reading, Writing, Speaking structure. Best IELTS institute in Kathmandu—we start with data.',
    },
    {
      week: 2,
      focus: 'Module Strategy & Techniques',
      desc: 'Section-specific strategies: Listening question types, Reading skimming/scanning, Writing Task 1 & 2 structure, Speaking Part 1–3 frameworks. Computer-based IELTS Nepal tips. IELTS speaking practice Nepal sessions begin.',
    },
    {
      week: 3,
      focus: 'Timed Practice & Feedback',
      desc: 'Strict time limits, real exam conditions. Free IELTS mock test Nepal practice. Cambridge materials. Writing correction, speaking feedback. How to get 7.5 band in IELTS Nepal—targeted improvement.',
    },
    {
      week: 4,
      focus: 'Full Mock Exams & Revision',
      desc: 'Complete practice tests under exam conditions. Band score feedback. Weak area revision. Exam day strategies. IELTS preparation near me at our IELTS training center in Baneshwor—ready for test day.',
    },
  ],
  examFormat: [
    { section: 'Listening', duration: '30 min', tasks: '4 sections, 40 questions. Audio played once.' },
    { section: 'Reading', duration: '60 min', tasks: '3 passages, 40 questions. Academic or General.' },
    { section: 'Writing', duration: '60 min', tasks: 'Task 1 (150 words), Task 2 (250 words)' },
    { section: 'Speaking', duration: '11–14 min', tasks: 'Part 1 (intro), Part 2 (long turn), Part 3 (discussion)' },
  ],
  trustSignals: [
    { icon: BookOpen, title: 'Cambridge Materials', desc: 'Official Cambridge IELTS books and practice tests' },
    { icon: GraduationCap, title: 'Certified Trainers', desc: 'British Council / IDP trained IELTS specialists' },
    { icon: Users, title: 'Small Batch Sizes', desc: 'Max 12–15 students for personalized attention' },
    { icon: Award, title: 'Real Student Success', desc: '500+ students achieved target bands' },
  ],
  beyondTraining: [
    { title: 'Exam Registration Guidance', desc: 'We help you book IELTS at British Council or IDP Nepal' },
    { title: 'Extra Writing Correction', desc: 'Additional essay feedback beyond class hours' },
    { title: 'One-on-One Speaking Slots', desc: 'Private speaking practice with trainers' },
  ],
  faqs: [
    {
      question: 'Is IELTS difficult for Nepali students?',
      answer:
        'IELTS is manageable with proper preparation. Many Nepali students achieve 6.5–7.5+ with our IELTS preparation classes in Nepal. Common challenges: Writing (structure, vocabulary), Speaking (fluency under pressure). Our best IELTS institute in Kathmandu addresses these with IELTS speaking practice Nepal sessions, writing correction, and mock tests. Free IELTS mock test Nepal at our Baneshwor branch helps you gauge your level.',
    },
    {
      question: 'How to score 7+ band in one month?',
      answer:
        'How to score 7+ band in one month: follow our 4-week structured program—Diagnostic, Module Strategy, Timed Practice, Full Mocks. Practice daily (2+ hours), take free IELTS mock test Nepal weekly, focus on weak areas. If you are already at 6.0+, 4 weeks can get you to 6.5–7.0. Our IELTS preparation classes in Nepal at the IELTS training center in Baneshwor are designed for this timeline.',
    },
    {
      question: 'Is computer-based IELTS easier?',
      answer:
        'Computer-based IELTS Nepal offers faster results (3–5 days vs 13 days for paper), on-screen formatting, and word count for Writing. Content and scoring are identical—neither is easier. Choose based on preference: typing vs handwriting. Our IELTS preparation classes in Nepal cover strategies for both. Computer-based IELTS Nepal is available at British Council and IDP test centers in Kathmandu.',
    },
    {
      question: 'How long is IELTS valid?',
      answer:
        'IELTS scores are typically valid for 2 years from the test date for university and visa applications. Some institutions may accept older results—check your destination. Our IELTS preparation classes in Nepal help you plan your test date for Australia, UK, Canada, or Germany. Best IELTS institute in Kathmandu—we guide you on timing.',
    },
    {
      question: 'Is IELTS required for Germany from Nepal?',
      answer:
        'It depends on the programme. Many German universities accept IELTS 6.0–6.5 for English-taught courses. Some accept alternatives (TOEFL, Cambridge, Duolingo). For German-taught programmes, you may need TestDaF or Goethe. Our IELTS preparation classes in Nepal prepare you for Germany and other destinations. Contact us for Germany-specific requirements.',
    },
    {
      question: 'What is the IELTS course fee in Nepal?',
      answer:
        'IELTS course fee in Nepal varies by institute. San Marina offers free IELTS preparation at our Baneshwor branch—no tuition fee. Our IELTS preparation classes in Nepal include structured lessons, free IELTS mock test Nepal, and IELTS speaking practice Nepal. The official IELTS exam fee (British Council/IDP) is separate. Best IELTS institute in Kathmandu—transparent pricing.',
    },
    {
      question: 'Where is the IELTS training center in Baneshwor?',
      answer:
        'Our IELTS training center in Baneshwor is at Beside Sky Bridge, 5th Floor. IELTS preparation near me—convenient for Baneshwor, Putalisadak, Koteshwor, and surrounding areas. Best IELTS institute in Kathmandu with free IELTS classes. Contact 015927731 or WhatsApp for directions and batch timings.',
    },
    {
      question: 'How to get 7.5 band in IELTS Nepal?',
      answer:
        'How to get 7.5 band in IELTS Nepal: master each section format, use Cambridge materials, take free IELTS mock test Nepal regularly, practice IELTS speaking practice Nepal with trainers, work on Writing structure and vocabulary, manage Reading time. Our 4-week program at the best IELTS institute in Kathmandu targets 7.5. Many students achieve 7.0–7.5 with focused preparation.',
    },
    {
      question: 'Is there free IELTS mock test Nepal?',
      answer:
        'Yes. San Marina offers free IELTS mock test Nepal for enrolled students at our Baneshwor branch. Mock tests simulate real exam conditions—Listening, Reading, Writing, Speaking. We provide band score feedback and weak area analysis. Enroll in our IELTS preparation classes in Nepal to access free IELTS mock test Nepal. Best IELTS institute in Kathmandu.',
    },
    {
      question: 'What does IELTS speaking practice Nepal include?',
      answer:
        'IELTS speaking practice Nepal at San Marina: Part 1 (intro/familiar topics), Part 2 (Cue Card/long turn), Part 3 (discussion). We cover common topics, vocabulary, fluency, pronunciation. Practice with certified trainers and peers. One-on-one speaking slots available. Mock speaking tests with feedback. IELTS training center in Baneshwor—structured speaking sessions.',
    },
    {
      question: 'What is the IELTS exam format 2026?',
      answer:
        'IELTS exam format 2026: four sections—Listening (30 min, 40 questions), Reading (60 min, 40 questions), Writing (60 min, 2 tasks), Speaking (11–14 min, 3 parts). Paper-based or computer-based IELTS Nepal. Same content and scoring. Our IELTS preparation classes in Nepal cover the full format. Best IELTS institute in Kathmandu—we stay updated.',
    },
    {
      question: 'Why choose San Marina for IELTS preparation in Nepal?',
      answer:
        'San Marina is among the best IELTS institute in Nepal—Top consultancy, 500+ students trained, 92% success rate. We offer free IELTS preparation at Baneshwor, Cambridge materials, certified trainers, small batches (12–15), free IELTS mock test Nepal, IELTS speaking practice Nepal. IELTS training center in Baneshwor. IELTS preparation near me.',
    },
    {
      question: 'What are the IELTS preparation classes in Nepal timings?',
      answer:
        'IELTS preparation classes in Nepal at San Marina Baneshwor run in morning and evening batches. Contact us for current schedule. IELTS preparation near me—flexible for working professionals and +2 students. IELTS training center in Baneshwor. WhatsApp 9802372602 or visit for batch details. Limited seats per batch.',
    },
    {
      question: 'Can I prepare for IELTS in 4 weeks?',
      answer:
        'Yes. Our 4-week program is designed for focused preparation: Week 1 Diagnostic & Format, Week 2 Module Strategy, Week 3 Timed Practice, Week 4 Full Mocks. If you are at 6.0+, 4 weeks can get you to 6.5–7.0. IELTS preparation classes in Nepal at the best IELTS institute in Kathmandu. Free IELTS mock test Nepal included.',
    },
    {
      question: 'Which is better: IELTS or PTE for Nepal students?',
      answer:
        'Both are accepted globally. IELTS: human examiner for Speaking, 13-day results (paper). PTE: computer-based, AI scoring, 48-hour results. Choose based on preference. We offer both IELTS preparation classes in Nepal and PTE preparation. Best IELTS institute in Kathmandu—we help you decide. See our PTE page for comparison.',
    },
  ],
};

export default function IELTSPrepPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.sanmarina.edu.np/services/test-prep/ielts/#webpage',
        url: 'https://www.sanmarina.edu.np/services/test-prep/ielts/',
        name: 'IELTS Preparation Nepal | Best IELTS Institute Kathmandu - San Marina',
        description: 'Best IELTS institute in Kathmandu. IELTS preparation classes in Nepal. Free IELTS mock test Nepal. Score 7.5+. IELTS training center in Baneshwor.',
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
        name: 'IELTS Preparation Classes in Nepal',
        description:
          'Best IELTS institute in Kathmandu. IELTS preparation classes in Nepal with free mock tests, Cambridge materials, 7.5+ target. IELTS training center in Baneshwor.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          telephone: '+9779802372602',
        },
        areaServed: { '@type': 'City', name: 'Kathmandu', containedInPlace: { '@type': 'Country', name: 'Nepal' } },
        serviceType: 'IELTS Preparation',
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.sanmarina.edu.np/#baneshwor-ielts',
        name: 'San Marina Education Consultancy - IELTS Training Center in Baneshwor',
        description:
          'Best IELTS institute in Kathmandu. IELTS preparation classes in Nepal. Free IELTS mock test Nepal. IELTS training center in Baneshwor. IELTS preparation near me.',
        url: 'https://www.sanmarina.edu.np/services/test-prep/ielts/',
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
          { '@type': 'ListItem', position: 4, name: 'IELTS Preparation', item: 'https://www.sanmarina.edu.np/services/test-prep/ielts/' },
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
            <span className="text-white">IELTS</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            IELTS Preparation Classes in Nepal
            <br />
            <span className="text-blue-300">Best IELTS Institute in Kathmandu – Score 7.5+ Band</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            Top education consultancy in Nepal. IELTS preparation near me at Baneshwor. Free IELTS mock test Nepal. IELTS training center in Baneshwor. Cambridge materials, certified trainers. How to get 7.5 band in IELTS Nepal.
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
              href="https://wa.me/9779802372602?text=Hi%2C%20I%20want%20to%20enroll%20in%20IELTS%20preparation%20classes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg"
            >
              <Phone size={18} /> WhatsApp Us
            </a>
            <Link
              href="/services/free-ielts-preparation-baneshwor/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg"
            >
              Enroll Free – Baneshwor
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer Box – AI/GEO Optimized */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-6">Quick Answers</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">What is IELTS?</h3>
              <p className="text-gray-700 text-sm">
                IELTS (International English Language Testing System) is the world&apos;s most popular English proficiency test for study, work, and migration. Four sections: Listening, Reading, Writing, Speaking. Accepted by 11,000+ organizations in 140+ countries. IELTS exam format 2026—paper or computer-based IELTS Nepal. Our IELTS preparation classes in Nepal cover both.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">Why choose our IELTS training?</h3>
              <p className="text-gray-700 text-sm">
                Best IELTS institute in Kathmandu: Cambridge materials, certified trainers, small batches (12–15), free IELTS mock test Nepal, IELTS speaking practice Nepal. 500+ students trained, 92% success rate. Free preparation at Baneshwor. IELTS training center in Baneshwor—IELTS preparation near me.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] mb-2">Who should take IELTS?</h3>
              <p className="text-gray-700 text-sm">
                Students applying to Australia, UK, Canada, USA, New Zealand, Ireland, Germany (English programmes). Professionals for skilled migration. Anyone needing proof of English for study or work. Our IELTS preparation classes in Nepal serve all—from +2 students to working professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pageData.trustSignals.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <s.icon size={28} className="text-[#001F3F] shrink-0" />
                <div>
                  <p className="font-bold text-[#001F3F] mb-1">{s.title}</p>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Week Training Model */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-2 flex items-center gap-3">
          <Target size={32} className="text-[#001F3F]" />
          4-Week Structured Training Model
        </h2>
        <p className="text-gray-700 mb-8">
          Our IELTS preparation classes in Nepal follow a proven 4-phase approach. How to get 7.5 band in IELTS Nepal—structured practice at the best IELTS institute in Kathmandu.
        </p>
        <div className="space-y-6">
          {pageData.fourWeekTraining.map((w) => (
            <div key={w.week} className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#001F3F] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                {w.week}
              </div>
              <div>
                <h3 className="font-bold text-[#001F3F] mb-1">
                  Week {w.week}: {w.focus}
                </h3>
                <p className="text-gray-600 text-sm">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Format */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
            <Monitor size={28} className="text-[#001F3F]" />
            IELTS Exam Format 2026
          </h2>
          <p className="text-gray-700 mb-6">
            IELTS exam format 2026—four sections. Paper-based or computer-based IELTS Nepal. Same content and scoring. Our IELTS preparation classes in Nepal cover both formats.
          </p>
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
        </div>
      </section>

      {/* Local SEO – Baneshwor */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">IELTS Training Center in Baneshwor</h2>
        <p className="text-gray-700 mb-6">
            Best IELTS institute in Kathmandu. IELTS preparation near me at our Baneshwor branch. IELTS training center in Baneshwor—Beside Sky Bridge, 5th Floor. Convenient for Baneshwor, Putalisadak, Koteshwor.
          </p>
          <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
            <MapPin className="text-[#001F3F] shrink-0" size={32} />
            <div>
              <p className="font-bold text-[#001F3F] mb-2">Baneshwor Branch – IELTS Preparation</p>
              <p className="text-gray-700">Beside Sky Bridge, 5th Floor · Baneshwor, Kathmandu, Nepal</p>
              <a href="tel:015927731" className="inline-flex items-center gap-1 mt-2 text-blue-600 font-semibold hover:underline">
                <Phone size={14} /> 015927731
              </a>
              <p className="text-sm text-gray-500 mt-2">
                NAP: San Marina Education Consultancy, Baneshwor, Kathmandu. IELTS preparation near me. Search &quot;IELTS training center in Baneshwor&quot; to find us.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Map:</strong> Search &quot;San Marina Baneshwor&quot; on Google Maps for directions. We recommend visiting before your first class.
              </p>
              <a
                href="https://wa.me/9779802372602?text=Hi%2C%20I%20need%20directions%20to%20your%20Baneshwor%20IELTS%20center"
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

      {/* Beyond Training Support */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
          <Zap size={28} className="text-[#001F3F]" />
          Beyond Training – Extra Support
        </h2>
        <p className="text-gray-700 mb-8">
          Best IELTS institute in Kathmandu—we go beyond classroom teaching. IELTS preparation classes in Nepal with added value.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {pageData.beyondTraining.map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#001F3F]">
              <h3 className="font-bold text-[#001F3F] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Limited Seats – Enroll Now</h2>
          <p className="text-amber-200 text-sm font-semibold mb-2">Next batch filling fast. Secure your spot today.</p>
          <p className="text-blue-200 mb-6">
            Free IELTS preparation at Baneshwor. Best IELTS institute in Kathmandu. IELTS preparation near me. Free IELTS mock test Nepal. IELTS training center in Baneshwor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services/free-ielts-preparation-baneshwor/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-all"
            >
              Enroll Free – Baneshwor
          </Link>
            <a
              href="https://wa.me/9779802372602?text=Hi%2C%20I%20want%20to%20enroll%20in%20IELTS%20preparation"
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
            <Link
              href="/services/free-ielts-preparation-baneshwor/"
              className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-amber-50 transition-colors border-2 border-amber-200"
            >
              Free IELTS Baneshwor →
            </Link>
            <Link href="/services/test-prep/pte/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              PTE Preparation
            </Link>
            <Link href="/services/test-prep/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              All Test Prep
            </Link>
            <Link href="/study-abroad/uk/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Study in UK (IELTS/Duolingo)
            </Link>
            <Link href="/study-abroad/aus/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Study in Australia
            </Link>
            <Link href="/study-abroad/can/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Study in Canada
            </Link>
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Book Consultation
            </Link>
            <Link href="/services/visa/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Student Visa Services
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            <strong>External resources:</strong> <a href="https://www.ielts.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">IELTS.org</a> (official), <a href="https://www.britishcouncil.org.np/exam/ielts" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">British Council Nepal</a>, <a href="https://www.idp.com/nepal/ielts" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">IDP Nepal</a>.
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
          <h2 className="text-3xl font-bold text-white mb-4">Start Your IELTS Journey – Best IELTS Institute in Kathmandu</h2>
          <p className="text-blue-200 mb-8">
            IELTS preparation classes in Nepal. IELTS preparation near me. Free IELTS mock test Nepal. IELTS training center in Baneshwor. How to get 7.5 band in IELTS Nepal. Enroll today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services/free-ielts-preparation-baneshwor/"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-all"
            >
              Enroll Free – Baneshwor
            </Link>
            <a
              href="https://wa.me/9779802372602?text=Hi%2C%20I%20want%20to%20enroll%20in%20IELTS%20preparation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all"
            >
              <Phone size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
