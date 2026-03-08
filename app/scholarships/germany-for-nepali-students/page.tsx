import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight, GraduationCap, Briefcase, MapPin, Award, Clock, FileText, AlertTriangle } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Germany Scholarships for Nepali Students 2026 | DAAD, Erasmus+ & Full Funding',
  description: 'Germany scholarships for Nepali students 2026: DAAD €992/mo, Erasmus+, Deutschlandstipendium. Tuition-free public universities. Block account €11,904. Step-by-step application, eligibility, deadlines. Free consultation Kathmandu.',
  keywords: 'germany scholarships for nepali students, scholarships in germany for nepali students, DAAD scholarship nepal, full scholarship germany, scholarship for nepali students in germany, scholarship in germany for bachelor degree, masters scholarship in germany, mba scholarship in germany, how to get scholarship in germany, deutschlandstipendium, erasmus+ nepal, block account germany 2026',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/germany-for-nepali-students/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/scholarships/germany-for-nepali-students/',
    title: 'Germany Scholarships for Nepali Students 2026 | DAAD, Erasmus+ & Full Funding',
    description: 'Complete 2026 guide: Germany scholarships for Nepali students—DAAD, Erasmus+, Deutschlandstipendium. Tuition-free universities, block account, visa, deadlines.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-03-06',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Germany Scholarships for Nepali Students 2026',
    description: 'DAAD €992/mo, Erasmus+, tuition-free universities. Block account €11,904. Free consultation Kathmandu.',
  },
};

const pageData = {
  lastUpdated: 'March 2026',
  blockAccount: { eur: 11904, monthly: 992, npr: 1702272 },
  daadStipend: 992,
  daadPhDStipend: 1400,
  daadMasterDeadline: 'October 2026 (for 2027–28 intake)',
  winterDeadline: 'July 15, 2026',
  visaFee: { eur: 75, npr: 10725 },
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  faqs: [
    {
      question: 'What are the best Germany scholarships for Nepali students?',
      answer: 'The best Germany scholarships for Nepali students include DAAD (€992/month for Master\'s, €1,400 for PhD), Erasmus+ (monthly stipend + travel), Deutschlandstipendium (€300/month), Heinrich Böll Foundation, Konrad Adenauer Stiftung, and university-specific merit awards. Most public universities also offer tuition-free study. Apply via daad.de. Source: DAAD, Erasmus+.',
    },
    {
      question: 'Is Germany free for Nepali students?',
      answer: 'Yes. Most public universities in Germany charge no tuition for Bachelor and Master programmes. Nepali students pay only semester contribution (€70–€430) and living costs. The blocked account for 2026 is €11,904 (€992/month). Baden-Württemberg charges €1,500/semester for non-EU. Source: DAAD, German Federal Foreign Office.',
    },
    {
      question: 'What are DAAD scholarship requirements for Nepali students?',
      answer: 'DAAD requirements: completed Bachelor (not more than 6 years old), strong academic record (upper third), at least 2 years professional experience for EPOS, cannot have lived in Germany 15+ consecutive months. GPA ≥3.0 preferred. IELTS 6.0+ or TOEFL iBT equivalent. Motivation letter + 2 recommendation letters required. Apply at daad.de. Source: DAAD.',
    },
    {
      question: 'What GPA is required for Germany scholarships?',
      answer: 'DAAD prefers GPA 3.0+ on a 4.0 scale (or equivalent upper-third performance). No strict minimum for public university admission, but competitive applicants score 60%+ in Nepali grading. Deutschlandstipendium is merit-based—top performers preferred. Individual university scholarships vary. Source: DAAD, uni-assist.',
    },
    {
      question: 'Is IELTS required for Germany scholarships for Nepali students?',
      answer: 'For English-taught programmes: IELTS 6.0–6.5 or TOEFL iBT equivalent is typical. Some universities accept proof of prior English-medium education. For German-taught programmes: TestDaF 4 or DSH-2 required. DAAD requires language proof appropriate to your programme. Source: DAAD, study-in-germany.de.',
    },
    {
      question: 'How much bank balance is required for Germany student visa from Nepal?',
      answer: '€11,904 in a blocked account (Sperrkonto) for 2026—equivalent to NPR 17 lakhs (1 EUR ≈ 143 NPR). This covers €992/month living costs. Open via Fintiba, Expatrio, or Coracle. Per German Federal Foreign Office.',
    },
    {
      question: 'What documents are required for Germany scholarship application?',
      answer: 'Required documents: valid passport, academic transcripts and certificates, Bachelor degree certificate, CV/résumé, motivation letter, 2 recommendation letters, IELTS/TOEFL or TestDaF score, passport-sized photos, proof of work experience (for EPOS). Some scholarships also require a research proposal. Source: DAAD.',
    },
    {
      question: 'What are the scholarship deadlines for Germany 2026?',
      answer: 'DAAD Master\'s: October 2026 for 2027–28 intake. Erasmus+: varies by programme (typically Nov–Jan). Deutschlandstipendium: varies by university. Winter semester university deadline: July 15, 2026. Summer semester: January 15. Apply 12–18 months before intended start. Source: DAAD, uni-assist.',
    },
    {
      question: 'Is there an MBA scholarship in Germany for Nepali students?',
      answer: 'Yes. DAAD Master\'s scholarships cover MBA programmes at state universities (€992/month). Public university MBA tuition is often €0. Private MBAs (Mannheim, WHU) cost €10,000–€40,000 but offer merit scholarships. Apply via DAAD portal. Source: DAAD scholarship database.',
    },
    {
      question: 'Can I study in Germany without IELTS from Nepal?',
      answer: 'Yes. Over 2,000 English-taught programmes accept alternatives to IELTS: TOEFL, PTE, or proof of prior English-medium education. Some accept university-administered placement tests. German-taught programmes need TestDaF 4 or DSH-2. Source: DAAD.',
    },
    {
      question: 'How to get scholarship in Germany from Nepal?',
      answer: 'Step-by-step: 1) Research programmes at daad.de. 2) Check eligibility (GPA, language, experience). 3) Prepare documents 12–18 months early. 4) Apply to DAAD, Erasmus+, or university scholarships by deadline. 5) Secure admission. 6) Open blocked account €11,904. 7) Apply visa at German Embassy Kathmandu. Source: DAAD, uni-assist.',
    },
    {
      question: 'What is the Germany student visa success rate from Nepal?',
      answer: 'No official rate published. Strong applications with complete blocked account, admission letter, health insurance, and clear motivation have higher approval. Common rejections: incomplete funds, weak motivation, education gaps. Apply 3+ months before course start via German Embassy Kathmandu.',
    },
    {
      question: 'What is the cost of living in Germany for Nepali students?',
      answer: '€867–€1,200/month depending on city. Munich/Berlin higher; Leipzig/Aachen cheaper. Blocked account covers €992/month. Breakdown: rent €400–700, food €200–300, transport €80–100 (semester ticket), health insurance €120–130. 1 EUR ≈ 143 NPR. Source: DAAD.',
    },
    {
      question: 'What are common mistakes Nepali students make when applying for Germany scholarships?',
      answer: 'Common mistakes: applying too late (start 12–18 months early), weak motivation letter, not meeting GPA threshold, missing recommendation letters, incomplete documents, not checking DAAD vs university deadlines, ignoring German-taught programme requirements, underestimating blocked account preparation time. Source: DAAD, San Marina counselors.',
    },
    {
      question: 'Is it hard to get a DAAD scholarship from Nepal?',
      answer: 'Yes. The DAAD acceptance rate for Nepali students is approximately 10%—meaning about 90 out of 100 applicants are rejected. Common rejection reasons: low GPA, weak motivation letter, and lacking extracurricular depth. In 2023, 209 Nepali students received DAAD funding across all categories. Source: DAAD 2023 Annual Report.',
    },
    {
      question: 'Are there DAAD scholarships for Bachelor degree from Nepal?',
      answer: 'Currently, there are no DAAD scholarships available for Nepali students at the Bachelor level. All 6 degree-level DAAD scholarships open to Nepal are for Master programmes. However, Nepali students can study tuition-free at public universities without DAAD scholarship. Check daad.de/scholarship-database regularly. Source: DAAD.',
    },
    {
      question: 'What are the political foundation scholarships in Germany for Nepali students?',
      answer: 'Germany has 6 major political foundation scholarships (all ~€992/month): Friedrich Ebert Stiftung (democracy), Heinrich Böll (environment), Konrad Adenauer (civic engagement), Rosa Luxemburg (social justice), Friedrich Naumann (liberal values), Hans Seidel (conservative). Each requires specific social/political engagement. Source: respective foundations.',
    },
  ],
};

