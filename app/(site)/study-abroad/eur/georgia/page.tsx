import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ChevronRight,
  Building2,
  Briefcase,
  MapPin,
  Award,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Georgia from Nepal | Cost & Visa',
  description: 'Study in Georgia from Nepal 2026: tuition $2,500–7,000/yr, living $300–500/mo. D3 visa via India. No IELTS. 1-year post-study. Free consultation Kathmandu.',
  keywords: 'study in georgia, study in georgia from nepal, study in georgia for nepali students, georgia student visa process for nepali students, total cost to study in georgia from nepal, living cost in georgia for international students, study in georgia without ielts from nepal, scholarships in georgia for nepali students, cheapest universities in georgia for international students, study medicine in georgia for nepali students, tbilisi state university nepal, georgia study visa 2026, georgia intake deadline 2026',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/georgia/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/georgia/',
    title: 'Study in Georgia from Nepal | Cost & Visa',
    description: 'Complete 2026 guide: study in Georgia from Nepal, tuition, living costs, D3 visa, post-study work. Tbilisi, Batumi, Kutaisi. Free consultation Kathmandu.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-03-04',
    modifiedTime: '2026-03-04',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Georgia from Nepal 2026',
    description: 'Study in Georgia: affordable tuition, low living, no IELTS. Free consultation in Kathmandu.',
  },
};

