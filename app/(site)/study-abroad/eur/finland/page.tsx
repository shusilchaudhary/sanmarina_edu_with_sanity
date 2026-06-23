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
  title: 'Study in Finland from Nepal 2026 | Cost, Visa & Scholarships',
  description: 'Study in Finland from Nepal 2026: tuition €8k–20k/year, living €800–1,200/mo. University scholarships. Helsinki, Tampere, Turku. Work 30 hrs/week. 2-year post-study. Free consultation.',
  keywords: 'study in finland, study in finland from nepal, study in finland without ielts, study in finland cost, study in finland for free, study and work in finland, study bachelor in finland, study in finland consultancy in nepal, study in finland for international students, finland student visa process for nepali students, tuition fees in finland for nepali students 2026, living cost in finland for students from nepal, scholarship in finland for nepali students 2026, post study work permit in finland for nepali students, cheapest universities in finland for international students, study masters in finland for nepali students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/finland/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/finland/',
    title: 'Study in Finland from Nepal 2026 | Cost, Visa & Scholarships',
    description: 'Complete 2026 guide: study in Finland, tuition, living costs, university scholarships, residence permit. Helsinki, Tampere, Turku. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Finland from Nepal 2026',
    description: 'Study in Finland: cost, visa, university scholarships, 2-year post-study permit. Free consultation in Kathmandu.',
  },
};

