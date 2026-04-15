import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Toronto Flooring Installers.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using the Toronto Flooring Installers website at flooringinstallerstoronto.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of the Website</h2>
            <p className="mb-3">You agree to use this website only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the site in any way that violates applicable Canadian federal or provincial law</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any part of the website or its servers</li>
              <li>Submit false or misleading information through our contact form</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Service Quotations</h2>
            <p>
              Any information provided on this website, including pricing ranges or service descriptions, is for general informational purposes only and does not constitute a binding quote or contract. All pricing is subject to an on-site assessment. A formal written quote will be provided before any work commences, and no work will begin without your written approval.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design elements, is the property of Toronto Flooring Installers or its content licensors and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content on this site without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided on an &ldquo;as is&rdquo; basis without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Toronto Flooring Installers shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on information contained herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ontario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact</h2>
            <p>For questions about these terms, contact us at:</p>
            <div className="mt-3 bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Toronto Flooring Installers</p>
              <p>2061 McCowan Rd, Scarborough, ON M1S 3Y6</p>
              <p><a href="tel:6479050050" className="text-brand-600 hover:text-brand-700">(647) 905-0050</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
