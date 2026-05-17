import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Study in USA from Nepal 2026 — F-1 Visa, Costs, Scholarships & OPT Guide | San Marina',
  description: 'Complete 2026 guide: Study in USA from Nepal. F-1 visa step-by-step, costs NPR 35–108 lakhs, Fulbright scholarship, STEM OPT 36 months, top universities & courses for Nepali students.',
  keywords: 'study in usa from nepal, f1 visa nepal 2026, usa student visa nepal, fulbright scholarship nepal, stem opt nepal, us universities for nepali students, study america nepal cost',
  alternates: { canonical: 'https://www.sanmarina.edu.np/blog/study-in-usa-from-nepal/' },
  openGraph: {
    title: 'Study in USA from Nepal 2026 — Complete Guide | San Marina',
    description: 'F-1 visa, costs in NPR, Fulbright scholarship, STEM OPT 36 months, top universities — complete USA study guide for Nepali students.',
    images: ['https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1280&q=80'],
    url: 'https://www.sanmarina.edu.np/blog/study-in-usa-from-nepal/',
  },
};

const sections = [
  { id: 'keyfacts', label: '📊 Key Facts 2026' },
  { id: 'why', label: 'Why Choose USA' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'costs', label: 'Costs in NPR' },
  { id: 'visa', label: 'F-1 Visa Process' },
  { id: 'universities', label: 'Universities & Courses' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'workrights', label: 'OPT & Work Rights' },
  { id: 'intakes', label: 'Intakes & Timeline' },
  { id: 'studentlife', label: 'Student Life' },
  { id: 'faqs', label: 'FAQs (15)' },
];

