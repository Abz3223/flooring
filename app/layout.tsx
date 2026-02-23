import type { Metadata } from 'next';
import { Poppins, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Flooring Installers Toronto | Hardwood, LVP, Tile & Carpet | GTA',
  description: 'Toronto\'s trusted flooring installers. Expert hardwood, laminate, vinyl, tile, and carpet installation across the GTA. Licensed, insured, 5-year warranty. Free estimates.',
  metadataBase: new URL('https://flooringinstallerstoronto.com'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://flooringinstallerstoronto.com',
    siteName: 'Flooring Installers Toronto',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${poppins.variable} ${lato.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
