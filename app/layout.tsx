import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

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
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body className="bg-surface text-charcoal antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
