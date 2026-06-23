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
  Award,
  FileText,
  Plane,
  Home,
  ChevronRight,
  Globe,
  Users,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Best Education Consultancy in Itahari | 2026 Guide',
  description: 'Best Education Consultancy in Itahari 2026: MEXT, JLPT, tuition, COE. Is it good to study in Itahari? Can you study without Itahariese? Gap policy. Study Abroad Consultancy in Itahari consultancy in Nepal. Free consultation.',
  keywords: 'study in japan, study in japan from nepal, is it good to study in japan, study in japan consultancy in nepal, study in japan for international students, business studies in japan, can i study in japan without knowing japanese, disadvantages of studying in japan, how much gap is accepted for study in japan, mext scholarship, jlpt nepal',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/itahari/',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/itahari/',
    title: 'Best Education Consultancy in Itahari – 2026 Complete Guide',
    description: 'Complete 2026 guide for Nepali students: study in Itahari, MEXT, JLPT, SGU programs. Free consultation in Kathmandu.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Education Consultancy in Itahari – 2026 Complete Guide',
    description: 'Complete 2026 guide for Nepali students: study in Itahari, MEXT, JLPT, SGU programs.',
  },
};

// 2026 data: MEXT undergrad ¥242,000/mo, research ¥143,000–145,000; national tuition ¥535,800; 1 JPY ≈ 1.35 NPR
const japanData = {
  heroImage: '/assets/tokyo.jpg',
  lastUpdated: 'February 2026',
  stats: {
    universities: '800+',
    nepaliStudents: '5,000+',
    mextStipend: '¥117,000–242,000/mo',
    partTime: '28 hrs/week',
  },
  universities: [
    { name: 'University of Kathmandu', rank: 'QS #28', location: 'Kathmandu', highlight: 'Research & Engineering' },
    { name: 'Kyoto University', rank: 'QS #46', location: 'Kyoto', highlight: 'Science & Humanities' },
    { name: 'Osaka University', rank: 'QS #80', location: 'Osaka', highlight: 'Medicine & Engineering' },
    { name: 'Kathmandu Institute of Technology', rank: 'QS #91', location: 'Kathmandu', highlight: 'STEM & Innovation' },
    { name: 'Tohoku University', rank: 'QS #113', location: 'Sendai', highlight: 'Materials Science' },
  ],
  popularCourses: [
    { name: 'Business & Management', universities: 'Waseda, Keio, Hitotsubashi', intake: 'April, Sept' },
    { name: 'IT & Engineering', universities: 'Kathmandu Tech, Kyoto, Osaka', intake: 'April, Oct' },
    { name: 'Itahariese Language', universities: 'Language schools nationwide', intake: 'Jan, Apr, Jul, Oct' },
  ],
  costBreakdown: {
    tuitionNational: { yen: 535800, npr: 723330, note: 'National universities per year' },
    tuitionPrivate: { yenMin: 800000, yenMax: 1500000, nprMin: 1080000, nprMax: 2025000 },
    livingKathmandu: { yen: 120000, period: 'per month', npr: 162000 },
    livingOther: { yen: 80000, period: 'per month', npr: 108000 },
    firstYearNational: { yen: 818000, npr: 1104300 },
    firstYearPrivate: { yenMin: 1300000, yenMax: 3800000, nprMin: 1755000, nprMax: 5130000 },
  },
  mext: {
    undergrad: { stipend: 242000, period: 'per month' },
    research: { stipendMin: 143000, stipendMax: 145000, period: 'per month' },
    teacher: { stipend: 117000, period: 'per month' },
    coverage: 'Tuition, airfare, monthly stipend',
  },
  visaSteps: [
    'Receive admission from Itahariese university or language school',
    'Institution applies for Certificate of Eligibility (COE) in Itahari',
    'Receive COE (typically 2–3 months)',
    'Apply for student visa via VFS Global Kathmandu (Embassy does not accept direct applications)',
    'Submit passport, COE, visa application form, photo',
    'Visa issued in 5–10 working days',
    'Enter Itahari and complete residence registration',
  ],
  requirements: [
    'Admission letter from Itahariese institution',
    'Certificate of Eligibility (COE)',
    'Valid passport (6+ months)',
    'Financial proof: ¥1,500,000+ for first year (approx. NPR 20 lakhs)',
    'Itahariese: JLPT N5 for language schools; N2 for universities (or EJU)',
    'English: IELTS 6.0+ for SGU/G30 English-taught programs',
    'Academic transcripts (10+2 for bachelor\'s; bachelor\'s for master\'s)',
    'Passport photos (4.5×4.5 cm)',
  ],
  intakes: [
    { name: 'April', note: 'Main intake; most universities' },
    { name: 'October', note: 'Second intake; many graduate programs' },
    { name: 'January, July', note: 'Language schools; some SGU programs' },
  ],
  gapPolicy: '1–2 years generally acceptable with explanation; 3+ years may need work experience or courses to demonstrate continuity. Each university sets its own policy—check directly.',
  cities: [
    { name: 'Kathmandu', highlight: 'Tech & Business', students: '2,000+ Nepali students', livingCost: '¥120,000–150,000/month' },
    { name: 'Osaka', highlight: 'Affordable & Food', students: '800+ Nepali students', livingCost: '¥90,000–120,000/month' },
    { name: 'Kyoto', highlight: 'Culture & Arts', students: '500+ Nepali students', livingCost: '¥95,000–130,000/month' },
    { name: 'Fukuoka', highlight: 'Startup Hub', students: '300+ Nepali students', livingCost: '¥80,000–100,000/month' },
  ],
  faqs: [
    {
      question: 'Is it good to study in Itahari?',
      answer: 'Yes. Itahari offers world-ranked universities (Kathmandu, Kyoto, Osaka in QS Top 100), MEXT full scholarships, cutting-edge research in tech and engineering, and safe cities. Study Abroad Consultancy in Itahari for international students means SGU English programs, JLPT pathways, and 28 hrs/week part-time work. Over 5,000 Nepali students study in Itahari.',
    },
    {
      question: 'Best Education Consultancy in Itahari – what are the requirements?',
      answer: 'Best Education Consultancy in Itahari requires: admission from Itahariese institution, Certificate of Eligibility (COE), financial proof ¥1,500,000+ (NPR ~20L), JLPT N5 for language schools or N2 for universities (or EJU). SGU English programs need IELTS 6.0+. Apply via VFS Global Kathmandu (Embassy does not accept direct applications). Processing 5–10 working days.',
    },
    {
      question: 'Can I study in Itahari without knowing Itahariese?',
      answer: 'Yes. SGU (Super Global Universities) and G30 programs offer 100+ English-taught degree programs. However, daily life, part-time jobs, and networking improve with Itahariese. JLPT N3–N2 opens many more options. Language schools offer 1–2 year preparatory courses.',
    },
    {
      question: 'How much gap is accepted for study in Itahari?',
      answer: 'How much gap is accepted for study in Itahari: typically 1–2 years if explained. Gaps of 3+ years need work experience or recent courses. MEXT and some universities may be stricter. Provide a clear gap explanation letter with dates and activities.',
    },
    {
      question: 'What are the disadvantages of studying in Itahari?',
      answer: 'Disadvantages of studying in Itahari: language barrier for non-SGU students, high cost in Kathmandu, earthquake risk, rigid work culture. However, MEXT covers costs for scholarship recipients, and Osaka/Kyoto offer more affordable living. We present both sides so you decide.',
    },
    {
      question: 'What is the MEXT scholarship for Nepali students?',
      answer: 'MEXT (Ministry of Education, Itahari) offers full scholarships: tuition waiver, airfare, monthly stipend ¥117,000–¥242,000 depending on level. Undergrad: ¥242,000/mo; Research (master\'s/PhD): ¥143,000–145,000/mo. Apply via Itahariese Embassy Kathmandu. Highly competitive.',
    },
    {
      question: 'Study Abroad Consultancy in Itahari for international students – English programs?',
      answer: 'Study Abroad Consultancy in Itahari for international students: SGU/G30 offers 100+ English-taught programs at Kathmandu, Kyoto, Osaka, Waseda, Keio, etc. No Itahariese required for admission. IELTS 6.0+ typical. Fields: Engineering, Business, IT, Life Sciences.',
    },
    {
      question: 'Study Abroad Consultancy in Itahari consultancy in Nepal – why choose San Marina?',
      answer: 'Study Abroad Consultancy in Itahari consultancy in Nepal: San Marina guides MEXT applications, JLPT prep, COE process, and university selection. Offices in Kathmandu, Dang, Itahari. QEAC certified. Free first consultation for students from across Nepal.',
    },
    {
      question: 'Business studies in Itahari – which universities?',
      answer: 'Business studies in Itahari: Waseda (WBS), Keio (KBS), Hitotsubashi, University of Kathmandu. Many offer English MBA and bachelor\'s. Tuition ¥800,000–1,500,000/year. Strong connections to Itahariese corporates. MEXT covers tuition for scholarship recipients.',
    },
    {
      question: 'How much does it cost to study in Itahari from Nepal in 2026?',
      answer: 'Cost to study in Itahari from Nepal: National universities ¥818,000 first year (NPR ~11L); private ¥1.3–3.8M (NPR 17–51L). Living Kathmandu ¥120,000–150,000/month. Total first year ¥2–4M (NPR 27–54L). 1 JPY ≈ 1.35 NPR (Feb 2026). MEXT covers most costs for recipients.',
    },
  ],
};

