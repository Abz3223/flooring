import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { LOCATIONS } from '@/constants/locations';
import { FLOORING_SERVICES } from '@/constants/services';
import { CONTACT_INFO } from '@/constants/contact';
import LeadForm from '@/components/LeadForm';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return { title: 'Location Not Found' };
  return {
    title: `Flooring Installers in ${loc.name} | Licensed Contractors | GTA`,
    description: `Professional flooring installation in ${loc.name}. Expert hardwood, vinyl, tile, laminate & carpet. Licensed, insured contractors with 5-year warranty. Free estimates.`,
    alternates: { canonical: `https://flooringinstallerstoronto.com/locations/${slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const nearby = LOCATIONS.filter((l) => l.slug !== loc.slug).slice(0, 4);

  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-oak" />
              <span className="text-oak font-semibold text-sm uppercase tracking-widest">{loc.region}</span>
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Flooring Installers in {loc.name}</h1>
            <p className="text-gray-200 text-xl leading-relaxed mb-8">{loc.description}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold text-navy text-3xl mb-6">Professional Flooring in {loc.name}</h2>
              <div className="prose prose-sm text-gray-600 space-y-4">
                <p>
                  Our network of licensed and insured flooring contractors serves {loc.name} and the surrounding {loc.region}. From heritage homes to modern condos, we deliver expert installation with a commitment to quality.
                </p>
                <p>
                  All contractors are fully vetted, carry $2M liability insurance, and are backed by our 5-year workmanship warranty. We handle hardwood, laminate, luxury vinyl, tile, and carpet installations of all sizes.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-heading font-semibold text-navy text-lg mb-4">Neighbourhoods We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.neighborhoods.map((n) => (
                    <span key={n} className="flex items-center gap-1.5 bg-background text-navy text-xs font-medium px-3 py-1.5 rounded-full border border-gray-100">
                      <MapPin className="w-3 h-3 text-oak" /> {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-navy text-lg mb-5">Our Services in {loc.name}</h3>
              <div className="space-y-3">
                {FLOORING_SERVICES.map((s) => (
                  <Link key={s.id} href={`/services/${s.slug}`} className="flex items-center justify-between p-4 bg-background rounded-xl border border-gray-100 hover:border-oak/30 hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-oak" />
                      <span className="font-medium text-navy text-sm group-hover:text-oak transition-colors">{s.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-oak transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="estimate" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-navy text-3xl mb-4">Request a Callback in {loc.name}</h2>
              <p className="text-gray-600">We'll provide a detailed estimate for your {loc.name} flooring project within 2 hours.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <LeadForm sourcePage={`location-${loc.slug}`} />
            </div>
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-navy text-2xl mb-6 text-center">Nearby Service Areas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {nearby.map((l) => (
                <Link key={l.slug} href={`/locations/${l.slug}`} className="group bg-background hover:bg-oak/5 border border-gray-100 hover:border-oak/30 rounded-xl p-4 text-center transition-all">
                  <MapPin className="w-4 h-4 text-oak mx-auto mb-2" />
                  <p className="font-semibold text-navy text-sm group-hover:text-oak transition-colors">{l.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
