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
  title: 'Study in Austria from Nepal 2026 | Cost, Visa & Work Rules',
  description: 'Study in Austria from Nepal 2026: tuition ~€727/sem, proof €673–€1,217/mo, Austrian Honorary Consulate Kathmandu (Naxal). 12-month post-study permit, Red-White-Red Card. Free consultation Kathmandu.',
  keywords: 'study in austria, study in austria from nepal, requirements for study in austria, can you work while studying in austria, austria post graduate study, study masters in austria, study in austria for international students, study in austria for nepali students, Austria student visa Nepal, OeAD, Vienna university, Austrian embassy Kathmandu',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/austria/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/austria/',
    title: 'Study in Austria from Nepal 2026 | Cost, Visa & Work',
    description: 'Complete 2026 guide: study in Austria, tuition, living costs, work rules, post-study permit. Compare with Germany, Spain, Italy, Netherlands, Poland.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Austria from Nepal 2026',
    description: 'Study in Austria: cost, visa, work 20 hrs/week, post-study 12 months. Free consultation in Kathmandu.',
  },
};

// Data: OeAD, Austrian Ministry of Education, migration.gv.at, studyinaustria.at, university sites. 1 EUR ≈ 143 NPR (Feb 2026)
const austriaData = {
  country: 'Austria',
  slug: 'austria',
  heroImage: '/assets/europe.jpg',
  lastUpdated: 'February 2026',
  description: 'Austria hosts 78,000+ international students. Non-EU tuition ~€727/semester at public universities; living €950–€1,100/month. Work up to 20 hrs/week. 12-month post-study job-search period. 350+ English programmes.',
  stats: {
    universities: '70+',
    internationalStudents: '78,000+',
    englishPrograms: '350+',
    postStudy: '12 months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: { eu: 20, nonEu: 727, fhNonEu: { min: 727, max: 7500 }, private: { min: 3000, max: 23000 } },
  proofOfFunds: { under24: 673, over24: 1217, nprUnder24: 96200, nprOver24: 174000 },
  livingCost: { vienna: { min: 900, max: 1300 }, salzburg: { min: 900, max: 1300 }, general: { min: 950, max: 1100 } },
  workHours: 'Up to 20 hrs/week; employer applies to AMS',
  postStudy: { duration: 12, note: 'Job-search permit; Red-White-Red Card for employment' },
  requirements: [
    'Admission letter from Austrian university',
    'Valid passport (6+ months beyond stay)',
    'Proof of funds: ~€673/month (under 24) or €1,217/month (24+)',
    'Health insurance valid in Austria (Schengen)',
    'Proof of accommodation',
    'English or German proficiency per programme',
  ],
  visaSteps: [
    'Apply to Austrian universities (deadlines typically Sept 5 or Feb 5)',
    'Receive admission and pay tuition',
    'Legalize documents via Nepalese authorities, then Austrian Honorary Consulate, Kathmandu',
    'Gather proof of funds (bank statements or Sperrkonto €12,000+)',
    'Apply for residence permit – student at Austrian embassy/consulate',
    'Processing typically 4–12 weeks',
    'Collect visa and travel to Austria',
  ],
  faqs: [
    {
      question: 'What are the requirements for study in Austria for Nepali students in 2026?',
      answer: 'Admission letter, passport (6+ months), proof of funds (~€673/month under 24 or €1,217/month 24+), health insurance, accommodation proof. Academic: equivalent to Austrian Matura for Bachelor; Bachelor for Master. English or German per programme.',
    },
    {
      question: 'What is the cost of studying in Austria from Nepal?',
      answer: 'First year: €14,000–€28,000 (NPR 20–40 lakhs). Public university tuition ~€727/semester for non-EU; living €950–€1,100/month. Vienna/Salzburg higher. 1 EUR ≈ 143 NPR. Private universities €3,000–€23,000/year.',
    },
    {
      question: 'Can you work while studying in Austria as a Nepali student?',
      answer: 'Yes. Up to 20 hrs/week. Employer applies to AMS (Public Employment Service); permit typically issued in 4–6 weeks. Employment must not affect studies. Compulsory internships: employer notifies AMS 3 weeks before start.',
    },
    {
      question: 'Can I study in Austria without IELTS?',
      answer: 'IELTS is not required for Austrian visa. For English programmes: universities may accept TOEFL, Cambridge, or prior English-medium proof. For German programmes: Goethe/ÖSD A2 for application; C1 for admission. Check programme pages.',
    },
    {
      question: 'What is the Austria post graduate study option?',
      answer: '12-month job-search permit after graduation. Apply to extend student residence. Once employed, apply for Red-White-Red Card. Graduates benefit from streamlined pathway—no points system; salary ~€2,800/month typical.',
    },
    {
      question: 'Can I study masters in Austria from Nepal?',
      answer: 'Yes. 350+ English-taught programmes; many at Master level. University of Vienna, TU Wien, WU Vienna, JKU Linz offer Master degrees. Tuition ~€727/semester at public universities. Deadlines typically Sept 5 or Feb 5.',
    },
    {
      question: 'How much proof of funds do I need for Austria student visa from Nepal?',
      answer: 'Under 24: ~€673/month; 24+: ~€1,217/month. Annual: €15,000–€25,000 typical. Sperrkonto (blocked account) €12,000+ accepted. NPR equivalent ~0.96–1.74 lakhs/month. Bank statements within 3 months.',
    },
    {
      question: 'Where do Nepali students apply for Austria student visa?',
      answer: 'Austrian Honorary Consulate, Kathmandu (22 Manakamana Marg, Nagpokhari, Naxal). Documents must be legalized via Nepalese authorities first, then Austrian Consulate. Email: autconktm@gmail.com.',
    },
    {
      question: 'Is study in Austria good for international students?',
      answer: 'Yes. Affordable public tuition, 350+ English programmes, work 20 hrs/week, 12-month post-study period. Vienna, Salzburg, Linz offer strong universities. Compare with Germany, Netherlands, Poland.',
    },
    {
      question: 'Is study in Austria consultancy in Nepal helpful?',
      answer: 'Yes. Consultancy assists with university selection, document legalization, proof of funds structure, OeAD guidance. San Marina: free consultation in Kathmandu. 15+ years guiding Nepali students to Europe.',
    },
    {
      question: 'Where can I study masters of computing and IT in Austria?',
      answer: 'TU Wien (Vienna University of Technology), JKU Linz, and Graz University of Technology offer Master programmes in computing and IT. Tuition ~€727/semester at public universities. English-taught options available. Check studyinaustria.at.',
    },
    {
      question: 'What is the document legalization process for Austria student visa from Nepal?',
      answer: 'Documents must be legalized in two steps: (1) Nepalese authorities (Ministry of Foreign Affairs); (2) Austrian Honorary Consulate, Kathmandu. Apply with translated, attested certificates. Allow extra time—legalization can take 1–2 weeks.',
    },
    {
      question: 'When are Austria intakes and application deadlines?',
      answer: 'Winter semester: Sept 5 (EU); non-EU earlier (e.g. Jul–Aug). Summer semester: Feb 5 (EU); non-EU Jan–early Feb. TU Wien: Jul 7–Sept 12 (Winter), Jan 7–Feb 12 (Summer). Apply 3+ months before for visa.',
    },
    {
      question: 'Can Nepali students bring dependents (spouse/children) to Austria?',
      answer: 'Yes. Spouses and minor children can apply for separate residence permits. Proof of sufficient funds to support the family and health insurance for dependents is required. Consult migration.gv.at for current rules.',
    },
    {
      question: 'What is the PR and citizenship pathway after studying in Austria?',
      answer: 'Five years of continuous legal residence (including student + work years) can qualify for PR. Austrian citizenship typically requires 10 years residence (or 6 under certain conditions), language proficiency, and integration. Red-White-Red Card leads to PR after 5 years work.',
    },
    {
      question: 'Do Austrian universities accept GAP (study gap) for Nepali students?',
      answer: 'Yes. Gaps of 3–5 years for Bachelor and 5+ years for Master are often accepted with valid explanation (work, internship, family). Provide gap justification letter and supporting docs. Policies vary by university.',
    },
  ],
};

const tuitionTable = [
  { level: 'EU/EEA (Public)', range: '€20/semester', notes: 'Administrative fee only' },
  { level: 'Non-EU (Public)', range: '~€727/semester', notes: 'Plus €20 admin fee' },
  { level: 'FH (Universities of Applied Sciences)', range: '€363–€7,500/semester', notes: 'EU lower; non-EU varies' },
  { level: 'Private universities', range: '€3,000–€23,000/year', notes: 'MBA/specialised higher' },
];

const comparisonData = [
  { country: 'Austria', countrySlug: null, tuition: '€727/sem', living: '€950–€1,100/mo', work: '20 hrs/week', psw: '12 months' },
  { country: 'Germany', countrySlug: '/study-abroad/eur/germany/', tuition: '€0 (most)', living: '€11,904/year', work: '20 hrs/week', psw: '18 months' },
  { country: 'Netherlands', countrySlug: '/study-abroad/eur/netherlands/', tuition: '€6,000–€20,000', living: '€1,000–€1,700/mo', work: '16 hrs or Jun–Aug', psw: '12 months' },
  { country: 'Poland', countrySlug: '/study-abroad/eur/poland/', tuition: '€2,000–€18,000', living: '€500–€900/mo', work: '20 hrs or breaks', psw: '9 months' },
  { country: 'Spain', countrySlug: '/study-abroad/eur/spain/', tuition: '€2,700–€9,300', living: '€800–€1,200/mo', work: '30 hrs/week', psw: '—' },
  { country: 'Italy', countrySlug: '/study-abroad/eur/italy/', tuition: '€1,000–€5,000', living: '€800–€1,500/mo', work: '20 hrs/week', psw: '—' },
];

export default function AustriaStudyPage() {
  const visaStepsWithText = [
    { name: 'Apply to Austrian universities (deadlines typically Sept 5 or Feb 5)', text: 'Winter Sept 5 (EU); Summer Feb 5 (EU). Non-EU earlier. Check studyinaustria.at.' },
    { name: 'Receive admission and pay tuition', text: 'Most universities require one semester paid upfront.' },
    { name: 'Legalize documents via Nepalese authorities, then Austrian Honorary Consulate, Kathmandu', text: 'MOFA first; then 22 Manakamana Marg, Nagpokhari, Naxal.' },
    { name: 'Gather proof of funds (bank statements or Sperrkonto €12,000+)', text: 'Under 24: ~€673/mo; 24+: ~€1,217/mo.' },
    { name: 'Apply for residence permit – student at Austrian embassy/consulate', text: 'Processing typically 4–12 weeks.' },
    { name: 'Processing typically 4–12 weeks', text: 'Apply 3+ months before course start.' },
    { name: 'Collect visa and travel to Austria', text: 'Register at university and local office upon arrival.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Austria from Nepal 2026 – Complete Guide',
        description: austriaData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: austriaData.author.name, url: 'https://www.sanmarina.edu.np', description: austriaData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Austria study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Austria from Nepal', 'OeAD', 'Austrian Honorary Consulate Kathmandu', 'Study in Austria without IELTS', 'Red-White-Red Card', 'Requirements for study in Austria'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Austria Student Visa from Nepal',
        description: 'Step-by-step: apply to university, legalize docs at Austrian Honorary Consulate Kathmandu (Naxal), proof €673–€1,217/mo, residence permit 4–12 weeks. Per OeAD, studyinaustria.at 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: austriaData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 4, name: 'Austria', item: 'https://www.sanmarina.edu.np/study-abroad/eur/austria/' },
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
          <Image src={austriaData.heroImage} alt="Nepali students studying in Austria - Vienna Salzburg, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Austria</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {austriaData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Austria from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Work Rules</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Affordable public tuition ~€727/semester, work 20 hrs/week, 12-month post-study job search—study in Austria from Nepal with expert guidance.
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Austria study experts. No obligation—perfect for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: OeAD, Austrian Ministry.</strong> Tuition ~€727/sem; proof €673–€1,217/mo. Verify at <a href="https://studyinaustria.at" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinaustria.at</a>, <a href="https://oead.at" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">oead.at</a>, <a href="https://www.migration.gv.at" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">migration.gv.at</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {austriaData.author.name} · {austriaData.author.role} · {austriaData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Austria from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition (non-EU, public)</td><td className="p-3">~€727/semester (+ €20 admin)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living proof</td><td className="p-3">~€673/mo (under 24) or ~€1,217/mo (24+)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Sperrkonto</td><td className="p-3">€12,000+ for one academic year accepted</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">Residence permit – student; Austrian Honorary Consulate Kathmandu (Naxal); 4–12 weeks</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">Up to 20 hrs/week; employer applies to AMS</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">12 months job-search; Red-White-Red Card for employment</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">English programmes</td><td className="p-3">350+ (studyinaustria.at)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: OeAD, Austrian Ministry. Verify at <a href="https://studyinaustria.at" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinaustria.at</a>, <a href="https://oead.at" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">oead.at</a>, <a href="https://www.migration.gv.at" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">migration.gv.at</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: austriaData.stats.universities, label: 'Universities' },
              { value: austriaData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: austriaData.stats.englishPrograms, label: 'English Programmes' },
              { value: austriaData.stats.postStudy, label: 'Post-Study Permit' },
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

      {/* 1. Why Study in Austria */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Austria in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Affordable public tuition (~€727/semester), 350+ English programmes, work 20 hrs/week, 12-month post-study permit. University of Vienna, TU Wien, WU Vienna. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>, or <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Austria for international students offers strong universities in Vienna, Salzburg, and Linz. Austria post graduate study and study masters in Austria are popular. Explore <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships</Link>.
        </p>
      </section>

      {/* 2. Cost of Studying in Austria */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Cost of Studying in Austria</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> First year €14,000–€28,000 (NPR 20–40 lakhs). Public tuition ~€727/semester; living €950–€1,100/month. Vienna and Salzburg higher. 1 EUR ≈ 143 NPR. Private universities €3,000–€23,000/year. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, or <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
          </p>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            <strong>Definition:</strong> The cost of studying in Austria for Nepali students includes tuition (€727/semester at public or €3,000–€23,000/year at private), living expenses (€950–€1,100/month), health insurance, and airfare.
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
                <tr className="border-b"><td className="p-3">Tuition (Public, 2 sem)</td><td className="p-3">~€1,454</td><td className="p-3">2.1L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (Private)</td><td className="p-3">€3,000–€23,000</td><td className="p-3">4.3–33L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€11,400–€13,200</td><td className="p-3">16.3–18.9L</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€700</td><td className="p-3">1.0L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€14,000–€28,000</td><td className="p-3 font-medium">20–40L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees – EU vs Non-EU</h3>
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
                <tr className="border-b border-gray-100"><td className="p-3">Vienna (shared)</td><td className="p-3">€400–700</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Salzburg (shared)</td><td className="p-3">€350–600</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Linz, Graz</td><td className="p-3">€300–550</td></tr>
                <tr><td className="p-3">Student dormitory</td><td className="p-3">€250–500</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Proof of Funds for Austria Student Visa from Nepal</h3>
          <p className="text-gray-700 mb-4">
            <strong>Austria requires age-based proof:</strong> Under 24: ~€673/month; 24+: ~€1,217/month. Sperrkonto (blocked account) €12,000+ for one academic year accepted. Bank statements within 3 months. NPR equivalent ~0.96–1.74 lakhs/month. Add tuition for first year. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, or <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <DollarSign className="text-[#0056b3] mb-2" size={24} />
              <p className="font-bold">Under 24</p>
              <p className="text-lg font-bold">~€673/month</p>
              <p className="text-sm text-gray-600">NPR ~0.96L/mo</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <GraduationCap className="text-green-600 mb-2" size={24} />
              <p className="font-bold">24+</p>
              <p className="text-lg font-bold">~€1,217/month</p>
              <p className="text-sm text-gray-600">NPR ~1.74L/mo</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Award className="text-amber-600 mb-2" size={24} />
              <p className="font-bold">Sperrkonto</p>
              <p className="text-lg font-bold">€12,000+</p>
              <p className="text-sm text-gray-600">One academic year</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Building2 className="text-cyan-600 mb-2" size={24} />
              <p className="font-bold">Vienna Living</p>
              <p className="text-lg font-bold">€900–€1,300/mo</p>
              <p className="text-sm text-gray-600">Highest</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mt-8 mb-4">Living Cost by City</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Vienna</p>
              <p className="text-lg font-bold">€900–€1,300/mo</p>
              <p className="text-sm text-gray-600">NPR 1.3–1.9L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Salzburg</p>
              <p className="text-lg font-bold">€900–€1,300/mo</p>
              <p className="text-sm text-gray-600">NPR 1.3–1.9L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Linz, Graz</p>
              <p className="text-lg font-bold">€950–€1,100/mo</p>
              <p className="text-sm text-gray-600">NPR 1.4–1.6L</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Work While Studying in Austria */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can You Work While Studying in Austria?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Up to 20 hrs/week. Your employer applies to AMS (Public Employment Service); permit typically issued in 4–6 weeks. Employment must not affect studies. Compulsory internships: employer notifies AMS 3 weeks before start.
          </p>
          <p className="text-gray-600 text-sm mb-4 max-w-3xl">
            <strong>Definition:</strong> Can you work while studying in Austria? International students with a Residence Permit – Student can work part-time. Employer obtains employment permit from AMS. More than 20 hrs/week may trigger labour market check.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Up to 20 hrs/week during studies</li>
            <li>• Employer applies to AMS; 4–6 weeks typical</li>
            <li>• Self-employment (Werkvertrag) possible without AMS permit</li>
            <li>• Compulsory internships: AMS notification 3 weeks before</li>
            <li>• Maintain 16 ECTS/year for permit renewal</li>
          </ul>
        </div>
      </section>

      {/* 4. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Austria (2026)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Vienna, TU Wien (Vienna University of Technology), WU Vienna (Vienna University of Economics), JKU Linz, University of Salzburg. Strong in business, engineering, IT, humanities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Vienna', city: 'Vienna', programs: 'All disciplines' },
            { name: 'TU Wien', city: 'Vienna', programs: 'Engineering, IT, Computing' },
            { name: 'WU Vienna', city: 'Vienna', programs: 'Business, Economics' },
            { name: 'JKU Linz', city: 'Linz', programs: 'IT, Law, Business, Engineering' },
            { name: 'University of Salzburg', city: 'Salzburg', programs: 'Sciences, Humanities' },
            { name: 'Graz University of Technology', city: 'Graz', programs: 'Engineering' },
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Austria for Nepali Students</h2>
          <p className="text-gray-700 mb-6 font-medium max-w-3xl">
            <strong>Quick answer:</strong> Austrian universities excel in business, IT, engineering, tourism, and natural sciences. 350+ English-taught programmes at Master/PhD level. Nepali students often choose WU Vienna (business), TU Wien (IT/engineering), and tourism programmes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { field: 'Business & Economics', desc: 'WU Vienna, JKU Linz. MBA, finance, international business. Many English-taught Master programmes.', icon: '📊' },
              { field: 'Engineering & Technology', desc: 'TU Wien, Graz University of Technology. IT, computing, mechanical, civil. Strong research focus.', icon: '⚙️' },
              { field: 'Tourism & Hospitality', desc: 'Austria\'s tourism industry drives demand. MODUL University, FH programmes. English options available.', icon: '🏔️' },
              { field: 'Natural Sciences', desc: 'University of Vienna, Innsbruck. Physics, chemistry, life sciences. Research-oriented programmes.', icon: '🔬' },
              { field: 'Humanities & Social Sciences', desc: 'University of Vienna, Salzburg. History, philosophy, political science. German-taught Bachelor; some English Master.', icon: '📚' },
              { field: 'Computer Science & IT', desc: 'TU Wien, JKU Linz. Software engineering, AI, data science. High employability in Austria.', icon: '💻' },
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
            Scholarships for Study in Austria
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> OeAD scholarships, Erasmus+, university-specific grants. Check OeAD website and <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>. Austrian Development Cooperation offers programmes for developing countries.
          </p>
          <p className="text-gray-700">
            OeAD (Austrian Agency for Education and Internationalisation) coordinates mobility and scholarship programmes. Study in Austria portal lists opportunities. Universities offer merit-based grants.
          </p>
        </div>
      </section>

      {/* Intakes & Application Deadlines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Austria Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Winter semester: application deadline Sept 5 (EU/EEA); non-EU typically Jul–Aug. Summer semester: Feb 5 (EU/EEA); non-EU Jan–early Feb. TU Wien: Jul 7–Sept 12 (Winter), Jan 7–Feb 12 (Summer). Visa 4–12 weeks; apply 3+ months before course start.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">Intake</th><th className="p-4 text-left">Classes Begin</th><th className="p-4 text-left">Application Window (EU)</th><th className="p-4 text-left">Non-EU (apply earlier)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Winter (main)</td><td className="p-4">Oct</td><td className="p-4">Until Sept 5</td><td className="p-4">Jul–Aug</td></tr>
                <tr><td className="p-4 font-semibold">Summer</td><td className="p-4">Mar</td><td className="p-4">Until Feb 5</td><td className="p-4">Jan–early Feb</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Study Without IELTS & German vs English */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Austria Without IELTS: German vs English Programmes</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> IELTS is not required for Austrian visa. For English programmes: universities may accept TOEFL, Cambridge, or prior English-medium proof. For German programmes: Goethe/ÖSD A2 for application; C1 for admission. Check programme pages. For <Link href="/services/" className="text-blue-600 hover:underline">IELTS and test preparation</Link>, San Marina offers coaching in Kathmandu.
          </p>
          <div className="bg-white rounded-xl p-6 border border-gray-200 mt-4">
            <h3 className="font-bold text-[#001F3F] mb-3">German vs English Programmes in Austria</h3>
            <p className="text-gray-700 text-sm mb-2"><strong>English:</strong> 350+ programmes; Master/PhD most common. No IELTS for visa; TOEFL/Cambridge/prior proof per university.</p>
            <p className="text-gray-700 text-sm mb-2"><strong>German:</strong> Most Bachelor programmes. A2 (Goethe/ÖSD) to apply; C1 to enrol. Conditional admission with A2/B1 + preparatory course possible.</p>
          </div>
        </div>
      </section>

      {/* Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can Nepali Students Bring Dependents to Austria?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Spouses and minor children can apply for separate residence permits as family members of a student. Proof of sufficient funds to support the family and health insurance for dependents is required.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          Austrian immigration allows family reunification for students. Each dependent submits their own application. The student must demonstrate adequate financial means to cover family living expenses. Rules and processing times vary; verify at <a href="https://www.migration.gv.at" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">migration.gv.at</a>.
        </p>
      </section>

      {/* 7. Requirements + Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Requirements for Study in Austria & Visa</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Admission letter, passport (6+ months), proof of funds (~€673/month under 24 or €1,217/month 24+), health insurance, accommodation. English or German per programme. Document legalization via Nepalese authorities then Austrian Honorary Consulate, Kathmandu.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students apply for Austria student visa?</h4>
          <p className="text-gray-700 text-sm">
            Austrian Honorary Consulate, Kathmandu (22 Manakamana Marg, Nagpokhari, Naxal). Documents must be legalized via Nepalese authorities first, then Austrian Consulate. Email: autconktm@gmail.com. Processing typically 4–12 weeks.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">GAP (Study Gap) Acceptance for Nepali Students</h3>
        <p className="text-gray-700 mb-4 max-w-3xl">
          Austrian universities generally accept study gaps when explained. For Bachelor: gaps of 3–5 years often acceptable with work experience, internship, or personal reasons. For Master: gaps of 5+ years considered with relevant work experience. Provide a gap justification letter and supporting documents. Policies vary by institution.
        </p>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Austria Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Insufficient proof of funds (must show age-based: ~€673/mo under 24 or ~€1,217/mo 24+)</li>
          <li>Documents not legalized (Nepalese authorities first, then Austrian Consulate Kathmandu)</li>
          <li>Missing or invalid health insurance for Austria/Schengen</li>
          <li>Applying at wrong office—use Austrian Honorary Consulate Kathmandu (22 Manakamana Marg, Naxal), not embassy</li>
          <li>Applying too late—allow 4–12 weeks processing; apply 3+ months before course start</li>
        </ul>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Visa Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-12">
          {austriaData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {austriaData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* 8. Post-Study & PR/Citizenship */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Austria Post Graduate Study: Job-Search Permit</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> 12-month job-search permit after graduation. Extend student residence for job search. Once employed, apply for Red-White-Red Card. Graduates benefit from streamlined pathway—no points system; salary ~€2,800/month typical.
        </p>
        <p className="text-gray-700 mb-6">
          Austria post graduate study pathway: extend residence for up to 12 months to find work. Red-White-Red Card grants 2-year residence and work; eligible for permanent residency after 5 years. IT and software development in high demand.
        </p>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">PR and Citizenship Options After Studying in Austria</h3>
        <p className="text-gray-700 mb-4">
          Five years of continuous legal residence (including student + work years) can qualify for permanent residence (PR). Red-White-Red Card employment counts toward the 5-year requirement. Austrian citizenship typically requires 10 years residence (or 6 under certain conditions), language proficiency (B2), and integration. Verify at <a href="https://www.migration.gv.at" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">migration.gv.at</a>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Permanent residence</td><td className="p-3">5 years continuous legal stay (student + work permits count)</td></tr>
              <tr><td className="p-3 font-semibold">Austrian citizenship</td><td className="p-3">10 years residence (or 6 under certain conditions); B2 German; integration</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Advantages & Disadvantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages of Studying in Austria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Affordable public tuition (~€727/semester)</li>
                <li>• 350+ English programmes</li>
                <li>• Work 20 hrs/week</li>
                <li>• 12-month post-study permit</li>
                <li>• Red-White-Red Card pathway</li>
                <li>• Schengen access</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Disadvantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Higher living cost than Poland/Czech</li>
                <li>• Document legalization required</li>
                <li>• Most programmes in German</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Austria vs Others */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Austria vs Germany vs Netherlands vs Poland vs Spain vs Italy – 2026</h2>
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
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Austria?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, document legalization (Nepalese authorities + Austrian Consulate), proof of funds structure, OeAD guidance. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet requirements for study in Austria and plan the cost of studying in Austria.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Austria from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and OeAD scholarship guidance</li>
          <li>• Document legalization and visa prep</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Austria FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Austria from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={austriaData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Book Free first, internal links */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Austria Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on cost of studying in Austria, can you work while studying in Austria, and requirements for study in Austria. Free 15-minute consultation in Kathmandu—no obligation. 1,500+ Nepali students placed.
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
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/eur/italy/" className="underline hover:text-white">Italy</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
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
            <Link href="/study-abroad/eur/poland/" className="text-blue-600 font-semibold hover:underline">Poland</Link>
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
