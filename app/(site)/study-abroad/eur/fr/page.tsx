import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  MapPin,
  Phone,
  Briefcase,
  Award,
  FileText,
  Plane,
  ChevronRight,
  BookOpen,
  Globe,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in France from Nepal 2026 | Cost, Visa & Scholarships',
  description: 'Study in France from Nepal 2026: total cost, visa process, Eiffel scholarship, study without IELTS. Public tuition €2,895-3,941. Free consultation in Kathmandu.',
  keywords: 'study in france, study in france from nepal, total cost to study in france from nepal, can i study in france without ielts, post study work permit in france, study abroad in france, study french in france, study in france cost, study in france for free, study in france from nepal consultancy',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/fr/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/fr/',
    title: 'Study in France from Nepal 2026 | Cost, Visa & Scholarships',
    description: 'Complete 2026 guide for Nepali students: study in France, tuition, living costs, Eiffel Excellence Scholarship, visa process, APS post-study work.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in France from Nepal 2026',
    description: 'Study in France from Nepal: cost, visa, scholarships, English-taught programs. Free consultation in Kathmandu.',
  },
};

// Official data: Campus France 2025/26, France-Visas, French Ministry of Higher Education. 1 EUR ≈ 143 NPR (Feb 2026)
const franceData = {
  country: 'France',
  slug: 'fr',
  heroImage: '/assets/europe.jpg',
  lastUpdated: 'February 2026',
  description: 'France offers low tuition at public universities—Bachelor €2,895 and Master €3,941 per year for non-EU students (Campus France 2025/26). Over 1,500 English-taught programs. Eiffel Excellence Scholarship offers €1,200/month for Master\'s.',
  stats: {
    universities: '3,500+',
    nepaliStudents: 'Growing cohort',
    englishPrograms: '1,500+',
    pswDuration: 'Up to 24 Months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuitionPublic: {
    bachelor: { eur: 2895, npr: 414000 },
    master: { eur: 3941, npr: 563000 },
    doctorate: { eur: 397, npr: 56800 },
    cvec: { eur: 105, npr: 15000 },
  },
  tuitionPrivate: { min: 6000, max: 18000, nprMin: 858000, nprMax: 2574000 },
  livingCost: { paris: { min: 1235, max: 1800 }, other: { min: 800, max: 1200 } },
  visaFee: { eur: 50, npr: 7150 },
  eiffel: { master: 1200, phd: 2100 },
  requirements: [
    'Acceptance letter from French higher education institution',
    'Valid passport (minimum 6 months)',
    'Proof of funds: €615/month or equivalent (minimum 3 months)',
    'Health insurance valid in France',
    'Campus France / Études en France application (Nepal)',
    'French long-stay student visa (VLS-TS)',
    'English or French proficiency (IELTS/TOEFL/DELF as required by program)',
  ],
  visaSteps: [
    'Create account on Études en France (pastel.diplomatie.gouv.fr)',
    'Apply to French institutions and receive acceptance',
    'Complete Campus France academic interview',
    'Pay Campus France fee and obtain interview certificate',
    'Complete France-Visas application (france-visas.gouv.fr)',
    'Book appointment at VFS Global Kathmandu',
    'Submit documents and attend biometrics',
    'Receive VLS-TS visa (typically 2–4 weeks)',
  ],
  intakes: [
    { name: 'Fall (September)', deadline: 'January–April' },
    { name: 'Spring (January/February)', deadline: 'September–November' },
  ],
  faqs: [
    {
      question: 'What is the total cost to study in France from Nepal in 2026?',
      answer: 'First year: €8,500–€18,000 (NPR 12–26 lakhs). Tuition €2,895–€3,941; living €800–€1,800/month; visa €50; CVEC €105; airfare ~€800. Private adds €6,000–€18,000/year. 1 EUR ≈ 143 NPR (Feb 2026).',
    },
    {
      question: 'Can I study in France without IELTS?',
      answer: 'Yes. Choose from 1,500+ English-taught programs (Campus France). Universities accept TOEFL, PTE, Cambridge, or prior English-medium proof. French programs need DELF/DALF.',
    },
    {
      question: 'What is the post study work permit in France for Nepali students?',
      answer: 'APS/RÉCE: 12 months, renewable to 24 months. Eligible: Master\'s, engineering, Licence Pro from French institution. Per Campus France, Nepal has a bilateral agreement enabling APS. Show €615/month or job offer; work up to 964 hrs/year.',
    },
    {
      question: 'How much does it cost to study in France from Nepal?',
      answer: 'Public: €2,895 (Bachelor) or €3,941 (Master)/year; living €800–€1,800/month. First year total €10,000–€20,000 (NPR 14–29L). Private: €6,000–€18,000 tuition.',
    },
    {
      question: 'Can I study in France for free?',
      answer: 'Possible via BGF scholarship, Erasmus+ partnership, or institutional waiver. Non-EU normally pay €2,895–€3,941; exemptions decided by host or embassy. Eiffel covers stipend, not tuition.',
    },
    {
      question: 'What is the Eiffel Excellence Scholarship 2026?',
      answer: '€1,200/month (Master) or €2,100/month (PhD) from Jan 2026. Covers transport, health, housing—not tuition. 12–36 months. Apply via French host institution. Source: Campus France.',
    },
    {
      question: 'How do I apply for France student visa from Kathmandu?',
      answer: 'Use Études en France (Campus France) for academics, then France-Visas for visa. Submit at VFS Kathmandu. Processed by French Embassy Delhi; 2–4 weeks. Per Campus France Nepal.',
    },
    {
      question: 'What are the intakes to study in France?',
      answer: 'Fall (Sept): main intake, deadlines Jan–Apr. Spring (Jan/Feb): limited, deadlines Sep–Nov. Études en France 2026–27 opens Oct 2025; deadline ~15 Dec.',
    },
    {
      question: 'Is a study in France from Nepal consultancy helpful?',
      answer: 'Yes. Consultancy assists with Études en France, documents, financial proof, Campus France interview, visa. San Marina: free consultation in Kathmandu, Baneshwor, Ghorahi, Itahari.',
    },
    {
      question: 'Can I study French in France before my degree?',
      answer: 'Yes. FLE centres and university language departments offer 6–12 month programs. Some fee exemptions if enrolled pre-2019/20. Essential for French-taught degrees.',
    },
    {
      question: 'How much proof of funds is needed for France student visa?',
      answer: '€615/month (3 months minimum). Year: ~€7,380 plus tuition. Nepal banks can issue statements. Check Campus France and France-Visas for latest.',
    },
  ],
};

