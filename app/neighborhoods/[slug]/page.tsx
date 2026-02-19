import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, Home, TrendingUp, Award } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { AffluentNeighborhood } from '@/types/database';
import { CONTACT_INFO } from '@/constants/contact';
import { FLOORING_SERVICES } from '@/constants/services';
import { PROJECT_IMAGES } from '@/constants/images';
import ServiceCard from '@/components/ServiceCard';
import LeadForm from '@/components/LeadForm';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { data } = await supabase
    .from('affluent_neighborhoods')
    .select('slug');

  if (!data) return [];
  return data.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: neighborhood } = await supabase
    .from('affluent_neighborhoods')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (!neighborhood) {
    return { title: 'Neighborhood Not Found' };
  }

  return {
    title:
      neighborhood.meta_title ||
      `Luxury Flooring Installers ${neighborhood.name} - Premium Contractors | Toronto`,
    description:
      neighborhood.meta_description ||
      `Expert luxury flooring installation in ${neighborhood.name}. Specializing in premium hardwood, custom materials, and high-end renovations. Licensed, insured, 15+ years experience.`,
    alternates: {
      canonical: `https://flooringinstallerstoronto.com/neighborhoods/${neighborhood.slug}`,
    },
    openGraph: {
      title:
        neighborhood.meta_title ||
        `Luxury Flooring Installers ${neighborhood.name} - Premium Contractors | Toronto`,
      description:
        neighborhood.meta_description ||
        `Expert luxury flooring installation in ${neighborhood.name}.`,
      url: `https://flooringinstallerstoronto.com/neighborhoods/${neighborhood.slug}`,
    },
  };
}

