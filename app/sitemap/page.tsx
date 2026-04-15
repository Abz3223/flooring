import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllServiceSlugs } from '@/lib/services-data'
import { getAllLocationSlugs } from '@/lib/locations-data'

export const metadata: Metadata = {
  title: 'Sitemap | Toronto Flooring Installers',
  description: 'Full sitemap for Toronto Flooring Installers. Find all our service and location pages.',
}

const serviceSlugs = getAllServiceSlugs()
const locationSlugs = getAllLocationSlugs()

const serviceLabels: Record<string, string> = {
  'hardwood-flooring-installation': 'Hardwood Flooring Installation',
  'laminate-flooring-installation': 'Laminate Flooring Installation',
  'vinyl-flooring-installation': 'Vinyl / LVP Flooring Installation',
  'tile-flooring-installation': 'Tile Flooring Installation',
  'carpet-installation': 'Carpet Installation',
}

const locationLabels: Record<string, string> = {
  toronto: 'Toronto',
  scarborough: 'Scarborough',
  'north-york': 'North York',
  vaughan: 'Vaughan',
  markham: 'Markham',
  mississauga: 'Mississauga',
  pickering: 'Pickering',
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Site Map</h1>
          <p className="text-gray-400">All pages on the Toronto Flooring Installers website.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wide">Main Pages</h2>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Blog', href: '/blog' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-brand-600 hover:text-brand-700">{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wide">Services</h2>
            <ul className="space-y-2 text-sm">
              {serviceSlugs.map((slug) => (
                <li key={slug}>
                  <Link href={`/services/${slug}`} className="text-brand-600 hover:text-brand-700">
                    {serviceLabels[slug] ?? slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wide">Service Areas</h2>
            <ul className="space-y-2 text-sm">
              {locationSlugs.map((slug) => (
                <li key={slug}>
                  <Link href={`/locations/${slug}`} className="text-brand-600 hover:text-brand-700">
                    {locationLabels[slug] ?? slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
