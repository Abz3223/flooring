import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, ShieldCheck, Users, Clock, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/contact';
import { PROJECT_IMAGES } from '@/constants/images';

export const metadata: Metadata = {
  title: `About ${CONTACT_INFO.businessName} - Flooring Contractor Network | Toronto GTA`,
  description:
    'Learn about Flooring Installers Toronto — a lead generation platform connecting GTA homeowners with independent, vetted flooring contractors since 2008. Hardwood, tile, vinyl, carpet & more.',
  alternates: {
    canonical: 'https://flooringinstallerstoronto.com/about',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Toronto Flooring Installers',
  description: 'Professional flooring installation services for Toronto and the GTA',
  url: 'https://flooringinstallerstoronto.com',
  telephone: '+16479050050',
  email: 'info@flooringinstallerstoronto.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 King Street West',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    postalCode: 'M5H 1A1',
    addressCountry: 'CA',
  },
  areaServed: 'Toronto, ON and Greater Toronto Area',
  serviceType: 'Flooring Installation',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flooringinstallerstoronto.com/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://flooringinstallerstoronto.com/about' },
  ],
};

const stats = [
  { value: '15+', label: 'Years Connecting Homeowners' },
  { value: '5,000+', label: 'Projects Facilitated' },
  { value: '200+', label: 'GTA Contractors in Network' },
  { value: '4.8★', label: 'Average Contractor Rating' },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Vetted Contractor Network',
    description:
      'Every independent contractor in our network has been reviewed for active business registration, valid liability insurance, and positive client feedback before being listed on our platform.',
  },
  {
    icon: Users,
    title: 'Toronto-Focused',
    description:
      'We serve exclusively the Greater Toronto Area — from Mississauga and Vaughan to Scarborough and Pickering. Our platform is built around the specific needs and building codes of GTA homes and businesses.',
  },
  {
    icon: Clock,
    title: 'Fast Connections',
    description:
      'Most homeowners receive their first contractor callback within 2 hours of submitting a request. We prioritize speed without sacrificing quality.',
  },
  {
    icon: Award,
    title: 'No-Pressure Process',
    description:
      'Our service is completely free for homeowners. You receive quotes from multiple independent contractors and choose who to work with — there is never any obligation.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-4">Our Story</p>
            <h1 className="font-heading font-bold mb-5 text-3xl md:text-5xl leading-tight">
              Connecting Toronto Homeowners With Trusted Flooring Contractors Since 2008
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              We built {CONTACT_INFO.businessName} because finding a reliable, skilled flooring installer in the GTA
              shouldn&apos;t be a frustrating experience. Our platform removes the guesswork.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-oak">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-heading font-bold text-navy">{stat.value}</p>
                <p className="text-navy/80 text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-5">Who We Are</h2>
              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                <p>
                  Founded in 2008, {CONTACT_INFO.businessName} operates as a specialized lead generation and customer
                  connection platform for the flooring industry across the Greater Toronto Area.
                </p>
                <p>
                  <strong className="text-navy">We are not a flooring company.</strong> We do not employ installers,
                  perform installations, or provide any contracting services. Instead, we maintain a vetted network of
                  independent flooring contractors throughout the GTA who specialize in hardwood, laminate, vinyl plank,
                  tile, and carpet installation for both residential and commercial properties.
                </p>
                <p>
                  When you submit a request through our platform, we match you with independent contractors in your area
                  who can provide detailed quotes for your specific project. All work is performed exclusively by these
                  independent businesses.
                </p>
                <p>
                  Over 15 years, we&apos;ve helped connect thousands of Toronto homeowners and commercial property
                  managers with skilled, reliable installers — from single-room renovations in North York to full
                  commercial fit-outs in Markham.
                </p>
              </div>
            </div>
            <div className="relative">
              <figure className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/custom-staircase-renovation-wood-treads-toronto-installers.jpeg"
                  alt="Custom open-riser staircase renovation with solid white oak wood treads and ornamental iron balusters in Toronto home"
                  className="w-full h-80 object-cover object-center"
                />
                <figcaption className="bg-navy/95 text-white px-4 py-3 text-sm">
                  Custom open-riser staircase renovation in Toronto — solid white oak treads with ornamental iron
                  balusters, installed by a contractor in our network.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">What We Stand For</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is built on four principles that guide every contractor connection we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-oak/20 rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Real Work, Real Results</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Projects Completed by Our Contractor Network
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are actual installations completed by independent flooring contractors who work with homeowners and
              businesses across Toronto and the GTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROJECT_IMAGES.map((project, index) => (
              <figure
                key={index}
                className="group overflow-hidden rounded-xl shadow-md bg-gray-50 border border-gray-100"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.src}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-oak text-navy text-xs font-bold px-3 py-1 rounded-full shadow">
                    {project.category}
                  </span>
                </div>
                <figcaption className="p-4">
                  <p className="text-navy font-semibold text-sm leading-snug mb-2">{project.caption}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-500 text-xs gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                    <Link
                      href={`/services/${project.slug}`}
                      className="text-oak hover:text-oak-light text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">How Our Platform Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '1',
                title: 'Submit Your Request',
                desc: 'Tell us about your flooring project — service type, approximate square footage, and your preferred timeline.',
              },
              {
                step: '2',
                title: 'We Connect You',
                desc: 'We match your request with independent contractors in your area who specialize in that flooring type.',
              },
              {
                step: '3',
                title: 'Receive Quotes',
                desc: 'Contractors contact you directly within hours with detailed pricing, availability, and references.',
              },
              {
                step: '4',
                title: 'Choose & Book',
                desc: 'All agreements, deposits, and scheduling happen directly between you and the contractor you select.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-oak rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl font-bold text-navy">{item.step}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-navy mb-6 text-center">Important Information</h2>
            <div className="bg-background rounded-xl shadow-sm border border-gray-200 p-8 space-y-5 text-gray-700">
              <p>
                <strong className="text-navy">Our Role:</strong> {CONTACT_INFO.businessName} is exclusively a lead
                generation and connection service. We facilitate introductions between homeowners and independent
                contractors but are not involved in service delivery, pricing negotiations, or project management.
              </p>
              <p>
                <strong className="text-navy">Contractor Independence:</strong> All contractors in our network are
                independent business owners. They set their own pricing, manage their own schedules, carry their own
                licensing and insurance, and are solely responsible for the quality and completion of their work.
              </p>
              <p>
                <strong className="text-navy">Your Responsibility:</strong> We encourage all customers to verify
                contractor credentials, check references, obtain multiple quotes, and review all contracts carefully
                before proceeding with any work.
              </p>
              <p>
                <strong className="text-navy">No Liability:</strong> {CONTACT_INFO.businessName} assumes no liability
                for the work performed by contractors, including workmanship quality, project delays, disputes, or any
                damages arising from contractor-client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to Connect With Local Contractors?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Submit your project details and get matched with independent flooring contractors in your area — completely
            free, no obligation.
          </p>
          <Link
            href="/#quote"
            className="bg-oak hover:bg-oak-light text-navy px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
          >
            Request Callback <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
