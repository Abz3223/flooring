import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';
import { FLOORING_SERVICES } from '../constants/services';
import { LOCATIONS } from '../constants/locations';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-oak font-heading font-bold text-xl">Flooring Installers</span>
              <span className="text-white/70 font-heading text-base block">Toronto & GTA</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Professional flooring installation across the Greater Toronto Area. Hardwood, laminate, vinyl, tile, and carpet — done right.
            </p>
            <div className="space-y-3">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-3 text-gray-300 hover:text-oak transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-oak" />
                {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-gray-300 hover:text-oak transition-colors text-sm">
                <Mail className="w-4 h-4 flex-shrink-0 text-oak" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 text-oak" />
                {CONTACT_INFO.address}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {FLOORING_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-gray-300 hover:text-oak transition-colors text-sm group">
                    <ArrowRight className="w-3 h-3 text-oak opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="flex items-center gap-2 text-gray-300 hover:text-oak transition-colors text-sm group">
                    <ArrowRight className="w-3 h-3 text-oak opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center gap-2 text-gray-300 hover:text-oak transition-colors text-sm group">
                    <ArrowRight className="w-3 h-3 text-oak opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-oak hover:bg-oak-light text-navy px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors">
                Get Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Flooring Installers Toronto. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Serving Toronto, Scarborough, North York, Vaughan, Markham, Mississauga & Pickering
          </p>
        </div>
      </div>
    </footer>
  );
}
