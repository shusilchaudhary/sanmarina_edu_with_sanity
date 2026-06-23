import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ChevronRight,
  Building2,
  Briefcase,
  Award,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Norway from Nepal 2026 | Cost, Visa & Tuition Guide',
  description: 'Study in Norway from Nepal 2026: tuition NOK 80k–400k/year (non-EU from 2023), living NOK 12k–18k/mo. Oslo, Bergen, Trondheim. Work 20 hrs/week. 1-year post-study. Free consultation.',
  keywords: 'study in norway, study in norway from nepal, cost to study in norway, study in norway for international students, study in norway from nepal requirements, study in norway masters, study in norway in english bachelor, study in norway requirements, how much does it cost to study in norway, norway student visa process for nepali students, tuition fees in norway for nepali students 2026, living cost in norway for students from nepal, post study work visa in norway for nepali students, cheapest universities in norway for international students, study masters in norway for nepali students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/norway/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/norway/',
    title: 'Study in Norway from Nepal 2026 | Cost, Visa & Tuition Guide',
    description: 'Complete 2026 guide: study in Norway, tuition policy (non-EU from 2023), living costs, residence permit. Oslo, Bergen, Trondheim. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Norway from Nepal 2026',
    description: 'Study in Norway: tuition policy, cost, visa, 1-year post-study permit. Free consultation in Kathmandu.',
  },
};

