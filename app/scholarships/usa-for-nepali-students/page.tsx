import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Scholarships in USA for Nepali Students 2026 | Fulbright, Merit & Full Funding',
  description: 'Scholarships in USA for Nepali students 2026: Fulbright, merit-based, full scholarship for international students. F1 visa, SAT, cost in NPR. Free consultation.',
  keywords: 'scholarships for international students in usa, scholarships in usa, full scholarship for nepali students in usa, universities in usa for international students with scholarship, full scholarships for international students in usa, how to get full scholarship in usa for international students, mbbs in usa with scholarship, scholarship for master degree in usa, scholarship for masters in usa, undergraduate scholarships for international students in usa',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/usa-for-nepali-students/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/scholarships/usa-for-nepali-students/',
    title: 'Scholarships in USA for Nepali Students 2026 | Fulbright & Full Funding',
    description: 'Complete guide: scholarships in USA, Fulbright, F1 visa, SAT, cost in NPR. Nepal-specific application steps.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-03-07',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarships in USA for Nepali Students 2026',
    description: 'Fulbright, merit scholarships, full funding. F1 visa, SAT. Free consultation.',
  },
};

// Official sources: EducationUSA, US Embassy Nepal, Fulbright/USEF Nepal, Study in the States (DHS), USCIS. 1 USD ≈ 135 NPR (Feb 2026)
const pageData = {
  lastUpdated: 'February 2026',
  sevis: 350,
  visa: 185,
  usdToNpr: 135,
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  faqs: [
    {
      question: 'Is USA good for Nepali students with scholarship?',
      answer: 'Yes. Scholarships in USA for Nepali students include Fulbright (full funding for Master\'s), university merit awards ($3,000–$28,000/year), and need-based aid. Full scholarship for nepali students in usa through Fulbright covers tuition, living, and travel. Universities in USA for international students with scholarship: University of Alabama, Baylor, Iowa State, Texas Tech, and 200+ more. STEM OPT offers 36 months post-graduation work. Source: USEF Nepal, EducationUSA.',
    },
    {
      question: 'Can I study in USA without IELTS from Nepal?',
      answer: 'Some universities waive IELTS with prior English-medium education or alternative proof. Most require TOEFL 79+ or IELTS 6.5+. Scholarship for masters in usa and undergraduate scholarships for international students in usa typically need English proficiency. Check each university. Source: EducationUSA, university admissions offices.',
    },
    {
      question: 'How much bank balance is required for USA student visa from Nepal?',
      answer: 'Financial proof must cover first-year tuition plus living costs. Typical range: $25,000–$65,000 (NPR 33–88 lakhs). Cheapest universities in USA for Nepali students may require $19,000–$28,000. Documents: bank statements under 12 months old, sponsor affidavit. DSO verifies before I-20. Source: Study in the States (DHS), US Embassy.',
    },
    {
      question: 'How to get full scholarship in USA after +2 from Nepal?',
      answer: 'Apply for undergraduate scholarships for international students in usa: SAT 1200+ for merit awards, strong 10+2 grades (75%+), leadership/activities. Universities in USA for international students with scholarship: Alabama (up to $28,000/year for 1420+ SAT), Baylor, Iowa State, Texas Tech. Fulbright requires bachelor\'s. Start 12–18 months before Fall intake. Source: EducationUSA, university scholarship pages.',
    },
    {
      question: 'What are the cheapest universities in USA for Nepali students?',
      answer: 'Brigham Young University (~$4,200/year tuition), Delta State (~$4,700), Dakota State (~$8,000), Jacksonville State (~$8,700), University of Central Missouri (~$9,200). Total cost $19,000–$28,000/year including living. Community colleges $8,000 or less before transfer. Source: U.S. News, university financial aid offices.',
    },
    {
      question: 'What is the USA student visa success rate from Nepal?',
      answer: 'Rates vary by applicant profile. Strong applications with clear financial proof, genuine student intent, and complete documents have higher approval. US Embassy Kathmandu conducts interviews. Common rejection: insufficient funds, weak ties to Nepal, unclear study plans. Consultancy helps with document prep and interview coaching.',
    },
    {
      question: 'What are the F1 visa requirements for Nepali students 2026?',
      answer: 'F1 visa requirements 2026: I-20 from SEVP university, valid passport, SEVIS $350 + MRV $185, financial proof (1 year tuition + living), TOEFL/IELTS, academic transcripts. Interview at US Embassy Kathmandu. DS-160 form, I-901 SEVIS payment. Processing 1–3 weeks. Source: US Department of State, Study in the States.',
    },
    {
      question: 'What is the cost of studying in USA for Nepali students?',
      answer: 'First year: $26,000–$80,000 (NPR 35–108 lakhs). Tuition $15,000–60,000; living $10,000–18,000; SEVIS $350; visa $185; airfare ~$1,200. Cheapest total ~$25,000. 1 USD ≈ 135 NPR. Scholarship for master degree in usa can reduce or eliminate tuition. Source: EducationUSA, university cost of attendance.',
    },
    {
      question: 'What is the SAT requirement for scholarship in USA?',
      answer: 'SAT requirement for scholarship in USA: merit awards typically 1190–1400+. University of Alabama: 1200–1250 = $6,000/yr; 1420–1600 = $28,000/yr. Baylor, Iowa State, Texas Tech, University of Missouri offer automatic merit. Test-optional schools may still award larger scholarships for strong SAT. Source: EducationUSA, university scholarship pages.',
    },
    {
      question: 'What is the Fall intake 2026 deadline for USA universities?',
      answer: 'Fall intake 2026: most deadlines November 2025–March 2026. Early decision/action often November; regular January–February. Fulbright 2026–27: April 30, 2025. Start 12–18 months ahead. Classes begin August/September 2026. Source: EducationUSA, university admissions.',
    },
    {
      question: 'How to get full scholarship in USA for international students?',
      answer: 'Apply Fulbright (USEF Nepal, April deadline), university merit (SAT 1280+), need-based aid, graduate assistantships. Full scholarships for international students in usa: Fulbright covers all costs; some universities offer full-ride for exceptional profiles. MBA: merit + assistantships. MBBS in USA with scholarship: limited; medical school rarely offers full funding. Source: Fulbright, EducationUSA.',
    },
    {
      question: 'What is MBBS in USA with scholarship?',
      answer: 'MBBS in USA: medical school (MD) is 4 years post-bachelor\'s. Scholarship options limited; most are loans. Some universities offer partial merit aid. Total cost $200,000–400,000+. Better scholarship options: Bachelor\'s in pre-med, then MD. Alternative: Caribbean or European medical schools with lower cost. Source: AAMC, university financial aid.',
    },
  ],
};

