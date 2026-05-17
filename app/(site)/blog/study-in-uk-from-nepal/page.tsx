import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Study in UK from Nepal 2026 — Fees, Visa, Scholarships & Without IELTS | San Marina',
  description: 'Complete 2026 guide for Nepali students: UK tuition from £9,000/yr (NPR 17.5L), UKVI bank balance NPR 20.5L, 2-yr Graduate Route Visa, study without IELTS at 30+ universities, nursing in UK, Chevening & GREAT scholarships.',
  keywords: 'study in uk from nepal, uk student visa nepal 2026, uk without ielts nepal, moi letter uk, chevening scholarship nepal, nursing uk from nepal, uk graduate route visa nepali students',
  alternates: { canonical: 'https://www.sanmarina.edu.np/blog/study-in-uk-from-nepal/' },
  openGraph: {
    title: 'Study in UK from Nepal 2026 — Complete Guide | San Marina',
    description: 'UK tuition from £9,000/yr, UKVI bank balance, 2-yr Graduate Route Visa, MOI route, nursing, Chevening scholarship — complete guide for Nepali students.',
    images: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1280&q=80'],
    url: 'https://www.sanmarina.edu.np/blog/study-in-uk-from-nepal/',
  },
};

const sections = [
  { id: 'keyfacts', label: '📊 Key Facts 2026' },
  { id: 'why', label: 'Why Choose UK' },
  { id: 'costs', label: 'Costs in NPR' },
  { id: 'noielts', label: 'Study Without IELTS' },
  { id: 'visa', label: 'Visa Step-by-Step' },
  { id: 'universities', label: 'Best Universities' },
  { id: 'courses', label: 'Popular Courses' },
  { id: 'nursing', label: 'Nursing in UK' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'graduate', label: 'Graduate Route & Jobs' },
  { id: 'loans', label: 'Education Loans' },
  { id: 'studentlife', label: 'Student Life' },
  { id: 'faqs', label: 'FAQs (15)' },
];

const faqData = [
  { q: 'How much does it cost to study in UK from Nepal in 2026?', a: 'Total first-year cost ranges NPR 35–42 lakhs at budget universities outside London, NPR 45–58 lakhs at mid-range, and NPR 65–85 lakhs in London. Tuition starts at £9,000/year (Bradford, Teesside, Coventry) ≈ NPR ~17.5 lakhs. The UKVI bank balance is £10,539 outside London (NPR ~20.5L) held for 28 consecutive days before you apply.' },
  { q: 'Can I study in UK without IELTS from Nepal?', a: 'Yes. Over 30 UK universities accept a Medium of Instruction (MOI) letter from your school/college, or Grade 12 English marks of 60%+, instead of IELTS. UKVI fully accepts this route for the Student Visa. Important exception: BSc Nursing requires IELTS Academic 7.0 (no sub-band below 6.5) for NMC registration. Universities like Bradford, Teesside, and Coventry commonly accept MOI letters.' },
  { q: 'What is the UK student visa bank balance requirement for Nepal 2026?', a: '£10,539 (NPR ~20.5 lakhs) if studying outside London, or £13,761 (NPR ~26.8 lakhs) if in London — held for 28 consecutive days in a UKVI-approved Nepali bank (NIC Asia, Global IME, Standard Chartered Nepal). A confirmed scholarship letter reduces this requirement by that exact scholarship amount. The 28-day period must end no more than 31 days before your visa application date.' },
  { q: 'Which are the best UK universities for Nepali students in 2026?', a: 'Top choices for affordability and visa success: University of Bradford (£9,000/yr, MOI accepted), Teesside University (£9,500/yr), Coventry University (£15,000/yr), University of Hertfordshire, and Manchester Metropolitan University. For rankings: University of Manchester, University of Edinburgh, and King\'s College London are top-tier but cost £20,000–£30,000/yr. San Marina has strong CAS relationships with 25+ UK universities.' },
  { q: 'How long does the UK student visa process take from Nepal?', a: 'Standard processing is 3 weeks (15 working days) from biometrics at VFS Global Thapathali. Priority processing is 5 working days (costs £500 extra). Super-priority is next business day (£800 extra). In practice, most Nepali applicants receive a decision within 2–4 weeks on standard. Apply at least 6–8 weeks before your course start date. A CAS letter from your university is required before you can submit the visa application.' },
  { q: 'Can I study nursing in UK from Nepal?', a: 'Yes. BSc Nursing is a 3-year programme costing £11,000–£22,000/year. You need IELTS Academic 6.5 for university admission and 7.0 (no band below 6.5) for NMC registration to practice as a nurse in the UK. Nursing is on the UK Shortage Occupation List — NHS and private hospitals actively recruit Nepali nurses. NHS Registered Nurse starting salary is £29,970/year (Band 5). Very strong post-graduation employment prospects.' },
  { q: 'What documents are required for UK student visa from Nepal?', a: 'Core documents: (1) CAS letter from university, (2) Academic transcripts and certificates, (3) IELTS result or MOI letter (English proof), (4) Financial evidence — bank statements showing £10,539 held 28+ consecutive days, (5) NOC from MoEST Nepal, (6) Passport valid 6+ months beyond course end, (7) Tuberculosis (TB) test certificate from IOM Nepal Kathmandu, (8) ATAS certificate if required for your course, (9) Accommodation booking confirmation, (10) Personal statement or cover letter.' },
  { q: 'Can Nepali students bring dependants (spouse/children) to UK?', a: 'Since January 2025, dependent visa rights are restricted. Only PhD and research-based postgraduate students can bring a spouse or children under the Student Route. Students on taught Master\'s programmes, undergraduate degrees, or pre-sessional English courses cannot bring dependants. This is a major policy change that affected many Nepali students planning family migration.' },
  { q: 'Are education loans available in Nepal for UK study?', a: 'Yes. NIC Asia Bank, Nabil Bank, Global IME Bank, and Siddhartha Bank offer education loans ranging NPR 15–75 lakhs at 10–13% annual interest. You need: confirmed university offer letter, property collateral (for larger amounts), and a guarantor. Loan sanction letters can be submitted to UKVI as supplementary financial evidence — but you still need actual liquid funds in a bank account for the 28-day requirement. Loan processing takes 2–4 weeks.' },
  { q: 'What is the UK Graduate Route Visa for Nepali students?', a: 'The UK Graduate Route Visa lets you stay and work in the UK for 2 years after a Bachelor\'s or Master\'s (3 years after PhD). No job offer required — you can work any job, any role, any hours. The National Minimum Wage is £12.71/hour (April 2026). This visa is a stepping stone to the Skilled Worker Visa and eventually Indefinite Leave to Remain (ILR) after 5 years continuous residence. Only available if you studied at a licensed Tier 4 sponsor university.' },
  { q: 'What NOC is required for UK student visa from Nepal?', a: 'A No Objection Certificate (NOC) from Nepal\'s Ministry of Education, Science and Technology (MoEST) is mandatory for all Nepali students going to UK. Apply at the MoEST office, Keshar Mahal, Kathmandu with your offer letter and passport copy. Cost: ~NPR 2,000. Processing: 3–7 working days. The NOC is submitted with your UKVI application. Missing this is one of the most common and entirely avoidable rejection reasons for Nepali UK visa applicants.' },
  { q: 'How much can I work while studying in UK as a Nepali student?', a: 'During term time: 20 hours/week maximum. During official university holidays (summer, winter, Easter): unlimited hours. At the April 2026 National Minimum Wage of £12.71/hour, 20 hrs/week earns approximately £1,016/month (NPR ~1.98 lakhs). This typically covers food (£200–£300/month), transport (£50–£80/month), and personal expenses. Rent (£400–£700/month outside London) still requires family support or savings.' },
  { q: 'What are the Chevening Scholarship requirements for Nepali students?', a: 'Chevening is the UK Government flagship scholarship — covers full tuition, living expenses (~£1,200/month), flights, and visa fees for a 1-year Master\'s. Requirements: (1) Nepali citizenship, (2) Bachelor\'s degree with good grades, (3) 2+ years full-time work experience, (4) IELTS 6.5 minimum with no band below 6.0, (5) Apply to 3 UK universities and secure at least 1 unconditional offer. Applications open July–November each year for courses starting the following September. Roughly 20–30 Chevening awards are given to Nepal per year.' },
  { q: 'What is the TB test requirement for UK student visa from Nepal?', a: 'All applicants from Nepal applying for a UK visa of 6+ months must provide a Tuberculosis (TB) test certificate from an approved clinic. The test must be done at IOM Nepal (International Organization for Migration), Kamaladi, Kathmandu — the only UKVI-approved clinic in Nepal. Cost: NPR ~4,000–5,000. Results within 3–5 working days. The certificate is valid for 6 months. A private hospital TB test is not accepted — it must be IOM Nepal specifically.' },
  { q: 'What is a CAS letter and how do I get one from a UK university?', a: 'A Confirmation of Acceptance for Studies (CAS) is a unique reference number issued by your UK university after you accept an unconditional offer and pay the required deposit (usually £1,000–£2,000). You cannot apply for a UK Student Visa without a CAS. It contains your course details, fees, start date, and the university\'s sponsor licence number. Universities typically issue CAS 1–6 months before your course starts. San Marina coordinates directly with UK university admissions teams to expedite CAS issuance for our students.' },
];

