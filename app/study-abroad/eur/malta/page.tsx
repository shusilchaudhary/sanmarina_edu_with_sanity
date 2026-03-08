import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ChevronRight,
  Building2,
  Briefcase,
  GraduationCap,
  MapPin,
  Award,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Malta from Nepal 2026 | Cost, Visa & Work Guide',
  description: 'Study in Malta from Nepal 2026: tuition €4k–13k/year, living €630–1,200/mo. Valletta, Msida. Work 20 hrs/week. 12-mo post-study. Free consultation.',
  keywords: 'study in malta, study in malta from nepal, study in malta for nepali students, study in malta for international students, benefits of studying in malta, why study in malta, study and work in malta, how much gap acceptable for study in malta, study in malta scholarship, malta student visa process for nepali students, total cost to study in malta from nepal 2026, living cost in malta for students from nepal, post study work visa in malta for nepali students, cheapest colleges in malta for international students, malta study visa success rate from nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/malta/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/malta/',
    title: 'Study in Malta from Nepal 2026 | Cost, Visa & Work Guide',
    description: 'Complete 2026 guide: study in Malta, tuition, living costs, visa, post-study work. Valletta, Msida. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Malta from Nepal 2026',
    description: 'Study in Malta: cost, visa, 12-month post-study, work 20 hrs/week. Free consultation in Kathmandu.',
  },
};

