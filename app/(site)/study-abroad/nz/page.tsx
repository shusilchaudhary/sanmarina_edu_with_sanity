import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  Phone,
  Briefcase,
  FileText,
  Home,
  Plane,
  ChevronRight,
  Globe,
  Users,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in New Zealand from Nepal | Guide',
  description: 'Study in New Zealand from Nepal 2026: visa process, cost in NPR, IELTS, scholarships. Work and study, post-study work visa, PR pathway. Consultancy for NZ in Nepal. Free consultation.',
  keywords: 'study in new zealand from nepal, new zealand student visa from nepal, cost of study in new zealand from nepal, ielts requirement new zealand, study in new zealand with full scholarship, work and study in new zealand, consultancy for new zealand in nepal, nursing study in new zealand from nepal, masters in new zealand from nepal',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/nz/',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/nz/',
    title: 'Study in New Zealand from Nepal – 2026 Complete Guide',
    description: 'Complete 2026 guide: NZ visa, cost, IELTS, scholarships. Free consultation in Kathmandu.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in New Zealand from Nepal – 2026 Guide',
    description: 'Complete 2026 guide: NZ visa, cost, IELTS, scholarships.',
  },
};

// 2026 data: INZ living NZD $20,000/yr; visa $850; 1 NZD ≈ 88 NPR; min wage $22.70; IELTS 6.0 bachelor
const nzData = {
  heroImage: '/assets/auckland.jpg',
  lastUpdated: 'February 2026',
  stats: {
    universities: '8 Universities',
    nepaliStudents: '8,000+',
    visaSuccess: '92%+',
    psw: 'Up to 3 Years',
  },
  universities: [
    { name: 'University of Auckland', rank: 'QS #68', location: 'Auckland', tuition: 'NZD $40,000–58,000/year' },
    { name: 'University of Otago', rank: 'QS #206', location: 'Dunedin', tuition: 'NZD $29,000–45,000/year' },
    { name: 'Victoria University of Wellington', rank: 'QS #241', location: 'Wellington', tuition: 'NZD $35,000–48,000/year' },
    { name: 'AUT', rank: 'QS #251', location: 'Auckland', tuition: 'NZD $32,000–42,000/year' },
  ],
  tuitionTable: [
    { level: 'Diploma (Level 5–6)', tuition: 'NZD $18,000–25,000', npr: '15.8–22L' },
    { level: 'Bachelor\'s (Level 7)', tuition: 'NZD $25,000–45,000', npr: '22–39.6L' },
    { level: 'Master\'s (Level 8–9)', tuition: 'NZD $30,000–55,000', npr: '26.4–48L' },
  ],
  living: {
    inzMin: 20000,
    inzMinMonthly: 1667,
    actualMin: 2650,
    actualMax: 3950,
    auckland: 'NZD $2,800–3,500/month',
    dunedin: 'NZD $2,000–2,800/month',
    nprNote: '1 NZD ≈ 88 NPR (Feb 2026)',
  },
  visa: {
    fee: 850,
    processing: '8–10 weeks (80% in 2 weeks off-peak)',
    applyBefore: '4 months',
    onlineOnly: true,
  },
  financial: {
    livingMin: 20000,
    livingNpr: 1760000,
    tuition: 'Full first year',
    returnTravel: 'Required',
    bankBalanceNote: 'Funds must be genuinely available; INZ assesses source and duration',
  },
  ielts: [
    { level: 'Diploma', overall: '5.5', bands: 'No band below 5.0', pte: '42 (no skill below 36)' },
    { level: 'Bachelor\'s', overall: '6.0', bands: 'No band below 5.5', pte: '50 (no skill below 42)' },
    { level: 'Master\'s', overall: '6.5', bands: 'No band below 6.0', pte: '58 (no skill below 50)' },
  ],
  visaSteps: [
    'Receive offer of place from NZQA-approved institution',
    'Pay tuition deposit; obtain receipt',
    'Prepare financial documents: bank statements, sponsor letter if applicable',
    'Complete medical examination and chest X-ray (panel doctor)',
    'Submit student visa application online (Immigration NZ)',
    'Pay visa fee NZD $850',
    'Provide biometrics if requested',
    'Receive eVisa; book travel',
  ],
  rejectionReasons: [
    'Insufficient or unverifiable financial proof',
    'Genuine student intention not established',
    'English proficiency below requirement',
    'Medical or character concerns',
    'Incomplete or inconsistent documentation',
  ],
  workRights: {
    termTime: '20 hours/week',
    breaks: 'Full-time during scheduled breaks',
    minWage: 'NZD $22.70/hour',
  },
  psw: {
    level7Plus: 'Up to 3 years',
    level46: '1–2 years (study-related work for Level 4–6)',
  },
  scholarships: [
    { name: 'Manaaki New Zealand Scholarships', coverage: 'Full tuition, living, airfare', deadline: 'March 1–31, 2026' },
    { name: 'University scholarships', coverage: '10–50% tuition', note: 'Auckland, Otago, Victoria, AUT' },
  ],
  faqs: [
    {
      question: 'What is the cost of study in New Zealand from Nepal in 2026?',
      answer: 'Cost of study in New Zealand from Nepal: tuition NZD $25,000–55,000/year (NPR 22–48L); living NZD $20,000/year minimum per INZ (NPR ~17.6L); visa $850; airfare ~NZD $1,500. Total first year NZD $48,000–80,000 (NPR 42–70L). 1 NZD ≈ 88 NPR (Feb 2026).',
    },
    {
      question: 'New Zealand student visa from Nepal – what are the financial documents required?',
      answer: 'Financial documents required for New Zealand student visa from Nepal: bank statements showing tuition for first year + NZD $20,000 living + return travel. Statements within 30 days; sponsor letter if applicable. Immigration NZ assesses genuine availability and fund source. Minimum bank balance: sufficient for tuition + living + travel.',
    },
    {
      question: 'What is the visa process step by step for New Zealand from Nepal?',
      answer: 'Visa process step by step: (1) Get offer from NZQA institution; (2) Pay tuition deposit; (3) Prepare financial proof; (4) Medical exam; (5) Submit online application; (6) Pay NZD $850; (7) Biometrics if required; (8) Receive eVisa. Apply 4 months before departure. Based on Immigration NZ guidelines.',
    },
    {
      question: 'What is the IELTS requirement for New Zealand from Nepal?',
      answer: 'IELTS requirement for New Zealand: Diploma 5.5 overall (no band below 5.0); Bachelor\'s 6.0 (no band below 5.5); Master\'s 6.5 (no band below 6.0). PTE accepted: 42/50/58 respectively. Nursing and teaching may require higher. Check NZQA and university requirements.',
    },
    {
      question: 'Can I study in New Zealand without IELTS?',
      answer: 'Study in New Zealand without IELTS: Some pathways exist—prior English-medium education, PTE Academic, or NZCEL. Most universities require IELTS or PTE. Conditional offers with English course are possible. Verify with your chosen institution.',
    },
    {
      question: 'Study in New Zealand with full scholarship – how to apply?',
      answer: 'Study in New Zealand with full scholarship: Manaaki New Zealand Scholarships open March 1–31, 2026. Covers tuition, living, airfare. Apply at nzscholarships.govt.nz. University scholarships (10–50% tuition) at Auckland, Otago, Victoria, AUT. Competitive—strong academic record and application essential.',
    },
    {
      question: 'Work and study in New Zealand – how many hours?',
      answer: 'Work and study in New Zealand: 20 hours per week during term; full-time during scheduled breaks. Minimum wage NZD $22.70/hour. Must hold student visa with work conditions. Based on Immigration NZ rules.',
    },
    {
      question: 'What is the post-study work visa in New Zealand?',
      answer: 'Post-study work visa New Zealand: Bachelor\'s, Master\'s, PhD (Level 7+) get up to 3 years. Level 4–6 qualifications get 1–2 years with study-related work. Must complete 30+ weeks full-time study in NZ. From August 2026, Skilled Migrant Category may require 2 years work (down from 3) for PR.',
    },
    {
      question: 'What are common visa rejection reasons for New Zealand from Nepal?',
      answer: 'Visa rejection reasons: insufficient financial proof, unverifiable fund source, genuine student intention not established, English below requirement, medical/character concerns, incomplete documents. Prepare clear statements, consistent bank history, and complete paperwork. Consultancy for New Zealand in Nepal can help avoid these.',
    },
    {
      question: 'Nursing study in New Zealand from Nepal – which universities?',
      answer: 'Nursing study in New Zealand from Nepal: University of Auckland, University of Otago, AUT, Victoria Wellington offer nursing programmes. IELTS often 6.5–7.0 for nursing. Check Nursing Council of New Zealand requirements for licensure. Grows skilled work pathway to PR.',
    },
  ],
};

