import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/constants/contact';

export const metadata: Metadata = {
  title: 'Terms and Conditions - Toronto Flooring Installers',
  description: 'Terms and Conditions for using Toronto Flooring Installers lead generation platform.',
  alternates: {
    canonical: 'https://flooringinstallerstoronto.com/terms',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold mb-4 text-center">Terms and Conditions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">Last Updated: November 13, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">
              1. Definitions and Nature of Service
            </h2>
            <p className="text-gray-700 mb-6">
              Toronto Flooring Installers (&quot;the Platform,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              operates exclusively as a lead generation and customer connection platform. We DO NOT provide flooring
              installation services, contracting services, or any related trades work. Our sole function is to connect
              potential customers with independent third-party contractors who operate their own separate businesses.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              2. Third-Party Contractor Relationship
            </h2>
            <p className="text-gray-700 mb-4">
              All flooring installation services, repair work, and related activities are performed exclusively by
              independent contractors who are NOT employees, agents, or representatives of Toronto Flooring Installers.
            </p>
            <p className="text-gray-700 mb-4">
              By submitting your information through this Platform, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Any contract for services is formed directly between you and the independent contractor</li>
              <li>Toronto Flooring Installers is not a party to any service agreement</li>
              <li>
                We have no control over the quality, timing, legality, or any other aspect of services provided by
                contractors
              </li>
              <li>
                Contractors are solely responsible for their own licensing, insurance, permits, and compliance with
                applicable laws
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              3. No Guarantees Regarding Contractors
            </h2>
            <p className="text-gray-700 mb-4">
              Toronto Flooring Installers makes NO WARRANTIES, REPRESENTATIONS, OR GUARANTEES regarding:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>The quality, skill, or competency of any contractor</li>
              <li>Whether contractors are properly licensed or insured</li>
              <li>The accuracy of contractor pricing or estimates</li>
              <li>The timely completion of any work</li>
              <li>Compliance with building codes, permits, or regulations</li>
              <li>The safety practices of any contractor</li>
              <li>The suitability of any contractor for your specific project</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              4. User Responsibility and Due Diligence
            </h2>
            <p className="text-gray-700 mb-4">You are solely responsible for:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Verifying any contractor&apos;s licensing, insurance, and qualifications</li>
              <li>Checking references and reviewing contractor credentials</li>
              <li>Obtaining multiple quotes and comparing services</li>
              <li>Reviewing and understanding all contracts before signing</li>
              <li>Ensuring all necessary permits are obtained</li>
              <li>Inspecting completed work and addressing concerns directly with the contractor</li>
              <li>Making all payments directly to the contractor based on agreed terms</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TORONTO FLOORING INSTALLERS SHALL NOT BE LIABLE FOR ANY:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Property damage, personal injury, or death arising from contractor services</li>
              <li>Defective workmanship, incomplete work, or project delays</li>
              <li>Financial losses, including deposits paid to contractors</li>
              <li>Breach of contract by any contractor</li>
              <li>Unlicensed, uninsured, or fraudulent contractors</li>
              <li>Disputes between you and any contractor</li>
              <li>Code violations, permit issues, or legal non-compliance</li>
              <li>Any direct, indirect, incidental, consequential, or punitive damages</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">6. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify, defend, and hold harmless Toronto Flooring Installers, its owners, employees, and
              affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from
              or related to: (a) your use of the Platform; (b) your interaction with any contractor; (c) any services
              performed by contractors; (d) any breach of these Terms by you; or (e) any violation of applicable laws
              or regulations.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">7. No Warranties</h2>
            <p className="text-gray-700 mb-4">
              THE PLATFORM AND ALL SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY
              WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties regarding contractor quality, reliability, or competency</li>
              <li>Warranties that the Platform will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy of information provided</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">8. Data Submission and Consent</h2>
            <p className="text-gray-700 mb-6">
              By submitting your contact information through this Platform, you expressly consent to us sharing your
              name, phone number, email address, project details, and any other information you provide with independent
              contractors for the purpose of receiving quotes and discussing your project. You understand that
              contractors may contact you directly and that we have no control over their communication practices.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">9. No Professional Advice</h2>
            <p className="text-gray-700 mb-6">
              Nothing on this Platform constitutes professional advice regarding flooring selection, installation
              methods, building codes, or any other technical matters. You should consult with qualified professionals
              regarding your specific project requirements.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">10. Modification of Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. Your continued use of the Platform following any
              changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario,
              Canada, without regard to conflict of law principles. Any disputes arising from these Terms or your use
              of the Platform shall be subject to the exclusive jurisdiction of the courts located in Toronto, Ontario.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">12. Severability</h2>
            <p className="text-gray-700 mb-6">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall
              continue in full force and effect.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">13. Contact Information</h2>
            <p className="text-gray-700 mb-2">
              If you have questions about these Terms, please contact us at:
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
                <Link href="/privacy" className="text-oak hover:underline">
                  Privacy Policy
                </Link>
                {' | '}
                <Link href="/disclaimer" className="text-oak hover:underline">
                  Disclaimer
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
