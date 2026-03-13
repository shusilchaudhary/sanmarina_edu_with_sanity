import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Briefcase, Clock, ArrowRight, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Jobs at San Marina Education Consultancy Nepal',
  description: 'Join San Marina Nepal. Open positions: Content Creator, Europe Counsellor. Kathmandu. Apply for study abroad consultancy jobs.',
  keywords: 'education consultancy jobs nepal, study abroad jobs kathmandu, san marina careers, education counsellor jobs',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/career/',
  },
  openGraph: {
    title: 'Careers | San Marina Education Consultancy Nepal',
    description: 'Content Creator & Europe Counsellor openings. Kathmandu-based.',
    url: 'https://www.sanmarina.edu.np/career/',
  },
};

const careerSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://www.sanmarina.edu.np/career/' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Job Openings at San Marina Education Consultancy',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'JobPosting',
            title: 'Content Creator',
            description: 'Create engaging content for social media, blog, and digital platforms. Develop videos, reels, and written content to showcase study abroad opportunities.',
            datePosted: '2024-01-01',
            employmentType: 'FULL_TIME',
            hiringOrganization: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
            jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' } },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'JobPosting',
            title: 'Europe Counsellor',
            description: 'Guide students through study abroad options in Europe. Advise on universities, scholarships (DAAD, Erasmus+, Stipendium Hungaricum), visa requirements.',
            datePosted: '2024-01-01',
            employmentType: 'FULL_TIME',
            hiringOrganization: { '@type': 'Organization', name: 'San Marina Education Consultancy', url: 'https://www.sanmarina.edu.np' },
            jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' } },
          },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What jobs are available at San Marina Education Consultancy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Current openings: Content Creator (Marketing) and Europe Counsellor (Counseling). Both full-time, Kathmandu-based.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I apply for a job at San Marina?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Click Apply Now on any job listing, or visit the Apply page. You can also send your resume via the Contact page for future opportunities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is San Marina Education Consultancy located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'San Marina has offices in Kathmandu (Tinkune, Baneshwor), Dang, and Itahari. Job openings are typically in Kathmandu.',
          },
        },
      ],
    },
  ],
};

import { client } from '@/sanity/lib/client';

async function getJobOpenings() {
  const query = `*[_type == "job"] | order(_createdAt desc) {
    title,
    department,
    location,
    type,
    description
  }`;
  return await client.fetch(query);
}

export const revalidate = 0;

export default async function CareerPage() {
  const openings = await getJobOpenings();
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careerSchema) }} />
      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Careers</span>
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
              Careers at San Marina
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join Nepal&apos;s leading study abroad consultancy. Help shape the future of students. Openings: Content Creator, Europe Counsellor.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <Link href="/about/" className="text-blue-600 font-semibold hover:underline">About us</Link>
              {' · '}
              <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">Contact</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Why Work With Us?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Growth Opportunities', desc: 'Continuous learning and career advancement' },
              { title: 'Impactful Work', desc: 'Help students achieve their dreams' },
              { title: 'Great Culture', desc: 'Collaborative and supportive environment' },
              { title: 'Competitive Benefits', desc: 'Attractive salary and perks' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">Current Openings</h2>
            <p className="text-gray-600">Explore opportunities to join our growing team</p>
          </div>

          <div className="space-y-6">
            {openings.map((job: any, index: number) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#001F3F] mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/career/apply/?position=${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 bg-[#001F3F] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors shrink-0"
                  >
                    Apply Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - AEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Careers FAQ</h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">What jobs are available?</p>
              <p className="text-gray-600 text-sm">Content Creator (Marketing) and Europe Counsellor (Counseling). Both full-time in Kathmandu.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">How do I apply?</p>
              <p className="text-gray-600 text-sm">Click Apply Now on any listing, or <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">send your resume</Link> for future roles.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">Where are the offices?</p>
              <p className="text-gray-600 text-sm">Kathmandu (Tinkune, Baneshwor), <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">Dang and Itahari</Link>. Jobs are typically Kathmandu-based.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See a Perfect Fit?</h2>
          <p className="text-blue-200 mb-8">
            We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            Send Your Resume
          </Link>
          <p className="mt-6 text-sm text-blue-200">
            Students: <Link href="/consultation/" className="underline font-medium">Book free consultation</Link>
            {' · '}
            <Link href="/study-abroad/" className="underline font-medium">Study abroad</Link>
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/about/" className="text-blue-600 font-semibold hover:underline">About San Marina</Link>
            {' · '}
            <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">Contact</Link>
            {' · '}
            <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">Study abroad</Link>
          </p>
          <Link href="/career/apply/" className="inline-flex items-center px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#003366] transition-colors">
            Apply for a Job
          </Link>
        </div>
      </section>
    </main>
  );
}