const tuitionTable = [
  { item: 'Tuition (most public uni)', eur: '€0', npr: '—', notes: '15 of 16 states' },
  { item: 'Semester contribution', eur: '€70–€430', npr: '10–61k', notes: 'Includes transport pass' },
  { item: 'Baden-Württemberg surcharge', eur: '€1,500/semester', npr: '2.1L', notes: 'Non-EU only' },
  { item: 'Blocked account (annual)', eur: '€11,904', npr: '17.0L', notes: '€992/month' },
  { item: 'Health insurance (annual)', eur: '~€1,200', npr: '1.7L', notes: 'Mandatory' },
  { item: 'Visa fee', eur: '€75', npr: '10,725', notes: 'National Visa D' },
  { item: 'Airfare (round trip)', eur: '~€800', npr: '1.1L', notes: '' },
];

const scholarshipTypes = [
  { name: 'DAAD Master\'s', coverage: 'Full', stipend: '€992/month', extras: 'Travel + insurance + tuition waiver', deadline: 'Oct 2026 (for 2027–28)', source: 'daad.de' },
  { name: 'DAAD PhD/Research', coverage: 'Full', stipend: '€1,400/month', extras: 'Travel + insurance + research', deadline: 'Varies by programme', source: 'daad.de' },
  { name: 'DAAD EPOS', coverage: 'Full', stipend: '€992–€1,300/month', extras: '2+ yrs work exp. required; developing countries', deadline: 'Varies by programme', source: 'daad.de' },
  { name: 'Erasmus+', coverage: 'Partial–Full', stipend: 'Varies (€800–€1,400)', extras: 'Travel + tuition', deadline: 'Nov–Jan (varies)', source: 'erasmusplus.ec.europa.eu' },
  { name: 'Deutschlandstipendium', coverage: 'Partial', stipend: '€300/month', extras: 'Merit-based; apply via university', deadline: 'Varies by university', source: 'deutschlandstipendium.de' },
  { name: 'Heinrich Böll Foundation', coverage: 'Full', stipend: '€992/month', extras: 'Social/environmental engagement', deadline: 'Mar & Sep annually', source: 'boell.de' },
  { name: 'Konrad Adenauer Stiftung', coverage: 'Full', stipend: '€992/month', extras: 'Political/civic engagement', deadline: 'Jul 15 annually', source: 'kas.de' },
  { name: 'Friedrich Ebert Stiftung', coverage: 'Full', stipend: '€992/month', extras: 'Democracy & social justice focus', deadline: 'Varies', source: 'fes.de' },
  { name: 'Rosa Luxemburg Stiftung', coverage: 'Full', stipend: '€992/month', extras: 'Social justice & human rights focus', deadline: 'Apr & Oct annually', source: 'rosalux.de' },
  { name: 'Loschge Scholarship (TU Munich)', coverage: 'Partial', stipend: 'Varies', extras: 'Engineering & technology fields', deadline: 'Varies', source: 'tum.de' },
];

