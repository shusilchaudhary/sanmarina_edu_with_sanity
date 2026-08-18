import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ChevronRight,
  Building2,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Award,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Cyprus from Nepal 2026 | Cost, Visa & PR Guide',
  description: 'Study in Cyprus from Nepal 2026: tuition €3k–15k/year, living €700–1,100/mo. Nicosia, Limassol. Work 20 hrs/week. 12-mo post-study. Realistic PR. Free consultation.',
  keywords: 'study in cyprus, study in cyprus from nepal, study in cyprus cost, how much does it cost to study in cyprus, study in cyprus for nepali students, study in cyprus for international students, study masters in cyprus, study in cyprus without ielts, pr in cyprus after study, cyprus student visa process for nepali students, total cost to study in cyprus from nepal 2026, living cost in cyprus for students from nepal, nursing study in cyprus for nepali students, cheapest universities in cyprus for international students, cyprus study visa success rate from nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/cyprus/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/cyprus/',
    title: 'Study in Cyprus from Nepal 2026 | Cost, Visa & PR Guide',
    description: 'Complete 2026 guide: study in Cyprus, tuition, living costs, residence permit, PR. Nicosia, Limassol. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Cyprus from Nepal 2026',
    description: 'Study in Cyprus: cost, visa, 12-month post-study, realistic PR. Free consultation in Kathmandu.',
  },
};

