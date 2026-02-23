import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/constants/blogPosts';

export const metadata: Metadata = {
  title: 'Flooring Blog | Tips, Trends & Guides | Toronto GTA',
  description: 'Expert flooring advice, trend guides, and installation tips from Toronto\'s top flooring professionals. Serving homeowners across the GTA.',
  alternates: { canonical: 'https://flooringinstallerstoronto.com/blog' },
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-4">Resources</p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-4">Flooring Blog</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Expert tips, trends, and guides from Toronto's flooring professionals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1.5 bg-oak/10 text-oak text-xs font-semibold px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-navy text-lg sm:text-xl mb-3 leading-snug group-hover:text-oak transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1.5 text-oak hover:text-oak-dark font-semibold text-sm transition-colors group-hover:gap-2.5">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {BLOG_POSTS.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              <p>No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
