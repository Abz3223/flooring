import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Phone, ArrowRight, MapPin } from 'lucide-react';
import { FLOORING_SERVICES } from '@/constants/services';
import { CONTACT_INFO } from '@/constants/contact';
import { PROJECT_IMAGES } from '@/constants/images';
import LeadForm from '@/components/LeadForm';
import RelatedServices from '@/components/RelatedServices';
import ServiceFAQ from '@/components/ServiceFAQ';

const SERVICE_CATEGORY_MAP: Record<string, string> = {
  hardwood: 'Hardwood Flooring',
  tile: 'Tile Flooring',
  carpet: 'Carpet Installation',
  vinyl: 'Vinyl Flooring',
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return FLOORING_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = FLOORING_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} Installation Toronto - Professional ${service.name} Installers | GTA`,
    description: `Expert ${service.name.toLowerCase()} installation in Toronto and the GTA. ${service.description} Licensed contractors, 5-year warranty. Request callback.`,
    alternates: {
      canonical: `https://flooringinstallerstoronto.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} Installation Toronto - Professional ${service.name} Installers | GTA`,
      description: `Expert ${service.name.toLowerCase()} installation in Toronto and the GTA. ${service.description}`,
      url: `https://flooringinstallerstoronto.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = FLOORING_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Toronto Flooring Installers',
    },
    areaServed: 'Toronto, ON and Greater Toronto Area',
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
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flooringinstallerstoronto.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://flooringinstallerstoronto.com/#services' },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `https://flooringinstallerstoronto.com/services/${service.slug}`,
      },
    ],
  };

  const serviceFAQs = [
    {
      question: `Do you remove old flooring before installing ${service.name.toLowerCase()}?`,
      answer: `Yes, we provide complete flooring removal services as part of our installation package. This includes safely removing and disposing of your existing flooring, preparing the subfloor, and ensuring it's level and ready for new ${service.name.toLowerCase()} installation.`,
    },
    {
      question: `Is ${service.name.toLowerCase()} suitable for all rooms in my Toronto home?`,
      answer:
        service.id === 'hardwood'
          ? 'Hardwood flooring works beautifully in most rooms, including living rooms, bedrooms, and dining areas. However, we typically recommend against installing it in bathrooms or laundry rooms due to moisture concerns. We can suggest moisture-resistant alternatives for these spaces.'
          : service.id === 'vinyl'
          ? 'Yes! Vinyl flooring is 100% waterproof and suitable for any room in your home, including kitchens, bathrooms, basements, and laundry rooms. Its moisture resistance makes it ideal for Toronto homes in all climates.'
          : `${service.name} is suitable for most residential spaces. We'll assess your specific rooms during the consultation and recommend the best flooring solution based on traffic, moisture levels, and your lifestyle needs.`,
    },
    {
      question: `What warranty do you offer on ${service.name.toLowerCase()}?`,
      answer: `We provide a comprehensive 5-year warranty on all installation workmanship. Additionally, the ${service.name.toLowerCase()} materials come with manufacturer warranties ranging from 10 to 25 years, depending on the product selected. We'll explain all warranty details before you commit.`,
    },
    {
      question: `Can you match ${service.name.toLowerCase()} to my existing decor?`,
      answer: `Absolutely! We offer a wide selection of ${service.name.toLowerCase()} styles, colors, and finishes. Our team will bring samples to your home during the consultation so you can see how different options look with your existing furniture, paint colors, and lighting.`,
    },
  ];

  const relatedProjects = PROJECT_IMAGES.filter(
    (p) => p.category === SERVICE_CATEGORY_MAP[service.id]
  );

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative bg-navy text-white py-12 sm:py-14 md:py-16 overflow-hidden">
        {service.bannerImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${service.bannerImage})` }}
          >
            <div className="absolute inset-0 bg-navy/85"></div>
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6">
            <Link href="/" className="text-oak hover:text-oak-light">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="text-oak hover:text-oak-light">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span>{service.name}</span>
          </nav>

          <div className="max-w-4xl">
            <h1 className="font-heading font-bold mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {service.name} Installers in Toronto
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-5 sm:mb-6">{service.description}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#quote"
                className="bg-oak hover:bg-oak-light text-navy px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center min-h-[44px]"
              >
                Request Callback
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-navy mb-4 sm:mb-5 md:mb-6">
                Why Choose {service.name}?
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-oak flex-shrink-0 mr-2.5 sm:mr-3 mt-0.5 sm:mt-1" />
                    <p className="text-sm sm:text-base text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-navy mb-4 sm:mb-5 md:mb-6">
                Our Installation Process
              </h2>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-oak rounded-full flex items-center justify-center text-navy font-bold mr-3 sm:mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-navy mb-1.5 sm:mb-2">
                      Free Consultation
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      We visit your property to assess the project, take measurements, and discuss your preferences and
                      budget.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-oak rounded-full flex items-center justify-center text-navy font-bold mr-3 sm:mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-navy mb-1.5 sm:mb-2">Detailed Quote</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Receive a transparent, itemized quote with no hidden fees. We explain all costs and answer your
                      questions.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-oak rounded-full flex items-center justify-center text-navy font-bold mr-3 sm:mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-navy mb-1.5 sm:mb-2">
                      Professional Installation
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Our licensed installers complete your project efficiently with minimal disruption to your daily
                      routine.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-oak rounded-full flex items-center justify-center text-navy font-bold mr-3 sm:mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-navy mb-1.5 sm:mb-2">
                      Quality Inspection
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      We walk through the completed project with you to ensure everything meets our high standards and
                      your expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {SERVICE_CATEGORY_MAP[service.id] && relatedProjects.length > 0 && (
        <section className="py-12 sm:py-14 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Real Completed Work</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-3">
                {service.name} Projects by Our Contractors
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Actual installations completed by independent contractors in our Toronto and GTA network.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedProjects.map((project, index) => (
                <figure key={index} className="group overflow-hidden rounded-xl shadow-md bg-white border border-gray-100">
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
                    <span className="flex items-center text-gray-500 text-xs gap-1">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {project.location}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-14 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-navy mb-6 text-center">
              Serving Toronto &amp; the GTA
            </h2>
            <p className="text-base sm:text-lg text-gray-700 text-center mb-6 sm:mb-7 md:mb-8 px-4">
              Our expert {service.name.toLowerCase()} contractors provide professional installation services throughout
              the Greater Toronto Area, including Toronto, Scarborough, North York, Vaughan, Markham, Mississauga, and
              Pickering.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center">
              <Link
                href="/locations/toronto"
                className="px-3 sm:px-4 py-2 bg-white hover:bg-oak/10 border border-oak rounded-lg transition-colors text-sm sm:text-base min-h-[40px] inline-flex items-center"
              >
                Toronto
              </Link>
              <Link
                href="/locations/scarborough"
                className="px-4 py-2 bg-white hover:bg-oak/10 border border-oak rounded-lg transition-colors"
              >
                Scarborough
              </Link>
              <Link
                href="/locations/north-york"
                className="px-4 py-2 bg-white hover:bg-oak/10 border border-oak rounded-lg transition-colors"
              >
                North York
              </Link>
              <Link
                href="/locations/vaughan"
                className="px-4 py-2 bg-white hover:bg-oak/10 border border-oak rounded-lg transition-colors"
              >
                Vaughan
              </Link>
              <Link
                href="/locations/markham"
                className="px-4 py-2 bg-white hover:bg-oak/10 border border-oak rounded-lg transition-colors"
              >
                Markham
              </Link>
              <Link
                href="/locations/mississauga"
                className="px-4 py-2 bg-white hover:bg-oak/10 border border-oak rounded-lg transition-colors"
              >
                Mississauga
              </Link>
              <Link
                href="/locations/pickering"
                className="px-4 py-2 bg-white hover:bg-oak/10 border border-oak rounded-lg transition-colors"
              >
                Pickering
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-navy mb-3 sm:mb-4 text-center">
              Request Your {service.name} Callback
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-7 md:mb-8 px-4">
              Get a detailed estimate for your {service.name.toLowerCase()} project in Toronto
            </p>
            <LeadForm sourcePage={`service-${service.id}`} />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 md:py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-3 sm:mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-4">
            Contact Toronto&apos;s trusted {service.name.toLowerCase()} installers today for a free consultation
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
              className="bg-transparent border-2 border-white hover:bg-white hover:text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all inline-flex items-center justify-center min-h-[48px] text-sm sm:text-base"
            >
              Contact Us Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <ServiceFAQ serviceName={service.name} faqs={serviceFAQs} />

      <RelatedServices currentServiceId={service.id} />
    </div>
  );
}
