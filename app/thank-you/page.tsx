import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CircleCheck as CheckCircle, Clock, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You | Request Received',
  description: 'Your flooring estimate request has been received. Toronto Flooring Installers will be in touch within 2–4 hours during business hours.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
}

const nextSteps = [
  {
    icon: Clock,
    heading: 'We respond fast',
    body: 'Expect a call or email within 2–4 hours during business hours (Mon–Fri 8am–7pm, Sat 9am–5pm).',
  },
  {
    icon: CheckCircle,
    heading: 'Free on-site estimate',
    body: "We'll schedule a time to measure your space and walk through the project — no cost, no obligation.",
  },
  {
    icon: Star,
    heading: 'Itemized quote',
    body: 'You receive a clear, written quote with no hidden fees before any work begins.',
  },
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl w-full text-center">

          {/* Check mark */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gold-muted rounded-full flex items-center justify-center shadow-card">
              <CheckCircle className="w-10 h-10 text-gold" strokeWidth={1.75} />
            </div>
          </div>

          <h1 className="font-serif font-extrabold text-charcoal text-[clamp(2rem,5vw,3rem)] leading-tight mb-4">
            Request Received
          </h1>
          <p className="text-stone-500 text-[1.0625rem] leading-relaxed max-w-lg mx-auto mb-10">
            Thank you for reaching out to Toronto Flooring Installers. We&apos;ve received your estimate request and will be in touch shortly.
          </p>

          {/* Call CTA */}
          <a
            href="tel:+16479050050"
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-hover text-white font-bold px-8 py-4 rounded-xl transition-colors text-[0.9375rem] shadow-sm mb-4"
          >
            <Phone className="w-4 h-4" strokeWidth={2.5} />
            Call (647) 905-0050
          </a>
          <p className="text-stone-400 text-[0.8125rem]">Prefer not to wait? Call or text us directly.</p>
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-white border-t border-stone-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-charcoal text-[1.375rem] text-center mb-10">
            What happens next
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {nextSteps.map(({ icon: Icon, heading, body }) => (
              <div key={heading} className="bg-surface rounded-2xl p-6 border border-stone-200">
                <div className="w-10 h-10 bg-gold-muted rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif font-bold text-charcoal text-[0.9375rem] mb-2">{heading}</h3>
                <p className="text-stone-500 text-[0.8125rem] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="bg-surface border-t border-stone-200 py-8 px-4 text-center">
        <p className="text-stone-400 text-[0.8125rem] mb-3">In the meantime, explore our services</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: 'Hardwood Flooring', href: '/services/hardwood-flooring-installation' },
            { label: 'Vinyl / LVP', href: '/services/vinyl-flooring-installation' },
            { label: 'Laminate', href: '/services/laminate-flooring-installation' },
            { label: 'Back to Home', href: '/' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gold hover:text-gold-hover text-[0.875rem] font-medium underline underline-offset-2 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
