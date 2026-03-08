/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed for API routes support
  distDir: 'dist',
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
};

module.exports = nextConfig;