export default async function AffluentNeighborhoodPage({ params }: Props) {
  const { slug } = await params;

  const { data: neighborhood, error } = await supabase
    .from('affluent_neighborhoods')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !neighborhood) {
    notFound();
  }

  const formattedValue = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(neighborhood.average_home_value);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Toronto Flooring Installers',
    description: `Premium flooring installation services for ${neighborhood.name}`,
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
    areaServed: neighborhood.name,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flooringinstallerstoronto.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Affluent Neighborhoods',
        item: 'https://flooringinstallerstoronto.com/#neighborhoods',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: neighborhood.name,
        item: `https://flooringinstallerstoronto.com/neighborhoods/${neighborhood.slug}`,
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

      <section className="bg-navy text-white py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4">
          <nav className="text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6">
            <Link href="/" className="text-oak hover:text-oak-light">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#neighborhoods" className="text-oak hover:text-oak-light">
              Neighborhoods
            </Link>
            <span className="mx-2">/</span>
            <span>{neighborhood.name}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-5 md:mb-6">
              <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-oak flex-shrink-0" />
              <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Luxury Flooring Installers in {neighborhood.name}
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-7 md:mb-8">
              Premier flooring contractors serving {neighborhood.name}&apos;s most distinguished homes
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#quote"
                className="bg-oak hover:bg-oak-light text-navy px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center min-h-[44px]"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center min-h-[44px]"
              >
                <Phone className="mr-2 w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-10 sm:mb-12 md:mb-14">
              <div className="bg-background p-6 sm:p-7 md:p-8 rounded-lg text-center">
                <TrendingUp className="w-12 h-12 sm:w-14 sm:h-14 text-oak mx-auto mb-3 sm:mb-4" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2">{formattedValue}</p>
                <p className="text-sm sm:text-base text-gray-600">Average Home Value</p>
              </div>
              <div className="bg-background p-6 sm:p-7 md:p-8 rounded-lg text-center">
                <Award className="w-12 h-12 sm:w-14 sm:h-14 text-oak mx-auto mb-3 sm:mb-4" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2">15+ Years</p>
                <p className="text-sm sm:text-base text-gray-600">Serving {neighborhood.name}</p>
              </div>
              <div className="bg-background p-6 sm:p-7 md:p-8 rounded-lg text-center">
                <Home className="w-12 h-12 sm:w-14 sm:h-14 text-oak mx-auto mb-3 sm:mb-4" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-2">100+</p>
                <p className="text-sm sm:text-base text-gray-600">Luxury Installations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4 sm:mb-5 md:mb-6">
                  Premium Flooring Services in {neighborhood.name}
                </h2>
                <div className="text-base sm:text-lg text-gray-700 space-y-4 sm:space-y-5">
                  <p>{neighborhood.description}</p>

                  {neighborhood.content && (
                    <div dangerouslySetInnerHTML={{ __html: neighborhood.content }} />
                  )}

                  <p>
                    Our contractor network specializes in working with {neighborhood.name} homeowners who demand
                    excellence in every detail. Homes in this prestigious neighbourhood require the finest materials,
                    expert craftsmanship, and white-glove service from consultation through completion.
                  </p>

                  <p>
                    Whether you&apos;re renovating a heritage property, updating a modern estate, or building a custom
                    home, contractors in our network provide comprehensive flooring solutions including premium hardwood,
                    wide plank European oak, exotic species, custom inlays, and specialized finishes that complement{' '}
                    {neighborhood.name}&apos;s architectural elegance.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <figure className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/custom-staircase-renovation-wood-treads-toronto-installers.jpeg"
                    alt={`Custom open-riser staircase renovation with solid white oak wood treads and ornamental iron balusters — luxury flooring contractor project serving ${neighborhood.name}`}
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <figcaption className="bg-navy text-white px-4 py-3 text-sm leading-snug">
                    Custom open-riser staircase renovation — solid white oak treads with ornamental iron balusters,
                    completed by a contractor in our {neighborhood.name}-area network.
                  </figcaption>
                </figure>
                <figure className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/toronto-bathroom-renovation-tile-flooring-toronto..jpg"
                    alt={`Luxury bathroom tile flooring renovation with large-format marble porcelain and custom double vanity — premium installation serving ${neighborhood.name}`}
                    className="w-full h-52 sm:h-60 object-cover"
                  />
                  <figcaption className="bg-gray-800 text-white px-4 py-3 text-sm leading-snug">
                    Luxury bathroom renovation — large-format marble porcelain tile with custom double vanity, a project
                    type common in {neighborhood.name} homes.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {neighborhood.landmarks && neighborhood.landmarks.length > 0 && (
        <section className="py-12 sm:py-14 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-6 sm:mb-7 md:mb-8">
                Serving All of {neighborhood.name}
              </h2>
              <div className="bg-white rounded-lg p-6 sm:p-7 md:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-4 sm:mb-5">
                  Notable Landmarks &amp; Areas We Serve:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {neighborhood.landmarks.map((landmark: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-oak flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700">{landmark}</span>
                    </div>
                  ))}
                </div>
                {neighborhood.postal_codes && neighborhood.postal_codes.length > 0 && (
                  <div className="mt-6 sm:mt-7 pt-6 sm:pt-7 border-t border-gray-200">
                    <p className="text-sm sm:text-base text-gray-600">
                      <strong className="text-navy">Postal Codes Served:</strong>{' '}
                      {neighborhood.postal_codes.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Portfolio</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-3">
              Recent Projects by Contractors in Our Network
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Actual installations showcasing the quality of work delivered to homeowners in {neighborhood.name} and
              surrounding prestige neighbourhoods.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {PROJECT_IMAGES.slice(0, 3).map((project, index) => (
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
                  <p className="text-navy font-semibold text-sm leading-snug mb-1.5">{project.caption}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {project.location}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {PROJECT_IMAGES.slice(3).map((project, index) => (
              <figure
                key={index}
                className="group overflow-hidden rounded-xl shadow-md bg-gray-50 border border-gray-100"
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

      <section className="py-12 sm:py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4 sm:mb-5 md:mb-6 text-center">
            Premium Flooring Options for {neighborhood.name} Homes
          </h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-11 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Luxury flooring solutions designed for discerning homeowners in Toronto&apos;s most prestigious neighborhood
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
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

          <div className="mt-8 sm:mt-9 md:mt-10 text-center">
            <Link
              href="/#services"
              className="inline-flex items-center text-oak hover:text-oak-dark font-semibold text-sm sm:text-base"
            >
              View All Premium Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 md:py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6 sm:mb-7 md:mb-8">
              Why {neighborhood.name} Homeowners Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
              <div className="bg-navy-light p-5 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Luxury Materials Expertise</h3>
                <p className="text-sm sm:text-base text-gray-200">
                  Specialized knowledge in premium hardwoods, exotic species, wide planks, and custom finishes that
                  complement high-end architecture.
                </p>
              </div>
              <div className="bg-navy-light p-5 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Heritage Home Experience</h3>
                <p className="text-sm sm:text-base text-gray-200">
                  Expert restoration and preservation techniques for {neighborhood.name}&apos;s historic properties and
                  architectural treasures.
                </p>
              </div>
              <div className="bg-navy-light p-5 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">White-Glove Service</h3>
                <p className="text-sm sm:text-base text-gray-200">
                  Concierge-level project management, meticulous attention to detail, and respect for your home and
                  privacy throughout the process.
                </p>
              </div>
              <div className="bg-navy-light p-5 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Custom Solutions</h3>
                <p className="text-sm sm:text-base text-gray-200">
                  Bespoke flooring designs including custom inlays, borders, and patterns tailored to your home&apos;s
                  unique character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-12 sm:py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-3 sm:mb-4 text-center">
              Request Your Complimentary {neighborhood.name} Consultation
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-7 md:mb-8 px-4">
              Schedule an in-home consultation with our luxury flooring specialists
            </p>
            <LeadForm sourcePage={`neighborhood-${neighborhood.slug}`} />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4 sm:mb-5 md:mb-6">
            Transform Your {neighborhood.name} Home
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-4">
            Connect with Toronto&apos;s premier luxury flooring contractors serving {neighborhood.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="bg-oak hover:bg-oak-light text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-colors inline-flex items-center justify-center min-h-[48px] text-sm sm:text-base"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call {CONTACT_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-navy hover:bg-navy hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center min-h-[48px] text-sm sm:text-base"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
