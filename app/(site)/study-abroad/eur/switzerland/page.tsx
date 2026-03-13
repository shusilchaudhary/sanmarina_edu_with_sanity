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
  UtensilsCrossed,
  Stethoscope,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Switzerland from Nepal 2026 | Cost, Visa & Work Rules',
  description: 'Study in Switzerland from Nepal 2026: tuition CHF 700–2,200/sem, living CHF 1,400–2,200/mo. Swiss Embassy Kathmandu (VFS from Jul 2025). 6-month post-study permit. BHM, masters. Free consultation Kathmandu.',
  keywords: 'study in switzerland, study in switzerland from nepal, study masters in switzerland, study and work in switzerland, study dentistry in switzerland, study acca in switzerland, study master in switzerland for free, cheapest university in switzerland to study bhm, drawbacks of studying in switzerland, Switzerland student visa Nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/switzerland/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/switzerland/',
    title: 'Study in Switzerland from Nepal 2026 | Cost, Visa & Work',
    description: 'Complete 2026 guide: study in Switzerland, tuition, living, work rules, BHM, dentistry. Compare with Austria, Netherlands, Germany, Poland.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Switzerland from Nepal 2026',
    description: 'Study in Switzerland: cost, visa, work 15 hrs/week. Premium destination for masters, BHM. Free consultation in Kathmandu.',
  },
};

