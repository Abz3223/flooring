/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first, WebP fallback. The eight homepage JPEGs were 1.7 MB raw.
    formats: ['image/avif', 'image/webp'],
    // Matches the Tailwind breakpoints actually used in `sizes` props.
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
  },
}
module.exports = nextConfig
