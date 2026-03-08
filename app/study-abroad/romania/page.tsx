import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ChevronRight,
  Building2,
  Award,
  Briefcase,
  Plane,
  GraduationCap,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Romania from Nepal 2026 | Cost, Visa, MBBS & Pilot',
  description: 'Study in Romania from Nepal 2026: tuition €400–€9,000/year, living €300–€600/mo. MBBS, pilot training. Visa via Kathmandu. Work 20 hrs/week. Free consultation.',
  keywords: 'study in romania, study medicine in romania, study in romania student visa requirements, study in romania without ielts, study pilot in romania, study pilot in romania lists, romania student visa process for nepali students, tuition fees in romania for nepali students 2026, living cost in romania for students from nepal, mbbs in romania for nepali students, study pilot training in romania from nepal, cheapest universities in romania for international students, romania student visa success rate from nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/romania/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/romania/',
    title: 'Study in Romania from Nepal 2026 | Cost, Visa, MBBS & Pilot',
    description: 'Complete 2026 guide: study in Romania, tuition, living costs, MBBS, pilot training, work rules. Bucharest, Cluj-Napoca. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Romania from Nepal 2026',
    description: 'Study in Romania: cost, visa, MBBS, pilot training. Free consultation in Kathmandu.',
  },
};

// Data from studyinromania.gov.ro (Romanian Ministry of Education), Romanian Immigration (IGI), Romanian Embassy/Consulate, Carol Davila, Iuliu Hațieganu, Romanian Aviation Academy, Aerostar Bacau. 1 EUR ≈ 143 NPR (Feb 2026)
const romaniaData = {
  country: 'Romania',
  slug: 'romania',
  heroImage: '/assets/romania.jpg',
  lastUpdated: 'February 2026',
  description: 'Romania hosts 42,000+ international students. Tuition €400–€9,000/year; living €300–€600/month. MBBS €5,000–€12,000/year. Pilot training €55–70k (EASA). Work 20 hrs/week. Visa via Honorary Consulate Kathmandu or Embassy New Delhi. Bucharest, Cluj-Napoca.',
  stats: {
    universities: '73+',
    internationalStudents: '42,000+',
    englishPrograms: '500+',
    postStudy: 'Employment residence',
    studentsPlaced: '1,500+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    min: 400,
    max: 9000,
    mbbsMin: 5000,
    mbbsMax: 12000,
    proofOfFunds: 2000,
  },
  livingCost: {
    bucharest: { min: 400, max: 600 },
    cluj: { min: 350, max: 550 },
    dormitory: { min: 60, max: 85 },
    shared: { min: 80, max: 150 },
    private: { min: 130, max: 300 },
  },
  workRules: 'Up to 4 hours per day, 5 days per week (20 hrs/week) without separate work permit. Residence permit for studies must include right to work (drept de muncă).',
  postStudy: { duration: 0, note: 'No dedicated post-study permit. Employment residence permit via work contract; employer obtains work authorization. EU Blue Card for highly-qualified graduates. Romania approved 100,000 work permits for non-EU in 2025.' },
  visaLocation: 'Romanian Honorary Consulate in Kathmandu (grants Student Visa S) or Embassy of Romania in New Delhi. Contact Kathmandu: (+977) 1 444 6407.',
  visaProcessing: 'Visa duty €120. Processing 2 days to 2 months. Apply at least 6–8 weeks before intended travel.',
  intakeMonths: 'Autumn: September (main intake); Spring: February (varies by programme)',
  deadlines: 'University enrolment: typically June–July for September; government scholarship: apply via Romanian diplomatic missions; visa: 6–8 weeks before travel',
  requirements: [
    'Admission letter from Romanian university (Ministry of National Education recognition)',
    'Proof of tuition payment for at least one year',
    'Valid passport (6+ months beyond stay, 2 blank pages)',
    'Proof of financial means (€2,000+; minimum national net wage per month for study duration)',
    'Certificate of Criminal Record',
    'Medical insurance valid in Romania',
    'Proof of accommodation',
    'Health certificate',
  ],
  visaSteps: [
    'Apply to Romanian universities via studyinromania.gov.ro or direct university portals',
    'Receive admission letter and pay tuition for first year',
    'Gather proof of funds: €2,000+ and subsistence equal to minimum national net wage per month',
    'Obtain Certificate of Criminal Record and medical insurance',
    'Book appointment at Romanian Honorary Consulate in Kathmandu or Embassy in New Delhi',
    'Submit Type D (long-stay) student visa application; pay €120 visa duty',
    'Processing typically 2 days to 2 months; allow 6–8 weeks',
    'Collect visa; travel to Romania; register at local Romanian Office for Immigration within 90 days for residence permit',
  ],
  faqs: [
    {
      question: 'What is study in Romania for international students?',
      answer: 'Study in Romania for international students: 73+ universities, 500+ English programmes. Tuition €400–€9,000/year; living €300–€600/month. MBBS €5,000–€12,000/year. Pilot training €55–70k (EASA). Work 20 hrs/week. Visa via Honorary Consulate Kathmandu or Embassy New Delhi. Bucharest, Cluj-Napoca, Timișoara. Source: studyinromania.gov.ro.',
    },
    {
      question: 'What is the Romania student visa process for Nepali students?',
      answer: 'Romania student visa process for Nepali students: Apply at Romanian Honorary Consulate in Kathmandu or Embassy in New Delhi. Required: admission letter, tuition payment proof, passport (6+ months), proof of funds €2,000+, criminal record, medical insurance. Visa duty €120. Processing 2 days–2 months. Apply 6–8 weeks before travel. Source: newdelhi.mae.ro, international.tuiasi.ro.',
    },
    {
      question: 'What are tuition fees in Romania for Nepali students 2026?',
      answer: 'Tuition fees in Romania for Nepali students 2026: €400–€9,000/year depending on programme and EU/non-EU status. Cheapest universities in Romania for international students: Constantin Brâncuși Târgu Jiu €1,400–€3,900; Vasile Alecsandri Bacău €1,500–€4,000; Lucian Blaga Sibiu €1,800–€4,300. 1 EUR ≈ 143 NPR (Feb 2026). Source: studyinromania.gov.ro.',
    },
    {
      question: 'What is the living cost in Romania for students from Nepal?',
      answer: 'Living cost in Romania for students from Nepal: Bucharest €400–€600/month; Cluj-Napoca €350–€550. Dormitory €60–€85; shared €80–€150; private €130–€300. Food €100–€300; transport €10–€30. Total ~€600/month. NPR: €500/mo ≈ 71,500. Source: studyinromania.gov.ro.',
    },
    {
      question: 'Can I study in Romania without IELTS?',
      answer: 'Yes. Study in Romania without IELTS: Many universities accept proof of prior English-medium education (12+ years), TOEFL, Cambridge, or university-specific English test. Some use interview-based assessment. Romanian-American University offers its own English test. Check individual programme requirements. Source: rau.ro, snspa.ro.',
    },
    {
      question: 'What is MBBS in Romania for Nepali students?',
      answer: 'MBBS in Romania for Nepali students: 6-year programme (5 years + 1-year internship), English-taught. Tuition €5,000–€12,000/year. Top universities: Carol Davila Bucharest, Iuliu Hațieganu Cluj-Napoca, Grigore T. Popa Iași, Victor Babeș Timișoara. WHO, ECFMG recognised. Document-based selection; no entrance exam for most. Source: umfcd.ro, studyinromania.gov.ro.',
    },
    {
      question: 'What is study pilot in Romania? Study pilot training in Romania from Nepal?',
      answer: 'Study pilot in Romania: EASA-approved integrated ATPL €55–70k (cheapest in EU). Romanian Aviation Academy (Bucharest), Aerostar Bacau €55–65k, Transilvania Aviation Academy (Cluj-Napoca) €58–68k, Bucharest Flying Club €60–70k. Study pilot training in Romania from Nepal: English instruction, no Romanian required. Licences valid across 35 EU states. Living €250–€400/month. Source: aviationacademy.ro, airmappr.com.',
    },
    {
      question: 'What are the cheapest universities in Romania for international students?',
      answer: 'Cheapest universities in Romania for international students: Constantin Brâncuși University Târgu Jiu €1,400–€3,900/year; Vasile Alecsandri University Bacău €1,500–€4,000; Lucian Blaga University Sibiu €1,800–€4,300; University of Craiova €1,900–€4,400; West University of Timișoara €2,200–€4,700. Tuition from €400/year at some programmes. Source: studyinromania.gov.ro, studyabroadaide.com.',
    },
    {
      question: 'What is the Romania student visa success rate from Nepal?',
      answer: 'Official Romania student visa success rate from Nepal is not published. Success depends on complete documents, proof of funds (€2,000+), tuition payment, genuine intent, and strong academic profile. Honorary Consulate Kathmandu and Embassy New Delhi process applications. Well-prepared applications with consultancy support typically see high success.',
    },
    {
      question: 'Where do Nepali students apply for Romania visa from Kathmandu?',
      answer: 'Nepali students can apply for Romania student visa at the Romanian Honorary Consulate in Kathmandu. Contact: (+977) 1 444 6407. The consulate grants Student Visa (S) and other long-stay categories. Alternatively, apply at the Embassy of Romania in New Delhi. Source: romania-e-visa.com, newdelhi.mae.ro.',
    },
    {
      question: 'Can I work while studying in Romania?',
      answer: 'Yes. International students can work up to 4 hours per day, 5 days per week (20 hrs/week) without a separate work permit. Residence permit for studies must include the right to work (drept de muncă). Bucharest, Cluj-Napoca, Timișoara have active labour markets. Source: romania-insider.com, rrpb.ro.',
    },
    {
      question: 'What is the post-study residence pathway in Romania?',
      answer: 'Romania has no dedicated post-study work permit. Graduates need an employment residence permit via work contract. Employer obtains work authorization (100,000 permits for non-EU in 2025). Highly-qualified graduates may qualify for EU Blue Card. Apply at General Inspectorate for Immigration (IGI). Source: igi.mai.gov.ro, immigration-portal.ec.europa.eu.',
    },
    {
      question: 'Can I get PR in Romania after studying?',
      answer: 'PR typically requires 5+ years of continuous legal residence. Employment residence permit → work authorization → long-term residence. Citizenship: 8+ years residence (or 5 if married to Romanian) + language + integration. Romania approved 100,000 work permits for non-EU in 2025. Verify at igi.mai.gov.ro.',
    },
  ],
};

