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
  title: 'Study in Canada from Nepal | Visa & PGWP',
  description: 'Study in Canada from Nepal 2026: tuition CAD $15k–35k, living $22,895/yr, PGWP up to 3 yrs. IRCC-approved. Free consultation Kathmandu, Dang, Itahari.',
  keywords: 'study in canada from nepal, study in canada from nepal 2026, requirements to study in canada for international students, why study in canada, can i study in canada without ielts, how much gap is accepted for study in canada, cost of studying pharmacy in canada, disadvantages of studying in canada, pgwp canada, study in canada for nepalese students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/can/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/can/',
    title: 'Study in Canada from Nepal 2026 | Cost, Visa, PGWP & PR',
    description: 'Study in Canada from Nepal 2026: tuition CAD $15k–35k, living $22,895/yr, PGWP up to 3 yrs. IRCC-approved. Free consultation Kathmandu, Dang, Itahari.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Canada from Nepal 2026 | Cost, Visa, PGWP & PR',
    description: 'Study in Canada from Nepal 2026: tuition CAD $15k–35k, living $22,895/yr, PGWP up to 3 yrs. IRCC-approved. Free consultation.',
  },
};

// 2026 data: Study permit $150 CAD, living $22,895/year from Sept 2025, GIC ~$22,895, 1 CAD ≈ 100 NPR, SDS ended Nov 2024. Source: canada.ca, IRCC.
const canadaData = {
  country: 'Canada',
  slug: 'can',
  heroImage: '/assets/toronto.jpg',
  lastUpdated: 'February 2026',
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  stats: {
    universities: '600+ DLI',
    nepaliStudents: '25,000+',
    visaSuccess: '90%+',
    pgwp: 'Up to 3 Years',
  },
  requirements: [
    'Letter of acceptance from Designated Learning Institution (DLI)',
    'Valid passport',
    'Study permit fee: CAD $150 (2026)',
    'Proof of funds: tuition + CAD $22,895 living (from Sept 2025)',
    'GIC (recommended): CAD $22,895 for living proof',
    'English: IELTS 6.0+ (overall and bands) or equivalent; some institutions allow alternatives',
    'Medical examination and police clearance',
    'Provincial Attestation Letter (PAL) where required',
  ],
  costBreakdown: {
    tuition: { min: 15000, max: 35000, period: 'per year', nprMin: 1500000, nprMax: 3500000 },
    living: { min: 22895, max: 25000, period: 'per year', nprMin: 2289500, nprMax: 2500000 },
    studyPermit: { amount: 150, npr: 15000 },
    gic: { amount: 22895, npr: 2289500 },
    airfare: { amount: 1200, npr: 120000 },
  },
  workRights: {
    termTime: '20 hours/week during semester',
    breaks: 'Full-time during scheduled breaks',
    pgwp: 'Up to 3 years depending on program length',
  },
  gapAccepted: '1–2 years generally acceptable if explained; 3+ years may need strong justification and recent academic/professional activity',
  cities: [
    { name: 'Toronto', highlight: 'Business & Finance', students: '8,000+ Nepali students', livingCost: 'CAD $1,800–2,500/month' },
    { name: 'Vancouver', highlight: 'Tech & Natural Beauty', students: '5,000+ Nepali students', livingCost: 'CAD $1,800–2,400/month' },
    { name: 'Montreal', highlight: 'Affordable & Bilingual', students: '4,000+ Nepali students', livingCost: 'CAD $1,200–1,800/month' },
    { name: 'Calgary', highlight: 'Engineering & Energy', students: '2,000+ Nepali students', livingCost: 'CAD $1,400–1,900/month' },
  ],
  faqs: [
    {
      question: 'What are the requirements to study in Canada from Nepal in 2026?',
      answer: 'Requirements to study in Canada from Nepal: acceptance from a DLI, study permit fee CAD $150, proof of funds (tuition + CAD $22,895 living), IELTS 6.0+ or equivalent, medical exam, police clearance. Provincial Attestation Letter (PAL) required where applicable. SDS stream ended Nov 2024—all applications use regular processing.',
    },
    {
      question: 'Requirements to study in Canada for international students – what applies to Nepali students?',
      answer: 'Requirements to study in Canada for international students are the same for Nepali applicants: DLI acceptance, proof of funds, English proficiency, medical and police clearance. IRCC sets a minimum living amount of CAD $22,895 per year (from Sept 2025). GIC is often used to meet proof of funds.',
    },
    {
      question: 'Why study in Canada?',
      answer: 'Why study in Canada: Top-ranked universities, PGWP up to 3 years, clear PR pathways via Express Entry and Provincial Nominee Programs. Safe, multicultural, affordable compared to USA/UK. Over 25,000 Nepali students in Canada. Quality of life and post-study opportunities are major draws.',
    },
    {
      question: 'Can I study in Canada without IELTS?',
      answer: 'Can I study in Canada without IELTS: Some institutions accept alternatives—TOEFL, PTE, Duolingo, or English-medium school proof. However, most universities require IELTS 6.0–6.5 (overall, no band below 5.5–6.0). Check your chosen DLI. For study permit, IRCC accepts institution-specific language proof.',
    },
    {
      question: 'How much gap is accepted for study in Canada?',
      answer: 'How much gap is accepted for study in Canada: Generally 1–2 years is fine if explained. Gaps of 3+ years need strong justification—work experience, courses, or other activity. Provide a clear letter of explanation. Some universities may have stricter limits.',
    },
    {
      question: 'Cost of studying pharmacy in Canada from Nepal?',
      answer: 'Cost of studying pharmacy in Canada: Pharmacy programs typically CAD $25,000–$40,000 per year tuition. Add living CAD $22,895+. Total first year roughly CAD $48,000–$63,000 (NPR 48–63 lakhs). Professional programs like pharmacy are often pricier than general bachelor\'s.',
    },
    {
      question: 'What are the disadvantages of studying in Canada?',
      answer: 'Disadvantages of studying in Canada: Cold winters in most cities, higher cost in Toronto/Vancouver, competitive PR pathways, processing times 4–12 weeks. These are trade-offs; many still choose Canada for PGWP, safety, and PR potential.',
    },
    {
      question: 'How much does it cost to study in Canada from Nepal in 2026?',
      answer: 'Cost to study in Canada from Nepal: First year CAD $38,000–$62,000 (NPR 38–62 lakhs). Tuition CAD $15,000–35,000; living CAD $22,895+; study permit $150; GIC ~$22,895; airfare ~$1,200 CAD. 1 CAD ≈ 100 NPR (Feb 2026).',
    },
    {
      question: 'What is PGWP for Nepali students in Canada?',
      answer: 'Post-Graduation Work Permit (PGWP) allows work in Canada after graduation: 8 months–2 years program = PGWP up to program length; 2+ years program = up to 3 years PGWP. No job offer required. Many Nepali graduates use PGWP toward Express Entry and PR.',
    },
    {
      question: 'Can I apply for Canada study permit from Kathmandu?',
      answer: 'Yes. Apply online via IRCC portal; biometrics at VFS Global Kathmandu. Processing typically 4–12 weeks. San Marina guides students from Kathmandu, Dang, Itahari with document prep and application support.',
    },
    {
      question: 'When are the intakes to study in Canada from Nepal?',
      answer: 'Fall (September) is the main intake; Winter (January) and Summer (April–May) are secondary. Most Nepali students apply for September entry. Deadlines typically close 6–9 months before intake.',
    },
    {
      question: 'What scholarships can Nepali students get for Canada?',
      answer: 'Lester B. Pearson (U of Toronto), Vanier Canada Graduate Scholarships, Canadian Commonwealth Scholarship, Ontario Graduate Scholarship, Quebec Provincial Government Scholarship, and Ontario Trillium Scholarship. Apply per institution; deadlines vary.',
    },
    {
      question: 'Can I do co-op while studying in Canada?',
      answer: 'Yes. Many Canadian DLIs offer co-op and work-integrated learning. Co-op terms often allow full-time work and extend your programme length. Check your institution\'s co-op options when applying.',
    },
  ],
};

