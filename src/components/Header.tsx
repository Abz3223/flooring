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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-lg' : 'bg-navy/95'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <span className="text-oak font-heading font-bold text-xl leading-tight">Flooring</span>
            <span className="text-white font-heading font-semibold text-xl leading-tight hidden sm:inline">Installers</span>
            <span className="text-white/70 font-heading text-sm leading-tight hidden md:inline">Toronto</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10">Home</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                {FLOORING_SERVICES.map((s) => (
                  <Link key={s.id} href={`/services/${s.slug}`} className="block px-4 py-2 text-sm text-navy hover:bg-background hover:text-oak transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10">
                Locations <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
                {LOCATIONS.map((l) => (
                  <Link key={l.slug} href={`/locations/${l.slug}`} className="block px-4 py-2 text-sm text-navy hover:bg-background hover:text-oak transition-colors">
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10">Blog</Link>
            <Link href="/about" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10">About</Link>
            <Link href="/contact" className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 bg-oak hover:bg-oak-light text-navy px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT_INFO.phone}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-navy z-40 overflow-y-auto">
          <div className="container mx-auto px-4 py-6 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-white/80 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 font-medium text-base transition-colors">Home</Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between text-white/80 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 font-medium text-base transition-colors"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  {FLOORING_SERVICES.map((s) => (
                    <Link key={s.id} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block text-white/60 hover:text-oak px-4 py-2 rounded-lg hover:bg-white/10 text-sm transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="w-full flex items-center justify-between text-white/80 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 font-medium text-base transition-colors"
              >
                Locations <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {locationsOpen && (
                <div className="pl-4 space-y-1">
                  {LOCATIONS.map((l) => (
                    <Link key={l.slug} href={`/locations/${l.slug}`} onClick={() => setMobileOpen(false)} className="block text-white/60 hover:text-oak px-4 py-2 rounded-lg hover:bg-white/10 text-sm transition-colors">
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-white/80 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 font-medium text-base transition-colors">Blog</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-white/80 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 font-medium text-base transition-colors">About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-white/80 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 font-medium text-base transition-colors">Contact</Link>

            <div className="pt-4 border-t border-white/10">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-oak hover:bg-oak-light text-navy px-6 py-3 rounded-lg font-bold text-base transition-colors w-full"
              >
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
