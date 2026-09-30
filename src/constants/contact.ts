export const CONTACT_INFO = {
  name: 'Flooring Installers Toronto',
  phone: '(647) 905-0050',
  phoneRaw: '+16479050050',
  email: 'torontoflooringinstallers@gmail.com',
  address: 'Toronto, Ontario',
  serviceRadius: 'Greater Toronto Area',
};

/**
 * SINGLE SOURCE OF TRUTH for opening hours.
 *
 * Before 2026-09-29 hours were hard-coded in three places that disagreed:
 * ContactForm (Mon-Fri to 7pm), the homepage LocalBusiness schema (Mon-Fri to
 * 6pm, Sat to 4pm, no Sunday) and /thank-you (Mon-Fri to 7pm, Sat to 5pm).
 * The Google Business Profile is a fourth version (to 9pm daily).
 *
 * `display` is what customers read. `schema` is the machine-readable form for
 * openingHoursSpecification; "by appointment" cannot be expressed there, so
 * Sunday is intentionally absent from `schema`.
 *
 * NOTE: these are the /contact values, adopted as the assumed-correct set.
 * The GBP still advertises later hours and the owner has not confirmed which
 * is real. Change this constant, or the GBP, so the two agree.
 */
export const BUSINESS_HOURS = {
  display: [
    { days: 'Monday \u2013 Friday', hours: '8:00 AM \u2013 7:00 PM' },
    { days: 'Saturday', hours: '9:00 AM \u2013 5:00 PM' },
    { days: 'Sunday', hours: 'By appointment' },
  ],
  /** Short form for running text. */
  summary: 'Mon\u2013Fri 8am\u20137pm, Sat 9am\u20135pm',
  schema: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
    {
      days: ['Saturday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
};

export const TRUST_FACTORS = [
  {
    title: '15+ Years Experience',
    description: 'Serving Toronto and the GTA with professional flooring installations since 2009.',
    icon: 'Award',
  },
  {
    title: 'Locally Owned, Scarborough-Based',
    description: 'Our shop is on McCowan Rd in Scarborough. We live and work in the GTA, which means faster response and a real understanding of local housing.',
    icon: 'MapPin',
  },
  {
    title: 'Free Estimates',
    description: 'No-obligation, detailed quotes provided before any work begins.',
    icon: 'ClipboardList',
  },
];