const comparisonData = [
  { country: 'Canada', countrySlug: null, tuition: 'CAD $15,000-35,000', living: 'CAD $22,895+/year', work: '20 hrs/week', psw: '1-3 Years', visaTime: '4-12 weeks' },
  { country: 'USA', countrySlug: '/study-abroad/usa/', tuition: '$15,000-60,000', living: '$10,000-18,000', work: '20 hrs on-campus', psw: '12-36 mo (STEM)', visaTime: '1-3 weeks' },
  { country: 'UK', countrySlug: '/study-abroad/uk/', tuition: '£10,000-38,000', living: '£10,539-13,761', work: '20 hrs/week', psw: '2 Years (PhD 3)', visaTime: '3 weeks' },
  { country: 'Australia', countrySlug: '/study-abroad/aus/', tuition: 'AUD $20,000-45,000', living: 'AUD $29,710/year', work: '48 hrs/fortnight', psw: '2-4 Years', visaTime: '4-12 weeks' },
];

export default function CanadaStudyPage() {
  const studyPermitSteps = [
    { name: 'Receive letter of acceptance from DLI', text: 'Obtain letter of acceptance from a Designated Learning Institution (DLI).' },
    { name: 'Arrange proof of funds', text: 'Gather GIC and/or bank statements meeting IRCC minimum (tuition + CAD $22,895 living).' },
    { name: 'Complete medical examination', text: 'Undertake medical exam as required by IRCC.' },
    { name: 'Submit study permit application online', text: 'Apply via IRCC portal; pay fee CAD $150.' },
    { name: 'Provide biometrics at VFS Global Kathmandu', text: 'Visit VFS Global Kathmandu for biometrics.' },
    { name: 'Receive passport request and visa', text: 'Processing typically 4–12 weeks; collect passport with study permit.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Canada from Nepal 2026 – Complete Guide',
        description: 'Complete 2026 guide: study permit, GIC CAD $22,895, PGWP, PAL, tuition, living costs. For Nepali students. San Marina Education Consultancy.',
        datePublished: '2024-01-15',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/logo.png' } },
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        logo: 'https://www.sanmarina.edu.np/logo.png',
        sameAs: ['https://www.facebook.com/profile.php?id=61578047634707'],
        knowsAbout: ['Study in Canada from Nepal', 'Canada study permit', 'PGWP', 'GIC', 'Provincial Attestation Letter', 'Express Entry'],
        description: 'QEAC and PIER certified education consultancy. Kathmandu, Dang, Itahari. 1,500+ students placed.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: canadaData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 3, name: 'Study in Canada', item: 'https://www.sanmarina.edu.np/study-abroad/can/' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Canada Study Permit from Nepal',
        description: 'Step-by-step guide to apply for a Canada study permit from Nepal, including DLI acceptance, proof of funds, medical exam, IRCC application, and VFS biometrics.',
        step: studyPermitSteps.map((step, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: step.name,
          text: step.text,
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
          <Image src={canadaData.heroImage} alt="Nepali students in Toronto, Canada – study abroad destination 2026 – San Marina Education Consultancy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#16213e]/85 to-[#0f3460]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Study in Canada</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: February 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Canada from Nepal<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            From Kathmandu to Toronto—access 600+ designated institutions, PGWP up to 3 years, and clear pathways to permanent residency.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Students from Bagmati, Lumbini, and Koshi—including Kathmandu, Dang, and Itahari—rely on our study permit specialists for GIC, proof of funds, and application readiness. Free first consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all">
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
            <strong>Quick answer:</strong> Study in Canada from Nepal 2026: tuition CAD $15k–35k/year, living CAD $22,895+/year (IRCC from Sept 2025), GIC ~$22,895, study permit $150. PGWP up to 3 years. PAL where required; SDS ended Nov 2024. Verify at <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">canada.ca</a>, <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">IRCC study</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {canadaData.author.name} · {canadaData.author.role} · {canadaData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 – GEO */}
      <section className="py-6 bg-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Canada from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">CAD $15,000–35,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living (IRCC min)</td><td className="p-3">CAD $22,895/year (Sept 2025)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">GIC</td><td className="p-3">~CAD $22,895</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Study permit fee</td><td className="p-3">CAD $150</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">PGWP</td><td className="p-3">Up to 3 years (program length)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">PAL</td><td className="p-3">Required where applicable</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">SDS</td><td className="p-3">Ended Nov 2024—all regular processing</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: canadaData.stats.universities, label: 'DLI Institutions' },
              { value: canadaData.stats.nepaliStudents, label: 'Nepali Students' },
              { value: canadaData.stats.visaSuccess, label: 'Visa Success' },
              { value: canadaData.stats.pgwp, label: 'PGWP' },
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

      {/* Why Study in Canada */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Canada?</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          Canada hosts over 1 million international students (IRCC 2024), with Nepali enrolments among the fastest-growing cohorts. Unlike the US and UK, Canadian study permits lead directly to Post-Graduation Work Permits (PGWP) of up to three years—no job offer required—and feed into Express Entry and Provincial Nominee Programs.
        </p>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            When families ask—<em>why study in Canada?</em>—we point to four things: post-study work (PGWP up to 3 years), clear paths to permanent residency via Express Entry and Provincial Nominee Programs, comparatively affordable tuition, and a welcoming society. Canadian degrees are respected worldwide. <strong>Designated Learning Institutions</strong> (DLIs) span diploma, bachelor&apos;s, and master&apos;s programmes. Many Canadian DLIs offer <strong>co-op and work-integrated learning</strong>, allowing full-time work during designated terms. For Nepali students from Kathmandu, Dang, and Itahari, the journey typically starts with a study permit application and biometrics at VFS Global in Kathmandu.
          </p>
          <p className="mb-4">
            Canada also offers strong job prospects in tech, healthcare, and skilled trades. The PGWP does not require a job offer—you can work for any employer. Many graduates use this period to gain Canadian experience and improve their CRS score for Express Entry. It&apos;s a practical choice for those who want study and long-term immigration options in one package. Compare with <Link href="/study-abroad/usa/" className="text-blue-600 hover:underline">study in USA</Link>, <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">study in UK</Link>, or <Link href="/study-abroad/aus/" className="text-blue-600 hover:underline">study in Australia</Link> to find your best fit.
          </p>
        </div>
      </section>

      {/* Requirements to Study in Canada */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Requirements to Study in Canada from Nepal (2026)</h2>
          <p className="text-gray-700 mb-6">
            <strong>In brief:</strong> You need acceptance from a DLI, proof of funds (tuition + CAD $22,895 living), study permit fee CAD $150, and English proficiency. A GIC is often used to meet proof of funds. Provincial Attestation Letter (PAL) may be required. SDS ended Nov 2024—all applications use regular processing.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
            {canadaData.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Requirements to Study in Canada for International Students */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Requirements to Study in Canada for International Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Requirements to study in Canada for international students apply equally to Nepali applicants: DLI acceptance, financial proof meeting IRCC minimums (CAD $22,895 living from Sept 2025), medical and police clearance, and language proof as required by your institution.
        </p>
        <p className="text-gray-700 mb-4">
          IRCC evaluates all international applicants by the same criteria—no preferential treatment by country. Key focus areas: <strong>genuine study intent</strong> (statement of purpose, program relevance to background), <strong>proof of financial support</strong> (tuition + living for first year; GIC or bank statements), and <strong>admissibility</strong> (medical, police). Some provinces require a <strong>Provincial Attestation Letter (PAL)</strong>; your DLI will confirm if this applies. San Marina helps applicants from Kathmandu, Dang, Itahari, and across Nepal prepare packages that align with IRCC expectations—including <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarship documentation</Link> when applicable.
        </p>
      </section>

      {/* Can I Study in Canada without IELTS */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Can I Study in Canada without IELTS?</h2>
          <p className="text-gray-700 mb-6">
            <strong>In brief:</strong> Some institutions accept alternatives—TOEFL, PTE, Duolingo, or proof of English-medium education. Most universities still require IELTS 6.0–6.5 (overall, bands 5.5–6.0). For the study permit itself, IRCC accepts whatever language proof your DLI requires.
          </p>
          <div className="mb-6 overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Test</th><th className="p-3 text-left">UG typical</th><th className="p-3 text-left">PG typical</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">IELTS</td><td className="p-3">6.0 overall (no band &lt;5.5)</td><td className="p-3">6.5 overall (no band &lt;6.0)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">TOEFL iBT</td><td className="p-3">~80</td><td className="p-3">~88</td></tr>
                <tr><td className="p-3">PTE</td><td className="p-3">~55</td><td className="p-3">~60 (no skill &lt;45)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <p className="text-gray-700">
              If you&apos;re asking <em>can I study in Canada without IELTS?</em>—the answer depends on your chosen program. Colleges and some universities may accept PTE, TOEFL, or prior English-medium schooling. Always check the specific DLI. We advise preparing IELTS if your options are limited; it broadens your choice of institutions.
            </p>
          </div>
        </div>
      </section>

      {/* How Much Gap is Accepted for Study in Canada */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Gap is Accepted for Study in Canada?</h2>
        <p className="text-gray-700 mb-6">
          <strong>In brief:</strong> Gaps of 1–2 years are generally acceptable if you explain them. Gaps of 3+ years need strong justification—work experience, courses, or professional development. A clear letter of explanation helps both the university and IRCC.
        </p>
        <p className="text-gray-700">
          When considering <em>how much gap is accepted for study in Canada</em>, IRCC and universities focus on study intent and continuity. Short gaps after 10+2 or bachelor&apos;s are common. Longer gaps require evidence you remained academically or professionally active. San Marina helps applicants frame gap periods clearly in their applications.
        </p>
      </section>

      {/* Cost to Study in Canada */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Cost to Study in Canada from Nepal (2026)</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            <strong>In brief:</strong> Budget CAD $38,000–$62,000 for your first year (NPR 38–62 lakhs). Tuition CAD $15,000–35,000; living CAD $22,895+ (IRCC minimum from Sept 2025). Add study permit ($150), GIC (~$22,895), airfare (~$1,200). Exchange rate: 1 CAD ≈ 100 NPR (Feb 2026).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <GraduationCap className="text-[#0056b3] mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Tuition</h3>
              <p className="text-2xl font-bold">CAD ${canadaData.costBreakdown.tuition.min.toLocaleString()}-{canadaData.costBreakdown.tuition.max.toLocaleString()}</p>
              <p className="text-green-600 text-sm">NPR {Math.round(canadaData.costBreakdown.tuition.nprMin/100000)}-{Math.round(canadaData.costBreakdown.tuition.nprMax/100000)}L</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Home className="text-green-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Living</h3>
              <p className="text-2xl font-bold">CAD ${canadaData.costBreakdown.living.min.toLocaleString()}+</p>
              <p className="text-green-600 text-sm">NPR {Math.round(canadaData.costBreakdown.living.nprMin/100000)}L+</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <FileText className="text-orange-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Study Permit</h3>
              <p className="text-2xl font-bold">CAD ${canadaData.costBreakdown.studyPermit.amount}</p>
              <p className="text-green-600 text-sm">NPR {canadaData.costBreakdown.studyPermit.npr.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <DollarSign className="text-purple-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">GIC</h3>
              <p className="text-2xl font-bold">~CAD ${canadaData.costBreakdown.gic.amount.toLocaleString()}</p>
              <p className="text-green-600 text-sm">NPR ~{Math.round(canadaData.costBreakdown.gic.npr/100000)}L</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Plane className="text-cyan-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Airfare</h3>
              <p className="text-2xl font-bold">~CAD ${canadaData.costBreakdown.airfare.amount}</p>
              <p className="text-green-600 text-sm">NPR {canadaData.costBreakdown.airfare.npr.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h3 className="font-bold text-[#001F3F] mb-2">Total First Year</h3>
            <p className="text-2xl font-bold">CAD $38,000–$62,000 (NPR 38–62 Lakhs)</p>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#001F3F] mb-4">Tuition by Program Level (2026)</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Program</th><th className="p-3 text-left">Annual Tuition (CAD)</th></tr></thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="p-3">Diploma</td><td className="p-3">$13,000–$18,000</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">Undergraduate</td><td className="p-3">$15,000–$25,000</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">Postgraduate (Master&apos;s)</td><td className="p-3">$17,000–$28,000</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">PhD</td><td className="p-3">$7,000–$18,000</td></tr>
                  <tr><td className="p-3">MBA</td><td className="p-3">$30,000–$45,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#001F3F] mb-4">Accommodation Costs for Nepali Students</h3>
            <p className="text-gray-700 mb-4 text-sm">IRCC requires proof of CAD $22,895+ for living; accommodation is typically the largest share. Source: canada.ca, IRCC.</p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Type</th><th className="p-3 text-left">Typical Cost</th></tr></thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="p-3">On-campus residence</td><td className="p-3">CAD $8,000–$12,000/year</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">Shared apartment</td><td className="p-3">CAD $300–$700/month</td></tr>
                  <tr className="border-b border-gray-100"><td className="p-3">Homestay</td><td className="p-3">CAD $400–$800/month</td></tr>
                  <tr><td className="p-3">Student residence (private)</td><td className="p-3">CAD $250–$625/month</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Application Intakes */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">When Can I Apply? Canada Study Intakes 2026</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Canadian DLIs offer three intakes. Fall (September) is the main intake; Winter (January) and Summer (April–May) have fewer programmes. Apply 6–12 months ahead for Fall 2026.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Fall (September):</strong> Primary intake; most programmes available.</li>
          <li><strong>Winter (January):</strong> Secondary intake; apply by October–November.</li>
          <li><strong>Summer (April–May):</strong> Limited programmes; some colleges and professional courses.</li>
        </ul>
      </section>

      {/* Cost of Studying Pharmacy in Canada */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Cost of Studying Pharmacy in Canada</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Cost of studying pharmacy in Canada: professional pharmacy programs typically charge CAD $25,000–$40,000 per year tuition. Add living CAD $22,895+. Total first year roughly CAD $48,000–$63,000 (NPR 48–63 lakhs).
        </p>
        <p className="text-gray-700 mb-4">
          Pharmacy is a regulated profession in Canada; graduates must complete the Pharmacy Examining Board of Canada (PEBC) evaluation and provincial registration. Top DLI pharmacy programs include University of Toronto, University of British Columbia, Université de Montréal, and University of Alberta. PharmD programs are typically 4 years. Budget for licensing exams (PEBC Qualifying Exam, OSCE) and bridging programs if your degree is from outside Canada. See our <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships page</Link> for funding options.
        </p>
      </section>

      {/* Study Permit Process */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study Permit Process from Nepal – IRCC & VFS</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          <strong>In brief:</strong> Obtain letter of acceptance from a DLI, gather proof of funds (tuition + living), pay study permit fee ($150), complete medical exam, then submit online application. Biometrics at VFS Global Kathmandu. Processing typically 4–12 weeks.
        </p>
        <ol className="space-y-4 max-w-2xl mx-auto">
          {studyPermitSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step.name}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Work Rights / PGWP */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Work Rights: During Study & PGWP</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <Clock className="text-[#0056b3] mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">During Study</h3>
              <p className="text-gray-600 text-sm">20 hrs/week during semester; full-time during breaks. Many programmes offer co-op work terms.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <Briefcase className="text-green-600 mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">PGWP</h3>
              <p className="text-3xl font-bold text-green-600">1-3</p>
              <p className="text-gray-600 text-sm">years depending on program length</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <Award className="text-purple-600 mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">PR Pathways</h3>
              <p className="text-gray-600 text-sm">Express Entry, PNP, Atlantic Immigration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disadvantages of Studying in Canada */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Disadvantages of Studying in Canada</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Disadvantages of studying in Canada include cold winters in most cities, high cost of living in Toronto and Vancouver, competitive PR pathways (Express Entry CRS scores), and processing times of 4–12 weeks. These are trade-offs many accept for PGWP, safety, and immigration potential.
        </p>
        <p className="text-gray-700">
          We present both sides so you decide with full information. Montreal and Atlantic provinces offer more affordable living. PGWP and PR pathways remain among the most straightforward globally.
        </p>
      </section>

      {/* Scholarships */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Scholarships for Nepali Students in Canada</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Apply per institution; deadlines vary. Popular options include Lester B. Pearson (University of Toronto), Vanier Canada Graduate Scholarships, Canadian Commonwealth Scholarship, Ontario Graduate Scholarship, Quebec Provincial Government Scholarship, and Ontario Trillium Scholarship. See our <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships page</Link> for details.
        </p>
      </section>

      {/* Top Universities & Colleges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Top Universities and Colleges for Nepali Students</h2>
          <p className="text-gray-700 mb-4">
            Canadian DLIs include globally ranked universities and career-focused colleges. Examples: <strong>University of Toronto</strong>, <strong>McGill University</strong>, <strong>University of British Columbia</strong> (top research); <strong>Seneca</strong>, <strong>Humber</strong>, <strong>George Brown</strong> (colleges with co-op and applied programmes); <strong>University of Waterloo</strong>, <strong>Dalhousie University</strong>. Check <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">IRCC DLI list</a> before applying.
          </p>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Top Canadian Cities for Nepali Students</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {canadaData.cities.map((city, i) => (
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Canada vs USA vs UK vs Australia – 2026</h2>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Canada FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Canada from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={canadaData.faqs} />
          </div>
        </div>
      </section>

      {/* Authority */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">Why Trust San Marina for Canada Study?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We guide you through DLI selection, proof of funds, GIC setup, and study permit application. Our team has supported hundreds of Nepali applicants for VFS biometrics and IRCC submissions. <Link href="/about/" className="text-blue-600 hover:underline">QEAC and PIER certified</Link>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: canadaData.stats.visaSuccess, label: 'Visa Success', icon: CheckCircle2 },
              { value: '2+', label: 'Years Experience', icon: Clock },
              { value: '1,500+', label: 'Students Placed', icon: Users },
              { value: '50+', label: 'Canadian DLI Partners', icon: Globe },
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

      {/* CTA – Book Free first */}
      <section className="py-16 bg-gradient-to-br from-[#0056b3] via-[#004494] to-[#003366] mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in Canada from Nepal?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Our team has guided 1,500+ Nepali students through the study permit process—from DLI selection to PGWP and PR pathways. Book a free consultation at our Kathmandu (Tinkune, Baneshwor), Dang (Ghorahi), or Itahari offices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center justify-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">Book Free Consultation</Link>
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">Apply Now</Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            Compare: <Link href="/study-abroad/usa/" className="underline font-medium">USA</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="underline font-medium">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="underline font-medium">Australia</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="underline font-medium">Germany</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
          </p>
          <p className="mt-4 text-blue-400 text-xs">QEAC Certified • PIER Qualified • Study Permit Specialists | Last Updated: February 2026</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/usa/" className="text-blue-600 font-semibold hover:underline">USA</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
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
