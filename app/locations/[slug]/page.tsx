import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { ServiceArea } from '@/types/database';
import { CONTACT_INFO } from '@/constants/contact';
import { FLOORING_SERVICES } from '@/constants/services';
import { PROJECT_IMAGES } from '@/constants/images';
import ServiceCard from '@/components/ServiceCard';
import LeadForm from '@/components/LeadForm';
import NearbyLocations from '@/components/NearbyLocations';
import LocationFAQ from '@/components/LocationFAQ';

const locationSlugs = [
  'toronto',
  'scarborough',
  'north-york',
  'vaughan',
  'markham',
  'mississauga',
  'pickering',
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: area } = await supabase
    .from('service_areas')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (!area) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `Flooring Installers in ${area.name} - Professional Contractors | Toronto GTA`,
    description: `Trusted flooring installers serving ${area.name} and surrounding neighborhoods. Expert hardwood, laminate, vinyl, tile installation. Licensed, insured, 15+ years experience. Request callback.`,
    alternates: {
      canonical: `https://flooringinstallerstoronto.com/locations/${area.slug}`,
    },
    openGraph: {
      title: `Flooring Installers in ${area.name} - Professional Contractors | Toronto GTA`,
      description: `Trusted flooring installers serving ${area.name} and surrounding neighborhoods.`,
      url: `https://flooringinstallerstoronto.com/locations/${area.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;

  const { data: area, error } = await supabase
    .from('service_areas')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !area) {
    notFound();
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Toronto Flooring Installers',
    description: `Professional flooring installation services for ${area.name} and the GTA`,
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
    areaServed: area.name,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flooringinstallerstoronto.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Service Areas',
        item: 'https://flooringinstallerstoronto.com/#service-areas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: area.name,
        item: `https://flooringinstallerstoronto.com/locations/${area.slug}`,
      },
    ],
  };

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

      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6">
            <Link href="/" className="text-oak hover:text-oak-light">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#service-areas" className="text-oak hover:text-oak-light">
              Service Areas
            </Link>
            <span className="mx-2">/</span>
            <span>{area.name}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="w-12 h-12 text-oak" />
              <h1 className="font-heading font-bold">Flooring Installers in {area.name}</h1>
            </div>
            <p className="text-xl text-gray-200 mb-6">
              Trusted local flooring contractors serving {area.name} and surrounding neighborhoods with professional
              installation services
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#quote"
                className="bg-oak hover:bg-oak-light text-navy px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Request Callback
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-6">
                Professional Flooring Installation in {area.name}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Looking for experienced flooring installers in {area.name}? Our network of licensed and insured
                  flooring contractors has been serving homeowners and businesses throughout {area.name} for over 15
                  years. Contractors specialize in hardwood, laminate, vinyl, tile, and carpet installation with a
                  commitment to quality craftsmanship.
                </p>
                <p>
                  As local {area.name} flooring contractors, they understand the unique characteristics of homes in this
                  area — whether you&apos;re renovating a heritage property, updating a modern condo, or installing new
                  flooring in a commercial space.
                </p>
                <p>
                  Our {area.name} contractor network delivers transparent pricing, fast turnaround times, and
                  comprehensive workmanship guarantees. All are fully licensed, insured with $2M liability coverage, and
                  WSIB compliant.
                </p>
              </div>
            </div>
            <figure className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/custom-staircase-renovation-wood-treads-toronto-installers.jpeg"
                alt={`Custom hardwood staircase renovation completed by a flooring contractor serving ${area.name} and the GTA`}
                className="w-full h-72 lg:h-80 object-cover"
              />
              <figcaption className="bg-navy text-white px-4 py-3 text-sm">
                Custom open-riser staircase with white oak treads — a recent project by a contractor in our{' '}
                {area.name}-area network.
              </figcaption>
            </figure>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-oak/10 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-oak mb-2">15+</p>
              <p className="text-navy font-semibold">Years Serving {area.name}</p>
            </div>
            <div className="bg-oak/10 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-oak mb-2">500+</p>
              <p className="text-navy font-semibold">Local Projects Completed</p>
            </div>
            <div className="bg-oak/10 p-6 rounded-lg text-center">
              <p className="text-3xl font-bold text-oak mb-2">200+</p>
              <p className="text-navy font-semibold">GTA Contractors Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
            Our Flooring Services in {area.name}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Complete flooring installation solutions for residential and commercial properties in {area.name}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLOORING_SERVICES.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                slug={service.slug}
                icon={service.icon}
                description={service.shortDesc}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/#services"
              className="inline-flex items-center text-oak hover:text-oak-dark font-semibold"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-navy mb-6">
              Why Choose Our {area.name} Flooring Contractors?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Local Expertise</h3>
                <p className="text-gray-700">
                  As {area.name}-based flooring installers, we&apos;re familiar with local building codes, climate
                  considerations, and architectural styles common in the area.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Quality Materials</h3>
                <p className="text-gray-700">
                  We use only premium flooring materials from trusted manufacturers to ensure lasting beauty and
                  durability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Professional Installation</h3>
                <p className="text-gray-700">
                  Our experienced installers deliver exceptional craftsmanship with attention to detail in every project.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Quality Guarantee</h3>
                <p className="text-gray-700">
                  Every installation comes with our comprehensive 5-year warranty, demonstrating our confidence in our
                  craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Real Completed Work</p>
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">Projects Completed by GTA Contractors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Actual installations carried out by independent flooring contractors serving {area.name} and the
              surrounding GTA.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
            {PROJECT_IMAGES.slice(0, 3).map((project, index) => (
              <figure
                key={index}
                className="group overflow-hidden rounded-xl shadow-md bg-white border border-gray-100"
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
                  <p className="text-navy font-semibold text-sm leading-snug mb-1.5">{project.caption}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {project.location}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PROJECT_IMAGES.slice(3).map((project, index) => (
              <figure
                key={index}
                className="group overflow-hidden rounded-xl shadow-md bg-white border border-gray-100"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
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
                  <p className="text-navy font-semibold text-sm leading-snug mb-1.5">{project.caption}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {project.location}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
              Request Your Callback in {area.name}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Get a detailed estimate for your flooring project. Serving all neighborhoods in {area.name}
            </p>
            <LeadForm sourcePage={`location-${area.slug}`} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Upgrade Your {area.name} Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact your local {area.name} flooring installers today for a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="bg-oak hover:bg-oak-light text-navy px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call {CONTACT_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-navy px-8 py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Contact Us Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LocationFAQ locationName={area.name} />

      <NearbyLocations currentLocation={area.slug} />
    </div>
  );
}
