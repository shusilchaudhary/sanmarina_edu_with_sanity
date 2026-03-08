import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  Phone,
  Briefcase,
  Award,
  FileText,
  Plane,
  ChevronRight,
  Building2,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Germany from Nepal 2026 | Free Tuition & Blocked Account',
  description: 'Study in Germany from Nepal 2026: free tuition, blocked account €11,904, visa via German Embassy Kathmandu. uni-assist, Fintiba. 18-month job-seeker visa. PR pathway. Free consultation Kathmandu.',
  keywords: 'study in germany, study in germany from nepal, total cost to study in germany from nepal, how to get pr in germany after study, study in germany consultancy in nepal, study in germany without ielts, study masters in germany, study mbbs in germany from nepal, advantages of studying in germany, computer science study in germany',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/germany/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/germany/',
    title: 'Study in Germany from Nepal 2026 | Free Tuition & Blocked Account',
    description: 'Complete 2026 guide: study in Germany from Nepal, free public universities, blocked account €11,904, job-seeker visa, PR pathway. DAAD, Make it in Germany.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Germany from Nepal 2026',
    description: 'Study in Germany from Nepal: free tuition, blocked account, visa, PR. Consultancy in Kathmandu.',
  },
};

// Official data: DAAD, German Federal Foreign Office, Make it in Germany. Blocked account €11,904 (€992/mo) 2026. 1 EUR ≈ 143 NPR (Feb 2026)
const germanyData = {
  country: 'Germany',
  slug: 'germany',
  heroImage: '/assets/germany.webp',
  lastUpdated: 'February 2026',
  description: 'Germany offers tuition-free public universities for most Bachelor and Master programs. Blocked account €11,904/year (2026). 20 hrs/week work during semester. Job-seeker visa 18 months for graduates. Per DAAD and Make it in Germany.',
  stats: {
    universities: '400+',
    nepaliStudents: 'Growing cohort',
    englishPrograms: '2,000+',
    pswDuration: '18 Months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  blockedAccount: { eur: 11904, monthly: 992, npr: 1702272 },
  semesterContribution: { min: 70, max: 430, nprMin: 10010, nprMax: 61490 },
  tuitionBadenWuerttemberg: { perSemester: 1500, npr: 214500 },
  visaFee: { eur: 75, npr: 10725 },
  livingCost: { min: 867, max: 1200 },
  workHours: { semester: '20 hrs/week', breaks: 'Full-time', alternative: '140 full or 280 half days/year' },
  requirements: [
    'Admission letter from German university (uni-assist or direct)',
    'Valid passport (minimum 12 months)',
    'Blocked account (Sperrkonto) €11,904 for 2026',
    'Health insurance valid in Germany',
    'Language: TestDaF/DSH for German; IELTS 6.5+ for English programs',
    'Academic transcripts (Apostille if required)',
    'Motivation letter and CV',
  ],
  visaSteps: [
    'Receive admission from German university',
    'Open blocked account with €11,904 (Fintiba, Expatrio, Coracle)',
    'Purchase health insurance (DR-WALTER, Mawista, or equivalent)',
    'Complete visa application form (National Visa D)',
    'Book appointment at German Embassy Kathmandu',
    'Submit documents and attend interview',
    'Processing typically 4–12 weeks',
  ],
  faqs: [
    {
      question: 'What is the total cost to study in Germany from Nepal in 2026?',
      answer: 'First year: €12,500–€14,500 (NPR 18–21 lakhs). Tuition: mostly free; semester fee €70–€430; living €11,904 (blocked); visa €75; airfare ~€800. Baden-Württemberg adds €1,500/semester. 1 EUR ≈ 143 NPR.',
    },
    {
      question: 'How much is the blocked account for Germany student visa 2026?',
      answer: '€11,904 per year (€992/month). Mandatory for non-EU students. Open via Fintiba, Expatrio, Coracle. Per German Federal Foreign Office/BAföG standard.',
    },
    {
      question: 'Can I study in Germany without IELTS?',
      answer: 'Yes. English-taught programs accept IELTS 6.5+, TOEFL, or prior English-medium proof. German programs need TestDaF 4 or DSH-2. DAAD lists 2,000+ English programs.',
    },
    {
      question: 'How to get PR in Germany after study?',
      answer: 'Job-seeker visa 18 months post-graduation. Secure skilled job → work permit → 21–33 months residence → Permanent residence. Skilled Immigration Act 2023 eased pathways. Per Make it in Germany.',
    },
    {
      question: 'What are the advantages of studying in Germany?',
      answer: 'Free tuition at public universities, 20 hrs/week work, 18-month job-seeker visa, strong engineering/tech sector, Schengen access. TUM, Heidelberg, RWTH globally ranked.',
    },
    {
      question: 'Can I study MBBS in Germany from Nepal?',
      answer: 'Germany offers Staatsexamen (6 years), not MBBS. Most require Studienkolleg + Feststellungsprüfung. German B1–B2 typical. Limited English medical programs. Check study-in-germany.de.',
    },
    {
      question: 'Is study in Germany consultancy in Nepal helpful?',
      answer: 'Yes. Consultancy assists with uni-assist, blocked account setup, document prep, visa interview. San Marina: free consultation in Kathmandu, Baneshwor, Ghorahi, Itahari.',
    },
    {
      question: 'How many hours can I work while studying in Germany?',
      answer: '20 hours/week during semester; full-time during breaks. Alternative: 140 full days or 280 half days/year. Min wage €12.82+/hr. Per DAAD.',
    },
    {
      question: 'What are common Germany visa rejection reasons for Nepali students?',
      answer: 'Incomplete blocked account, insufficient funds, weak motivation letter, missing health insurance, education gap unexplained. Ensure documents match embassy checklist.',
    },
    {
      question: 'Which German universities offer computer science in English?',
      answer: 'TUM, RWTH Aachen, University of Stuttgart, TU Berlin, LMU Munich offer English CS Master\'s. DAAD database lists programs. IELTS 6.5+ typical.',
    },
    {
      question: 'How long does Germany student visa take from Kathmandu?',
      answer: '4–12 weeks typically. Apply at German Embassy Kathmandu. Apply 3+ months before course start. Complete documents speed processing.',
    },
  ],
};

const tuitionTable = [
  { level: 'Bachelor (Public)', public: '€0 (most states)', private: '€5,000–€25,000/year' },
  { level: 'Master (Public)', public: '€0 (most states)', private: '€5,000–€25,000/year' },
  { level: 'Baden-Württemberg (Non-EU)', public: '€1,500/semester', private: 'Same + private options' },
  { level: 'Semester contribution', public: '€70–€430', private: 'Varies' },
];

const comparisonData = [
  { country: 'Germany', countrySlug: null, tuition: '€0 (most)', living: '€11,904/year', work: '20 hrs/week', psw: '18 Months', visaTime: '4–12 weeks' },
  { country: 'UK', countrySlug: '/study-abroad/uk/', tuition: '£10,000–38,000', living: '£10,539–13,761', work: '20 hrs/week', psw: '2–3 Years', visaTime: '3 weeks' },
  { country: 'France', countrySlug: '/study-abroad/eur/fr/', tuition: '€2,895–€3,941', living: '€800–€1,800/mo', work: '20 hrs/week', psw: '12–24 mo', visaTime: '2–4 weeks' },
];

export default function GermanyStudyPage() {
  const visaStepsWithText = [
    { name: 'Receive admission from German university', text: 'Apply via uni-assist or direct; secure offer letter.' },
    { name: 'Open blocked account with €11,904 (Fintiba, Expatrio, Coracle)', text: 'Sperrkonto releases €992/month per BAföG 2026.' },
    { name: 'Purchase health insurance (DR-WALTER, Mawista, or equivalent)', text: 'Mandatory for visa and enrolment.' },
    { name: 'Complete visa application form (National Visa D)', text: 'Download from German Embassy Kathmandu; fill and sign.' },
    { name: 'Book appointment at German Embassy Kathmandu', text: 'Book via embassy portal; bring originals and copies.' },
    { name: 'Submit documents and attend interview', text: 'Attend in person; processing typically 4–12 weeks.' },
    { name: 'Processing typically 4–12 weeks', text: 'Apply 3+ months before course start.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Germany from Nepal 2026 – Complete Guide',
        description: germanyData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: germanyData.author.name, url: 'https://www.sanmarina.edu.np', description: germanyData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Germany study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Germany from Nepal', 'Blocked account', 'uni-assist', 'DAAD', 'Job-seeker visa', 'German Embassy Kathmandu', 'Sperrkonto'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Germany Student Visa from Nepal',
        description: 'Step-by-step: uni-assist, blocked account €11,904, health insurance, German Embassy Kathmandu. Based on DAAD and Make it in Germany 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: germanyData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 4, name: 'Germany', item: 'https://www.sanmarina.edu.np/study-abroad/eur/germany/' },
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
          <Image src={germanyData.heroImage} alt="Nepali students studying in Germany - universities, engineering, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Germany</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {germanyData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Germany from Nepal
            <br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Tuition-free public universities, blocked account €11,904, 18-month job-seeker visa—Germany is a top choice for Nepali students seeking quality and affordability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply Now
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /><span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: DAAD, German Federal Foreign Office (auswaertiges-amt.de), Make it in Germany.</strong> Blocked account €11,904/year (2026 BAföG standard). Verify at <a href="https://kathmandu.diplo.de/np-en/service/01-visaeinreise/2225320-2225320" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">German Embassy Kathmandu</a>, <a href="https://www.daad.de/en/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">daad.de</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {germanyData.author.name} · {germanyData.author.role} · {germanyData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Germany from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€0 at most public universities; BW €1,500/semester non-EU</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Blocked account</td><td className="p-3">€11,904/year (€992/month) BAföG 2026</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Semester fee</td><td className="p-3">€70–€430 (admin, transport)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">€75; National D; German Embassy Kathmandu; 4–12 weeks</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week semester; full-time breaks; 140 full or 280 half days/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Job-seeker visa</td><td className="p-3">18 months post-graduation (Make it in Germany)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">English programs</td><td className="p-3">2,000+ (DAAD)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: DAAD, German Federal Foreign Office. Verify at <a href="https://www.daad.de/en/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">daad.de</a>, <a href="https://www.make-it-in-germany.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">make-it-in-germany.com</a>, <a href="https://kathmandu.diplo.de/np-en/service/01-visaeinreise/2225320-2225320" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">German Embassy Kathmandu</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: germanyData.stats.universities, label: 'Universities' },
              { value: germanyData.stats.nepaliStudents, label: 'Nepali Students' },
              { value: germanyData.stats.englishPrograms, label: 'English Programs' },
              { value: germanyData.stats.pswDuration, label: 'Job-Seeker Visa' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Why Study in Germany in 2026 */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Germany in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Most public universities charge no tuition for Bachelor and Master programmes (<Link href="/scholarships/germany-for-nepali-students/" className="text-blue-600 hover:underline">DAAD scholarships</Link>). Blocked account €11,904/year. 18-month job-seeker visa post-graduation. TUM, Heidelberg, RWTH rank in QS Top 150. Germany hosts 367,000+ international students.
        </p>
        <p className="text-gray-700 mb-4">
          The advantages of studying in Germany include world-class engineering, computer science, and business programmes. The Skilled Immigration Act 2023 (Make it in Germany) eases how to get PR in Germany after study. Nepali students increasingly choose Germany for <Link href="/scholarships/germany-for-nepali-students/" className="text-blue-600 hover:underline">tuition-free degrees</Link> and strong job prospects.
        </p>
      </section>

      {/* 2. Is Germany Good for Nepali Students */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Is Germany Good for Nepali Students?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Free tuition, 2,000+ English programmes, 20 hrs/week work, 18-month job-seeker visa. A <Link href="/services/" className="text-blue-600 hover:underline">study in Germany consultancy in Nepal</Link> helps with blocked account and visa prep. Nepali student numbers are growing.
          </p>
          <p className="text-gray-700">
            Common visa rejection reasons: incomplete blocked account, unclear motivation letter, education gaps. San Marina guides document structure and financial proof for <Link href="/services/student-visa-service-nepal/" className="text-blue-600 hover:underline">German Embassy Kathmandu</Link> applications.
          </p>
        </div>
      </section>

      {/* 3. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Germany (2026)</h2>
        <p className="text-gray-700 mb-6">
          <strong>Quick answer:</strong> TUM QS #22 (best in EU), RWTH Aachen #105, Heidelberg Top 100, University of Stuttgart Top 200. 400+ universities; DAAD database lists all programmes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Technical University of Munich (TUM)', rank: 'QS #22', city: 'Munich', programs: 'Engineering, CS, Natural Sciences' },
            { name: 'RWTH Aachen University', rank: 'QS #105', city: 'Aachen', programs: 'Engineering, CS' },
            { name: 'Heidelberg University', rank: 'QS Top 100', city: 'Heidelberg', programs: 'Medicine, Law, Sciences' },
            { name: 'University of Stuttgart', rank: 'Top 200', city: 'Stuttgart', programs: 'Engineering, Automotive' },
            { name: 'LMU Munich', rank: 'Top 60', city: 'Munich', programs: 'Business, Sciences' },
            { name: 'TU Berlin', rank: 'Top 150', city: 'Berlin', programs: 'Engineering, CS' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-blue-600 text-sm mb-2">{u.rank}</p>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Study Masters in Germany */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study Masters in Germany</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Most public Master programmes are tuition-free. Apply via uni-assist or directly. IELTS 6.5+ or equivalent for English; TestDaF/DSH for German. Duration typically 2 years. DAAD lists programmes.
          </p>
          <p className="text-gray-700">
            Study masters in Germany is popular for engineering, computer science, business, and natural sciences. Consecutive Master (follows Bachelor) or non-consecutive (different field) options. Some universities require GRE for certain programmes.
          </p>
        </div>
      </section>

      {/* 5. Study MBBS in Germany from Nepal */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study MBBS in Germany from Nepal</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Germany offers Staatsexamen (state exam), not MBBS—a 6-year programme. Most require Studienkolleg (1 year) + Feststellungsprüfung. German B1–B2 typical. Limited English medical programmes. Per study-in-germany.de.
          </p>
        <p className="text-gray-700">
          Study MBBS in Germany from Nepal: 10+2 with 65%+; Studienkolleg for non-EU; German proficiency essential for clinical phases. Costs: semester fee €70–€430; living €11,904/year. Check individual medical faculties.
          </p>
      </section>

      {/* 6. Computer Science Study in Germany */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Computer Science Study in Germany</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Computer science study in Germany: TUM, RWTH Aachen, University of Stuttgart, TU Berlin offer English Master&apos;s. Tuition-free at public universities. IELTS 6.5+ typical. Strong industry links (SAP, Siemens, startups).
          </p>
          <p className="text-gray-700">
            DAAD database lists CS programmes. Specialisations: AI, data science, software engineering. Job-seeker visa and skilled worker pathways favour STEM graduates. How to get PR in Germany after study is streamlined for tech roles.
          </p>
        </div>
      </section>

      {/* 7. Study in Germany Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Germany Without IELTS?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Study in Germany without IELTS by choosing 2,000+ English-taught programmes (DAAD). Accept TOEFL, Cambridge, or prior English-medium proof. German programmes need TestDaF 4 or DSH-2.
          </p>
          <p className="text-gray-700">
          Some universities waive tests for degrees from English-medium institutions. Check programme pages. Basic German (A1–A2) recommended for daily life and part-time work.
          </p>
      </section>

      {/* 8 & 9. Total Cost + Blocked Account */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Total Cost to Study in Germany from Nepal</h2>
        <p className="text-gray-700 mb-6">
          <strong>Quick answer:</strong> First year €12,500–€14,500 (NPR 18–21L). Tuition €0 (most); semester fee €70–€430; blocked account €11,904; visa €75; airfare ~€800. Baden-Württemberg adds €1,500/semester for non-EU. Compare with <Link href="/study-abroad/eur/fr/" className="text-blue-600 hover:underline">France</Link>, <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>, or <Link href="/study-abroad/eur/" className="text-blue-600 hover:underline">other European destinations</Link>.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition: Public vs Private</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Level</th>
                  <th className="p-4 text-left">Public</th>
                  <th className="p-4 text-left">Private</th>
                </tr>
              </thead>
              <tbody>
                {tuitionTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.level}</td>
                    <td className="p-4">{row.public}</td>
                    <td className="p-4">{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Accommodation for Nepali Students</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">Student dormitory (Studentenwohnheim)</td><td className="p-3">€200–350</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Shared flat (WG) – most popular</td><td className="p-3">€300–500</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Private apartment (Munich, Berlin)</td><td className="p-3">€500–800</td></tr>
                <tr><td className="p-3">Private apartment (other cities)</td><td className="p-3">€400–650</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Blocked Account Requirement (2026)</h3>
          <p className="text-gray-700 mb-4">
            Non-EU students must prove €11,904/year (€992/month) via blocked account (Sperrkonto). Per BAföG standard; German Federal Foreign Office. Open with Fintiba, Expatrio, or Coracle. NPR equivalent: ~17 lakhs (1 EUR ≈ 143 NPR).
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <DollarSign className="text-[#0056b3] mb-2" size={24} />
              <p className="font-bold">Blocked Account</p>
              <p className="text-lg font-bold">€11,904</p>
              <p className="text-sm text-gray-600">NPR ~17L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <GraduationCap className="text-green-600 mb-2" size={24} />
              <p className="font-bold">Semester Fee</p>
              <p className="text-lg font-bold">€70–€430</p>
              <p className="text-sm text-gray-600">NPR 1–6.1L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <FileText className="text-orange-600 mb-2" size={24} />
              <p className="font-bold">Visa</p>
              <p className="text-lg font-bold">€75</p>
              <p className="text-sm text-gray-600">NPR 10,725</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Plane className="text-cyan-600 mb-2" size={24} />
              <p className="font-bold">Airfare</p>
              <p className="text-lg font-bold">~€800</p>
              <p className="text-sm text-gray-600">NPR 1.1L</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intakes & Application Deadlines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Germany Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Winter (Sept/Oct start) is the main intake—applications Dec–May. Summer (Mar/Apr) has fewer programs—applications Aug–Nov. Apply 3+ months before course start for visa processing.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">Intake</th><th className="p-4 text-left">Classes Begin</th><th className="p-4 text-left">Application Deadline</th><th className="p-4 text-left">Admission Decision</th><th className="p-4 text-left">Visa Window</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Winter</td><td className="p-4">Sept/Oct</td><td className="p-4">Dec–May (most)</td><td className="p-4">Jul–Aug</td><td className="p-4">Jul–Sept</td></tr>
                <tr><td className="p-4 font-semibold">Summer</td><td className="p-4">Mar/Apr</td><td className="p-4">Aug–Nov</td><td className="p-4">Jan–Feb</td><td className="p-4">Feb–Mar</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10 & 11. Visa Process + Documents */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Student Visa Process from Nepal (Step-by-Step)</h2>
        <p className="text-gray-700 mb-6">
          <strong>Quick answer:</strong> Admission → blocked account → health insurance → visa form (National Visa D) → appointment at German Embassy Kathmandu → interview. Processing 4–12 weeks. Apply 3+ months before course start.
          </p>
        <ol className="space-y-3 max-w-2xl mb-8">
          {germanyData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Germany Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Incomplete or under-funded blocked account (must match €11,904/€992 per month)</li>
          <li>Name mismatch across passport, certificates, and application forms</li>
          <li>Unexplained education gaps in CV or transcripts</li>
          <li>Missing or invalid health insurance proof</li>
          <li>Applying too late—book embassy appointment 3+ months before course start</li>
          <li>Weak motivation letter or unclear study/career plan</li>
        </ul>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {germanyData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* 12. Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work While Studying (Working Hours Rules)</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> 20 hours/week during semester; full-time during breaks. Alternative: 140 full days or 280 half days/year. Academic assistant (HiWi) unrestricted. Min wage €12.82+/hr. Per DAAD.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Semester: 20 hrs/week</li>
            <li>• Breaks: Full-time allowed</li>
            <li>• Alternative: 140 full or 280 half days/year</li>
            <li>• Exceeding limits risks visa issues</li>
          </ul>
        </div>
      </section>

      {/* 13. How to Get PR in Germany After Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">How to Get PR in Germany After Study</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Job-seeker visa 18 months post-graduation. Secure skilled job → work permit → 21–33 months residence (depending on salary/Blue Card) → apply for permanent residence. Skilled Immigration Act 2023 eased pathways. Per Make it in Germany.
          </p>
        <p className="text-gray-700 mb-4">
          EU Blue Card requires salary ≥ threshold (€43,800+ for shortage occupations). Permanent residence after 21 months (Blue Card + B1 German) or 33 months (standard). How to get PR in Germany after study is clearer under the new law.
          </p>
        <ul className="space-y-2 text-gray-700">
          <li>• Graduate from German university</li>
          <li>• Apply job-seeker visa (18 months)</li>
          <li>• Find skilled employment</li>
          <li>• Work permit → permanent residence</li>
        </ul>
      </section>

      {/* 14. Advantages & Disadvantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages of Studying in Germany</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tuition-free public universities</li>
                <li>• 2,000+ English-taught programmes</li>
                <li>• 18-month job-seeker visa</li>
                <li>• Strong PR pathway (Skilled Immigration Act)</li>
                <li>• Schengen access</li>
                <li>• World-class engineering, CS</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Disadvantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Blocked account €11,904 upfront</li>
                <li>• Visa processing 4–12 weeks</li>
                <li>• Housing shortage in major cities</li>
                <li>• German helps for jobs and daily life</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Germany vs UK */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Germany vs UK – 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-4 text-left">Country</th>
                <th className="p-4 text-left">Tuition</th>
                <th className="p-4 text-left">Living</th>
                <th className="p-4 text-left">Work</th>
                <th className="p-4 text-left">PSW</th>
                <th className="p-4 text-left">Visa Time</th>
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
                  <td className="p-4">{row.visaTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 15. Why Choose Our Consultancy */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal?</h2>
        <p className="text-gray-700 mb-4">
          A study in Germany consultancy in Nepal removes guesswork. San Marina guides blocked account setup (Fintiba, Expatrio), uni-assist applications, document preparation, and German Embassy interview prep. We help with motivation letters and financial proof structure. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          We address common rejection reasons: incomplete documents, unclear study plans, education gaps. Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Germany from Nepal guidance since 2014.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• Blocked account and visa guidance</li>
          <li>• uni-assist and direct application support</li>
          <li>• German Embassy Kathmandu expertise</li>
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
            <Link href="/study-abroad/romania/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Romania</Link>
            <Link href="/study-abroad/eur/poland/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Poland</Link>
            <Link href="/study-abroad/eur/netherlands/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Netherlands</Link>
            <Link href="/study-abroad/eur/belgium/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Belgium</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Germany FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Germany from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={germanyData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Germany Journey Today</h2>
          <p className="text-blue-200 mb-8">
            Get expert guidance on study in Germany from Nepal. Blocked account, visa process, university selection. Free consultation in Kathmandu.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Apply Now
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            <Link href="/study-abroad/eur/fr/" className="underline font-medium">France</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="underline font-medium">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="underline font-medium">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="underline font-medium">Canada</Link>
            {' · '}
            <Link href="/scholarships/germany-for-nepali-students/" className="underline font-medium">DAAD scholarships</Link>
            {' · '}
            <Link href="/study-abroad/eur/" className="underline font-medium">More Europe</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/fr/" className="text-blue-600 font-semibold hover:underline">France</Link>
            {' · '}
            <Link href="/study-abroad/eur/netherlands/" className="text-blue-600 font-semibold hover:underline">Netherlands</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
            {' · '}
            <Link href="/scholarships/" className="text-blue-600 font-semibold hover:underline">Scholarships</Link>
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
