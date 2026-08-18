import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
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
  title: 'Study in Czech Republic | Cost & Visa',
  description: 'Study in Czech Republic from Nepal 2026: tuition free in Czech, €0–15,000 in English. Proof ~€500/mo. Czech Embassy New Delhi (not Kathmandu). No work-hour limit. Free consultation Kathmandu.',
  keywords: 'study in Czech Republic from Nepal, Czech Republic student visa for Nepali students, universities in Czech Republic for international students English, cheapest universities in Czech Republic, tuition fees in Czech Republic for international students 2026, living cost in Czech Republic for students, how to apply to Czech universities from Nepal, English taught bachelor master programs Czech Republic, work while studying in Czech Republic rules 2026, application deadlines Czech universities 2026 2027, long term visa vs residence permit Czechia students, recognition of Nepali degree in Czech Republic, cheapest cities to live in Czech Republic as a student',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/czech-republic/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/czech-republic/',
    title: 'Study in Czech Republic from Nepal 2026 | Cost, Visa & Work',
    description: 'Complete 2026 guide: study in Czech Republic, tuition, living costs, work rules, post-study pathway. Charles University, CTU, Masaryk. Apply from Nepal.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-24',
    modifiedTime: '2026-02-24',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Czech Republic from Nepal 2026',
    description: 'Czech Republic: cost, visa, work rules. Free consultation in Kathmandu.',
  },
};

