import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';

// Centered, bold, conversion-focused hero, pattern adapted from
// restorationprofessionals.ca. Mobile-first: stacked full-width CTAs
// on small screens, side-by-side on sm+. Min 52px button height meets
// touch-target accessibility guidelines (≥44px).
export default function HeroSection() {
  return (
    <section className="relative min-h-[68vh] md:min-h-[72vh] flex items-center justify-center overflow-hidden pt-16">
      {/* LCP element. Must stay a real <img> via next/image, NOT a CSS
          background: a background-image is invisible to the browser's preload
          scanner, so it is only discovered after CSS parses. That was measured
          at 11.9s LCP on mobile (Clarity, Sept 2026). priority => preloaded. */}
      <Image
        src="/engineered-hardwood-hallway-flooring-toronto.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-charcoal/65" />

      <div className="relative w-full max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-[0.6875rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-gold-light mb-5">
            Est. 2010 &middot; Greater Toronto Area
          </p>

          <h1 className="font-serif font-extrabold text-white tracking-tight mb-6 leading-[1.05] text-[2.25rem] sm:text-5xl lg:text-6xl">
            Toronto&apos;s Trusted <br className="hidden sm:block" />
            Flooring <span className="text-gold-light">Installers</span>
          </h1>

          <p className="text-white/85 text-base sm:text-lg md:text-xl leading-relaxed mb-9 max-w-2xl mx-auto">
            {/* The first sentences after the H1 are what AI answers extract as
                "what makes this business different". Every fact here is already
                published elsewhere on the site (shop address, free on-site
                estimate, written itemized quote within 24 hours). Do not add a
                price guarantee here without the owner confirming it is policy. */}
            Hardwood, laminate, vinyl, tile and carpet, installed from our shop on McCowan Rd in Scarborough.
            Free on-site estimate, and a written, itemized quote within 24&nbsp;hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-hover text-white font-sans font-bold text-base px-8 py-4 rounded-lg transition-colors duration-200 shadow-2xl min-h-[52px]"
            >
              Book a Free Estimate
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <a
              href="tel:+16479050050"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/60 hover:bg-white hover:text-charcoal text-white font-sans font-bold text-base px-7 py-4 rounded-lg transition-colors duration-200 min-h-[52px]"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call (647) 905-0050
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-7">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-gold-light" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-white/85 font-semibold text-xs sm:text-sm">
              Rated 5.0 Stars on Google
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
