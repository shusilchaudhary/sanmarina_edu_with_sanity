import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight, Building2, Briefcase, MapPin, Award } from 'lucide-react';
import FAQAccordion from './components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Latvia from Nepal 2026 | Cost, Visa & Work Guide',
  description: 'Study in Latvia from Nepal 2026: tuition €1,600–€6,000/year, living €400–700/mo. Riga. Work 20 hrs/week. 6-mo post-study. Schengen. Free consultation.',
  keywords: 'study in latvia, study in latvia from nepal, study in latvia for nepali students, latvia student visa, tuition fees latvia, living cost latvia',
  alternates: { canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/latvia/' },
  openGraph: {
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/latvia/',
    title: 'Study in Latvia from Nepal 2026 | Cost, Visa & Work Guide',
    description: 'Complete 2026 guide: study in Latvia, tuition, living costs, visa. Riga. Free consultation for Nepali students.',
  },
};

const latviaData = {
  country: 'Latvia',
  heroImage: '/assets/latvia.jpg',
  lastUpdated: 'March 2026',
  stats: { universities: '50+', internationalStudents: '12,000+', englishPrograms: '200+', postStudy: '6 months' },
  author: { name: 'San Marina Education Consultancy', role: 'QEAC & PIER Certified', expertise: 'Study abroad for Nepali students since 2014' },
  tuition: { min: 1600, max: 6000, medicineMin: 8000, medicineMax: 15000 },
  livingCost: { riga: { min: 450, max: 700 }, other: { min: 400, max: 550 } },
  faqs: [
    { question: 'What is study in Latvia for Nepali students?', answer: 'Study in Latvia for Nepali students: 50+ institutions, 200+ English programmes. Tuition €1,600–€6,000/year (Medicine €8,000–€15,000). Living €400–€700/month in Riga. Work 20 hrs/week. 6-month post-study permit. Schengen, Bologna Process. Source: studyinlatvia.lv.' },
    { question: 'What is the cost to study in Latvia from Nepal?', answer: 'Cost to study in Latvia from Nepal: First year €8,000–€15,000. Tuition €1,600–€6,000; living €400–€700/mo; visa €60–€100. Some bachelor programmes under €1,600/year. 1 EUR ≈ 143 NPR (2026). Source: studyinlatvia.lv.' },
    { question: 'Can I work while studying in Latvia?', answer: 'Yes. Students can work up to 20 hours per week during term and full-time during holidays. Common sectors: tourism, IT, retail. Source: studyinlatvia.lv.' },
    { question: 'What is the Latvia student visa process?', answer: 'Latvia student visa: Apply at Latvian embassy (nearest may be in India). Required: admission letter, passport, proof of funds, health insurance, accommodation. Fee €60–€100. Processing varies. Schengen visa for short courses. Source: mfa.gov.lv.' },
  ],
};

const tuitionTable = [
  { level: 'Bachelor (general)', range: '€1,600–€3,500/year', notes: 'Engineering, IT, Business' },
  { level: 'Master\'s', range: '€2,000–€6,000/year', notes: 'Varies by programme' },
  { level: 'Medicine', range: '€8,000–€15,000/year', notes: '6-year programme' },
  { level: 'Visa fee', range: '€60–€100', notes: 'Embassy' },
];

