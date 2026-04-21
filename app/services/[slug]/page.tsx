import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data'
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '@/src/lib/schema'
import { serviceSchemaData } from '@/src/constants/service-schema-data'
import { serviceFAQs } from '@/src/constants/faqs'
import Breadcrumbs from '@/src/components/ui/Breadcrumbs'
import CTASection from '@/src/components/ui/CTASection'
import MobileStickyCTA from '@/src/components/ui/MobileStickyCTA'

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
    alternates: { canonical: `/services/${params.slug}` },
  }
}

const BASE_URL = 'https://flooringinstallerstoronto.com'

const heroImages: Record<string, string> = {
  'hardwood-flooring-installation': '/hardwood-flooring-after-toronto.jpeg',
  'laminate-flooring-installation': '/engineered-hardwood-flooring-installation-toronto.jpg',
  'vinyl-flooring-installation': '/installers-commercial-wood-look-flooring-installation-toronto.jpeg',
  'tile-flooring-installation': '/toronto-bathroom-renovation-tile-flooring-toronto..jpg',
  'carpet-installation': '/flooring-residential-staircase-carpet-installation-toronto.jpeg',
}

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

  const heroImage = heroImages[params.slug] ?? '/engineered-hardwood-hallway-flooring-toronto.jpg'

  return (
    <div className="min-h-screen bg-surface">
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

      <div className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/10" />
        <div className="relative w-full max-w-wide mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-content">
            <Breadcrumbs
              light
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: service.title },
              ]}
            />
            <h1 className="font-serif text-white mt-3 leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              {service.title} in Toronto &amp; the GTA
            </h1>
            <p className="text-white/75 text-[1rem] mt-2">
              Professional installation. Free on-site estimates. 5-year workmanship warranty.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div
          className="service-content"
          dangerouslySetInnerHTML={{ __html: service.content }}
        />
      </div>

      <CTASection
        headline={`Ready for a Free ${service.title} Estimate?`}
        subtext="We serve homeowners across Toronto and the GTA. Call us or request a quote online — we respond within a few hours and can usually schedule your site visit within days."
      />

      <MobileStickyCTA />
    </div>
  )
}
