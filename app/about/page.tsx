import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Toronto Flooring Installers, a licensed, insured flooring company serving the GTA since 2010. Based in Scarborough, ON.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    title: 'Honest Pricing',
    description: 'Our quotes are itemized and transparent. You know exactly what you are paying for before any work starts, with no surprise charges at the end.',
  },
  {
    title: 'Quality Materials',
    description: 'We source flooring from reputable manufacturers and do not cut corners on subfloor prep, underlayment, or installation hardware.',
  },
  {
    title: 'Clean Workmanship',
    description: 'We treat your home with respect, protecting adjacent surfaces, cleaning up fully at the end of each day, and leaving a site you are proud of.',
  },
  {
    title: 'Reliable Communication',
    description: 'We show up on time, communicate any changes immediately, and do not leave clients wondering what is happening with their project.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Toronto Flooring Installers</h1>
          <p className="text-xl text-gray-300">
            A licensed, insured flooring company serving the Greater Toronto Area since 2010.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Toronto Flooring Installers started in 2010 with a single crew and a straightforward goal: to install flooring properly and treat clients the way we would want to be treated ourselves. We are based in Scarborough at 2061 McCowan Rd, and the majority of our work has always been within the GTA, Toronto, Scarborough, North York, Vaughan, Markham, Mississauga, and Pickering.
            </p>
            <p>
              Over the past 15 years, we have grown into a team of experienced installers who collectively have tens of thousands of square feet of flooring under their belts. We install hardwood, laminate, luxury vinyl plank, tile, and carpet, across houses, condos, and commercial spaces. Our repeat client rate and referral volume is what we are most proud of, because it reflects the trust homeowners place in us when they invite us into their homes.
            </p>
            <p>
              We are not the cheapest company in the GTA and we do not try to be. We compete on quality, reliability, and fair dealing. If you want someone who shows up, does the job right, and backs their work, we think you will be happy with the experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">How We Work</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            These are the principles that guide every project we take on.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Licensing &amp; Insurance</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Toronto Flooring Installers is a fully licensed contractor operating in Ontario. We carry comprehensive general liability insurance and maintain WSIB (Workplace Safety and Insurance Board) coverage for all of our workers, which protects both our crew and our clients in the event of any on-site incident.
            </p>
            <p>
              We are happy to provide proof of insurance and WSIB clearance certificates to any client who requests them. We recommend that all homeowners ask for these documents before hiring any trades contractor, regardless of who they work with.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-brand-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Where We Work</h2>
          <p className="text-gray-600 mb-8">
            We serve homeowners and businesses throughout the Greater Toronto Area, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Toronto', 'Scarborough', 'North York', 'Vaughan', 'Markham', 'Mississauga', 'Pickering'].map((area) => (
              <Link
                key={area}
                href={`/locations/${area.toLowerCase().replace(' ', '-')}`}
                className="bg-white border border-brand-200 text-gray-800 font-medium px-5 py-2.5 rounded-full hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
              >
                {area}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block bg-brand-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors text-lg"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </div>
  )
}
