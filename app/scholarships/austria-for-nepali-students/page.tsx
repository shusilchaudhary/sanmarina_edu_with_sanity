import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Scholarship in Austria for Nepali Students 2026 | OeAD, Webster Vienna & Masters',
  description: 'Scholarship in Austria for Nepali students 2026: OeAD, Webster Vienna scholarships for international students. Scholarship in Austria for masters, post doc scholarship in Vienna. Cost in NPR, residence permit. Free consultation.',
  keywords: 'scholarship in austria, scholarship in austria for masters, masters in healthcare administration in austria with scholarships, post doc scholarship in vienna austria, webster vienna scholarships for international students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/austria-for-nepali-students/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/scholarships/austria-for-nepali-students/',
    title: 'Scholarship in Austria for Nepali Students 2026 | OeAD & Webster Vienna',
    description: 'Complete guide: scholarship in Austria, OeAD, residence permit, cost in NPR. Nepal-specific visa steps.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-17',
    modifiedTime: '2026-03-07',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship in Austria for Nepali Students 2026',
    description: 'OeAD, Webster Vienna, post-doc. Tuition €727/sem. Residence permit guide.',
  },
};

// Official sources: OeAD, migration.gv.at, studyinaustria.at, Austrian Federal Ministry of Education. 1 EUR ≈ 143 NPR (Feb 2026)
const pageData = {
  lastUpdated: 'February 2026',
  tuitionPerSemester: 727,
  proofUnder24: 673,
  proofOver24: 1217,
  livingMin: 950,
  livingMax: 1100,
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  faqs: [
    {
      question: 'Is Austria good for Nepali students?',
      answer: 'Yes. Scholarship in Austria for Nepali students includes OeAD (Ernst Mach Grant, post doc scholarship in vienna austria), Webster Vienna scholarships for international students (€4,000–€12,000/year), and low public tuition (~€727/semester). Public universities in Austria with low tuition fees: University of Vienna, TU Wien, WU Vienna. Cost of living in Austria for Nepali students: €950–€1,100/month. Austria residence permit for students allows 12-month post-study job search. Source: OeAD, studyinaustria.at.',
    },
    {
      question: 'How much bank balance is required for Austria student visa from Nepal?',
      answer: 'Proof of funds: under 24 years ~€673/month; 24+ years ~€1,217/month. Annual: €15,000–€25,000 typical (NPR 21–36 lakhs). Sperrkonto (blocked account) €12,000+ accepted. Bank statements within 3 months. Apply at Austrian Honorary Consulate, Kathmandu. Source: migration.gv.at, OeAD.',
    },
    {
      question: 'What is the cost of living in Austria for Nepali students?',
      answer: '€950–€1,300/month (NPR 1.36–1.86 lakhs). Vienna and Salzburg higher; Linz/Graz cheaper. Includes rent €400–700, food €250–350, transport, insurance. Public tuition ~€727/semester (€1,454/year). First year total: €14,000–€28,000 (NPR 20–40 lakhs). 1 EUR ≈ 143 NPR. Source: studyinaustria.at, OeAD.',
    },
    {
      question: 'What is the Austria student visa process from Nepal step by step?',
      answer: '1) Apply to Austrian universities (winter deadline typically Sept 5 or July for non-EU). 2) Receive admission, pay tuition. 3) Legalize documents via Nepalese authorities, then Austrian Honorary Consulate, Kathmandu. 4) Gather proof of funds (€673–€1,217/month). 5) Apply for residence permit – student at Austrian embassy/consulate (VFS handles). 6) Processing 4–12 weeks; apply 6 months ahead. Source: OeAD, migration.gv.at.',
    },
    {
      question: 'Which public universities in Austria have low tuition fees?',
      answer: 'Public universities: ~€727/semester for non-EU (€1,454/year). University of Vienna, TU Wien, WU Vienna, JKU Linz, University of Graz, University of Salzburg. FH (Universities of Applied Sciences): €363–€7,500/semester. Many offer tuition exemptions for developing countries. Source: studyinaustria.at, OeAD.',
    },
    {
      question: 'What is the winter intake 2026 Austria deadline for Nepali students?',
      answer: 'Winter semester 2026: EU/EEA typically Sept 5; non-EU earlier (e.g. TU Wien July 15 for preceding cycle). Webster Vienna: May 31, 2026 for Fall. OeAD Ernst Mach: Feb 1, 2026. Apply 6+ months before for visa. Source: studyinaustria.at, oead.at.',
    },
    {
      question: 'Can I study in Austria without IELTS from Nepal?',
      answer: 'IELTS not required for Austrian visa. For English programmes: universities may accept TOEFL, Cambridge, or prior English-medium proof. Scholarship in Austria for masters: check programme; Webster Vienna requires B2–C1. For German programmes: Goethe/ÖSD A2 for application; C1 for admission. Source: studyinaustria.at.',
    },
    {
      question: 'What is the Austria residence permit for students?',
      answer: 'Residence permit – student: for stays longer than 6 months. Requires admission, proof of funds (~€673/month under 24 or €1,217/month 24+), health insurance, accommodation. Apply at Austrian Honorary Consulate, Kathmandu (22 Manakamana Marg, Nagpokhari). Processing up to 90 days. After graduation: 12-month job-search permit. Source: migration.gv.at, OeAD.',
    },
    {
      question: 'What is scholarship in Austria for masters?',
      answer: 'Scholarship in Austria for masters: OeAD Ernst Mach Grant (1–9 months, Feb 1 deadline), university merit awards, Webster Vienna (€5,000–€8,000/year for Master\'s). Masters in healthcare administration in austria with scholarships: check FH and private options; some offer partial funding. Public Master tuition ~€727/semester. Source: OeAD, grants.at.',
    },
    {
      question: 'What is post doc scholarship in Vienna Austria?',
      answer: 'Post doc scholarship in vienna austria: OeAD Ernst Mach Grant – Worldwide (PhD, postgraduates, postdocs; 1–9 months; deadline Feb 1, 2026). Ernst Mach Follow-Up Grant for prior OeAD recipients. Richard Plaschka Fellowship (historical sciences; 4–18 months). Apply via grants.at. Source: OeAD, euraxess.at.',
    },
    {
      question: 'What are Webster Vienna scholarships for international students?',
      answer: 'Webster Vienna scholarships for international students: Distinction €12,000/yr (Bachelor) or €8,000/yr (Master); Merit €7,000/€5,000; Honors €4,000/€3,000. Min 3.0 GPA (3.5 for Distinction), B2–C1 English. Fall 2026 deadline: May 31. Apply after admission. Source: webster.ac.at.',
    },
    {
      question: 'Is there masters in healthcare administration in Austria with scholarships?',
      answer: 'Masters in healthcare administration in Austria: FH and private universities offer programmes. Scholarship in Austria for masters in healthcare: OeAD Ernst Mach (short stays), university-specific merit, Webster Vienna (if offered). Public universities: check University of Vienna, Medical University of Vienna. Tuition ~€727/semester at public. Source: studyinaustria.at, OeAD.',
    },
  ],
};

