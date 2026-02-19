'use client';

import type { Metadata } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Wrench, FileText, Home as HomeIcon } from 'lucide-react';
import { ServiceArea, AffluentNeighborhood, BlogPost } from '@/types/database';
import { FLOORING_SERVICES } from '@/constants/services';

export default function SitemapPage() {
  const [serviceAreas, setServiceAreas] = useState<ServiceArea[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<AffluentNeighborhood[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setServiceAreas([]);
    setNeighborhoods([]);
    setBlogPosts([]);
  }, []);

  return (
    <div>
      <section className="bg-navy text-white py-12 sm:py-14 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-center">Site Map</h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto text-center">
            Find everything you need - services, locations, and resources
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <HomeIcon className="w-8 h-8 text-oak" />
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">Main Pages</h2>
              </div>
              <ul className="space-y-3 text-base sm:text-lg">
                <li>
                  <Link href="/" className="text-oak hover:text-oak-dark hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-oak hover:text-oak-dark hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-oak hover:text-oak-dark hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-oak hover:text-oak-dark hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Wrench className="w-8 h-8 text-oak" />
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">Flooring Services</h2>
              </div>
              <ul className="space-y-3 text-base sm:text-lg">
                {FLOORING_SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-oak hover:text-oak-dark hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-8 h-8 text-oak" />
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">Service Areas</h2>
              </div>
              <ul className="space-y-3 text-base sm:text-lg">
                {serviceAreas.map((area) => (
                  <li key={area.id}>
                    <Link
                      href={`/locations/${area.slug}`}
                      className="text-oak hover:text-oak-dark hover:underline"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {neighborhoods.length > 0 && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-oak" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">Luxury Neighborhoods</h2>
                </div>
                <ul className="space-y-3 text-base sm:text-lg">
                  {neighborhoods.map((neighborhood) => (
                    <li key={neighborhood.id}>
                      <Link
                        href={`/neighborhoods/${neighborhood.slug}`}
                        className="text-oak hover:text-oak-dark hover:underline"
                      >
                        {neighborhood.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {blogPosts.length > 0 && (
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-8 h-8 text-oak" />
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">Blog Posts</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base sm:text-lg">
                  {blogPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-oak hover:text-oak-dark hover:underline"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="md:col-span-2 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-navy mb-4">Legal &amp; Information</h3>
              <ul className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
                <li>
                  <Link href="/terms" className="text-oak hover:text-oak-dark hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-oak hover:text-oak-dark hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-oak hover:text-oak-dark hover:underline">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