const applicationTimeline = [
  { period: '12–18 months before', action: 'Research programmes at daad.de and study-in-germany.de; take IELTS/TestDaF' },
  { period: 'Oct–Dec (previous year)', action: 'Apply for DAAD, Erasmus+ scholarships; prepare motivation letter, CV, recommendations' },
  { period: 'Jan–Mar', action: 'Submit university applications via uni-assist or directly' },
  { period: 'Apr–Jun', action: 'Receive scholarship and admission decisions' },
  { period: 'Jun–Jul', action: 'Open blocked account (€11,904); arrange health insurance' },
  { period: 'Jul–Aug', action: 'Apply for National Visa D at German Embassy Kathmandu (processing 4–12 weeks)' },
  { period: 'Sep–Oct', action: 'Depart for Germany; semester begins' },
];

const daadFullList = [
  { name: 'Research Grants in Germany', intent: 'Research/PhD', amount: '€1,300/mo + allowances', duration: '2–12 months', deadline: 'Oct & Apr' },
  { name: 'Research Grants – Doctoral Programmes', intent: 'PhD', amount: '€1,300/mo + allowances', duration: 'Max 4 years', deadline: 'October' },
  { name: 'Research Grants – Cotutelle', intent: 'PhD', amount: '€1,300/mo + allowances', duration: '7–24 months', deadline: 'October' },
  { name: 'Graduate School Scholarship (GSSP)', intent: 'PhD', amount: '€1,200/mo + allowances', duration: 'Max 4 years', deadline: 'Per graduate school' },
  { name: 'Research Stays for Academics', intent: 'Research', amount: '€2,000–€2,150/mo', duration: '1–3 months', deadline: 'Oct & Apr' },
  { name: 'Study Visits – Artists & Architects', intent: 'Research', amount: '€2,000–€2,150/mo', duration: '1–3 months', deadline: 'Oct & Apr' },
  { name: 'Postgraduate – Architecture', intent: "Master's", amount: '€992/mo + allowances', duration: '10–24 months', deadline: 'September' },
  { name: 'Postgraduate – Fine Art, Design, Film', intent: "Master's", amount: '€992/mo + allowances', duration: '10–24 months', deadline: 'November' },
  { name: 'Postgraduate – Music', intent: "Master's", amount: '€992/mo + allowances', duration: '10–24 months', deadline: 'September' },
  { name: 'Postgraduate – Performing Arts', intent: "Master's", amount: '€992/mo + allowances', duration: '10–24 months', deadline: 'October' },
  { name: 'Re-invitation for Former Holders', intent: 'Research', amount: '€2,000–€2,150/mo', duration: '1–3 months', deadline: 'Oct & Apr' },
  { name: 'KOSPIE with Indian IITs', intent: "Master's", amount: '€861/mo + allowances', duration: '7 months', deadline: 'February' },
  { name: 'EPOS Re-invitation Programme', intent: 'Research', amount: '€2,000–€2,150/mo', duration: '1–3 months', deadline: 'Sep & Mar' },
  { name: 'EPOS (Development-Related)', intent: "Master's & PhD", amount: '€992–€1,300/mo', duration: '12–42 months', deadline: 'Per programme' },
  { name: 'DLR-DAAD Research Fellowship', intent: 'Research/PhD', amount: '€992–€2,760/mo', duration: '1–36 months', deadline: 'First come first serve' },
  { name: 'Helmut-Schmidt-Programme (PPGG)', intent: "Master's", amount: '€992/mo + allowances', duration: '12–24 months', deadline: 'July' },
  { name: 'In-Country/In-Region at IITD', intent: "Master's & PhD", amount: '€300–€500/mo', duration: 'Max 24 mo (M) / 60 mo (PhD)', deadline: 'January' },
];

const livingCostNPR = [
  { item: 'Rent (shared flat)', eur: '€350–€700', npr: '50,050–1,00,100' },
  { item: 'Food & groceries', eur: '€200–€300', npr: '28,600–42,900' },
  { item: 'Semester ticket (transport)', eur: '€80–€100/mo', npr: '11,440–14,300' },
  { item: 'Health insurance', eur: '€120–€130/mo', npr: '17,160–18,590' },
  { item: 'Phone & internet', eur: '€20–€40', npr: '2,860–5,720' },
  { item: 'Books & supplies', eur: '€30–€50', npr: '4,290–7,150' },
  { item: 'Miscellaneous', eur: '€50–€100', npr: '7,150–14,300' },
];

const comparisonTable = [
  { country: 'Germany', tuition: '€0 (most public)', living: '€11,904/year', scholarship: 'DAAD €992/mo', psw: '18 months' },
  { country: 'UK', tuition: '£10,000–38,000', living: '£10,539–13,761', scholarship: 'Chevening, uni-specific', psw: '2–3 years' },
  { country: 'Australia', tuition: 'AUD 20k–45k', living: 'AUD 29,710+', scholarship: 'Various', psw: '2–4 years' },
  { country: 'Canada', tuition: 'CAD 15k–40k', living: 'CAD 10k–15k', scholarship: 'Vanier, uni-specific', psw: '1–3 years' },
];

