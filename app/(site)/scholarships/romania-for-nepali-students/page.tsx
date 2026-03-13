import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight } from 'lucide-react';
import FAQAccordion from '@/components/FAQ/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Scholarship in Romania for Nepali Students 2026 | Government, PhD & Masters',
  description: 'Scholarship in Romania for Nepali students 2026: Government scholarship (tuition + accommodation + stipend). Masters €75/mo, PhD €85/mo. Study in Romania scholarship. Cost in NPR, visa steps. Free consultation.',
  keywords: 'scholarship in romania, scholarship in romania for nepali students, study in romania scholarship, government scholarship in romania, masters scholarship in romania, phd scholarship in romania, full scholarship in romania for international students',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/romania-for-nepali-students/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.sanmarina.edu.np/scholarships/romania-for-nepali-students/',
    title: 'Scholarship in Romania for Nepali Students 2026 | Government, PhD & Masters',
    description: 'Romanian Government scholarship: tuition + accommodation + stipend. Cost in NPR, visa, residence permit. Nepal-specific guide.',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    publishedTime: '2026-02-26',
    modifiedTime: '2026-03-07',
    authors: ['San Marina Education Consultancy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship in Romania for Nepali Students 2026',
    description: 'Government scholarship: tuition + accommodation. Stipend €65–€85/mo. Cost in NPR.',
  },
};

