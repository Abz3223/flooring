import type { Metadata } from 'next'
import { getLocalBusinessSchema } from '@/src/lib/schema'
import HeroSection from '@/src/components/home/HeroSection'
import TrustBar from '@/src/components/ui/TrustBar'
import ServicesSection from '@/src/components/home/ServicesSection'
import WhyChooseUsSection from '@/src/components/home/WhyChooseUsSection'
import ProjectsSection from '@/src/components/home/ProjectsSection'
import ServiceAreasSection from '@/src/components/home/ServiceAreasSection'
import CTASection from '@/src/components/ui/CTASection'

export const metadata: Metadata = {
  title: 'Toronto Flooring Installers | Hardwood, Laminate, Vinyl, Tile & Carpet',
  description:
    'Trusted flooring installation in Toronto and the GTA since 2010. Hardwood, laminate, vinyl/LVP, tile, and carpet. Free estimates. Licensed & insured. Call (647) 905-0050.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const localBusinessSchema = getLocalBusinessSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <ServiceAreasSection />
      <CTASection />
    </>
  )
}
