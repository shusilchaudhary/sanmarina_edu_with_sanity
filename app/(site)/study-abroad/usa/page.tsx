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
  Home,
  Star,
  Quote,
  ChevronRight,
  Globe,
  Users,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in USA from Nepal | Complete Guide',
  description: 'Study in USA from Nepal 2026: F1 visa, GPA requirements, cost, STEM OPT. Requirements to study in USA, why study in USA. Expert guidance for Nepalese students. Free consultation in Kathmandu.',
  keywords: 'study in usa from nepal, study in usa from nepal requirements, how much gpa is required to study in usa, why do you want to study in usa, why should i study in usa, requirements to study in usa, study in usa for international students, study in usa for nepalese students, which subject is best to study in usa, f1 visa nepal 2026',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/usa/',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/usa/',
    title: 'Study in USA from Nepal – Complete 2026 Guide',
    description: 'Complete 2026 guide for Nepali students: study in USA from Nepal, F1 visa, GPA requirements, STEM OPT. Free consultation.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in USA from Nepal – Complete 2026 Guide',
    description: 'Complete 2026 guide: F1 visa, SEVIS $350, MRV $185, STEM OPT 36 months. Free consultation Kathmandu.',
  },
};

// 2026 data: MRV $185, SEVIS $350, 1 USD ≈ 135 NPR
const usaData = {
  country: 'United States',
  slug: 'usa',
  heroImage: '/assets/newyork.jpg',
  lastUpdated: 'February 2026',
  stats: {
    universities: '4,000+',
    nepaliStudents: '15,000+',
    visaSuccess: '88%+',
    stemOpt: '36 Months',
  },
  requirements: [
    'I-20 form from SEVP-certified university',
    'Valid passport (6+ months)',
    'SEVIS fee $350 + MRV visa fee $185 (2026)',
    'English: TOEFL 79+ or IELTS 6.5+ (varies by program)',
    'Academic transcripts: 10+2 for bachelor\'s; bachelor\'s for master\'s',
    'Standardized tests: SAT/ACT (bachelor\'s), GRE/GMAT (master\'s)',
    'Financial proof: bank statements covering tuition + living',
    'Visa interview at US Embassy Kathmandu',
  ],
  costBreakdown: {
    tuition: { min: 15000, max: 60000, period: 'per year', nprMin: 2025000, nprMax: 8100000 },
    living: { min: 10000, max: 18000, period: 'per year', nprMin: 1350000, nprMax: 2430000 },
    sevis: { amount: 350, npr: 47250 },
    visa: { amount: 185, npr: 24975 },
    airfare: { amount: 1200, npr: 162000 },
  },
  workRights: {
    termTime: '20 hours/week on-campus',
    cpt: 'CPT for off-campus internships (after 9 months)',
    opt: '12 months OPT; 36 months for STEM',
  },
  gpa: {
    bachelor: '2.5–3.0 GPA (60–70%) in 10+2; top universities 3.5+',
    master: '2.5–3.0 GPA in bachelor\'s; competitive programs 3.5+',
  },
  cities: [
    { name: 'New York', highlight: 'Business & Finance', students: '3,000+ Nepali students', livingCost: '$1,500–2,200/month' },
    { name: 'Boston', highlight: 'Harvard, MIT nearby', students: '2,000+ Nepali students', livingCost: '$1,400–2,000/month' },
    { name: 'California', highlight: 'Silicon Valley, Tech', students: '4,000+ Nepali students', livingCost: '$1,200–1,800/month' },
    { name: 'Texas', highlight: 'Affordable Living', students: '1,500+ Nepali students', livingCost: '$800–1,200/month' },
  ],
  faqs: [
    {
      question: 'What are the requirements to study in USA from Nepal in 2026?',
      answer: 'Requirements to study in USA: I-20 from SEVP university, TOEFL 79+ or IELTS 6.5+, 10+2 for bachelor\'s (bachelor\'s for master\'s), SAT/GRE as required, financial proof, SEVIS $350 + MRV $185. Interview at US Embassy Kathmandu.',
    },
    {
      question: 'How much GPA is required to study in USA from Nepal?',
      answer: 'How much GPA is required to study in USA: Bachelor\'s typically 2.5–3.0 (60–70%) in 10+2; top universities 3.5+. Master\'s: 2.5–3.0 in bachelor\'s; competitive programs 3.5+. Lower GPA can use pathway or community college routes.',
    },
    {
      question: 'Why do you want to study in USA? Why should I study in USA?',
      answer: 'Why study in USA: Top global universities, STEM OPT (3 years work), research excellence, flexible curriculum, diverse programs. Common reasons: career advancement, innovation ecosystem, networking. Nepali students gain US credentials valued worldwide.',
    },
    {
      question: 'What is study in USA for international students?',
      answer: 'Study in USA for international students means F1 visa, I-20, on-campus work 20 hrs/week, CPT for internships, OPT 12–36 months after graduation. Over 1 million international students in USA. Nepali students form strong communities in NYC, Boston, California.',
    },
    {
      question: 'Study in USA for Nepalese students – what support is available?',
      answer: 'Study in USA for Nepalese students: F1 visa prep, interview coaching, university selection. San Marina guides students from Kathmandu, Dang, Itahari. US Embassy Kathmandu handles visa interviews. Nepali student associations in major cities.',
    },
    {
      question: 'Which subject is best to study in USA?',
      answer: 'Which subject is best to study in USA: STEM (CS, Engineering, Data Science) for 36-month OPT. Business, Finance, Healthcare also popular. Choose based on career goals, GPA, and OPT eligibility. STEM offers longest post-study work.',
    },
    {
      question: 'How much does it cost to study in USA from Nepal in 2026?',
      answer: 'Cost to study in USA from Nepal: first year $26,000–$80,000 (NPR 35–108 lakhs). Tuition $15,000–60,000; living $10,000–18,000; SEVIS $350; visa $185; airfare ~$1,200. 1 USD ≈ 135 NPR (Feb 2026).',
    },
    {
      question: 'What is STEM OPT for Nepali students in USA?',
      answer: 'STEM OPT extends work authorization from 12 months to 36 months for Science, Technology, Engineering, Mathematics graduates. Must work for E-verified employer. Many Nepali graduates use this for H-1B pathway.',
    },
    {
      question: 'Can I apply for US F1 visa from Kathmandu?',
      answer: 'Yes. US Embassy Kathmandu handles F1 visa interviews for applicants from Nepal. Prepare I-20, SEVIS receipt, DS-160 confirmation, financial docs. Processing typically 1–3 weeks after interview.',
    },
    {
      question: 'When are the intakes to study in USA from Nepal?',
      answer: 'Fall (August/September) is the main intake; Spring (January) is secondary. Most programmes begin in Fall. Apply 6–12 months before your intended start. Deadlines vary by university.',
    },
    {
      question: 'What is CPT and can Nepali students use it?',
      answer: 'CPT (Curricular Practical Training) allows off-campus internships related to your course. Available after 9 months of study. Must be authorised by your DSO (Designated School Official). Many Nepali students use CPT for tech and business internships.',
    },
  ],
};

