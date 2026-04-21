import type { Metadata } from 'next'
import ContactForm from '@/src/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Flooring Estimate',
  description:
    'Request a free flooring estimate from Toronto Flooring Installers. Serving Toronto, Scarborough, North York, Vaughan, Markham, Mississauga, and Pickering. Call (647) 905-0050.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-charcoal pt-32 pb-16 px-4">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-content">
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold mb-3">
              Free Estimates
            </p>
            <h1 className="font-serif text-stone-50 leading-tight mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
              Get a Free Flooring Estimate
            </h1>
            <p className="text-stone-400 text-[1.0625rem] leading-relaxed">
              Fill out the form and we&apos;ll get back to you within a few hours. Or call{' '}
              <a href="tel:+16479050050" className="text-gold hover:text-gold-light transition-colors font-medium">
                (647) 905-0050
              </a>{' '}
              to talk directly.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}
