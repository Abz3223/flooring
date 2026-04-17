import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  headline?: string;
  subtext?: string;
}

export default function CTASection({
  headline = 'Ready to Get Started?',
  subtext = 'Call us today or request a free estimate online. We respond within a few hours and can typically schedule your site visit within days.',
}: CTASectionProps) {
  return (
    <section className="bg-charcoal py-20 px-4">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-h2 text-stone-50 mb-4">{headline}</h2>
          <p className="text-stone-400 text-body-lg mb-10 leading-relaxed">{subtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16479050050"
              className="inline-flex items-center justify-center gap-2.5 bg-surface text-charcoal font-semibold text-[0.9375rem] px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-stone-100"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              Call (647) 905-0050
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-stone-50 font-semibold text-[0.9375rem] px-7 py-3.5 rounded-lg transition-colors duration-200"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