export default function USAScholarshipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Scholarships in USA for Nepali Students 2026 – Complete Guide',
        description: 'Fulbright, merit scholarships, full funding. F1 visa, SAT, cost in NPR. Free consultation.',
        datePublished: '2026-02-17',
        dateModified: '2026-02-17',
        author: { '@type': 'Organization', name: pageData.author.name, url: 'https://www.sanmarina.edu.np' },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'FAQPage',
        mainEntity: pageData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Scholarships', item: 'https://www.sanmarina.edu.np/scholarships/' },
          { '@type': 'ListItem', position: 3, name: 'Scholarships in USA for Nepali Students', item: 'https://www.sanmarina.edu.np/scholarships/usa-for-nepali-students/' },
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
          <Image src="/assets/newyork.jpg" alt="Scholarships in USA for Nepali students - Fulbright, merit, study abroad 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/scholarships/" className="hover:text-white">Scholarships</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">USA for Nepali Students</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scholarships in USA for Nepali Students
            <br />
            <span className="text-blue-300">2026 – Fulbright, Merit & Full Funding Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Full scholarship for nepali students in usa, Fulbright, and universities in USA for international students with scholarship. F1 visa, SAT, cost in NPR. Step-by-step application from Nepal.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /><span>WhatsApp Us</span>
            </a>
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Free Scholarship Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from EducationUSA, US Embassy Nepal, Fulbright/USEF Nepal, Study in the States (DHS), USCIS.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {pageData.author.name} · {pageData.author.role} · {pageData.author.expertise}
          </p>
        </div>
      </section>

      {/* Featured Snippet */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Quick Answer</h2>
          <p className="text-gray-700 mb-4">
            <strong>Scholarships in USA for Nepali students 2026:</strong> Full scholarship for nepali students in usa includes Fulbright (deadline April 30, 2025 for 2026–27) covering all Master&apos;s costs. Scholarships for international students in usa also include merit awards: SAT 1200–1400+ can secure $6,000–$28,000/year at universities like Alabama, Baylor, Iowa State. How to get full scholarship in usa for international students: apply Fulbright via USEF Nepal, university merit (SAT, GPA), or graduate assistantships. Financial proof for F1: 1 year tuition + living ($25,000–$65,000). 1 USD ≈ 135 NPR.
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Fulbright: April 30, 2025 for Fall 2026; full funding (USEF Nepal)</li>
            <li>F1: SEVIS $350 + MRV $185; financial proof required (Study in the States)</li>
            <li>Fall 2026: apply Nov 2025–Mar 2026; classes Aug/Sep 2026</li>
            <li>1 USD ≈ 135 NPR (Feb 2026)</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '$6K–28K', label: 'Merit Scholarship/year' },
              { value: 'April 30', label: 'Fulbright 2026 Deadline' },
              { value: '1200+', label: 'SAT for Merit' },
              { value: '36 mo', label: 'STEM OPT' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why USA */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why USA Is a Top Destination for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          The United States hosts the world&apos;s largest international student population and offers unparalleled scholarship diversity—from government-funded Fulbright to university merit awards and graduate assistantships. For Nepali students willing to work hard on their applications, the USA can be surprisingly affordable.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>World&apos;s #1 ranked universities:</strong> MIT, Harvard, Stanford, Caltech—plus hundreds of affordable state universities with excellent programmes</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>STEM OPT advantage:</strong> 36-month post-study work authorisation for STEM graduates—the longest in any major study destination</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Generous merit scholarships:</strong> SAT 1420+ at University of Alabama = $28,000/year automatic merit award</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Graduate assistantships:</strong> Many Master&apos;s and PhD students receive full tuition waiver + monthly stipend in exchange for research/teaching</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Fulbright programme:</strong> Fully funded Master&apos;s—Nepal consistently gets 4+ nominees per cycle through USEF Nepal</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Cultural diversity:</strong> 900,000+ international students; strong Nepali diaspora community across major cities</span></li>
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          Read our full <Link href="/study-abroad/usa/" className="text-blue-600 hover:underline font-medium">Study in USA guide</Link> for tuition, visa, and university-specific details.
        </p>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarships for International Students in USA – Complete Breakdown</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Fulbright – Full Scholarship for Nepali Students</h3>
            <p className="text-gray-700 mb-3">
              Fulbright offers full scholarships for international students in usa. For Nepali students: apply via USEF Nepal. Deadline April 30, 2025 for 2026–27. Covers tuition, living, travel. Requirements: 16 years education (4-year Bachelor), 60% or 3.0 GPA, TOEFL/IELTS and GRE (if selected). Approximately 4 nominees. Excludes Medicine and Nursing. Source: USEF Nepal, Fulbright.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">University Merit Scholarships</h3>
            <p className="text-gray-700 mb-3">
              Universities in USA for international students with scholarship: automatic merit based on SAT and GPA. University of Alabama: 1420+ SAT = $28,000/year. Baylor: $3,000–15,000. Iowa State: $2,000–10,000. Texas Tech: $4,000–9,000. SAT requirement for scholarship in USA: typically 1190–1400+. Undergraduate scholarships for international students in usa widely available. Source: EducationUSA, university scholarship pages.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Scholarship for Master Degree in USA / MBA</h3>
            <p className="text-gray-700">
              Scholarship for masters in usa: graduate assistantships (tuition waiver + stipend), merit awards, Fulbright. MBA: merit-based; GRE/GMAT strong scores help. Full scholarships for international students in usa at Master&apos;s level: Fulbright, some university full-rides. How to get full scholarship in usa for international students: apply early, strong academic record, clear research/career goals. Source: EducationUSA, Fulbright.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">MBBS in USA with Scholarship</h3>
            <p className="text-gray-700">
              MBBS in USA: medical school is MD (4 years post-bachelor&apos;s). Scholarship options limited; most funding is loans. Some partial merit aid. Cheapest path: pre-med Bachelor&apos;s at affordable university, then MD. Total medical education $200,000–400,000+. Source: AAMC.
            </p>
          </div>
        </div>
      </section>

      {/* Graduate Assistantships */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Graduate Assistantships – The Hidden Full Scholarship</h2>
          <p className="text-gray-700 mb-4">
            Graduate assistantships (GAs) are one of the most overlooked pathways to study in the USA for free. Many Nepali students at the Master&apos;s and PhD level receive <strong>full tuition waivers plus a monthly living stipend</strong> in exchange for teaching or research work at the university.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-[#001F3F] mb-2">Teaching Assistantship (TA)</h3>
              <p className="text-gray-700 text-sm">Assist professors with undergraduate courses, grading, and lab sessions. Typically requires strong English and subject expertise. Stipend: $800–$2,500/month + tuition waiver.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-[#001F3F] mb-2">Research Assistantship (RA)</h3>
              <p className="text-gray-700 text-sm">Work with a faculty supervisor on funded research projects. Common in STEM, social sciences, engineering. Stipend: $1,000–$3,000/month + tuition waiver.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-[#001F3F] mb-2">Graduate Assistantship (GA)</h3>
              <p className="text-gray-700 text-sm">Administrative or departmental support role. Less competitive than TA/RA. Available across all fields. Partial to full tuition waiver + modest stipend.</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">How to apply: Email professors directly with your CV and research interests 9–12 months before your intended start. Strong GRE/GMAT and GPA significantly improve your chances. Source: EducationUSA, individual university FA offices.</p>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Eligibility Requirements for USA Scholarships</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Fulbright Eligibility (Nepal)</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Nepali citizenship; residing in Nepal at time of application</li>
                <li>16 years of education (4-year Bachelor&apos;s degree equivalent)</li>
                <li>Minimum 60% GPA or 3.0/4.0 equivalent</li>
                <li>TOEFL iBT 79+ or IELTS 6.5+ (tested after selection)</li>
                <li>Not currently enrolled in a US degree programme</li>
                <li>Medicine and Nursing excluded from Fulbright Nepal</li>
                <li>Deadline: April 30, 2025 for 2026–27 cycle (apply at USEF Nepal)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">University Merit Scholarship Eligibility (Undergraduate)</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>SAT 1200–1400+ for significant merit awards</li>
                <li>Strong 10+2 grades (75%+ recommended)</li>
                <li>IELTS 6.5 or TOEFL 79+ typically required</li>
                <li>Leadership activities, extracurriculars strengthen profile</li>
                <li>Apply 12–18 months before Fall 2026 intake (Aug/Sep 2026)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Graduate Assistantship Eligibility</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Strong academic record (GPA 3.0+/4.0)</li>
                <li>GRE / GMAT scores (programme-specific)</li>
                <li>Research experience or published work advantageous</li>
                <li>Direct communication with faculty supervisor strongly recommended</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Source: USEF Nepal, EducationUSA, university scholarship pages. Requirements vary—verify directly with each institution.</p>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Documents Required for USA Scholarship Application</h2>
        <p className="text-gray-700 mb-4">Prepare these 12–18 months before your intended start date. Incomplete applications are rejected without review.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Valid passport (6+ months validity)</li>
            <li>Academic transcripts (all years)</li>
            <li>Bachelor&apos;s degree certificate (notarised)</li>
            <li>SAT / GRE / GMAT score report</li>
            <li>IELTS / TOEFL score report</li>
            <li>Statement of Purpose (SOP) / Personal Statement</li>
          </ul>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>2–3 recommendation letters</li>
            <li>CV / résumé (academic format)</li>
            <li>Financial documents (bank statements, 12 months old max)</li>
            <li>Sponsor affidavit (if funded by family)</li>
            <li>Research proposal (for PhD / RA positions)</li>
            <li>Passport-sized photographs</li>
          </ul>
        </div>
        <p className="text-gray-500 text-sm mt-3">For Fulbright: apply via USEF Nepal. For F1 visa: SEVIS $350 + MRV $185. Source: USEF Nepal, Study in the States.</p>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Studying in USA for Nepali Students (2026)</h2>
          <p className="text-gray-700 mb-4">
            How much bank balance is required for USA student visa from Nepal? First-year tuition + living. Cheapest universities in USA for Nepali students: total $19,000–$28,000. Typical: $26,000–$80,000.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">USD</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tuition (annual)</td><td className="p-3">15,000–60,000</td><td className="p-3">20–81 lakhs</td></tr>
                <tr className="border-b"><td className="p-3">Living (annual)</td><td className="p-3">10,000–18,000</td><td className="p-3">13–24 lakhs</td></tr>
                <tr className="border-b"><td className="p-3">SEVIS fee</td><td className="p-3">350</td><td className="p-3">47,250</td></tr>
                <tr className="border-b"><td className="p-3">MRV visa fee</td><td className="p-3">185</td><td className="p-3">24,975</td></tr>
                <tr className="border-b"><td className="p-3">Airfare (round trip)</td><td className="p-3">~1,200</td><td className="p-3">1.6 lakhs</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">1 USD ≈ 135 NPR. Source: Study in the States, EducationUSA.</p>
        </div>
      </section>

      {/* Step-by-Step Application */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">How to Apply to USA from Nepal Step by Step</h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li><strong>Choose universities:</strong> Use EducationUSA, Common App, or direct applications. Fall intake 2026 deadline for USA universities: Nov 2025–Mar 2026.</li>
          <li><strong>Prepare tests:</strong> SAT (bachelor&apos;s) or GRE/GMAT (master&apos;s). IELTS 6.5+ or TOEFL 79+. SAT requirement for scholarship in USA: 1200+ for merit.</li>
          <li><strong>Submit applications</strong> with transcripts, essays, recommendations.</li>
          <li><strong>Receive admission and I-20</strong> from SEVP-certified university.</li>
          <li><strong>Pay SEVIS $350</strong> and complete DS-160. Pay MRV $185.</li>
          <li><strong>Gather financial proof:</strong> bank statements under 12 months, sponsor affidavit. How much bank balance: 1 year tuition + living.</li>
          <li><strong>Attend visa interview</strong> at US Embassy Kathmandu. F1 visa requirements for Nepali students 2026: I-20, passport, financial docs, academic records.</li>
        </ol>
      </section>

      {/* F1 Visa Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">F1 Visa Process Step-by-Step for Nepal</h2>
          <p className="text-gray-700 mb-4">
            F1 visa requirements for Nepali students 2026: I-20, valid passport (6+ months), SEVIS $350, MRV $185, financial proof covering first year, TOEFL/IELTS, academic transcripts. Book interview at US Embassy Kathmandu. DS-160 confirmation, I-901 receipt. Processing typically 1–3 weeks. USA student visa success rate from Nepal improves with complete documents and genuine student narrative. Source: US Department of State, Study in the States.
          </p>
        </div>
      </section>

      {/* Tips to Increase Chances */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Tips to Increase Your Scholarship Chances in USA</h2>
          <ol className="text-gray-700 space-y-3 list-decimal list-inside">
            <li><strong>Start 18 months early:</strong> Fulbright and most merit scholarships require nearly 2 years of preparation from consideration to enrolment</li>
            <li><strong>Maximise your SAT score:</strong> Every 100 points above the threshold can add thousands of dollars in annual merit aid at test-optional and merit-heavy universities</li>
            <li><strong>Write a specific SOP per university:</strong> Generic Statements of Purpose are the #1 reason for rejection from competitive programmes—tailor it to each professor&apos;s research</li>
            <li><strong>Email professors directly:</strong> For TA/RA positions, a personalised email with your CV to 15–20 professors dramatically increases assistantship chances</li>
            <li><strong>Apply to a balanced portfolio:</strong> Apply to 5–10 universities: 2 reach, 4 target, 2 safety—maximise scholarship at safety schools</li>
            <li><strong>Pursue Fulbright simultaneously:</strong> Fulbright and university applications are not mutually exclusive; apply to both in the same cycle</li>
            <li><strong>Highlight Nepal-specific community work:</strong> US universities reward leadership, volunteering, and community impact—Nepali applicants with earthquake relief or rural development work stand out</li>
            <li><strong>Consider community college + transfer:</strong> 2-year community college ($8,000–$12,000) with transfer to top universities is a proven affordable pathway</li>
          </ol>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Common Mistakes Nepali Students Make Applying for USA Scholarships</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Applying to Only &ldquo;Brand Name&rdquo; Universities</h3>
            <p className="text-gray-700 text-sm">Harvard and MIT rarely give full scholarships to international students. Universities like University of Alabama, Baylor, Iowa State offer far more generous automatic merit awards to Nepali students with strong SAT scores.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Missing Fulbright Deadlines</h3>
            <p className="text-gray-700 text-sm">Fulbright Nepal deadline (April 30) is missed by hundreds of eligible students every year. Start preparing your research proposal and recommendations 6+ months before the deadline.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Insufficient Financial Documentation</h3>
            <p className="text-gray-700 text-sm">Weak financial proof is the most common reason for F1 visa rejection from Nepal. US Embassy Kathmandu requires clear evidence of first-year costs ($25,000+) from a reputable bank with 12-month history.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Underestimating STEM OPT Value</h3>
            <p className="text-gray-700 text-sm">Many students choose non-STEM fields without realising that STEM OPT (36 months) is one of the most valuable career advantages for Nepali graduates in the USA—enabling multiple H-1B lottery chances.</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">Avoid these costly mistakes with expert guidance. <Link href="/consultation/" className="text-blue-600 hover:underline font-medium">Book a free consultation</Link> with our USA scholarship specialists in Kathmandu.</p>
      </section>

      {/* SAT & IELTS */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">SAT & IELTS Requirements</h2>
        <p className="text-gray-700 mb-4">
          <strong>SAT requirement for scholarship in USA:</strong> Merit awards typically 1190–1400+. Alabama 1420+ = $28,000/yr; 1200–1250 = $6,000/yr. Can I study in USA without IELTS from Nepal? Some universities waive with English-medium proof; most need IELTS 6.5+ or TOEFL 79+. Scholarship for masters in usa: GRE required by many; GMAT for MBA.
        </p>
      </section>

      {/* CPT & OPT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">CPT & OPT Work Rights</h2>
          <p className="text-gray-700">
            CPT (Curricular Practical Training): off-campus internships related to major, typically after 9 months. OPT: 12 months post-graduation; 36 months for STEM. No separate work permit. On-campus: 20 hrs/week during term. Per USCIS. STEM OPT supports H-1B pathway for many Nepali graduates.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">USA vs UK vs Germany – Cost Difference</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Country</th>
                <th className="p-3 text-left">Tuition (Annual)</th>
                <th className="p-3 text-left">Living (Annual)</th>
                <th className="p-3 text-left">PSW</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-3 font-semibold">USA</td><td className="p-3">$15,000–60,000</td><td className="p-3">$10,000–18,000</td><td className="p-3">12–36 mo (STEM)</td></tr>
              <tr className="border-b"><td className="p-3">UK</td><td className="p-3">£10,000–38,000</td><td className="p-3">£10,539–13,761</td><td className="p-3">2–3 years</td></tr>
              <tr className="border-b"><td className="p-3">Germany</td><td className="p-3">€0 (most)</td><td className="p-3">€11,904</td><td className="p-3">18 months</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mt-4">
          USA has higher tuition but more scholarship opportunities and longest STEM OPT. Germany lowest cost; UK mid-range. Full scholarship for nepali students in usa via Fulbright makes USA affordable. Source: EducationUSA, DAAD, UKVI.
        </p>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={pageData.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply for Scholarships in USA?</h2>
          <p className="text-blue-200 mb-8">
            Our experts help with Fulbright applications, university selection, and F1 visa preparation. Free consultation in Kathmandu, Baneshwor, Ghorahi, and Itahari.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/study-abroad/usa/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Study in USA Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