const visaStepsWithText = [
  { name: 'Apply to Romanian universities via studyinromania.gov.ro or direct portals', text: 'Choose programme; submit application. Processing 15 days (preliminary); Ministry 30–60 days.' },
  { name: 'Receive admission letter and pay tuition for first year', text: 'Letter of Acceptance from Romanian Ministry of Education. Proof of payment required for visa.' },
  { name: 'Gather proof of funds: €2,000+ and subsistence (min. net wage/month)', text: 'Bank statements for entire study duration. Minimum national net wage per month.' },
  { name: 'Obtain Certificate of Criminal Record and medical insurance', text: 'Valid in Romania. Health certificate from recognised clinic.' },
  { name: 'Book appointment at Romanian Honorary Consulate Kathmandu or Embassy New Delhi', text: 'Kathmandu: (+977) 1 444 6407. Grants Student Visa (S).' },
  { name: 'Submit Type D (long-stay) student visa application; pay €120 visa duty', text: 'Required documents: admission, tuition proof, passport 6+ months, accommodation proof.' },
  { name: 'Processing typically 2 days to 2 months; allow 6–8 weeks', text: 'Apply well before intended travel.' },
  { name: 'Collect visa; travel to Romania; register at local Romanian Office for Immigration within 90 days', text: 'Obtain residence permit for studies including right to work (drept de muncă).' },
];

