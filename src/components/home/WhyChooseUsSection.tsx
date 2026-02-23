import { Award, Shield, Clock, CheckCircle, Users, Wrench } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '15+ Years of Experience',
    desc: 'Over a decade serving Toronto and the GTA with thousands of successful flooring installations.',
  },
  {
    icon: Shield,
    title: 'Licensed & Fully Insured',
    desc: 'All contractors carry $2M liability insurance and are WSIB compliant. Full peace of mind.',
  },
  {
    icon: CheckCircle,
    title: '5-Year Workmanship Warranty',
    desc: 'Every installation is backed by our comprehensive workmanship guarantee — we stand behind our work.',
  },
  {
    icon: Clock,
    title: 'Fast Response & Scheduling',
    desc: 'We respond within 2 hours and can typically schedule your project within days, not weeks.',
  },
  {
    icon: Users,
    title: 'Expert Local Contractors',
    desc: 'Our network of vetted local professionals understands Toronto\'s building styles and climate.',
  },
  {
    icon: Wrench,
    title: 'Full-Service Installation',
    desc: 'We handle everything: demo, subfloor prep, installation, trim, and cleanup. Zero stress for you.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Why Us</p>
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-6">
              Toronto's Most Trusted Flooring Installers
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We've built our reputation on quality craftsmanship, transparent pricing, and exceptional customer service. Every project, big or small, receives the same level of care and attention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 bg-oak/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-oak" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hardwood-flooring-after-toronto.jpeg"
                alt="Beautiful hardwood flooring installation completed by Toronto contractors"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-oak text-navy rounded-xl p-5 shadow-xl">
              <div className="font-heading font-bold text-3xl">500+</div>
              <div className="text-sm font-medium mt-0.5">GTA Projects Completed</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-navy text-white rounded-xl p-5 shadow-xl">
              <div className="font-heading font-bold text-3xl">15+</div>
              <div className="text-sm font-medium mt-0.5 text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
