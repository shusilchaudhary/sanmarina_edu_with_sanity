import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  Phone,
  FileText,
  Plane,
  ChevronRight,
  Building2,
  Award,
} from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Netherlands from Nepal 2026 | Cost, Visa & Scholarships',
  description: 'Study in Netherlands from Nepal 2026: tuition €6,000–20,000, proof €13,800 (IND). Orientation Year 12 months. Holland Scholarship €5,000. University applies to IND. Free consultation Kathmandu.',
  keywords: 'study in netherlands, study in netherlands from nepal, study in netherlands requirements, study in netherlands cost, scholarships to study in netherlands, post study work visa in netherlands, study in netherlands for free, is studying in netherlands free, study in netherlands without ielts, study in netherland from nepal, Orientation Year Netherlands, zoekjaar, Netherlands student visa Nepal, Holland Scholarship',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/netherlands/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/netherlands/',
    title: 'Study in Netherlands from Nepal 2026 | Cost, Visa & Scholarships',
    description: 'Complete 2026 guide: study in Netherlands, tuition, living costs, Orientation Year visa, Holland Scholarship. Compare with Germany, Spain, Italy.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-02-17',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Netherlands from Nepal 2026',
    description: 'Study in Netherlands from Nepal: cost, visa, Orientation Year, Holland Scholarship. Free consultation in Kathmandu.',
  },
};

