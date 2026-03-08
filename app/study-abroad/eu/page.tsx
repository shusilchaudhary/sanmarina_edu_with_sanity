'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StudyInEuropeRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/study-abroad/eur/');
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-600">
        Redirecting to <a href="/study-abroad/eur/" className="text-blue-600 underline">Study in Europe</a>...
      </p>
    </main>
  );
}
