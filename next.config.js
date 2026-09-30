/** @type {import('next').NextConfig} */
const nextConfig = {
  // Five URLs that earned impressions and now 404. The condo post ranked on
  // page one (84 impressions, avg position 8.9) before it was removed, which is
  // better than any current money page manages. Each goes to its closest live
  // match. The /neighborhoods/* route was deleted in Sept 2026; these three
  // slugs are the ones GSC still reports.
  async redirects() {
    return [
      {
        source: '/blog/condo-flooring-installation-north-york-downtown-toronto-acoustic',
        destination: '/locations/north-york',
        permanent: true,
      },
      {
        source: '/blog/victorian-home-flooring-restoration-toronto-beaches-leslieville',
        destination: '/locations/toronto',
        permanent: true,
      },
      { source: '/neighborhoods/the-kingsway', destination: '/locations/toronto', permanent: true },
      { source: '/neighborhoods/summerhill', destination: '/locations/toronto', permanent: true },
      { source: '/neighborhoods/lytton-park', destination: '/locations/toronto', permanent: true },
    ]
  },
  images: {
    // AVIF first, WebP fallback. The eight homepage JPEGs were 1.7 MB raw.
    formats: ['image/avif', 'image/webp'],
    // Matches the Tailwind breakpoints actually used in `sizes` props.
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
  },
}
module.exports = nextConfig
