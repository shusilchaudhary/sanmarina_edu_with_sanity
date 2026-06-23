import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ChevronRight,
  Building2,
  Award,
  Briefcase,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Denmark from Nepal 2026 | Cost, Visa & Scholarships',
  description: 'Study in Denmark from Nepal 2026: tuition DKK 45k–120k/year, living DKK 6.5k–9.5k/mo. Danish Govt scholarship. Copenhagen, Aarhus. Work 20 hrs/week. 6-mo post-study. Free consultation.',
  keywords: 'study in denmark, study in denmark from nepal, total cost to study in denmark from nepal, study in denmark for nepali students, study in denmark consultancy in nepal, study in denmark from nepal consultancy, study and work in denmark, study in denmark cost, study in denmark for free, denmark student visa process for nepali students, tuition fees in denmark for nepali students 2026, living cost in denmark for students from nepal, scholarship in denmark for nepali students 2026, post study work visa in denmark for nepali students, cheapest universities in denmark for international students, study in denmark without ielts from nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/denmark/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/denmark/',
    title: 'Study in Denmark from Nepal 2026 | Cost, Visa & Scholarships',
    description: 'Complete 2026 guide: study in Denmark, tuition, living costs, Danish government scholarship, residence permit. Copenhagen, Aarhus. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Denmark from Nepal 2026',
    description: 'Study in Denmark: cost, visa, Danish government scholarship, post-study permit. Free consultation in Kathmandu.',
  },
};