const faqData = [
  { q: 'How much does it cost to study in USA from Nepal in total?', a: 'Total annual costs range from NPR 25 lakh to over NPR 1.1 crore, depending on university type and location. Community colleges are the most affordable at $6,000–$18,000/year in tuition. Public universities cost $10,000–$35,000/year; private universities $25,000–$65,000/year. Add living costs of $10,000–$25,000 annually. Scholarships and graduate assistantships can significantly reduce these figures.' },
  { q: 'What are the minimum requirements to study in USA from Nepal?', a: 'For undergraduate admission: completion of 10+2 / NEB / A-Levels, IELTS 6.0+ or TOEFL 61+, and a valid passport. For master\'s admission: a completed bachelor\'s degree with transcripts, IELTS 6.5+ or TOEFL 79+, and GRE/GMAT scores (where required). Financial proof is required for the F-1 visa — typically covering first year\'s tuition plus living expenses.' },
  { q: 'Can I get a full scholarship to study in USA from Nepal?', a: 'Yes, full scholarships are available but competitive. The Fulbright Nepal Program provides full government funding for outstanding students. Many universities offer full tuition waivers to top international applicants. PhD programs typically provide full funding plus a living stipend. Graduate assistantships (RA/TA) cover tuition and provide monthly stipends at many research universities. Apply 8–12 months early for best chances.' },
  { q: 'How long does the F-1 US student visa process take from Nepal?', a: 'From receiving your I-20 to attending your visa interview, allow 4–6 weeks minimum. Visa appointment availability at the US Embassy Kathmandu can be limited during peak periods (April–July), so book as soon as you have your I-20. Visa decisions are typically given on the interview day, with passport return within 5–10 business days if approved.' },
  { q: 'Can Nepali students work in the USA after graduation?', a: 'Yes. After graduation, F-1 students can apply for Optional Practical Training (OPT), providing 12 months of full-time work authorization in your field of study. STEM graduates (Computer Science, Engineering, Data Science, etc.) can extend OPT by 24 months for a total of 36 months. This period allows you to gain work experience and pursue H-1B employer sponsorship for long-term US employment.' },
  { q: 'Is it better to go to a community college or directly to a 4-year university?', a: 'Community colleges offer a cost-effective pathway: lower tuition ($6,000–$18,000/year vs. $25,000+), easier admission with lower test score requirements, and the ability to transfer credits to a 4-year university after 2 years. This can save NPR 20–40 lakh over a 4-year bachelor\'s while still allowing graduation from a prestigious university. San Marina advisors can help evaluate which path is best for your profile.' },
  { q: 'What should I say in my US visa interview to get approved?', a: 'The visa officer primarily wants to confirm three things: (1) you have genuine academic intent, (2) you have sufficient financial resources, and (3) you have strong ties to Nepal. Be confident, concise, and honest. Prepare answers about your chosen university, program, career goals, and family ties in Nepal. San Marina\'s visa preparation service includes mock interviews covering 100+ common F-1 interview questions.' },
  { q: 'Which intake is best for Nepali students applying to US universities?', a: 'The Fall intake (August–September) is the primary intake with the most programs, scholarships, and available seats. Spring intake (January) is also available at many universities. Summer intake (May–June) is limited. Most Nepali students prefer Fall for maximum options and scholarship availability.' },
  { q: 'What is STEM OPT and how does it benefit Nepali students?', a: 'STEM OPT extends post-graduation work authorization from 12 months to 36 months total for Science, Technology, Engineering, and Mathematics graduates. You must work for an E-Verified employer. This extra time is a major advantage — it gives STEM graduates more time to secure an H-1B visa and pursue long-term US employment. Subjects like Computer Science, Data Science, Engineering, and Mathematics qualify for the STEM OPT extension.' },
  { q: 'Is IELTS or TOEFL required to study in the USA?', a: 'Most US universities require either IELTS Academic (minimum 6.0–7.0) or TOEFL iBT (minimum 61–100+). Some universities accept Duolingo English Test or PTE Academic. Waivers may be granted if your previous degree was taught entirely in English. Check each university\'s specific requirement, as scores vary by program and institution.' },
  { q: 'What GPA is required to study in USA from Nepal?', a: 'For bachelor\'s admission, most programs expect 2.5–3.0 GPA (roughly 60–70%) in 10+2; competitive universities require 3.5+. For master\'s admission, a 2.5–3.0 GPA in your bachelor\'s usually qualifies — top programs may require 3.5+. If your GPA is below threshold, community college or pathway programs remain viable entry routes.' },
  { q: 'Can I bring my family (dependants) to the USA while studying?', a: 'F-1 students can apply for F-2 dependent visas for their spouse and unmarried children under 21. However, F-2 visa holders cannot work in the USA and children may attend school. The dependent must demonstrate sufficient financial support in addition to the student\'s own tuition and living costs. This increases the financial proof required for the visa interview.' },
  { q: 'What is the Fulbright Scholarship for Nepali students?', a: 'The Fulbright Nepal Program is the US Government\'s flagship scholarship — covering full tuition, living expenses, health insurance, and return flights. It is available for 1-year Master\'s or PhD programmes at US universities. Requirements: Nepali citizenship, bachelor\'s degree, strong academic record, 2+ years work experience preferred. Applications open annually through the US Embassy Kathmandu. Highly competitive — roughly 10–15 awards per year for Nepal.' },
  { q: 'What documents are required for the F-1 US student visa?', a: 'Required documents: (1) Valid passport (6+ months validity), (2) I-20 form from SEVP-approved US university, (3) SEVIS I-901 fee receipt ($350), (4) DS-160 confirmation page with barcode, (5) MRV visa application fee receipt ($185, paid at Nabil Bank), (6) Bank statements/financial proof for first year costs, (7) Academic transcripts (SEE through latest degree), (8) IELTS/TOEFL score report, (9) University acceptance letter, (10) Evidence of ties to Nepal (property, family, employment prospects).' },
  { q: 'What is CPT and how is it different from OPT?', a: 'CPT (Curricular Practical Training) authorizes off-campus work or internships that are an integral part of your curriculum — available while you are still a student. OPT (Optional Practical Training) is available after graduation for 12 months (36 months for STEM). CPT requires employer and university approval before starting. Using more than 12 months of full-time CPT makes you ineligible for OPT, so manage CPT carefully.' },
];

