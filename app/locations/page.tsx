import type { Metadata } from 'next'
import Link from 'next/link'
import { getBreadcrumbSchema } from '@/src/lib/schema'
import Breadcrumbs from '@/src/components/ui/Breadcrumbs'
import CTASection from '@/src/components/ui/CTASection'
import MobileStickyCTA from '@/src/components/ui/MobileStickyCTA'

// Hub page. Every location page breadcrumbs to /locations, and this URL returned
// 404 until Sept 2026. One in-sentence link per city. Each blurb restates a fact
// already published on that city's own page; do not add claims here that the
// city page does not make.

const BASE_URL = 'https://flooringinstallerstoronto.com'

export const metadata: Metadata = {
  title: 'Flooring Installation Across Toronto & the GTA',
  description:
    'Flooring installation in Toronto, Scarborough, North York, Vaughan, Markham, Mississauga, and Pickering from our shop on McCowan Rd in Scarborough. Free on-site estimates.',
  alternates: { canonical: '/locations' },
}

const linkClass =
  'text-gold hover:text-gold-hover font-semibold underline underline-offset-2'

export default function LocationsHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Locations', url: `${BASE_URL}/locations` },
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
            <Breadcrumbs light crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]} />
            <h1
              className="font-serif text-white mt-3 leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Flooring Installation Across Toronto &amp; the GTA
            </h1>
            <p className="text-white/75 text-[1rem] mt-3 max-w-2xl">
              Our shop is on McCowan Rd in Scarborough. The right floor depends on when and how
              your home was built, so each area below has its own page.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Scarborough</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Our home base, where we can often do a same-day or next-day site visit. See{' '}
            <Link href="/locations/scarborough" className={linkClass}>
              flooring installation in Scarborough
            </Link>{' '}
            for the housing stock we work in most.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Toronto</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            A Cabbagetown Victorian and a Liberty Village condo are different jobs. Our{' '}
            <Link href="/locations/toronto" className={linkClass}>
              flooring installation in Toronto
            </Link>{' '}
            page sorts the city by housing era and what each one means under the existing floor.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">North York</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Mostly post-war detached homes like the Don Mills bungalows, and high-rise condos along
            Yonge. More on{' '}
            <Link href="/locations/north-york" className={linkClass}>
              flooring installation in North York
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Vaughan</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Most Vaughan homes were built from the early 1990s on, and many newer builds sit on
            concrete subfloors. See{' '}
            <Link href="/locations/vaughan" className={linkClass}>
              flooring installation in Vaughan
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Markham</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            Heritage renovations in Unionville and Old Markham Village, and upgrades in newer
            communities like Cornell and Cathedraltown. Read about{' '}
            <Link href="/locations/markham" className={linkClass}>
              flooring installation in Markham
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Mississauga</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            From early-1900s lakefront homes in Port Credit to new high-rises around Square One.
            See{' '}
            <Link href="/locations/mississauga" className={linkClass}>
              flooring installation in Mississauga
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-[1.5rem] text-charcoal mb-3">Pickering</h2>
          <p className="text-stone-600 text-[1rem] leading-relaxed">
            About 20 minutes east of our shop on the 401. More on{' '}
            <Link href="/locations/pickering" className={linkClass}>
              flooring installation in Pickering
            </Link>
            .
          </p>
        </section>

        <p className="text-stone-600 text-[1rem] leading-relaxed pt-4 border-t border-stone-200">
          Looking for a specific type of floor? See all of our{' '}
          <Link href="/services" className={linkClass}>
            flooring installation services
          </Link>
          .
        </p>
      </div>

      <CTASection headline="Get a Free Flooring Estimate" />
      <MobileStickyCTA />
    </div>
  )
}
