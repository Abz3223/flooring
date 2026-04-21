import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Toronto Flooring Installers.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              When you contact us through our website&apos;s contact form, we collect the personal information you provide, including your name, email address, phone number, and any details about your flooring project. We use this information solely to respond to your enquiry and provide the services you request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to your enquiry and schedule estimates</li>
              <li>Provide flooring installation services</li>
              <li>Send project updates and invoices</li>
              <li>Follow up after project completion</li>
            </ul>
            <p className="mt-3">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cookies and Analytics</h2>
            <p>
              Our website may use cookies and similar tracking technologies to analyze site traffic and improve the user experience. You can control cookie settings through your browser. We use analytics data in aggregate form only and do not use it to identify individual users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Security</h2>
            <p>
              We take reasonable precautions to protect your personal information. Our website uses SSL encryption, and contact form submissions are transmitted securely. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Retention</h2>
            <p>
              We retain your contact information for as long as necessary to fulfil the purpose for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of your personal information. To exercise these rights, or if you have any privacy-related questions, please contact us at:
            </p>
            <div className="mt-3 bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900">Toronto Flooring Installers</p>
              <p>2061 McCowan Rd, Scarborough, ON M1S 3Y6</p>
              <p><a href="tel:6479050050" className="text-brand-600 hover:text-brand-700">(647) 905-0050</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
