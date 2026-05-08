import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FLOORING_SERVICES } from '../../constants/services';

const serviceImages: Record<string, { src: string; objectPosition?: string }> = {
  'hardwood-flooring-installation': {
    src: '/hardwood-flooring-after-toronto.jpeg',
    objectPosition: 'center',
  },
  'laminate-flooring-installation': {
    src: '/engineered-hardwood-flooring-installation-toronto.jpg',
    objectPosition: 'center',
  },
  'vinyl-flooring-installation': {
    src: '/installers-commercial-wood-look-flooring-installation-toronto.jpeg',
    objectPosition: 'center',
  },
  'tile-flooring-installation': {
    src: '/toronto-bathroom-renovation-tile-flooring-toronto..jpg',
    objectPosition: 'center',
  },
  'carpet-installation': {
    src: '/flooring-residential-staircase-carpet-installation-toronto.jpeg',
    objectPosition: 'top',
  },
};

// Photo-overlay service cards: full-bleed photo, dark charcoal overlay,
// centered title + small "Learn more" pill. Mirrors restorationprofessionals.ca
// pattern but keeps flooring's gold accent color and rounded-xl corners.
export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto text-center mb-14">
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-h2 text-charcoal mb-4">
            Flooring Services <span className="text-gold">We Offer</span>
          </h2>
          <p className="text-stone-500 text-body-lg leading-relaxed">
            From classic hardwood to waterproof luxury vinyl, our installers handle every flooring type with the same level of care on every job.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FLOORING_SERVICES.map((service) => {
            const img = serviceImages[service.slug];
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-xl block"
                style={{ aspectRatio: '4/3' }}
              >
                {img ? (
                  <img
                    src={img.src}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: img.objectPosition }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-charcoal" />
                )}
                <div className="absolute inset-0 bg-charcoal/65 group-hover:bg-charcoal/55 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                  <h3 className="font-serif text-white text-[1.125rem] sm:text-[1.375rem] leading-tight mb-3 drop-shadow">
                    {service.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 bg-gold group-hover:bg-gold-hover text-white text-[0.75rem] font-semibold px-4 py-1.5 rounded-full tracking-wide transition-colors">
                    Learn more <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                </div>
              </Link>
            );
          })}

          <div className="flex flex-col justify-between bg-charcoal rounded-xl p-6 sm:p-7 col-span-2 sm:col-span-2 lg:col-span-1">
            <div>
              <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold mb-3">
                Not Sure?
              </p>
              <h3 className="font-serif text-white text-[1.25rem] leading-snug mb-3">
                Get Expert Advice Before You Decide
              </h3>
              <p className="text-stone-400 text-[0.875rem] leading-relaxed">
                Our team will assess your space and recommend the best flooring option for your lifestyle, budget, and subfloor conditions.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-[0.8125rem] font-semibold px-5 py-2.5 rounded-lg transition-colors w-fit"
            >
              Book a Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
