'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, MapPin, ExternalLink, Users, Globe, Award, CheckCircle2, ChevronRight } from 'lucide-react';

const successStoriesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Success Stories', item: 'https://www.sanmarina.edu.np/success-stories/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are San Marina success stories real?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All stories are from verified Nepali students who studied abroad with San Marina. You can read more on our Google Maps reviews.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which countries do San Marina students go to?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Australia, UK, Canada, Japan, Germany, USA, and more. Filter stories by destination on this page.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I write my own success story?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Book a free consultation at San Marina. Visit our branches in Kathmandu, Dang, or Itahari, or book online.',
          },
        },
      ],
    },
  ],
};

const DESTINATIONS = ['All', 'Australia', 'UK', 'Canada', 'Japan', 'Germany', 'USA'] as const;

const GOOGLE_MAPS_LINKS = {
  tinkune: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Tinkune+Kathmandu+Nepal',
  baneshwor: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Baneshwor+Kathmandu+Nepal',
  dang: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Ghorahi+Dang+Nepal',
  itahari: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Itahari+Sunsari+Nepal',
  all: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Nepal',
};

const stats = [
  { value: '1,500+', label: 'Students Placed', icon: Users },
  { value: '4.9/5', label: 'Google Rating', icon: Star },
  { value: '15+', label: 'Countries', icon: Globe },
  { value: 'High', label: 'Visa Success', icon: Award },
];

const successStories = [
  { name: 'Suman Thapa', destination: 'Australia', date: 'January 2026', quote: 'San Marina made my dream of studying in Australia a reality. The team was incredibly supportive, handling everything from my university application to visa documentation.', color: 'bg-[#001F3F]' },
  { name: 'Anisha Gurung', destination: 'Japan', date: 'December 2025', quote: 'Got admission to a Japanese language school with MEXT scholarship guidance. Prajwal sir\'s Japanese classes were very helpful.', color: 'bg-blue-600' },
  { name: 'Bikash Shrestha', destination: 'UK', date: 'November 2025', quote: 'My UK visa was granted within 24 hours of biometric. Thank you San Marina team!', color: 'bg-blue-700' },
  { name: 'Priya Sharma', destination: 'Australia', date: 'October 2025', quote: 'Best consultancy in Nepal! Got my Australia student visa approved. The team, especially Sandip sir, guided me through every step.', color: 'bg-[#001F3F]' },
  { name: 'Rajesh Kumar', destination: 'Canada', date: 'September 2025', quote: 'Smooth process from DLI selection to study permit. Highly professional and transparent.', color: 'bg-blue-600' },
  { name: 'Sita Maharjan', destination: 'Germany', date: 'August 2025', quote: 'German language preparation at Itahari branch was excellent. Now studying in Berlin!', color: 'bg-blue-700' },
  { name: 'Amit Poudel', destination: 'USA', date: 'July 2025', quote: 'F1 visa success! San Marina helped with I-20, SEVIS, and interview preparation.', color: 'bg-[#001F3F]' },
  { name: 'Kritika Bhandari', destination: 'UK', date: 'June 2025', quote: 'Free IELTS classes at Baneshwor helped me achieve my target band. Grateful for the support.', color: 'bg-blue-600' },
  { name: 'Nabin Adhikari', destination: 'Japan', date: 'May 2025', quote: 'JLPT N5 preparation and COE guidance—everything was handled professionally.', color: 'bg-blue-700' },
];

