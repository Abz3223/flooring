import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { BlogPost } from '@/types/database';

export const metadata: Metadata = {
  title: 'Flooring Installation Blog - Expert Tips & Guides | Toronto',
  description:
    'Expert flooring tips, installation guides, and industry insights from Toronto\'s trusted flooring contractors. Learn about hardwood, laminate, vinyl, tile, and carpet installation.',
  alternates: {
    canonical: 'https://flooringinstallerstoronto.com/blog',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Toronto Flooring Installers',
  description: 'Professional flooring installation services for Toronto and the GTA',
  url: 'https://flooringinstallerstoronto.com',
  telephone: '+16479050050',
  email: 'info@flooringinstallerstoronto.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 King Street West',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    postalCode: 'M5H 1A1',
    addressCountry: 'CA',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flooringinstallerstoronto.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://flooringinstallerstoronto.com/blog' },
  ],
};

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  const blogPosts: BlogPost[] = posts || [];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold mb-4 text-center">Flooring Installation Blog</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">
            Expert tips, guides, and insights from Toronto&apos;s trusted flooring installers
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No blog posts available yet.</p>
              <p className="text-gray-500">Check back soon for expert flooring advice and tips!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="bg-white border-2 border-gray-200 hover:border-oak rounded-lg overflow-hidden transition-all group"
                >
                  {post.featured_image && (
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-navy mb-2 group-hover:text-oak transition-colors">
                      {post.title}
                    </h2>
                    {post.meta_description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.meta_description}</p>
                    )}
                    <div className="flex items-center text-oak font-semibold">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
