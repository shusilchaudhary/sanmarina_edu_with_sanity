import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories | Student Reviews - San Marina Nepal',
  description: 'Verified success stories from Nepali students. Australia, UK, Canada, Japan, Germany, USA. 1,500+ placed. 4.9/5 Google. Read reviews.',
  keywords: 'san marina reviews, study abroad success stories nepal, student visa success, education consultancy reviews',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/success-stories/',
  },
  openGraph: {
    title: 'Success Stories | San Marina Nepal',
    description: 'Real stories from real students. 1,500+ placed. 4.9/5 Google rating.',
    url: 'https://www.sanmarina.edu.np/success-stories/',
  },
};

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