// Data from studyindenmark.dk, nyidanmark.dk (SIRI), Danish Ministry of Higher Education, VFS Global Nepal, DTU, KU, SDU. 1 DKK ≈ 14.5 NPR (Feb 2026)
const denmarkData = {
  country: 'Denmark',
  slug: 'denmark',
  heroImage: '/assets/denmark.webp',
  lastUpdated: 'February 2026',
  description: 'Denmark hosts 38,000+ international students. Tuition DKK 45,000–120,000/year for non-EU; living DKK 6,500–9,500/month. Danish Government Scholarship for Nepali students. Work 20 hrs/week (90 hrs/month); full-time June–August. 6-month post-study job search permit. Copenhagen, Aarhus.',
  stats: {
    universities: '30+',
    internationalStudents: '38,000+',
    englishPrograms: '500+',
    postStudy: '6 months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    min: 45000,
    max: 120000,
    applicationFee: 150,
    residenceFee: 2490,
  },
  livingCost: {
    copenhagen: { min: 8000, max: 9500 },
    aarhus: { min: 7000, max: 8500 },
    smaller: { min: 6500, max: 7500 },
  },
  workRules: 'Up to 20 hours per week on average during term (September–May); full-time during June, July, August. Approximately 90 hours per month during academic year. State-approved programmes only (May 2025 changes affect non-accredited programmes).',
  postStudy: { duration: 6, note: 'Job seeking permit: 6 months (or up to 3 years for some programmes). Cannot work during job seeking. Apply before study permit expires. Fee DKK 3,060. State-approved programmes only.' },
  visaLocation: 'Apply online via SIRI (Danish Agency for International Recruitment and Integration). Submit at Danish diplomatic mission—Nepali students apply through VFS Global in Kathmandu. Biometrics mandatory. Pay fee online before submission.',
  visaProcessing: 'Processing fee DKK 2,490. Normal processing 2 months. Apply after admission and tuition payment.',
  intakeMonths: 'Autumn: September (main intake); Spring: February (fewer programmes)',
  deadlines: 'Non-EU/EEA: apply by 15 January 2026 for autumn 2026. EU/EEA: 1 March. Danish Government Scholarship: apply per university, typically December–March (e.g. SDU 1 February 2026).',
  requirements: [
    'Valid passport (copy of all pages)',
    'Proof of tuition fee payment',
    'Financial documentation (if not paying fees or on scholarship)',
    'Enrolment documentation from university',
    'Full-time admission at state-approved institution',
  ],
  residenceSteps: [
    'Apply to Danish universities (deadline 15 January for autumn, non-EU/EEA)',
    'Receive admission offer and pay tuition',
    'SIRI sends application link via email (apply online)',
    'Gather documents: passport, tuition proof, financial docs',
    'Pay residence permit fee DKK 2,490 online',
    'Submit application at VFS Global Kathmandu; provide biometrics',
    'Processing typically 2 months',
    'Collect residence permit; travel to Denmark',
  ],
  residenceStepsWithText: [
    { name: 'Apply to Danish universities (deadline 15 January for autumn, non-EU/EEA)', text: 'Use studyindenmark.dk programme finder. Non-EU apply by 15 January; EU/EEA by 1 March. Application fee DKK 150.' },
    { name: 'Receive admission offer and pay tuition', text: 'Tuition must be paid before residence permit application. Danish Govt Scholarship: apply per university (SDU 1 Feb; others Dec–March).' },
    { name: 'SIRI sends application link via email (apply online)', text: 'Apply via SIRI (Danish Agency for International Recruitment and Integration). Pay DKK 2,490 online before submission.' },
    { name: 'Gather documents: passport, tuition proof, financial docs', text: 'Copy of all passport pages. Proof of tuition payment. Financial documentation if on scholarship.' },
    { name: 'Pay residence permit fee DKK 2,490 online; submit at VFS Global Kathmandu', text: 'Biometrics mandatory at VFS. Pay fee online before submission. Nepali students submit in Kathmandu.' },
    { name: 'Processing typically 2 months; collect residence permit; travel to Denmark', text: 'Apply after admission. State-approved programmes only. Work 20 hrs/week during term; full-time June–August.' },
  ],
  faqs: [
    {
      question: 'What is study in Denmark for international students?',
      answer: 'Study in Denmark for international students: 30+ universities, 500+ English programmes. Non-EU tuition DKK 45,000–120,000/year; living DKK 6,500–9,500/month. Copenhagen, Aarhus. Work 20 hrs/week during term; full-time June–August. 6-month post-study job search. Danish Government Scholarship for Nepali students. Apply via VFS Global Kathmandu. Source: studyindenmark.dk, nyidanmark.dk.',
    },
    {
      question: 'What is the Denmark student visa process for Nepali students?',
      answer: 'Denmark student visa process for Nepali students: Apply for residence permit online via SIRI. Submit at VFS Global Kathmandu with biometrics. Required: admission letter, tuition payment proof, passport, financial docs. Fee DKK 2,490. Processing 2 months. Apply after admission. Source: nyidanmark.dk, vfsglobal.com.',
    },
    {
      question: 'What are tuition fees in Denmark for Nepali students 2026?',
      answer: 'Tuition fees in Denmark for Nepali students 2026: DKK 45,000–120,000/year for non-EU (€6,000–€16,000). Cheapest universities in Denmark for international students: hospitality, some social sciences. Engineering, medicine higher. 1 DKK ≈ 14.5 NPR (Feb 2026). EU/EEA study free. Source: studyindenmark.dk.',
    },
    {
      question: 'What is the living cost in Denmark for students from Nepal?',
      answer: 'Living cost in Denmark for students from Nepal: Copenhagen DKK 8,000–9,500/month; Aarhus DKK 7,000–8,500; smaller towns DKK 6,500–7,500. NPR: DKK 8,000/mo ≈ 1.16 lakhs. Accommodation 36% of budget; food DKK 1,500–2,000; transport DKK 400. Source: studyindenmark.dk, sdu.dk.',
    },
    {
      question: 'What is the total cost to study in Denmark from Nepal?',
      answer: 'Total cost to study in Denmark from Nepal: First year DKK 130,000–250,000 (NPR 19–36 lakhs). Tuition DKK 45,000–120,000; living DKK 78,000–114,000/year; residence permit DKK 2,490; airfare ~DKK 12,000. Study in denmark cost varies by city and programme.',
    },
    {
      question: 'What is scholarship in Denmark for Nepali students 2026?',
      answer: 'Scholarship in Denmark for Nepali students 2026: Danish Government Scholarship—full or partial tuition waiver, DKK 3,000/month stipend. Apply per university (KU, DTU, Aarhus, SDU, CBS). Deadlines typically December–March. SDU: 1 February 2026. Merit-based; excellent academic records required. Source: studyindenmark.dk.',
    },
    {
      question: 'Can I study and work in Denmark?',
      answer: 'Yes. Study and work in Denmark: Up to 20 hours per week during term (September–May); full-time June–August. Approximately 90 hours per month during academic year. State-approved programmes only. May 2025: non-accredited programmes no longer get work rights. Source: nyidanmark.dk.',
    },
    {
      question: 'What is the post study work visa in Denmark for Nepali students?',
      answer: 'Post study work visa in Denmark for Nepali students: Job seeking permit 6 months (or up to 3 years for some programmes). Cannot work during job seeking. Apply before study permit expires. Fee DKK 3,060. Processing ~3 months. State-approved programmes only. Source: nyidanmark.dk.',
    },
    {
      question: 'Can I study in Denmark for free?',
      answer: 'Study in Denmark for free: EU/EEA/Swiss citizens study tuition-free. Non-EU students pay unless awarded Danish Government Scholarship. Scholarship covers full or partial tuition + DKK 3,000/month. Apply per university. Source: studyindenmark.dk.',
    },
    {
      question: 'Can I study in Denmark without IELTS from Nepal?',
      answer: 'Study in Denmark without IELTS from Nepal: Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Check individual programme requirements. Many require B2/C1 equivalent. Contact university admissions.',
    },
    {
      question: 'What are the cheapest universities in Denmark for international students?',
      answer: 'Cheapest universities in Denmark for international students: Tuition DKK 45,000–120,000/year. Hospitality, tourism, some social sciences at lower end. University of Southern Denmark, Aalborg, regional universities often have competitive fees. Check studyindenmark.dk for programme finder.',
    },
    {
      question: 'Where do Nepali students apply for Denmark visa from Kathmandu?',
      answer: 'Nepali students apply for Denmark residence permit through VFS Global in Kathmandu. Apply online via SIRI; SIRI sends application link. Pay fee online before submission. Biometrics mandatory at VFS. Source: vfsglobal.com, nyidanmark.dk.',
    },
    {
      question: 'Can I get PR in Denmark after studying?',
      answer: 'PR typically requires 4+ years of legal residence. 6-month job search → work permit → permanent residence. Citizenship: 9 years residence (or 8 if Nordic citizen); language and integration required. Verify at nyidanmark.dk.',
    },
    {
      question: 'Can I bring dependents to Denmark when studying?',
      answer: 'Family reunification possible for students with valid residence. Spouse and children can apply; proof of additional funds and accommodation required. Verify at nyidanmark.dk for dependent permit requirements.',
    },
  ],
};