// Official sources: studyinromania.gov.ro, scholarships.studyinromania.gov.ro, Romanian Ministry of Foreign Affairs, IGI (igi.mai.gov.ro). 1 EUR ≈ 143 NPR (Feb 2026)
const pageData = {
  lastUpdated: 'February 2026',
  proofMin: 3000,
  tuitionMin: 400,
  tuitionMax: 9000,
  livingMonthly: 600,
  govtBachelor: 65,
  govtMasters: 75,
  govtPhd: 85,
  author: {
    name: 'San Marina Education Consultancy',
    role: 'QEAC Certified Education Consultants',
    expertise: 'Study abroad for Nepali students since 2014',
  },
  faqs: [
    {
      question: 'Is Romania good for Nepali students?',
      answer: 'Yes. Scholarship in Romania for Nepali students includes the government scholarship in Romania: full tuition, accommodation in dormitories, and monthly stipend (Bachelor €65, Masters €75, PhD €85). Public universities in Romania with low tuition fees: €400–€9,000/year. Cost of living in Romania for Nepali students: ~€600/month. Work rights for international students in Romania: 4 hours/day without work permit. Source: studyinromania.gov.ro, scholarships.studyinromania.gov.ro.',
    },
    {
      question: 'How much bank balance is required for Romania student visa from Nepal?',
      answer: 'Bank balance required for Romania student visa from Nepal: minimum €3,000 for residence permit; €2,500–€3,000 for visa application. Some sources require proof equal to minimum gross national salary (~€814/month) for entire stay. Provide bank statements within 3 months; scholarship letter accepted. 1 EUR ≈ 143 NPR (NPR ~4.3 lakhs for €3,000). Apply via evisa.mae.ro; Honorary Consulate of Romania in Kathmandu. Source: studyinromania.gov.ro, igi.mai.gov.ro.',
    },
    {
      question: 'What is the cost of living in Romania for Nepali students?',
      answer: 'Cost of living in Romania for Nepali students: ~€600/month (NPR 86k). Dorm €60–€85; shared €80–€150; private €130–€300. Food €100–€300; transport €10–€30; insurance €12–€49. Bucharest and Cluj-Napoca higher. Full scholarship in romania for international students (government) covers tuition and accommodation; stipend supplements living. Tuition €400–€9,000/year if self-funded. Source: studyinromania.gov.ro.',
    },
    {
      question: 'What is the Romania student visa process from Nepal step by step?',
      answer: 'Romania student visa process from Nepal step by step: 1) Apply to Romanian universities or government scholarship (deadline typically March for scholarship). 2) Obtain acceptance from Ministry of Education (Letter of Acceptance). 3) Pay tuition for at least one year (if not on scholarship). 4) Gather proof of funds (€3,000+), insurance, criminal record, passport. 5) Apply via evisa.mae.ro; submit at Honorary Consulate of Romania in Kathmandu. 6) After entry: apply for residence permit at IGI; fee 260 RON; valid 1 year, renewable. Source: studyinromania.gov.ro, igi.mai.gov.ro.',
    },
    {
      question: 'What is residence permit for study in Romania?',
      answer: 'Residence permit for study in Romania: Temporary residence for study purposes. Apply at General Inspectorate for Immigration (IGI) after entry. Requires acceptance letter, proof of funds (€3,000 in Romanian bank), certificate of attendance. Fee 260 RON; consular €120. Valid 1 year, renewable annually; scholarship holders may receive full duration. Work rights for international students in Romania: 4 hours/day without work permit. Source: studyinromania.gov.ro, igi.mai.gov.ro.',
    },
    {
      question: 'Can I study in Romania without IELTS from Nepal?',
      answer: 'IELTS not required for Romanian visa. Government scholarship in Romania: Bachelor and Master programmes taught in Romanian; PhD may be in English. For English programmes: universities may accept TOEFL, Cambridge, or prior degree. Masters scholarship in romania and PhD scholarship in romania: check programme language. Preparatory year in Romanian available. Source: studyinromania.gov.ro.',
    },
    {
      question: 'What is the September intake 2026 Romania deadline?',
      answer: 'September intake 2026 Romania deadline: Non-EU typically July–August. Government scholarship for 2026/27: apply by typically March (e.g. March 12 for 2025/26); results June. University applications vary; main period May–August. Apply early for visa processing. Source: studyinromania.gov.ro, scholarships.studyinromania.gov.ro.',
    },
    {
      question: 'What is scholarship in Romania for Nepali students?',
      answer: 'Scholarship in Romania for Nepali students: Romanian Government scholarship (Ministry of Foreign Affairs)—full tuition, accommodation, stipend (Bachelor €65, Masters €75, PhD €85/month). Apply scholarships.studyinromania.gov.ro; deadline typically March. University merit awards. Erasmus+. Full scholarship in romania for international students covers tuition and dorm; stipend for personal expenses. Medicine, Dental, Pharmacy excluded. Source: studyinromania.gov.ro.',
    },
    {
      question: 'What is government scholarship in Romania?',
      answer: 'Government scholarship in Romania: Ministry of Foreign Affairs annual programme for non-EU citizens. Covers tuition, accommodation in student dormitories, stipend (Bachelor €65, Masters €75, PhD €85/month). Bachelor 3–6 years, Master 1–2, PhD 3–5. Programmes in Romanian (Bachelor/Master); PhD may be English. Apply scholarships.studyinromania.gov.ro; min average 7/10. Medicine, Dental, Pharmacy excluded. Source: studyinromania.gov.ro.',
    },
    {
      question: 'What is masters scholarship in Romania?',
      answer: 'Masters scholarship in Romania: Government scholarship €75/month stipend plus tuition and accommodation. Study in romania scholarship options include university merit. Tuition €400–€9,000/year if self-funded. Masters scholarship in romania from government: 1–2 years; taught in Romanian. Apply by March. Source: scholarships.studyinromania.gov.ro, studyinromania.gov.ro.',
    },
    {
      question: 'What is PhD scholarship in Romania?',
      answer: 'PhD scholarship in Romania: Government scholarship €85/month stipend, tuition, accommodation. PhD 3–5 years; may be in English. Requires doctoral advisor agreement. PhD scholarship in romania from government: apply scholarships.studyinromania.gov.ro; deadline typically March. University-funded positions also available. Source: studyinromania.gov.ro.',
    },
    {
      question: 'What are work rights for international students in Romania?',
      answer: 'Work rights for international students in Romania: Non-EU students with residence permit can work up to 4 hours per day without separate work permit. EU/EEA students work on same terms as Romanians. Valid while student status active. Bucharest, Cluj-Napoca, Timișoara have active job markets. Source: studyinromania.gov.ro, stinwo.ro.',
    },
  ],
};

