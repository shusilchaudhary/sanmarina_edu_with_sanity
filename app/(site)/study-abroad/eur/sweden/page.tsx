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
  title: 'Study in Sweden from Nepal 2026 | Cost, Visa & Scholarships',
  description: 'Study in Sweden from Nepal 2026: tuition SEK 80k–295k/year, living SEK 8k–12k/mo. Swedish Institute scholarship. Stockholm, Lund, Gothenburg. 12-month post-study. Free consultation.',
  keywords: 'study in sweden, study in sweden from nepal, study in sweden for international students, study in sweden masters, study in sweden scholarships, study in sweden without ielts, can i study nursing in english in sweden, study and work in sweden, study in sweden cost, study in sweden for free, sweden student visa process for nepali students, tuition fees in sweden for nepali students 2026, living cost in sweden for students from nepal, sweden institute scholarship for nepali students, post study work permit in sweden for nepali students, cheapest universities in sweden for international students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/sweden/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/sweden/',
    title: 'Study in Sweden from Nepal 2026 | Cost, Visa & Scholarships',
    description: 'Complete 2026 guide: study in Sweden, tuition, living costs, Swedish Institute scholarship, residence permit. Stockholm, Lund, Gothenburg. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Sweden from Nepal 2026',
    description: 'Study in Sweden: cost, visa, Swedish Institute scholarship, post-study permit. Free consultation in Kathmandu.',
  },
};