const comparisonData = [
  { country: 'USA', countrySlug: null, tuition: '$15,000-60,000', living: '$10,000-18,000', work: '20 hrs on-campus', psw: '12-36 mo (STEM)', visaTime: '1-3 weeks' },
  { country: 'UK', countrySlug: '/study-abroad/uk/', tuition: '£10,000-38,000', living: '£10,539-13,761', work: '20 hrs/week', psw: '2 Years (PhD 3)', visaTime: '3 weeks' },
  { country: 'Australia', countrySlug: '/study-abroad/aus/', tuition: 'AUD $20,000-45,000', living: 'AUD $29,710/year', work: '48 hrs/fortnight', psw: '2-4 Years', visaTime: '4-12 weeks' },
  { country: 'Canada', countrySlug: '/study-abroad/can/', tuition: 'CAD $15,000-35,000', living: 'CAD $22,895+/year', work: '20 hrs/week', psw: '1-3 Years', visaTime: '4-12 weeks' },
];

export default function USAStudyPage() {
  const f1Steps = [
    { name: 'Receive I-20 from SEVP-certified university', text: 'Obtain I-20 form from your SEVP-certified US university after acceptance.' },
    { name: 'Pay SEVIS I-901 fee ($350)', text: 'Pay SEVIS fee $350 online before DS-160.' },
    { name: 'Complete DS-160 form online', text: 'Complete DS-160 nonimmigrant visa application.' },
    { name: 'Pay MRV visa fee ($185)', text: 'Pay MRV fee $185 (2026) for F1 visa.' },
    { name: 'Schedule visa interview at US Embassy Kathmandu', text: 'Book appointment at US Embassy Kathmandu.' },
    { name: 'Attend interview with documents', text: 'Attend interview with I-20, SEVIS receipt, DS-160 confirmation, financial proof.' },
    { name: 'Receive passport with visa', text: 'Processing typically 1–3 weeks after interview.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in USA from Nepal 2026 – Complete Guide',
        description: 'Complete 2026 guide: F1 visa, I-20, SEVIS $350, MRV $185, STEM OPT 36 months. For Nepali students. San Marina Education Consultancy.',
        datePublished: '2024-01-15',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for USA study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in USA from Nepal', 'F1 visa', 'STEM OPT', 'SEVIS', 'I-20', 'CPT'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: usaData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 3, name: 'Study in USA', item: 'https://www.sanmarina.edu.np/study-abroad/usa/' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for F1 Student Visa from Nepal',
        description: 'Step-by-step: I-20, SEVIS $350, DS-160, MRV $185, interview at US Embassy Kathmandu. Based on DHS Study in the States and travel.state.gov.',
        step: f1Steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={usaData.heroImage} alt="Nepali students in New York, USA – study abroad destination 2026 – San Marina Education Consultancy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#16213e]/85 to-[#0f3460]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Study in USA</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: February 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in USA from Nepal<br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            From Kathmandu to California—access 4,000+ US universities, world-leading research, and up to 36 months of STEM OPT after graduation.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Whether you&apos;re in Tinkune, Baneshwor, Ghorahi, or Itahari—our F1 visa specialists will guide you through I-20 prep and US Embassy interview readiness. Free first consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg">
              Apply Now
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: DHS Study in the States, U.S. Department of State.</strong> SEVIS $350, MRV $185 (2026). Verify at <a href="https://studyinthestates.dhs.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinthestates.dhs.gov</a>, <a href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">travel.state.gov</a>, <a href="https://educationusa.state.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">educationusa.state.gov</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By San Marina Education Consultancy · QEAC Certified · PIER Qualified · Study abroad for Nepali students since 2014
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in USA from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">$15,000–60,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">$10,000–18,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">SEVIS</td><td className="p-3">$350</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">MRV visa</td><td className="p-3">$185 (2026)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">OPT</td><td className="p-3">12 months (36 for STEM)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Work during study</td><td className="p-3">20 hrs/week on-campus; CPT for internships</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: DHS Study in the States, U.S. Department of State. Verify at <a href="https://studyinthestates.dhs.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinthestates.dhs.gov</a>, <a href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">travel.state.gov</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: usaData.stats.universities, label: 'Universities' },
              { value: usaData.stats.nepaliStudents, label: 'Nepali Students' },
              { value: usaData.stats.visaSuccess, label: 'Visa Success' },
              { value: usaData.stats.stemOpt, label: 'STEM OPT' },
              { value: '1,500+', label: 'Students Placed' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in USA / Why Should I Study in USA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in USA? Why Should I Study in USA?</h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          <strong>In brief:</strong> The US hosts more international students than any other nation. For Nepali applicants, the draw is clear: top-ranked institutions, flexible curricula, and—for STEM graduates—36 months of post-study work. Over 15,000 Nepali students already call America home.
        </p>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            When families ask us—<em>why do you want to study in USA?</em>—we often point to three things: breadth of choice, depth of research, and career runway. With 4,000+ SEVP-certified institutions, you can find a fit for almost any ambition—whether that&apos;s Wall Street, Silicon Valley, or the lab. <Link href="/scholarships/usa-for-nepali-students/" className="text-blue-600 hover:underline">USA scholarships for Nepali students</Link> and <strong>STEM OPT</strong> help extend work authorization to 36 months for qualifying degrees, giving graduates time to secure roles and explore H-1B pathways.
          </p>
          <p className="mb-4">
            <strong>Why should I study in USA?</strong> US degrees carry weight globally. Employers recognise the rigour of American education—the emphasis on critical thinking, collaboration, and real-world application. For Nepali students from Kathmandu, Dang, and Itahari, the journey typically starts with <Link href="/services/student-visa-service-nepal/" className="text-blue-600 hover:underline">F1 visa interview prep</Link> for the US Embassy in Kathmandu. Once there, you&apos;ll find established Nepali student networks in New York, Boston, and California ready to welcome you.
          </p>
        </div>
      </section>

      {/* Requirements to Study in USA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Requirements to Study in USA from Nepal (2026)</h2>
          <p className="text-gray-700 mb-6">
            <strong>In brief:</strong> You&apos;ll need an I-20 from a SEVP-certified university, proof of English (TOEFL 79+ or IELTS 6.5+), and evidence of funds. Fees: SEVIS $350 and MRV visa fee $185. The final step is your visa interview at the US Embassy in Kathmandu.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
            {usaData.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* How Much GPA is Required to Study in USA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How Much GPA is Required to Study in USA?</h2>
        <p className="text-gray-700 mb-6">
          <strong>In brief:</strong> Most bachelor&apos;s programmes expect 2.5–3.0 (roughly 60–70%) in 10+2; competitive schools often ask for 3.5+. For master&apos;s, a 2.5–3.0 in your bachelor&apos;s usually suffices—though top programmes may demand higher. If your GPA is below that, community college and pathway programmes remain viable routes.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-[#001F3F] mb-3">Bachelor&apos;s</h3>
            <p className="text-gray-700">{usaData.gpa.bachelor}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-[#001F3F] mb-3">Master&apos;s</h3>
            <p className="text-gray-700">{usaData.gpa.master}</p>
          </div>
        </div>
      </section>

      {/* Which Subject is Best to Study in USA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Which Subject is Best to Study in USA?</h2>
          <p className="text-gray-700 mb-6">
            <strong>In brief:</strong> There&apos;s no single &quot;best&quot; subject—it depends on your goals. That said, STEM fields (Computer Science, Engineering, Data Science) offer a clear advantage: 36 months of OPT versus 12 for non-STEM. Business, Finance, and Healthcare also attract large numbers of Nepali students and lead to strong employment outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'STEM', desc: '36-month OPT. CS, Engineering, Data Science, Math. Highest post-study work duration.' },
              { title: 'Business', desc: '12-month OPT. MBA, Finance, Accounting. Strong for consulting and corporate roles.' },
              { title: 'Healthcare', desc: 'Nursing, Public Health. Demand in US job market. Check program accreditation.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-gray-100">
                <h4 className="font-bold text-[#001F3F] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study in USA for International Students / Nepalese Students */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study in USA for International Students & Nepalese Students</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Study in USA for international students follows the F1 path: I-20, SEVIS, visa interview, then on-campus work (20 hrs/week) and up to 12–36 months of OPT after graduation. For Nepalese students, the process starts in Nepal—your visa interview takes place at the US Embassy in Kathmandu.
        </p>
        <p className="text-gray-700">
          Over a million international students study in the US each year. Nepali communities are well established in New York, Boston, and California—offering everything from orientation support to job leads. San Marina serves applicants from Kathmandu, Dang, Itahari, and beyond, handling I-20 guidance, SEVIS registration, and targeted interview preparation so you enter the embassy confident and prepared.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Cost to Study in USA from Nepal (2026)</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            <strong>In brief:</strong> Budget $26,000–$80,000 for your first year (NPR 35–108 lakhs), depending on institution and location. Tuition spans $15,000–60,000; living costs run $10,000–18,000. Add SEVIS ($350) and visa fee ($185). Exchange rate: 1 USD ≈ 135 NPR (Feb 2026).
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <GraduationCap className="text-[#0056b3] mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Tuition</h3>
              <p className="text-2xl font-bold">${usaData.costBreakdown.tuition.min.toLocaleString()}-{usaData.costBreakdown.tuition.max.toLocaleString()}</p>
              <p className="text-green-600 text-sm">NPR {Math.round(usaData.costBreakdown.tuition.nprMin/100000)}-{Math.round(usaData.costBreakdown.tuition.nprMax/100000)}L</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Home className="text-green-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Living</h3>
              <p className="text-2xl font-bold">${usaData.costBreakdown.living.min.toLocaleString()}-{usaData.costBreakdown.living.max.toLocaleString()}</p>
              <p className="text-green-600 text-sm">NPR {Math.round(usaData.costBreakdown.living.nprMin/100000)}-{Math.round(usaData.costBreakdown.living.nprMax/100000)}L</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <FileText className="text-orange-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">SEVIS</h3>
              <p className="text-2xl font-bold">${usaData.costBreakdown.sevis.amount}</p>
              <p className="text-green-600 text-sm">NPR {usaData.costBreakdown.sevis.npr.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <FileText className="text-purple-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Visa (MRV)</h3>
              <p className="text-2xl font-bold">${usaData.costBreakdown.visa.amount}</p>
              <p className="text-green-600 text-sm">NPR {usaData.costBreakdown.visa.npr.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Plane className="text-cyan-600 mb-3" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-2">Airfare</h3>
              <p className="text-2xl font-bold">~${usaData.costBreakdown.airfare.amount}</p>
              <p className="text-green-600 text-sm">NPR {usaData.costBreakdown.airfare.npr.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h3 className="font-bold text-[#001F3F] mb-2">Total First Year</h3>
            <p className="text-2xl font-bold">$26,000–$80,000 (NPR 35–108 Lakhs)</p>
          </div>

          <h3 className="font-bold text-[#001F3F] mt-8 mb-4">Tuition by Level (USA 2026)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Level</th><th className="p-3 text-left">Typical range/year</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">Community College</td><td className="p-3">$6,000–15,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Bachelor&apos;s (public)</td><td className="p-3">$15,000–35,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Bachelor&apos;s (private)</td><td className="p-3">$35,000–55,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Master&apos;s</td><td className="p-3">$20,000–60,000</td></tr>
                <tr><td className="p-3">MBA / Professional</td><td className="p-3">$40,000–75,000</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-[#001F3F] mb-4">Accommodation for Nepali Students in USA</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">On-campus dorm</td><td className="p-3">$800–1,500</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Shared apartment</td><td className="p-3">$500–1,200</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Off-campus (NYC, Boston)</td><td className="p-3">$1,200–2,200</td></tr>
                <tr><td className="p-3">Homestay</td><td className="p-3">$600–1,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">Costs vary by city. Texas and Midwest are more affordable than NYC, Boston, or California.</p>
        </div>
      </section>

      {/* When Can I Apply? USA Intakes */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-4">When Can I Apply? USA Study Intakes 2026</h2>
        <p className="text-gray-700 mb-4">
          <strong>In brief:</strong> Fall (August/September) is the main intake; Spring (January) is secondary. Most programmes begin in Fall. Apply 6–12 months before your intended start. Deadlines vary by university—early action and regular decision have different cut-offs.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h4 className="font-bold text-[#001F3F] mb-2">Fall (Main)</h4>
            <p className="text-gray-700 text-sm">August/September start. Most courses; largest selection. Common application deadlines Oct–Jan for UG.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="font-bold text-[#001F3F] mb-2">Spring (Secondary)</h4>
            <p className="text-gray-700 text-sm">January start. Fewer programmes; common for graduate and transfer students.</p>
          </div>
        </div>
      </section>

      {/* F1 Visa Process */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">F1 Visa Process from Nepal – US Embassy Kathmandu</h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          <strong>In brief:</strong> Obtain your I-20, pay SEVIS ($350), complete the DS-160, pay the MRV fee ($185), then schedule and attend your interview at the US Embassy in Kathmandu. Most applicants receive a decision within 1–3 weeks.
        </p>
        <ol className="space-y-4 max-w-2xl mx-auto">
          {['Receive I-20 from SEVP-certified university', 'Pay SEVIS I-901 fee ($350)', 'Complete DS-160 form online', 'Pay MRV visa fee ($185)', 'Schedule visa interview at US Embassy Kathmandu', 'Attend interview with documents', 'Receive passport with visa'].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Work Rights / OPT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Work Rights: CPT & STEM OPT</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <Clock className="text-[#0056b3] mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">During Study</h3>
              <p className="text-gray-600 text-sm">20 hrs/week on-campus; CPT for internships</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <Briefcase className="text-green-600 mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">OPT (General)</h3>
              <p className="text-3xl font-bold text-green-600">12</p>
              <p className="text-gray-600 text-sm">months post-graduation</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <Award className="text-purple-600 mx-auto mb-4" size={28} />
              <h3 className="font-bold text-[#001F3F] mb-2">STEM OPT</h3>
              <p className="text-3xl font-bold text-purple-600">36</p>
              <p className="text-gray-600 text-sm">months for STEM graduates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Top US Cities for Nepali Students</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usaData.cities.map((city, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-4">
                <h3 className="text-xl font-bold text-white">{city.name}</h3>
                <p className="text-blue-200 text-sm">{city.highlight}</p>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Users size={14} /> {city.students}
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <DollarSign size={14} /> {city.livingCost}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">USA vs UK vs Australia vs Canada – 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm">
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
                      {row.countrySlug ? (
                        <Link href={row.countrySlug} className="text-blue-600 hover:underline">{row.country}</Link>
                      ) : (
                        row.country
                      )}
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in USA FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in USA from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={usaData.faqs} />
          </div>
        </div>
      </section>

      {/* Authority */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">Why Trust San Marina for USA Study?</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We guide you through I-20 selection, SEVIS registration, and US Embassy interview preparation. Our team has supported hundreds of Nepali applicants for Kathmandu-based visa interviews and holds <Link href="/about/" className="text-blue-600 hover:underline">QEAC and PIER certification</Link>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: usaData.stats.visaSuccess, label: 'Visa Success', icon: CheckCircle2 },
              { value: '2+', label: 'Years Experience', icon: Clock },
              { value: '1,500+', label: 'Students Placed', icon: Users },
              { value: '50+', label: 'US University Partners', icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <stat.icon className="w-8 h-8 text-[#0056b3] mx-auto mb-3" />
                <p className="text-3xl font-bold text-[#001F3F]">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Global Destinations */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-6">Explore Other Top Destinations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/study-abroad/aus/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Australia</Link>
            <Link href="/study-abroad/can/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Canada</Link>
            <Link href="/study-abroad/uk/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in UK</Link>
            <Link href="/study-abroad/eur/germany/" className="bg-white px-6 py-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all font-medium text-gray-700">Study in Germany</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0056b3] via-[#004494] to-[#003366] mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in USA from Nepal?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Our team has guided 1,500+ Nepali students through the F1 process—from I-20 selection to US Embassy interview success. Book a free consultation at Tinkune, Baneshwor, Ghorahi, or Itahari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center justify-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">Book Free Consultation</Link>
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">Apply Now</Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm">
            <Link href="/study-abroad/can/" className="underline font-medium">Canada</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="underline font-medium">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="underline font-medium">Australia</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="underline font-medium">Germany</Link>
            {' · '}
            <Link href="/scholarships/usa-for-nepali-students/" className="underline font-medium">USA Scholarships</Link>
          </p>
          <p className="mt-4 text-blue-400 text-xs">QEAC Certified • PIER Qualified • F1 Visa Specialists | Last Updated: February 2026</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/jp/" className="text-blue-600 font-semibold hover:underline">Japan</Link>
            {' · '}
            <Link href="/scholarships/usa-for-nepali-students/" className="text-blue-600 font-semibold hover:underline">USA Scholarships</Link>
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