// Data from Malta Ministry for Education, Identità (Malta Residency & Visa Authority), University of Malta, MCAST, ITS, MFHEA. 1 EUR ≈ 143 NPR (Feb 2026)
const maltaData = {
  country: 'Malta',
  slug: 'malta',
  heroImage: '/assets/malta.jpg',
  lastUpdated: 'February 2026',
  description: 'Malta hosts 12,500+ international students. University of Malta (Valletta area), MCAST, ITS, and private colleges. Tuition €4,000–€13,400/year; living €630–€1,200/month in Valletta and Msida. Work 20 hrs/week during term; full-time during holidays. 12-month post-study job-search permit for MQF 7/8 graduates. EU member; English as official language.',
  stats: {
    universities: '6+',
    internationalStudents: '12,500+',
    englishPrograms: '200+',
    postStudy: '12 months',
    studentsPlaced: '500+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    min: 4000,
    max: 13400,
    umMin: 8500,
    umMax: 13400,
    mcast: 8500,
    visaFee: 100,
    visaFeeExtended: 150,
  },
  livingCost: {
    valletta: { min: 696, max: 1380 },
    msida: { min: 631, max: 1200 },
    gozo: { min: 471, max: 880 },
  },
  workRules: 'Up to 20 hours per week during term; full-time during semester breaks and holidays. Employment is secondary to study. Work permit required from Identità. Source: ELT Council, identita.gov.mt.',
  postStudy: {
    duration: 12,
    note: 'Non-EU graduates with MQF level 7/8 degree from Malta can apply for 12-month post-study residence permit to seek employment. No labour-market test during this period. Then Single Permit (employment residence) if hired. €7,000 bank balance or job offer required. Student time does not count toward 5-year long-term residency. Source: identita.gov.mt.',
  },
  visaLocation: 'Nepali students apply via Identità Central Visa Unit. Malta has a Visa Application Centre in Kathmandu and Honorary Consulate of Malta in Nepal. Applications submitted at least 9 weeks before course start. Check identita.gov.mt for current procedures.',
  visaProcessing: 'Standard €100; extended €150 (12+ years). Processing typically 6–8 weeks. Apply 9+ weeks before commencement.',
  intakeMonths: 'October (main intake); February (smaller intake)',
  deadlines: 'University of Malta: Non-EU visa applicants—1 July 2026 for October 2026; 22 July general deadline. February 2027: 30 January 2027. Each institution sets own deadlines. Check um.edu.mt, mcast.edu.mt.',
  gapPolicy:
    'Malta has no official national gap-year policy. Universities and colleges decide individually. University of Malta and MCAST typically accept gaps of 2–5 years if you provide a clear explanation (work, family, health) and supporting documents. Gaps beyond 5 years may require stronger justification. Contact the International Office of your chosen institution for their specific policy. Source: um.edu.mt, mcast.edu.mt.',
  requirements: [
    'Letter of acceptance from MFHEA-registered institution (full course name, MQF level, ECTS, duration, proof of payment)',
    'Valid passport (at least 10 months validity)',
    'Bank statements (3 months) + certificate showing adequate funds (min. 75% of national minimum wage per month)',
    'Medical and travel insurance (min. €30,000, Schengen valid)',
    'Flight tickets (full itinerary; entry within 2 weeks before course start)',
    'Accommodation proof for first 14 nights',
    'International bank card copy (front and back)',
  ],
  residenceSteps: [
    'Apply to Malta institution (University of Malta, MCAST, ITS, or private college) and receive admission',
    'Pay tuition and obtain enrolment letter with proof of payment',
    'Prepare documents: passport, bank statements, insurance, flight, accommodation',
    'Submit student visa application via Identità (or Malta Visa Application Centre in Kathmandu) at least 9 weeks before course start',
    'Pay visa fee: €100 standard or €150 extended',
    'Await processing (typically 6–8 weeks)',
    'Travel to Malta; register with institution and obtain residence permit',
    'Renew residence permit annually for duration of studies',
  ],
  residenceStepsWithText: [
    { name: 'Apply to Malta institution (University of Malta, MCAST, ITS, or private college)', text: 'University of Malta deadline: Non-EU visa applicants 1 July for October; general 22 July. February intake: 30 January. All MFHEA-registered.' },
    { name: 'Pay tuition and obtain enrolment letter with proof of payment', text: 'Tuition €4,000–€13,400/year. Enrolment letter must show full course name, MQF level, ECTS, duration, proof of payment.' },
    { name: 'Submit student visa via Identità or Malta Visa Application Centre Kathmandu', text: 'Apply at least 9 weeks before course start. Fee €100–€150. Honorary Consulate of Malta in Nepal also handles. Applications forwarded to Identità.' },
    { name: 'Prepare documents: passport, bank statements, insurance, flight, accommodation', text: 'Passport 10+ months validity. Bank statements 3 months; min 75% of minimum wage/month. Insurance €30k Schengen. Accommodation first 14 nights.' },
    { name: 'Await processing (typically 6–8 weeks); travel to Malta', text: 'Register with institution. Obtain residence permit; renew annually. Work 20 hrs/week during term; full-time holidays.' },
    { name: 'Renew residence permit annually for duration of studies', text: 'MQF 7/8 graduates: 12-month post-study permit to seek employment. €7,000 bank balance or job offer required.' },
  ],
  faqs: [
    {
      question: 'What is study in Malta for international students?',
      answer: 'Study in Malta for international students: 6+ institutions, 200+ English programmes. Tuition €4,000–€13,400/year; living €630–€1,200/month in Valletta and Msida. Work 20 hrs/week during term. 12-month post-study job-search for MQF 7/8 graduates. EU member; English official. Source: MFHEA, um.edu.mt, identita.gov.mt.',
    },
    {
      question: 'What is the Malta student visa process for Nepali students?',
      answer: 'Malta student visa process for Nepali students: Apply via Identità Central Visa Unit or Malta Visa Application Centre in Kathmandu. Submit at least 9 weeks before course start. Required: admission letter, proof of payment, bank statements, passport (10+ months validity), insurance (€30k), flight, accommodation. Fee €100–€150. Processing 6–8 weeks. Source: identita.gov.mt.',
    },
    {
      question: 'What are tuition fees in Malta for Nepali students 2026?',
      answer: 'Tuition fees in Malta for Nepali students 2026: University of Malta €8,500–€13,400/year; MCAST from €8,500; private colleges €4,000–€12,000. Cheapest colleges in Malta for international students: some private institutions, MCAST diplomas. 1 EUR ≈ 143 NPR (Feb 2026). Source: um.edu.mt, mcast.edu.mt.',
    },
    {
      question: 'What is the living cost in Malta for students from Nepal?',
      answer: 'Living cost in Malta for students from Nepal: Msida (university area) €631–€1,200/month; Valletta €696–€1,380; Gozo €471–€880. NPR: €900/mo ≈ 1.29 lakhs. Shared rooms €300–€550; university dorm €350–€600. Food €150–€250. Source: um.edu.mt, educations.com.',
    },
    {
      question: 'What is the total cost to study in Malta from Nepal 2026?',
      answer: 'Total cost to study in Malta from Nepal 2026: First year €14,000–€30,000 (NPR 20–43 lakhs). Tuition €4,000–€13,400; living €7,500–€14,400/year; visa €100–€150; airfare ~€800. Varies by city (Valletta, Msida) and programme. Source: um.edu.mt, identita.gov.mt.',
    },
    {
      question: 'How much gap is acceptable for study in Malta?',
      answer: 'How much gap acceptable for study in Malta: No official national policy. Universities decide. University of Malta and MCAST typically accept 2–5 years with clear explanation (work, family, health) and documents. Gaps beyond 5 years may need stronger justification. Contact institution International Office. Source: um.edu.mt, mcast.edu.mt.',
    },
    {
      question: 'Can I study and work in Malta?',
      answer: 'Yes. Study and work in Malta: Up to 20 hours per week during term; full-time during semester breaks and holidays. Employment secondary to study. Work permit from Identità. Source: ELT Council, identita.gov.mt.',
    },
    {
      question: 'What is the post study work visa in Malta for Nepali students?',
      answer: 'Post study work visa in Malta for Nepali students: MQF 7/8 graduates get 12-month residence permit to seek employment. No labour-market test. Need €7,000 bank balance or job offer. Then Single Permit if employed (€21k+ salary). Student time does not count toward 5-year residency. Source: identita.gov.mt.',
    },
    {
      question: 'Are there study in Malta scholarships?',
      answer: 'Study in Malta scholarship: University of Malta offers 40–100% tuition waivers for Master by Research and PhD (non-EU). Merit-based. Apply to scholarships@um.edu.mt within one month of acceptance. ENDEAVOUR Scheme for postgraduate (check myscholarship.gov.mt). Source: um.edu.mt, myscholarship.gov.mt.',
    },
    {
      question: 'What are the cheapest colleges in Malta for international students?',
      answer: 'Cheapest colleges in Malta for international students: Private colleges €4,000–€8,000/year; MCAST diplomas from €8,500; University of Malta €8,500+. Compare at mfhea.gov.mt. Source: um.edu.mt, mcast.edu.mt.',
    },
    {
      question: 'What is the Malta study visa success rate from Nepal?',
      answer: 'Malta study visa success rate from Nepal: No official published rate. Success depends on complete documentation, genuine admission, proof of funds (75%+ of minimum wage per month), and clean record. Apply 9+ weeks before; use certified consultancy. Source: identita.gov.mt.',
    },
    {
      question: 'Where do Nepali students submit Malta visa from Kathmandu?',
      answer: 'Nepali students submit Malta visa from Kathmandu via Malta Visa Application Centre or Honorary Consulate of Malta. Applications forwarded to Identità Central Visa Unit. Apply at least 9 weeks before course start. Source: identita.gov.mt, embassynvisa.com.',
    },
    {
      question: 'Why study in Malta? What are the benefits of studying in Malta?',
      answer: 'Why study in Malta / benefits of studying in Malta: EU member, English official language, safe, Mediterranean climate. Valletta, Msida. Work 20 hrs/week. 12-month post-study. University of Malta, MCAST, ITS. Affordable vs UK/Ireland. Source: um.edu.mt, mfhea.gov.mt.',
    },
    {
      question: 'Can Nepali students bring dependents to Malta while studying?',
      answer: 'Malta dependents: Family reunification possible for students with valid residence. Spouse and children can apply; proof of additional funds and accommodation required. Verify current rules at identita.gov.mt. Processing times vary. Source: identita.gov.mt.',
    },
    {
      question: 'What is the PR pathway for Nepali students after studying in Malta?',
      answer: 'PR pathway Malta: 12-month post-study to seek employment (MQF 7/8). If employed, apply for Single Permit. Student time does not count toward 5-year long-term residency. PR and citizenship have specific residence and language requirements. Verify at identita.gov.mt. Source: identita.gov.mt.',
    },
  ],
};