// Data from universityadmissions.se, migrationsverket.se, studyinsweden.se, si.se (Swedish Institute), VFS Global Nepal, swedenabroad.se. 1 SEK ≈ 10.5 NPR (Feb 2026)
const swedenData = {
  country: 'Sweden',
  slug: 'sweden',
  heroImage: '/assets/sweden.webp',
  lastUpdated: 'February 2026',
  description: 'Sweden hosts 41,000+ international students. Tuition SEK 80,000–295,000/year for non-EU; living SEK 8,000–12,000/month. Swedish Institute Scholarships for Global Professionals (SISGP) for Nepali students. Work while studying. 12-month post-study job search permit. Stockholm, Lund, Gothenburg, Uppsala.',
  stats: {
    universities: '50+',
    internationalStudents: '41,000+',
    englishPrograms: '1,000+',
    postStudy: '12 months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    min: 80000,
    max: 295000,
    avg: 129000,
    applicationFee: 900,
    proofOfFunds: 10584,
  },
  livingCost: {
    stockholm: { min: 9000, max: 12000 },
    gothenburg: { min: 8500, max: 11000 },
    lund: { min: 8000, max: 10500 },
    dormitory: { min: 2400, max: 6200 },
    migrationMin: 10584,
  },
  workRules: 'Students with a residence permit for studies may work during the permit\'s validity without a separate work permit. No formal hour limit during term, but studies must be primary. Unlimited during holidays.',
  postStudy: { duration: 12, note: 'Residence permit to seek employment or explore starting a business. Apply before current permit expires. Must have completed at least two semesters in Sweden. Proof of funds and health insurance required.' },
  visaLocation: 'Apply online to Swedish Migration Agency. Nepali students may need to present passport at Embassy of Sweden in New Delhi. VFS Global in Kathmandu handles some Sweden visa services; residence permits are processed by Migration Agency. Check migrationsverket.se for embassy selection.',
  visaProcessing: 'Apply online. Processing varies; allow 2–3 months. Tuition must be paid before residence permit approval. Application fee SEK 1,500.',
  intakeMonths: 'Autumn: September (main intake); Spring: January (fewer programmes)',
  deadlines: 'First admissions round: apply by 15 January 2026 for autumn 2026; documentation by 3 February. Swedish Institute SISGP: apply 9–25 February 2026; must be admitted by 27 March.',
  requirements: [
    'Valid passport (cannot exceed permit validity)',
    'Full-time admission (30 credits/semester at university)',
    'Paid tuition fees (first installment before residence permit)',
    'Proof of funds: SEK 10,584/month for entire stay (bank statements max 4 months old)',
    'Comprehensive health insurance (if studies under 1 year; otherwise register in population register)',
    'Admission letter from Swedish university',
  ],
  residenceSteps: [
    'Apply to Swedish universities via universityadmissions.se (deadline 15 January for autumn)',
    'Receive admission offer and pay first tuition installment to university',
    'University notifies Swedish Migration Agency when tuition is paid',
    'Apply for residence permit online at migrationsverket.se',
    'Upload passport copies, admission proof, bank statements, insurance',
    'Select embassy for passport presentation if required (Embassy of Sweden, New Delhi for Nepal)',
    'Pay application fee SEK 1,500',
    'Await decision; collect residence permit card; travel to Sweden',
  ],
  residenceStepsWithText: [
    { name: 'Apply to Swedish universities via universityadmissions.se (deadline 15 January for autumn)', text: 'Application fee SEK 900. Submit by 15 January; documentation by 3 February. Results 27 March (master\'s) or 3 April (bachelor\'s).' },
    { name: 'Receive admission offer and pay first tuition installment to university', text: 'Tuition must be paid before residence permit approval. University confirms payment to Migration Agency.' },
    { name: 'University notifies Swedish Migration Agency when tuition is paid', text: 'This triggers permit application pathway. Migration Agency minimum funds SEK 10,584/month.' },
    { name: 'Apply for residence permit online at migrationsverket.se', text: 'Upload passport, admission proof, bank statements (max 4 months old), health insurance. SEK 1,500 fee.' },
    { name: 'Upload passport copies, admission proof, bank statements, insurance', text: 'Bank statements max 4 months old. Proof SEK 10,584/month for entire stay.' },
    { name: 'Select embassy for passport presentation if required (Embassy of Sweden, New Delhi)', text: 'Nepali students: no Swedish embassy in Kathmandu; passport at New Delhi if requested. Check migrationsverket.se.' },
    { name: 'Pay application fee SEK 1,500; await decision (2–3 months)', text: 'Processing varies; allow 2–3 months. Apply well before programme start.' },
    { name: 'Collect residence permit card; travel to Sweden', text: 'Permit allows work without separate permit; studies must remain primary.' },
  ],
  faqs: [
    {
      question: 'What is study in Sweden for international students?',
      answer: 'Study in Sweden for international students: 50+ universities, 1,000+ English programmes. Non-EU tuition SEK 80,000–295,000/year; living SEK 8,000–12,000/month. Stockholm, Lund, Gothenburg, Uppsala. Work while studying; 12-month post-study job search permit. Swedish Institute scholarship for Nepali students. Apply via universityadmissions.se. Source: studyinsweden.se, universityadmissions.se.',
    },
    {
      question: 'What is the Sweden student visa process for Nepali students?',
      answer: 'Sweden student visa process for Nepali students: Apply for residence permit online at Swedish Migration Agency (migrationsverket.se). Required: admission letter, paid tuition, proof of funds SEK 10,584/month, passport, health insurance. May present passport at Embassy of Sweden in New Delhi. Processing 2–3 months. Apply before programme start. Source: migrationsverket.se, swedenabroad.se.',
    },
    {
      question: 'What are tuition fees in Sweden for Nepali students 2026?',
      answer: 'Tuition fees in Sweden for Nepali students 2026: SEK 80,000–295,000/year for non-EU. Humanities/social sciences SEK 80,000–110,000; technical SEK 120,000–145,000; architecture/design SEK 190,000–295,000. Application fee SEK 900. 1 SEK ≈ 10.5 NPR (Feb 2026). PhD free for all. Source: universityadmissions.se, studyinsweden.se.',
    },
    {
      question: 'What is the living cost in Sweden for students from Nepal?',
      answer: 'Living cost in Sweden for students from Nepal: Swedish Migration Agency minimum SEK 10,584/month. Stockholm SEK 9,000–12,000; Gothenburg SEK 8,500–11,000; Lund SEK 8,000–10,500. Dormitory SEK 2,400–6,200. NPR: SEK 10,000/mo ≈ 1.05 lakhs. Source: studyinsweden.se, migrationsverket.se.',
    },
    {
      question: 'Can I study in Sweden without IELTS?',
      answer: 'Study in Sweden without IELTS: Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Each programme sets its own requirements. Check universityadmissions.se and individual programme pages. Many master\'s programmes require B2/C1 equivalent.',
    },
    {
      question: 'What is the Swedish Institute scholarship for Nepali students?',
      answer: 'Swedish Institute scholarship for Nepali students: SISGP (Scholarships for Global Professionals) covers full tuition, SEK 11,000/month living allowance, insurance, travel grant. Nepal is among 42 eligible countries. Requires 3,000+ hours work experience, leadership experience, admission to eligible master\'s. Apply via si.se; deadline typically 9–25 February. 2025/26: 351 recipients from 8,580 applications. Source: si.se, apply-scholarships.si.se.',
    },
    {
      question: 'Can I study and work in Sweden?',
      answer: 'Yes. Study and work in Sweden: Students with residence permit for studies may work without separate work permit during permit validity. No formal hour limit during term; studies must be primary. Unlimited during holidays. After graduation, apply for 12-month permit to seek employment. Source: migrationsverket.se.',
    },
    {
      question: 'What is the post study work permit in Sweden for Nepali students?',
      answer: 'Post study work permit in Sweden for Nepali students: Residence permit to seek employment or start a business. Apply before current permit expires. Must have completed at least two semesters in Sweden. Proof of funds and health insurance required. No job offer needed initially. Source: migrationsverket.se.',
    },
    {
      question: 'Can I study in Sweden for free?',
      answer: 'Study in Sweden for free: EU/EEA/Swiss citizens study tuition-free. Non-EU students pay tuition unless awarded Swedish Institute scholarship or other funding. SISGP covers full tuition for Nepali students. PhD programmes are free for all nationalities. Source: universityadmissions.se, si.se.',
    },
    {
      question: 'Can I study nursing in English in Sweden?',
      answer: 'Can I study nursing in english in Sweden: Full nursing degrees are taught in Swedish. Exchange students can take 13-week English courses (e.g. Karolinska Institutet, Swedish Red Cross University). Non-EU nurses can pursue 1.5-year supplementary programme at University of Gothenburg to obtain Swedish licence—requires Swedish proficiency. Source: gu.se, ki.se.',
    },
    {
      question: 'What are the cheapest universities in Sweden for international students?',
      answer: 'Cheapest universities in Sweden for international students: Humanities and social sciences typically SEK 80,000–110,000/year. Technical programmes SEK 120,000–145,000. Check each programme at universityadmissions.se. Linnaeus University, Mid Sweden University, and regional universities often have lower fees. Source: universityadmissions.se.',
    },
    {
      question: 'Where do Nepali students apply for Sweden visa from Kathmandu?',
      answer: 'Nepali students apply for Sweden residence permit online at migrationsverket.se. Passport presentation may be required at Embassy of Sweden in New Delhi. VFS Global in Kathmandu handles some Sweden visa services for short stays. For residence permits, the Swedish Migration Agency processes applications; check which embassy to visit at migrationsverket.se. Source: migrationsverket.se, vfsglobal.com, swedenabroad.se.',
    },
    {
      question: 'Can I get PR in Sweden after studying?',
      answer: 'PR typically requires 4+ years of legal residence. 12-month post-study job search → work permit → permanent residence (4 years for PR; 5 years for citizenship). Verify at migrationsverket.se. Work permit holders can apply for permanent residence after 4 years.',
    },
    {
      question: 'Can I bring dependents to Sweden when studying?',
      answer: 'Yes. Spouse and children under 18 can apply to join. Spouse may apply for work permit. Proof of additional funds and accommodation required. Verify at migrationsverket.se for dependent permit requirements.',
    },
  ],
};

