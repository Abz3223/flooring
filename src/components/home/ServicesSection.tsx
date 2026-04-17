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

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto text-center mb-14">
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-h2 text-charcoal mb-4">
            Flooring Services We Offer
          </h2>
          <p className="text-stone-500 text-body-lg leading-relaxed">
            From classic hardwood to waterproof luxury vinyl, our installers handle every flooring type with the same level of care on every job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FLOORING_SERVICES.map((service) => {
            const img = serviceImages[service.slug];
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  {img && (
                    <img
                      src={img.src}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: img.objectPosition }}
                    />
                  )}
                  {!img && (
                    <div className="w-full h-full bg-stone-100 flex items-center justify-center">
                      <span className="text-stone-300 text-sm">Photo coming soon</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-[1.125rem] text-charcoal mb-2 leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-stone-500 text-[0.875rem] leading-relaxed flex-1 mb-4">
                    {service.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-gold text-[0.8125rem] font-semibold group-hover:gap-2.5 transition-all duration-200">
                    Learn more <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                </div>
              </Link>
            );
          })}

          <div className="flex flex-col justify-between bg-charcoal rounded-xl p-6 sm:p-7">
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
