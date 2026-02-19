'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, TrendingUp, ArrowRight } from 'lucide-react';
import { AffluentNeighborhood } from '../../types/database';

export default function AffluentNeighborhoodsSection() {
  const [neighborhoods, setNeighborhoods] = useState<AffluentNeighborhood[]>([]);

  useEffect(() => {
    setNeighborhoods([]);
  }, []);

  if (neighborhoods.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="font-heading font-bold text-navy mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl text-white">
            Serving Toronto's Most Prestigious Neighborhoods
          </h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Specialized luxury flooring services for high-value homes in Toronto's most exclusive areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-10 sm:mb-11 md:mb-12">
          {neighborhoods.map((neighborhood) => {
            const formattedValue = new Intl.NumberFormat('en-CA', {
              style: 'currency',
              currency: 'CAD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              notation: 'compact',
              compactDisplay: 'short'
            }).format(neighborhood.average_home_value);

            return (
              <Link
                key={neighborhood.id}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="bg-navy-light hover:bg-navy-lighter p-6 sm:p-7 md:p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-oak flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-heading font-bold group-hover:text-oak transition-colors">
                      {neighborhood.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-200 mb-4 line-clamp-2">
                  {neighborhood.description?.slice(0, 120)}...
                </p>

                <div className="flex items-center space-x-2 text-oak mb-4">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold text-sm sm:text-base">Avg. Home Value: {formattedValue}</span>
                </div>

                {neighborhood.landmarks && neighborhood.landmarks.length > 0 && (
                  <div className="text-xs sm:text-sm text-gray-300 mb-4">
                    <span className="font-semibold">Near:</span> {neighborhood.landmarks.slice(0, 2).join(', ')}
                  </div>
                )}

                <div className="flex items-center text-oak font-semibold group-hover:underline text-sm sm:text-base">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
            We specialize in premium flooring installations for Toronto's most distinguished properties. From heritage homes to modern estates, our expert contractors deliver exceptional craftsmanship and white-glove service.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center bg-oak hover:bg-oak-light text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-colors text-sm sm:text-base min-h-[48px]"
          >
            Request Luxury Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
