import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/src/lib/schema'
import { serviceSchemaData } from '@/src/constants/service-schema-data'
import { serviceFAQs } from '@/src/constants/faqs'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

const BASE_URL = 'https://flooringinstallerstoronto.com'

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const schemaInput = serviceSchemaData[params.slug]
  const faqs = serviceFAQs[params.slug]

  const serviceSchema = schemaInput ? getServiceSchema(schemaInput) : null
  const faqSchema = faqs && faqs.length > 0 ? getFAQSchema(faqs) : null
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Services', url: `${BASE_URL}/services` },
    { name: service.title, url: `${BASE_URL}/services/${params.slug}` },
  ])

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </div>

          {/* Sidebar */}
          <aside className="mt-12 lg:mt-0 space-y-6">
            {/* CTA Card */}
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get a Free Estimate</h3>
              <p className="text-gray-600 text-sm mb-4">
                We serve Toronto and the entire GTA. Contact us today for a free, no-obligation on-site quote.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-brand-600 text-white font-semibold text-center px-4 py-3 rounded-lg hover:bg-brand-700 transition-colors mb-3"
              >
                Request a Free Quote
              </Link>
              <a
                href="tel:6479050050"
                className="block w-full border border-brand-600 text-brand-600 font-semibold text-center px-4 py-3 rounded-lg hover:bg-brand-600 hover:text-white transition-colors"
              >
                Call (647) 905-0050
              </a>
            </div>

            {/* Other Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Other Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/hardwood-flooring-installation" className="text-brand-600 hover:text-brand-700">Hardwood Flooring</Link></li>
                <li><Link href="/services/laminate-flooring-installation" className="text-brand-600 hover:text-brand-700">Laminate Flooring</Link></li>
                <li><Link href="/services/vinyl-flooring-installation" className="text-brand-600 hover:text-brand-700">Vinyl / LVP Flooring</Link></li>
                <li><Link href="/services/tile-flooring-installation" className="text-brand-600 hover:text-brand-700">Tile Flooring</Link></li>
                <li><Link href="/services/carpet-installation" className="text-brand-600 hover:text-brand-700">Carpet Installation</Link></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">Service Areas</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/locations/toronto" className="text-brand-600 hover:text-brand-700">Toronto</Link></li>
                <li><Link href="/locations/scarborough" className="text-brand-600 hover:text-brand-700">Scarborough</Link></li>
                <li><Link href="/locations/north-york" className="text-brand-600 hover:text-brand-700">North York</Link></li>
                <li><Link href="/locations/vaughan" className="text-brand-600 hover:text-brand-700">Vaughan</Link></li>
                <li><Link href="/locations/markham" className="text-brand-600 hover:text-brand-700">Markham</Link></li>
                <li><Link href="/locations/mississauga" className="text-brand-600 hover:text-brand-700">Mississauga</Link></li>
                <li><Link href="/locations/pickering" className="text-brand-600 hover:text-brand-700">Pickering</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
