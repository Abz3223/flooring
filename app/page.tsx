import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toronto Flooring Installers | Hardwood, Laminate, Vinyl, Tile & Carpet',
  description:
    'Trusted flooring installation in Toronto and the GTA since 2010. Hardwood, laminate, vinyl/LVP, tile, and carpet. Free estimates. Licensed & insured. Call (647) 905-0050.',
}

const services = [
  {
    title: 'Hardwood Flooring',
    description: 'Solid and engineered hardwood installation for houses and condos across the GTA. Oak, maple, walnut, and more.',
    href: '/services/hardwood-flooring-installation',
    icon: '🪵',
  },
  {
    title: 'Laminate Flooring',
    description: 'Durable, budget-friendly laminate that mimics real wood. Ideal for high-traffic areas and rental units.',
    href: '/services/laminate-flooring-installation',
    icon: '📋',
  },
  {
    title: 'Vinyl / LVP Flooring',
    description: '100% waterproof luxury vinyl plank — perfect for kitchens, basements, and bathrooms.',
    href: '/services/vinyl-flooring-installation',
    icon: '💧',
  },
  {
    title: 'Tile Flooring',
    description: 'Porcelain, ceramic, and natural stone tile installation for floors, showers, and feature walls.',
    href: '/services/tile-flooring-installation',
    icon: '⬜',
  },
  {
    title: 'Carpet Installation',
    description: 'Plush, cut-pile, and berber carpet installation for bedrooms, stairs, and basements.',
    href: '/services/carpet-installation',
    icon: '🏠',
  },
]

const whyUs = [
  {
    title: 'Licensed & Insured',
    description: 'We carry full liability insurance and WSIB coverage on every job. You are protected.',
  },
  {
    title: 'Free On-Site Estimates',
    description: 'We come to your home, measure properly, and give you a written quote — no obligation.',
  },
  {
    title: '5-Year Workmanship Warranty',
    description: 'Every installation is backed by our 5-year warranty on labour. Product warranties apply on top.',
  },
  {
    title: '100+ Five-Star Reviews',
    description: 'Consistently rated 5 stars by homeowners across the GTA for quality, professionalism, and cleanliness.',
  },
]

const areas = [
  'Toronto', 'Scarborough', 'North York', 'Vaughan', 'Markham', 'Mississauga', 'Pickering',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-400 font-semibold uppercase tracking-widest text-sm mb-4">
            Serving the GTA Since 2010
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Toronto&apos;s Trusted<br />
            <span className="text-brand-400">Flooring Installers</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Professional hardwood, laminate, vinyl, tile, and carpet installation throughout Toronto and the Greater Toronto Area. Licensed, insured, and backed by a 5-year workmanship warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#services"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg border border-white/20"
            >
              View Our Services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>✓ Free Estimates</span>
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Year Warranty</span>
            <span>✓ Serving All of the GTA</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Flooring Services We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From hardwood and tile to carpet and luxury vinyl, we install all major flooring types — with the same level of care on every job.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <span className="inline-block mt-4 text-brand-600 text-sm font-semibold">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Toronto Flooring Installers?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;ve been installing floors across the GTA for over a decade. Here&apos;s what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-brand-600 rounded-full" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Serving the Greater Toronto Area</h2>
          <p className="text-lg text-gray-600 mb-10">
            We install flooring across Toronto and surrounding communities. Same professional crew, same quality — wherever you are in the GTA.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <Link
                key={area}
                href={`/locations/${area.toLowerCase().replace(' ', '-')}`}
                className="bg-white border border-brand-200 text-gray-800 font-medium px-5 py-2.5 rounded-full hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Call us today or fill out our contact form for a free, no-obligation on-site estimate. We typically respond within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6479050050"
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Call (647) 905-0050
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg border border-white/20"
            >
              Request a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
