import type { Metadata } from 'next';
import CareerApplyClient from './CareerApplyClient';

export const metadata: Metadata = {
  title: 'Apply Now | San Marina Careers Nepal',
  description: 'Apply for Content Creator or Europe Counsellor at San Marina. Kathmandu. Submit your application online.',
  keywords: 'jobs san marina nepal, apply education consultancy, content creator job kathmandu',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/career/apply/',
  },
  openGraph: {
    title: 'Apply for a Job | San Marina Nepal',
    description: 'Content Creator & Europe Counsellor openings. Kathmandu.',
    url: 'https://www.sanmarina.edu.np/career/apply/',
  },
};

export default function ApplyPage() {
  return <CareerApplyClient />;
}
