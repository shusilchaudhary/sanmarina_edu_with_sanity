import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, Award, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scholarships for Nepali Students 2026 | Germany, Norway, USA, Austria, Italy',
  description: 'Scholarships for Nepali students 2026: DAAD Germany, Norwegian Quota Scheme, Fulbright USA, OeAD Austria, DSU Italy, Romanian government scholarship. Full guide with amounts, deadlines, eligibility, visa steps. Free consultation.',
  keywords: 'scholarships for nepali students, study abroad scholarships nepal, DAAD scholarship nepal, norway scholarship nepal, fulbright nepal, austria scholarship nepal, italy scholarship nepal, scholarships for nepali students in germany norway usa',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'article',
    title: 'Scholarships for Nepali Students 2026 | Germany, Norway, USA, Austria, Italy',
    description: 'DAAD, Norwegian Quota, Fulbright, OeAD, DSU Italy, Romanian govt. scholarship. Amounts, deadlines, and eligibility for all countries.',
    url: 'https://www.sanmarina.edu.np/scholarships/',
    siteName: 'San Marina Education Consultancy',
    publishedTime: '2026-02-01',
    modifiedTime: '2026-03-07',
  },
};

const scholarshipsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Scholarships for Nepali Students 2026 – Complete Country Guide',
      description: 'DAAD Germany, Norwegian Quota Scheme, Fulbright USA, OeAD Austria, DSU Italy, Romanian government scholarship. Amounts, deadlines, eligibility.',
      datePublished: '2026-02-01',
      dateModified: '2026-03-07',
      author: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
      publisher: { '@type': 'Organization', name: 'San Marina Education Consultancy', logo: { '@type': 'ImageObject', url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png' } },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Scholarships', item: 'https://www.sanmarina.edu.np/scholarships/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What scholarships can Nepali students get for study abroad in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Top scholarships for Nepali students in 2026: DAAD (Germany, Master\'s/PhD, up to €1,200/month), Norwegian Quota Scheme (full tuition + NOK 12,000/month), Fulbright USA (full funding, April 30 deadline), OeAD Ernst Mach Austria (research stays, Feb 1 deadline), Italian DSU (€7,000+ cash + tuition waiver), Romanian Government (tuition + accommodation + stipend), Slovak NSP (PhD €1,025/month mobility).',
          },
        },
        {
          '@type': 'Question',
          name: 'Which country scholarship is easiest to get for Nepali students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Romania and Italy are relatively more accessible for Nepali students. Romanian Government scholarship (apply March) offers full tuition + accommodation + stipend. Italian DSU covers up to €7,000+ cash for eligible students. Germany DAAD is competitive but prestigious. Norway Quota is selective but fully funded.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does San Marina help with scholarship applications for Nepali students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. San Marina Education Consultancy (since 2014) provides profile assessment, scholarship matching, application support, SOP/essay guidance, document preparation, and interview coaching for scholarships in Germany, Norway, USA, Austria, Italy, Slovakia, and Romania. Free consultation available in Kathmandu (Baneshwor), Dang, and Itahari.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the minimum GPA for scholarships in Germany for Nepali students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For DAAD scholarships in Germany: minimum 60% (First Division) or 3.0/4.0 GPA equivalent. Excellent academic record in upper quartile strongly preferred. Deutschland-Stipendium: minimum 2:1 equivalent. Source: DAAD, daad.de.',
          },
        },
      ],
    },
  ],
};

