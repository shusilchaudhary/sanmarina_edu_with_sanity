import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  Phone,
  ChevronRight,
  Building2,
  Award,
  Briefcase,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Greece from Nepal 2026 | Cost, Visa & Work Rules',
  description: 'Study in Greece from Nepal 2026: tuition €1,500–10,000, living €585–1,190/mo. Greek Embassy New Delhi (VAC Kathmandu ceases Jan 2026). Work 15+ hrs/week. 1-year post-study. Free consultation Kathmandu.',
  keywords: 'study in greece, study in greece and italy, study mba in greece, study mba in greece for nepalese, how to study in greece from nepal, greece student visa process for nepali students, tuition fees in greece for nepali students 2026, living cost in greece for students from nepal, cheapest universities in greece for international students, scholarship in greece for nepali students 2026, study in greece without ielts from nepal, can nepali students work in greece while studying, mba in greece for nepali students requirements',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/greece/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/greece/',
    title: 'Study in Greece from Nepal 2026 | Cost, Visa & MBA',
    description: 'Complete 2026 guide: study in Greece, tuition, living costs, work rules, MBA programmes. Athens, Thessaloniki. Compare with Italy. Free consultation.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-24',
    modifiedTime: '2026-02-24',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Greece from Nepal 2026',
    description: 'Study in Greece: cost, visa, MBA, work rules. Free consultation in Kathmandu.',
  },
};