export default function UKBlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">

      {/* ── BREADCRUMB ── */}
      <nav className="bg-white border-b border-gray-100 py-3 px-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
          <span>›</span>
          <Link href="/blog/" className="hover:text-[#001F3F] font-medium">Blog</Link>
          <span>›</span>
          <span className="text-[#001F3F] font-medium">Study in UK from Nepal 2026</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-[#001F3F] pt-10 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">

            {/* Left */}
            <div className="pb-10">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-yellow-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase">
                📅 Updated May 2026 · Complete Guide
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Study in <span className="text-yellow-300">United Kingdom</span> from Nepal 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-xl">
                Everything Nepali students need — tuition from £9,000/yr, UKVI bank balance rules, 2-year Graduate Route Visa, MOI route (no IELTS), nursing pathway, Chevening scholarship, and a step-by-step visa guide.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['🎓 3-Year Bachelor\'s','💷 From £9,000/yr Tuition','📋 MOI Instead of IELTS','🏥 Nursing Shortage List','🏆 2-yr Graduate Route Visa','💰 15+ Scholarships'].map(b => (
                  <span key={b} className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">{b}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/consultation/" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold px-6 py-3 rounded-full text-sm transition-colors">
                  📅 Book Free Consultation
                </Link>
                <Link href="#visa" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors">
                  🗺️ Visa Step-by-Step
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-white/60 text-xs">
                <span>✍️ San Marina Education Consultancy</span>
                <span>📅 May 2026</span>
                <span>⏱️ 18 min read</span>
                <span>✅ Verified by QEAC Counsellors</span>
              </div>
            </div>

            {/* Right snapshot card — desktop only */}
            <div className="hidden lg:block bg-white rounded-t-2xl overflow-hidden shadow-2xl self-end">
              <div className="bg-[#D4A843] px-5 py-3">
                <p className="text-[#001F3F] font-bold text-sm">🇬🇧 UK At a Glance — 2026</p>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  ['Min. Tuition', '£9,000/yr (NPR ~17.5L)'],
                  ['Bank Balance', '£10,539 held 28 days (outside London)'],
                  ['Post-Study Visa', '2 yrs Graduate Route (3 yrs PhD)'],
                  ['Work Rights', '20 hrs/week · Unlimited holidays'],
                  ['English (IELTS)', '6.0–6.5 or MOI Letter (free)'],
                  ['NOC Required', 'Yes — MoEST Nepal · ~NPR 2,000'],
                  ['TB Test', 'IOM Nepal, Kamaladi · NPR ~4,500'],
                  ['Visa Decision', '3–4 weeks standard (VFS Thapathali)'],
                ].map(([k, v]) => (
                  <div key={k} className="flex px-5 py-3 gap-3">
                    <span className="text-gray-500 text-xs font-medium w-28 shrink-0 pt-0.5">{k}</span>
                    <span className="text-[#001F3F] text-xs font-semibold leading-snug">{v}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 bg-gray-50">
                <Link href="/consultation/" className="block w-full text-center bg-[#001F3F] hover:bg-[#002d5a] text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                  Get Free UK Guidance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE SNAPSHOT (visible only on mobile) ── */}
      <div className="lg:hidden bg-[#001F3F] px-4 pb-4">
        <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
          <div className="bg-[#D4A843] px-4 py-2.5">
            <p className="text-[#001F3F] font-bold text-sm">🇬🇧 UK At a Glance — 2026</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-white/10">
            {[
              ['Min. Tuition', '£9,000/yr (~NPR 17.5L)'],
              ['Bank Balance', '£10,539 held 28 days'],
              ['Post-Study Visa', '2 yrs Graduate Route'],
              ['Work Rights', '20 hrs/week term-time'],
              ['English', 'IELTS 6.0–6.5 or MOI Letter'],
              ['Visa Decision', '3–4 weeks (VFS Thapathali)'],
            ].map(([k, v]) => (
              <div key={k} className="px-3 py-2.5 border-b border-white/10">
                <p className="text-white/50 text-[10px] font-medium">{k}</p>
                <p className="text-white text-xs font-semibold leading-snug mt-0.5">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTENT NAV BAR ── */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex gap-1 py-2 px-2 min-w-max">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="text-xs font-semibold text-gray-600 hover:text-[#001F3F] hover:bg-yellow-50 px-3 py-2 rounded-lg whitespace-nowrap transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-0 divide-x divide-white/10">
          {[
            { num: '30+', label: 'Universities — MOI Accepted' },
            { num: '£9K', label: 'Min. Tuition / Year' },
            { num: '2 Yrs', label: 'Graduate Route Visa' },
            { num: '20 hrs', label: 'Part-Time Work / Week' },
            { num: '3 Yrs', label: 'Bachelor\'s Duration' },
          ].map(s => (
            <div key={s.num} className="text-center py-5 px-4">
              <div className="text-yellow-300 text-2xl font-black">{s.num}</div>
              <div className="text-white/60 text-xs mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 lg:py-10">
        <div className="flex gap-8 items-start">

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-[57px]">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
              <div className="bg-[#001F3F] px-4 py-3">
                <p className="text-yellow-300 text-xs font-bold uppercase tracking-wider">In This Guide</p>
              </div>
              <nav className="p-3">
                {sections.map((s, i) => (
                  <a key={s.id} href={`#${s.id}`}
                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#001F3F] hover:bg-yellow-50 px-3 py-2 rounded-lg transition-colors">
                    <span className="text-gray-300 font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-medium">{s.label}</span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="bg-[#001F3F] rounded-2xl p-5 text-center">
              <p className="text-yellow-300 font-bold text-sm mb-1">Free UK Consultation</p>
              <p className="text-white/60 text-xs mb-4">CAS support · UCAS · Visa prep · MOI guidance</p>
              <Link href="/consultation/" className="block bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold py-2.5 rounded-xl text-xs transition-colors">
                Book Free Session →
              </Link>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* ── SECTION 01: KEY FACTS ── */}
            <section id="keyfacts" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">01</span>
                <div>
                  <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider">Overview</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Key Facts at a Glance — UK 2026</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-2 px-3 text-gray-500 font-semibold text-xs uppercase">Key Factor</th>
                        <th className="text-left py-2 px-3 text-gray-500 font-semibold text-xs uppercase">2026 Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ["Bachelor's Tuition", "£9,000–£19,000/yr (~NPR 17.5L–37L/yr)"],
                        ["Master's Tuition", "£10,000–£24,000/yr (~NPR 19.5L–46.8L/yr)"],
                        ['Nursing (BSc) Tuition', '£11,000–£22,000/yr (~NPR 21.5L–42.9L/yr)'],
                        ['UKVI Bank Balance (outside London)', '£10,539 held 28 consecutive days (~NPR 20.5 lakhs)'],
                        ['UKVI Bank Balance (London)', '£13,761 held 28 consecutive days (~NPR 26.8 lakhs)'],
                        ['Part-Time Work', '20 hrs/week during term · Unlimited during holidays'],
                        ['Part-Time Earnings', '£12.71/hr (April 2026 NMW) · 20 hrs = ~NPR 49,500/month'],
                        ['Post-Study Visa', '2-yr Graduate Route (3 yrs PhD) · No job offer needed'],
                        ['English Requirement', 'IELTS 6.0–6.5 OR MOI letter OR Grade 12 English 60%+'],
                        ['Visa Submission', 'VFS Global, Thapathali, Kathmandu'],
                        ['NOC Required', 'Yes – MoEST Nepal · ~NPR 2,000'],
                        ['Dependent Visa', 'PhD/research students only (since Jan 2025)'],
                      ].map(([k, v]) => (
                        <tr key={k} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{k}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3 italic">All GBP → NPR at NPR 195/£1 (May 2026). Verify before applying.</p>
              </div>
            </section>

            {/* ── SECTION 02: WHY UK ── */}
            <section id="why" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-teal-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">02</span>
                <div>
                  <span className="text-green-200 text-xs font-semibold uppercase tracking-wider">Advantages</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Why Nepali Students Choose UK in 2026</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">The UK remains Nepal&apos;s top study destination for three practical reasons: a <strong>3-year Bachelor&apos;s degree</strong> (saving one full year vs Australia or USA), the <strong>2-year Graduate Route Visa</strong> with no job offer required, and <strong>over 30 universities accepting an MOI letter instead of IELTS</strong>.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: '🎓', title: '3-Year Bachelor\'s', desc: 'One year shorter than Australia or USA — save NPR 15–25 lakhs in tuition and living costs.' },
                    { icon: '✈️', title: '2-Year Graduate Route', desc: 'No job offer needed. Work any role, any hours. Earn £12.71/hour minimum wage.' },
                    { icon: '📝', title: 'No IELTS Required', desc: '30+ universities accept MOI letter from your college — free, no exam needed.' },
                    { icon: '🏥', title: 'Nursing Shortage List', desc: 'BSc Nursing → NHS job → Skilled Worker Visa → ILR. Fastest PR pathway.' },
                    { icon: '🌍', title: 'Global Recognition', desc: 'UK degrees are recognised in 190+ countries. Top 5 globally for university rankings.' },
                    { icon: '💷', title: 'Strong Part-Time Earnings', desc: '20 hrs/week at £12.71/hr = NPR ~49,500/month. Covers food, transport, personal expenses.' },
                    { icon: '🏙️', title: 'Nepali Community', desc: 'Established communities in Hounslow, Aldershot, Manchester, Middlesbrough. Nepali food, temples, groups.' },
                    { icon: '📋', title: 'Digital eVisa (2026)', desc: 'From Feb 2026, UK issues fully digital visas — no physical BRP card needed.' },
                    { icon: '🎯', title: 'Direct PR Pathway', desc: 'Graduate Route → Skilled Worker Visa → ILR after 5 years continuous residence.' },
                  ].map(c => (
                    <div key={c.title} className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-colors">
                      <div className="text-2xl mb-2">{c.icon}</div>
                      <div className="font-bold text-[#001F3F] text-sm mb-1">{c.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{c.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#001F3F] text-white">
                      <tr>
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">Factor</th>
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">🇬🇧 United Kingdom</th>
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">🇦🇺 Australia</th>
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">🇨🇦 Canada</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ["Bachelor's Duration", '3 years', '4 years', '4 years'],
                        ['Post-Study Visa', '2-yr (no job offer)', '2–4 yrs (field-restricted)', 'PGWP (institution-tied)'],
                        ['Work During Study', '20 hrs/week · Unlimited holidays', '48 hrs/fortnight', '20 hrs/week'],
                        ['Without IELTS', 'Yes – 30+ universities', 'Rarely', 'Rarely'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          {r.map((cell, i) => (
                            <td key={i} className={`py-2.5 px-4 text-sm ${i === 0 ? 'font-semibold text-[#001F3F]' : 'text-gray-600'}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── SECTION 03: COSTS ── */}
            <section id="costs" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">03</span>
                <div>
                  <span className="text-purple-200 text-xs font-semibold uppercase tracking-wider">Budget Planning</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Cost to Study in UK from Nepal (NPR)</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-amber-800 font-semibold text-sm">⚠️ 28-Day Bank Balance Rule</p>
                  <p className="text-amber-700 text-xs mt-1">The required amount must sit <strong>uninterrupted</strong> in your Nepali bank for exactly 28 consecutive days before your visa application date. A confirmed scholarship reduces the required amount by that value.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Budget (Bradford, Teesside)', tuition: '£9,000–£11,000', total: 'NPR 35–42 lakhs', color: 'green' },
                    { label: 'Mid-Range (Coventry, Leeds)', tuition: '£13,500–£16,000', total: 'NPR 45–58 lakhs', color: 'blue' },
                    { label: 'High-Rank (Manchester, Edinburgh)', tuition: '£19,000–£25,000', total: 'NPR 58–75 lakhs', color: 'purple' },
                    { label: 'London (UCL, KCL, LSE)', tuition: '£20,000–£35,000', total: 'NPR 65–85 lakhs', color: 'red' },
                  ].map(t => (
                    <div key={t.label} className={`rounded-xl p-4 border-l-4 ${t.color === 'green' ? 'border-green-500 bg-green-50' : t.color === 'blue' ? 'border-blue-500 bg-blue-50' : t.color === 'purple' ? 'border-purple-500 bg-purple-50' : 'border-red-500 bg-red-50'}`}>
                      <p className="text-xs font-semibold text-gray-600 mb-2">{t.label}</p>
                      <p className="text-sm text-gray-700 mb-1">Tuition: <strong>{t.tuition}</strong></p>
                      <p className="font-black text-lg text-[#001F3F]">{t.total}</p>
                      <p className="text-xs text-gray-500 mt-1">Total first year incl. living</p>
                    </div>
                  ))}
                </div>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">City</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Monthly Budget</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">NPR/Month</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['London', '£1,200–£2,000', '~2.3–3.9L', 'Highest cost; separate bank balance required'],
                        ['Manchester', '£800–£1,200', '~1.6–2.3L', 'Large Nepali community; strong graduate jobs'],
                        ['Leeds / Sheffield', '£700–£1,050', '~1.4–2.05L', 'Affordable; Russell Group options available'],
                        ['Birmingham / Coventry', '£650–£1,000', '~1.3–1.95L', 'Coventry very popular with Nepali students'],
                        ['Middlesbrough / Bradford', '£500–£750', '~0.98–1.46L', 'Lowest cost in UK; Teesside and Bradford popular'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F]">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-600">{r[1]}</td>
                          <td className="py-2.5 px-3 text-gray-600">{r[2]}</td>
                          <td className="py-2.5 px-3 text-gray-500 text-xs">{r[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="font-bold text-blue-900 text-sm mb-2">🏦 UKVI Bank Balance — Outside London</p>
                    <p className="text-3xl font-black text-blue-700 mb-1">£10,539</p>
                    <p className="text-blue-600 text-sm font-semibold">NPR ~20.5 lakhs</p>
                    <p className="text-blue-500 text-xs mt-2">Held 28 consecutive days in approved Nepali bank</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <p className="font-bold text-purple-900 text-sm mb-2">🏦 UKVI Bank Balance — London</p>
                    <p className="text-3xl font-black text-purple-700 mb-1">£13,761</p>
                    <p className="text-purple-600 text-sm font-semibold">NPR ~26.8 lakhs</p>
                    <p className="text-purple-500 text-xs mt-2">Held 28 consecutive days in approved Nepali bank</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 04: NO IELTS ── */}
            <section id="noielts" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">04</span>
                <div>
                  <span className="text-teal-200 text-xs font-semibold uppercase tracking-wider">English Requirements</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Study in UK Without IELTS — MOI Route</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-6">
                  <p className="text-teal-800 font-semibold text-sm">✅ The MOI Route</p>
                  <p className="text-teal-700 text-xs mt-1">An MOI letter is a one-page document on your college&apos;s official letterhead, signed by the Principal or Registrar, confirming your programme was taught in English. It costs nothing — you simply request it from your institution. UKVI fully accepts this for the Student Visa.</p>
                </div>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Alternative</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Who Qualifies</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Evidence</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Cost (NPR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['Grade 12 NEB English Marks', 'NEB students with 60%+ English', 'Official NEB marksheet', 'Free'],
                        ['MOI Letter', 'Bachelor\'s from English-medium institution', 'Official letterhead, Principal signature', 'Free'],
                        ['IELTS Academic', 'Any student', '6.0–6.5 overall (7.0 for NMC nursing)', '~NPR 32,000–34,000'],
                        ['PTE Academic', 'Any student', '51–65 depending on university', '~NPR 28,000'],
                        ['TOEFL iBT', 'Any student', '72–87 depending on university', '~NPR 25,000'],
                        ['Duolingo', 'Selected universities only', '105–120 typically', '~NPR 5,500'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-xs">{r[1]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-xs">{r[2]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-xs">{r[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-800 font-semibold text-sm">⚠️ Important for Nursing Students</p>
                  <p className="text-amber-700 text-xs mt-1">The MOI route is generally NOT sufficient for BSc Nursing. The NMC requires <strong>IELTS Academic 7.0</strong> (no band below 6.5) for NMC registration after graduation — even if the university accepts MOI for admission. Target IELTS 7.0 from the start if you plan to practise as a nurse in the UK.</p>
                </div>
              </div>
            </section>

            {/* ── SECTION 05: VISA ── */}
            <section id="visa" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-rose-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">05</span>
                <div>
                  <span className="text-red-200 text-xs font-semibold uppercase tracking-wider">UK Student Visa</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">UK Student Visa from Nepal — Step-by-Step 2026</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <p className="text-blue-800 font-semibold text-sm">🔔 2026 Digital Visa Update</p>
                  <p className="text-blue-700 text-xs mt-1">From 25 February 2026, UK visas are fully <strong>digital eVisas</strong> — no physical BRP card. Your visa is linked to your passport via a UKVI online account. Visa fee: £524 + Immigration Health Surcharge £776/year.</p>
                </div>
                <div className="space-y-4 mb-6">
                  {[
                    ['Apply to UK university & receive unconditional offer', 'For Bachelor\'s, apply via UCAS (ucas.com). For Master\'s, apply directly. Submit transcripts, English proof (IELTS/MOI/Grade 12 marks), and SOP.'],
                    ['Obtain NOC from MoEST Nepal (~NPR 2,000)', 'Mandatory document. Apply at MoEST office, Keshar Mahal with your offer letter. Processing takes 3–7 working days.'],
                    ['Receive your CAS number from university', 'Issued 6–12 weeks before course start. Contains your course details, fees, and start date. Cannot apply for visa without CAS.'],
                    ['Complete the 28-day bank balance', 'Place £10,539 (outside London) or £13,761 (London) into a UKVI-approved Nepali bank for 28 uninterrupted days.'],
                    ['Take TB test at IOM-approved clinic, Kathmandu', 'Only IOM Nepal-approved clinics are accepted (Kamaladi). Results take 1–3 days and are valid 6 months. Book early in May–August.'],
                    ['Pay UK Student Visa fee (£524) and IHS online', 'IHS costs £776/year of course, paid upfront. A 3-year Bachelor\'s = £2,328 total IHS. Grants immediate NHS access.'],
                    ['Book biometrics at VFS Global, Thapathali', 'Book 4–6 weeks in advance — slots fill quickly between May and August.'],
                    ['Await decision (2–4 weeks) and receive digital eVisa', 'Priority processing (~£500 extra) reduces this to ~5 business days.'],
                    ['Travel to UK — enter up to 1 month before course start', 'Register with university, set up UK bank account (Monzo or Revolut work immediately), get a UK SIM card.'],
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-none w-8 h-8 rounded-full bg-[#001F3F] text-white text-xs font-black flex items-center justify-center mt-0.5">{i + 1}</div>
                      <div>
                        <p className="font-bold text-[#001F3F] text-sm">{step[0]}</p>
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{step[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <p className="font-bold text-[#001F3F] text-sm mb-3">📋 UK Student Visa Document Checklist</p>
                  <div className="grid sm:grid-cols-2 gap-1">
                    {[
                      'Valid passport (6+ months validity beyond course end)',
                      'CAS number from UK university',
                      'Bank statements (28+ consecutive days at required amount)',
                      'IELTS certificate OR MOI letter / Grade 12 NEB marks',
                      'Unconditional offer letter from UK university',
                      'Academic transcripts (Grade 10, 12, Bachelor\'s)',
                      'NOC from MoEST Nepal (mandatory)',
                      'IOM Nepal-approved TB test certificate (valid 6 months)',
                      'Proof of UK accommodation',
                      'IHS payment receipt and visa fee confirmation',
                      'Parental/guardian sponsorship letter (if funds from parents)',
                      'Education loan sanction letter (if applicable)',
                    ].map(doc => (
                      <div key={doc} className="flex items-start gap-2 text-xs text-gray-600 py-1">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 06: UNIVERSITIES ── */}
            <section id="universities" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">06</span>
                <div>
                  <span className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">Where to Study</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Best UK Universities for Nepali Students 2026</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm mb-4">Most popular affordable universities where MOI letter is accepted — strong visa track record with Nepali students.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {[
                    { name: 'University of Bradford', location: 'Bradford', tuition: '£9,000/yr', tag: 'Cheapest UK Tuition' },
                    { name: 'Teesside University', location: 'Middlesbrough', tuition: '£13,000/yr', tag: 'Lowest Living Costs' },
                    { name: 'Coventry University', location: 'Coventry + London', tuition: '£13,900/yr', tag: 'Large Nepali Community' },
                    { name: 'University of Huddersfield', location: 'Huddersfield', tuition: '£13,500/yr', tag: 'TEF Gold Award' },
                    { name: 'ARU – Anglia Ruskin', location: 'Cambridge + London', tuition: '£13,000/yr', tag: 'Cambridge Address' },
                    { name: 'Leeds Beckett University', location: 'Leeds', tuition: '£13,500/yr', tag: 'Leeds City — Budget' },
                    { name: 'University of Bedfordshire', location: 'Luton + London', tuition: '£12,000/yr', tag: 'Close to London' },
                    { name: 'University of Wolverhampton', location: 'Wolverhampton', tuition: '£11,950/yr', tag: 'IELTS Waiver Widely Available' },
                    { name: 'University of East London', location: 'London', tuition: '£14,000/yr', tag: 'London at Lower Cost' },
                  ].map(u => (
                    <div key={u.name} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">✅ MOI Accepted</span>
                      <p className="font-bold text-[#001F3F] text-sm">{u.name}</p>
                      <p className="text-gray-500 text-xs">{u.location}</p>
                      <p className="text-blue-700 font-bold text-sm mt-2">{u.tuition}</p>
                      <p className="text-gray-500 text-xs mt-1">{u.tag}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-3">Top-ranked universities (higher cost but stronger global recognition):</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: 'University of Manchester', tuition: '£24,000–£30,000/yr', rank: 'QS Top 35 Globally' },
                    { name: 'University of Edinburgh', tuition: '£24,000–£28,000/yr', rank: 'QS Top 30 Globally' },
                    { name: "King's College London", tuition: '£24,000–£32,000/yr', rank: 'QS Top 40 Globally' },
                    { name: 'UCL – University College London', tuition: '£25,000–£35,000/yr', rank: 'QS Top 10 Globally' },
                    { name: 'University of Glasgow', tuition: '£22,000–£27,000/yr', rank: 'QS Top 80 Globally' },
                    { name: 'University of Leeds', tuition: '£21,000–£26,000/yr', rank: 'Russell Group' },
                  ].map(u => (
                    <div key={u.name} className="border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-sm transition-all">
                      <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">🏆 {u.rank}</span>
                      <p className="font-bold text-[#001F3F] text-sm">{u.name}</p>
                      <p className="text-indigo-700 font-bold text-sm mt-2">{u.tuition}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 07: COURSES ── */}
            <section id="courses" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-amber-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">07</span>
                <div>
                  <span className="text-orange-200 text-xs font-semibold uppercase tracking-wider">Degree Options</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Popular Courses for Nepali Students in UK</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { course: 'BSc Nursing & Healthcare', tuition: '£11,000–£22,000/yr', duration: '3 years', note: 'Shortage Occupation · NHS sponsor · IELTS 7.0 required for NMC registration', badge: '🏥 Top PR Pathway' },
                    { course: 'Computer Science & Data Science', tuition: '£14,000–£22,000/yr', duration: '3 years', note: 'Highest starting salaries for UK graduates. Graduate Route opens IT roles at £28,000–£45,000/yr.', badge: '💻 High Earning' },
                    { course: 'Business Management & MBA', tuition: '£10,000–£20,000/yr', duration: '1–3 years', note: 'Most popular overall. MOI accepted at many universities. MBA takes only 1 year.', badge: '📈 Most Popular' },
                    { course: 'Engineering (Civil, Mech, Electrical)', tuition: '£14,000–£24,000/yr', duration: '3–4 years', note: 'BEng 3 yrs / MEng 4 yrs. Globally recognised. Strong Skilled Worker Visa eligibility.', badge: '⚙️ Globally Recognised' },
                    { course: 'Accounting & Finance', tuition: '£10,000–£18,000/yr', duration: '3 years', note: 'ACCA, CIMA, ICAEW exemptions available. Strong London career hub.', badge: '💰 Exam Exemptions' },
                    { course: 'Pharmacy (MPharm)', tuition: '£16,000–£24,000/yr', duration: '4 years', note: '4-year integrated Master\'s leading directly to GPhC registration. NHS pharmacist £45,000+/yr.', badge: '💊 Integrated Masters' },
                  ].map(c => (
                    <div key={c.course} className="border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-all">
                      <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">{c.badge}</span>
                      <p className="font-bold text-[#001F3F] text-sm">{c.course}</p>
                      <div className="flex gap-4 mt-2 text-xs text-gray-500">
                        <span>💷 {c.tuition}</span>
                        <span>⏱️ {c.duration}</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-2 leading-relaxed">{c.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 08: NURSING ── */}
            <section id="nursing" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">08</span>
                <div>
                  <span className="text-pink-200 text-xs font-semibold uppercase tracking-wider">Healthcare Pathway</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">BSc Nursing in UK from Nepal — Full Guide</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-6">
                  <p className="text-rose-800 font-semibold text-sm">🔑 Critical Requirement</p>
                  <p className="text-rose-700 text-xs mt-1">IELTS Academic <strong>7.0</strong> (no band below 6.5) is required for NMC registration — even if the university accepts 6.5 for admission. Target 7.0 from the start to avoid delays after graduation.</p>
                </div>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">University</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Location</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Tuition/yr</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">IELTS (Adm.)</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['University of Bradford', 'Bradford', '~£11,000', '6.5', 'Lowest nursing tuition in UK'],
                        ['Teesside University', 'Middlesbrough', '~£13,000', '6.5', 'NHS North East placement network'],
                        ['University of Huddersfield', 'Huddersfield', '~£14,000', '6.5', 'Strong NHS placement history'],
                        ['Coventry University', 'Coventry', '~£16,000', '6.5', 'Large Nepali community'],
                        ['ARU – Anglia Ruskin', 'Cambridge & London', '~£14,000', '6.5', 'Cambridge location'],
                        ["King's College London", 'London', '~£21,000', '7.0', 'Top-ranked nursing programme'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          {r.map((cell, i) => (
                            <td key={i} className={`py-2.5 px-3 text-sm ${i === 0 ? 'font-semibold text-[#001F3F]' : 'text-gray-600'}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-[#001F3F] rounded-xl p-5">
                  <p className="text-yellow-300 font-bold text-sm mb-3">🏆 Nursing Career Pathway in UK</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {['BSc Nursing (3 yrs)', 'Graduate Route (2 yrs)', 'NMC Registration', 'NHS Registered Nurse £29,970+', 'Skilled Worker Visa', 'ILR / PR (5 years)'].map((s, i, arr) => (
                      <>
                        <span key={s} className="bg-white/10 text-white px-3 py-1.5 rounded-full font-semibold">{s}</span>
                        {i < arr.length - 1 && <span key={`arrow-${i}`} className="text-yellow-400 font-bold">→</span>}
                      </>
                    ))}
                  </div>
                  <p className="text-white/60 text-xs mt-3">NHS Registered Nurse Band 5 salary: £29,970–£36,483/year. Nursing on Shortage Occupation List — NHS sponsors more easily.</p>
                </div>
              </div>
            </section>

            {/* ── SECTION 09: SCHOLARSHIPS ── */}
            <section id="scholarships" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">09</span>
                <div>
                  <span className="text-yellow-100 text-xs font-semibold uppercase tracking-wider">Funding</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">UK Scholarships for Nepali Students 2026</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <p className="text-yellow-800 font-semibold text-sm">💡 Key Tip</p>
                  <p className="text-yellow-700 text-xs mt-1">A confirmed scholarship letter <strong>reduces your UKVI bank balance requirement</strong> by that amount. A £5,000 scholarship means you only need to show £5,539 (outside London) instead of £10,539.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Chevening Scholarship Nepal', coverage: 'Fully funded — tuition + living (~£1,200/mo) + flights + visa', eligibility: '2+ years work experience · leadership · 1-yr Master\'s', deadline: 'November (for Sep intake)', color: 'border-yellow-400' },
                    { name: 'Commonwealth Scholarship Nepal', coverage: 'Fully funded — Master\'s and PhD programmes', eligibility: 'Commonwealth citizen · academic merit · development focus', deadline: 'December 2026', color: 'border-blue-400' },
                    { name: 'GREAT Scholarship Nepal 2026', coverage: '£10,000 tuition reduction (partial)', eligibility: 'Nepal national · 1-yr taught Master\'s programme', deadline: 'April–June 2026', color: 'border-green-400' },
                    { name: 'University Merit Scholarships', coverage: '10%–50% tuition reduction', eligibility: '75%+ academic record · automatic with application', deadline: 'With application', color: 'border-purple-400' },
                    { name: 'NHS Learning Support Fund', coverage: '£5,000+/yr tax-free grant', eligibility: 'Nursing / midwifery / allied health students only', deadline: 'Auto-applied on enrolment', color: 'border-pink-400' },
                    { name: 'IELTS Award / English Language Scholarship', coverage: 'Language test fee + partial tuition', eligibility: 'High IELTS scores · competitive application', deadline: 'Varies by university', color: 'border-teal-400' },
                  ].map(s => (
                    <div key={s.name} className={`border-l-4 ${s.color} bg-white border border-gray-100 rounded-xl p-4 shadow-sm`}>
                      <p className="font-bold text-[#001F3F] text-sm mb-2">{s.name}</p>
                      <div className="space-y-1.5 text-xs text-gray-600">
                        <p>💰 <strong>Coverage:</strong> {s.coverage}</p>
                        <p>📋 <strong>Eligibility:</strong> {s.eligibility}</p>
                        <p>📅 <strong>Deadline:</strong> {s.deadline}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 10: GRADUATE ROUTE ── */}
            <section id="graduate" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-900 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">10</span>
                <div>
                  <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Post-Study</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Graduate Route Visa & Career Pathways</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">The UK Graduate Route Visa allows Nepali graduates to remain in the UK for <strong>2 years</strong> (3 years for PhD) with no job offer, no minimum salary, and no employer sponsorship. Work any role, any hours, any sector. National Minimum Wage: <strong>£12.71/hour</strong> (April 2026).</p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Job Sector</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Starting Salary</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Skilled Worker Visa?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['NHS Registered Nurse', '£29,970–£36,483/yr', '✅ Yes – Shortage list'],
                        ['Software Developer / IT', '£28,000–£45,000/yr', '✅ Yes'],
                        ['Data Analyst / Data Science', '£28,000–£40,000/yr', '✅ Yes'],
                        ['Accountant / Finance Analyst', '£26,000–£38,000/yr', '✅ Yes'],
                        ['NHS Healthcare Support Worker', '£23,615–£25,674/yr', '✅ Yes'],
                        ['Civil / Structural Engineer', '£27,000–£40,000/yr', '✅ Yes'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[1]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-[#001F3F] rounded-xl p-5">
                  <p className="text-yellow-300 font-bold text-sm mb-3">🏆 Pathway to UK PR (Indefinite Leave to Remain)</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {['UK Degree', 'Graduate Route (2 yrs)', 'Skilled Worker Visa (£26,200+/yr)', 'ILR / PR (5 years)', 'British Citizenship'].map((s, i, arr) => (
                      <>
                        <span key={s} className="bg-white/10 text-white px-3 py-1.5 rounded-full font-semibold">{s}</span>
                        {i < arr.length - 1 && <span key={`arrow-${i}`} className="text-yellow-400 font-bold">→</span>}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 11: LOANS ── */}
            <section id="loans" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-green-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">11</span>
                <div>
                  <span className="text-emerald-200 text-xs font-semibold uppercase tracking-wider">Financing</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Education Loans for UK Study from Nepal</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm mb-4">Education loans for UK study are available in Nepal. <strong>Smart strategy:</strong> combine partial personal savings + parental sponsorship letter + bank loan sanction letter to meet the UKVI balance.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Bank</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Loan Amount</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Interest Rate</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Key Requirements</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['NIC Asia Bank', 'NPR 20–75 lakhs', '~10–12% per annum', 'University offer letter · Collateral · Co-borrower'],
                        ['Nabil Bank', 'NPR 15–50 lakhs', '~11–13% per annum', 'Offer letter · Guardian guarantee'],
                        ['Global IME Bank', 'NPR 15–60 lakhs', '~10–12% per annum', 'Offer letter · Property collateral preferred'],
                        ['Siddhartha Bank', 'NPR 20–50 lakhs', '~11–13% per annum', 'Offer letter · Employment guarantee'],
                        ['Rastriya Banijya Bank', 'NPR 10–40 lakhs', '~9–11% per annum', 'Government bank · Slower process'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[1]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[2]}</td>
                          <td className="py-2.5 px-3 text-gray-500 text-xs">{r[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── SECTION 12: STUDENT LIFE ── */}
            <section id="studentlife" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">12</span>
                <div>
                  <span className="text-violet-200 text-xs font-semibold uppercase tracking-wider">Life in UK</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Student Life in UK — Accommodation, Banking & Community</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: '🏠', title: 'Accommodation', desc: 'First-year students start in university halls (£400–£650/month, bills included). From second year, most move to private shared accommodation (£300–£550/month per person). Bradford, Middlesbrough, and Huddersfield have the most affordable options.' },
                    { icon: '🏦', title: 'Setting Up a UK Bank Account', desc: 'Open Monzo or Revolut immediately on arrival — both accept international passports with no UK credit history. Within 2–4 weeks, open a traditional student account at Barclays, HSBC, or Lloyds (no monthly fees, overdraft facilities).' },
                    { icon: '🏥', title: 'NHS Access (Immediate)', desc: 'All student visa holders who paid IHS can access full NHS treatment from day one. Register with a local GP within the first week — bring your passport and proof of address (university letter works).' },
                    { icon: '🤝', title: 'Nepali Community in UK', desc: 'Established communities in London (Hounslow, Aldershot), Manchester, and Middlesbrough. Most university cities have informal WhatsApp groups, Nepali food shops, and community organisations.' },
                    { icon: '🚌', title: 'Transport & Getting Around', desc: 'Most UK university cities have good bus networks. Student bus passes: £30–£80/month. London Oyster card for tube and bus. Many students cycle in Bradford, Huddersfield, and other flat cities.' },
                    { icon: '📱', title: 'SIM & Internet', desc: 'Get a UK SIM from Lebara, Lyca, or Giffgaff on arrival — from £5/month with good data. University campus WiFi is free. Student broadband deals available from BT, Virgin, and Sky.' },
                  ].map(c => (
                    <div key={c.title} className="bg-gray-50 rounded-xl p-4">
                      <div className="text-2xl mb-2">{c.icon}</div>
                      <div className="font-bold text-[#001F3F] text-sm mb-1">{c.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── MID CTA ── */}
            <div className="bg-gradient-to-r from-[#001F3F] to-[#002d5a] rounded-2xl p-8 text-center">
              <p className="text-yellow-300 font-black text-xl mb-2">Ready to Apply for UK? Let San Marina Help.</p>
              <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">CAS coordination · UCAS applications · MOI letter guidance · UKVI bank balance strategy · Visa preparation. Free initial consultation for Nepali students.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/consultation/" className="bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold px-8 py-3 rounded-full text-sm transition-colors">
                  📅 Book Free UK Consultation
                </Link>
                <Link href="tel:+977-1-4720123" className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors">
                  📞 Call San Marina Kathmandu
                </Link>
              </div>
            </div>

            {/* ── SECTION 13: FAQs ── */}
            <section id="faqs" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">13</span>
                <div>
                  <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Answers</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Frequently Asked Questions — UK Study 2026</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-3">
                  {faqData.map((item, i) => (
                    <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                        <span className="font-semibold text-[#001F3F] text-sm pr-4">{item.q}</span>
                        <span className="text-gray-400 group-open:rotate-45 transition-transform text-lg flex-none">+</span>
                      </summary>
                      <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* ── BOTTOM CTA ── */}
            <div className="bg-gradient-to-r from-yellow-400 to-amber-400 rounded-2xl p-8 text-center">
              <p className="text-[#001F3F] font-black text-2xl mb-2">Your UK Journey Starts Here</p>
              <p className="text-[#001F3F]/70 text-sm mb-6 max-w-lg mx-auto">San Marina&apos;s UK counsellors have helped hundreds of Nepali students secure CAS letters, navigate the MOI route, and land Graduate Route Visa roles — at no hidden charges.</p>
              <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#001F3F] hover:bg-[#002d5a] text-white font-bold px-10 py-4 rounded-full text-sm transition-colors">
                📅 Book Your Free UK Consultation →
              </Link>
            </div>

          </div>
        </div>
      </div>
          {/* ── AUTHOR BIO CARD ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6">
              <div className="flex-none">
                <img
                  src="/assets/sanjay_001.png"
                  alt="Sanjay Shrestha — Head Counsellor, San Marina Education Consultancy"
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#D4A843] mx-auto sm:mx-0"
                />
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <p className="text-xs font-semibold text-[#D4A843] uppercase tracking-wider mb-0.5">Written &amp; Reviewed by</p>
                <p className="text-[#001F3F] font-black text-xl leading-tight">Sanjay Shrestha</p>
                <p className="text-gray-500 text-sm mb-3">Head Counsellor · San Marina Education Consultancy, Kathmandu</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
                  {['🎓 Head Counsellor', '📅 10+ Years Experience', '🌍 500+ Students Placed'].map(b => (
                    <span key={b} className="bg-[#001F3F] text-white text-xs font-semibold px-3 py-1 rounded-full">{b}</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Sanjay Shrestha is the Head Counsellor at San Marina Education Consultancy with over 10 years of experience guiding Nepali students through the study abroad process. He has personally counselled hundreds of students on university selection, visa applications, scholarships, and career planning across 12+ countries.
                </p>
                <div>
                  <p className="text-xs font-bold text-[#001F3F] uppercase tracking-wide mb-2">Countries He Counsels For</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                    {[
                      ['🇺🇸','USA'],['🇬🇧','UK'],['🇦🇺','Australia'],['🇨🇦','Canada'],
                      ['🇩🇪','Germany'],['🇫🇷','France'],['🇳🇱','Netherlands'],
                      ['🇳🇿','New Zealand'],['🇯🇵','Japan'],['🇰🇷','South Korea'],
                      ['🇳🇴','Norway'],['🌍','+ More Europe'],
                    ].map(([flag, name]) => (
                      <span key={name} className="flex items-center gap-1 bg-gray-100 hover:bg-yellow-50 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 transition-colors">
                        {flag} {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            headline: 'Study in UK from Nepal 2026 — Complete Guide',
            description: 'Complete guide for Nepali students on studying in the UK in 2026 — tuition, visa, scholarships, MOI route, nursing pathway.',
            author: { '@type': 'Person', name: 'Sanjay Shrestha', jobTitle: 'Head Counsellor', worksFor: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' } },
            publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
            datePublished: '2026-05-01',
            dateModified: '2026-05-17',
            url: 'https://www.sanmarina.edu.np/blog/study-in-uk-from-nepal/',
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqData.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ],
      })}} />
    </main>
  );
}
