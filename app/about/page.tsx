import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Shield, Users, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, TRUST_FACTORS } from '@/constants/contact';

export const metadata: Metadata = {
  title: 'About Flooring Installers Toronto | 15+ Years GTA Experience',
  description: 'Learn about Toronto\'s trusted flooring installers. 15+ years serving the GTA with expert hardwood, vinyl, tile & carpet installation. Licensed, insured, 5-year warranty.',
  alternates: { canonical: 'https://flooringinstallerstoronto.com/about' },
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-4">About Us</p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-6">Toronto's Flooring Professionals</h1>
            <p className="text-gray-200 text-xl leading-relaxed">
              For over 15 years, we've been connecting GTA homeowners and businesses with skilled, vetted flooring contractors. Our mission: beautiful floors, hassle-free.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
              <h2 className="font-heading font-bold text-navy text-3xl mb-6">Built on Quality and Trust</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Flooring Installers Toronto was founded with a simple belief: every homeowner in the GTA deserves access to skilled, reliable flooring professionals without the stress of finding and vetting contractors on their own.
                </p>
                <p>
                  Over 15 years, we've built a network of rigorously vetted contractors who share our commitment to quality workmanship and exceptional customer service. Every contractor in our network is fully licensed, insured, and WSIB compliant.
                </p>
                <p>
                  From a single bedroom to a full commercial fit-out, we bring the same level of care and professionalism to every project. Our 5-year workmanship warranty reflects our confidence in the quality of every installation.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/engineered-hardwood-flooring-installation-toronto.jpg"
                alt="Professional hardwood flooring installation by Toronto contractors"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-navy text-3xl sm:text-4xl mb-4">Why Homeowners Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_FACTORS.map((factor) => (
              <div key={factor.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-oak/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-oak" />
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{factor.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { stat: '15+', label: 'Years in Business' },
              { stat: '500+', label: 'Projects Completed' },
              { stat: '200+', label: 'Vetted Contractors' },
              { stat: '5★', label: 'Average Rating' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <div className="font-heading font-bold text-oak text-4xl mb-2">{stat}</div>
                <div className="text-navy font-semibold text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">Ready to Transform Your Space?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Get your free estimate today and experience the Flooring Installers Toronto difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center justify-center gap-2 bg-oak hover:bg-oak-light text-navy px-8 py-4 rounded-xl font-bold transition-colors">
              <Phone className="w-5 h-5" />
              {CONTACT_INFO.phone}
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Get Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
