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
  title: 'Study in Ireland from Nepal 2026 | Cost, Visa & Stamp 1G',
  description: 'Study in Ireland from Nepal 2026: tuition €9,850–35,000, living €1,000–2,000/mo. VFS/NDVO. Stamp 2: 20 hrs/week. Stamp 1G: 24 months. GOI-IES €10k. Free consultation Kathmandu.',
  keywords: 'study in ireland, study in ireland from nepal, study in ireland for international students, benefits of studying in ireland, best courses to study in ireland, how much does it cost to study in ireland, study in ireland cost, study in ireland for free, study in ireland from nepal requirements, study masters in ireland, ireland student visa process for nepali students, tuition fees in ireland for nepali students 2026, living cost in ireland for students from nepal, cheapest universities in ireland for international students, scholarship in ireland for nepali students 2026, study in ireland without ielts from nepal, masters in ireland for nepali students requirements, ireland study visa success rate from nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/ireland/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/ireland/',
    title: 'Study in Ireland from Nepal 2026 | Cost, Visa & Stamp 1G',
    description: 'Complete 2026 guide: study in Ireland, tuition, living costs, Stamp 2 work rules, Stamp 1G post-study. Dublin, Cork, Galway. GOI-IES scholarship. Free consultation.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-24',
    modifiedTime: '2026-02-24',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Ireland from Nepal 2026',
    description: 'Study in Ireland: cost, visa, Stamp 2, Stamp 1G. Free consultation in Kathmandu.',
  },
};

