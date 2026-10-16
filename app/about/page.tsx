import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Five GTA flooring installers, the first of them laying floors since 2014. Office and samples at 2061 McCowan Rd, Scarborough, by appointment.',
  alternates: { canonical: '/about' },
}

// Owner-confirmed facts, 2026-10-15. No warranty line until it is confirmed in writing.
const steps = [
  {
    title: '1. You call or send the form',
    description: 'We call back within a few hours to ask about the rooms, the floor you have now and your timing.',
  },
  {
    title: '2. Free measure, samples included',
    description: 'We measure on site and bring samples with us, so you can choose your floor on the spot.',
  },
  {
    title: '3. Written quote the next day',
    description: 'The quote lists removal, levelling, materials and installation, so you can see what you are paying for.',
  },
  {
    title: '4. Condo? We handle the board',
    description: 'We send the building the product specs it asks for and book the elevator before we start.',
  },
  {
    title: '5. Install and cleanup',
    description: 'We take out the old floor, level the low spots, install, put the furniture back and clean up.',
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
            A crew of five flooring installers working across the GTA from an office at 2061 McCowan Rd in Scarborough.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Mostafa started installing floors in 2014, and he is still on the tools. Mike and the rest of the crew joined over the next few years, a couple of them in 2016 and 2017. Between them they have done more than 500 jobs: condos downtown and in Scarborough, basements, stairs, herringbone, tile showers, heated floors and commercial spaces.
            </p>
            <p>
              We are usually a little under typical GTA prices, and we do not get there by skipping prep. When the old carpet comes up and the concrete underneath is not flat, we level it. We tell you about it before we start, not after.
            </p>
            <p>
              One thing we do not do is cap and cove, where the flooring is run about 6 inches up the wall in place of a baseboard.
            </p>
          </div>
        </div>
      </section>

      {/* How a job runs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">How a Job Runs</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            The same five steps on every job, from a single bedroom to a whole condo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
          <p className="text-gray-600 leading-relaxed">
            Our office at 2061 McCowan Rd in Scarborough has flooring samples and room to talk through your project. We are often out on a measure, so call{' '}
            <a href="tel:+16479050050" className="text-brand-600 font-semibold">(647) 905-0050</a>{' '}
            before you come and we will make sure someone is there.
          </p>
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
