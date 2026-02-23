import { MetadataRoute } from 'next';
import { FLOORING_SERVICES } from '@/constants/services';
import { LOCATIONS } from '@/constants/locations';
import { BLOG_POSTS } from '@/constants/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://flooringinstallerstoronto.com';

  const staticPages = ['', '/about', '/contact', '/blog', '/privacy', '/terms', '/disclaimer'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const servicePages = FLOORING_SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const locationPages = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = BLOG_POSTS.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
