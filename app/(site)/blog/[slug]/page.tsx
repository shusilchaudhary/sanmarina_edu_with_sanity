import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { createServerSupabaseClient } from '@/lib/supabase-server';
import type { BlogPost } from '@/lib/supabase';

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return null;
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    if (error || !data) return null;
    return data;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return [];
  }
  try {
    const supabase = createServerSupabaseClient();
    const { data } = await supabase
      .from('blog_posts')
      .select('slug')
      .eq('status', 'published');
    return (data ?? []).map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | San Marina Blog`,
    description: post.meta_description ?? post.excerpt,
    keywords: post.tags?.join(', '),
    alternates: {
      canonical: `https://www.sanmarina.edu.np/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.meta_description ?? post.excerpt,
      images: post.image_url ? [post.image_url] : [],
      url: `https://www.sanmarina.edu.np/blog/${post.slug}/`,
    },
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.published_at,
        dateModified: post.created_at,
        author: { '@type': 'Person', name: post.author },
        publisher: {
          '@type': 'Organization',
          name: 'San Marina Education Consultancy',
          url: 'https://www.sanmarina.edu.np',
        },
        image: post.image_url ?? undefined,
        mainEntityOfPage: `https://www.sanmarina.edu.np/blog/${post.slug}/`,
      },
      ...(post.faq && post.faq.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: post.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Header */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog/" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline">
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          {post.category && (
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-6">
            <span className="flex items-center gap-2 tracking-tight">
              <User size={18} /> {post.author}
            </span>
            <span className="flex items-center gap-2 tracking-tight">
              <Calendar size={18} />{' '}
              {new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Hero Image */}
      {post.image_url && (
        <div className="max-w-5xl mx-auto px-4 -mt-8">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={post.image_url} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      )}

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 pt-16">
        <div className="prose prose-lg prose-blue max-w-none
          prose-headings:text-[#001F3F] prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[#001F3F]
          prose-ul:text-gray-700 prose-ol:text-gray-700
          prose-li:my-1
          prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-1 prose-blockquote:rounded-r-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.body_markdown}
          </ReactMarkdown>
        </div>
      </article>

      {/* FAQ Section (AEO) */}
      {post.faq && post.faq.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 mt-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#001F3F] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faq.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="font-semibold text-[#001F3F] mb-2">{item.question}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 mt-16">
        <div className="bg-[#001F3F] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Study Abroad?</h2>
          <p className="text-blue-200 mb-6">
            Get personalized guidance from Nepal&apos;s leading study abroad consultancy. Free consultation available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultation/"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#001F3F] px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <div className="max-w-3xl mx-auto px-4 mt-10">
        <Link href="/blog/" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>
    </main>
  );
}
