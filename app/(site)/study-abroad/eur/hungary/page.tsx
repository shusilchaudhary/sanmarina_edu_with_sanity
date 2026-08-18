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
  title: 'Study in Hungary from Nepal 2026 | Cost, Visa & Scholarship',
  description: 'Study in Hungary from Nepal 2026: tuition €1,700–10,800, living €350–700/mo. Honorary Consulate Kathmandu (Jhamsikhel). Stipendium Hungaricum. Work 30 hrs/week. 9‑mo post-study. Free consultation Kathmandu.',
  keywords: 'study in hungary, study in hungary from nepal, study in hungary for international students, study in hungary scholarship, can nepali student afford to study in hungary, cost of studying mechanical engineering in hungary, engineering studies in hungary, how much cost to study in hungary, pros and cons of studying in hungary, reasons to study in hungary, hungary student visa process for nepali students, tuition fees in hungary for nepali students 2026, living cost in hungary for students from nepal, study in hungary without ielts from nepal, stypendium hungaricum scholarship for nepali students, mechanical engineering in hungary for nepali students, nursing study in hungary for international students, hungary student visa success rate from nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/hungary/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/hungary/',
    title: 'Study in Hungary from Nepal 2026 | Cost, Visa & Scholarship',
    description: 'Complete 2026 guide: study in Hungary, tuition, living costs, Stipendium Hungaricum, work rules. Budapest, Debrecen. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Hungary from Nepal 2026',
    description: 'Study in Hungary: cost, visa, Stipendium Hungaricum, work rules. Free consultation in Kathmandu.',
  },
};

