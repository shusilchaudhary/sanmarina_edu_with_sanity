import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Italy Scholarships for Nepali Students',
  description: 'Scholarship in Italy for Nepali students 2026: DSU regional scholarships, Italian government PhD, study in Italy scholarships. Cost in NPR, visa steps. Public universities with low tuition. Free consultation.',
  keywords: 'scholarship in italy for nepali students, scholarships for international students in italy, study in italy scholarships, scholarship in italy, government phd scholarship in italy, phd scholarships in italy, scholarship in italy for international students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/italy-for-nepali-students/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/scholarships/italy-for-nepali-students/',
    title: 'Scholarship in Italy for Nepali Students 2026 | DSU, PhD & Masters',
    description: 'DSU regional scholarships, Italian government PhD. Cost in NPR, visa, residence permit. Nepal-specific guide.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-26',
    modifiedTime: '2026-03-07',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship in Italy for Nepali Students 2026',
    description: 'DSU, government PhD, study in Italy scholarships. Tuition €700–€1,300. Cost in NPR.',
  },
};

// Official sources: Study in Italy (studyinitaly.esteri.it), Italian Ministry (MAECI), DSU regional portals (ER.GO, EDISU Piemonte, LazioDisco), Italian consulates. 1 EUR ≈ 143 NPR (Feb 2026)
const pageData = {
  lastUpdated: 'February 2026',
  proofYearly: 6079,
  proofMonthly: 507,
  tuitionLowHDI: 700,
  tuitionOther: 1300,
  livingMin: 700,
  livingMax: 1500,
  dsuCash: 7000,
  govPhdStipend: 900,
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  faqs: [
    {
      question: 'Is Italy good for Nepali students?',
      answer: 'Yes. Scholarship in Italy for Nepali students includes DSU regional scholarships (up to €7,000+/year cash, tuition waiver, free meals), Italian government PhD scholarship (€900/month), and low public tuition (€700–€1,300/year for developing countries). Public universities in Italy with low tuition fees: 90+ institutions. Cost of living in Italy for Nepali students: €700–€1,500/month. Work 20 hrs/week. Source: studyinitaly.esteri.it, MAECI.',
    },
    {
      question: 'How much bank balance is required for Italy student visa from Nepal?',
      answer: 'Bank balance required for Italy student visa from Nepal: €6,079.45 per year (€506.62/month) minimum. Recommended €8,000–€12,000 for stronger applications. Provide 6-month bank statements stamped by branch manager; sponsor documents if applicable. 1 EUR ≈ 143 NPR (NPR ~8.7 lakhs/year minimum). Source: Italian consulate checklists, vistoperitalia.it.',
    },
    {
      question: 'What is the cost of living in Italy for Nepali students?',
      answer: 'Cost of living in Italy for Nepali students: €700–€1,500/month (NPR 1–2.15 lakhs). Milan and Rome €1,200–€1,600; Bologna, Pisa, Padua cheaper. Rent €300–€850; food €150–€300; transport €20–€60. DSU scholarship Italy can cover much of this. Public tuition €700–€1,300/year for Nepal. First year total: €10,000–€25,000. Source: studyinitaly.esteri.it, regional DSU portals.',
    },
    {
      question: 'What is the Italy student visa process from Nepal step by step?',
      answer: 'Italy student visa process from Nepal step by step: 1) Apply to Italian universities (Dec–March for Sept; Universitaly pre-enrollment). 2) Get admission/pre-enrollment. 3) Obtain Declaration of Value (DoV) or CIMEA. 4) Gather proof of funds (€6,079+/year), bank statements, insurance. 5) Book VFS Global Kathmandu; submit Type D visa application. 6) Processing up to 90 days. Consulate General of Italy (Kolkata) processes. 7) Collect permit; apply for Permesso di Soggiorno within 8 days of arrival. Source: visa.vfsglobal.com, studyinitaly.esteri.it.',
    },
    {
      question: 'What is DSU scholarship Italy eligibility?',
      answer: 'DSU scholarship Italy eligibility: All nationalities eligible. ISEE (Equivalent Financial Situation Indicator) threshold varies by region (e.g. Lombardy ~€26,500). Provide legalized income/asset documents translated to Italian. First-year: meet entry requirements. Later years: minimum credits. Apply via regional bodies (ER.GO, EDISU Piemonte, LazioDisco, DSU Toscana, etc.) typically June–September. Benefits: up to €7,000+ cash, tuition waiver, free canteen meals. Source: polimi.it, edisu.piemonte.it.',
    },
    {
      question: 'Which public universities in Italy have low tuition fees?',
      answer: 'Public universities in Italy with low tuition fees: Non-EU from low-HDI countries (e.g. Nepal) pay ~€700/year; other non-EU €1,300. University of Milan, Sapienza Rome, Bologna, Padua, Pisa, Turin, Naples. Fees vary by ISEE. DSU scholarship Italy covers tuition for eligible students. Check each university and region. Source: unimi.it, unive.it, studyinitaly.esteri.it.',
    },
    {
      question: 'Can I study in Italy without IELTS from Nepal?',
      answer: 'IELTS not required for Italian visa. For English-taught programmes: universities may accept TOEFL, Cambridge, or prior English-medium degree. Government PhD scholarship in Italy requires B2 English for research. For Italian programmes: B2 Italian (CILS, CELI). Scholarship in Italy for international students: DSU and government scholarships have their own language criteria. Source: studyinitaly.esteri.it.',
    },
    {
      question: 'What is the September intake 2026 Italy deadline?',
      answer: 'September intake 2026 Italy deadline: Non-EU abroad typically apply December 2025–March 2026. Universitaly pre-enrollment often by April–July. Some universities (e.g. Milano-Bicocca) require earlier applications for non-EU. Italian government scholarship for 2026/27: typically May (check studyinitaly.esteri.it). DSU deadlines June–September per region. Source: universitaly.it, apply.unimib.it.',
    },
    {
      question: 'What is scholarship in Italy for Nepali students?',
      answer: 'Scholarship in Italy for Nepali students: 1) DSU regional scholarships—up to €7,000+ cash, tuition waiver, meals; apply per region. 2) Italian government scholarship (MAECI)—€900/month for PhD; apply studyinitaly.esteri.it; typically May deadline. 3) University merit awards. 4) Erasmus Mundus. Study in Italy scholarships cover tuition and living for eligible candidates. Source: esteri.it, studyinitaly.esteri.it.',
    },
    {
      question: 'What are scholarships for international students in Italy?',
      answer: 'Scholarships for international students in Italy: DSU (Diritto allo Studio Universitario) regional—ISEE-based; cash + tuition + meals. Italian government (MAECI)—PhD, Master, courses; €900/month for PhD. University-specific merit. Erasmus Mundus. Scholarship in Italy for international students: DSU and MAECI are main options. Nepal eligible. Source: esteri.it, studyinitaly.esteri.it.',
    },
    {
      question: 'What is government PhD scholarship in Italy?',
      answer: 'Government PhD scholarship in Italy: Italian Ministry of Foreign Affairs (MAECI) offers €900/month for 9 months, tuition covered, health insurance. Under 30 at deadline. Apply via studyinitaly.esteri.it. Must have PhD admission from Italian university. PhD scholarships in Italy also from universities and Research Council. Deadline typically May. Source: esteri.it, studyinitaly.esteri.it.',
    },
    {
      question: 'What are PhD scholarships in Italy?',
      answer: 'PhD scholarships in Italy: Government (MAECI) €900/month; university-funded positions; Italian Research Council. PhD scholarships in Italy often advertised as paid research positions. Apply through university PhD programmes and studyinitaly.esteri.it for government awards. Tuition often waived for PhD. Source: studyinitaly.esteri.it, dottorato.polimi.it.',
    },
  ],
};

