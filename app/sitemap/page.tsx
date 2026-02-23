import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Wrench, MapPin, FileText, Info } from 'lucide-react';
import { FLOORING_SERVICES } from '@/constants/services';
import { LOCATIONS } from '@/constants/locations';
import { BLOG_POSTS } from '@/constants/blogPosts';

export const metadata: Metadata = {
  title: 'Sitemap | Flooring Installers Toronto',
  description: 'Full sitemap for Flooring Installers Toronto. Find all our pages, services, and locations.',
  alternates: { canonical: 'https://flooringinstallerstoronto.com/sitemap' },
};

export default function SitemapPage() {
  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl mb-2">Site Map</h1>
          <p className="text-gray-300">Find everything on the Flooring Installers Toronto website.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5 text-oak" />
                <h2 className="font-heading font-bold text-navy text-lg">Main Pages</h2>
              </div>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'Disclaimer', href: '/disclaimer' },
                ].map((p) => (
                  <li key={p.href}><Link href={p.href} className="text-gray-600 hover:text-oak text-sm transition-colors">{p.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-oak" />
                <h2 className="font-heading font-bold text-navy text-lg">Services</h2>
              </div>
              <ul className="space-y-2">
                {FLOORING_SERVICES.map((s) => (
                  <li key={s.id}><Link href={`/services/${s.slug}`} className="text-gray-600 hover:text-oak text-sm transition-colors">{s.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-oak" />
                <h2 className="font-heading font-bold text-navy text-lg">Locations</h2>
              </div>
              <ul className="space-y-2">
                {LOCATIONS.map((l) => (
                  <li key={l.slug}><Link href={`/locations/${l.slug}`} className="text-gray-600 hover:text-oak text-sm transition-colors">{l.name}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-oak" />
                <h2 className="font-heading font-bold text-navy text-lg">Blog Posts</h2>
              </div>
              <ul className="space-y-2">
                {BLOG_POSTS.map((b) => (
                  <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-gray-600 hover:text-oak text-sm transition-colors leading-tight block">{b.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
