import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type BlogPost = {
  title: string;
  body: any;
  slug: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
};

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    "slug": slug.current,
    "date": publishedAt,
    author,
    "category": categories[0],
    "image": mainImage.asset->url,
    excerpt
  }`;
  return await client.fetch(query, { slug });
}

export async function generateStaticParams() {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | San Marina Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

import { urlFor } from '@/sanity/lib/image';

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-96 my-8">
        <Image src={urlFor(value).url()} alt="Blog content image" fill className="object-cover rounded-xl" />
      </div>
    ),
  },
};

export const revalidate = 0;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog/" className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            <span className="flex items-center gap-2 tracking-tight"><User size={18} /> {post.author}</span>
            <span className="flex items-center gap-2 tracking-tight"><Calendar size={18} /> {new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      {post.image && (
        <div className="max-w-5xl mx-auto px-4 -mt-8">
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 pt-16 prose prose-lg prose-blue">
        <PortableText value={post.body} components={components} />
      </article>
    </main>
  );
}