// Data from Ministry of Foreign Affairs Georgia (mfa.gov.ge), geoconsul.gov.ge, educationingeorgia.ge, Public Service Hall (psh.gov.ge), TSU (tsu.ge), admissionoffice.ge. 1 USD ≈ 133 NPR (Feb 2026)
const georgiaData = {
  country: 'Georgia',
  slug: 'georgia',
  heroImage: '/assets/europe.jpg',
  lastUpdated: 'March 2026',
  description: 'Georgia hosts 25,000+ international students. Tuition $2,500–$7,000/year (Medicine $5,000–$8,000); TSU from 2,250 GEL/year. Living $300–$500/month. D3 visa valid 90 days; MFA decides within 30 days. Register at Public Service Hall (psh.gov.ge) within first 45 days of visa validity. No IELTS at most universities. WHO/UNESCO-recognized. Source: educationingeorgia.ge, geoconsul.gov.ge, tsu.ge.',
  stats: {
    universities: '65+',
    internationalStudents: '25,000+',
    englishPrograms: '300+',
    postStudy: '12 months',
    studentsPlaced: '400+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    min: 2500,
    max: 7000,
    medicineMin: 5000,
    medicineMax: 8000,
    visaFee: 50,
    visaFeeMax: 100,
  },
  livingCost: {
    tbilisi: { min: 300, max: 500 },
    batumi: { min: 250, max: 450 },
    kutaisi: { min: 200, max: 400 },
  },
  workRules: 'Work rights for students: verify with Public Service Hall (psh.gov.ge) and university. Post-study: temporary residence to seek employment. Source: educationingeorgia.ge, psh.gov.ge.',
  postStudy: {
    duration: 12,
    note: 'Graduates may apply for temporary residence to seek employment (verify current rules at psh.gov.ge). Initial student residence: register at Public Service Hall (psh.gov.ge) within first 45 days of visa validity. PR after 5 years; citizenship after 10 years. Source: educationingeorgia.ge, admissionoffice.ge, psh.gov.ge.',
  },
  visaLocation: 'No Georgian embassy in Nepal. Nepali students apply via Georgian Embassy/Consulate in India (geoconsul.gov.ge for nearest office) or VFS Global in India. MFA decides within 30 calendar days. Source: mfa.gov.ge, geoconsul.gov.ge, educationingeorgia.ge.',
  visaProcessing: 'D3 immigration visa (study). Valid 90 days, multiple entries. MFA decides within 30 calendar days. Fee set by consulate (typically $50–$100). Apply at least 2 months before start. Register at Public Service Hall (psh.gov.ge) within first 45 days of visa validity for residence permit. Source: educationingeorgia.ge, geoconsul.gov.ge.',
  intakeMonths: 'September (main intake); February (some programmes)',
  deadlines: 'No central portal. Each university sets deadlines. Typically May–August for September intake. Apply 2+ months before start for visa. Check tsu.ge, iliauni.edu.ge, admissionoffice.ge.',
  requirements: [
    'Electronically filled and signed visa application form',
    'Valid passport (min 6 months beyond stay)',
    'Consular fee payment receipt',
    'Photo (ICAO standard)',
    'Acceptance letter or proof of enrolment from authorized Georgian HE institution',
    'Proof of sufficient funds for travel and stay',
    'Accommodation proof in Georgia',
    'Health/travel insurance',
  ],
  residenceSteps: [
    'Apply to Georgian university (TSU, Ilia State, GTU, University of Georgia, etc.)',
    'Receive admission/invitation letter',
    'Pay tuition; obtain proof of payment',
    'Prepare documents: passport, admission, proof of funds, insurance, accommodation',
    'Submit D3 visa application to Georgian Consulate in India or VFS Global',
    'Pay visa fee $50–$100',
    'Await processing (10–30 days)',
    'Travel to Georgia; register at Public Service Hall (psh.gov.ge) within first 45 days of visa validity',
    'Renew residence permit annually for duration of studies',
  ],
  residenceStepsWithText: [
    { name: 'Apply to Georgian university (TSU, Ilia State, GTU, etc.)', text: 'Tbilisi State University, Ilia State, Georgian Technical University, University of Georgia, Batumi Shota Rustaveli. No central portal; apply per university.' },
    { name: 'Receive admission/invitation letter and pay tuition', text: 'Tuition $2,500–$7,000/year; Medicine $5,000–$8,000. Obtain proof of payment. Prepare bank statements for living costs.' },
    { name: 'Submit D3 visa application to Georgian Consulate India or VFS', text: 'No embassy in Nepal. Apply at Georgian Embassy New Delhi or VFS Global India. Fee $50–$100. MFA decides within 30 days.' },
    { name: 'Prepare documents: passport, admission, funds, insurance, accommodation', text: 'Passport 6+ months validity. Health insurance. Accommodation reservation or university housing. Bank statements.' },
    { name: 'Await processing; travel to Georgia', text: 'Apply 2+ months before semester. Visa valid 90 days multiple entry.' },
    { name: 'Register at Public Service Hall within first 45 days of visa validity', text: 'Apply for residence permit at psh.gov.ge. Renew annually. Post-study: verify current rules at psh.gov.ge.' },
  ],
  faqs: [
    {
      question: 'What is study in Georgia for international students?',
      answer: 'Study in Georgia for international students: 65+ institutions, 300+ English programmes. Tuition $2,500–$7,000/year; living $300–$500/month in Tbilisi, Batumi. D3 visa; no IELTS at most universities. 1-year post-study permit. WHO/UNESCO-recognized degrees. Source: educationingeorgia.ge, mfa.gov.ge.',
    },
    {
      question: 'Why study in Georgia from Nepal?',
      answer: 'Study in Georgia from Nepal for affordable tuition ($2,500–$7,000/year), low living costs ($300–500/mo), no IELTS at most universities, fast D3 visa (MFA within 30 days), safe environment, Bologna-recognised degrees, and pathway to EU further study. Nepali students choose Tbilisi, Batumi for medicine, business, IT. Source: educationingeorgia.ge.',
    },
    {
      question: 'What is the Georgia student visa process for Nepali students?',
      answer: 'Georgia student visa process for Nepali students: Apply for D3 immigration visa at Georgian Embassy/Consulate in India (no embassy in Nepal) or VFS Global. Required: admission letter, proof of funds, insurance, accommodation, passport. MFA decides within 30 days. Register at Public Service Hall (psh.gov.ge) within first 45 days of visa validity. Source: educationingeorgia.ge, geoconsul.gov.ge.',
    },
    {
      question: 'What is the total cost to study in Georgia from Nepal?',
      answer: 'Total cost to study in Georgia from Nepal: First year $8,000–$15,000 (NPR 10.6–20 lakhs). Tuition $2,500–$7,000; living $3,600–$6,000/year; visa $50–$100; airfare ~$600. Medicine higher. 1 USD ≈ 133 NPR (Feb 2026). Source: educationingeorgia.ge, tsu.ge.',
    },
    {
      question: 'What is the living cost in Georgia for international students?',
      answer: 'Living cost in Georgia for international students: Tbilisi $300–$500/month; Batumi $250–$450; Kutaisi $200–$400. NPR: $400/mo ≈ 53k. Rent, food, transport, utilities. Lower than most European capitals. Source: educationingeorgia.ge, edunepal.com.',
    },
    {
      question: 'Can I study in Georgia without IELTS from Nepal?',
      answer: 'Study in Georgia without IELTS from Nepal: Most Georgian universities do not require IELTS or PTE. English-taught programmes available. Some may accept prior English-medium education or university entrance exam. Check each programme. Source: educationingeorgia.ge.',
    },
    {
      question: 'Can I study medicine in Georgia for Nepali students?',
      answer: 'Study medicine in Georgia for Nepali students: Tbilisi State Medical University, University of Georgia, Batumi Shota Rustaveli. MBBS/MD $5,000–$8,000/year. 6-year programme. WHO-listed. No IELTS at most. Check NMC recognition for Nepal. Source: educationingeorgia.ge, admissionoffice.ge.',
    },
    {
      question: 'What is the post study work visa in Georgia?',
      answer: 'Post study work visa in Georgia: Graduates may apply for temporary residence to seek employment. Verify current rules at psh.gov.ge. PR after 5 years residence; citizenship after 10 years. Source: educationingeorgia.ge, psh.gov.ge.',
    },
    {
      question: 'Are there scholarships in Georgia for Nepali students?',
      answer: 'Scholarships in Georgia for Nepali students: University-specific merit scholarships (up to $13,000/year at select institutions). Some government and Erasmus+ mobility. Apply with admission. Limited; budget for full cost. Source: educationingeorgia.ge.',
    },
    {
      question: 'What are the cheapest universities in Georgia for international students?',
      answer: 'Cheapest universities in Georgia for international students: TSU 1,125 GEL/semester (2,250 GEL/year) for many programmes; Medicine $8,000. General $2,500–$7,000/year. Compare at tsu.ge, admissionoffice.ge, educationingeorgia.ge.',
    },
    {
      question: 'Where do Nepali students submit Georgia visa from Kathmandu?',
      answer: 'Nepali students submit Georgia visa: No Georgian embassy in Nepal. Apply at Georgian Embassy/Consulate in India (New Delhi) or VFS Global Application Centers in India. Applications processed by Ministry of Foreign Affairs. Some consultancies assist with document submission. Source: mfa.gov.ge.',
    },
    {
      question: 'What is the Georgia intake deadline 2026?',
      answer: 'Georgia intake deadline 2026: September main intake—apply typically May–August. February smaller intake at some universities. Apply 2+ months before start for visa. Each university sets own deadlines. Check tsu.ge, iliauni.edu.ge. Source: educationingeorgia.ge.',
    },
    {
      question: 'Can Nepali students bring dependents to Georgia while studying?',
      answer: 'Georgia dependents: Spouse and children can apply for residence under separate category. Proof of additional funds and accommodation required. Verify at mfa.gov.ge. Source: edunepal.com, mfa.gov.ge.',
    },
    {
      question: 'How much study gap is acceptable in Georgia for Nepali students?',
      answer: 'Study gap Georgia: Universities generally accept gaps—bachelor up to 2 years, master up to 5 years with reasonable explanation and credentials. Check each institution. Source: edunepal.com, educationingeorgia.ge.',
    },
    {
      question: 'Is MBBS from Georgia valid in Nepal?',
      answer: 'WHO-listed Georgian medical degrees can be recognised by NMC Nepal. Graduates must pass NMC screening and register. Verify university on NMC list at nmc.org.np before applying. Source: NMC Nepal, educationingeorgia.ge.',
    },
  ],
};

