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
  title: 'Study in Belgium from Nepal 2026 | Cost, Visa & Scholarships',
  description: 'Study in Belgium from Nepal 2026: tuition €835–8,000, living €700–1,250/mo. VFS New Delhi (no visa in Kathmandu). ARES scholarship. Work 650 hrs/yr. 12‑mo post-study. Free consultation Kathmandu.',
  keywords: 'study in belgium, study in belgium from nepal, study in belgium for international students, study in belgium for nepali students, study in belgium from nepal consultancy, study in belgium in english, study in belgium in english bachelor, study master in belgium in english, study nursing in belgium in english, study in belgium without ielts, belgium student visa process for nepali students, tuition fees in belgium for nepali students 2026, living cost in belgium for students from nepal, masters in belgium for nepali students requirements, scholarship in belgium for nepali students 2026, belgium student visa success rate from nepal, cheapest universities in belgium for international students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/belgium/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/belgium/',
    title: 'Study in Belgium from Nepal 2026 | Cost, Visa & Scholarships',
    description: 'Complete 2026 guide: study in Belgium, tuition, living costs, ARES scholarship, work rules. Brussels, Leuven, Ghent. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Belgium from Nepal 2026',
    description: 'Study in Belgium: cost, visa, ARES scholarship, work rules. Free consultation in Kathmandu.',
  },
};

