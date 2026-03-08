import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

// Server-side redirect — passes link equity correctly, Google sees 308 not JS
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function GermanyScholarshipsRedirect() {
  redirect('/scholarships/germany-for-nepali-students/');
}