export default function GermanyScholarshipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://www.sanmarina.edu.np/scholarships/germany-for-nepali-students/#article',
        headline: 'Germany Scholarships for Nepali Students 2026 – Complete Guide',
        description: 'DAAD, Erasmus+, Deutschlandstipendium and tuition-free universities. Block account €11,904. Step-by-step application, eligibility, deadlines for Nepali students.',
        datePublished: '2026-02-17',
        dateModified: '2026-03-06',
        author: { '@type': 'Organization', name: pageData.author.name, url: 'https://www.sanmarina.edu.np', description: pageData.author.role },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.sanmarina.edu.np/scholarships/germany-for-nepali-students/' },
        keywords: 'Germany scholarships for Nepali students, DAAD scholarship Nepal, Erasmus+ Nepal, Deutschlandstipendium, tuition-free Germany',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '#faqs', '#cost'] },
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
          { '@type': 'ListItem', position: 3, name: 'Germany Scholarships for Nepali Students', item: 'https://www.sanmarina.edu.np/scholarships/germany-for-nepali-students/' },
        ],
      },
      {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
        description: 'QEAC certified study abroad consultancy for Nepali students since 2014.',
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
          <Image src="/assets/germany.webp" alt="Germany scholarships for Nepali students – DAAD, Erasmus+, tuition-free universities 2026" fill className="object-cover" priority sizes="100vw" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/scholarships/" className="hover:text-white">Scholarships</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Germany for Nepali Students</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Germany Scholarships for Nepali Students
            <br />
            <span className="text-blue-300">2026 – DAAD, Erasmus+ & Full Funding Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Germany scholarships for Nepali students cover tuition-free public universities, DAAD (€992/month), Erasmus+, and Deutschlandstipendium. Block account €11,904. Complete application guide from Nepal—eligibility, deadlines, documents, and visa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">
              Free Scholarship Consultation
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg">
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-blue-100 mt-4">400+ Nepali students placed. Offices in Kathmandu, Baneshwor, Ghorahi, Itahari.</p>
        </div>
      </section>

      {/* Trust / E-E-A-T */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.daad.de" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DAAD</a>, <a href="https://www.auswaertiges-amt.de" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">German Federal Foreign Office</a>, <a href="https://www.uni-assist.de" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">uni-assist</a>, <a href="https://www.study-in-germany.de" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">study-in-germany.de</a>, Erasmus+.</strong> Verify with official sources before applying.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            By {pageData.author.name} · {pageData.author.role} · {pageData.author.expertise}
          </p>
        </div>
      </section>

      {/* Featured Snippet */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Germany Scholarships for Nepali Students – Quick Summary</h2>
          <p className="text-gray-700 mb-4">
            <strong>Germany scholarships for Nepali students 2026:</strong> Germany offers tuition-free public universities and funded scholarships—DAAD (€992/month for Master&apos;s, €1,400 for PhD), Erasmus+ (monthly stipend + travel), Deutschlandstipendium (€300/month), and foundation scholarships. Block account 2026: €11,904 (NPR 17 lakhs). DAAD Master&apos;s deadline: October 2026 for 2027–28 intake. No DAAD office in Nepal—applications go through DAAD New Delhi. 163+ DAAD programmes available.
          </p>
          <div className="grid md:grid-cols-4 gap-4 mt-4">
            {[
              { value: '€0', label: 'Tuition (Most Public Uni)' },
              { value: '€11,904', label: 'Block Account 2026' },
              { value: '163+', label: 'DAAD Programmes' },
              { value: '€992/mo', label: 'DAAD Stipend' },
            ].map((s, i) => (
              <div key={i} className="text-center bg-white rounded-xl p-4 shadow-sm">
                <p className="text-2xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Germany */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Germany Is Popular for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          Germany is the top non-English-speaking destination for Nepali students seeking affordable, world-class education. Here is why Nepali students from Kathmandu, Pokhara, and across Nepal choose Germany:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><GraduationCap size={18} className="text-[#0056b3] mt-1 flex-shrink-0" /> <span><strong>Tuition-free:</strong> Most public universities charge €0 tuition for Bachelor&apos;s and Master&apos;s (15 of 16 states)</span></li>
          <li className="flex items-start gap-2"><Award size={18} className="text-[#0056b3] mt-1 flex-shrink-0" /> <span><strong>World-ranked universities:</strong> TU Munich, LMU Munich, RWTH Aachen, Heidelberg—QS top 100</span></li>
          <li className="flex items-start gap-2"><Briefcase size={18} className="text-[#0056b3] mt-1 flex-shrink-0" /> <span><strong>Work rights:</strong> 20 hrs/week during semester; 18-month post-study job-seeker visa</span></li>
          <li className="flex items-start gap-2"><MapPin size={18} className="text-[#0056b3] mt-1 flex-shrink-0" /> <span><strong>2,000+ English programmes:</strong> No German required for many Master&apos;s and some Bachelor&apos;s</span></li>
          <li className="flex items-start gap-2"><FileText size={18} className="text-[#0056b3] mt-1 flex-shrink-0" /> <span><strong>Strong economy:</strong> Europe&apos;s largest; career opportunities in engineering, IT, automotive, pharma</span></li>
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          Read the full <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline font-medium">Study in Germany from Nepal guide</Link> for tuition, visa, and admission details.
        </p>
      </section>

      {/* Types of Scholarships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Types of Germany Scholarships for Nepali Students</h2>
          <p className="text-gray-700 mb-6">
            Germany offers both <strong>fully funded</strong> and <strong>partial scholarships</strong> for Nepali students. Below is a comparison of major scholarship programmes available in 2026:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-3 text-left">Scholarship</th>
                  <th className="p-3 text-left">Coverage</th>
                  <th className="p-3 text-left">Stipend</th>
                  <th className="p-3 text-left">Extras</th>
                  <th className="p-3 text-left">Deadline</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipTypes.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-3 font-medium">{s.name}</td>
                    <td className="p-3">{s.coverage}</td>
                    <td className="p-3">{s.stipend}</td>
                    <td className="p-3">{s.extras}</td>
                    <td className="p-3">{s.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Fully Funded Scholarships</h3>
              <p className="text-gray-700 mb-3">Fully funded Germany scholarships for Nepali students cover tuition, living costs, travel, and health insurance—leaving virtually no out-of-pocket cost:</p>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                <li><strong>DAAD Master&apos;s/PhD:</strong> €992–€1,400/month + travel + insurance + tuition waiver</li>
                <li><strong>DAAD EPOS:</strong> €992–€1,300/month; for developing countries; 2+ years work experience</li>
                <li><strong>Heinrich Böll Foundation:</strong> €992/month; environment and sustainability focus</li>
                <li><strong>Konrad Adenauer Stiftung:</strong> €992/month; academic excellence + civic engagement</li>
                <li><strong>Friedrich Ebert Stiftung:</strong> €992/month; democracy and social justice engagement required</li>
                <li><strong>Rosa Luxemburg Stiftung:</strong> €992/month; social justice, human rights, labour movement focus</li>
                <li><strong>Erasmus Mundus Joint Master:</strong> Full tuition + living + travel across EU</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Partial Scholarships</h3>
              <p className="text-gray-700 mb-3">Partial scholarships reduce costs but require additional funding for living expenses:</p>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                <li><strong>Deutschlandstipendium:</strong> €300/month; merit-based, apply via university</li>
                <li><strong>Loschge Scholarship (TU Munich):</strong> Engineering and technology fields; apply via TU Munich</li>
                <li><strong>University-specific awards:</strong> Vary by institution; check RWTH Aachen, TU Munich, Heidelberg</li>
                <li><strong>Erasmus+ exchange:</strong> 3–12 months; covers partial living; apply through home university</li>
                <li><strong>KOSPIE with Indian IITs:</strong> €861/month; for Master&apos;s thesis at German technical universities</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mt-10 mb-4">German Political Foundation Scholarships (Often Overlooked)</h3>
          <p className="text-gray-700 mb-4 text-sm">Beyond DAAD, Germany&apos;s major political foundations offer fully funded scholarships at €992/month—identical to DAAD benefits but with different selection criteria. These are often overlooked by Nepali students:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#001F3F] mb-1">Friedrich Ebert Stiftung (FES)</h4>
              <p className="text-gray-700 text-sm">Supports students committed to <strong>democracy and social justice</strong>. Need-based + merit. Must be enrolled in a German university. Active community involvement required. Apply at fes.de.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#001F3F] mb-1">Rosa Luxemburg Stiftung</h4>
              <p className="text-gray-700 text-sm">For students engaged in <strong>social justice, human rights, and labour movements</strong>. Political and social activism is a key criterion. Deadlines: April and October annually. Apply at rosalux.de.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#001F3F] mb-1">Heinrich Böll Foundation</h4>
              <p className="text-gray-700 text-sm">Focuses on <strong>environmental sustainability, gender equity, and democracy</strong>. Ideal for students passionate about climate change and green policies. Deadlines: March and September. Apply at boell.de.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#001F3F] mb-1">Loschge Scholarship (TU Munich)</h4>
              <p className="text-gray-700 text-sm">University-specific merit scholarship at <strong>Technical University of Munich</strong> for engineering and technology students. Strong academic record and recommendation letters required. Apply via tum.de.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DAAD Deep-Dive */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">DAAD Scholarships for Nepali Students – Explained</h2>
        <p className="text-gray-700 mb-4">
          DAAD (Deutscher Akademischer Austauschdienst / German Academic Exchange Service) is the largest scholarship provider for international students in Germany, offering 163+ programmes. Nepal does not have a DAAD office—Nepali students apply through the <strong>DAAD New Delhi Regional Office</strong>.
        </p>

        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 mb-6">
          <h3 className="font-bold text-[#001F3F] mb-3">DAAD Nepal: Key Statistics</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-[#0056b3]">209</p>
              <p className="text-gray-600 text-xs">Nepali students funded by DAAD in 2023</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0056b3]">~10%</p>
              <p className="text-gray-600 text-xs">Acceptance rate for Nepali applicants</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#0056b3]">17</p>
              <p className="text-gray-600 text-xs">DAAD programmes open to Nepal (2024)</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">Nepal ranks in the top 60 countries globally for DAAD scholarship recipients. Source: DAAD 2023 Annual Report.</p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
          <h3 className="font-bold text-[#001F3F] mb-3">DAAD Benefits for Nepali Students</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Master&apos;s stipend: €992/month (from Feb 2026)</li>
            <li>PhD stipend: €1,400/month</li>
            <li>Travel allowance (Nepal to Germany and return)</li>
            <li>Health, accident, and personal liability insurance</li>
            <li>Tuition fee waiver at public universities</li>
            <li>German language course subsidy (2–6 months before programme)</li>
            <li>Research allowance for PhD candidates</li>
          </ul>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-6">
          <h3 className="font-bold text-[#001F3F] mb-3">Important: No DAAD Bachelor&apos;s Scholarships for Nepal</h3>
          <p className="text-gray-700 text-sm">
            Currently there are <strong>no DAAD scholarships for Nepali students at the Bachelor&apos;s level</strong>. All 6 degree-level DAAD scholarships open to Nepal are for Master&apos;s programmes. However, Nepali undergraduates can pursue tuition-free Bachelor&apos;s at public universities without a DAAD scholarship. Check the <a href="https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?origin=193" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DAAD scholarship database</a> regularly for updates. Source: DAAD.
          </p>
        </div>

        <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 mb-6">
          <h3 className="font-bold text-[#001F3F] mb-3">DAAD EPOS (for developing countries including Nepal)</h3>
          <p className="text-gray-700 text-sm">
            DAAD Development-Related Postgraduate Courses (EPOS) specifically target students from developing countries. Nepali students with at least <strong>2 years professional experience</strong> can apply. Fully funded. Check eligible programmes at daad.de/epos.
          </p>
        </div>

        <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-6">
          <h3 className="font-bold text-[#001F3F] mb-3">Special Case: DAAD In-Country/In-Region Programme at IITD</h3>
          <p className="text-gray-700 text-sm">
            Nepali students can also pursue a Master&apos;s/PhD with DAAD funding at the <strong>Indian Institute of Technology Delhi (IITD)</strong> in New Delhi. This programme (€300–€500/month) covers study at IITD&apos;s Center of Atmospheric Sciences—not in Germany, but in India. Deadline: January. Source: DAAD.
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 mb-6">
          <h3 className="font-bold text-[#001F3F] mb-3">DAAD Pre-Admission & Processing Time</h3>
          <p className="text-gray-700 text-sm mb-2">
            <strong>DAAD is a pre-admission scholarship:</strong> You typically apply for the DAAD scholarship <em>before</em> securing university admission. No need to wait for an admission letter from a German university.
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Processing time:</strong> Total DAAD processing takes approximately <strong>6 months</strong> from application to final decision. Including 1 month of preparation, budget approximately 7 months for the entire journey.
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Example:</strong> To start Master&apos;s studies with DAAD in October 2027, begin your application around August 2026. Preparation for studying in Germany with DAAD starts more than a year before classes begin.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#001F3F] mb-4">Complete List: All 17 DAAD Scholarships Open to Nepal</h3>
        <p className="text-gray-600 text-sm mb-4">As of 2024, 17 DAAD scholarship programmes are available to Nepali students, with 6 specifically for Master&apos;s degree-seekers. Below is the complete list:</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full bg-white rounded-xl shadow-sm text-xs">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-2 text-left">#</th>
                <th className="p-2 text-left">Programme</th>
                <th className="p-2 text-left">Level</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Duration</th>
                <th className="p-2 text-left">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {daadFullList.map((d, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2 font-medium">{d.name}</td>
                  <td className="p-2">{d.intent}</td>
                  <td className="p-2">{d.amount}</td>
                  <td className="p-2">{d.duration}</td>
                  <td className="p-2">{d.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">Source: <a href="https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?origin=193" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">DAAD Scholarship Database</a>. Deadlines updated annually—always verify at daad.de.</p>
      </section>

      {/* DAAD Selection Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">DAAD Selection Criteria for Nepali Students</h2>
          <p className="text-gray-700 mb-4">Understanding how DAAD evaluates applications helps you build a stronger profile. The acceptance rate for Nepali students is approximately <strong>10%</strong>—meaning 90 out of 100 applicants are rejected. Here are the key selection factors:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#001F3F] mb-2">Academic Performance</h3>
              <p className="text-gray-700 text-sm">A very good GPA significantly boosts your chances. DAAD recommends upper third of your class—GPA 3.0+ on a 4.0 scale or First Division in Nepali grading.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#001F3F] mb-2">Motivation Letter</h3>
              <p className="text-gray-700 text-sm">Your motivation letter is the most critical component. Clearly express your goals, why Germany, why this programme, and how you will contribute. Generic letters are rejected immediately.</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#001F3F] mb-2">Extracurricular Profile</h3>
              <p className="text-gray-700 text-sm">Highlight internships, volunteer work, publications, research projects, workshops, and training programmes. DAAD seeks well-rounded candidates who demonstrate leadership potential.</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">Even if you meet all basic requirements, a low GPA, weak CV, or unconvincing motivation letter can lead to rejection. Source: DAAD, MyGermanUniversity research.</p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Eligibility Requirements for Germany Scholarships for Nepali Students</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">GPA Requirements</h3>
              <p className="text-gray-700">DAAD prefers applicants in the <strong>upper third</strong> of their class—roughly GPA 3.0+ on a 4.0 scale. In Nepali grading, this translates to approximately 60%+ or First Division. Deutschlandstipendium is merit-based—top performers preferred. No strict minimum for public university admission, but competitive applicants score higher.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">IELTS / Language Requirements</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li><strong>English-taught programmes:</strong> IELTS 6.0–6.5 or TOEFL iBT 80–90 (typical)</li>
                <li><strong>German-taught programmes:</strong> TestDaF 4 in all sections or DSH-2</li>
                <li><strong>DAAD:</strong> Language proof appropriate to programme language</li>
                <li>Some universities accept proof of prior English-medium education</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Other Eligibility Criteria</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Completed Bachelor&apos;s degree (not more than 6 years old for DAAD)</li>
                <li>Cannot have lived in Germany for 15+ consecutive months at application time</li>
                <li>Cannot already be enrolled in a German Master&apos;s programme (DAAD)</li>
                <li>At least 2 years professional experience for DAAD EPOS</li>
                <li>Clear motivation letter and 2 academic/professional recommendation letters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
          <FileText className="text-[#0056b3]" size={28} />
          Documents Required for Germany Scholarships
        </h2>
        <p className="text-gray-700 mb-4">Prepare these documents 12–18 months before your intended start date:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Valid passport (6+ months validity)</li>
            <li>Academic transcripts and certificates</li>
            <li>Bachelor&apos;s degree certificate (notarised)</li>
            <li>CV / résumé (Europass or DAAD format)</li>
            <li>Motivation letter (programme-specific)</li>
            <li>2 recommendation letters (academic or professional)</li>
            <li>IELTS / TOEFL / TestDaF score report</li>
          </ul>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Passport-sized photos (biometric)</li>
            <li>Proof of work experience (for EPOS / MBA)</li>
            <li>Research proposal (for PhD scholarships)</li>
            <li>DAAD application form (from portal)</li>
            <li>APS certificate (if required by programme)</li>
            <li>Published papers / portfolio (if applicable)</li>
          </ul>
        </div>
      </section>

      {/* Application Process Step-by-Step */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">How to Apply for Germany Scholarships from Nepal – Step by Step</h2>
          <ol className="space-y-4">
            {[
              { step: 'Research programmes', detail: 'Use DAAD database (daad.de) and study-in-germany.de. Filter by subject, level, language, and scholarship availability.' },
              { step: 'Check eligibility', detail: 'Verify GPA, language, experience requirements. DAAD EPOS needs 2+ years work experience.' },
              { step: 'Prepare documents (12–18 months early)', detail: 'Transcripts, recommendations, motivation letter, IELTS/TestDaF. Get notarised translations.' },
              { step: 'Apply for scholarships', detail: 'DAAD portal (Oct deadline for Master\'s), Erasmus+ via home university, Deutschlandstipendium via German university.' },
              { step: 'Apply to universities', detail: 'Via uni-assist.de or directly. Winter 2026 deadline: July 15. Some Master\'s close Jan–Apr.' },
              { step: 'Receive admission + scholarship decision', detail: 'Wait 2–4 months. Accept offer formally.' },
              { step: 'Open blocked account', detail: '€11,904 via Fintiba, Expatrio, or Coracle. Get blocking confirmation for visa.' },
              { step: 'Get health insurance', detail: 'Public (TK, AOK) or private (DR-WALTER, Mawista) depending on age and programme.' },
              { step: 'Apply for National Visa D', detail: 'German Embassy Kathmandu. Documents: passport, admission, blocked account, insurance, motivation. Fee €75. Processing 4–12 weeks.' },
              { step: 'Depart for Germany', detail: 'Arrive before semester start. Register at Ausländerbehörde within 2 weeks. Open bank account.' },
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-[#0056b3] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">{i + 1}</span>
                <div>
                  <span className="font-bold text-[#001F3F]">{s.step}</span>
                  <p className="text-gray-600 text-sm mt-0.5">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
          <Clock className="text-[#0056b3]" size={28} />
          Scholarship Deadlines & Application Timeline 2026
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm text-sm">
            <thead>
              <tr className="bg-[#001F3F] text-white">
                <th className="p-3 text-left">Period</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicationTimeline.map((t, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="p-3 font-medium whitespace-nowrap">{t.period}</td>
                  <td className="p-3">{t.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">Deadlines vary by programme. Check daad.de and uni-assist.de for exact dates.</p>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Studying in Germany for Nepali Students (2026)</h2>
          <p className="text-gray-700 mb-4">
            Even without a scholarship, Germany is one of the most affordable study destinations due to tuition-free public universities. The blocked account of <strong>€11,904</strong> (NPR {pageData.blockAccount.npr.toLocaleString('en-NP')}) is mandatory for visa. With a DAAD scholarship (€992/month), your blocked account requirement is waived as the scholarship covers living costs.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Item</th>
                  <th className="p-3 text-left">EUR</th>
                  <th className="p-3 text-left">NPR (approx)</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tuitionTable.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">{row.item}</td>
                    <td className="p-3">{row.eur}</td>
                    <td className="p-3">{row.npr}</td>
                    <td className="p-3 text-gray-500">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[#001F3F] mb-3">Living Expenses Breakdown (Monthly) – EUR & NPR</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Expense</th>
                  <th className="p-3 text-left">EUR/month</th>
                  <th className="p-3 text-left">NPR/month (approx)</th>
                </tr>
              </thead>
              <tbody>
                {livingCostNPR.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">{row.item}</td>
                    <td className="p-3">{row.eur}</td>
                    <td className="p-3">{row.npr}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50 font-bold">
                  <td className="p-3">Total (estimated)</td>
                  <td className="p-3">€850–€1,420</td>
                  <td className="p-3">1,21,550–2,03,060</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Munich / Berlin</p>
              <p className="text-lg font-bold">€1,000–€1,200/mo</p>
              <p className="text-sm text-gray-600">Higher rent; more job opportunities</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Leipzig / Aachen / Dresden</p>
              <p className="text-lg font-bold">€750–€950/mo</p>
              <p className="text-sm text-gray-600">Lower rent; student-friendly</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">1 EUR ≈ 143 NPR. Source: DAAD, German Federal Foreign Office.</p>
        </div>
      </section>

      {/* DAAD Contact */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">DAAD Contact for Nepali Students</h2>
        <p className="text-gray-700 mb-4">There is no DAAD office in Nepal. The <strong>DAAD Regional Office in New Delhi</strong> handles all queries from Nepali applicants:</p>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-bold text-[#001F3F] mb-1">DAAD Regional Office New Delhi</p>
              <p>c/o DLTA Complex, R.K. Khanna Stadium</p>
              <p>1 Africa Avenue, 110029 New Delhi, India</p>
            </div>
            <div>
              <p><strong>Phone:</strong> +91 (11) 6646-5500</p>
              <p><strong>Fax:</strong> +91 (11) 6646-5555</p>
              <p><strong>Email:</strong> <a href="mailto:info.newdelhi@daad.de" className="text-blue-600 hover:underline">info.newdelhi@daad.de</a></p>
              <p><strong>Website:</strong> <a href="https://www.daad.in/en/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">daad.in</a></p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">Source: DAAD Network. Strongly recommended: contact the New Delhi office for personalised scholarship advice.</p>
      </section>

      {/* Work Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Briefcase className="text-[#0056b3]" size={28} />
            Work Rights During and After Study in Germany
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>During study:</strong> 20 hrs/week during semester; full-time during breaks. Alternative: 140 full days or 280 half days/year. Minimum wage €12.82+/hr. No separate work permit needed.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>After graduation:</strong> 18-month job-seeker visa—one of Europe&apos;s most generous post-study work policies. Find a job matching your qualification, then switch to work residence permit. EU Blue Card available for high-skill roles (€45,300 salary threshold).
          </p>
          <p className="text-gray-600 text-sm">Source: <a href="https://www.make-it-in-germany.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Make it in Germany</a>, DAAD.</p>
        </div>
      </section>

      {/* Tips to Increase Chances */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
            <Award className="text-green-600" size={28} />
            Tips to Increase Your Scholarship Chances
          </h2>
          <ol className="text-gray-700 space-y-3 list-decimal list-inside">
            <li><strong>Start early:</strong> Begin preparation 12–18 months before your intended start date</li>
            <li><strong>Write a strong motivation letter:</strong> Be specific about why Germany, why this programme, and your career goals</li>
            <li><strong>Get strong recommendations:</strong> Ask professors or employers who know your work well—generic letters hurt</li>
            <li><strong>Highlight relevant experience:</strong> Work experience, research, volunteering, publications strengthen your profile</li>
            <li><strong>Apply to multiple scholarships:</strong> DAAD, Erasmus+, Deutschlandstipendium, and university-specific awards simultaneously</li>
            <li><strong>Learn basic German:</strong> Even A1/A2 shows commitment and helps your application stand out</li>
            <li><strong>Maintain high grades:</strong> GPA 3.0+ (or upper third) is the practical threshold for competitive scholarships</li>
            <li><strong>Tailor each application:</strong> One-size-fits-all motivation letters get rejected—customise for each programme</li>
          </ol>
        </div>
      </section>

      {/* Motivation Letter Guide */}
      <section className="py-16 bg-blue-50 border border-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">How to Write a DAAD Motivation Letter from Nepal</h2>
          <p className="text-gray-700 mb-4">
            The motivation letter (Statement of Purpose) is the <strong>single most important document</strong> in your DAAD application. A weak or generic letter is the top reason Nepali students get rejected. Here is how to write a compelling one:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-2">Must Include</h3>
              <ol className="text-gray-700 text-sm list-decimal list-inside space-y-2">
                <li><strong>Why this programme?</strong> Name specific courses, professors, or research areas at the university</li>
                <li><strong>Why Germany?</strong> Connect to your field—German engineering, research culture, industry links</li>
                <li><strong>Your academic background:</strong> Highlight relevant coursework, thesis, and grades</li>
                <li><strong>Professional experience:</strong> Connect work experience to your study goals</li>
                <li><strong>Future career plan:</strong> Show how you will use this degree back in Nepal or globally</li>
                <li><strong>Why you deserve the scholarship:</strong> Be specific about financial need and merit</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-2">Common Mistakes to Avoid</h3>
              <ul className="text-gray-700 text-sm list-disc list-inside space-y-2">
                <li>Using a generic template for all applications</li>
                <li>Not mentioning the specific university or programme name</li>
                <li>Writing more than 2–3 pages (DAAD typically wants 1–3 pages)</li>
                <li>Focusing only on personal story without connecting to academic goals</li>
                <li>Grammar and spelling errors—have someone proofread</li>
                <li>Not explaining gaps in education or career</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Our counselors at San Marina review and refine motivation letters for DAAD, Erasmus+, and university applications. <Link href="/consultation/" className="text-blue-600 hover:underline font-medium">Book a free consultation</Link> for personalised SOP feedback.
          </p>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2">
          <AlertTriangle className="text-amber-500" size={28} />
          Common Mistakes Nepali Students Make
        </h2>
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>Applying too late—DAAD deadlines are 12+ months before programme start</li>
            <li>Weak or generic motivation letter—the single most common rejection reason</li>
            <li>Not meeting GPA threshold—aim for upper third / 60%+ in Nepali grading</li>
            <li>Missing recommendation letters or using generic ones</li>
            <li>Confusing DAAD deadline with university admission deadline—they are separate</li>
            <li>Not preparing the blocked account (€11,904) early enough—bank processing takes time</li>
            <li>Ignoring German-taught programmes—these often have less competition</li>
            <li>Not checking APS requirements for specific programmes</li>
            <li>Submitting incomplete documents—double-check every requirement before submitting</li>
          </ul>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Germany vs Other Countries – Scholarship & Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-3 text-left">Country</th>
                  <th className="p-3 text-left">Tuition</th>
                  <th className="p-3 text-left">Living (Annual)</th>
                  <th className="p-3 text-left">Top Scholarship</th>
                  <th className="p-3 text-left">Post-Study Work</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-3 font-medium">{row.country}</td>
                    <td className="p-3">{row.tuition}</td>
                    <td className="p-3">{row.living}</td>
                    <td className="p-3">{row.scholarship}</td>
                    <td className="p-3">{row.psw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Germany offers the lowest total cost with the strongest scholarship support. Compare with <Link href="/scholarships/" className="text-blue-600 hover:underline">all scholarship destinations</Link>.
          </p>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help Applying for Germany Scholarships?</h2>
          <p className="text-blue-200 mb-6">
            Our DAAD-experienced counselors help Nepali students with scholarship applications, motivation letters, blocked account setup, and visa preparation. 400+ students placed. Offices in Kathmandu, Baneshwor, Ghorahi, Itahari.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
              Book Free Consultation
            </Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={18} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-2">Germany Scholarships for Nepali Students – FAQs</h2>
          <p className="text-gray-600 mb-8">Frequently asked questions targeting real search intent from Nepali students</p>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={pageData.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Germany Scholarship Journey Today</h2>
          <p className="text-blue-200 mb-6">
            From DAAD applications to blocked account setup to visa interview prep—we guide Nepali students through every step. Free consultation, no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/study-abroad/eur/germany/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Study in Germany Guide
            </Link>
            <Link href="/scholarships/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              All Scholarships
            </Link>
          </div>
          <p className="text-sm text-blue-300">
            Compare: <Link href="/scholarships/austria-for-nepali-students/" className="underline hover:text-white">Austria</Link> · <Link href="/scholarships/norway-for-nepali-students/" className="underline hover:text-white">Norway</Link> · <Link href="/scholarships/romania-for-nepali-students/" className="underline hover:text-white">Romania</Link> · <Link href="/scholarships/usa-for-nepali-students/" className="underline hover:text-white">USA</Link> · <Link href="/scholarships/italy-for-nepali-students/" className="underline hover:text-white">Italy</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
