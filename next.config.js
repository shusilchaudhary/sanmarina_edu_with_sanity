/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for API routes support
  // distDir: 'dist', // Removed for Vercel compatibility
  compress: true, // Enables Gzip/Brotli compression of HTML/CSS/JS
  swcMinify: true, // Guarantees the Rust-based SWC compiler minifies code for speed
  experimental: {
    // optimizePackageImports: ['lucide-react'], // Temporarily disabled due to build issues
  },
  transpilePackages: ['sanity', 'next-sanity', '@sanity/ui', '@sanity/vision'],
  images: {
    // Image optimization is now available since we're not using static export
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/**' },
    ],
  },
  trailingSlash: true,
  async redirects() {
    return [
      // Redirect all non-trailing-slash URLs to trailing-slash versions (301 permanent)
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
