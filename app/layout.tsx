import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata: Metadata = {
  metadataBase: new URL('https://flooringinstallerstoronto.com'),
  title: {
    default: 'Toronto Flooring Installers - Professional Flooring Contractors | GTA',
    template: '%s | Flooring Installers Toronto',
  },
  description: 'Professional flooring installers serving Toronto and the GTA. Expert hardwood, laminate, vinyl, tile, and carpet installation. Licensed, insured, and trusted contractors with 15+ years experience.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://flooringinstallerstoronto.com',
    siteName: 'Flooring Installers Toronto',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-navy">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