export default function AustriaScholarshipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Scholarship in Austria for Nepali Students 2026 – Complete Guide',
        description: 'OeAD, Webster Vienna, post-doc. Tuition €727/sem. Residence permit, cost in NPR.',
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
          { '@type': 'ListItem', position: 3, name: 'Scholarship in Austria for Nepali Students', item: 'https://www.sanmarina.edu.np/scholarships/austria-for-nepali-students/' },
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
          <Image src="/assets/europe.jpg" alt="Scholarship in Austria for Nepali students - OeAD, Vienna, study abroad 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/scholarships/" className="hover:text-white">Scholarships</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Austria for Nepali Students</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scholarship in Austria for Nepali Students
            <br />
            <span className="text-blue-300">2026 – OeAD, Webster Vienna & Masters Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Scholarship in Austria for masters, post doc scholarship in Vienna Austria, Webster Vienna scholarships for international students. Tuition ~€727/semester. Austria residence permit for students. Step-by-step from Nepal.
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
            <strong>Data from OeAD, migration.gv.at, studyinaustria.at, Austrian Federal Ministry of Education.</strong> Verify with official sources before applying.
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
            <strong>Scholarship in Austria for Nepali students 2026:</strong> OeAD Ernst Mach Grant (post doc scholarship in vienna austria; deadline Feb 1, 2026). Webster Vienna scholarships for international students: €4,000–€12,000/year (May 31 Fall deadline). Public tuition ~€727/semester. How much bank balance: ~€673/month (under 24) or €1,217/month (24+). Austria residence permit for students: apply 6 months ahead at Austrian Honorary Consulate, Kathmandu. Cost of living in Austria for Nepali students: €950–€1,100/month. 1 EUR ≈ 143 NPR.
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Public tuition: ~€727/semester (OeAD, studyinaustria.at)</li>
            <li>OeAD Ernst Mach: Feb 1, 2026 (grants.at)</li>
            <li>Webster Vienna: May 31, 2026 for Fall; €4,000–€12,000/yr</li>
            <li>1 EUR ≈ 143 NPR (Feb 2026)</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '€727', label: 'Tuition/semester (Public)' },
              { value: '€4K–12K', label: 'Webster Vienna/yr' },
              { value: 'Feb 1', label: 'OeAD 2026 Deadline' },
              { value: '12 mo', label: 'Post-Study' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Austria */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Austria Is a Smart Choice for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          Austria combines the academic prestige of Central Europe with surprisingly affordable education costs. With public university tuition at just ~€727 per semester—far below UK or Australian fees—and a strong scholarship ecosystem through OeAD and Webster Vienna, Austria is one of the most cost-effective study destinations in Europe for Nepali students.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Low public university tuition:</strong> ~€727/semester at University of Vienna, TU Wien, WU Vienna—among Europe&apos;s lowest for non-EU</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>World-class institutions:</strong> University of Vienna (founded 1365), Vienna University of Technology (TU Wien), WU Vienna (QS top 500)</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>OeAD scholarships:</strong> Ernst Mach Grant available to Nepali students for Master&apos;s, PhD, and postdoc research</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Safe, culturally rich:</strong> Vienna consistently ranks #1 or #2 in Mercer&apos;s Quality of Living index globally</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Post-study options:</strong> 12-month job-search permit after graduation; Red-White-Red Card for skilled workers</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>English-taught programmes:</strong> TU Wien, WU Vienna, and Graz University offer English-medium Master&apos;s without German requirement</span></li>
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          Read our full <Link href="/study-abroad/eur/austria/" className="text-blue-600 hover:underline font-medium">Study in Austria guide</Link> for tuition, visa, and programme details.
        </p>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarship in Austria – Complete Breakdown</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">OeAD Scholarships</h3>
            <p className="text-gray-700 mb-3">
              OeAD (Austria's Agency for Education and Internationalisation) offers scholarship in Austria for masters, researchers, and post-docs. Ernst Mach Grant – Worldwide: PhD, postgraduates, post doc scholarship in vienna austria; 1–9 months; deadline Feb 1, 2026. Ernst Mach for UAS: undergrad/graduate; 4–10 months; Feb 1. Franz Werfel (German language); Richard Plaschka (historical sciences). Apply via grants.at. Stipends cover living; accommodation €220–550/month. Source: OeAD, euraxess.at.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Webster Vienna Scholarships for International Students</h3>
            <p className="text-gray-700 mb-3">
              Webster Vienna Private University: Distinction €12,000/yr (Bachelor) or €8,000/yr (Master); Merit €7,000/€5,000; Honors €4,000/€3,000. Min 3.0 GPA (3.5 for Distinction), B2–C1 English. Fall 2026 deadline: May 31. Spring: Nov 30. Apply after admission. Renewables with 3.0 GPA. Social sciences, humanities, economics, psychology. Source: webster.ac.at.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Scholarship in Austria for Masters & Post-Doc</h3>
            <p className="text-gray-700">
              Scholarship in Austria for masters: OeAD Ernst Mach, university merit, Webster Vienna. Masters in healthcare administration in austria with scholarships: check FH programmes; some offer partial funding. Post doc scholarship in vienna austria: Ernst Mach Grant, Ernst Mach Follow-Up, Richard Plaschka. Public Master tuition ~€727/semester. Source: OeAD, studyinaustria.at.
            </p>
          </div>
        </div>
      </section>

      {/* Tips to Increase Chances */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Tips to Increase Your Scholarship Chances in Austria</h2>
          <ol className="text-gray-700 space-y-3 list-decimal list-inside">
            <li><strong>Apply early for OeAD:</strong> The February 1 deadline arrives quickly—prepare your research project description and supervisor agreement 3–4 months in advance</li>
            <li><strong>Secure a host supervisor first:</strong> OeAD Ernst Mach requires a letter from an Austrian supervisor. Email professors at TU Wien or University of Vienna before applying</li>
            <li><strong>Aim for a 3.5+ GPA for Webster Distinction:</strong> The Distinction tier (€12,000/year) more than covers half of Webster Vienna&apos;s tuition—strongly worth pursuing</li>
            <li><strong>Learn basic German:</strong> Even A1/A2 German proficiency opens access to thousands more programmes and significantly impresses public university admissions committees</li>
            <li><strong>Legalize documents early:</strong> The Nepali legalisation process takes 2–6 weeks—delays here can derail your entire application timeline</li>
            <li><strong>Prepare a blocked account proactively:</strong> The Sperrkonto (€12,000+) takes several weeks to set up—start before receiving admission</li>
            <li><strong>Apply to both OeAD and Webster simultaneously:</strong> OeAD is for research stays; Webster is for full degrees—they serve different goals and can be pursued in parallel</li>
          </ol>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Common Mistakes Nepali Students Make Applying for Austria Scholarships</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Confusing OeAD with Full-Degree Scholarship</h3>
            <p className="text-gray-700 text-sm">The OeAD Ernst Mach Grant is for research stays (1–9 months)—not full Bachelor&apos;s or Master&apos;s degrees. Students who apply expecting full-degree funding are consistently disappointed.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Skipping Document Legalisation</h3>
            <p className="text-gray-700 text-sm">Austria requires a specific legalisation chain (Nepali MFA → Austrian Honorary Consulate). Submitting non-legalised documents causes visa rejection regardless of academic merit.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Applying Without a Host Supervisor</h3>
            <p className="text-gray-700 text-sm">OeAD requires a host institution and supervisor letter. Many applicants spend weeks preparing the application only to realise they haven&apos;t secured a supervisor first.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Applying Late to Non-EU Deadline</h3>
            <p className="text-gray-700 text-sm">Non-EU students (including Nepali) have earlier application deadlines than EU students at Austrian public universities—some universities close non-EU applications in June or July for October start.</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">Our scholarship specialists in Kathmandu have helped students navigate Austria&apos;s complex application process. <Link href="/consultation/" className="text-blue-600 hover:underline font-medium">Book a free consultation</Link> today.</p>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Living in Austria for Nepali Students (2026)</h2>
          <p className="text-gray-700 mb-4">
            How much bank balance is required for Austria student visa from Nepal? Proof: under 24 ~€673/month; 24+ ~€1,217/month. Public universities in Austria with low tuition fees: ~€727/semester.
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
                <tr className="border-b"><td className="p-3">Tuition (semester, public)</td><td className="p-3">~727</td><td className="p-3">1.04 lakhs</td></tr>
                <tr className="border-b"><td className="p-3">Living (monthly)</td><td className="p-3">950–1,100</td><td className="p-3">1.36–1.57 lakhs</td></tr>
                <tr className="border-b"><td className="p-3">Proof of funds (monthly)</td><td className="p-3">673–1,217</td><td className="p-3">96k–1.74L</td></tr>
                <tr className="border-b"><td className="p-3">Residence permit fee</td><td className="p-3">~160</td><td className="p-3">23k</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">1 EUR ≈ 143 NPR. Source: migration.gv.at, OeAD.</p>
        </div>
      </section>

      {/* Visa + Residence Permit */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Austria Student Visa Process from Nepal Step by Step</h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li><strong>Apply to universities:</strong> Winter intake 2026 Austria deadline: typically Sept 5 (EU) or July (non-EU). Check studyinaustria.at.</li>
          <li><strong>Receive admission</strong> and pay tuition (~€727/semester).</li>
          <li><strong>Legalize documents:</strong> Nepalese authorities, then Austrian Honorary Consulate, Kathmandu (22 Manakamana Marg, Nagpokhari).</li>
          <li><strong>Gather proof of funds:</strong> €673/month (under 24) or €1,217/month (24+). Bank statements or Sperrkonto €12,000+.</li>
          <li><strong>Apply for residence permit – student</strong> at Austrian embassy/consulate (VFS handles).</li>
          <li><strong>Processing:</strong> Up to 90 days. Apply 6 months ahead. Austria residence permit for students allows 12-month post-study job search.</li>
        </ol>
      </section>

      {/* Work Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work Rights During Study</h2>
          <p className="text-gray-700">
            Up to 20 hours/week. Employer applies to AMS (Public Employment Service); permit typically 4–6 weeks. Employment must not affect studies. Compulsory internships: employer notifies AMS 3 weeks before. Post-study: 12-month job-search permit; then Red-White-Red Card if employed. Source: migration.gv.at, OeAD.
          </p>
        </div>
      </section>

      {/* Austria vs Germany */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Austria vs Germany – Cost Difference</h2>
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
              <tr className="border-b"><td className="p-3 font-semibold">Austria</td><td className="p-3">~€1,454</td><td className="p-3">€950–1,100</td><td className="p-3">12 months</td></tr>
              <tr className="border-b"><td className="p-3">Germany</td><td className="p-3">€0 (most)</td><td className="p-3">€11,904/yr blocked</td><td className="p-3">18 months</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mt-4">
          Austria charges ~€727/semester; Germany is tuition-free at most public universities. Austria has OeAD and Webster Vienna scholarships; Germany has DAAD. Both offer strong scholarship in Austria for masters and research. Source: OeAD, DAAD.
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply for Scholarship in Austria?</h2>
          <p className="text-blue-200 mb-8">
            Our experts help with OeAD applications, document legalization, and residence permit preparation. Free consultation in Kathmandu, Baneshwor, Dang, and Itahari.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
              Book Free Consultation
            </Link>
            <Link href="/study-abroad/eur/austria/" className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
              Study in Austria Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
