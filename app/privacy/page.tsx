import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Flooring Installers Toronto',
  description: 'Privacy policy for Flooring Installers Toronto. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://flooringinstallerstoronto.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl mb-2">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl prose prose-headings:font-heading prose-headings:text-navy prose-a:text-oak">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide when requesting a flooring estimate: name, phone number, email address, property address, and project details. We also collect standard website usage data (IP address, browser type, pages visited) through analytics tools.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to: contact you about your flooring estimate request, connect you with qualified contractors in our network, improve our website and services, and send relevant communications about your project.</p>

            <h2>3. Information Sharing</h2>
            <p>We share your contact information with flooring contractors in our network who are relevant to your project and geographic area. We do not sell your personal information to third parties. Contractors are bound by confidentiality agreements.</p>

            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. However, no internet transmission is 100% secure. We encourage you to use caution when sharing information online.</p>

            <h2>5. Cookies</h2>
            <p>Our website uses cookies to improve your browsing experience and analyse site traffic. You can disable cookies in your browser settings, though some features may not function properly.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at info@flooringinstallerstoronto.com.</p>

            <h2>7. Contact</h2>
            <p>Questions about this privacy policy? Email us at info@flooringinstallerstoronto.com or call (647) 905-0050.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