export default function USABlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">

      {/* ── BREADCRUMB ── */}
      <nav className="bg-white border-b border-gray-100 py-3 px-4" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
          <span>›</span>
          <Link href="/blog/" className="hover:text-[#001F3F] font-medium">Blog</Link>
          <span>›</span>
          <span className="text-[#001F3F] font-medium">Study in USA from Nepal 2026</span>
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
                Study in <span className="text-yellow-300">United States</span> from Nepal 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-xl">
                Everything Nepali students need — F-1 visa step-by-step, costs in NPR, Fulbright scholarship, STEM OPT 36 months, top universities, courses with best career outcomes, and a 14-month application timeline.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['🎓 5,000+ Universities','💵 From $6,000/yr (Community College)','🔬 STEM OPT 36 Months','🏆 Fulbright Full Scholarship','🌍 H-1B Pathway','🎯 Fall & Spring Intakes'].map(b => (
                  <span key={b} className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">{b}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/consultation/" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold px-6 py-3 rounded-full text-sm transition-colors">
                  📅 Book Free Consultation
                </Link>
                <Link href="#visa" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors">
                  🗺️ F-1 Visa Process
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-white/60 text-xs">
                <span>✍️ San Marina Education Consultancy</span>
                <span>📅 May 2026</span>
                <span>⏱️ 16 min read</span>
                <span>✅ Verified by USA Destination Counsellors</span>
              </div>
            </div>

            {/* Right snapshot card — desktop only */}
            <div className="hidden lg:block bg-white rounded-t-2xl overflow-hidden shadow-2xl self-end">
              <div className="bg-[#D4A843] px-5 py-3">
                <p className="text-[#001F3F] font-bold text-sm">🇺🇸 USA At a Glance — 2026</p>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  ['Min. Tuition', '$6,000/yr Community College (NPR ~8L)'],
                  ['Visa Type', 'F-1 Student Visa'],
                  ['SEVIS Fee', '$350 (~NPR 47,000) — one time'],
                  ['MRV Visa Fee', '$185 (~NPR 25,000) — paid at Nabil Bank'],
                  ['Work During Study', '20 hrs/week on-campus only'],
                  ['Post-Study OPT', '12 months (36 months STEM)'],
                  ['Best Intake', 'Fall — August/September'],
                  ['English', 'IELTS 6.0+ or TOEFL iBT 61+'],
                ].map(([k, v]) => (
                  <div key={k} className="flex px-5 py-3 gap-3">
                    <span className="text-gray-500 text-xs font-medium w-28 shrink-0 pt-0.5">{k}</span>
                    <span className="text-[#001F3F] text-xs font-semibold leading-snug">{v}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 bg-gray-50">
                <Link href="/consultation/" className="block w-full text-center bg-[#001F3F] hover:bg-[#002d5a] text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                  Get Free USA Guidance →
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
            <p className="text-[#001F3F] font-bold text-sm">🇺🇸 USA At a Glance — 2026</p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-white/10">
            {[
              ['Min. Tuition', '$6,000/yr Community College'],
              ['Visa Type', 'F-1 Student Visa'],
              ['SEVIS Fee', '$350 (~NPR 47,000)'],
              ['Post-Study OPT', '12 months (36 STEM)'],
              ['Work During Study', '20 hrs/week on-campus'],
              ['Best Intake', 'Fall — August/September'],
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
            { num: '5,000+', label: 'Accredited US Universities' },
            { num: '$6K', label: 'Min. Tuition (Comm. College)' },
            { num: '36 Mo', label: 'STEM OPT Work Authorization' },
            { num: '20 hrs', label: 'On-Campus Work / Week' },
            { num: 'Fall', label: 'Primary Intake (Aug–Sep)' },
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
              <p className="text-yellow-300 font-bold text-sm mb-1">Free USA Consultation</p>
              <p className="text-white/60 text-xs mb-4">F-1 visa prep · SOP review · Uni selection · Mock interview</p>
              <Link href="/consultation/" className="block bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold py-2.5 rounded-xl text-xs transition-colors">
                Book Free Session →
              </Link>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* ── SECTION 01: KEY FACTS ── */}
            <section id="keyfacts" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">01</span>
                <div>
                  <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider">Overview</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Key Facts — Study in USA from Nepal 2026</h2>
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
                        ['Minimum Eligibility', '10+2 (bachelor\'s) / Bachelor\'s degree (master\'s)'],
                        ['English Requirement', 'IELTS 6.0–7.5 or TOEFL iBT 61–100+'],
                        ['Visa Type', 'F-1 Student Visa (SEVP-approved institution)'],
                        ['Total Annual Cost', 'NPR 25 lakh – NPR 1.10 crore (tuition + living)'],
                        ['Work During Study', 'Up to 20 hrs/week on-campus only'],
                        ['Post-Study OPT', '12 months; STEM OPT extension 36 months total'],
                        ['SEVIS Fee', '$350 (~NPR 47,000) — paid once on I-20 receipt'],
                        ['MRV Visa Fee', '$185 (~NPR 25,000) — paid at Nabil Bank Nepal'],
                        ['Best Intake', 'Fall (August–September) — maximum options & scholarships'],
                        ['Exchange Rate', 'USD 1 ≈ NPR 135 (May 2026) — verify before applying'],
                      ].map(([k, v]) => (
                        <tr key={k} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{k}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── SECTION 02: WHY USA ── */}
            <section id="why" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-teal-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">02</span>
                <div>
                  <span className="text-green-200 text-xs font-semibold uppercase tracking-wider">Advantages</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Why Nepali Students Choose to Study in the USA</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: '🏛️', title: 'World-Class Universities', desc: 'MIT, Stanford, Harvard, Caltech — 5,000+ accredited institutions. Many of the world\'s top 20 universities are American.' },
                    { icon: '🔬', title: 'Research & Innovation', desc: 'Cutting-edge labs, AI research centers, and Silicon Valley\'s technology ecosystem. USA leads in research output and patent filings.' },
                    { icon: '💼', title: 'Excellent Career Prospects', desc: 'OPT allows up to 36 months of work experience after graduation for STEM graduates. H-1B visa sponsorship widely available.' },
                    { icon: '📚', title: 'Flexible Academic Programs', desc: 'Choose your major, add minors, take electives. Double majors and community college transfers are standard practice.' },
                    { icon: '🌍', title: 'Multicultural Experience', desc: 'Students from 200+ countries study in the USA. Nepali student associations exist at most major universities.' },
                    { icon: '🎓', title: 'Scholarships & Aid', desc: 'Fulbright Nepal, university merit scholarships, graduate assistantships (RA/TA), and need-based aid can significantly cut costs.' },
                    { icon: '🤖', title: 'AI & STEM Leadership', desc: 'Home to the world\'s best AI and Computer Science programs. STEM OPT gives graduates 36 months to secure H-1B sponsorship.' },
                    { icon: '🌆', title: 'Diverse Campuses', desc: 'Genuinely diverse — coastal metros, mid-western university towns, southern cities. Find your best fit across 50 states.' },
                    { icon: '📊', title: 'High Earning Potential', desc: 'Software engineers earn $70,000–$110,000 to start. Data scientists $90,000–$130,000. Some of the world\'s highest graduate salaries.' },
                  ].map(c => (
                    <div key={c.title} className="bg-gray-50 rounded-xl p-4 hover:bg-green-50 transition-colors">
                      <div className="text-2xl mb-2">{c.icon}</div>
                      <div className="font-bold text-[#001F3F] text-sm mb-1">{c.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 03: REQUIREMENTS ── */}
            <section id="requirements" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">03</span>
                <div>
                  <span className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">Eligibility</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Requirements to Study in USA from Nepal</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-xl p-5">
                    <p className="font-bold text-[#001F3F] text-sm mb-3">🎓 University Admission Requirements</p>
                    <div className="space-y-1.5">
                      {[
                        'Completed 10+2 / A-Levels / NEB (for bachelor\'s)',
                        'Bachelor\'s degree with transcripts (for master\'s)',
                        'IELTS Academic (6.0–7.5) or TOEFL iBT (61–100+)',
                        'SAT / ACT scores (selective undergraduate programs)',
                        'GRE (most master\'s) or GMAT (MBA programs)',
                        'Statement of Purpose (SOP) — 500–1,000 words',
                        'Letters of Recommendation (2–3 academic/professional)',
                        'Updated CV or résumé',
                      ].map(req => (
                        <div key={req} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-blue-500 font-bold mt-0.5">✓</span>
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5">
                    <p className="font-bold text-[#001F3F] text-sm mb-3">🛂 F-1 Student Visa Requirements</p>
                    <div className="space-y-1.5">
                      {[
                        'Valid passport (6+ months beyond intended stay)',
                        'I-20 form from your SEVP-approved US university',
                        'SEVIS I-901 fee payment receipt ($350)',
                        'Completed DS-160 online visa application form',
                        'MRV visa fee receipt ($185 — Nabil Bank Nepal)',
                        'Proof of funds — bank statements, sponsor letter',
                        'All academic transcripts (SLC/SEE through latest degree)',
                        'Evidence of strong ties to Nepal (property, family, employment)',
                      ].map(req => (
                        <div key={req} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-green-500 font-bold mt-0.5">✓</span>
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Test</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Minimum Score</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['IELTS Academic', '6.0–7.5', 'Program dependent — most programs accept 6.5'],
                        ['TOEFL iBT', '61–100+', 'Program dependent — most programs accept 79+'],
                        ['PTE Academic', 'Varies', 'Accepted at select US universities'],
                        ['Duolingo English Test', '120–130+', 'Accepted at many test-optional universities'],
                        ['SAT', '1400+ (selective)', 'Required for competitive undergraduate programs'],
                        ['GRE', '310–320+', 'Required for most Master\'s and PhD programs'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[1]}</td>
                          <td className="py-2.5 px-3 text-gray-500 text-xs">{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── SECTION 04: COSTS ── */}
            <section id="costs" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">04</span>
                <div>
                  <span className="text-purple-200 text-xs font-semibold uppercase tracking-wider">Budget Planning</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Cost of Studying in USA from Nepal (NPR)</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <p className="text-blue-800 font-semibold text-sm">💡 Smart Strategy: Community College Pathway</p>
                  <p className="text-blue-700 text-xs mt-1">Start at a community college ($6,000–$18,000/year), transfer to a prestigious 4-year university after 2 years. Save NPR 20–40 lakhs while still graduating from a well-known university.</p>
                </div>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Institution Type</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Level</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Annual Tuition (USD)</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Annual Tuition (NPR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['Community College', "Associate's Degree", '$6,000–$18,000', 'NPR 8–24 lakh'],
                        ['Public University', "Bachelor's", '$10,000–$35,000', 'NPR 13–47 lakh'],
                        ['Private University', "Bachelor's", '$25,000–$65,000', 'NPR 33–87 lakh'],
                        ['Public University', "Master's", '$15,000–$35,000', 'NPR 20–47 lakh'],
                        ['Private University', "Master's", '$25,000–$60,000', 'NPR 33–80 lakh'],
                        ['PhD Programs', 'Doctoral', 'Often waived + stipend', 'Fully Funded'],
                      ].map(r => (
                        <tr key={r[0] + r[1]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[1]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[2]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm font-semibold">{r[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">City Category</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Annual Living (USD)</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Annual Living (NPR)</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Example Cities</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['High-Cost Metro', '$18,000–$25,000', 'NPR 24–33 lakh', 'New York, San Francisco, Boston'],
                        ['Mid-Range Cities', '$13,000–$18,000', 'NPR 17–24 lakh', 'Chicago, Seattle, Denver, Atlanta'],
                        ['Lower-Cost States', '$10,000–$14,000', 'NPR 13–19 lakh', 'Texas, Ohio, Kansas, Missouri'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[1]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm font-semibold">{r[2]}</td>
                          <td className="py-2.5 px-3 text-gray-500 text-xs">{r[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── SECTION 05: F-1 VISA ── */}
            <section id="visa" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-rose-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">05</span>
                <div>
                  <span className="text-red-200 text-xs font-semibold uppercase tracking-wider">US Student Visa</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">F-1 Student Visa from Nepal — Step-by-Step 2026</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4 mb-6">
                  {[
                    ['Gain admission & receive your I-20 form', 'Apply to SEVP-approved US universities. Once accepted, the university issues your I-20 (Certificate of Eligibility). Apply to 5–10 universities to maximize options and scholarship chances.'],
                    ['Pay the SEVIS I-901 fee ($350 / ~NPR 47,000)', 'Pay the mandatory SEVIS fee at fmjfee.com using your I-20 number. This registers your student record in the US government\'s SEVIS system. Keep the payment receipt.'],
                    ['Complete the DS-160 online visa application', 'Fill in the DS-160 form at ceac.state.gov/genniv/. Ensure all names, dates, and addresses exactly match your passport and I-20. Print the confirmation page with barcode for your interview.'],
                    ['Pay the MRV visa fee ($185 / ~NPR 25,000)', 'Pay the non-refundable MRV fee at a designated Nabil Bank branch in Nepal. Retain the bank receipt — required to schedule your visa interview.'],
                    ['Schedule your visa interview at US Embassy Kathmandu', 'Book your F-1 visa interview at the US Embassy, Maharajgunj, Kathmandu via ustraveldocs.com/np. Book 3–4 months before your program start date — appointments fill quickly in April–July.'],
                    ['Prepare documents & attend the interview', 'The interview typically lasts 2–5 minutes. The visa officer will assess your academic intent, financial stability, and strong ties to Nepal. San Marina provides intensive mock interview preparation covering 100+ likely questions.'],
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
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#001F3F] text-white">
                      <tr>
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">Factor</th>
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">F-1 Visa</th>
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">J-1 Visa</th>
                        <th className="text-left py-2.5 px-4 text-xs font-semibold">M-1 Visa</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['Purpose', 'Full-time degree programs', 'Exchange/research programs', 'Technical/vocational'],
                        ['Work Rights', '20 hrs/week on-campus + OPT', '20 hrs/week (some limits)', 'Limited practical training'],
                        ['OPT Eligibility', '12–36 months', 'Academic Training only', 'Not eligible'],
                        ['Best For', 'Most Nepali students', 'Scholarship/exchange students', 'Technical training'],
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

            {/* ── SECTION 06: UNIVERSITIES & COURSES ── */}
            <section id="universities" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-amber-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">06</span>
                <div>
                  <span className="text-orange-200 text-xs font-semibold uppercase tracking-wider">Universities & Programs</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Top Universities & Best Courses for Nepali Students</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm mb-4">Universities popular among Nepali students in 2026 — strong acceptance rates, good scholarship support, and Nepali student communities.</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    { name: 'University of Texas, Arlington', state: 'Texas', known: 'Engineering, Business, Data Science', type: 'Public' },
                    { name: 'Northeastern University', state: 'Massachusetts', known: 'Computer Science, Co-op Programs', type: 'Private' },
                    { name: 'University of Cincinnati', state: 'Ohio', known: 'Engineering, Business, Health', type: 'Public' },
                    { name: 'Clarkson University', state: 'New York', known: 'Engineering, Business Analytics', type: 'Private' },
                    { name: 'California State University, Long Beach', state: 'California', known: 'Business, Liberal Arts, Engineering', type: 'Public' },
                    { name: 'DePaul University', state: 'Illinois', known: 'Computing, Business, Law', type: 'Private' },
                    { name: 'University of New Haven', state: 'Connecticut', known: 'Criminal Justice, Engineering', type: 'Private' },
                    { name: 'Dallas Baptist University', state: 'Texas', known: 'Business, Education, Nursing', type: 'Private' },
                  ].map(u => (
                    <div key={u.name} className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all">
                      <p className="font-bold text-[#001F3F] text-sm">{u.name}</p>
                      <p className="text-gray-500 text-xs">{u.state} · {u.type}</p>
                      <p className="text-orange-600 text-xs mt-1 font-medium">{u.known}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-semibold mb-3">Most in-demand courses for Nepali students in USA 2026:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {[
                    ['💻', 'Computer Science & AI'],
                    ['📊', 'Data Science & Analytics'],
                    ['💰', 'MBA / Business Administration'],
                    ['⚙️', 'Electrical & Mechanical Engineering'],
                    ['🔐', 'Cybersecurity'],
                    ['🏥', 'Public Health & Nursing'],
                    ['🌱', 'Environmental Science'],
                    ['📈', 'Finance & Economics'],
                    ['🤖', 'Artificial Intelligence & ML'],
                    ['📱', 'Digital Marketing'],
                    ['🧠', 'Psychology & Counseling'],
                    ['🏗️', 'Civil & Structural Engineering'],
                  ].map(([icon, name]) => (
                    <div key={name} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-700 font-medium">
                      <span>{icon}</span><span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── SECTION 07: SCHOLARSHIPS ── */}
            <section id="scholarships" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-600 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">07</span>
                <div>
                  <span className="text-yellow-100 text-xs font-semibold uppercase tracking-wider">Funding</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Scholarships for Nepali Students in USA 2026</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm mb-4">Apply early — 8 to 12 months before your intended intake — to maximize your scholarship chances.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Fulbright Nepal Program', coverage: 'Fully funded — tuition + living expenses + health insurance + flights', eligibility: 'Nepali citizenship · Strong academic record · 2+ yrs work experience preferred', deadline: 'Annual — check US Embassy Kathmandu', color: 'border-yellow-400' },
                    { name: 'EducationUSA Opportunity Funds', coverage: 'Partial to full support for lower-income backgrounds', eligibility: 'High-achieving Nepali students from lower-income families', deadline: 'Annual — EducationUSA Nepal', color: 'border-blue-400' },
                    { name: 'Merit-Based Tuition Waivers', coverage: '25%–100% tuition waiver based on academic performance', eligibility: 'Strong IELTS/GRE scores · High GPA · Extracurricular achievements', deadline: 'With university application', color: 'border-green-400' },
                    { name: 'Graduate Assistantships (RA/TA)', coverage: 'Tuition remission + monthly stipend $1,000–$2,500', eligibility: 'Postgraduate students · Research/teaching role at university', deadline: 'With graduate application', color: 'border-purple-400' },
                    { name: 'ADB–Japan Scholarship Program', coverage: 'Full funding for Master\'s in development-related fields', eligibility: 'ADB developing member country national · Development field', deadline: 'Annual — check ADB website', color: 'border-red-400' },
                    { name: 'PhD Funding Packages', coverage: 'Full tuition waived + living stipend $1,500–$3,000/month', eligibility: 'PhD applicants in STEM / research fields', deadline: 'With PhD application', color: 'border-teal-400' },
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

            {/* ── SECTION 08: WORK RIGHTS & OPT ── */}
            <section id="workrights" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-slate-700 to-slate-900 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">08</span>
                <div>
                  <span className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Post-Study</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Work Rights, OPT & STEM OPT for Nepali Students</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'On-Campus Work', hrs: '20 hrs/week', detail: 'During semester. Full-time during university breaks.', color: 'bg-blue-900' },
                    { label: 'CPT (Internship)', hrs: 'While studying', detail: 'Off-campus internship as part of curriculum. Requires university + employer approval.', color: 'bg-indigo-900' },
                    { label: 'OPT Post-Graduation', hrs: '12 months', detail: 'Full-time work in your field anywhere in the USA. No employer limit.', color: 'bg-green-900' },
                    { label: 'STEM OPT Extension', hrs: '36 months total', detail: 'STEM graduates extend OPT by 24 months. Must work for E-Verified employer.', color: 'bg-[#001F3F]' },
                  ].map(c => (
                    <div key={c.label} className={`${c.color} rounded-xl p-4 text-center`}>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">{c.label}</p>
                      <p className="text-yellow-300 text-2xl font-black mb-2">{c.hrs}</p>
                      <p className="text-white/70 text-xs leading-relaxed">{c.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Field / Job</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Entry-Level Salary (USD/yr)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['Software Engineering / IT', '$70,000–$110,000'],
                        ['Data Science', '$90,000–$130,000'],
                        ['Engineering (Civil, Mech, Electrical)', '$75,000–$115,000'],
                        ['MBA / Business Management', '$80,000–$150,000'],
                        ['Healthcare / Nursing', '$60,000–$90,000'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-[#001F3F] text-sm">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-600 text-sm">{r[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-[#001F3F] rounded-xl p-5">
                  <p className="text-yellow-300 font-bold text-sm mb-3">🏆 Pathway to US Long-Term Work &amp; PR</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {['US Degree', 'OPT (12 months)', 'STEM OPT (36 months)', 'H-1B Employer Sponsor', 'Green Card (PR)', 'US Citizenship'].map((s, i, arr) => (
                      <>
                        <span key={s} className="bg-white/10 text-white px-3 py-1.5 rounded-full font-semibold">{s}</span>
                        {i < arr.length - 1 && <span key={`arrow-${i}`} className="text-yellow-400 font-bold">→</span>}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 09: INTAKES ── */}
            <section id="intakes" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">09</span>
                <div>
                  <span className="text-teal-200 text-xs font-semibold uppercase tracking-wider">Application Timeline</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Intakes &amp; Application Timeline for Fall 2027</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { intake: 'Fall Intake', months: 'August–September', status: '⭐ RECOMMENDED', desc: 'Primary US intake. Maximum program options, highest scholarship availability, largest cohort.' },
                    { intake: 'Spring Intake', months: 'January–February', status: '✅ AVAILABLE', desc: 'Available at many universities. Slightly fewer programs but viable for most degrees.' },
                    { intake: 'Summer Intake', months: 'May–June', status: '⚠️ LIMITED', desc: 'Limited availability, mainly for short courses and community colleges.' },
                  ].map(c => (
                    <div key={c.intake} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-gray-500 mb-1">{c.status}</p>
                      <p className="font-bold text-[#001F3F] text-sm">{c.intake}</p>
                      <p className="text-teal-600 font-semibold text-xs mb-2">{c.months}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Timeframe</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Action Required</th>
                        <th className="text-left py-2 px-3 text-xs text-gray-500 font-semibold uppercase">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ['12–14 months before', 'Start IELTS/TOEFL preparation', 'Target IELTS 6.5+ / TOEFL 90+'],
                        ['10–12 months before', 'GRE/GMAT/SAT preparation', 'If required by target programs'],
                        ['8–10 months before', 'Research universities; request LORs', 'Shortlist 6–10 universities'],
                        ['6–8 months before', 'Write SOP; complete applications', 'Apply before scholarship deadlines'],
                        ['4–6 months before', 'Receive I-20; pay SEVIS; complete DS-160', 'Keep all receipts'],
                        ['3–4 months before', 'Book visa interview at US Embassy Kathmandu', 'Early booking recommended'],
                        ['2–3 months before', 'Attend visa interview; receive visa', 'San Marina provides mock interview prep'],
                        ['1–2 months before', 'Book flights; arrange accommodation', 'Join Nepali student groups in your city'],
                      ].map(r => (
                        <tr key={r[0]} className="hover:bg-gray-50">
                          <td className="py-2.5 px-3 font-semibold text-teal-700 text-sm">{r[0]}</td>
                          <td className="py-2.5 px-3 text-gray-700 font-medium text-sm">{r[1]}</td>
                          <td className="py-2.5 px-3 text-gray-500 text-xs">{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ── SECTION 10: STUDENT LIFE ── */}
            <section id="studentlife" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">10</span>
                <div>
                  <span className="text-violet-200 text-xs font-semibold uppercase tracking-wider">Life in USA</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Student Life in the USA — What to Expect</h2>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: '🏠', title: 'Accommodation', desc: 'On-campus dorms: $800–$1,500/month (meals often included). Off-campus shared apartments: $600–$1,000/month per person. Graduate students often find cheaper off-campus housing. University housing is usually mandatory in year 1.' },
                    { icon: '🚗', title: 'Transport', desc: 'Most US cities are car-dependent. Many campuses have shuttle services. Uber and Lyft are widely available. Some university towns have good bus networks. International driving permit accepted for up to 1 year.' },
                    { icon: '🏥', title: 'Health Insurance', desc: 'US healthcare is expensive without insurance. Most universities mandate health insurance ($600–$1,500/year). Keep all insurance cards and network information readily accessible. Emergency room visits can cost $1,000+ without coverage.' },
                    { icon: '🤝', title: 'Nepali Community', desc: 'Most major US universities have Nepali Student Associations (NSA). Active communities in Texas, Ohio, California, New York, and Massachusetts. WhatsApp groups, cultural events, and Nepali food options in most large cities.' },
                    { icon: '📱', title: 'SIM & Banking', desc: 'Get a US SIM on arrival — T-Mobile, AT&T, or Verizon prepaid. Open a bank account at Chase, Bank of America, or Wells Fargo (no SSN required initially with university letter). Build US credit history from month 1.' },
                    { icon: '🍕', title: 'Food & Groceries', desc: 'Monthly grocery budget: $200–$400. Walmart, Costco, and Aldi are budget-friendly. Dining out: $10–$20 per meal. Many cities have Indian/Nepali grocery stores. University meal plans average $400–$600/month.' },
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
              <p className="text-yellow-300 font-black text-xl mb-2">Ready to Apply for USA? Let San Marina Help.</p>
              <p className="text-white/70 text-sm mb-6 max-w-lg mx-auto">SOP review · University shortlisting · F-1 visa mock interview · I-20 tracking · SEVIS payment guidance. Free initial consultation for Nepali students.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/consultation/" className="bg-yellow-400 hover:bg-yellow-300 text-[#001F3F] font-bold px-8 py-3 rounded-full text-sm transition-colors">
                  📅 Book Free USA Consultation
                </Link>
                <Link href="tel:+977-1-4720123" className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors">
                  📞 Call San Marina Kathmandu
                </Link>
              </div>
            </div>

            {/* ── SECTION 11: FAQs ── */}
            <section id="faqs" className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-700 to-gray-900 px-4 sm:px-6 py-4 flex items-center gap-3">
                <span className="bg-white/20 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center">11</span>
                <div>
                  <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Answers</span>
                  <h2 className="text-white font-bold text-base sm:text-xl">Frequently Asked Questions — USA Study 2026</h2>
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
              <p className="text-[#001F3F] font-black text-2xl mb-2">Your US Journey Starts Here</p>
              <p className="text-[#001F3F]/70 text-sm mb-6 max-w-lg mx-auto">San Marina&apos;s USA counsellors have helped hundreds of Nepali students write winning SOPs, prepare for F-1 interviews, and secure scholarship waivers — at no hidden charges.</p>
              <Link href="/consultation/" className="inline-flex items-center gap-2 bg-[#001F3F] hover:bg-[#002d5a] text-white font-bold px-10 py-4 rounded-full text-sm transition-colors">
                📅 Book Your Free USA Consultation →
              </Link>
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
            headline: 'Study in USA from Nepal 2026 — Complete Guide',
            description: 'Complete guide for Nepali students on studying in the USA in 2026 — F-1 visa, costs in NPR, Fulbright scholarship, STEM OPT, top universities.',
            author: { '@type': 'Organization', name: 'San Marina Education Consultancy' },
            publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
            datePublished: '2026-05-01',
            dateModified: '2026-05-17',
            url: 'https://www.sanmarina.edu.np/blog/study-in-usa-from-nepal/',
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