// Data from studyincyprus.org.cy, mip.gov.cy (Civil Registry and Migration), Cyprus Ministry of Education, studycyprus.eu, CUT, University of Nicosia, University of Cyprus. 1 EUR ≈ 143 NPR (Feb 2026)
const cyprusData = {
  country: 'Cyprus',
  slug: 'cyprus',
  heroImage: '/assets/cyprus.jpg',
  lastUpdated: 'February 2026',
  description: 'Cyprus hosts 28,000+ international students. 3 public and 9 private universities, 40+ institutions. Tuition €3,000–€15,000/year; living €700–€1,100/month. Work 20 hrs/week (after 6 months). 12-month post-study to seek employment (master\'s+). PR via employment or investment. Nicosia, Limassol.',
  stats: {
    universities: '40+',
    internationalStudents: '28,000+',
    englishPrograms: '350+',
    postStudy: '12 months',
    studentsPlaced: '600+',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    min: 3000,
    max: 15000,
    publicMin: 5125,
    publicMax: 6834,
    entryFee: 70,
    residenceFee: 55,
  },
  livingCost: {
    nicosia: { min: 700, max: 900 },
    limassol: { min: 900, max: 1100 },
    smaller: { min: 600, max: 800 },
  },
  workRules: 'Up to 20 hours per week during term; full-time during holidays. Must complete at least 6 months in Cyprus before starting work. Sector restrictions: retail, hospitality, care, agriculture, etc. Work permit from Ministry of Labor. Source: mip.gov.cy, gov.cy.',
  postStudy: { duration: 12, note: 'Non-EU master\'s+ graduates can remain up to 12 months to seek employment or start business in field of study. Then employment residence permit or PR via work. PR by investment: €300,000+ (separate route; not study-based). Be realistic: PR depends on employment or investment.' },
  visaLocation: 'Apply for entry permit before travel. Civil Registry and Migration Department (mip.gov.cy) processes. Nepali students apply via Cyprus embassy or visa application centers. Cyprus has diplomatic presence in region; check mfa.gov.cy for nearest mission. Register in Cyprus within 7 days of arrival.',
  visaProcessing: 'Entry permit €70; residence permit €55; Aliens Register €70 (first time). Processing 1–3 months if complete. Apply after admission.',
  intakeMonths: 'Autumn: September/October (main intake); Spring: February (fewer programmes)',
  deadlines: 'No central portal. Each university sets deadlines. Fall typically March–July; some rolling until August. Check studyincyprus.org.cy and university websites.',
  requirements: [
    'Admission letter from accredited Cypriot institution',
    'Proof of tuition payment',
    'Proof of financial means for living',
    'Valid passport (6+ months beyond stay)',
    'Health insurance valid in Cyprus',
    'Criminal record certificate',
    'Housing documentation',
  ],
  residenceSteps: [
    'Apply to Cypriot universities (each has own portal; check studyincyprus.org.cy)',
    'Receive admission offer and pay tuition',
    'Apply for entry permit (before travel)',
    'Submit documents: passport, admission, proof of funds, insurance, criminal record',
    'Pay fees: entry €70',
    'Await approval (1–3 months)',
    'Travel to Cyprus; register at Civil Registry within 7 days',
    'Obtain residence permit; renew annually',
  ],
  residenceStepsWithText: [
    { name: 'Apply to Cypriot universities (each has own portal; check studyincyprus.org.cy)', text: 'No central portal. Fall typically March–July; some rolling until August. University of Cyprus, CUT, University of Nicosia, EUC.' },
    { name: 'Receive admission offer and pay tuition', text: 'Tuition €3,000–€15,000/year. Proof of funds for living required. Pay before visa application.' },
    { name: 'Apply for entry permit (before travel)', text: 'Civil Registry and Migration (mip.gov.cy). Cyprus embassy or visa center. Entry fee €70; residence €55. Processing 1–3 months.' },
    { name: 'Submit documents: passport, admission, proof of funds, insurance, criminal record', text: 'Valid passport 6+ months. Health insurance valid in Cyprus. Housing documentation. Apply before travel.' },
    { name: 'Await approval (1–3 months); travel to Cyprus', text: 'Register at Civil Registry within 7 days of arrival. Obtain residence permit; renew annually.' },
    { name: 'Obtain residence permit; renew annually', text: 'Work 20 hrs/week after 6 months. 12-month post-study for master\'s+ to seek employment.' },
  ],
  faqs: [
    {
      question: 'What is study in Cyprus for international students?',
      answer: 'Study in Cyprus for international students: 40+ institutions, 350+ English programmes. Tuition €3,000–€15,000/year; living €700–€1,100/month. Nicosia, Limassol. Work 20 hrs/week after 6 months. 12-month post-study for master\'s+ to seek employment. EU member; EU-recognized degrees. Source: studyincyprus.org.cy, mip.gov.cy.',
    },
    {
      question: 'What is the Cyprus student visa process for Nepali students?',
      answer: 'Cyprus student visa process for Nepali students: Apply for entry permit before travel. Submit documents to Civil Registry and Migration Department (or via Cyprus embassy/visa center). Required: admission letter, tuition payment, proof of funds, passport, insurance, criminal record. Entry €70; residence €55. Processing 1–3 months. Register in Cyprus within 7 days of arrival. Source: mip.gov.cy, mfa.gov.cy.',
    },
    {
      question: 'What are tuition fees in Cyprus for Nepali students 2026?',
      answer: 'Tuition fees in Cyprus for Nepali students 2026: €3,000–€15,000/year. Public: University of Cyprus €5,125+ for masters; CUT €6,834 bachelor. Private: €3,000–€12,000+. Cheapest universities in Cyprus for international students: some private colleges, regional institutions. 1 EUR ≈ 143 NPR (Feb 2026). Source: studyincyprus.org.cy, cut.ac.cy, unic.ac.cy.',
    },
    {
      question: 'What is the living cost in Cyprus for students from Nepal?',
      answer: 'Living cost in Cyprus for students from Nepal: Nicosia €700–€900/month; Limassol €900–€1,100; smaller cities €600–€800. NPR: €800/mo ≈ 1.14 lakhs. Student halls from €180; shared rooms €400–€500. Food €200–€400/month. Limassol ~26% more expensive than Nicosia. Source: studycyprus.eu, cut.ac.cy.',
    },
    {
      question: 'What is the total cost to study in Cyprus from Nepal 2026?',
      answer: 'Total cost to study in Cyprus from Nepal 2026: First year €12,000–€28,000 (NPR 17–40 lakhs). Tuition €3,000–€15,000; living €8,400–€13,200/year; permits €195; airfare ~€800. How much does it cost to study in cyprus varies by city and programme. Source: studyincyprus.org.cy.',
    },
    {
      question: 'Can I study in Cyprus without IELTS?',
      answer: 'Study in Cyprus without IELTS: Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Check individual programme requirements. Many require B2 equivalent. Contact university admissions for alternatives.',
    },
    {
      question: 'What is PR in Cyprus after study?',
      answer: 'PR in Cyprus after study: Non-EU master\'s+ graduates get up to 12 months to seek employment. If employed, apply for employment residence permit. PR by investment: €300,000+ (separate route; not study-based). Be realistic: PR depends on employment offer or investment—study alone does not guarantee PR. Source: mip.gov.cy, neapolis.ac.cy.',
    },
    {
      question: 'Can I study and work in Cyprus?',
      answer: 'Yes. Study and work in Cyprus: Up to 20 hours per week during term; full-time during holidays. Must complete at least 6 months in Cyprus before starting. Sector restrictions. Work permit from Ministry of Labor. Source: mip.gov.cy, gov.cy.',
    },
    {
      question: 'Can I study masters in Cyprus for Nepali students?',
      answer: 'Study masters in Cyprus for Nepali students: University of Cyprus, CUT, University of Nicosia, European University Cyprus, others. Tuition €5,125–€15,000. 12-month post-study to seek employment. Apply per university; deadlines typically March–July for autumn. Nicosia, Limassol. Source: studyincyprus.org.cy.',
    },
    {
      question: 'Can I study nursing in Cyprus for Nepali students?',
      answer: 'Nursing study in Cyprus for Nepali students: 4-year BSc Nursing in English at University of Nicosia, CUT, European University Cyprus, others. Combines theory, clinical practice, and hospital placements. Tuition varies by institution. Check programme accreditation. EU-recognized degrees. Source: studyincyprus.org.cy, unic.ac.cy.',
    },
    {
      question: 'What is the Cyprus study visa success rate from Nepal?',
      answer: 'Cyprus study visa success rate from Nepal: No official published rate. Success depends on complete documentation, genuine admission, proof of funds, and clean record. Apply with certified consultancy; submit all required documents. Avoid incomplete applications. Source: mip.gov.cy.',
    },
    {
      question: 'What are the cheapest universities in Cyprus for international students?',
      answer: 'Cheapest universities in Cyprus for international students: Tuition €3,000–€15,000/year. Some private colleges and regional institutions at lower end. Public CUT €6,834 bachelor; University of Cyprus €5,125+ masters. Compare at studyincyprus.org.cy.',
    },
    {
      question: 'Where do Nepali students apply for Cyprus visa from Kathmandu?',
      answer: 'Nepali students apply for Cyprus entry permit via Civil Registry and Migration Department. Cyprus has diplomatic presence; check mfa.gov.cy for nearest mission (may include embassy in New Delhi for region). Visa application centers may handle applications. Apply before travel; register in Cyprus within 7 days of arrival. Source: mfa.gov.cy, mip.gov.cy.',
    },
    {
      question: 'How much study gap is acceptable in Cyprus for Nepali students?',
      answer: 'Study gap Cyprus: Many Cypriot universities accept applicants with study gaps when justified. Typically up to 3–5 years with valid reasons (work, further education, personal). Strong motivation letter and recent activity help. Check each programme at studyincyprus.org.cy. Source: studyincyprus.org.cy.',
    },
    {
      question: 'Can Nepali students bring dependents to Cyprus while studying?',
      answer: 'Cyprus dependents: Family reunification possible for students with valid residence. Spouse and children can apply; proof of additional funds and accommodation required. Verify current rules at mip.gov.cy. Processing times vary. Source: mip.gov.cy.',
    },
    {
      question: 'Are there scholarships for Nepali students to study in Cyprus?',
      answer: 'Scholarships Cyprus for Nepali students: University-specific merit and need-based grants; some excellence scholarships. Limited compared to other EU destinations. Apply with admission. Does not cover full cost for most. Check studyincyprus.org.cy and individual universities. Source: studyincyprus.org.cy.',
    },
  ],
};

