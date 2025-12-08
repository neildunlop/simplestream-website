export const metadata = {
  title: 'Terms of Service',
  description: 'The Simple Stream Terms of Service - Read our terms and conditions.',
};

export default function TermsPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-8">Last updated: December 2024</p>

        <div className="prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using The Simple Stream (&quot;the Service&quot;), you agree to be
            bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to
            these Terms, please do not use the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            The Simple Stream provides a live shopping platform that enables retailers
            to broadcast live video streams, display products, and facilitate
            purchases through integration with Shopify stores.
          </p>

          <h2>3. Account Registration</h2>
          <p>To use the Service, you must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>

          <h2>4. Subscription and Billing</h2>
          <p>
            The Service is offered on a subscription basis. By subscribing, you
            agree to:
          </p>
          <ul>
            <li>Pay the applicable subscription fees</li>
            <li>
              Automatic renewal unless cancelled before the next billing period
            </li>
            <li>
              Fee changes with 30 days notice before the next billing period
            </li>
          </ul>
          <p>
            Refunds may be provided at our discretion. Please contact support for
            refund requests.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit harmful, offensive, or illegal content</li>
            <li>
              Interfere with or disrupt the Service or servers connected to it
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Service
            </li>
            <li>
              Use the Service for any fraudulent or deceptive purposes
            </li>
          </ul>

          <h2>6. Content and Intellectual Property</h2>
          <p>
            You retain ownership of content you upload to the Service. By
            uploading content, you grant The Simple Stream a license to use, display,
            and distribute that content as necessary to provide the Service.
          </p>
          <p>
            You are responsible for ensuring you have the rights to any content
            you upload, including product images, videos, and descriptions.
          </p>

          <h2>7. Third-Party Integrations</h2>
          <p>
            The Service integrates with third-party platforms including Shopify
            and Amazon Web Services. Your use of these integrations is subject to
            the respective third-party terms of service.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, The Simple Stream shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages resulting from your use of the Service.
          </p>
          <p>
            Our total liability shall not exceed the amount paid by you for the
            Service in the twelve months preceding the claim.
          </p>

          <h2>9. Service Availability</h2>
          <p>
            We strive for 99.9% uptime but do not guarantee uninterrupted access
            to the Service. We may modify, suspend, or discontinue the Service at
            any time with reasonable notice.
          </p>

          <h2>10. Termination</h2>
          <p>
            Either party may terminate this agreement at any time. Upon
            termination:
          </p>
          <ul>
            <li>Your access to the Service will be revoked</li>
            <li>You remain responsible for any outstanding charges</li>
            <li>
              Your data may be deleted after a reasonable retention period
            </li>
          </ul>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any
            disputes shall be resolved in the courts of England and Wales.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of
            significant changes via email or through the Service. Continued use
            after changes constitutes acceptance of the new Terms.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <p>
            Email: legal@thesimplestream.com
            <br />
            Address: London, United Kingdom
          </p>
        </div>
      </div>
    </div>
  );
}
