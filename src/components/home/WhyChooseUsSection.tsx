import Image from 'next/image';
import { MapPin, Palette, Ruler, Building2 } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Samples Come to You',
    desc: 'We bring samples to the free measure, so you pick your floor in your own light, next to your own walls. Your written quote usually arrives the next day.',
  },
  {
    icon: Ruler,
    title: 'Levelling Is in the Price',
    desc: 'Carpet hides dips in the concrete. When it comes out, we level the low spots before the new floor goes down, and we tell you up front.',
  },
  {
    icon: Building2,
    title: 'Condo Paperwork Handled',
    desc: 'We send your board the product specs it asks for and book the elevator. Our last two condo jobs, in Scarborough and on King West, were approved as submitted.',
  },
  {
    icon: MapPin,
    title: 'An Office You Can Visit',
    desc: 'Our office at 2061 McCowan Rd in Scarborough has samples. Call ahead and we will make sure someone is there to meet you.',
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
              Five installers, the first of them laying floors since 2014. Mostafa, Mike and the rest of the crew have done more than 500 jobs between them, and we&apos;re usually a little under typical GTA prices without skipping the prep.
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
              <Image
                src="/hardwood-flooring-after-toronto.jpeg"
                alt="Beautiful hardwood flooring installation completed by Toronto Flooring Installers"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-gold text-white rounded-xl p-5 shadow-xl">
              <div className="font-serif text-3xl font-normal">500+</div>
              <div className="font-sans text-[0.8125rem] font-medium mt-0.5">Jobs Between Our Installers</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-xl p-5 shadow-xl">
              <div className="font-serif text-3xl text-charcoal font-normal">2014</div>
              <div className="font-sans text-[0.8125rem] font-medium mt-0.5 text-stone-500">Installing Since</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