const tuitionTable = [
  { level: 'General programmes', range: '$2,500–$7,000/year', notes: 'Business, IT, Humanities, Engineering' },
  { level: 'Medicine (MBBS/MD)', range: '$5,000–$8,000/year', notes: '6-year programme; WHO-listed' },
  { level: 'TSU (general)', range: '1,125 GEL/semester (2,250 GEL/year)', notes: 'Per tsu.ge; Medicine $8,000' },
  { level: 'D3 visa fee', range: '$50–$100', notes: 'Ministry of Foreign Affairs' },
];

const universityTuitionTable = [
  { university: 'Ivane Javakhishvili TSU', tuition: '2,250 GEL (~$833) general; $8,000 Medicine', source: 'tsu.ge' },
  { university: 'Tbilisi State Medical University', tuition: '$5,000–$8,000/year', source: 'MBBS' },
  { university: 'Ilia State University', tuition: '$6,000–$6,200/year', source: '—' },
  { university: 'Batumi Shota Rustaveli State University', tuition: '$5,000–$6,500/year', source: 'Tourism, economics' },
  { university: 'Georgian Technical University', tuition: '$2,500–$5,000/year', source: 'Engineering' },
  { university: 'University of Georgia', tuition: '$5,000–$7,000/year', source: 'Broad programmes' },
];