// Data from studyinhungary.hu, stipendiumhungaricum.hu, Hungarian immigration, BME, Semmelweis, Szeged, Széchenyi. 1 EUR ≈ 143 NPR (Feb 2026)
const hungaryData = {
  country: 'Hungary',
  slug: 'hungary',
  heroImage: '/assets/hungary.webp',
  lastUpdated: 'February 2026',
  description: 'Hungary hosts 45,000+ international students. Tuition €1,700–€10,800/year; living €350–€700/month. Stipendium Hungaricum covers tuition + accommodation. Work 30 hrs/week term, full-time breaks. 9-month post-study residence. Budapest, Debrecen.',
  stats: {
    universities: '30+',
    internationalStudents: '45,000+',
    englishPrograms: '550+',
    postStudy: '9 months',
    studentsPlaced: '1,500+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    undergradMin: 1700,
    undergradMax: 10800,
    masterMin: 2500,
    masterMax: 10800,
    mechanical: { min: 6500, max: 7800 },
    nursing: { min: 3400, max: 7400 },
    medicine: 7900,
    proofOfFunds: 6000,
  },
  livingCost: {
    budapest: { min: 500, max: 700 },
    debrecen: { min: 350, max: 500 },
    dormitory: { min: 90, max: 350 },
    sharedFlat: { min: 200, max: 450 },
  },
  workRules: '30 hours per week during term; full-time during holidays. No separate work permit required for students.',
  postStudy: { duration: 9, note: '9-month residence permit for job search or business; apply before student permit expires' },
  visaLocation: 'Honorary Consulate of Hungary in Kathmandu (Chaudhary Towers, Jhamsikhel, Lalitpur) or Embassy in New Delhi. Email-based appointments.',
  visaProcessing: 'Minimum 3 weeks; allow more for peak periods',
  intakeMonths: 'Autumn: September; Spring: February (varies by programme)',
  deadlines: 'Stipendium Hungaricum: typically January 15 for 2026/27; direct university: March–June for autumn',
  requirements: [
    'Admission letter from recognized Hungarian university',
    'Valid passport (6+ months beyond stay)',
    'Proof of funds: €6,000+ for living (or scholarship confirmation)',
    'Health insurance valid in Hungary',
    'Proof of accommodation (or dormitory confirmation)',
    'Academic qualifications (transcripts, diplomas)',
    'English proficiency: IELTS/TOEFL or prior English-medium proof',
  ],
  visaSteps: [
    'Apply to Hungarian universities or Stipendium Hungaricum (deadlines: Jan 15 for scholarship; March–June for direct)',
    'Receive admission letter or scholarship offer',
    'Gather proof of funds: €6,000+ living (or scholarship covers accommodation)',
    'Obtain health insurance valid in Hungary',
    'Book appointment at Honorary Consulate in Kathmandu (Jhamsikhel) or Embassy in New Delhi',
    'Submit Type D visa application with passport, photos, forms, documents',
    'Processing minimum 3 weeks; apply early',
    'Collect visa and travel to Hungary; register for residence permit within 90 days',
  ],
  faqs: [
    {
      question: 'What are the reasons to study in Hungary?',
      answer: 'Reasons to study in Hungary: 550+ English programmes, affordable tuition (€1,700–€10,800/year), Stipendium Hungaricum scholarship covers tuition and accommodation, work 30 hrs/week during term, 9-month post-study residence, Schengen access. Budapest and Debrecen are major hubs. Study in Hungary for international students offers strong engineering, medicine, and nursing programmes.',
    },
    {
      question: 'What are the pros and cons of studying in Hungary?',
      answer: 'Pros: Affordable tuition and living costs, Stipendium Hungaricum scholarship, work 30 hrs/week, 9-month post-study permit, 550+ English programmes, Schengen. Cons: Hungary is not an English-speaking country (though programmes are in English); Nepal is not currently a Stipendium Hungaricum sending partner—check apply.stipendiumhungaricum.hu annually for eligibility.',
    },
    {
      question: 'Can Nepali student afford to study in Hungary?',
      answer: 'Yes. Tuition €1,700–€10,800/year; living €350–€700/month (Debrecen cheaper than Budapest). Dormitory €90–€350/month. First year total approx €8,000–€18,000 (NPR 11–26 lakhs). Stipendium Hungaricum, if Nepal becomes eligible, covers tuition and accommodation. Engineering and nursing programmes at Széchenyi, Szeged are more affordable.',
    },
    {
      question: 'What is the Hungary student visa process for Nepali students?',
      answer: 'Nepali students apply at Honorary Consulate of Hungary in Kathmandu (Chaudhary Towers, Jhamsikhel, Lalitpur) or Embassy in New Delhi. Email-based appointments. Required: admission letter, passport, proof of funds €6,000+, health insurance, accommodation. Processing minimum 3 weeks. Apply early for autumn intake.',
    },
    {
      question: 'What are tuition fees in Hungary for Nepali students 2026?',
      answer: 'Undergraduate €1,700–€10,800/year; Master\'s €2,500–€10,800/year. Mechanical engineering in Hungary: BME €6,500–€7,800/year. Nursing: Széchenyi €1,700/semester; Semmelweis €3,700/semester. Medicine €7,900+/semester. 1 EUR ≈ 143 NPR (Feb 2026). Stipendium Hungaricum covers tuition if eligible.',
    },
    {
      question: 'What is the living cost in Hungary for students from Nepal?',
      answer: 'Budapest €500–€700/month; Debrecen €350–€500/month (cheaper). Dormitory €90–€350; shared flat €200–€450. Studyinhungary.hu official calculator: Budapest dorm ~€90, shared flat ~€350; Debrecen dorm ~€45, shared ~€200. NPR: €500/mo ≈ 71,500.',
    },
    {
      question: 'Can I study in Hungary without IELTS from Nepal?',
      answer: 'Yes. Many universities accept proof of prior English-medium education (12+ years) or TOEFL, Cambridge, Duolingo. Stipendium Hungaricum accepts alternatives per programme. Check individual university requirements. Study in Hungary without IELTS from Nepal is possible at institutions that waive for English-medium background.',
    },
    {
      question: 'What is Stipendium Hungaricum scholarship for Nepali students?',
      answer: 'Stipendium Hungaricum is Hungary\'s government scholarship: tuition waiver, accommodation, monthly stipend. Nepal is not currently listed as a sending partner at stipendiumhungaricum.hu/partners—check the official Call for Applications annually. If eligible, apply via apply.stipendiumhungaricum.hu; deadline typically January 15 for 2026/27.',
    },
    {
      question: 'What is the cost of studying mechanical engineering in Hungary?',
      answer: 'Cost of studying mechanical engineering in Hungary: BME (Budapest University of Technology and Economics) €6,500–€7,800/year. Engineering studies in Hungary at BME are highly regarded; 70% of Hungarian engineering degrees come from BME. Stipendium Hungaricum covers tuition if Nepal becomes eligible.',
    },
    {
      question: 'What is nursing study in Hungary for international students?',
      answer: 'Nursing study in Hungary for international students: Semmelweis (Budapest) €3,700/semester; Széchenyi (Győr) €1,700/semester; University of Szeged, University of Miskolc offer BSc Nursing in English. Stipendium Hungaricum lists nursing programmes. IELTS 5.5+ or B2 equivalent; prior English-medium education may waive.',
    },
    {
      question: 'What is the Hungary student visa success rate from Nepal?',
      answer: 'Official Hungary student visa success rate from Nepal is not published. Success depends on complete documents, proof of funds (€6,000+), genuine intent, and strong academic profile. Honorary Consulate in Kathmandu and Embassy in New Delhi process applications. Well-prepared applications with consultancy support typically see high success.',
    },
    {
      question: 'How much does it cost to study in Hungary?',
      answer: 'How much cost to study in Hungary: first year €8,000–€18,000 (NPR 11–26 lakhs). Tuition €1,700–€10,800/year; living €350–€700/month. Debrecen and smaller cities cheaper than Budapest. Stipendium Hungaricum reduces cost significantly if eligible.',
    },
    {
      question: 'What is the post-study residence pathway in Hungary?',
      answer: 'Non-EU graduates can apply for a 9-month residence permit for job search or to start a business. Apply before student permit expires. No job offer required initially. Bridge to employment or entrepreneurship. Source: Hungarian immigration portal.',
    },
    {
      question: 'Can I get PR in Hungary after studying?',
      answer: 'PR typically requires 3+ years of continuous legal residence. 9-month post-study → employment permit → long-term residence. Citizenship: 8 years (or 5 if married to Hungarian) + language. Verify at Hungarian Immigration and Citizenship Office.',
    },
  ],
};

