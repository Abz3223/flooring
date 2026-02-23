import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '../../constants/locations';

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Where We Work</p>
          <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4">Service Areas</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We install flooring across the Greater Toronto Area. Select your city to see how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="group bg-navy-light hover:bg-white/10 border border-white/10 hover:border-oak/40 rounded-xl p-5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 bg-oak/20 rounded-lg flex items-center justify-center group-hover:bg-oak/30 transition-colors">
                  <MapPin className="w-4 h-4 text-oak" />
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-oak transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-white text-base mb-1 group-hover:text-oak transition-colors">{loc.name}</h3>
              <p className="text-gray-400 text-xs">{loc.region}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
