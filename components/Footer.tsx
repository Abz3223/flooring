import Link from 'next/link'

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

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Toronto Flooring Installers</h3>
            <address className="not-italic text-sm space-y-1 mb-4">
              <p>2061 McCowan Rd</p>
              <p>Scarborough, ON M1S 3Y6</p>
            </address>
            <a
              href="tel:6479050050"
              className="text-brand-400 hover:text-brand-300 font-semibold text-lg block mb-4"
            >
              (647) 905-0050
            </a>
            <p className="text-sm text-gray-400">
              Flooring installation throughout the Greater Toronto Area, backed by a 5-year workmanship warranty.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm hover:text-brand-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-brand-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-brand-400 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-brand-400 transition-colors">Blog</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-brand-400 transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-brand-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-brand-700 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {year} Toronto Flooring Installers. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            <a href="https://flooringinstallerstoronto.com" className="hover:text-gray-400">
              flooringinstallerstoronto.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
