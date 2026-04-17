import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/engineered-hardwood-hallway-flooring-toronto.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/20" />

      <div className="relative w-full max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/70 mb-5">
            Serving the GTA Since 2010
          </p>

          <h1 className="font-serif text-white mb-6 leading-[1.15]" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 3.75rem)' }}>
            Toronto&apos;s Trusted<br />
            Flooring Installers
          </h1>

          <p className="text-white/80 text-[1.0625rem] leading-relaxed mb-10 max-w-lg">
            Professional hardwood, laminate, vinyl, tile, and carpet installation throughout Toronto and the GTA. Licensed, insured, and backed by a 5-year workmanship warranty.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-hover text-white font-semibold text-[0.9375rem] px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