// Data from studyinnorway.no, udi.no (Norwegian Directorate of Immigration), Norwegian Ministry of Education, VFS Global Nepal, University of Bergen, Nord, NMBU. 1 NOK ≈ 10.5 NPR (Feb 2026)
const norwayData = {
  country: 'Norway',
  slug: 'norway',
  heroImage: '/assets/norway.webp',
  lastUpdated: 'February 2026',
  description: 'Norway hosts 28,000+ international students. From autumn 2023, non-EU/EEA students pay tuition at public universities (NOK 80,000–400,000/year). Living NOK 12,000–18,000/month. Work 20 hrs/week during term; full-time holidays. 1-year post-study permit to seek employment. Oslo, Bergen, Trondheim.',
  stats: {
    universities: '50+',
    internationalStudents: '28,000+',
    englishPrograms: '350+',
    postStudy: '1 year',
    studentsPlaced: '800+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    min: 80000,
    max: 400000,
    residenceFee: 1100,
    proofOfFunds: 166859,
    proofOfFundsMonthly: 15169,
  },
  livingCost: {
    oslo: { min: 14000, max: 18000 },
    bergen: { min: 13000, max: 16000 },
    trondheim: { min: 12000, max: 15000 },
    smaller: { min: 12000, max: 14000 },
  },
  workRules: 'Up to 20 hours per week during term; full-time during ordinary holidays (summer, Christmas, Easter). Cannot start working until residence permit is granted. Cannot be self-employed. Source: udi.no.',
  postStudy: { duration: 12, note: 'Residence permit to seek employment: up to 1 year for bachelor/master; 2 years for PhD. Apply within 6 months of completing studies. Full-time work allowed. Must have valid student permit when applying. Source: udi.no.' },
  visaLocation: 'Apply online via UDI (udi.no). Nepali students submit via VFS Global in Kathmandu. Norwegian Embassy in New Delhi processes applications; biometrics and documents at VFS Kathmandu.',
  visaProcessing: 'Application fee NOK 1,100. UDI proof of funds: NOK 166,859/year (NOK 15,169/month). Processing varies; allow 2–3 months. Apply after admission.',
  intakeMonths: 'Autumn: August (main intake); Spring: January (fewer programmes)',
  deadlines: 'No central application portal. Each university sets deadlines. Typically November–January for autumn. Non-EU/EEA often earlier. Check studyinnorway.no and individual university websites.',
  requirements: [
    'Valid passport (min 3 months beyond stay)',
    'Admission letter from accredited Norwegian institution',
    'Proof of funds: NOK 166,859/year (UDI requirement)',
    'Proof of tuition payment (if applicable)',
    'Health/travel insurance',
    'Police clearance certificate (if required)',
    'Housing documentation',
  ],
  residenceSteps: [
    'Apply to Norwegian universities (each has own portal; check studyinnorway.no)',
    'Receive admission offer and pay tuition if required (non-EU from autumn 2023)',
    'Apply for residence permit online at udi.no',
    'Register application, pay fee NOK 1,100',
    'Upload documents: passport, admission, proof of funds, tuition payment, insurance',
    'Book appointment at VFS Global Kathmandu for biometrics',
    'Submit application; await UDI decision (2–3 months typical)',
    'Collect residence permit; travel to Norway',
  ],
  residenceStepsWithText: [
    { name: 'Apply to Norwegian universities (each has own portal; check studyinnorway.no)', text: 'No central portal. Each university sets deadlines. Typically November–January for autumn intake. Non-EU often earlier.' },
    { name: 'Receive admission offer and pay tuition if required (non-EU from autumn 2023)', text: 'Non-EU tuition NOK 80,000–400,000/year. Proof of funds NOK 166,859/year required by UDI.' },
    { name: 'Apply for residence permit online at udi.no', text: 'Register application; fee NOK 1,100. Norwegian Embassy New Delhi processes; Nepali students submit via VFS Kathmandu.' },
    { name: 'Upload documents: passport, admission, proof of funds, tuition payment, insurance', text: 'Health/travel insurance required. Police clearance may be required. Housing documentation helps.' },
    { name: 'Book appointment at VFS Global Kathmandu for biometrics', text: 'No need to travel to India. Apply and submit biometrics in Kathmandu. Documents sent to UDI.' },
    { name: 'Submit application; await UDI decision (2–3 months typical)', text: 'Apply after admission. Processing varies; allow 2–3 months before programme start.' },
    { name: 'Collect residence permit; travel to Norway', text: 'Work 20 hrs/week during term; full-time holidays. 1-year post-study permit to seek employment.' },
  ],
  faqs: [
    {
      question: 'What is study in Norway for international students?',
      answer: 'Study in Norway for international students: 50+ institutions, 350+ English programmes. From autumn 2023, non-EU students pay tuition NOK 80,000–400,000/year at public universities. Living NOK 12,000–18,000/month. Oslo, Bergen, Trondheim. Work 20 hrs/week during term; full-time holidays. 1-year post-study permit. Apply per university. Source: studyinnorway.no, udi.no.',
    },
    {
      question: 'What is the Norway student visa process for Nepali students?',
      answer: 'Norway student visa process for Nepali students: Apply for residence permit online at udi.no. Submit documents and biometrics at VFS Global Kathmandu. Required: admission letter, proof of funds NOK 166,859/year, tuition payment (if applicable), passport, insurance. Fee NOK 1,100. Processing 2–3 months. Norwegian Embassy New Delhi processes. Source: udi.no, norway.no/nepal.',
    },
    {
      question: 'What are tuition fees in Norway for Nepali students 2026?',
      answer: 'Tuition fees in Norway for Nepali students 2026: Non-EU students pay from autumn 2023. NOK 80,000–400,000/year depending on programme. Cheapest universities in Norway for international students: some humanities, social sciences. Medicine, design higher. EU/EEA/Swiss study free. PhD often free. 1 NOK ≈ 10.5 NPR (Feb 2026). Source: studyinnorway.no, nord.no, nmbu.no, uib.no.',
    },
    {
      question: 'What is the living cost in Norway for students from Nepal?',
      answer: 'Living cost in Norway for students from Nepal: UDI minimum NOK 15,169/month (NOK 166,859/year). Oslo NOK 14,000–18,000/month; Bergen NOK 13,000–16,000; Trondheim NOK 12,000–15,000. NPR: NOK 15,000/mo ≈ 1.58 lakhs. Norway is expensive; budget accordingly. Source: studyinnorway.no, udi.no.',
    },
    {
      question: 'How much does it cost to study in Norway from Nepal?',
      answer: 'Cost to study in Norway from Nepal: First year NOK 280,000–600,000+ (NPR 29–63 lakhs). Tuition NOK 80,000–400,000; living NOK 144,000–216,000/year; residence permit NOK 1,100; airfare ~NOK 15,000. Study in norway requirements include proof of funds. Source: studyinnorway.no.',
    },
    {
      question: 'Is study in Norway free for international students?',
      answer: 'Study in Norway for international students: EU/EEA/Swiss citizens study tuition-free at public universities. Non-EU students admitted from autumn 2023 onwards pay tuition. Policy change applies to new admissions. Exchange students and PhD often exempt. Source: studyinnorway.no, Norwegian Ministry of Education.',
    },
    {
      question: 'Can I study and work in Norway?',
      answer: 'Yes. Study and work in Norway: Up to 20 hours per week during term; full-time during holidays (summer, Christmas, Easter). Cannot work until residence permit granted. Cannot be self-employed. Norway is expensive—do not rely on part-time income for living costs. Source: udi.no, studyinnorway.no.',
    },
    {
      question: 'What is the post study work visa in Norway for Nepali students?',
      answer: 'Post study work visa in Norway for Nepali students: Residence permit to seek employment—up to 1 year (bachelor/master) or 2 years (PhD). Apply within 6 months of completing studies. Full-time work allowed. Must have valid student permit when applying. Source: udi.no.',
    },
    {
      question: 'What are study in norway from nepal requirements?',
      answer: 'Study in norway from nepal requirements: Admission to accredited Norwegian institution, proof of funds NOK 166,859/year, valid passport, health insurance, tuition payment (non-EU from 2023). Apply for residence permit at udi.no; submit at VFS Kathmandu. English proficiency (IELTS/TOEFL) per programme. Source: udi.no, studyinnorway.no.',
    },
    {
      question: 'Can I study masters in Norway for Nepali students?',
      answer: 'Study masters in Norway for Nepali students: 350+ English-taught programmes, most at master\'s level. Tuition NOK 80,000–400,000/year for non-EU. Apply per university; deadlines typically Nov–Jan for autumn. 1-year post-study permit. Oslo, Bergen, Trondheim, NTNU, University of Oslo, BI. Source: studyinnorway.no.',
    },
    {
      question: 'Can I study in Norway in English bachelor?',
      answer: 'Study in norway in english bachelor: Fewer English bachelor programmes than master\'s. Some available at University of Oslo, BI Norwegian Business School, Nord University. Check studyinnorway.no/study-opportunities. Tuition applies for non-EU from autumn 2023. Source: studyinnorway.no.',
    },
    {
      question: 'Where do Nepali students apply for Norway visa from Kathmandu?',
      answer: 'Nepali students apply for Norway residence permit online at udi.no. Submit documents and biometrics at VFS Global in Kathmandu. Norwegian Embassy in New Delhi processes applications. No need to travel to India—apply and collect in Kathmandu. Source: norway.no/nepal, vfsglobal.com.',
    },
    {
      question: 'What are the cheapest universities in Norway for international students?',
      answer: 'Cheapest universities in Norway for international students: Tuition NOK 80,000–400,000/year. Nord University, NMBU, University of Agder often at lower end. University of Bergen, Oslo, NTNU vary by programme. Check each university website. Source: studyinnorway.no, nord.no, nmbu.no.',
    },
    {
      question: 'Can Nepali students take dependents to Norway while studying?',
      answer: 'Yes. Nepali students on Norway residence permit can apply for family immigration for spouse/partner and children. Dependent must meet UDI requirements; sufficient funds for family. Apply at udi.no. Processing times vary. Source: udi.no.',
    },
    {
      question: 'What is the PR pathway for Nepali students after studying in Norway?',
      answer: 'PR pathway for Nepali students after Norway study: Work permit after graduation leads to permanent residence. Typically 3 years legal residence (including study + work) for PR eligibility; 7 years for citizenship. Post-study 1-year job search permit allows full-time work. Source: udi.no.',
    },
    {
      question: 'Do Norwegian universities accept GAP years for Nepali students?',
      answer: 'Norway GAP acceptance: Many Norwegian universities consider applications from applicants with study gaps. Assessment case-by-case. Strong motivation letter and recent academic/professional activity help. Check each programme at studyinnorway.no. Source: studyinnorway.no.',
    },
    {
      question: 'Are there scholarships for Nepali students to study in Norway?',
      answer: 'Scholarships for Nepali students Norway: Quota Scheme (developing countries) at some universities; Erasmus Mundus (EU-funded); university-specific grants. Limited compared to tuition-free era. Apply early. Does not cover full cost for most. Source: studyinnorway.no.',
    },
  ],
};

