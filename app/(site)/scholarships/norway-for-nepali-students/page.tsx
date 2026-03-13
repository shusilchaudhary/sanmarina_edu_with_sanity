import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Norway Scholarships for Nepali Students',
  description: 'Scholarship in Norway for Nepali students 2026: Norwegian Quota Scheme, BI Presidential, PhD in Norway scholarship. How to get scholarship in Norway. Masters degree in Norway with scholarship. Cost in NPR, residence permit. Free consultation.',
  keywords: 'scholarship in norway for nepali students, how to apply for scholarship in norway, how to get scholarship in norway, masters degree in norway with scholarship, phd in norway scholarship, cosopo scholarship in norway, forestry master degree scholarship in norway, forestry scholarship in norway, full scholarships university in norway, international scholarship to study in norway',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/norway-for-nepali-students/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/scholarships/norway-for-nepali-students/',
    title: 'Scholarship in Norway for Nepali Students 2026 | Quota, PhD, Masters',
    description: 'How to get scholarship in Norway. Norwegian Quota, BI Presidential, PhD. Cost in NPR, residence permit. Nepal-specific visa guide.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-26',
    modifiedTime: '2026-03-07',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship in Norway for Nepali Students 2026',
    description: 'Norwegian Quota, BI Presidential, PhD. Tuition policy, cost in NPR, residence permit.',
  },
};

