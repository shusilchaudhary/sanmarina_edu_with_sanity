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
  HeartPulse,
  RefreshCw,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Portugal from Nepal 2026 | Cost, Visa & Work Rules',
  description: 'Study in Portugal from Nepal 2026: tuition €3,000–7,000, proof €920/mo, Portuguese Honorary Consulate Kathmandu. Nursing in English, no IELTS options. Free consultation Kathmandu.',
  keywords: 'study in portugal, study in portugal from nepal, study in portugal cost, requirement to study in portugal, study in portugal without ielts, study nursing in portugal in english, study in portugal fdiploma, requirement to study in portugal for nepali, can i get transfer in study from poland to portugal, Portugal student visa Nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/portugal/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/portugal/',
    title: 'Study in Portugal from Nepal 2026 | Cost, Visa & Nursing',
    description: 'Complete 2026 guide: study in Portugal, tuition, nursing, IELTS waiver, transfer from Poland. Compare with Spain, Italy, Poland.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Portugal from Nepal 2026',
    description: 'Study in Portugal: cost, nursing in English, work 20 hrs/week. Free consultation in Kathmandu.',
  },
};

// Data: DGES, University of Porto, vistos.mne.gov.pt, educations.com, nursing schools. 1 EUR ≈ 143 NPR (Feb 2026)
const portugalData = {
  country: 'Portugal',
  slug: 'portugal',
  heroImage: '/assets/portugal.webp',
  lastUpdated: 'February 2026',
  description: 'Portugal hosts 52,000+ international students. Non-EU tuition €3,000–€7,000/year; living €600–€1,000/month. Work 20 hrs/week. Study nursing in Portugal in English at select schools. Study in Portugal without IELTS possible at some universities.',
  stats: {
    universities: '50+',
    internationalStudents: '52,000+',
    workHours: '20 hrs/week',
    proofOfFunds: '€920/month',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: { eu: { min: 697, max: 1500 }, nonEu: { min: 3000, max: 7000 }, private: { min: 3500, max: 10000 } },
  proofOfFunds: { monthly: 920, npr: 131560 },
  livingCost: { lisbon: { min: 600, max: 1000 }, porto: { min: 550, max: 900 }, coimbra: { min: 500, max: 800 } },
  workHours: '20 hrs/week during term; full-time in breaks',
  requirements: [
    'Admission letter from Portuguese university',
    'Valid passport (3+ months beyond stay)',
    'Proof of funds: €920/month minimum (tuition + living)',
    'Proof of accommodation',
    'Travel health insurance',
    'Police clearance certificate',
    'Academic transcripts',
  ],
  visaSteps: [
    'Apply to Portuguese universities (deadlines vary; check DGES/universities)',
    'Receive admission and pay tuition',
    'Gather proof of funds (bank statements, scholarship, sponsorship)',
    'Apply at Portuguese Embassy/Consulate (Nepal: Honorary Consulate Kathmandu or designated visa centre)',
    'Submit documents: passport, acceptance letter, accommodation, insurance',
    'Processing typically 4–8 weeks',
    'Collect visa; apply for residence permit at SEF upon arrival',
  ],
  faqs: [
    {
      question: 'What are the requirement to study in Portugal for Nepali students in 2026?',
      answer: 'Admission letter, passport (3+ months), proof of funds (€920/month minimum), accommodation proof, health insurance, police clearance. Academic: equivalent to Portuguese secondary for Bachelor; Bachelor for Master. English or Portuguese per programme. Requirement to study in Portugal for nepali: same as international; verify with university.',
    },
    {
      question: 'What is the study in Portugal cost from Nepal?',
      answer: 'First year: €9,000–€18,000 (NPR 13–26 lakhs). Tuition €3,000–€7,000/year; living €600–€1,000/month. Lisbon and Porto higher. 1 EUR ≈ 143 NPR. Study in Portugal cost is lower than Netherlands or Switzerland.',
    },
    {
      question: 'Can I study in Portugal without IELTS?',
      answer: 'Yes. Some universities (Universidade Portucalense, ISPGAYA, ISEG) accept interview, documentary evidence, or alternative assessment instead of IELTS. Check programme pages. English-taught programmes exist; requirements vary.',
    },
    {
      question: 'Can I study nursing in Portugal in English?',
      answer: 'Yes. Limited options—around 3 programmes in English. Egas Moniz (Bachelor, Master in Rehabilitation Nursing), Universidade de Aveiro (Master in Community Nursing), and others. Most nursing programmes are in Portuguese. Check healthcareprogrammes and university sites.',
    },
    {
      question: 'Can I get transfer in study from Poland to Portugal?',
      answer: 'Yes, but no automatic credit recognition. Contact your target Portuguese university; DGES handles foreign qualification recognition. You will need transcripts, syllabi, and may need to apply for credit transfer. EU Bologna system aids compatibility but each institution decides.',
    },
    {
      question: 'Is study in Portugal free?',
      answer: 'No. Non-EU students pay €3,000–€7,000/year at public universities. EU/Portuguese pay €697–€1,500. Portugal Government Scholarships can cover tuition and stipend—apply via DGES. Study in Portugal is not free for most international students.',
    },
    {
      question: 'How much proof of funds do I need for Portugal student visa from Nepal?',
      answer: 'Minimum €920/month for subsistence. Add tuition for first year. Total typical €12,000–€18,000 for first year. Bank statements, scholarship, or sponsorship accepted. NPR equivalent ~13.2 lakhs/month for living alone.',
    },
    {
      question: 'Where do Nepali students apply for Portugal student visa?',
      answer: 'Portuguese Honorary Consulate, Kathmandu (Hattisar, 4th Floor). Contact to confirm visa services; some applications may go through VFS or nearest full embassy. Apply with admission letter, proof of funds, accommodation, insurance.',
    },
    {
      question: 'What is study in Portugal fdiploma?',
      answer: 'FDip (Foundation Diploma) or similar preparatory qualifications may be offered by some institutions. Check university pages for foundation or pre-Bachelor pathways. DGES lists accredited programmes.',
    },
    {
      question: 'Is study in Portugal consultancy in Nepal helpful?',
      answer: 'Yes. Consultancy assists with university selection, proof of funds structure, visa prep, nursing and English programme guidance. San Marina: free consultation in Kathmandu. 15+ years guiding Nepali students to Europe.',
    },
    {
      question: 'When are Portugal intakes and application deadlines?',
      answer: 'Multiple phases. Porto: Phase 1 Dec–Feb, Phase 2 Apr–Jun, Phase 3 Jul–Sep (Master). Lisbon: phases Apr–Aug. Deadlines vary by university. Visa 4–8 weeks. Apply 2–3 months before course start.',
    },
    {
      question: 'Can Nepali students bring dependents (spouse/children) to Portugal?',
      answer: 'Yes. Family reunification possible. Spouses and children can apply for residence. Proof of funds to support family required. Each dependent needs separate application. Verify at vistos.mne.gov.pt.',
    },
    {
      question: 'What is the PR and citizenship pathway after studying in Portugal?',
      answer: 'Five years of legal residence (including student years) can qualify for PR. Citizenship: typically 5 years legal residence, Portuguese language A2, ties to Portugal. Rules at SEF/ACM. Golden Visa and other paths exist.',
    },
    {
      question: 'Do Portuguese universities accept GAP (study gap) for Nepali students?',
      answer: 'Yes. Many accept gaps when explained (work, family, health). Provide gap justification. Policies vary by institution. Portucalense, ISEG, others often flexible. Check programme pages.',
    },
  ],
};

const tuitionTable = [
  { level: 'EU/Portuguese (Public)', range: '€697–€1,500/year', notes: 'University of Porto €697' },
  { level: 'Non-EU (Public)', range: '€3,000–€7,000/year', notes: 'Bachelor, Master' },
  { level: 'Private', range: '€3,500–€10,000+/year', notes: 'Varies by institution' },
  { level: 'Doctorate', range: '€2,500–€6,000/year', notes: 'Public' },
];

const comparisonData = [
  { country: 'Portugal', countrySlug: null, tuition: '€3,000–€7,000', living: '€600–€1,000/mo', work: '20 hrs/week', psw: '—' },
  { country: 'Spain', countrySlug: '/study-abroad/eur/spain/', tuition: '€2,700–€9,300', living: '€800–€1,200/mo', work: '30 hrs/week', psw: '—' },
  { country: 'Italy', countrySlug: '/study-abroad/eur/italy/', tuition: '€1,000–€5,000', living: '€800–€1,500/mo', work: '20 hrs/week', psw: '—' },
  { country: 'Poland', countrySlug: '/study-abroad/eur/poland/', tuition: '€2,000–€18,000', living: '€500–€900/mo', work: '20 hrs or breaks', psw: '9 months' },
  { country: 'Netherlands', countrySlug: '/study-abroad/eur/netherlands/', tuition: '€6,000–€20,000', living: '€1,000–€1,700/mo', work: '16 hrs or Jun–Aug', psw: '12 months' },
  { country: 'Austria', countrySlug: '/study-abroad/eur/austria/', tuition: '€727/sem', living: '€950–€1,100/mo', work: '20 hrs/week', psw: '12 months' },
  { country: 'Switzerland', countrySlug: '/study-abroad/eur/switzerland/', tuition: 'CHF 700–2,200/sem', living: 'CHF 1,400–2,200/mo', work: '15 hrs/week', psw: '6 months' },
];

export default function PortugalStudyPage() {
  const visaStepsWithText = [
    { name: 'Apply to Portuguese universities (deadlines vary; check DGES/universities)', text: 'Porto: Phase 1 Dec–Feb, Phase 2 Apr–Jun, Phase 3 Jul–Sep. Lisbon: Apr–Aug.' },
    { name: 'Receive admission and pay tuition', text: 'Secure offer; pay first installment.' },
    { name: 'Gather proof of funds (bank statements, scholarship, sponsorship)', text: '€920/month minimum + tuition.' },
    { name: 'Apply at Portuguese Embassy/Consulate (Nepal: Honorary Consulate Kathmandu or visa centre)', text: 'Hattisar, 4th Floor; contact for appointments.' },
    { name: 'Submit documents: passport, acceptance letter, accommodation, insurance', text: 'Processing typically 4–8 weeks.' },
    { name: 'Processing typically 4–8 weeks', text: 'Apply 2–3 months before course start.' },
    { name: 'Collect visa; apply for residence permit at SEF upon arrival', text: 'Visa valid 3 months; SEF grants residence.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Portugal from Nepal 2026 – Complete Guide',
        description: portugalData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: portugalData.author.name, url: 'https://www.sanmarina.edu.np', description: portugalData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Portugal study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Portugal from Nepal', 'DGES', 'Portuguese Honorary Consulate Kathmandu', 'Study nursing in Portugal in English', 'Study in Portugal without IELTS', 'Transfer from Poland to Portugal'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Portugal Student Visa from Nepal',
        description: 'Step-by-step: apply to university, proof €920/mo + tuition, Portuguese Honorary Consulate Kathmandu (Hattisar), SEF on arrival. Per DGES, vistos.mne.gov.pt 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: portugalData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 4, name: 'Portugal', item: 'https://www.sanmarina.edu.np/study-abroad/eur/portugal/' },
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
          <Image src={portugalData.heroImage} alt="Nepali students studying in Portugal - Lisbon Porto, study abroad 2026" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-24 py-20">
          <nav className="text-sm text-blue-200 mb-6 pt-">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/eur/" className="hover:text-white">Europe</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Portugal</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {portugalData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex items-center gap-2">
            Study in Portugal <Image src='/assets/portugal.png' width={100} height={100} alt="portugal flag" />
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Portugal study experts. No obligation—perfect for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: DGES, Portuguese Ministry of Foreign Affairs.</strong> Tuition €3,000–€7,000; proof €920/mo. Verify at <a href="https://www.dges.gov.pt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">dges.gov.pt</a>, <a href="https://vistos.mne.gov.pt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">vistos.mne.gov.pt</a>, <a href="https://www.portugal.gov.pt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">portugal.gov.pt</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {portugalData.author.name} · {portugalData.author.role} · {portugalData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Portugal from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition (non-EU)</td><td className="p-3">€3,000–€7,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living proof</td><td className="p-3">€920/month minimum + tuition</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">Portuguese Honorary Consulate Kathmandu (Hattisar); 4–8 weeks</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week during term; full-time in breaks</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">No dedicated job-search permit; apply for work visa if employed</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Nursing in English</td><td className="p-3">Egas Moniz, Aveiro; ~3 programmes</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: DGES, Portuguese MFA. Verify at <a href="https://www.dges.gov.pt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">dges.gov.pt</a>, <a href="https://vistos.mne.gov.pt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">vistos.mne.gov.pt</a>, <a href="https://www.portugal.gov.pt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">portugal.gov.pt</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: portugalData.stats.universities, label: 'Universities' },
              { value: portugalData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: portugalData.stats.workHours, label: 'Work (term)' },
              { value: portugalData.stats.proofOfFunds, label: 'Proof of Funds' },
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

      {/* Why Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Portugal in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Affordable study in Portugal cost vs Northern Europe, warm climate, study nursing in Portugal in English options, study in Portugal without IELTS at some universities. Compare with <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link>, <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>, <Link href="/study-abroad/eur/austria/" className="text-blue-600 hover:underline">Austria</Link>, <Link href="/study-abroad/eur/switzerland/" className="text-blue-600 hover:underline">Switzerland</Link>. Explore <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships</Link>.
        </p>
      </section>

      {/* Cost of Studying in Portugal */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study in Portugal Cost</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> First year €9,000–€18,000 (NPR 13–26 lakhs). Tuition €3,000–€7,000/year; living €600–€1,000/month. Lisbon and Porto higher; Coimbra, Braga more affordable. 1 EUR ≈ 143 NPR. Compare with <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link>.
          </p>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            <strong>Definition:</strong> The study in Portugal cost for Nepali students includes tuition (€3,000–€7,000/year at public or €3,500–€10,000+ at private), living (€600–€1,000/month), health insurance, and airfare.
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
                <tr className="border-b"><td className="p-3">Tuition (Public)</td><td className="p-3">€3,000–€7,000</td><td className="p-3">4.3–10L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (Private)</td><td className="p-3">€3,500–€10,000</td><td className="p-3">5–14.3L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€7,200–€12,000</td><td className="p-3">10.3–17.2L</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€700</td><td className="p-3">1.0L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€9,000–€18,000</td><td className="p-3 font-medium">13–26L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees – Public vs Private</h3>
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
                <tr className="border-b border-gray-100"><td className="p-3">Lisbon (shared)</td><td className="p-3">€350–600</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Porto (shared)</td><td className="p-3">€300–550</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Coimbra, Braga</td><td className="p-3">€250–450</td></tr>
                <tr><td className="p-3">Student residence</td><td className="p-3">€200–400</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Proof of Funds for Portugal Student Visa from Nepal</h3>
          <p className="text-gray-700 mb-4">
            <strong>Portugal requires €920/month minimum for subsistence.</strong> Add tuition for first year. Bank statements, scholarship, or sponsorship accepted. NPR equivalent ~13.2 lakhs/month. Total first year typical €12,000–€18,000. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>, <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mt-8 mb-4">Living Cost by City</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Lisbon (Highest)</p>
              <p className="text-lg font-bold">€600–€1,000/mo</p>
              <p className="text-sm text-gray-600">NPR 0.9–1.4L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Porto</p>
              <p className="text-lg font-bold">€550–€900/mo</p>
              <p className="text-sm text-gray-600">NPR 0.8–1.3L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Coimbra, Braga</p>
              <p className="text-lg font-bold">€500–€800/mo</p>
              <p className="text-sm text-gray-600">NPR 0.7–1.1L</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Portugal for Nepali Students</h2>
          <p className="text-gray-700 mb-6 font-medium max-w-3xl">
            <strong>Quick answer:</strong> Portugal excels in nursing, engineering, business, tourism, and computer science. Nepali students often choose nursing in English (Egas Moniz, Aveiro), business (Portucalense, ISEG), tourism, and informatics (Politécnico de Coimbra, Porto).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { field: 'Nursing & Health Sciences', desc: 'Egas Moniz, Aveiro, Coimbra. Bachelor/Master in English. Clinical placements. Key draw for Nepali students.', icon: '🏥' },
              { field: 'Business & Management', desc: 'Portucalense, ISEG, ISCAC Coimbra. MBA, Tourism, Hospitality. Many without IELTS.', icon: '📊' },
              { field: 'Engineering & Informatics', desc: 'Politécnico Porto, Coimbra, Bragança. Civil, Electrical, Biomedical. €2,600–€4,500/year.', icon: '⚙️' },
              { field: 'Tourism & Hospitality', desc: 'ISCAC, ESEC, Leiria. Culinary Arts, Hotel Management. Strong industry links.', icon: '🏨' },
              { field: 'Biotechnology & Food Science', desc: 'Coimbra ESAC, Aveiro. Food Tech, Organic Agriculture. English options.', icon: '🔬' },
              { field: 'Law & Psychology', desc: 'Portucalense. LLM, Clinical Psychology. Master programmes in English.', icon: '⚖️' },
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

      {/* Study in Portugal Without IELTS */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Portugal Without IELTS</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Universidade Portucalense (Porto), ISPGAYA, ISEG (Lisbon) accept interview, documentary evidence, or alternative assessment instead of IELTS. English-taught programmes in Tourism, Hospitality, Management, Computer Engineering. Check programme pages.
          </p>
          <p className="text-gray-700 mb-4">
            Study in Portugal without IELTS is possible at select universities. Requirements vary: some use interview + Portuguese language evidence; ISEG verifies &quot;independent command of teaching language&quot; through alternative methods. For <Link href="/services/" className="text-blue-600 hover:underline">IELTS and test preparation</Link>, San Marina offers coaching in Kathmandu.
          </p>
        </div>
      </section>

      {/* Nursing in Portugal */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <HeartPulse className="text-green-600" size={28} />
            Study Nursing in Portugal in English
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Around 3 programmes in English. Egas Moniz (Bachelor, Master in Rehabilitation Nursing), Universidade de Aveiro (Master in Community Nursing, Family Health). Most of 17 nursing programmes are in Portuguese.
          </p>
          <p className="text-gray-700 mb-4">
            Study nursing in Portugal in English options are limited. Key institutions: Egas Moniz School of Health & Science, Universidade de Aveiro, Escola Superior de Enfermagem de Coimbra, Universidade Católica Portuguesa (Porto). Clinical placements in hospitals. Check programme language before applying.
          </p>
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-[#001F3F] mb-3">Nursing Programmes in English</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Egas Moniz:</strong> Bachelor in Nursing, Master in Rehabilitation Nursing</li>
              <li>• <strong>Universidade de Aveiro:</strong> Master in Community Nursing, Family Health Nursing</li>
              <li>• Check healthcareprogrammes and university sites for latest</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Study and Work */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
          <Briefcase className="text-[#0056b3]" size={28} />
          Study and Work in Portugal
        </h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Non-EU students: 20 hrs/week during semester; full-time during breaks. Hold valid residence permit for studies. Employer may need to inform authorities. Typical pay €4–€7/hr hospitality; €10–€20/hr tutoring.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• 20 hrs/week during term; full-time in summer/winter breaks</li>
          <li>• Common jobs: hospitality, retail, tutoring, university positions</li>
          <li>• €300–€500/month typical for 20 hrs</li>
        </ul>
      </section>

      {/* Transfer from Poland */}
      <section className="py-16 bg-amber-50 border border-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <RefreshCw className="text-amber-600" size={28} />
            Can I Get Transfer in Study from Poland to Portugal?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. No automatic EU credit recognition—each institution decides. Contact target Portuguese university; provide transcripts, syllabi. DGES handles foreign qualification recognition. Bologna compatibility aids transfer.
          </p>
          <p className="text-gray-700 mb-4">
            Can I get transfer in study from Poland to Portugal? Yes. DGES (Directorate General for Higher Education) ENIC/NARIC Centre processes recognition. Apply to Portuguese university with Polish credits; they will evaluate. Compare <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link> vs Portugal before deciding.
          </p>
        </div>
      </section>

      {/* Intakes & Application Deadlines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Portugal Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Multiple phases. University of Porto: Phase 1 Dec–Feb, Phase 2 Apr–Jun, Phase 3 Jul–Sep (Master). Lisbon: phases typically Apr–Aug. Deadlines vary by university and programme. Visa 4–8 weeks. Apply 2–3 months before course start.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">University</th><th className="p-4 text-left">Phase 1</th><th className="p-4 text-left">Phase 2</th><th className="p-4 text-left">Phase 3</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Porto (Master)</td><td className="p-4">Dec–Feb</td><td className="p-4">Apr–Jun</td><td className="p-4">Jul–Sep</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Porto (Bachelor)</td><td className="p-4">Jan–Feb</td><td className="p-4">Feb–Apr</td><td className="p-4">Jun–Jul</td></tr>
                <tr><td className="p-4 font-semibold">Lisbon (varies)</td><td className="p-4">Apr–Jun</td><td className="p-4">Jul–Jul</td><td className="p-4">Aug–Sep</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Requirement to Study in Portugal for Nepali Students</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Admission letter, passport (3+ months), proof of funds (€920/month + tuition), accommodation, health insurance, police clearance. Academic: equivalent to Portuguese secondary for Bachelor. English or Portuguese per programme.
        </p>
        <p className="text-gray-700">
          Requirement to study in Portugal: same as international. Requirement to study in Portugal for nepali: verify equivalence with DGES or university. Some programmes need entrance exam (minimum 95/200 Portuguese scale or equivalent).
        </p>
      </section>

      {/* Scholarships & Free Study */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarships & Is Study in Portugal Free?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Is study in Portugal free? No for non-EU. Portugal Government Scholarships can cover tuition and stipend—apply via DGES. Higher Education Study Grant up to €5,982 for eligible students. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
        </div>
      </section>

      {/* Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can Nepali Students Bring Dependents to Portugal?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Family reunification is possible. Spouses and children can apply for residence. Proof of funds to support the family is required. Each dependent needs a separate application.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          Portuguese immigration allows family reunification for students. Verify current rules at <a href="https://vistos.mne.gov.pt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">vistos.mne.gov.pt</a> and SEF.
        </p>
      </section>

      {/* Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Portugal Student Visa for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Apply at Portuguese Embassy/Consulate. Nepal: Portuguese Honorary Consulate, Kathmandu (Hattisar). Proof of funds (€920/month), accommodation, acceptance letter, insurance required. Visa valid 3 months; apply for SEF residence permit on arrival.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students apply for Portugal student visa?</h4>
          <p className="text-gray-700 text-sm">
            Portuguese Honorary Consulate, Kathmandu (4th Floor, Hattisar, P.O. Box 6156). Tel: +977 1 444 64 00. Contact to confirm visa services. Some applications may route through VFS or nearest full embassy. Processing typically 4–8 weeks.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">GAP (Study Gap) Acceptance for Nepali Students</h3>
        <p className="text-gray-700 mb-4 max-w-3xl">
          Many Portuguese universities accept study gaps when explained. Portucalense, ISEG, ISPGAYA often flexible. Provide gap justification (work, family, health). Policies vary by institution.
        </p>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Portugal Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Insufficient proof of funds (must show €920/month + tuition)</li>
          <li>Missing accommodation proof or unclear study plan</li>
          <li>Health insurance not valid for Schengen/Portugal</li>
          <li>Police clearance not included or outdated</li>
          <li>Applying too late—allow 4–8 weeks; apply 2–3 months before course start</li>
        </ul>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Visa Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-12">
          {portugalData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {portugalData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* PR and Citizenship Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Portugal</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Five years of legal residence (including student years) can qualify for permanent residence (PR). Citizenship typically requires 5 years legal residence, Portuguese language A2, and ties to Portugal.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          Rules at SEF (Serviço de Estrangeiros e Fronteiras) and ACM. Golden Visa and other pathways exist. Verify at <a href="https://www.portugal.gov.pt" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">portugal.gov.pt</a>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Permanent residence</td><td className="p-3">5 years legal stay (student + work permits count)</td></tr>
              <tr><td className="p-3 font-semibold">Portuguese citizenship</td><td className="p-3">5 years legal residence; A2 Portuguese; ties to Portugal; varies</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Portugal (2026)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Porto, University of Lisbon, Universidade de Coimbra, Universidade de Aveiro, Universidade Nova de Lisboa. Strong in engineering, nursing, business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Porto', city: 'Porto', programmes: 'All disciplines' },
            { name: 'University of Lisbon', city: 'Lisbon', programmes: 'All disciplines' },
            { name: 'Universidade de Coimbra', city: 'Coimbra', programmes: 'Historic; all fields' },
            { name: 'Universidade de Aveiro', city: 'Aveiro', programmes: 'Nursing, Sciences' },
            { name: 'Universidade Portucalense', city: 'Porto', programmes: 'English programmes' },
            { name: 'Universidade Nova de Lisboa', city: 'Lisbon', programmes: 'Business, Sciences' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programmes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Drawbacks of Studying in Portugal</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Affordable tuition vs Northern Europe</li>
                <li>• Study without IELTS options</li>
                <li>• Nursing in English programmes</li>
                <li>• Work 20 hrs/week</li>
                <li>• Warm climate; lower living cost</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Drawbacks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Most programmes in Portuguese</li>
                <li>• Limited post-study work pathway</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Portugal vs Spain vs Italy vs Poland vs Netherlands – 2026</h2>
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
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Portugal?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, proof of funds structure, nursing and English programme guidance, visa prep. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet requirement to study in Portugal and plan study in Portugal cost.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Portugal from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• Nursing and English programme guidance</li>
          <li>• Proof of funds and visa prep</li>
          <li>• Transfer from Poland/EU support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Portugal FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Portugal from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={portugalData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Book Free first, internal links */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Portugal Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to pursue study nursing in Portugal in English or study in Portugal without IELTS? Get expert guidance on study in Portugal cost and requirement to study in Portugal. Free 15-minute consultation in Kathmandu—no obligation. 1,500+ Nepali students placed.
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
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/eur/italy/" className="underline hover:text-white">Italy</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/austria/" className="underline hover:text-white">Austria</Link> · <Link href="/study-abroad/eur/switzerland/" className="underline hover:text-white">Switzerland</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/spain/" className="text-blue-600 font-semibold hover:underline">Spain</Link>
            {' · '}
            <Link href="/study-abroad/eur/italy/" className="text-blue-600 font-semibold hover:underline">Italy</Link>
            {' · '}
            <Link href="/study-abroad/eur/poland/" className="text-blue-600 font-semibold hover:underline">Poland</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/austria/" className="text-blue-600 font-semibold hover:underline">Austria</Link>
            {' · '}
            <Link href="/study-abroad/eur/switzerland/" className="text-blue-600 font-semibold hover:underline">Switzerland</Link>
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