const tuitionTable = [
  { level: 'EU/EEA/Swiss', range: 'Free', notes: 'Tuition-free at public universities' },
  { level: 'Non-EU (from autumn 2023)', range: 'NOK 80,000–400,000/year', notes: 'Varies by university and programme' },
  { level: 'Humanities / Social sciences', range: 'NOK 80,000–200,000/year', notes: 'Often lower range' },
  { level: 'Engineering / Medicine / Design', range: 'NOK 200,000–400,000/year', notes: 'Higher range' },
  { level: 'Residence permit fee', range: 'NOK 1,100', notes: 'UDI application fee' },
];

const norwayVsFinland = [
  { aspect: 'Tuition (non-EU)', norway: 'NOK 80,000–400,000/year', finland: '€8,000–€20,000/year' },
  { aspect: 'Living (min)', norway: 'NOK 12,000–18,000/mo', finland: '€800–€1,200/mo' },
  { aspect: 'Work (term)', norway: '20 hrs/week', finland: '30 hrs/week' },
  { aspect: 'Post-study', norway: '1-year job search', finland: '2-year job search' },
  { aspect: 'Application', norway: 'Per university', finland: 'studyinfo.fi joint' },
  { aspect: 'Visa from Nepal', norway: 'VFS Kathmandu', finland: 'VFS Kathmandu' },
];

