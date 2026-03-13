import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ExternalLink, ChevronRight } from 'lucide-react';

const ContactFormNative = dynamic(() => import('@/components/ContactFormNative'), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-gray-50 rounded-xl flex items-center justify-center">Loading form...</div>,
});
export const metadata: Metadata = {
  title: 'Contact San Marina Nepal | Kathmandu, Dang',
  description: 'Contact San Marina: 4 branches in Kathmandu (Tinkune, Baneshwor), Dang, Itahari. Call 015922004. Free study abroad consultation. Sun-Fri 9AM-6PM.',
  keywords: 'contact san marina, san marina kathmandu, education consultancy contact nepal, study abroad consultancy kathmandu, san marina itahari, san marina dang',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/contact/',
  },
  openGraph: {
    title: 'Contact San Marina | Kathmandu, Dang, Itahari',
    description: '4 branches. Call 015922004. Free study abroad consultation.',
    url: 'https://www.sanmarina.edu.np/contact/',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://www.sanmarina.edu.np/contact/' },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.sanmarina.edu.np/#contact',
      name: 'San Marina Education Consultancy',
      url: 'https://www.sanmarina.edu.np',
      telephone: '+977-015922004',
      email: 'info@sanmarina.edu.np',
      address: [
        {
          '@type': 'PostalAddress',
          name: 'Head Office',
          streetAddress: 'Durbar Nepal Red Building, 3rd Floor, Tinkune',
          addressLocality: 'Kathmandu',
          addressRegion: 'Bagmati',
          addressCountry: 'NP',
        },
        {
          '@type': 'PostalAddress',
          name: 'Baneshwor Branch',
          streetAddress: 'Beside Sky Bridge, 5th Floor',
          addressLocality: 'Baneshwor, Kathmandu',
          addressRegion: 'Bagmati',
          addressCountry: 'NP',
        },
        {
          '@type': 'PostalAddress',
          name: 'Dang Branch',
          addressLocality: 'Ghorahi',
          addressRegion: 'Dang',
          addressCountry: 'NP',
        },
        {
          '@type': 'PostalAddress',
          name: 'Itahari Branch',
          addressLocality: 'Itahari',
          addressRegion: 'Sunsari',
          addressCountry: 'NP',
        },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I contact San Marina Education Consultancy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Call 015922004 (Head Office), visit branches in Tinkune, Baneshwor (Kathmandu), Ghorahi (Dang), or Itahari. Email info@sanmarina.edu.np. Free consultation Sun-Fri 9AM-6PM.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where are San Marina branches in Nepal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4 branches: Head Office Tinkune, Kathmandu; Baneshwor, Kathmandu; Ghorahi, Dang; Itahari, Sunsari. All offer free study abroad consultation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are San Marina office hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sunday to Friday, 9:00 AM - 6:00 PM. All branches follow the same hours.',
          },
        },
      ],
    },
  ],
};

export default function ContactPage() {
  const branches = [
    {
      name: 'Head Office',
      address: 'Durbar Nepal Red Building, 3rd Floor, Tinkune, Kathmandu',
      phone: '015922004',
      hours: 'Sun-Fri: 9:00 AM - 6:00 PM',
      mapsLink: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Durbar+Nepal+Red+Building+Tinkune+Kathmandu+Nepal',
    },
    {
      name: 'Baneshwor Branch',
      address: 'Beside Sky Bridge, 5th Floor, Baneshwor, Kathmandu',
      phone: '015927731',
      hours: 'Sun-Fri: 9:00 AM - 6:00 PM',
      mapsLink: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Beside+Sky+Bridge+Baneshwor+Kathmandu+Nepal',
    },
    {
      name: 'Dang Branch',
      address: 'Ghorahi, Dang',
      phone: '082591130',
      hours: 'Sun-Fri: 9:00 AM - 6:00 PM',
      mapsLink: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Ghorahi+Dang+Nepal',
    },
    {
      name: 'Itahari Branch',
      address: 'Itahari, Sunsari',
      phone: '980003731',
      hours: 'Sun-Fri: 9:00 AM - 6:00 PM',
      mapsLink: 'https://www.google.com/maps/search/San+Marina+Education+Consultancy+Itahari+Sunsari+Nepal',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Contact Us</span>
          </nav>
        </div>
      </section>
      {/* Hero Section */}
      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
              Contact San Marina
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions about studying abroad? Reach out through any of our 4 branches in Kathmandu, Dang & Itahari—or fill the form below for a free consultation.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Book free consultation</Link>
              {' · '}
              <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">Study abroad destinations</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-[#001F3F] mb-4">{branch.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                    <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-blue-600">{branch.phone}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                    <p className="text-gray-600">{branch.hours}</p>
                  </div>
                  <a
                    href={branch.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[#001F3F] font-semibold hover:text-blue-600 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section - AEO */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Contact San Marina – FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">How do I contact San Marina Education Consultancy?</h3>
                <p className="text-gray-600">Call 015922004 (Head Office) or 015927731 (Baneshwor), visit us in Tinkune, Baneshwor, Ghorahi (Dang), or Itahari. Email info@sanmarina.edu.np. Free consultation Sun-Fri 9AM-6PM.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">Where are San Marina branches in Nepal?</h3>
                <p className="text-gray-600">4 branches: Head Office (Tinkune, Kathmandu), Baneshwor (Kathmandu), Ghorahi (Dang), Itahari (Sunsari). <Link href="/about/" className="text-blue-600 font-semibold hover:underline">Learn more about us</Link>.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[#001F3F] mb-2">What are San Marina office hours?</h3>
                <p className="text-gray-600">Sunday to Friday, 9:00 AM - 6:00 PM. All branches follow the same hours.</p>
              </div>
            </div>
          </div>

          {/* Contact Form - native POST to Formsubmit.co (always works) */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#001F3F] mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm">Fill in your details and our experts will reach out to you.</p>
              </div>
              <Suspense fallback={null}>
                <ContactFormNative />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-blue-200 mb-2">Head Office</p>
              <a href="tel:015922004" className="text-2xl font-bold text-white hover:text-blue-300">015922004</a>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-blue-200 mb-2">For general inquiries</p>
              <a href="mailto:info@sanmarina.edu.np" className="text-xl font-bold text-white hover:text-blue-300">info@sanmarina.edu.np</a>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Working Hours</h3>
              <p className="text-blue-200 mb-2">Sunday - Friday</p>
              <p className="text-xl font-bold text-white">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