// Data from studyinbelgium.be, belgium.be, Belgian Immigration (dofi.ibz.be), india.diplomatie.belgium.be, KU Leuven, education.ec.europa.eu, vliruos.be, ares-ac.be. 1 EUR ≈ 143 NPR (Feb 2026)
const belgiumData = {
  country: 'Belgium',
  slug: 'belgium',
  heroImage: '/assets/belgium.webp',
  lastUpdated: 'February 2026',
  description: 'Belgium hosts 44,000+ international students. Tuition €835–€8,000/year; living €700–€1,250/month. ARES scholarship for Nepali students. Work 650 hrs/year (2025). 12-month post-study search year. Brussels, Leuven, Ghent. Study in Belgium in English at KU Leuven, Ghent, Brussels.',
  stats: {
    universities: '50+',
    internationalStudents: '44,000+',
    englishPrograms: '500+',
    postStudy: '12 months',
    studentsPlaced: '1,500+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    frenchMin: 835,
    frenchMax: 5010,
    flemishMin: 1200,
    flemishMax: 8000,
    euFlemish: 1157,
    proofOfFunds: 8000,
  },
  livingCost: {
    brussels: { min: 920, max: 1550 },
    leuven: { min: 775, max: 1325 },
    ghent: { min: 700, max: 1250 },
    dormitory: { min: 300, max: 550 },
    sharedFlat: { min: 400, max: 700 },
  },
  workRules: 'Up to 650 hours per year (2025) under reduced social security; 20 hours per week during academic year for non-EU. Unlimited during holidays.',
  postStudy: { duration: 12, note: '12-month residence permit for job search or business (orientation year); unlimited labour market access; apply before student permit expires' },
  visaLocation: 'VFS Global Visa Application Center in New Delhi. Belgium has no visa department in Nepal. Long-stay (Type D) applications from Nepal, Bhutan, Sri Lanka, Bangladesh, Maldives processed via New Delhi. Medical certificate: Nepal International Clinic (Travel and Mountain Medicine Center), Kathmandu—certified by Belgian Embassy.',
  visaProcessing: 'Apply at least 3 months before intended travel. Biometrics at VFS New Delhi. Slots open first Monday of each month.',
  intakeMonths: 'Autumn: September (main intake); enrolment typically closes April 30',
  deadlines: 'University enrolment: typically April 30 for September; ARES scholarship: check ares-ac.be; apply for visa 3+ months before travel',
  requirements: [
    'Admission letter from recognized Belgian university',
    'Valid passport (12+ months validity, 2 blank pages)',
    'Proof of financial means (tuition + living)',
    'Health insurance covering stay in Belgium',
    'Medical certificate (Nepal International Clinic, Kathmandu—Belgian Embassy certified)',
    'Completed visa application via Visa On Web',
    'Proof of payment: €180 handling + €245 (public) or €236 (private) contribution',
    'Cover letter with return address',
    'Legalized documents (if required)',
  ],
  visaSteps: [
    'Apply to Belgian universities (enrolment typically closes April 30 for September intake)',
    'Receive admission letter and pay tuition deposit',
    'Gather proof of funds: bank statements for tuition + living (€8,000+ recommended)',
    'Obtain medical certificate from Nepal International Clinic (Travel and Mountain Medicine Center), Kathmandu—certified by Belgian Embassy',
    'Complete visa application via Visa On Web; pay €180 handling + €245/€236 contribution',
    'Book appointment at VFS Global New Delhi (slots open first Monday of each month)',
    'Attend biometrics appointment in New Delhi',
    'Submit application; processing typically 8–12 weeks',
    'Collect passport (courier, family member, or in person); travel to Belgium; register for residence permit',
  ],
  faqs: [
    {
      question: 'What is study in Belgium for international students?',
      answer: 'Study in Belgium for international students: 500+ English programmes at KU Leuven, Ghent, Brussels. Tuition €835–€8,000/year; living €700–€1,250/month. Work 650 hrs/year. 12-month post-study search year. ARES scholarship for Nepali students. Apply via VFS New Delhi—Belgium has no visa office in Nepal.',
    },
    {
      question: 'What is the Belgium student visa process for Nepali students?',
      answer: 'Belgium student visa process for Nepali students: Apply at VFS Global New Delhi (Belgium has no visa department in Nepal). Type D visa €180 handling + €245/€236 contribution. Medical certificate from Nepal International Clinic, Kathmandu. Biometrics in New Delhi. Apply 3+ months before travel. Source: india.diplomatie.belgium.be.',
    },
    {
      question: 'What are tuition fees in Belgium for Nepali students 2026?',
      answer: 'Tuition fees in Belgium for Nepali students 2026: French-speaking Belgium €835–€5,010/year (non-EU); Flemish Belgium €1,200–€8,000/year. Cheapest universities in Belgium for international students: French-speaking universities €835 base + €4,175 contribution (exemptions for some categories). 1 EUR ≈ 143 NPR (Feb 2026).',
    },
    {
      question: 'What is the living cost in Belgium for students from Nepal?',
      answer: 'Living cost in Belgium for students from Nepal: Brussels €920–€1,550/month; Leuven €775–€1,325; Ghent €700–€1,250 (cheapest). Dormitory €300–€550; shared flat €400–€700. NPR: €1,000/mo ≈ 1.43L. Studyinbelgium.be and KU Leuven cite €800–€1,000/month for Flanders/Brussels.',
    },
    {
      question: 'Can I study in Belgium in English?',
      answer: 'Yes. Study in Belgium in English: KU Leuven offers 100+ English-taught bachelor and master programmes. Study in Belgium in english bachelor and study master in belgium in english available at KU Leuven, Ghent University, VUB Brussels, ULB. Use Study in Flanders and studyinbelgium.be programme finders.',
    },
    {
      question: 'Can I study in Belgium without IELTS?',
      answer: 'Study in Belgium without IELTS: Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Check individual programme requirements. KU Leuven and Ghent typically require B2 English; alternatives may apply. Contact university admissions.',
    },
    {
      question: 'What is scholarship in Belgium for Nepali students 2026?',
      answer: 'Scholarship in Belgium for Nepali students 2026: ARES (Académie de Recherche et d\'Enseignement Supérieur) International Training Scholarships—Nepal eligible. Fully funded: tuition, travel, living, visa. Requires 2+ years professional experience. Apply via GIRAF. VLIR-UOS: Nepal not in eligible country list. WBI Master Grants for French-speaking Belgium. See ares-ac.be, studyinbelgium.be.',
    },
    {
      question: 'What are masters in Belgium for Nepali students requirements?',
      answer: 'Masters in Belgium for Nepali students requirements: Bachelor\'s degree (or equivalent 180 ECTS); English B2 (IELTS 6.0–6.5 or TOEFL/ Cambridge); academic transcripts; motivation letter; references. Tuition €1,200–€8,000 (Flemish) or €835–€5,010 (French-speaking). Application deadlines vary; typically March–April for September.',
    },
    {
      question: 'What is study nursing in Belgium in english?',
      answer: 'Study nursing in Belgium in english: KdG Antwerp offers 4-year Professional Bachelor Nursing (English + Dutch) from Sept 2026. Howest: English-taught semester for 3rd/4th year nursing students. Thomas More, Hogeschool Gent: exchange programmes. Full degree in English limited; check studyinbelgium.be and Study in Flanders.',
    },
    {
      question: 'What is the Belgium student visa success rate from Nepal?',
      answer: 'Official Belgium student visa success rate from Nepal is not published. Success depends on complete documents, proof of funds, medical certificate from certified clinic (Nepal International Clinic, Kathmandu), genuine intent. VFS New Delhi processes; Belgian Immigration Office decides. Well-prepared applications typically see high success.',
    },
    {
      question: 'Where do Nepali students apply for Belgium visa from Kathmandu?',
      answer: 'Nepali students cannot apply for Belgium long-stay (Type D) visa in Kathmandu. Belgium has no visa department in Nepal. Apply at VFS Global New Delhi. Medical certificate obtainable at Nepal International Clinic (Travel and Mountain Medicine Center), Kathmandu—certified by Belgian Embassy. Contact newdelhi.visa@diplobel.fed.be for queries.',
    },
    {
      question: 'What is the post-study residence pathway in Belgium?',
      answer: 'Non-EU graduates can apply for a 12-month residence permit for job search or to start a business (orientation year). Apply before student permit expires. Unlimited labour market access—no work permit from employer. Apply via Belgian Immigration Office. KU Leuven Stuvo provides guidance.',
    },
    {
      question: 'Can I get PR in Belgium after studying?',
      answer: 'PR typically requires 5+ years of continuous legal residence. 12-month orientation year (post-study) → employment or self-employment → work permit → long-term residence. Citizenship: 5 years (or 3 if married to Belgian) + language + integration. Verify at dofi.ibz.be.',
    },
  ],
};

