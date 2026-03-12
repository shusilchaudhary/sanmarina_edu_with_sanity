import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronRight, Building2, Briefcase, MapPin } from 'lucide-react';
import FAQAccordion from '../latvia/components/FAQAccordion';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Study in Slovakia from Nepal 2026 | Cost, Visa & Work Guide',
  description: 'Study in Slovakia from Nepal 2026: tuition €2,000–€8,000/year, living €500–800/mo. Bratislava. Work 20 hrs/week. Post-study work options. Schengen. Free consultation.',
  keywords: 'study in slovakia, study in slovakia from nepal, study in slovakia for nepali students, slovakia student visa, tuition fees slovakia, living cost slovakia',
  alternates: { canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/slovakia/' },
  openGraph: {
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/slovakia/',
    title: 'Study in Slovakia from Nepal 2026 | Cost, Visa & Work Guide',
    description: 'Complete 2026 guide: study in Slovakia, tuition, living costs, visa. Bratislava. Free consultation for Nepali students.',
  },
};

const slovakiaData = {
  country: 'Slovakia',
  heroImage: '/assets/slovakia_image_01.jpg',
  lastUpdated: 'March 2026',
  stats: { universities: '35+', internationalStudents: '25,000+', englishPrograms: '100+', postStudy: '9 months' },
  author: { name: 'San Marina Education Consultancy', role: 'QEAC & PIER Certified', expertise: 'Study abroad for Nepali students since 2014' },
  tuition: { min: 2000, max: 8000, medicineMin: 10000, medicineMax: 15000 },
  livingCost: { bratislava: { min: 550, max: 800 }, other: { min: 450, max: 600 } },
  faqs: [
    { question: 'What is study in Slovakia for Nepali students?', answer: 'Study in Slovakia for Nepali students: 35+ institutions, 100+ English programmes. Tuition €2,000–€8,000/year (Medicine €10,000–€15,000). Living €500–€800/month in Bratislava. Work 20 hrs/week. 9-month post-study permit. Schengen. Source: portalvs.sk.' },
    { question: 'What is the cost to study in Slovakia from Nepal?', answer: 'Cost to study in Slovakia from Nepal: First year €10,000–€20,000. Tuition €2,000–€8,000; living €500–€800/mo; visa €60–€150. 1 EUR ≈ 143 NPR (2026). Source: portalvs.sk.' },
    { question: 'Can I work while studying in Slovakia?', answer: 'Yes. Students can work up to 20 hours per week during term and full-time during holidays. Common sectors: Automotive, IT, services. Source: portalvs.sk.' },
    { question: 'What is the Slovakia student visa process?', answer: 'Slovakia student visa: Apply at Slovakian embassy or VFS. Required: admission letter, passport, proof of funds, health insurance, accommodation. Fee €60–€150. Schengen visa for short courses. Source: mzv.sk.' },
  ],
};

const tuitionTable = [
  { level: 'Bachelor (general)', range: '€2,000–€5,000/year', notes: 'Social sciences, Arts' },
  { level: 'Business & IT', range: '€3,000–€7,000/year', notes: 'Strong automotive focus' },
  { level: 'Master\'s', range: '€3,500–€8,000/year', notes: 'Varies by programme' },
  { level: 'Medicine', range: '€10,000–€15,000/year', notes: 'Top-tier medical education' },
];

