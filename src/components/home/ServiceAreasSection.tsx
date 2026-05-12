import Link from 'next/link';
import { LOCATIONS } from '../../constants/locations';

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-20 bg-surface">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto text-center">
          <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold mb-3">
            Where We Work
          </p>
          <h2 className="font-serif text-h2 text-charcoal mb-4">
            Serving the Greater Toronto Area
          </h2>
          <p className="text-stone-500 text-body-lg leading-relaxed mb-10">
            We install flooring across Toronto and surrounding communities. Same professional crew, same quality, wherever you are in the GTA.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="inline-flex items-center bg-white border border-stone-200 hover:border-gold hover:text-gold text-charcoal font-sans font-medium text-[0.875rem] px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-sm"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