const tuitionTable = [
  { level: 'General (non-EU)', range: 'DKK 45,000–120,000/year', notes: '€6,000–€16,000; varies by programme' },
  { level: 'Hospitality / Tourism', range: 'DKK 30,000–52,000/year', notes: 'Lower range' },
  { level: 'Engineering / Medicine', range: 'DKK 80,000–120,000/year', notes: 'Higher range' },
  { level: 'Residence permit fee', range: 'DKK 2,490', notes: 'SIRI processing fee' },
];

const denmarkVsSweden = [
  { aspect: 'Tuition (non-EU)', denmark: 'DKK 45,000–120,000/year', sweden: 'SEK 80,000–295,000/year' },
  { aspect: 'Living (cheapest)', denmark: 'Smaller towns DKK 6,500–7,500/mo', sweden: 'Lund SEK 8,000–10,500/mo' },
  { aspect: 'Work (term)', denmark: '20 hrs/week; 90 hrs/month', sweden: 'No formal limit' },
  { aspect: 'Post-study', denmark: '6-month job search', sweden: '12-month job search' },
  { aspect: 'Scholarships', denmark: 'Danish Govt (per university)', sweden: 'SISGP (centralized)' },
  { aspect: 'Visa from Nepal', denmark: 'VFS Global Kathmandu', sweden: 'Online; passport New Delhi' },
];

