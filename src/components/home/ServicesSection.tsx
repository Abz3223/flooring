import ServiceCard from '../ServiceCard';
import { FLOORING_SERVICES } from '../../constants/services';

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-heading font-bold text-navy mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Professional Flooring Installation Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Expert flooring installers in Toronto offering complete installation services for residential and commercial properties across the GTA
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {FLOORING_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              slug={service.slug}
              icon={service.icon}
              description={service.shortDesc}
              image={service.image}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
