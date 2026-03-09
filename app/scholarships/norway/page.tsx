import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/norway-for-nepali-students/',
  },
};

export default function NorwayScholarshipsRedirect() {
  redirect('/scholarships/norway-for-nepali-students/');
}
