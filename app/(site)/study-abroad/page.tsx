import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Globe, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study Abroad Options | Australia, UK, USA',
  description: 'Study abroad from Nepal: Australia, UK, USA, Canada, Japan, Europe, New Zealand, South Korea. Free consultation in Kathmandu, Dang, Itahari. 1,500+ students placed.',
  keywords: 'study abroad from nepal, study in australia from nepal, study in uk from nepal, study in usa from nepal, study in canada from nepal, study in japan from nepal, study abroad consultancy nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/',
  },
  openGraph: {
    title: 'Study Abroad Options | Australia, UK, USA',
    description: 'Study abroad from Nepal: 8 countries. Free consultation in Kathmandu. 1,500+ students placed.',
    url: 'https://www.sanmarina.edu.np/study-abroad/',
  },
};

const studyAbroadSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Study Abroad', item: 'https://www.sanmarina.edu.np/study-abroad/' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Study Abroad Destinations from Nepal',
      description: 'Countries where Nepali students can study abroad: Australia, UK, USA, Canada, Japan, Europe, New Zealand, South Korea.',
      numberOfItems: 8,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Study in Australia', url: 'https://www.sanmarina.edu.np/study-abroad/aus/' },
        { '@type': 'ListItem', position: 2, name: 'Study in UK', url: 'https://www.sanmarina.edu.np/study-abroad/uk/' },
        { '@type': 'ListItem', position: 3, name: 'Study in USA', url: 'https://www.sanmarina.edu.np/study-abroad/usa/' },
        { '@type': 'ListItem', position: 4, name: 'Study in Canada', url: 'https://www.sanmarina.edu.np/study-abroad/can/' },
        { '@type': 'ListItem', position: 5, name: 'Study in Europe', url: 'https://www.sanmarina.edu.np/study-abroad/eur/' },
        { '@type': 'ListItem', position: 6, name: 'Study in Japan', url: 'https://www.sanmarina.edu.np/study-abroad/jp/' },
        { '@type': 'ListItem', position: 7, name: 'Study in New Zealand', url: 'https://www.sanmarina.edu.np/study-abroad/nz/' },
        { '@type': 'ListItem', position: 8, name: 'Study in South Korea', url: 'https://www.sanmarina.edu.np/study-abroad/kr/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which are the best countries to study abroad from Nepal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Australia, UK, USA, Canada, Japan, Europe (Germany, Netherlands, etc.), New Zealand, and South Korea are the top destinations for Nepali students. Each offers post-study work, scholarships, and quality education.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I choose a study abroad destination from Nepal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Consider your budget, course preference, post-study work rights, visa success rate, and career goals. San Marina offers free consultation in Kathmandu, Dang, and Itahari to help you decide.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does San Marina help with study abroad from Nepal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. San Marina Education Consultancy has placed 1,500+ Nepali students in Australia, UK, USA, Canada, Japan, and Europe. Free consultation and visa assistance available.',
          },
        },
      ],
    },
  ],
};

const destinations = [
  {
    id: 'aus',
    name: 'Australia',
    description: 'World-class education with post-study work opportunities. Home to top-ranked universities and vibrant student cities.',
    image: '/assets/adelaide.jpg',
    highlights: ['3-4 Years PSW', 'Top Universities', 'Multicultural'],
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    description: 'Prestigious universities with rich academic heritage. Graduate Route visa allows 2 years work experience.',
    image: '/assets/london.jpg',
    highlights: ['2 Years PSW', 'Historic Universities', 'Global Recognition'],
  },
  {
    id: 'usa',
    name: 'USA',
    description: 'World-leading research universities and diverse programs. STEM OPT provides 3 years work authorization.',
    image: '/assets/newyork.jpg',
    highlights: ['STEM OPT 3 Years', 'Research Excellence', 'Diverse Programs'],
  },
  {
    id: 'can',
    name: 'Canada',
    description: 'Quality education with immigration-friendly policies. PGWP leads to permanent residency pathways.',
    image: '/assets/toronto.jpg',
    highlights: ['3 Years PGWP', 'PR Pathways', 'Safe & Welcoming'],
  },
  {
    id: 'eur',
    name: 'Europe',
    description: 'Affordable education in Germany, France, Netherlands & more. Schengen visa allows travel across 27 countries.',
    image: '/assets/europe.jpg',
    highlights: ['Low/No Tuition', 'Schengen Travel', 'Rich Culture'],
  },
  {
    id: 'jp',
    name: 'Japan',
    description: 'Cutting-edge technology and traditional culture. MEXT scholarships available for qualified students.',
    image: '/assets/tokyo.jpg',
    highlights: ['MEXT Scholarships', 'Tech Hub', 'Unique Culture'],
  },
  {
    id: 'nz',
    name: 'New Zealand',
    description: 'Quality education in a stunning natural environment. Post-study work visa up to 3 years.',
    image: '/assets/auckland.jpg',
    highlights: ['3 Years PSW', 'Beautiful Nature', 'Work-Life Balance'],
  },
  {
    id: 'kr',
    name: 'South Korea',
    description: 'Innovative education in technology and business. GKS scholarship program for international students.',
    image: '/assets/south_korea.jpg',
    highlights: ['GKS Scholarships', 'Tech Innovation', 'K-Culture'],
  },
];

