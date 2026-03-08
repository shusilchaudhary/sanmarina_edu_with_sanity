import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Scholarship in Slovakia for Nepali Students 2026 | National Programme, PhD & Masters',
  description: 'Scholarship in Slovakia for Nepali students 2026: Government National Scholarship Programme, PhD €1,025/mo, Masters €620/mo. Study in Slovakia scholarship. Cost in NPR, visa steps. Free consultation.',
  keywords: 'scholarship in slovakia, scholarship in slovakia for nepali students, study in slovakia scholarship, full scholarship in slovakia for international students, government scholarship in slovakia, masters scholarship in slovakia, phd scholarship in slovakia',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/slovakia-for-nepali-students/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/scholarships/slovakia-for-nepali-students/',
    title: 'Scholarship in Slovakia for Nepali Students 2026 | Government, PhD & Masters',
    description: 'National Scholarship Programme, PhD €1,025/mo. Cost in NPR, visa, residence permit. Nepal-specific guide.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-26',
    modifiedTime: '2026-03-07',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship in Slovakia for Nepali Students 2026',
    description: 'Government scholarship, PhD €1,025/mo. Tuition €0–€3,500. Cost in NPR.',
  },
};

// Official sources: scholarships.sk (SAIA), studyinslovakia.saia.sk, Slovak Ministry of Education, mzv.sk, euraxess.sk. 1 EUR ≈ 143 NPR (Feb 2026)
const pageData = {
  lastUpdated: 'February 2026',
  proofYearly: 4500,
  tuitionMin: 0,
  tuitionMax: 3500,
  livingMin: 500,
  livingMax: 800,
  nspPhd: 1025,
  nspMasters: 620,
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  faqs: [
    {
      question: 'Is Slovakia good for Nepali students?',
      answer: 'Yes. Scholarship in Slovakia for Nepali students includes the government scholarship in Slovakia (National Scholarship Programme): PhD €1,025/month, Masters €620/month. Public universities in Slovakia with low tuition fees: some programmes €0 (e.g. arts); average €1,200–€1,500/year. Cost of living in Slovakia for Nepali students: €500–€800/month. Work rights for international students in Slovakia: 20 hrs/week. Source: scholarships.sk, studyinslovakia.saia.sk.',
    },
    {
      question: 'How much bank balance is required for Slovakia student visa from Nepal?',
      answer: 'Bank balance required for Slovakia student visa from Nepal: minimum ~€4,500 per year for living expenses (in addition to tuition). Provide bank statements or confirmation of account balance; documents not older than 90 days. From July 2025, confirmation of account balance accepted. 1 EUR ≈ 143 NPR (NPR ~6.4 lakhs/year). Apply at Slovak Embassy; Nepal falls under New Delhi jurisdiction. Source: mzv.sk, studylink.com.',
    },
    {
      question: 'What is the cost of living in Slovakia for Nepali students?',
      answer: 'Cost of living in Slovakia for Nepali students: €500–€800/month (NPR 72k–1.14L). Bratislava basic €240–€300; dorms €80–€150; private rent €250–€500. Food €150–€250; transport €13–€40 (student pass); insurance €50–€70. Slovakia is among Europe’s most affordable. Full scholarship in slovakia for international students (NSP) covers stipend and travel. Source: studyinslovakia.saia.sk, helpstudyabroad.com.',
    },
    {
      question: 'What is the Slovakia student visa process from Nepal step by step?',
      answer: 'Slovakia student visa process from Nepal step by step: 1) Apply to Slovak universities (deadlines typically Feb–April for September). 2) Receive admission letter. 3) Gather proof of funds (~€4,500+/year), bank documents, health insurance, accommodation. 4) Apply for National visa (Type D) at Slovak Embassy—Nepal applications processed via Embassy in New Delhi. 5) Submit documents; processing up to 30 days (temporary residence). 6) After arrival: register at Foreign Police for residence card. Source: mzv.sk, studyinslovakia.saia.sk.',
    },
    {
      question: 'What is residence permit for study in Slovakia?',
      answer: 'Residence permit for study in Slovakia: Temporary residence for study purposes. Apply at Slovak Embassy; after entry, at Foreign Police. Requires admission, proof of funds, insurance, accommodation (not required for university students). Card fee €4.50. Decision within 30 days. Work rights for international students in Slovakia: 20 hrs/week under student contract; no separate work permit. Source: euraxess.sk, mzv.sk.',
    },
    {
      question: 'Can I study in Slovakia without IELTS from Nepal?',
      answer: 'IELTS not required for Slovak visa. For English programmes: universities may accept TOEFL, Cambridge, or prior English-medium degree. Government scholarship in Slovakia (NSP) requires proficiency in English, French, Slovak, or Spanish. PhD scholarship in slovakia and masters scholarship in slovakia: check each programme. Source: scholarships.sk, studyinslovakia.saia.sk.',
    },
    {
      question: 'What is the September intake 2026 Slovakia deadline?',
      answer: 'September intake 2026 Slovakia deadline: Varies by university. Typically February–April (e.g. EUBA Feb 28, Comenius April 30). National Scholarship Programme for 2026/27: typically April 30 (16:00 CET) for online application; original admission letter to SAIA within 3 working days. Apply early. Source: scholarships.sk, studyinslovakia.saia.sk.',
    },
    {
      question: 'What is scholarship in Slovakia for Nepali students?',
      answer: 'Scholarship in Slovakia for Nepali students: National Scholarship Programme (government)—PhD €1,025/month, Masters €620/month; 1–10 months mobility; apply scholarships.sk. University merit awards. Erasmus+. Full scholarship in slovakia for international students: NSP covers stipend, travel (€0–€1,500), insurance reimbursement. Nepal eligible. Not for full degree—mobility stays. Source: scholarships.sk, SAIA.',
    },
    {
      question: 'What is government scholarship in Slovakia?',
      answer: 'Government scholarship in Slovakia: National Scholarship Programme (NSP) of the Slovak Republic. Financed by Ministry of Education; administered by SAIA. PhD €1,025/month; Masters (2.5+ years completed) €620/month; teachers/researchers €1,370–€1,470. Travel grant, insurance. Apply at scholarships.sk; deadline typically April 30. For mobility (1–10 months), not full degree. Source: scholarships.sk.',
    },
    {
      question: 'What is masters scholarship in Slovakia?',
      answer: 'Masters scholarship in Slovakia: National Scholarship Programme €620/month for Master’s students (min 2.5 years completed). University-specific awards. Study in slovakia scholarship options include Erasmus Mundus. Tuition at public universities €0–€3,500. Masters scholarship in slovakia from NSP is for short-term mobility; for full degree, check university funding. Source: scholarships.sk, studyinslovakia.saia.sk.',
    },
    {
      question: 'What is PhD scholarship in Slovakia?',
      answer: 'PhD scholarship in Slovakia: Government National Scholarship Programme €1,025/month. Must be invited by Slovak institution with valid research certificate. Apply scholarships.sk; deadline April 30. University-funded PhD positions also available. PhD scholarship in slovakia covers stipend, travel, accommodation support. 1–10 months; not full programme. Source: scholarships.sk, researchinslovakia.saia.sk.',
    },
    {
      question: 'What are work rights for international students in Slovakia?',
      answer: 'Work rights for international students in Slovakia: Non-EU students with valid residence permit can work up to 20 hours per week under “student temporary work contract.” No separate work permit. Valid only while student permit active and before final exams. After graduation, change residence to employment. Source: studyinslovakia.saia.sk, prorelo.com.',
    },
  ],
};