export default function RomaniaScholarshipsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Scholarship in Romania for Nepali Students 2026 – Complete Guide',
        description: 'Government scholarship: tuition + accommodation + stipend. Cost in NPR.',
        datePublished: '2026-02-26',
        dateModified: '2026-03-07',
        author: { '@type': 'Organization', name: pageData.author.name, url: 'https://www.sanmarina.edu.np' },
        publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Scholarships', item: 'https://www.sanmarina.edu.np/scholarships/' },
          { '@type': 'ListItem', position: 3, name: 'Scholarship in Romania for Nepali Students', item: 'https://www.sanmarina.edu.np/scholarships/romania-for-nepali-students/' },
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
          <Image src="/assets/romania.jpg" alt="Scholarship in Romania for Nepali students - Bucharest, government scholarship, study abroad 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/scholarships/" className="hover:text-white">Scholarships</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Romania for Nepali Students</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {pageData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Scholarship in Romania for Nepali Students
            <br />
            <span className="text-blue-300">2026 – Government, PhD & Masters Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Government scholarship in Romania, study in romania scholarship. Full scholarship in romania for international students. Tuition + accommodation + stipend. Cost in NPR, visa steps.
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
            <strong>Data from studyinromania.gov.ro, scholarships.studyinromania.gov.ro, Romanian Ministry of Foreign Affairs, IGI (igi.mai.gov.ro).</strong> Verify with official sources before applying.
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
            <strong>Scholarship in Romania for Nepali students 2026:</strong> Government scholarship in Romania (Ministry of Foreign Affairs): full tuition, accommodation in dormitories, monthly stipend (Bachelor €65, Masters €75, PhD €85). Apply scholarships.studyinromania.gov.ro; deadline typically March. Full scholarship in romania for international students. Tuition if self-funded: €400–€9,000/year. Bank balance required: €3,000+. Romania student visa from Nepal: evisa.mae.ro; Honorary Consulate Kathmandu. Cost of living in Romania for Nepali students: ~€600/month. Work 4 hrs/day. 1 EUR ≈ 143 NPR.
          </p>
          <h3 className="text-base font-bold text-[#001F3F] mb-2">Key Facts</h3>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            <li>Government scholarship: tuition + accommodation + stipend (studyinromania.gov.ro)</li>
            <li>Stipend: Bachelor €65, Masters €75, PhD €85/mo</li>
            <li>Apply by: typically March (scholarships.studyinromania.gov.ro)</li>
            <li>Proof of funds: €3,000+ (igi.mai.gov.ro)</li>
            <li>1 EUR ≈ 143 NPR (Feb 2026)</li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '€65–85', label: 'Stipend/mo' },
              { value: '€400–9k', label: 'Tuition/Year' },
              { value: 'Mar', label: 'Govt Deadline' },
              { value: '4 hrs', label: 'Work/Day' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Romania */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Romania Is a Hidden Gem for Nepali Students</h2>
        <p className="text-gray-700 mb-4">
          Romania is one of the most underrated study destinations in Europe. As an EU member with globally recognised universities, Romania offers Nepali students the rare combination of a <strong>fully-funded government scholarship</strong> (tuition + accommodation + monthly stipend), low living costs (~€600/month), and an Honorary Romanian Consulate right in Kathmandu to process visa applications.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Fully-funded government scholarship:</strong> Ministry of Foreign Affairs programme covers tuition + accommodation + monthly stipend (Bachelor €65, Masters €75, PhD €85)</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>EU-recognised degrees:</strong> University of Bucharest, Babes-Bolyai University (Cluj-Napoca), University of Iasi—Bologna system, recognised across Europe</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Lowest living costs in EU:</strong> ~€600/month total (student dorms from €60/month)—significantly cheaper than any Western European country</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Consulate in Kathmandu:</strong> Honorary Consulate of Romania at Kathmandu processes visa applications—no need to travel to a third country</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Work rights:</strong> 4 hrs/day without a separate work permit—partial income from part-time work is feasible</span></li>
          <li className="flex items-start gap-2"><span className="text-blue-600 font-bold mt-1">✓</span><span><strong>Medical education:</strong> Romania is a top destination for medicine—though excluded from the government scholarship, medical programmes are significantly cheaper than UK/AU</span></li>
        </ul>
        <p className="text-gray-600 text-sm mt-4">
          Explore our full <Link href="/study-abroad/" className="text-blue-600 hover:underline font-medium">Study in Europe guide</Link> to compare Romania with other European destinations.
        </p>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Scholarship in Romania – Complete Breakdown</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">Government Scholarship in Romania (Ministry of Foreign Affairs)</h3>
            <p className="text-gray-700 mb-3">
              Government scholarship in Romania: Ministry of Foreign Affairs annual programme for non-EU citizens. Full scholarship in romania for international students. Covers tuition, accommodation in student dormitories, monthly stipend (Bachelor €65, Masters €75, PhD €85). Nepal eligible. Bachelor 3–6 years, Master 1–2, PhD 3–5. Programmes in Romanian (Bachelor/Master); PhD may be in English. Medicine, Dental, Pharmacy excluded. Min average 7/10. Apply scholarships.studyinromania.gov.ro; deadline typically March (e.g. March 12 for 2025/26). Source: studyinromania.gov.ro.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">University Scholarships & Erasmus+</h3>
            <p className="text-gray-700">
              Study in romania scholarship: universities offer merit awards. Erasmus+ and Erasmus Mundus include Romanian institutions. Masters scholarship in romania and PhD scholarship in romania from universities vary. Public universities in Romania with low tuition fees: €400–€9,000/year. Bucharest, Cluj-Napoca, Timișoara, Iași. Source: studyinromania.gov.ro.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Eligibility Requirements for Government Scholarship in Romania</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Romanian Government Scholarship Eligibility</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Non-EU citizens (Nepal is fully eligible)</li>
                <li>Minimum average grade of 7/10 in previous studies</li>
                <li>Bachelor&apos;s degree for Master&apos;s programmes; Master&apos;s for PhD</li>
                <li>Romanian language proficiency (Bachelor&apos;s/Masters usually in Romanian)</li>
                <li>PhD programmes may be in English—confirm with university directly</li>
                <li>Medicine, Dental, and Pharmacy excluded from this scholarship</li>
                <li>Deadline: typically March each year (scholarships.studyinromania.gov.ro)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">Self-Funded University Admission Requirements</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1">
                <li>Bachelor&apos;s degree for Master&apos;s (English proficiency if English-taught)</li>
                <li>Letter of Acceptance from Romanian Ministry of Education</li>
                <li>Proof of funds: €3,000 minimum in Romanian bank</li>
                <li>Tuition pre-payment for at least first year (if not on scholarship)</li>
                <li>University applications: typically July–August for September start</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Source: studyinromania.gov.ro, scholarships.studyinromania.gov.ro, igi.mai.gov.ro. Requirements may vary by university.</p>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Documents Required for Romania Scholarship &amp; Visa</h2>
        <p className="text-gray-700 mb-4">Romania&apos;s Honorary Consulate in Kathmandu (Kamaladi, Kathmandu) processes student visas. The e-visa portal (evisa.mae.ro) can be used for initial application. Apply at least 3 months before your intended start date.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Valid passport (6+ months validity)</li>
            <li>Academic transcripts (legalised + translated to Romanian/English)</li>
            <li>Degree certificate (notarised)</li>
            <li>Letter of Acceptance from Romanian Ministry of Education</li>
            <li>Criminal background certificate</li>
            <li>CV / résumé (academic)</li>
          </ul>
          <ul className="text-gray-700 list-disc list-inside space-y-2">
            <li>Proof of funds: €3,000 minimum (bank statements)</li>
            <li>Health insurance certificate</li>
            <li>Accommodation proof (university dorm letter or private)</li>
            <li>Scholarship acceptance letter (if on govt. scholarship)</li>
            <li>Tuition payment receipt (if self-funded, first year)</li>
            <li>Passport-sized photographs</li>
          </ul>
        </div>
        <p className="text-gray-500 text-sm mt-3">After arrival: apply for residence permit at IGI within 30 days. Fee: 260 RON + €120 consular fee. Source: studyinromania.gov.ro, igi.mai.gov.ro.</p>
      </section>

      {/* Tips to Increase Chances */}
      <section className="py-16 bg-green-50 border border-green-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Tips to Increase Your Government Scholarship Chances in Romania</h2>
          <ol className="text-gray-700 space-y-3 list-decimal list-inside">
            <li><strong>Apply by March (or earlier):</strong> The government scholarship deadline is typically mid-March—apply as soon as the portal opens in January/February; places are limited</li>
            <li><strong>Prepare Romanian language basics:</strong> Bachelor&apos;s and Master&apos;s are primarily in Romanian. Enrolling in a preparatory year (1 year of Romanian language, free with scholarship) is strongly recommended for Nepali students without prior Romanian</li>
            <li><strong>Maintain 7/10 average:</strong> The minimum grade average requirement (7/10 equivalent) must be clearly demonstrated in your transcripts—provide certified grade conversions if needed</li>
            <li><strong>Choose non-excluded fields:</strong> Medicine, Dentistry, and Pharmacy are excluded from the government scholarship—choose Law, Engineering, IT, or Social Sciences for best chances</li>
            <li><strong>Contact the Honorary Consulate early:</strong> The Honorary Consulate of Romania in Kathmandu has limited appointment slots; book early to avoid delays</li>
            <li><strong>Prepare criminal record certificate:</strong> This takes 2–4 weeks to obtain from Nepal Police—start this process before receiving your scholarship confirmation</li>
          </ol>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Common Mistakes Nepali Students Make Applying for Romania</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Applying for Medicine Under Government Scholarship</h3>
            <p className="text-gray-700 text-sm">Medicine, Dental, and Pharmacy are explicitly excluded from the Romanian Government scholarship programme. Students who apply for these fields through the scholarship portal are automatically disqualified.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Underestimating the Language Requirement</h3>
            <p className="text-gray-700 text-sm">Most Bachelor&apos;s and Master&apos;s programmes are in Romanian. Students who arrive without basic Romanian often struggle significantly in the first year. The government scholarship includes a preparatory language year—use it.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Missing the March Scholarship Deadline</h3>
            <p className="text-gray-700 text-sm">The Romanian government scholarship portal closes in mid-March each year, with results announced in June. Students who miss this window must wait a full year or self-fund. Set calendar reminders for January to start preparing.</p>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <h3 className="font-bold text-red-700 mb-2">❌ Not Applying for IGI Permit on Arrival</h3>
            <p className="text-gray-700 text-sm">Students must apply for their residence permit at the General Inspectorate for Immigration (IGI) within 30 days of arrival. Many students are unaware of this strict deadline and face penalties.</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">Our Romania specialists at San Marina have guided students through government scholarship applications, language preparation, and IGI registration. <Link href="/consultation/" className="text-blue-600 hover:underline font-medium">Book a free consultation</Link>.</p>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Cost of Living in Romania for Nepali Students (2026)</h2>
          <p className="text-gray-700 mb-4">
            Bank balance required for Romania student visa from Nepal: €3,000+. Living ~€600/month.
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
                <tr className="border-b"><td className="p-3">Tuition (yearly)</td><td className="p-3">400–9,000</td><td className="p-3">57k–12.9L</td></tr>
                <tr className="border-b"><td className="p-3">Living (monthly)</td><td className="p-3">~600</td><td className="p-3">~86k</td></tr>
                <tr className="border-b"><td className="p-3">Proof of funds (min)</td><td className="p-3">3,000+</td><td className="p-3">~4.3L</td></tr>
                <tr className="border-b"><td className="p-3">Residence permit</td><td className="p-3">260 RON + €120</td><td className="p-3">~21k</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">1 EUR ≈ 143 NPR. Government scholarship covers tuition and accommodation. Source: studyinromania.gov.ro, igi.mai.gov.ro.</p>
        </div>
      </section>

      {/* Visa + Residence Permit */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Romania Student Visa Process from Nepal (Step by Step)</h2>
        <p className="text-gray-700 mb-4">
          Residence permit for study in Romania. Apply via evisa.mae.ro; Honorary Consulate of Romania in Kathmandu handles Nepal applications.
        </p>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          <li><strong>Apply to universities or government scholarship:</strong> September intake 2026 Romania deadline: scholarship typically March; university July–August.</li>
          <li><strong>Obtain Letter of Acceptance</strong> from Ministry of Education.</li>
          <li><strong>Pay tuition</strong> for at least one year (if not on scholarship).</li>
          <li><strong>Gather documents:</strong> Passport, proof of funds €3,000+, health insurance, criminal record, acceptance letter.</li>
          <li><strong>Apply via evisa.mae.ro;</strong> submit at Honorary Consulate of Romania in Kathmandu.</li>
          <li><strong>After entry:</strong> Apply for residence permit at IGI; fee 260 RON; valid 1 year, renewable. Scholarship holders may get full study duration.</li>
        </ol>
      </section>

      {/* Work Rights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Work Rights for International Students in Romania</h2>
          <p className="text-gray-700">
            Non-EU students with valid residence permit can work up to 4 hours per day without separate work permit. EU/EEA students work on same terms as Romanians. Valid while student status active. Bucharest, Cluj-Napoca, Timișoara have active job markets. Source: studyinromania.gov.ro.
          </p>
        </div>
      </section>

      {/* Romania vs Hungary vs Slovakia */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Romania vs Hungary vs Slovakia – Cost Difference</h2>
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
              <tr className="border-b"><td className="p-3 font-semibold">Romania</td><td className="p-3">€400–€9,000</td><td className="p-3">~€600</td><td className="p-3">Full + €65–85/mo</td></tr>
              <tr className="border-b"><td className="p-3">Hungary</td><td className="p-3">€2,000–€8,000</td><td className="p-3">€400–€700</td><td className="p-3">Stipendium Hungaricum</td></tr>
              <tr className="border-b"><td className="p-3">Slovakia</td><td className="p-3">€0–€3,500</td><td className="p-3">€500–€800</td><td className="p-3">NSP €620–€1,025/mo</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mt-4">
          Romania offers full government scholarship in romania (tuition + accommodation + stipend). Hungary has Stipendium Hungaricum. Slovakia has NSP for mobility. All three are affordable for scholarship in romania for nepali students. Source: studyinromania.gov.ro, scholarships.studyinromania.gov.ro.
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply for Scholarship in Romania?</h2>
          <p className="text-blue-200 mb-8">
            Our experts help with Romanian Government scholarship applications, university selection, and Romania student visa from Nepal. Free consultation in Kathmandu, Baneshwor, Dang, and Itahari.
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
