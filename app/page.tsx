import type { Metadata } from 'next'
import { getLocalBusinessSchema } from '@/src/lib/schema'
import HeroSection from '@/src/components/home/HeroSection'
import TrustBar from '@/src/components/ui/TrustBar'
import HomeQuoteSection from '@/src/components/home/HomeQuoteSection'
import ServicesSection from '@/src/components/home/ServicesSection'
import WhyChooseUsSection from '@/src/components/home/WhyChooseUsSection'
import ReviewsSection from '@/src/components/home/ReviewsSection'
import ProjectsSection from '@/src/components/home/ProjectsSection'
import ServiceAreasSection from '@/src/components/home/ServiceAreasSection'
import CTABanner from '@/src/components/ui/CTABanner'
import CTASection from '@/src/components/ui/CTASection'
import MobileStickyCTA from '@/src/components/ui/MobileStickyCTA'

export const metadata: Metadata = {
  title: { absolute: 'Toronto Flooring Installers | Samples Brought to the Measure' },
  description:
    'Five flooring installers covering Toronto and the GTA since 2014. We bring samples to the free measure and send a written quote the next day. Call (647) 905-0050.',
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
      <HomeQuoteSection />
      <ServicesSection />
      <CTABanner
        headline="Free On-Site Estimates Across the GTA"
        subtext="Same crew, same standard, wherever you are in the Greater Toronto Area."
      />
      <WhyChooseUsSection />
      <ReviewsSection />
      <ProjectsSection />
      <ServiceAreasSection />
      <CTABanner
        headline="Ready to Start Your Flooring Project?"
        subtext="Talk to a real installer, written quote within 24 hours of the site visit."
      />
      <CTASection />
      <MobileStickyCTA />
    </>
  )
}
