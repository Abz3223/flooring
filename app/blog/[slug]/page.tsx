import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { BlogPost } from '@/types/database';
import { BLOG_POSTS } from '@/constants/blogPosts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Flooring Installers Toronto Blog`,
    description: post.meta_description || post.title,
    alternates: {
      canonical: `https://flooringinstallerstoronto.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Flooring Installers Toronto Blog`,
      description: post.meta_description || post.title,
      url: `https://flooringinstallerstoronto.com/blog/${post.slug}`,
      type: 'article',
      images: post.featured_image ? [{ url: post.featured_image }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flooringinstallerstoronto.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://flooringinstallerstoronto.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://flooringinstallerstoronto.com/blog/${post.slug}`,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.title,
    author: {
      '@type': 'Organization',
      name: post.author || 'Toronto Flooring Installers',
    },
    datePublished: post.created_at,
    image: post.featured_image || undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Toronto Flooring Installers',
      url: 'https://flooringinstallerstoronto.com',
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-oak hover:text-oak-light mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="font-heading font-bold mb-4 max-w-4xl">{post.title}</h1>
          <div className="flex items-center text-gray-300">
            <Calendar className="w-5 h-5 mr-2" />
            {new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            <span className="mx-3">•</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-lg">
            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full rounded-lg mb-8"
              />
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact Toronto&apos;s trusted flooring installers for a free consultation
          </p>
          <Link
            href="/#quote"
            className="bg-oak hover:bg-oak-light text-navy px-8 py-4 rounded-lg font-bold transition-colors inline-block"
          >
            Request Callback
          </Link>
        </div>
      </section>
    </div>
  );
}
