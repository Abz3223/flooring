import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 sm:mb-4 text-oak">
              {CONTACT_INFO.businessName}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
              Connecting homeowners with trusted, independent flooring contractors throughout Toronto and the GTA.
            </p>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Lead generation platform only. We do not provide flooring services.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4 text-oak">Services</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <Link href="/services/hardwood-flooring-installation" className="hover:text-oak transition-colors">
                  Hardwood Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/laminate-flooring-installation" className="hover:text-oak transition-colors">
                  Laminate Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/vinyl-flooring-installation" className="hover:text-oak transition-colors">
                  Vinyl Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/tile-flooring-installation" className="hover:text-oak transition-colors">
                  Tile Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/carpet-installation" className="hover:text-oak transition-colors">
                  Carpet Installation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4 text-oak">Service Areas</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <Link href="/locations/toronto" className="hover:text-oak transition-colors">
                  Toronto
                </Link>
              </li>
              <li>
                <Link href="/locations/scarborough" className="hover:text-oak transition-colors">
                  Scarborough
                </Link>
              </li>
              <li>
                <Link href="/locations/north-york" className="hover:text-oak transition-colors">
                  North York
                </Link>
              </li>
              <li>
                <Link href="/locations/vaughan" className="hover:text-oak transition-colors">
                  Vaughan
                </Link>
              </li>
              <li>
                <Link href="/locations/markham" className="hover:text-oak transition-colors">
                  Markham
                </Link>
              </li>
              <li>
                <Link href="/locations/mississauga" className="hover:text-oak transition-colors">
                  Mississauga
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4 text-oak">Contact Info</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-oak flex-shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-oak transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-oak flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-oak transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-oak flex-shrink-0 mt-0.5" />
                <div>
                  {CONTACT_INFO.address.street}<br />
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.province} {CONTACT_INFO.address.postalCode}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-7 md:mt-8 pt-6 sm:pt-7 md:pt-8">
          <div className="bg-oak/10 border-l-4 border-oak p-3 sm:p-4 mb-5 sm:mb-6 rounded">
            <p className="text-xs text-gray-200 leading-relaxed">
              <strong className="text-white">Important Notice:</strong> {CONTACT_INFO.businessName} is a lead generation platform that connects customers with independent third-party flooring contractors. We do not provide flooring installation or contracting services. All services are performed by independent contractors who are solely responsible for their work, licensing, and insurance.
            </p>
          </div>

          <div className="text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; {currentYear} {CONTACT_INFO.businessName}. All rights reserved.</p>
            <p className="mt-2.5 sm:mt-3">
              <Link href="/about" className="hover:text-oak transition-colors mx-2">About</Link>
              <span className="mx-2">|</span>
              <Link href="/contact" className="hover:text-oak transition-colors mx-2">Contact</Link>
              <span className="mx-2">|</span>
              <Link href="/blog" className="hover:text-oak transition-colors mx-2">Blog</Link>
            </p>
            <p className="mt-2.5 sm:mt-3">
              <Link href="/terms" className="hover:text-oak transition-colors mx-2 text-xs">Terms & Conditions</Link>
              <span className="mx-2">|</span>
              <Link href="/privacy" className="hover:text-oak transition-colors mx-2 text-xs">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="/disclaimer" className="hover:text-oak transition-colors mx-2 text-xs">Disclaimer</Link>
              <span className="mx-2">|</span>
              <Link href="/sitemap" className="hover:text-oak transition-colors mx-2 text-xs">Sitemap</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
