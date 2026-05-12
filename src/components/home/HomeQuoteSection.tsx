import { Phone, Clock, MapPin } from 'lucide-react';
import HomeQuoteForm from '../HomeQuoteForm';

// Inline lead-capture block for the homepage. 2-column on desktop:
// supporting info on the left, the form on the right. Stacked on mobile
// with form on top so it's the first thing reachable above the fold.
export default function HomeQuoteSection() {
  return (
    <section id="quote" className="py-16 lg:py-20 bg-stone-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Left column, info / trust signals */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <p className="font-sans text-[0.6875rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-gold mb-3">
              Get a Quote
            </p>
            <h2 className="font-serif font-extrabold text-charcoal text-3xl sm:text-4xl mb-4 tracking-tight leading-[1.1]">
              Request Your <br className="hidden sm:block" />
              Free Estimate
            </h2>
            <p className="text-stone-600 text-base leading-relaxed mb-7">
              Tell us about your project. We&apos;ll get back to you within a few hours with a free, no-obligation on-site estimate.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-gold-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gold" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[0.8125rem] font-bold text-charcoal">Prefer to call?</p>
                  <a
                    href="tel:+16479050050"
                    className="text-gold hover:text-gold-hover font-bold text-[0.9375rem] transition-colors"
                  >
                    (647) 905-0050
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-gold-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gold" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[0.8125rem] font-bold text-charcoal">Response Time</p>
                  <p className="text-stone-600 text-[0.875rem]">
                    Within a few hours during business hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-gold-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[0.8125rem] font-bold text-charcoal">Service Area</p>
                  <p className="text-stone-600 text-[0.875rem]">
                    Toronto, Scarborough, North York, Vaughan, Markham, Mississauga, Pickering
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column, the form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <HomeQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
