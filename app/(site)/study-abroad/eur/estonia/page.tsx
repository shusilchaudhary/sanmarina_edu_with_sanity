import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight, Building2, Briefcase, MapPin } from 'lucide-react';
import FAQAccordion from '../latvia/components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Estonia from Nepal 2026 | Cost, Visa & Work Guide',
  description: 'Study in Estonia from Nepal 2026: tuition €1,600–€7,500/year, living €450–700/mo. Tallinn. Work 20 hrs/week. Post-study work options. Schengen. Free consultation.',
  keywords: 'study in estonia, study in estonia from nepal, study in estonia for nepali students, estonia student visa, tuition fees estonia, living cost estonia',
  alternates: { canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/estonia/' },
  openGraph: {
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/estonia/',
    title: 'Study in Estonia from Nepal 2026 | Cost, Visa & Work Guide',
    description: 'Complete 2026 guide: study in Estonia, tuition, living costs, visa. Tallinn. Free consultation for Nepali students.',
  },
};

const estoniaData = {
  country: 'Estonia',
  heroImage: '/assets/europe.jpg',
  lastUpdated: 'March 2026',
  stats: { universities: '20+', internationalStudents: '5,000+', englishPrograms: '100+', postStudy: '9 months' },
  author: { name: 'San Marina Education Consultancy', role: 'QEAC & PIER Certified', expertise: 'Study abroad for Nepali students since 2014' },
  tuition: { min: 1600, max: 7500, medicineMin: 12000, medicineMax: 18000 },
  livingCost: { tallinn: { min: 500, max: 700 }, other: { min: 450, max: 600 } },
  faqs: [
    { question: 'What is study in Estonia for Nepali students?', answer: 'Study in Estonia for Nepali students: 20+ institutions, 100+ English programmes. Tuition €1,600–€7,500/year (Medicine higher). Living €450–€700/month in Tallinn. Work 20 hrs/week. 9-month post-study permit. Schengen. Source: studyinestonia.ee.' },
    { question: 'What is the cost to study in Estonia from Nepal?', answer: 'Cost to study in Estonia from Nepal: First year €8,000–€16,000. Tuition €1,600–€7,500; living €450–€700/mo; visa €100. 1 EUR ≈ 143 NPR (2026). Source: studyinestonia.ee.' },
    { question: 'Can I work while studying in Estonia?', answer: 'Yes. Students can work up to 20 hours per week during term and full-time during holidays. Estonia is a tech hub with many startup opportunities. Source: studyinestonia.ee.' },
    { question: 'What is the Estonia student visa process?', answer: 'Estonia student visa: Apply at Estonian embassy or VFS. Required: admission letter, passport, proof of funds, health insurance, accommodation. Fee ~€100. Source: politsei.ee.' },
  ],
};

const tuitionTable = [
  { level: 'Bachelor (general)', range: '€1,600–€4,000/year', notes: 'Humanities, Social sciences' },
  { level: 'Business & IT', range: '€3,000–€6,000/year', notes: 'Digital hub focus' },
  { level: 'Master\'s', range: '€2,500–€7,500/year', notes: 'Varies by programme' },
  { level: 'Medicine', range: '€12,000–€18,000/year', notes: 'University of Tartu' },
];

export default function EstoniaStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: 'Study in Estonia from Nepal 2026', description: estoniaData.stats, datePublished: '2026-03-01', author: { '@type': 'Organization', name: estoniaData.author.name } },
      { '@type': 'FAQPage', mainEntity: estoniaData.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
          { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
          { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
          { '@type': 'ListItem', position: 4, name: 'Estonia', item: 'https://www.sanmarina.edu.np/study-abroad/eur/estonia/' },
        ]
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={estoniaData.heroImage} alt="Study in Estonia from Nepal – Tallinn, Digital Europe education 2026" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-[#001F3F]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <Link href="/study-abroad/eur/" className="hover:text-white">Europe</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Estonia</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {estoniaData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Estonia from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Post-Study Work Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Estonia: tuition €1.6k–7.5k/year, living €450–700/mo in Tallinn. Work 20 hrs/week. 9-month post-study. Schengen. Complete guide for Nepali students.
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
            <strong>Data from <a href="https://www.studyinestonia.ee" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">studyinestonia.ee</a>, <a href="https://www.politsei.ee" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">politsei.ee</a>.</strong> Verify with official sources.
          </p>
          <p className="text-xs text-gray-500 mt-2">By {estoniaData.author.name} · {estoniaData.author.role}</p>
        </div>
      </section>

      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4 text-center">Study in Estonia from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€1,600–€7,500/year; Medicine higher</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">Tallinn €500–700/mo; other cities €450–600</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week during term; full-time holidays</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">9 months to seek employment</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">~€100; apply at Estonian embassy/VFS</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: estoniaData.stats.universities, label: 'Universities' }, { value: estoniaData.stats.internationalStudents, label: 'Int\'l Students' }, { value: estoniaData.stats.englishPrograms, label: 'English Programmes' }, { value: estoniaData.stats.postStudy, label: 'Post-Study' }].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Estonia for Nepali Students?</h2>
        <p className="text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Estonia is one of the most digitally advanced countries in the world. It offers high-quality education in IT and startups, very efficient e-governance, and a welcoming environment for international students. Compare with <Link href="/study-abroad/eur/finland/" className="text-blue-600 hover:underline">Finland</Link>, <Link href="/study-abroad/eur/sweden/" className="text-blue-600 hover:underline">Sweden</Link>, and <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>.
        </p>
      </section>

      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Total Cost to Study in Estonia from Nepal 2026</h2>
          <p className="text-gray-700 mb-4 author"><strong>Quick answer:</strong> First year €8,000–€16,000 (NPR 11–23 lakhs). Tuition €1,600–€7,500; living €450–€700/month. 1 EUR ≈ 143 NPR.</p>
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
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost – Tallinn vs Other Cities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Tallinn</p>
              <p className="text-lg font-bold">€500–€700/mo</p>
              <p className="text-sm text-gray-600">Capital city; digital hub</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Other cities (Tartu, etc.)</p>
              <p className="text-lg font-bold">€450–€600/mo</p>
              <p className="text-sm text-gray-600">More affordable living options</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2"><Briefcase size={28} /> Work While Studying</h2>
        <p className="text-gray-700">Students in Estonia can work up to 20 hours per week during term and full-time during holidays. The booming tech and startup scene offers excellent opportunities for IT-skilled students.</p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Estonia</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'University of Tartu', city: 'Tartu', programs: 'Top-ranked; All disciplines' },
            { name: 'Tallinn University of Technology (TalTech)', city: 'Tallinn', programs: 'Tech, IT & Economics' },
            { name: 'Tallinn University', city: 'Tallinn', programs: 'Humanities, Social Sciences' },
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
          <p className="text-blue-200 mb-6">Get expert guidance on study in Estonia from Nepal. Free consultation in Kathmandu.</p>
          <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">Book Free Consultation</Link>
        </div>
      </section>

      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Study in Estonia FAQs</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={estoniaData.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-blue-300">
            Compare: <Link href="/study-abroad/eur/finland/" className="underline hover:text-white transition-colors">Finland</Link> · <Link href="/study-abroad/eur/sweden/" className="underline hover:text-white transition-colors">Sweden</Link> · <Link href="/study-abroad/eur/germany/" className="underline hover:text-white transition-colors">Germany</Link> · <Link href="/study-abroad/eur/" className="underline hover:text-white transition-colors">All Europe</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
