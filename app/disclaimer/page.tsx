import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Flooring Installers Toronto',
  description: 'Disclaimer for Flooring Installers Toronto. Important information about our referral services and contractor relationships.',
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl mb-2">Disclaimer</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl prose prose-headings:font-heading prose-headings:text-navy">
            <h2>Referral Service Disclaimer</h2>
            <p>Flooring Installers Toronto is a contractor referral and lead generation service. We connect homeowners and businesses with independent flooring contractors throughout the Greater Toronto Area. We do not directly perform flooring installation services.</p>

            <h2>Contractor Independence</h2>
            <p>All contractors referred through our network are independent businesses operating under their own licences and insurance. While we vet contractors for appropriate licensing and insurance coverage, we cannot guarantee the quality of their work or ensure specific outcomes for any project.</p>

            <h2>Pricing Disclaimer</h2>
            <p>Any pricing information on this website is for general guidance only. Actual project costs vary based on square footage, materials selected, subfloor conditions, complexity, and contractor availability. Official pricing is provided only through a detailed on-site estimate from the referred contractor.</p>

            <h2>Accuracy of Information</h2>
            <p>While we strive to maintain accurate and current information on our website, we make no warranties about the completeness, reliability, or accuracy of any content. Use of any information on this site is at your own risk.</p>

            <h2>External Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of these sites and encourage you to review their privacy policies.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this disclaimer, please contact us at info@flooringinstallerstoronto.com or call (647) 905-0050.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