const tuitionTable = [
  { level: 'General (non-EU)', range: '€400–€9,000/year', notes: 'Varies by programme; check studyinromania.gov.ro' },
  { level: 'MBBS / Medicine', range: '€5,000–€12,000/year', notes: 'Carol Davila, Iuliu Hațieganu, etc.' },
  { level: 'Cheapest universities', range: '€1,400–€2,200/year', notes: 'Târgu Jiu, Bacău, Sibiu' },
  { level: 'Proof of funds', range: '€2,000+; min. wage/month', notes: 'For entire study duration' },
];

const romaniaVsHungary = [
  { aspect: 'Tuition (non-EU)', romania: '€400–€9,000/year', hungary: '€1,700–€10,800/year' },
  { aspect: 'Living (cheapest)', romania: 'Cluj €350–€550/mo', hungary: 'Debrecen €350–€500/mo' },
  { aspect: 'Work (term)', romania: '20 hrs/week (4 hrs/day)', hungary: '30 hrs/week' },
  { aspect: 'Post-study', romania: 'Employment residence only', hungary: '9-month search permit' },
  { aspect: 'Scholarships', romania: 'Govt bilateral; apply via embassy', hungary: 'Stipendium Hungaricum' },
  { aspect: 'Visa from Nepal', romania: 'Honorary Consulate Kathmandu', hungary: 'Honorary Consulate Kathmandu' },
];