const georgiaVsRomania = [
  { aspect: 'Tuition', georgia: '$2,500–$7,000/year', romania: '€400–€9,000/year' },
  { aspect: 'Living (min)', georgia: '$300–$500/mo', romania: '€300–€600/mo' },
  { aspect: 'IELTS', georgia: 'Not required (most)', romania: 'Varies' },
  { aspect: 'Post-study', georgia: '1-year job search', romania: 'Employment residence' },
  { aspect: 'Visa from Nepal', georgia: 'Via India / VFS', romania: 'Honorary Consulate Kathmandu' },
  { aspect: 'Embassy in Nepal', georgia: 'No', romania: 'Yes' },
];

export default function GeorgiaStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.sanmarina.edu.np/study-abroad/eur/georgia/#article',
        headline: 'Study in Georgia from Nepal 2026 – Complete Guide',
        description: georgiaData.description,
        datePublished: '2026-03-04',
        dateModified: '2026-03-04',
        author: { '@type': 'Organization', name: georgiaData.author.name, url: 'https://www.sanmarina.edu.np', description: georgiaData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.sanmarina.edu.np/study-abroad/eur/georgia/' },
        keywords: 'Study in Georgia from Nepal, Georgia student visa, Tbilisi State University, D3 visa, Nepali students Georgia',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '#faqs', '#cost'],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: georgiaData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Georgia Student Visa from Nepal',
        description: 'Step-by-step: apply to Georgian university, D3 visa via India/VFS, residence permit within 45 days. Fee $50–$100. MFA decides within 30 days. Per mfa.gov.ge, educationingeorgia.ge 2026.',
        step: georgiaData.residenceStepsWithText.map((s, i) => ({
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
        description: 'Best education consultancy in Nepal for Georgia study abroad',
        knowsAbout: ['Study in Georgia from Nepal', 'Georgia D3 visa', 'Tbilisi State University', 'Tbilisi State Medical University', 'Ilia State University', 'mfa.gov.ge', 'educationingeorgia.ge', 'psh.gov.ge'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Georgia', item: 'https://www.sanmarina.edu.np/study-abroad/eur/georgia/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC & PIER certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Georgia from Nepal.',
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
          <Image src={georgiaData.heroImage} alt="Study in Georgia from Nepal – Tbilisi, Batumi universities, Georgian higher education for Nepali students 2026" fill className="object-cover" priority sizes="100vw" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-24 py-20">
          <nav className="text-sm text-blue-200 mb-6 mt-20" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/eur/" className="hover:text-white">Europe</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Georgia</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {georgiaData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex items-center">
            Study in Georgia <Image src='/assets/georgia.png' width={100} height={100} alt="georgia flag" />
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Georgia study experts. Study in Georgia from Nepal consultancy—no obligation for 2026 intake.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.geoconsul.gov.ge/en" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">geoconsul.gov.ge</a> (MFA), <a href="https://educationingeorgia.ge" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">educationingeorgia.ge</a>, <a href="https://www.psh.gov.ge" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">psh.gov.ge</a>, <a href="https://www.tsu.ge" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">tsu.ge</a>, <a href="https://admissionoffice.ge" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">admissionoffice.ge</a>.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {georgiaData.author.name} · {georgiaData.author.role} · {georgiaData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Georgia from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition $2,500–$7,000/year; Medicine $5,000–$8,000. Living $300–$500/month. D3 visa via Georgian Consulate India or VFS; fee $50–$100; MFA decides within 30 days. No IELTS at most universities. Register at Public Service Hall (psh.gov.ge) within first 45 days of visa validity. <a href="https://educationingeorgia.ge" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">educationingeorgia.ge</a>, <a href="https://www.geoconsul.gov.ge/en" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">geoconsul.gov.ge</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">$2,500–$7,000/year; Medicine $5,000–$8,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">D3; $50–$100; Georgian Consulate India / VFS</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">Tbilisi $300–500; Batumi $250–450; Kutaisi $200–400/mo</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">IELTS</td><td className="p-3">Not required at most universities</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">1-year permit to seek employment</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">MFA within 30 days; apply 2+ months before start</td></tr>
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
              { value: georgiaData.stats.universities, label: 'Universities' },
              { value: georgiaData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: georgiaData.stats.englishPrograms, label: 'English Programmes' },
              { value: georgiaData.stats.postStudy, label: 'Post-Study Permit' },
              { value: georgiaData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Georgia */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Georgia for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Georgia offers affordable tuition, low living costs, no IELTS at most universities, fast visa (10–30 days), and WHO/UNESCO-recognized degrees. Tbilisi, Batumi. Compare with <Link href="/study-abroad/eur/romania/" className="text-blue-600 hover:underline">Romania</Link>, <Link href="/study-abroad/eur/cyprus/" className="text-blue-600 hover:underline">Cyprus</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Georgia for international students attracts those seeking quality education at lower cost. Nepali students from Kathmandu, Lalitpur, Pokhara choose Georgia for medicine, business, IT, and tourism. Gateway between Europe and Asia; hospitable culture; safe environment. Part of <Link href="/study-abroad/eur/" className="text-blue-600 hover:underline">Study in Europe</Link>—compare with <Link href="/study-abroad/eur/romania/" className="text-blue-600 hover:underline">Romania</Link>, <Link href="/study-abroad/eur/hungary/" className="text-blue-600 hover:underline">Hungary</Link>, and <Link href="/study-abroad/eur/cyprus/" className="text-blue-600 hover:underline">Cyprus</Link> for similar affordability.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">What is the Total Cost to Study in Georgia from Nepal 2026?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Total cost to study in Georgia from Nepal 2026—first year $8,000–$15,000 (NPR 10.6–20 lakhs). Tuition $2,500–$7,000; living $300–$500/month. Cheapest universities: Kutaisi, Batumi; TSU some programmes from 2,250 GEL/year. 1 USD ≈ 133 NPR (Feb 2026).
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">First-Year Cost Breakdown (Nepali Students)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">USD</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tuition</td><td className="p-3">2,500–7,000</td><td className="p-3">3.3–9.3L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">3,600–6,000</td><td className="p-3">4.8–8L</td></tr>
                <tr className="border-b"><td className="p-3">Visa</td><td className="p-3">50–100</td><td className="p-3">7–13k</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~600</td><td className="p-3">80k</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">8,000–15,000</td><td className="p-3 font-medium">10.6–20L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Georgia for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Georgia for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Tbilisi capital; Batumi coastal; Kutaisi more affordable. Typical monthly split: accommodation $150–350, food $100–200, transport $30–60, utilities $20–50.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Monthly (USD)</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Accommodation</td><td className="p-3">$150–$350</td><td className="p-3">Shared flat or dorm; Tbilisi higher</td></tr>
                <tr className="border-b"><td className="p-3">Food</td><td className="p-3">$100–$200</td><td className="p-3">Groceries and occasional dining</td></tr>
                <tr className="border-b"><td className="p-3">Transport</td><td className="p-3">$30–$60</td><td className="p-3">Metro, bus; student discounts</td></tr>
                <tr><td className="p-3">Utilities & misc</td><td className="p-3">$20–$50</td><td className="p-3">Internet, phone, extras</td></tr>
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Tbilisi</p>
              <p className="text-lg font-bold">$300–$500/mo</p>
              <p className="text-sm text-gray-600">NPR 40k–66k</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Batumi</p>
              <p className="text-lg font-bold">$250–$450/mo</p>
              <p className="text-sm text-gray-600">NPR 33k–60k</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Kutaisi</p>
              <p className="text-lg font-bold">$200–$400/mo</p>
              <p className="text-sm text-gray-600">NPR 27k–53k</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees by University (2026)</h3>
          <p className="text-gray-600 text-sm mb-4">Per tsu.ge, admissionoffice.ge, educationingeorgia.ge. Verify with each university.</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-3 text-left">University</th>
                  <th className="p-3 text-left">Annual Tuition (USD)</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {universityTuitionTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-3 font-medium">{row.university}</td>
                    <td className="p-3">{row.tuition}</td>
                    <td className="p-3">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Popular Fields */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Georgia for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Medicine (MBBS), Business & Economics, IT & Computer Science, Engineering, Tourism & Hospitality, Humanities & Social Sciences. Tbilisi State University, Ilia State, Georgian Technical University, Tbilisi State Medical University.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Medicine (MBBS):</strong> Tbilisi State Medical, University of Georgia—6-year MBBS; WHO-listed; NEET UG required; NMC Nepal recognition—verify before applying</li>
          <li>• <strong>Business & Economics:</strong> TSU (ISET), Ilia State—economics, finance</li>
          <li>• <strong>IT & Computer Science:</strong> Georgian Technical University, TSU</li>
          <li>• <strong>Tourism & Hospitality:</strong> Batumi Shota Rustaveli—coastal programmes</li>
          <li>• <strong>Engineering:</strong> Georgian Technical University</li>
        </ul>
      </section>

      {/* Work & Scholarships */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Study and Work in Georgia?
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Quick answer:</strong> Part-time work up to 20 hours/week during studies (verify with Public Service Hall psh.gov.ge and university). Full-time during semester breaks. Post-study: 1-year temporary residence to seek employment. Source: educationingeorgia.ge, psh.gov.ge.
          </p>
          <h3 className="text-xl font-bold text-[#001F3F] mb-3">Part-Time Job Options for Nepali Students in Georgia</h3>
          <p className="text-gray-600 text-sm mb-2">Students with valid residence may work up to 20 hours/week during term. Demonstrate sufficient funds before arrival; part-time income supplements but does not replace visa requirements.</p>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Tourism and hospitality (reception, tour guide)</li>
            <li>Office or customer service</li>
            <li>Freelance IT or design (for tech students)</li>
            <li>Retail and store assistants</li>
            <li>Restaurant or café staff</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarships in Georgia for Nepali Students
          </h2>
          <p className="text-gray-700 mb-4">
            University merit scholarships (up to $13,000/year at select institutions). Some government and Erasmus+ mobility. Apply with admission. Limited; budget for full cost. Source: educationingeorgia.ge.
          </p>
          <p className="text-gray-600 text-sm">
            Explore <Link href="/scholarships/" className="text-blue-600 hover:underline font-medium">scholarships for Nepali students</Link> across Europe and other destinations.
          </p>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16 bg-white max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Student Life in Georgia for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Georgia ranks among the safest countries globally. Tbilisi and Batumi host thousands of international students. English-taught programmes, affordable transport, international food, student support centres. Bologna Process—degrees recognised across Europe.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Safety:</strong> High safety standards; welcoming for international students</li>
          <li>• <strong>Culture:</strong> Rich heritage, festivals, historic sites; mix of European and Asian influences</li>
          <li>• <strong>Infrastructure:</strong> Modern universities, student housing, international student support</li>
          <li>• <strong>Transport:</strong> Metro, bus; student discounts; Tbilisi well-connected</li>
        </ul>
      </section>

      {/* Post-Study & GAP & Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post Study Work, GAP & Dependents</h2>
        <p className="text-gray-700 mb-4">
          <strong>Post-study:</strong> 1-year permit to seek employment. PR after 5 years residence; citizenship after 10 years. <strong>Post-graduation pathways:</strong> Further study in Canada, Australia, UK; remote work/freelancing (IT, design); EU/UK Master's (Bologna-recognised degrees); employment in Georgia (IT, tourism, business). <strong>GAP:</strong> Bachelor gap up to 2 years, Master up to 5 years typically accepted. <strong>Dependents:</strong> Spouse and children can apply; proof of funds required. Source: mfa.gov.ge, edunepal.com, educationingeorgia.ge.
        </p>
      </section>

      {/* Application Timeline */}
      <section className="py-16 bg-white max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Application Timeline: Study in Georgia from Nepal</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Total timeline ~3 months from document submission to departure. Apply at least 2–3 months before semester start. MFA decides visa within 30 days. Register at Public Service Hall within first 45 days of visa validity.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm border border-gray-100">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-3 text-left">Step</th>
                <th className="p-3 text-left">Approx. Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-3">Document submission & application</td><td className="p-3">2–5 days</td></tr>
              <tr className="border-b"><td className="p-3">University evaluation & conditional offer</td><td className="p-3">10–15 days</td></tr>
              <tr className="border-b"><td className="p-3">NOC (Nepal MoE if required) & tuition payment</td><td className="p-3">5–10 days</td></tr>
              <tr className="border-b"><td className="p-3">Acceptance letter & visa documents</td><td className="p-3">10–15 days</td></tr>
              <tr className="border-b"><td className="p-3">D3 visa application (India/VFS)</td><td className="p-3">MFA within 30 days</td></tr>
              <tr><td className="p-3">Travel & residence registration at psh.gov.ge</td><td className="p-3">Within first 45 days of visa</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Admission Requirements for Study in Georgia from Nepal</h2>
          <p className="text-gray-700 mb-4">
            <strong>Quick answer:</strong> No IELTS at most universities. Required: passport, academic transcripts (10+2 for bachelor, degree for master), CV, digital photo, some programmes require recorded interview. MBBS: 50% PCB, NEET UG mandatory.
          </p>
          <h3 className="text-xl font-bold text-[#001F3F] mb-3">General Admission Documents</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Valid passport (front and back)</li>
            <li>Academic transcripts and certificates (10+2 for bachelor; degree for master)</li>
            <li>Updated CV or résumé</li>
            <li>Digital photo (MRP size, white background)</li>
            <li>Citizenship certificate (if required)</li>
            <li>Recorded interview video (required by many universities—assesses English and motivation)</li>
          </ul>
          <h4 className="font-bold text-[#001F3F] mb-2">MBBS / Medicine Requirements</h4>
          <p className="text-gray-700 text-sm mb-2">For study medicine in Georgia for Nepali students: 12th with PCB, minimum 50% aggregate; NEET UG mandatory; age 17+. WHO-listed universities; NMC Nepal recognition—verify with Nepal Medical Council before applying.</p>

          <h3 className="text-xl font-bold text-[#001F3F] mt-8 mb-3">NMC Nepal Recognition for MBBS Graduates from Georgia</h3>
          <p className="text-gray-700 text-sm mb-4">Nepali students who complete MBBS in Georgia must register with Nepal Medical Council (NMC Nepal) to practice in Nepal. Steps:</p>
          <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2 mb-2">
            <li>Ensure your Georgian medical university is WHO-listed and recognised by NMC Nepal before applying.</li>
            <li>Complete the full 6-year MBBS programme (5 years + 1 year internship) as per curriculum.</li>
            <li>After graduation, apply to NMC Nepal with degree certificate, transcript, internship proof.</li>
            <li>Pass the NMC screening/licensing exam (similar to FMGE for India).</li>
            <li>Upon passing, register as a licensed medical practitioner in Nepal.</li>
          </ol>
          <p className="text-xs text-gray-600">Verify current NMC Nepal recognition list at nmc.org.np before applying. Source: NMC Nepal, educationingeorgia.ge.</p>
        </div>
      </section>

      {/* Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Georgia Intake & Application Deadlines 2026</h2>
          <p className="text-gray-700 mb-4">
            <strong>Quick answer:</strong> September main intake—apply May–August. February at some universities. Apply 2+ months before start for visa. Each university sets own deadlines. Check tsu.ge, iliauni.edu.ge, admissionoffice.ge.
          </p>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Georgia</h2>
        <p className="text-gray-700 mb-6">
          <strong>Quick answer:</strong> Ivane Javakhishvili Tbilisi State University (TSU), Ilia State University, Georgian Technical University, Tbilisi State Medical University, University of Georgia, Batumi Shota Rustaveli State University. Cheapest: Kutaisi, Batumi. Source: educationingeorgia.ge.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Ivane Javakhishvili Tbilisi State University (TSU)', city: 'Tbilisi', programs: 'All disciplines; medicine, research' },
            { name: 'Ilia State University', city: 'Tbilisi', programs: 'Innovative programmes' },
            { name: 'Georgian Technical University', city: 'Tbilisi', programs: 'Engineering, technical' },
            { name: 'Tbilisi State Medical University', city: 'Tbilisi', programs: 'Medicine, MBBS' },
            { name: 'University of Georgia', city: 'Tbilisi', programs: 'Broad programmes' },
            { name: 'Batumi Shota Rustaveli State University', city: 'Batumi', programs: 'Tourism, economics' },
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
            Get expert guidance on study in Georgia from Nepal. Our consultancy helps with university selection, Georgia student visa process, and D3 visa via India. 400+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Georgia from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Georgia Student Visa Process for Nepali Students (D3 Visa)</h2>
        <p className="text-gray-700 mb-6">
          <strong>Quick answer:</strong> Apply for D3 immigration visa at Georgian Consulate in India or VFS Global (no embassy in Nepal). Required: admission letter, proof of funds, insurance, accommodation, passport. MFA decides within 30 days. Register at Public Service Hall (psh.gov.ge) within first 45 days of visa validity.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Georgia visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>No Georgian embassy in Nepal.</strong> Apply at Georgian Embassy/Consulate in India (New Delhi) or VFS Global Application Centers in India. Consultancies may assist with document preparation and submission. Source: mfa.gov.ge, geoconsul.gov.ge.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Step-by-Step Georgia Student Visa Process</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {georgiaData.residenceStepsWithText.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <div><span className="font-medium text-gray-800">{step.name}</span><span className="text-gray-600 text-sm block mt-0.5">{step.text}</span></div>
            </li>
          ))}
        </ol>
        <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-3">Tips for Applicants: Study in Georgia from Nepal</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside mb-4">
            <li>Start 3–4 months before intake; arrange funds and documents early</li>
            <li>Practice for admission interview—clearly state purpose of study and career goals</li>
            <li>Get notarised translations where required; check university checklist</li>
            <li>Use experienced consultancies for document preparation and visa submission (no embassy in Nepal)</li>
          </ul>
        </div>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-2">Common Georgia Student Visa Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Applying less than 2 months before semester start</li>
            <li>Insufficient proof of funds for travel and stay</li>
            <li>Missing health/travel insurance or accommodation proof</li>
            <li>Passport validity less than 6 months</li>
            <li>Not registering at Public Service Hall (psh.gov.ge) within first 45 days of visa validity</li>
          </ul>
          <p className="text-xs text-gray-600 mt-2">Per educationingeorgia.ge, geoconsul.gov.ge.</p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {georgiaData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Georgia vs Romania */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Georgia vs Romania – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both affordable for Nepali students. Georgia: no IELTS (most), visa via India. Romania: embassy/Kathmandu, MBBS, pilot. Compare with <Link href="/study-abroad/eur/romania/" className="text-blue-600 hover:underline">Romania</Link>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Georgia</th>
                  <th className="p-4 text-left">Romania</th>
                </tr>
              </thead>
              <tbody>
                {georgiaVsRomania.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.georgia}</td>
                    <td className="p-4">{row.romania}</td>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Georgia FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Georgia from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={georgiaData.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Georgia Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on total cost to study in Georgia from Nepal 2026, Georgia student visa process, and post-study work. Free consultation in Kathmandu—no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all cta-button">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button">
              Apply to Study in Georgia from Nepal
            </Link>
            <Link href="/study-abroad/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button-secondary">
              Explore Study Abroad
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">
            Compare: <Link href="/study-abroad/eur/romania/" className="underline hover:text-white">Romania</Link> · <Link href="/study-abroad/eur/cyprus/" className="underline hover:text-white">Cyprus</Link> · <Link href="/study-abroad/eur/malta/" className="underline hover:text-white">Malta</Link> · <Link href="/study-abroad/eur/hungary/" className="underline hover:text-white">Hungary</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