const tuitionTable = [
  { level: 'French-speaking (non-EU)', range: '€835–€5,010/year', notes: 'Base €835 + €4,175 contribution; exemptions for some' },
  { level: 'Flemish (non-EU)', range: '€1,200–€8,000/year', notes: 'Varies by programme' },
  { level: 'EU/EEA', range: '€835–€1,157/year', notes: 'Statutory fees' },
  { level: 'Proof of funds', range: '€8,000+ recommended', notes: 'Tuition + living' },
];

const visaStepsWithText = [
  { name: 'Apply to Belgian universities (enrolment typically closes April 30 for September)', text: 'French-speaking: April 30. Flemish: check per institution. KU Leuven, Ghent, VUB, ULB.' },
  { name: 'Receive admission letter and pay tuition deposit', text: 'Secure offer; pay deposit as required.' },
  { name: 'Gather proof of funds: bank statements for tuition + living (€8,000+ recommended)', text: 'Competitors cite blocked account €9,500–10,000; verify current requirement.' },
  { name: 'Obtain medical certificate from Nepal International Clinic, Kathmandu', text: 'Travel and Mountain Medicine Center—Belgian Embassy certified.' },
  { name: 'Complete visa application via Visa On Web; pay €180 handling + €245/€236', text: 'Visa On Web portal. Contribution varies public/private.' },
  { name: 'Book appointment at VFS Global New Delhi (slots first Monday of each month)', text: 'Belgium has no visa office in Nepal. Biometrics in New Delhi.' },
  { name: 'Attend biometrics; submit; processing typically 8–12 weeks', text: 'Apply 3+ months before travel.' },
  { name: 'Collect passport; travel to Belgium; register for residence permit', text: 'Register at municipality within 90 days of arrival.' },
];

