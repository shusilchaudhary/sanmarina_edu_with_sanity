import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study in Europe | Germany, France, UK - Country Guides | San Marina Nepal',
  description: 'Study in Europe from Nepal: Germany, France, UK, Netherlands, Italy, Spain. Tuition, living costs, scholarships. Free consultation Kathmandu.',
  keywords: 'study in europe from nepal, study in germany, study in france, europe scholarships nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/eur/',
  },
  openGraph: {
    title: 'Study in Europe | San Marina Nepal',
    description: '27 European countries: tuition, living costs, scholarships.',
    url: 'https://www.sanmarina.edu.np/study-abroad/eur/',
  },
};

const eurSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
        { '@type': 'ListItem', position: 3, name: 'Study in Europe', item: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which European countries can Nepali students study in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UK, Germany, France, Spain, Italy, Netherlands, Austria, Switzerland, Ireland, Belgium, Sweden, Poland, Czech Republic, Portugal, Denmark, Finland, Norway, Hungary, Greece, Romania, Luxembourg, Georgia, Malta, Cyprus, Latvia, Lithuania, Slovakia. San Marina guides students to all.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it cheaper to study in Europe than UK or USA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Germany, Norway, Austria offer low or free tuition at public universities. France, Italy, Poland are also affordable. UK and Switzerland cost more. Book a free consultation for country-specific costs.',
          },
        },
      ],
    },
  ],
};

// 24 top European countries by international student numbers (descending) - OECD/UNESCO/QS 2023-24
// Images from /assets - europe.jpg used as fallback for countries without dedicated images
// detailHref: link for "View details" - omit for countries that go to consultation
const europeanCountries = [
  { name: 'United Kingdom', slug: 'uk', students: 732285, image: '/assets/london.jpg', detailHref: '/study-abroad/uk/' as const },
  { name: 'Germany', slug: 'germany', students: 367578, image: '/assets/germany.webp', detailHref: '/study-abroad/eur/germany/' as const },
  { name: 'France', slug: 'france', students: 412000, image: '/assets/europe.jpg', detailHref: '/study-abroad/eur/fr/' as const },
  { name: 'Spain', slug: 'spain', students: 285000, image: '/assets/madrid.webp', detailHref: '/study-abroad/eur/spain/' as const },
  { name: 'Italy', slug: 'italy', students: 268000, image: '/assets/italy.webp', detailHref: '/study-abroad/eur/italy/' as const },
  { name: 'Netherlands', slug: 'netherlands', students: 122000, image: '/assets/amsterdam.webp', detailHref: '/study-abroad/eur/netherlands/' as const },
  { name: 'Austria', slug: 'austria', students: 78000, image: '/assets/europe.jpg', detailHref: '/study-abroad/eur/austria/' as const },
  { name: 'Switzerland', slug: 'switzerland', students: 72000, image: '/assets/swizerland.webp', detailHref: '/study-abroad/eur/switzerland/' as const },
  { name: 'Ireland', slug: 'ireland', students: 45000, image: '/assets/ireland.webp', detailHref: '/study-abroad/ireland/' as const },
  { name: 'Belgium', slug: 'belgium', students: 44000, image: '/assets/belgium.webp', detailHref: '/study-abroad/eur/belgium/' as const },
  { name: 'Sweden', slug: 'sweden', students: 41000, image: '/assets/sweden.webp', detailHref: '/study-abroad/eur/sweden/' as const },
  { name: 'Poland', slug: 'poland', students: 86000, image: '/assets/europe.jpg', detailHref: '/study-abroad/eur/poland/' as const },
  { name: 'Czech Republic', slug: 'czech-republic', students: 50000, image: '/assets/europe.jpg', detailHref: '/study-abroad/czech-republic/' as const },
  { name: 'Portugal', slug: 'portugal', students: 52000, image: '/assets/portugal.webp', detailHref: '/study-abroad/eur/portugal/' as const },
  { name: 'Denmark', slug: 'denmark', students: 38000, image: '/assets/denmark.webp', detailHref: '/study-abroad/eur/denmark/' as const },
  { name: 'Finland', slug: 'finland', students: 32000, image: '/assets/europe.jpg', detailHref: '/study-abroad/eur/finland/' as const },
  { name: 'Norway', slug: 'norway', students: 28000, image: '/assets/norway.webp', detailHref: '/study-abroad/eur/norway/' as const },
  { name: 'Hungary', slug: 'hungary', students: 45000, image: '/assets/hungary.webp', detailHref: '/study-abroad/hungary/' as const },
  { name: 'Greece', slug: 'greece', students: 48000, image: '/assets/greece.jpg', detailHref: '/study-abroad/greece/' as const },
  { name: 'Romania', slug: 'romania', students: 42000, image: '/assets/romania.jpg', detailHref: '/study-abroad/romania/' as const },
  { name: 'Luxembourg', slug: 'luxembourg', students: 9500, image: '/assets/luxembourg.webp', detailHref: '/study-abroad/eur/luxembourg/' as const },
  { name: 'Georgia', slug: 'georgia', students: 25000, image: '/assets/europe.jpg', detailHref: '/study-abroad/georgia/' as const },
  { name: 'Malta', slug: 'malta', students: 12500, image: '/assets/malta.jpg', detailHref: '/study-abroad/eur/malta/' as const },
  { name: 'Cyprus', slug: 'cyprus', students: 28000, image: '/assets/cyprus.jpg', detailHref: '/study-abroad/eur/cyprus/' as const },
  { name: 'Latvia', slug: 'latvia', students: 12000, image: '/assets/latvia.jpg', detailHref: '/study-abroad/eur/latvia/' as const },
  { name: 'Lithuania', slug: 'lithuania', students: 8000, image: '/assets/lithuania.jpg', detailHref: '/study-abroad/eur/lithuania/' as const },
  { name: 'Slovakia', slug: 'slovakia', students: 25000, image: '/assets/slovakia_image_01.jpg', detailHref: '/study-abroad/eur/slovakia/' as const },
];

