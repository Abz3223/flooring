import Link from 'next/link';
import { Phone, Shield, Clock, Star } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';
import HeroLeadForm from '../HeroLeadForm';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/engineered-hardwood-hallway-flooring-toronto.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/40" />

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-oak/20 border border-oak/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-oak fill-oak" />
              <span className="text-oak text-sm font-semibold">Toronto's Trusted Flooring Experts</span>
            </div>

            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              Professional<br />
              <span className="text-oak">Flooring</span><br />
              Installation
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-lg">
              Expert hardwood, vinyl, tile, laminate, and carpet installation across the Greater Toronto Area. Licensed, insured, and backed by a 5-year warranty.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 bg-oak hover:bg-oak-light text-navy px-7 py-3.5 rounded-xl font-bold text-base transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-colors backdrop-blur-sm"
              >
                Free Estimate
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: Shield, label: 'Licensed & Insured' },
                { icon: Clock, label: 'Fast Response' },
                { icon: Star, label: '5-Year Warranty' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-300 text-sm">
                  <div className="w-7 h-7 rounded-full bg-oak/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-oak" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
              <h2 className="font-heading font-bold text-navy text-xl mb-1">Get Your Free Estimate</h2>
              <p className="text-gray-500 text-sm mb-6">We respond within 2 hours during business hours.</p>
              <HeroLeadForm sourcePage="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
