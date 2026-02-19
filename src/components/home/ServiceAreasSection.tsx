'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { ServiceArea } from '../../types/database';

export default function ServiceAreasSection() {
  const [areas, setAreas] = useState<ServiceArea[]>([]);

  useEffect(() => {
    const fetchAreas = async () => {
      const { data } = await supabase
        .from('service_areas')
        .select('*')
        .eq('featured', true)
        .order('name');

      if (data) {
        setAreas(data);
      }
    };

    fetchAreas();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-heading font-bold text-navy mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Serving Toronto & the Greater Toronto Area
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Professional flooring installers proudly serving homes and businesses across the GTA
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={`/locations/${area.slug}`}
              className="bg-background hover:bg-oak/10 active:bg-oak/10 border-2 border-transparent hover:border-oak active:border-oak rounded-lg p-4 sm:p-5 md:p-6 transition-all group min-h-[100px]"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-oak rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy">{area.name}</h3>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">{area.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Don't see your area? We service a 50km radius from Toronto
          </p>
          <Link
            href="/contact"
            className="inline-block bg-oak hover:bg-oak-light text-navy px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us for Your Area
          </Link>
        </div>
      </div>
    </section>
  );
}
