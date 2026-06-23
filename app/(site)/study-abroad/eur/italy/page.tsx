import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  Phone,
  FileText,
  Plane,
  ChevronRight,
  Building2,
  Award,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Italy from Nepal 2026 | Scholarships, Cost & DSU Guide',
  description: 'Study in Italy from Nepal 2026: DSU €7,000+ cash, tuition €1,000–5,000, proof €6,100–7,000. DoV, CIMEA, Italian Embassy Kathmandu. 500+ English programmes. Free consultation Kathmandu.',
  keywords: 'study in italy, study in italy from nepal, study in italy requirements, study in italy scholarships, free study in italy for international students, study in italy for nepali students, study in italy without ielts, why study in italy, study culinary arts in italy, study in italy consultancy in nepal, DSU scholarship Italy, Declaration of Value Italy, Italy student visa Nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/italy/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/italy/',
    title: 'Study in Italy from Nepal 2026 | Scholarships, Cost & DSU Guide',
    description: 'Complete 2026 guide: study in Italy, DSU regional scholarships, tuition, living costs, study in Italy without IELTS. Compare with Germany and Spain.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Italy from Nepal 2026',
    description: 'Study in Italy from Nepal: DSU scholarships, cost, visa, English programs. Free consultation in Kathmandu.',
  },
};