export default function RomaniaStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Romania from Nepal 2026 – Complete Guide',
        description: romaniaData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: romaniaData.author.name, url: 'https://www.sanmarina.edu.np', description: romaniaData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: romaniaData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Romania Student Visa from Nepal',
        description: 'Step-by-step: apply to university via studyinromania.gov.ro, proof €2,000+, Honorary Consulate Kathmandu or Embassy New Delhi. Processing 2 days–2 months. Per studyinromania.gov.ro, igi.mai.gov.ro 2026.',
        step: visaStepsWithText.map((s, i) => ({
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
        description: 'Best education consultancy in Nepal for Romania study abroad',
        knowsAbout: ['Study in Romania from Nepal', 'MBBS in Romania', 'Pilot training Romania', 'Romanian Honorary Consulate Kathmandu', 'Carol Davila Iuliu Hațieganu'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Romania', item: 'https://www.sanmarina.edu.np/study-abroad/romania/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Romania from Nepal.',
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
          <Image src={romaniaData.heroImage} alt="Nepali students studying in Romania - Bucharest Cluj-Napoca, study abroad 2026" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Romania</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {romaniaData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Romania from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa, MBBS & Pilot Training</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Romania: tuition €400–€9,000/year, MBBS €5,000–€12,000, pilot training €55–70k. Work 20 hrs/week. Visa via Kathmandu. Bucharest, Cluj-Napoca.
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Romania study experts. Study in Romania from Nepal consultancy—no obligation for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://studyinromania.gov.ro" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinromania.gov.ro</a> (Romanian Ministry of Education), <a href="https://igi.mai.gov.ro" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">igi.mai.gov.ro</a> (Romanian Immigration), <a href="https://newdelhi.mae.ro" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">newdelhi.mae.ro</a> (Romanian Embassy), Carol Davila, Iuliu Hațieganu, Romanian Aviation Academy.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {romaniaData.author.name} · {romaniaData.author.role} · {romaniaData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Romania from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition €400–€9,000; living €300–€600/mo. MBBS €5,000–€12,000; pilot €55–70k. Visa via Romanian Honorary Consulate Kathmandu or Embassy New Delhi. Work 20 hrs/week. No dedicated post-study permit—employment residence via work contract. <a href="https://studyinromania.gov.ro" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinromania.gov.ro</a>, <a href="https://igi.mai.gov.ro" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">igi.mai.gov.ro</a>, <a href="https://newdelhi.mae.ro" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">newdelhi.mae.ro</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€400–€9,000/year (MBBS €5,000–€12,000; pilot €55–70k)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">€2,000+ (min. net wage/month for study duration)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">Romanian Honorary Consulate Kathmandu or Embassy New Delhi</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week (4 hrs/day, 5 days) without separate permit</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">Employment residence via work contract; EU Blue Card eligible</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">2 days–2 months (apply 6–8 weeks before travel)</td></tr>
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
              { value: romaniaData.stats.universities, label: 'Universities' },
              { value: romaniaData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: romaniaData.stats.englishPrograms, label: 'English Programmes' },
              { value: romaniaData.stats.postStudy, label: 'Post-Study Pathway' },
              { value: romaniaData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Why Study in Romania */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Romania for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Romania offers the lowest tuition in the EU (€400–€9,000), affordable living (€300–€600/month), <Link href="/scholarships/romania-for-nepali-students/" className="text-blue-600 hover:underline">MBBS and pilot training scholarships</Link> in English, work 20 hrs/week, and visa submission from Kathmandu. Bucharest, Cluj-Napoca. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>, or <Link href="/study-abroad/eur/" className="text-blue-600 hover:underline">other European destinations</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Romania for Nepali students attracts those seeking EU education at the lowest cost in Europe. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Romania for medicine (MBBS), pilot training, engineering, and business. Study in Romania from Nepal consultancy services help with university selection, <Link href="/services/student-visa-service-nepal/" className="text-blue-600 hover:underline">visa support via Kathmandu</Link> or New Delhi, and <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarship applications</Link> through Romanian diplomatic missions.
        </p>
      </section>

      {/* 2. Cost of Studying */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Romania?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> First year €6,000–€18,000 (NPR 8.6–26 lakhs). Tuition €400–€9,000/year; living €300–€600/month. Cheapest universities in Romania for international students: Târgu Jiu, Bacău, Sibiu. 1 EUR ≈ 143 NPR (Feb 2026).
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
                <tr className="border-b"><td className="p-3">Tuition (general)</td><td className="p-3">€400–€9,000</td><td className="p-3">0.6–12.9L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (MBBS)</td><td className="p-3">€5,000–€12,000</td><td className="p-3">7.2–17.2L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€3,600–€7,200</td><td className="p-3">5.1–10.3L</td></tr>
                <tr className="border-b"><td className="p-3">Visa fee</td><td className="p-3">€120</td><td className="p-3">~17,000</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€750</td><td className="p-3">1.1L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€6,000–€18,000</td><td className="p-3 font-medium">8.6–26L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Romania for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Romania for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Official studyinromania.gov.ro: dormitory €60–€85; shared €80–€150; private €130–€300. Food €100–€300; transport €10–€30. Total ~€600/month.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Bucharest</td><td className="p-3">€400–€600</td><td className="p-3">Capital; Carol Davila, University of Bucharest</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Cluj-Napoca</td><td className="p-3">€350–€550</td><td className="p-3">Iuliu Hațieganu, Babeș-Bolyai; cheaper than Bucharest</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Timișoara</td><td className="p-3">€300–€500</td><td className="p-3">Victor Babeș; West University; affordable</td></tr>
                <tr><td className="p-3 font-medium">Iași / smaller cities</td><td className="p-3">€300–€480</td><td className="p-3">Grigore T. Popa; lowest cost</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Dormitory €60–€85; shared €80–€150; private €130–€300. Source: studyinromania.gov.ro.</p>
        </div>
      </section>

      {/* 3. MBBS / Medicine */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
          <GraduationCap className="text-[#0056b3]" size={28} />
          MBBS in Romania for Nepali Students
        </h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> MBBS in Romania for Nepali students: 6-year programme (5 years + 1-year internship), English-taught. Tuition €5,000–€12,000/year. Carol Davila (Bucharest), Iuliu Hațieganu (Cluj-Napoca), Grigore T. Popa (Iași), Victor Babeș (Timișoara). WHO, ECFMG recognised. Document-based selection.
        </p>
        <p className="text-gray-700 mb-4">
          Study medicine in Romania at public and private medical universities. No entrance exam for most English-taught programmes; admission based on academic documents. Degrees recognised across the EU. Compare with <Link href="/study-abroad/hungary/" className="text-blue-600 hover:underline">MBBS in Hungary</Link> for Stipendium Hungaricum scholarship options.
        </p>
      </section>

      {/* 4. Pilot Training */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Plane className="text-[#0056b3]" size={28} />
            Study Pilot in Romania – Pilot Training from Nepal
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study pilot in Romania: EASA-approved integrated ATPL €55–70k (cheapest in EU). Romanian Aviation Academy (Bucharest), Aerostar Bacau €55–65k, Transilvania Aviation Academy (Cluj-Napoca) €58–68k. Study pilot training in Romania from Nepal: English instruction, licences valid across 35 EU states.
          </p>
          <p className="text-gray-700 mb-4">
            Study pilot in Romania lists: Romanian Aviation Academy (Bucharest Băneasa), Aerostar Bacau, Transilvania Aviation Academy (Cluj-Napoca), Bucharest Flying Club, Regional Air School. Living €250–€400/month. Total investment €65–85k over 18 months. Source: aviationacademy.ro, airmappr.com.
          </p>
        </div>
      </section>

      {/* 5. Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Work While Studying in Romania?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Students can work up to 4 hours per day, 5 days per week (20 hrs/week) without a separate work permit. Residence permit for studies must include the right to work (drept de muncă). Bucharest, Cluj-Napoca, Timișoara have active labour markets.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 4 hrs/day, 5 days/week = 20 hrs/week</li>
            <li>• No separate work permit required</li>
            <li>• Residence permit must include right to work</li>
            <li>• Avoid full-time positions disguised as part-time</li>
          </ul>
        </div>
      </section>

      {/* 6. Post-Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Residence Pathway in Romania</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Romania has no dedicated post-study work permit. Graduates need an employment residence permit via work contract. Employer obtains work authorization. Romania approved 100,000 work permits for non-EU in 2025. Highly-qualified graduates may qualify for EU Blue Card.
        </p>
        <p className="text-gray-700 mb-4">
          Apply at General Inspectorate for Immigration (IGI) after securing employment. Processing ~30 days (up to 90). Residence permit typically 1 year, renewable. Source: igi.mai.gov.ro, immigration-portal.ec.europa.eu.
        </p>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Romania for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Medicine (MBBS), Pilot Training, Engineering, Business, Computer Science, Pharmacy. Carol Davila and Iuliu Hațieganu for medicine; Romanian Aviation Academy and Aerostar Bacau for pilot; Politehnica Bucharest for engineering.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Medicine (MBBS):</strong> Carol Davila (Bucharest), Iuliu Hațieganu (Cluj), Grigore T. Popa (Iași), Victor Babeș (Timișoara)</li>
          <li>• <strong>Pilot Training:</strong> Romanian Aviation Academy, Aerostar Bacau, Transilvania Aviation Academy—EASA ATPL €55–70k</li>
          <li>• <strong>Engineering:</strong> Politehnica Bucharest, Technical University of Cluj-Napoca</li>
          <li>• <strong>Business & Economics:</strong> Romanian-American University, Bucharest University of Economic Studies</li>
          <li>• <strong>Computer Science:</strong> Politehnica Bucharest, Babeș-Bolyai, West University Timișoara</li>
        </ul>
      </section>

      {/* 7. Study Without IELTS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Romania Without IELTS?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Study in Romania without IELTS: Many universities accept proof of prior English-medium education (12+ years), TOEFL, Cambridge, or university-specific English test. Some use interview-based assessment. Romanian-American University offers its own English test.
          </p>
        </div>
      </section>

      {/* 8. Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarships for Study in Romania from Nepal
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Romanian government scholarships for foreign citizens (2026–2027 academic year) are offered through the Ministry of Foreign Affairs. Apply via Romanian diplomatic missions in your country (Honorary Consulate Kathmandu or Embassy New Delhi). Based on bilateral agreements. Check studyinromania.gov.ro/scholarships.
          </p>
          <p className="text-gray-700 mb-4">
            See <Link href="/scholarships/romania-for-nepali-students/" className="text-blue-600 hover:underline">Scholarship in Romania for Nepali Students</Link> and <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link> for general guidance.
          </p>
        </div>
      </section>

      {/* 9. Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Main intake: September. Spring: February (varies by programme). University enrolment typically June–July for September. Government scholarship: apply via Romanian diplomatic missions. Visa: apply 6–8 weeks before intended travel.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Autumn:</strong> September (main intake)</li>
            <li>• <strong>Spring:</strong> February (selected programmes)</li>
            <li>• <strong>University:</strong> June–July for September</li>
            <li>• <strong>Visa:</strong> 6–8 weeks before travel</li>
          </ul>
        </div>
      </section>

      {/* 10. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Romania</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Carol Davila (Medicine, Bucharest), University of Bucharest, Babeș-Bolyai (Cluj-Napoca), Politehnica Bucharest (Engineering), Iuliu Hațieganu (Medicine, Cluj). Cheapest universities in Romania for international students: Constantin Brâncuși, Vasile Alecsandri, Lucian Blaga.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Carol Davila University', city: 'Bucharest', programs: 'Medicine, Pharmacy' },
            { name: 'University of Bucharest', city: 'Bucharest', programs: 'All disciplines' },
            { name: 'Babeș-Bolyai University', city: 'Cluj-Napoca', programs: 'Largest in Romania' },
            { name: 'Politehnica Bucharest', city: 'Bucharest', programs: 'Engineering' },
            { name: 'Iuliu Hațieganu University', city: 'Cluj-Napoca', programs: 'Medicine' },
            { name: 'West University of Timișoara', city: 'Timișoara', programs: 'Multidisciplinary' },
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
            Get expert guidance on study in Romania from Nepal. Our team helps with university selection, MBBS and pilot programme applications, and visa support via Kathmandu or New Delhi.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Romania from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Visa Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Romania Student Visa Process for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Apply at Romanian Honorary Consulate in Kathmandu or Embassy in New Delhi. Required: admission letter, tuition payment proof, passport (6+ months), proof of funds €2,000+, criminal record, medical insurance. Visa duty €120. Apply 6–8 weeks before travel.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Romania visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>Romanian Honorary Consulate in Kathmandu.</strong> Contact: (+977) 1 444 6407. The consulate grants Student Visa (S) and other long-stay categories. Alternatively, apply at the Embassy of Romania in New Delhi. Source: romania-e-visa.com, newdelhi.mae.ro.
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
          <h4 className="font-bold text-[#001F3F] mb-2">Common Romania Student Visa Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Insufficient proof of funds (need €2,000+ and minimum national net wage per month for study duration)</li>
            <li>Missing tuition payment proof for at least one year</li>
            <li>Applying too late (processing 2 days–2 months; apply 6–8 weeks before travel)</li>
            <li>Passport with less than 6 months validity or fewer than 2 blank pages</li>
            <li>Documents not legalized or translated where required (check embassy)</li>
            <li>Accommodation proof not provided</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents (Study in Romania Student Visa Requirements)</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {romaniaData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Romania?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection (MBBS, pilot, engineering, business), visa prep via Romanian Honorary Consulate Kathmandu or Embassy New Delhi, and scholarship applications. <Link href="/about/" className="text-blue-600 hover:underline">QEAC certified</Link>. We help you meet study in Romania from Nepal requirements—including proof of funds €2,000+ and tuition payment.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Lalitpur, Pokhara, and across Nepal rely on us for study in Romania from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• MBBS and pilot programme guidance</li>
          <li>• University and scholarship applications via Romanian diplomatic missions</li>
          <li>• Visa and document support (Kathmandu or New Delhi)</li>
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
            <Link href="/study-abroad/eur/poland/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Poland</Link>
            <Link href="/study-abroad/eur/netherlands/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Netherlands</Link>
            <Link href="/study-abroad/eur/belgium/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Belgium</Link>
          </div>
        </div>
      </section>

      {/* GAP & Dependents */}
      <section className="py-12 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Does Romania Accept Study Gap (GAP)? Can I Bring Dependents?</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP:</strong> Romanian universities generally accept study gaps when justified. MBBS and most programmes use document-based admission (no entrance exam); academic transcripts and prior qualifications matter. Government scholarship via bilateral agreements—check Honorary Consulate Kathmandu or Embassy New Delhi for eligibility.
        </p>
        <p className="text-gray-700">
          <strong>Dependents:</strong> Family reunification possible for students with valid residence. Spouse and children can apply; proof of additional funds and accommodation required. Verify at Romanian Immigration (igi.mai.gov.ro).
        </p>
      </section>

      {/* PR Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Romania</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Romania has no dedicated post-study permit. Employment residence via work contract → long-term residence. PR typically requires 5+ years of continuous legal residence. Citizenship: 8+ years residence (or 5 if married to Romanian) + language + integration.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Verify at General Inspectorate for Immigration (igi.mai.gov.ro). Romania approved 100,000 work permits for non-EU in 2025. EU Blue Card available for highly-qualified graduates.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Post-study</td><td className="p-3">No dedicated permit; employment residence via work contract</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Work residence</td><td className="p-3">Employer obtains work authorization; EU Blue Card eligible</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">5+ years for PR; 8 years (or 5 if married) for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 12. Romania vs Hungary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Romania vs Hungary – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both popular for Nepali students. Romania offers lower tuition; Hungary has Stipendium Hungaricum and 9-month post-study permit. Compare with <Link href="/study-abroad/hungary/" className="text-blue-600 hover:underline">Hungary</Link> for your profile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Romania</th>
                  <th className="p-4 text-left">Hungary</th>
                </tr>
              </thead>
              <tbody>
                {romaniaVsHungary.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.romania}</td>
                    <td className="p-4">{row.hungary}</td>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Romania FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Romania from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={romaniaData.faqs} />
          </div>
        </div>
      </section>

      {/* 14. Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Romania Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Romania for Nepali students 2026, Romania student visa process, MBBS, and pilot training. Free consultation in Kathmandu—no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all cta-button"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button-secondary"
            >
              Apply to Study in Romania from Nepal
            </Link>
            <Link
              href="/study-abroad/eur/"
              className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button-secondary"
            >
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/hungary/" className="underline hover:text-white">Hungary</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/belgium/" className="underline hover:text-white">Belgium</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/ireland/" className="underline hover:text-white">Ireland</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>
    </main>
  );
}
