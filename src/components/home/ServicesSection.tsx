import Link from 'next/link';
import { ArrowRight, TreePine, Layers, SquareStack, Grid, Sofa } from 'lucide-react';
import { FLOORING_SERVICES } from '../../constants/services';

const iconMap: Record<string, React.ElementType> = {
  TreePine, Layers, SquareStack, Grid, Sofa,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
          <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">Flooring Services We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From classic hardwood to modern luxury vinyl, our certified installers handle every flooring type with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {FLOORING_SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || TreePine;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-oak/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-oak/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-oak/20 transition-colors">
                  <Icon className="w-6 h-6 text-oak" />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2 group-hover:text-oak transition-colors">{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                <div className="flex items-center text-oak font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}

          <div className="bg-navy rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-oak font-semibold text-sm uppercase tracking-wide mb-3">Not Sure?</p>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Get Expert Advice</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our team will assess your space and recommend the best flooring option for your lifestyle, budget, and aesthetic.
              </p>
            </div>
            <Link href="/contact" className="mt-6 flex items-center gap-2 bg-oak hover:bg-oak-light text-navy px-5 py-2.5 rounded-lg font-bold text-sm transition-colors w-fit">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
