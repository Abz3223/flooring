import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/contact';
import { PROJECT_IMAGES } from '@/constants/images';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: `Contact ${CONTACT_INFO.businessName} - Connect With Contractors | Toronto`,
  description:
    'Connect with independent flooring contractors in Toronto and the GTA. Submit your project details and get matched with local contractors for free quotes.',
  alternates: {
    canonical: 'https://flooringinstallerstoronto.com/contact',
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
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://flooringinstallerstoronto.com/contact' },
  ],
};

export default function ContactPage() {
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
          <h1 className="font-heading font-bold mb-4 text-center">Contact {CONTACT_INFO.businessName}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">
            Connect with independent flooring contractors in your area
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-2">Why Contact Us</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy mb-3">
              See the Work Our Contractors Deliver
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              When you submit a request, you&apos;re connected with independent contractors who carry out premium work
              like this across the GTA.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PROJECT_IMAGES.slice(0, 3).map((project, index) => (
              <figure key={index} className="group overflow-hidden rounded-xl shadow-md bg-white">
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
                <figcaption className="p-3">
                  <p className="text-navy text-xs font-semibold leading-snug mb-1">{project.caption}</p>
                  <span className="flex items-center text-gray-500 text-xs gap-1">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {project.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-oak/10 border-l-2 border-oak p-3 mb-6 rounded">
                <p className="text-xs text-gray-600 leading-relaxed">
                  <strong className="text-navy">Please Note:</strong> {CONTACT_INFO.businessName} is a lead generation
                  platform. We connect you with independent contractors who will contact you directly. We do not provide
                  flooring services.
                </p>
              </div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">Connect With Contractors</h2>
              <LeadForm sourcePage="contact" />
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-oak flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Phone</h3>
                    <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-gray-700 hover:text-oak">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-oak flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-700 hover:text-oak break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-oak flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Address</h3>
                    <p className="text-gray-700">
                      {CONTACT_INFO.address.street}
                      <br />
                      {CONTACT_INFO.address.city}, {CONTACT_INFO.address.province}
                      <br />
                      {CONTACT_INFO.address.postalCode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-oak/10 rounded-lg">
                <h3 className="font-semibold text-navy mb-2">Service Area</h3>
                <p className="text-gray-700 text-sm mb-3">
                  We connect you with contractors serving Toronto and the entire Greater Toronto Area, including
                  Scarborough, North York, Vaughan, Markham, Mississauga, and Pickering.
                </p>
              </div>
              <div className="mt-6 p-6 bg-background rounded-lg border-2 border-gray-200">
                <h3 className="font-semibold text-navy mb-2 text-sm">Important</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All contractors are independent businesses. Verify licensing, insurance, and references before hiring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