export default function LatviaStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: 'Study in Latvia from Nepal 2026', description: latviaData.stats, datePublished: '2026-03-01', author: { '@type': 'Organization', name: latviaData.author.name } },
      { '@type': 'FAQPage', mainEntity: latviaData.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
        { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
        { '@type': 'ListItem', position: 4, name: 'Latvia', item: 'https://www.sanmarina.edu.np/study-abroad/eur/latvia/' },
      ]},
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={latviaData.heroImage} alt="Study in Latvia from Nepal – Riga, Baltic education 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/" className="hover:text-white">Study Abroad</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/eur/" className="hover:text-white">Europe</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Latvia</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {latviaData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Latvia from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Post-Study Work Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Latvia: tuition €1.6k–6k/year, living €400–700/mo in Riga. Work 20 hrs/week. 6-month post-study. Schengen. Study in Latvia for Nepali students—complete guide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg">Book Free Consultation</Link>
            <Link href="/contact/" className="inline-flex items-center gap-2 bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg">Apply Now</Link>
            <a href="https://wa.me/9779802372602" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-all">
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            <strong>Data from <a href="https://www.studyinlatvia.lv" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinlatvia.lv</a>, <a href="https://www.mfa.gov.lv" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mfa.gov.lv</a>.</strong> Verify with official sources.
          </p>
          <p className="text-xs text-gray-500 mt-2">By {latviaData.author.name} · {latviaData.author.role}</p>
        </div>
      </section>

      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Study in Latvia from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€1,600–€6,000/year; Medicine €8,000–€15,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">Riga €450–700/mo; other cities €400–550</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week during term; full-time holidays</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">6 months to seek employment</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">€60–€100; apply at Latvian embassy</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: latviaData.stats.universities, label: 'Universities' }, { value: latviaData.stats.internationalStudents, label: 'Int\'l Students' }, { value: latviaData.stats.englishPrograms, label: 'English Programmes' }, { value: latviaData.stats.postStudy, label: 'Post-Study' }].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Latvia for Nepali Students?</h2>
        <p className="text-gray-700 mb-4">
          <strong>Quick answer:</strong> Latvia offers affordable tuition (some bachelor programmes under €1,600/year), Bologna Process degrees, work 20 hrs/week, Schengen access. Riga is a historic Baltic capital. Compare with <Link href="/study-abroad/eur/lithuania/" className="text-blue-600 hover:underline">Lithuania</Link>, <Link href="/study-abroad/eur/slovakia/" className="text-blue-600 hover:underline">Slovakia</Link>, <Link href="/study-abroad/eur/poland/" className="text-blue-600 hover:underline">Poland</Link>.
        </p>
      </section>

      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Total Cost to Study in Latvia from Nepal 2026</h2>
          <p className="text-gray-700 mb-4"><strong>Quick answer:</strong> First year €8,000–€15,000 (NPR 11–21 lakhs). Tuition €1,600–€6,000; living €400–€700/month. 1 EUR ≈ 143 NPR.</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-4 text-left">Level</th>
                  <th className="p-4 text-left">Fee Range</th>
                  <th className="p-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tuitionTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{row.level}</td>
                    <td className="p-4">{row.range}</td>
                    <td className="p-4">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost – Riga vs Other Cities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Riga</p>
              <p className="text-lg font-bold">€450–€700/mo</p>
              <p className="text-sm text-gray-600">Capital; main university hub</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Other cities</p>
              <p className="text-lg font-bold">€400–€550/mo</p>
              <p className="text-sm text-gray-600">More affordable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2"><Briefcase size={28} /> Work While Studying</h2>
        <p className="text-gray-700">Students can work up to 20 hours per week during term and full-time during holidays. Common sectors: tourism, IT, retail. Source: studyinlatvia.lv.</p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Latvia</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Latvia', city: 'Riga', programs: 'All disciplines' },
            { name: 'Riga Technical University', city: 'Riga', programs: 'Engineering, IT' },
            { name: 'Riga Stradiņš University', city: 'Riga', programs: 'Medicine, health' },
          ].map((u, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <Building2 className="text-[#0056b3] mb-2" size={24} />
              <h3 className="font-bold text-[#001F3F] mb-1">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.city} · {u.programs}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 mb-6">Get expert guidance on study in Latvia from Nepal. Free consultation in Kathmandu.</p>
          <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100">Book Free Consultation</Link>
        </div>
      </section>

      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Study in Latvia FAQs</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={latviaData.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-blue-300">
            Compare: <Link href="/study-abroad/eur/lithuania/" className="underline hover:text-white">Lithuania</Link> · <Link href="/study-abroad/eur/slovakia/" className="underline hover:text-white">Slovakia</Link> · <Link href="/study-abroad/eur/poland/" className="underline hover:text-white">Poland</Link> · <Link href="/study-abroad/eur/" className="underline hover:text-white">All Europe</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
