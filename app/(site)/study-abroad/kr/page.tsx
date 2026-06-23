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
  ChevronRight,
  Globe,
  Users,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in South Korea | 2026 Guide Nepal',
  description: 'Study in South Korea from Nepal 2026: GKS scholarship, D-2 visa, TOPIK, tuition. Work and study in South Korea. Study nursing, business, IT. Agent for study in South Korea. Free consultation.',
  keywords: 'study in south korea, study in south korea from nepal, study in south korea for nepali students, study in south korea for international students, why study in south korea, study in south korea with full scholarship, work and study in south korea, study nursing in south korea, agent for study in south korea, gks scholarship, topik',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/kr/',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/kr/',
    title: 'Study in South Korea from Nepal – 2026 Complete Guide',
    description: 'Complete 2026 guide for Nepali students: study in South Korea, GKS scholarship, D-2 visa. Free consultation in Kathmandu.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in South Korea from Nepal – 2026 Guide',
    description: 'Complete 2026 guide: study in South Korea, GKS, D-2 visa, TOPIK.',
  },
};

// 2026 data: GKS ₩900K–1.5M/mo; national ~₩4.27M/yr; 1 KRW ≈ 0.11 NPR; D-2 work 25 hrs (TOPIK 3+)
const koreaData = {
  heroImage: '/assets/south_korea.jpg',
  lastUpdated: 'February 2026',
  stats: {
    universities: '400+',
    nepaliStudents: '3,000+',
    gksStipend: '₩900,000–1.5M/mo',
    partTime: 'Up to 25 hrs/week',
  },
  universities: [
    { name: 'Seoul National University', rank: 'QS #41', location: 'Seoul', highlight: 'Research & Medicine' },
    { name: 'KAIST', rank: 'QS #56', location: 'Daejeon', highlight: 'STEM & Innovation' },
    { name: 'Yonsei University', rank: 'QS #76', location: 'Seoul', highlight: 'Business & Liberal Arts' },
    { name: 'Korea University', rank: 'QS #79', location: 'Seoul', highlight: 'Law & Engineering' },
    { name: 'POSTECH', rank: 'QS #104', location: 'Pohang', highlight: 'Science & Tech' },
  ],
  popularCourses: [
    { name: 'Business & Management', universities: 'Yonsei, Korea U, SNU', note: 'English programs available' },
    { name: 'IT & Engineering', universities: 'KAIST, POSTECH, SNU', note: 'Strong industry links' },
    { name: 'Nursing', universities: 'Yonsei, SNU, Catholic U', note: 'Licensure pathways' },
    { name: 'Korean Language', universities: 'Language institutes nationwide', note: 'TOPIK prep' },
  ],
  tuition: {
    national: { krw: 4270000, usd: 3160, npr: 470000, note: 'Annual average (public)' },
    private: { krw: 7630000, usd: 5650, npr: 839000, note: 'Annual average (private)' },
  },
  living: {
    seoul: { krwMin: 750000, krwMax: 1000000, usd: 555, npr: 82500, period: 'per month' },
    other: { krwMin: 500000, krwMax: 700000, usd: 445, npr: 60500, period: 'per month' },
  },
  gks: {
    stipendMin: 900000,
    stipendMax: 1500000,
    period: 'per month',
    coverage: 'Tuition, airfare, Korean language training, medical insurance, settlement allowance',
    exemption: 'TOPIK Level 5–6: exempt from 1-year language program',
  },
  workRights: {
    topik3Plus: '25 hours/week on weekdays; unrestricted on weekends and vacation',
    belowTopik3: '10 hours/week',
    requirement: 'Enrolled 6+ months; grade C+; school + immigration approval',
  },
  visaSteps: [
    'Receive admission from Korean university',
    'Gather documents: passport, admission letter, financial proof',
    'Financial proof: $12,000–$20,000 USD (issued within 30 days)',
    'Apply at Korean Embassy in Kathmandu 4–6 weeks before departure',
    'Processing: 10–15 working days',
    'Receive D-2 visa; apply for ARC within 90 days of arrival',
  ],
  requirements: [
    'Admission letter from Korean university',
    'Valid passport (2+ years validity recommended)',
    'Financial proof: $12,000–$20,000 USD per year (within 30 days)',
    'TOPIK Level 3+ for Korean-taught programs (Level 4 for graduation at some universities)',
    'IELTS 5.5–6.0+ for English-taught programs',
    'Academic transcripts (10+2 for bachelor\'s; bachelor\'s for master\'s)',
    'Passport photos (white background)',
    'Visa application form',
  ],
  intakes: [
    { name: 'March', note: 'Spring semester; main intake' },
    { name: 'September', note: 'Fall semester' },
    { name: 'GKS', note: 'Typically March/April application deadline' },
  ],
  faqs: [
    {
      question: 'Why study in South Korea?',
      answer: 'Study in South Korea offers GKS full scholarships (₩900,000–1.5M/month), top-ranked universities (SNU QS #41, KAIST #56), strong tech and K-culture industries, and D-2 visa work rights up to 25 hrs/week. Over 3,000 Nepali students study in South Korea. Based on official Korean Immigration and GKS guidelines.',
    },
    {
      question: 'Study in South Korea from Nepal – what are the requirements?',
      answer: 'Study in South Korea from Nepal requires: admission from Korean university, D-2 visa, financial proof $12,000–20,000 USD, TOPIK Level 3+ for Korean programs or IELTS 5.5+ for English programs. Apply at Korean Embassy Kathmandu 4–6 weeks before departure. Processing 10–15 working days.',
    },
    {
      question: 'Study in South Korea for Nepali students – is it a good choice?',
      answer: 'Yes. Study in South Korea for Nepali students is popular: GKS covers tuition and stipend, universities like SNU and KAIST rank globally, and part-time work (25 hrs/week with TOPIK 3) helps offset living costs. Seoul is safe with a growing Nepali community.',
    },
    {
      question: 'Study in South Korea with full scholarship – how to get GKS?',
      answer: 'Study in South Korea with full scholarship via GKS: apply through university or embassy track. Stipend ₩900,000–1.5M/month; tuition, airfare, language training covered. TOPIK 5–6 exempts 1-year Korean program. Deadline typically March/April. Highly competitive.',
    },
    {
      question: 'Work and study in South Korea – what are the rules?',
      answer: 'Work and study in South Korea: D-2 holders with TOPIK 3+ can work up to 25 hrs/week on weekdays; unlimited on weekends/vacation. Below TOPIK 3: 10 hrs/week. Must be enrolled 6+ months, grade C+, and obtain school plus immigration approval. Based on official studyinkorea.go.kr guidelines.',
    },
    {
      question: 'Study nursing in South Korea – which universities?',
      answer: 'Study nursing in South Korea at Yonsei University, Seoul National University, Korea University, Catholic University. English and Korean programs available. Check licensure requirements for practice in Nepal or Korea. GKS covers nursing programs for qualified applicants.',
    },
    {
      question: 'Agent for study in South Korea – why use San Marina?',
      answer: 'As an agent for study in South Korea, San Marina guides GKS applications, university selection, D-2 visa prep, and TOPIK coaching. Offices in Kathmandu, Dang, Itahari. QEAC certified. Free first consultation for Nepali students.',
    },
    {
      question: 'What is TOPIK and what level do I need for Korean universities?',
      answer: 'TOPIK (Test of Proficiency in Korean): Level 3 minimum for most undergraduate/graduate programs. Some universities require Level 4 for graduation. GKS applicants with Level 5–6 may skip the 1-year Korean language program. English-taught programs may waive TOPIK.',
    },
    {
      question: 'When should I apply for South Korea from Nepal?',
      answer: 'March intake: apply Sept–Nov; September intake: apply May–Jun. GKS typically has March/April application deadline. Apply 4–6 months ahead. Visa: apply at Korean Embassy Kathmandu 4–6 weeks before departure.',
    },
    {
      question: 'What accommodation options do Nepali students have in South Korea?',
      answer: 'Dormitory ₩300,000–800,000/month; goshiwon (small room) ₩250,000–550,000/month; shared apartment ₩400,000–700,000/month. Seoul costs more than Busan, Daejeon, or Pohang. Universities often guarantee first-year dorm placement.',
    },
  ],
};

