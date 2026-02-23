import { Phone, Star } from 'lucide-react';
import LeadForm from '../LeadForm';
import { CONTACT_INFO } from '../../constants/contact';

const testimonials = [
  {
    name: 'Sarah K.',
    location: 'North York',
    rating: 5,
    text: 'Absolutely stunning hardwood throughout our main floor. The installers were professional, on time, and cleaned up perfectly. Could not be happier.',
  },
  {
    name: 'Michael T.',
    location: 'Vaughan',
    rating: 5,
    text: 'Had LVP installed in our basement and laundry room. Completed in one day and it looks incredible. Will definitely use again for the rest of the house.',
  },
  {
    name: 'Priya R.',
    location: 'Mississauga',
    rating: 5,
    text: 'Very fair pricing, fast scheduling, and the tile work in our bathrooms exceeded expectations. Highly recommend to anyone in the GTA.',
  },
];

export default function QuoteSection() {
  return (
    <section id="quote" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Get Started</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">Request Your Free Estimate</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Fill in your details and one of our flooring experts will contact you within 2 hours to discuss your project and provide a detailed, no-obligation estimate.
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8">
              <LeadForm sourcePage="home-quote" />
            </div>

            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-2 text-oak hover:text-oak-dark font-semibold transition-colors">
                <Phone className="w-4 h-4" />
                Prefer to call? {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          <div>
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Reviews</p>
            <h3 className="font-heading font-bold text-navy text-2xl mb-6">What Our Clients Say</h3>

            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-oak fill-oak" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-oak/20 rounded-full flex items-center justify-center">
                      <span className="text-oak font-bold text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
