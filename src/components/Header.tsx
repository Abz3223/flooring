'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';
import { FLOORING_SERVICES } from '../constants/services';
import { LOCATIONS } from '../constants/locations';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface transition-all duration-200 ${
        isScrolled ? 'shadow-header' : 'border-b border-stone-200'
      }`}
    >
      <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-200 ${isScrolled ? 'h-14' : 'h-16'}`}>

          <Link
            href="/"
            className="flex-shrink-0 font-serif group transition-colors duration-200"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-[1.125rem] font-extrabold tracking-tight leading-tight text-charcoal group-hover:text-charcoal-light transition-colors">
              Toronto Flooring{' '}
              <span className="text-gold group-hover:text-gold-hover transition-colors">Installers</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            <div className="relative group">
              <button className="flex items-center gap-1 text-stone-600 hover:text-charcoal px-3 py-2 text-[0.875rem] font-medium transition-colors rounded-md">
                Services <ChevronDown className="w-3.5 h-3.5 opacity-60" strokeWidth={2} />
              </button>
              <div className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-card-hover border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 py-1.5">
                {FLOORING_SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2.5 text-[0.875rem] text-stone-600 hover:text-charcoal hover:bg-stone-50 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-stone-600 hover:text-charcoal px-3 py-2 text-[0.875rem] font-medium transition-colors rounded-md">
                Locations <ChevronDown className="w-3.5 h-3.5 opacity-60" strokeWidth={2} />
              </button>
              <div className="absolute top-full left-0 mt-1.5 w-48 bg-white rounded-xl shadow-card-hover border border-stone-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 py-1.5">
                {LOCATIONS.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}`}
                    className="block px-4 py-2.5 text-[0.875rem] text-stone-600 hover:text-charcoal hover:bg-stone-50 transition-colors"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-stone-600 hover:text-charcoal px-3 py-2 text-[0.875rem] font-medium transition-colors rounded-md">
              About
            </Link>
            <Link href="/blog" className="text-stone-600 hover:text-charcoal px-3 py-2 text-[0.875rem] font-medium transition-colors rounded-md">
              Blog
            </Link>
            <Link href="/contact" className="text-stone-600 hover:text-charcoal px-3 py-2 text-[0.875rem] font-medium transition-colors rounded-md">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile + tablet: prominent gold phone icon button, primary mobile CTA */}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              aria-label={`Call ${CONTACT_INFO.phone}`}
              className="lg:hidden inline-flex items-center gap-1.5 bg-gold hover:bg-gold-hover text-white font-bold text-[0.8125rem] px-3 py-2 rounded-lg transition-colors min-h-[40px]"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">{CONTACT_INFO.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
            {/* Desktop: subtle phone text link */}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-1.5 text-stone-600 hover:text-charcoal text-[0.8125rem] font-semibold transition-colors mr-2"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={2} />
              {CONTACT_INFO.phone}
            </a>
            {/* Book Estimate button, sm+ only (mobile primary CTA is the gold phone above) */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center bg-gold hover:bg-gold-hover text-white text-[0.8125rem] font-bold px-4 py-2 rounded-lg transition-colors duration-200 min-h-[40px]"
            >
              Book a Free Estimate
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-charcoal p-2 rounded-md hover:bg-stone-100 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-surface z-40 overflow-y-auto border-t border-stone-200">
          <div className="max-w-wide mx-auto px-4 py-4 space-y-0.5">
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between text-charcoal px-4 py-3.5 rounded-xl hover:bg-stone-100 font-medium text-[0.9375rem] transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform text-stone-400 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-2 pb-1 space-y-0.5">
                  {FLOORING_SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-stone-600 px-4 py-2.5 rounded-lg hover:bg-stone-100 text-[0.875rem] transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="w-full flex items-center justify-between text-charcoal px-4 py-3.5 rounded-xl hover:bg-stone-100 font-medium text-[0.9375rem] transition-colors"
              >
                Locations
                <ChevronDown className={`w-4 h-4 transition-transform text-stone-400 ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {locationsOpen && (
                <div className="pl-2 pb-1 space-y-0.5">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-stone-600 px-4 py-2.5 rounded-lg hover:bg-stone-100 text-[0.875rem] transition-colors"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-charcoal px-4 py-3.5 rounded-xl hover:bg-stone-100 font-medium text-[0.9375rem] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 pb-6 space-y-3 border-t border-stone-200 mt-2">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-charcoal px-6 py-3.5 rounded-xl font-semibold text-[0.9375rem] transition-colors w-full"
              >
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center bg-gold hover:bg-gold-hover text-white px-6 py-3.5 rounded-xl font-semibold text-[0.9375rem] transition-colors w-full"
              >
                Book a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