// Data: Italian Ministry of University and Research, Study in Italy, DSU regional portals (ER.GO, EDISU, LazioDisco), Politecnico Milano, Sapienza, Bologna. 1 EUR ≈ 143 NPR (Feb 2026)
const italyData = {
  country: 'Italy',
  slug: 'italy',
  heroImage: '/assets/italy.webp',
  lastUpdated: 'February 2026',
  description: 'Italy hosts 268,000+ international students. Public tuition €1,000–€5,000/year; DSU scholarships up to €7,000+ cash + tuition exemption + free meals. 20 hrs/week work. Per MUR and regional DSU portals.',
  stats: {
    universities: '90+',
    internationalStudents: '268,000+',
    englishPrograms: '500+',
    workHours: '20 hrs/week',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuitionPublic: { min: 1000, max: 5000, nprMin: 143000, nprMax: 715000 },
  tuitionPrivate: { min: 8000, max: 25000 },
  proofOfFunds: { eur: 6079, monthly: 507, npr: 869297 },
  dsu: { cash: 7000, tuitionExempt: true, meals: true, totalValue: 9500 },
  livingCost: { milan: { min: 950, max: 1500 }, rome: { min: 900, max: 1350 }, bologna: { min: 800, max: 1200 } },
  visaFee: { eur: 50, npr: 7150 },
  workHours: '20 hrs/week (1,040 hrs/year)',
  requirements: [
    'Pre-enrollment / admission letter from Italian university',
    'Valid passport (3+ months beyond programme end)',
    'Proof of funds: ~€6,100–€7,000/year (€507–€534/month)',
    'Health insurance valid in Italy',
    'Proof of accommodation',
    'Declaration of Value (DoV) or CIMEA for qualifications',
    'Language: B2 Italian or IELTS/TOEFL for English programmes',
  ],
  visaSteps: [
    'Apply to Italian universities (December–March for non-EU)',
    'Obtain pre-enrollment / admission confirmation',
    'Gather proof of funds (6-month bank statements; no cash/guarantee policies)',
    'Obtain Declaration of Value (DoV) from Italian Embassy or CIMEA',
    'Complete Italy student visa (Type D) application',
    'Book appointment at Italian Embassy Kathmandu or VFS',
    'Submit documents and attend interview',
    'Processing up to 90 days; collect Permesso di Soggiorno within 8 days of arrival',
  ],
  faqs: [
    {
      question: 'What are the study in Italy requirements for Nepali students in 2026?',
      answer: 'Pre-enrollment letter, passport, proof of funds ~€6,100–€7,000/year, health insurance, accommodation proof, Declaration of Value (DoV) or CIMEA. 12 years schooling; B2 Italian or IELTS/TOEFL for English programmes. Apply December–March.',
    },
    {
      question: 'What are the study in Italy scholarships for international students?',
      answer: 'DSU regional scholarships: up to €7,000+ cash/year, 100% tuition exemption, free university meals. Combined value ~€9,500/year. Italian Government Scholarships and EDISU Piemonte also available. Merit + financial need. See scholarship options.',
    },
    {
      question: 'Is free study in Italy for international students possible?',
      answer: 'Yes. DSU scholarships cover tuition 100% and provide cash stipend + free canteen meals. Combined value ~€9,500/year. ISEE Parificato (income assessment) and merit (credits, grades) required. Region-specific; apply via ER.GO, EDISU, LazioDisco, etc.',
    },
    {
      question: 'Can I study in Italy without IELTS?',
      answer: 'Yes. Many universities accept TOEFL, Cambridge, or prior English-medium proof for English-taught programmes. Trento, Milan, Florence, Cattolica offer 500+ English degrees. Italian-taught programmes need B2 Italian. Check programme pages.',
    },
    {
      question: 'Why study in Italy? What are the advantages for Nepali students?',
      answer: 'Why study in Italy: affordable public tuition (€1,000–€5,000), DSU scholarships, 500+ English programmes, 20 hrs/week work, rich culture, strong engineering (Politecnico Milano) and design. Study culinary arts in Italy at ALMA, Congusto, Italian Chef Academy.',
    },
    {
      question: 'What academic percentage do I need to study in Italy?',
      answer: '12 years schooling; 10+2 equivalent. GPA minimums vary by university and country—check institution-specific requirements. Declaration of Value or CIMEA certifies your qualification. Master\'s: Level 7 EQF alignment, relevant bachelor subjects.',
    },
    {
      question: 'How much does it cost to study in Italy from Nepal?',
      answer: 'First year: €10,000–€18,000 (NPR 14–26L). Public tuition €1,000–€5,000; living €800–€1,500/month; proof €6,100–€7,000; visa ~€50; airfare ~€800. DSU recipients: tuition exempt + stipend. 1 EUR ≈ 143 NPR.',
    },
    {
      question: 'Can I study culinary arts in Italy?',
      answer: 'Yes. ALMA (Colorno), Congusto (Milan), Florence Culinary Arts School, Italian Chef Academy (Rome) welcome international students. Programmes from €2,000–€11,800. ALMA offers visa support, accommodation, career service. Some require B1 Italian.',
    },
    {
      question: 'What is the DSU scholarship in Italy?',
      answer: 'Diritto allo Studio Universitario: regional grant. Up to €7,000+ cash, 100% tuition waiver, free university meals. Merit (credits, grades) + ISEE Parificato (income). ER.GO (Emilia-Romagna), EDISU (Piedmont), LazioDisco, ESU (Veneto). Apply annually.',
    },
    {
      question: 'Is study in Italy consultancy in Nepal helpful?',
      answer: 'Yes. Consultancy assists with pre-enrollment, DoV/CIMEA, DSU application, visa proof, document prep. San Marina: free consultation in Kathmandu, Baneshwor, Ghorahi, Itahari. 15+ years guiding Nepali students to Europe.',
    },
    {
      question: 'How long does Italy student visa take from Nepal?',
      answer: 'Processing up to 90 days. Apply at Italian Embassy Kathmandu or via VFS. Apply 3–4 months before course start. Collect Permesso di Soggiorno within 8 days of arrival in Italy.',
    },
    {
      question: 'What is Declaration of Value (DoV) for Italy student visa?',
      answer: 'DoV certifies your qualification is equivalent to Italian standards. Obtain from Italian Embassy or CIMEA (CIMEA replaces DoV). Required for non-EU pre-enrollment and visa. Nepali students get it via Italian Embassy Kathmandu.',
    },
    {
      question: 'How do I apply for DSU scholarship in Italy?',
      answer: 'Apply via regional portals: ER.GO (Emilia-Romagna), EDISU (Piedmont), LazioDisco (Lazio), ESU (Veneto). Submit ISEE Parificato (income) and merit docs. Deadlines vary by region; typically July–September. Enrol first at university in that region.',
    },
    {
      question: 'Can I convert my Italy student visa to work permit after graduation?',
      answer: 'Yes. Convert Permesso di Soggiorno from study to work before it expires. No quota limits. Sign work contract, submit conversion request. Case law allows shortly after expiry if contract signed beforehand.',
    },
    {
      question: 'What are Italy visa rejection reasons for Nepali students?',
      answer: 'Insufficient proof of funds, missing DoV/CIMEA, no accommodation proof, weak pre-enrollment, bank guarantees (not accepted), unclear study plan. Ensure 6-month stamped bank statements and full document checklist.',
    },
    {
      question: 'When are Italy intakes and application deadlines?',
      answer: 'Main intake September: pre-enrollment December–March for non-EU. Apply 3–4 months before course start; visa up to 90 days. Spring (Feb) some programmes: deadlines Sep–Nov.',
    },
  ],
};

const tuitionTable = [
  { level: 'Bachelor (Public)', range: '€1,000–€5,000/year', notes: 'Regional tax €140 + stamp €16' },
  { level: 'Master (Public)', range: '€1,000–€5,000/year', notes: 'Up to €8,000 for some competitive programmes' },
  { level: 'Bachelor (Private)', range: '€8,000–€25,000+/year', notes: 'Bocconi, Cattolica, etc.' },
  { level: 'Master (Private)', range: '€8,000–€25,000+/year', notes: 'Merit scholarships may reduce fees' },
];

const comparisonData = [
  { country: 'Italy', countrySlug: null, tuition: '€1,000–€5,000', living: '€800–€1,500/mo', work: '20 hrs/week', visaTime: 'Up to 90 days' },
  { country: 'Germany', countrySlug: '/study-abroad/eur/germany/', tuition: '€0 (most)', living: '€11,904/year', work: '20 hrs/week', visaTime: '4–12 weeks' },
  { country: 'Spain', countrySlug: '/study-abroad/eur/spain/', tuition: '€2,700–€9,300', living: '€800–€1,200/mo', work: '30 hrs/week', visaTime: '4–8 weeks' },
];

export default function ItalyStudyPage() {
  const visaStepsWithText = [
    { name: 'Apply to Italian universities (December–March for non-EU)', text: 'Pre-enrollment via Study in Italy portal.' },
    { name: 'Obtain pre-enrollment / admission confirmation', text: 'Secure offer from university.' },
    { name: 'Gather proof of funds (6-month bank statements)', text: '€6,100–€7,000/year; no cash or guarantees.' },
    { name: 'Obtain Declaration of Value (DoV) from Italian Embassy or CIMEA', text: 'DoV or CIMEA certifies qualifications.' },
    { name: 'Complete Italy student visa (Type D) application', text: 'Apply at Italian Embassy Kathmandu or VFS.' },
    { name: 'Book appointment at Italian Embassy Kathmandu or VFS', text: 'Submit documents and attend interview.' },
    { name: 'Submit documents and attend interview', text: 'Processing up to 90 days.' },
    { name: 'Collect Permesso di Soggiorno within 8 days of arrival', text: 'Required residence permit in Italy.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Italy from Nepal 2026 – Complete Guide',
        description: italyData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: italyData.author.name, url: 'https://www.sanmarina.edu.np', description: italyData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Italy study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Italy from Nepal', 'DSU scholarship', 'Declaration of Value', 'CIMEA', 'Permesso di Soggiorno', 'Study in Italy without IELTS'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Italy Student Visa from Nepal',
        description: 'Step-by-step: pre-enrollment Dec–March, DoV/CIMEA, proof of funds €6,100–7,000, Italian Embassy Kathmandu. Permesso within 8 days. Per Study in Italy, MUR 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: italyData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Italy', item: 'https://www.sanmarina.edu.np/study-abroad/eur/italy/' },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero – CTA above the fold */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={italyData.heroImage} alt="Nepali students studying in Italy - universities, Rome Milan Bologna, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Italy</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {italyData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Italy from Nepal
            <br />
            <span className="text-blue-300">2026 – Scholarships & DSU Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            DSU scholarships up to €7,000+, affordable tuition, study in Italy without IELTS—Italy offers free study in italy for international students through regional grants.
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
          <p className="text-sm text-blue-100 mt-4">Get expert guidance on DSU scholarships and Italy visa. Free 15-minute consultation—no obligation.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: Italian MUR, Study in Italy, DSU portals.</strong> Tuition €1,000–€5,000; proof ~€6,100–€7,000. Verify at <a href="https://www.studyinitaly.esteri.it" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinitaly.esteri.it</a>, <a href="https://www.mur.gov.it" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mur.gov.it</a>, <a href="https://www.cimea.it" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">cimea.it</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {italyData.author.name} · {italyData.author.role} · {italyData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Italy from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition (public)</td><td className="p-3">€1,000–€5,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">DSU scholarship</td><td className="p-3">€7,000+ cash, tuition exempt, free meals</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">€6,100–€7,000/year (€507–534/mo)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">Bologna €800–1,200; Rome €900–1,350; Milan €950–1,500/mo</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">~€50; Type D; Italian Embassy Kathmandu; up to 90 days</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week (1,040 hrs/year)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">English programmes</td><td className="p-3">500+ (Trento, Milan, Florence)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: Italian MUR, Study in Italy. Verify at <a href="https://www.studyinitaly.esteri.it" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinitaly.esteri.it</a>, <a href="https://www.mur.gov.it" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mur.gov.it</a>, <a href="https://www.cimea.it" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">cimea.it</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: italyData.stats.universities, label: 'Universities' },
              { value: italyData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: italyData.stats.englishPrograms, label: 'English Programmes' },
              { value: italyData.stats.workHours, label: 'Work Allowed' },
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

      {/* 1. Why Study in Italy */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Italy in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Italy offers affordable public tuition (€1,000–€5,000/year), DSU scholarships for free study in italy for international students, 500+ English programmes, and 20 hrs/week work. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link> (free tuition) or <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link> (low fees).
        </p>
        <p className="text-gray-700 mb-4">
          Why study in Italy: Politecnico di Milano, Sapienza Rome, University of Bologna rank in global listings. Study culinary arts in Italy at ALMA and Congusto. Nepali students choose Italy for engineering, design, architecture, and cuisine. Explore <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships</Link> for funding options.
        </p>
      </section>

      {/* 2. Study in Italy for Nepali Students */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Italy for Nepali Students</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Affordable tuition, DSU study in Italy scholarships, study in Italy without IELTS options, 20 hrs work. Study in Italy consultancy in Nepal helps with pre-enrollment, DoV, DSU applications. Common rejection reasons: insufficient proof of funds, missing DoV—San Marina guides document structure.
          </p>
          <p className="text-gray-700">
            Study in Italy requirements: 12 years schooling, Declaration of Value or CIMEA, proof of funds ~€6,100–€7,000/year. Apply December–March for non-EU residing abroad.
          </p>
        </div>
      </section>

      {/* 3. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Italy (2026)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Politecnico di Milano (engineering), Sapienza Rome, University of Bologna, University of Milan, University of Trento (English programmes), Bocconi (business), Università Cattolica.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Politecnico di Milano', city: 'Milan', programs: 'Engineering, Design, Architecture' },
            { name: 'Sapienza University of Rome', city: 'Rome', programs: 'All disciplines' },
            { name: 'University of Bologna', city: 'Bologna', programs: 'Oldest university in Europe' },
            { name: 'University of Milan', city: 'Milan', programs: 'AI, Sciences, Humanities' },
            { name: 'University of Trento', city: 'Trento', programs: 'English Master\'s' },
            { name: 'Bocconi University', city: 'Milan', programs: 'Business, Economics' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DSU Scholarships – Scholarship-focused */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Study in Italy Scholarships: DSU Explained
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> DSU (Diritto allo Studio Universitario) regional scholarships provide up to €7,000+ cash/year, 100% tuition exemption, and free university canteen meals. Combined value ~€9,500/year. Merit + ISEE Parificato (income). Apply via regional portals: ER.GO, EDISU Piemonte, LazioDisco, ESU.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Definition:</strong> DSU (Diritto allo Studio Universitario) is Italy&apos;s regional right-to-study grant. Each region manages its own programme—Emilia-Romagna (ER.GO), Piedmont (EDISU), Lazio (LazioDisco), Sicily (ERSU), Veneto (ESU). <strong>ISEE Parificato</strong> certifies foreign income for eligibility. Merit = credit minimums and GPA. See our <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships page</Link> for Italy options.
          </p>
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-[#001F3F] mb-3">DSU Benefits at a Glance</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Cash stipend: up to €7,000+/year</li>
              <li>• 100% tuition fee exemption</li>
              <li>• Free meals at university canteens</li>
              <li>• Total value ~€9,500/year (varies by region)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Study in Italy Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Italy Without IELTS</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Many universities accept TOEFL, Cambridge, or prior English-medium proof for English-taught programmes. University of Trento, Milan, Florence, Cattolica offer 500+ English degrees. IELTS not always mandatory—check programme pages. Italian-taught programmes need B2 Italian.
        </p>
          <p className="text-gray-700 mb-4">
            Study in Italy without IELTS is common for STEM, business, and design. IULM and others may require B2 English (IELTS, TOEFL, or equivalent). For <Link href="/services/" className="text-blue-600 hover:underline">IELTS and test preparation</Link> support in Kathmandu, San Marina offers coaching.
          </p>
      </section>

      {/* 6. Study Culinary Arts in Italy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study Culinary Arts in Italy</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> ALMA (Colorno), Congusto (Milan), Florence Culinary Arts School, Italian Chef Academy (Rome) welcome international students. Programmes €2,000–€11,800. ALMA offers visa support, accommodation, career service. Study culinary arts in Italy combines training with internships.
          </p>
          <p className="text-gray-700">
            Congusto has English International Programmes; some schools require B1 Italian. Italian Chef Academy ranks #1 in Italian WACS. ALMA collaborates with schools in 20 countries.
          </p>
        </div>
      </section>

      {/* 7. Study in Italy Requirements + Academic Percentage */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Italy Requirements & Academic Percentage</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> 12 years schooling (10+2 equivalent); Declaration of Value (DoV) or CIMEA certifies your qualification. GPA minimums vary by university and country—check institution-specific requirements. Master&apos;s: Level 7 EQF alignment, relevant bachelor subjects.
          </p>
        <p className="text-gray-700 mb-4">
          <strong>Pre-enrollment calendar:</strong> Non-EU students residing abroad apply December–March. <strong>Declaration of Value (DoV)</strong> or CIMEA from Italian Embassy Kathmandu certifies your 10+2. Universities set GPA cut-offs; 60%+ typical. Book appointments early at Italian Embassy or VFS for visa.
        </p>
      </section>

      {/* 8. Total Cost + Proof of Funds */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Cost to Study in Italy from Nepal</h2>
          <p className="text-gray-700 mb-6 font-medium">
            <strong>Quick answer:</strong> First year €10,000–€18,000 (NPR 14–26L). Public tuition €1,000–€5,000; living €800–€1,500/month; proof €6,100–€7,000; visa ~€50; airfare ~€800. DSU recipients: tuition exempt + stipend. Private adds €8,000–€25,000/year. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, or <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition: Public vs Private</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Accommodation for Nepali Students</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City / Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">Bologna (shared)</td><td className="p-3">€350–550</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Rome (shared)</td><td className="p-3">€400–650</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Milan (shared)</td><td className="p-3">€450–750</td></tr>
                <tr><td className="p-3">Student residence</td><td className="p-3">€300–500</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Proof of Funds (Italy Student Visa 2026)</h3>
          <p className="text-gray-700 mb-4">
            <strong>Italy requires approximately €6,100–€7,000 per year</strong> (€507–€534/month) for subsistence. Accept: 6-month bank statements stamped by bank, sponsorship, scholarship. Cash and guarantee policies are not accepted. NPR equivalent ~8.7–10 lakhs (1 EUR ≈ 143 NPR).
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <DollarSign className="text-[#0056b3] mb-2" size={24} />
              <p className="font-bold">Proof of Funds</p>
              <p className="text-lg font-bold">~€6,100–€7,000</p>
              <p className="text-sm text-gray-600">NPR 8.7–10L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <GraduationCap className="text-green-600 mb-2" size={24} />
              <p className="font-bold">Tuition (Public)</p>
              <p className="text-lg font-bold">€1,000–€5,000</p>
              <p className="text-sm text-gray-600">NPR 1.4–7.2L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <FileText className="text-orange-600 mb-2" size={24} />
              <p className="font-bold">Visa</p>
              <p className="text-lg font-bold">~€50</p>
              <p className="text-sm text-gray-600">NPR 7,150</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Plane className="text-cyan-600 mb-2" size={24} />
              <p className="font-bold">Airfare</p>
              <p className="text-lg font-bold">~€800</p>
              <p className="text-sm text-gray-600">NPR 1.1L</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mt-8 mb-4">Living Cost by City</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Bologna (Most affordable)</p>
              <p className="text-lg font-bold">€800–€1,200/mo</p>
              <p className="text-sm text-gray-600">NPR 1.1–1.7L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Rome</p>
              <p className="text-lg font-bold">€900–€1,350/mo</p>
              <p className="text-sm text-gray-600">NPR 1.3–1.9L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Milan (Highest)</p>
              <p className="text-lg font-bold">€950–€1,500/mo</p>
              <p className="text-sm text-gray-600">NPR 1.4–2.1L</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intakes & Application Deadlines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Italy Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Main intake: September. Non-EU pre-enrollment December–March (Study in Italy portal). Apply 3–4 months before course start; visa processing up to 90 days. Some programmes have February intake—deadlines Sep–Nov.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">Intake</th><th className="p-4 text-left">Classes Begin</th><th className="p-4 text-left">Pre-enrollment (Non-EU)</th><th className="p-4 text-left">Visa Window</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Autumn (main)</td><td className="p-4">Sept</td><td className="p-4">Dec–March</td><td className="p-4">May–Aug</td></tr>
                <tr><td className="p-4 font-semibold">Spring</td><td className="p-4">Feb</td><td className="p-4">Sep–Nov (some)</td><td className="p-4">Nov–Jan</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9 & 10. Visa Process + Documents */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Italy Student Visa Process (Step-by-Step)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Pre-enrollment → proof of funds → Declaration of Value (DoV) or CIMEA → Type D application. Apply at Italian Embassy Kathmandu or VFS. Processing up to 90 days. Collect Permesso di Soggiorno within 8 days of arrival. Apply 3–4 months before course start.
        </p>
        <ol className="space-y-3 max-w-2xl mb-8">
          {italyData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Italy Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Insufficient proof of funds (must meet €6,100–€7,000; 6-month stamped statements)</li>
          <li>Using cash or bank guarantee policies (not accepted)</li>
          <li>Missing Declaration of Value (DoV) or CIMEA</li>
          <li>No accommodation proof</li>
          <li>Applying too late—allow up to 90 days for visa</li>
          <li>Weak pre-enrollment or unclear study plan</li>
        </ul>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {italyData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* 11. Work While Studying + Post-Study */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work While Studying in Italy</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Non-EU students with Permesso di Soggiorno per Studio can work 20 hrs/week (1,040 hrs/year). Formal contratto di lavoro required. Hospitality, retail, tutoring common.
          </p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>• 20 hrs/week max; 1,040 hrs/year total</li>
            <li>• Formal contratto di lavoro required</li>
            <li>• Collect Permesso di Soggiorno within 8 days of arrival</li>
          </ul>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Post-Study: Convert to Work Permit</h3>
          <p className="text-gray-700 mb-4">
            After graduation, convert your Permesso di Soggiorno from study to work—no quota limits. Submit before permit expires; secure work contract first. Conversion allows full-time employment in Italy.
          </p>
        </div>
      </section>

      {/* 12. Advantages & Disadvantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages of Studying in Italy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Affordable public tuition (€1,000–€5,000)</li>
                <li>• DSU scholarships for free study</li>
                <li>• 500+ English-taught programmes</li>
                <li>• 20 hrs/week work rights</li>
                <li>• Strong engineering, design, culinary</li>
                <li>• Schengen access, rich culture</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Disadvantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Visa processing up to 90 days</li>
                <li>• DoV/CIMEA process can be lengthy</li>
                <li>• Milan/Rome housing costly</li>
                <li>• Italian helpful for jobs and daily life</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Italy vs Germany vs Spain */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Italy vs Germany vs Spain – 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-4 text-left">Country</th>
                <th className="p-4 text-left">Tuition</th>
                <th className="p-4 text-left">Living</th>
                <th className="p-4 text-left">Work</th>
                <th className="p-4 text-left">Visa Time</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-4 font-semibold text-[#001F3F]">
                    {row.countrySlug ? <Link href={row.countrySlug} className="text-blue-600 hover:underline">{row.country}</Link> : row.country}
                  </td>
                  <td className="p-4">{row.tuition}</td>
                  <td className="p-4">{row.living}</td>
                  <td className="p-4">{row.work}</td>
                  <td className="p-4">{row.visaTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 13. Why Choose Our Consultancy */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Italy?</h2>
        <p className="text-gray-700 mb-4">
          A study in Italy consultancy in Nepal removes guesswork. San Marina guides pre-enrollment, Declaration of Value (DoV), DSU scholarship applications, proof of funds structure, and visa document prep. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          We address common rejection reasons: insufficient funds, missing DoV, unclear study plans. Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Italy from Nepal guidance.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• DSU and scholarship guidance</li>
          <li>• Pre-enrollment and DoV support</li>
          <li>• Italian Embassy / VFS preparation</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Italy FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Italy from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={italyData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Book Free first, internal links */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Italy Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            You&apos;re viewing the full study in Italy from Nepal 2026 guide. Get expert guidance on DSU scholarships, tuition, and visa. Free consultation in Kathmandu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply Now
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/fr/" className="underline hover:text-white">France</Link> · <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/fr/" className="text-blue-600 font-semibold hover:underline">France</Link>
            {' · '}
            <Link href="/study-abroad/eur/spain/" className="text-blue-600 font-semibold hover:underline">Spain</Link>
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
