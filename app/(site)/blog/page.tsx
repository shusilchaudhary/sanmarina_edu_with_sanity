import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, User, ChevronRight } from 'lucide-react';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import type { BlogPost } from '@/lib/supabase';

export const metadata: Metadata = {
  title: 'Study Abroad Blog | Guides & Tips Nepal',
  description: 'Study abroad blog: visa tips, scholarship guides, destination advice for Nepal students. Australia, UK, USA, Canada. Expert insights from San Marina.',
  keywords: 'study abroad blog nepal, visa tips study abroad, scholarship blog, study abroad guides',
  alternates: {
    canonical: 'https://www.sanmarina.edu.np/blog/',
  },
  openGraph: {
    title: 'Study Abroad Blog | Visa Tips & Guides - San Marina Nepal',
    description: 'Expert tips on visas, scholarships, and destinations for Nepal students.',
    url: 'https://www.sanmarina.edu.np/blog/',
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sanmarina.edu.np/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.sanmarina.edu.np/blog/' },
      ],
    },
    {
      '@type': 'Blog',
      name: 'San Marina Study Abroad Blog',
      description: 'Expert tips, guides, and insights on studying abroad: visa advice, scholarships, destination guides for Nepal students.',
      url: 'https://www.sanmarina.edu.np/blog/',
      publisher: {
        '@type': 'Organization',
        name: 'San Marina Education Consultancy',
        url: 'https://www.sanmarina.edu.np',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where can I find study abroad tips for Nepal students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "San Marina's blog offers visa tips, scholarship guides, and destination advice for Nepal students planning to study in Australia, UK, USA, Canada, Japan, and Europe.",
          },
        },
        {
          '@type': 'Question',
          name: 'What topics does the San Marina blog cover?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visa tips, scholarship opportunities, destination guides, application advice, and expert insights on studying abroad. New articles added regularly.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get personalized study abroad advice?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Book a free consultation at San Marina. Visit our branches in Kathmandu, Dang, or Itahari, or use the form at sanmarina.edu.np/consultation/',
          },
        },
      ],
    },
  ],
};

async function getBlogPosts(): Promise<BlogPost[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return [];
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });
    if (error) return [];
    return data ?? [];
  } catch {
    return [];
  }
}

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* Breadcrumb */}
      <section className="pt-28 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#001F3F] font-medium">Home</Link>
            <ChevronRight className="inline mx-1.5 align-middle" size={14} />
            <span className="text-[#001F3F] font-semibold">Blog</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-6 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
              Study Abroad Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Visa tips, scholarship guides, and destination advice for Nepal students. Australia, UK, USA, Canada, Japan & Europe.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Book free consultation</Link>
              {' · '}
              <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">Explore destinations</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Link href={`/blog/${post.slug}/`}>
                    <div className="relative h-48 overflow-hidden bg-blue-50">
                      {post.image_url ? (
                        <Image
                          src={post.image_url}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#001F3F] to-blue-600">
                          <span className="text-white text-4xl font-bold opacity-20">SM</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}/`}>
                      <h2 className="text-xl font-bold text-[#001F3F] mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                <Calendar className="w-10 h-10 text-[#001F3F]" />
              </div>
              <h2 className="text-xl font-bold text-[#001F3F] mb-2">Blog posts coming soon</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Our AI-powered blog is warming up. Expert study abroad guides for Nepal students will appear here shortly.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Meanwhile, explore our{' '}
                <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">study abroad destinations</Link>
                ,{' '}
                <Link href="/scholarships/" className="text-blue-600 font-semibold hover:underline">scholarships</Link>, and{' '}
                <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">book a free consultation</Link>.
              </p>
              <Link
                href="/consultation/"
                className="inline-flex items-center gap-2 mt-6 text-[#001F3F] font-semibold hover:text-blue-600"
              >
                Book Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section - AEO */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-8 text-center">Blog FAQ</h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">Where can I find study abroad tips for Nepal students?</p>
              <p className="text-gray-600 text-sm">San Marina&apos;s blog offers visa tips, scholarship guides, and destination advice for Australia, UK, USA, Canada, Japan, and Europe.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">What topics does the blog cover?</p>
              <p className="text-gray-600 text-sm">Visa tips, scholarships, destination guides, application advice. New articles added regularly.</p>
            </div>
            <div>
              <p className="font-semibold text-[#001F3F] mb-1">How do I get personalized advice?</p>
              <p className="text-gray-600 text-sm">Book a free <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">consultation</Link> or visit our <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">branches</Link> in Kathmandu, Dang, Itahari.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#001F3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-200 mb-8">
            Subscribe to our newsletter for the latest study abroad tips, scholarship alerts, and visa updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl border-0 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-sm text-blue-200">
            Also check <Link href="/scholarships/" className="underline font-medium">scholarships</Link> and <Link href="/services/" className="underline font-medium">our services</Link>.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <Link href="/study-abroad/" className="text-blue-600 font-semibold hover:underline">Study abroad destinations</Link>
            {' · '}
            <Link href="/consultation/" className="text-blue-600 font-semibold hover:underline">Free consultation</Link>
            {' · '}
            <Link href="/contact/" className="text-blue-600 font-semibold hover:underline">Contact us</Link>
          </p>
          <Link href="/consultation/" className="inline-flex items-center px-6 py-3 bg-[#001F3F] text-white font-semibold rounded-xl hover:bg-[#003366] transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
