import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FLOORING_SERVICES } from '../constants/services';

interface RelatedServicesProps {
  currentServiceId: string;
  maxItems?: number;
}

export default function RelatedServices({ currentServiceId, maxItems = 3 }: RelatedServicesProps) {
  const relatedServices = FLOORING_SERVICES.filter(
    service => service.id !== currentServiceId
  ).slice(0, maxItems);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold text-navy mb-6">
          Related Flooring Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map(service => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-white hover:bg-oak/5 border-2 border-gray-200 hover:border-oak rounded-lg p-6 transition-all group"
            >
              <h3 className="text-lg font-heading font-semibold text-navy mb-2 group-hover:text-oak transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
              <div className="flex items-center justify-end">
                <ArrowRight className="w-5 h-5 text-oak group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