// Official sources: studyinnorway.no, udi.no (Norwegian Directorate of Immigration), Norwegian Ministry of Education, University of Oslo, NTNU, NMBU, BI. 1 NOK ≈ 10.5 NPR (Feb 2026)
const pageData = {
  lastUpdated: 'February 2026',
  proofOfFunds: 166859,
  proofMonthly: 15169,
  livingMin: 12000,
  livingMax: 18000,
  tuitionMin: 80000,
  tuitionMax: 400000,
  permitFee: 1100,
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  faqs: [
    {
      question: 'Is Norway free for Nepali students?',
      answer: 'Not anymore. From autumn 2023, non-EU/EEA students (including Nepali) pay tuition NOK 80,000–400,000/year at Norwegian public universities. EU/EEA/Swiss study free. Scholarship in Norway for Nepali students: Norwegian Quota Scheme (full tuition + NOK 12,000/month) and BI Presidential (full tuition + living stipend) can cover costs. Source: studyinnorway.no, Norwegian Ministry of Education.',
    },
    {
      question: 'What is the cost of living in Norway for Nepali students?',
      answer: 'Cost of living in Norway for Nepali students: NOK 12,000–18,000/month (NPR 1.26–1.89 lakhs). Oslo highest; Bergen, Trondheim, smaller cities lower. UDI minimum proof: NOK 166,859/year (NOK 15,169/month). Includes rent NOK 5,000–9,000, food NOK 3,000–5,000, transport, insurance. 1 NOK ≈ 10.5 NPR. Source: studyinnorway.no, udi.no.',
    },
    {
      question: 'What is the Norway student visa process from Nepal?',
      answer: 'Norway student visa process from Nepal: 1) Apply to Norwegian universities (each has own portal). 2) Receive admission, pay tuition if required. 3) Apply for residence permit online at udi.no. 4) Pay fee NOK 1,100, upload documents (admission, proof of funds NOK 166,859/year, tuition payment). 5) Book appointment at VFS Global Kathmandu for biometrics. 6) Processing 2–3 months. Norwegian Embassy New Delhi processes. Source: udi.no, norway.no/nepal.',
    },
    {
      question: 'What is residence permit for study in Norway?',
      answer: 'Residence permit for study in Norway: Required for stays longer than 90 days. Apply at udi.no. Requirements: admission to accredited institution, proof of funds NOK 166,859/year, tuition payment (non-EU), passport, insurance. Submit via VFS Kathmandu. Work up to 20 hrs/week during term; full-time during holidays. Post-study: 1-year job-search permit (2 years for PhD). Source: udi.no.',
    },
    {
      question: 'How much bank balance is required for Norway student visa from Nepal?',
      answer: 'Bank balance required for Norway student visa from Nepal: NOK 166,859 per academic year (NOK 15,169/month). Per semester: autumn NOK 75,845, spring NOK 91,014. Funds must be in applicant or sponsor name; Norwegian bank or institution deposit account accepted. 1 NOK ≈ 10.5 NPR (NPR ~17.5 lakhs/year). Source: udi.no, nmbu.no, uio.no.',
    },
    {
      question: 'Can I study in Norway without IELTS from Nepal?',
      answer: 'IELTS not required for Norwegian visa. For English programmes: universities may accept TOEFL, Cambridge, Duolingo, or prior English-medium degree. Masters degree in Norway with scholarship: BI Presidential requires IELTS 6.5 or TOEFL 90. Norwegian Quota per-university. Check studyinnorway.no and each programme. Source: studyinnorway.no.',
    },
    {
      question: 'What is the winter intake 2026 Norway deadline?',
      answer: 'Winter intake 2026 Norway: Spring semester starts January. Application deadlines typically August–September 2025 (fewer programmes than autumn). Autumn 2026 (August start): apply November 2025–January 2026. No central portal; each university sets deadlines. Non-EU often earlier. Source: studyinnorway.no, samordnaopptak.no.',
    },
    {
      question: 'What is scholarship in Norway for Nepali students?',
      answer: 'Scholarship in Norway for Nepali students: 1) Norwegian Quota Scheme—full tuition, NOK 12,000/month, travel, insurance; Nepal eligible; apply via universities. 2) BI Presidential Scholarship—full tuition + NOK 50,000/semester living; deadline March 1, 2026. 3) PhD in Norway scholarship—fully-funded positions at UiO, NTNU; apply via jobbnorge.no. Source: studyinnorway.no, bi.no, udi.no.',
    },
    {
      question: 'How to get scholarship in Norway?',
      answer: 'How to get scholarship in Norway: 1) Norwegian Quota—apply through participating university; Nepal eligible; strong academic record. 2) BI Presidential—apply with MSc application; min GPA A; March 1 deadline. 3) University-specific—check studyinnorway.no, each institution. 4) PhD—search jobbnorge.no, ntnu.edu/vacancies; supervisors fund positions. International scholarship to study in norway: Quota and BI are main options for Nepali students. Source: studyinnorway.no, bi.no.',
    },
    {
      question: 'What is masters degree in Norway with scholarship?',
      answer: 'Masters degree in Norway with scholarship: Norwegian Quota Scheme (tuition + NOK 12,000/month), BI Presidential (full tuition + NOK 50,000/semester). Tuition for non-EU: NOK 80,000–400,000/year. Full scholarships university in Norway: Quota and BI cover full tuition. Apply per university; deadlines Nov–Jan for autumn. Source: studyinnorway.no, bi.no.',
    },
    {
      question: 'What is PhD in Norway scholarship?',
      answer: 'PhD in Norway scholarship: PhD candidates are typically employed as research fellows (paid positions). University of Oslo and NTNU advertise fully-funded PhD positions on jobbnorge.no and university vacancies. No separate scholarship application—apply for advertised positions. Often tuition-free; salary NOK 500,000+/year. Deadline varies; check ntnu.edu/vacancies, uio.no. Source: ntnu.edu/phd, jobbnorge.no.',
    },
    {
      question: 'What is forestry scholarship in Norway / forestry master degree scholarship in Norway?',
      answer: 'Forestry scholarship in Norway: NMBU (Norwegian University of Life Sciences) offers forestry and environmental programmes. Forestry master degree scholarship in Norway: NORSTIP (NMBU) was discontinued. Check NMBU for university-specific funding; Norwegian Quota applies if eligible. Cosopo scholarship in Norway may refer to NORPART or bilateral projects—verify at studyinnorway.no, nmbu.no. Source: nmbu.no, studyinnorway.no.',
    },
  ],
};

