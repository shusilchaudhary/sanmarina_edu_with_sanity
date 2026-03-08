'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Prefetches high-traffic routes on idle for near-instant navigation.
 */
const COMMON_ROUTES = [
  '/', '/about/', '/contact/', '/consultation/', '/blog/', '/career/', '/events/', '/success-stories/',
  '/study-abroad/', '/study-abroad/aus/', '/study-abroad/uk/', '/study-abroad/usa/', '/study-abroad/can/', '/study-abroad/eur/', '/study-abroad/jp/', '/study-abroad/kr/', '/study-abroad/nz/',
  '/scholarships/', '/services/', '/services/test-prep/',
];

export default function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const prefetch = () => COMMON_ROUTES.forEach((route) => router.prefetch(route));
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(prefetch, { timeout: 2000 });
    } else {
      setTimeout(prefetch, 1000);
    }
  }, [router]);

  return null;
}