const tuitionTable = [
  { level: 'Public universities', range: '€5,125–€6,834/year', notes: 'University of Cyprus, CUT; varies by programme' },
  { level: 'Private universities', range: '€3,000–€12,000/year', notes: 'University of Nicosia, EUC, others' },
  { level: 'MBA / Self-funded masters', range: '€7,500–€15,000/year', notes: 'Higher range' },
  { level: 'Entry + residence permit', range: '€70 + €55', notes: 'Civil Registry and Migration' },
];

const cyprusVsRomania = [
  { aspect: 'Tuition', cyprus: '€3,000–€15,000/year', romania: '€400–€9,000/year' },
  { aspect: 'Living (min)', cyprus: '€700–€1,100/mo', romania: '€300–€600/mo' },
  { aspect: 'Work (term)', cyprus: '20 hrs/week (after 6 mo)', romania: '20 hrs/week' },
  { aspect: 'Post-study', cyprus: '12-month job search', romania: 'Employment residence' },
  { aspect: 'Application', cyprus: 'Per university', romania: 'studyinromania.gov.ro' },
  { aspect: 'Visa from Nepal', cyprus: 'Embassy/Civil Registry', romania: 'Honorary Consulate Kathmandu' },
];

export default function CyprusStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Cyprus from Nepal 2026 – Complete Guide',
        description: cyprusData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: cyprusData.author.name, url: 'https://www.sanmarina.edu.np', description: cyprusData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: cyprusData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Cyprus Student Visa from Nepal',
        description: 'Step-by-step: apply per university, pay tuition, entry permit mip.gov.cy, register within 7 days. Fee €70+€55. Processing 1–3 months. Per studyincyprus.org.cy, mip.gov.cy 2026.',
        step: cyprusData.residenceStepsWithText.map((s, i) => ({
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
        description: 'Best education consultancy in Nepal for Cyprus study abroad',
        knowsAbout: ['Study in Cyprus from Nepal', 'Cyprus residence permit', 'mip.gov.cy', 'University of Nicosia CUT EUC', 'studyincyprus.org.cy'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Cyprus', item: 'https://www.sanmarina.edu.np/study-abroad/eur/cyprus/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Cyprus from Nepal.',
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
          <Image src={cyprusData.heroImage} alt="Study in Cyprus from Nepal – Nicosia Limassol, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Cyprus</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {cyprusData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex items-center gap-3">
            Study in Cyprus <Image src='/assets/cyprusFlag.png' width={100} height={100} alt="cyprus flag" />
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Cyprus study experts. Study in Cyprus from Nepal consultancy—no obligation for 2026 intake.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.studyincyprus.org.cy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyincyprus.org.cy</a>, <a href="https://www.mip.gov.cy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mip.gov.cy</a> (Civil Registry and Migration), Cyprus Ministry of Education, studycyprus.eu.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {cyprusData.author.name} · {cyprusData.author.role} · {cyprusData.author.expertise}
          </p>
        </div>
      </section>

      {/* Key Facts 2026 */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Cyprus from Nepal – Key Facts 2026</h2>
          <p className="text-gray-700 mb-4 text-sm">
            <strong>Quick answer:</strong> Tuition €3,000–€15,000/year; living €700–€1,100/month. Work 20 hrs/week after 6 months. 12-month post-study for master\'s+ to seek employment. Entry permit €70; residence €55. Apply per university; Civil Registry (mip.gov.cy). Nicosia, Limassol. <a href="https://www.studyincyprus.org.cy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyincyprus.org.cy</a>, <a href="https://www.mip.gov.cy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mip.gov.cy</a>, <a href="https://www.mfa.gov.cy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mfa.gov.cy</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€3,000–€15,000/year; public €5,125+</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Entry + residence</td><td className="p-3">€70 + €55; Civil Registry and Migration</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">Nicosia €700–900; Limassol €900–1,100; smaller €600–800/mo</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week after 6 months in Cyprus</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">12 months to seek employment (master\'s+)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Processing</td><td className="p-3">1–3 months</td></tr>
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
              { value: cyprusData.stats.universities, label: 'Institutions' },
              { value: cyprusData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: cyprusData.stats.englishPrograms, label: 'English Programmes' },
              { value: cyprusData.stats.postStudy, label: 'Post-Study Permit' },
              { value: cyprusData.stats.studentsPlaced, label: 'Students Placed' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Requirements */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Cyprus from Nepal Requirements: GPA, IELTS & Documents</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Bachelor's: high school diploma (10+2) with relevant coursework; Master's: recognised bachelor's degree, transcripts, LORs; Doctorate: master's + research proposal. English: IELTS or TOEFL (B2 equivalent common). Some programmes accept SAT, GRE. Check each university at studyincyprus.org.cy.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Bachelor:</strong> High school diploma; English proficiency (IELTS/TOEFL)</li>
          <li>• <strong>Master's:</strong> Recognised bachelor's; transcripts; letters of recommendation</li>
          <li>• <strong>PhD:</strong> Master's in relevant field; research proposal; academic references</li>
          <li>• <strong>GAP years:</strong> Many universities accept study gaps (typically up to 3–5 years) when justified</li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">Source: studyincyprus.org.cy. Requirements vary by programme.</p>
      </section>

      {/* PR Section - Realistic */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-amber-50 border border-amber-100">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">PR in Cyprus After Study: Realistic Guide</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Non-EU master\'s+ graduates get up to 12 months to seek employment. If employed, apply for employment residence permit. PR by investment: €300,000+ (separate route). Study alone does not guarantee PR—employment or investment required.
        </p>
        <p className="text-gray-700 mb-4">
          PR in Cyprus after study: Be realistic. Many consultancies overpromise. The 12-month permit lets you look for work; success depends on job market and your qualifications. Investment-based PR (€300k+) is a separate path. Source: mip.gov.cy, neapolis.ac.cy.
        </p>
        <ul className="space-y-2 text-gray-700 mb-4">
          <li>• <strong>Post-study:</strong> 12 months to seek employment (master\'s+ only)</li>
          <li>• <strong>Employment route:</strong> Work contract → employment residence permit</li>
          <li>• <strong>Investment route:</strong> €300,000+ (separate; not study-based)</li>
          <li>• <strong>Citizenship:</strong> After 7 years residence (conditions apply)</li>
        </ul>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
            <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Milestone</th><th className="p-3 text-left">Typical requirement</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Post-study (12 months)</td><td className="p-3">Job search; master\'s+ only</td></tr>
              <tr className="border-b border-gray-100"><td className="p-3 font-semibold">Work residence</td><td className="p-3">Employment permit</td></tr>
              <tr><td className="p-3 font-semibold">PR / Citizenship</td><td className="p-3">Employment or €300k+ investment; 7 years for citizenship</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Study in Cyprus */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Cyprus for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Cyprus offers 350+ English programmes, EU-recognized degrees, affordable living vs Western Europe, work 20 hrs/week, and 12-month post-study. Nicosia, Limassol. Compare with <Link href="/study-abroad/romania/" className="text-blue-600 hover:underline">Romania</Link>, <Link href="/study-abroad/greece/" className="text-blue-600 hover:underline">Greece</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Cyprus for international students attracts those seeking EU degrees at lower cost. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Cyprus for business, nursing, engineering, and hospitality. Study in cyprus for nepali students—EU member, Schengen-adjacent, year-round sunshine.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much Does It Cost to Study in Cyprus?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study in cyprus cost: Total cost to study in cyprus from nepal 2026—first year €12,000–€28,000 (NPR 17–40 lakhs). Tuition €3,000–€15,000; living €700–€1,100/month. Cheapest universities in Cyprus for international students: some private colleges. 1 EUR ≈ 143 NPR (Feb 2026).
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
                <tr className="border-b"><td className="p-3">Tuition</td><td className="p-3">3,000–15,000</td><td className="p-3">4.3–21.5L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">8,400–13,200</td><td className="p-3">12–19L</td></tr>
                <tr className="border-b"><td className="p-3">Permits</td><td className="p-3">~195</td><td className="p-3">~28,000</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~800</td><td className="p-3">1.1L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">12,000–28,000</td><td className="p-3 font-medium">17–40L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees in Cyprus for Nepali Students 2026</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Cyprus for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Limassol ~26% more expensive than Nicosia. Student halls from €180; shared rooms €400–€500.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Nicosia</p>
              <p className="text-lg font-bold">€700–€900/mo</p>
              <p className="text-sm text-gray-600">NPR 1.0–1.3L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Limassol</p>
              <p className="text-lg font-bold">€900–€1,100/mo</p>
              <p className="text-sm text-gray-600">NPR 1.3–1.6L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Smaller cities</p>
              <p className="text-lg font-bold">€600–€800/mo</p>
              <p className="text-sm text-gray-600">NPR 86k–1.14L</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarships for Nepali Students to Study in Cyprus
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> University-specific merit and need-based grants; excellence scholarships for top achievers; some international student grants. Limited compared to other EU destinations. Apply with admission. Does not cover full cost for most students.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>University merit:</strong> Top achievers; apply with admission</li>
            <li>• <strong>Need-based:</strong> Based on financial need; limited availability</li>
            <li>• <strong>Research:</strong> Some postgraduate research fellowships</li>
            <li>• Does not cover full tuition + living for most; budget accordingly</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>. Source: studyincyprus.org.cy.</p>
        </div>
      </section>

      {/* Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Study and Work in Cyprus?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Study and work in Cyprus: Up to 20 hours per week during term; full-time during holidays. Must complete at least 6 months in Cyprus before starting. Sector restrictions (retail, hospitality, care, etc.). Work permit from Ministry of Labor.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 20 hrs/week during term</li>
            <li>• Full-time during holidays</li>
            <li>• 6 months in Cyprus before work</li>
            <li>• Sector restrictions apply</li>
          </ul>
        </div>
      </section>

      {/* Popular Fields of Study */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Popular Fields of Study in Cyprus for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Business & Management, Medicine, IT & Computer Science, Hospitality & Tourism, Nursing, Marine Sciences, Civil & Architectural Engineering. Cyprus is strong in medicine, hospitality, and EU-recognized nursing programmes.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Business & Management:</strong> University of Nicosia, EUC, CUT—MBA, finance, innovation</li>
          <li>• <strong>Medicine:</strong> University of Nicosia—hands-on training, clinical research</li>
          <li>• <strong>IT & Computer Science:</strong> CUT, University of Nicosia—software, data analysis</li>
          <li>• <strong>Hospitality & Tourism:</strong> American College Nicosia, others—tourism management</li>
          <li>• <strong>Nursing:</strong> University of Nicosia, CUT, EUC—4-year BSc, EU-recognized</li>
          <li>• <strong>Marine Sciences:</strong> Coastal programmes; aquatic ecosystems</li>
        </ul>
      </section>

      {/* Masters & Nursing */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study Masters & Nursing in Cyprus</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study masters in Cyprus: University of Cyprus, CUT, University of Nicosia, European University Cyprus. Tuition €5,125–€15,000. 12-month post-study to seek employment. Nursing study in Cyprus for Nepali students: 4-year BSc Nursing in English at University of Nicosia, CUT, EUC. Theory, clinical practice, hospital placements.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <GraduationCap className="text-[#0056b3] mb-2" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Study Masters in Cyprus</h3>
            <p className="text-gray-700 text-sm">University of Cyprus €5,125+; CUT €5,125–€15,000; University of Nicosia, EUC vary. MBA €7,500–€15,000. 12-month post-study permit for graduates.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <Stethoscope className="text-[#0056b3] mb-2" size={24} />
            <h3 className="font-bold text-[#001F3F] mb-2">Nursing Study in Cyprus for Nepali Students</h3>
            <p className="text-gray-700 text-sm">4-year BSc Nursing in English. University of Nicosia, CUT, European University Cyprus. Clinical placements, EU-recognized. Check programme accreditation.</p>
          </div>
        </div>
      </section>

      {/* Intake & Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Autumn: September/October (main intake). Spring: February (fewer programmes). No central portal—each university sets deadlines. Fall typically March–July; some rolling until August.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Autumn 2026:</strong> Apply March–July (check each university)</li>
            <li>• <strong>Spring 2027:</strong> Fewer programmes; deadlines vary</li>
            <li>• <strong>Residence permit:</strong> Apply after admission; allow 1–3 months</li>
            <li>• <strong>Register:</strong> Within 7 days of arrival in Cyprus</li>
          </ul>
        </div>
      </section>

      {/* Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Cyprus Without IELTS?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in cyprus without ielts: Some universities accept TOEFL, Cambridge, or proof of prior English-medium education. Check individual programme requirements. Many require B2 equivalent.
        </p>
      </section>

      {/* GAP & Dependents */}
      <section className="py-16 max-w-4xl mx-auto px-4 bg-slate-50">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">GAP Years & Dependents for Nepal Students in Cyprus</h2>
        <p className="text-gray-700 mb-4">
          <strong>GAP acceptance:</strong> Many Cypriot universities consider applicants with study gaps. Typically up to 3–5 years with valid reasons (work experience, further education, personal). Strong motivation letter and evidence of recent activity help. Check each programme at <a href="https://www.studyincyprus.org.cy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyincyprus.org.cy</a>.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Dependents:</strong> Family reunification possible for students with valid residence. Spouse and children can apply; proof of additional funds and accommodation required. Verify current rules at mip.gov.cy. Processing times vary. Source: mip.gov.cy.
        </p>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Cyprus</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Cyprus, Cyprus University of Technology (CUT), University of Nicosia, European University Cyprus, Neapolis University. Cheapest universities in Cyprus for international students: some private colleges. Check studyincyprus.org.cy.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Cyprus', city: 'Nicosia', programs: 'Public; all disciplines' },
            { name: 'Cyprus University of Technology', city: 'Limassol', programs: 'Tech, health' },
            { name: 'University of Nicosia', city: 'Nicosia', programs: 'Business, nursing' },
            { name: 'European University Cyprus', city: 'Nicosia', programs: 'Multidisciplinary' },
            { name: 'Neapolis University', city: 'Paphos', programs: 'Business, law' },
            { name: 'Frederick University', city: 'Nicosia, Limassol', programs: 'Engineering, arts' },
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
            Get expert guidance on study in Cyprus from Nepal. Our consultancy helps with university selection, Cyprus student visa process for Nepali students, and residence permit via Civil Registry. 600+ Nepali students placed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Apply to Study in Cyprus from Nepal
            </Link>
          </div>
        </div>
      </section>

      {/* Residence Permit Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cyprus Student Visa Process for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Cyprus student visa process for nepali students: Apply for entry permit before travel. Submit to Civil Registry and Migration Department (or via Cyprus embassy/visa center). Required: admission letter, tuition payment, proof of funds, passport, insurance, criminal record. Entry €70; residence €55. Processing 1–3 months. Register in Cyprus within 7 days of arrival.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Cyprus visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>Cyprus has diplomatic presence</strong>; check mfa.gov.cy for nearest mission. May include embassy in New Delhi for region. Visa application centers may handle. Apply before travel; register at Civil Registry within 7 days of arrival in Cyprus. Source: mfa.gov.cy, mip.gov.cy.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Residence Permit Process (Step-by-Step)</h3>
        <ol className="space-y-3 max-w-2xl mb-8">
          {cyprusData.residenceStepsWithText.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <div><span className="font-medium text-gray-800">{step.name}</span><span className="text-gray-600 text-sm block mt-0.5">{step.text}</span></div>
            </li>
          ))}
        </ol>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 mb-8">
          <h4 className="font-bold text-[#001F3F] mb-2">Common Residence Permit Mistakes to Avoid</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Applying before receiving admission letter and paying tuition</li>
            <li>Insufficient proof of funds for living expenses</li>
            <li>Missing health insurance valid in Cyprus</li>
            <li>Not registering at Civil Registry within 7 days of arrival</li>
            <li>Passport validity less than 6 months beyond intended stay</li>
            <li>Missing criminal record certificate</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {cyprusData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Consultancy CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Cyprus?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection via studyincyprus.org.cy, residence permit support via Civil Registry and Migration (mip.gov.cy), and post-study work planning. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help you meet study in Cyprus from Nepal requirements—including proof of funds and tuition payment.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Lalitpur, Pokhara, and across Nepal rely on us for study in Cyprus from Nepal guidance. Free first consultation—no obligation.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and scholarship guidance</li>
          <li>• Residence permit and Civil Registry support</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* Cyprus vs Romania */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Cyprus vs Romania – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both EU destinations for Nepali students. Cyprus: higher living, 12-month post-study. Romania: lower cost, MBBS, pilot. Compare with <Link href="/study-abroad/romania/" className="text-blue-600 hover:underline">Romania</Link>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Cyprus</th>
                  <th className="p-4 text-left">Romania</th>
                </tr>
              </thead>
              <tbody>
                {cyprusVsRomania.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.cyprus}</td>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Cyprus FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Cyprus from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={cyprusData.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Cyprus Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on total cost to study in cyprus from nepal 2026, Cyprus student visa process, and PR. Free consultation in Kathmandu—no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all cta-button">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button">
              Apply to Study in Cyprus from Nepal
            </Link>
            <Link href="/study-abroad/eur/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button-secondary">
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">
            Compare: <Link href="/study-abroad/romania/" className="underline hover:text-white">Romania</Link> · <Link href="/study-abroad/greece/" className="underline hover:text-white">Greece</Link> · <Link href="/study-abroad/eur/denmark/" className="underline hover:text-white">Denmark</Link> · <Link href="/study-abroad/eur/finland/" className="underline hover:text-white">Finland</Link> · <Link href="/study-abroad/hungary/" className="underline hover:text-white">Hungary</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/belgium/" className="underline hover:text-white">Belgium</Link> · <Link href="/study-abroad/ireland/" className="underline hover:text-white">Ireland</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link>
          </p>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/finland/" className="text-blue-600 font-semibold hover:underline">Finland</Link>
            {' · '}
            <Link href="/study-abroad/eur/sweden/" className="text-blue-600 font-semibold hover:underline">Sweden</Link>
            {' · '}
            <Link href="/study-abroad/eur/denmark/" className="text-blue-600 font-semibold hover:underline">Denmark</Link>
            {' · '}
            <Link href="/study-abroad/eur/norway/" className="text-blue-600 font-semibold hover:underline">Norway</Link>
            {' · '}
            <Link href="/study-abroad/eur/cyprus/" className="text-blue-600 font-semibold hover:underline">Cyprus</Link>
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