// Sort by student count descending
const sortedCountries = [...europeanCountries].sort((a, b) => b.students - a.students);

export default function StudyInEuropePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eurSchema) }} />
      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <Link href="/study-abroad/" className="hover:text-[#001F3F] font-medium">Study Abroad</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Europe</span>
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
              Study in Europe: Country Guides
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore detailed country-wise guides for studying in Europe, including tuition, living costs, work options, and scholarships.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Book free consultation</Link>
              {' · '}
              <Link href="/scholarships/" className="text-blue-600 font-semibold hover:underline">Scholarships</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Country Cards Grid - matching screenshot layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedCountries.map((country) => (
              <Link
                key={country.slug}
                href={'detailHref' in country ? country.detailHref : '/consultation/'}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={country.image}
                    alt={`Study in ${country.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h2 className="text-lg font-bold uppercase tracking-wide mb-1">
                      Study in {country.name.toUpperCase()}
                    </h2>
                    <p className="text-white/90 text-sm mb-3">
                      Top universities, scholarships & work opportunities
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-200 group-hover:text-white transition-colors">
                      View details for {country.name}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Choosing a Country?</h2>
          <p className="text-blue-200 mb-8">
            Our expert counselors will help you find the perfect European destination based on your profile, budget, and career goals.
          </p>
          <Link
            href="/consultation/"
            className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Book a Free Consultation
          </Link>
          <p className="mt-6 text-sm text-blue-200">
            <Link href="/study-abroad/" className="underline font-medium">All destinations</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/eur/germany/" className="text-blue-600 font-semibold hover:underline">Germany</Link>
            {' · '}
            <Link href="/study-abroad/uk/" className="text-blue-600 font-semibold hover:underline">UK</Link>
            {' · '}
            <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Free consultation</Link>
          </p>
          <Link href="/consultation/" className="inline-flex items-center px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#003366] transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
