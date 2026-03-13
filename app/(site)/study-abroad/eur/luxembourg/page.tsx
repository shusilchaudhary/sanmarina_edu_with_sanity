import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  ChevronRight,
  Building2,
  Briefcase,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Luxembourg from Nepal 2026 | Cost, Visa & Work',
  description: 'Study in Luxembourg from Nepal 2026: tuition €400–800/year, living €1,000–1,800/mo. Luxembourg City, Esch. Work 15–40 hrs/week. 12-mo post-study. Free consultation.',
  keywords: 'study in luxembourg, study in luxembourg from nepal, study in luxembourg for nepali students, study in luxembourg for international students, cost of studying in luxembourg for international students, study and work in luxembourg, study in luxembourg scholarship, study in luxembourg without ielts, luxembourg student visa process for nepali students, total cost to study in luxembourg from nepal 2026, living cost in luxembourg for students from nepal, post study work visa in luxembourg for nepali students, cheapest universities in luxembourg for international students, study masters in luxembourg for nepali students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/luxembourg/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/luxembourg/',
    title: 'Study in Luxembourg from Nepal 2026 | Cost, Visa & Work',
    description: 'Complete 2026 guide: study in Luxembourg, tuition, living costs, visa, post-study work. Luxembourg City, Esch-sur-Alzette. Free consultation for Nepali students.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Luxembourg from Nepal 2026',
    description: 'Study in Luxembourg: low tuition, 15–40 hrs work, 12-month post-study. Free consultation in Kathmandu.',
  },
};

