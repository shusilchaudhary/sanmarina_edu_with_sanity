import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  Phone,
  ChevronRight,
  Building2,
  Award,
  Briefcase,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Poland from Nepal 2026 | Cost, Visa & Work Rules',
  description: 'Study in Poland from Nepal 2026: tuition €2,000–18,000, proof ~€500/mo, Polish Honorary Consulate Kathmandu. 9-month post-study permit, NAWA PLN 2,000/mo. Free consultation Kathmandu.',
  keywords: 'study in poland, study in poland from nepal, study in poland requirements, cost of studying in poland, study and work in poland, study in poland for nepali students, study in poland without ielts, study in poland consultancy in nepal, study in poland for international students, study in poland university, study in poland for free, Poland student visa Nepal, NAWA Poland, Polish embassy Kathmandu, proof of funds Poland Nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/poland/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/poland/',
    title: 'Study in Poland from Nepal 2026 | Cost, Visa & Work',
    description: 'Complete 2026 guide: study in Poland, tuition, living costs, work rules, post-study permit. Compare with Germany, Spain, Italy, Netherlands.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Poland from Nepal 2026',
    description: 'Study in Poland: cost, visa, work rules, NAWA scholarships. Free consultation in Kathmandu.',
  },
};

// Data: NAWA, Polish Ministry of Education, embassy visa portals, university sites. 1 EUR ≈ 143 NPR (Feb 2026)
const polandData = {
  country: 'Poland',
  slug: 'poland',
  heroImage: '/assets/europe.jpg',
  lastUpdated: 'February 2026',
  description: 'Poland hosts 86,000+ international students. Non-EU tuition €2,000–€18,000/year; living €500–€900/month. Work 20 hrs/week during term, full-time in breaks. 9-month post-study job-search permit. NAWA scholarships from PLN 2,000/month (2026).',
  stats: {
    universities: '400+',
    internationalStudents: '86,000+',
    englishPrograms: '800+',
    postStudy: '9 months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: { eu: { min: 1500, max: 3600 }, nonEu: { min: 2000, max: 18000 }, nprMin: 286000, nprMax: 2574000 },
  proofOfFunds: { monthly: 500, nprPerMonth: 71500 },
  livingCost: { krakow: { min: 500, max: 900 }, warsaw: { min: 600, max: 1000 }, rentKrakow: { min: 200, max: 400 } },
  workHours: '20 hrs/week during term; full-time in breaks',
  postStudy: { duration: 9, note: 'Job-search permit; graduates exempt from work permit' },
  requirements: [
    'Admission letter from Polish university',
    'Valid passport (3+ months beyond stay)',
    'Proof of funds: ~€500/month minimum (tuition + living)',
    'Health insurance valid in Poland',
    'IELTS 6.0–6.5 or TOEFL/Cambridge/prior English-medium proof',
  ],
  visaSteps: [
    'Apply to Polish universities (deadlines vary; many accept rolling)',
    'Receive admission and pay tuition deposit',
    'Gather proof of funds: bank statements or sponsorship (6 months recommended)',
    'Book appointment at Polish Honorary Consulate, Kathmandu (Dhobighat, Lalitpur)',
    'Submit national visa D application with passport, photos, health insurance',
    'Processing typically up to 15 working days',
    'Collect visa and travel to Poland',
  ],
  faqs: [
    {
      question: 'What are study in Poland requirements for Nepali students in 2026?',
      answer: 'Admission letter, passport, proof of funds (~€500/month minimum for living plus tuition), health insurance. IELTS 6.0–6.5 or TOEFL/Cambridge/prior English-medium. Academic: 10+2 for Bachelor; Bachelor for Master.',
    },
    {
      question: 'What is the cost of studying in Poland from Nepal?',
      answer: 'First year: €8,000–€25,000 (NPR 11–36 lakhs). Tuition €2,000–€18,000/year; living €500–€900/month. Krakow more affordable than Warsaw. 1 EUR ≈ 143 NPR. NAWA scholarships reduce cost.',
    },
    {
      question: 'Can I study and work in Poland as a Nepali student?',
      answer: 'Yes. Full-time students: no work permit needed. Work ~20 hrs/week during term; full-time during breaks. Graduates exempt from work permit when employed. 9-month job-search permit after graduation.',
    },
    {
      question: 'Can I study in Poland without IELTS?',
      answer: 'Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Check programme pages. IELTS 6.0–6.5 typical for English programmes. See our IELTS/test prep services.',
    },
    {
      question: 'What scholarships are available for study in Poland?',
      answer: 'NAWA: Stefan Banach, Poland My First Choice (PLN 2,000/month from 2026). Erasmus+ for mobility. University-specific merit grants. Check NAWA and our scholarships page.',
    },
    {
      question: 'What is the Poland student visa process from Nepal?',
      answer: 'Apply to university → receive admission → gather proof of funds → apply for national visa D at Polish embassy/consulate. Processing typically up to 15 days. Collect visa and travel.',
    },
    {
      question: 'How much proof of funds do I need for Poland student visa?',
      answer: 'Minimum ~€500/month for living; add tuition for first year. Total varies by programme. Funds in account 3+ months recommended. NPR equivalent ~7.2 lakhs/year for living alone (€500×12).',
    },
    {
      question: 'What is the post-study work option in Poland?',
      answer: '9-month job-search permit for graduates. During this period you can work without a separate work permit. Once employed, graduates are exempt from work permit. Apply before student residence expires.',
    },
    {
      question: 'Is study in Poland good for Nepali students?',
      answer: 'Yes. Affordable tuition vs Western Europe, 800+ English programmes, work 20 hrs/week, post-study pathway. Krakow and Warsaw popular. Compare with Germany, Netherlands, Italy for fit.',
    },
    {
      question: 'Is study in Poland consultancy in Nepal helpful?',
      answer: 'Yes. Consultancy assists with university selection, proof of funds, document prep, NAWA scholarship guidance. San Marina: free consultation in Kathmandu. 15+ years guiding Nepali students to Europe.',
    },
    {
      question: 'Study in Poland for free – is it possible?',
      answer: 'EU citizens may study for free or low fees. Non-EU: tuition €2,000–€18,000. NAWA and Erasmus reduce cost but do not cover full tuition. Study in Poland for free is not typical for Nepali students.',
    },
    {
      question: 'Which Poland universities accept Nepali students?',
      answer: 'University of Warsaw, Jagiellonian University (Krakow), Warsaw University of Technology, AGH Krakow, Poznań University. 800+ English programmes. Check NAWA Study in Poland portal.',
    },
    {
      question: 'Where do Nepali students apply for Poland student visa?',
      answer: 'Polish Honorary Consulate in Kathmandu (Business Plaza, Dhobighat, Lalitpur). Book appointment for national visa D. Processing ~15 working days. Bring passport, photos, proof of funds, health insurance, admission letter.',
    },
    {
      question: 'When are Poland intakes and application deadlines?',
      answer: 'Two intakes: September (main) and February. Deadlines vary—typically May–July for Sept, Nov–Jan for Feb. Many universities accept rolling applications. Visa ~15 days. Apply 2–3 months before course start.',
    },
    {
      question: 'Can Nepali students bring dependents (spouse/children) to Poland?',
      answer: 'Yes. Spouses and children can apply for a temporary residence permit as family of a student. Each dependent submits a separate application. Proof of sufficient funds to support the family is required. Consult Polish immigration rules for current criteria.',
    },
    {
      question: 'What is the PR and citizenship pathway after studying in Poland?',
      answer: 'Five years of continuous legal residence (including student years) can qualify for permanent residence (PR). After PR, typically 3 years and Polish language proficiency for citizenship. Rules may change; verify with Urząd do Spraw Cudzoziemców (UDSC).',
    },
    {
      question: 'Do Polish universities accept GAP (study gap) for Nepali students?',
      answer: 'Yes. Many Polish universities accept gaps of 3–5 years for Bachelor if explained (e.g. work, family). For Master, longer gaps often acceptable with relevant work experience. Provide a clear gap explanation in your application.',
    },
  ],
};

const tuitionTable = [
  { level: 'EU/EEA', range: '€1,500–€3,600/year or free', notes: 'Some programmes' },
  { level: 'Bachelor (Non-EU)', range: '€2,000–€12,000/year', notes: 'Varies by university and field' },
  { level: 'Master (Non-EU)', range: '€2,000–€18,000/year', notes: 'MBA/specialised higher' },
];

const comparisonData = [
  { country: 'Poland', countrySlug: null, tuition: '€2,000–€18,000', living: '€500–€900/mo', work: '20 hrs or full-time breaks', psw: '9 months' },
  { country: 'Germany', countrySlug: '/study-abroad/eur/germany/', tuition: '€0 (most)', living: '€11,904/year', work: '20 hrs/week', psw: '18 months' },
  { country: 'Netherlands', countrySlug: '/study-abroad/eur/netherlands/', tuition: '€6,000–€20,000', living: '€1,000–€1,700/mo', work: '16 hrs or Jun–Aug', psw: '12 months' },
  { country: 'Spain', countrySlug: '/study-abroad/eur/spain/', tuition: '€2,700–€9,300', living: '€800–€1,200/mo', work: '30 hrs/week', psw: '—' },
  { country: 'Italy', countrySlug: '/study-abroad/eur/italy/', tuition: '€1,000–€5,000', living: '€800–€1,500/mo', work: '20 hrs/week', psw: '—' },
];

export default function PolandStudyPage() {
  const visaStepsWithText = [
    { name: 'Apply to Polish universities (deadlines vary; many accept rolling)', text: 'Feb/Sept intakes; check Study in Poland portal.' },
    { name: 'Receive admission and pay tuition deposit', text: 'Secure offer and pay first installment.' },
    { name: 'Gather proof of funds: bank statements or sponsorship (6 months recommended)', text: '~€500/month living + tuition.' },
    { name: 'Book appointment at Polish Honorary Consulate, Kathmandu (Dhobighat, Lalitpur)', text: 'Business Plaza, Dhobighat; national visa D.' },
    { name: 'Submit national visa D application with passport, photos, health insurance', text: 'Processing typically up to 15 working days.' },
    { name: 'Processing typically up to 15 working days', text: 'Faster than many EU countries; collect when ready.' },
    { name: 'Collect visa and travel to Poland', text: 'Register at university and local office upon arrival.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Poland from Nepal 2026 – Complete Guide',
        description: polandData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: polandData.author.name, url: 'https://www.sanmarina.edu.np', description: polandData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Poland study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Poland from Nepal', 'NAWA', 'Polish Honorary Consulate Kathmandu', 'Study in Poland without IELTS', 'Study and work in Poland'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Poland Student Visa from Nepal',
        description: 'Step-by-step: apply to university, proof ~€500/month + tuition, Polish Honorary Consulate Kathmandu (Dhobighat). National visa D, ~15 days. Per NAWA, Study in Poland 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: polandData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 4, name: 'Poland', item: 'https://www.sanmarina.edu.np/study-abroad/eur/poland/' },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={polandData.heroImage} alt="Nepali students studying in Poland - Krakow Warsaw, study abroad 2026" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-24 py-20">
          <nav className="text-sm text-blue-200 mb-6 pt-20">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/eur/" className="hover:text-white">Europe</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Poland</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {polandData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex items-center">
            Study in Poland <Image src='/assets/poland.png' width={100} height={100} alt="poland flag" />
            <br />
          </h1>
          
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Poland study experts. No obligation—perfect for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: NAWA, Polish Ministry of Education.</strong> Tuition €2,000–€18,000; proof ~€500/mo. Verify at <a href="https://www.nawa.gov.pl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nawa.gov.pl</a>, <a href="https://www.studyinpoland.pl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinpoland.pl</a>, <a href="https://www.gov.pl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">gov.pl</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {polandData.author.name} · {polandData.author.role} · {polandData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Poland from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition (non-EU)</td><td className="p-3">€2,000–€18,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living proof</td><td className="p-3">~€500/month minimum + tuition</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">NAWA 2026</td><td className="p-3">PLN 2,000/month (Stefan Banach, Poland My First Choice)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">National D; Polish Honorary Consulate Kathmandu; ~15 days</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week or full-time breaks; no permit for students</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">9 months job-search permit</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">English programmes</td><td className="p-3">800+ (Study in Poland)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: NAWA, Polish Ministry of Education. Verify at <a href="https://www.nawa.gov.pl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nawa.gov.pl</a>, <a href="https://www.studyinpoland.pl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinpoland.pl</a>, <a href="https://www.gov.pl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">gov.pl</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: polandData.stats.universities, label: 'Universities' },
              { value: polandData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: polandData.stats.englishPrograms, label: 'English Programmes' },
              { value: polandData.stats.postStudy, label: 'Post-Study Permit' },
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

      {/* 1. Why Study in Poland */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Poland in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Affordable tuition vs Western Europe, 800+ English programmes, work 20 hrs/week, 9-month post-study permit. Jagiellonian, University of Warsaw, Warsaw University of Technology. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, or <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Cost of studying in Poland is lower than Netherlands or UK. Nepali students choose Poland for engineering, <Link href="/scholarships/mbbs-for-nepali-students/" className="text-blue-600 hover:underline">medicine scholarships</Link>, and business. NAWA and <Link href="/scholarships/" className="text-blue-600 hover:underline">Erasmus scholarships</Link> are available for international students aiming for the 2026 intake.
        </p>
      </section>

      {/* 2. Cost of Studying in Poland – Dedicated Section */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Cost of Studying in Poland</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> First year €8,000–€25,000 (NPR 11–36 lakhs). Tuition €2,000–€18,000/year; living €500–€900/month. Krakow more affordable than Warsaw. 1 EUR ≈ 143 NPR. NAWA scholarships reduce cost. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, or <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
          </p>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            <strong>Definition:</strong> The cost of studying in Poland for Nepali students includes tuition (€2,000–€18,000/year), living expenses (€500–€900/month), health insurance, and airfare. It is lower than Netherlands, UK, or Australia.
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
                <tr className="border-b"><td className="p-3">Tuition (Bachelor)</td><td className="p-3">€2,000–€12,000</td><td className="p-3">2.9–17.2L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (Master)</td><td className="p-3">€2,000–€18,000</td><td className="p-3">2.9–25.7L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€6,000–€10,800</td><td className="p-3">8.6–15.4L</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€700</td><td className="p-3">1.0L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€8,000–€25,000</td><td className="p-3 font-medium">11–36L</td></tr>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Accommodation for Nepali Students</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City / Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">Krakow (shared)</td><td className="p-3">€200–400</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Warsaw (shared)</td><td className="p-3">€250–500</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Poznań, Wrocław</td><td className="p-3">€200–400</td></tr>
                <tr><td className="p-3">Student dormitory</td><td className="p-3">€150–350</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Proof of Funds for Poland Student Visa from Nepal</h3>
          <p className="text-gray-700 mb-4">
            <strong>Poland requires ~€500/month minimum for living plus tuition for first year.</strong> Polish Honorary Consulate in Kathmandu may request 6-month bank statements. For Nepali students: NPR ~7.2 lakhs/year for living alone (€500×12); add tuition €2,000–€18,000. Total first-year proof: NPR 11–36 lakhs typical. Funds in account 3–6 months recommended. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, or <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <DollarSign className="text-[#0056b3] mb-2" size={24} />
              <p className="font-bold">Living Minimum</p>
              <p className="text-lg font-bold">~€500/month</p>
              <p className="text-sm text-gray-600">NPR ~71,500</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <GraduationCap className="text-green-600 mb-2" size={24} />
              <p className="font-bold">Tuition (Non-EU)</p>
              <p className="text-lg font-bold">€2,000–€18,000</p>
              <p className="text-sm text-gray-600">NPR 2.9–25.7L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Award className="text-amber-600 mb-2" size={24} />
              <p className="font-bold">NAWA (2026)</p>
              <p className="text-lg font-bold">PLN 2,000/mo</p>
              <p className="text-sm text-gray-600">~€460/month</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Building2 className="text-cyan-600 mb-2" size={24} />
              <p className="font-bold">Krakow Living</p>
              <p className="text-lg font-bold">€500–€900/mo</p>
              <p className="text-sm text-gray-600">More affordable</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mt-8 mb-4">Living Cost by City</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Krakow (More affordable)</p>
              <p className="text-lg font-bold">€500–€900/mo</p>
              <p className="text-sm text-gray-600">NPR 0.7–1.3L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Warsaw</p>
              <p className="text-lg font-bold">€600–€1,000/mo</p>
              <p className="text-sm text-gray-600">NPR 0.9–1.4L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Poznań, Wrocław</p>
              <p className="text-lg font-bold">€500–€800/mo</p>
              <p className="text-sm text-gray-600">NPR 0.7–1.1L</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Study and Work in Poland – Dedicated Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Study and Work in Poland
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Full-time students do not need a work permit. Work ~20 hrs/week during the academic term; full-time during breaks (winter, summer). Graduates are exempt from work permit when employed. 9-month job-search permit after graduation.
          </p>
          <p className="text-gray-600 text-sm mb-4 max-w-3xl">
            <strong>Definition:</strong> Study and work in Poland means Nepali students can work part-time (~20 hrs/week) during term and full-time in breaks without a work permit. After graduation, a 9-month job-search permit allows unlimited work; employed graduates are work-permit exempt.
          </p>
          <p className="text-gray-700 mb-4">
            Study and work in Poland is regulated by Polish labour law. International full-time students enrolled at Polish universities can work part-time without a permit. During semester breaks, full-time work is permitted. After graduation, a 9-month residence permit allows job search; once employed, graduates do not need a separate work permit.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• ~20 hrs/week during academic term</li>
            <li>• Full-time during semester breaks</li>
            <li>• No work permit for full-time students</li>
            <li>• Graduates: 9-month job-search permit; then work-permit exempt</li>
          </ul>
        </div>
      </section>

      {/* PR and Citizenship Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Poland</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Five years of continuous legal residence in Poland (including student years) can qualify for permanent residence (PR). After PR, typically 3 further years and Polish language proficiency for citizenship eligibility.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          <strong>Definition:</strong> PR (permanent residence) allows indefinite stay and work in Poland. Citizenship grants an EU passport. Student residence counts toward the 5-year PR requirement. Rules are set by Urząd do Spraw Cudzoziemców (UDSC). Verify current criteria at <a href="https://www.gov.pl/web/uw-mazowiecki" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">gov.pl</a>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Permanent residence</td><td className="p-3">5 years continuous legal stay (student + work permits count)</td></tr>
              <tr><td className="p-3 font-semibold">Polish citizenship</td><td className="p-3">Usually 3 years after PR + language proficiency (B1/B2)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Poland (2026)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Warsaw, Jagiellonian University (Krakow), Warsaw University of Technology, AGH University of Science and Technology (Krakow), Poznań University. Strong in engineering, medicine, business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Warsaw', city: 'Warsaw', programs: 'All disciplines' },
            { name: 'Jagiellonian University', city: 'Krakow', programs: 'Medicine, Humanities, Sciences' },
            { name: 'Warsaw University of Technology', city: 'Warsaw', programs: 'Engineering, Technology' },
            { name: 'AGH University of Science and Technology', city: 'Krakow', programs: 'Engineering, Mining' },
            { name: 'Poznań University', city: 'Poznań', programs: 'Sciences, Social Sciences' },
            { name: 'Wrocław University of Science and Technology', city: 'Wrocław', programs: 'Engineering' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Poland for Nepali Students</h2>
          <p className="text-gray-700 mb-6 font-medium max-w-3xl">
            <strong>Quick answer:</strong> Polish universities excel in engineering, medicine, business, social sciences, and arts. Over 800 English-taught programmes across these disciplines. Nepali students often choose IT, mechanical engineering, MBAs, and medicine.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { field: 'Engineering & Technology', desc: 'Mechanical, electrical, computer science, mining. AGH Krakow and Warsaw University of Technology are top choices.', icon: '⚙️' },
              { field: 'Medicine & Health Sciences', desc: '6-year MD programmes; Jagiellonian and Warsaw Medical University. English-taught tracks available.', icon: '🏥' },
              { field: 'Business & Management', desc: 'MBA, finance, international business. Warsaw School of Economics and business faculties across major universities.', icon: '📊' },
              { field: 'Social Sciences', desc: 'Sociology, political science, international relations. University of Warsaw and Jagiellonian offer strong programmes.', icon: '🌍' },
              { field: 'Arts & Humanities', desc: 'Literature, history, philosophy. Jagiellonian and Adam Mickiewicz University (Poznań) have renowned faculties.', icon: '📚' },
              { field: 'Computer Science & IT', desc: 'Software engineering, data science. High demand in Poland; many graduates join local or remote tech roles.', icon: '💻' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-2xl mb-2 block">{f.icon}</span>
                <h3 className="font-bold text-[#001F3F] mb-2">{f.field}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarships for Study in Poland
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> NAWA: Stefan Banach, Poland My First Choice. Stipend PLN 2,000/month from 2026. Erasmus+ for mobility. University-specific merit grants. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            NAWA (Polish National Agency for Academic Exchange) offers programmes for international students. Poland My First Choice and Stefan Banach support Master-level studies. Check NAWA website and Study in Poland portal.
          </p>
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-[#001F3F] mb-3">NAWA Scholarships at a Glance</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• <strong>Stefan Banach:</strong> Joint Polish-Asian programme; tuition waiver + stipend</li>
              <li>• <strong>Poland My First Choice:</strong> PLN 2,000/month from 2026; Master programmes</li>
              <li>• <strong>Erasmus+:</strong> Mobility funding for exchange; apply via home university</li>
              <li>• <strong>University grants:</strong> Merit-based; varies by institution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Study Without IELTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Poland Without IELTS</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Many Polish universities accept TOEFL, Cambridge, or proof of prior English-medium education. IELTS 6.0–6.5 typical for English programmes. Check programme pages. For <Link href="/services/" className="text-blue-600 hover:underline">IELTS and test preparation</Link>, San Marina offers coaching in Kathmandu.
          </p>
        </div>
      </section>

      {/* Intakes & Application Deadlines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Poland Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Two main intakes: September (autumn) and February (spring). Many Polish universities accept rolling applications. Deadlines vary—typically May–July for Sept, Nov–Jan for Feb. Visa processing ~15 days. Apply 2–3 months before course start.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">Intake</th><th className="p-4 text-left">Classes Begin</th><th className="p-4 text-left">Application Window</th><th className="p-4 text-left">Visa Window</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Autumn (main)</td><td className="p-4">Sept</td><td className="p-4">May–July (varies)</td><td className="p-4">Jul–Aug</td></tr>
                <tr><td className="p-4 font-semibold">Spring</td><td className="p-4">Feb</td><td className="p-4">Nov–Jan (varies)</td><td className="p-4">Dec–Jan</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can Nepali Students Bring Dependents to Poland?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Spouses and children can apply for a temporary residence permit as family members of a student. Each dependent files a separate application. Proof of funds to support the family is required.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          Polish law allows family reunification for students. Dependents must submit their own residence applications and demonstrate adequate financial means. The student’s proof of funds may need to be increased to cover family living expenses. Processing times and exact requirements vary; consult the Polish Honorary Consulate in Kathmandu or UDSC for current rules.
        </p>
      </section>

      {/* 7. Requirements & Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Poland Requirements & Visa</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Admission letter, passport, proof of funds (~€500/month + tuition), health insurance. IELTS 6.0–6.5 or equivalent. Apply for national visa D at Polish Honorary Consulate in Kathmandu. Processing typically up to 15 working days.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students apply for Poland student visa?</h4>
          <p className="text-gray-700 text-sm">
            Polish Honorary Consulate, Kathmandu (Business Plaza, Dhobighat, Lalitpur). Book an appointment for national visa D. Processing ~15 working days. Bring passport, 2 photos, proof of funds, health insurance, admission letter.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Visa Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {polandData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">GAP (Study Gap) Acceptance for Nepali Students</h3>
        <p className="text-gray-700 mb-4 max-w-3xl">
          Many Polish universities accept gaps between school and university. For Bachelor programmes, gaps of 3–5 years are often acceptable if explained (e.g. work, family, health). For Master programmes, longer gaps are typically considered when supported by relevant work experience. Provide a clear gap explanation in your application or personal statement.
        </p>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Poland Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Insufficient proof of funds (must show ~€500/month living + tuition)</li>
          <li>Funds not in account 3–6 months before application</li>
          <li>Missing or invalid health insurance for Poland</li>
          <li>Applying at wrong office—use Polish Honorary Consulate Kathmandu (Dhobighat), not embassy</li>
          <li>Incomplete academic documents or unclear study plan</li>
        </ul>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {polandData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* 8. Advantages & Disadvantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages of Studying in Poland</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Affordable tuition vs Western Europe</li>
                <li>• 800+ English programmes</li>
                <li>• Work 20 hrs/week, no permit for students</li>
                <li>• 9-month post-study permit</li>
                <li>• NAWA scholarships</li>
                <li>• Schengen access</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Disadvantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lower rankings vs Germany/Netherlands</li>
                <li>• Polish language useful for daily life</li>
                <li>• Some cities less international</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Poland vs Others */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Poland vs Germany vs Netherlands vs Spain vs Italy – 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-4 text-left">Country</th>
                <th className="p-4 text-left">Tuition</th>
                <th className="p-4 text-left">Living</th>
                <th className="p-4 text-left">Work</th>
                <th className="p-4 text-left">PSW</th>
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
                  <td className="p-4">{row.psw}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Poland?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, proof of funds structure, NAWA scholarship applications, and Polish Honorary Consulate visa prep. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Poland requirements and plan the cost of studying in Poland.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Poland from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and NAWA scholarship guidance</li>
          <li>• Proof of funds and visa prep</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* Related European Destinations */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-6">Explore Other European Destinations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/study-abroad/eur/germany/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Germany</Link>
            <Link href="/study-abroad/romania/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Romania</Link>
            <Link href="/study-abroad/eur/netherlands/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Netherlands</Link>
            <Link href="/study-abroad/eur/belgium/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Belgium</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Poland FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Poland from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={polandData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Book Free first, internal links */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Poland Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on cost of studying in Poland, study and work in Poland rules, and NAWA scholarships. Free 15-minute consultation in Kathmandu—no obligation. Our team has helped 1,500+ Nepali students reach European universities.
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
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/eur/italy/" className="underline hover:text-white">Italy</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 font-semibold hover:underline">Netherlands</Link>
            {' · '}
            <Link href="/study-abroad/eur/spain/" className="text-blue-600 font-semibold hover:underline">Spain</Link>
            {' · '}
            <Link href="/study-abroad/eur/italy/" className="text-blue-600 font-semibold hover:underline">Italy</Link>
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
