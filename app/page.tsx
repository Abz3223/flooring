import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import QuoteSection from '@/components/home/QuoteSection';
import FAQSection from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Flooring Installers Toronto | Hardwood, Vinyl, Tile & Carpet | GTA',
  description: 'Toronto\'s #1 flooring installation service. Expert hardwood, LVP, tile, laminate & carpet installation across the GTA. Licensed, insured, 5-year warranty. Free estimates.',
  alternates: {
    canonical: 'https://flooringinstallerstoronto.com',
  },
};

export default function HomePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Flooring Installers Toronto',
    url: 'https://flooringinstallerstoronto.com',
    telephone: '+16479050050',
    email: 'info@flooringinstallerstoronto.com',
    description: 'Professional flooring installation across the GTA. Hardwood, vinyl, tile, laminate & carpet.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    areaServed: ['Toronto', 'Scarborough', 'North York', 'Vaughan', 'Markham', 'Mississauga', 'Pickering'],
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <ServiceAreasSection />
      <QuoteSection />
      <FAQSection />
    </>
  );
}