const tuitionTable = [
  { level: 'Humanities / Social sciences', range: 'SEK 80,000–110,000/year', notes: 'Cheapest programmes' },
  { level: 'Technical / Natural sciences', range: 'SEK 120,000–145,000/year', notes: 'Engineering, sciences' },
  { level: 'Architecture / Design', range: 'SEK 190,000–295,000/year', notes: 'Higher range' },
  { level: 'Proof of funds', range: 'SEK 10,584/month', notes: 'Migration Agency minimum' },
];

const swedenVsFinland = [
  { aspect: 'Tuition (non-EU)', sweden: 'SEK 80,000–295,000/year', finland: '€6,000–€25,000/year' },
  { aspect: 'Living (min)', sweden: 'SEK 10,584/mo', finland: '€800–€1,200/mo' },
  { aspect: 'Work (term)', sweden: 'No formal limit', finland: '30 hrs/week typical' },
  { aspect: 'Post-study', sweden: '12-month job search', finland: 'Permit varies' },
  { aspect: 'Scholarships', sweden: 'SISGP (Nepal eligible)', finland: 'Finnish Govt scholarships' },
  { aspect: 'Application', sweden: 'universityadmissions.se', finland: 'studyinfo.fi' },
];

export default function SwedenStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Sweden from Nepal 2026 – Complete Guide',
        description: swedenData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: swedenData.author.name, url: 'https://www.sanmarina.edu.np', description: swedenData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: swedenData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Sweden Residence Permit from Nepal',
        description: 'Step-by-step: universityadmissions.se by 15 Jan, pay tuition, apply migrationsverket.se, passport at Embassy New Delhi if required. SEK 10,584/mo proof. Processing 2–3 months. migrationsverket.se 2026.',
        step: swedenData.residenceStepsWithText.map((s, i) => ({
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
        description: 'Best education consultancy in Nepal for Sweden study abroad',
        knowsAbout: ['Study in Sweden from Nepal', 'Swedish Institute SISGP scholarship', 'universityadmissions.se', 'Sweden residence permit Nepali students', 'KTH Lund Uppsala Stockholm'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Sweden', item: 'https://www.sanmarina.edu.np/study-abroad/eur/sweden/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Sweden from Nepal.',
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
          <Image src={swedenData.heroImage} alt="Nepali students studying in Sweden - Stockholm Lund Gothenburg, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Sweden</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {swedenData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Sweden from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Swedish Institute Scholarship</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Sweden: tuition SEK 80k–295k/year, living SEK 8k–12k/mo. Swedish Institute scholarship for Nepali students. Work while studying. 12-month post-study permit. Stockholm, Lund, Gothenburg.
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Sweden study experts. Study in Sweden from Nepal consultancy—no obligation for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.universityadmissions.se" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">universityadmissions.se</a>, <a href="https://www.migrationsverket.se" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">migrationsverket.se</a>, <a href="https://studyinsweden.se" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinsweden.se</a>, <a href="https://si.se" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">si.se</a> (Swedish Institute).</strong> Tuition SEK 80k–295k; proof SEK 10,584/mo. Verify with official sources.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {swedenData.author.name} · {swedenData.author.role} · {swedenData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Sweden from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition SEK 80,000–295,000; living SEK 8,000–12,000/mo. SISGP covers full tuition + living for eligible master&apos;s. Residence permit online migrationsverket.se; passport at Embassy New Delhi if required. Work while studying; 12-month post-study. <a href="https://www.universityadmissions.se" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">universityadmissions.se</a>, <a href="https://www.migrationsverket.se" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">migrationsverket.se</a>, <a href="https://si.se" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">si.se</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">SEK 80,000–295,000/year (SISGP covers eligible master&apos;s)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">SEK 10,584/month (Migration Agency minimum)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Residence permit</td><td className="p-3">Online migrationsverket.se; passport at Embassy New Delhi if required</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">No formal limit; studies must be primary</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">12-month permit to seek employment or start business</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">2–3 months (apply before programme start)</td></tr>
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
              { value: swedenData.stats.universities, label: 'Universities' },
              { value: swedenData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: swedenData.stats.englishPrograms, label: 'English Programmes' },
              { value: swedenData.stats.postStudy, label: 'Post-Study Permit' },
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

      {/* Why Study in Sweden */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Sweden for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Sweden offers 1,000+ English programmes, innovative teaching, Swedish Institute scholarship for Nepal, work while studying, and 12-month post-study permit. Stockholm, Lund, Gothenburg, Uppsala. Compare with <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 hover:underline">Netherlands</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/belgium/" className="text-blue-600 hover:underline">Belgium</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Sweden for Nepali students attracts those seeking research-led education and Nordic quality of life. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Sweden for study in sweden masters in engineering, sustainability, and business. Study in Sweden from Nepal consultancy services help with university selection via universityadmissions.se, Swedish Institute scholarship applications, and residence permit support.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Sweden?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study in sweden cost: First year SEK 200,000–450,000 (NPR 21–47 lakhs). Tuition SEK 80,000–295,000/year; living SEK 8,000–12,000/month. Cheapest universities in Sweden for international students: humanities/social sciences programmes. 1 SEK ≈ 10.5 NPR (Feb 2026).
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">First-Year Cost Breakdown (Nepali Students)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">SEK</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tuition (general)</td><td className="p-3">80,000–295,000</td><td className="p-3">8.4–31L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">96,000–144,000</td><td className="p-3">10–15L</td></tr>
                <tr className="border-b"><td className="p-3">Application fee</td><td className="p-3">900</td><td className="p-3">~9,500</td></tr>
                <tr className="border-b"><td className="p-3">Residence permit fee</td><td className="p-3">1,500</td><td className="p-3">~16,000</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~15,000</td><td className="p-3">1.6L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">200,000–450,000</td><td className="p-3 font-medium">21–47L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Sweden for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Sweden for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Swedish Migration Agency minimum SEK 10,584/month. studyinsweden.se: Stockholm dorm SEK 2,400–6,200; shared SEK 3,500–7,000. Food SEK 2,700; transport SEK 650.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Stockholm</td><td className="p-3">SEK 9,000–12,000</td><td className="p-3">Capital; KTH, Karolinska, Stockholm University</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Gothenburg</td><td className="p-3">SEK 8,500–11,000</td><td className="p-3">Chalmers University of Technology</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Lund</td><td className="p-3">SEK 8,000–10,500</td><td className="p-3">Lund University; affordable student city</td></tr>
                <tr><td className="p-3 font-medium">Uppsala</td><td className="p-3">SEK 8,500–11,000</td><td className="p-3">Uppsala University; research-led</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Dormitory SEK 2,400–6,200; shared SEK 3,500–7,000. Source: studyinsweden.se, migrationsverket.se.</p>
        </div>
      </section>

      {/* Swedish Institute Scholarship */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Swedish Institute Scholarship for Nepali Students (SISGP)
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Sweden institute scholarship for nepali students: SISGP (Scholarships for Global Professionals) is fully funded by the Swedish government. Covers full tuition, SEK 11,000/month living allowance, insurance, travel grant. Nepal among 42 eligible countries. Requires 3,000+ hours work experience, leadership experience, admission to eligible master&apos;s. Apply 9–25 February via si.se.
          </p>
          <p className="text-gray-700 mb-4">
            Study in sweden scholarships: SISGP is the flagship option for study in sweden masters. 2025/26: 351 recipients from 8,580 applications. Must be admitted to eligible programme by 27 March. Application via apply-scholarships.si.se. Documents: CV, motivation letter, proof of work and leadership. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Full tuition paid to university</li>
            <li>• SEK 11,000/month living allowance</li>
            <li>• Insurance and travel grant</li>
            <li>• SI Network for Future Global Leaders</li>
            <li>• 3,000+ hours work experience required</li>
            <li>• Apply to university by 15 January; SISGP 9–25 February</li>
          </ul>
        </div>
      </section>

      {/* Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Study and Work in Sweden?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Study and work in Sweden: Students with residence permit for studies may work during permit validity without separate work permit. No formal hour limit during term; studies must be primary. Unlimited during holidays. Source: migrationsverket.se.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• No separate work permit required</li>
            <li>• No formal hour limit; studies primary</li>
            <li>• Unlimited during holidays</li>
            <li>• After graduation: apply for work permit or 12-month job search permit</li>
          </ul>
        </div>
      </section>

      {/* Post-Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Job Search Permit in Sweden for Nepali Students</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Post study work permit in sweden for nepali students: Residence permit to seek employment or start a business. Apply before current permit expires. Must have completed at least two semesters in Sweden. Proof of funds and health insurance required. No job offer needed initially.
        </p>
        <p className="text-gray-700 mb-4">
          Apply at migrationsverket.se. Must have completed higher education of at least two semesters and passed all courses. Valid passport, financial support, comprehensive health insurance. Source: migrationsverket.se.
        </p>
      </section>

      {/* Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Autumn: September (main intake). Spring: January (fewer programmes). First admissions round: apply by 15 January 2026; documentation by 3 February. Swedish Institute SISGP: 9–25 February 2026; admitted by 27 March.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Autumn 2026:</strong> Apply by 15 January; fee by 3 February; docs by 3 February</li>
            <li>• <strong>Results:</strong> Master&apos;s 27 March; Bachelor&apos;s 3 April</li>
            <li>• <strong>Second round:</strong> 15 April (mainly EU/EEA; fewer programmes)</li>
            <li>• <strong>SISGP:</strong> 9–25 February; must be admitted by 27 March</li>
            <li>• <strong>Residence permit:</strong> Apply after tuition paid; allow 2–3 months</li>
          </ul>
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Sweden for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Engineering, Business & Management, Computer Science & AI, Environmental Science, Sustainable Energy, Biotechnology, International Relations. KTH, Lund, Uppsala, Chalmers for engineering; Stockholm School of Economics for business; Karolinska for medicine and health.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Engineering & Tech:</strong> KTH Royal Institute, Chalmers, Lund—civil, electrical, mechanical, software</li>
          <li>• <strong>Business & Economics:</strong> Stockholm School of Economics, Lund, Uppsala—MBA, finance, management</li>
          <li>• <strong>Computer Science & AI:</strong> KTH, Uppsala, Chalmers—programming, AI, data science</li>
          <li>• <strong>Environmental & Sustainability:</strong> Lund, Uppsala, KTH—sustainable energy, environmental science</li>
          <li>• <strong>Medicine & Health:</strong> Karolinska Institutet—medicine, public health, nursing (limited English)</li>
        </ul>
      </section>

      {/* Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Sweden Without IELTS?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in sweden without ielts: Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Each programme sets requirements. Check universityadmissions.se and programme pages. Many master&apos;s require B2/C1 equivalent.
        </p>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Sweden</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> KTH, Lund, Uppsala, Stockholm University, Chalmers, Karolinska Institutet. Cheapest universities in Sweden for international students: humanities/social sciences at Linnaeus, Mid Sweden, regional universities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'KTH Royal Institute of Technology', city: 'Stockholm', programs: 'Engineering, Tech' },
            { name: 'Lund University', city: 'Lund', programs: 'All disciplines' },
            { name: 'Uppsala University', city: 'Uppsala', programs: 'Research, Medicine' },
            { name: 'Stockholm University', city: 'Stockholm', programs: 'Sciences, Humanities' },
            { name: 'Chalmers University', city: 'Gothenburg', programs: 'Engineering' },
            { name: 'Karolinska Institutet', city: 'Stockholm', programs: 'Medicine' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MID-PAGE CTA – Book Free first */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 mb-6">
            Get expert guidance on study in Sweden from Nepal. Our team helps with university selection via universityadmissions.se, Swedish Institute scholarship applications, and residence permit support. 1,500+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Sweden from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* Residence Permit Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Sweden Student Visa Process for Nepali Students (Residence Permit)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Sweden student visa process for nepali students: Apply for residence permit online at migrationsverket.se. Required: admission letter, paid tuition, proof of funds SEK 10,584/month, passport, health insurance. May present passport at Embassy of Sweden in New Delhi. Processing 2–3 months. Apply before programme start.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Sweden visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>Apply online at migrationsverket.se.</strong> Residence permits are processed by the Swedish Migration Agency. Nepali students may need to present passport at Embassy of Sweden in New Delhi. VFS Global in Kathmandu handles some Sweden visa services for short stays. Check migrationsverket.se for which embassy to select. Source: migrationsverket.se, swedenabroad.se, vfsglobal.com.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Residence Permit Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {swedenData.residenceStepsWithText.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <div><span className="font-medium text-gray-800">{step.name}</span><span className="text-gray-600 text-sm block mt-0.5">{step.text}</span></div>
            </li>
          ))}
        </ol>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-2">Common Sweden Residence Permit Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Insufficient proof of funds (need SEK 10,584/month for entire stay; bank statements max 4 months old)</li>
            <li>Applying before tuition is paid (university must notify Migration Agency first)</li>
            <li>Applying too late (processing 2–3 months; apply well before programme start)</li>
            <li>Missing health insurance for studies under 1 year</li>
            <li>Not selecting correct embassy for passport presentation (Nepali students: Embassy New Delhi)</li>
            <li>Documents not in English or Swedish without certified translation</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {swedenData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Sweden?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection via universityadmissions.se, Swedish Institute SISGP scholarship applications, and residence permit support. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Sweden from Nepal requirements—including proof of funds SEK 10,584/month and tuition payment.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Lalitpur, Pokhara, and across Nepal rely on us for study in Sweden from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and SISGP scholarship guidance</li>
          <li>• Residence permit and document support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* GAP & Dependents */}
      <section className="py-12 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Does Sweden Accept Study Gap (GAP)? Can I Bring Dependents?</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP:</strong> Swedish universities generally accept study gaps when justified. SISGP requires 3,000+ hours work experience and leadership experience. Trust Education cites GPA 2.4 (50%) as typical minimum; some programmes higher. Check universityadmissions.se and individual programme requirements.
        </p>
        <p className="text-gray-700">
          <strong>Dependents:</strong> Yes. Spouse and children under 18 can apply to join. Spouse may apply for work permit. Proof of additional funds and accommodation required. Verify at migrationsverket.se for dependent permit requirements.
        </p>
      </section>

      {/* PR Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Sweden</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> 12-month post-study job search permit → work permit → permanent residence. PR typically requires 4+ years of legal residence. Citizenship: 5 years residence + language + integration. Verify at migrationsverket.se.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Work permit holders can apply for permanent residence after 4 years. Post-study permit allows job search or business start; no job offer needed initially.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Post-study (12 months)</td><td className="p-3">Job search or business; no job offer needed</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Work residence</td><td className="p-3">Employment or self-employment permit</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">4+ years for PR; 5 years for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sweden vs Finland */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Sweden vs Finland – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both Nordic destinations popular for Nepali students. Sweden offers SISGP scholarship; Finland has government scholarships. Compare for your profile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Sweden</th>
                  <th className="p-4 text-left">Finland</th>
                </tr>
              </thead>
              <tbody>
                {swedenVsFinland.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.sweden}</td>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Sweden FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Sweden from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={swedenData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Book Free first, internal links */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sweden Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Sweden for Nepali students 2026, Sweden student visa process, and Swedish Institute scholarship. Free consultation in Kathmandu—no obligation. 1,500+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Sweden from Nepal
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/finland/" className="underline hover:text-white">Finland</Link> · <Link href="/study-abroad/hungary/" className="underline hover:text-white">Hungary</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/belgium/" className="underline hover:text-white">Belgium</Link> · <Link href="/study-abroad/romania/" className="underline hover:text-white">Romania</Link> · <Link href="/study-abroad/ireland/" className="underline hover:text-white">Ireland</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
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
            <Link href="/study-abroad/eur/finland/" className="text-blue-600 font-semibold hover:underline">Finland</Link>
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