// Data from University of Luxembourg, Luxembourg Ministry of Higher Education, guichet.public.lu (Immigration), luxembourg.public.lu. 1 EUR ≈ 143 NPR (Feb 2026)
const luxembourgData = {
  country: 'Luxembourg',
  slug: 'luxembourg',
  heroImage: '/assets/luxembourg.webp',
  lastUpdated: 'February 2026',
  description: 'Luxembourg hosts 9,500+ international students. University of Luxembourg (Luxembourg City, Esch-sur-Alzette, Belval). Tuition €400–€800/year; living €1,000–€1,800/month. Work 15 hrs/week during term; 40 hrs/week during holidays. 12-month post-study job-search permit. EU member; multilingual; free public transport.',
  stats: {
    universities: '1 public',
    internationalStudents: '9,500+',
    englishPrograms: '50+',
    postStudy: '12 months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: {
    semester1_2: 400,
    semester3_6: 200,
    annualMin: 800,
    annualMax: 1200,
    applicationFee: 100,
  },
  livingCost: {
    luxembourgCity: { min: 1000, max: 1800 },
    esch: { min: 900, max: 1500 },
    belval: { min: 800, max: 1400 },
  },
  workRules: 'Up to 15 hours per week during the academic year; up to 40 hours per week during school holidays. Student residence permit = work permit for non-EU students. Source: University of Luxembourg, guichet.public.lu.',
  postStudy: {
    duration: 12,
    note: 'Non-EU graduates can stay up to 12 months to seek employment or start a business. Apply before student permit expires. Must show sufficient funds and health insurance. Then employment residence permit if hired. Source: guichet.public.lu.',
  },
  visaLocation: 'Nepali students apply for temporary authorisation to stay before travel. Submit to General Department of Immigration (Ministry of Home Affairs). Type D visa via Luxembourg Visa Application Centre in Kathmandu (VFS). Honorary Consulate of Luxembourg in Kathmandu (Gwarko, Lalitpur). Apply 25–30 working days before travel. Source: guichet.public.lu, newdelhi.mae.lu.',
  visaProcessing: 'Type D visa €50. Processing 25–30 working days. Proof of funds: €1,161.60/month minimum (80% of subsistence minimum) plus tuition. Apply before entering Luxembourg.',
  intakeMonths: 'September (main intake)',
  deadlines: 'University of Luxembourg: Non-EU applicants—1 February to 24 March 2026 for September 2026. Application fee €100. Allow 6+ weeks for diploma recognition. Check uni.lu.',
  requirements: [
    'Letter of enrolment from University of Luxembourg',
    'Valid passport (3+ months beyond stay)',
    'Proof of financial means: €1,161.60/month minimum plus tuition (bank statements, scholarship, or sponsorship)',
    'Health insurance valid in Luxembourg',
    'Certificate of no criminal record',
    'Birth certificate',
    'Proof of accommodation',
  ],
  residenceSteps: [
    'Apply to University of Luxembourg and receive admission (deadline 24 March 2026 for Non-EU)',
    'Apply for temporary authorisation to stay with Immigration Department (before travel)',
    'Obtain Type D visa via Luxembourg Visa Application Centre in Kathmandu (VFS)',
    'Travel to Luxembourg',
    'Declare arrival at commune of residence within 3 days',
    'Undergo medical check',
    'Apply for residence permit for third-country students',
    'Renew residence permit for duration of studies',
  ],
  faqs: [
    {
      question: 'What is study in Luxembourg for international students?',
      answer: 'Study in Luxembourg for international students: University of Luxembourg, one public university. Tuition €400–€800/year; living €1,000–€1,800/month in Luxembourg City and Esch-sur-Alzette. Work 15 hrs/week during term; 40 hrs during holidays. 12-month post-study job-search. Free public transport. EU member. Source: uni.lu, guichet.public.lu.',
    },
    {
      question: 'What is the Luxembourg student visa process for Nepali students?',
      answer: 'Luxembourg student visa process for Nepali students: Apply for temporary authorisation before travel. Submit to Immigration Department. Type D visa via Luxembourg Visa Application Centre in Kathmandu (VFS). Required: enrolment letter, proof of funds (€1,161.60/mo + tuition), passport, insurance, criminal record. Fee €50. Processing 25–30 working days. Source: guichet.public.lu, newdelhi.mae.lu.',
    },
    {
      question: 'What is the cost of studying in Luxembourg for international students?',
      answer: 'Cost of studying in Luxembourg for international students: Tuition €400/semester (first 2 semesters), €200/semester (semesters 3–6). Living €1,000–€1,800/month. Total first year €14,000–€25,000 (NPR 20–36 lakhs). Luxembourg is among world\'s most expensive cities; accommodation is largest cost. Source: uni.lu, luxembourg.public.lu.',
    },
    {
      question: 'What is the living cost in Luxembourg for students from Nepal?',
      answer: 'Living cost in Luxembourg for students from Nepal: Luxembourg City €1,000–€1,800/month; Esch-sur-Alzette €900–€1,500; Belval €800–€1,400. NPR: €1,200/mo ≈ 1.7 lakhs. Student housing from €450; shared apartment €800–€1,200. Groceries €150–€220. Public transport free. Source: uni.lu, luxembourg.public.lu.',
    },
    {
      question: 'What is the total cost to study in Luxembourg from Nepal 2026?',
      answer: 'Total cost to study in Luxembourg from Nepal 2026: First year €14,000–€25,000 (NPR 20–36 lakhs). Tuition €800–€1,200; living €12,000–€21,600/year; visa €50; airfare ~€900. Cheapest universities in Luxembourg for international students: University of Luxembourg is the main public option with low tuition. Source: uni.lu, guichet.public.lu.',
    },
    {
      question: 'Can I study and work in Luxembourg?',
      answer: 'Yes. Study and work in Luxembourg: Up to 15 hours per week during the academic year; up to 40 hours per week during school holidays. Student residence permit = work permit for non-EU students. No separate work permit needed. Source: University of Luxembourg, guichet.public.lu.',
    },
    {
      question: 'What is the post study work visa in Luxembourg for Nepali students?',
      answer: 'Post study work visa in Luxembourg for Nepali students: Non-EU graduates get up to 12 months to seek employment or start a business. Apply before student permit expires. Need sufficient funds and health insurance. If employed, apply for employment residence permit. Source: guichet.public.lu.',
    },
    {
      question: 'Are there study in Luxembourg scholarships?',
      answer: 'Study in Luxembourg scholarship: Guillaume Dupaix International Scholarship for Master\'s students with excellent academic performance. Funded by Luxembourg Ministry of Foreign Affairs and Ministry of Research. Deadline 24 March 2026. Erasmus+ for exchange. Student hardship fund available. Source: uni.lu, luxembourg.public.lu.',
    },
    {
      question: 'Can I study in Luxembourg without IELTS?',
      answer: 'Study in Luxembourg without IELTS: University of Luxembourg accepts alternatives. Proof via secondary school diploma from English-medium institution, high school transcript, or internationally recognised language test (CEFR B2–C1). Programme-specific. Check uni.lu for each programme. Source: uni.lu.',
    },
    {
      question: 'What are the cheapest universities in Luxembourg for international students?',
      answer: 'Cheapest universities in Luxembourg for international students: University of Luxembourg is the main public university. Tuition €400–€200/semester. No other public universities. Private options (LUNEX, etc.) may have higher fees. Source: uni.lu.',
    },
    {
      question: 'Can I study masters in Luxembourg for Nepali students?',
      answer: 'Study masters in Luxembourg for Nepali students: University of Luxembourg offers 50+ Master programmes in English. Tuition €400–€800/year. Guillaume Dupaix Scholarship for excellent candidates. Apply 1 Feb–24 March 2026 for September intake. Luxembourg City, Esch-sur-Alzette, Belval campuses. Source: uni.lu.',
    },
    {
      question: 'Where do Nepali students submit Luxembourg visa from Kathmandu?',
      answer: 'Nepali students submit Luxembourg visa from Kathmandu via Luxembourg Visa Application Centre (VFS). Honorary Consulate of Luxembourg at Anjushree Building, Gwarko, Lalitpur. Contact Newdelhi.Consulat@mae.etat.lu for VFS appointment. Apply 25–30 working days before travel. Source: guichet.public.lu, embassies.info.',
    },
    {
      question: 'Why study in Luxembourg?',
      answer: 'Why study in Luxembourg: Very low tuition (€400–800/year), EU member, multilingual (EN/FR/DE), free public transport, 15–40 hrs work/week, 12-month post-study. Luxembourg City, Esch-sur-Alzette. Finance, law, tech hubs. High living cost but low tuition offsets for budget-conscious students. Source: uni.lu, luxembourg.public.lu.',
    },
  ],
};