export default function NorwayStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Norway from Nepal 2026 – Complete Guide',
        description: norwayData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: norwayData.author.name, url: 'https://www.sanmarina.edu.np', description: norwayData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: norwayData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Norway Residence Permit from Nepal',
        description: 'Step-by-step: apply per university, pay tuition (non-EU from 2023), udi.no, VFS Kathmandu. Fee NOK 1,100. Processing 2–3 months. Per studyinnorway.no, udi.no 2026.',
        step: norwayData.residenceStepsWithText.map((s, i) => ({
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
        description: 'Best education consultancy in Nepal for Norway study abroad',
        knowsAbout: ['Study in Norway from Nepal', 'Norway residence permit', 'VFS Kathmandu Norway', 'udi.no', 'University of Oslo NTNU Bergen'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Norway', item: 'https://www.sanmarina.edu.np/study-abroad/eur/norway/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC & PIER certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Norway from Nepal.',
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
          <Image src={norwayData.heroImage} alt="Study in Norway from Nepal – Oslo Bergen Trondheim, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Norway</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {norwayData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Norway from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Tuition Policy Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Norway: tuition NOK 80k–400k/year for non-EU (from 2023). Living NOK 12k–18k/mo. Work 20 hrs/week. 1-year post-study. Oslo, Bergen, Trondheim. Study in Norway from Nepal consultancy support.
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Norway study experts. Study in Norway from Nepal consultancy—no obligation for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.studyinnorway.no" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinnorway.no</a>, <a href="https://www.udi.no" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">udi.no</a> (Norwegian Directorate of Immigration), Norwegian Ministry of Education, VFS Global Nepal.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {norwayData.author.name} · {norwayData.author.role} · {norwayData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Norway from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> From autumn 2023, non-EU students pay tuition NOK 80,000–400,000/year. Living NOK 12,000–18,000/mo (UDI min NOK 166,859/year). Residence permit via udi.no; VFS Kathmandu for biometrics. Work 20 hrs/week term; full-time holidays. 1‑year post-study permit. <a href="https://www.studyinnorway.no" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinnorway.no</a>, <a href="https://www.udi.no" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">udi.no</a>, <a href="https://www.vfsglobal.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">VFS Global Nepal</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">NOK 80,000–400,000/year (non-EU from autumn 2023); EU/EEA free</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">NOK 166,859/year (NOK 15,169/month) UDI requirement</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Residence permit</td><td className="p-3">udi.no online; VFS Kathmandu for biometrics; fee NOK 1,100</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week term; full-time during holidays</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">1-year permit to seek employment (2 years for PhD)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">2–3 months</td></tr>
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
              { value: norwayData.stats.universities, label: 'Universities' },
              { value: norwayData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: norwayData.stats.englishPrograms, label: 'English Programmes' },
              { value: norwayData.stats.postStudy, label: 'Post-Study Permit' },
              { value: norwayData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition Policy */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-amber-50 border border-amber-100">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Norway Tuition Policy: Free vs Tuition-Based (2023 Update)</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> EU/EEA/Swiss citizens study tuition-free at Norwegian public universities. Non-EU/EEA students admitted from autumn 2023 onwards pay tuition. Policy applies to new admissions; exchange students and some PhD programmes often exempt.
        </p>
        <p className="text-gray-700 mb-4">
          How much does it cost to study in norway? For Nepali students (non-EU), tuition fees in Norway for Nepali students 2026 range NOK 80,000–400,000/year depending on university and programme. Cheapest universities in Norway for international students: Nord, NMBU, some humanities. Medicine, design higher. Norwegian Ministry of Education introduced fees to fund quality and capacity. Source: studyinnorway.no.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>EU/EEA/Swiss:</strong> Tuition-free at public universities</li>
          <li>• <strong>Non-EU (from autumn 2023):</strong> Pay tuition; varies by institution</li>
          <li>• <strong>Exchange students:</strong> Often exempt</li>
          <li>• <strong>PhD:</strong> Often advertised as paid positions; check jobbnorge.no</li>
        </ul>
      </section>

      {/* Academic Requirements */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Norway from Nepal Requirements: GPA, IELTS & Documents</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Master's programmes typically require GPA 2.8–3.0 (or equivalent); Bachelor's requires completed 10+2. English proficiency IELTS 6.0–6.5 or TOEFL 80+. Check each programme at studyinnorway.no.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Bachelor:</strong> Completed 10+2 (or equivalent); programme-specific subjects</li>
          <li>• <strong>Master's:</strong> Recognised bachelor's; GPA 2.8–3.0 common (varies by university)</li>
          <li>• <strong>English:</strong> IELTS 6.0–6.5 or TOEFL 80+; some programmes accept Cambridge, PTE</li>
          <li>• <strong>GAP years:</strong> Many universities consider applicants with gaps; strong motivation letter helps</li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">Source: studyinnorway.no. Requirements vary by programme—verify with each university.</p>
      </section>

      {/* Why Study in Norway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Norway for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Norway offers 350+ English programmes, strong research, work 20 hrs/week, 1-year post-study permit, and visa submission from Kathmandu via VFS. Oslo, Bergen, Trondheim. Compare with <Link href="/study-abroad/eur/finland/" className="text-blue-600 hover:underline">Finland</Link>, <Link href="/study-abroad/eur/sweden/" className="text-blue-600 hover:underline">Sweden</Link>, <Link href="/study-abroad/eur/denmark/" className="text-blue-600 hover:underline">Denmark</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Norway for international students attracts those seeking Nordic quality and outdoor lifestyle. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Norway for engineering, business, marine studies, and sustainability. Study in norway from nepal requirements include admission, proof of funds, and residence permit via UDI and VFS Kathmandu.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Norway?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Cost to study in Norway from Nepal: First year NOK 280,000–600,000+ (NPR 29–63 lakhs). Tuition NOK 80,000–400,000 for non-EU; living NOK 12,000–18,000/month. UDI requires NOK 166,859/year proof of funds. 1 NOK ≈ 10.5 NPR (Feb 2026).
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">First-Year Cost Breakdown (Nepali Students, Non-EU)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">NOK</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tuition (non-EU)</td><td className="p-3">80,000–400,000</td><td className="p-3">8.4–42L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">144,000–216,000</td><td className="p-3">15.1–22.7L</td></tr>
                <tr className="border-b"><td className="p-3">Residence permit</td><td className="p-3">1,100</td><td className="p-3">~12,000</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~15,000</td><td className="p-3">1.6L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">280,000–600,000+</td><td className="p-3 font-medium">29–63L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Norway for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Norway for Students from Nepal – Accommodation by City</h3>
          <p className="text-gray-700 mb-4">
            UDI minimum NOK 15,169/month (NOK 166,859/year). Norway is one of the most expensive countries; budget accordingly.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Oslo</td><td className="p-3">NOK 14,000–18,000</td><td className="p-3">Capital; University of Oslo, BI; NPR 1.47–1.89L</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Bergen</td><td className="p-3">NOK 13,000–16,000</td><td className="p-3">University of Bergen; NPR 1.37–1.68L</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Trondheim</td><td className="p-3">NOK 12,000–15,000</td><td className="p-3">NTNU; NPR 1.26–1.58L</td></tr>
                <tr><td className="p-3 font-medium">Bodø, Tromsø, smaller</td><td className="p-3">NOK 12,000–14,000</td><td className="p-3">Nord, University of Tromsø; most affordable</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Source: studyinnorway.no, udi.no.</p>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarships for Nepali Students to Study in Norway
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Scholarships for Nepali students Norway: Quota Scheme (developing countries) at some universities; Erasmus Mundus (EU-funded joint programmes); university-specific grants. Limited compared to pre-2023 tuition-free era. Apply early; does not cover full cost for most students.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Quota Scheme:</strong> Some universities offer places for students from developing countries</li>
            <li>• <strong>Erasmus Mundus:</strong> EU-funded joint master's programmes; check ec.europa.eu</li>
            <li>• <strong>University-specific:</strong> Grants and partial waivers; apply with admission</li>
            <li>• Does not cover full tuition + living for most; budget accordingly</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>. Source: studyinnorway.no.</p>
        </div>
      </section>

      {/* Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Study and Work in Norway?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Study and work in Norway: Up to 20 hours per week during term; full-time during ordinary holidays (summer, Christmas, Easter). Cannot work until residence permit granted. Cannot be self-employed. Norway is expensive—do not rely on part-time income for living costs.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 20 hrs/week during term</li>
            <li>• Full-time during holidays</li>
            <li>• Cannot start until permit granted</li>
            <li>• No self-employment</li>
          </ul>
        </div>
      </section>

      {/* Post-Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Work Visa in Norway for Nepali Students</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Post study work visa in norway for nepali students: Residence permit to seek employment—up to 1 year (bachelor/master) or 2 years (PhD). Apply within 6 months of completing studies. Full-time work allowed. Must have valid student permit when applying.
        </p>
        <p className="text-gray-700 mb-4">
          Apply at udi.no. Once employed, apply for work-based residence permit. Source: udi.no.
        </p>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">PR Pathway After Studying in Norway</h3>
        <p className="text-gray-700 mb-4">
          <strong>PR pathway for Nepali students:</strong> Legal residence in Norway (including study + work) typically counts toward permanent residence. After 3 years of legal residence (work permit period), you may be eligible for permanent residence. Citizenship: 7 years legal residence, including language and civics requirements. Post-study 1-year job search permit allows full-time work; once employed, apply for work-based residence permit. Source: udi.no.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Post-study (1 year bachelor/master)</td><td className="p-3">Job search; can work full-time during</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Work residence</td><td className="p-3">Employment permit</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">3 years for PR; 7 years for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Norway for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> IT & Computer Science, Business & Management, Engineering, Marine & Fisheries, Health & Social Sciences, Sustainability & Environment. Norway excels in marine studies, oil & gas, renewable energy, and Arctic research.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>IT & Computer Science:</strong> NTNU, Oslo, Bergen—software, data science, AI</li>
          <li>• <strong>Business & Management:</strong> BI Norwegian Business School—MBA, finance, innovation</li>
          <li>• <strong>Engineering:</strong> NTNU, Oslo—petroleum, marine, mechanical, civil</li>
          <li>• <strong>Marine & Fisheries:</strong> Nord University, University of Bergen—aquaculture, marine biology</li>
          <li>• <strong>Health & Social Sciences:</strong> Oslo, Bergen, Tromsø—nursing, public health, psychology</li>
        </ul>
      </section>

      {/* GAP & Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-slate-50">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">GAP Years & Dependents for Nepal Students in Norway</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP acceptance:</strong> Many Norwegian universities consider applicants with study gaps. Assessment is case-by-case. A strong motivation letter and evidence of recent academic or professional activity help. Check each programme at <a href="https://www.studyinnorway.no" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinnorway.no</a>.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Dependents:</strong> Nepali students on Norway residence permit can apply for family immigration for spouse/partner and children. UDI requires proof of sufficient funds for dependents. Processing times vary. Apply at udi.no. Source: udi.no.
        </p>
      </section>

      {/* Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Autumn: August (main intake). Spring: January (fewer programmes). No central portal—each university sets deadlines. Typically November–January for autumn. Non-EU/EEA often earlier.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Autumn 2026:</strong> Apply Nov 2025–Jan 2026 (check each university)</li>
            <li>• <strong>Spring 2027:</strong> Fewer programmes; deadlines vary</li>
            <li>• <strong>Residence permit:</strong> Apply after admission; allow 2–3 months</li>
            <li>• <strong>Proof of funds:</strong> NOK 166,859/year required by UDI</li>
          </ul>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Norway</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Oslo, NTNU, University of Bergen, BI Norwegian Business School, University of Tromsø, Nord University. Cheapest universities in Norway for international students: Nord, NMBU, University of Agder. Check studyinnorway.no for programme finder.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Oslo', city: 'Oslo', programs: 'All disciplines' },
            { name: 'NTNU', city: 'Trondheim', programs: 'Engineering, tech' },
            { name: 'University of Bergen', city: 'Bergen', programs: 'Research, marine' },
            { name: 'BI Norwegian Business School', city: 'Oslo', programs: 'Business' },
            { name: 'University of Tromsø', city: 'Tromsø', programs: 'Arctic studies' },
            { name: 'Nord University', city: 'Bodø, etc.', programs: 'Marine, business' },
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
            Get expert guidance on study in Norway from Nepal. Our study in Norway from Nepal consultancy helps with university selection, residence permit via UDI and VFS Kathmandu, and post-study work planning. 800+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Norway from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* Residence Permit Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Norway Student Visa Process for Nepali Students (Residence Permit)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Norway student visa process for nepali students: Apply online at udi.no. Submit documents and biometrics at VFS Global Kathmandu. Required: admission letter, proof of funds NOK 166,859/year, tuition payment (if applicable), passport, insurance. Fee NOK 1,100. Processing 2–3 months.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Norway visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>VFS Global in Kathmandu.</strong> Apply online via udi.no; book appointment at VFS for biometrics and document submission. Norwegian Embassy in New Delhi processes applications. No need to travel to India. Source: norway.no/nepal, vfsglobal.com.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Residence Permit Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {norwayData.residenceStepsWithText.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <div><span className="font-medium text-gray-800">{step.name}</span><span className="text-gray-600 text-sm block mt-0.5">{step.text}</span></div>
            </li>
          ))}
        </ol>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-2">Common Residence Permit Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
          <li>Applying before receiving admission letter</li>
          <li>Insufficient proof of funds (UDI requires NOK 166,859/year)</li>
          <li>Missing health/travel insurance documentation</li>
          <li>Not booking VFS appointment in time—allow 2–3 months before programme start</li>
          <li>Passport validity less than 3 months beyond intended stay</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {norwayData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Norway?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection via studyinnorway.no, residence permit support via UDI and VFS Kathmandu, and post-study work planning. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Norway from Nepal requirements—including proof of funds NOK 166,859/year and tuition payment (non-EU from 2023).
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Lalitpur, Pokhara, and across Nepal rely on us for study in Norway from Nepal guidance. Free first consultation—no obligation.
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

      {/* Norway vs Finland */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Norway vs Finland – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both Nordic destinations for Nepali students. Norway: 1-year post-study, per-university application. Finland: 2-year post-study, joint application. Compare with <Link href="/study-abroad/eur/finland/" className="text-blue-600 hover:underline">Finland</Link>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Norway</th>
                  <th className="p-4 text-left">Finland</th>
                </tr>
              </thead>
              <tbody>
                {norwayVsFinland.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.norway}</td>
                    <td className="p-4">{row.finland}</td>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Norway FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Norway from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={norwayData.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Norway Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Norway for Nepali students 2026, Norway student visa process, and study in norway requirements. Free consultation in Kathmandu—no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all cta-button">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button">
              Apply to Study in Norway from Nepal
            </Link>
            <Link href="/study-abroad/eur/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button-secondary">
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">
            Compare: <Link href="/study-abroad/eur/finland/" className="underline hover:text-white">Finland</Link> · <Link href="/study-abroad/eur/sweden/" className="underline hover:text-white">Sweden</Link> · <Link href="/study-abroad/eur/denmark/" className="underline hover:text-white">Denmark</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/hungary/" className="underline hover:text-white">Hungary</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/belgium/" className="underline hover:text-white">Belgium</Link> · <Link href="/study-abroad/romania/" className="underline hover:text-white">Romania</Link> · <Link href="/study-abroad/ireland/" className="underline hover:text-white">Ireland</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link>
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