// Data from studyin.cz, Czech Ministry of Education, IPC, Czech Embassy, university sites. 1 EUR ≈ 143 NPR (Feb 2026)
const czechData = {
  country: 'Czech Republic',
  slug: 'czech-republic',
  heroImage: '/assets/europe.jpg',
  lastUpdated: 'February 2026',
  description: 'Czech Republic hosts 50,000+ international students. Tuition in English €0–€15,000/year; free if studying in Czech. Living €400–€800/month. No work-hour limit for students. Long-term residence permit for studies. Charles University, CTU, Masaryk among top choices.',
  stats: {
    universities: '70+',
    internationalStudents: '50,000+',
    englishPrograms: '500+',
    postStudy: 'Job-search permit',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: { czechLang: 0, englishMin: 0, englishMax: 15000, nprMin: 0, nprMax: 2145000 },
  livingCost: { prague: { min: 550, max: 1000 }, brno: { min: 400, max: 700 }, ostrava: { min: 350, max: 600 } },
  workHours: 'No specific limit; students can work full-time while maintaining study obligations',
  postStudy: { note: 'Job-search residence permit; graduates can apply for employment residence' },
  visaLocation: 'Czech Embassy in New Delhi, India (Nepali students apply here; Honorary Consulate Kathmandu does not process visas)',
  visaProcessing: 'Typically 60–90 days; apply well in advance',
  requirements: [
    'Admission letter from accredited Czech university',
    'Valid passport (3+ months beyond stay)',
    'Proof of funds: ~€500/month minimum for living plus tuition',
    'Health insurance valid in Czech Republic',
    'IELTS 6.0–6.5 or TOEFL/Cambridge/prior English-medium proof for English programmes',
    'Nostrification of foreign degree (if required for admission)',
  ],
  visaSteps: [
    'Apply to Czech universities (deadlines vary; many February–April for autumn intake)',
    'Receive admission and pay tuition deposit if applicable',
    'Gather proof of funds: bank statements or sponsorship (6 months recommended)',
    'Book appointment at Czech Embassy in New Delhi, India – Nepali students apply here in person',
    'Submit long-term visa application (purpose: study) with passport, photos, health insurance',
    'Processing typically 60–90 days; apply at least 3 months before travel',
    'Collect visa and travel to Czech Republic; extend residence permit in Prague if needed',
  ],
  faqs: [
    {
      question: 'What are study in Czech Republic requirements for Nepali students in 2026?',
      answer: 'Admission letter from accredited Czech university, passport, proof of funds (~€500/month minimum for living plus tuition), health insurance. IELTS 6.0–6.5 or equivalent for English programmes. Nostrification of foreign degree may be required. See studyin.cz and university portals.',
    },
    {
      question: 'What is the cost of studying in Czech Republic from Nepal?',
      answer: 'First year: €5,000–€25,000 (NPR 7–36 lakhs). Tuition €0–€15,000/year; free if studying in Czech. Living €400–€800/month (Brno, Ostrava cheaper than Prague). 1 EUR ≈ 143 NPR (Feb 2026). Erasmus+ and university scholarships reduce cost.',
    },
    {
      question: 'Can I work while studying in Czech Republic as a Nepali student?',
      answer: 'Yes. Students with study residence permit do not need a work permit. There is no specific limit on work hours; you can work full-time as long as you maintain study obligations (attendance, exams). See IPC and euraxess.cz for official rules.',
    },
    {
      question: 'Where do Nepali students apply for Czech Republic student visa?',
      answer: 'Nepali students apply in person at the Czech Embassy in New Delhi, India (50-M, Niti Marg, Chanakyapuri). The Honorary Consulate in Kathmandu does not process visa applications. Processing typically 60–90 days. Apply at least 3 months before travel.',
    },
    {
      question: 'What is the tuition fees in Czech Republic for international students 2026?',
      answer: 'Study in Czech language: free at public universities. English programmes: €0–€15,000/year; Charles University €1,020–€24,330; Prague universities €1,000–€15,600 for English-taught. See studyin.cz and university websites.',
    },
    {
      question: 'What is the living cost in Czech Republic for students?',
      answer: 'Prague €550–€1,000/month; Brno €400–€700; Ostrava €350–€600. Cheapest cities: Ostrava, Brno, Pardubice. University dormitory €130–€280/month. Total ~€5,100/year for accommodation. See Charles University and Masaryk cost guides.',
    },
    {
      question: 'How is recognition of Nepali degree in Czech Republic done?',
      answer: 'Nostrification is required for foreign degrees. Nepal is Country Type B. Steps: legalize diploma (apostille), translate to Czech/English by certified translator, submit nostrification application. University-level recognition by Czech universities offering similar programmes. Fee ~3,000 CZK. See nostrifikace.mkc.cz and gov.cz.',
    },
    {
      question: 'What are application deadlines Czech universities 2026/2027?',
      answer: 'Varies by university. Charles University: February–April for autumn intake. Prague University of Economics: 1st deadline Feb 28, 2nd deadline Apr 30, 2026. Masaryk: February 28–May 31. CZU: September–December and January–March. Check each university portal.',
    },
    {
      question: 'Long term visa vs residence permit Czechia for students – what is the difference?',
      answer: 'Long-term visa (D): issued abroad for entry; valid up to 1 year. Long-term residence permit: issued for studies in Czech Republic; valid up to 1–2 years; can be extended. Both allow work without permit. Apply for visa at Czech Embassy in New Delhi; extend in Prague at Ministry of Interior.',
    },
    {
      question: 'Which are the cheapest universities in Czech Republic for international students?',
      answer: 'Public universities offer free study in Czech. For English: Charles University €1,020–€24,330; Prague universities €1,000–€15,600; Czech University of Life Sciences (CZU) and Masaryk have competitive fees. Check portal.studyin.cz for programme-by-programme fees.',
    },
    {
      question: 'When are Czech Republic intakes and application deadlines?',
      answer: 'Charles University: Feb–Jun/Jul for autumn. Masaryk: Nov 1–Feb 28 (Bachelor/Master); Medicine Jan–Jul 31. CZU: Sep–Dec, Jan–Mar. CTU: Mar 31 for 2026/27. Apply 3+ months before for visa (60–90 days).',
    },
    {
      question: 'Can Nepali students bring dependents (spouse/children) to Czech Republic?',
      answer: 'Yes. Family reunification is possible. Spouses and children can apply for residence. Proof of funds to support family required. Each dependent needs separate application. Verify at mzv.cz, mvcr.cz.',
    },
    {
      question: 'What is the PR and citizenship pathway after studying in Czech Republic?',
      answer: 'Five years of continuous legal residence (including student + work) can qualify for permanent residence. Citizenship: 5 years for EU citizens; 5 years residence + language for others. Rules at mvcr.cz.',
    },
    {
      question: 'Do Czech universities accept GAP (study gap) for Nepali students?',
      answer: 'Yes. Many Czech universities accept gaps when explained (work, family, health). Provide gap justification. Nostrification and programme requirements apply. Policies vary by institution.',
    },
  ],
};

const tuitionTable = [
  { level: 'Czech language (public)', range: 'Free', notes: 'All nationalities' },
  { level: 'Bachelor (English)', range: '€2,000–€12,000/year', notes: 'Varies by university and field' },
  { level: 'Master (English)', range: '€2,000–€15,000/year', notes: 'Medicine higher' },
];

const comparisonData = [
  { country: 'Czech Republic', countrySlug: null, tuition: '€0–€15,000', living: '€400–€800/mo', work: 'No hour limit', psw: 'Job-search permit' },
  { country: 'Poland', countrySlug: '/study-abroad/eur/poland/', tuition: '€2,000–€18,000', living: '€500–€900/mo', work: '20 hrs or full-time breaks', psw: '9 months' },
  { country: 'Germany', countrySlug: '/study-abroad/eur/germany/', tuition: '€0 (most)', living: '€11,904/year', work: '20 hrs/week', psw: '18 months' },
  { country: 'Austria', countrySlug: '/study-abroad/eur/austria/', tuition: '€727/sem', living: '€950–€1,100/mo', work: '20 hrs/week', psw: '12 months' },
  { country: 'Netherlands', countrySlug: '/study-abroad/eur/netherlands/', tuition: '€6,000–€20,000', living: '€1,000–€1,700/mo', work: '16 hrs or Jun–Aug', psw: '12 months' },
  { country: 'Spain', countrySlug: '/study-abroad/eur/spain/', tuition: '€2,700–€9,300', living: '€800–€1,200/mo', work: '30 hrs/week', psw: '—' },
  { country: 'Italy', countrySlug: '/study-abroad/eur/italy/', tuition: '€1,000–€5,000', living: '€800–€1,500/mo', work: '20 hrs/week', psw: '—' },
];

export default function CzechRepublicStudyPage() {
  const visaStepsWithText = [
    { name: 'Apply to Czech universities (deadlines vary; many February–April for autumn intake)', text: 'Charles Feb–Jun; Masaryk Nov–Feb 28; CZU Sep–Dec, Jan–Mar. Check studyin.cz.' },
    { name: 'Receive admission and pay tuition deposit if applicable', text: 'Secure offer; pay if required.' },
    { name: 'Gather proof of funds: bank statements or sponsorship (6 months recommended)', text: '~€500/month living + tuition.' },
    { name: 'Book appointment at Czech Embassy in New Delhi, India – Nepali students apply here in person', text: '50-M Niti Marg, Chanakyapuri. No visa in Kathmandu.' },
    { name: 'Submit long-term visa application (purpose: study) with passport, photos, health insurance', text: 'Processing typically 60–90 days.' },
    { name: 'Processing typically 60–90 days; apply at least 3 months before travel', text: 'Apply early; no expedite for Nepal.' },
    { name: 'Collect visa and travel to Czech Republic; extend residence permit in Prague if needed', text: 'Visa for entry; residence permit for extended stay.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Czech Republic from Nepal 2026 – Complete Guide',
        description: czechData.description,
        datePublished: '2026-02-24',
        dateModified: '2026-02-24',
        author: { '@type': 'Organization', name: czechData.author.name, url: 'https://www.sanmarina.edu.np', description: czechData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: czechData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Czech Republic Student Visa from Nepal',
        description: 'Step-by-step: apply to university, proof ~€500/mo + tuition, Czech Embassy New Delhi (not Kathmandu), long-term visa 60–90 days. Per studyin.cz, mzv.cz 2026.',
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
          { '@type': 'ListItem', position: 4, name: 'Czech Republic', item: 'https://www.sanmarina.edu.np/study-abroad/eur/czech-republic/' },
        ],
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Czech Republic study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Czech Republic from Nepal', 'Czech Embassy New Delhi', 'Nostrification Czech Republic', 'Study in Czech language free', 'Work while studying Czech Republic'],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={czechData.heroImage} alt="Nepali students studying in Czech Republic - Prague Brno, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Czech Republic</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {czechData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex items-center">
            Study in Czech Republic <Image src='/assets/czech.png' width={100} height={100} alt="czech repubic flag" />
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Czech Republic study experts. No obligation—perfect for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: studyin.cz, Czech Ministry of Education, IPC.</strong> Tuition €0–€15,000; proof ~€500/mo. Verify at <a href="https://www.studyin.cz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyin.cz</a>, <a href="https://www.msmt.gov.cz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">msmt.gov.cz</a>, <a href="https://www.mzv.cz/newdelhi/en/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mzv.cz</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {czechData.author.name} · {czechData.author.role} · {czechData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Czech Republic from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">Free in Czech; €0–€15,000 for English</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living proof</td><td className="p-3">~€500/month minimum + tuition</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">Czech Embassy New Delhi (not Kathmandu); 60–90 days</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">No hour limit; no work permit for students</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">Job-search residence permit; employment residence</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Nostrification</td><td className="p-3">Required for foreign degree recognition</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: studyin.cz, MSMT, IPC. Verify at <a href="https://www.studyin.cz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyin.cz</a>, <a href="https://www.msmt.gov.cz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">msmt.gov.cz</a>, <a href="https://www.mzv.cz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mzv.cz</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: czechData.stats.universities, label: 'Universities' },
              { value: czechData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: czechData.stats.englishPrograms, label: 'English Programmes' },
              { value: czechData.stats.postStudy, label: 'Post-Study Permit' },
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

      {/* 1. Why Study in Czech Republic */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Czech Republic in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Free tuition in Czech; affordable English programmes €0–€15,000, living €400–€800/month. No work-hour limit for students. Charles University, Czech Technical University (CTU), Masaryk University. Compare with <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/austria/" className="text-blue-600 hover:underline">Austria</Link>, or <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Cost of studying in Czech Republic is lower than Netherlands or UK. Nepali students choose Czech for engineering, medicine, and business. Erasmus+ and university scholarships available. Explore <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships</Link>.
        </p>
      </section>

      {/* 2. Cost of Studying */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Tuition Fees in Czech Republic for International Students 2026</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> First year €5,000–€25,000 (NPR 7–36 lakhs). Tuition €0–€15,000/year; free if studying in Czech. Living €400–€800/month. Brno and Ostrava are among the cheapest cities to live in Czech Republic as a student. 1 EUR ≈ 143 NPR (Feb 2026). Compare with <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>.
          </p>
          <p className="text-gray-600 text-sm mb-6 max-w-3xl">
            <strong>Definition:</strong> The cost of studying in Czech Republic for Nepali students includes tuition (€0–€15,000/year; free in Czech), living expenses (€400–€800/month), health insurance, and airfare. It is lower than Netherlands, UK, or Australia. (Source: <a href="https://www.studyin.cz/plan-your-studies/tuition-fees/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyin.cz</a>)
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
                <tr className="border-b"><td className="p-3">Tuition (Czech language)</td><td className="p-3">€0</td><td className="p-3">Free</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (English Bachelor)</td><td className="p-3">€2,000–€12,000</td><td className="p-3">2.9–17.2L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (English Master)</td><td className="p-3">€2,000–€15,000</td><td className="p-3">2.9–21.5L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€4,800–€9,600</td><td className="p-3">6.9–13.7L</td></tr>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Accommodation for Nepali Students</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City / Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">Prague (shared)</td><td className="p-3">€250–450</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Brno (shared)</td><td className="p-3">€180–350</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Ostrava</td><td className="p-3">€150–300</td></tr>
                <tr><td className="p-3">Student dormitory</td><td className="p-3">€130–280</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Czech Republic for Students – by City</h3>
          <p className="text-gray-700 mb-4">
            <strong>Cheapest cities to live in Czech Republic as a student:</strong> Ostrava, Brno, Pardubice. Prague is more expensive but offers more opportunities.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Prague</p>
              <p className="text-lg font-bold">€550–€1,000/mo</p>
              <p className="text-sm text-gray-600">NPR 0.8–1.4L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Brno (cheaper)</p>
              <p className="text-lg font-bold">€400–€700/mo</p>
              <p className="text-sm text-gray-600">NPR 0.6–1.0L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Ostrava (cheapest)</p>
              <p className="text-lg font-bold">€350–€600/mo</p>
              <p className="text-sm text-gray-600">NPR 0.5–0.9L</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Work While Studying in Czech Republic Rules 2026
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Students with study residence permit do not need a work permit. There is no specific limit on work hours—you can work full-time as long as you maintain study obligations (attendance, exams). (Source: <a href="https://www.euraxess.cz/czech-republic/information-assistance/employment-conditions-and-work-permits" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">euraxess.cz</a>, <a href="https://ipc.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence-permits/long-term-residence-permit-in-the-czech-republic-for-the-purpose-of-studies/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">ipc.gov.cz</a>)
          </p>
          <p className="text-gray-600 text-sm mb-4 max-w-3xl">
            <strong>Definition:</strong> Work while studying in Czech Republic means Nepali students can work part-time or full-time without a work permit, as long as they remain enrolled and fulfil study obligations. The residence permit is valid for study; employment is free access.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• No work permit required for students</li>
            <li>• No specific hour limit (unlike Poland 20 hrs)</li>
            <li>• Full-time work allowed while maintaining study</li>
            <li>• Post-study: job-search residence permit; graduates can apply for employment residence</li>
          </ul>
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Czech Republic for Nepali Students</h2>
          <p className="text-gray-700 mb-6 font-medium max-w-3xl">
            <strong>Quick answer:</strong> Czech Republic excels in engineering, medicine, business, and natural sciences. 500+ English programmes. Nepali students often choose Charles (medicine, sciences), CTU (engineering), Masaryk (general), and Prague University of Economics.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { field: 'Engineering & Technology', desc: 'CTU, Brno University of Technology. Mechanical, electrical, computer science. Strong industry links.', icon: '⚙️' },
              { field: 'Medicine & Health Sciences', desc: 'Charles University. 6-year general medicine, dentistry. English-taught. Highly competitive.', icon: '🏥' },
              { field: 'Business & Economics', desc: 'Prague University of Economics, Masaryk. MBA, finance, management. English options.', icon: '📊' },
              { field: 'Natural Sciences', desc: 'Charles University, CZU. Chemistry, biology, environmental. Research focus.', icon: '🔬' },
              { field: 'Humanities & Social Sciences', desc: 'Charles University, Masaryk. History, philosophy, international relations.', icon: '📚' },
              { field: 'Computer Science & IT', desc: 'CTU, Masaryk, Brno. Software engineering, data science. Free in Czech.', icon: '💻' },
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

      {/* 4. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Universities in Czech Republic for International Students (English)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Charles University, Czech Technical University (CTU), Masaryk University, Czech University of Life Sciences (CZU), Prague University of Economics. Strong in engineering, medicine, business.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Charles University', city: 'Prague', programs: 'Medicine, Sciences, Humanities' },
            { name: 'Czech Technical University (CTU)', city: 'Prague', programs: 'Engineering, Technology' },
            { name: 'Masaryk University', city: 'Brno', programs: 'All disciplines' },
            { name: 'Czech University of Life Sciences', city: 'Prague', programs: 'Agriculture, Life Sciences' },
            { name: 'Prague University of Economics', city: 'Prague', programs: 'Business, Economics' },
            { name: 'Brno University of Technology', city: 'Brno', programs: 'Engineering' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarships for Study in Czech Republic
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Czech government scholarship for developing countries 2026/2027 does not include Nepal in the eligible countries list (2026/27: Belarus, Bosnia, Cambodia, Ethiopia, Georgia, Guatemala, Jordan, Nigeria, Rwanda, Sri Lanka, Ukraine, Zambia). Nepali students can apply for Erasmus+, university scholarships (e.g. Charles University Prague Mathematics), and other funding. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>. (Source: <a href="https://msmt.gov.cz/eu-and-international-affairs/government-scholarships-developing-countries?lang=2" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">msmt.gov.cz</a>)
          </p>
          <p className="text-gray-700 mb-4">
            Erasmus+ supports mobility. Charles University and other institutions offer merit-based tuition waivers. Check studyin.cz and university portals for scholarship deadlines for 2026 intake.
          </p>
        </div>
      </section>

      {/* Intakes & Application Deadlines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Czech Republic Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Charles University: Feb–Jun/Jul for autumn. Masaryk: Nov 1–Feb 28 (Bachelor/Master); Medicine Jan–Jul 31. CZU: Sep–Dec, Jan–Mar. Prague University of Economics: Feb 28, Apr 30. CTU: Mar 31 for 2026/27. Visa 60–90 days; apply 3+ months before.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">University</th><th className="p-4 text-left">Application window</th><th className="p-4 text-left">Intake</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Charles University</td><td className="p-4">Feb–Jun/Jul</td><td className="p-4">Autumn</td></tr>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Masaryk University</td><td className="p-4">Nov 1–Feb 28</td><td className="p-4">Autumn</td></tr>
                <tr><td className="p-4 font-semibold">Prague University of Economics</td><td className="p-4">Feb 28, Apr 30</td><td className="p-4">Autumn</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. How to Apply */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">How to Apply to Czech Universities from Nepal</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Use portal.studyin.cz to search programmes. Apply directly to each university. Deadlines vary: Charles University February–April; Prague University of Economics Feb 28 / Apr 30; Masaryk Feb 28–May 31. Nostrification of foreign degree may be required. See studyin.cz and university portals.
          </p>
        </div>
      </section>

      {/* Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can Nepali Students Bring Dependents to Czech Republic?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Family reunification is possible. Spouses and children can apply for residence. Proof of funds to support family required. Each dependent needs a separate application.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          Czech immigration allows family reunification for students. Verify current rules at <a href="https://www.mvcr.cz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mvcr.cz</a>, <a href="https://www.mzv.cz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mzv.cz</a>.
        </p>
      </section>

      {/* 7. Requirements + Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Czech Republic Student Visa for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Admission letter, passport, proof of funds (~€500/month + tuition), health insurance. IELTS 6.0–6.5 or equivalent. Apply for long-term visa at Czech Embassy in New Delhi, India. Processing typically 60–90 days. Long term visa vs residence permit: visa for entry; residence permit in Czech for extended stay.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students apply for Czech Republic student visa?</h4>
          <p className="text-gray-700 text-sm">
            <strong>Czech Embassy in New Delhi, India</strong> (50-M, Niti Marg, Chanakyapuri, 110 021). Email: consular_delhi@mzv.cz. The Honorary Consulate in Kathmandu does not process visa applications. Processing typically 60–90 days. Apply at least 3 months before travel. (Source: <a href="https://mzv.gov.cz/newdelhi/en/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mzv.gov.cz</a>)
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">GAP (Study Gap) Acceptance for Nepali Students</h3>
        <p className="text-gray-700 mb-4 max-w-3xl">
          Many Czech universities accept study gaps when explained (work, family, health). Provide gap justification. Nostrification and programme requirements apply. Policies vary by institution.
        </p>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Czech Republic Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Applying at wrong location—must apply at Czech Embassy New Delhi (not Kathmandu Honorary Consulate)</li>
          <li>Insufficient proof of funds (must show ~€500/month + tuition)</li>
          <li>Missing or invalid health insurance for Czech Republic</li>
          <li>Applying too late—allow 60–90 days; apply 3+ months before travel</li>
          <li>Nostrification not completed when required for admission</li>
        </ul>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Visa Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-12">
          {czechData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {czechData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* PR and Citizenship Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Czech Republic</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Five years of continuous legal residence (including student + work) can qualify for permanent residence. Citizenship: 5 years residence + language proficiency for non-EU.
        </p>
        <p className="text-gray-600 text-sm mb-4 max-w-3xl">
          Rules at Ministry of Interior. Job-search residence permit leads to employment residence. Verify at <a href="https://www.mvcr.cz" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mvcr.cz</a>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Permanent residence</td><td className="p-3">5 years continuous legal stay (student + work)</td></tr>
              <tr><td className="p-3 font-semibold">Czech citizenship</td><td className="p-3">5 years residence; language proficiency; varies</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Advantages & Disadvantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages of Studying in Czech Republic</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Free tuition in Czech language</li>
                <li>• Affordable English programmes €0–€15,000</li>
                <li>• No work-hour limit for students</li>
                <li>• 500+ English taught bachelor and master programs</li>
                <li>• Erasmus+ and university scholarships</li>
                <li>• Schengen access</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Disadvantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Visa application in New Delhi (travel required for Nepali students)</li>
                <li>• 60–90 day processing</li>
                <li>• Czech government scholarship not available for Nepal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Poland vs Others */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Czech Republic vs Poland vs Germany vs Austria – 2026</h2>
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
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Czech Republic?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, nostrification, proof of funds structure, and visa prep for Czech Embassy in New Delhi. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Czech Republic requirements and plan the cost of studying in Czech Republic.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Czech Republic from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and scholarship guidance</li>
          <li>• Nostrification and visa prep</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Czech Republic FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Czech Republic from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={czechData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Explore Europe Programs + Book Free Consultation */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Czech Republic Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on cost of studying in Czech Republic, work while studying in Czech Republic rules, and visa process. Free 15-minute consultation in Kathmandu—no obligation. Our team has helped hundreds of Nepali students reach European universities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link
              href="/study-abroad/eur/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all"
            >
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
              Book Free Consultation
            </Link>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/austria/" className="underline hover:text-white">Austria</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/eur/italy/" className="underline hover:text-white">Italy</Link> · <Link href="/study-abroad/eur/portugal/" className="underline hover:text-white">Portugal</Link> · <Link href="/study-abroad/eur/switzerland/" className="underline hover:text-white">Switzerland</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/poland/" className="text-blue-600 font-semibold hover:underline">Poland</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/austria/" className="text-blue-600 font-semibold hover:underline">Austria</Link>
            {' · '}
            <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 font-semibold hover:underline">Netherlands</Link>
            {' · '}
            <Link href="/study-abroad/eur/spain/" className="text-blue-600 font-semibold hover:underline">Spain</Link>
            {' · '}
            <Link href="/study-abroad/eur/italy/" className="text-blue-600 font-semibold hover:underline">Italy</Link>
            {' · '}
            <Link href="/study-abroad/eur/portugal/" className="text-blue-600 font-semibold hover:underline">Portugal</Link>
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
