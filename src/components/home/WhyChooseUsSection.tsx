import { Shield, CircleCheck as CheckCircle, ClipboardList, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Licensed & Fully Insured',
    desc: 'Every job is covered by $2M liability insurance and WSIB compliance — protecting you and our crew.',
  },
  {
    icon: ClipboardList,
    title: 'Free On-Site Estimates',
    desc: 'We come to your home, measure accurately, and provide a written quote with no pressure and no obligation.',
  },
  {
    icon: CheckCircle,
    title: '5-Year Workmanship Warranty',
    desc: 'Every installation is backed by our workmanship guarantee. If something is wrong, we make it right.',
  },
  {
    icon: Star,
    title: '100+ Five-Star Reviews',
    desc: 'Consistently rated 5 stars by homeowners across the GTA for quality, punctuality, and cleanup.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <p className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold mb-4">
              Why Us
            </p>
            <h2 className="font-serif text-h2 text-stone-50 mb-6 leading-tight">
              Why Toronto Homeowners<br />Choose Us
            </h2>
            <p className="text-stone-400 text-[1.0625rem] leading-relaxed mb-10">
              We&apos;ve built our reputation on quality craftsmanship, transparent pricing, and respectful service. Every project — large or small — receives the same level of care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-stone-100 text-[0.9375rem] mb-1.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-stone-400 text-[0.8125rem] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/hardwood-flooring-after-toronto.jpeg"
                alt="Beautiful hardwood flooring installation completed by Toronto Flooring Installers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-gold text-white rounded-xl p-5 shadow-xl">
              <div className="font-serif text-3xl font-normal">500+</div>
              <div className="font-sans text-[0.8125rem] font-medium mt-0.5">GTA Projects Completed</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-xl p-5 shadow-xl">
              <div className="font-serif text-3xl text-charcoal font-normal">15+</div>
              <div className="font-sans text-[0.8125rem] font-medium mt-0.5 text-stone-500">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