// Data from studyinfinland.fi, migri.fi (Finnish Immigration Service), Finnish Ministry of Education, studyinfo.fi, VFS Global Nepal. 1 EUR ≈ 143 NPR (Feb 2026)
const finlandData = {
  country: 'Finland',
  slug: 'finland',
  heroImage: '/assets/europe.jpg',
  lastUpdated: 'February 2026',
  description: 'Finland hosts 32,000+ international students. Tuition €8,000–€20,000/year for non-EU; living €800–€1,200/month. University-specific scholarships for Nepali students. Work 30 hrs/week (120 hrs/month); full-time during holidays. 2-year post-study residence permit to seek work. Helsinki, Tampere, Turku.',
  stats: {
    universities: '35+',
    internationalStudents: '32,000+',
    englishPrograms: '600+',
    postStudy: '2 years',
    studentsPlaced: '1,500+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    min: 8000,
    max: 20000,
    residenceFee: 600,
  },
  livingCost: {
    helsinki: { min: 1000, max: 1200 },
    tampere: { min: 900, max: 1100 },
    turku: { min: 900, max: 1100 },
    smaller: { min: 800, max: 950 },
  },
  workRules: 'Average 30 hours per week during term; full-time during holidays. Approximately 120 hours per month or 1,560 hours per year. Internships and diploma work required by degree are exempt from the limit. Source: migri.fi.',
  postStudy: { duration: 24, note: 'Residence permit to look for work or start a business: up to 2 years. Can work during this period. Apply within 5 years of graduation. Fee €470 (online). Apply via Enter Finland. Source: migri.fi.' },
  visaLocation: 'Apply online via Enter Finland (enterfinland.fi). Prove identity at Finnish mission—Nepali students submit through VFS Global in Kathmandu. Finland does not have an embassy in Nepal; applications processed by Finnish Immigration Service (Migri).',
  visaProcessing: 'Application fee €600 (electronic). Processing typically 1–2 months. Migri minimum living requirement €800/month. Apply after admission and tuition payment.',
  intakeMonths: 'Autumn: September (main intake); Spring: January (fewer programmes)',
  deadlines: 'Joint application: 7–21 January 2026 for autumn 2026 (studyinfo.fi). Nearly 300 English-taught programmes. Results from early February; all by 27 May. University scholarships: apply with admission; deadlines vary.',
  requirements: [
    'Valid passport',
    'Proof of tuition fee payment or scholarship',
    'Proof of funds: €800/month for entire stay (Migri requirement)',
    'Comprehensive health insurance',
    'Admission letter from Finnish university',
    'Full-time degree programme at recognised institution',
  ],
  residenceSteps: [
    'Apply to Finnish universities via studyinfo.fi (joint application 7–21 January for autumn)',
    'Receive admission offer and pay tuition (or secure scholarship)',
    'Apply for residence permit online at enterfinland.fi',
    'Upload documents: passport, admission proof, tuition payment, bank statements, insurance',
    'Pay application fee €600',
    'Prove identity at VFS Global Kathmandu (or Finnish mission)',
    'Processing typically 1–2 months',
    'Collect residence permit card; travel to Finland',
  ],
  residenceStepsWithText: [
    { name: 'Apply to Finnish universities via studyinfo.fi (joint application 7–21 January for autumn)', text: 'Nearly 300 English-taught programmes. Results from early February; all by 27 May. University scholarships: apply with admission.' },
    { name: 'Receive admission offer and pay tuition (or secure scholarship)', text: 'Tuition must be paid before residence permit. Migri minimum €800/month for living. University tuition waivers available.' },
    { name: 'Apply for residence permit online at enterfinland.fi', text: 'Electronic application fee €600. Upload passport, admission proof, tuition payment, bank statements, health insurance.' },
    { name: 'Upload documents: passport, admission proof, tuition payment, bank statements, insurance', text: 'Proof of funds €800/month for entire stay. Comprehensive health insurance required.' },
    { name: 'Pay application fee €600; prove identity at VFS Global Kathmandu', text: 'Finland has no embassy in Nepal; Migri processes. Biometrics and document submission at VFS.' },
    { name: 'Processing typically 1–2 months; collect permit; travel to Finland', text: 'Apply after admission. Work 30 hrs/week during term; full-time holidays.' },
  ],
  faqs: [
    {
      question: 'What is study in Finland for international students?',
      answer: 'Study in Finland for international students: 35+ universities, 600+ English programmes. Non-EU tuition €8,000–€20,000/year; living €800–€1,200/month. Helsinki, Tampere, Turku. Work 30 hrs/week during term; full-time holidays. 2-year post-study permit to seek work. University scholarships available. Apply via studyinfo.fi. Source: studyinfinland.fi, migri.fi.',
    },
    {
      question: 'What is the Finland student visa process for Nepali students?',
      answer: 'Finland student visa process for Nepali students: Apply for residence permit online at enterfinland.fi. Submit documents and prove identity at VFS Global Kathmandu. Required: admission letter, tuition payment proof, €800/month funds, passport, health insurance. Fee €600. Processing 1–2 months. Apply after admission. Source: migri.fi, vfsglobal.com.',
    },
    {
      question: 'What are tuition fees in Finland for Nepali students 2026?',
      answer: 'Tuition fees in Finland for Nepali students 2026: €8,000–€20,000/year for non-EU (studyinfinland.fi). Cheapest universities in Finland for international students: some UAS programmes, humanities. Engineering, business often higher. 1 EUR ≈ 143 NPR (Feb 2026). EU/EEA study free. PhD free for all. Source: studyinfinland.fi.',
    },
    {
      question: 'What is the living cost in Finland for students from Nepal?',
      answer: 'Living cost in Finland for students from Nepal: Migri minimum €800/month. Helsinki €1,000–€1,200/month; Tampere/Turku €900–€1,100; smaller cities €800–€950. NPR: €1,000/mo ≈ 1.43 lakhs. Studyinfinland.fi recommends €900–€1,200. Includes accommodation, food, transport. Source: studyinfinland.fi, migri.fi.',
    },
    {
      question: 'What is the total cost to study in Finland from Nepal?',
      answer: 'Total cost to study in Finland from Nepal: First year €18,000–€35,000 (NPR 26–50 lakhs). Tuition €8,000–€20,000; living €9,600–€14,400/year; residence permit €600; airfare ~€1,000. Study in finland cost varies by city and programme. Source: studyinfinland.fi.',
    },
    {
      question: 'What is scholarship in Finland for Nepali students 2026?',
      answer: 'Scholarship in Finland for Nepali students 2026: University-specific only—no Finnish government scholarships for degree studies. Universities offer tuition waivers (full or partial). Apply with admission; typically competitive. Does not cover living costs. Beware of false "fully funded Finland government scholarship" claims. Source: studyinfinland.fi.',
    },
    {
      question: 'Can I study and work in Finland?',
      answer: 'Yes. Study and work in Finland: Average 30 hours per week during term; full-time during holidays. Approximately 120 hours per month, 1,560 hours per year. Internships required by degree exempt. Finding work challenging without Finnish/Swedish. Do not rely on part-time income for tuition. Source: migri.fi, studyinfinland.fi.',
    },
    {
      question: 'What is the post study work permit in Finland for Nepali students?',
      answer: 'Post study work permit in Finland for Nepali students: Residence permit to look for work or start a business—up to 2 years. Can work during this period. Apply within 5 years of graduation. Fee €470 (online). Apply via Enter Finland. Must have completed degree in Finland. Source: migri.fi.',
    },
    {
      question: 'Can I study in Finland for free?',
      answer: 'Study in Finland for free: EU/EEA/Swiss citizens study tuition-free. Non-EU students pay unless awarded university tuition waiver. PhD programmes free for all nationalities. University scholarships can cover full or partial tuition; living costs not covered. Source: studyinfinland.fi.',
    },
    {
      question: 'Can I study in Finland without IELTS?',
      answer: 'Study in Finland without IELTS: Some universities accept TOEFL, Cambridge, PTE, or proof of prior English-medium education. Check individual programme at studyinfo.fi. Many require B2/C1 equivalent. Contact university admissions for alternatives.',
    },
    {
      question: 'What are the cheapest universities in Finland for international students?',
      answer: 'Cheapest universities in Finland for international students: Tuition €8,000–€20,000/year. Universities of Applied Sciences (UAS) and some university programmes at lower end. Check studyinfo.fi for programme-specific fees. University of Eastern Finland, Tampere University, regional UAS often competitive.',
    },
    {
      question: 'Where do Nepali students apply for Finland visa from Kathmandu?',
      answer: 'Nepali students apply for Finland residence permit online at enterfinland.fi. Prove identity at VFS Global in Kathmandu. Finland has no embassy in Nepal; Migri processes applications. Biometrics and document submission at VFS. Source: migri.fi, vfsglobal.com.',
    },
    {
      question: 'Can I study bachelor in Finland from Nepal?',
      answer: 'Yes. Study bachelor in Finland from Nepal: 600+ English programmes including bachelor\'s. Apply via studyinfo.fi joint application (7–21 January for autumn). Tuition €8,000–€20,000/year. University scholarships available. Residence permit via Enter Finland; VFS Kathmandu for identity verification.',
    },
    {
      question: 'Can I study masters in Finland for Nepali students?',
      answer: 'Study masters in Finland for Nepali students: 300+ English-taught master\'s in joint application. Tuition €8,000–€20,000/year. University tuition waivers available. Apply 7–21 January for autumn 2026. 2-year post-study permit to seek work. Helsinki, Tampere, Turku, Aalto, University of Helsinki. Source: studyinfinland.fi.',
    },
  ],
};

