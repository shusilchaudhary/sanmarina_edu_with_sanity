import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import HomePage to reduce initial JS bundle size
const HomePage = dynamic(() => import('@/components/HomePage'), {
  loading: () => <div className="min-h-screen animate-pulse bg-gray-50 flex items-center justify-center">Loading...</div>,
});

export const metadata: Metadata = {
  title: 'Best Education Consultancy in Nepal 2026 | Study Abroad - San Marina',
  description: 'San Marina: #1 education consultancy in Nepal for study abroad. 1,500+ students placed in Australia, UK, USA, Canada, Japan & Europe. Free consultation in Kathmandu, Dang, Itahari. High visa success.',
  keywords: 'best consultancy for study abroad, best consultancy for study abroad in nepal, best consultancy for study in japan, best consultancy for study in korea, best consultancy for study in usa, best consultancy for study in australia, best consultancy for study in america, best consultancy for study in canada, best consultancy for study in europe, best consultancy for study in germany, best consultancy for study in uk, best consultancy for study in norway, best consultancy for study in new zealand, best education consultancy in nepal, top consultancy in nepal, study abroad consultancy nepal',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/',
  },
  openGraph: {
    title: 'Best Education Consultancy in Nepal 2026 | Study Abroad - San Marina',
    description: 'San Marina: #1 education consultancy in Nepal. 1,500+ students placed in Australia, UK, USA, Canada, Japan & Europe. Free consultation in Kathmandu.',
    url: 'https://www.sanmarina.edu.np/',
  },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.sanmarina.edu.np/#organization',
      name: 'San Marina Education Consultancy',
      url: 'https://www.sanmarina.edu.np',
      logo: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
      description: 'Best education consultancy in Nepal for study abroad. Expert guidance for Australia, UK, USA, Canada, Japan, Europe.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Durbar Nepal Red Building, 3rd Floor, Tinkune',
        addressLocality: 'Kathmandu',
        addressRegion: 'Bagmati Province',
        addressCountry: 'NP',
        postalCode: '44600',
      },
      telephone: '+977-015922004',
      email: 'info@sanmarina.edu.np',
      sameAs: [
        'https://www.facebook.com/profile.php?id=61578047634707',
        'https://www.instagram.com/sanmarinaeducation',
        'https://www.linkedin.com/company/san-marina-education-consultancy/',
      ],
      areaServed: [{ '@type': 'Country', name: 'Nepal' }],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.sanmarina.edu.np/#localbusiness',
      name: 'San Marina Education Consultancy',
      image: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
      url: 'https://www.sanmarina.edu.np',
      priceRange: 'Free consultation',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Durbar Nepal Red Building, 3rd Floor, Tinkune',
        addressLocality: 'Kathmandu',
        addressCountry: 'NP',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.6878,
        longitude: 85.3494,
      },
      telephone: '+977-015922004',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.sanmarina.edu.np/#website',
      url: 'https://www.sanmarina.edu.np',
      name: 'San Marina Education Consultancy',
      description: 'Best education consultancy in Nepal for study abroad. 1,500+ students placed.',
      publisher: { '@id': 'https://www.sanmarina.edu.np/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best education consultancy in Nepal for study abroad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "San Marina Education Consultancy is among Nepal's top study abroad consultants, with 1,500+ students placed in Australia, UK, USA, Canada, Japan, and Europe. Offices in Kathmandu, Dang, and Itahari offer free consultation.",
          },
        },
        {
          '@type': 'Question',
          name: 'How does San Marina help Nepali students study abroad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'San Marina provides career counselling, university selection, visa assistance, IELTS/PTE preparation, and pre-departure support for Australia, UK, USA, Canada, Japan, and Europe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the first consultation at San Marina free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. San Marina offers a free, no-obligation consultation for students interested in studying abroad.',
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
    </>
  );
}