const scholarships = [
  {
    country: 'Germany',
    slug: 'germany-for-nepali-students',
    image: '/assets/germany.webp',
    description: 'Tuition-free education at public universities. DAAD scholarships available for international students. See our <Link href="/study-abroad/eur/germany/" className="text-blue-600 hover:underline">Germany guide</Link>.',
    scholarships: ['DAAD Scholarships', 'Heinrich Böll Foundation', 'Konrad Adenauer Stiftung'],
  },
  {
    country: 'Norway',
    slug: 'norway-for-nepali-students',
    image: '/assets/norway.webp',
    description: 'Free education at public universities for all students. Norwegian government scholarships available.',
    scholarships: ['Norwegian Quota Scheme', 'University of Oslo Scholarships', 'BI Presidential Scholarships'],
  },
  {
    country: 'Austria',
    slug: 'austria-for-nepali-students',
    image: '/assets/belgium.webp',
    description: 'Low tuition fees and various scholarship programs for international students.',
    scholarships: ['Austrian Government Scholarships', 'OeAD Scholarships', 'Erasmus+ Program'],
  },
  {
    country: 'Italy',
    slug: 'italy-for-nepali-students',
    image: '/assets/italy.webp',
    description: 'Affordable education with regional scholarships covering tuition and living expenses.',
    scholarships: ['Italian Government Scholarships', 'EDISU Piemonte', 'DSU Regional Scholarships'],
  },
  {
    country: 'USA',
    slug: 'usa-for-nepali-students',
    image: '/assets/newyork.jpg',
    description: 'Merit-based and need-based scholarships available at many universities. Explore the <Link href="/study-abroad/usa/" className="text-blue-600 hover:underline">USA study guide</Link>.',
    scholarships: ['Fulbright Program', 'Hubert Humphrey Fellowship', 'University-specific Scholarships'],
  },
  {
    country: 'Slovakia',
    slug: 'slovakia-for-nepali-students',
    image: '/assets/slovkia.jpg',
    description: 'National scholarship program for international students. Low cost of living.',
    scholarships: ['Slovak Government Scholarships', 'National Scholarship Programme', 'University Grants'],
  },
  {
    country: 'Romania',
    slug: 'romania-for-nepali-students',
    image: '/assets/romania.jpg',
    description: 'Government scholarships for international students. Affordable living costs. Read more in our <Link href="/study-abroad/romania/" className="text-blue-600 hover:underline">Romania guide</Link>.',
    scholarships: ['Romanian Government Scholarships', 'Ministry of Foreign Affairs', 'University Scholarships'],
  },
];

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarshipsSchema) }} />
      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Scholarships</span>
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award size={16} />
              <span>Scholarships for Nepali Students 2026 – Complete Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
              Scholarships for Nepali Students
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Scholarships for Nepali students in 2026 span 7 countries:{' '}
              <Link href="/scholarships/germany-for-nepali-students/" className="text-blue-600 hover:underline font-medium">Germany (DAAD)</Link>,{' '}
              <Link href="/scholarships/norway-for-nepali-students/" className="text-blue-600 hover:underline font-medium">Norway (Quota Scheme)</Link>,{' '}
              <Link href="/scholarships/usa-for-nepali-students/" className="text-blue-600 hover:underline font-medium">USA (Fulbright)</Link>,{' '}
              <Link href="/scholarships/austria-for-nepali-students/" className="text-blue-600 hover:underline font-medium">Austria (OeAD)</Link>,{' '}
              <Link href="/scholarships/italy-for-nepali-students/" className="text-blue-600 hover:underline font-medium">Italy (DSU)</Link>,{' '}
              <Link href="/scholarships/slovakia-for-nepali-students/" className="text-blue-600 hover:underline font-medium">Slovakia (NSP)</Link>, and{' '}
              <Link href="/scholarships/romania-for-nepali-students/" className="text-blue-600 hover:underline font-medium">Romania (government scholarship)</Link>.
              From full-tuition waivers to monthly stipends, this guide covers amounts, deadlines, eligibility, and step-by-step applications – all with costs in NPR.
            </p>
            <p className="text-gray-600 mb-4">
              Since 2014, San Marina Education Consultancy has helped <strong>1,500+ Nepali students</strong> secure scholarships and study abroad. Our consultants are QEAC certified and available in Kathmandu (Baneshwor), Dang, and Itahari.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Book free consultation</Link>
              {' · '}
              <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">Study abroad guide</Link>
              {' · '}
              <Link href="/ielts/" className="text-blue-600 font-semibold hover:underline">IELTS preparation</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-2">$2M+</p>
              <p className="text-blue-200">Scholarships Secured</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">1,500+</p>
              <p className="text-blue-200">Students Funded</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">50+</p>
              <p className="text-blue-200">Scholarship Programs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">15+</p>
              <p className="text-blue-200">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarships.map((item) => (
              <Link
                key={item.slug}
                href={`/scholarships/${item.slug}/`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Scholarships in ${item.country}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                    <GraduationCap className="text-white" size={24} />
                    <h2 className="text-2xl font-bold text-white">{item.country}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Available Scholarships:</p>
                    <ul className="space-y-1">
                      {item.scholarships.map((sch, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {sch}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      View Details <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Country Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4 text-center">Which Country Scholarship Suits You? – Quick Comparison</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Compare tuition fees, living costs, flagship scholarships, and work rights across all 7 countries at a glance. All costs converted to NPR for Nepali students.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm text-sm">
              <thead>
                <tr className="bg-[#001F3F] text-white">
                  <th className="p-3 text-left rounded-tl-2xl">Country</th>
                  <th className="p-3 text-left">Tuition/Year</th>
                  <th className="p-3 text-left">Living/Month</th>
                  <th className="p-3 text-left">Key Scholarship</th>
                  <th className="p-3 text-left">Work Rights</th>
                  <th className="p-3 text-left rounded-tr-2xl">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-3 font-semibold"><Link href="/scholarships/germany-for-nepali-students/" className="text-blue-600 hover:underline">Germany</Link></td>
                  <td className="p-3">€0 (public)</td>
                  <td className="p-3">€934 (~NPR 1.34L)</td>
                  <td className="p-3">DAAD up to €1,200/mo</td>
                  <td className="p-3">20 hrs/week</td>
                  <td className="p-3">Master&apos;s, PhD, Research</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-3 font-semibold"><Link href="/scholarships/norway-for-nepali-students/" className="text-blue-600 hover:underline">Norway</Link></td>
                  <td className="p-3">NOK 80k–400k*</td>
                  <td className="p-3">NOK 12–15k (~NPR 1.7L)</td>
                  <td className="p-3">Quota: full tuition + NOK 12k/mo</td>
                  <td className="p-3">20 hrs/week</td>
                  <td className="p-3">Master&apos;s, PhD, Quota</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-3 font-semibold"><Link href="/scholarships/usa-for-nepali-students/" className="text-blue-600 hover:underline">USA</Link></td>
                  <td className="p-3">$15k–$55k</td>
                  <td className="p-3">$1,500–$3,500 (~NPR 2–4.7L)</td>
                  <td className="p-3">Fulbright (full); merit awards</td>
                  <td className="p-3">20 hrs/week on campus</td>
                  <td className="p-3">Master&apos;s, PhD, STEM OPT</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-3 font-semibold"><Link href="/scholarships/austria-for-nepali-students/" className="text-blue-600 hover:underline">Austria</Link></td>
                  <td className="p-3">€1,454 (public)</td>
                  <td className="p-3">€950–1,100 (~NPR 1.4–1.6L)</td>
                  <td className="p-3">OeAD Ernst Mach (research)</td>
                  <td className="p-3">20 hrs/week</td>
                  <td className="p-3">Research stays, Webster</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-3 font-semibold"><Link href="/scholarships/italy-for-nepali-students/" className="text-blue-600 hover:underline">Italy</Link></td>
                  <td className="p-3">€700–1,300</td>
                  <td className="p-3">€700–1,500 (~NPR 1–2.15L)</td>
                  <td className="p-3">DSU: €7,000+ cash + waiver</td>
                  <td className="p-3">20 hrs/week</td>
                  <td className="p-3">Bachelor&apos;s, Master&apos;s, PhD</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-3 font-semibold"><Link href="/scholarships/slovakia-for-nepali-students/" className="text-blue-600 hover:underline">Slovakia</Link></td>
                  <td className="p-3">€0–3,500</td>
                  <td className="p-3">€500–800 (~NPR 72k–1.14L)</td>
                  <td className="p-3">NSP: PhD €1,025/mo (mobility)</td>
                  <td className="p-3">20 hrs/week</td>
                  <td className="p-3">Budget EU education</td>
                </tr>
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="p-3 font-semibold rounded-bl-2xl"><Link href="/scholarships/romania-for-nepali-students/" className="text-blue-600 hover:underline">Romania</Link></td>
                  <td className="p-3">€400–9,000</td>
                  <td className="p-3">~€600 (~NPR 86k)</td>
                  <td className="p-3">Govt: tuition + dorm + stipend</td>
                  <td className="p-3">4 hrs/day</td>
                  <td className="p-3 rounded-br-2xl">Budget, EU entry, Law/IT</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3 text-center">*Norway: tuition fees for non-EU/EEA students since 2023; Quota Scheme covers fees. 1 EUR ≈ 143 NPR, 1 USD ≈ 133 NPR, 1 NOK ≈ 11.7 NPR (March 2026). Source: official government and university websites for each country.</p>
        </div>
      </section>

      {/* FAQ Section - AEO */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Common Questions About Scholarships for Nepali Students</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <p className="font-semibold text-[#001F3F] mb-2">What scholarships can Nepali students get in 2026?</p>
              <p className="text-gray-600 text-sm">Top scholarships include: <strong>DAAD</strong> (Germany – up to €1,200/month, Master&apos;s/PhD), <strong>Norwegian Quota Scheme</strong> (full tuition + NOK 12,000/month), <strong>Fulbright</strong> (USA – fully funded, April 30 deadline), <strong>OeAD Ernst Mach</strong> (Austria – research stays, Feb 1 deadline), <strong>Italian DSU</strong> (up to €7,000+ cash + tuition waiver), <strong>Romanian Government</strong> (full tuition + accommodation + stipend), and <strong>Slovak NSP</strong> (PhD €1,025/month mobility). See country pages above for full details.</p>
            </div>
            <div className="border-b pb-4">
              <p className="font-semibold text-[#001F3F] mb-2">Which country is easiest for Nepali students to get a scholarship?</p>
              <p className="text-gray-600 text-sm"><strong>Romania and Italy</strong> are generally most accessible. Romania&apos;s government scholarship has a straightforward application (apply by March) requiring a 7/10 minimum grade. Italy&apos;s DSU is income-based and open to all nationalities – Nepal&apos;s low-HDI status makes most Nepali students eligible. <Link href="/scholarships/romania-for-nepali-students/" className="text-blue-600 hover:underline font-medium">Romania</Link> | <Link href="/scholarships/italy-for-nepali-students/" className="text-blue-600 hover:underline font-medium">Italy</Link></p>
            </div>
            <div className="border-b pb-4">
              <p className="font-semibold text-[#001F3F] mb-2">Can I study abroad for free from Nepal?</p>
              <p className="text-gray-600 text-sm">Yes. Germany&apos;s public universities charge zero tuition fees. Norway&apos;s Quota Scheme covers full tuition + living stipend. Romania&apos;s government scholarship covers tuition + accommodation. Italy&apos;s DSU waives tuition and pays cash. USA graduate assistantships offer full tuition waivers + monthly stipends. Contact San Marina for personalised scholarship matching based on your academic profile.</p>
            </div>
            <div className="border-b pb-4">
              <p className="font-semibold text-[#001F3F] mb-2">What GPA is required for study abroad scholarships from Nepal?</p>
              <p className="text-gray-600 text-sm">Minimum GPA varies: <strong>DAAD Germany</strong>: 60%+ (First Division); <strong>Fulbright USA</strong>: 3.0/4.0 (60%+ equivalent); <strong>BI Presidential Norway</strong>: Grade A (ECTS); <strong>Webster Vienna Austria</strong>: 3.0–3.5/4.0 GPA; <strong>Romanian government</strong>: 7/10 minimum average. Italian DSU is income-based rather than GPA-based.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-2">Does San Marina help Nepali students with scholarship applications?</p>
              <p className="text-gray-600 text-sm">Yes. San Marina Education Consultancy (Kathmandu, since 2014) provides: profile assessment and scholarship matching, university selection, SOP and essay guidance, document preparation (including legalisation guidance), visa application support, and mock interviews. <Link href="/consultation/" className="text-blue-600 hover:underline font-medium">Book a free consultation</Link> at our Baneshwor or Tinkune office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">How We Help With Scholarships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our scholarship assistance program maximizes your chances of securing funding.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Profile Assessment', desc: 'Evaluate your eligibility for various scholarship programs' },
              { step: '02', title: 'Scholarship Search', desc: 'Identify scholarships matching your profile and goals' },
              { step: '03', title: 'Application Support', desc: 'Guidance on essays, documents, and submission process' },
              { step: '04', title: 'Interview Prep', desc: 'Mock interviews and coaching for scholarship interviews' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Scholarship Guidance?</h2>
          <p className="text-blue-200 mb-8">
            Let our experts help you find and apply for scholarships that match your profile.
          </p>
          <Link
            href="/consultation/"
            className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Get Free Consultation
          </Link>
          <p className="mt-6 text-sm text-blue-200">
            <Link href="/study-abroad/" className="underline font-medium">Study abroad</Link>
            {' · '}
            <Link href="/services/" className="underline font-medium">Our services</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Free consultation</Link>
            {' · '}
            <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">Contact</Link>
          </p>
          <Link href="/consultation/" className="inline-flex items-center px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#003366] transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
