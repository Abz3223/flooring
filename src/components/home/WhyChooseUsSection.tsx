import TrustBadge from '../TrustBadge';
import { TRUST_FACTORS } from '../../constants/contact';

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-heading font-bold text-navy mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">
            Why Use Our Connection Platform?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Fast, free, and easy way to connect with independent flooring contractors in Toronto and the GTA
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {TRUST_FACTORS.map((factor) => (
            <TrustBadge
              key={factor.title}
              title={factor.title}
              description={factor.description}
              icon={factor.icon}
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 bg-white rounded-lg shadow-lg p-5 sm:p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-heading font-semibold text-navy mb-4 sm:mb-5 md:mb-6 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-center">
            <div>
              <p className="text-oak font-bold text-lg sm:text-xl mb-2">1. Submit Request</p>
              <p className="text-gray-600 text-sm">Fill out our simple form with your project details</p>
            </div>
            <div>
              <p className="text-oak font-bold text-lg sm:text-xl mb-2">2. Get Matched</p>
              <p className="text-gray-600 text-sm">We connect you with independent contractors</p>
            </div>
            <div>
              <p className="text-oak font-bold text-lg sm:text-xl mb-2">3. Compare Quotes</p>
              <p className="text-gray-600 text-sm">Contractors contact you with pricing and details</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-5 sm:mt-6">
            All services are performed by independent third-party contractors. Verify credentials and obtain multiple quotes before proceeding.
          </p>
        </div>
      </div>
    </section>
  );
}