export default function DenmarkStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Denmark from Nepal 2026 – Complete Guide',
        description: denmarkData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: denmarkData.author.name, url: 'https://www.sanmarina.edu.np', description: denmarkData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: denmarkData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Denmark Residence Permit from Nepal',
        description: 'Step-by-step: apply by 15 Jan, pay tuition, SIRI online, VFS Kathmandu biometrics. DKK 2,490 fee. Processing 2 months. Per studyindenmark.dk, nyidanmark.dk 2026.',
        step: denmarkData.residenceStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'Best education consultancy in Nepal for Denmark study abroad',
        knowsAbout: ['Study in Denmark from Nepal', 'Danish Government Scholarship', 'VFS Kathmandu Denmark', 'SIRI residence permit', 'Copenhagen Aarhus DTU KU SDU'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Denmark', item: 'https://www.sanmarina.edu.np/study-abroad/eur/denmark/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Denmark from Nepal.',
        areaServed: { '@type': 'Country', name: 'Nepal' },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={denmarkData.heroImage} alt="Nepali students studying in Denmark - Copenhagen Aarhus, study abroad 2026" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/eur/" className="hover:text-white">Europe</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Denmark</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {denmarkData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Denmark from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Danish Government Scholarship</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Denmark: tuition DKK 45k–120k/year, living DKK 6.5k–9.5k/mo. Danish Govt scholarship. Work 20 hrs/week. 6-month post-study. Copenhagen, Aarhus. Study in denmark from nepal consultancy support.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg">
              Apply Now
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /><span>WhatsApp Us</span>
            </a>
          </div>
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Denmark study experts. Study in Denmark from Nepal consultancy—no obligation for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.studyindenmark.dk" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyindenmark.dk</a>, <a href="https://www.nyidanmark.dk" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nyidanmark.dk</a> (SIRI).</strong> Tuition DKK 45k–120k; living DKK 6.5k–9.5k/mo. Verify with official sources.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {denmarkData.author.name} · {denmarkData.author.role} · {denmarkData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Denmark from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition DKK 45,000–120,000; living DKK 6,500–9,500/mo. Danish Govt scholarship: full/partial tuition + DKK 3,000/mo. Residence permit via VFS Kathmandu (SIRI online). Work 20 hrs/week term; full-time June–August. 6‑month post-study job search. <a href="https://www.studyindenmark.dk" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyindenmark.dk</a>, <a href="https://www.nyidanmark.dk" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nyidanmark.dk</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">DKK 45,000–120,000/year (Danish Govt scholarship available)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Residence permit fee</td><td className="p-3">DKK 2,490</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">VFS Global Kathmandu; apply online via SIRI</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week term; full-time June–August (~90 hrs/month)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">6-month job search (up to 3 years for some programmes)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">~2 months</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: denmarkData.stats.universities, label: 'Universities' },
              { value: denmarkData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: denmarkData.stats.englishPrograms, label: 'English Programmes' },
              { value: denmarkData.stats.postStudy, label: 'Post-Study Permit' },
              { value: '1,500+', label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Denmark */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Denmark for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Denmark offers 500+ English programmes, Danish Government Scholarship for Nepal, work 20 hrs/week, 6-month post-study permit, and visa submission from Kathmandu via VFS. Copenhagen, Aarhus. Compare with <Link href="/study-abroad/eur/sweden/" className="text-blue-600 hover:underline">Sweden</Link>, <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Denmark for nepali students attracts those seeking Nordic quality of life and innovative education. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Denmark for engineering, business, and sustainability. Study in denmark from nepal consultancy and study in denmark consultancy in nepal services help with university selection, Danish Government Scholarship applications, and residence permit support via VFS Kathmandu.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Denmark?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study in denmark cost: Total cost to study in denmark from nepal—first year DKK 130,000–250,000 (NPR 19–36 lakhs). Tuition DKK 45,000–120,000/year; living DKK 6,500–9,500/month. Cheapest universities in Denmark for international students: hospitality, some social sciences. 1 DKK ≈ 14.5 NPR (Feb 2026).
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">First-Year Cost Breakdown (Nepali Students)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">DKK</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tuition (general)</td><td className="p-3">45,000–120,000</td><td className="p-3">6.5–17.4L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">78,000–114,000</td><td className="p-3">11.3–16.5L</td></tr>
                <tr className="border-b"><td className="p-3">Residence permit</td><td className="p-3">2,490</td><td className="p-3">~36,000</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~12,000</td><td className="p-3">1.7L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">130,000–250,000</td><td className="p-3 font-medium">19–36L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Denmark for Nepali Students 2026</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Level</th>
                  <th className="p-4 text-left">Fee Range</th>
                  <th className="p-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tuitionTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.level}</td>
                    <td className="p-4">{row.range}</td>
                    <td className="p-4">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Denmark for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            studyindenmark.dk: Students budget 750–900 EUR/month nationally; Copenhagen ~1,200 EUR. Accommodation 36% of budget; food DKK 1,500–2,000; transport DKK 400.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Copenhagen</td><td className="p-3">DKK 8,000–9,500</td><td className="p-3">Capital; University of Copenhagen, DTU, CBS</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Aarhus</td><td className="p-3">DKK 7,000–8,500</td><td className="p-3">Aarhus University; cheaper than Copenhagen</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Odense / Aalborg</td><td className="p-3">DKK 6,500–7,500</td><td className="p-3">SDU, Aalborg University; lowest cost</td></tr>
                <tr><td className="p-3 font-medium">Smaller towns</td><td className="p-3">DKK 6,500–7,500</td><td className="p-3">Most affordable</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Accommodation 36% of budget. Source: studyindenmark.dk, sdu.dk.</p>
        </div>
      </section>

      {/* Danish Government Scholarship */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarship in Denmark for Nepali Students 2026
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Scholarship in denmark for nepali students 2026: Danish Government Scholarship—full or partial tuition waiver, DKK 3,000/month stipend. Apply per university (University of Copenhagen, DTU, Aarhus, SDU, CBS). Deadlines typically December–March. SDU: 1 February 2026. Merit-based; excellent academic records required.
          </p>
          <p className="text-gray-700 mb-4">
            Study in denmark for free possible via this scholarship. Does not cover travel, visa fees, or personal expenses. Apply when applying to university. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Full or partial tuition waiver</li>
            <li>• DKK 3,000/month stipend (before tax)</li>
            <li>• Insurance in some cases</li>
            <li>• Apply per university; deadlines vary</li>
            <li>• Non-EU/EEA; excellent academic records</li>
          </ul>
        </div>
      </section>

      {/* Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Study and Work in Denmark?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Study and work in Denmark: Up to 20 hours per week during term (September–May); full-time June, July, August. Approximately 90 hours per month during academic year. State-approved programmes only. May 2025: non-accredited programmes no longer get work rights.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 20 hrs/week during term (Sept–May)</li>
            <li>• Full-time June–August</li>
            <li>• ~90 hours/month during academic year</li>
            <li>• State-approved programmes only</li>
          </ul>
        </div>
      </section>

      {/* Post-Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Job Search Permit in Denmark for Nepali Students</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Post study work visa in denmark for nepali students: Job seeking permit 6 months (or up to 3 years for some programmes). Cannot work during job seeking. Apply before study permit expires. Fee DKK 3,060. Processing ~3 months. State-approved programmes only.
        </p>
        <p className="text-gray-700 mb-4">
          Apply at nyidanmark.dk. Once employed, apply for work permit. Source: nyidanmark.dk.
        </p>
      </section>

      {/* Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Autumn: September (main intake). Spring: February (fewer programmes). Non-EU/EEA: apply by 15 January 2026 for autumn. Danish Government Scholarship: per university, typically December–March.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Autumn 2026:</strong> Non-EU apply by 15 January</li>
            <li>• <strong>EU/EEA:</strong> 1 March</li>
            <li>• <strong>Danish Govt Scholarship:</strong> SDU 1 Feb; others Dec–March</li>
            <li>• <strong>Residence permit:</strong> Apply after admission; allow 2 months</li>
          </ul>
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Denmark for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Engineering, Business, Computer Science, Environmental Science, Sustainability, Medicine, Design. DTU for engineering; Copenhagen Business School for business; University of Copenhagen for all disciplines; Aarhus for research.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Engineering & Tech:</strong> DTU (Technical University of Denmark), Aalborg—civil, mechanical, software, PBL</li>
          <li>• <strong>Business & Economics:</strong> Copenhagen Business School (CBS), Aarhus—finance, management, MBA</li>
          <li>• <strong>Computer Science & IT:</strong> DTU, University of Copenhagen, Aalborg</li>
          <li>• <strong>Environmental & Sustainability:</strong> University of Copenhagen, DTU, Aarhus</li>
          <li>• <strong>Medicine & Health:</strong> University of Copenhagen, Aarhus</li>
          <li>• <strong>Hospitality & Tourism:</strong> Lower tuition (DKK 30,000–52,000/year)</li>
        </ul>
      </section>

      {/* Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Denmark Without IELTS from Nepal?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in denmark without ielts from nepal: Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Check individual programme requirements. Many require B2/C1 equivalent.
        </p>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Denmark</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Copenhagen, DTU, Aarhus University, University of Southern Denmark, Copenhagen Business School, Aalborg University. Cheapest universities in Denmark for international students: SDU, Aalborg, regional universities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Copenhagen', city: 'Copenhagen', programs: 'All disciplines' },
            { name: 'Technical University of Denmark (DTU)', city: 'Copenhagen', programs: 'Engineering' },
            { name: 'Aarhus University', city: 'Aarhus', programs: 'Research, all fields' },
            { name: 'University of Southern Denmark', city: 'Odense, etc.', programs: 'Multidisciplinary' },
            { name: 'Copenhagen Business School', city: 'Copenhagen', programs: 'Business' },
            { name: 'Aalborg University', city: 'Aalborg', programs: 'Engineering, PBL' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MID-PAGE CTA – Book Free first */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 mb-6">
            Get expert guidance on study in Denmark from Nepal. Our study in denmark from nepal consultancy helps with university selection, Danish Government Scholarship applications, and residence permit via VFS Kathmandu. 1,500+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Denmark from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* Residence Permit Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Denmark Student Visa Process for Nepali Students (Residence Permit)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Denmark student visa process for nepali students: Apply online via SIRI. Submit at VFS Global Kathmandu with biometrics. Required: admission letter, tuition payment proof, passport, financial docs. Fee DKK 2,490. Processing 2 months.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Denmark visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>VFS Global in Kathmandu.</strong> Apply online via SIRI; SIRI sends application link. Pay fee online before submission. Biometrics mandatory at VFS. Source: vfsglobal.com, nyidanmark.dk.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Residence Permit Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {denmarkData.residenceStepsWithText.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <div><span className="font-medium text-gray-800">{step.name}</span><span className="text-gray-600 text-sm block mt-0.5">{step.text}</span></div>
            </li>
          ))}
        </ol>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-2">Common Denmark Residence Permit Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Applying before tuition is paid (SIRI requires proof of payment)</li>
            <li>Enrolling in non–state-approved programme (May 2025: no work rights for non-accredited)</li>
            <li>Applying too late (processing ~2 months; apply after admission)</li>
            <li>Not paying residence permit fee online before VFS submission</li>
            <li>Missing biometrics appointment at VFS Kathmandu</li>
            <li>Documents not in English or Danish without certified translation</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {denmarkData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Denmark?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, Danish Government Scholarship applications, and residence permit support via VFS Kathmandu. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Denmark from Nepal requirements—including tuition payment and state-approved programme selection.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Lalitpur, Pokhara, and across Nepal rely on us for study in Denmark from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and Danish Govt Scholarship guidance</li>
          <li>• Residence permit and VFS Kathmandu support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* GAP & Dependents */}
      <section className="py-12 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Does Denmark Accept Study Gap (GAP)? Can I Bring Dependents?</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP:</strong> Danish universities generally accept study gaps when justified. Danish Government Scholarship is merit-based; excellent academic records required. Check individual programme requirements at studyindenmark.dk.
        </p>
        <p className="text-gray-700">
          <strong>Dependents:</strong> Family reunification possible for students with valid residence. Spouse and children can apply; proof of additional funds and accommodation required. Verify at nyidanmark.dk for dependent permit requirements.
        </p>
      </section>

      {/* PR Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Denmark</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> 6-month job search permit → work permit → permanent residence. PR typically requires 4+ years of legal residence. Citizenship: 9 years residence (8 if Nordic citizen) + language + integration. Verify at nyidanmark.dk.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Cannot work during job search permit. Once employed, apply for work permit; after 4 years, apply for permanent residence.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Post-study (6 months)</td><td className="p-3">Job search; cannot work; up to 3 years for some programmes</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Work residence</td><td className="p-3">Employment permit</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">4+ years for PR; 9 years (8 if Nordic) for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Denmark vs Sweden */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Denmark vs Sweden – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both Nordic destinations for Nepali students. Denmark: VFS Kathmandu, 6-month post-study. Sweden: 12-month post-study, SISGP. Compare with <Link href="/study-abroad/eur/sweden/" className="text-blue-600 hover:underline">Sweden</Link>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Denmark</th>
                  <th className="p-4 text-left">Sweden</th>
                </tr>
              </thead>
              <tbody>
                {denmarkVsSweden.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.denmark}</td>
                    <td className="p-4">{row.sweden}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Denmark FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Denmark from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={denmarkData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Book Free first, internal links */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Denmark Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Denmark for Nepali students 2026, Denmark student visa process, and Danish Government Scholarship. Free consultation in Kathmandu—no obligation. 1,500+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Denmark from Nepal
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/sweden/" className="underline hover:text-white">Sweden</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/sweden/" className="text-blue-600 font-semibold hover:underline">Sweden</Link>
            {' · '}
            <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 font-semibold hover:underline">Netherlands</Link>
            {' · '}
            <Link href="/study-abroad/eur/norway/" className="text-blue-600 font-semibold hover:underline">Norway</Link>
            {' · '}
            <Link href="/study-abroad/eur/finland/" className="text-blue-600 font-semibold hover:underline">Finland</Link>
            {' · '}
            <Link href="/study-abroad/hungary/" className="text-blue-600 font-semibold hover:underline">Hungary</Link>
            {' · '}
            <Link href="/study-abroad/eur/poland/" className="text-blue-600 font-semibold hover:underline">Poland</Link>
            {' · '}
            <Link href="/study-abroad/eur/belgium/" className="text-blue-600 font-semibold hover:underline">Belgium</Link>
            {' · '}
            <Link href="/study-abroad/romania/" className="text-blue-600 font-semibold hover:underline">Romania</Link>
            {' · '}
            <Link href="/study-abroad/ireland/" className="text-blue-600 font-semibold hover:underline">Ireland</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
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