const comparisonData = [
  { country: 'South Korea', countrySlug: null, tuition: '₩4.27M–7.63M/yr', living: '₩750K–1M/mo', work: '25 hrs/week', psw: '2 yrs job-seek', visaTime: '10–15 days' },
  { country: 'Japan', countrySlug: '/study-abroad/jp/', tuition: '¥535K–1.5M/yr', living: '¥80K–150K/mo', work: '28 hrs', psw: '6 mo–5 yrs', visaTime: '5–10 days' },
  { country: 'USA', countrySlug: '/study-abroad/usa/', tuition: '$15K–60K/yr', living: '$10K–18K/yr', work: '20 hrs', psw: '12–36 mo', visaTime: '1–3 weeks' },
  { country: 'Canada', countrySlug: '/study-abroad/can/', tuition: 'CAD $15K–35K', living: 'CAD $22,895+/yr', work: '20 hrs', psw: '1–3 Years', visaTime: '4–12 weeks' },
];

export default function SouthKoreaStudyPage() {
  const visaStepsWithText = [
    { name: 'Receive admission from Korean university', text: 'Obtain admission letter from Korean institution.' },
    { name: 'Gather documents: passport, admission letter, financial proof', text: 'Prepare passport, admission letter, and financial documents.' },
    { name: 'Financial proof: $12,000–$20,000 USD (issued within 30 days)', text: 'Bank statement showing $12,000–20,000 USD, issued within 30 days.' },
    { name: 'Apply at Korean Embassy in Kathmandu 4–6 weeks before departure', text: 'Submit visa application at Korean Embassy Kathmandu.' },
    { name: 'Processing: 10–15 working days', text: 'Typical processing 10–15 working days.' },
    { name: 'Receive D-2 visa; apply for ARC within 90 days of arrival', text: 'Collect D-2 visa; apply for Alien Registration Card after arrival.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in South Korea from Nepal 2026 – Complete Guide',
        description: 'Complete 2026 guide: GKS scholarship, D-2 visa, TOPIK, ₩4.27M national tuition. For Nepali students. San Marina Education Consultancy.',
        datePublished: '2024-01-15',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for South Korea study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in South Korea from Nepal', 'GKS scholarship', 'D-2 visa', 'TOPIK', 'Korean Embassy Kathmandu'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: koreaData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 3, name: 'Study in South Korea', item: 'https://www.sanmarina.edu.np/study-abroad/kr/' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for South Korea D-2 Student Visa from Nepal',
        description: 'Step-by-step guide: receive admission, gather financial proof, apply at Korean Embassy Kathmandu. Based on official Korean Immigration guidelines.',
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
          <Image src={koreaData.heroImage} alt="Nepali students in Seoul, South Korea – study abroad destination 2026 – San Marina Education Consultancy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#16213e]/85 to-[#0f3460]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Study in South Korea</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: February 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in South Korea from Nepal<br />
            <span className="text-blue-300">2026 Complete Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            GKS full scholarships, SNU, KAIST, Yonsei—and D-2 visa work rights. Based on official 2026 Korean Immigration and Ministry of Education data.
          </p>
          <p className="text-lg text-white/80 mb-8">
            <strong>Study in South Korea for Nepali students</strong>—our team guides GKS applications, university selection, and D-2 visa prep from Kathmandu, Dang, and Itahari. Free first consultation.
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
            <strong>Source: Korean Immigration, GKS (Global Korea Scholarship), studyinkorea.go.kr.</strong> Financial proof $12,000–20,000; D-2 apply at Korean Embassy Kathmandu. Verify at <a href="https://www.studyinkorea.go.kr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinkorea.go.kr</a>, <a href="https://overseas.mofa.go.kr/np-en/brd/m_25533/list.do" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Korean Embassy Nepal</a>, <a href="https://www.studyinkorea.go.kr/en/sub/gks/all.do" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GKS</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By San Marina Education Consultancy · QEAC & PIER Certified · Study abroad for Nepali students since 2014
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in South Korea from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">National tuition</td><td className="p-3">₩4.27M/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Private tuition</td><td className="p-3">₩7.63M/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Seoul living</td><td className="p-3">₩750K–1M/month</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Financial proof</td><td className="p-3">$12,000–20,000 USD</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">D-2 visa</td><td className="p-3">Korean Embassy Kathmandu; 10–15 days</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">GKS stipend</td><td className="p-3">₩900,000–1.5M/month</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Work (TOPIK 3+)</td><td className="p-3">25 hrs/week weekdays; unlimited weekends</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: studyinkorea.go.kr, Korean Immigration. Verify at <a href="https://www.studyinkorea.go.kr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinkorea.go.kr</a>, <a href="https://overseas.mofa.go.kr/np-en" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Korean Embassy Nepal</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: koreaData.stats.universities, label: 'Universities' },
              { value: koreaData.stats.nepaliStudents, label: 'Nepali Students' },
              { value: koreaData.stats.gksStipend, label: 'GKS Stipend' },
              { value: koreaData.stats.partTime, label: 'Part-time Work' },
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

      {/* Why Study in South Korea */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in South Korea in 2026?</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> <strong>Study in South Korea</strong> means GKS full scholarships (₩900,000–1.5M/month), top universities (SNU QS #41, KAIST #56, Yonsei #76), and D-2 visa work rights up to 25 hrs/week. <strong>Study in South Korea for international students</strong> includes 400+ universities, K-culture industries, and growing tech hubs. Compare with <Link href="/study-abroad/jp/" className="text-blue-600 hover:underline">Japan</Link>, <Link href="/study-abroad/usa/" className="text-blue-600 hover:underline">USA</Link>, or <Link href="/study-abroad/can/" className="text-blue-600 hover:underline">Canada</Link>.
        </p>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            The Global Korea Scholarship (GKS) covers tuition, airfare, Korean language training, and monthly stipend. No repayment. <strong>Work and study in South Korea</strong> is permitted under D-2 rules—TOPIK Level 3+ allows 25 hours per week on weekdays; unlimited on weekends and vacation. Over 3,000 Nepali students study in South Korea, with communities in Seoul and Busan.
          </p>
        </div>
      </section>

      {/* Is It Good to Study in South Korea */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Is It Good to Study in South Korea?</h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            <strong>Quick answer:</strong> Yes. South Korea offers world-ranked universities, full GKS funding, safe cities, strong tech and entertainment sectors, and part-time work to offset costs. Trade-offs: Korean language required for many programs (TOPIK 3+), competitive GKS selection, high living cost in Seoul.
          </p>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-[#001F3F] mb-3">Key advantages</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>5 universities in QS World Top 110</li>
              <li>GKS: full tuition + stipend ₩900,000–1.5M/month</li>
              <li>D-2 visa: up to 25 hrs/week part-time (TOPIK 3+)</li>
              <li>Tech giants: Samsung, LG, HYBE; K-culture exports</li>
              <li>English-taught programs at Yonsei, KAIST, SNU</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Top Universities in South Korea (2026)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {koreaData.universities.map((uni, i) => (
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Courses: Business, IT, Nursing, Engineering</h2>
          <p className="text-gray-700 mb-8">
            <strong>In brief:</strong> <strong>Study nursing in South Korea</strong> at Yonsei, SNU, Korea University. Business and IT dominate at Yonsei, KAIST, POSTECH. All offer Korean and some English-taught options. Based on official university data.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {koreaData.popularCourses.map((course, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-[#001F3F] mb-2">{course.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{course.universities}</p>
                <p className="text-green-600 text-sm">{course.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition Fees */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Tuition Fees: Public vs Private</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          <strong>Quick answer:</strong> According to studyinkorea.go.kr 2026 data: national universities ~₩4.27M/year (NPR ~4.7L, USD $3,160); private ~₩7.63M/year (NPR ~8.4L, USD $5,650).
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <GraduationCap className="text-[#0056b3] mb-3" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Public / National</h3>
            <p className="text-2xl font-bold">₩4,270,000/year</p>
            <p className="text-gray-600 text-sm">USD $3,160 • NPR ~4.7 Lakhs</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <GraduationCap className="text-orange-600 mb-3" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Private</h3>
            <p className="text-2xl font-bold">₩7,630,000/year</p>
            <p className="text-gray-600 text-sm">USD $5,650 • NPR ~8.4 Lakhs</p>
          </div>
        </div>
      </section>

      {/* Living Costs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Living Costs: Seoul vs Other Cities</h2>
          <p className="text-gray-700 mb-8">
            <strong>Quick answer:</strong> Seoul ₩750,000–1,000,000/month (USD $555, NPR ~82,500). Other cities ₩500,000–700,000/month. See accommodation table below. <Link href="/scholarships/" className="text-blue-600 hover:underline">GKS and university scholarships</Link> can offset costs. 1 KRW ≈ 0.11 NPR (Feb 2026).
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Home className="text-green-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Seoul</h3>
              <p className="text-2xl font-bold">₩750,000–1,000,000/mo</p>
              <p className="text-gray-600 text-sm">USD $555 • NPR ~82,500</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Home className="text-blue-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Busan, Daejeon, etc.</h3>
              <p className="text-2xl font-bold">₩500,000–700,000/mo</p>
              <p className="text-gray-600 text-sm">USD $445 • NPR ~60,500</p>
            </div>
          </div>
          <h3 className="font-bold text-[#001F3F] mt-8 mb-4">Accommodation for Nepali Students</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">University dormitory</td><td className="p-3">₩300,000–800,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Goshiwon (small room)</td><td className="p-3">₩250,000–550,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Shared apartment</td><td className="p-3">₩400,000–700,000</td></tr>
                <tr><td className="p-3">Private (Seoul)</td><td className="p-3">₩800,000–1,200,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">According to studyinkorea.go.kr. Universities often guarantee first-year dorm placement for international students.</p>
          <div className="mt-6 bg-blue-50 rounded-2xl p-6">
            <h4 className="font-bold text-[#001F3F] mb-2">Total First Year (self-funded)</h4>
            <p className="text-xl font-bold">₩15,000,000–25,000,000 (NPR 16–27 Lakhs)</p>
            <p className="text-gray-600 text-sm mt-1">Tuition + living + misc. GKS recipients: tuition and stipend covered.</p>
          </div>
        </div>
      </section>

      {/* Scholarships GKS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarships: Global Korea Scholarship (GKS)</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> <strong>Study in South Korea with full scholarship</strong> via GKS: monthly stipend ₩900,000–1,500,000 (USD $665–1,110); tuition, airfare, Korean language training, medical insurance, settlement allowance covered. TOPIK 5–6 exempts 1-year language program. Apply through university or embassy. <a href="https://www.studyinkorea.go.kr/en/sub/gks/all.do" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinkorea.go.kr/gks</a>. <Link href="/scholarships/" className="text-blue-600 hover:underline">See all scholarships</Link>.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl border border-gray-100">
          <h3 className="font-bold text-[#001F3F] mb-3">GKS coverage (based on official guidelines)</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Stipend: ₩900,000–1,500,000/month</li>
            <li>• Tuition waiver</li>
            <li>• Round-trip airfare</li>
            <li>• Korean language training (1 year unless TOPIK 5–6)</li>
            <li>• Medical insurance</li>
            <li>• Settlement allowance</li>
          </ul>
        </div>
      </section>

      {/* Work Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work Rights for Students (D-2 Visa Rules)</h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            <strong>Quick answer:</strong> <strong>Work and study in South Korea</strong> under D-2: with TOPIK 3+, up to 25 hrs/week on weekdays; unrestricted on weekends and vacation. Below TOPIK 3: 10 hrs/week. Must be enrolled 6+ months, grade C+, and obtain school and immigration approval. According to studyinkorea.go.kr official guidelines.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <Briefcase className="text-[#0056b3] mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">TOPIK 3+</h3>
              <p className="text-gray-600 text-sm">25 hrs/week weekdays; unlimited weekends</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <Clock className="text-orange-600 mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">Below TOPIK 3</h3>
              <p className="text-gray-600 text-sm">10 hrs/week</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <FileText className="text-purple-600 mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">Requirements</h3>
              <p className="text-gray-600 text-sm">6+ months enrolled; C+; school + immigration approval</p>
            </div>
          </div>
        </div>
      </section>

      {/* Korean Language / TOPIK */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Korean Language Requirement (TOPIK)</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Most Korean universities require TOPIK Level 3 minimum for Korean-taught programs. Some require Level 4 for graduation. GKS applicants with TOPIK 5–6 may skip the 1-year Korean language program. English-taught programs may waive TOPIK; check IELTS requirements.
        </p>
        <p className="text-gray-700">
          TOPIK (Test of Proficiency in Korean) has six levels. Level 3 is the common admission threshold for undergraduate and graduate programs taught in Korean. English-medium programs at Yonsei, KAIST, SNU typically require IELTS 5.5–6.0 instead.
        </p>
      </section>

      {/* Visa Process */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Student Visa Process (Step-by-Step)</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            <strong>In brief:</strong> Get admission → gather financial proof $12,000–20,000 → apply at Korean Embassy Kathmandu 4–6 weeks before departure → processing 10–15 days → receive D-2 → apply for ARC within 90 days of arrival. Based on official Korean Immigration guidelines.
          </p>
          <ol className="space-y-4 max-w-2xl mx-auto">
            {koreaData.visaSteps.map((step, i) => (
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
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Required Documents for Nepali Students</h2>
        <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
          {koreaData.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </section>

      {/* Intakes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intakes & When to Apply</h2>
          <p className="text-gray-700 mb-4"><strong>Application timeline:</strong> March intake—apply Sept–Nov; September intake—apply May–Jun. GKS: typically March/April deadline. Apply 4–6 months before your intended start.</p>
          <div className="space-y-4">
            {koreaData.intakes.map((intake, i) => (
              <div key={i} className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
                <span className="font-semibold text-[#001F3F]">{intake.name}</span>
                <span className="text-gray-600 text-sm">{intake.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages & Disadvantages */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-bold text-[#001F3F] mb-3">Advantages</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• GKS full scholarship</li>
              <li>• 5 universities in QS Top 110</li>
              <li>• Part-time work 25 hrs/week</li>
              <li>• Strong tech and K-culture industries</li>
              <li>• Safe cities; fast visa processing</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <h3 className="font-bold text-[#001F3F] mb-3">Disadvantages</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• Korean required for most programs (TOPIK 3+)</li>
              <li>• High cost in Seoul</li>
              <li>• GKS highly competitive</li>
              <li>• Limited post-study work (2 yrs job-seeking)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">South Korea vs Japan vs USA vs Canada – 2026</h2>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in South Korea FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in South Korea from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={koreaData.faqs} />
          </div>
        </div>
      </section>

      {/* Why Trust San Marina */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">Why Trust San Marina for South Korea Study?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            As a leading <strong>agent for study in South Korea</strong>, we guide GKS applications, university selection, D-2 visa prep, and TOPIK coaching. Offices in Kathmandu, Dang, and Itahari. <Link href="/about/" className="text-blue-600 hover:underline">QEAC certified</Link>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '90%+', label: 'Visa Success', icon: CheckCircle2 },
              { value: '2+', label: 'Years Experience', icon: Clock },
              { value: '1,500+', label: 'Students Placed', icon: Users },
              { value: 'GKS', label: 'Application Support', icon: Globe },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in South Korea from Nepal?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            From GKS applications to D-2 visa prep—we support students from Kathmandu, Dang, and Itahari. Book a free consultation or message us on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center justify-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">Book Free Consultation</Link>
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">Apply Now</Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            <Link href="/study-abroad/jp/" className="underline font-medium">Japan</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="underline font-medium">Australia</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="underline font-medium">UK</Link>
            {' · '}
            <Link href="/study-abroad/usa/" className="underline font-medium">USA</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="underline font-medium">Canada</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
          </p>
          <p className="mt-4 text-blue-400 text-xs">QEAC Certified • GKS & D-2 Visa Specialists | Last Updated: February 2026</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/jp/" className="text-blue-600 font-semibold hover:underline">Japan</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/usa/" className="text-blue-600 font-semibold hover:underline">USA</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
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
