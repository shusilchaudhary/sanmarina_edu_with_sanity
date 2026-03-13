import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/scholarships/italy-for-nepali-students/',
  },
};

export default function ItalyScholarshipsRedirect() {
  redirect('/scholarships/italy-for-nepali-students/');
}
