import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import AffluentNeighborhoodsSection from '@/components/home/AffluentNeighborhoodsSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import QuoteSection from '@/components/home/QuoteSection';
import FAQSection from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Toronto Flooring Installers - Professional Flooring Contractors | GTA',
  description: 'Professional flooring installers serving Toronto and the GTA. Expert hardwood, laminate, vinyl, tile, and carpet installation. Licensed, insured, and trusted contractors with 15+ years experience.',
  alternates: {
    canonical: 'https://flooringinstallerstoronto.com/',
  },
  openGraph: {
    title: 'Toronto Flooring Installers - Professional Flooring Contractors | GTA',
    description: 'Professional flooring installers serving Toronto and the GTA.',
    url: 'https://flooringinstallerstoronto.com/',
    images: [{ url: '/engineered-hardwood-flooring-installation-toronto.jpg' }],
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
    streetAddress: '123 Bay Street, Suite 100',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    postalCode: 'M5H 2S5',
    addressCountry: 'CA',
  },
  areaServed: 'Toronto, ON and Greater Toronto Area',
  serviceType: 'Flooring Installation',
  priceRange: '$$',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flooringinstallerstoronto.com/' }
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <AffluentNeighborhoodsSection />
      <ServiceAreasSection />
      <QuoteSection />
      <FAQSection />
    </>
  );
}
