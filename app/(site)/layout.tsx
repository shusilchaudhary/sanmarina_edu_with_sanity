import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoutePrefetcher from '@/components/RoutePrefetcher';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: 'Best Education Consultancy in Nepal | Study Abroad - San Marina',
  description: 'Nepal\'s top-rated study abroad consultancy. Expert guidance for USA, UK, Australia, Canada, Japan & Europe. high visa success for genuine applicants. Free consultation!',
  keywords: 'best consultancy in nepal, best education consultancy in nepal, top consultancy in nepal, study abroad consultancy nepal, best consultancy for japan, best consultancy for europe, education consultancy kathmandu',
  authors: [{ name: 'San Marina Education Consultancy' }],
  publisher: 'San Marina Education Consultancy',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.sanmarina.edu.np/',
    title: 'Best Education Consultancy in Nepal | Study Abroad - San Marina',
    description: 'Nepal\'s top-rated study abroad consultancy. Expert guidance for USA, UK, Australia, Canada, Japan & Europe. high visa success for genuine applicants. Free consultation!',
    siteName: 'San Marina Education Consultancy',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
        width: 1200,
        height: 630,
        alt: 'San Marina Education Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Education Consultancy in Nepal | Study Abroad - San Marina',
    description: 'Nepal\'s top-rated study abroad consultancy. Expert guidance for USA, UK, Australia, Canada, Japan & Europe. high visa success for genuine applicants. Free consultation!',
    images: ['https://www.sanmarina.edu.np/assets/san_marina_logo.png'],
  },
  other: {
    'geo.region': 'NP-BA',
    'geo.placename': 'Kathmandu, Nepal',
    'geo.position': '27.6878;85.3494',
    'ICBM': '27.6878, 85.3494',
    'google-site-verification': 'QTBGSaHMmIY2DdijTbhYGZv-sVzQE30XJdEsmvoJeNY',
  },
  icons: {
    icon: '/assets/san_marina_logo.png',
    apple: '/assets/san_marina_logo.png',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'EducationalOrganization'],
      '@id': 'https://www.sanmarina.edu.np/#organization',
      name: 'San Marina Education Consultancy',
      alternateName: 'San Marina',
      url: 'https://www.sanmarina.edu.np/',
      logo: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
      image: 'https://www.sanmarina.edu.np/assets/san_marina_logo.png',
      description: "Nepal's leading study abroad consultancy with 15+ years helping 1,500+ Nepali students reach Australia, UK, USA, Canada, Japan, South Korea and Europe. Offices in Kathmandu, Dang, and Itahari.",
      foundingDate: '2010',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 25 },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '347',
        bestRating: '5',
        worstRating: '1',
      },
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'Dillibazar, Kathmandu',
          addressLocality: 'Kathmandu',
          addressRegion: 'Bagmati',
          postalCode: '44600',
          addressCountry: 'NP',
        },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '27.6878',
        longitude: '85.3494',
      },
      hasMap: 'https://maps.google.com/?q=San+Marina+Education+Consultancy+Kathmandu',
      telephone: '+977-9802372602',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:30',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+977-9802372602',
        contactType: 'customer service',
        areaServed: 'NP',
        availableLanguage: ['English', 'Nepali'],
      },
      sameAs: [
        'https://www.facebook.com/sanmarinaedu',
        'https://www.instagram.com/sanmarinaedu',
      ],
      knowsAbout: [
        'Study in Australia from Nepal',
        'Study in UK from Nepal',
        'Study in USA from Nepal',
        'Study in Canada from Nepal',
        'Study in Japan from Nepal',
        'Study in South Korea from Nepal',
        'Student Visa Nepal',
        'IELTS Preparation Nepal',
        'Scholarships for Nepali Students',
      ],
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Roshan Thapa' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          datePublished: '2025-12-10',
          reviewBody: 'San Marina helped me get my UK Student Route visa in just 6 weeks. The counsellors knew exactly what documents UKVI needed. I am now studying at University of Hertfordshire.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Anjali Shrestha' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          datePublished: '2025-11-22',
          reviewBody: 'Got my Australia Student Visa 500 approved in 3 weeks through San Marina. They handled my GTE letter perfectly. Now in Melbourne doing my Master of Accounting.',
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Dipesh Karki' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          datePublished: '2025-10-15',
          reviewBody: 'Applied for Canada study permit through San Marina Kathmandu. Got approval in 8 weeks. Now studying Computer Science at Conestoga College, Ontario.',
        },
      ],
    },
  ],
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />
      <RoutePrefetcher />
      <Navbar />
      <main className="flex-grow pt-24">{children}</main>
      <Footer />
      <Analytics />
      <CookieConsent />
    </div>
  );
}
