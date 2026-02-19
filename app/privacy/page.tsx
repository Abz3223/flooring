import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_INFO } from '@/constants/contact';

export const metadata: Metadata = {
  title: 'Privacy Policy - Toronto Flooring Installers',
  description:
    'Privacy Policy for Toronto Flooring Installers. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://flooringinstallerstoronto.com/privacy',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold mb-4 text-center">Privacy Policy</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-center">Last Updated: November 13, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Toronto Flooring Installers (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates as a lead
              generation platform connecting potential customers with independent third-party flooring contractors. We
              are committed to protecting your privacy and complying with applicable Canadian privacy laws, including
              the Personal Information Protection and Electronic Documents Act (PIPEDA).
            </p>
            <p className="text-gray-700 mb-6">
              This Privacy Policy explains what personal information we collect, how we use it, who we share it with,
              and your rights regarding your personal data.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              When you submit a quote request or contact form on our website, we collect the following personal
              information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                <strong>Contact Information:</strong> Full name, phone number, email address
              </li>
              <li>
                <strong>Project Information:</strong> Project address or location, type of flooring requested, project
                details and specifications
              </li>
              <li>
                <strong>Communication Preferences:</strong> Information about how you prefer to be contacted
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, device information, and website usage
                data collected through cookies and similar technologies
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              We DO NOT collect or store credit card information, banking details, or any other financial information.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your personal information solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                <strong>Connecting You with Contractors:</strong> Sharing your information with independent contractors
                who can provide quotes and services for your project
              </li>
              <li>
                <strong>Communication:</strong> Responding to your inquiries and communicating about your quote request
              </li>
              <li>
                <strong>Service Improvement:</strong> Analyzing website usage to improve our platform and user
                experience
              </li>
              <li>
                <strong>Legal Compliance:</strong> Complying with applicable laws and regulations
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              We DO NOT sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              4. Information Sharing with Independent Contractors
            </h2>
            <p className="text-gray-700 mb-6">
              The primary purpose of our platform is to connect you with independent flooring contractors. When you
              submit a quote request, we share your contact information and project details with contractors who service
              your area. These contractors are independent third parties operating their own separate businesses and are
              not employees or agents of Toronto Flooring Installers.
            </p>
            <p className="text-gray-700 mb-6">
              By submitting your information through our platform, you explicitly consent to us sharing your personal
              information with these independent contractors for the purpose of receiving quotes and project
              consultations.
            </p>
            <p className="text-gray-700 mb-6">
              We are not responsible for how contractors use or protect your personal information once it has been
              shared with them. We recommend reviewing each contractor&apos;s own privacy practices.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              5. Third-Party Service Providers
            </h2>
            <p className="text-gray-700 mb-4">
              We may use third-party service providers to help operate our platform, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                <strong>Web Hosting Services:</strong> To host our website and store data securely
              </li>
              <li>
                <strong>Analytics Services:</strong> To understand website usage and improve our services
              </li>
              <li>
                <strong>Communication Tools:</strong> To facilitate communication between you and contractors
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              These service providers are contractually obligated to protect your information and use it only for the
              purposes we specify.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-6">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze
              website traffic, and understand user behavior. Cookies are small text files stored on your device that
              help us recognize you on return visits.
            </p>
            <p className="text-gray-700 mb-4">
              You can control cookie settings through your browser preferences. Please note that disabling cookies may
              limit your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">7. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement reasonable administrative, technical, and physical security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or destruction. However, no internet
              transmission or electronic storage method is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">8. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law. Once your information
              is no longer needed, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              9. Your Privacy Rights Under Canadian Law
            </h2>
            <p className="text-gray-700 mb-4">
              Under Canadian privacy legislation, you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>
                <strong>Access:</strong> Request access to the personal information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete personal information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations
              </li>
              <li>
                <strong>Withdrawal of Consent:</strong> Withdraw your consent for us to process your personal
                information
              </li>
              <li>
                <strong>Complaint:</strong> File a complaint with the Office of the Privacy Commissioner of Canada if
                you believe your privacy rights have been violated
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise any of these rights, please contact us using the information provided at the end of this
              policy.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">10. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal
              information from children. If you believe we have inadvertently collected information from a child, please
              contact us immediately so we can delete it.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
              laws. We will post the updated policy on this page with a new &quot;Last Updated&quot; date. We encourage
              you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4 mt-8">12. Contact Us Regarding Privacy</h2>
            <p className="text-gray-700 mb-2">
              If you have questions about this Privacy Policy, wish to exercise your privacy rights, or want to request
              deletion of your personal information, please contact us at:
            </p>
            <div className="bg-background p-6 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>{CONTACT_INFO.businessName}</strong>
              </p>
              <p className="text-gray-700">Privacy Officer</p>
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
            <p className="text-gray-700 mb-6">
              We will respond to your request within 30 days as required by Canadian privacy law.
            </p>

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
