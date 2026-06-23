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
  Cpu,
  MessageCircle,
} from 'lucide-react';
import FAQAccordion from '../../admission/components/FAQAccordion';
import StickyCTA from './components/StickyCTA';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'PTE Institute Kathmandu | PTE Prep Nepal',
  description:
    'Best PTE institute in Kathmandu. PTE preparation classes in Nepal – AI scoring, mock tests, 79+ target. PTE for Australia PR. 4 branches. Enroll today. Free consultation.',
  keywords:
    'PTE preparation classes in Nepal, best PTE institute in Kathmandu, PTE course fee in Nepal, PTE preparation near me, how to score 79+ in PTE, PTE vs IELTS which is easier, PTE exam booking Nepal, PTE result time in Nepal, AI scoring PTE practice, PTE mock test free Nepal, PTE for Australia PR from Nepal, computer-based English test Nepal, PTE speaking tips Nepal, how to prepare PTE in 2 weeks, PTE exam format 2026',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/services/test-prep/pte/',
  },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/services/test-prep/pte/',
    title: 'PTE Preparation Nepal | Best PTE Institute Kathmandu - San Marina',
    description:
      'PTE preparation classes in Nepal. Best PTE institute in Kathmandu. AI scoring practice, mock tests. PTE for Australia PR.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PTE Preparation Classes Nepal | Best PTE Institute Kathmandu',
    description: 'PTE preparation in Nepal. Best PTE institute in Kathmandu. PTE for Australia PR from Nepal.',
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
  branches: [
    {
      name: 'Tinkune (Head Office)',
      area: 'Tinkune, Kathmandu',
      phone: '015-922004',
      nearMe: 'PTE preparation near me Tinkune',
    },
    {
      name: 'Baneshwor Branch',
      area: 'Beside Sky Bridge, 5th Floor, Baneshwor',
      phone: '015927731',
      nearMe: 'PTE preparation near me Baneshwor',
    },
    {
      name: 'Dang Branch',
      area: 'Ghorahi, Dang',
      phone: '082591130',
      nearMe: 'PTE preparation near me Dang',
    },
    {
      name: 'Itahari Branch',
      area: 'Itahari, Sunsari',
      phone: '980003731',
      nearMe: 'PTE preparation near me Itahari',
    },
  ],
  fourPhaseTraining: [
    {
      phase: 1,
      focus: 'Foundation & Format Mastery',
      desc: 'PTE exam format 2026 overview, computer-based English test Nepal structure, question types, time management. Understand AI scoring PTE practice basics.',
    },
    {
      phase: 2,
      focus: 'Speaking & Listening',
      desc: 'PTE speaking tips Nepal, fluency, pronunciation, oral fluency tasks. Listening strategies for Summarize Spoken Text, Multiple Choice. AI scoring optimization.',
    },
    {
      phase: 3,
      focus: 'Reading & Writing',
      desc: 'Reading comprehension, Re-order Paragraphs, Fill in Blanks. Essay structure, Summarize Written Text. PTE writing strategies for 79+ target.',
    },
    {
      phase: 4,
      focus: 'Mock Tests & Result Optimization',
      desc: 'Full PTE mock test free Nepal sessions. AI scoring feedback. Weak area revision. PTE result time in Nepal preparation. Final tips for PTE exam booking Nepal.',
    },
  ],
  examFormat: [
    { section: 'Speaking & Writing', duration: '54–67 min', tasks: 'Personal intro, Read aloud, Repeat sentence, Describe image, Re-tell lecture, Answer short question, Summarize written text, Essay' },
    { section: 'Reading', duration: '29–30 min', tasks: 'Fill in blanks, Multiple choice, Re-order paragraphs' },
    { section: 'Listening', duration: '30–43 min', tasks: 'Summarize spoken text, Multiple choice, Fill in blanks, Highlight correct summary, Select missing word, Write from dictation' },
  ],
  trustStats: [
    { value: '2,000+', label: 'Students trained' },
    { value: '79+', label: 'Average target score' },
    { value: '48 hrs', label: 'PTE result time' },
    { value: 'Top 5', label: 'Consultancy in Nepal' },
  ],
  faqs: [
    {
      question: 'Is PTE easier than IELTS?',
      answer:
        'Many students find PTE easier because it is a computer-based English test Nepal offers at authorized centers. PTE uses AI scoring—no human examiner bias—and results arrive in 48 hours. Speaking is recorded, not face-to-face, which helps nervous test-takers. PTE vs IELTS which is easier depends on your strengths: if you type well and prefer AI scoring, PTE may suit you. San Marina offers PTE preparation classes in Nepal to help you decide and excel in either test.',
    },
    {
      question: 'Can I get PTE result in 48 hours?',
      answer:
        'Yes. PTE result time in Nepal is typically 2–5 business days, often within 48 hours. Pearson delivers results faster than IELTS (13 days for paper). Our PTE preparation near me programs at San Marina prepare you for quick turnaround—ideal when you need scores urgently for Australia PR or university deadlines. PTE exam booking Nepal through authorized centers ensures you receive results promptly.',
    },
    {
      question: 'Is PTE accepted in UK?',
      answer:
        'Yes. PTE Academic is accepted by UK Visas and Immigration (UKVI) for student and work visas. Over 99% of UK universities accept PTE. Our best PTE institute in Kathmandu prepares students for UK, Australia, Canada, New Zealand, and Ireland. PTE preparation classes in Nepal at San Marina cover all destination requirements.',
    },
    {
      question: 'What is a good score for Australia PR?',
      answer:
        'For Australia PR (SkillSelect), you typically need PTE equivalent of IELTS 6.0–7.0 in each skill. A PTE score of 65–79 (depending on occupation and visa subclass) is common. PTE for Australia PR from Nepal is popular—our PTE preparation classes in Nepal target 79+ for competitive applicants. We cover PTE speaking tips Nepal and all sections to maximize your Australia PR chances.',
    },
    {
      question: 'What is the PTE course fee in Nepal?',
      answer:
        'PTE course fee in Nepal varies by institute. San Marina offers competitive PTE preparation classes in Nepal at our Kathmandu branches. Contact us for current PTE course fee in Nepal—we provide transparent pricing, flexible batches, and value-added AI scoring PTE practice. The official PTE exam fee (paid to Pearson) is separate; we help with PTE exam booking Nepal.',
    },
    {
      question: 'Where are the best PTE preparation classes in Nepal?',
      answer:
        'San Marina is among the best PTE institute in Kathmandu with branches in Tinkune, Baneshwor, Dang, and Itahari. Our PTE preparation classes in Nepal cover the full PTE exam format 2026, AI scoring practice, and PTE mock test free Nepal for enrolled students. PTE preparation near me—search for our branches or contact us for the nearest location.',
    },
    {
      question: 'How to score 79+ in PTE?',
      answer:
        'To score 79+ in PTE: master the PTE exam format 2026, practice daily with AI scoring PTE practice tools, focus on PTE speaking tips Nepal (fluency, pronunciation), take PTE mock test free Nepal sessions, and target weak areas. Our 4-phase training at the best PTE institute in Kathmandu is designed for 79+ aspirants. How to prepare PTE in 2 weeks is possible with intensive focus—we offer accelerated programs.',
    },
    {
      question: 'How to prepare PTE in 2 weeks?',
      answer:
        'How to prepare PTE in 2 weeks: focus on high-impact tasks (Read aloud, Repeat sentence, Write from dictation), take daily PTE mock test free Nepal practice, use AI scoring PTE practice for instant feedback, and follow our intensive 2-week plan. San Marina offers crash courses for urgent test-takers. Best PTE institute in Kathmandu—we help you maximize results in limited time.',
    },
    {
      question: 'What is the PTE exam format 2026?',
      answer:
        'PTE exam format 2026: computer-based, 3 sections—Speaking & Writing (54–67 min), Reading (29–30 min), Listening (30–43 min). Total ~2 hours. It is a computer-based English test Nepal offers at Pearson centers. AI scoring PTE practice mirrors the real test. Our PTE preparation classes in Nepal cover the full format with updated 2026 guidelines.',
    },
    {
      question: 'Is there PTE mock test free Nepal?',
      answer:
        'Yes. San Marina offers PTE mock test free Nepal for enrolled students at our best PTE institute in Kathmandu. Mock tests use AI scoring PTE practice to simulate real exam conditions. We provide detailed feedback on Speaking, Reading, Writing, and Listening. Enroll in our PTE preparation classes in Nepal to access mock tests and improve before PTE exam booking Nepal.',
    },
    {
      question: 'What are PTE speaking tips Nepal?',
      answer:
        'PTE speaking tips Nepal: speak clearly and at natural pace, avoid long pauses, use correct pronunciation (practice with AI scoring PTE practice), manage time in Describe Image and Re-tell lecture, and stay calm—you record alone, no examiner. Our PTE preparation classes in Nepal include dedicated PTE speaking tips Nepal sessions. Best PTE institute in Kathmandu for speaking practice.',
    },
    {
      question: 'How do I do PTE exam booking Nepal?',
      answer:
        'PTE exam booking Nepal: visit Pearson PTE website, select Nepal and your preferred test center (Kathmandu), choose date and pay the exam fee. We guide students through PTE exam booking Nepal during our PTE preparation classes in Nepal. Our best PTE institute in Kathmandu helps you pick optimal test dates based on your readiness and PTE result time in Nepal.',
    },
    {
      question: 'Why choose San Marina for PTE preparation in Nepal?',
      answer:
        'San Marina is a Top 5 education consultancy in Nepal—best PTE institute in Kathmandu with 2,000+ students trained. We offer PTE preparation classes in Nepal with 4-phase training, AI scoring PTE practice, PTE mock test free Nepal, and PTE speaking tips Nepal. Branches in Tinkune, Baneshwor, Dang, Itahari. PTE for Australia PR from Nepal—we specialize in destination-focused preparation.',
    },
    {
      question: 'Is PTE good for Australia PR from Nepal?',
      answer:
        'Yes. PTE for Australia PR from Nepal is widely used. PTE Academic is accepted by DHA for SkillSelect. Fast PTE result time in Nepal (48 hours) helps with tight deadlines. Our PTE preparation classes in Nepal target 79+ for competitive Australia PR. Best PTE institute in Kathmandu—we help Nepali students achieve Australia PR goals.',
    },
    {
      question: 'What is AI scoring in PTE?',
      answer:
        'AI scoring PTE uses Pearson\'s automated system to grade Speaking and Writing—no human examiner. This ensures consistency and faster PTE result time in Nepal. Our AI scoring PTE practice at the best PTE institute in Kathmandu helps you understand how the algorithm scores fluency, pronunciation, content, and grammar. PTE preparation classes in Nepal include AI scoring feedback.',
    },
    {
      question: 'Which is better for Nepal students: PTE or IELTS?',
      answer:
        'PTE vs IELTS which is easier depends on the student. PTE: computer-based English test Nepal, AI scoring, 48-hour results, no face-to-face speaking. IELTS: paper or computer, human examiner for speaking, 13-day results. Many Nepali students prefer PTE for Australia PR from Nepal due to faster results. Our PTE preparation classes in Nepal and IELTS programs help you choose based on your strengths.',
    },
    {
      question: 'What are the PTE preparation classes in Nepal timings?',
      answer:
        'PTE preparation classes in Nepal at San Marina run in morning and evening batches at our Tinkune, Baneshwor, Dang, and Itahari branches. Contact us for current schedule. PTE preparation near me—we offer flexible timings for working professionals and students. Best PTE institute in Kathmandu with convenient batch options.',
    },
    {
      question: 'How long is PTE valid for Australia PR?',
      answer:
        'PTE Academic scores are typically valid for 2 years from the test date for Australian visa purposes. For SkillSelect and PR applications, ensure your PTE result is within this validity period. Our PTE preparation classes in Nepal help you plan your test date accordingly. PTE for Australia PR from Nepal—we guide you on timing.',
    },
    {
      question: 'Can I use PTE for Canada immigration?',
      answer:
        'Yes. PTE Academic is accepted by Immigration, Refugees and Citizenship Canada (IRCC) for Express Entry and other pathways. Score requirements vary by program. Our best PTE institute in Kathmandu prepares students for both Australia and Canada. PTE preparation classes in Nepal cover all destination requirements.',
    },
    {
      question: 'What is the passing score for PTE?',
      answer:
        'There is no single "passing" score—requirements depend on your university or visa. For Australia PR, 65–79 in each skill is common. For UK universities, 51–73 is typical. We help you identify your target and structure PTE preparation accordingly. How to score 79+ in PTE—our 4-phase program targets your goal.',
    },
    {
      question: 'How many times can I take PTE?',
      answer:
        'You can take PTE Academic as many times as you need. There is no limit. Results are typically available within 48 hours (PTE result time in Nepal). Our PTE mock test free Nepal sessions help you prepare so you can achieve your target in fewer attempts. Best PTE institute in Kathmandu—we help you maximize first-attempt success.',
    },
    {
      question: 'Is PTE easier than TOEFL?',
      answer:
        'Many students find PTE easier than TOEFL due to AI scoring, faster results, and computer-based format. PTE speaking is recorded (no human examiner), which some prefer. Our PTE preparation classes in Nepal cover strategies for both tests if you are comparing options. PTE vs IELTS which is easier—we also help you choose between PTE and IELTS.',
    },
  ],
};

