export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ OPTIMIZATION: Preconnect to Sanity API to reduce DNS lookup time */}
        <link rel="preconnect" href="https://api.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        
        {/* ✅ OPTIMIZATION: Prefetch Sanity Studio bundles */}
        <link rel="prefetch" href="https://cdn.sanity.io" />
        
        {/* ✅ OPTIMIZATION: Disable unused features */}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
