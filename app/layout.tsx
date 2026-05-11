import type { Metadata } from 'next'
import Script from 'next/script'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

const GTM_ID = 'GTM-NDD24Q5J'

// Font tokens kept as `--font-serif` / `--font-sans` to avoid renaming
// every utility class that uses them. The "serif" var now points at
// Montserrat (a sans) — name is misleading but functional.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-serif',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
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
    images: [
      {
        url: '/engineered-hardwood-hallway-flooring-toronto.jpg',
        width: 1200,
        height: 630,
        alt: 'Toronto Flooring Installers — Professional Flooring Installation in the GTA',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="bg-surface text-charcoal antialiased font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