export default function PTEPrepPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.sanmarina.edu.np/services/test-prep/pte/#webpage',
        url: 'https://www.sanmarina.edu.np/services/test-prep/pte/',
        name: 'PTE Preparation Classes in Nepal | Best PTE Institute in Kathmandu - San Marina',
        description: 'Best PTE institute in Kathmandu. PTE preparation classes in Nepal. Score 79+ for Australia PR. AI scoring, mock tests, 4-phase training.',
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
        name: 'PTE Preparation Classes in Nepal',
        description:
          'Best PTE institute in Kathmandu. PTE preparation classes in Nepal with AI scoring practice, mock tests, 4-phase training. PTE for Australia PR from Nepal.',
        provider: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
          telephone: '+977015927731',
        },
        areaServed: [
          { '@type': 'City', name: 'Kathmandu', containedInPlace: { '@type': 'Country', name: 'Nepal' } },
          { '@type': 'City', name: 'Dang', containedInPlace: { '@type': 'Country', name: 'Nepal' } },
          { '@type': 'City', name: 'Itahari', containedInPlace: { '@type': 'Country', name: 'Nepal' } },
        ],
        serviceType: 'PTE Academic Preparation',
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.sanmarina.edu.np/#baneshwor',
        name: 'San Marina Education Consultancy - Best PTE Institute in Kathmandu',
        description:
          'PTE preparation classes in Nepal. Best PTE institute in Kathmandu. PTE course fee in Nepal. PTE preparation near me. PTE for Australia PR from Nepal.',
        url: 'https://www.sanmarina.edu.np/services/test-prep/pte/',
        telephone: '+977015927731',
        email: 'info@sanmarina.edu.np',
        address: [
          {
            '@type': 'PostalAddress',
            addressLocality: 'Tinkune',
            addressRegion: 'Kathmandu',
            addressCountry: 'NP',
          },
          {
            '@type': 'PostalAddress',
            addressLocality: 'Baneshwor',
            addressRegion: 'Kathmandu',
            addressCountry: 'NP',
          },
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 27.6878,
          longitude: 85.3494,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        priceRange: 'Contact for PTE course fee in Nepal',
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
          { '@type': 'ListItem', position: 4, name: 'PTE Preparation', item: 'https://www.sanmarina.edu.np/services/test-prep/pte/' },
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
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/services/" className="hover:text-white">
              Services
            </Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/services/test-prep/" className="hover:text-white">
              Test Prep
            </Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">PTE Academic</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            PTE Preparation Classes in Nepal
            <br />
            <span className="text-blue-300">Best PTE Institute in Kathmandu – Score 79+ for Australia PR</span>
          </h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl">
            Top 5 education consultancy in Nepal. PTE preparation near me at Tinkune, Baneshwor, Dang & Itahari. Computer-based English test Nepal—AI scoring, 48-hour results. PTE course fee in Nepal. How to score 79+ in PTE.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/977015927731?text=Hi%2C%20I%20want%20to%20enroll%20in%20PTE%20preparation%20classes%20in%20Nepal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg"
            >
              <Phone size={18} /> WhatsApp – Enroll Now
            </a>
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer / People Also Ask – GEO Optimized */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Quick Answers</h2>
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-semibold text-[#001F3F] text-sm mb-1">Is PTE easier than IELTS?</h3>
              <p className="text-gray-700 text-sm">Many find PTE easier: computer-based, AI scoring, 48-hour results, no face-to-face speaking.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] text-sm mb-1">Can I get PTE result in 48 hours?</h3>
              <p className="text-gray-700 text-sm">Yes. PTE result time in Nepal is typically 2–5 business days, often within 48 hours.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] text-sm mb-1">Is PTE accepted in UK?</h3>
              <p className="text-gray-700 text-sm">Yes. PTE Academic is accepted by UKVI and 99%+ of UK universities.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#001F3F] text-sm mb-1">What is a good score for Australia PR?</h3>
              <p className="text-gray-700 text-sm">Typically 65–79 in each skill. We target 79+ for competitive PTE for Australia PR from Nepal.</p>
            </div>
          </div>
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Full Overview</h2>
          <p className="text-gray-700 mb-4">
            <strong>Best PTE institute in Kathmandu:</strong> San Marina offers PTE preparation classes in Nepal at four branches—Tinkune, Baneshwor, Dang, Itahari. We provide 4-phase training, AI scoring PTE practice, PTE mock test free Nepal for enrolled students, and PTE speaking tips Nepal. PTE course fee in Nepal is competitive. PTE for Australia PR from Nepal—we help you score 79+. PTE result time in Nepal is typically 48 hours. PTE preparation near me—find your nearest branch.
          </p>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>PTE preparation classes in Nepal – Top 5 consultancy</li>
            <li>4-phase training, AI scoring practice, mock tests</li>
            <li>Branches: Tinkune, Baneshwor, Dang, Itahari</li>
            <li>PTE vs IELTS which is easier – we help you decide</li>
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
                  {i === 1 && <Target size={28} />}
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

      {/* AI Scoring Explanation */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-3">
            <Cpu size={32} className="text-[#001F3F]" />
            How AI Scoring Works in PTE
          </h2>
          <p className="text-gray-700 mb-6">
            PTE Academic is a <strong>computer-based English test Nepal</strong> uses for study abroad and migration. Unlike IELTS, PTE uses <strong>AI scoring PTE</strong>—Pearson&apos;s automated system grades Speaking and Writing. No human examiner means consistent, unbiased results. Our <strong>PTE preparation classes in Nepal</strong> include <strong>AI scoring PTE practice</strong> so you understand exactly how fluency, pronunciation, content, and grammar are evaluated. This helps you optimize for 79+ and faster <strong>PTE result time in Nepal</strong> (typically 48 hours).
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-blue-100">
              <h3 className="font-bold text-[#001F3F] mb-2">AI Scoring Benefits</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Consistent, unbiased evaluation</li>
                <li>• Faster PTE result time in Nepal</li>
                <li>• Practice with AI scoring PTE tools</li>
                <li>• No face-to-face speaking stress</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-xl border border-blue-100">
              <h3 className="font-bold text-[#001F3F] mb-2">Best PTE Institute in Kathmandu</h3>
              <p className="text-sm text-gray-700">
                San Marina&apos;s AI scoring PTE practice prepares you for the real exam. PTE mock test free Nepal for enrolled students. How to score 79+ in PTE—we show you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO – Branches */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PTE Preparation Near Me – Our Branches</h2>
          <p className="text-gray-700 mb-6">
            Best PTE institute in Kathmandu with multiple locations. PTE preparation classes in Nepal at Tinkune, Baneshwor, Dang, and Itahari. PTE preparation near me—find your nearest branch.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pageData.branches.map((branch, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm">
                <MapPin className="text-[#001F3F] shrink-0" size={32} />
                <div>
                  <p className="font-bold text-[#001F3F] mb-1">{branch.name}</p>
                  <p className="text-gray-700 text-sm">{branch.area}</p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="inline-flex items-center gap-1 mt-2 text-blue-600 font-semibold hover:underline"
                  >
                    <Phone size={14} /> {branch.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">{branch.nearMe}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/977015927731?text=Hi%2C%20I%20need%20directions%20to%20your%20PTE%20preparation%20branch"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
          >
            Get directions via WhatsApp →
          </a>
        </div>
      </section>

      {/* 4-Phase Training */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8">4-Phase PTE Training Structure</h2>
        <p className="text-gray-700 mb-6">
          Our PTE preparation classes in Nepal follow a proven 4-phase structure. How to prepare PTE in 2 weeks? We offer intensive crash courses. How to score 79+ in PTE? Follow our phased approach at the best PTE institute in Kathmandu.
        </p>
        <div className="space-y-6">
          {pageData.fourPhaseTraining.map((w) => (
            <div key={w.phase} className="flex gap-6 p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#001F3F] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                {w.phase}
              </div>
              <div>
                <h3 className="font-bold text-[#001F3F] mb-1">
                  Phase {w.phase}: {w.focus}
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
            PTE Exam Format 2026
          </h2>
          <p className="text-gray-700 mb-6">
            PTE Academic is a <strong>computer-based English test Nepal</strong> offers at Pearson centers. PTE exam format 2026—three sections, ~2 hours total. AI scoring PTE ensures fast PTE result time in Nepal.
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
          <p className="text-sm text-gray-600 mt-4">
            PTE exam booking Nepal through Pearson. Our PTE preparation classes in Nepal cover all task types. PTE mock test free Nepal for enrolled students.
          </p>
        </div>
      </section>

      {/* PTE vs IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PTE vs IELTS – Which is Easier?</h2>
        <p className="text-gray-700 mb-6">
          <strong>PTE vs IELTS which is easier?</strong> Many students ask: Is PTE easier than IELTS? PTE: computer-based, AI scoring, 48-hour results, recorded speaking. IELTS: paper or computer, human examiner for speaking, 13-day results. For <strong>PTE for Australia PR from Nepal</strong>, PTE is popular due to faster PTE result time in Nepal. Our best PTE institute in Kathmandu helps you choose based on your strengths. We offer both PTE preparation classes in Nepal and IELTS programs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/test-prep/ielts/" className="px-5 py-2.5 bg-blue-50 rounded-xl font-semibold text-[#001F3F] hover:bg-blue-100">
            Compare: IELTS Preparation
          </Link>
          <Link href="/consultation/" className="px-5 py-2.5 bg-gray-100 rounded-xl font-semibold text-[#001F3F] hover:bg-gray-200">
            Book Consultation – Decide Together
          </Link>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Enroll in PTE Preparation Classes Today</h2>
          <p className="text-blue-200 mb-6">
            Best PTE institute in Kathmandu. PTE preparation near me at Tinkune, Baneshwor, Dang, Itahari. PTE course fee in Nepal—contact for details. How to score 79+ in PTE—we&apos;ll show you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/977015927731?text=Hi%2C%20I%20want%20to%20enroll%20in%20PTE%20preparation"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all"
            >
              <Phone size={20} /> WhatsApp – Enroll
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
              href="/services/test-prep/ielts/"
              className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors border-2 border-blue-200"
            >
              IELTS Preparation →
            </Link>
            <Link href="/services/test-prep/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              All Test Prep
            </Link>
            <Link href="/services/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              All Services
            </Link>
            <Link href="/services/visa/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Student Visa Services
            </Link>
            <Link href="/study-abroad/aus/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Study in Australia
            </Link>
            <Link href="/consultation/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Book Consultation
            </Link>
            <Link href="/contact/" className="p-4 bg-white rounded-xl font-semibold text-[#001F3F] hover:bg-blue-50 transition-colors">
              Contact Us
            </Link>
          </div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Start Your PTE Journey – Best PTE Institute in Kathmandu</h2>
          <p className="text-blue-200 mb-8">
            PTE preparation classes in Nepal. PTE preparation near me. PTE for Australia PR from Nepal. How to score 79+ in PTE. Enroll today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/977015927731?text=Hi%2C%20I%20want%20to%20enroll%20in%20PTE%20preparation%20classes"
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
