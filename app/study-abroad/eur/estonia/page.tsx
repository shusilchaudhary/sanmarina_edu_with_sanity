import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

// Estonia page converted to Georgia - redirect to Georgia study page
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/study-abroad/georgia/',
  },
};

export default function EstoniaStudyPage() {
  redirect('/study-abroad/georgia/');
}