// Data: Study in Holland (studyinnl.org), IND, Nuffic, Dutch universities (UvA, EUR, Leiden, TU Delft). 1 EUR ≈ 143 NPR (Feb 2026)
// Is studying in Netherlands free? No. Non-EU pay institutional fees €6,000–€20,000; EU pay statutory €2,530
const netherlandsData = {
  country: 'Netherlands',
  slug: 'netherlands',
  heroImage: '/assets/amsterdam.webp',
  lastUpdated: 'February 2026',
  description: 'Netherlands hosts 122,000+ international students. Non-EU tuition €6,000–€20,000/year; IND requires €13,800 living proof. 16 hrs/week work (or full-time Jun–Aug). Orientation Year (post study work visa Netherlands) 12 months. Per Study in Holland and IND.',
  stats: {
    universities: '75+',
    internationalStudents: '122,000+',
    englishPrograms: '2,000+',
    orientationYear: '12 months',
  },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC & PIER Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  tuition: { eu: 2530, nonEu: { min: 6000, max: 20000 }, nprMin: 858000, nprMax: 2860000 },
  proofOfFunds: { living: 13800, npr: 1973400 },
  hollandScholarship: { amount: 5000, npr: 715000 },
  orientationYear: { duration: 12, fee: 192 },
  livingCost: { amsterdam: { min: 1000, max: 1700 }, rotterdam: { min: 900, max: 1500 }, eindhoven: { min: 800, max: 1400 } },
  workHours: '16 hrs/week or full-time Jun–Aug',
  requirements: [
    'Admission letter from Dutch university',
    'Valid passport (3+ months beyond stay)',
    'Proof of funds: tuition + €13,800 living (IND standard)',
    'Health insurance valid in Netherlands',
    'TB certificate (Nepal on IND designated list)',
    'No Objection Certificate (NOC) from Nepal MoE if required by university',
    'IELTS 6.0–6.5 or TOEFL/PTE/Cambridge (English programmes)',
  ],
  visaSteps: [
    'Apply to Dutch universities (check deadlines per institution)',
    'Receive admission and pay tuition deposit',
    'Gather proof of funds: bank statements, sponsorship, or loan (3+ months in account)',
    'University submits application to IND on your behalf',
    'IND processes residence permit (typically 4–12 weeks)',
    'Collect permit at Dutch embassy/consulate or upon arrival',
  ],
  faqs: [
    {
      question: 'What are the study in Netherlands requirements for Nepali students in 2026?',
      answer: 'Admission letter, passport, proof of funds (tuition + €13,800 living), health insurance, TB certificate. IELTS 6.0–6.5 or TOEFL/PTE for English programmes. University applies to IND for residence permit.',
    },
    {
      question: 'What is the study in Netherlands cost from Nepal?',
      answer: 'First year: €20,000–€38,000 (NPR 29–54L). Tuition €6,000–€20,000; living €13,800/year proof; airfare ~€800. Amsterdam highest; Eindhoven more affordable. 1 EUR ≈ 143 NPR.',
    },
    {
      question: 'What scholarships to study in Netherlands are available?',
      answer: 'Holland Scholarship (NL Scholarship): €5,000 one-time first year for excellent non-EEA students. University-specific merit grants. Orange Knowledge Programme ended 2024. See StudyFinder on Study in NL. Check our scholarships page.',
    },
    {
      question: 'Is studying in Netherlands free? Study in Netherlands for free?',
      answer: 'No. Non-EU students pay institutional tuition €6,000–€20,000/year. EU/EEA pay statutory €2,530. Study in Netherlands for free is not possible for non-EU—but Holland Scholarship €5,000 and university grants reduce cost.',
    },
    {
      question: 'What is the post study work visa in Netherlands?',
      answer: 'Orientation Year (zoekjaar): 12 months to search for work after graduation. Apply within 3 years of graduation. Unlimited labour market access; no separate work permit. Fee €192. Bachelor and Master graduates eligible. Per IND.',
    },
    {
      question: 'Can I study in Netherlands without IELTS?',
      answer: 'Some exemptions: prior English-medium degree, IB Diploma, education from UK/US/Australia/Canada. Otherwise TOEFL, Cambridge, PTE accepted. Check programme pages. For test prep, see our services.',
    },
    {
      question: 'How many hours can I work while studying in Netherlands?',
      answer: 'Non-EU: 16 hrs/week during term OR full-time in June, July, August only. TWV work permit required (€66, 2–5 weeks). Employer applies. Multiple jobs cannot exceed 16 hrs total.',
    },
    {
      question: 'What is the Holland Scholarship for Netherlands?',
      answer: 'NL Scholarship: €5,000 one-time first year. For excellent non-EEA applicants to Bachelor/Master. ~2,112 awarded yearly. Leiden, Utrecht, TU Delft, EUR participate. Not full tuition—partial funding.',
    },
    {
      question: 'How long does Netherlands student visa take from Nepal?',
      answer: 'IND processing typically 4–12 weeks. University applies on your behalf. Apply well before course start. Collect permit at embassy or on arrival. No separate visa appointment—university handles IND submission.',
    },
    {
      question: 'Is study in Netherlands consultancy in Nepal helpful?',
      answer: 'Yes. Consultancy assists with university selection, proof of funds structure, document prep. San Marina: free consultation in Kathmandu, Baneshwor, Ghorahi, Itahari. 15+ years guiding Nepali students.',
    },
    {
      question: 'What is the Orientation Year visa in Netherlands?',
      answer: 'Orientation Year (zoekjaar) is a 12-month residence permit allowing non-EU graduates to search for work in the Netherlands. Unlimited labour market access, no work permit needed. Apply within 3 years of graduation. Fee €192. Per IND.',
    },
    {
      question: 'What are Netherlands visa rejection reasons for Nepali students?',
      answer: 'Insufficient proof of funds (tuition + €13,800), funds not in account 3+ months, weak sponsorship docs, missing TB certificate if required, unclear study plan. Ensure IND Form 7668 correctly completed for sponsorship.',
    },
    {
      question: 'How much money do I need to show for Netherlands student visa from Nepal?',
      answer: 'Tuition for first year plus €13,800 living (IND standard). Total €20,000–€38,000 for first year. Funds must be in account 3+ months. NPR equivalent ~29–54 lakhs (1 EUR ≈ 143 NPR).',
    },
    {
      question: 'When are Netherlands intakes and application deadlines?',
      answer: 'Two intakes: September (main) and February. Deadlines vary by university—typically Oct–Jan for Sept, Aug–Oct for Feb. Apply for accommodation immediately after admission—housing shortage.',
    },
  ],
};

const tuitionTable = [
  { level: 'EU/EEA', range: '€2,530/year', notes: 'Statutory fee' },
  { level: 'Bachelor (Non-EU)', range: '€6,000–€17,000/year', notes: 'Institutional; varies by university' },
  { level: 'Master (Non-EU)', range: '€6,000–€20,000/year', notes: 'Medicine/specialised higher' },
];