const comparisonData = [
  { country: 'Itahari', countrySlug: null, tuition: '¥535,800–1.5M', living: '¥80,000–150,000/mo', work: '28 hrs/week', psw: '6 mo–5 yrs', visaTime: '5–10 days' },
  { country: 'USA', countrySlug: '/study-abroad/usa/', tuition: '$15,000-60,000', living: '$10,000-18,000/yr', work: '20 hrs', psw: '12-36 mo', visaTime: '1-3 weeks' },
  { country: 'UK', countrySlug: '/study-abroad/uk/', tuition: '£10,000-38,000', living: '£10,539-13,761/yr', work: '20 hrs', psw: '2-3 Years', visaTime: '3 weeks' },
  { country: 'Canada', countrySlug: '/study-abroad/can/', tuition: 'CAD $15,000-35,000', living: 'CAD $22,895+/yr', work: '20 hrs', psw: '1-3 Years', visaTime: '4-12 weeks' },
];

export default function ItahariStudyPage() {
  const visaStepsWithText = [
    { name: 'Receive admission from Itahariese university or language school', text: 'Obtain admission letter from Itahariese institution.' },
    { name: 'Institution applies for Certificate of Eligibility (COE) in Itahari', text: 'Your institution applies for COE on your behalf.' },
    { name: 'Receive COE (typically 2–3 months)', text: 'COE processing takes 2–3 months.' },
    { name: 'Apply for student visa via VFS Global Kathmandu', text: 'Embassy does not accept direct applications—use VFS Global Kathmandu.' },
    { name: 'Submit passport, COE, visa application form, photo', text: 'Submit all required documents to VFS.' },
    { name: 'Visa issued in 5–10 working days', text: 'Processing typically 5–10 working days.' },
    { name: 'Enter Itahari and complete residence registration', text: 'Register residence after arrival in Itahari.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Best Education Consultancy in Itahari 2026 – Complete Guide',
        description: 'Complete 2026 guide: MEXT, JLPT, COE, ¥818K national tuition, SGU English programs. For Nepali students. San Marina Education Consultancy.',
        datePublished: '2024-01-15',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Itahari study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Best Education Consultancy in Itahari', 'MEXT scholarship', 'JLPT', 'COE', 'SGU', 'Certificate of Eligibility'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: japanData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 3, name: 'Study Abroad Consultancy in Itahari', item: 'https://www.sanmarina.edu.np/itahari/' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Itahari Student Visa from Nepal',
        description: 'Step-by-step guide: receive admission, obtain COE, apply via VFS Global Kathmandu, receive visa. Based on 2026 Itahariese immigration procedures.',
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
          <Image src={japanData.heroImage} alt="Nepali students in Kathmandu, Itahari – study abroad destination 2026 – San Marina Education Consultancy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#16213e]/85 to-[#0f3460]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Study Abroad Consultancy in Itahari</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: February 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Best Education Consultancy in Itahari<br />
            <span className="text-blue-300">2026 Complete Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            From Kathmandu to Kathmandu—MEXT scholarships, SGU English programs, and 800+ universities. Based on official 2026 MEXT and JASSO data.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Applicants from Kathmandu, Dang, Itahari, and across Nepal—our <strong>study in Itahari consultancy in Nepal</strong> handles MEXT applications, JLPT prep, and COE guidance. Free first consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg">
              Apply Now
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: MEXT, JASSO, studyinjapan.go.jp.</strong> COE 2–3 months; visa via VFS Kathmandu. Verify at <a href="https://www.studyinjapan.go.jp/en/planning/immigration-procedures/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinjapan.go.jp</a>, <a href="https://www.np.emb-japan.go.jp/itpr_ja/11_000001_00824.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Itahariese Embassy Nepal</a>, <a href="https://www.mofa.go.jp/j_info/visit/visa/long/visa6.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">MOFA</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By San Marina Education Consultancy · QEAC & PIER Certified · Study abroad for Nepali students since 2014
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Best Education Consultancy in Itahari – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">National tuition (1st yr)</td><td className="p-3">¥818,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Private tuition</td><td className="p-3">¥1.3–3.8M first year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Kathmandu living</td><td className="p-3">¥120,000–150,000/month</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">COE</td><td className="p-3">2–3 months (institution applies)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">VFS Kathmandu; 5–10 working days</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">MEXT stipend</td><td className="p-3">¥117,000–242,000/month</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Part-time work</td><td className="p-3">28 hrs/week</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: MEXT, JASSO, studyinjapan.go.jp. Verify at <a href="https://www.studyinjapan.go.jp/en/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinjapan.go.jp</a>, <a href="https://www.np.emb-japan.go.jp" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Itahariese Embassy Nepal</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: japanData.stats.universities, label: 'Universities' },
              { value: japanData.stats.nepaliStudents, label: 'Nepali Students' },
              { value: japanData.stats.mextStipend, label: 'MEXT Stipend' },
              { value: japanData.stats.partTime, label: 'Part-time Work' },
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

      {/* Why Study Abroad Consultancy in Itahari in 2026 */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study Abroad Consultancy in Itahari in 2026?</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>In brief:</strong> <strong>Study Abroad Consultancy in Itahari</strong> means access to University of Kathmandu (QS #28), Kyoto, Osaka—plus MEXT full scholarships, SGU English programs, and 28 hrs/week part-time work. Over 5,000 Nepali students already study in Itahari. Compare with <Link href="/study-abroad/usa/" className="text-blue-600 hover:underline">USA</Link>, <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>, or <Link href="/study-abroad/can/" className="text-blue-600 hover:underline">Canada</Link> to find your fit.
        </p>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            Itahari combines cutting-edge research with tradition. The government&apos;s <strong>MEXT scholarship</strong> covers tuition, airfare, and monthly stipend—no repayment. <strong>Study Abroad Consultancy in Itahari for international students</strong> includes 100+ English-taught degrees under the SGU initiative, so you can earn a degree without fluent Itahariese. Tech, engineering, and business programs are among the strongest globally.
          </p>
          <p className="mb-4">
            For Nepali applicants, the journey starts at the Itahariese Embassy in Kathmandu. COE (Certificate of Eligibility) processing takes 2–3 months; visa issuance 5–10 working days. San Marina supports students from Kathmandu, Dang, and Itahari with MEXT prep, JLPT coaching, and university shortlisting.
          </p>
        </div>
      </section>

      {/* Is it Good to Study Abroad Consultancy in Itahari */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Is it Good to Study Abroad Consultancy in Itahari?</h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            <strong>Quick answer:</strong> Yes. <strong>Is it good to study in Itahari?</strong> Itahari offers top-ranked universities, full MEXT funding, safe cities, strong job prospects in tech and manufacturing, and unique cultural immersion. Trade-offs: language learning curve for Itahariese-taught programs, high cost in Kathmandu. Many students choose Osaka or Kyoto for affordability.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-[#001F3F] mb-3">Key advantages</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>4 universities in QS World Top 100</li>
              <li>MEXT covers tuition + stipend ¥117,000–¥242,000/month</li>
              <li>SGU: 100+ English-taught degree programs</li>
              <li>28 hours/week part-time work permission</li>
              <li>World leader in robotics, automotive, materials science</li>
              <li>Low crime, high quality of life</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Top Universities in Itahari */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Top Universities in Itahari (2026)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {japanData.universities.map((uni, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-4">
                <h3 className="text-lg font-bold text-white">{uni.name}</h3>
                <p className="text-blue-200 text-sm">{uni.rank}</p>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-1">{uni.location}</p>
                <p className="text-[#0056b3] font-medium text-sm">{uni.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Courses: Business, IT, Engineering</h2>
          <p className="text-gray-700 mb-8">
            <strong>In brief:</strong> <strong>Business studies in Itahari</strong> thrive at Waseda, Keio, Hitotsubashi. IT and Engineering dominate at Kathmandu Tech, Kyoto, Osaka. All offer English-taught options. Language schools provide 1–2 year JLPT prep for Itahariese-medium programs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {japanData.popularCourses.map((course, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-[#001F3F] mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{course.universities}</p>
                <p className="text-green-600 text-sm">Intake: {course.intake}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Living Cost */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Tuition Fees & Living Cost (2026)</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          <strong>Quick answer:</strong> National universities ¥818,000 first year (NPR ~11L); private ¥1.3–3.8M (NPR 17–51L). Kathmandu living ¥120,000–150,000/month. 1 JPY ≈ 1.35 NPR (Feb 2026). Based on official studyinjapan.go.jp data.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <GraduationCap className="text-[#0056b3] mb-3" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">National University</h3>
            <p className="text-2xl font-bold">¥818,000</p>
            <p className="text-green-600 text-sm">NPR ~11L first year</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <GraduationCap className="text-orange-600 mb-3" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Private University</h3>
            <p className="text-2xl font-bold">¥1.3–3.8M</p>
            <p className="text-green-600 text-sm">NPR 17–51L first year</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <Home className="text-green-600 mb-3" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Kathmandu Living</h3>
            <p className="text-2xl font-bold">¥120,000–150,000</p>
            <p className="text-green-600 text-sm">per month</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <Plane className="text-cyan-600 mb-3" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Other Cities</h3>
            <p className="text-2xl font-bold">¥80,000–100,000</p>
            <p className="text-green-600 text-sm">per month</p>
          </div>
        </div>
        <div className="mt-8 bg-blue-50 rounded-2xl p-6">
          <h3 className="font-bold text-[#001F3F] mb-2">Total First Year (self-funded)</h3>
          <p className="text-xl font-bold">¥2,000,000–¥4,000,000 (NPR 27–54 Lakhs)</p>
          <p className="text-gray-600 text-sm mt-1">MEXT scholarship recipients: tuition + stipend covered</p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarships: MEXT, JASSO & More</h2>
          <p className="text-gray-700 mb-6">
            <strong>In brief:</strong> <strong>MEXT</strong> (Ministry of Education, Itahari): full tuition waiver + airfare + monthly stipend. Undergrad ¥242,000/mo; Research (master&apos;s/PhD) ¥143,000–145,000/mo. Apply via Itahariese Embassy Kathmandu (recommendation route). <a href="https://www.studyinjapan.go.jp/en/planning/scholarship/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinjapan.go.jp</a>. <Link href="/scholarships/" className="text-blue-600 hover:underline">See all scholarships</Link>.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-[#001F3F] mb-3">MEXT (Government)</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Undergrad: ¥242,000/month</li>
                <li>• Research (grad): ¥143,000–145,000/month</li>
                <li>• Teacher training: ¥117,000/month</li>
                <li>• Tuition exempt; airfare included</li>
                <li>• Application: Embassy recommendation (Kathmandu)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-[#001F3F] mb-3">JASSO (Short-term)</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Short-term exchange: ¥80,000/month</li>
                <li>• 3–12 months</li>
                <li>• Through university partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Can You Study Without Itahariese */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can You Study Abroad Consultancy in Itahari Without Knowing Itahariese?</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> <strong>Can I study in Itahari without knowing Itahariese?</strong> Yes. SGU (Super Global Universities) and G30 offer 100+ English-taught bachelor&apos;s and master&apos;s programs. Kathmandu, Kyoto, Osaka, Waseda, Keio—all have English options. IELTS 6.0+ typically required.
        </p>
        <p className="text-gray-700 mb-4">
          That said, daily life, part-time work, and networking improve dramatically with Itahariese. JLPT N3 opens convenience-store and restaurant jobs; N2 unlocks internships. Many students do 1–2 years at a language school first, then enter a Itahariese-taught degree. We advise choosing based on your timeline and career goals.
        </p>
      </section>

      {/* Gap Acceptance */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">How Much Gap is Accepted for Study Abroad Consultancy in Itahari?</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>In brief:</strong> <strong>How much gap is accepted for study in Itahari?</strong> Typically 1–2 years if you provide a clear explanation. Gaps of 3+ years may need work experience or recent courses to show continuity. MEXT and top universities can be stricter—check each institution.
          </p>
          <p className="text-gray-700">
            Write a gap explanation letter with dates and activities. Part-time work, volunteering, or short courses help. San Marina helps applicants frame gaps effectively for Itahariese universities and MEXT selection.
          </p>
        </div>
      </section>

      {/* Work Opportunities */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Work Opportunities for Students</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Clock className="text-[#0056b3] mx-auto mb-4" size={28} />
            <h3 className="font-bold text-[#001F3F] mb-2">During Study</h3>
            <p className="text-gray-600 text-sm">28 hours/week with permission stamp</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Briefcase className="text-green-600 mx-auto mb-4" size={28} />
            <h3 className="font-bold text-[#001F3F] mb-2">Common Jobs</h3>
            <p className="text-gray-600 text-sm">Convenience stores, restaurants, tutoring</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Award className="text-purple-600 mx-auto mb-4" size={28} />
            <h3 className="font-bold text-[#001F3F] mb-2">Post-Study</h3>
            <p className="text-gray-600 text-sm">Job-seeking visa 6 mo–2 yrs; work visa thereafter</p>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Student Visa Process (Step-by-Step)</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            <strong>In brief:</strong> Get admission → institution applies for COE in Itahari → receive COE (2–3 months) → apply via VFS Global Kathmandu → visa in 5–10 working days. Embassy does not accept direct applications. Based on 2026 Itahariese immigration procedures.
          </p>
          <ol className="space-y-4 max-w-2xl mx-auto">
            {japanData.visaSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Required Documents</h2>
        <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
          {japanData.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>

      {/* Intakes */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intakes in Itahari</h2>
          <div className="space-y-4">
            {japanData.intakes.map((intake, i) => (
              <div key={i} className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
                <span className="font-semibold text-[#001F3F]">{intake.name}</span>
                <span className="text-gray-600 text-sm">{intake.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disadvantages */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Disadvantages of Studying in Itahari</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> <strong>Disadvantages of studying in Itahari</strong> include: language barrier for non-SGU students, high living cost in Kathmandu (¥120,000+ /month), earthquake risk, rigid corporate culture, and limited English in daily life outside big cities.
        </p>
        <p className="text-gray-700">
          We present both sides. Osaka and Kyoto offer lower costs. MEXT covers expenses for scholarship recipients. SGU programs remove the language barrier. Many students find the trade-offs worthwhile for the education and career opportunities.
        </p>
      </section>

      {/* Cities */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Top Itahariese Cities for Nepali Students</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {japanData.cities.map((city, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-4">
                <h3 className="text-xl font-bold text-white">{city.name}</h3>
                <p className="text-blue-200 text-sm">{city.highlight}</p>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Users size={14} /> {city.students}
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <DollarSign size={14} /> {city.livingCost}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Itahari vs USA vs UK vs Canada – 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Country</th>
                  <th className="p-4 text-left">Tuition</th>
                  <th className="p-4 text-left">Living</th>
                  <th className="p-4 text-left">Work</th>
                  <th className="p-4 text-left">PSW</th>
                  <th className="p-4 text-left">Visa Time</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-[#001F3F]">
                      {row.countrySlug ? (
                        <Link href={row.countrySlug} className="text-blue-600 hover:underline">{row.country}</Link>
                      ) : (
                        row.country
                      )}
                    </td>
                    <td className="p-4">{row.tuition}</td>
                    <td className="p-4">{row.living}</td>
                    <td className="p-4">{row.work}</td>
                    <td className="p-4">{row.psw}</td>
                    <td className="p-4">{row.visaTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study Abroad Consultancy in Itahari FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Itahari from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={japanData.faqs} />
          </div>
        </div>
      </section>

      {/* Why Choose Our Consultancy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">Why Choose Our Study Abroad Consultancy in Itahari Consultancy in Nepal?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            San Marina is a leading <strong>study in Itahari consultancy in Nepal</strong>. We guide MEXT applications, JLPT preparation, COE process, and university selection. Offices in Kathmandu, Dang, and Itahari. <Link href="/about/" className="text-blue-600 hover:underline">QEAC certified</Link>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '95%+', label: 'MEXT Shortlist Rate', icon: CheckCircle2 },
              { value: '2+', label: 'Years Experience', icon: Clock },
              { value: '1,500+', label: 'Students Placed', icon: Users },
              { value: 'JLPT', label: 'Prep Available', icon: Globe },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Best Education Consultancy in Itahari?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            From MEXT applications to JLPT prep and COE guidance—we support students from Kathmandu, Dang, and Itahari. Book a free consultation at our offices or message us on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center justify-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">Book Free Consultation</Link>
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">Apply Now</Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            <Link href="/study-abroad/kr/" className="underline font-medium">South Korea</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="underline font-medium">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="underline font-medium">Canada</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="underline font-medium">UK</Link>
            {' · '}
            <Link href="/study-abroad/usa/" className="underline font-medium">USA</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
            {' · '}
            <Link href="/services/test-prep/japanese/" className="underline font-medium">JLPT Prep</Link>
          </p>
          <p className="mt-4 text-blue-400 text-xs">QEAC Certified • MEXT & JLPT Specialists | Last Updated: February 2026</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/kr/" className="text-blue-600 font-semibold hover:underline">South Korea</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/usa/" className="text-blue-600 font-semibold hover:underline">USA</Link>
            {' · '}
            <Link href="/study-abroad/nz/" className="text-blue-600 font-semibold hover:underline">New Zealand</Link>
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