export default function StudyAbroadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(studyAbroadSchema) }} />
      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Study Abroad</span>
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe size={16} />
              <span>Study Abroad from Nepal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
              Study Abroad from Nepal – Best Destinations 2026
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Explore world-class education in Australia, UK, USA, Canada, Japan, Europe, New Zealand & South Korea. 1,500+ Nepali students placed. Free consultation in Kathmandu, Dang & Itahari.
            </p>
            {/* Hero destination links - quick jump to country pages */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/study-abroad/aus/" className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">
                Australia <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/study-abroad/uk/" className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">
                UK <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/study-abroad/usa/" className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">
                USA <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/study-abroad/can/" className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">
                Canada <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/study-abroad/eur/" className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">
                Europe <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/study-abroad/jp/" className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">
                Japan <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/study-abroad/nz/" className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">
                New Zealand <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/study-abroad/kr/" className="group flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">
                South Korea <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              <Link href="/scholarships/" className="text-blue-600 font-semibold hover:underline">Scholarships for Nepali students</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Popular European Destinations - 2 clicks from home */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50 rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold text-[#001F3F] mb-4">Popular European Destinations</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/study-abroad/eur/germany/" className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">Germany</Link>
            <Link href="/study-abroad/eur/netherlands/" className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">Netherlands</Link>
            <Link href="/study-abroad/eur/finland/" className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">Finland</Link>
            <Link href="/study-abroad/eur/spain/" className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">Spain</Link>
            <Link href="/study-abroad/eur/italy/" className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">Italy</Link>
            <Link href="/study-abroad/eur/poland/" className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#001F3F] hover:text-white hover:border-[#001F3F] transition-all shadow-sm">Poland</Link>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16" aria-labelledby="destinations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="destinations-heading" className="sr-only">Study Abroad Destinations from Nepal</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/study-abroad/${dest.id}/`}
                prefetch={true}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={`Study in ${dest.name} from Nepal - San Marina Education Consultancy`}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                    <p className="text-white/80 text-sm">Click to explore</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{dest.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - AEO */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl font-bold text-[#001F3F] mb-12 text-center">Study Abroad from Nepal – FAQ</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Which are the best countries to study abroad from Nepal?</h3>
              <p className="text-gray-600 leading-relaxed">Australia, UK, USA, Canada, Japan, Europe (Germany, Netherlands, Finland, Spain, Italy, Poland), New Zealand, and South Korea. Each offers post-study work, scholarships, and quality education for Nepali students.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">How do I choose a study abroad destination from Nepal?</h3>
              <p className="text-gray-600 leading-relaxed">Consider your budget, course preference, post-study work rights (PSW, PGWP, OPT), visa success rate, and career goals. <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Book a free consultation</Link> in Kathmandu, Dang, or Itahari to get personalized guidance.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#001F3F] mb-3">Does San Marina help with study abroad from Nepal?</h3>
              <p className="text-gray-600 leading-relaxed">Yes. San Marina has placed 1,500+ Nepali students in Australia, UK, USA, Canada, Japan, and Europe. We offer <Link href="/services/" className="text-blue-600 font-semibold hover:underline">admission counselling</Link>, visa assistance, and test preparation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Destination?</h2>
          <p className="text-blue-200 mb-8">
            Our expert counselors will help you choose the perfect country and university based on your profile and goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#001F3F] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
