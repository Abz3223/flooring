import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/constants/contact';

export const metadata: Metadata = {
  title: 'Website Disclaimer - Toronto Flooring Installers',
  description:
    'Important disclaimer regarding the nature of services provided by Toronto Flooring Installers.',
  alternates: {
    canonical: 'https://flooringinstallerstoronto.com/disclaimer',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DisclaimerPage() {
  return (
    <div>
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold mb-4 text-center">Website Disclaimer</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">
            Important Legal Notice - Please Read Carefully
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-oak/10 border-l-4 border-oak p-6 mb-8">
              <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-0">CRITICAL NOTICE</h2>
              <p className="text-gray-900 font-semibold mb-0">
                Toronto Flooring Installers is ONLY a lead generation and customer connection platform. We DO NOT
                provide flooring installation services, contracting services, or any related work. All services are
                performed exclusively by independent third-party contractors who operate their own separate businesses.
              </p>
            </div>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4">1. Nature of Platform</h2>
            <p className="text-gray-700 mb-6">
              Toronto Flooring Installers operates solely as a digital platform that connects potential customers
              seeking flooring services with independent contractors who provide those services. We are an intermediary
              connection service, not a flooring company, contractor, or service provider.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              2. No Services Provided by Toronto Flooring Installers
            </h2>
            <p className="text-gray-700 mb-4">Toronto Flooring Installers DOES NOT:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide flooring installation, repair, or renovation services of any kind</li>
              <li>Employ flooring installers, contractors, or tradespeople</li>
              <li>Perform or supervise any physical work at customer properties</li>
              <li>Enter into contracts for services with customers</li>
              <li>Guarantee, warranty, or certify any work performed by contractors</li>
              <li>Assume responsibility for contractor workmanship, safety, or compliance</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              3. Independent Contractor Relationship
            </h2>
            <p className="text-gray-700 mb-6">
              All contractors connected through our platform are independent third-party businesses. They are NOT
              employees, agents, representatives, or partners of Toronto Flooring Installers. Each contractor:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Operates their own independent business</li>
              <li>Is solely responsible for their own licensing and insurance</li>
              <li>Sets their own pricing, terms, and conditions</li>
              <li>Controls how and when work is performed</li>
              <li>Is fully liable for their work, conduct, and compliance with laws</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              4. No Verification or Vetting of Contractors
            </h2>
            <p className="text-gray-700 mb-6">
              Toronto Flooring Installers makes NO REPRESENTATIONS OR WARRANTIES regarding the qualifications,
              licensing, insurance, competency, reliability, or suitability of any contractor. We do not verify, vet,
              screen, or endorse contractors. The presence of a contractor on our platform does not constitute a
              recommendation or guarantee of quality.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              5. No Warranties or Guarantees
            </h2>
            <p className="text-gray-700 mb-4">
              Toronto Flooring Installers provides NO WARRANTIES OR GUARANTEES of any kind regarding:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Quality of workmanship or materials</li>
              <li>Timeliness of project completion</li>
              <li>Accuracy of estimates or pricing</li>
              <li>Compliance with building codes or regulations</li>
              <li>Contractor licensing, insurance, or bonding status</li>
              <li>Safety practices or procedures</li>
              <li>Resolution of disputes between customers and contractors</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              6. No Liability for Contractor Actions
            </h2>
            <p className="text-gray-700 mb-4">
              Toronto Flooring Installers SHALL NOT BE LIABLE OR RESPONSIBLE FOR:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Property damage caused by contractors</li>
              <li>Personal injury or death arising from contractor services</li>
              <li>Defective, incomplete, or substandard workmanship</li>
              <li>Financial losses, including deposits or payments made to contractors</li>
              <li>Project delays, cancellations, or abandonment</li>
              <li>Breach of contract by any contractor</li>
              <li>Fraud, misrepresentation, or unlawful conduct by contractors</li>
              <li>Code violations, permit failures, or legal non-compliance</li>
              <li>Warranty claims, defects discovered after installation</li>
              <li>Any damages, losses, or injuries of any kind</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              7. User Due Diligence Required
            </h2>
            <p className="text-gray-700 mb-4">It is YOUR SOLE RESPONSIBILITY to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Verify contractor licensing with provincial and municipal authorities</li>
              <li>Confirm contractors carry adequate liability insurance and WSIB coverage</li>
              <li>Check contractor references and review past work</li>
              <li>Obtain and compare multiple written quotes</li>
              <li>Review all contracts thoroughly before signing</li>
              <li>Ensure all necessary permits are obtained by the contractor</li>
              <li>Inspect work in progress and upon completion</li>
              <li>Address any concerns directly with the contractor</li>
              <li>Make payments only according to mutually agreed terms</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">8. No Professional Advice</h2>
            <p className="text-gray-700 mb-6">
              Information provided on this website is for general informational purposes only and does not constitute
              professional advice. We do not provide guidance regarding flooring selection, installation methods,
              structural concerns, building codes, or any technical matters. Consult qualified professionals for advice
              specific to your project.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">9. Accuracy of Information</h2>
            <p className="text-gray-700 mb-6">
              While we strive to provide accurate information on our website, we make no guarantees regarding the
              completeness, accuracy, reliability, or timeliness of any content. Information may become outdated, and
              we are not obligated to update it. Pricing, availability, and other details provided by contractors are
              subject to change.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">10. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the content, accuracy,
              privacy practices, or services of any third-party websites. Access to external sites is at your own risk.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">11. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes regarding services, pricing, quality, or other matters must be resolved directly between you
              and the contractor. Toronto Flooring Installers is not a party to any disputes and cannot mediate,
              arbitrate, or intervene in customer-contractor conflicts.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">12. Limitation of Damages</h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, Toronto Flooring Installers, its owners, employees, and
              affiliates shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or
              exemplary damages arising from your use of this platform or interaction with any contractor, even if we
              have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">13. Acknowledgment</h2>
            <p className="text-gray-700 mb-6">
              By using this website and submitting your information, you acknowledge that you have read, understood, and
              agree to be bound by this Disclaimer, along with our Terms and Conditions and Privacy Policy.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">14. Contact Information</h2>
            <p className="text-gray-700 mb-2">
              If you have questions about this Disclaimer, please contact us at:
            </p>
            <div className="bg-background p-6 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>{CONTACT_INFO.businessName}</strong>
              </p>
              <p className="text-gray-700">{CONTACT_INFO.address.street}</p>
              <p className="text-gray-700">
                {CONTACT_INFO.address.city}, {CONTACT_INFO.address.province} {CONTACT_INFO.address.postalCode}
              </p>
              <p className="text-gray-700 mt-2">
                Email:{' '}
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-oak hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="text-gray-700">
                Phone:{' '}
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-oak hover:underline">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-center text-gray-600">
                <Link href="/" className="text-oak hover:underline">
                  Return to Home
                </Link>
                {' | '}
                <Link href="/terms" className="text-oak hover:underline">
                  Terms &amp; Conditions
                </Link>
                {' | '}
                <Link href="/privacy" className="text-oak hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
