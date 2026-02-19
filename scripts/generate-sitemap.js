import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

const SITE_URL = 'https://flooringinstallerstoronto.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const FLOORING_SERVICES = [
  'hardwood-flooring-installation',
  'laminate-flooring-installation',
  'vinyl-flooring-installation',
  'tile-flooring-installation',
  'carpet-installation'
];

async function generateSitemap() {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('slug, updated_at')
    .eq('published', true);

  const { data: serviceAreas } = await supabase
    .from('service_areas')
    .select('slug');

  const { data: affluentNeighborhoods } = await supabase
    .from('affluent_neighborhoods')
    .select('slug');

  const urls = [];

  urls.push({
    loc: SITE_URL,
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '1.0'
  });

  urls.push({
    loc: `${SITE_URL}/about`,
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.7'
  });

  urls.push({
    loc: `${SITE_URL}/contact`,
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  });

  urls.push({
    loc: `${SITE_URL}/blog`,
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '0.8'
  });

  FLOORING_SERVICES.forEach(serviceSlug => {
    urls.push({
      loc: `${SITE_URL}/services/${serviceSlug}`,
      lastmod: CURRENT_DATE,
      changefreq: 'monthly',
      priority: '0.9'
    });
  });

  if (serviceAreas) {
    serviceAreas.forEach(area => {
      urls.push({
        loc: `${SITE_URL}/locations/${area.slug}`,
        lastmod: CURRENT_DATE,
        changefreq: 'monthly',
        priority: '0.9'
      });
    });
  }

  if (affluentNeighborhoods) {
    affluentNeighborhoods.forEach(neighborhood => {
      urls.push({
        loc: `${SITE_URL}/neighborhoods/${neighborhood.slug}`,
        lastmod: CURRENT_DATE,
        changefreq: 'monthly',
        priority: '0.95'
      });
    });
  }

  if (blogPosts) {
    blogPosts.forEach(post => {
      const lastmod = post.updated_at
        ? new Date(post.updated_at).toISOString().split('T')[0]
        : CURRENT_DATE;

      urls.push({
        loc: `${SITE_URL}/blog/${post.slug}`,
        lastmod: lastmod,
        changefreq: 'monthly',
        priority: '0.7'
      });
    });
  }

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

  const publicDir = join(__dirname, '..', 'public');
  const sitemapPath = join(publicDir, 'sitemap.xml');

  writeFileSync(sitemapPath, xml, 'utf-8');
  console.log(`✅ Sitemap generated successfully at ${sitemapPath}`);
  console.log(`📊 Total URLs: ${urls.length}`);
}

generateSitemap().catch(error => {
  console.error('Error generating sitemap:', error);
  process.exit(1);
});
