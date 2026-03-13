import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events & Workshops | Study Abroad Info Sessions - San Marina Nepal',
  description: 'Study abroad events in Nepal: Australia info sessions, visa workshops, university fairs. Kathmandu, Dang, Itahari. Free consultation.',
  keywords: 'study abroad events nepal, visa workshop kathmandu, university info session, san marina events',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/events/',
  },
  openGraph: {
    title: 'Events & Workshops | San Marina Nepal',
    description: 'Info sessions, visa workshops, study abroad fairs. Kathmandu, Dang, Itahari.',
    url: 'https://www.sanmarina.edu.np/events/',
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