const belgiumVsNetherlands = [
  { aspect: 'Tuition (non-EU)', belgium: '€835–€8,000/year', netherlands: '€6,000–€20,000/year' },
  { aspect: 'Living (cheapest)', belgium: 'Ghent €700–€1,250/mo', netherlands: 'Eindhoven €800–€1,400/mo' },
  { aspect: 'Work (term)', belgium: '650 hrs/year; 20 hrs/week', netherlands: '16 hrs/week' },
  { aspect: 'Post-study', belgium: '12-month search year', netherlands: '12-month Orientation Year' },
  { aspect: 'Scholarships', belgium: 'ARES (Nepal eligible)', netherlands: 'Holland Scholarship €5,000' },
  { aspect: 'Visa from Nepal', belgium: 'VFS New Delhi only', netherlands: 'University applies to IND' },
];

export default function BelgiumStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Belgium from Nepal 2026 – Complete Guide',
        description: belgiumData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: belgiumData.author.name, url: 'https://www.sanmarina.edu.np', description: belgiumData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: belgiumData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Belgium Student Visa from Nepal',
        description: 'Step-by-step: apply to university, proof €8,000+, medical Nepal International Clinic, Visa On Web, VFS New Delhi. Processing 8–12 weeks. Per studyinbelgium.be, india.diplomatie.belgium.be 2026.',
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
          { '@type': 'ListItem', position: 4, name: 'Belgium', item: 'https://www.sanmarina.edu.np/study-abroad/eur/belgium/' },
        ],
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'Best education consultancy in Nepal for Belgium study abroad',
        knowsAbout: ['Study in Belgium from Nepal', 'VFS New Delhi Belgium visa', 'ARES scholarship', 'KU Leuven Ghent', 'Nepal International Clinic Kathmandu'],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={belgiumData.heroImage} alt="Nepali students studying in Belgium - Brussels Leuven Ghent, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Belgium</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {belgiumData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex items-center">
            Study in Belgium  <Image src='/assets/belguim.png' width={100} height={100} alt="belguim flag" />
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Belgium study experts. Study in Belgium from nepal consultancy—no obligation for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.studyinbelgium.be" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinbelgium.be</a>, <a href="https://india.diplomatie.belgium.be" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">india.diplomatie.belgium.be</a>, Belgian Immigration, KU Leuven.</strong> Verify with official sources.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {belgiumData.author.name} · {belgiumData.author.role} · {belgiumData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Belgium from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition €835–€8,000; living €700–€1,250/mo. Visa via VFS New Delhi (no Belgium visa office in Kathmandu). Medical: Nepal International Clinic, Kathmandu. ARES scholarship. Work 650 hrs/year. 12‑mo post-study. <a href="https://www.studyinbelgium.be" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinbelgium.be</a>, <a href="https://india.diplomatie.belgium.be" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">india.diplomatie.belgium.be</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€835–€8,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">€8,000+ recommended (or blocked €9,500–10,000)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">VFS Global New Delhi (no visa office in Kathmandu)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">650 hrs/year; 20 hrs/week during term</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">12-month orientation year (job search)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">Typically 8–12 weeks</td></tr>
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
              { value: belgiumData.stats.universities, label: 'Universities' },
              { value: belgiumData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: belgiumData.stats.englishPrograms, label: 'English Programmes' },
              { value: belgiumData.stats.postStudy, label: 'Post-Study Permit' },
              { value: belgiumData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Why Study in Belgium */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Belgium for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Belgium offers affordable tuition (€835–€8,000), 500+ English programmes, ARES scholarship for Nepal, work 650 hrs/year, 12-month post-study permit, EU/Schengen hub. Brussels, Leuven, Ghent. Compare with <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/fr/" className="text-blue-600 hover:underline">France</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Belgium for nepali students attracts those seeking EU education at lower cost than Western Europe. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Belgium for engineering, business, and health sciences. Study in Belgium from nepal consultancy services help with university selection, visa support via VFS New Delhi, and ARES scholarship applications.
        </p>
      </section>

      {/* 2. Cost of Studying */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Belgium?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> First year €10,000–€22,000 (NPR 14–31 lakhs). Tuition €835–€8,000/year; living €700–€1,250/month. Ghent cheapest; Brussels most expensive. 1 EUR ≈ 143 NPR (Feb 2026).
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
                <tr className="border-b"><td className="p-3">Tuition (French-speaking)</td><td className="p-3">€835–€5,010</td><td className="p-3">1.2–7.2L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (Flemish)</td><td className="p-3">€1,200–€8,000</td><td className="p-3">1.7–11.4L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€8,400–€18,600</td><td className="p-3">12–26.6L</td></tr>
                <tr className="border-b"><td className="p-3">Visa fees</td><td className="p-3">€180 + €245/€236</td><td className="p-3">~61,000</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€750</td><td className="p-3">1.1L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€10,000–€22,000</td><td className="p-3 font-medium">14–31L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Belgium for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Belgium for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Cheapest universities in Belgium for international students by location: Ghent and Leuven are more affordable than Brussels. Official studyinbelgium.be and KU Leuven cite €800–€1,000/month for Flanders/Brussels.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Brussels</td><td className="p-3">€920–€1,550</td><td className="p-3">Capital; most expensive</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Leuven</td><td className="p-3">€775–€1,325</td><td className="p-3">KU Leuven; dorm €300–€550</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Ghent</td><td className="p-3">€700–€1,250</td><td className="p-3">Cheapest; Ghent University</td></tr>
                <tr><td className="p-3 font-medium">Antwerp</td><td className="p-3">€800–€1,350</td><td className="p-3">University of Antwerp</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Dormitory €300–€550; shared flat €400–€700. Source: studyinbelgium.be, KU Leuven.</p>
        </div>
      </section>

      {/* 3. Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Work While Studying in Belgium?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Students can work up to 650 hours per year (2025) under reduced social security (2.71%). During academic year: 20 hours per week for non-EU. Unlimited during official holidays. (Source: studentatwork.be, studyinbelgium.be)
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 650 hrs/year under student employment scheme</li>
            <li>• 20 hrs/week during term (non-EU)</li>
            <li>• Unlimited during holidays</li>
            <li>• Written student employment contract required</li>
          </ul>
        </div>
      </section>

      {/* 4. Post-Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Residence Pathway in Belgium</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Non-EU graduates can apply for a 12-month residence permit for job search or to start a business (orientation year). Apply before student permit expires. Unlimited labour market access—no work permit from employer. Full-time work allowed.
        </p>
        <p className="text-gray-700 mb-4">
          The search year allows graduates to remain in Belgium and seek employment or become self-employed. Apply via Belgian Immigration Office. KU Leuven Stuvo provides guidance. Decision within 90 days; Annex 15 certificate covers stay if decision pending. Source: KU Leuven, dofi.ibz.be.
        </p>
      </section>

      {/* 5. English Programmes */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Belgium in English – Bachelor & Master</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study in Belgium in English: KU Leuven offers 100+ English-taught bachelor and master programmes. Study in belgium in english bachelor and study master in belgium in english available at KU Leuven, Ghent University, VUB Brussels, ULB. Use Study in Flanders and studyinbelgium.be programme finders.
          </p>
          <p className="text-gray-700 mb-4">
            Study nursing in belgium in english: KdG Antwerp 4-year Professional Bachelor (from Sept 2026); Howest English-taught semester for 3rd/4th year. Full degree nursing in English limited; exchange options available. Masters in belgium for nepali students requirements: Bachelor&apos;s, English B2, transcripts, motivation letter.
          </p>
        </div>
      </section>

      {/* 6. Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarship in Belgium for Nepali Students 2026
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> ARES (Académie de Recherche et d&apos;Enseignement Supérieur) International Training Scholarships—Nepal eligible. Fully funded: tuition, travel, living, visa. Requires 2+ years professional experience. Apply via GIRAF. VLIR-UOS: Nepal not in eligible country list. WBI Master Grants for French-speaking Belgium. See ares-ac.be, studyinbelgium.be.
          </p>
          <p className="text-gray-700 mb-4">
            Scholarship in belgium for nepali students 2026: ARES is the main government option for Nepal. Check ares-ac.be for deadlines and eligible programmes. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
        </div>
      </section>

      {/* 7. Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Main intake: September. Enrolment typically closes April 30 for French-speaking Belgium. Flemish universities: check per institution. Apply for visa 3+ months before intended travel. ARES: check ares-ac.be for 2026/27 deadline.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>University enrolment:</strong> Typically April 30 for September (French-speaking)</li>
            <li>• <strong>Flemish universities:</strong> Varies; often February–April</li>
            <li>• <strong>Visa:</strong> Apply 3+ months before travel</li>
            <li>• <strong>VFS slots:</strong> Open first Monday of each month</li>
          </ul>
        </div>
      </section>

      {/* 8. Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Belgium Without IELTS?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Belgium without IELTS: Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Check individual programme requirements. KU Leuven and Ghent typically require B2 English; alternatives may apply.
        </p>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Belgium for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Engineering, Business, Computer Science, Health Sciences, Law, International Relations. KU Leuven 100+ English programmes. Ghent strong in engineering and sciences. VUB, ULB in Brussels.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Engineering:</strong> KU Leuven, Ghent, VUB—civil, mechanical, biomedical</li>
          <li>• <strong>Business & Economics:</strong> KU Leuven, VUB, Antwerp, ULB</li>
          <li>• <strong>Computer Science & AI:</strong> KU Leuven, Ghent, VUB</li>
          <li>• <strong>Health & Medicine:</strong> KU Leuven, Ghent, ULB (limited English)</li>
          <li>• <strong>International Relations:</strong> ULB, KU Leuven</li>
        </ul>
      </section>

      {/* 9. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Belgium</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> KU Leuven, Ghent University, VUB Brussels, ULB Brussels, University of Antwerp. Strong in engineering, business, health. Cheapest universities in Belgium for international students: French-speaking universities (€835 base).
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'KU Leuven', city: 'Leuven', programs: '100+ English programmes' },
            { name: 'Ghent University', city: 'Ghent', programs: 'Engineering, Sciences' },
            { name: 'Vrije Universiteit Brussel (VUB)', city: 'Brussels', programs: 'Business, Engineering' },
            { name: 'Université libre de Bruxelles (ULB)', city: 'Brussels', programs: 'All disciplines' },
            { name: 'University of Antwerp', city: 'Antwerp', programs: 'Business, Law' },
            { name: 'Université de Liège', city: 'Liège', programs: 'French-speaking' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. MID-PAGE CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 mb-6">
            Get expert guidance on study in Belgium from Nepal. Our team helps with university selection, visa support via VFS New Delhi, and ARES scholarship applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Belgium from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Requirements + Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Belgium Student Visa Process for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Apply at VFS Global New Delhi. Belgium has no visa department in Nepal. Required: admission letter, passport (12+ months), proof of funds, medical certificate from Nepal International Clinic (Kathmandu), health insurance. €180 handling + €245/€236 contribution. Apply 3+ months before travel.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Belgium visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>VFS Global New Delhi.</strong> Belgium has no visa department in Nepal. Long-stay (Type D) applications from Nepal, Bhutan, Sri Lanka, Bangladesh, Maldives are processed via VFS New Delhi. Medical certificate: Nepal International Clinic (Travel and Mountain Medicine Center), Kathmandu—certified by Belgian Embassy. Contact newdelhi.visa@diplobel.fed.be for queries. Source: india.diplomatie.belgium.be.
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
          <h4 className="font-bold text-[#001F3F] mb-2">Common Belgium Student Visa Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Insufficient proof of funds (need €8,000+ or blocked account €9,500–10,000)</li>
            <li>Medical certificate not from approved clinic (Nepal International Clinic, Kathmandu)</li>
            <li>Applying too late (processing 8–12 weeks; apply 3+ months before travel)</li>
            <li>Missing VFS slot booking (slots open first Monday of each month)</li>
            <li>Documents not in English, Dutch, French, or German without certified translation</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {belgiumData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Belgium?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, visa prep via VFS New Delhi, and ARES scholarship applications. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Belgium from Nepal requirements—including medical certificate from Nepal International Clinic (Belgian Embassy certified).
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Lalitpur, Pokhara, and across Nepal rely on us for study in Belgium from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and ARES scholarship guidance</li>
          <li>• Visa and proof of funds support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* GAP & Dependents */}
      <section className="py-12 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Does Belgium Accept Study Gap (GAP)? Can I Bring Dependents?</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP:</strong> Belgian universities generally accept gaps when justified. Trust Education cites GPA 2.5–3.0 (55%) for bachelor&apos;s; 2.7–3.5 (60%) for master&apos;s. Some programmes require subject background or work experience. ARES requires 2+ years professional experience.
        </p>
        <p className="text-gray-700">
          <strong>Dependents:</strong> Family reunification possible in certain cases. Spouse and children can apply for join-family residence. Proof of additional funds and accommodation required. Verify at Belgian Immigration (dofi.ibz.be).
        </p>
      </section>

      {/* PR Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Belgium</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> 12-month orientation year (post-study) → employment or self-employment → long-term residence permit. PR typically requires 5+ years of continuous legal residence. Citizenship: 5 years residence (or 3 if married to Belgian) + language + integration.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Verify at Belgian Immigration Office (dofi.ibz.be). Orientation year allows unlimited work; secure job → work permit → long-term residence.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Orientation year (12 months)</td><td className="p-3">Job search or business; unlimited work</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Work residence</td><td className="p-3">Employment or self-employment permit</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">5+ years residence for PR; 5 years (or 3 if married) for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 12. Belgium vs Netherlands */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Belgium vs Netherlands – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both popular for Nepali students. Belgium offers lower tuition; Netherlands has more English programmes. Compare with <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link> for your profile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Belgium</th>
                  <th className="p-4 text-left">Netherlands</th>
                </tr>
              </thead>
              <tbody>
                {belgiumVsNetherlands.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.belgium}</td>
                    <td className="p-4">{row.netherlands}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Belgium FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Belgium from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={belgiumData.faqs} />
          </div>
        </div>
      </section>

      {/* 14. Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Belgium Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Belgium for Nepali students 2026, Belgium student visa process, and ARES scholarship. Free consultation in Kathmandu—no obligation.
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
              Apply to Study in Belgium from Nepal
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
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/fr/" className="underline hover:text-white">France</Link> · <Link href="/study-abroad/eur/luxembourg/" className="underline hover:text-white">Luxembourg</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/hungary/" className="underline hover:text-white">Hungary</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/ireland/" className="underline hover:text-white">Ireland</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 font-semibold hover:underline">Netherlands</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/fr/" className="text-blue-600 font-semibold hover:underline">France</Link>
            {' · '}
            <Link href="/study-abroad/eur/luxembourg/" className="text-blue-600 font-semibold hover:underline">Luxembourg</Link>
            {' · '}
            <Link href="/study-abroad/eur/poland/" className="text-blue-600 font-semibold hover:underline">Poland</Link>
            {' · '}
            <Link href="/study-abroad/hungary/" className="text-blue-600 font-semibold hover:underline">Hungary</Link>
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