const tuitionTable = [
  { level: 'Undergraduate', range: '€1,700–€10,800/year', notes: 'Varies by programme' },
  { level: 'Master\'s', range: '€2,500–€10,800/year', notes: 'Varies by field' },
  { level: 'Mechanical Engineering (BME)', range: '€6,500–€7,800/year', notes: 'Budapest University of Technology' },
  { level: 'Nursing', range: '€1,700–€3,700/semester', notes: 'Széchenyi, Semmelweis' },
  { level: 'Medicine', range: '€7,900+/semester', notes: 'Semmelweis, Szeged' },
  { level: 'Proof of funds', range: '€6,000+ living', notes: 'Or scholarship confirmation' },
];

const visaStepsWithText = [
  { name: 'Apply to Hungarian universities or Stipendium Hungaricum (Jan 15 scholarship; Mar–Jun direct)', text: 'Stipendium: apply.stipendiumhungaricum.hu. Direct: March–June for autumn. Check studyinhungary.hu.' },
  { name: 'Receive admission letter or scholarship offer', text: 'Secure offer; pay deposit if direct application.' },
  { name: 'Gather proof of funds: €6,000+ living (or scholarship confirmation)', text: 'Bank statements 6 months. Stipendium covers accommodation if eligible.' },
  { name: 'Obtain health insurance valid in Hungary', text: 'Required for visa and residence.' },
  { name: 'Book appointment at Honorary Consulate Kathmandu (Jhamsikhel) or Embassy New Delhi', text: 'Email-based. Chaudhary Towers, Jhamsikhel, Lalitpur for Kathmandu.' },
  { name: 'Submit Type D visa application with passport, photos, forms, documents', text: 'Processing minimum 3 weeks. Apply early for autumn.' },
  { name: 'Collect visa and travel to Hungary; register for residence permit within 90 days', text: 'Register at immigration office upon arrival.' },
];

const hungaryVsGermany = [
  { aspect: 'Tuition', hungary: '€1,700–€10,800/year', germany: '€0–€1,500 (public)' },
  { aspect: 'Living (cheapest)', hungary: 'Debrecen €350–€500/mo', germany: '€850–€1,200/mo (blocked account)' },
  { aspect: 'Work (term)', hungary: '30 hrs/week', germany: '20 hrs/week (120 full days)' },
  { aspect: 'Post-study', hungary: '9 months', germany: '18 months' },
  { aspect: 'Scholarships', hungary: 'Stipendium Hungaricum', germany: 'DAAD, Deutschlandstipendium' },
  { aspect: 'English programmes', hungary: '550+', germany: '2,000+' },
];