// Data from studyingreece.gr, Greek Ministry of Education, Eurydice, Greek Embassy, university sites. 1 EUR ≈ 143 NPR (Feb 2026)
const greeceData = {
  country: 'Greece',
  slug: 'greece',
  heroImage: '/assets/greece.jpg',
  lastUpdated: 'February 2026',
  description: 'Greece hosts 48,000+ international students. Public tuition €1,500–€10,000/year; living €585–€1,190/month. Work 15+ hrs/week. 1-year post-study job-search permit. Athens and Thessaloniki. MBA in Greece for Nepali students from €7,250.',
  stats: {
    universities: '90+',
    internationalStudents: '48,000+',
    englishPrograms: '200+',
    postStudy: '1 year',
    studentsPlaced: '1,500+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: { publicMin: 1500, publicMax: 10000, privateMin: 6000, privateMax: 15000, mba: { min: 7250, max: 9900 } },
  livingCost: { athens: { min: 670, max: 1190 }, thessaloniki: { min: 585, max: 1015 } },
  workHours: 'Minimum 15 hrs/week; part-time outside class hours; social security applies',
  postStudy: { duration: 1, note: '1-year residence permit to search for employment or start business; proof of funds €650+/month' },
  visaLocation: 'Greek Embassy in New Delhi, India; VAC Kathmandu ceases Jan 2026 – verify current application point for 2026 intake',
  visaProcessing: 'Typically 15–45 working days',
  intakeMonths: 'Autumn: September–October; Spring: February (varies by programme)',
  deadlines: 'Public: June–July; Private: May–August; Master\'s: March–July',
  requirements: [
    'Admission letter from recognized Greek university',
    'Valid passport (6+ months beyond stay)',
    'Proof of funds: tuition + living expenses',
    'Health insurance (€30,000 minimum emergency coverage)',
    'Proof of accommodation',
    'Academic qualifications (transcripts, diplomas)',
    'IELTS/TOEFL or prior English-medium proof for English programmes',
  ],
  visaSteps: [
    'Apply to Greek universities (deadlines: June–July for public; May–August for private; March–July for Master\'s)',
    'Receive admission letter from recognized institution',
    'Gather proof of funds: bank statements or sponsorship (6 months recommended)',
    'Obtain health insurance valid in Greece (€30,000 minimum coverage)',
    'Arrange accommodation proof (dormitory contract, lease, or invitation)',
    'Book appointment at Greek Embassy in New Delhi (or VAC Kathmandu if before Jan 2026)',
    'Submit Type D visa application with passport, photos, forms, documents',
    'Processing typically 15–45 working days',
    'Collect visa and travel to Greece; convert to residence permit within 90 days of arrival',
  ],
  faqs: [
    {
      question: 'How to study in Greece from Nepal?',
      answer: 'Apply to Greek universities (deadlines June–July for public, May–August for private). Receive admission, gather proof of funds, health insurance, accommodation. Apply for Type D visa at Greek Embassy in New Delhi. Processing 15–45 days. Convert to residence permit upon arrival.',
    },
    {
      question: 'What is the Greece student visa process for Nepali students?',
      answer: 'Nepali students apply for Type D (long-term) visa at Greek Embassy in New Delhi. Processing 15–45 working days. Required: admission letter, passport, proof of funds, health insurance (€30,000 minimum), accommodation proof. VAC Kathmandu ceases Jan 2026—verify current application point.',
    },
    {
      question: 'What are tuition fees in Greece for Nepali students 2026?',
      answer: 'Public universities: €1,500–€4,000/year (undergrad), €1,500–€10,000 (master). Private: €6,000–€15,000/year. MBA in Greece: €7,250–€9,900. NPR equivalent: 1 EUR ≈ 143 NPR (Feb 2026). Cheapest universities in Greece for international students: public institutions.',
    },
    {
      question: 'What is the living cost in Greece for students from Nepal?',
      answer: 'Athens €670–€1,190/month. Thessaloniki €585–€1,015/month (cheaper). University dormitory €150–€300/month. NPR: Athens ~€800/mo ≈ 1.15L; Thessaloniki ~€700/mo ≈ 1.0L. Thessaloniki is among the cheapest cities for students.',
    },
    {
      question: 'Can Nepali students work in Greece while studying?',
      answer: 'Yes. International students can work part-time minimum 15 hours per week, outside class hours. Social security contributions and tax apply. Work must not conflict with study hours.',
    },
    {
      question: 'What is scholarship in Greece for Nepali students 2026?',
      answer: 'Hellenic Ministry of Foreign Affairs undergraduate scholarships do not include Nepal in the 2025–2026 eligible countries list. Nepali students can apply for Erasmus+, Erasmus Mundus, and university-specific merit scholarships. Check studyingreece.gr and university portals.',
    },
    {
      question: 'Can I study in Greece without IELTS from Nepal?',
      answer: 'Some universities accept TOEFL, Cambridge, or prior English-medium education. International Hellenic University offers programmes exclusively in English. Check individual programme requirements. Bachelor\'s in Greek may require Greek prep year.',
    },
    {
      question: 'What are MBA in Greece for Nepali students requirements?',
      answer: 'MBA in Greece for Nepali students: Bachelor\'s degree, IELTS 6.0–6.5 or TOEFL equivalent, work experience (varies by programme). AUEB MBA International: €7,250–€9,900. Application deadlines typically March–July for autumn intake.',
    },
    {
      question: 'Study in Greece and Italy – which is cheaper?',
      answer: 'Both affordable. Greece: €1,500–€10,000 tuition; Italy: €1,000–€5,000 public + DSU scholarships. Italy offers DSU regional scholarships (up to €7,000+ cash + tuition exemption). Greece has lower living costs in Thessaloniki. Compare based on programme and city.',
    },
    {
      question: 'What is the post-study residence pathway in Greece?',
      answer: 'Non-EU graduates can apply for a 1-year residence permit to search for employment or start a business. Apply 30 days before student permit expires. Proof of funds €650+/month, health insurance, degree certificate required. After 3 months, demonstrate job prospects.',
    },
    {
      question: 'Where do Nepali students apply for Greece student visa?',
      answer: 'Greek Embassy in New Delhi, India. VAC (Visa Application Center) in Kathmandu ceases operations from January 1, 2026. For 2026 intake, verify with Greek Embassy or Ministry of Foreign Affairs where to apply from Nepal.',
    },
  ],
};

const tuitionTable = [
  { level: 'Public Bachelor', range: '€1,500–€4,000/year', notes: 'Non-EU' },
  { level: 'Public Master', range: '€1,500–€10,000/year', notes: 'Varies by field' },
  { level: 'Private', range: '€6,000–€15,000/year', notes: 'All nationalities' },
  { level: 'MBA in Greece', range: '€7,250–€9,900', notes: 'AUEB full programme' },
];

const greeceVsItaly = [
  { aspect: 'Tuition (Public)', greece: '€1,500–€10,000', italy: '€1,000–€5,000' },
  { aspect: 'Living (cheapest city)', greece: 'Thessaloniki €585–€1,015/mo', italy: 'Bologna €800–€1,200/mo' },
  { aspect: 'Work', greece: '15+ hrs/week', italy: '20 hrs/week' },
  { aspect: 'Post-study', greece: '1 year', italy: 'Varies' },
  { aspect: 'Scholarships', greece: 'Erasmus+, university', italy: 'DSU up to €7,000+, tuition exempt' },
];

const visaStepsWithText = [
  { name: 'Apply to Greek universities (deadlines June–July public; May–August private; March–July Master\'s)', text: 'Public: June–July; Private: May–August; Master\'s: March–July. Check studyingreece.gr.' },
  { name: 'Receive admission letter from recognized institution', text: 'Secure offer; pay deposit if required.' },
  { name: 'Gather proof of funds: bank statements or sponsorship (6 months recommended)', text: 'Tuition + living €585–€1,190/mo. NPR ~143 per EUR.' },
  { name: 'Obtain health insurance valid in Greece (€30,000 minimum coverage)', text: 'Mandatory for visa and residence.' },
  { name: 'Arrange accommodation proof (dormitory, lease, or invitation)', text: 'Dorm €150–€300/mo common.' },
  { name: 'Book appointment at Greek Embassy in New Delhi (VAC Kathmandu ceases Jan 2026)', text: 'Apply in person. Verify current application point at mfa.gr.' },
  { name: 'Submit Type D visa application with passport, photos, forms, documents', text: 'Processing typically 15–45 working days.' },
  { name: 'Collect visa and travel to Greece; convert to residence permit within 90 days', text: 'Residence permit issued after arrival.' },
];

export default function GreeceStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Greece from Nepal 2026 – Complete Guide',
        description: greeceData.description,
        datePublished: '2026-02-24',
        dateModified: '2026-02-24',
        author: { '@type': 'Organization', name: greeceData.author.name, url: 'https://www.sanmarina.edu.np', description: greeceData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: greeceData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Greece Student Visa from Nepal',
        description: 'Step-by-step: apply to university, proof of funds + insurance, Greek Embassy New Delhi (VAC Kathmandu ceases Jan 2026), Type D visa 15–45 days. Per studyingreece.gr, mfa.gr 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Greece', item: 'https://www.sanmarina.edu.np/study-abroad/eur/greece/' },
        ],
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'Best education consultancy in Nepal for Greece study abroad',
        knowsAbout: ['Study in Greece from Nepal', 'Greek Embassy New Delhi', 'Type D visa Greece', 'MBA in Greece', 'VAC Kathmandu ceases Jan 2026'],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={greeceData.heroImage} alt="Nepali students studying in Greece - Athens Thessaloniki, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Greece</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {greeceData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Greece from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Work Rules</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Affordable tuition €1,500–€10,000, MBA in Greece from €7,250, work 15+ hrs/week—study in Greece from Nepal with expert guidance.
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Greece study experts. No obligation—perfect for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.studyingreece.edu.gr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyingreece.gr</a>, <a href="https://www.mfa.gr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mfa.gr</a>, Eurydice, Greek Embassy. Verify with official sources.</strong>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {greeceData.author.name} · {greeceData.author.role} · {greeceData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Greece from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition €1,500–€10,000 (public); living €585–€1,190/mo. Greek Embassy New Delhi (VAC Kathmandu ceases Jan 2026). Work 15+ hrs/week. 1-year post-study. <a href="https://www.studyingreece.edu.gr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyingreece.gr</a>, <a href="https://www.mfa.gr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mfa.gr</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€1,500–€10,000/year (public)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">Tuition + living €585–€1,190/mo</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">Type D at Greek Embassy New Delhi; VAC Kathmandu ceases Jan 2026</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">15+ hrs/week</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">1-year job-search permit</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">15–45 working days</td></tr>
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
              { value: greeceData.stats.universities, label: 'Universities' },
              { value: greeceData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: greeceData.stats.englishPrograms, label: 'English Programmes' },
              { value: greeceData.stats.postStudy, label: 'Post-Study Permit' },
              { value: greeceData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Why Study in Greece */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Greece in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Affordable tuition vs Western Europe, 200+ English programmes, work 15+ hrs/week, 1-year post-study permit. Athens and Thessaloniki. MBA in Greece for Nepali students from €7,250. Compare with <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, <Link href="/study-abroad/eur/portugal/" className="text-blue-600 hover:underline">Portugal</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Greece offers a strong combination of Mediterranean culture, affordable education, and Schengen access. Nepali students from Kathmandu, Baneshwor, Ghorahi, and Itahari choose Greece for business, shipping, tourism, and engineering. Study in Greece and Italy are both popular—consultants often compare both for students from Nepal.
        </p>
      </section>

      {/* 2. Cost of Studying */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Tuition Fees in Greece for Nepali Students 2026</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> First year €5,000–€25,000 (NPR 7–36 lakhs). Tuition €1,500–€10,000/year (public); living €585–€1,190/month. Thessaloniki is among the cheapest cities in Greece for international students. 1 EUR ≈ 143 NPR (Feb 2026).
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
                <tr className="border-b"><td className="p-3">Tuition (Public Bachelor)</td><td className="p-3">€1,500–€4,000</td><td className="p-3">2.1–5.7L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (Public Master)</td><td className="p-3">€1,500–€10,000</td><td className="p-3">2.1–14.3L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (MBA)</td><td className="p-3">€7,250–€9,900</td><td className="p-3">10.4–14.2L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€7,020–€14,280</td><td className="p-3">10–20.4L</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€700</td><td className="p-3">1.0L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€5,000–€25,000</td><td className="p-3 font-medium">7–36L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Greece for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            <strong>Cheapest cities in Greece for international students:</strong> Thessaloniki (approximately 12% cheaper than Athens). Athens offers more opportunities; Thessaloniki is more budget-friendly.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Athens</td><td className="p-3">€670–€1,190</td><td className="p-3">Capital; more opportunities</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Thessaloniki</td><td className="p-3">€585–€1,015</td><td className="p-3">Cheapest; ~12% lower</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Patras</td><td className="p-3">€600–€900</td><td className="p-3">Budget-friendly</td></tr>
                <tr><td className="p-3 font-medium">Heraklion</td><td className="p-3">€650–€950</td><td className="p-3">Crete</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">University dormitory €150–€300/month. Source: studyingreece.gr.</p>
        </div>
      </section>

      {/* 3. Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can Nepali Students Work in Greece While Studying?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. International students can work part-time minimum 15 hours per week, outside class hours. Social security contributions and tax apply. Work must not conflict with study hours. (Source: University of Athens guide for non-EU students)
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Minimum 15 hrs/week (or equivalent)</li>
            <li>• Part-time outside class hours only</li>
            <li>• Social security and tax obligations apply</li>
            <li>• Post-study: 1-year job-search permit</li>
          </ul>
        </div>
      </section>

      {/* 4. MBA in Greece */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study MBA in Greece for Nepalese</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> MBA in Greece for Nepali students: AUEB (Athens University of Economics and Business) MBA International €7,250–€9,900. English-taught, 16 months. Requirements: Bachelor&apos;s degree, IELTS 6.0–6.5 or TOEFL, work experience (varies). Application deadlines typically March–July for autumn intake.
        </p>
        <p className="text-gray-700 mb-4">
          Study MBA in Greece for Nepalese is affordable compared to UK or USA. International Hellenic University, Alba Graduate Business School, and AUEB offer English-taught MBA programmes. Check mba.aueb.gr and imba.aueb.gr for mba in greece for nepali students requirements.
        </p>
      </section>

      {/* 5. Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarship in Greece for Nepali Students 2026
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Hellenic Ministry of Foreign Affairs undergraduate scholarships for 2025–2026 do not include Nepal in the eligible countries list. Nepali students can apply for Erasmus+, Erasmus Mundus Joint Masters, and university-specific merit scholarships. Check studyingreece.gr and education.ec.europa.eu. (Source: mfa.gr)
          </p>
          <p className="text-gray-700 mb-4">
            Erasmus+ supports mobility to Greek universities. University merit scholarships vary by institution. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
        </div>
      </section>

      {/* 6. Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Autumn intake: September–October. Spring intake: February (varies). Public universities: June–July deadline. Private: May–August. Master\'s: March–July. Check each university portal.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Public universities:</strong> June–July for non-EU autumn intake</li>
            <li>• <strong>Private universities:</strong> May–August; some rolling</li>
            <li>• <strong>Master&apos;s programmes:</strong> March–July</li>
            <li>• <strong>MBA:</strong> First round often March; second round later</li>
          </ul>
        </div>
      </section>

      {/* 7. Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Greece Without IELTS from Nepal</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. International Hellenic University offers programmes exclusively in English. Requirements vary by programme; check individual university pages.
        </p>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Greece for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Business, Engineering, Tourism & Hospitality, Medicine, Marine Sciences, and Humanities. Many English-taught programmes at AUEB, International Hellenic University, and private colleges.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Business & Economics:</strong> AUEB, Alba Graduate Business School, MBA programmes</li>
          <li>• <strong>Engineering & IT:</strong> NTUA, University of Patras, Technical University of Crete</li>
          <li>• <strong>Tourism & Hospitality:</strong> Strong industry; Mediterranean College, American College of Greece</li>
          <li>• <strong>Medicine:</strong> NKUA, Aristotle University of Thessaloniki</li>
          <li>• <strong>Marine Sciences:</strong> University of the Aegean, specialised programmes</li>
        </ul>
      </section>

      {/* 8. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Greece</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> National and Kapodistrian University of Athens, Aristotle University of Thessaloniki, Athens University of Economics and Business (AUEB), International Hellenic University, Technical University of Crete. Strong in business, shipping, tourism.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'National and Kapodistrian University of Athens', city: 'Athens', programs: 'All disciplines' },
            { name: 'Aristotle University of Thessaloniki', city: 'Thessaloniki', programs: 'Largest in Greece' },
            { name: 'Athens University of Economics and Business', city: 'Athens', programs: 'MBA, Business, Economics' },
            { name: 'International Hellenic University', city: 'Thessaloniki', programs: 'English-only programmes' },
            { name: 'Technical University of Crete', city: 'Chania', programs: 'Engineering, Technology' },
            { name: 'University of Piraeus', city: 'Piraeus', programs: 'Shipping, Business' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. MID-PAGE CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 mb-6">
            Get expert guidance on how to study in Greece from Nepal. Our team helps with university selection, visa support, and scholarship applications.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
          >
            Apply to Study in Greece from Nepal
          </Link>
        </div>
      </section>

      {/* 10. Requirements + Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Greece Student Visa Process for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Admission letter, passport (6+ months), proof of funds, health insurance (€30,000 minimum), accommodation proof. Apply for Type D visa at Greek Embassy in New Delhi. Processing 15–45 days. VAC Kathmandu ceases Jan 2026—verify current application point for 2026 intake.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students apply for Greece student visa?</h4>
          <p className="text-gray-700 text-sm">
            <strong>Greek Embassy in New Delhi, India.</strong> The Greece Visa Application Center (VAC) in Kathmandu ceases operations from January 1, 2026. For 2026 intake, verify with Greek Embassy or Ministry of Foreign Affairs where to apply from Nepal. Processing typically 15–45 working days.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Visa Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {visaStepsWithText.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <div><span className="font-medium text-gray-800">{step.name}</span><span className="text-gray-600 text-sm block mt-0.5">{step.text}</span></div>
            </li>
          ))}
        </ol>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-2">Common Greece Student Visa Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Inconsistent documents between admission and visa application</li>
            <li>Insufficient proof of funds (show 6+ months; tuition + living €585–€1,190/mo)</li>
            <li>Health insurance below €30,000 emergency coverage</li>
            <li>Applying too close to intake (allow 15–45 days; apply 3 months ahead)</li>
            <li>Vague Statement of Purpose—explain course choice and career intent</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {greeceData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Greece?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, visa prep for Greek Embassy in New Delhi, and proof of funds structure. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Greece from Nepal requirements and plan the cost of studying in Greece.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Greece from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and scholarship guidance</li>
          <li>• Visa and proof of funds support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* 11. Greece vs Italy */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Greece vs Study in Italy – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both popular for Nepali students. Study in Greece and Italy offer affordable options. Compare with <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link> for DSU scholarships and programme fit.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Greece</th>
                  <th className="p-4 text-left">Italy</th>
                </tr>
              </thead>
              <tbody>
                {greeceVsItaly.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.greece}</td>
                    <td className="p-4">{row.italy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can Nepali Students Bring Dependents to Greece?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. International students can bring spouse and children. Sufficient financial means for dependents required. Each dependent needs health insurance. Verify at <a href="https://www.mfa.gr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mfa.gr</a> and Greek immigration.
        </p>
        <p className="text-gray-600 text-sm">Policies may vary; consult Greek Embassy or Ministry of Migration for current requirements.</p>
      </section>

      {/* GAP Acceptance */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Does Greece Accept Study Gap (GAP) for Nepali Students?</h2>
        <p className="text-gray-700">
          <strong>Yes.</strong> Greek universities generally accept gaps when well justified (work, family, health, internships). Private colleges are often more flexible. Provide clear gap explanation in application. Policies vary by institution—check individual requirements. Work experience is viewed positively for MBA and master&apos;s programmes.
        </p>
      </section>

      {/* PR and Citizenship */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Greece</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> PR after employment and meeting residence requirements. Citizenship typically after several years of legal residence. Language proficiency and financial stability may be required.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Verify at Greek Ministry of Migration and Asylum. Post-study 1-year job-search permit leads to employment residence. Exact duration and rules vary; consult official sources.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Employment residence</td><td className="p-3">After 1-year job-search; secure job in field of study</td></tr>
              <tr><td className="p-3 font-semibold">Permanent residence / citizenship</td><td className="p-3">Several years legal stay; language; financial stability—verify at migration authorities</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 12. Post-Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Residence Pathway</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Non-EU graduates can apply for a 1-year residence permit to search for employment or start a business. Apply 30 days before student permit expires. Proof of funds €650+/month, health insurance, degree certificate required.
        </p>
        <p className="text-gray-700 mb-4">
          After 3 months from permit issuance, you must demonstrate job prospects or that your planned business aligns with your education. Apply via Ministry of Migration and Asylum.
        </p>
      </section>

      {/* 13. FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Greece FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Greece from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={greeceData.faqs} />
          </div>
        </div>
      </section>

      {/* 14. Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Greece Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Greece for Nepali students 2026, Greece student visa process, and MBA in Greece for Nepali students. Free consultation in Kathmandu—no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all"
            >
              Apply to Study in Greece from Nepal
            </Link>
            <Link
              href="/study-abroad/eur/"
              className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all"
            >
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/italy/" className="underline hover:text-white">Italy</Link> · <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/eur/portugal/" className="underline hover:text-white">Portugal</Link> · <Link href="/study-abroad/eur/cyprus/" className="underline hover:text-white">Cyprus</Link> · <Link href="/study-abroad/romania/" className="underline hover:text-white">Romania</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/italy/" className="text-blue-600 font-semibold hover:underline">Italy</Link>
            {' · '}
            <Link href="/study-abroad/eur/spain/" className="text-blue-600 font-semibold hover:underline">Spain</Link>
            {' · '}
            <Link href="/study-abroad/eur/portugal/" className="text-blue-600 font-semibold hover:underline">Portugal</Link>
            {' · '}
            <Link href="/study-abroad/eur/cyprus/" className="text-blue-600 font-semibold hover:underline">Cyprus</Link>
            {' · '}
            <Link href="/study-abroad/eur/poland/" className="text-blue-600 font-semibold hover:underline">Poland</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
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
