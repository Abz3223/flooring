import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';
import { FLOORING_SERVICES } from '../constants/services';
import { LOCATIONS } from '../constants/locations';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-stone-50">
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-[1.125rem] font-extrabold tracking-tight leading-tight block mb-4 group">
              <span className="text-white group-hover:text-stone-100 transition-colors">
                Toronto Flooring{' '}
                <span className="text-gold-light group-hover:text-gold transition-colors">Installers</span>
              </span>
            </Link>
            <p className="text-stone-400 text-[0.875rem] leading-relaxed mb-6 max-w-xs">
              Professional flooring installation across the Greater Toronto Area. Hardwood, laminate, vinyl, tile, and carpet — done right.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-start gap-3 text-stone-400 hover:text-gold transition-colors text-[0.875rem] group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:text-gold transition-colors" strokeWidth={1.75} />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-3 text-stone-400 hover:text-gold transition-colors text-[0.875rem] group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:text-gold transition-colors" strokeWidth={1.75} />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-stone-400 text-[0.875rem]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-stone-500" strokeWidth={1.75} />
                <span>2061 McCowan Rd<br />Scarborough, ON M1S 3Y6</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-white text-[0.8125rem] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {FLOORING_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-1.5 text-stone-400 hover:text-gold transition-colors text-[0.875rem] group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-white text-[0.8125rem] uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/locations/${l.slug}`}
                    className="flex items-center gap-1.5 text-stone-400 hover:text-gold transition-colors text-[0.875rem] group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-white text-[0.8125rem] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 mb-8">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Disclaimer', href: '/disclaimer' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-stone-400 hover:text-gold transition-colors text-[0.875rem] group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white text-[0.8125rem] font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              Book a Free Estimate
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-stone-500 text-[0.75rem]">
            &copy; {year} Toronto Flooring Installers. All rights reserved.
          </p>
          <p className="text-stone-600 text-[0.75rem] text-center sm:text-right">
            Serving Toronto, Scarborough, North York, Vaughan, Markham, Mississauga &amp; Pickering
          </p>
        </div>
      </div>
    </footer>
  );
}