export default function HungaryStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Hungary from Nepal 2026 – Complete Guide',
        description: hungaryData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: hungaryData.author.name, url: 'https://www.sanmarina.edu.np', description: hungaryData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: hungaryData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Hungary Student Visa from Nepal',
        description: 'Step-by-step: apply to university or Stipendium, proof €6,000+ (or scholarship), Honorary Consulate Kathmandu (Jhamsikhel) or Embassy New Delhi. Processing min 3 weeks. Per studyinhungary.hu, stipendiumhungaricum.hu 2026.',
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
          { '@type': 'ListItem', position: 4, name: 'Hungary', item: 'https://www.sanmarina.edu.np/study-abroad/eur/hungary/' },
        ],
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'Best education consultancy in Nepal for Hungary study abroad',
        knowsAbout: ['Study in Hungary from Nepal', 'Honorary Consulate Kathmandu Jhamsikhel', 'Stipendium Hungaricum', 'BME Semmelweis Szeged', 'Hungary student visa Nepal'],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={hungaryData.heroImage} alt="Nepali students studying in Hungary - Budapest Debrecen, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Hungary</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {hungaryData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex items-center gap-3">
            Study in Hungary  <Image src='/assets/hungary.png' width={100} height={100} alt="hungary flag" />
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Hungary study experts. No obligation—perfect for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://studyinhungary.hu" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinhungary.hu</a>, <a href="https://stipendiumhungaricum.hu" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">stipendiumhungaricum.hu</a>, Hungarian immigration, BME, Semmelweis, Szeged.</strong> Verify with official sources.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {hungaryData.author.name} · {hungaryData.author.role} · {hungaryData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Hungary from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition €1,700–€10,800; living €350–€700/mo. Visa at Honorary Consulate Kathmandu (Jhamsikhel) or Embassy New Delhi. Stipendium Hungaricum covers tuition + accommodation if eligible. Work 30 hrs/week. 9‑mo post-study. <a href="https://studyinhungary.hu" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinhungary.hu</a>, <a href="https://stipendiumhungaricum.hu" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">stipendiumhungaricum.hu</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€1,700–€10,800/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">€6,000+ living (or scholarship)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">Honorary Consulate Kathmandu (Jhamsikhel) or Embassy New Delhi</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">30 hrs/week term; full-time holidays</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">9-month job-search permit</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">Minimum 3 weeks</td></tr>
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
              { value: hungaryData.stats.universities, label: 'Universities' },
              { value: hungaryData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: hungaryData.stats.englishPrograms, label: 'English Programmes' },
              { value: hungaryData.stats.postStudy, label: 'Post-Study Permit' },
              { value: hungaryData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Why Study in Hungary */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">What Are the Reasons to Study in Hungary?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Reasons to study in Hungary: 550+ English programmes, affordable tuition, Stipendium Hungaricum scholarship, work 30 hrs/week, 9-month post-study permit, Schengen access. Budapest and Debrecen. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link>, <Link href="/study-abroad/czech-republic/" className="text-blue-600 hover:underline">Czech Republic</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Hungary for international students offers strong engineering, medicine, and nursing programmes. Nepali students from Kathmandu, Baneshwor, Lalitpur, and across Nepal choose Hungary for affordable EU education. Mechanical engineering in Hungary for Nepali students at BME is highly regarded; nursing study in Hungary for international students is available at Semmelweis, Szeged, Széchenyi.
        </p>
      </section>

      {/* 2. Cost of Studying */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Hungary?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> How much cost to study in Hungary: first year €8,000–€18,000 (NPR 11–26 lakhs). Tuition €1,700–€10,800/year; living €350–€700/month. Debrecen cheaper than Budapest. 1 EUR ≈ 143 NPR (Feb 2026).
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
                <tr className="border-b"><td className="p-3">Tuition (Undergraduate)</td><td className="p-3">€1,700–€10,800</td><td className="p-3">2.4–15.4L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (Master&apos;s)</td><td className="p-3">€2,500–€10,800</td><td className="p-3">3.6–15.4L</td></tr>
                <tr className="border-b"><td className="p-3">Cost of studying mechanical engineering</td><td className="p-3">€6,500–€7,800</td><td className="p-3">9.3–11.2L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">€4,200–€8,400</td><td className="p-3">6–12L</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€700</td><td className="p-3">1.0L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€8,000–€18,000</td><td className="p-3 font-medium">11–26L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Hungary for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Hungary for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Official studyinhungary.hu cost calculator: Budapest dormitory ~€90, shared flat ~€350; Debrecen dormitory ~€45, shared ~€200. Debrecen is significantly cheaper for students from Nepal.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City</th><th className="p-3 text-left">Monthly range</th><th className="p-3 text-left">Notes</th></tr></thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-medium">Budapest</td><td className="p-3">€500–€700</td><td className="p-3">Capital; dorm ~€90, shared ~€350</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Debrecen</td><td className="p-3">€350–€500</td><td className="p-3">Cheapest; dorm ~€45, shared ~€200</td></tr>
                <tr className="border-b"><td className="p-3 font-medium">Szeged</td><td className="p-3">€400–€550</td><td className="p-3">University city</td></tr>
                <tr><td className="p-3 font-medium">Győr</td><td className="p-3">€380–€520</td><td className="p-3">Széchenyi University</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600">Source: studyinhungary.hu cost calculator.</p>
        </div>
      </section>

      {/* 3. Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Work While Studying in Hungary?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Students can work 30 hours per week during term; full-time during holidays. No separate work permit required. (Source: Hungarian immigration, studyinhungary.hu)
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 30 hrs/week during term time</li>
            <li>• Full-time during holidays</li>
            <li>• No separate work permit for students</li>
            <li>• Post-study: 9-month job-search residence</li>
          </ul>
        </div>
      </section>

      {/* 4. Post-Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post-Study Residence Pathway in Hungary</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Non-EU graduates can apply for a 9-month residence permit for job search or to start a business. Apply before student permit expires. No job offer required initially. Bridge to employment or entrepreneurship.
        </p>
        <p className="text-gray-700 mb-4">
          The study-to-work residence permit allows you to remain in Hungary after graduation. Apply via the Hungarian immigration authority. Proof of degree and accommodation may be required. Source: Hungarian immigration portal.
        </p>
      </section>

      {/* 5. Stipendium Hungaricum */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Stipendium Hungaricum Scholarship for Nepali Students
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Stipendium Hungaricum covers tuition, accommodation, and monthly stipend. Over 800 programmes at 30 Hungarian institutions. Nepal is not currently listed as a sending partner at stipendiumhungaricum.hu/partners—check the official Call for Applications annually. If eligible, apply via apply.stipendiumhungaricum.hu; deadline typically January 15 for 2026/27.
          </p>
          <p className="text-gray-700 mb-4">
            Study in Hungary scholarship via Stipendium Hungaricum is the most comprehensive option. Over 100 sending partners globally. Contact Nepal&apos;s Ministry of Education or Tempus Public Foundation (studyinhungary@tpf.hu) to verify Nepal eligibility. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
        </div>
      </section>

      {/* 6. Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Autumn intake: September. Spring intake: February (varies). Stipendium Hungaricum: typically January 15 for 2026/27. Direct university: March–June for autumn. Apply for visa minimum 3 weeks before travel.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Stipendium Hungaricum:</strong> January 15 (approx) for 2026/27</li>
            <li>• <strong>Direct university applications:</strong> March–June for September intake</li>
            <li>• <strong>Spring intake:</strong> February (varies by programme)</li>
            <li>• <strong>Visa:</strong> Apply minimum 3 weeks before course start</li>
          </ul>
        </div>
      </section>

      {/* 7. Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Hungary Without IELTS from Nepal?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Many universities accept proof of prior English-medium education (12+ years), TOEFL, Cambridge, Duolingo. Stipendium Hungaricum accepts alternatives per programme. Study in Hungary without IELTS from Nepal is possible—check individual university requirements.
        </p>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Hungary for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Engineering (especially mechanical at BME), Medicine, Nursing, Business, Computer Science. 550+ English programmes. BME produces 70% of Hungarian engineering degrees. Semmelweis, Szeged for medicine and nursing.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Engineering:</strong> BME (Budapest), Debrecen, Szeged, Miskolc—mechanical, civil, electrical</li>
          <li>• <strong>Medicine & Nursing:</strong> Semmelweis, Szeged, Széchenyi (nursing €1,700/sem)</li>
          <li>• <strong>Business:</strong> Corvinus University, Budapest</li>
          <li>• <strong>Computer Science:</strong> BME, ELTE, Debrecen</li>
        </ul>
      </section>

      {/* 8. Engineering & Nursing */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Engineering Studies & Nursing in Hungary</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Mechanical engineering in Hungary for Nepali students: BME (Budapest) €6,500–€7,800/year. Nursing study in Hungary for international students: Semmelweis €3,700/semester; Széchenyi €1,700/semester; Szeged, Miskolc. All in English.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Budapest University of Technology (BME)', city: 'Budapest', programs: 'Mechanical Engineering, all engineering' },
            { name: 'Semmelweis University', city: 'Budapest', programs: 'Medicine, Nursing' },
            { name: 'University of Szeged', city: 'Szeged', programs: 'Medicine, Nursing, Sciences' },
            { name: 'University of Debrecen', city: 'Debrecen', programs: 'Medicine, Engineering' },
            { name: 'Széchenyi István University', city: 'Győr', programs: 'Nursing, Engineering' },
            { name: 'Corvinus University', city: 'Budapest', programs: 'Business, Economics' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. MID-PAGE CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 mb-6">
            Get expert guidance on study in Hungary from Nepal. Our team helps with university selection, visa support, and Stipendium Hungaricum applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Hungary from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Requirements + Visa */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Hungary Student Visa Process for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Apply at Honorary Consulate in Kathmandu (Chaudhary Towers, Jhamsikhel, Lalitpur) or Embassy in New Delhi. Required: admission letter, passport, proof of funds €6,000+, health insurance, accommodation. Processing minimum 3 weeks. Email-based appointments.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Hungary visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>Honorary Consulate of Hungary in Kathmandu</strong> (Chaudhary Towers, Jhamsikhel, Lalitpur). Email-based appointments. Alternatively, Embassy of Hungary in New Delhi processes applications. Verify current procedures before applying for 2026 intake.
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
          <h4 className="font-bold text-[#001F3F] mb-2">Common Hungary Student Visa Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Insufficient proof of funds (need €6,000+ living or scholarship confirmation)</li>
            <li>Applying too late (processing min 3 weeks; apply early for autumn)</li>
            <li>Missing health insurance or accommodation proof</li>
            <li>Course not recognized by Hungarian higher education</li>
            <li>Inconsistent documents between admission and visa application</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {hungaryData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Hungary?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, visa prep at Honorary Consulate Kathmandu (Jhamsikhel) or Embassy New Delhi, and Stipendium Hungaricum applications. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Hungary from Nepal requirements and plan the cost of studying in Hungary.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Lalitpur, Ghorahi, and Itahari rely on us for study in Hungary from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and Stipendium Hungaricum guidance</li>
          <li>• Visa and proof of funds support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* GAP & Dependents */}
      <section className="py-12 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#001F3F] mb-4">Does Hungary Accept Study Gap (GAP)? Can I Bring Dependents?</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP:</strong> Hungarian universities generally accept gaps when justified (work, internships, family). Provide clear explanation. Engineering and nursing programmes may view relevant work experience positively.
        </p>
        <p className="text-gray-700">
          <strong>Dependents:</strong> Family reunification possible in certain cases. Spouse and children can apply for join-family residence. Proof of additional funds and accommodation required. Verify at Hungarian immigration portal.
        </p>
      </section>

      {/* PR Pathway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR and Citizenship Options After Studying in Hungary</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> 9-month post-study residence for job search → employment permit → long-term residence. PR typically requires 3+ years of continuous legal stay. Citizenship: 8 years residence (or 5 if married to Hungarian) + language proficiency.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Verify at Hungarian Immigration and Citizenship Office. Rules may change; consult official sources.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Post-study (9 months)</td><td className="p-3">Job search or business; no job offer initially</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Employment permit</td><td className="p-3">Secure job → work residence</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">3+ years residence for PR; 8 years (or 5 if married) for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 11. Hungary vs Germany */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Hungary vs Germany – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both popular for Nepali students. Hungary offers lower living costs; Germany has tuition-free public universities but higher living (blocked account). Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link> for your profile.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Hungary</th>
                  <th className="p-4 text-left">Germany</th>
                </tr>
              </thead>
              <tbody>
                {hungaryVsGermany.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.hungary}</td>
                    <td className="p-4">{row.germany}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Hungary FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Hungary from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={hungaryData.faqs} />
          </div>
        </div>
      </section>

      {/* 13. Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Hungary Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on tuition fees in Hungary for Nepali students 2026, Hungary student visa process, and Stipendium Hungaricum. Free consultation in Kathmandu—no obligation.
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
              Apply to Study in Hungary from Nepal
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
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/czech-republic/" className="underline hover:text-white">Czech Republic</Link> · <Link href="/study-abroad/romania/" className="underline hover:text-white">Romania</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/poland/" className="text-blue-600 font-semibold hover:underline">Poland</Link>
            {' · '}
            <Link href="/study-abroad/czech-republic/" className="text-blue-600 font-semibold hover:underline">Czech Republic</Link>
            {' · '}
            <Link href="/study-abroad/romania/" className="text-blue-600 font-semibold hover:underline">Romania</Link>
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