export default function NorwayScholarshipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Scholarship in Norway for Nepali Students 2026 – Complete Guide',
        description: 'Norwegian Quota, BI Presidential, PhD. Tuition policy, cost in NPR, residence permit.',
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
          { '@type': 'ListItem', position: 3, name: 'Scholarship in Norway for Nepali Students', item: 'https://www.sanmarina.edu.np/scholarships/norway-for-nepali-students/' },
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
          <Image src="/assets/norway.webp" alt="Scholarship in Norway for Nepali students - Quota Scheme, Oslo, study abroad 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/scholarships/" className="hover:text-white">Scholarships</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Norway for Nepali Students</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scholarship in Norway for Nepali Students
            <br />
            <span className="text-blue-300">2026 – Quota Scheme, PhD & Masters Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            How to get scholarship in Norway. Masters degree in Norway with scholarship, PhD in Norway scholarship. Norwegian Quota, BI Presidential. Cost in NPR, residence permit. Step-by-step from Nepal.
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

      {/* Trust */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from studyinnorway.no, udi.no (Norwegian Directorate of Immigration), Norwegian Ministry of Education, University of Oslo, NTNU, NMBU, BI.</strong> Verify with official sources before applying.
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
            <strong>Scholarship in Norway for Nepali students 2026:</strong> Norwegian Quota Scheme—full tuition, NOK 12,000/month, travel; Nepal eligible. BI Presidential—full tuition + NOK 50,000/semester; March 1, 2026 deadline. PhD in Norway scholarship: fully-funded positions at UiO, NTNU (jobbnorge.no). From 2023, non-EU pay tuition NOK 80,000–400,000/year. Bank balance required: NOK 166,859/year. Residence permit via udi.no, VFS Kathmandu. Cost of living in Norway for Nepali students: NOK 12,000–18,000/month. 1 NOK ≈ 10.5 NPR.
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Tuition (non-EU from 2023): NOK 80,000–400,000/year (studyinnorway.no)</li>
            <li>Norwegian Quota: Full tuition + NOK 12,000/mo; Nepal eligible</li>
            <li>BI Presidential: March 1, 2026; full tuition + living</li>
            <li>Proof of funds: NOK 166,859/year (udi.no)</li>
            <li>1 NOK ≈ 10.5 NPR (Feb 2026)</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 'NOK 166k', label: 'Proof of Funds/Year' },
              { value: 'NOK 12k/mo', label: 'Quota Stipend' },
              { value: 'Mar 1', label: 'BI Presidential Deadline' },
              { value: '1 yr', label: 'Post-Study' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Norway */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Norway Is a Top Choice for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          Norway consistently ranks among the world&apos;s most liveable countries and is home to internationally respected universities. Despite the 2023 tuition introduction for non-EU students, Norway remains one of the most scholarship-accessible destinations for Nepali students—thanks to the Norwegian Quota Scheme and BI Presidential award.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>World-class universities:</strong> University of Oslo (ranked #135 QS 2025), NTNU, UiB—research-intensive and globally recognized</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Norwegian Quota Scheme:</strong> Full tuition + NOK 12,000/month stipend for developing countries including Nepal</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Safe, high-quality living:</strong> Norway ranks #1 in Human Development Index; Nepali students report very high safety and quality of life</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Post-study opportunities:</strong> 1-year job-search permit (2 years for PhD); EU Blue Card pathway possible</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>English-taught programmes:</strong> 1,000+ programmes in English; no Norwegian required for many Master&apos;s degrees</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Strong research culture:</strong> Ideal for PhD candidates; funded positions at UiO, NTNU, and NMBU</span></li>
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          Read our full <Link href="/study-abroad/eur/norway/" className="text-blue-600 hover:underline font-medium">Study in Norway guide</Link> for admission, visa, and university-specific details.
        </p>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarship in Norway – Complete Breakdown</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Norwegian Quota Scheme (Government)</h3>
            <p className="text-gray-700 mb-3">
              The Norwegian Quota Scheme is the main government scholarship for developing countries. Nepal is eligible. How to apply for scholarship in Norway via Quota: apply through participating universities when applying for admission. Covers full tuition, monthly living (approx NOK 12,000), travel, health insurance, settling allowance. Structured as 30% grant, 70% loan—loan waived if you return home after studies. Bachelor, Master, PhD. Under 35 for Master; no prior Norway study. International scholarship to study in Norway. Source: studyinnorway.no, Norwegian Ministry of Education.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">BI Presidential Scholarship (University)</h3>
            <p className="text-gray-700 mb-3">
              BI Norwegian Business School: Full tuition for up to 2 years plus NOK 50,000 per semester living stipend for international students. Min GPA A (ECTS); GMAT 555+ or GRE Quant 158+; IELTS 6.5 or TOEFL 90. Deadline March 1, 2026. Apply with MSc application. Masters degree in Norway with scholarship. Full scholarships university in Norway. Source: bi.no.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">PhD in Norway Scholarship</h3>
            <p className="text-gray-700 mb-3">
              PhD in Norway scholarship: PhD candidates are employed as research fellows (salaried). Fully-funded positions at University of Oslo, NTNU advertised on jobbnorge.no and university vacancy pages. No separate scholarship—apply for advertised positions. Salary typically NOK 500,000+/year. How to get scholarship in Norway for PhD: search jobbnorge.no, ntnu.edu/vacancies, uio.no. Source: ntnu.edu/phd, jobbnorge.no.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Forestry & NMBU (Forestry Master Degree Scholarship in Norway)</h3>
            <p className="text-gray-700">
              Forestry scholarship in Norway: NMBU (Norwegian University of Life Sciences) offers forestry and environmental master programmes. Forestry master degree scholarship in Norway: NORSTIP (NMBU) has been discontinued. Check NMBU for current funding; Norwegian Quota applies if programme participates. Cosopo scholarship in Norway may refer to bilateral projects—verify at studyinnorway.no, nmbu.no. Source: nmbu.no, studyinnorway.no.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Eligibility Requirements for Scholarship in Norway</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Norwegian Quota Scheme Eligibility</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Citizen of a developing country (Nepal is eligible)</li>
                <li>Under 35 years of age for Master&apos;s programmes</li>
                <li>Strong academic record—upper quartile of class preferred</li>
                <li>No prior study in Norway (first-time applicants prioritised)</li>
                <li>Apply through the participating Norwegian university at time of admission</li>
                <li>English proficiency: IELTS 6.0+ or TOEFL 80+ (programme-specific)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">BI Presidential Scholarship Eligibility</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Minimum GPA: A grade (ECTS scale); equivalent to First Division</li>
                <li>GMAT 555+ or GRE Quant 158+</li>
                <li>IELTS 6.5 or TOEFL iBT 90+</li>
                <li>Apply simultaneously with MSc application at bi.no</li>
                <li>Deadline: March 1, 2026 for autumn 2026 entry</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">PhD in Norway Eligibility</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Master&apos;s degree in a relevant field (120 ECTS or equivalent)</li>
                <li>Strong research proposal aligned with supervisor&apos;s area</li>
                <li>Contact potential supervisors at UiO, NTNU before applying</li>
                <li>Apply for advertised funded positions on jobbnorge.no</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Source: studyinnorway.no, bi.no, udi.no. Requirements may vary by programme—always verify on official university websites.</p>
        </div>
      </section>

      {/* Tuition Policy Clarification */}
      <section className="py-16 bg-amber-50 border border-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Norway Public University Tuition Policy (2023 Update)</h2>
          <p className="text-gray-700 mb-4">
            <strong>Important:</strong> From autumn 2023, non-EU/EEA students pay tuition at Norwegian public universities. EU/EEA/Swiss study free. Tuition NOK 80,000–400,000/year depending on university and programme. UiO: NOK 120,000–150,000; NTNU: NOK 150,000–200,000; NMBU: NOK 80,000–275,000; Nord: NOK 110,000–140,000. Exchange students and some PhD positions often exempt. Scholarship in Norway for Nepali students can cover tuition (Quota, BI). Source: studyinnorway.no, nord.no, nmbu.no.
          </p>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Documents Required for Norway Scholarship Application</h2>
        <p className="text-gray-700 mb-4">Prepare these documents 6–12 months before your intended start date. Missing documents are the most common cause of application delays.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Valid passport (6+ months validity)</li>
            <li>Academic transcripts and degree certificates</li>
            <li>Bachelor&apos;s degree certificate (notarised translation)</li>
            <li>CV / résumé (academic and professional)</li>
            <li>Motivation letter / Statement of Purpose</li>
            <li>2–3 recommendation letters</li>
          </ul>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>IELTS / TOEFL / Cambridge English score</li>
            <li>GMAT / GRE score (BI Presidential)</li>
            <li>Research proposal (for PhD positions)</li>
            <li>Proof of funds: NOK 166,859/year (bank statements)</li>
            <li>Health insurance certificate</li>
            <li>Passport-sized photographs</li>
          </ul>
        </div>
        <p className="text-gray-500 text-sm mt-3">For Norwegian Quota, documents are submitted through the university portal. For residence permit: udi.no. Source: udi.no, studyinnorway.no.</p>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Living in Norway for Nepali Students (2026)</h2>
          <p className="text-gray-700 mb-4">
            Bank balance required for Norway student visa from Nepal: NOK 166,859/year (NOK 15,169/month). Living costs typically NOK 12,000–18,000/month.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">NOK</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tuition (non-EU, yearly)</td><td className="p-3">80,000–400,000</td><td className="p-3">8.4–42L</td></tr>
                <tr className="border-b"><td className="p-3">Living (monthly)</td><td className="p-3">12,000–18,000</td><td className="p-3">1.26–1.89L</td></tr>
                <tr className="border-b"><td className="p-3">Proof of funds (yearly)</td><td className="p-3">166,859</td><td className="p-3">~17.5L</td></tr>
                <tr className="border-b"><td className="p-3">Residence permit fee</td><td className="p-3">1,100</td><td className="p-3">~12k</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">1 NOK ≈ 10.5 NPR. Source: udi.no, studyinnorway.no.</p>
        </div>
      </section>

      {/* Visa + Residence Permit */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Norway Student Visa Process from Nepal (Step by Step)</h2>
        <p className="text-gray-700 mb-4">
          Residence permit for study in Norway. Apply online at udi.no; submit via VFS Global Kathmandu.
        </p>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li><strong>Apply to universities:</strong> Each has own portal; check studyinnorway.no. Winter intake 2026 Norway deadline: autumn apply Nov 2025–Jan 2026; spring Aug–Sep 2025.</li>
          <li><strong>Receive admission</strong> and pay tuition if required (non-EU from 2023).</li>
          <li><strong>Apply for residence permit</strong> at udi.no. Register, pay NOK 1,100.</li>
          <li><strong>Upload documents:</strong> Passport, admission letter, proof of funds NOK 166,859/year, tuition payment, insurance.</li>
          <li><strong>Book VFS Kathmandu</strong> for biometrics and document submission.</li>
          <li><strong>Processing:</strong> 2–3 months. Norwegian Embassy New Delhi processes. Post-study: 1-year job-search permit (2 years for PhD).</li>
        </ol>
      </section>

      {/* Work Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work Rights During Study</h2>
          <p className="text-gray-700">
            Up to 20 hours per week during term; full-time during ordinary holidays (summer, Christmas, Easter). Cannot work until residence permit granted. Cannot be self-employed. Norway is expensive—do not rely on part-time income for living costs. Post-study: 1-year job-search permit. Source: udi.no, studyinnorway.no.
          </p>
        </div>
      </section>

      {/* Tips to Increase Chances */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Tips to Increase Your Scholarship Chances in Norway</h2>
          <ol className="text-gray-700 space-y-3 list-decimal list-inside">
            <li><strong>Apply through the right university:</strong> Not all Norwegian universities participate in the Quota Scheme—check studyinnorway.no for participating institutions</li>
            <li><strong>Start very early:</strong> Apply for admission 8–12 months before your intended start; Quota funds are limited and competitive</li>
            <li><strong>Write a Nepal-specific motivation letter:</strong> Explain how Norwegian education will benefit Nepal upon your return—Quota prioritises development impact</li>
            <li><strong>Maintain a strong GPA:</strong> First Division (60%+) is practically required; Grade A (ECTS) for BI Presidential</li>
            <li><strong>For PhD:</strong> Email potential supervisors directly and express research interest before applying to the position</li>
            <li><strong>Prepare proof of funds early:</strong> NOK 166,859/year must be demonstrated—open a dedicated savings account</li>
            <li><strong>Apply for multiple scholarships simultaneously:</strong> Norwegian Quota, BI Presidential, and university-specific awards are not mutually exclusive</li>
            <li><strong>Check IELTS waiver options:</strong> Some programmes accept prior English-medium degrees—confirm with the university before spending on tests</li>
          </ol>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Common Mistakes Nepali Students Make Applying for Norway Scholarships</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Applying to Non-Quota Universities</h3>
            <p className="text-gray-700 text-sm">Many students apply to universities that do not participate in the Quota Scheme and miss out on the scholarship entirely. Always verify participation at studyinnorway.no.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Missing the Tuition Change (2023)</h3>
            <p className="text-gray-700 text-sm">Many students still believe Norway is tuition-free. Since autumn 2023, non-EU/EEA students pay NOK 80,000–400,000/year without a scholarship. Budget accordingly.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Generic Motivation Letter</h3>
            <p className="text-gray-700 text-sm">The Quota Scheme values development impact. A generic letter without mentioning how you will use Norwegian education to contribute back to Nepal significantly weakens your application.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Underestimating Living Costs</h3>
            <p className="text-gray-700 text-sm">Norway is Europe&apos;s most expensive country. NOK 12,000/month from the Quota Scheme may not cover all living expenses in Oslo. Plan for supplemental savings.</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">Our counsellors at San Marina have helped 400+ Nepali students avoid these mistakes. <Link href="/consultation/" className="text-blue-600 hover:underline font-medium">Book a free consultation</Link> for personalised guidance.</p>
      </section>

      {/* Norway vs Germany */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Norway vs Germany – Tuition Difference</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Country</th>
                <th className="p-3 text-left">Tuition (Annual)</th>
                <th className="p-3 text-left">Living (Monthly)</th>
                <th className="p-3 text-left">PSW</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-3 font-semibold">Norway</td><td className="p-3">NOK 80k–400k</td><td className="p-3">NOK 12k–18k</td><td className="p-3">1 year</td></tr>
              <tr className="border-b"><td className="p-3">Germany</td><td className="p-3">€0 (most)</td><td className="p-3">€934/mo blocked</td><td className="p-3">18 months</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mt-4">
          Norway charges tuition for non-EU from 2023; Germany is tuition-free at most public universities. Norway offers Norwegian Quota and BI Presidential; Germany has DAAD. Both have strong scholarship in Norway for Nepali students and masters degree in Norway with scholarship options. Source: studyinnorway.no, daad.de.
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply for Scholarship in Norway?</h2>
          <p className="text-blue-200 mb-8">
            Our experts help with Norwegian Quota applications, university selection, and residence permit preparation. Free consultation in Kathmandu, Baneshwor, Dang, and Itahari.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/study-abroad/eur/norway/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Study in Norway Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