const tuitionTable = [
  { level: 'University of Malta (UG)', range: '€8,500–€10,800/year', notes: 'Non-EU; varies by programme' },
  { level: 'University of Malta (PG)', range: '€10,800–€13,400/year', notes: 'Masters, PhD' },
  { level: 'MCAST', range: 'From €8,500/year', notes: 'Diplomas, applied programmes' },
  { level: 'Private colleges', range: '€4,000–€12,000/year', notes: 'MFHEA-registered' },
  { level: 'Student visa fee', range: '€100–€150', notes: 'Identità Central Visa Unit' },
];

const maltaVsCyprus = [
  { aspect: 'Tuition', malta: '€4,000–€13,400/year', cyprus: '€3,000–€15,000/year' },
  { aspect: 'Living (min)', malta: '€630–€1,200/mo (Msida, Valletta)', cyprus: '€700–€1,100/mo' },
  { aspect: 'Work (term)', malta: '20 hrs/week', cyprus: '20 hrs/week (after 6 mo)' },
  { aspect: 'Post-study', malta: '12-month job search (MQF 7/8)', cyprus: '12-month job search (master\'s+)' },
  { aspect: 'Visa from Nepal', malta: 'Kathmandu VAC / Identità', cyprus: 'Embassy / Civil Registry' },
  { aspect: 'Language', malta: 'English official', cyprus: 'Greek, English widely used' },
];

