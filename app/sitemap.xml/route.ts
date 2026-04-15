import { NextResponse } from 'next/server'
import { getAllServiceSlugs } from '@/lib/services-data'
import { getAllLocationSlugs } from '@/lib/locations-data'

const BASE_URL = 'https://flooringinstallerstoronto.com'

function buildSitemap(urls: { loc: string; changefreq: string; priority: string; lastmod?: string }[]) {
  const today = new Date().toISOString().split('T')[0]

  const urlElements = urls
    .map(({ loc, changefreq, priority, lastmod }) => {
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod ?? today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`
}

export async function GET() {
  const servicesSlugs = getAllServiceSlugs()
  const locationSlugs = getAllLocationSlugs()

  const staticPages = [
    { loc: `${BASE_URL}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.9' },
    { loc: `${BASE_URL}/blog`, changefreq: 'weekly', priority: '0.6' },
    { loc: `${BASE_URL}/privacy`, changefreq: 'yearly', priority: '0.3' },
    { loc: `${BASE_URL}/terms`, changefreq: 'yearly', priority: '0.3' },
  ]

  const servicePages = servicesSlugs.map((slug) => ({
    loc: `${BASE_URL}/services/${slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }))

  const locationPages = locationSlugs.map((slug) => ({
    loc: `${BASE_URL}/locations/${slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }))

  const allUrls = [...staticPages, ...servicePages, ...locationPages]
  const sitemap = buildSitemap(allUrls)

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
