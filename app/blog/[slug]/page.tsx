import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/constants/blogPosts';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Flooring Installers Toronto`,
    description: post.excerpt,
    alternates: { canonical: `https://flooringinstallerstoronto.com/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-oak hover:text-oak-light text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 bg-oak/20 text-oak text-xs font-semibold px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" /> {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-300 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-navy prose-a:text-oak">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-navy text-2xl sm:text-3xl mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">Contact Toronto's trusted flooring professionals for a free, detailed estimate.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-oak hover:bg-oak-light text-navy px-8 py-4 rounded-xl font-bold transition-colors">
            Get Free Estimate <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
