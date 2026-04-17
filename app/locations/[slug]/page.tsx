import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations-data'
import Breadcrumbs from '@/src/components/ui/Breadcrumbs'
import CTASection from '@/src/components/ui/CTASection'
import MobileStickyCTA from '@/src/components/ui/MobileStickyCTA'
import { FLOORING_SERVICES } from '@/src/constants/services'
import { LOCATIONS } from '@/src/constants/locations'
import { ArrowRight } from 'lucide-react'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.slug)
  if (!location) return {}
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  }
}

export default function LocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.slug)
  if (!location) notFound()

  const otherLocations = LOCATIONS.filter((l) => l.slug !== params.slug)

  return (
    <div className="min-h-screen bg-surface">
      <div className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/engineered-hardwood-hallway-flooring-toronto.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/10" />
        <div className="relative w-full max-w-wide mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-content">
            <Breadcrumbs
              light
              crumbs={[
                { label: 'Home', href: '/' },
                { label: 'Locations', href: '/locations' },
                { label: location.city },
              ]}
            />
            <h1 className="font-serif text-white mt-3 leading-tight" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Flooring Installers in {location.city}
            </h1>
            <p className="text-white/75 text-[1rem] mt-2">
              Serving {location.city} and surrounding communities. Free estimates. 5-year warranty.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div
          className="location-content"
          dangerouslySetInnerHTML={{ __html: location.content }}
        />

        <div className="mt-12 pt-10 border-t border-stone-200">
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-6">
            Our Services in {location.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FLOORING_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="flex items-center justify-between p-4 bg-white border border-stone-200 rounded-xl hover:border-gold hover:shadow-sm transition-all group"
              >
                <span className="font-sans font-medium text-charcoal text-[0.9375rem]">
                  {service.name}
                </span>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-gold transition-colors flex-shrink-0" strokeWidth={2} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-serif text-[1.25rem] text-charcoal mb-4">
            Nearby Areas We Serve
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="inline-flex items-center font-sans text-[0.875rem] font-medium text-stone-600 hover:text-gold bg-white border border-stone-200 hover:border-gold px-4 py-2 rounded-full transition-all"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CTASection
        headline={`Get a Free Flooring Estimate in ${location.city}`}
        subtext={`We serve ${location.city} and surrounding areas with professional flooring installation. Call us or fill out our form and we'll get back to you within hours.`}
      />

      <MobileStickyCTA />
    </div>
  )
}
