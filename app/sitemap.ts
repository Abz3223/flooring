import { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/lib/services-data'
import { getAllLocationSlugs } from '@/lib/locations-data'

const BASE = 'https://flooringinstallerstoronto.com'

// Money pages and their hubs only.
// - Legal and utility pages (privacy, terms, disclaimer, /sitemap) are left out
//   so the sitemap only asks Google to spend crawl on pages that earn leads.
//   They stay crawlable through the footer.
// - Blog posts are left out until real posts exist. The two slugs in
//   src/constants/blogPosts.ts render notFound().
// - No lastModified. `new Date()` stamped every URL with the build date on every
//   deploy, which tells Google nothing. Add a real per-page date only when a
//   page's content genuinely changes.
// - Neighbourhood URLs are gone entirely (the route was deleted, Sept 2026).
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/locations`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${BASE}/services/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const locationPages: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `${BASE}/locations/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages, ...locationPages]
}
