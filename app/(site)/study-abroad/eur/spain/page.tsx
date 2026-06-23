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
  FileText,
  Plane,
  ChevronRight,
  Building2,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Spain from Nepal 2026 | Cost, Visa & English Programs',
  description: 'Study in Spain from Nepal 2026: tuition €2,700–9,300, proof €7,200 (IPREM), TIE visa. 800+ English programmes, 30 hrs work. Spain student visa via New Delhi. Free consultation Kathmandu.',
  keywords: 'study in spain for international student, study in spain from nepal 2026 detail guide, study in spain requirements, cost of studying in spain, study in spain in english, spain student visa, academic percentage require to study in spain, do i need to know spanish to study in spain, cost of studying architecture in spain, high performance computing study in spain',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/spain/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/spain/',
    title: 'Study in Spain from Nepal 2026 | Cost, Visa & English Programs',
    description: 'Complete 2026 guide: study in Spain from Nepal, tuition, living costs, Spain student visa, 800+ English programs. Compare with Germany and France.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Spain from Nepal 2026',
    description: 'Study in Spain from Nepal: cost, visa, English programs, work rights. Free consultation in Kathmandu.',
  },
};

// Data: Spanish Ministry of Education (educacionyfp.gob.es), SEPIE, Study.eu, Spain study advisors. 1 EUR ≈ 143 NPR (Feb 2026)
// IPREM 100% = €7,200/year (€600/mo) for student visa proof of funds 2025–2026
const spainData = {
  country: 'Spain',
  slug: 'spain',
  heroImage: '/assets/madrid.webp',
  lastUpdated: 'February 2026',
  description: 'Spain hosts 285,000+ international students. Public Bachelor €2,700–€9,000, Master €3,600–€9,300/year for non-EU. Over 800 English-taught programs. 30 hrs/week work allowed. Per SEPIE and Spanish Ministry of Education.',
  stats: {
    universities: '91',
    internationalStudents: '285,000+',
    englishPrograms: '800+',
    workHours: '30 hrs/week',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuitionPublic: {
    bachelor: { min: 2700, max: 9000, nprMin: 386100, nprMax: 1287000 },
    master: { min: 3600, max: 9300, nprMin: 514800, nprMax: 1329900 },
  },
  tuitionPrivate: { bachelor: { min: 9000, max: 25000 }, master: { min: 10000, max: 30000 } },
  proofOfFunds: { eur: 7200, monthly: 600, npr: 1029600 },
  livingCost: { min: 800, max: 1200, nprMin: 114400, nprMax: 171600 },
  visaFee: { eur: 60, npr: 8580 },
  workHours: '30 hrs/week',
  requirements: [
    'Admission letter from accredited Spanish university',
    'Valid passport (minimum 12 months)',
    'Proof of funds: €7,200/year (100% IPREM) or €600/month',
    'Health insurance valid in Spain',
    'Proof of accommodation',
    'No criminal record (last 5 years)',
    'Language: B2 Spanish or IELTS/TOEFL for English programs',
  ],
  visaSteps: [
    'Receive admission from Spanish university',
    'Gather proof of funds (bank statements, sponsorship letter)',
    'Obtain health insurance covering Spain',
    'Complete Spain student visa (Type D) application',
    'Book appointment at Spanish embassy/consulate (apply from country of residence)',
    'Submit documents and attend interview',
    'Processing typically 4–8 weeks',
    'Collect TIE (residency card) within 30 days of arrival',
  ],
  faqs: [
    {
      question: 'What is the cost of studying in Spain for international students in 2026?',
      answer: 'First year: €12,000–€22,000 (NPR 17–31 lakhs). Public tuition €2,700–€9,300/year; living €800–€1,200/month; visa proof €7,200/year; airfare ~€800. Private adds €9,000–€30,000/year. 1 EUR ≈ 143 NPR.',
    },
    {
      question: 'What are the study in Spain requirements for Nepali students?',
      answer: 'Admission letter, passport, proof of funds €7,200/year (IPREM 100%), health insurance, accommodation proof. Academic: UNED accreditation or homologación; PCE exams for some programmes. B2 Spanish or IELTS for English programmes.',
    },
    {
      question: 'Can I study in Spain in English?',
      answer: 'Yes. Over 800 programmes taught fully or partially in English (SEPIE). Business, engineering, computer science, HPC at UPC Barcelona, IE, ESADE. Check QEDU and RUCT for accredited programmes.',
    },
    {
      question: 'Do I need to know Spanish to study in Spain?',
      answer: 'Not for English-taught programmes (IELTS/TOEFL typical). Spanish-taught degrees require B2 Spanish. Basic Spanish (A1–A2) recommended for daily life and part-time work. Universities may waive tests for prior English-medium degrees.',
    },
    {
      question: 'What academic percentage do I need to study in Spain?',
      answer: 'Non-EU students need UNED accreditation. Admission grade: 60% high school GPA + 40% PCE exam scores. Minimum 5.0 average across PCE subjects. Requirements vary by region and programme competitiveness.',
    },
    {
      question: 'How much does the Spain student visa cost and what are the requirements?',
      answer: 'Visa fee ~€60. Type D for stays over 90 days. Proof of funds €7,200/year (€600/month). Admission letter, health insurance, accommodation, no criminal record. Processing 4–8 weeks. Apply from Nepal at Spanish diplomatic mission.',
    },
    {
      question: 'Can I work while studying in Spain?',
      answer: 'Yes. Non-EU students can work up to 30 hours per week. Work must complement studies. Need NIE and TIE. Per Royal Decree and immigration regulations 2022–2025.',
    },
    {
      question: 'What is the cost of studying architecture in Spain?',
      answer: 'Public: ~€2,300–€7,000/year for non-EU (UPC Barcelona, Complutense Madrid). Private: €9,000–€20,000+. ETSAB-UPC and Madrid schools rank well. Fees set regionally per ECTS.',
    },
    {
      question: 'Where can I study high performance computing in Spain?',
      answer: 'UPC Barcelona: MIRI-HPC and EUMaster4HPC (2-year, English, 120 ECTS). EUMaster4HPC partners with European supercomputing centres. CEFR B2 English, strong CS/math background. Per FIB-UPC.',
    },
    {
      question: 'Is a study in Spain consultancy in Nepal helpful?',
      answer: 'Yes. Consultancy assists with university selection, UNED/homologación guidance, document prep, visa proof structure. San Marina: free consultation in Kathmandu, Baneshwor, Ghorahi, Itahari.',
    },
    {
      question: 'What is post-study work in Spain for Nepali students?',
      answer: 'Graduates can stay in Spain to seek employment related to their degree. Work permit pathway leads to residence. PR typically after 5 years; citizenship after 10 years. Per Spanish immigration law.',
    },
    {
      question: 'When are Spain intakes and application deadlines?',
      answer: 'Main intake Sept/Oct: applications Feb–May. Spring (Feb): applications Sep–Nov. Apply early; visa processing 4–8 weeks. UNED/PCE deadlines vary by region.',
    },
  ],
};

const tuitionTable = [
  { level: 'Bachelor (Public)', eu: '€720–€1,800', nonEu: '€2,700–€9,000/year' },
  { level: 'Master (Public)', eu: '€1,500–€3,900', nonEu: '€3,600–€9,300/year' },
  { level: 'Bachelor (Private)', eu: '€9,000–€25,000+', nonEu: 'Same' },
  { level: 'Master (Private)', eu: '€10,000–€30,000+', nonEu: 'Same' },
];

const comparisonData = [
  { country: 'Spain', countrySlug: null, tuition: '€2,700–€9,300', living: '€800–€1,200/mo', work: '30 hrs/week', visaTime: '4–8 weeks' },
  { country: 'Germany', countrySlug: '/study-abroad/eur/germany/', tuition: '€0 (most)', living: '€11,904/year', work: '20 hrs/week', visaTime: '4–12 weeks' },
  { country: 'France', countrySlug: '/study-abroad/eur/fr/', tuition: '€2,895–€3,941', living: '€800–€1,800/mo', work: '20 hrs/week', visaTime: '2–4 weeks' },
];

export default function SpainStudyPage() {
  const visaStepsWithText = [
    { name: 'Receive admission from Spanish university', text: 'Apply via UNED or direct; secure offer letter.' },
    { name: 'Gather proof of funds (bank statements, sponsorship letter)', text: '€7,200/year or €600/month per IPREM.' },
    { name: 'Obtain health insurance covering Spain', text: 'Mandatory for visa and enrolment.' },
    { name: 'Complete Spain student visa (Type D) application', text: 'Apply at Spanish embassy; Nepal via New Delhi.' },
    { name: 'Book appointment at Spanish embassy/consulate', text: 'Apply from country of residence; Nepal via India.' },
    { name: 'Submit documents and attend interview', text: 'Processing typically 4–8 weeks.' },
    { name: 'Collect TIE (residency card) within 30 days of arrival', text: 'Foreigner Identity Card required in Spain.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Spain from Nepal 2026 – Complete Guide',
        description: spainData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: spainData.author.name, url: 'https://www.sanmarina.edu.np', description: spainData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Spain study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Spain from Nepal', 'UNED', 'PCE', 'IPREM', 'TIE', 'Spain student visa', 'Study in Spain in English'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Spain Student Visa from Nepal',
        description: 'Step-by-step: admission, proof of funds €7,200, health insurance, Type D visa. TIE within 30 days. Per Spanish Ministry, SEPIE 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: spainData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 4, name: 'Spain', item: 'https://www.sanmarina.edu.np/study-abroad/eur/spain/' },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero – CTA above the fold */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={spainData.heroImage} alt="Nepali students studying in Spain - universities, Madrid Barcelona, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Spain</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {spainData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Spain from Nepal
            <br />
            <span className="text-blue-300">2026 Detail Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Affordable tuition, 800+ English programmes, 30 hrs/week work—Spain is a top choice for Nepali students seeking quality education and vibrant culture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg">
              Apply Now
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /><span>WhatsApp Us</span>
            </a>
          </div>
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Spain study experts. No obligation.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: Spanish Ministry of Education, SEPIE.</strong> Tuition €2,700–€9,300; proof €7,200/year. Verify at <a href="https://www.educacionyfp.gob.es" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">educacionyfp.gob.es</a>, <a href="https://www.sepie.es" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">sepie.es</a>, <a href="https://www.exteriores.gob.es" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">exteriores.gob.es</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {spainData.author.name} · {spainData.author.role} · {spainData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Spain from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition (public)</td><td className="p-3">€2,700–€9,300/year non-EU</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">€7,200/year (€600/month) IPREM 100%</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">€800–1,200/month (Madrid, Barcelona higher)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">~€60; Type D; 4–8 weeks; TIE within 30 days</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">30 hrs/week; NIE + TIE required</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">Stay to seek job; PR pathway after residence</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">English programmes</td><td className="p-3">800+ (SEPIE, QEDU)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: Spanish Ministry of Education, SEPIE. Verify at <a href="https://www.educacionyfp.gob.es" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">educacionyfp.gob.es</a>, <a href="https://www.sepie.es" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">sepie.es</a>, <a href="https://www.exteriores.gob.es" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">exteriores.gob.es</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: spainData.stats.universities, label: 'Universities' },
              { value: spainData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: spainData.stats.englishPrograms, label: 'English Programmes' },
              { value: spainData.stats.workHours, label: 'Work Allowed' },
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

      {/* 1. Why Study in Spain 2026 */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Spain in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Spain offers affordable public tuition (€2,700–€9,300/year for non-EU), 800+ English-taught programmes, 30 hrs/week work rights, and a vibrant lifestyle. Top business schools (IE, IESE, ESADE) and strong tech programmes. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link> (free tuition) or <Link href="/study-abroad/eur/fr/" className="text-blue-600 hover:underline">France</Link> (low fees).
        </p>
        <p className="text-gray-700 mb-4">
          The cost of studying in Spain is lower than the UK or US. Universities like Universidad Complutense Madrid, Universitat de Barcelona, and Universitat Politècnica de Catalunya rank in global listings. Nepali students choose Spain for architecture, business, computer science, and high performance computing study in Spain programmes.
        </p>
      </section>

      {/* 2. Is Spain Good for Nepali Students */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Is Spain Good for Nepali Students?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Affordable tuition, many study in Spain in english options, 30 hrs work, Mediterranean lifestyle. Study in Spain consultancy in Nepal helps with UNED, visa proof, and document prep. Common rejection reasons: insufficient funds, missing accommodation proof—San Marina guides you through.
          </p>
          <p className="text-gray-700">
            Do i need to know spanish to study in spain? Not for English programmes. B2 Spanish required for Spanish-taught degrees. Basic Spanish recommended for daily life.
          </p>
        </div>
      </section>

      {/* 3. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Spain (2026)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Universitat de Barcelona, Complutense Madrid, Universitat Politècnica de Catalunya (UPC), IE University, Universidad Carlos III. Strong in business (IE, IESE, ESADE), engineering, and architecture.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Universitat de Barcelona', city: 'Barcelona', programs: 'All disciplines' },
            { name: 'Universidad Complutense Madrid', city: 'Madrid', programs: 'Medicine, Law, Sciences' },
            { name: 'UPC Barcelona', city: 'Barcelona', programs: 'Engineering, HPC, Architecture' },
            { name: 'IE University', city: 'Madrid', programs: 'Business, Law (English)' },
            { name: 'Universidad Carlos III Madrid', city: 'Madrid', programs: 'Engineering, Business' },
            { name: 'Universitat Autònoma de Barcelona', city: 'Barcelona', programs: 'Sciences, Humanities' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Study in Spain in English */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Spain in English</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Over 800 programmes taught fully or partially in English (SEPIE). Business, engineering, computer science, high performance computing. IELTS 6.0–6.5 or TOEFL typical. Search via QEDU and RUCT.
          </p>
          <p className="text-gray-700">
            Study in Spain in english is common at private universities (IE, ESADE) and selected public programmes. UPC Barcelona offers EUMaster4HPC in English. Do i need to know spanish to study in spain? No for English-taught; yes (B2) for Spanish-taught.
          </p>
        </div>
      </section>

      {/* 5. Academic Percentage Requirements */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Academic Percentage Required to Study in Spain</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Non-EU students need UNED accreditation or homologación. Admission grade: 60% high school GPA (NMB) + 40% PCE (Specific Competency Exams). Minimum 5.0 average across PCE subjects. Requirements vary by region.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Spain requirements for Nepali students: 10+2 equivalent, UNED conversion to Spanish 1–10 scale. PCE exams: typically 4–6 subjects; Valencian Community 4, others 6. Check university-specific cut-offs.
        </p>
      </section>

      {/* 6. Cost of Studying Architecture in Spain */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Studying Architecture in Spain</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Public: ~€2,300–€7,000/year for non-EU (UPC Barcelona ETSAB, Complutense Madrid). Private: €9,000–€20,000+. Fees per ECTS; architecture often higher. Cost of studying architecture in spain is competitive vs UK/US.
          </p>
          <p className="text-gray-700">
            ETSAB-UPC and Madrid architecture schools are well-regarded. Living in Barcelona/Madrid adds €800–€1,200/month. Total first year: €15,000–€25,000 (NPR 21–36L) for public architecture.
          </p>
        </div>
      </section>

      {/* 7. High Performance Computing */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">High Performance Computing Study in Spain</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> UPC Barcelona (FIB) offers MIRI-HPC and EUMaster4HPC—2-year, English-taught, 120 ECTS. EUMaster4HPC partners with European supercomputing centres. CEFR B2 English, strong CS/math background required.
        </p>
        <p className="text-gray-700">
          High performance computing study in spain is strong at UPC. EUMaster4HPC requires mobility to a partner university in year 2. Industry and lab internships available. Per FIB-UPC and masters.fib.upc.edu.
        </p>
      </section>

      {/* 8. Total Cost + Proof of Funds */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Cost of Studying in Spain from Nepal</h2>
          <p className="text-gray-700 mb-6 font-medium">
            <strong>Quick answer:</strong> First year €12,000–€22,000 (NPR 17–31L). Tuition €2,700–€9,300 (public); living €800–€1,200/month; proof of funds €7,200/year; visa ~€60; airfare ~€800. Private adds €9,000–€30,000/year. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/fr/" className="text-blue-600 hover:underline">France</Link>, or <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition: Public vs Private (Non-EU)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Level</th>
                  <th className="p-4 text-left">EU/EEA</th>
                  <th className="p-4 text-left">Non-EU</th>
                </tr>
              </thead>
              <tbody>
                {tuitionTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.level}</td>
                    <td className="p-4">{row.eu}</td>
                    <td className="p-4">{row.nonEu}</td>
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
                <tr className="border-b border-gray-100"><td className="p-3">Madrid (shared)</td><td className="p-3">€400–700</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Barcelona (shared)</td><td className="p-3">€400–650</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Valencia, Seville, Granada</td><td className="p-3">€300–550</td></tr>
                <tr><td className="p-3">Student residence</td><td className="p-3">€350–600</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Proof of Funds (Spain Student Visa 2026)</h3>
          <p className="text-gray-700 mb-4">
            Spain student visa requires 100% IPREM = €7,200/year (€600/month). Accept: bank statements, sponsorship letter, scholarship. Must cover full stay. NPR equivalent ~NPR 10.3 lakhs. <strong>Note:</strong> Nepali students apply via Spanish Embassy in New Delhi.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <DollarSign className="text-[#0056b3] mb-2" size={24} />
              <p className="font-bold">Proof of Funds</p>
              <p className="text-lg font-bold">€7,200/year</p>
              <p className="text-sm text-gray-600">NPR ~10.3L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <GraduationCap className="text-green-600 mb-2" size={24} />
              <p className="font-bold">Tuition (Public)</p>
              <p className="text-lg font-bold">€2,700–€9,300</p>
              <p className="text-sm text-gray-600">NPR 3.9–13.3L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <FileText className="text-orange-600 mb-2" size={24} />
              <p className="font-bold">Visa</p>
              <p className="text-lg font-bold">~€60</p>
              <p className="text-sm text-gray-600">NPR 8,580</p>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Spain Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Main intake: September/October. Applications typically Feb–May for public universities. Some programmes (Feb intake) accept applications Sep–Nov. Apply early; visa processing 4–8 weeks. UNED/PCE deadlines vary by region.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">Intake</th><th className="p-4 text-left">Classes Begin</th><th className="p-4 text-left">Application Window</th><th className="p-4 text-left">Visa Window</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Autumn (main)</td><td className="p-4">Sept/Oct</td><td className="p-4">Feb–May</td><td className="p-4">Jun–Aug</td></tr>
                <tr><td className="p-4 font-semibold">Spring</td><td className="p-4">Feb</td><td className="p-4">Sep–Nov</td><td className="p-4">Dec–Jan</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9 & 10. Visa Process + Documents */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Spain Student Visa Process (Step-by-Step)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Admission → proof of funds (€7,200/year) → health insurance → Type D application → appointment at Spanish embassy/consulate (Nepal via New Delhi) → interview. Processing 4–8 weeks. Collect TIE within 30 days of arrival.
        </p>
        <ol className="space-y-3 max-w-2xl mb-8">
          {spainData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Spain Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Insufficient proof of funds (must meet €7,200/year or €600/month)</li>
          <li>Missing accommodation proof or vague plan</li>
          <li>Incomplete UNED accreditation or PCE scores</li>
          <li>Health insurance not valid for Spain</li>
          <li>Applying too late—allow 4–8 weeks for visa</li>
          <li>Documents not translated or apostilled as required</li>
        </ul>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {spainData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Post-Study Work & PR Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Work & PR Pathway in Spain</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Graduates can stay in Spain to seek employment related to their degree. Work permit pathway leads to residence. Permanent residency typically after 5 years of legal residence; Spanish citizenship possible after 10 years. Per Spanish immigration law.
        </p>
        <p className="text-gray-700">
          Post-study work opportunities in Spain include tech, hospitality, and business sectors. Madrid and Barcelona have strong job markets. Securing a job offer allows transition to work residence. Compare long-term options with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link> (18-month job-seeker) or <Link href="/study-abroad/can/" className="text-blue-600 hover:underline">Canada</Link> (PGWP).
        </p>
      </section>

      {/* 11. Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work While Studying in Spain</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Non-EU students can work up to 30 hours per week. Work must complement studies. Need NIE and TIE. Per Royal Decree; simplified since 2022.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 30 hrs/week maximum</li>
            <li>• Must not interfere with studies</li>
            <li>• NIE and TIE required</li>
            <li>• Exceeding limits risks visa issues</li>
          </ul>
        </div>
      </section>

      {/* 12. Advantages & Disadvantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages of Studying in Spain</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Affordable public tuition vs UK/US</li>
                <li>• 800+ English-taught programmes</li>
                <li>• 30 hrs/week work rights</li>
                <li>• Top business schools (IE, IESE, ESADE)</li>
                <li>• Schengen access, Mediterranean lifestyle</li>
                <li>• Strong architecture, HPC programmes</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Disadvantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Proof of funds €7,200 upfront</li>
                <li>• Visa processing 4–8 weeks</li>
                <li>• Housing costly in Madrid/Barcelona</li>
                <li>• Spanish helpful for jobs and daily life</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Spain vs Germany vs France */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Spain vs Germany vs France – 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-4 text-left">Country</th>
                <th className="p-4 text-left">Tuition</th>
                <th className="p-4 text-left">Living</th>
                <th className="p-4 text-left">Work</th>
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
                  <td className="p-4">{row.visaTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 13. Why Choose Our Consultancy */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Spain?</h2>
        <p className="text-gray-700 mb-4">
          A study in Spain consultancy in Nepal removes guesswork. San Marina guides university selection, UNED/homologación, proof of funds structure, and visa document prep. We help with academic percentage require to study in spain and PCE guidance. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          We address common rejection reasons: insufficient funds, missing accommodation, unclear study plans. Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in spain from nepal 2026 detail guide guidance.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and programme matching</li>
          <li>• UNED and visa documentation support</li>
          <li>• Spain embassy/consulate preparation</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Spain FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Spain from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={spainData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – Book Free first, internal links */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Spain Study Journey Today</h2>
          <p className="text-blue-100 mb-6">
            You&apos;re viewing the full study in Spain from Nepal 2026 detail guide. Get expert guidance on universities, costs, and visa. Free consultation in Kathmandu.
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
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/fr/" className="underline hover:text-white">France</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/study-abroad/eur/italy/" className="underline hover:text-white">Italy</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/fr/" className="text-blue-600 font-semibold hover:underline">France</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
            {' · '}
            <Link href="/study-abroad/eur/italy/" className="text-blue-600 font-semibold hover:underline">Italy</Link>
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
