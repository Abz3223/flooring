'use client';

import { useEffect, useState } from 'react';
import LeadForm from '../LeadForm';
import TestimonialCard from '../TestimonialCard';
import { Testimonial } from '../../types/database';

export default function QuoteSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials([]);
  }, []);

  return (
    <section id="quote" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-heading font-bold text-navy mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Request Your Callback Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Fill out the form below and our expert flooring contractors will call you back
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <LeadForm sourcePage="homepage" />
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="bg-navy text-white rounded-lg p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4">Why Get a Quote?</h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <li className="flex items-start">
                  <span className="text-oak mr-2">✓</span>
                  <span>Free on-site consultation and measurements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-oak mr-2">✓</span>
                  <span>Comprehensive project assessment and planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-oak mr-2">✓</span>
                  <span>Expert recommendations for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-oak mr-2">✓</span>
                  <span>No obligation, pressure-free process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-oak mr-2">✓</span>
                  <span>Professional service from start to finish</span>
                </li>
              </ul>
            </div>

            {testimonials.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-navy mb-3 sm:mb-4">
                  What Customers Say
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {testimonials.slice(0, 2).map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.id}
                      name={testimonial.name}
                      location={testimonial.location}
                      rating={testimonial.rating}
                      review={testimonial.review}
                      flooringType={testimonial.flooring_type}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