const comparisonNzAus = [
  { item: 'Tuition', nz: 'NZD $25,000–55,000/yr', aus: 'AUD $20,000–45,000/yr' },
  { item: 'Living (min)', nz: 'NZD $20,000/yr', aus: 'AUD $29,710/yr' },
  { item: 'Part-time', nz: '20 hrs/week', aus: '48 hrs/fortnight' },
  { item: 'PSW', nz: 'Up to 3 years', aus: '2–4 years' },
  { item: 'Min wage', nz: 'NZD $22.70/hr', aus: 'AUD $24.95/hr' },
];

export default function NewZealandStudyPage() {
  const visaStepsWithText = [
    { name: 'Receive offer of place from NZQA-approved institution', text: 'Obtain offer letter from NZQA-approved institution.' },
    { name: 'Pay tuition deposit; obtain receipt', text: 'Pay deposit and keep receipt for visa application.' },
    { name: 'Prepare financial documents: bank statements, sponsor letter if applicable', text: 'Bank statements within 30 days; tuition + NZD $20,000 living + return travel.' },
    { name: 'Complete medical examination and chest X-ray (panel doctor)', text: 'Medical exam at Immigration NZ panel doctor.' },
    { name: 'Submit student visa application online (Immigration NZ)', text: '100% online—no paper applications.' },
    { name: 'Pay visa fee NZD $850', text: 'Visa fee NZD $850 (2026).' },
    { name: 'Provide biometrics if requested', text: 'Biometrics if requested by INZ.' },
    { name: 'Receive eVisa; book travel', text: 'Processing 8–10 weeks; 80% in 2 weeks off-peak.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in New Zealand from Nepal 2026 – Complete Guide',
        description: 'Complete 2026 guide: NZ visa $850, living NZD $20,000/yr, IELTS, Manaaki Scholarships. For Nepali students. San Marina Education Consultancy.',
        datePublished: '2024-01-15',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for New Zealand study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in New Zealand from Nepal', 'NZ student visa', 'Immigration NZ', 'NZQA', 'Manaaki scholarships'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: nzData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Study in New Zealand', item: 'https://www.sanmarina.edu.np/study-abroad/nz/' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for New Zealand Student Visa from Nepal',
        description: 'Step-by-step: offer from NZQA institution, financial proof, medical exam, online application. Based on Immigration NZ 2026 guidelines.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={nzData.heroImage} alt="Nepali students in Auckland, New Zealand – study abroad destination 2026 – San Marina Education Consultancy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#16213e]/85 to-[#0f3460]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Study in New Zealand</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: February 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in New Zealand from Nepal<br />
            <span className="text-blue-300">2026 Complete Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Visa process, cost in NPR, IELTS, post-study work up to 3 years. Based on Immigration NZ and Education New Zealand 2026 data.
          </p>
          <p className="text-lg text-white/80 mb-8">
            As a leading <strong>consultancy for New Zealand in Nepal</strong>, we guide visa applications, financial proof, and university selection. Kathmandu, Dang, Itahari. Free first consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg">
              Apply Now
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: Immigration NZ, NZQA, Education New Zealand.</strong> Living NZD $20,000/yr minimum; visa $850. Verify at <a href="https://www.immigration.govt.nz/new-zealand-visas/visas/visa/full-fee-paying-student-visa" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">immigration.govt.nz</a>, <a href="https://www.studyinnewzealand.govt.nz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinnewzealand.govt.nz</a>, <a href="https://www.nzqa.govt.nz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nzqa.govt.nz</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By San Marina Education Consultancy · QEAC & PIER Certified · Study abroad for Nepali students since 2014
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in New Zealand from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">NZD $25,000–55,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living (INZ min)</td><td className="p-3">NZD $20,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa fee</td><td className="p-3">NZD $850</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">8–10 weeks (80% in 2 weeks off-peak)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study work</td><td className="p-3">Up to 3 years (Level 7+)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Part-time work</td><td className="p-3">20 hrs/week; min wage $22.70/hr</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Manaaki Scholarships</td><td className="p-3">March 1–31, 2026</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: Immigration NZ, NZQA. Verify at <a href="https://www.immigration.govt.nz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">immigration.govt.nz</a>, <a href="https://www.studyinnewzealand.govt.nz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinnewzealand.govt.nz</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: nzData.stats.universities, label: 'Universities' },
              { value: nzData.stats.nepaliStudents, label: 'Nepali Students' },
              { value: nzData.stats.visaSuccess, label: 'Visa Success' },
              { value: nzData.stats.psw, label: 'Post-Study Work' },
              { value: '1,500+', label: 'Students Placed' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in New Zealand from Nepal?</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> <strong>Study in New Zealand from Nepal</strong> offers 8 universities, post-study work up to 3 years, safe environment, and clear PR pathway. Tuition NZD $25,000–55,000/year; living NZD $20,000/year minimum. Compare with <Link href="/study-abroad/aus/" className="text-blue-600 hover:underline">Australia</Link>, <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>, or <Link href="/study-abroad/can/" className="text-blue-600 hover:underline">Canada</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          New Zealand combines quality education with work-life balance. All 8 universities are ranked globally. Immigration NZ requires NZD $20,000/year for living; INZ assesses financial proof for genuineness. Over 8,000 Nepali students study in New Zealand. <strong>Best courses for Nepali students</strong> include nursing, IT, business, and engineering—many on skill shortage lists for PR.
        </p>
      </section>

      {/* Visa Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">New Zealand Student Visa from Nepal</h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            <strong>Quick answer:</strong> According to Immigration NZ, <strong>New Zealand student visa from Nepal</strong> requires offer from NZQA institution, financial proof (tuition + NZD $20,000 living + return travel), medical exam, and online application. Visa fee NZD $850. Processing 8–10 weeks; 80% within 2 weeks off-peak. Apply 4 months ahead. 100% online—no paper applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <FileText className="text-[#0056b3] mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Visa Fee</h3>
              <p className="text-2xl font-bold">NZD ${nzData.visa.fee}</p>
              <p className="text-gray-600 text-sm">Online only</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <Clock className="text-green-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Processing</h3>
              <p className="text-gray-700">{nzData.visa.processing}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <DollarSign className="text-orange-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Living (INZ min)</h3>
              <p className="text-2xl font-bold">NZD ${nzData.financial.livingMin.toLocaleString()}/yr</p>
              <p className="text-gray-600 text-sm">NPR ~{Math.round(nzData.financial.livingNpr/100000)}L</p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Visa Process Step by Step</h3>
          <ol className="space-y-3">
            {nzData.visaSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 bg-amber-50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-[#001F3F] mb-3">Common Visa Rejection Reasons</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {nzData.rejectionReasons.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Financial / Bank Balance */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Minimum Bank Balance & Financial Documents Required</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> <strong>Minimum bank balance requirement</strong> for New Zealand: tuition for first year + NZD $20,000 living + return travel. Immigration NZ assesses fund source, duration held, and genuine availability. <strong>Financial documents required</strong> include bank statements (within 30 days), sponsor letter if applicable, and evidence of income.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Gap accepted for visa:</strong> Study gaps of 1–2 years are generally acceptable with explanation. Longer gaps may need work experience or courses. INZ focuses on genuine student intention. Prepare a clear gap explanation letter. San Marina helps Nepali applicants structure financial proof to meet INZ standards.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Study in New Zealand from Nepal (2026)</h2>
          <p className="text-lg text-gray-700 mb-8">
            <strong>Quick answer:</strong> According to Immigration NZ, <strong>cost of study in New Zealand from Nepal</strong>: tuition NZD $25,000–55,000/year (NPR 22–48L); living NZD $20,000/year minimum (NPR ~17.6L); visa $850; airfare ~NZD $1,500. <strong>Total yearly budget</strong> NZD $48,000–80,000 (NPR 42–70L). <Link href="/scholarships/" className="text-blue-600 hover:underline">Manaaki and university scholarships</Link> can reduce costs.
          </p>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees (NZD + NPR Conversion)</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Level</th>
                  <th className="p-4 text-left">Tuition (NZD/year)</th>
                  <th className="p-4 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                {nzData.tuitionTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4">{row.level}</td>
                    <td className="p-4">{row.tuition}</td>
                    <td className="p-4">{row.npr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <Home className="text-green-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Living Cost per Month</h3>
              <p className="text-gray-700">Auckland: {nzData.living.auckland}. Dunedin: {nzData.living.dunedin}. INZ minimum NZD $1,667/month ({nzData.living.inzMin.toLocaleString()}/year).</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <Plane className="text-cyan-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Exchange Rate</h3>
              <p className="text-gray-700">{nzData.living.nprNote}</p>
            </div>
          </div>
          <h3 className="font-bold text-[#001F3F] mt-8 mb-4">Accommodation for Nepali Students</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">University hall</td><td className="p-3">NZD $800–1,500</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Shared flat (Auckland)</td><td className="p-3">NZD $900–1,400</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Shared flat (Dunedin)</td><td className="p-3">NZD $600–1,000</td></tr>
                <tr><td className="p-3">Homestay</td><td className="p-3">NZD $350–450/week</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-[#001F3F] mt-8 mb-4">Intakes & When to Apply</h3>
          <p className="text-gray-700 mb-4">New Zealand has two main intakes: <strong>February/March</strong> (apply Sept–Nov) and <strong>July</strong> (apply Apr–May). Manaaki Scholarships: March 1–31, 2026. Apply 4 months before your intended start.</p>
        </div>
      </section>

      {/* IELTS & Language */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">IELTS & PTE Requirement for New Zealand from Nepal</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> <strong>IELTS requirement for New Zealand from Nepal</strong>: Diploma 5.5 overall (no band &lt;5.0); Bachelor&apos;s 6.0 (no band &lt;5.5); Master&apos;s 6.5 (no band &lt;6.0). <strong>PTE requirement</strong>: 42/50/58 respectively. Nursing and teaching often require higher. <strong>Minimum band score</strong> must be met in all four skills. Based on NZQA and university requirements.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-4 text-left">Level</th>
                <th className="p-4 text-left">IELTS</th>
                <th className="p-4 text-left">PTE</th>
              </tr>
            </thead>
            <tbody>
              {nzData.ielts.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4">{row.level}</td>
                  <td className="p-4">{row.overall} ({row.bands})</td>
                  <td className="p-4">{row.pte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-gray-700">
          <strong>Study in New Zealand without IELTS:</strong> Some pathways—prior English-medium education, PTE, or NZCEL. Most universities require IELTS or PTE. Conditional offers with English course possible. Check institution.
        </p>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in New Zealand with Full Scholarship</h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            <strong>Quick answer:</strong> <strong>New Zealand government scholarship 2026</strong>: Manaaki New Zealand Scholarships open March 1–31, 2026. Full tuition, living, airfare. <strong>University scholarships for Nepali students</strong>: Auckland, Otago, Victoria, AUT offer 10–50% tuition waivers. Apply directly to universities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {nzData.scholarships.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-[#001F3F] mb-2">{s.name}</h3>
                <p className="text-gray-700 text-sm mb-1">Coverage: {s.coverage}</p>
                <p className="text-green-600 text-sm">Deadline: {s.deadline}</p>
                {s.note && <p className="text-gray-600 text-sm mt-2">{s.note}</p>}
              </div>
            ))}
          </div>
          <p className="mt-6">
            Manaaki Scholarships: <a href="https://www.nzscholarships.govt.nz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nzscholarships.govt.nz</a>. <Link href="/scholarships/" className="text-blue-600 hover:underline">See all scholarships</Link>
          </p>
        </div>
      </section>

      {/* Work & PR */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work and Study in New Zealand & PR Pathway</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> <strong>Work and study in New Zealand</strong>: 20 hours/week during term; full-time during breaks. Minimum wage NZD $22.70/hour. <strong>Post-study work visa</strong>: up to 3 years for Bachelor&apos;s, Master&apos;s, PhD. <strong>PR pathway after study</strong>: Skilled Migrant Category; from August 2026 may require 2 years skilled work (down from 3).
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <Briefcase className="text-[#0056b3] mb-3" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Part-time Work Hours Allowed</h3>
            <p className="text-gray-700">{nzData.workRights.termTime} during term; full-time during scheduled breaks. Min wage {nzData.workRights.minWage}.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <Clock className="text-green-600 mb-3" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Post-Study Work Visa</h3>
            <p className="text-gray-700">Level 7+ (Bachelor/Master/PhD): {nzData.psw.level7Plus}. Level 4–6: {nzData.psw.level46}.</p>
          </div>
        </div>
      </section>

      {/* Best Courses / Nursing / Masters / Diploma */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Best Courses for Nepali Students: Nursing, Masters, Diploma</h2>
          <p className="text-gray-700 mb-8">
            <strong>Quick answer:</strong> <strong>Nursing study in New Zealand from Nepal</strong> at Auckland, Otago, AUT—on skill shortage list. <strong>Masters in New Zealand from Nepal</strong>: 1–2 years; business, IT, engineering popular. <strong>Diploma in New Zealand from Nepal</strong>: Level 5–6; 1–2 years; lower tuition; pathway to degree.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nzData.universities.map((uni, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-4">
                  <h3 className="font-bold text-white">{uni.name}</h3>
                  <p className="text-blue-200 text-sm">{uni.rank} • {uni.location}</p>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm">{uni.tuition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NZ vs Australia */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">New Zealand vs Australia – 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-sm">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-4 text-left">Item</th>
                <th className="p-4 text-left">New Zealand</th>
                <th className="p-4 text-left">Australia</th>
              </tr>
            </thead>
            <tbody>
              {comparisonNzAus.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4 font-semibold">{row.item}</td>
                  <td className="p-4">{row.nz}</td>
                  <td className="p-4">{row.aus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in New Zealand FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in New Zealand from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={nzData.faqs} />
          </div>
        </div>
      </section>

      {/* Why Trust / Consultancy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">Best Education Consultancy in Nepal for NZ</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            San Marina is a leading <strong>consultancy for New Zealand in Nepal</strong>. We guide visa applications, financial proof, IELTS prep, and university selection. Offices in Kathmandu, Dang, Itahari. <Link href="/about/" className="text-blue-600 hover:underline">QEAC certified</Link>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: nzData.stats.visaSuccess, label: 'Visa Success', icon: CheckCircle2 },
              { value: '2+', label: 'Years Experience', icon: Clock },
              { value: '1,500+', label: 'Students Placed', icon: Users },
              { value: 'NZQA', label: 'Partner Institutions', icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <stat.icon className="w-8 h-8 text-[#0056b3] mx-auto mb-3" />
                <p className="text-3xl font-bold text-[#001F3F]">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0056b3] via-[#004494] to-[#003366] mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in New Zealand from Nepal?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            From visa process to financial proof and university selection—we support students from Kathmandu, Dang, and Itahari. Book a free consultation or message us on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center justify-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">Book Free Consultation</Link>
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">Apply Now</Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            <Link href="/study-abroad/aus/" className="underline font-medium">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="underline font-medium">Canada</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="underline font-medium">UK</Link>
            {' · '}
            <Link href="/study-abroad/usa/" className="underline font-medium">USA</Link>
            {' · '}
            <Link href="/study-abroad/ireland/" className="underline font-medium">Ireland</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
          </p>
          <p className="mt-4 text-blue-400 text-xs">QEAC Certified • NZ Visa Specialists | Last Updated: February 2026</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/ireland/" className="text-blue-600 font-semibold hover:underline">Ireland</Link>
            {' · '}
            <Link href="/scholarships/" className="text-blue-600 font-semibold hover:underline">Scholarships</Link>
            {' · '}
            <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Free consultation</Link>
          </p>
          <Link href="/consultation/" className="inline-flex items-center px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#003366] transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