export default function SlovakiaScholarshipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Scholarship in Slovakia for Nepali Students 2026 – Complete Guide',
        description: 'Government NSP, PhD €1,025/mo. Tuition €0–€3,500. Cost in NPR.',
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
          { '@type': 'ListItem', position: 3, name: 'Scholarship in Slovakia for Nepali Students', item: 'https://www.sanmarina.edu.np/scholarships/slovakia-for-nepali-students/' },
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
          <Image src="/assets/slovkia.jpg" alt="Scholarship in Slovakia for Nepali students - Bratislava, National Scholarship, study abroad 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/scholarships/" className="hover:text-white">Scholarships</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Slovakia for Nepali Students</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scholarship in Slovakia for Nepali Students
            <br />
            <span className="text-blue-300">2026 – Government, PhD & Masters Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Government scholarship in Slovakia, study in slovakia scholarship. Full scholarship in slovakia for international students. PhD €1,025/mo, Masters €620/mo. Cost in NPR, visa steps.
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
            <strong>Data from scholarships.sk (SAIA), studyinslovakia.saia.sk, Slovak Ministry of Education, mzv.sk.</strong> Verify with official sources before applying.
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
            <strong>Scholarship in Slovakia for Nepali students 2026:</strong> Government scholarship in Slovakia (National Scholarship Programme): PhD €1,025/month, Masters €620/month; 1–10 months mobility; apply scholarships.sk; deadline typically April 30. Full scholarship in slovakia for international students: NSP covers stipend, travel (€0–€1,500), insurance. Public tuition €0–€3,500 (some free). Bank balance required: ~€4,500/year. Slovakia student visa from Nepal: Slovak Embassy (New Delhi for Nepal); temporary residence within 30 days. Cost of living in Slovakia for Nepali students: €500–€800/month. 1 EUR ≈ 143 NPR.
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>NSP: PhD €1,025/mo, Masters €620/mo (scholarships.sk)</li>
            <li>Tuition: €0–€3,500 (studyinslovakia.saia.sk)</li>
            <li>Proof of funds: ~€4,500/year</li>
            <li>Work: 20 hrs/week (studyinslovakia.saia.sk)</li>
            <li>1 EUR ≈ 143 NPR (Feb 2026)</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '€1,025', label: 'PhD Stipend/mo' },
              { value: '€620', label: 'Masters Stipend/mo' },
              { value: 'Apr 30', label: 'NSP Deadline' },
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

      {/* Why Slovakia */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Slovakia Is an Emerging Choice for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          Slovakia is rapidly becoming one of Europe&apos;s most cost-effective study destinations. As a Schengen Area EU member, Slovakia offers Nepali students a European education at a fraction of Western European costs—public university tuition is as low as €0 for arts programmes, and the government&apos;s National Scholarship Programme (NSP) provides stipends for research visits and academic mobility.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>European quality education:</strong> Comenius University (QS top 1000), Slovak University of Technology, University of Zilina—Bologna system degrees recognised EU-wide</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Lowest cost of living in Europe:</strong> €500–€800/month total living costs—significantly cheaper than Austria, Germany, or Norway</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Government NSP stipends:</strong> PhD €1,025/month, Masters €620/month—for qualifying research visits and academic stays</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Low residence card fee:</strong> Just €4.50 for student residence card—among the most accessible in Europe</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Erasmus+ hub:</strong> Slovakia participates in Erasmus+ and Erasmus Mundus—excellent for exchange opportunities within Europe</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Work rights:</strong> 20 hrs/week on a student work contract—no separate work permit required</span></li>
        </ul>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
          <p className="text-amber-800 text-sm"><strong>Important Note:</strong> The National Scholarship Programme (NSP) is for <em>academic mobility stays</em> (1–10 months)—not full Bachelor&apos;s or Master&apos;s degrees. For a full degree, students self-fund or apply for university-specific merit awards.</p>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          Read our full <Link href="/study-abroad/" className="text-blue-600 hover:underline font-medium">Study in Europe guide</Link> for more destinations and scholarships.
        </p>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarship in Slovakia – Complete Breakdown</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Government Scholarship in Slovakia (National Scholarship Programme)</h3>
            <p className="text-gray-700 mb-3">
              Government scholarship in Slovakia: National Scholarship Programme (NSP) funded by Slovak Ministry of Education; administered by SAIA. Full scholarship in slovakia for international students. PhD €1,025/month; Masters (min 2.5 years completed) €620/month; teachers/researchers €1,370–€1,470. Travel grant €0–€1,500; insurance reimbursement up to €250. Covers 1–10 months mobility—not full degree. Apply at scholarships.sk; deadline typically April 30 (16:00 CET). Deliver original admission/invitation letter to SAIA within 3 working days. Nepal eligible. Source: scholarships.sk.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">University Scholarships & Erasmus+</h3>
            <p className="text-gray-700 mb-3">
              Study in slovakia scholarship: universities offer merit awards. Erasmus+ and Erasmus Mundus include Slovak institutions. Masters scholarship in slovakia and PhD scholarship in slovakia from universities vary. Public universities in Slovakia with low tuition fees (€0–€3,500) make study affordable. Comenius Bratislava, Slovak University of Technology, University of Zilina. Source: studyinslovakia.saia.sk.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Eligibility Requirements for Scholarship in Slovakia</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">National Scholarship Programme (NSP) Eligibility</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>PhD students: must have invitation from Slovak research institution with valid research certificate</li>
                <li>Masters students: minimum 2.5 years of Master&apos;s programme completed</li>
                <li>Teachers and researchers: employed in education or research institution</li>
                <li>Nepal eligible—non-EU countries participate fully</li>
                <li>Stays: 1–10 months (not full degree programmes)</li>
                <li>Deadline: typically April 30 (16:00 CET) at scholarships.sk</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">University Admission (Full Degree) Requirements</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Bachelor&apos;s degree for Master&apos;s programmes; Master&apos;s for PhD</li>
                <li>IELTS 6.0 or TOEFL 79+ for English-taught programmes</li>
                <li>Czech/Slovak language proficiency for Slovak-taught programmes</li>
                <li>Proof of funds: ~€4,500/year for living (plus tuition €0–€3,500)</li>
                <li>Application deadlines: typically February–April; check each university</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Source: scholarships.sk (SAIA), studyinslovakia.saia.sk, mzv.sk. Requirements vary by university and programme.</p>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Documents Required for Slovakia Scholarship &amp; Visa</h2>
        <p className="text-gray-700 mb-4">Applications via Slovak Embassy in New Delhi (Nepal&apos;s jurisdiction). From July 2025, account balance confirmations are accepted in addition to bank statements.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Valid passport (6+ months validity)</li>
            <li>Academic transcripts (legalised)</li>
            <li>Degree certificate (notarised)</li>
            <li>Admission/invitation letter from Slovak university</li>
            <li>CV / résumé (academic)</li>
            <li>Research certificate (for NSP PhD application)</li>
          </ul>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>IELTS / TOEFL score report (English-taught)</li>
            <li>Proof of funds: ~€4,500+/year (bank statements, max 90 days old)</li>
            <li>Health insurance certificate</li>
            <li>Accommodation proof (if available)</li>
            <li>NSP online application submission receipt (if applying)</li>
            <li>Passport-sized photographs</li>
          </ul>
        </div>
        <p className="text-gray-500 text-sm mt-3">NSP: deliver original admission/invitation letter to SAIA within 3 working days of online application. Source: scholarships.sk, mzv.sk.</p>
      </section>

      {/* Tips to Increase Chances */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Tips to Increase Your Scholarship Chances in Slovakia</h2>
          <ol className="text-gray-700 space-y-3 list-decimal list-inside">
            <li><strong>Secure an invitation letter early:</strong> NSP PhD requires a formal invitation from a Slovak institution with a research certificate—approach professors at Comenius, Slovak University of Technology, or University of Zilina 3–4 months before the April deadline</li>
            <li><strong>Complete 2.5+ years of Master&apos;s:</strong> You need at least 2.5 years of an ongoing Master&apos;s programme to qualify for the NSP Masters stipend—plan the application timing accordingly</li>
            <li><strong>Apply to EUBA (Bratislava) by February 28:</strong> Economics University of Bratislava has one of the earliest non-EU deadlines—missing it forecloses a September start</li>
            <li><strong>Prepare bank documents no older than 90 days:</strong> Slovak visa requirements are strict on document age—obtain bank statements/confirmation within 90 days of application</li>
            <li><strong>Explore Erasmus Mundus programmes at Slovak universities:</strong> Several Mundus programmes include Slovak partners and offer full EU funding—a stronger scholarship than NSP for full degrees</li>
            <li><strong>Apply to Slovak Embassy New Delhi directly:</strong> Nepal falls under the Slovak Embassy in New Delhi—contact them early regarding required documents and processing timeline</li>
          </ol>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Common Mistakes Nepali Students Make Applying for Slovakia</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Expecting NSP to Fund a Full Degree</h3>
            <p className="text-gray-700 text-sm">The NSP is only for short-term academic stays (1–10 months). Students expecting it to fund a full 2-year Master&apos;s are consistently disappointed. For full degrees, look at university merit awards or consider other European countries.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Submitting Bank Documents Older Than 90 Days</h3>
            <p className="text-gray-700 text-sm">Slovak visa requirements mandate bank documents no older than 90 days. Students who prepare documents months in advance and use them at the visa appointment are rejected on this technicality.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Missing the Original Letter Delivery to SAIA</h3>
            <p className="text-gray-700 text-sm">After NSP online application, the original admission/invitation letter must be physically delivered to SAIA within 3 working days. Many applicants miss this step and have their application cancelled.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Not Contacting Slovak Embassy New Delhi</h3>
            <p className="text-gray-700 text-sm">Nepal does not have a direct Slovak Embassy. All visa applications go through New Delhi. Many students are unaware of this jurisdiction and waste time approaching wrong offices.</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">Our European scholarship specialists guide Nepali students through the NSP process, university applications, and Slovak visa. <Link href="/consultation/" className="text-blue-600 hover:underline font-medium">Book a free consultation</Link>.</p>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Living in Slovakia for Nepali Students (2026)</h2>
          <p className="text-gray-700 mb-4">
            Bank balance required for Slovakia student visa from Nepal: ~€4,500/year. Living €500–€800/month.
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
                <tr className="border-b"><td className="p-3">Tuition (yearly)</td><td className="p-3">0–3,500</td><td className="p-3">0–5L</td></tr>
                <tr className="border-b"><td className="p-3">Living (monthly)</td><td className="p-3">500–800</td><td className="p-3">72k–1.14L</td></tr>
                <tr className="border-b"><td className="p-3">Proof of funds (yearly)</td><td className="p-3">~4,500</td><td className="p-3">~6.4L</td></tr>
                <tr className="border-b"><td className="p-3">Residence card</td><td className="p-3">4.50</td><td className="p-3">~650</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">1 EUR ≈ 143 NPR. Source: mzv.sk, studyinslovakia.saia.sk.</p>
        </div>
      </section>

      {/* Visa + Residence Permit */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Slovakia Student Visa Process from Nepal (Step by Step)</h2>
        <p className="text-gray-700 mb-4">
          Residence permit for study in Slovakia. Apply for National visa (Type D) for stays over 90 days.
        </p>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li><strong>Apply to universities:</strong> September intake 2026 Slovakia deadline typically Feb–April. Each university sets own deadlines.</li>
          <li><strong>Receive admission</strong> and invitation letter.</li>
          <li><strong>Gather documents:</strong> Passport, proof of funds ~€4,500+/year, bank confirmation/statements (max 90 days old), health insurance, accommodation if required.</li>
          <li><strong>Apply at Slovak Embassy:</strong> Nepal falls under Slovak Embassy in New Delhi. Submit Type D (national/long-stay) visa application.</li>
          <li><strong>Processing:</strong> Foreign Police decision within 30 days for temporary residence.</li>
          <li><strong>After arrival:</strong> Register at Foreign Police; collect residence card (fee €4.50).</li>
        </ol>
      </section>

      {/* Work Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work Rights for International Students in Slovakia</h2>
          <p className="text-gray-700">
            Non-EU students with valid temporary residence for study can work up to 20 hours per week under a student temporary work contract. No separate work permit. Valid only while student status active and before final exams. After graduation, change residence to employment. Source: studyinslovakia.saia.sk, euraxess.sk.
          </p>
        </div>
      </section>

      {/* Slovakia vs Hungary vs Poland */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Slovakia vs Hungary vs Poland – Cost Difference</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Country</th>
                <th className="p-3 text-left">Tuition (Annual)</th>
                <th className="p-3 text-left">Living (Monthly)</th>
                <th className="p-3 text-left">Gov Scholarship</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-3 font-semibold">Slovakia</td><td className="p-3">€0–€3,500</td><td className="p-3">€500–€800</td><td className="p-3">NSP €620–€1,025/mo</td></tr>
              <tr className="border-b"><td className="p-3">Hungary</td><td className="p-3">€2,000–€8,000</td><td className="p-3">€400–€700</td><td className="p-3">Stipendium Hungaricum</td></tr>
              <tr className="border-b"><td className="p-3">Poland</td><td className="p-3">€1,000–€5,000</td><td className="p-3">€400–€700</td><td className="p-3">NAWA, bilateral</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mt-4">
          Slovakia offers low tuition and strong government scholarship in Slovakia. Hungary has Stipendium Hungaricum for full degree. Poland has NAWA. All three are affordable for scholarship in slovakia for nepali students. Source: scholarships.sk, studyinslovakia.saia.sk.
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply for Scholarship in Slovakia?</h2>
          <p className="text-blue-200 mb-8">
            Our experts help with National Scholarship Programme applications, university selection, and Slovakia student visa from Nepal. Free consultation in Kathmandu, Baneshwor, Dang, and Itahari.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/study-abroad/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Study in Europe Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
