import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Toronto Flooring Installers | Professional Floor Installation GTA',
    template: '%s | Toronto Flooring Installers',
  },
  description:
    'Toronto Flooring Installers — professional hardwood, laminate, vinyl, tile, and carpet installation serving Toronto, Scarborough, North York, Vaughan, Markham, Mississauga, and Pickering.',
  metadataBase: new URL('https://flooringinstallerstoronto.com'),
  openGraph: {
    siteName: 'Toronto Flooring Installers',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
