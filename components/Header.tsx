'use client'

import Link from 'next/link'
import { useState } from 'react'

const services = [
  { label: 'Hardwood Flooring', href: '/services/hardwood-flooring-installation' },
  { label: 'Laminate Flooring', href: '/services/laminate-flooring-installation' },
  { label: 'Vinyl / LVP Flooring', href: '/services/vinyl-flooring-installation' },
  { label: 'Tile Flooring', href: '/services/tile-flooring-installation' },
  { label: 'Carpet Installation', href: '/services/carpet-installation' },
]

const locations = [
  { label: 'Toronto', href: '/locations/toronto' },
  { label: 'Scarborough', href: '/locations/scarborough' },
  { label: 'North York', href: '/locations/north-york' },
  { label: 'Vaughan', href: '/locations/vaughan' },
  { label: 'Markham', href: '/locations/markham' },
  { label: 'Mississauga', href: '/locations/mississauga' },
  { label: 'Pickering', href: '/locations/pickering' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900 leading-tight">
              Toronto Flooring<br className="hidden sm:block" />
              <span className="text-brand-600"> Installers</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-brand-600 font-medium transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-brand-600 font-medium transition-colors"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                Locations
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {locationsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  {locations.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block py-1.5 text-gray-700 hover:text-brand-600"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Locations</p>
            {locations.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-1.5 text-gray-700 hover:text-brand-600"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-4 space-y-2">
            <Link href="/about" className="block py-1.5 text-gray-700 hover:text-brand-600" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="block py-1.5 text-gray-700 hover:text-brand-600" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link
              href="/contact"
              className="block mt-3 bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-brand-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