export default function SlovakiaStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: 'Study in Slovakia from Nepal 2026', description: slovakiaData.stats, datePublished: '2026-03-01', author: { '@type': 'Organization', name: slovakiaData.author.name } },
      { '@type': 'FAQPage', mainEntity: slovakiaData.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
        { '@type': 'ListItem', position: 3, name: 'Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
        { '@type': 'ListItem', position: 4, name: 'Slovakia', item: 'https://www.sanmarina.edu.np/study-abroad/eur/slovakia/' },
      ]},
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={slovakiaData.heroImage} alt="Study in Slovakia from Nepal – Bratislava, Central Europe education 2026" fill className="object-cover" priority sizes="100vw" />
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
            <span className="text-white">Slovakia</span>
          </nav>
          <p className="text-xs text-blue-200 mb-2">Last Updated: {slovakiaData.lastUpdated}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Study in Slovakia from Nepal
            <br />
            <span className="text-blue-300">2026 – Cost, Visa & Post-Study Work Guide</span>
          </h1>
          <p className="text-xl text-blue-100 mb-4 max-w-2xl">
            Study in Slovakia: tuition €2k–8k/year, living €500–800/mo in Bratislava. Work 20 hrs/week. 9-month post-study. Schengen. Complete guide for Nepali students.
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
            <strong>Data from <a href="https://www.portalvs.sk" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">portalvs.sk</a>, <a href="https://www.mzv.sk" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mzv.sk</a>.</strong> Verify with official sources.
          </p>
          <p className="text-xs text-gray-500 mt-2">By {slovakiaData.author.name} · {slovakiaData.author.role}</p>
        </div>
      </section>

      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4 text-center">Study in Slovakia from Nepal – Key Facts 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F] w-1/3">Tuition</td><td className="p-3">€2,000–€8,000/year; Medicine €10,000–€15,000</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Living</td><td className="p-3">Bratislava €550–800/mo; other cities €450–600</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Work</td><td className="p-3">20 hrs/week during term; full-time holidays</td></tr>
                <tr className="border-b border-gray-100"><td className="p-3 font-semibold text-[#001F3F]">Post-study</td><td className="p-3">9 months to seek employment</td></tr>
                <tr><td className="p-3 font-semibold text-[#001F3F]">Visa</td><td className="p-3">€60–€150; apply at Slovakian embassy/VFS</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: slovakiaData.stats.universities, label: 'Universities' }, { value: slovakiaData.stats.internationalStudents, label: 'Int\'l Students' }, { value: slovakiaData.stats.englishPrograms, label: 'English Programmes' }, { value: slovakiaData.stats.postStudy, label: 'Post-Study' }].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-[#001F3F]">{s.value}</p>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Why Study in Slovakia for Nepali Students?</h2>
        <p className="text-gray-700 mb-4 font-medium">
          <strong>Quick answer:</strong> Slovakia offers high-quality education in the heart of Europe. It is known for its strong technical and medical universities, affordable living costs, and strategic location for career opportunities in the EU. Compare with <Link href="/study-abroad/eur/austria/" className="text-blue-600 hover:underline">Austria</Link>, <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany</Link>, and <Link href="/study-abroad/eur/hungary/" className="text-blue-600 hover:underline">Hungary</Link>.
        </p>
      </section>

      <section className="py-16 bg-slate-50" id="cost">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Total Cost to Study in Slovakia from Nepal 2026</h2>
          <p className="text-gray-700 mb-4 author"><strong>Quick answer:</strong> First year €10,000–€20,000 (NPR 14–28 lakhs). Tuition €2,000–€8,000; living €500–€800/month. 1 EUR ≈ 143 NPR.</p>
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
          <h3 className="text-xl font-bold text-[#001F3F] mb-4">Living Cost – Bratislava vs Other Cities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Bratislava</p>
              <p className="text-lg font-bold">€550–€800/mo</p>
              <p className="text-sm text-gray-600">Capital city; central hub</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-bold text-[#001F3F] flex items-center gap-1"><MapPin size={16} /> Other cities (Košice, etc.)</p>
              <p className="text-lg font-bold">€450–€600/mo</p>
              <p className="text-sm text-gray-600">More affordable living options</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6 flex items-center gap-2"><Briefcase size={28} /> Work While Studying</h2>
        <p className="text-gray-700">Students in Slovakia can work up to 20 hours per week during term and full-time during holidays. The industrial and IT sectors provide various part-time and internship opportunities.</p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#001F3F] mb-6">Top Universities in Slovakia</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Comenius University', city: 'Bratislava', programs: 'Largest & oldest; Medical, Law & Sciences' },
            { name: 'Slovak University of Technology', city: 'Bratislava', programs: 'Top technical university' },
            { name: 'Technical University of Košice', city: 'Košice', programs: 'Engineering & Computing' },
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
          <p className="text-blue-200 mb-6">Get expert guidance on study in Slovakia from Nepal. Free consultation in Kathmandu.</p>
          <Link href="/consultation/" className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">Book Free Consultation</Link>
        </div>
      </section>

      <section className="py-16 bg-white" id="faqs">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-8">Study in Slovakia FAQs</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <FAQAccordion faqs={slovakiaData.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-blue-300">
            Compare: <Link href="/study-abroad/eur/austria/" className="underline hover:text-white transition-colors">Austria</Link> · <Link href="/study-abroad/eur/latvia/" className="underline hover:text-white transition-colors">Latvia</Link> · <Link href="/study-abroad/eur/lithuania/" className="underline hover:text-white transition-colors">Lithuania</Link> · <Link href="/study-abroad/eur/" className="underline hover:text-white transition-colors">All Europe</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