const tuitionTable = [
  { level: 'General (non-EU)', range: '€8,000–€20,000/year', notes: 'Varies by university and programme' },
  { level: 'Universities of Applied Sciences', range: '€8,000–€12,000/year', notes: 'Often lower range' },
  { level: 'Research universities', range: '€10,000–€20,000/year', notes: 'Engineering, business higher' },
  { level: 'Residence permit fee', range: '€600', notes: 'Electronic application (Migri)' },
];

const finlandVsSweden = [
  { aspect: 'Tuition (non-EU)', finland: '€8,000–€20,000/year', sweden: 'SEK 80,000–295,000/year' },
  { aspect: 'Living (min)', finland: '€800–€1,200/mo', sweden: 'SEK 10,584/mo' },
  { aspect: 'Work (term)', finland: '30 hrs/week; 120 hrs/month', sweden: 'No formal limit' },
  { aspect: 'Post-study', finland: '2-year job search (can work)', sweden: '12-month job search' },
  { aspect: 'Scholarships', finland: 'University-specific only', sweden: 'SISGP (centralized)' },
  { aspect: 'Visa from Nepal', finland: 'VFS Global Kathmandu', sweden: 'Online; passport New Delhi' },
];

export default function FinlandStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Finland from Nepal 2026 – Complete Guide',
        description: finlandData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: finlandData.author.name, url: 'https://www.sanmarina.edu.np', description: finlandData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: finlandData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Finland Residence Permit from Nepal',
        description: 'Step-by-step: studyinfo.fi by 7–21 Jan, pay tuition, enterfinland.fi, VFS Kathmandu. €600 fee. Processing 1–2 months. Per studyinfinland.fi, migri.fi 2026.',
        step: finlandData.residenceStepsWithText.map((s, i) => ({
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
        description: 'Best education consultancy in Nepal for Finland study abroad',
        knowsAbout: ['Study in Finland from Nepal', 'Enter Finland residence permit', 'VFS Kathmandu Finland', 'studyinfo.fi joint application', 'University of Helsinki Aalto Tampere'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Finland', item: 'https://www.sanmarina.edu.np/study-abroad/eur/finland/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Finland from Nepal.',
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
          <Image src={finlandData.heroImage} alt="Study in Finland from Nepal – Helsinki Tampere Turku, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Finland</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {finlandData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Finland from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & University Scholarships</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Finland: tuition €8k–20k/year, living €800–1,200/mo. University scholarships. Work 30 hrs/week. 2-year post-study permit. Helsinki, Tampere, Turku. Study in finland from nepal consultancy support.
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Finland study experts. Study in Finland from Nepal consultancy—no obligation for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.studyinfinland.fi" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinfinland.fi</a>, <a href="https://migri.fi" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">migri.fi</a> (Finnish Immigration Service), <a href="https://studyinfo.fi" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinfo.fi</a>, VFS Global Nepal.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {finlandData.author.name} · {finlandData.author.role} · {finlandData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Finland from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition €8,000–€20,000; living €800–€1,200/mo. University tuition waivers available. Residence permit via Enter Finland; VFS Kathmandu for identity. Work 30 hrs/week term; full-time holidays. 2‑year post-study permit (can work). <a href="https://www.studyinfinland.fi" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinfinland.fi</a>, <a href="https://migri.fi" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">migri.fi</a>, <a href="https://studyinfo.fi" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinfo.fi</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€8,000–€20,000/year (university scholarships available)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">€800/month (Migri minimum)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Residence permit</td><td className="p-3">Enter Finland online; VFS Kathmandu for identity</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">30 hrs/week term; full-time holidays (~120 hrs/month)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">2-year permit to seek work (can work during)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">1–2 months</td></tr>
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
              { value: finlandData.stats.universities, label: 'Universities' },
              { value: finlandData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: finlandData.stats.englishPrograms, label: 'English Programmes' },
              { value: finlandData.stats.postStudy, label: 'Post-Study Permit' },
              { value: finlandData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Finland */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Finland for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Finland offers 600+ English programmes, university scholarships, work 30 hrs/week, 2-year post-study permit (can work), and visa submission from Kathmandu via VFS. Helsinki, Tampere, Turku. Compare with <Link href="/study-abroad/eur/sweden/" className="text-blue-600 hover:underline">Sweden</Link>, <Link href="/study-abroad/eur/denmark/" className="text-blue-600 hover:underline">Denmark</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Finland for international students attracts those seeking Nordic quality education and innovation. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Finland for engineering, IT, business, and design. Study in finland consultancy in nepal and study in finland from nepal consultancy services help with university selection, scholarship applications, and residence permit via Enter Finland and VFS Kathmandu.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Finland?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study in finland cost: Total cost to study in Finland from Nepal—first year €18,000–€35,000 (NPR 26–50 lakhs). Tuition €8,000–€20,000/year; living €800–€1,200/month. Cheapest universities in Finland for international students: UAS, some humanities. 1 EUR ≈ 143 NPR (Feb 2026).
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">First-Year Cost Breakdown (Nepali Students)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">EUR</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tuition (general)</td><td className="p-3">8,000–20,000</td><td className="p-3">11.4–28.6L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">9,600–14,400</td><td className="p-3">13.7–20.6L</td></tr>
                <tr className="border-b"><td className="p-3">Residence permit</td><td className="p-3">600</td><td className="p-3">~86,000</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~1,000</td><td className="p-3">1.4L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">18,000–35,000</td><td className="p-3 font-medium">26–50L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Finland for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Finland for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Migri minimum €800/month. studyinfinland.fi recommends €900–€1,200 depending on location.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Helsinki</td><td className="p-3">€1,000–€1,200</td><td className="p-3">Capital; University of Helsinki, Aalto</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Tampere</td><td className="p-3">€900–€1,100</td><td className="p-3">Tampere University</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Turku</td><td className="p-3">€900–€1,100</td><td className="p-3">University of Turku</td></tr>
                <tr><td className="p-3 font-medium">Oulu / smaller cities</td><td className="p-3">€800–€950</td><td className="p-3">University of Oulu; most affordable</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Source: studyinfinland.fi, migri.fi.</p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarship in Finland for Nepali Students 2026
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Scholarship in finland for nepali students 2026: University-specific only—no Finnish government scholarships for degree studies. Universities offer tuition waivers (full or partial). Apply with admission; typically competitive. Does not cover living costs. Beware of false "fully funded Finland government scholarship" claims.
          </p>
          <p className="text-gray-700 mb-4">
            Study in finland for free possible via university tuition waiver. Check each programme at studyinfo.fi. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Tuition waivers (full or partial) per university</li>
            <li>• Apply with admission application</li>
            <li>• Competitive; does not cover living costs</li>
            <li>• No Finnish government scholarships for degree studies</li>
            <li>• PhD programmes free for all nationalities</li>
          </ul>
        </div>
      </section>

      {/* Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Study and Work in Finland?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Study and work in Finland: Average 30 hours per week during term; full-time during holidays. Approximately 120 hours per month, 1,560 hours per year. Internships required by degree exempt. Finding work challenging without Finnish/Swedish—do not rely on part-time income for tuition.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 30 hrs/week average during term</li>
            <li>• Full-time during holidays</li>
            <li>• ~120 hours/month; 1,560 hours/year</li>
            <li>• Internships/diploma work exempt</li>
          </ul>
        </div>
      </section>

      {/* Post-Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Work Permit in Finland for Nepali Students</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Post study work permit in finland for nepali students: Residence permit to look for work or start a business—up to 2 years. Can work during this period. Apply within 5 years of graduation. Fee €470 (online). Apply via Enter Finland. Must have completed degree in Finland.
        </p>
        <p className="text-gray-700 mb-4">
          Apply at enterfinland.fi. Once employed, apply for work-based residence permit. Source: migri.fi.
        </p>
      </section>

      {/* Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Autumn: September (main intake). Spring: January (fewer programmes). Joint application: 7–21 January 2026 for autumn 2026. Nearly 300 English-taught programmes. Results from early February; all by 27 May.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Autumn 2026:</strong> Joint application 7–21 January (studyinfo.fi)</li>
            <li>• <strong>Results:</strong> From early February; all by 27 May</li>
            <li>• <strong>University scholarships:</strong> Apply with admission; deadlines vary</li>
            <li>• <strong>Residence permit:</strong> Apply after admission; allow 1–2 months</li>
          </ul>
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Finland for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> IT & Computer Science, Engineering, Business & Management, Healthcare & Nursing, Design. Finland is home to Nokia and strong tech sector; high demand for IT, healthcare, and engineering professionals.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>IT & Computer Science:</strong> Aalto, University of Helsinki, Tampere—software, AI, data science</li>
          <li>• <strong>Engineering:</strong> Aalto, Tampere, University of Oulu—mechanical, electrical, civil</li>
          <li>• <strong>Business & Management:</strong> Aalto, University of Helsinki—MBA, finance, innovation</li>
          <li>• <strong>Healthcare & Nursing:</strong> University of Eastern Finland, Turku—growing demand</li>
          <li>• <strong>Design:</strong> Aalto—industrial design, architecture</li>
        </ul>
      </section>

      {/* Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Finland Without IELTS?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in finland without ielts: Some universities accept TOEFL, Cambridge, PTE, or proof of prior English-medium education. Check individual programme at studyinfo.fi. Many require B2/C1 equivalent.
        </p>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Finland</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Helsinki, Aalto University, Tampere University, University of Turku, University of Oulu, University of Eastern Finland. Cheapest universities in Finland for international students: UAS (XAMK, Centria, etc.), regional universities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Helsinki', city: 'Helsinki', programs: 'All disciplines' },
            { name: 'Aalto University', city: 'Helsinki/Espoo', programs: 'Tech, business, design' },
            { name: 'Tampere University', city: 'Tampere', programs: 'Multidisciplinary' },
            { name: 'University of Turku', city: 'Turku', programs: 'Research, all fields' },
            { name: 'University of Oulu', city: 'Oulu', programs: 'Tech, health' },
            { name: 'University of Eastern Finland', city: 'Kuopio, Joensuu', programs: 'Multidisciplinary' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 mb-6">
            Get expert guidance on study in Finland from Nepal. Our study in finland from nepal consultancy helps with university selection, scholarship applications, and residence permit via Enter Finland and VFS Kathmandu. 1,500+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Finland from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* Residence Permit Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Finland Student Visa Process for Nepali Students (Residence Permit)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Finland student visa process for nepali students: Apply online at enterfinland.fi. Prove identity at VFS Global Kathmandu. Required: admission letter, tuition payment proof, €800/month funds, passport, health insurance. Fee €600. Processing 1–2 months.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Finland visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>VFS Global in Kathmandu.</strong> Apply online via Enter Finland; prove identity and submit documents at VFS. Finland has no embassy in Nepal; Migri processes applications. Source: migri.fi, vfsglobal.com.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Residence Permit Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {finlandData.residenceStepsWithText.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <div><span className="font-medium text-gray-800">{step.name}</span><span className="text-gray-600 text-sm block mt-0.5">{step.text}</span></div>
            </li>
          ))}
        </ol>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-2">Common Finland Residence Permit Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Applying before tuition is paid (Migri requires proof of payment)</li>
            <li>Insufficient proof of funds (need €800/month for entire stay)</li>
            <li>Applying too late (processing 1–2 months; apply after admission)</li>
            <li>Missing identity verification at VFS Kathmandu</li>
            <li>Documents not in English, Finnish, or Swedish without certified translation</li>
            <li>Missing comprehensive health insurance</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {finlandData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Finland?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection via studyinfo.fi, university scholarship applications, and residence permit support via Enter Finland and VFS Kathmandu. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Finland from Nepal requirements—including proof of funds €800/month and tuition payment.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Lalitpur, Pokhara, and across Nepal rely on us for study in Finland from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and scholarship guidance</li>
          <li>• Residence permit and VFS Kathmandu support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* GAP & Dependents */}
      <section className="py-12 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Does Finland Accept Study Gap (GAP)? Can I Bring Dependents?</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP:</strong> Finnish universities generally accept study gaps when justified. Competitors cite gap of up to 5 years with valid reasons (work experience, further education, personal). Check individual programme at studyinfo.fi.
        </p>
        <p className="text-gray-700">
          <strong>Dependents:</strong> Family reunification possible for students with valid residence. Spouse and children can apply; proof of additional funds and accommodation required. Spouse may work. Verify at migri.fi for dependent permit requirements.
        </p>
      </section>

      {/* PR Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Finland</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> 2-year post-study permit (can work) → work-based residence permit → permanent residence after 4 years. Citizenship: 5 years residence + language. Verify at migri.fi.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Finland has high demand for IT, healthcare, and engineering professionals. Apply for post-study permit within 5 years of graduation.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Post-study (2 years)</td><td className="p-3">Job search or business; can work during</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Work residence</td><td className="p-3">Employment permit</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">4+ years for PR; 5 years for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Finland vs Sweden */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Finland vs Sweden – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both Nordic destinations for Nepali students. Finland: 2-year post-study (can work), VFS Kathmandu. Sweden: 12-month post-study, SISGP. Compare with <Link href="/study-abroad/eur/sweden/" className="text-blue-600 hover:underline">Sweden</Link>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Finland</th>
                  <th className="p-4 text-left">Sweden</th>
                </tr>
              </thead>
              <tbody>
                {finlandVsSweden.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.finland}</td>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Finland FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Finland from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={finlandData.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Finland Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Finland for Nepali students 2026, Finland student visa process, and university scholarships. Free consultation in Kathmandu—no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all cta-button">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button">
              Apply to Study in Finland from Nepal
            </Link>
            <Link href="/study-abroad/eur/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button-secondary">
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/sweden/" className="underline hover:text-white">Sweden</Link> · <Link href="/study-abroad/eur/denmark/" className="underline hover:text-white">Denmark</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/hungary/" className="underline hover:text-white">Hungary</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/belgium/" className="underline hover:text-white">Belgium</Link> · <Link href="/study-abroad/romania/" className="underline hover:text-white">Romania</Link> · <Link href="/study-abroad/ireland/" className="underline hover:text-white">Ireland</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/sweden/" className="text-blue-600 font-semibold hover:underline">Sweden</Link>
            {' · '}
            <Link href="/study-abroad/eur/denmark/" className="text-blue-600 font-semibold hover:underline">Denmark</Link>
            {' · '}
            <Link href="/study-abroad/eur/norway/" className="text-blue-600 font-semibold hover:underline">Norway</Link>
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
