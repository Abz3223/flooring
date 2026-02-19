import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface NearbyLocationsProps {
  currentLocation: string;
  maxItems?: number;
}

const LOCATION_DATA = [
  { slug: 'toronto', name: 'Toronto', description: 'Downtown and surrounding areas' },
  { slug: 'scarborough', name: 'Scarborough', description: 'East Toronto neighborhoods' },
  { slug: 'north-york', name: 'North York', description: 'North Toronto communities' },
  { slug: 'vaughan', name: 'Vaughan', description: 'York Region service' },
  { slug: 'markham', name: 'Markham', description: 'East GTA coverage' },
  { slug: 'mississauga', name: 'Mississauga', description: 'West GTA service' },
  { slug: 'pickering', name: 'Pickering', description: 'Durham Region coverage' }
];

export default function NearbyLocations({ currentLocation, maxItems = 6 }: NearbyLocationsProps) {
  const nearbyLocations = LOCATION_DATA.filter(
    location => location.slug !== currentLocation
  ).slice(0, maxItems);

  if (nearbyLocations.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold text-navy mb-2 text-center">
          We Also Serve These Nearby Areas
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Professional flooring installation throughout the Greater Toronto Area
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {nearbyLocations.map(location => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="bg-background hover:bg-oak/10 border border-gray-200 hover:border-oak rounded-lg p-4 transition-all group text-center"
            >
              <MapPin className="w-6 h-6 text-oak mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-navy group-hover:text-oak transition-colors">
                {location.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
