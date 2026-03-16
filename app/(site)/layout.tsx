import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoutePrefetcher from '@/components/RoutePrefetcher';
import Analytics from '@/components/Analytics';

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

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
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
    </div>
  );
}