// Data: swissuniversities.ch, SEM, ETH, EPFL, BHMS, University of Basel, Graduate Institute. 1 CHF ≈ 150 NPR (Feb 2026)
const switzerlandData = {
  country: 'Switzerland',
  slug: 'switzerland',
  heroImage: '/assets/swizerland.webp',
  lastUpdated: 'February 2026',
  description: 'Switzerland hosts 72,000+ international students. Public tuition CHF 700–2,200/semester; living CHF 1,400–2,200/month. Work 15 hrs/week (after 6 months for non-EU). 6-month post-study job search. ETH, EPFL, hospitality schools.',
  stats: {
    universities: '12 public + UAS',
    internationalStudents: '72,000+',
    postStudy: '6 months',
    workHours: '15 hrs/week',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: { public: { min: 700, max: 2200 }, ethEpfl: 2190, uas: { min: 950, max: 5000 }, bhm: 37500 },
  livingCost: { zurich: 1850, geneva: { min: 1460, max: 2720 }, lausanne: { min: 1600, max: 2200 }, general: { min: 1400, max: 2200 } },
  workHours: '15 hrs/week during term; full-time in breaks; non-EU after 6 months',
  postStudy: { duration: 6, note: 'L permit job search; not renewable' },
  requirements: [
    'Admission letter from recognized Swiss institution',
    'Valid passport (3+ months beyond stay, issued within 10 years)',
    'Proof of funds: tuition + living (CHF 1,400–2,200/month)',
    'Proof of accommodation',
    'Health insurance valid in Switzerland',
    'Detailed study plan and CV',
  ],
  visaSteps: [
    'Apply to Swiss universities (deadlines vary; ETH/EPFL typically Dec–Jan)',
    'Receive admission and pay tuition',
    'Submit visa application online at swiss-visa.ch',
    'Book appointment at Swiss Embassy, Kathmandu (VFS from July 2025 for Nepal)',
    'Provide proof of funds, accommodation, study plan',
    'Processing minimum 15 days',
    'Collect visa D and travel to Switzerland',
  ],
  faqs: [
    {
      question: 'What are the requirements to study in Switzerland from Nepal in 2026?',
      answer: 'Admission letter, passport (3+ months valid), proof of funds (tuition + CHF 1,400–2,200/month living), accommodation proof, health insurance, study plan. Academic: equivalent to Swiss Matura for Bachelor; Bachelor for Master. English or French/German per programme.',
    },
    {
      question: 'What is the cost of studying in Switzerland from Nepal?',
      answer: 'First year: CHF 25,000–50,000 (NPR 37–75 lakhs). Public tuition CHF 700–2,200/semester; living CHF 1,400–2,200/month. Zurich and Geneva highest. BHM/hospitality CHF 37,500+/year. 1 CHF ≈ 150 NPR.',
    },
    {
      question: 'Can I study and work in Switzerland as a Nepali student?',
      answer: 'Yes. Up to 15 hrs/week during term; full-time in breaks. Non-EU students can work only after 6 months residence. Employer must obtain work permission from cantonal migration. Notify authorities of any employment.',
    },
    {
      question: 'Can I study masters in Switzerland from Nepal?',
      answer: 'Yes. ETH Zurich, EPFL, University of Geneva, University of Zurich offer Master programmes. Tuition CHF 730–2,190/semester (ETH/EPFL 2,190 from 2025 for non-Swiss). Many English-taught programmes.',
    },
    {
      question: 'Is study in Switzerland free? Can I study master in Switzerland for free?',
      answer: 'No. Swiss public universities charge tuition (CHF 700–2,200/semester). Study master in Switzerland for free is not typical. Swiss Government Excellence Scholarships fund PhD/PostDoc/research—not standard Master programmes. EU-style free tuition does not apply.',
    },
    {
      question: 'What are the options to study dentistry in Switzerland?',
      answer: 'Dental medicine at University of Basel and other Swiss universities is highly restricted for non-Swiss. Admission favours EU/EFTA or Swiss permit holders. Nepali students face significant barriers; entrance exams apply when capacity exceeded. Check swissuniversities.ch.',
    },
    {
      question: 'Can I study ACCA in Switzerland?',
      answer: 'ACCA is a professional qualification, not a degree. ACCA Swiss operates CBE exam centres. You can sit ACCA exams in Switzerland. For accounting degrees, consider Swiss universities or business schools. ACCA exams can complement a degree.',
    },
    {
      question: 'What is the cheapest university in Switzerland to study BHM?',
      answer: 'Public UAS (Universities of Applied Sciences) charge CHF 950–5,000/semester for hospitality-related programmes. Private schools like BHMS charge CHF 37,500+/year all-inclusive. Compare UAS options on swissuniversities.ch.',
    },
    {
      question: 'What are the drawbacks of studying in Switzerland?',
      answer: 'High living cost (Zurich, Geneva among Europe\'s most expensive), limited post-study permit (6 months, not renewable), work restricted to 15 hrs/week and only after 6 months for non-EU. Dentistry/medicine highly restricted for international students.',
    },
    {
      question: 'Where do Nepali students apply for Switzerland student visa?',
      answer: 'Swiss Embassy, Kathmandu (Ekantakuna, Jawalakhel, Lalitpur). Apply online at swiss-visa.ch; book appointment. From July 2025, VFS Global processes applications. Processing minimum 15 days. Email: kathmandu.consular@eda.admin.ch.',
    },
    {
      question: 'Is study in Switzerland consultancy in Nepal helpful?',
      answer: 'Yes. Consultancy assists with university selection, proof of funds structure, visa prep, BHM and Master programme guidance. San Marina: free consultation in Kathmandu. 15+ years guiding Nepali students to premium European destinations.',
    },
    {
      question: 'When are Switzerland intakes and application deadlines?',
      answer: 'Autumn (Sept): ETH Master Dec 15, EPFL Dec 31, Geneva Jan 31. Spring (Feb): deadlines typically Nov–Jan. ETH Bachelor Jan 15; EPFL Jan 31. Apply 2–3 months before for visa (min 15 days).',
    },
    {
      question: 'Can Nepali students bring dependents (spouse/children) to Switzerland?',
      answer: 'Yes. Spouses and children can apply for residence permits. Proof of sufficient funds to support dependents required. Each dependent needs a separate application. Verify current rules at sem.admin.ch.',
    },
    {
      question: 'What is the PR and citizenship pathway after studying in Switzerland?',
      answer: 'Permanent residence: typically 10 years continuous residence (student + work years count). Swiss citizenship: usually 12 years residence, language proficiency, integration. Rules vary by canton; check sem.admin.ch.',
    },
    {
      question: 'Do Swiss universities accept GAP (study gap) for Nepali students?',
      answer: 'Yes. Gaps of 1–2 years for Bachelor often acceptable when explained. For Master, longer gaps permitted with relevant work experience. Provide gap justification and supporting docs. Policies vary by institution.',
    },
  ],
};

const tuitionTable = [
  { level: 'Public (Swiss)', range: 'CHF 425–1,100/semester', notes: 'Average CHF 1,448/year' },
  { level: 'Public (International)', range: 'CHF 700–2,200/semester', notes: 'ETH/EPFL CHF 2,190 from 2025' },
  { level: 'UAS (Universities of Applied Sciences)', range: 'CHF 950–5,000/semester', notes: 'International' },
  { level: 'BHM/Hospitality (private)', range: 'CHF 37,500–40,000/year', notes: 'All-inclusive' },
];

const comparisonData = [
  { country: 'Switzerland', countrySlug: null, tuition: 'CHF 700–2,200/sem', living: 'CHF 1,400–2,200/mo', work: '15 hrs/week', psw: '6 months' },
  { country: 'Austria', countrySlug: '/study-abroad/eur/austria/', tuition: '€727/sem', living: '€950–€1,100/mo', work: '20 hrs/week', psw: '12 months' },
  { country: 'Germany', countrySlug: '/study-abroad/eur/germany/', tuition: '€0 (most)', living: '€11,904/year', work: '20 hrs/week', psw: '18 months' },
  { country: 'Netherlands', countrySlug: '/study-abroad/eur/netherlands/', tuition: '€6,000–€20,000', living: '€1,000–€1,700/mo', work: '16 hrs or Jun–Aug', psw: '12 months' },
  { country: 'Poland', countrySlug: '/study-abroad/eur/poland/', tuition: '€2,000–€18,000', living: '€500–€900/mo', work: '20 hrs or breaks', psw: '9 months' },
  { country: 'Spain', countrySlug: '/study-abroad/eur/spain/', tuition: '€2,700–€9,300', living: '€800–€1,200/mo', work: '30 hrs/week', psw: '—' },
  { country: 'Italy', countrySlug: '/study-abroad/eur/italy/', tuition: '€1,000–€5,000', living: '€800–€1,500/mo', work: '20 hrs/week', psw: '—' },
];

export default function SwitzerlandStudyPage() {
  const visaStepsWithText = [
    { name: 'Apply to Swiss universities (deadlines vary; ETH/EPFL typically Dec–Jan)', text: 'Autumn: ETH Master Dec 15, EPFL Dec 31. Spring: Jan–Feb. Check swissuniversities.ch.' },
    { name: 'Receive admission and pay tuition', text: 'Secure offer; pay first semester.' },
    { name: 'Submit visa application online at swiss-visa.ch', text: 'Complete form; upload documents.' },
    { name: 'Book appointment at Swiss Embassy, Kathmandu (VFS from July 2025 for Nepal)', text: 'Ekantakuna, Jawalakhel, Lalitpur.' },
    { name: 'Provide proof of funds, accommodation, study plan', text: 'CHF 1,400–2,200/month living + tuition.' },
    { name: 'Processing minimum 15 days', text: 'Apply 2–3 months before course start.' },
    { name: 'Collect visa D and travel to Switzerland', text: 'Register at university and cantonal migration.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Switzerland from Nepal 2026 – Complete Guide',
        description: switzerlandData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: switzerlandData.author.name, url: 'https://www.sanmarina.edu.np', description: switzerlandData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Switzerland study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Switzerland from Nepal', 'Swiss Govt Excellence Scholarships', 'Swiss Embassy Kathmandu', 'Study masters in Switzerland', 'BHM Switzerland', 'Study dentistry in Switzerland'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Switzerland Student Visa from Nepal',
        description: 'Step-by-step: apply at swiss-visa.ch, Swiss Embassy Kathmandu (VFS from Jul 2025), proof CHF 1,400–2,200/mo, visa D min 15 days. Per SEM, swissuniversities.ch 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: switzerlandData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 4, name: 'Switzerland', item: 'https://www.sanmarina.edu.np/study-abroad/eur/switzerland/' },
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
          <Image src={switzerlandData.heroImage} alt="Nepali students studying in Switzerland - Zurich Geneva, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Switzerland</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {switzerlandData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Switzerland from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Work Rules</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Premium destination: study masters in Switzerland, BHM, work 15 hrs/week. Swiss Government Excellence Scholarships for research. Study in Switzerland from Nepal with expert guidance.
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
          <p className="text-sm text-blue-100 mt-4">Serious about Switzerland? Get a free 15-minute call with our premium-study experts. No obligation.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: Swiss universities, SEM.</strong> Tuition CHF 700–2,200/sem; living CHF 1,400–2,200/mo. Verify at <a href="https://www.swissuniversities.ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">swissuniversities.ch</a>, <a href="https://www.sem.admin.ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">sem.admin.ch</a>, <a href="https://www.swiss-visa.ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">swiss-visa.ch</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {switzerlandData.author.name} · {switzerlandData.author.role} · {switzerlandData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Switzerland from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition (public, non-Swiss)</td><td className="p-3">CHF 700–2,200/semester (ETH/EPFL CHF 2,190 from 2025)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living proof</td><td className="p-3">CHF 1,400–2,200/month + tuition</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">Visa D; Swiss Embassy Kathmandu (VFS from Jul 2025); min 15 days</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">15 hrs/week; non-EU after 6 months; employer applies to cantonal migration</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">6 months L permit job search; not renewable</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">BHM (private)</td><td className="p-3">CHF 37,500+/year all-inclusive</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: swissuniversities.ch, SEM. Verify at <a href="https://www.swissuniversities.ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">swissuniversities.ch</a>, <a href="https://www.sem.admin.ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">sem.admin.ch</a>, <a href="https://www.swiss-visa.ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">swiss-visa.ch</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: switzerlandData.stats.universities, label: 'Universities' },
              { value: switzerlandData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: switzerlandData.stats.workHours, label: 'Work (term)' },
              { value: switzerlandData.stats.postStudy, label: 'Post-Study Permit' },
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

      {/* Why Study in Switzerland */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Switzerland in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> ETH Zurich and EPFL rank among the world&apos;s best. Study masters in Switzerland offers strong programmes in engineering, business, hospitality. Compare with <Link href="/study-abroad/eur/austria/" className="text-blue-600 hover:underline">Austria</Link>, <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link>, <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>. Explore <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships</Link>.
        </p>
        <p className="text-gray-700">
          Premium country positioning: higher living costs but world-class universities. Drawbacks of studying in Switzerland include limited post-study permit (6 months) and work restrictions. Plan finances carefully.
        </p>
      </section>

      {/* Cost of Studying in Switzerland */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Cost of Studying in Switzerland</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> First year CHF 25,000–50,000 (NPR 37–75 lakhs). Public tuition CHF 700–2,200/semester; living CHF 1,400–2,200/month. Zurich and Geneva highest. BHM CHF 37,500+/year. 1 CHF ≈ 150 NPR. Compare with <Link href="/study-abroad/eur/austria/" className="text-blue-600 hover:underline">Austria</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
          </p>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            <strong>Definition:</strong> The cost of studying in Switzerland for Nepali students includes tuition (CHF 700–2,200/semester at public or CHF 37,500+ at BHM schools), living (CHF 1,400–2,200/month), health insurance (CHF 85–400/month), and airfare.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">First-Year Cost Breakdown (Nepali Students)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">CHF</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tuition (Public, 2 sem)</td><td className="p-3">CHF 1,400–4,400</td><td className="p-3">2.1–6.6L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (BHM/private)</td><td className="p-3">CHF 37,500+</td><td className="p-3">56L+</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">CHF 16,800–26,400</td><td className="p-3">25–40L</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~CHF 900</td><td className="p-3">1.4L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">CHF 25,000–50,000</td><td className="p-3 font-medium">37–75L</td></tr>
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
                <tr className="border-b border-gray-100"><td className="p-3">Zurich (shared)</td><td className="p-3">CHF 700–1,200</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Geneva (shared)</td><td className="p-3">CHF 700–1,300</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Lausanne, Bern, Basel</td><td className="p-3">CHF 600–1,000</td></tr>
                <tr><td className="p-3">Student residence</td><td className="p-3">CHF 500–900</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost by City</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Zurich (Highest)</p>
              <p className="text-lg font-bold">~CHF 1,850/mo</p>
              <p className="text-sm text-gray-600">NPR 2.8L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Geneva</p>
              <p className="text-lg font-bold">CHF 1,460–2,720/mo</p>
              <p className="text-sm text-gray-600">NPR 2.2–4.1L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Lausanne, Bern</p>
              <p className="text-lg font-bold">CHF 1,600–2,200/mo</p>
              <p className="text-sm text-gray-600">NPR 2.4–3.3L</p>
            </div>
          </div>
        </div>
      </section>

      {/* Study and Work in Switzerland */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Study and Work in Switzerland
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Up to 15 hrs/week during semester; full-time during breaks. Non-EU students can work only after 6 months residence. Employer must request work permission from cantonal migration. Notify authorities of any employment.
          </p>
          <p className="text-gray-600 text-sm mb-4 max-w-3xl">
            <strong>Definition:</strong> Study and work in Switzerland means international students can work part-time (15 hrs/week) during term and full-time in breaks. Non-EU: work permitted only after 6 months; employer obtains cantonal permission. Typical pay CHF 20–30/hr.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 15 hrs/week during semester; full-time in breaks</li>
            <li>• Non-EU: work only after 6 months residence</li>
            <li>• Employer applies to cantonal migration</li>
            <li>• Part-time income CHF 1,200–1,800/month typical</li>
          </ul>
        </div>
      </section>

      {/* Masters in Switzerland */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study Masters in Switzerland</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> ETH Zurich, EPFL Lausanne, University of Geneva, University of Zurich offer English-taught Master programmes. Tuition CHF 730–2,190/semester (ETH/EPFL CHF 2,190 from 2025 for non-Swiss). Strong in engineering, computer science, life sciences.
        </p>
        <p className="text-gray-700 mb-4">
          Study master in Switzerland for free? No. Tuition applies at all public universities. Swiss Government Excellence Scholarships fund PhD/PostDoc and research—not standard taught Master programmes. Plan for tuition and living costs.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'ETH Zurich', programmes: 'Engineering, CS, Life Sciences' },
            { name: 'EPFL Lausanne', programmes: 'Engineering, Computer Science' },
            { name: 'University of Geneva', programmes: 'Sciences, Business' },
            { name: 'University of Zurich', programmes: 'All disciplines' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F]">{u.name}</h3>
              <p className="text-sm text-gray-600">{u.programmes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Switzerland for Nepali Students</h2>
          <p className="text-gray-700 mb-6 font-medium max-w-3xl">
            <strong>Quick answer:</strong> Switzerland excels in engineering, business, hospitality, life sciences, and international relations. ETH and EPFL lead in engineering/tech. Nepali students often choose Master programmes, BHM, or MBA.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { field: 'Engineering & Technology', desc: 'ETH Zurich, EPFL. Mechanical, computer science, electrical. World-leading research. Tuition CHF 730–2,190/sem.', icon: '⚙️' },
              { field: 'Business & Finance', desc: 'St. Gallen, IMD Lausanne. MBA, banking, wealth management. Switzerland\'s financial hub.', icon: '📊' },
              { field: 'Hospitality & Tourism', desc: 'BHMS, EHL, Glion. Hotel management, luxury hospitality. Strong industry links.', icon: '🏔️' },
              { field: 'Life Sciences & Medicine', desc: 'University of Zurich, Basel. Pharmaceutical, biotech. Novartis, Roche nearby.', icon: '🔬' },
              { field: 'International Relations & Law', desc: 'Graduate Institute Geneva, University of Geneva. UN, ICRC, WTO in Geneva.', icon: '🌍' },
              { field: 'Environmental Sciences', desc: 'ETH, EPFL, Zurich. Sustainability, climate. Switzerland\'s green focus.', icon: '🌿' },
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

      {/* BHM & Hospitality */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <UtensilsCrossed className="text-green-600" size={28} />
            BHM & Hospitality Programmes in Switzerland
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Private hospitality schools (e.g. BHMS) charge CHF 37,500–40,000/year all-inclusive. Public UAS offer hospitality at CHF 950–5,000/semester. Cheapest university in Switzerland to study BHM: public UAS.
          </p>
          <p className="text-gray-700 mb-4">
            BHMS (Lucerne, Zurich from 2025) offers BA Hotel & Hospitality Management, postgraduate diplomas, Master programmes. Fees include tuition, accommodation, meals (24 weeks). Public UAS: lower cost but fewer all-inclusive options.
          </p>
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-[#001F3F] mb-3">BHM Cost Comparison</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>BHMS (private):</strong> CHF 37,500–39,500/year all-inclusive</li>
              <li>• <strong>Public UAS:</strong> CHF 950–5,000/semester tuition only</li>
              <li>• Add living CHF 1,400–2,200/month for UAS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dentistry */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Stethoscope className="text-[#0056b3]" size={28} />
            Study Dentistry in Switzerland
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Dental medicine at University of Basel and other Swiss universities is highly restricted for non-Swiss. Admission favours EU/EFTA citizens or Swiss permit holders. Nepali students face significant barriers; entrance exams apply when capacity exceeded.
          </p>
          <p className="text-gray-700">
            Study dentistry in Switzerland requirements: applications via swissuniversities; deadline typically Feb 15. Non-Swiss applicants must meet special provisions (Swiss/Liechtenstein citizenship, EU/EFTA residence, or Swiss Maturität). For Nepali students, dentistry pathways are limited—consider alternatives in Poland, Italy, or other EU destinations.
          </p>
        </div>
      </section>

      {/* Scholarships & Free Study Reality */}
      <section className="py-16 bg-amber-50 border border-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-amber-600" size={28} />
            Scholarships & Is Study in Switzerland Free?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Is study in Switzerland free? No. Swiss Government Excellence Scholarships fund PhD/PostDoc and research fellowships—not standard Master programmes. Study master in Switzerland for free is not typical for Nepali students.
          </p>
          <p className="text-gray-700 mb-4">
            Swiss Government Excellence Scholarships (FCS): fully funded for research at Swiss universities. Requires nomination by Swiss academic supervisor. Check SBFI and <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>. ETH Excellence Scholarship: for top Master applicants at ETH Zurich.
          </p>
        </div>
      </section>

      {/* Intakes & Application Deadlines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Switzerland Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Autumn (Sept): ETH Master Dec 15, EPFL Dec 31, Geneva Jan 31, Basel Dec 15. Spring (Feb): deadlines typically Nov–Jan. ETH Bachelor Jan 15; EPFL Jan 31. Visa min 15 days; apply 2–3 months before course start.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">University</th><th className="p-4 text-left">Bachelor (Autumn)</th><th className="p-4 text-left">Master (Autumn)</th><th className="p-4 text-left">Spring</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">ETH Zurich</td><td className="p-4">Jan 15</td><td className="p-4">Dec 15</td><td className="p-4">Apr (Swiss); Nov (intl)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">EPFL</td><td className="p-4">Jan 31</td><td className="p-4">Dec 31</td><td className="p-4">Jan 31</td></tr>
                <tr><td className="p-4 font-semibold">University of Geneva</td><td className="p-4">Feb 28</td><td className="p-4">Jan 31</td><td className="p-4">Nov–Jan</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Language Requirements */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Language Requirements & Study Without IELTS</h2>
        <p className="text-gray-700 mb-4">
          Many Master programmes are taught in English. Universities may accept TOEFL, Cambridge, or prior English-medium proof. German/French required for programmes in local language. For <Link href="/services/" className="text-blue-600 hover:underline">IELTS and test preparation</Link>, San Marina offers coaching in Kathmandu.
        </p>
      </section>

      {/* ACCA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study ACCA in Switzerland</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> ACCA is a professional qualification, not a degree. ACCA Swiss operates CBE exam centres. You can sit ACCA exams in Switzerland while studying for a degree. For accounting degrees, consider Swiss universities or business schools.
        </p>
      </section>

      {/* Drawbacks */}
      <section className="py-16 bg-amber-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Drawbacks of Studying in Switzerland</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> High living cost (Zurich, Geneva among Europe&apos;s most expensive), 6-month post-study permit (not renewable), work restricted to 15 hrs/week and only after 6 months for non-EU. Dentistry/medicine highly restricted.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Living cost CHF 1,400–2,200/month</li>
            <li>• Post-study: 6 months only; no extension</li>
            <li>• Work: 15 hrs/week; non-EU after 6 months</li>
            <li>• Dentistry/medicine: limited for international students</li>
          </ul>
        </div>
      </section>

      {/* Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can Nepali Students Bring Dependents to Switzerland?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Spouses and children can apply for residence permits as family members. Proof of sufficient funds to support dependents is required. Each dependent submits a separate application.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          Swiss immigration allows family reunification for students. Dependents must demonstrate adequate financial means. Rules vary by canton; verify at <a href="https://www.sem.admin.ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">sem.admin.ch</a>.
        </p>
      </section>

      {/* Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Switzerland Student Visa for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Apply online at swiss-visa.ch; book appointment at Swiss Embassy, Kathmandu. From July 2025, VFS Global processes. Proof of funds, accommodation, study plan required. Processing minimum 15 days.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students apply for Switzerland student visa?</h4>
          <p className="text-gray-700 text-sm">
            Swiss Embassy, Kathmandu (Ekantakuna, Jawalakhel, Lalitpur). Apply at swiss-visa.ch; book appointment. From July 2025: VFS Global. Tel: +977 1 544 92 25. Email: kathmandu.consular@eda.admin.ch.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">GAP (Study Gap) Acceptance for Nepali Students</h3>
        <p className="text-gray-700 mb-4 max-w-3xl">
          Swiss universities generally accept study gaps when explained. For Bachelor: gaps of 1–2 years often acceptable (work, internship, personal reasons). For Master: longer gaps permitted with relevant work experience. Provide gap justification letter and supporting documents.
        </p>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Switzerland Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Insufficient proof of funds (must show CHF 1,400–2,200/month living + tuition)</li>
          <li>Missing accommodation proof or vague study plan</li>
          <li>Health insurance not valid in Switzerland</li>
          <li>Applying too late—allow min 15 days processing; apply 2–3 months before course start</li>
          <li>Incomplete or untranslated academic documents</li>
        </ul>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Visa Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-12">
          {switzerlandData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {switzerlandData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* PR and Citizenship Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Switzerland</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Permanent residence typically requires 10 years of continuous legal residence (student + work years count). Swiss citizenship usually requires 12 years residence, language proficiency, and integration.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          Rules vary by canton. The 6-month post-study L permit allows job search; once employed, work permit leads to residence. Verify current criteria at <a href="https://www.sem.admin.ch" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">sem.admin.ch</a>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Permanent residence</td><td className="p-3">10 years continuous legal stay (student + work permits count)</td></tr>
              <tr><td className="p-3 font-semibold">Swiss citizenship</td><td className="p-3">12 years residence; language proficiency; integration; varies by canton</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Drawbacks of Studying in Switzerland</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ETH, EPFL world rankings</li>
                <li>• Strong Master programmes</li>
                <li>• Swiss Govt Excellence Scholarships</li>
                <li>• BHM/hospitality schools</li>
                <li>• Safe, high-quality life</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Drawbacks</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• High living cost</li>
                <li>• 6-month post-study only</li>
                <li>• Work: 15 hrs, after 6 months</li>
                <li>• Dentistry restricted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Switzerland vs Austria vs Germany vs Netherlands vs Poland – 2026</h2>
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
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Switzerland?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, proof of funds structure, BHM and Master programme advice, visa prep. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. Premium country positioning—we help you plan the cost of studying in Switzerland and study and work in Switzerland rules.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Switzerland from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• BHM, Master, scholarship guidance</li>
          <li>• Proof of funds and visa prep</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Switzerland FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Switzerland from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={switzerlandData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Book Free first, internal links */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Switzerland Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to pursue study masters in Switzerland or BHM? Get expert guidance on cost of studying in Switzerland, study and work in Switzerland rules, and scholarships. Free 15-minute consultation in Kathmandu—no obligation. 1,500+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply Now
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/austria/" className="underline hover:text-white">Austria</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/eur/italy/" className="underline hover:text-white">Italy</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/austria/" className="text-blue-600 font-semibold hover:underline">Austria</Link>
            {' · '}
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
