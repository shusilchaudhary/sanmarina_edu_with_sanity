import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Study in Australia from Nepal 2026 — Visa, Cost, Universities & PR Guide | San Marina',
  description: 'Complete 2026 guide: Study in Australia from Nepal. Assessment Level 3 visa update, tuition AUD 20k–50k (NPR 17–42 lakhs), top universities, PR pathway courses, IELTS/PTE, 20+ scholarships & step-by-step visa process.',
  keywords: 'study in australia from nepal, australia student visa nepal, assessment level 3 nepal 2026, cost study australia nepali rupees, australia pr pathway courses nepal, nursing australia nepal, australia scholarships nepali students',
  alternates: { canonical: 'https://www.sanmarina.edu.np/blog/study-in-australia-from-nepal-for-nepali-students/' },
  openGraph: {
    title: 'Study in Australia from Nepal 2026 — Complete Guide | San Marina',
    description: 'Assessment Level 3 update, costs in NPR, top universities, PR pathways, IELTS/PTE & 20 scholarships for Nepali students.',
    images: ['https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1280&q=80'],
    url: 'https://www.sanmarina.edu.np/blog/study-in-australia-from-nepal-for-nepali-students/',
  },
};

const sections = [
  { id: 'level3', label: '🚨 Assessment Level 3 Update' },
  { id: 'why', label: 'Why Choose Australia' },
  { id: 'universities', label: 'Top Universities' },
  { id: 'courses', label: 'Best Courses & PR Pathways' },
  { id: 'costs', label: 'Costs in NPR' },
  { id: 'visa', label: 'Visa Step-by-Step' },
  { id: 'documents', label: 'Document Checklist' },
  { id: 'english', label: 'IELTS / PTE' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'intakes', label: 'Intake Dates 2026' },
  { id: 'workrights', label: 'Work Rights & Subclass 485' },
  { id: 'studentlife', label: 'Student Life' },
  { id: 'faqs', label: 'FAQs (20)' },
];

const faqData = [
  { q: 'What is Assessment Level 3 and how does it affect Nepali students in 2026?', a: 'Effective 8 January 2026, Australia\'s Department of Home Affairs reclassified Nepal from Level 2 back to Level 3 (High Risk) under the SSVF. English test scores must be submitted upfront; bank statements covering 6–12 months are required; all documents must be submitted at lodgement; processing takes 4–12 weeks; every application undergoes full manual review. It does not ban Nepali students — genuine, well-prepared applicants continue to succeed. The next review is expected September 2026.' },
  { q: 'What are the eligibility requirements to study in Australia from Nepal?', a: 'You need: (1) 12 years of schooling — SEE/SLC plus Grade 11 & 12/+2; (2) Minimum 60–70% in +2 (varies by university); (3) IELTS 6.0+ or PTE 50+ — mandatory upfront at lodgement; (4) CoE from a CRICOS-registered institution; (5) AUD 29,710/year living cost proof plus tuition; (6) Student Visa Subclass 500; (7) Genuine Student (GS) statement; (8) OSHC health insurance; (9) Valid passport with 6+ months validity.' },
  { q: 'How much does it cost to study in Australia from Nepal in 2026 in Nepali Rupees?', a: 'At AUD 1 = NPR 84: Undergraduate tuition: NPR 12–29 lakhs/year. Postgraduate tuition: NPR 17–35 lakhs/year. Living costs: NPR 25 lakhs/year. Visa fee: NPR 1.68 lakhs. OSHC: NPR 42,000–67,000/year. Flights: NPR 59,000–1 lakh. Total first-year estimate: NPR 47–80 lakhs. Students can offset costs through part-time work (up to NPR 97,000 per fortnight at AUD 24.10/hour minimum wage).' },
  { q: 'What IELTS or PTE score do I need for Australian universities?', a: 'Undergraduate: IELTS 6.0 overall (no band below 5.5); PTE 50 overall. Postgraduate: IELTS 6.5 overall (no band below 6.0); PTE 57–58. Nursing/medicine: IELTS 7.0 with minimum band scores. Under Assessment Level 3, English test scores are mandatory at visa lodgement — they cannot be added later. Scores are valid for 2 years. Aim for IELTS 6.5 or PTE 58 — it opens ~40% more university options.' },
  { q: 'What is the Genuine Student (GS) requirement for Australia?', a: 'The GS requirement replaced the old GTE from November 2023. Your GS statement must demonstrate: genuine academic intent; logical course progression from previous studies; specific career goals aligned with your chosen course; awareness of Australian study costs; strong ties to Nepal. Under Level 3, GS statements receive manual scrutiny. Write 500–800 words in your own voice, specific to your situation, and completely consistent with all other documents. Do not use copied templates.' },
  { q: 'Which courses offer the best PR pathway in Australia for Nepali students?', a: 'Strongest PR-pathway courses in 2026: (1) Nursing — national shortage, highest PR success; (2) Cybersecurity — 6-year work visa for regional graduates; (3) AI/Data Science — AUD 100,000+ salaries; (4) Civil/Structural Engineering; (5) Social Work — listed across all states; (6) Early Childhood Education; (7) Physiotherapy. Choosing regional study adds 1–2 extra post-study work years and improves state-sponsored PR eligibility.' },
  { q: 'How many hours can Nepali students work in Australia in 2026?', a: '48 hours per fortnight during semester + unlimited during official university breaks. At AUD 24.10/hour minimum wage, 48 hrs/fortnight earns ~AUD 1,157 (~NPR 97,000). During breaks, students can earn AUD 2,500–3,000/month. Research degree students have no work hour limits once their course commences. Working beyond 48 hours/fortnight during semester is a visa condition breach and can lead to visa cancellation.' },
  { q: 'What proof of funds is required for an Australian student visa from Nepal at Level 3?', a: 'Show: AUD 29,710 (~NPR 24.9 lakhs)/year for living expenses; full first-year tuition; return travel costs. For dependents: AUD 8,574/year per spouse, AUD 3,670/year per child. Level 3 requirements: 6–12 months of bank statements (no sudden large deposits); clear source-of-funds documentation (salary slips, business income, property valuation, loan approval); notarized sponsorship letter with sponsor income proof.' },
  { q: 'What are the Australia intake dates for Nepali students in 2026?', a: 'Semester 1 (February): Apply by Sep–Oct 2025; lodge visa by Oct–Nov 2025. Semester 2 (July): Apply by Mar–Apr 2026; lodge visa by Apr–May 2026. Trimester/November: Apply Aug–Sep 2026. Under Level 3, add 2–3 extra weeks buffer for processing. Recommended: start full preparation 12–14 months before your target intake date.' },
  { q: 'What scholarships are available for Nepali students in Australia?', a: 'Key scholarships: (1) Australia Awards (DFAT) — full coverage including tuition, airfare, living allowance, OSHC; (2) Research Training Program (RTP) — full tuition + AUD 35,000/year stipend for PhD/research Master\'s; (3) Destination Australia Program — up to AUD 15,000/year for regional study; (4) University merit scholarships — 10–100% tuition reduction; (5) APEC Women in Research Fellowship; (6) ACIAR Scholarships for agricultural sciences.' },
  { q: 'What is the Post-Study Work Visa (Subclass 485)?', a: 'Bachelor\'s: 2 years. Master\'s by coursework: 2 years. Master\'s by research: 3 years. PhD: 4 years. Regional study bonus: +1 to +2 years. Maximum: 6 years. New in 2026: maximum age limit of 35 years at the time of application. No job offer required — work any role, any employer. This is a stepping stone to the Skilled Worker Visa and Indefinite Leave to Remain (ILR) after 5 years.' },
  { q: 'What is OSHC and is it mandatory for Nepali students?', a: 'Yes — Overseas Student Health Cover (OSHC) is mandatory for all international students for the full duration of the student visa. It covers GP visits, specialist consultations, hospital treatment, and emergency ambulance. Cost: AUD 500–800/year (~NPR 42,000–67,000). Providers: Medibank, Bupa, Allianz, CBHS. Does not cover dental, optical, or pre-existing conditions. Purchase before lodging your visa application.' },
  { q: 'Can I bring my family to Australia on a Student Visa?', a: 'Yes. Spouse/de-facto partner and dependent children can apply to accompany you. Work rights: partners of postgraduate research students can work unlimited hours; partners of coursework students are limited to 48 hrs/fortnight. Additional funds needed: AUD 8,574/year per spouse + AUD 3,670/year per child. Under Level 3, all dependent applications also face enhanced manual scrutiny.' },
  { q: 'What is CRICOS and why does it matter?', a: 'CRICOS (Commonwealth Register of Institutions and Courses for Overseas Students) is Australia\'s official register of institutions authorized to enroll international students. You must study a CRICOS-registered course to be eligible for Subclass 500. Verify at cricos.teqsa.gov.au before applying. If your course is not CRICOS-registered, your CoE is invalid and your visa will be refused.' },
  { q: 'Is nursing in Australia a good career path for Nepali students seeking PR?', a: 'Yes — Registered Nursing (RN) is consistently the top PR-pathway for Nepali students. National shortage ensures near-guaranteed employment. Starting salaries AUD 75,000–95,000 (~NPR 63–80 lakhs). Regional nursing adds +2 years post-study work. Direct pathways to subclass 189/190. Best institutions: UTAS, University of Newcastle, Western Sydney University, James Cook University.' },
  { q: 'What happens if my Australian student visa is refused?', a: 'In 2024–25, there were 21,611 student visa refusals out of 37,033 total Australian visa refusals. Most common reasons: unexplained large bank deposits; generic GS statement; academic progression gaps; insufficient source-of-funds. Options: (1) Request Merits Review through the Administrative Appeals Tribunal (AAT); (2) Re-apply addressing exact refusal reasons. Contact San Marina for a free refusal analysis — our reapplication success rate is over 85%.' },
  { q: 'How long does it take to process an Australian student visa from Nepal in 2026?', a: 'Under Assessment Level 3, processing takes 4–12 weeks (previously 3–6 weeks at Level 2). 90% of well-prepared, complete applications are decided within 8–10 weeks. To minimize processing time: submit a complete, decision-ready application; respond to DHA requests within 24–48 hours; do not book flights until visa is granted in writing.' },
  { q: 'What is the Destination Australia scholarship?', a: 'The Destination Australia Program offers up to AUD 15,000/year (~NPR 12.6 lakhs) for international students who study in regional Australia. Benefits include extended post-study work rights (+1–2 years) and state-sponsored PR nomination eligibility. Participating institutions include UTAS, University of Newcastle, UoW, Griffith University, Charles Sturt, Federation University. Apply through your institution 9–12 months before intake.' },
  { q: 'What is the maximum age limit for an Australian student visa?', a: 'There is no upper age limit for Subclass 500 itself (minimum 18 years). However, the Post-Study Work Visa (Subclass 485) has a maximum age limit of 35 years at the time of application, introduced in 2026. If you are approaching 35, prioritize your timeline to access the full post-study work period.' },
  { q: 'What is the best time to start preparing to study in Australia from Nepal?', a: 'For Semester 1 2027 (February start): begin now — register for IELTS/PTE immediately; research universities by July 2026; apply by September 2026; lodge visa by October 2026. For Semester 2 2026 (July): if you haven\'t sat IELTS/PTE, book your test immediately. Full recommended timeline: 12–14 months before target intake. Book a free consultation with San Marina Kathmandu to build your personalized plan.' },
];

