import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';
import { FLOORING_IMAGES } from '../../constants/images';
import HeroLeadForm from '../HeroLeadForm';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy to-navy-light text-white py-12 md:py-20 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${FLOORING_IMAGES.hero.main})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy-light/85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="font-heading font-bold mb-4 md:mb-6 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Connect With Local Flooring Contractors
              <span className="block text-oak mt-2">Hardwood, Vinyl, Laminate & More</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-200">
              Get matched with independent flooring contractors serving Toronto and the GTA
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-10">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center space-x-2 min-h-[44px] w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>Call {CONTACT_INFO.phone}</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-oak mb-1">Fast</p>
                <p className="text-xs sm:text-sm text-gray-300">Quick Connections</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-oak mb-1">Free</p>
                <p className="text-xs sm:text-sm text-gray-300">No Cost Quotes</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-oak mb-1">Local</p>
                <p className="text-xs sm:text-sm text-gray-300">GTA Contractors</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-oak to-oak-light rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-5 sm:p-6 md:p-8">
              <div className="mb-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-navy mb-2">
                  Request Callback
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Typically responds within 2 hours
                </p>
              </div>

              <HeroLeadForm sourcePage="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
