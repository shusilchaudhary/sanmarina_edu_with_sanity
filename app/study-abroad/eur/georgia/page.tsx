import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/georgia/',
  },
};

// Canonical URL is /study-abroad/georgia/ - redirect eur/georgia for consistency
export default function GeorgiaEurRedirect() {
  redirect('/study-abroad/georgia/');
}