// Data from educationinireland.com, Irish Immigration (irishimmigration.ie), HEA, ISD, university sites. 1 EUR ≈ 143 NPR (Feb 2026)
const irelandData = {
  country: 'Ireland',
  slug: 'ireland',
  heroImage: '/assets/ireland.webp',
  lastUpdated: 'February 2026',
  description: 'Ireland hosts 45,000+ international students. Tuition €9,850–€35,000/year; living €1,000–€2,000/month. Stamp 2: 20 hrs/week term, 40 hrs holidays. Stamp 1G: up to 24 months post-study. Dublin, Cork, Galway. GOI-IES scholarship €10,000 + tuition waiver.',
  stats: {
    universities: '30+',
    internationalStudents: '45,000+',
    englishPrograms: 'All',
    postStudy: 'Up to 24 months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: { undergradMin: 9850, undergradMax: 28000, masterMin: 10000, masterMax: 35000, proofOfFunds: 10000 },
  livingCost: { dublin: { min: 1500, max: 2000 }, cork: { min: 1200, max: 1500 }, galway: { min: 1200, max: 1500 } },
  stamp2: '20 hrs/week during term; 40 hrs/week during Christmas (15 Dec–15 Jan) and Summer (1 Jun–30 Sep)',
  stamp1g: { master: '24 months (12+12)', bachelor: '12 months', note: 'Third Level Graduate Scheme; apply within 6 months of results' },
  visaLocation: 'New Delhi Visa Office (NDVO) processes applications from Nepal; submit via VFS. Apply up to 5 months before course start.',
  visaProcessing: 'Varies; allow several weeks',
  intakeMonths: 'Autumn: September; Spring: January (varies by programme)',
  deadlines: 'Trinity: January; most universities: January–February for autumn; CAO Feb 1 for domestic—international contact universities directly',
  requirements: [
    'Offer letter from recognized Irish institution (ILEP or NFQ)',
    'Valid passport (6+ months beyond stay)',
    'Proof of funds: €10,000 minimum for living + tuition (6 months in account)',
    'English proficiency: IELTS 5.5+ or Duolingo/TOEFL/PTE/Cambridge (compulsory)',
    'Private medical insurance',
    'Police clearance certificate',
  ],
  visaSteps: [
    'Apply to Irish universities (deadlines typically January–February for autumn intake)',
    'Receive offer letter from recognized institution',
    'Gather proof of funds: €10,000+ living + tuition; funds in account 6 months',
    'Obtain English test result (IELTS 5.5+ or Duolingo 75, TOEFL 61, PTE 30)',
    'Arrange private medical insurance valid in Ireland',
    'Submit visa application via VFS; NDVO (New Delhi) processes Nepal applications',
    'Apply up to 5 months before course start date',
    'Receive decision and travel to Ireland; register for IRP (Stamp 2)',
  ],
  faqs: [
    {
      question: 'What are study in Ireland from Nepal requirements?',
      answer: 'Offer letter from recognized Irish institution, passport (6+ months), proof of funds €10,000+ living + tuition (6 months in account), English test (IELTS 5.5+ or Duolingo 75, TOEFL 61, PTE 30), private medical insurance, police clearance. Apply via VFS; NDVO processes from Nepal.',
    },
    {
      question: 'What is the Ireland student visa process for Nepali students?',
      answer: 'Nepali students submit applications via VFS. The New Delhi Visa Office (NDVO) processes applications from Nepal, India, Bangladesh, Sri Lanka, Maldives. Apply up to 5 months before course start. Required: offer letter, €10,000+ funds, English test, insurance. See irishimmigration.ie.',
    },
    {
      question: 'What are tuition fees in Ireland for Nepali students 2026?',
      answer: 'Undergraduate €9,850–€28,000/year; Master\'s €10,000–€35,000/year. Medicine up to €55,000. Cheapest universities: Institute of Public Administration €3,200; St Patrick\'s Maynooth €5,779; Dundalk IT €9,950. 1 EUR ≈ 143 NPR (Feb 2026).',
    },
    {
      question: 'What is the living cost in Ireland for students from Nepal?',
      answer: 'Dublin €1,500–€2,000/month; Cork €1,200–€1,500; Galway €1,200–€1,500. Cork and Galway are cheaper than Dublin. Shared room €600–€1,200. NPR: €1,200/mo ≈ 1.7L. Irish Immigration recommends €10,000–€12,000/year living.',
    },
    {
      question: 'Can I work while studying in Ireland on Stamp 2?',
      answer: 'Yes. Stamp 2 students: 20 hours per week during term; 40 hours per week during Christmas (15 Dec–15 Jan) and Summer (1 Jun–30 Sep). Need IRP card and PPS number. Stamp 2A (language courses) cannot work. See educationinireland.com.',
    },
    {
      question: 'What is Stamp 1G? Ireland post-study work visa',
      answer: 'Stamp 1G (Third Level Graduate Scheme): Master\'s/PhD graduates get up to 24 months (12+12); Bachelor\'s get 12 months. Apply within 6 months of final results. Work 40 hrs/week, any sector. Bridge to employment permit. Apply from within Ireland.',
    },
    {
      question: 'What is scholarship in Ireland for Nepali students 2026?',
      answer: 'Government of Ireland International Education Scholarship (GOI-IES): 60 awards for 2026/27. €10,000 stipend + full tuition waiver. Deadline 12 March 2026. Master\'s/PhD only. Nepal eligible (non-EU). See hea.ie and educationinireland.com.',
    },
    {
      question: 'Can I study in Ireland without IELTS from Nepal?',
      answer: 'Ireland accepts Duolingo (75), TOEFL (61), PTE (30), Cambridge, Oxford Test of English. IELTS is not mandatory—but an English test is compulsory for study visa. Certificate must be within 2 years of course start. See irishimmigration.ie.',
    },
    {
      question: 'What are masters in Ireland for Nepali students requirements?',
      answer: 'Bachelor\'s degree, English test (IELTS 6.0–6.5 typical for master\'s), academic transcripts, references. Tuition €10,000–€35,000/year. GOI-IES scholarship covers tuition + €10,000 for eligible master\'s. Application deadlines January–February for autumn.',
    },
    {
      question: 'Study in Ireland for free – is it possible?',
      answer: 'GOI-IES scholarship provides full tuition waiver + €10,000 stipend for 60 master\'s/PhD students yearly. Highly competitive. No general free tuition for non-EU students. Cheapest options: Institute of Public Administration €3,200; St Patrick\'s €5,779.',
    },
    {
      question: 'What is Ireland study visa success rate from Nepal?',
      answer: 'Official success rates are not published by Irish Immigration. Success depends on genuine intent, complete documents, proof of funds (6 months), and strong academic profile. Consultancies with document preparation experience typically report high success for well-prepared applications.',
    },
    {
      question: 'Which are the cheapest universities in Ireland for international students?',
      answer: 'Institute of Public Administration €3,200/year; St Patrick\'s College Maynooth €5,779; Carlow College €9,750; Dundalk IT €9,950; ATU Letterkenny €10,000. Dublin universities (UCD, Trinity) are higher. See educationinireland.com for full list.',
    },
    {
      question: 'Can I get PR in Ireland after studying?',
      answer: 'Irish PR typically requires 5+ years of legal residence. Stamp 1G (12–24 months) → employment permit → long-term residence. Citizenship: 5 years residence (or 3 if Irish spouse). Verify at irishimmigration.ie, inis.gov.ie.',
    },
  ],
};

const tuitionTable = [
  { level: 'Undergraduate', range: '€9,850–€28,000/year', notes: 'Medicine up to €55,000' },
  { level: 'Master\'s', range: '€10,000–€35,000/year', notes: 'Varies by field' },
  { level: 'Cheapest (IPA)', range: '€3,200/year', notes: 'Institute of Public Administration' },
  { level: 'Proof of funds', range: '€10,000+ living', notes: '6 months in account' },
];

const visaStepsWithText = [
  { name: 'Apply to Irish universities (deadlines typically January–February for autumn)', text: 'Trinity January; most Jan–Feb. International contact directly. ILEP/NFQ programmes only.' },
  { name: 'Receive offer letter from recognized institution', text: 'Secure offer; pay deposit if required.' },
  { name: 'Gather proof of funds: €10,000+ living + tuition; 6 months in account', text: 'Irish Immigration requirement. Bank statements, sponsor affidavit.' },
  { name: 'Obtain English test (IELTS 5.5+ or Duolingo 75, TOEFL 61, PTE 30)', text: 'Compulsory for visa. Valid within 2 years of course start.' },
  { name: 'Arrange private medical insurance valid in Ireland', text: 'Minimum coverage for illness/accident. Required for visa.' },
  { name: 'Submit visa application via VFS; NDVO processes Nepal applications', text: 'New Delhi Visa Office. No Irish embassy in Kathmandu. Apply up to 5 months before.' },
  { name: 'Processing typically 4–8 weeks; allow time for decision', text: 'Allow several weeks. Check ireland.ie for current times.' },
  { name: 'Receive decision and travel to Ireland; register for IRP (Stamp 2)', text: 'Register with Garda for residence permit upon arrival.' },
];

const irelandVsUK = [
  { aspect: 'Tuition', ireland: '€9,850–€35,000', uk: '£9,000–£38,000' },
  { aspect: 'Living (cheapest)', ireland: 'Cork/Galway €1,200–€1,500/mo', uk: 'Outside London £700–£1,200/mo' },
  { aspect: 'Work (term)', ireland: '20 hrs/week', uk: '20 hrs/week' },
  { aspect: 'Post-study', ireland: 'Stamp 1G: 12–24 months', uk: 'Graduate Route: 2–3 years' },
  { aspect: 'English test', ireland: 'IELTS 5.5+ or alternatives', uk: 'IELTS UKVI required' },
];

export default function IrelandStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Ireland from Nepal 2026 – Complete Guide',
        description: irelandData.description,
        datePublished: '2026-02-24',
        dateModified: '2026-02-24',
        author: { '@type': 'Organization', name: irelandData.author.name, url: 'https://www.sanmarina.edu.np', description: irelandData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: irelandData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Ireland Student Visa from Nepal',
        description: 'Step-by-step: apply to university, proof €10,000+ (6 months), English test, VFS/NDVO. Processing 4–8 weeks. Per irishimmigration.ie, educationinireland.com 2026.',
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
          { '@type': 'ListItem', position: 4, name: 'Ireland', item: 'https://www.sanmarina.edu.np/study-abroad/eur/ireland/' },
        ],
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'Best education consultancy in Nepal for Ireland study abroad',
        knowsAbout: ['Study in Ireland from Nepal', 'NDVO VFS', 'Stamp 2 Stamp 1G', 'GOI-IES scholarship', 'Ireland student visa Nepal'],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={irelandData.heroImage} alt="Nepali students studying in Ireland - Dublin Cork Galway, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Ireland</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {irelandData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Ireland from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Stamp 1G</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Ireland for international students: tuition €9,850–€35,000, Stamp 2 work 20 hrs/week, Stamp 1G up to 24 months post-study. Dublin, Cork, Galway.
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Ireland study experts. No obligation—perfect for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: Irish Immigration (irishimmigration.ie), HEA, Education in Ireland.</strong> Proof of funds €10,000+ living; NDVO via VFS for Nepal. Verify at <a href="https://www.irishimmigration.ie" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">irishimmigration.ie</a>, <a href="https://www.ireland.ie/en/dfa/visas-for-ireland/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">ireland.ie</a>, <a href="https://www.educationinireland.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">educationinireland.com</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {irelandData.author.name} · {irelandData.author.role} · {irelandData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Ireland from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition €9,850–€35,000; living €1,000–€2,000/mo. Apply via VFS; NDVO processes Nepal. Stamp 2: 20 hrs/week term, 40 hrs holidays. Stamp 1G: 24 months Master&apos;s. GOI-IES €10,000 + waiver. <a href="https://www.irishimmigration.ie" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">irishimmigration.ie</a>, <a href="https://www.educationinireland.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">educationinireland.com</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€9,850–€35,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">€10,000+ living + tuition; 6 months in account</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">VFS; NDVO (New Delhi) processes Nepal</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work (Stamp 2)</td><td className="p-3">20 hrs/week term; 40 hrs Christmas & Summer</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study (Stamp 1G)</td><td className="p-3">Master&apos;s/PhD 24 months; Bachelor&apos;s 12 months</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">Typically 4–8 weeks</td></tr>
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
              { value: irelandData.stats.universities, label: 'Universities' },
              { value: irelandData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: irelandData.stats.englishPrograms, label: 'English Programmes' },
              { value: irelandData.stats.postStudy, label: 'Stamp 1G' },
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

      {/* 1. Why Study in Ireland */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">What Are the Benefits of Studying in Ireland?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Benefits of studying in Ireland: English-speaking, EU hub for tech and pharma, Stamp 1G up to 24 months post-study, 20 hrs/week work during term. Dublin, Cork, Galway. Compare with <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>, <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Ireland (Republic of Ireland) for international students offers world-class education, strong industry links (Google, Apple, Pfizer), and a welcoming environment. Nepali students from Kathmandu, Baneshwor, Ghorahi, and Itahari choose Ireland for tech, business, and healthcare. Best courses to study in Ireland for Nepali students: Computer Science, Data Science, Business, Healthcare, Engineering.
        </p>
      </section>

      {/* 2. Cost of Studying */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Ireland?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study in Ireland cost: first year €20,000–€55,000 (NPR 29–79 lakhs). Tuition €9,850–€35,000/year; living €1,000–€2,000/month. Cork and Galway cheaper than Dublin. 1 EUR ≈ 143 NPR (Feb 2026).
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
                <tr className="border-b"><td className="p-3">Tuition (Undergraduate)</td><td className="p-3">€9,850–€28,000</td><td className="p-3">14–40L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (Master&apos;s)</td><td className="p-3">€10,000–€35,000</td><td className="p-3">14–50L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€12,000–€24,000</td><td className="p-3">17–34L</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€800</td><td className="p-3">1.1L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€20,000–€55,000</td><td className="p-3 font-medium">29–79L</td></tr>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Ireland for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            <strong>Cheapest universities in Ireland for international students</strong> by location: Cork and Galway have lower living costs than Dublin. Dublin is most expensive; Cork and Galway approximately 20–25% cheaper.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Dublin</td><td className="p-3">€1,500–€2,000</td><td className="p-3">Most expensive; capital</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Cork</td><td className="p-3">€1,200–€1,500</td><td className="p-3">20–25% cheaper</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Galway</td><td className="p-3">€1,200–€1,500</td><td className="p-3">20–25% cheaper</td></tr>
                <tr><td className="p-3 font-medium">Limerick</td><td className="p-3">€1,000–€1,400</td><td className="p-3">Budget-friendly</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Shared room €600–€1,200; on-campus varies. Irish Immigration recommends €10,000/year living. Source: educationinireland.com.</p>
        </div>
      </section>

      {/* 3. Stamp 2 Work */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            What Are Stamp 2 Work Conditions for Students?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Stamp 2 students: 20 hours per week during term; 40 hours per week during Christmas (15 Dec–15 Jan) and Summer (1 Jun–30 Sep). Need IRP card and PPS number. Stamp 2A (language courses) cannot work. (Source: educationinireland.com, irishimmigration.ie)
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 20 hrs/week during term time</li>
            <li>• 40 hrs/week during Christmas and Summer</li>
            <li>• IRP card and PPS number required</li>
            <li>• Stamp 2A (language courses) cannot work</li>
          </ul>
        </div>
      </section>

      {/* 4. Stamp 1G */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">What Is Stamp 1G? Ireland Post-Study Work Visa</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Stamp 1G (Third Level Graduate Scheme): Master&apos;s and PhD graduates get up to 24 months (12+12); Bachelor&apos;s get 12 months. Apply within 6 months of final results. Work 40 hrs/week, any sector. Bridge to employment permit. Apply from within Ireland.
        </p>
        <p className="text-gray-700 mb-4">
          Stamp 1G allows non-EU graduates to remain in Ireland and seek employment. No job offer required. Apply via Immigration Service. Processing moved online (July 2024); typically ~1 month. See internationalstudents.ie and irishimmigration.ie.
        </p>
      </section>

      {/* 5. Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarship in Ireland for Nepali Students 2026
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Government of Ireland International Education Scholarship (GOI-IES): 60 awards for 2026/27. €10,000 stipend + full tuition waiver. Deadline 12 March 2026. Master&apos;s/PhD only. Nepal eligible (non-EU). See hea.ie and educationinireland.com.
          </p>
          <p className="text-gray-700 mb-4">
            Study in Ireland for free is possible via GOI-IES—highly competitive. University-specific merit scholarships also available. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
        </div>
      </section>

      {/* 6. Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Autumn intake: September. Spring intake: January (varies). Trinity College Dublin: January. Most universities: January–February for autumn. International students contact universities directly (not CAO). Apply up to 5 months before course start for visa.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Trinity College Dublin:</strong> January (earlier)</li>
            <li>• <strong>Most universities:</strong> January–February for September intake</li>
            <li>• <strong>Visa:</strong> Apply up to 5 months before course start</li>
            <li>• <strong>GOI-IES:</strong> 12 March 2026</li>
          </ul>
        </div>
      </section>

      {/* 7. Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Ireland Without IELTS from Nepal?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Ireland accepts Duolingo (75), TOEFL (61), PTE (30), Cambridge, Oxford Test of English. An English test is compulsory for study visa—but IELTS is not mandatory. Certificate must be within 2 years of course start. See irishimmigration.ie.
        </p>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Ireland for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Computer Science, Data Science, Business, Engineering, Healthcare, Hospitality, Food Science, Biotechnology. Ireland is an EU hub for tech (Google, Apple, Pfizer) and pharma.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Tech & IT:</strong> Computer Science, Software Engineering, Data Analytics, Cybersecurity (DCU, UCD, Trinity)</li>
          <li>• <strong>Business:</strong> MBA, International Business, Finance (UCD Smurfit, Trinity)</li>
          <li>• <strong>Engineering:</strong> Biomedical, Mechanical, Electrical (UCD, UCC, UL)</li>
          <li>• <strong>Healthcare:</strong> Medicine, Nursing, Pharmacy, Physiotherapy</li>
          <li>• <strong>Hospitality & Food:</strong> Food Science, Tourism (UCC, ATU)</li>
        </ul>
      </section>

      {/* 8. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Ireland</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Trinity College Dublin, University College Dublin, University College Cork, National University of Ireland Galway, Dublin City University. Strong in tech, business, healthcare. Cheapest: Institute of Public Administration, St Patrick&apos;s Maynooth.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Trinity College Dublin', city: 'Dublin', programs: 'All disciplines' },
            { name: 'University College Dublin', city: 'Dublin', programs: 'Business, Engineering' },
            { name: 'University College Cork', city: 'Cork', programs: 'Medicine, Law' },
            { name: 'NUI Galway', city: 'Galway', programs: 'Arts, Science' },
            { name: 'Dublin City University', city: 'Dublin', programs: 'Tech, Business' },
            { name: 'University of Limerick', city: 'Limerick', programs: 'Engineering, Health' },
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
            Get expert guidance on study in Ireland from Nepal. Our team helps with university selection, visa support, and GOI-IES scholarship applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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
              Apply to Study in Ireland from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Requirements + Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Ireland Student Visa Process for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Submit via VFS. NDVO (New Delhi Visa Office) processes applications from Nepal. Required: offer letter, €10,000+ funds (6 months in account), English test, private medical insurance. Apply up to 5 months before course start.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students apply for Ireland student visa?</h4>
          <p className="text-gray-700 text-sm">
            <strong>Via VFS.</strong> The New Delhi Visa Office (NDVO) processes applications from Nepal, India, Bangladesh, Sri Lanka, Maldives. No Irish embassy in Kathmandu—applications are routed through NDVO. Submit documents at VFS. See irishimmigration.ie and ireland.ie for details.
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
          <h4 className="font-bold text-[#001F3F] mb-2">Common Ireland Student Visa Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Insufficient proof of funds (need €10,000+ living + tuition; 6 months in account)</li>
            <li>Course not on ILEP (Interim List of Eligible Programmes)</li>
            <li>English test expired or below visa requirement (IELTS 5.0 visa min; universities may need higher)</li>
            <li>Applying too late (allow 4–8 weeks; apply up to 5 months before course start)</li>
            <li>Inconsistent documents between admission and visa application</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {irelandData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Ireland?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, visa prep via VFS/NDVO, and proof of funds structure. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Ireland from Nepal requirements and GOI-IES scholarship applications.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Ireland from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and GOI-IES scholarship guidance</li>
          <li>• Visa and proof of funds support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* GAP & GPA */}
      <section className="py-12 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Does Ireland Accept Study Gap (GAP) and What GPA Is Required?</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP:</strong> Ireland generally accepts gaps when well justified (work, internships, family). If 2–6 years gap with professional activity, application can proceed. Unexplained gaps may affect visa intent assessment.
        </p>
        <p className="text-gray-700">
          <strong>GPA:</strong> Most universities accept 60% (2.5 GPA) or higher. Competitive programmes (Trinity, UCD) may require 65–70%. Check individual programme requirements. Source: educationinireland.com.
        </p>
      </section>

      {/* Dependents */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Can Nepali Students Bring Dependents to Ireland?</h2>
        <p className="text-gray-700">
          Stamp 2 student visa holders may apply for family reunification in certain cases. Spouse and children can apply for join-family residence. Proof of additional funds and accommodation required. Policies vary—verify at <a href="https://www.irishimmigration.ie" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">irishimmigration.ie</a>.
        </p>
      </section>

      {/* PR Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Ireland</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Irish PR (permanent residence) typically requires 5+ years of legal residence. Stamp 1G → employment permit → long-term residence. Citizenship: 5 years residence (or 3 years if Irish spouse); naturalisation process.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Verify at Irish Naturalisation and Immigration Service (INIS), irishimmigration.ie. Stamp 1G bridges to employment; secure job → Critical Skills or General Employment Permit → long-term stay.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Stamp 1G</td><td className="p-3">12–24 months post-study; work 40 hrs/week</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Employment permit</td><td className="p-3">Critical Skills or General; employer sponsorship</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">5+ years legal residence; naturalisation for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 11. Ireland vs UK */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Ireland vs UK – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both popular for Nepali students. Ireland offers lower tuition in many cases; UK has Graduate Route 2–3 years. Compare with <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link> for your profile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Ireland</th>
                  <th className="p-4 text-left">UK</th>
                </tr>
              </thead>
              <tbody>
                {irelandVsUK.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.ireland}</td>
                    <td className="p-4">{row.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Ireland FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Ireland from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={irelandData.faqs} />
          </div>
        </div>
      </section>

      {/* 13. Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Ireland Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Ireland for Nepali students 2026, Ireland student visa process, and Stamp 1G. Free consultation in Kathmandu—no obligation.
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
              Apply to Study in Ireland from Nepal
            </Link>
            <Link
              href="/study-abroad/eur/"
              className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all"
            >
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">
            Compare: <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/fr/" className="underline hover:text-white">France</Link> · <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link>
          </p>
          <p className="mt-4 text-xs text-blue-300">
            <Link href="/study-abroad/eur/" className="underline hover:text-white">All Europe destinations</Link> · <Link href="/consultation/" className="underline hover:text-white">Free consultation in Kathmandu</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 font-semibold hover:underline">Netherlands</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/fr/" className="text-blue-600 font-semibold hover:underline">France</Link>
            {' · '}
            <Link href="/study-abroad/eur/spain/" className="text-blue-600 font-semibold hover:underline">Spain</Link>
            {' · '}
            <Link href="/study-abroad/eur/italy/" className="text-blue-600 font-semibold hover:underline">Italy</Link>
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
