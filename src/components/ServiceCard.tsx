import Link from 'next/link';
import { LucideIcon, Trees, Layers, Square, Grid3x3, Wind, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  slug: string;
  icon: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

const iconMap: Record<string, LucideIcon> = {
  trees: Trees,
  layers: Layers,
  square: Square,
  grid: Grid3x3,
  wind: Wind,
};

export default function ServiceCard({ name, slug, icon, description, image, imageAlt }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Square;

  return (
    <Link
      href={`/services/${slug}`}
      className="bg-white rounded-lg shadow-md hover:shadow-xl active:shadow-xl transition-all overflow-hidden group border-2 border-transparent hover:border-oak active:border-oak"
    >
      {image ? (
        <div className="relative h-44 sm:h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-oak rounded-full">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-navy" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-oak/10 rounded-full m-4 sm:m-6 mb-3 sm:mb-4 group-hover:bg-oak/20 transition-colors">
          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-oak" />
        </div>
      )}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-navy">{name}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{description}</p>
        <div className="flex items-center text-sm sm:text-base text-oak font-semibold group-hover:translate-x-2 group-active:translate-x-2 transition-transform">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
}
