import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/contact';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Flooring Installers Toronto | Free Estimate',
  description: 'Contact Toronto\'s trusted flooring installers for a free estimate. Call (647) 905-0050 or fill out our form. We respond within 2 hours.',
  alternates: { canonical: 'https://flooringinstallerstoronto.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-oak font-semibold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Ready to start your flooring project? Get a free, detailed estimate from Toronto's trusted professionals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-3">
              <h2 className="font-heading font-bold text-navy text-2xl mb-6">Request a Free Estimate</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <LeadForm sourcePage="contact-page" />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-navy text-2xl mb-6">Get In Touch</h2>
              <div className="space-y-5">
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-oak/30 transition-colors group">
                  <div className="w-10 h-10 bg-oak/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-oak/20 transition-colors">
                    <Phone className="w-5 h-5 text-oak" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Phone</p>
                    <p className="text-gray-600 text-sm">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-oak/30 transition-colors group">
                  <div className="w-10 h-10 bg-oak/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-oak/20 transition-colors">
                    <Mail className="w-5 h-5 text-oak" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Email</p>
                    <p className="text-gray-600 text-sm break-all">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-oak/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-oak" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Service Area</p>
                    <p className="text-gray-600 text-sm">Toronto & Greater Toronto Area</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-oak/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-oak" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Hours</p>
                    <p className="text-gray-600 text-sm">Monday – Sunday: 8am – 8pm</p>
                    <p className="text-gray-400 text-xs mt-0.5">We respond within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
