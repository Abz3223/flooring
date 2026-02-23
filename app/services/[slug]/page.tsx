import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { FLOORING_SERVICES } from '@/constants/services';
import { CONTACT_INFO } from '@/constants/contact';
import LeadForm from '@/components/LeadForm';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return FLOORING_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = FLOORING_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.name} in Toronto & GTA | Professional Installation`,
    description: `${service.description} Serving Toronto, Scarborough, North York, Vaughan, Markham, Mississauga & Pickering. Licensed, insured, 5-year warranty.`,
    alternates: { canonical: `https://flooringinstallerstoronto.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = FLOORING_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = FLOORING_SERVICES.filter((s) => s.id !== service.id);

  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-4">Flooring Services</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">{service.name} in Toronto & GTA</h1>
            <p className="text-gray-200 text-xl leading-relaxed mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-2 bg-oak hover:bg-oak-light text-navy px-7 py-3.5 rounded-xl font-bold transition-colors">
                <Phone className="w-5 h-5" /> {CONTACT_INFO.phone}
              </a>
              <Link href="#estimate" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors">
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-navy text-3xl mb-6">Why Choose Our {service.name} Installation?</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our certified contractors specialise in {service.name.toLowerCase()} installation across the Greater Toronto Area. From subfloor preparation to final trim, we handle every step of the process.
              </p>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-oak/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-oak" />
                    </div>
                    <span className="text-navy font-medium text-sm">{b}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-oak/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-oak" />
                  </div>
                  <span className="text-navy font-medium text-sm">5-year workmanship warranty</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '15+', label: 'Years Installing' },
                { stat: '500+', label: 'Projects Done' },
                { stat: '$2M', label: 'Liability Coverage' },
                { stat: '5★', label: 'Client Rating' },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-background rounded-xl p-6 text-center">
                  <div className="font-heading font-bold text-oak text-3xl mb-1">{stat}</div>
                  <div className="text-navy text-sm font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="estimate" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-navy text-3xl mb-4">Get Your {service.name} Estimate</h2>
              <p className="text-gray-600">Tell us about your project and we'll be in touch within 2 hours with a detailed quote.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <LeadForm sourcePage={`service-${service.id}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-navy text-2xl mb-8 text-center">Other Flooring Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {otherServices.map((s) => (
              <Link key={s.id} href={`/services/${s.slug}`} className="group bg-background hover:bg-oak/5 border border-gray-100 hover:border-oak/30 rounded-xl p-4 text-center transition-all duration-200">
                <p className="font-semibold text-navy text-sm group-hover:text-oak transition-colors">{s.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
