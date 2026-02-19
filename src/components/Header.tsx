'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Home } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 lg:py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="w-6 h-6 sm:w-8 sm:h-8 text-oak flex-shrink-0" />
            <div className="min-w-0">
              <div className="text-sm sm:text-base lg:text-xl font-heading font-bold truncate">{CONTACT_INFO.businessName}</div>
              <div className="hidden sm:block text-xs text-oak">Licensed & Insured GTA Flooring Contractors</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-oak transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-oak transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-navy rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-2">
                  <Link href="/services/hardwood-flooring-installation" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Hardwood Flooring
                  </Link>
                  <Link href="/services/laminate-flooring-installation" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Laminate Flooring
                  </Link>
                  <Link href="/services/vinyl-flooring-installation" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Vinyl Flooring
                  </Link>
                  <Link href="/services/tile-flooring-installation" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Tile Flooring
                  </Link>
                  <Link href="/services/carpet-installation" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Carpet Installation
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-oak transition-colors">
                Service Areas
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white text-navy rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-2">
                  <Link href="/locations/toronto" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Toronto
                  </Link>
                  <Link href="/locations/scarborough" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Scarborough
                  </Link>
                  <Link href="/locations/north-york" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    North York
                  </Link>
                  <Link href="/locations/vaughan" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Vaughan
                  </Link>
                  <Link href="/locations/markham" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Markham
                  </Link>
                  <Link href="/locations/mississauga" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Mississauga
                  </Link>
                  <Link href="/locations/pickering" className="block px-4 py-2 hover:bg-oak/10 transition-colors">
                    Pickering
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="hover:text-oak transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-oak transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-oak transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-oak font-semibold hover:text-oak-light transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">{CONTACT_INFO.phone}</span>
            </a>
            <a
              href="#quote"
              className="bg-oak hover:bg-oak-light text-navy px-6 py-2 rounded-md font-semibold transition-colors"
            >
              Request Callback
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 -mr-2 hover:bg-navy-light rounded-md transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="lg:hidden pb-4 border-t border-navy-light mt-3 pt-4 relative z-50">
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <div className="pl-2 space-y-2">
                  <p className="text-oak font-semibold py-1 px-2">Services</p>
                  <Link href="/services/hardwood-flooring-installation" className="block hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                    Hardwood Flooring
                  </Link>
                  <Link href="/services/laminate-flooring-installation" className="block hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                    Laminate Flooring
                  </Link>
                  <Link href="/services/vinyl-flooring-installation" className="block hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                    Vinyl Flooring
                  </Link>
                  <Link href="/services/tile-flooring-installation" className="block hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                    Tile Flooring
                  </Link>
                  <Link href="/services/carpet-installation" className="block hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                    Carpet Installation
                  </Link>
                </div>
                <Link href="/blog" className="hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="/about" className="hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="hover:text-oak transition-colors py-2 px-2 rounded-md hover:bg-navy-light" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center space-x-2 text-oak font-semibold py-3 px-2 rounded-md hover:bg-navy-light min-h-[44px]"
                >
                  <Phone className="w-5 h-5" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <a
                  href="#quote"
                  className="bg-oak hover:bg-oak-light text-navy px-6 py-3 rounded-md font-semibold transition-colors inline-block text-center min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Callback
                </a>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