const comparisonData = [
  { country: 'Netherlands', countrySlug: null, tuition: '€6,000–€20,000', living: '€1,000–€1,700/mo', work: '16 hrs or Jun–Aug', psw: '12 months' },
  { country: 'Germany', countrySlug: '/study-abroad/eur/germany/', tuition: '€0 (most)', living: '€11,904/year', work: '20 hrs/week', psw: '18 months' },
  { country: 'Spain', countrySlug: '/study-abroad/eur/spain/', tuition: '€2,700–€9,300', living: '€800–€1,200/mo', work: '30 hrs/week', psw: '—' },
  { country: 'Italy', countrySlug: '/study-abroad/eur/italy/', tuition: '€1,000–€5,000', living: '€800–€1,500/mo', work: '20 hrs/week', psw: '—' },
];

export default function NetherlandsStudyPage() {
  const visaStepsWithText = [
    { name: 'Apply to Dutch universities (check deadlines per institution)', text: 'Feb/Sept intakes; deadlines vary.' },
    { name: 'Receive admission and pay tuition deposit', text: 'University will sponsor your residence permit.' },
    { name: 'Gather proof of funds (3+ months in account)', text: 'Tuition + €13,800 living (IND).' },
    { name: 'University submits application to IND on your behalf', text: 'MVV + residence permit; no embassy interview.' },
    { name: 'IND processes residence permit (typically 4–12 weeks)', text: 'Processing 4–12 weeks.' },
    { name: 'Collect permit at Dutch embassy/consulate or upon arrival', text: 'University coordinates collection.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Study in Netherlands from Nepal 2026 – Complete Guide',
        description: netherlandsData.description,
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: netherlandsData.author.name, url: 'https://www.sanmarina.edu.np', description: netherlandsData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'San Marina Education Consultancy',
        description: 'Best education consultancy in Nepal for Netherlands study abroad',
        url: 'https://www.sanmarina.edu.np',
        knowsAbout: ['Study in Netherlands from Nepal', 'Orientation Year', 'zoekjaar', 'IND', 'Holland Scholarship', 'Study in Netherlands without IELTS'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Apply for Netherlands Student Visa from Nepal',
        description: 'Step-by-step: university applies to IND, proof €13,800 living, tuition. MVV + residence permit. Per Study in Holland, IND 2026.',
        step: visaStepsWithText.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: netherlandsData.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 4, name: 'Netherlands', item: 'https://www.sanmarina.edu.np/study-abroad/eur/netherlands/' },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero – View Details for Netherlands CTA above the fold */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={netherlandsData.heroImage} alt="Nepali students studying in Netherlands - Amsterdam Rotterdam, study abroad 2026" fill className="object-cover" priority />
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
            <span className="text-white">Netherlands</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {netherlandsData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight flex items-center">
            Study in Netherlands <Image src='/assets/netherland.png' width={100} height={100} alt="uk flag" />
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
          <p className="text-sm text-blue-100 mt-4">Get a free 15-minute call with our Netherlands study experts. No obligation—perfect for Nepali students planning 2026.</p>
        </div>
      </section>

      {/* Trust + E-E-A-T + GEO Source Attribution */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Source: Study in Holland, IND, Nuffic.</strong> Proof €13,800 living; tuition €6,000–€20,000. Verify at <a href="https://www.studyinholland.nl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinholland.nl</a>, <a href="https://ind.nl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">ind.nl</a>, <a href="https://www.nuffic.nl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nuffic.nl</a>.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {netherlandsData.author.name} · {netherlandsData.author.role} · {netherlandsData.author.expertise}
          </p>
        </div>
      </section>

      {/* GEO: Key Facts 2026 */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#001F3F] mb-4 text-center">Study in Netherlands from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition (non-EU)</td><td className="p-3">€6,000–€20,000/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living proof (IND)</td><td className="p-3">€13,800/year</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Holland Scholarship</td><td className="p-3">€5,000 first year (partial)</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">University applies to IND; 4–12 weeks</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">16 hrs/week OR full-time Jun–Aug</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Orientation Year</td><td className="p-3">12 months post-graduation (zoekjaar)</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">English programmes</td><td className="p-3">2,000+ (Study in Holland)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Source: Study in Holland, IND. Verify at <a href="https://www.studyinholland.nl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinholland.nl</a>, <a href="https://ind.nl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">ind.nl</a>, <a href="https://www.nuffic.nl" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">nuffic.nl</a>.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: netherlandsData.stats.universities, label: 'Universities' },
              { value: netherlandsData.stats.internationalStudents, label: 'Int\'l Students' },
              { value: netherlandsData.stats.englishPrograms, label: 'English Programmes' },
              { value: netherlandsData.stats.orientationYear, label: 'Orientation Year' },
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

      {/* 1. Why Study in Netherlands */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Netherlands in 2026?</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> 2,000+ English programmes, post study work visa Netherlands 12 months (Orientation Year), Holland Scholarship €5,000, strong rankings (TU Delft, UvA, Leiden). Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link> (free tuition), <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, or <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline">Italy</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Study in Netherlands cost is higher than Italy or Spain but offers Orientation Year for job search. Nepali students choose Netherlands for engineering, business, and life sciences. Explore <Link href="/scholarships/" className="text-blue-600 hover:underline">scholarships</Link>.
        </p>
      </section>

      {/* 2. Is Studying in Netherlands Free? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Is Studying in Netherlands Free? Study in Netherlands for Free?</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> No. Non-EU students pay institutional tuition €6,000–€20,000/year. EU/EEA pay statutory €2,530. Study in Netherlands for free is not possible for Nepali students—but Holland Scholarship €5,000 and university merit grants reduce cost.
          </p>
          <p className="text-gray-700">
            Orange Knowledge Programme ended in 2024. Holland Scholarship (NL Scholarship) offers €5,000 first year. University-specific grants vary. Check StudyFinder on Study in NL.
          </p>
        </div>
      </section>

      {/* 3. Top Universities */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Netherlands (2026)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> University of Amsterdam (UvA), Erasmus University Rotterdam (EUR), Leiden University, TU Delft, Utrecht University, Vrije Universiteit Amsterdam. Strong in engineering, business, life sciences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Amsterdam (UvA)', city: 'Amsterdam', programs: 'All disciplines' },
            { name: 'Erasmus University Rotterdam', city: 'Rotterdam', programs: 'Business, Economics' },
            { name: 'Leiden University', city: 'Leiden', programs: 'Law, Sciences, Humanities' },
            { name: 'TU Delft', city: 'Delft', programs: 'Engineering, Technology' },
            { name: 'Utrecht University', city: 'Utrecht', programs: 'Sciences, Social Sciences' },
            { name: 'Vrije Universiteit Amsterdam', city: 'Amsterdam', programs: 'Business, Sciences' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Scholarships */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Scholarships to Study in Netherlands
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Holland Scholarship (NL Scholarship): €5,000 one-time first year for excellent non-EEA applicants. ~2,112 awarded yearly. University merit grants vary. Orange Knowledge Programme ended 2024. See <Link href="/scholarships/" className="text-blue-600 hover:underline">our scholarships page</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            StudyFinder on Study in NL lists programmes and funding. Leiden, Utrecht, TU Delft, EUR participate in Holland Scholarship. Requirements: excellent grades (e.g. 8.0/10 equivalent), no prior Dutch degree.
          </p>
          <div className="bg-white rounded-xl p-6 border border-green-200">
            <h3 className="font-bold text-[#001F3F] mb-3">Holland Scholarship at a Glance</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• €5,000 one-time (first year)</li>
              <li>• Non-EEA applicants to Bachelor/Master</li>
              <li>• Merit-based; ~2,112 awards/year</li>
              <li>• Partial funding—not full tuition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Post Study Work Visa - Orientation Year */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Post Study Work Visa in Netherlands: Orientation Year</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Orientation Year (zoekjaar): 12 months to search for work after graduation. Apply within 3 years of graduation. Unlimited labour market access—no separate work permit. Fee €192. Bachelor and Master graduates from Dutch universities eligible. Per IND.
          </p>
        <p className="text-gray-700 mb-4">
          <strong>Definition:</strong> The post study work visa in Netherlands—Orientation Year—is a residence permit (zoekjaar) for non-EU graduates. No job offer needed. Nepali students graduating from Dutch universities can apply. Graduates from top-200 foreign universities may also qualify. Minimum salary applies when you secure employment.
          </p>
        <ul className="space-y-1 text-gray-700">
          <li>• 12 months duration; apply within 3 years of graduation</li>
          <li>• Unlimited work—no TWV during Orientation Year</li>
          <li>• Fee €192; application via IND</li>
        </ul>
      </section>

      {/* 6. Study Without IELTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Netherlands Without IELTS</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Exemptions: prior English-medium degree, IB Diploma, education from UK/US/Australia/Canada/Ireland. Otherwise TOEFL 80–90, Cambridge C1/C2 180+, PTE, LanguageCert accepted. IELTS 6.0–6.5 typical. Check programme pages.
          </p>
          <p className="text-gray-700">
            Study in Netherlands without IELTS is possible with TOEFL or Cambridge. For <Link href="/services/" className="text-blue-600 hover:underline">IELTS and test preparation</Link> in Kathmandu, San Marina offers coaching.
          </p>
        </div>
      </section>

      {/* 7. Study in Netherlands Requirements */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Study in Netherlands Requirements</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Admission letter, passport, proof of funds (tuition + €13,800 living), health insurance, TB certificate if required. IELTS 6.0–6.5 or equivalent. University applies to IND; no separate visa appointment. Academic: 10+2 for Bachelor; Bachelor for Master.
          </p>
        <p className="text-gray-700 mb-4">
          Study in Netherlands requirements for Nepali students: funds must be in account 3+ months. Sponsorship via IND Form 7668 (Statement of Financial Support). Nepal is on the IND TB certificate list—Nepali applicants typically need a TB test from a designated clinic. University applies to IND on your behalf; no embassy interview.
          </p>
      </section>

      {/* 8. Cost + Proof of Funds */}
      <section className="py-16 bg-slate-50" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Study in Netherlands Cost from Nepal</h2>
          <p className="text-gray-700 mb-6 font-medium">
            <strong>Quick answer:</strong> First year €20,000–€38,000 (NPR 29–54 lakhs). Tuition €6,000–€20,000; living proof €13,800; airfare ~€800. Amsterdam highest; Eindhoven more affordable. Holland Scholarship €5,000 reduces first-year cost. 1 EUR ≈ 143 NPR. Compare with <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, <Link href="/study-abroad/eur/spain/" className="text-blue-600 hover:underline">Spain</Link>, or <Link href="/study-abroad/uk/" className="text-blue-600 hover:underline">UK</Link>.
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
                <tr className="border-b"><td className="p-3">Tuition (Bachelor)</td><td className="p-3">€6,000–€17,000</td><td className="p-3">8.6–24.3L</td></tr>
                <tr className="border-b"><td className="p-3">Tuition (Master)</td><td className="p-3">€6,000–€20,000</td><td className="p-3">8.6–28.6L</td></tr>
                <tr className="border-b"><td className="p-3">Living (IND proof)</td><td className="p-3">€13,800</td><td className="p-3">19.7L</td></tr>
                <tr className="border-b"><td className="p-3">Airfare</td><td className="p-3">~€800</td><td className="p-3">1.1L</td></tr>
                <tr><td className="p-3 font-medium">Total first year</td><td className="p-3 font-medium">€20,000–€38,000</td><td className="p-3 font-medium">29–54L</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Tuition Fees</h3>
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

          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Accommodation for Nepali Students</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm max-w-2xl">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-3 text-left">City / Type</th><th className="p-3 text-left">Monthly (approx)</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3">Amsterdam (shared)</td><td className="p-3">€500–900</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Rotterdam (shared)</td><td className="p-3">€450–800</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3">Eindhoven, Utrecht</td><td className="p-3">€400–700</td></tr>
                <tr><td className="p-3">Student housing</td><td className="p-3">€400–700</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-amber-800 bg-amber-50 rounded-lg p-3 mb-6"><strong>Housing tip:</strong> Netherlands has a severe student housing shortage. Apply for accommodation as soon as you receive admission. Universities and SSH (student housing) offer limited spots—register early.</p>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Proof of Funds (IND 2026)</h3>
        <p className="text-gray-700 mb-4">
          <strong>Netherlands requires tuition plus €13,800 per year for living (IND standard).</strong> For Nepali students: funds must be in account 3+ months. Accept: bank statements, sponsorship (IND Form 7668), education loan, scholarship. NPR equivalent ~19.7 lakhs for living alone; add tuition. TB certificate and No Objection Certificate (NOC) from Nepal MoE may be required—check IND and university checklist.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <DollarSign className="text-[#0056b3] mb-2" size={24} />
              <p className="font-bold">Living Proof (IND)</p>
              <p className="text-lg font-bold">€13,800/year</p>
              <p className="text-sm text-gray-600">NPR ~19.7L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <GraduationCap className="text-green-600 mb-2" size={24} />
              <p className="font-bold">Tuition (Non-EU)</p>
              <p className="text-lg font-bold">€6,000–€20,000</p>
              <p className="text-sm text-gray-600">NPR 8.6–28.6L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Award className="text-amber-600 mb-2" size={24} />
              <p className="font-bold">Holland Scholarship</p>
              <p className="text-lg font-bold">€5,000</p>
              <p className="text-sm text-gray-600">First year only</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <Plane className="text-cyan-600 mb-2" size={24} />
              <p className="font-bold">Airfare</p>
              <p className="text-lg font-bold">~€800</p>
              <p className="text-sm text-gray-600">NPR 1.1L</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mt-8 mb-4">Living Cost by City</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Amsterdam (Highest)</p>
              <p className="text-lg font-bold">€1,000–€1,700/mo</p>
              <p className="text-sm text-gray-600">NPR 1.4–2.4L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Rotterdam</p>
              <p className="text-lg font-bold">€900–€1,500/mo</p>
              <p className="text-sm text-gray-600">NPR 1.3–2.1L</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F]">Eindhoven (More affordable)</p>
              <p className="text-lg font-bold">€800–€1,400/mo</p>
              <p className="text-sm text-gray-600">NPR 1.1–2.0L</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intakes & Application Deadlines */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Netherlands Intakes and Application Deadlines</h2>
          <p className="text-gray-700 mb-6">
            <strong>Quick answer:</strong> Two intakes: September (main) and February. Application deadlines vary by university—typically Oct–Jan for Sept intake, Aug–Oct for Feb intake. Apply early; IND processing 4–12 weeks. Apply for housing immediately after admission—student housing is scarce.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead><tr className="bg-[#001F3F] text-white"><th className="p-4 text-left">Intake</th><th className="p-4 text-left">Classes Begin</th><th className="p-4 text-left">Application Window</th><th className="p-4 text-left">IND Window</th></tr></thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4 font-semibold">Autumn (main)</td><td className="p-4">Sept</td><td className="p-4">Oct–Jan</td><td className="p-4">May–Aug</td></tr>
                <tr><td className="p-4 font-semibold">Spring</td><td className="p-4">Feb</td><td className="p-4">Aug–Oct</td><td className="p-4">Nov–Jan</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9 & 10. Visa Process + Documents */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Netherlands Student Visa Process (Step-by-Step)</h2>
        <p className="text-gray-700 mb-6 font-medium">
          <strong>Quick answer:</strong> Apply to university → receive admission → gather proof of funds → university submits to IND (MVV + residence permit) → 4–12 weeks processing → collect permit. University handles IND application; no embassy visa interview.
          </p>
        <ol className="space-y-3 max-w-2xl mb-8">
          {netherlandsData.visaSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-[#0056b3] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Common Netherlands Visa Mistakes for Nepali Students</h3>
        <ul className="text-gray-700 mb-8 space-y-2 list-disc list-inside">
          <li>Insufficient proof of funds (must show tuition + €13,800 living)</li>
          <li>Funds not in account 3+ months before application</li>
          <li>Weak or incomplete sponsorship docs (IND Form 7668)</li>
          <li>Missing TB certificate (Nepal on IND list)</li>
          <li>Missing No Objection Certificate (NOC) from Nepal MoE if required</li>
          <li>Applying too late—allow 4–12 weeks for IND</li>
        </ul>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Required Documents</h3>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700">
          {netherlandsData.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* 11. Work While Studying */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work While Studying in Netherlands</h2>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            <strong>Quick answer:</strong> Non-EU: 16 hrs/week during term OR full-time in June, July, August only. TWV work permit required (employer applies, €66). Multiple jobs cannot exceed 16 hrs total.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 16 hrs/week during academic year</li>
            <li>• OR full-time Jun–Aug (choose one)</li>
            <li>• TWV required; health insurance if employed</li>
          </ul>
        </div>
      </section>

      {/* 12. Advantages & Disadvantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Advantages & Disadvantages of Studying in Netherlands</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-600" size={22} /> Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 2,000+ English programmes</li>
                <li>• Orientation Year 12 months</li>
                <li>• Holland Scholarship €5,000</li>
                <li>• Strong rankings (TU Delft, UvA)</li>
                <li>• University applies to IND</li>
                <li>• Schengen access</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#001F3F] mb-4 flex items-center gap-2"><Clock className="text-amber-600" size={22} /> Disadvantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Higher tuition vs Italy/Spain</li>
                <li>• €13,800 living proof required</li>
                <li>• Amsterdam housing costly</li>
                <li>• 16 hrs work limit (or Jun–Aug only)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Netherlands vs Germany vs Spain vs Italy */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-8 text-center">Netherlands vs Germany vs Spain vs Italy – 2026</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-4 text-left">Country</th>
                <th className="p-4 text-left">Tuition</th>
                <th className="p-4 text-left">Living</th>
                <th className="p-4 text-left">Work</th>
                <th className="p-4 text-left">PSW</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 13. Why Choose Our Consultancy */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Choose Our Consultancy in Nepal for Netherlands?</h2>
        <p className="text-gray-700 mb-4">
          San Marina guides university selection, proof of funds structure (tuition + €13,800), IND Form 7668 for sponsorship, document prep. <Link href="/about/" className="text-blue-600 hover:underline">QEAC & PIER certified</Link>. We help with Holland Scholarship applications and visa readiness.
        </p>
        <p className="text-gray-700 mb-4">
          Students from Kathmandu, Baneshwor, Ghorahi, and Itahari rely on us for study in Netherlands from Nepal guidance.
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>• Free first consultation</li>
          <li>• University and scholarship guidance</li>
          <li>• Proof of funds and IND prep</li>
          <li>• Pre-departure support</li>
        </ul>
        <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#004494] transition-all">
          Book a Free Consultation
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Study in Netherlands FAQs</h2>
          <p className="text-gray-600 mb-8">Common questions about study in Netherlands from Nepal in 2026</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={netherlandsData.faqs} />
          </div>
        </div>
      </section>

      {/* CTA – View Details for Netherlands + conversion */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Netherlands Study Journey Today</h2>
          <p className="text-blue-200 mb-6">
            You&apos;re viewing the full study in Netherlands from Nepal 2026 guide. Get expert guidance on costs, Orientation Year, and scholarships. Free consultation in Kathmandu.
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
          <p className="text-sm text-blue-300">Compare: <Link href="/study-abroad/eur/germany/" className="underline hover:text-white">Germany</Link> · <Link href="/study-abroad/eur/fr/" className="underline hover:text-white">France</Link> · <Link href="/study-abroad/eur/spain/" className="underline hover:text-white">Spain</Link> · <Link href="/study-abroad/eur/italy/" className="underline hover:text-white">Italy</Link> · <Link href="/study-abroad/uk/" className="underline hover:text-white">UK</Link> · <Link href="/study-abroad/aus/" className="underline hover:text-white">Australia</Link> · <Link href="/study-abroad/can/" className="underline hover:text-white">Canada</Link> · <Link href="/scholarships/" className="underline hover:text-white">Scholarships</Link></p>
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
            <Link href="/study-abroad/eur/spain/" className="text-blue-600 font-semibold hover:underline">Spain</Link>
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