export default function AustraliaBlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">

      {/* ── BREADCRUMB ── */}
      <nav className="bg-white border-b border-gray-100 py-3 px-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
          <span>›</span>
          <Link href="/blog/" className="hover:text-[#001F3F] font-medium">Blog</Link>
          <span>›</span>
          <span className="text-[#001F3F] font-medium">Study in Australia from Nepal 2026</span>
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
                Study in <span className="text-yellow-300">Australia</span> from Nepal 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-xl">
                The only guide Nepali students need — covering the new Assessment Level 3 visa rules, costs in NPR, top universities, PR pathway courses, scholarships, and a step-by-step visa timeline.
              </p>

              {/* Badge strip */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['🚨 Level 3 Update Jan 2026','🎓 48 hrs/fortnight Work','🏆 Up to 6yr Post-Study Visa','💰 NPR 17–42L Tuition','🏅 20+ Scholarships'].map(b => (
                  <span key={b} className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">{b}</span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Link href="/consultation/" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold px-6 py-3 rounded-full text-sm transition-colors">
                  📅 Book Free Consultation
                </Link>
                <Link href="#visa" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors">
                  📋 Visa Steps →
                </Link>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mt-6 text-white/50 text-xs">
                <span>✍️ San Marina Education Consultancy</span>
                <span>·</span>
                <span>📅 Last reviewed: May 17, 2026</span>
                <span>·</span>
                <span>⏱ ~20 min read</span>
              </div>
            </div>

            {/* Right — Snapshot card */}
            <div className="hidden lg:block bg-white/8 border border-white/15 rounded-2xl p-5 mb-0 self-end">
              <div className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                🧭 Australia 2026 Snapshot
              </div>
              {[
                { icon: '🎓', label: 'Annual Tuition', val: 'AUD 20k–42k', sub: 'NPR 17–35 Lakhs' },
                { icon: '🏠', label: 'Living Cost / Year', val: 'AUD 29,710', sub: '~NPR 25 Lakhs' },
                { icon: '💳', label: 'Visa Fee', val: 'AUD 2,000', sub: '~NPR 1.68 Lakhs' },
                { icon: '💼', label: 'Work Rights', val: '48 hrs/fortnight', sub: 'Unlimited holidays' },
                { icon: '📄', label: 'Post-Study Visa', val: '2–6 Years', sub: 'Subclass 485' },
                { icon: '⏱', label: 'Visa Processing', val: '4–12 Weeks', sub: 'Level 3 (Jan 2026)' },
                { icon: '🏦', label: 'Bank Statements', val: '6–12 Months', sub: 'Level 3 requirement' },
              ].map(r => (
                <div key={r.label} className="flex items-center gap-3 py-2.5 border-b border-white/10 last:border-0">
                  <span className="text-lg flex-shrink-0">{r.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-white/60 text-xs">{r.label}</div>
                    <div className="text-white font-semibold text-sm leading-tight">{r.val}</div>
                    <div className="text-yellow-300 text-xs">{r.sub}</div>
                  </div>
                </div>
              ))}
              <div className="mt-4 bg-red-500/20 border border-red-400/30 rounded-xl p-3">
                <div className="text-red-300 text-xs font-bold">🚨 LEVEL 3 ALERT</div>
                <div className="text-white/80 text-xs mt-1">English scores + 6–12 month bank statements mandatory upfront since Jan 8, 2026</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-56 md:h-72 mt-6 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1280&q=80"
            alt="Sydney Opera House — Study in Australia from Nepal"
            fill className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] to-transparent" />
        </div>
      </section>

      {/* ── INTENT NAV ── */}
      <div className="bg-white border-b-2 border-yellow-400 sticky top-0 z-40 shadow-sm">
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-0 px-2 min-w-max">
            {[
              { href: '#level3', label: '🚨 Level 3', urgent: true },
              { href: '#why', label: '🌏 Why Aus' },
              { href: '#universities', label: '🏛 Universities' },
              { href: '#courses', label: '📚 Courses' },
              { href: '#costs', label: '💰 Costs NPR' },
              { href: '#visa', label: '🛂 Visa Steps' },
              { href: '#english', label: '📝 IELTS/PTE' },
              { href: '#scholarships', label: '🏅 Scholarships' },
              { href: '#intakes', label: '📅 Intakes' },
              { href: '#workrights', label: '💼 Work Rights' },
              { href: '#faqs', label: '❓ FAQs (20)' },
            ].map(n => (
              <a key={n.href} href={n.href}
                className={`flex-shrink-0 px-3 py-3.5 text-xs font-semibold border-b-2 border-transparent hover:border-yellow-400 hover:text-[#001F3F] transition-colors whitespace-nowrap ${n.urgent ? 'text-red-600 font-bold' : 'text-gray-600'}`}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE SNAPSHOT CARD (visible only on mobile) ── */}
      <div className="lg:hidden bg-[#001F3F] px-4 py-4">
        <div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
          <div className="bg-[#D4A843] px-4 py-2.5">
            <p className="text-[#001F3F] font-bold text-sm">🇦🇺 Australia At a Glance — 2026</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-white/10">
            {[
              ['Tuition / Year', 'AUD 20k–42k (NPR 17–35L)'],
              ['Living Cost', 'AUD 29,710/yr (~NPR 25L)'],
              ['Work Rights', '48 hrs/fortnight + unlimited breaks'],
              ['Post-Study Visa', '2–6 Years (Subclass 485)'],
              ['Bank Statements', '6–12 months required'],
              ['Visa Processing', '4–12 weeks (Level 3)'],
            ].map(([k, v]) => (
              <div key={k} className="px-3 py-2.5 border-b border-white/10">
                <p className="text-white/50 text-[10px] font-medium">{k}</p>
                <p className="text-white text-xs font-semibold leading-snug mt-0.5">{v}</p>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 bg-red-500/20 border-t border-white/10">
            <p className="text-red-300 text-xs font-bold">🚨 LEVEL 3 ALERT — Jan 2026</p>
            <p className="text-white/70 text-xs mt-0.5">English scores + 6–12 month bank statements mandatory upfront</p>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="bg-[#001F3F] py-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { num: '57,048', lbl: 'Nepali Students in Australia' },
            { num: '#3', lbl: 'Largest Intl Student Group' },
            { num: 'AUD 24.10', lbl: 'Min. Wage / Hour (2026)' },
            { num: 'Up to 6 Yrs', lbl: 'Post-Study Work (485)' },
            { num: 'NPR 47–80L', lbl: 'Est. First-Year Total Cost' },
          ].map(s => (
            <div key={s.lbl} className="text-center">
              <div className="text-yellow-300 text-xl font-bold">{s.num}</div>
              <div className="text-white/60 text-xs mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 lg:py-10 flex flex-col lg:flex-row gap-8 items-start">

        {/* ── SIDEBAR ── */}
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-16">
          {/* TOC */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
            <div className="text-[#001F3F] font-bold text-sm mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
              📋 Table of Contents
            </div>
            <nav>
              <ol className="space-y-0.5">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}
                      className="flex items-center gap-2 py-1.5 text-xs text-gray-600 hover:text-[#001F3F] hover:bg-gray-50 rounded-lg px-2 transition-colors">
                      <span className="text-yellow-500 font-mono text-[10px] w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* Sidebar CTA */}
          <div className="bg-[#001F3F] rounded-2xl p-5 text-center">
            <div className="text-4xl font-bold text-yellow-300 mb-1">Free</div>
            <div className="text-white/70 text-xs mb-4">Expert Consultation<br />San Marina Kathmandu</div>
            <Link href="/consultation/" className="block bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
              Book Free Session
            </Link>
            <Link href="/contact/" className="block mt-2 border border-white/20 text-white/80 text-xs px-4 py-2 rounded-xl hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </aside>

        {/* ── CONTENT ── */}
        <div className="flex-1 min-w-0 space-y-10">

          {/* ═══════════════════════════════════════════════
              SECTION 01 — ASSESSMENT LEVEL 3
          ══════════════════════════════════════════════ */}
          <section id="level3" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-xl flex-shrink-0">🚨</div>
              <div>
                <div className="text-red-600 text-xs font-bold uppercase tracking-widest">Critical 2026 Update</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">01</span>Nepal Reclassified to Assessment Level 3</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5 flex gap-3">
                <span className="text-2xl flex-shrink-0">🔴</span>
                <div>
                  <div className="font-bold text-red-800 mb-1">Effective 8 January 2026: Nepal is now Assessment Level 3 (High Risk)</div>
                  <p className="text-red-700 text-sm leading-relaxed">Australia's Department of Home Affairs reclassified Nepal from Level 2 back to Level 3 under the SSVF, triggered by a spike in forged degree certificates and fraudulent bank guarantees in Nov–Dec 2025. Nepal joins India, Bangladesh, and Bhutan at Level 3.</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-yellow-400 bg-yellow-50 px-5 py-4 rounded-r-xl italic text-[#001F3F] text-base mb-5">
                "Level 3 does not close Australia's doors to Nepali students. It demands every application be stronger, more complete, and more authentic than ever before."
              </blockquote>

              <h3 className="font-bold text-[#001F3F] mb-3">What Changed — Level 2 vs Level 3</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#001F3F] text-white">
                      <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                      <th className="px-4 py-3 text-left font-semibold">Level 2 (Mar–Dec 2025)</th>
                      <th className="px-4 py-3 text-left font-semibold">Level 3 (Jan 2026+)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['English test score','Could be provided later','Mandatory upfront at lodgement'],
                      ['Bank statements','3–6 months required','6–12 months required'],
                      ['Source of funds','Basic proof accepted','Detailed, traceable source required'],
                      ['GS statement scrutiny','Moderate review','Full manual case officer review'],
                      ['Processing time','3–6 weeks (avg)','4–12 weeks (avg)'],
                      ['Application type','Mostly automated','Full manual verification'],
                      ['Supplementary docs','Could be added later','Must be complete at lodgement'],
                      ['Visa fee','AUD 2,000','AUD 2,000 (unchanged)'],
                    ].map(([req, l2, l3], i) => (
                      <tr key={req} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-medium text-[#001F3F] text-sm">{req}</td>
                        <td className="px-4 py-3 text-gray-600 text-sm">{l2}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-700">{l3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-5">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="font-bold text-amber-800 mb-1">⚠️ Context: Nepal's Level History</div>
                  <p className="text-amber-700 text-sm">Nepal spent 7 years at Level 3, was upgraded to Level 2 on 31 March 2025, then downgraded back in January 2026. The next scheduled SSVF review is expected <strong>September 2026</strong>.</p>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                  <div className="font-bold text-teal-800 mb-1">💡 Pro Strategy: Apply to Level 1 Universities</div>
                  <p className="text-teal-700 text-sm">Your visa risk = Country Level × University Level. Applying to a Go8 or Level 1 university significantly reduces documentary burden even with Nepal at Level 3.</p>
                </div>
              </div>

              <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-3 text-sm text-orange-800">
                ⚠️ <strong>Refusal Data:</strong> In 2024–25, 21,611 out of 37,033 Australian visa refusals were student visas. Under Level 3, poorly prepared applications face significantly higher rejection risk.
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 02 — WHY AUSTRALIA
          ══════════════════════════════════════════════ */}
          <section id="why" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">🌏</div>
              <div>
                <div className="text-blue-600 text-xs font-bold uppercase tracking-widest">Reasons to Choose</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">02</span>Why 57,000+ Nepali Students Choose Australia</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: '🏆', title: 'World-Class Universities', desc: '9 Australian universities rank in the QS World Top 100 (2025). Degrees recognized in 180+ countries.' },
                  { icon: '📄', title: 'Up to 6 Years Post-Study Work', desc: 'Subclass 485 gives graduates 2–6 years of unrestricted work rights — one of the most generous globally.' },
                  { icon: '💼', title: 'Strong Work Rights', desc: '48 hrs/fortnight during semester + unlimited holidays. Earn NPR 60,000–70,000 per fortnight at AUD 24.10/hr.' },
                  { icon: '🤝', title: 'Thriving Nepali Community', desc: '57,048 Nepali students across Sydney, Melbourne, Brisbane, and beyond. Dashain/Tihar events everywhere.' },
                  { icon: '🗺️', title: 'Clear PR Pathways', desc: 'Nursing, IT, engineering, and social work lead directly to Australia\'s skilled migration program.' },
                  { icon: '📉', title: 'Low Unemployment (3.6%)', desc: 'One of OECD\'s lowest. Nursing, software, and engineering face critical skill shortages for graduates.' },
                  { icon: '🌆', title: 'Top Student Cities', desc: '6 Australian cities in QS Best Student Cities global top 50 — Melbourne, Sydney, Brisbane, Adelaide, Perth, Canberra.' },
                  { icon: '🏅', title: 'Abundant Scholarships', desc: 'Australia Awards (full coverage), Destination Australia (AUD 15k/year), RTP grants, university merit scholarships.' },
                  { icon: '⭐', title: 'Quality of Life', desc: 'Australia ranks global top 10 for quality of life. Canberra #1 in Oxford Economics 2025 Global Cities Index.' },
                ].map(c => (
                  <div key={c.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-yellow-400 hover:shadow-md transition-all group">
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <h3 className="font-bold text-[#001F3F] text-sm mb-1 group-hover:text-yellow-600 transition-colors">{c.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 03 — TOP UNIVERSITIES
          ══════════════════════════════════════════════ */}
          <section id="universities" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-xl flex-shrink-0">🏛</div>
              <div>
                <div className="text-purple-600 text-xs font-bold uppercase tracking-widest">Ranked Institutions</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">03</span>Top Australian Universities for Nepali Students 2026</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5 flex gap-3">
                <span className="text-xl flex-shrink-0">💡</span>
                <p className="text-teal-800 text-sm"><strong>Level 3 Strategy:</strong> Applying to a Level 1 provider university (most Go8 and major universities) reduces your combined visa assessment burden significantly. All Go8 universities below are Level 1 providers.</p>
              </div>

              <h3 className="font-bold text-[#001F3F] mb-3 flex items-center gap-2"><span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Budget Friendly</span> Affordable Universities</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                  { name: 'Western Sydney University', fee: 'AUD 25k–33k', npr: 'NPR 21–28L', tags: ['Budget Friendly','Nursing'], qs: '#341' },
                  { name: 'University of Tasmania (UTAS)', fee: 'AUD 28k–35k', npr: 'NPR 24–29L', tags: ['Regional Bonus','Nursing','PR+'], qs: '#307' },
                  { name: 'University of Newcastle', fee: 'AUD 32k–40k', npr: 'NPR 27–34L', tags: ['Regional Bonus','Employability'], qs: '#173' },
                  { name: 'Griffith University', fee: 'AUD 31k–39k', npr: 'NPR 26–33L', tags: ['Gold Coast','IT'], qs: '#243' },
                  { name: 'University of Wollongong', fee: 'AUD 30k–38k', npr: 'NPR 25–32L', tags: ['IT Focus','Scholarships'], qs: '#162' },
                ].map(u => (
                  <div key={u.name} className="border border-gray-200 rounded-xl p-4 hover:border-yellow-400 hover:shadow-sm transition-all">
                    <div className="text-[#001F3F] font-bold text-sm mb-0.5">{u.name}</div>
                    <div className="text-gray-500 text-xs mb-1">QS {u.qs}</div>
                    <div className="text-gray-700 text-sm font-semibold">{u.fee}</div>
                    <div className="text-yellow-600 text-xs">{u.npr}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {u.tags.map(t => <span key={t} className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full border border-green-200">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-[#001F3F] mb-3 flex items-center gap-2"><span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">Mid-Tier & Go8</span> Top-Ranked Universities</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: 'Macquarie University', fee: 'AUD 36k–45k', npr: 'NPR 30–38L', tags: ['Sydney','Analytics'], qs: '#130' },
                  { name: 'University of Queensland', fee: 'AUD 35k–46k', npr: 'NPR 29–39L', tags: ['Go8','Agriculture'], qs: '#40' },
                  { name: 'Monash University', fee: 'AUD 36k–48k', npr: 'NPR 30–40L', tags: ['Go8','Pharmacy'], qs: '#37' },
                  { name: 'ANU (Canberra)', fee: 'AUD 38k–48k', npr: 'NPR 32–40L', tags: ['Go8','Research'], qs: '#30' },
                  { name: 'UNSW Sydney', fee: 'AUD 40k–52k', npr: 'NPR 34–44L', tags: ['Go8','Engineering'], qs: '#19' },
                  { name: 'University of Melbourne', fee: 'AUD 45k–55k', npr: 'NPR 38–46L', tags: ['Go8','#1 in Aus'], qs: '#13' },
                ].map(u => (
                  <div key={u.name} className="border border-gray-200 rounded-xl p-4 hover:border-yellow-400 hover:shadow-sm transition-all">
                    <div className="text-[#001F3F] font-bold text-sm mb-0.5">{u.name}</div>
                    <div className="text-gray-500 text-xs mb-1">QS {u.qs}</div>
                    <div className="text-gray-700 text-sm font-semibold">{u.fee}</div>
                    <div className="text-yellow-600 text-xs">{u.npr}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {u.tags.map(t => <span key={t} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-200">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 04 — COURSES & PR PATHWAYS
          ══════════════════════════════════════════════ */}
          <section id="courses" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl flex-shrink-0">📚</div>
              <div>
                <div className="text-green-600 text-xs font-bold uppercase tracking-widest">Programs & PR</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">04</span>Best Courses & PR Pathway Guide</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: '🏥', title: 'Nursing (RN / Midwifery)', badge: 'Strongest PR Pathway', desc: 'National shortage — near-guaranteed employment. Starting salary AUD 75,000–95,000 (~NPR 63–80L). UTAS, UON, Western Sydney, JCU.' },
                  { icon: '💻', title: 'IT & Cybersecurity', badge: 'SOL Listed Nationally', desc: 'Cybersecurity graduates who study regionally qualify for 6-year post-study work visa. Salaries AUD 90k–140k.' },
                  { icon: '⚙️', title: 'Engineering (Civil/Structural)', badge: 'Strong PR Pathway', desc: 'AUD 50B green energy transition creates thousands of engineering jobs annually. Strong demand across all states.' },
                  { icon: '🤖', title: 'Artificial Intelligence', badge: 'Critical Skills Listed', desc: 'AI specialists earn AUD 110,000+ from day one. Direct employer-sponsorship pathways to PR.' },
                  { icon: '🤝', title: 'Social Work', badge: 'All States SOL Listed', desc: 'Listed on Skilled Occupation List across all states. Direct PR route. Government employment: stable income.' },
                  { icon: '👶', title: 'Early Childhood Education', badge: 'Government Incentives', desc: 'Critical shortage. Regional positions attract +2yr post-study work and PR state-nomination.' },
                  { icon: '🏃', title: 'Physiotherapy', badge: 'National SOL', desc: 'Growing demand. AUD 75,000–100,000 starting salaries. Regional roles boost PR eligibility significantly.' },
                  { icon: '🌿', title: 'Renewable Energy', badge: 'AUD 50B Market', desc: 'Solar, wind, hydrogen engineers in strong demand. Paid internships common across regional Australia.' },
                ].map(c => (
                  <div key={c.title} className="border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-green-300 transition-all">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <h3 className="font-bold text-[#001F3F] text-sm">{c.title}</h3>
                        <span className="inline-block bg-teal-50 text-teal-700 border border-teal-200 text-xs px-2 py-0.5 rounded-full mt-0.5">{c.badge}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-[#001F3F] mb-3">PR Pathway Courses — 2026 Skilled Occupation List</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#001F3F] text-white">
                      <th className="px-4 py-3 text-left font-semibold text-xs">Course / Field</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs">SOL Status</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs">Post-Study Work</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs">Regional Bonus</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs">Avg. Salary (AUD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Nursing (RN / Midwifery)','National Shortage','2–4 years','+2 years','75,000–95,000'],
                      ['Cybersecurity','Critical Skills','2–6 years','+2 years','95,000–140,000'],
                      ['AI / Data Science','National','2–4 years','+1 year','100,000–135,000'],
                      ['Civil / Structural Engineering','National','2–4 years','+2 years','85,000–115,000'],
                      ['Software Engineering','National','2–4 years','+1 year','90,000–130,000'],
                      ['Social Work','All States','2–3 years','+1–2 years','70,000–90,000'],
                      ['Early Childhood Education','National','2–3 years','+2 years','58,000–75,000'],
                      ['Physiotherapy','National','2–3 years','+1–2 years','75,000–100,000'],
                    ].map(([course, sol, psw, reg, sal], i) => (
                      <tr key={course} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-medium text-[#001F3F] text-xs">{course}</td>
                        <td className="px-4 py-3"><span className="bg-teal-50 text-teal-700 border border-teal-200 text-xs px-2 py-0.5 rounded-full">{sol}</span></td>
                        <td className="px-4 py-3 text-gray-700 text-xs">{psw}</td>
                        <td className="px-4 py-3 text-green-700 text-xs font-semibold">{reg}</td>
                        <td className="px-4 py-3 text-gray-700 text-xs">{sal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 05 — COSTS IN NPR
          ══════════════════════════════════════════════ */}
          <section id="costs" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-xl flex-shrink-0">💰</div>
              <div>
                <div className="text-yellow-600 text-xs font-bold uppercase tracking-widest">Budget Planning</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">05</span>Cost to Study in Australia from Nepal — in NPR & AUD</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              {/* Rate strip */}
              <div className="bg-[#001F3F] rounded-xl p-4 mb-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { lbl: 'AUD to NPR Rate', val: 'AUD 1 ≈ NPR 84' },
                  { lbl: 'Annual Tuition (NPR)', val: 'NPR 17–35 Lakhs' },
                  { lbl: 'Annual Living Cost (NPR)', val: 'NPR ~25 Lakhs' },
                  { lbl: 'Year 1 Total Est. (NPR)', val: 'NPR 47–80 Lakhs' },
                ].map(r => (
                  <div key={r.lbl}>
                    <div className="text-white/50 text-xs">{r.lbl}</div>
                    <div className="text-yellow-300 font-bold text-base">{r.val}</div>
                  </div>
                ))}
              </div>

              {/* Cost tier cards */}
              <h3 className="font-bold text-[#001F3F] mb-3">Annual Tuition by University Tier</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { tier: 'Budget Universities', gbp: 'AUD 15k–25k', npr: 'NPR 12.6–21L', note: 'UTAS, Western Sydney', color: 'bg-green-50 border-green-200' },
                  { tier: 'Mid-Tier Universities', gbp: 'AUD 25k–35k', npr: 'NPR 21–29L', note: 'UON, UoW, Griffith', color: 'bg-blue-50 border-blue-200' },
                  { tier: 'Top-Tier / Go8', gbp: 'AUD 36k–42k', npr: 'NPR 30–35L', note: 'Monash, UQ, ANU', color: 'bg-purple-50 border-purple-200' },
                  { tier: 'Russell Equivalent', gbp: 'AUD 45k–55k', npr: 'NPR 38–46L', note: 'Melbourne, Sydney, UNSW', color: 'bg-orange-50 border-orange-200' },
                ].map(c => (
                  <div key={c.tier} className={`border rounded-xl p-4 ${c.color}`}>
                    <div className="font-bold text-[#001F3F] text-xs mb-2">{c.tier}</div>
                    <div className="text-lg font-bold text-gray-800">{c.gbp}</div>
                    <div className="text-yellow-600 font-semibold text-sm">{c.npr}</div>
                    <div className="text-gray-500 text-xs mt-2">{c.note}</div>
                  </div>
                ))}
              </div>

              {/* UKVI bank balance */}
              <h3 className="font-bold text-[#001F3F] mb-3">Required Proof of Funds (Bank Statements)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5">
                  <div className="font-bold text-blue-800 mb-3 flex items-center gap-2">📍 Outside Major Cities (Regional)</div>
                  <div className="space-y-2">
                    {[['Annual Living (UKVI)', 'AUD 29,710'],['In NPR (~84/AUD)', '~NPR 24.9 Lakhs'],['Bank Statements Required', '6–12 months'],['Visa Fee', 'AUD 2,000 (~NPR 1.68L']].map(([l, v]) => (
                      <div key={l} className="flex justify-between items-center py-1 border-b border-blue-200 last:border-0">
                        <span className="text-blue-700 text-xs">{l}</span>
                        <span className="font-bold text-blue-900 text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-5">
                  <div className="font-bold text-purple-800 mb-3 flex items-center gap-2">🏙️ Sydney / Melbourne (Metro)</div>
                  <div className="space-y-2">
                    {[['Annual Living (UKVI)', 'AUD 29,710+'],['In NPR (~84/AUD)', '~NPR 25+ Lakhs'],['Bank Statements Required', '6–12 months'],['Weekly Rent (Shared)', 'AUD 220–400']].map(([l, v]) => (
                      <div key={l} className="flex justify-between items-center py-1 border-b border-purple-200 last:border-0">
                        <span className="text-purple-700 text-xs">{l}</span>
                        <span className="font-bold text-purple-900 text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Living cost by city */}
              <h3 className="font-bold text-[#001F3F] mb-3">Cost by Study City</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead><tr className="bg-[#001F3F] text-white"><th className="px-4 py-3 text-left text-xs font-semibold">City</th><th className="px-4 py-3 text-left text-xs font-semibold">Weekly Rent (Shared)</th><th className="px-4 py-3 text-left text-xs font-semibold">Monthly Living (AUD)</th><th className="px-4 py-3 text-left text-xs font-semibold">Monthly Living (NPR)</th><th className="px-4 py-3 text-left text-xs font-semibold">PR Advantage</th></tr></thead>
                  <tbody>
                    {[
                      ['Sydney','AUD 250–400','2,200–3,800','1.85–3.2 Lakhs','Metro — standard'],
                      ['Melbourne','AUD 220–380','2,000–3,500','1.68–2.9 Lakhs','Metro — standard'],
                      ['Brisbane','AUD 200–330','1,800–3,000','1.51–2.5 Lakhs','Metro — standard'],
                      ['Adelaide','AUD 170–270','1,500–2,500','1.26–2.1 Lakhs','State nomination'],
                      ['Perth','AUD 190–300','1,700–2,800','1.43–2.35 Lakhs','Strong state nomination'],
                      ['Hobart (UTAS)','AUD 160–240','1,400–2,200','1.18–1.85 Lakhs','Regional — +2yr PSW bonus'],
                      ['Newcastle','AUD 160–220','1,400–2,000','1.18–1.68 Lakhs','Regional — +2yr PSW bonus'],
                    ].map(([city, rent, aud, npr, pr], i) => (
                      <tr key={city} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-medium text-[#001F3F] text-xs">{city}</td>
                        <td className="px-4 py-3 text-gray-700 text-xs">{rent}</td>
                        <td className="px-4 py-3 text-gray-700 text-xs">{aud}</td>
                        <td className="px-4 py-3 text-yellow-700 font-semibold text-xs">{npr}</td>
                        <td className="px-4 py-3 text-xs"><span className={`px-2 py-0.5 rounded-full text-xs ${pr.includes('Regional') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{pr}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 06 — VISA STEP BY STEP
          ══════════════════════════════════════════════ */}
          <section id="visa" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-xl flex-shrink-0">🛂</div>
              <div>
                <div className="text-red-600 text-xs font-bold uppercase tracking-widest">Student Visa</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">06</span>Australia Student Visa (Subclass 500) — Step-by-Step 2026</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex gap-3">
                <span className="text-xl flex-shrink-0">🔑</span>
                <p className="text-red-800 text-sm"><strong>2026 Level 3 Rule:</strong> English test scores mandatory upfront · 6–12 months of bank statements required · All documents must be complete at lodgement — incomplete applications may be refused outright.</p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-teal-400 opacity-30" />
                <div className="space-y-4">
                  {[
                    { num: '01', title: 'Research CRICOS-Registered Universities', body: 'Verify at cricos.teqsa.gov.au before applying. Under Level 3, choosing a Level 1 provider reduces your combined visa burden. Check the university\'s provider level at immi.homeaffairs.gov.au.' },
                    { num: '02', title: 'Achieve Your IELTS or PTE Score (Mandatory Upfront)', body: 'English scores are mandatory at visa lodgement — cannot be added later. Target IELTS 6.5+ or PTE 58+ to open more universities. Allow 2–3 months of preparation plus booking lead time.' },
                    { num: '03', title: 'Apply to University & Receive Offer Letter', body: 'Submit applications with all academic transcripts, IELTS/PTE scores, and SOP/GS statement. Offer letters typically arrive within 1–6 weeks. Review conditional vs unconditional offers carefully.' },
                    { num: '04', title: 'Pay Initial Fees & Receive CoE', body: 'Accept your offer, pay the initial tuition deposit (typically first-semester fees), and receive your Confirmation of Enrolment (CoE). Your CoE is mandatory for your visa application.' },
                    { num: '05', title: 'Prepare Financial Documents (6–12 Months)', body: 'Show AUD 29,710/year for living costs plus tuition. Prepare 6–12 months of bank statements, source-of-funds evidence, and sponsor income proof. Avoid sudden large deposits — funds must be verifiably genuine over time.' },
                    { num: '06', title: 'Write Your Genuine Student (GS) Statement', body: 'The most critical document. Address: why Australia, why this course, your career goal, ties to Nepal, financial readiness. Be specific, authentic, and consistent with all other documents. Generic statements are detected immediately.' },
                    { num: '07', title: 'Purchase OSHC & Complete Health Checks', body: 'Purchase Overseas Student Health Cover (OSHC) — mandatory for the full visa duration. Complete health examination (HAP ID) if instructed by the Department of Home Affairs.' },
                    { num: '08', title: 'Lodge Visa via ImmiAccount (Decision-Ready)', body: 'Create an ImmiAccount at immi.homeaffairs.gov.au. Upload ALL documents at lodgement. Pay AUD 2,000 (~NPR 1.68 lakhs) visa fee. Under Level 3, incomplete applications face higher refusal risk.' },
                    { num: '09', title: 'Await Decision — Allow 4–12 Weeks', body: 'Under Level 3, processing takes 4–12 weeks. Do not book flights until visa is granted. Track via ImmiAccount. Respond promptly to any requests for further information.' },
                    { num: '10', title: 'Pre-Departure Preparation', body: 'Book flights, arrange accommodation, attend university pre-departure orientation, notify Australian High Commission Kathmandu. Carry all original documents for customs and immigration.' },
                  ].map(step => (
                    <div key={step.num} className="flex gap-4 pl-2">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#001F3F] text-yellow-300 font-mono text-xs font-bold flex items-center justify-center border-2 border-yellow-400 z-10">{step.num}</div>
                      <div className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-yellow-300 transition-colors">
                        <div className="font-bold text-[#001F3F] text-sm mb-1">{step.title}</div>
                        <p className="text-gray-600 text-xs leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 07 — IELTS / PTE
          ══════════════════════════════════════════════ */}
          <section id="english" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl flex-shrink-0">📝</div>
              <div>
                <div className="text-orange-600 text-xs font-bold uppercase tracking-widest">Language Requirements</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">07</span>IELTS & PTE Requirements — Mandatory Upfront Under Level 3</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">🎓 IELTS Academic Route</h4>
                  <div className="space-y-2">
                    {[['Undergraduate','6.0 overall (no band &lt;5.5)'],['Postgraduate','6.5 overall (no band &lt;6.0)'],['Nursing / Medicine','7.0 (min. band scores required)'],['Validity','2 years from test date'],['Test Centers','IDP Nepal & British Council — Kathmandu, Pokhara, Biratnagar']].map(([l,v]) => (
                      <div key={l} className="flex justify-between gap-2 py-1.5 border-b border-blue-100 last:border-0">
                        <span className="text-blue-700 text-xs flex-shrink-0">{l}</span>
                        <span className="text-blue-900 font-semibold text-xs text-right" dangerouslySetInnerHTML={{__html: v}} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                  <h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">⚡ PTE Academic — Why Many Choose It</h4>
                  <div className="space-y-2">
                    {[['Undergraduate','50 overall (no skill &lt;50)'],['Postgraduate','57–58 (no skill &lt;54)'],['Validity','2 years from test date'],['Results','48 hours — faster than IELTS'],['Equivalent','PTE 58 ≈ IELTS 6.5'],['Test Centers','New Baneshwor & Lazimpat, Kathmandu']].map(([l,v]) => (
                      <div key={l} className="flex justify-between gap-2 py-1.5 border-b border-teal-100 last:border-0">
                        <span className="text-teal-700 text-xs flex-shrink-0">{l}</span>
                        <span className="text-teal-900 font-semibold text-xs text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                💡 <strong>Pro Tip:</strong> Aim for IELTS 6.5 or PTE 58 — it opens ~40% more university options than minimum scores. Under Level 3, book your test immediately — scores are needed before you can apply to universities.
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 08 — SCHOLARSHIPS
          ══════════════════════════════════════════════ */}
          <section id="scholarships" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center text-xl flex-shrink-0">🏅</div>
              <div>
                <div className="text-yellow-600 text-xs font-bold uppercase tracking-widest">Financial Aid</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">08</span>Scholarships for Nepali Students in Australia 2026</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '🏛️', name: 'Australia Awards (DFAT)', coverage: 'Full Coverage', tags: ['Tuition','Airfare','Living Allowance','OSHC'], desc: 'Most prestigious government scholarship. Highly competitive — apply 18+ months before intake via the Australia Awards website.', color: 'border-yellow-300 bg-yellow-50' },
                  { icon: '🔬', name: 'Research Training Program (RTP)', coverage: 'Full Tuition + AUD 35k/yr Stipend', tags: ['PhD','Research Master\'s'], desc: 'Australian Government-funded for PhD and Research Master\'s students. Apply through your chosen university\'s research school.', color: 'border-blue-300 bg-blue-50' },
                  { icon: '🗺️', name: 'Destination Australia Program', coverage: 'Up to AUD 15,000/year', tags: ['Regional Study','PR Bonus','NPR 12.6L/yr'], desc: 'For students who choose to study in regional Australia. Also gives extended post-study work rights and state-sponsored PR nomination eligibility.', color: 'border-green-300 bg-green-50' },
                  { icon: '🎓', name: 'University Merit Scholarships', coverage: '10–100% Tuition Reduction', tags: ['Monash','UNSW','UTAS','UQ','UON'], desc: 'Merit-based scholarships at most Australian universities. Apply 9–12 months before intake. Monash, UNSW, Macquarie, UTAS, UON all offer these.', color: 'border-purple-300 bg-purple-50' },
                  { icon: '👩‍🔬', name: 'APEC Women in Research', coverage: 'Full Research Coverage', tags: ['Women','STEM','DFAT Funded'], desc: 'For high-achieving female researchers from APEC economies including Nepal. Enables women to pursue research at leading Australian universities. Opens annually in January.', color: 'border-pink-300 bg-pink-50' },
                  { icon: '🌾', name: 'ACIAR Scholarships', coverage: 'Full Tuition + Living Costs', tags: ['Agriculture','Environmental Science'], desc: 'Australian Centre for International Agricultural Research. For Nepali students pursuing agriculture, forestry, fisheries, and environmental science.', color: 'border-teal-300 bg-teal-50' },
                ].map(s => (
                  <div key={s.name} className={`border-2 rounded-xl p-5 ${s.color}`}>
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-2xl">{s.icon}</span>
                      <div>
                        <h3 className="font-bold text-[#001F3F] text-sm">{s.name}</h3>
                        <div className="text-yellow-600 font-bold text-xs mt-0.5">{s.coverage}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {s.tags.map(t => <span key={t} className="bg-white/70 text-gray-700 text-xs px-2 py-0.5 rounded-full border border-gray-200">{t}</span>)}
                    </div>
                    <p className="text-gray-700 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 09 — INTAKE DATES
          ══════════════════════════════════════════════ */}
          <section id="intakes" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">📅</div>
              <div>
                <div className="text-indigo-600 text-xs font-bold uppercase tracking-widest">Academic Calendar</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">09</span>Australia Intake Dates 2026 for Nepali Students</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              {/* Calendar strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                  { month: 'Sep–Oct 2025', action: 'Apply to universities', type: 'apply', intake: 'For Feb 2026 Start' },
                  { month: 'Oct–Nov 2025', action: 'Lodge visa application', type: 'visa', intake: 'Semester 1 (Major)' },
                  { month: 'Feb–Mar 2026', action: '✈️ Course starts', type: 'intake', intake: 'Semester 1 — Engineering, Business, IT, Law' },
                  { month: 'Mar–Apr 2026', action: 'Apply to universities', type: 'apply', intake: 'For Jul 2026 Start' },
                  { month: 'Apr–May 2026', action: 'Lodge visa application', type: 'visa', intake: 'Semester 2 (Mid-year)' },
                  { month: 'Jul–Aug 2026', action: '✈️ Course starts', type: 'intake', intake: 'Semester 2 — Nursing, CS, MBA, Health' },
                ].map(c => (
                  <div key={c.month} className={`rounded-xl p-4 border-2 ${c.type === 'intake' ? 'bg-green-50 border-green-300' : c.type === 'visa' ? 'bg-blue-50 border-blue-300' : 'bg-amber-50 border-amber-300'}`}>
                    <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${c.type === 'intake' ? 'text-green-700' : c.type === 'visa' ? 'text-blue-700' : 'text-amber-700'}`}>{c.month}</div>
                    <div className="font-bold text-[#001F3F] text-sm">{c.action}</div>
                    <div className="text-gray-600 text-xs mt-1">{c.intake}</div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-yellow-400 bg-yellow-50 px-4 py-3 rounded-r-xl text-[#001F3F] text-sm italic mb-5">
                "Under Assessment Level 3, Nepali students should start their full preparation — IELTS/PTE, documents, and consultancy — at least 14 months before their target intake date."
              </blockquote>

              {/* 12-month timeline table */}
              <h3 className="font-bold text-[#001F3F] mb-3">Recommended 12-Month Application Timeline</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead><tr className="bg-[#001F3F] text-white"><th className="px-4 py-3 text-left text-xs font-semibold">Month</th><th className="px-4 py-3 text-left text-xs font-semibold">Action Required</th><th className="px-4 py-3 text-left text-xs font-semibold">Level 3 Notes</th></tr></thead>
                  <tbody>
                    {[
                      ['Month 1–2','Research universities, courses, and PR pathways','Verify CRICOS + provider level'],
                      ['Month 2–4','Register and prepare for IELTS or PTE','Scores mandatory upfront — don\'t delay'],
                      ['Month 4–5','Sit IELTS/PTE; receive score','Aim for 6.5 IELTS / 58 PTE minimum'],
                      ['Month 5–6','Apply to universities; write SOP/GS statement','GS statement needs detailed drafting time'],
                      ['Month 6–7','Receive offer letter; begin financial document preparation','Start 6–12 month bank statement collection'],
                      ['Month 7–8','Pay tuition deposit; receive CoE; purchase OSHC','Arrange source-of-funds evidence fully'],
                      ['Month 8–9','Lodge visa application via ImmiAccount (decision-ready)','Upload all documents upfront — no gaps'],
                      ['Month 9–11','Await visa decision (4–12 weeks)','Respond to any DHA requests promptly'],
                      ['Month 11–12','Visa granted — pre-departure preparation','Book flights, arrange housing, attend orientation'],
                    ].map(([m, a, n], i) => (
                      <tr key={m} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 font-semibold text-[#001F3F] text-xs whitespace-nowrap">{m}</td>
                        <td className="px-4 py-3 text-gray-700 text-xs">{a}</td>
                        <td className="px-4 py-3 text-teal-700 text-xs font-medium">{n}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 10 — WORK RIGHTS & 485
          ══════════════════════════════════════════════ */}
          <section id="workrights" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-xl flex-shrink-0">💼</div>
              <div>
                <div className="text-green-600 text-xs font-bold uppercase tracking-widest">Work & Career</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">10</span>Work Rights & Post-Study Visa (Subclass 485)</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { num: 'AUD 1,157', lbl: 'Per Fortnight (48 hrs)', sub: '~NPR 97,000 during semester' },
                  { num: 'AUD 24.10', lbl: 'Min. Wage / Hour', sub: 'Fair Work Act protected (Apr 2026)' },
                  { num: 'Up to 6 Yrs', lbl: 'Post-Study Work (485)', sub: 'Unlimited during holidays' },
                ].map(s => (
                  <div key={s.lbl} className="bg-[#001F3F] rounded-xl p-5 text-center">
                    <div className="text-yellow-300 text-2xl font-bold mb-1">{s.num}</div>
                    <div className="text-white text-sm font-semibold">{s.lbl}</div>
                    <div className="text-white/60 text-xs mt-1">{s.sub}</div>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-[#001F3F] mb-3">Subclass 485 Post-Study Work Visa Duration</h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
                <table className="w-full text-sm">
                  <thead><tr className="bg-[#001F3F] text-white"><th className="px-4 py-3 text-left text-xs font-semibold">Qualification</th><th className="px-4 py-3 text-left text-xs font-semibold">Post-Study Work Duration</th></tr></thead>
                  <tbody>
                    {[
                      ['Bachelor\'s Degree','2 years'],
                      ['Bachelor\'s Honours / Master\'s by Coursework','2 years'],
                      ['Master\'s by Research','3 years'],
                      ['PhD / Doctoral Degree','4 years'],
                      ['Regional study bonus','+1 to +2 years'],
                      ['Maximum possible','6 years'],
                    ].map(([q, d], i) => (
                      <tr key={q} className={i === 5 ? 'bg-yellow-50 font-bold' : i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-3 text-[#001F3F] text-xs font-medium">{q}</td>
                        <td className="px-4 py-3 text-gray-700 text-xs font-semibold">{d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                ⚠️ <strong>New in 2026:</strong> The Subclass 485 has a maximum age limit of <strong>35 years</strong> at the time of application. Plan your study timeline accordingly if you are approaching this threshold.
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SECTION 11 — STUDENT LIFE
          ══════════════════════════════════════════════ */}
          <section id="studentlife" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-xl flex-shrink-0">🌆</div>
              <div>
                <div className="text-pink-600 text-xs font-bold uppercase tracking-widest">Life in Australia</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">11</span>Student Life — What Nepali Students Actually Experience</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: '🏠', title: 'Accommodation', desc: 'On-campus halls: AUD 250–450/week. Shared private: AUD 150–300/person/week. Book early — housing shortages across all major cities.' },
                  { icon: '🇳🇵', title: 'Nepali Community', desc: '57,000+ Nepali students and diaspora in Sydney (Lakemba), Melbourne (Footscray), Brisbane and beyond. Dashain/Tihar events, Nepali restaurants, WhatsApp groups.' },
                  { icon: '🚌', title: 'Public Transport', desc: 'Excellent student-friendly transport. Monthly cost: AUD 140–260 (~NPR 12–22k). Opal (Sydney), Myki (Melbourne), Go card (Brisbane) offer student discounts.' },
                  { icon: '🏥', title: 'Healthcare (OSHC)', desc: 'Your mandatory OSHC covers GP, specialists, hospital, and ambulance. Universities provide free mental health counselling — don\'t hesitate to access it.' },
                  { icon: '⚠️', title: 'Real Challenges to Prepare For', desc: 'Housing competition is fierce. Academic writing standards differ from Nepal. Cultural adjustment takes time. 30% of international students report depression — community connections are vital.' },
                  { icon: '⭐', title: 'Quality of Life', desc: 'Australia ranks global top 10. Canberra topped the 2025 Global Cities Index across 1,000 cities. Clean environment, world-class healthcare, political stability, outdoor lifestyle.' },
                ].map(c => (
                  <div key={c.title} className="border border-gray-200 rounded-xl p-4">
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <h3 className="font-bold text-[#001F3F] text-sm mb-1">{c.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── MID-PAGE CTA ── */}
          <div className="bg-gradient-to-r from-[#001F3F] to-[#003080] rounded-2xl p-7 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Start Your Australian Journey — The Right Way in 2026</h2>
            <p className="text-white/70 mb-5 max-w-lg mx-auto text-sm">Under Assessment Level 3, preparation and expert guidance are more critical than ever. Work with San Marina's certified counsellors who know the 2026 requirements inside out.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/consultation/" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold px-6 py-3 rounded-xl transition-colors">
                📅 Book Free Counselling Session
              </Link>
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-colors">
                📞 Contact San Marina Kathmandu
              </Link>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              SECTION 12 — FAQs
          ══════════════════════════════════════════════ */}
          <section id="faqs" className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">❓</div>
              <div>
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Every Question Answered</div>
                <h2 className="text-base sm:text-xl font-bold text-[#001F3F]"><span className="text-gray-400 text-sm font-mono mr-2">12</span>Study in Australia from Nepal — 20 FAQs (2026)</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-2">
                {faqData.map((item, i) => (
                  <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden hover:border-yellow-300 transition-colors">
                    <summary className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-[#001F3F] text-sm">
                      <span>{item.q}</span>
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-base font-light group-open:bg-yellow-400 group-open:text-white transition-colors mt-0.5">+</span>
                    </summary>
                    <div className="px-5 pb-4 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-7 text-center">
            <h2 className="text-2xl font-bold text-[#001F3F] mb-2">Ready to Study in Australia?</h2>
            <p className="text-[#001F3F]/70 mb-5 max-w-lg mx-auto text-sm">San Marina Education Consultancy — Dillibazar, Kathmandu. Expert guidance on Assessment Level 3 applications, university shortlisting, GS statements, and complete visa document preparation.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/consultation/" className="inline-flex items-center justify-center gap-2 bg-[#001F3F] hover:bg-[#002855] text-white font-bold px-6 py-3 rounded-xl transition-colors">
                📅 Book Free Consultation
              </Link>
              <Link href="/blog/" className="inline-flex items-center justify-center gap-2 border-2 border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F]/10 font-semibold px-6 py-3 rounded-xl transition-colors">
                ← Back to Blog
              </Link>
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


          {/* Schema JSON-LD */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              { '@type': 'Article', headline: 'Study in Australia from Nepal 2026 — Visa, Cost, Universities & PR Guide', description: 'Complete 2026 guide for Nepali students on studying in Australia covering Assessment Level 3, costs in NPR, universities, scholarships, and PR pathways.', datePublished: '2026-05-17', author: { '@type': 'Person', name: 'Sanjay Shrestha', jobTitle: 'Head Counsellor', worksFor: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' } }, publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' }, image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1280&q=80', mainEntityOfPage: 'https://www.sanmarina.edu.np/blog/study-in-australia-from-nepal-for-nepali-students/' },
              { '@type': 'FAQPage', mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            ]
          })}} />

        </div>
      </div>
    </main>
  );
}
