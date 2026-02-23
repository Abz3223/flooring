import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Flooring Installers Toronto',
  description: 'Terms of service for Flooring Installers Toronto. Please read these terms before using our website or services.',
  alternates: { canonical: 'https://flooringinstallerstoronto.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl mb-2">Terms of Service</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl prose prose-headings:font-heading prose-headings:text-navy prose-a:text-oak">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using flooringinstallerstoronto.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>

            <h2>2. Service Description</h2>
            <p>Flooring Installers Toronto operates as a lead generation and contractor referral service. We connect homeowners and businesses with independent flooring contractors. We are not a flooring installation company and do not directly perform installation work.</p>

            <h2>3. Lead Submissions</h2>
            <p>By submitting a request through our website, you consent to being contacted by Flooring Installers Toronto and/or contractors in our network regarding your flooring project. Standard messaging and data rates may apply.</p>

            <h2>4. Independent Contractors</h2>
            <p>Contractors referred through our service are independent businesses, not employees of Flooring Installers Toronto. We vet contractors for licensing and insurance, but are not responsible for the quality, timing, or outcome of work performed by referred contractors.</p>

            <h2>5. Warranty Claims</h2>
            <p>Our 5-year workmanship warranty applies to work performed by contractors in our network. Claims must be submitted in writing within the warranty period. The warranty covers defects in installation workmanship only, not material defects.</p>

            <h2>6. Limitation of Liability</h2>
            <p>Flooring Installers Toronto shall not be liable for any indirect, incidental, or consequential damages arising from use of our website or services. Our total liability shall not exceed the amount paid for services.</p>

            <h2>7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our website following changes constitutes acceptance of the updated terms.</p>

            <h2>8. Contact</h2>
            <p>Questions about these terms? Contact us at info@flooringinstallerstoronto.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
