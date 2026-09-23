import type { Metadata } from 'next'
import Link from 'next/link'
import { getBreadcrumbSchema } from '@/src/lib/schema'
import Breadcrumbs from '@/src/components/ui/Breadcrumbs'
import CTASection from '@/src/components/ui/CTASection'
import MobileStickyCTA from '@/src/components/ui/MobileStickyCTA'

// Hub page. Every service page breadcrumbs to /services, and this URL returned
// 404 until Sept 2026, so all five service pages sat under a parent that did not
// exist (and their BreadcrumbList schema pointed at a dead URL). Keep one
// in-sentence link per service. Only state facts already published on the
// service pages themselves.

const BASE_URL = 'https://flooringinstallerstoronto.com'

export const metadata: Metadata = {
  title: 'Flooring Installation Services in Toronto & the GTA',
  description:
    'Hardwood, laminate, vinyl and LVP, tile, and carpet installation across Toronto and the GTA from our Scarborough base. Free on-site estimates. Call (647) 905-0050.',
  alternates: { canonical: '/services' },
}

const linkClass =
  'text-gold hover:text-gold-hover font-semibold underline underline-offset-2'

export default function ServicesHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Services', url: `${BASE_URL}/services` },
  ])

  return (
    <div className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-charcoal pt-28 pb-12">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content">
            <Breadcrumbs light crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
            <h1
              className="font-serif text-white mt-3 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Flooring Installation Services in Toronto &amp; the GTA
            </h1>
            <p className="text-white/75 text-[1rem] mt-3 max-w-2xl">
              We supply, install and repair flooring from our shop on McCowan Rd in
              Scarborough, with free on-site estimates.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Hardwood</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Solid and engineered hardwood in every species, over wood subfloors or concrete. Our{' '}
            <Link href="/services/hardwood-flooring-installation" className={linkClass}>
              hardwood flooring installation
            </Link>{' '}
            page covers how we choose between solid and engineered for Toronto&apos;s humidity
            swings, what the job costs, and our refinishing work on existing floors.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Laminate</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Durable, affordable, and available in hundreds of styles. See our{' '}
            <Link href="/services/laminate-flooring-installation" className={linkClass}>
              laminate flooring installation
            </Link>{' '}
            page for where laminate makes sense in a GTA home and how we install it.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Vinyl &amp; LVP</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Waterproof luxury vinyl plank for the rooms where water is the risk: kitchens,
            bathrooms, and basements. Read about our{' '}
            <Link href="/services/vinyl-flooring-installation" className={linkClass}>
              vinyl and LVP installation
            </Link>
            , one of our two most-requested services this year.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Tile</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Porcelain, ceramic, and natural stone for floors, showers, and feature walls,
            including heated floors. Our{' '}
            <Link href="/services/tile-flooring-installation" className={linkClass}>
              tile flooring installation
            </Link>{' '}
            page explains what the job involves.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Carpet</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Bedrooms, stairs, finished basements, and whole homes, with underpad included in
            every quote. See our{' '}
            <Link href="/services/carpet-installation" className={linkClass}>
              carpet installation
            </Link>{' '}
            page for the styles we install and our process.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Floor Repair</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Scratches, gaps, loose planks, and floors damaged by water, including a Richmond Hill
            home flooded in the September 2 storm. See our{' '}
            <Link href="/services/floor-repair" className={linkClass}>
              floor repair
            </Link>{' '}
            page for how we decide between repairing and replacing.
          </p>
        </section>

        <p className="text-stone-600 text-[1rem] leading-relaxed pt-4 border-t border-stone-200">
          Not sure where you are covered? We work across{' '}
          <Link href="/locations" className={linkClass}>
            Toronto and the GTA
          </Link>
          .
        </p>
      </div>

      <CTASection headline="Get a Free Flooring Estimate" />
      <MobileStickyCTA />
    </div>
  )
}