const tuitionTable = [
  { level: 'University of Luxembourg (semesters 1–2)', range: '€400/semester', notes: 'All students' },
  { level: 'University of Luxembourg (semesters 3–6)', range: '€200/semester', notes: 'All students' },
  { level: 'Annual tuition (approx)', range: '€800–€1,200/year', notes: 'State-funded' },
  { level: 'Application fee', range: '€100', notes: 'Per application' },
  { level: 'Type D visa', range: '€50', notes: 'Long-stay' },
];

const luxembourgVsGermany = [
  { aspect: 'Tuition', luxembourg: '€400–800/year', germany: '€0–€1,500/year (most free)' },
  { aspect: 'Living (min)', luxembourg: '€1,000–€1,800/mo', germany: '€850–€1,200/mo' },
  { aspect: 'Work (term)', luxembourg: '15 hrs/week', germany: '20 hrs/week' },
  { aspect: 'Work (holidays)', luxembourg: '40 hrs/week', germany: 'Full-time' },
  { aspect: 'Post-study', luxembourg: '12-month job search', germany: '18-month job search' },
  { aspect: 'Transport', luxembourg: 'Free', germany: 'Semester ticket' },
];

export default function LuxembourgStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Luxembourg from Nepal 2026 – Complete Guide',
        description: luxembourgData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: luxembourgData.author.name, url: 'https://www.sanmarina.edu.np', description: luxembourgData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: luxembourgData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Luxembourg Student Visa from Nepal',
        description: 'Step-by-step process for Nepali students to obtain Luxembourg student visa for higher education.',
        step: luxembourgData.residenceSteps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: `Step ${i + 1}`,
          text: s,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Luxembourg', item: 'https://www.sanmarina.edu.np/study-abroad/eur/luxembourg/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC certified study abroad consultancy for Nepali students since 2014. Expert guidance for study in Luxembourg from Nepal.',
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
          <Image src={luxembourgData.heroImage} alt="Study in Luxembourg from Nepal – Luxembourg City Esch-sur-Alzette, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Luxembourg</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {luxembourgData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Luxembourg from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Post-Study Work Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Luxembourg: tuition €400–800/year, living €1,000–1,800/mo. Luxembourg City, Esch-sur-Alzette. Work 15–40 hrs/week. 12-month post-study. Study in Luxembourg for Nepali students—complete guide.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /><span>WhatsApp Us</span>
            </a>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-lg cta-button">
              Apply to Study in Luxembourg from Nepal
            </Link>
          </div>
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Luxembourg study experts. No obligation for 2026 intake.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from University of Luxembourg, Luxembourg Ministry of Higher Education, guichet.public.lu (Immigration), luxembourg.public.lu.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {luxembourgData.author.name} · {luxembourgData.author.role} · {luxembourgData.author.expertise}
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Quick Summary</h2>
          <p className="text-gray-700 mb-4">
            <strong>Quick answer:</strong> Study in Luxembourg from Nepal: University of Luxembourg tuition €400–€800/year; living €1,000–€1,800/month in Luxembourg City and Esch-sur-Alzette. Work 15 hrs/week during term; 40 hrs during holidays. 12-month post-study job-search. Apply via guichet.public.lu (Immigration); VFS (Visa Application Centre) in Kathmandu, Gwarko. 1 EUR ≈ 143 NPR (Feb 2026).
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts for Nepali Students</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Tuition: €400–€800/year (University of Luxembourg)</li>
            <li>Visa: Type D; Immigration Department; €50</li>
            <li>Living: Luxembourg City €1,000–1,800; Esch €900–1,500</li>
            <li>Work: 15 hrs/week term; 40 hrs/week holidays</li>
            <li>Post-study: 12 months to seek employment</li>
            <li>Sources: University of Luxembourg (uni.lu), guichet.public.lu</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: luxembourgData.stats.universities, label: 'Public University' },
              { value: luxembourgData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: luxembourgData.stats.englishPrograms, label: 'English Programmes' },
              { value: luxembourgData.stats.postStudy, label: 'Post-Study Permit' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Luxembourg */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Luxembourg for Nepali Students?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Luxembourg offers very low tuition (€400–800/year), EU-recognized degrees, free public transport, multilingual environment, and work rights. Luxembourg City, Esch-sur-Alzette. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/belgium/" className="text-blue-600 hover:underline">Belgium</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Luxembourg for international students attracts those seeking EU degrees at minimal tuition cost. The University of Luxembourg (uni.lu) is the main public institution. Nepali students from Kathmandu, Lalitpur, Pokhara, and across Nepal choose Luxembourg for finance, law, computer science, and data science. Visa applications from Nepal go via VFS in Kathmandu or the Honorary Consulate in Gwarko. Cost of studying in Luxembourg for international students: low tuition but high living costs—budget accordingly. Official procedures: guichet.public.lu.
        </p>
      </section>

      {/* Cost */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">What is the Total Cost to Study in Luxembourg from Nepal 2026?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Total cost to study in Luxembourg from Nepal 2026—first year €14,000–€25,000 (NPR 20–36 lakhs). Tuition €800–€1,200; living €1,000–€1,800/month. Cheapest universities in Luxembourg for international students: University of Luxembourg (only public). 1 EUR ≈ 143 NPR (Feb 2026).
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
                <tr className="border-b"><td className="p-3">Tuition</td><td className="p-3">800–1,200</td><td className="p-3">1.1–1.7L</td></tr>
                <tr className="border-b"><td className="p-3">Living (12 months)</td><td className="p-3">12,000–21,600</td><td className="p-3">17–31L</td></tr>
                <tr className="border-b"><td className="p-3">Visa</td><td className="p-3">50</td><td className="p-3">~7k</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~900</td><td className="p-3">1.3L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">14,000–25,000</td><td className="p-3 font-medium">20–36L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees – University of Luxembourg</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost in Luxembourg for Students from Nepal – by City</h3>
          <p className="text-gray-700 mb-4">
            Luxembourg City most expensive; Belval (university campus) more affordable. Public transport free. Student housing from €450; shared €800–€1,200.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Luxembourg City</p>
              <p className="text-lg font-bold">€1,000–€1,800/mo</p>
              <p className="text-sm text-gray-600">NPR 1.4–2.6L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Esch-sur-Alzette</p>
              <p className="text-lg font-bold">€900–€1,500/mo</p>
              <p className="text-sm text-gray-600">NPR 1.3–2.1L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Belval</p>
              <p className="text-lg font-bold">€800–€1,400/mo</p>
              <p className="text-sm text-gray-600">NPR 1.1–2.0L</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Can I Study and Work in Luxembourg?
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Study and work in Luxembourg: Up to 15 hours per week during the academic year; up to 40 hours per week during school holidays. Student residence permit = work permit for non-EU students. No separate work permit needed.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 15 hrs/week during academic year</li>
            <li>• 40 hrs/week during school holidays</li>
            <li>• Student permit = work permit (non-EU)</li>
            <li>• Free public transport nationwide</li>
          </ul>
        </div>
      </section>

      {/* Post-Study Work */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post Study Work Visa in Luxembourg for Nepali Students</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Non-EU graduates can stay up to 12 months to seek employment or start a business. Apply before student permit expires. Need sufficient funds and health insurance. If employed, apply for employment residence permit.
        </p>
        <p className="text-gray-700 mb-4">
          Post study work visa in Luxembourg for Nepali students: Be realistic. The 12-month permit lets you look for work; success depends on job market (finance, tech, EU institutions). Apply before your student permit expires. Source: guichet.public.lu.
        </p>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Luxembourg Scholarship Options</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Study in Luxembourg scholarship: Guillaume Dupaix International Scholarship for Master's students with excellent academic performance. Funded by Luxembourg Ministry of Foreign Affairs and Ministry of Research. Deadline 24 March 2026. Erasmus+ for exchange. Student hardship fund for financial difficulty.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Guillaume Dupaix:</strong> Master's; excellent grades; deadline 24 March 2026</li>
            <li>• <strong>Erasmus+:</strong> Exchange and internship funding</li>
            <li>• <strong>Student hardship fund:</strong> Case-by-case support</li>
            <li>• <strong>Apply:</strong> Via uni.lu after admission</li>
          </ul>
        </div>
      </section>

      {/* Study Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in Luxembourg Without IELTS?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Study in Luxembourg without IELTS: University of Luxembourg accepts alternatives. Proof via secondary school diploma from English-medium institution, high school transcript (final 2 years), or internationally recognised language test (CEFR B2–C1). Programme-specific. Check uni.lu for each programme.
        </p>
      </section>

      {/* Intake & Deadlines */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intake Months & Application Deadlines 2026/2027</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> September (main intake). University of Luxembourg: Non-EU applicants—1 February to 24 March 2026 for September 2026. Application fee €100. Allow 6+ weeks for diploma recognition by Luxembourg authorities.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>September 2026:</strong> Non-EU deadline 24 March 2026</li>
          <li>• <strong>Application opens:</strong> 1 February 2026</li>
          <li>• <strong>Visa:</strong> Apply 25–30 working days before travel</li>
          <li>• <strong>Check:</strong> uni.lu for programme-specific deadlines</li>
        </ul>
      </section>

      {/* Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">University of Luxembourg – Campuses</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Luxembourg is the only public university. Campuses: Luxembourg City (Kirchberg), Esch-sur-Alzette (Belval), Limpertsberg. Cheapest universities in Luxembourg for international students: University of Luxembourg (€400–800/year). 50+ English programmes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Luxembourg City (Kirchberg)', city: 'Luxembourg City', programs: 'Law, finance, management' },
            { name: 'Belval', city: 'Esch-sur-Alzette', programs: 'Science, engineering, humanities' },
            { name: 'Limpertsberg', city: 'Luxembourg City', programs: 'Education, humanities' },
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
            Get expert guidance on study in Luxembourg from Nepal. We help with university selection, Luxembourg student visa process for Nepali students, and residence permit via Immigration Department.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all cta-button">
            Apply to Study in Luxembourg from Nepal
          </Link>
        </div>
      </section>

      {/* Visa Process */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Luxembourg Student Visa Process for Nepali Students</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Luxembourg student visa process for Nepali students: Apply for temporary authorisation before travel via guichet.public.lu. Submit to Immigration Department. Type D visa via VFS (Visa Application Centre) in Kathmandu or Honorary Consulate in Gwarko. Required: University of Luxembourg enrolment letter, proof of funds (€1,161.60/mo + tuition), passport, insurance, criminal record. Fee €50. Processing 25–30 working days.
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
          <h4 className="font-bold text-[#001F3F] mb-2">Where do Nepali students submit Luxembourg visa from Kathmandu?</h4>
          <p className="text-gray-700 text-sm">
            <strong>VFS (Visa Facilitation Services)</strong> Luxembourg Visa Application Centre in Kathmandu and Honorary Consulate of Luxembourg at Anjushree Building, Gwarko, Lalitpur. VFS handles Type D visa submissions for Nepali students; guichet.public.lu publishes official requirements. Contact Newdelhi.Consulat@mae.etat.lu for VFS appointment. Apply 25–30 working days before travel. Source: guichet.public.lu, newdelhi.mae.lu.
          </p>
        </div>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Step-by-Step Luxembourg Student Visa Process</h3>
        <ol className="space-y-3 max-w-2xl mb-12">
          {luxembourgData.residenceSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {luxembourgData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Luxembourg vs Germany */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Study in Luxembourg vs Germany – 2026</h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
            Both EU destinations for Nepali students. Luxembourg: very low tuition, free transport, smaller. Germany: free tuition at most public universities, larger job market. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Aspect</th>
                  <th className="p-4 text-left">Luxembourg</th>
                  <th className="p-4 text-left">Germany</th>
                </tr>
              </thead>
              <tbody>
                {luxembourgVsGermany.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4">{row.luxembourg}</td>
                    <td className="p-4">{row.germany}</td>
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
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Luxembourg FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Luxembourg from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={luxembourgData.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Luxembourg Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            Ready to apply? Get expert guidance on total cost to study in Luxembourg from Nepal 2026, Luxembourg student visa process, and post-study work. Free consultation in Kathmandu—no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all cta-button">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button">
              Apply to Study in Luxembourg from Nepal
            </Link>
            <Link href="/study-abroad/eur/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all cta-button-secondary">
              Explore Europe Programs
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/belgium/" className="underline hover:text-white">Belgium</Link> · <Link href="/study-abroad/eur/netherlands/" className="underline hover:text-white">Netherlands</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
        </div>
      </section>
    </main>
  );
}
