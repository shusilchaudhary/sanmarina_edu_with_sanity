/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for API routes support
  // distDir: 'dist', // Removed for Vercel compatibility
  compress: true, // Enables Gzip/Brotli compression of HTML/CSS/JS
  experimental: {
    // optimizePackageImports: ['lucide-react'], // Temporarily disabled due to build issues
    // serverComponentsExternalPackages removed — conflicts with transpilePackages in Next.js 14.2.35
  },
  transpilePackages: [],
 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Image optimization is now available since we're not using static export
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'zebcvuevryukefxeokaf.supabase.co', pathname: '/**' },
    ],
  },
  trailingSlash: true,
  async headers() {
    const securityHeaders = [
      // Prevent clickjacking - stops site from being embedded in iframes on other domains
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      // Prevent MIME type sniffing - stops browsers guessing file types
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      // Enable XSS filter in older browsers
      { key: 'X-XSS-Protection', value: '1; mode=block' },
      // Control referrer info sent to other sites
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      // Force HTTPS for 1 year (only sent over HTTPS by Vercel)
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
      // Restrict browser features
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()' },
      // DNS prefetch control
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
    ];

    return [
      {
        // Apply security headers to all pages
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // No-cache for blog pages so deletes/edits appear instantly
        source: '/blog/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
          { key: 'Surrogate-Control', value: 'no-store' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ── Explicit redirects for scholarship short URLs ──────────────────────
      { source: '/scholarships/austria/', destination: '/scholarships/austria-for-nepali-students/', permanent: true },
      { source: '/scholarships/germany/', destination: '/scholarships/germany-for-nepali-students/', permanent: true },
      { source: '/scholarships/italy/', destination: '/scholarships/italy-for-nepali-students/', permanent: true },
      { source: '/scholarships/norway/', destination: '/scholarships/norway-for-nepali-students/', permanent: true },
      { source: '/scholarships/romania/', destination: '/scholarships/romania-for-nepali-students/', permanent: true },
      { source: '/scholarships/slovakia/', destination: '/scholarships/slovakia-for-nepali-students/', permanent: true },
      { source: '/scholarships/usa/', destination: '/scholarships/usa-for-nepali-students/', permanent: true },

      // ── Explicit redirects for study-abroad short URLs ──────────────────────
      { source: '/study-abroad/eu/', destination: '/study-abroad/eur/', permanent: true },
      { source: '/study-abroad/europe/', destination: '/study-abroad/eur/', permanent: true },
      { source: '/study-abroad/georgia/', destination: '/study-abroad/eur/georgia/', permanent: true },
      { source: '/study-abroad/estonia/', destination: '/study-abroad/eur/estonia/', permanent: true },
      { source: '/study-abroad/czech-republic/', destination: '/study-abroad/eur/czech-republic/', permanent: true },
      { source: '/study-abroad/greece/', destination: '/study-abroad/eur/greece/', permanent: true },
      { source: '/study-abroad/hungary/', destination: '/study-abroad/eur/hungary/', permanent: true },
      { source: '/study-abroad/ireland/', destination: '/study-abroad/eur/ireland/', permanent: true },
      { source: '/study-abroad/romania/', destination: '/study-abroad/eur/romania/', permanent: true },

      // ── New redirects for full country names to short slugs ────────────────
      { source: '/study-abroad/australia/', destination: '/study-abroad/aus/', permanent: true },
      { source: '/study-abroad/canada/', destination: '/study-abroad/can/', permanent: true },
      { source: '/study-abroad/united-states/', destination: '/study-abroad/usa/', permanent: true },
      { source: '/study-abroad/japan/', destination: '/study-abroad/jp/', permanent: true },
      { source: '/study-abroad/new-zealand/', destination: '/study-abroad/nz/', permanent: true },
      { source: '/study-abroad/south-korea/', destination: '/study-abroad/kr/', permanent: true },

      // ── Redirect all non-trailing-slash URLs to trailing-slash versions (301 permanent) ────
      {
        source: '/:path',
        destination: '/:path/',
        permanent: true,
        has: [
          {
            type: 'header',
            key: 'x-vercel-id', // Only apply on Vercel (ensures it works on deployed site)
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
