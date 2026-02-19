import { FLOORING_SERVICES } from '../constants/services';

const SITE_URL = 'https://flooringinstallerstoronto.com';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const SERVICE_AREAS = [
  'toronto',
  'scarborough',
  'north-york',
  'vaughan',
  'markham',
  'mississauga',
  'pickering'
];

const STATIC_PAGES = [
  { path: '/terms', changefreq: 'yearly' as const, priority: 0.5 },
  { path: '/privacy', changefreq: 'yearly' as const, priority: 0.5 },
  { path: '/disclaimer', changefreq: 'yearly' as const, priority: 0.5 },
  { path: '/sitemap', changefreq: 'monthly' as const, priority: 0.6 }
];

export function generateSitemapUrls(): SitemapUrl[] {
  const today = '2025-11-17';
  const urls: SitemapUrl[] = [];

  urls.push({
    loc: SITE_URL,
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0
  });

  urls.push({
    loc: `${SITE_URL}/about`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.7
  });

  urls.push({
    loc: `${SITE_URL}/contact`,
    lastmod: today,
    changefreq: 'monthly',
    priority: 0.8
  });

  urls.push({
    loc: `${SITE_URL}/blog`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.8
  });

  FLOORING_SERVICES.forEach(service => {
    urls.push({
      loc: `${SITE_URL}/services/${service.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9
    });
  });

  SERVICE_AREAS.forEach(area => {
    urls.push({
      loc: `${SITE_URL}/locations/${area}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9
    });
  });

  STATIC_PAGES.forEach(page => {
    urls.push({
      loc: `${SITE_URL}${page.path}`,
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority
    });
  });

  return urls;
}

export function generateSitemapXML(): string {
  const urls = generateSitemapUrls();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}