const tuitionTable = [
  { level: 'Bachelor (Licence)', public: '€2,895/year', private: '€6,000–€18,000/year' },
  { level: 'Master', public: '€3,941/year', private: '€6,000–€18,000/year' },
  { level: 'Doctorate', public: '€397/year', private: 'Varies' },
  { level: 'CVEC (all)', public: '€105/year', private: '€105/year' },
];

const comparisonData = [
  { country: 'France', countrySlug: null, tuition: '€2,895–€3,941', living: '€800–€1,800/mo', work: '20 hrs/week', psw: '12–24 mo', visaTime: '2–4 weeks' },
  { country: 'Germany', countrySlug: '/study-abroad/eur/germany/', tuition: '€0–€1,500', living: '€934/mo', work: '20 hrs/week', psw: '18 mo', visaTime: '4–12 weeks' },
  { country: 'UK', countrySlug: '/study-abroad/uk/', tuition: '£10,000–38,000', living: '£10,539–13,761', work: '20 hrs/week', psw: '2–3 Years', visaTime: '3 weeks' },
];

export default function FranceStudyPage() {
  const visaStepsWithText = [
    { name: 'Create account on Études en France (pastel.diplomatie.gouv.fr)', text: 'Register on Études en France platform.' },
    { name: 'Apply to French institutions and receive acceptance', text: 'Apply to universities and obtain acceptance letter.' },
    { name: 'Complete Campus France academic interview', text: 'Attend Campus France interview; obtain certificate.' },
    { name: 'Pay Campus France fee and obtain interview certificate', text: 'Pay fee; receive interview certificate.' },
    { name: 'Complete France-Visas application (france-visas.gouv.fr)', text: 'Complete visa application on France-Visas.' },
    { name: 'Book appointment at VFS Global Kathmandu', text: 'Book biometric appointment at VFS Kathmandu.' },
    { name: 'Submit documents and attend biometrics', text: 'Submit documents at VFS; processed by French Embassy Delhi.' },
    { name: 'Receive VLS-TS visa (typically 2–4 weeks)', text: 'Typical processing 2–4 weeks.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in France from Nepal 2026 – Complete Guide',
        description: franceData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: franceData.author.name, url: 'https://www.sanmarina.edu.np', description: franceData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for France study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in France from Nepal', 'Études en France', 'Campus France', 'VLS-TS', 'APS post-study work', 'Eiffel scholarship'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: franceData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 4, name: 'France', item: 'https://www.sanmarina.edu.np/study-abroad/eur/fr/' },
        ],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for France Student Visa from Nepal',
        description: 'Step-by-step: Études en France, Campus France interview, France-Visas, VFS Kathmandu. Processed by French Embassy Delhi. Based on Campus France and France-Visas 2026.',
        step: visaStepsWithText.map((s, i) => ({
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
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={franceData.heroImage} alt="Nepali students studying in France - Paris skyline, universities, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">France</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {franceData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in France from Nepal
            <br />
            <span className="text-blue-300">Complete 2026 Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Low tuition at public universities, 1,500+ English-taught programs, and the Eiffel Excellence Scholarship—France is an affordable, high-quality option for Nepali students.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Book Free Consultation
            </Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg">
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
            <strong>Source: Campus France, French Ministry of Higher Education, France-Visas.</strong> Public tuition €2,895–€3,941; proof €615/month. Verify at <a href="https://www.nepal.campusfrance.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nepal.campusfrance.org</a>, <a href="https://www.campusfrance.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">campusfrance.org</a>, <a href="https://france-visas.gouv.fr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">france-visas.gouv.fr</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {franceData.author.name} · {franceData.author.role} · {franceData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in France from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Public tuition</td><td className="p-3">€2,895 (Bachelor), €3,941 (Master)/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">Paris €1,235–1,800/mo; other €800–1,200/mo</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">€50; VLS-TS; VFS Kathmandu; 2–4 weeks</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Proof of funds</td><td className="p-3">€615/month (min 3 months)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">APS post-study</td><td className="p-3">12–24 months (Master, Licence Pro)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Eiffel 2026</td><td className="p-3">€1,200/mo (Master), €2,100/mo (PhD)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">English programs</td><td className="p-3">1,500+ (Campus France)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: Campus France, France-Visas. Verify at <a href="https://www.nepal.campusfrance.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nepal.campusfrance.org</a>, <a href="https://france-visas.gouv.fr" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">france-visas.gouv.fr</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: franceData.stats.universities, label: 'Institutions' },
              { value: franceData.stats.nepaliStudents, label: 'Nepali Students' },
              { value: franceData.stats.englishPrograms, label: 'English Programs' },
              { value: franceData.stats.pswDuration, label: 'Post-Study Work' },
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

      {/* 1. Why Study in France in 2026 */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in France in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> France offers subsidised public tuition (Bachelor €2,895, Master €3,941) per Campus France 2025/26, 1,500+ English-taught programs, and degrees from Sorbonne and PSL. The state covers two-thirds of costs. Study abroad in France is among the most affordable in Europe.
        </p>
        <p className="text-gray-700 mb-4">
          According to Campus France and the French Ministry of Higher Education, the true cost of a degree is around €10,000 per year—but the state absorbs most of it at public universities. For Nepali students, this means gaining a world-class education at a fraction of UK or US prices.
        </p>
        <p className="text-gray-700 mb-4">
          France also ranks among the top destinations for international students globally. Cities like Paris, Lyon, Toulouse, and Lille combine academic excellence with culture, history, and strong industry links. Nepali students increasingly choose France for engineering, business, and humanities.
        </p>
        <p className="text-gray-700">
          The country hosts over 412,000 international students (per QS Global Student Flows 2025). The French Ministry of Higher Education and Research oversees quality assurance. Degrees from accredited institutions are recognised under the Bologna process across Europe. Whether you seek a Grande École engineering diploma, a Sorbonne humanities degree, or a business degree from HEC Paris, the credentials carry weight worldwide.
        </p>
      </section>

      {/* 2. Is France Good for Nepali Students */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Is France Good for Nepali Students?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Yes. Low tuition, English-taught options, and APS post-study work (up to 24 months, per Campus France bilateral agreement). Études en France guides applications from Kathmandu. Nepali student numbers are growing.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Low public tuition compared to UK, USA, Australia</li>
            <li>• Can study in France without IELTS via English programs</li>
            <li>• Post study work permit in France (APS) up to 24 months for eligible graduates</li>
            <li>• Schengen access: travel across 27 European countries</li>
            <li>• Part-time work: 20 hours per week during study</li>
          </ul>
          <p className="text-gray-700">
            Financial proof is a common concern for Nepali applicants. France requires evidence of €615 per month (around NPR 88,000) for living costs. Banks in Kathmandu can provide statements; some students use sponsors. A study in France from Nepal consultancy like San Marina helps structure financial documents to meet France-Visas and Campus France expectations. Visa approval rates for genuine applicants with complete paperwork remain strong.
          </p>
        </div>
      </section>

      {/* 3. Top Universities in France */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in France (2026)</h2>
        <p className="text-gray-700 mb-6">
          <strong>Quick answer:</strong> Four in QS Top 100: PSL (#28), Polytechnique (#41), Paris-Saclay (#71), Sorbonne. 35+ French institutions ranked. Source: Campus France, QS 2026.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Université PSL', rank: 'QS #28', city: 'Paris', programs: 'Arts, Sciences, Engineering' },
            { name: 'Institut Polytechnique de Paris', rank: 'QS #41', city: 'Paris-Saclay', programs: 'Engineering, Tech' },
            { name: 'Université Paris-Saclay', rank: 'QS #71', city: 'Paris-Saclay', programs: '100+ English Master\'s' },
            { name: 'Sorbonne University', rank: 'QS Top 100', city: 'Paris', programs: 'Medicine, Humanities, Science' },
            { name: 'Sciences Po', rank: 'Top 50', city: 'Paris', programs: 'IR, Public Policy, Law' },
            { name: 'HEC Paris', rank: 'Top Business', city: 'Paris', programs: 'MBA, Management' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-blue-600 text-sm mb-2">{u.rank}</p>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 & 5. Study in France Cost + Total Cost */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study in France Cost (Tuition + Living)</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Public: €2,895 (Bachelor) or €3,941 (Master)/year + CVEC €105. Living: Paris €1,235–€1,800/mo; elsewhere €800–€1,200/mo. Campus France 2025/26.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Comparison: Public vs Private</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Level</th>
                  <th className="p-4 text-left">Public (Non-EU)</th>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Total Cost to Study in France from Nepal</h3>
          <p className="text-gray-700 mb-4">
            According to Campus France, first-year budget: €8,500–€18,000 (NPR 12–26 lakhs). Breakdown: tuition €2,895–€3,941 + living €9,600–€14,400 + visa €50 + CVEC €105 + airfare ~€800. Exchange rate: 1 EUR ≈ 143 NPR (Feb 2026). Compare with <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">study in UK</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, or <Link href="/study-abroad/eur/" className="text-blue-600 hover:underline">other European destinations</Link>.
          </p>
          <h3 className="text-xl font-bold text-[#001F3F] mt-8 mb-4">Accommodation for Nepali Students</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">CROUS (student housing)</td><td className="p-3">€250–450</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Private (Paris)</td><td className="p-3">€600–1,200</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Private (other cities)</td><td className="p-3">€400–800</td></tr>
                <tr><td className="p-3">Homestay</td><td className="p-3">€400–700</td></tr>
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <GraduationCap className="text-[#0056b3] mb-2" size={24} />
              <p className="font-bold">Tuition (Public)</p>
              <p className="text-lg font-bold">€2,895–€3,941</p>
              <p className="text-sm text-gray-600">NPR 4.1–5.6L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <DollarSign className="text-green-600 mb-2" size={24} />
              <p className="font-bold">Living (Annual)</p>
              <p className="text-lg font-bold">€9,600–€14,400</p>
              <p className="text-sm text-gray-600">NPR 13.7–20.6L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <FileText className="text-orange-600 mb-2" size={24} />
              <p className="font-bold">Visa</p>
              <p className="text-lg font-bold">€50</p>
              <p className="text-sm text-gray-600">NPR 7,150</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Award className="text-purple-600 mb-2" size={24} />
              <p className="font-bold">CVEC</p>
              <p className="text-lg font-bold">€105</p>
              <p className="text-sm text-gray-600">NPR 15,000</p>
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

      {/* 6. Can I Study in France Without IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Can I Study in France Without IELTS?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Yes. Choose from 1,500+ English-taught programs (Campus France catalog). TOEFL, PTE, Cambridge, or prior English-medium proof accepted. French programs need DELF/DALF.
        </p>
        <p className="text-gray-700 mb-4">
          Université Paris-Saclay alone offers over 100 English Master&apos;s programs. Sciences Po, HEC Paris, and many Grandes Écoles also teach in English. Check each program&apos;s language policy on the university website or Campus France.
        </p>
        <p className="text-gray-700">
          If your previous education was in English (e.g., 10+2 or bachelor&apos;s from an English-medium institution), some universities may waive a formal test. However, most competitive programs still request TOEFL (typically 90+) or IELTS (6.0–6.5). For study French in France pathways, DELF B2 is the standard for undergraduate entry; Master&apos;s may require C1. Plan your language preparation early.
        </p>
      </section>

      {/* 7. Study in France for Free + 8. Eiffel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in France for Free (Public + Scholarships)</h2>
          <p className="text-gray-700 mb-4">
            <strong>Quick answer:</strong> Fee exemptions via BGF, Erasmus+, or institutional waiver. Non-EU normally pay €2,895–€3,941; host or embassy decides. Study in France for free is possible for qualified applicants.
          </p>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Eiffel Excellence Scholarship (2026)</h3>
          <p className="text-gray-700 mb-4">
            The Eiffel Excellence Scholarship, managed by Campus France, provides a monthly stipend of €1,200 (Master&apos;s) or €2,100 (PhD) from January 2026. It covers international transport, health insurance, and housing support—but not tuition. Duration: 12–36 months depending on level. Applications are submitted by the French host institution; students cannot apply directly. Highly competitive.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Master: €1,200/month (2026)</li>
            <li>• PhD: €2,100/month (2026)</li>
            <li>• Apply via your French university</li>
          </ul>
          <p className="text-gray-700">
            Other funding options include the French Ministry&apos;s BGF (Bourse du Gouvernement Français), Erasmus Mundus joint programs, and university-specific grants. Campus France publishes an annual scholarship database. Applying to multiple sources improves your chances. Study in France for free remains possible for a limited number of highly qualified applicants through these channels.
          </p>
        </div>
      </section>

      {/* 9. Study French in France */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study French in France (Language Pathway)</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Study French in France at FLE centres or university language departments. 6–12 month programs prepare for French-taught degrees. Some fee exemptions for pre-2019/20 FLE enrollees; check Campus France.
        </p>
        <p className="text-gray-700 mb-4">
          DELF B2 or DALF C1 is typically required for French-taught Bachelor&apos;s and Master&apos;s. Language schools in Paris, Lyon, and other cities offer intensive courses. Combining a language year with a degree improves employability and daily life in France.
        </p>
        <p className="text-gray-700">
          Campus France lists recognised FLE centres. A typical pathway: 6–12 months of French study, then entry to a Licence or Master program. Learning French opens more scholarship opportunities and makes the post study work permit in France phase easier—employers often prefer bilingual candidates. For students focused on English-taught programs, basic French (A2–B1) still helps with administration, housing, and part-time work.
        </p>
      </section>

      {/* 10. Post Study Work Permit */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post Study Work Permit in France</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> APS/RÉCE: 12 months, renewable to 24. Eligible: Master&apos;s, engineering, Licence Pro from French institution. Nepal bilateral per Campus France. Post study work permit in France lets graduates work up to 964 hrs/year while job-seeking.
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Duration: 12 months, renewable to 24 months</li>
            <li>• Work up to 964 hours/year during job search</li>
            <li>• Proof of €615/month or job offer</li>
            <li>• Apply via ANEF within 4 months before permit expiry</li>
          </ul>
          <p className="text-gray-700">
            Once you secure a permanent contract (CDI) paying at least 1.5 times the minimum wage (SMIC), you can apply directly for an employee residence permit without using the full APS period. Registering with Pôle emploi (job centre) is recommended. The post study work permit in France gives Nepali graduates time to find roles in tech, consulting, engineering, and other sectors. France&apos;s labour market values international graduates, especially in STEM and business.
          </p>
        </div>
      </section>

      {/* 11 & 12. Visa Process + Documents */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Student Visa Process from Nepal (Step-by-Step)</h2>
        <p className="text-gray-700 mb-6">
          <strong>Quick answer:</strong> Études en France for academics → Campus France interview → VLS-TS via France-Visas. Submit at VFS Kathmandu. Processed by French Embassy Delhi; 2–4 weeks. Nepal under Etudes en France (Campus France Nepal, France-Visas).
        </p>
        <ol className="space-y-3 max-w-2xl mb-12">
          {franceData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {franceData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* 13. Intakes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Intakes in France</h2>
          <p className="text-gray-700 mb-4">
            Main intake: Fall (September), with applications through Études en France typically due January–April. Spring intake (January/February) is available for some programs; deadlines September–November. Campus France opens the 2026–27 cycle in October 2025; deadline usually December 15.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {franceData.intakes.map((intake, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-[#001F3F]">{intake.name}</h3>
                <p className="text-gray-600">Application deadline: {intake.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Advantages & Disadvantages */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages of Studying in France</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Low public tuition (€2,895–€3,941/year)</li>
              <li>• 1,500+ English-taught programs</li>
              <li>• APS post-study work up to 24 months</li>
              <li>• Schengen access to 27 countries</li>
              <li>• Strong research and industry links</li>
              <li>• Eiffel Excellence Scholarship available</li>
            </ul>
          </div>
          <div className="bg-amber-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Disadvantages</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bureaucratic process (Études en France)</li>
              <li>• Paris living costs higher than other cities</li>
              <li>• French helpful for part-time jobs</li>
              <li>• Visa processed via Delhi (not Kathmandu)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* France vs Germany vs UK */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">France vs Germany vs UK – 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Country</th>
                  <th className="p-4 text-left">Tuition</th>
                  <th className="p-4 text-left">Living</th>
                  <th className="p-4 text-left">Work During Study</th>
                  <th className="p-4 text-left">Post-Study Work</th>
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
        </div>
      </section>

      {/* 15. Why Choose Our Consultancy */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal?</h2>
        <p className="text-gray-700 mb-4">
          A study in France from Nepal consultancy removes the guesswork. San Marina guides you through the Études en France procedure—from document checklist and financial proof structure to Campus France interview prep. We help shortlist universities, decode scholarship options, and support your visa application at VFS Kathmandu. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Our team understands France-Visas requirements and the French Embassy Delhi processing flow. We advise on proof of funds (€615/month), health insurance, and the timeline from application to departure. Students from Kathmandu, Baneshwor, Ghorahi, and Itahari have relied on us for study abroad in France guidance since 2014.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation—no obligation</li>
          <li>• Études en France and France-Visas expertise</li>
          <li>• Financial proof guidance for Nepali applicants</li>
          <li>• Campus France interview preparation</li>
          <li>• Offices in Kathmandu, Dang, Itahari</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in France FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in France from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={franceData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your France Journey Today</h2>
          <p className="text-blue-200 mb-8">
            Get expert guidance on study in France from Nepal. Our counselors understand the Études en France process, financial proof for Nepali applicants, and visa requirements.
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
          <p className="mt-6 text-sm text-blue-300">
            <Link href="/study-abroad/eur/germany/" className="underline font-medium">Germany</Link>
            {' · '}
            <Link href="/study-abroad/eur/netherlands/" className="underline font-medium">Netherlands</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="underline font-medium">UK</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="underline font-medium">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="underline font-medium">Canada</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/aus/" className="text-blue-600 font-semibold hover:underline">Australia</Link>
            {' · '}
            <Link href="/study-abroad/can/" className="text-blue-600 font-semibold hover:underline">Canada</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/study-abroad/ireland/" className="text-blue-600 font-semibold hover:underline">Ireland</Link>
            {' · '}
            <Link href="/study-abroad/eur/" className="text-blue-600 font-semibold hover:underline">Europe</Link>
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