export default function SuccessStoriesPage() {
  const [filter, setFilter] = useState<typeof DESTINATIONS[number]>('All');

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(successStoriesSchema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const filteredStories = filter === 'All'
    ? successStories
    : successStories.filter((s) => s.destination === filter);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 pb-24 bg-gradient-to-br from-[#001F3F] via-[#002244] to-[#0a1628] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="text-sm text-blue-200 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="inline mx-2" size={14} />
            <span className="text-white">Success Stories</span>
          </nav>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-400/20 border border-blue-300/30 text-blue-200 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">4.9/5 Rating on Google Maps</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Real Stories from
              <br />
              <span className="text-blue-300">Real Students</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Don&apos;t just take our word for it. Read verified reviews from Nepali students who achieved their study abroad dreams with San Marina.
            </p>
            <p className="text-sm text-blue-200 mb-6">
              <Link href="/study-abroad/" className="text-amber-300 font-semibold hover:underline">Explore destinations</Link>
              {' · '}
              <Link href="/consultation/" className="text-amber-300 font-semibold hover:underline">Book free consultation</Link>
            </p>
            <a
              href={GOOGLE_MAPS_LINKS.all}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg border-2 border-[#001F3F]"
            >
              <MapPin size={20} />
              View All Google Reviews
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <stat.icon className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-blue-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Bar */}
      <section className="py-8 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2">
                <svg className="w-10 h-10" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-bold text-[#001F3F] ml-2">4.9</span>
                  </div>
                  <p className="text-sm text-gray-600">Based on 200+ verified reviews</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={GOOGLE_MAPS_LINKS.tinkune} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#001F3F] font-semibold hover:text-blue-600">
                Write a Review <ExternalLink size={16} />
              </a>
              <span className="text-gray-400">|</span>
              <Link href="/contact/" className="text-[#001F3F] font-semibold hover:text-blue-600">
                Our Branches
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter by Destination */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">Filter by Destination</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See success stories from students who went to your dream country.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {DESTINATIONS.map((dest) => (
              <button
                key={dest}
                onClick={() => setFilter(dest)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === dest
                    ? 'bg-[#001F3F] text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#001F3F] hover:bg-blue-50'
                }`}
              >
                {dest}
              </button>
            ))}
          </div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0 ${story.color}`}>
                    {story.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-[#001F3F]">{story.name}</h3>
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{story.date}</p>
                    <p className="text-gray-600 mt-3 text-sm leading-relaxed">{story.quote}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-[#001F3F] rounded-full text-xs font-semibold">
                        {story.destination}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <p className="text-center text-gray-500 py-12">No stories for this destination yet. Check back soon!</p>
          )}
        </div>
      </section>

      {/* FAQ Section - AEO */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Success Stories FAQ</h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">Are these stories real?</p>
              <p className="text-gray-600 text-sm">Yes. All from verified Nepali students. Read more on <a href={GOOGLE_MAPS_LINKS.all} target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline">Google Maps</a>.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">Which countries?</p>
              <p className="text-gray-600 text-sm">Australia, UK, Canada, Japan, Germany, USA. <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">Explore destinations</Link>.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">How do I start?</p>
              <p className="text-gray-600 text-sm"><Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Book a free consultation</Link> or visit our <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">branches</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Links for Google Reviews */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Leave a Review at Your Branch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Tinkune (Head Office)', link: GOOGLE_MAPS_LINKS.tinkune },
              { name: 'Baneshwor Branch', link: GOOGLE_MAPS_LINKS.baneshwor },
              { name: 'Dang Branch', link: GOOGLE_MAPS_LINKS.dang },
              { name: 'Itahari Branch', link: GOOGLE_MAPS_LINKS.itahari },
            ].map((branch, i) => (
              <a
                key={i}
                href={branch.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <MapPin className="w-6 h-6 text-[#001F3F] shrink-0" />
                <div>
                  <p className="font-semibold text-[#001F3F]">{branch.name}</p>
                  <p className="text-sm text-blue-600">View on Google Maps →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-blue-200 mb-8">
            Book a free consultation and join 1,500+ students who achieved their study abroad dreams with San Marina.
          </p>
          <Link
            href="/consultation/"
            className="inline-flex items-center gap-2 bg-white text-[#001F3F] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            Book Free Consultation
          </Link>
          <p className="mt-6 text-sm text-blue-200">
            <Link href="/study-abroad/" className="underline font-medium">Study abroad</Link>
            {' · '}
            <Link href="/scholarships/" className="underline font-medium">Scholarships</Link>
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
