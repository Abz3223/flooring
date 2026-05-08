// Real Google reviews displayed verbatim (typos preserved for authenticity).
// Replace `gbpReviewUrl` below with the exact Google Business Profile review
// URL once it's available — current value is a fallback search.
const gbpReviewUrl =
  'https://www.google.com/search?q=Toronto+Flooring+Installers+Scarborough';

interface Review {
  name: string;
  timeAgo: string;
  text: string;
  ownerReply: string | null;
}

const reviews: Review[] = [
  {
    name: 'Nuraz',
    timeAgo: '2 weeks ago',
    text: 'Great service, very honest and helpful team. Highly recommend for any floor installation needs.',
    ownerReply:
      'Thank you Nuraz, happy your were satisfied with our service and work.',
  },
  {
    name: 'Prady',
    timeAgo: '3 weeks ago',
    text: 'Honestly the best flooring installers in the city, Mike did a amazing job and super happy with the results.',
    ownerReply:
      'Prady, thank you for the honest review. Your recommendation means alot to us.',
  },
  {
    name: 'Wyvern',
    timeAgo: '3 weeks ago',
    text: 'Did my flooring quoted me better price Ethan anywhere in Toronto.',
    ownerReply: null,
  },
];

function StarRow({ size = 'sm' }: { size?: 'sm' | 'md' }) {
  const cls = size === 'md' ? 'h-5 w-5' : 'h-4 w-4';
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`${cls} fill-gold-light`}
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface px-4 sm:px-6 lg:px-8">
      <div className="max-w-wide mx-auto">
        {/* Header: eyebrow + H2 + rating summary */}
        <div className="text-center mb-12">
          <p className="font-sans text-[0.6875rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-gold mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif font-extrabold text-charcoal text-3xl sm:text-4xl mb-5 tracking-tight">
            Trusted by Toronto&nbsp;Homeowners
          </h2>
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <StarRow size="md" />
            <span className="font-sans font-extrabold text-charcoal text-lg">5.0</span>
          </div>
          <p className="text-stone-500 text-sm">
            Verified reviews on{' '}
            <a
              href={gbpReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-hover font-bold underline"
            >
              Google
            </a>
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRow size="sm" />
                <GoogleMark />
              </div>
              <p className="text-charcoal text-[0.9375rem] leading-relaxed mb-5 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-stone-200">
                <p className="font-sans font-bold text-charcoal text-sm">
                  {review.name}
                </p>
                <p className="text-stone-500 text-xs mt-0.5">{review.timeAgo}</p>
              </div>
              {review.ownerReply && (
                <div className="mt-4 pt-4 border-t border-stone-200">
                  <p className="text-[0.6875rem] font-bold text-stone-600 uppercase tracking-wide mb-1.5">
                    Owner reply
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    &ldquo;{review.ownerReply}&rdquo;
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA: read all on Google */}
        <div className="text-center mt-10">
          <a
            href={gbpReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-hover text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-colors min-h-[48px]"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