export default function ItalyScholarshipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Scholarship in Italy for Nepali Students 2026 – Complete Guide',
        description: 'DSU, government PhD, study in Italy scholarships. Tuition €700–€1,300. Cost in NPR.',
        datePublished: '2026-02-26',
        dateModified: '2026-02-26',
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
          { '@type': 'ListItem', position: 3, name: 'Scholarship in Italy for Nepali Students', item: 'https://www.sanmarina.edu.np/scholarships/italy-for-nepali-students/' },
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
          <Image src="/assets/italy.webp" alt="Scholarship in Italy for Nepali students - DSU, Rome Milan, study abroad 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/scholarships/" className="hover:text-white">Scholarships</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Italy for Nepali Students</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scholarship in Italy for Nepali Students
            <br />
            <span className="text-blue-300">2026 – DSU, Government PhD & Masters Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Scholarships for international students in Italy. Study in Italy scholarships: DSU regional, government PhD scholarship in Italy. Cost in NPR, visa steps. Public universities with low tuition.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/977015927731" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /><span>WhatsApp Us</span>
            </a>
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              Free Scholarship Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from Study in Italy (studyinitaly.esteri.it), Italian Ministry (MAECI), DSU regional portals, Italian consulates.</strong> Verify with official sources before applying.
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
            <strong>Scholarship in Italy for Nepali students 2026:</strong> DSU regional scholarships—up to €7,000+ cash, tuition waiver, free meals; all nationalities eligible; apply per region June–September. Government PhD scholarship in Italy (MAECI): €900/month; apply studyinitaly.esteri.it; typically May deadline. Public tuition €700–€1,300/year for developing countries. Bank balance required: €6,079/year minimum. Italy student visa from Nepal: VFS Kathmandu; processing up to 90 days. Cost of living in Italy for Nepali students: €700–€1,500/month. 1 EUR ≈ 143 NPR.
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Public tuition (Nepal): €700–€1,300/year (studyinitaly.esteri.it)</li>
            <li>DSU: up to €7,000+ cash + tuition waiver + meals</li>
            <li>Government PhD: €900/month; May deadline</li>
            <li>Proof of funds: €6,079/year (Italian consulate)</li>
            <li>1 EUR ≈ 143 NPR (Feb 2026)</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '€700–1.3k', label: 'Tuition/Year (Public)' },
              { value: '€7k+', label: 'DSU Cash Max' },
              { value: '€900/mo', label: 'Gov PhD Stipend' },
              { value: '20 hrs', label: 'Work/Week' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Italy */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Italy Is an Excellent Choice for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          Italy offers one of the most generous combinations of low tuition fees and income-based scholarships (DSU) in Europe. Nepali students from low-HDI countries benefit from a reduced tuition rate of just €700–€1,300 per year at public universities—comparable to a single semester&apos;s fees in Austria or the UK. Add the regional DSU scholarship (up to €7,000+ cash + tuition waiver + free meals), and Italy becomes one of the most affordable European study destinations.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Lowest EU tuition for Nepali students:</strong> €700–€1,300/year at 90+ public universities thanks to Nepal&apos;s low-HDI status</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>DSU regional scholarships:</strong> Up to €7,000+ annual cash + full tuition waiver + free canteen meals for eligible students</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>World-class engineering and design:</strong> Politecnico di Milano, Sapienza Rome, University of Bologna (oldest in the world, founded 1088)</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Government PhD scholarship:</strong> Italian Ministry (MAECI) offers €900/month + tuition waiver for PhD candidates under 30</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Low visa funds required:</strong> Minimum €6,079/year (NPR ~8.7 lakhs)—among the lowest of any European study destination</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Rich culture and lifestyle:</strong> Vibrant cities, excellent food, world-class art—Italy consistently rates among the most popular student destinations globally</span></li>
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          Read our full <Link href="/study-abroad/eur/italy/" className="text-blue-600 hover:underline font-medium">Study in Italy guide</Link> for admission, visa, and university-specific details.
        </p>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarship in Italy – Complete Breakdown</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">DSU Regional Scholarships</h3>
            <p className="text-gray-700 mb-3">
              DSU (Diritto allo Studio Universitario) scholarships for international students in Italy are run by each region. DSU scholarship Italy eligibility: all nationalities; ISEE (income) threshold varies (e.g. Lombardy ~€26,500). Provide legalized income/asset docs in Italian. Benefits: up to €7,000+ annual cash, 100% tuition waiver, free canteen meals. Regional bodies: ER.GO (Emilia-Romagna), EDISU Piemonte, LazioDisco, DSU Toscana, ESU Veneto. Apply June–September via regional Bandi. Study in Italy scholarships. Source: polimi.it, edisu.piemonte.it, studyinitaly.esteri.it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Italian Government Scholarship (MAECI)</h3>
            <p className="text-gray-700 mb-3">
              Government PhD scholarship in Italy: Italian Ministry of Foreign Affairs offers €900/month (paid quarterly) for PhD candidates. Tuition covered, health insurance included. Under 30 at deadline; must have PhD admission. Apply via studyinitaly.esteri.it. Deadline typically May. Also available for Master and short courses. PhD scholarships in Italy from government cover 9 months, renewable. Source: esteri.it, studyinitaly.esteri.it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">University Scholarships & Erasmus Mundus</h3>
            <p className="text-gray-700">
              Scholarship in Italy for international students: universities offer merit and need-based awards. Erasmus Mundus Joint Master Degrees include Italian universities; fully funded. Public universities in Italy with low tuition fees (€700–€1,300 for Nepal) make study affordable even without DSU. Check individual university websites. Source: studyinitaly.esteri.it.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Eligibility Requirements for Scholarship in Italy</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">DSU Scholarship Eligibility</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>All nationalities eligible—Nepal is fully qualified</li>
                <li>ISEE (equivalent income) below regional threshold (e.g. Lombardy ~€26,500)</li>
                <li>Provide legalised income and asset documents translated to Italian</li>
                <li>First-year students: meet course entry requirements</li>
                <li>Subsequent years: minimum credit hours earned (varies by region)</li>
                <li>Apply via regional bodies (ER.GO, EDISU Piemonte, LazioDisco): June–September</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Italian Government PhD Scholarship (MAECI) Eligibility</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Under 30 years of age at application deadline</li>
                <li>PhD admission from an Italian university</li>
                <li>B2 English proficiency for research-in-English programmes</li>
                <li>Strong research proposal aligned with supervisor&apos;s area</li>
                <li>Deadline: typically May each year (studyinitaly.esteri.it)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Source: studyinitaly.esteri.it, MAECI, regional DSU portals. Requirements vary by region and university.</p>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Documents Required for Italy Scholarship &amp; Visa Application</h2>
        <p className="text-gray-700 mb-4">Italy requires a Declaration of Value (DoV) or CIMEA recognition for Nepali degrees—get this from the Italian Consulate in Kolkata (which handles Nepal). Start at least 3 months early.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Valid passport (6+ months validity)</li>
            <li>Academic transcripts (legalised + translated to Italian)</li>
            <li>Degree certificate (Declaration of Value from Italian Consulate)</li>
            <li>IELTS / TOEFL or Italian B2 certificate (programme-specific)</li>
            <li>Motivation letter / research proposal (PhD)</li>
            <li>2–3 recommendation letters</li>
          </ul>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Pre-enrollment confirmation from Universitaly</li>
            <li>Proof of funds: €6,079+/year (6-month bank statements)</li>
            <li>Health insurance proof</li>
            <li>Accommodation proof (if available)</li>
            <li>Income/asset documents (for DSU ISEE—legalised, translated to Italian)</li>
            <li>Passport-sized photographs</li>
          </ul>
        </div>
        <p className="text-gray-500 text-sm mt-3">DSU application: submit via regional body portal (June–September). Visa: VFS Kathmandu, Type D. Source: studyinitaly.esteri.it, Italian consulate.</p>
      </section>

      {/* Tips to Increase Chances */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Tips to Increase Your Scholarship Chances in Italy</h2>
          <ol className="text-gray-700 space-y-3 list-decimal list-inside">
            <li><strong>Apply for DSU as soon as it opens:</strong> Regional DSU openings are competitive—some regions exhaust funds early in the allocation period</li>
            <li><strong>Choose Bologna, Pisa, or Turin over Milan/Rome:</strong> These cities have lower cost of living while maintaining top university rankings—DSU cash goes further</li>
            <li><strong>Prepare ISEE documents meticulously:</strong> Any error in income/asset documentation can disqualify you from DSU—work with a professional translator familiar with Italian tax requirements</li>
            <li><strong>Pre-enroll on Universitaly early:</strong> Non-EU students must pre-enroll through the Universitaly portal before applying for a study visa—delays close this window</li>
            <li><strong>For PhD: secure supervisor first:</strong> Italian government PhD scholarship requires PhD admission from an Italian university—contact supervisors 6–8 months before the May deadline</li>
            <li><strong>Apply Erasmus Mundus simultaneously:</strong> Many Erasmus Mundus Joint Master Degrees include Italian universities and offer full EU funding—apply by January–March deadlines</li>
            <li><strong>Learn basic Italian:</strong> Even A1–A2 Italian opens access to thousands more programmes and significantly strengthens DSU applications</li>
          </ol>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Common Mistakes Nepali Students Make Applying for Italy Scholarships</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Skipping the Declaration of Value</h3>
            <p className="text-gray-700 text-sm">Italy requires a Declaration of Value (DoV) from the Italian Consulate in Kolkata to recognise Nepali degrees. Without this, your visa will be rejected. It takes 4–8 weeks to obtain.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Applying for DSU With Wrong ISEE Documents</h3>
            <p className="text-gray-700 text-sm">DSU disqualification due to incorrect income documents is extremely common among Nepali students. All financial documents must be legalised, translated to Italian, and match the specific ISEE format required.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Missing Universitaly Pre-enrollment</h3>
            <p className="text-gray-700 text-sm">Non-EU students must complete Universitaly pre-enrollment before applying for a study visa. Missing this step (or doing it late) prevents visa issuance, even with full scholarship confirmation.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Applying for Permesso Too Late</h3>
            <p className="text-gray-700 text-sm">Students must apply for Permesso di Soggiorno within 8 days of arrival in Italy. Missing this deadline creates serious legal complications and can jeopardise study status.</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">Our Italy specialists at San Marina have guided dozens of Nepali students through DSU applications, Declaration of Value, and Universitaly. <Link href="/consultation/" className="text-blue-600 hover:underline font-medium">Book a free consultation</Link>.</p>
      </section>

      {/* Bachelor Masters PhD */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Bachelor, Masters & PhD in Italy</h2>
          <p className="text-gray-700 mb-4">
            Scholarships for international students in Italy at all levels. Bachelor: DSU eligibility; tuition €700–€1,300 (Nepal). Master: DSU, government short courses, university merit. PhD: government PhD scholarship in Italy (€900/month), university-funded positions. Study in Italy scholarships apply to 90+ public universities. Source: studyinitaly.esteri.it.
          </p>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Living in Italy for Nepali Students (2026)</h2>
        <p className="text-gray-700 mb-4">
          How much bank balance is required for Italy student visa from Nepal? Minimum €6,079/year. Living €700–€1,500/month.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Item</th>
                <th className="p-3 text-left">EUR</th>
                <th className="p-3 text-left">NPR (approx)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-3">Tuition (public, Nepal)</td><td className="p-3">700–1,300</td><td className="p-3">1–1.86L</td></tr>
              <tr className="border-b"><td className="p-3">Living (monthly)</td><td className="p-3">700–1,500</td><td className="p-3">1–2.15L</td></tr>
              <tr className="border-b"><td className="p-3">Proof of funds (yearly)</td><td className="p-3">6,079+</td><td className="p-3">~8.7L</td></tr>
              <tr className="border-b"><td className="p-3">Visa fee</td><td className="p-3">50</td><td className="p-3">~7k</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">1 EUR ≈ 143 NPR. Source: Italian consulate, studyinitaly.esteri.it.</p>
      </section>

      {/* Visa Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Italy Student Visa Process from Nepal (Step by Step)</h2>
          <ol className="space-y-4 list-decimal list-inside text-gray-700">
            <li><strong>Apply to universities:</strong> December–March for September intake 2026. Pre-enroll on Universitaly.</li>
            <li><strong>Get admission</strong> and pre-enrollment confirmation.</li>
            <li><strong>Obtain Declaration of Value (DoV)</strong> or CIMEA for qualifications.</li>
            <li><strong>Gather documents:</strong> Passport, proof of funds €6,079+/year (6-month bank statements), health insurance, accommodation proof.</li>
            <li><strong>Book VFS Kathmandu;</strong> submit Type D (study) visa application. Visa fee €50.</li>
            <li><strong>Processing:</strong> Up to 90 days. Consulate General of Italy (Kolkata) processes Nepal applications.</li>
            <li><strong>After arrival:</strong> Apply for Permesso di Soggiorno within 8 days at Questura.</li>
          </ol>
        </div>
      </section>

      {/* Work Rights */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work Rights During Study</h2>
        <p className="text-gray-700">
          Up to 20 hours per week (1,040 hours per year). Work during holidays counts toward annual limit. Valid residence permit (Permesso di Soggiorno) required. Can convert to work permit if offered full-time job. Common sectors: hospitality, retail, English tutoring. Source: Italian immigration, yesmilano.it.
        </p>
      </section>

      {/* Italy vs Germany */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Italy vs Germany – Tuition Difference</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Country</th>
                  <th className="p-3 text-left">Tuition (Annual)</th>
                  <th className="p-3 text-left">Living (Monthly)</th>
                  <th className="p-3 text-left">Scholarships</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-semibold">Italy</td><td className="p-3">€700–€1,300</td><td className="p-3">€700–€1,500</td><td className="p-3">DSU, MAECI</td></tr>
                <tr className="border-b"><td className="p-3">Germany</td><td className="p-3">€0 (most)</td><td className="p-3">€934/mo blocked</td><td className="p-3">DAAD</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4">
            Italy charges low tuition for Nepal; Germany is tuition-free. Italy has DSU and government PhD; Germany has DAAD. Both offer strong scholarship in Italy for international students and study in Italy scholarships. Source: studyinitaly.esteri.it, daad.de.
          </p>
        </div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply for Scholarship in Italy?</h2>
          <p className="text-blue-200 mb-8">
            Our experts help with DSU applications, Declaration of Value, and Italy student visa from Nepal. Free consultation in Kathmandu, Baneshwor, Dang, and Itahari.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/study-abroad/eur/italy/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Study in Italy Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