export default function MaltaStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Malta from Nepal 2026 – Complete Guide',
        description: maltaData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: maltaData.author.name, url: 'https://www.sanmarina.edu.np', description: maltaData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: maltaData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Malta Student Visa from Nepal',
        description: 'Step-by-step: apply to Malta institution, pay tuition, submit via Identità or Malta VAC Kathmandu. Fee €100–€150. Processing 6–8 weeks. Per identita.gov.mt, um.edu.mt 2026.',
        step: maltaData.residenceStepsWithText.map((s, i) => ({
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
        description: 'Best education consultancy in Nepal for Malta study abroad',
        knowsAbout: ['Study in Malta from Nepal', 'Malta student visa', 'Identità Central Visa Unit', 'University of Malta MCAST', 'identita.gov.mt'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Malta', item: 'https://www.sanmarina.edu.np/study-abroad/eur/malta/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC & PIER certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Malta from Nepal.',
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
          <Image src={maltaData.heroImage} alt="Study in Malta from Nepal – Valletta Msida, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Malta</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {maltaData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Malta from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Post-Study Work Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Malta: tuition €4k–13k/year, living €630–1,200/mo in Valletta and Msida. Work 20 hrs/week. 12-month post-study. Study in Malta for Nepali students—complete guide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg">
              Apply Now
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /><span>WhatsApp Us</span>
            </a>
          </div>
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Malta study experts. Study in Malta from Nepal consultancy—no obligation for 2026 intake.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://identita.gov.mt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">identita.gov.mt</a>, <a href="https://www.um.edu.mt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">um.edu.mt</a>, <a href="https://mfhea.gov.mt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mfhea.gov.mt</a>, MCAST.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {maltaData.author.name} · {maltaData.author.role} · {maltaData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Malta from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition €4,000–€13,400/year; living €630–€1,200/month in Valletta, Msida. Work 20 hrs/week during term; full-time holidays. 12-month post-study for MQF 7/8 graduates. Visa €100–€150 via Identità; Malta VAC Kathmandu. <a href="https://identita.gov.mt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">identita.gov.mt</a>, <a href="https://www.um.edu.mt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">um.edu.mt</a>, <a href="https://mfhea.gov.mt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mfhea.gov.mt</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€4,000–€13,400/year; University of Malta €8,500+</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">Identità; €100–€150; Malta VAC Kathmandu</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">Msida €630–1,200; Valletta €696–1,380; Gozo €471–880/mo</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week during term; full-time holidays</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">12 months to seek employment (MQF 7/8)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">6–8 weeks; apply 9+ weeks before start</td></tr>
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
              { value: maltaData.stats.universities, label: 'Institutions' },
              { value: maltaData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: maltaData.stats.englishPrograms, label: 'English Programmes' },
              { value: maltaData.stats.postStudy, label: 'Post-Study Permit' },
              { value: maltaData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Requirements */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Malta from Nepal Requirements: GPA, IELTS & Documents</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Bachelor's: high school diploma (10+2) or equivalent; Master's: recognised bachelor's degree; PhD: master's + research proposal. English: many programmes taught in English; some require IELTS/TOEFL (B2 equivalent). Gap 2–5 years typically accepted with explanation. Check um.edu.mt, mcast.edu.mt.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Bachelor:</strong> High school diploma; English proficiency per programme</li>
          <li>• <strong>Master's:</strong> Recognised bachelor's; transcripts; some require LORs</li>
          <li>• <strong>PhD:</strong> Master's in relevant field; research proposal; academic references</li>
          <li>• <strong>GAP years:</strong> University of Malta and MCAST accept 2–5 years with clear explanation</li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">Source: um.edu.mt, mcast.edu.mt. Requirements vary by programme.</p>
      </section>

      {/* Why Study in Malta */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Malta? Benefits of Studying in Malta for Nepali Students</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Malta offers English as official language, EU-recognized degrees, safe environment, Mediterranean climate, and work rights. Valletta, Msida. Compare with <Link href="/study-abroad/eur/cyprus/" className="text-blue-600 hover:underline">Cyprus</Link>, <Link href="/study-abroad/eur/denmark/" className="text-blue-600 hover:underline">Denmark</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Malta for international students attracts those seeking EU degrees in English at moderate cost. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Malta for business, IT, tourism, and healthcare. Benefits of studying in Malta include no language barrier, year-round sunshine, and 12-month post-study pathway.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">What is the Total Cost to Study in Malta from Nepal 2026?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Total cost to study in Malta from Nepal 2026—first year €14,000–€30,000 (NPR 20–43 lakhs). Tuition €4,000–€13,400; living €630–€1,200/month. Cheapest colleges in Malta for international students: some private institutions. 1 EUR ≈ 143 NPR (Feb 2026).
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
                <tr className="border-b"><td className="p-3">Tuition</td><td className="p-3">4,000–13,400</td><td className="p-3">5.7–19.2L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">7,500–14,400</td><td className="p-3">10.7–20.6L</td></tr>
                <tr className="border-b"><td className="p-3">Visa</td><td className="p-3">100–150</td><td className="p-3">14–21k</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~800</td><td className="p-3">1.1L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">14,000–30,000</td><td className="p-3 font-medium">20–43L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Malta for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Malta for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Msida near University of Malta; Valletta capital. Gozo more budget-friendly. Shared rooms €300–€550; university dorm €350–€600.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Msida</p>
              <p className="text-lg font-bold">€631–€1,200/mo</p>
              <p className="text-sm text-gray-600">NPR 90k–1.7L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Valletta</p>
              <p className="text-lg font-bold">€696–€1,380/mo</p>
              <p className="text-sm text-gray-600">NPR 1.0–2.0L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Gozo</p>
              <p className="text-lg font-bold">€471–€880/mo</p>
              <p className="text-sm text-gray-600">NPR 67k–1.26L</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Malta for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Business & Management, IT & Computer Science, Hospitality & Tourism, Healthcare, Engineering, Law. Malta excels in tourism, hospitality (ITS), and EU-recognized business programmes. University of Malta offers broad disciplines.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Business & Management:</strong> University of Malta, Global College—MBA, finance</li>
          <li>• <strong>IT & Computer Science:</strong> University of Malta, American University of Malta—software, data</li>
          <li>• <strong>Hospitality & Tourism:</strong> ITS—tourism management, events</li>
          <li>• <strong>Healthcare:</strong> University of Malta—nursing, public health</li>
          <li>• <strong>Engineering:</strong> MCAST, University of Malta—applied, vocational</li>
          <li>• <strong>Law:</strong> University of Malta—EU law, international</li>
        </ul>
      </section>

      {/* Gap Acceptance & Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-amber-50 border border-amber-100">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">GAP Years & Dependents for Nepal Students in Malta</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Malta has no official national gap-year policy. Universities and colleges decide individually. University of Malta and MCAST typically accept gaps of 2–5 years with a clear explanation (work, family, health) and supporting documents. Gaps beyond 5 years may require stronger justification.
        </p>
        <p className="text-gray-700 mb-4">
          How much gap acceptable for study in Malta: Unlike some countries with strict limits, Malta leaves this to institutions. If you have a gap, prepare a written explanation and evidence (employment letter, medical certificate, etc.).           Contact the International Office of your chosen university or college for their specific policy. Source: um.edu.mt, mcast.edu.mt.
        </p>
        <p className="text-gray-700 mb-4 mt-6">
          <strong>Dependents:</strong> Family reunification possible for students with valid residence. Spouse and children can apply; proof of additional funds and accommodation required. Verify current rules at <a href="https://identita.gov.mt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">identita.gov.mt</a>. Processing times vary. Source: identita.gov.mt.
        </p>
      </section>

      {/* Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Study and Work in Malta?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Study and work in Malta: Up to 20 hours per week during term; full-time during semester breaks and holidays. Employment is secondary to study. Work permit from Identità.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 20 hrs/week during term</li>
            <li>• Full-time during holidays and semester breaks</li>
            <li>• Work permit required from Identità</li>
            <li>• Primary purpose remains education</li>
          </ul>
        </div>
      </section>

      {/* Post-Study Work */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post Study Work Visa in Malta for Nepali Students</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Non-EU MQF 7/8 graduates from Malta get 12-month residence permit to seek employment. No labour-market test. Need €7,000 bank balance or job offer. Then Single Permit if employed (€21k+ gross/year). Student time does not count toward 5-year long-term residency.
        </p>
        <p className="text-gray-700 mb-4">
          Post study work visa in Malta for Nepali students: Be realistic. The 12-month permit lets you look for work; success depends on job market and qualifications. Apply within 6 months of graduation. Government fee ~€280 + €27.50 card. Source: identita.gov.mt.
        </p>
        <ul className="space-y-2 text-gray-700 mb-4">
          <li>• <strong>Post-study:</strong> 12 months to seek employment (MQF 7/8 only)</li>
          <li>• <strong>Single Permit:</strong> Employment contract → combined residence and work permit</li>
          <li>• <strong>Salary:</strong> €21,000+ standard; €30,000+ specialist roles</li>
        </ul>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Post-study (12 months)</td><td className="p-3">Job search; MQF 7/8; €7,000 bank or job offer</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Single Permit</td><td className="p-3">Employment; €21k+ salary</td></tr>
              <tr><td className="p-3 font-semibold">Long-term residence</td><td className="p-3">5 years residence (student time does not count)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Study in Malta Scholarship Options
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study in Malta scholarship: University of Malta offers 40–100% tuition waivers for Master by Research and PhD (non-EU). Merit-based. Apply to scholarships@um.edu.mt within one month of acceptance. ENDEAVOUR Scheme for postgraduate (myscholarship.gov.mt).
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>UM Research:</strong> 100% (80–100% score), 60–80% (60–79%), 40% (50–59%)</li>
            <li>• <strong>Deadline:</strong> Varies by intake; check um.edu.mt</li>
            <li>• <strong>ENDEAVOUR:</strong> Postgraduate; priority sectors</li>
          </ul>
        </div>
      </section>

      {/* Intake & Deadlines */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> October (main intake); February (smaller). University of Malta: Non-EU visa applicants—1 July 2026 for October 2026; general 22 July. February 2027: 30 January. Apply 9+ weeks before course start for visa.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>October 2026:</strong> Non-EU visa deadline 1 July 2026; general 22 July 2026</li>
          <li>• <strong>February 2027:</strong> 30 January 2027 (some late until 6 Feb)</li>
          <li>• <strong>Visa:</strong> Submit at least 9 weeks before course commencement</li>
          <li>• <strong>Each institution:</strong> Check um.edu.mt, mcast.edu.mt for programme-specific deadlines</li>
        </ul>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities and Colleges in Malta</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Malta (Msida), MCAST, ITS, private colleges. Cheapest colleges in Malta for international students: some private institutions. All must be MFHEA-registered. Check mfhea.gov.mt.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Malta', city: 'Msida', programs: 'All disciplines; UG, PG, PhD' },
            { name: 'MCAST', city: 'Multiple campuses', programs: 'Applied, vocational' },
            { name: 'Institute of Tourism Studies (ITS)', city: 'Malta', programs: 'Hospitality, tourism' },
            { name: 'American University of Malta', city: 'Cospicua', programs: 'US-style degrees' },
            { name: 'Global College Malta', city: 'Malta', programs: 'Business, IT' },
            { name: 'Other private colleges', city: 'Valletta, Msida', programs: 'MFHEA-registered' },
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
            Get expert guidance on study in Malta from Nepal. Our consultancy helps with university selection, Malta student visa process for Nepali students, and residence permit via Identità. 500+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Malta from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Malta Student Visa Process for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Malta student visa process for Nepali students: Apply via Identità Central Visa Unit or Malta Visa Application Centre in Kathmandu. Submit at least 9 weeks before course start. Required: admission letter, proof of payment, bank statements (3 months), passport (10+ months), insurance (€30k), flight, accommodation. Fee €100–€150. Processing 6–8 weeks.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Malta visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>Malta Visa Application Centre in Kathmandu</strong> and Honorary Consulate of Malta in Nepal handle applications. These are forwarded to Identità Central Visa Unit. Apply at least 9 weeks before course commencement. Source: identita.gov.mt.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Step-by-Step Malta Student Visa Process</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {maltaData.residenceStepsWithText.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <div><span className="font-medium text-gray-800">{step.name}</span><span className="text-gray-600 text-sm block mt-0.5">{step.text}</span></div>
            </li>
          ))}
        </ol>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-2">Common Malta Student Visa Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Applying less than 9 weeks before course start</li>
            <li>Incomplete bank statements or insufficient funds (min 75% of minimum wage/month)</li>
            <li>Missing health insurance (€30k Schengen valid)</li>
            <li>Passport validity less than 10 months</li>
            <li>No proof of accommodation for first 14 nights</li>
            <li>Submitting fake documents—can result in permanent ban</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {maltaData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Malta?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection via um.edu.mt and mfhea.gov.mt, residence permit support via Identità and Malta Visa Application Centre in Kathmandu, and post-study work planning. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Malta from Nepal requirements—including proof of funds and tuition payment.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Lalitpur, Pokhara, and across Nepal rely on us for study in Malta from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and scholarship guidance</li>
          <li>• Residence permit and Malta VAC Kathmandu support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* Malta vs Cyprus */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Malta vs Cyprus – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both EU destinations for Nepali students. Malta: English official, no 6-month wait for work. Cyprus: lower tuition at some colleges. Compare with <Link href="/study-abroad/eur/cyprus/" className="text-blue-600 hover:underline">Cyprus</Link>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Malta</th>
                  <th className="p-4 text-left">Cyprus</th>
                </tr>
              </thead>
              <tbody>
                {maltaVsCyprus.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.malta}</td>
                    <td className="p-4">{row.cyprus}</td>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Malta FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Malta from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={maltaData.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Malta Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on total cost to study in Malta from Nepal 2026, Malta student visa process, and post-study work. Free consultation in Kathmandu—no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all cta-button">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button">
              Apply to Study in Malta from Nepal
            </Link>
            <Link href="/study-abroad/eur/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button-secondary">
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">
            Compare: <Link href="/study-abroad/eur/cyprus/" className="underline hover:text-white">Cyprus</Link> · <Link href="/study-abroad/eur/denmark/" className="underline hover:text-white">Denmark</Link> · <Link href="/study-abroad/eur/finland/" className="underline hover:text-white">Finland</Link> · <Link href="/study-abroad/eur/norway/" className="underline hover:text-white">Norway</Link> · <Link href="/study-abroad/hungary/" className="underline hover:text-white">Hungary</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/belgium/" className="underline hover:text-white">Belgium</Link> · <Link href="/study-abroad/romania/" className="underline hover:text-white">Romania</Link> · <Link href="/study-abroad/ireland/" className="underline hover:text-white">Ireland</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link>
          </p>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/finland/" className="text-blue-600 font-semibold hover:underline">Finland</Link>
            {' · '}
            <Link href="/study-abroad/eur/sweden/" className="text-blue-600 font-semibold hover:underline">Sweden</Link>
            {' · '}
            <Link href="/study-abroad/eur/denmark/" className="text-blue-600 font-semibold hover:underline">Denmark</Link>
            {' · '}
            <Link href="/study-abroad/eur/norway/" className="text-blue-600 font-semibold hover:underline">Norway</Link>
            {' · '}
            <Link href="/study-abroad/eur/cyprus/" className="text-blue-600 font-semibold hover:underline">Cyprus</Link>
            {' · '}
            <Link href="/study-abroad/eur/malta/" className="text-blue-600 font-semibold hover:underline">Malta</Link>
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
