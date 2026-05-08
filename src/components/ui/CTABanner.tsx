import { Phone } from 'lucide-react';

interface CTABannerProps {
  /** Headline shown on the left of the banner. Bold serif. */
  headline: string;
  /** Optional subtext shown under the headline. */
  subtext?: string;
  /** Display phone number (defaults to the business number). */
  phone?: string;
}

// Slim full-width banner intended to interrupt content between sections
// with a phone-call CTA. Pattern adapted from restorationprofessionals.ca
// (Path B port: kept charcoal background and gold CTA per flooring identity).
export default function CTABanner({
  headline,
  subtext,
  phone = '(647) 905-0050',
}: CTABannerProps) {
  const telHref = `tel:${phone.replace(/\D/g, '')}`;

  return (
    <section className="bg-charcoal py-9 px-4 sm:px-6 lg:px-8">
      <div className="max-w-wide mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="font-serif text-stone-50 text-xl sm:text-2xl leading-tight">
            {headline}
          </p>
          {subtext && (
            <p className="text-stone-400 text-[0.875rem] mt-1.5">{subtext}</p>
          )}
        </div>
        <a
          href={telHref}
          className="flex-shrink-0 inline-flex items-center gap-2.5 bg-gold hover:bg-gold-hover text-white font-semibold text-[0.9375rem] px-7 py-3.5 rounded-lg transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4" strokeWidth={2} />
          Call {phone}
        </a>
      </div>
    </section>
  );
}
