export const metadata = {
  title: 'Privacy Policy',
  description:
    'The Simple Stream Privacy Policy - Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: December 2024</p>

        <div className="prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>
            The Simple Stream (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our live shopping
            platform.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>
              <strong>Account Information:</strong> Name, email address, company
              name, password
            </li>
            <li>
              <strong>Billing Information:</strong> Payment card details,
              billing address (processed by our payment provider)
            </li>
            <li>
              <strong>Profile Information:</strong> Business details, industry,
              website URL
            </li>
            <li>
              <strong>Communications:</strong> Messages you send us, support
              tickets, feedback
            </li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Usage Data:</strong> Pages visited, features used, stream
              statistics
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, operating
              system, device identifiers
            </li>
            <li>
              <strong>Log Data:</strong> IP address, access times, referring
              URLs
            </li>
          </ul>

          <h3>2.3 Information from Third Parties</h3>
          <ul>
            <li>
              <strong>Shopify:</strong> Store information, product data, order
              information (with your consent)
            </li>
            <li>
              <strong>Analytics Services:</strong> Aggregated usage data
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyse usage patterns and trends</li>
            <li>Detect, prevent, and address technical issues or fraud</li>
            <li>
              Send marketing communications (with your consent, which you can
              withdraw at any time)
            </li>
          </ul>

          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>We process your data under the following legal bases:</p>
          <ul>
            <li>
              <strong>Contract:</strong> Processing necessary to provide the
              Service
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Improving our Service,
              preventing fraud
            </li>
            <li>
              <strong>Consent:</strong> Marketing communications, optional
              features
            </li>
            <li>
              <strong>Legal Obligation:</strong> Compliance with laws and
              regulations
            </li>
          </ul>

          <h2>5. Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Companies that help us operate
              (hosting, payment processing, analytics)
            </li>
            <li>
              <strong>Shopify:</strong> As necessary to provide integration
              features
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets
            </li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or
            as needed to provide the Service. After account deletion, we may
            retain certain data for up to 90 days for backup and fraud
            prevention purposes, and longer if required by law.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your information, including:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Employee training on data protection</li>
          </ul>

          <h2>8. Your Rights</h2>
          <p>Under GDPR and UK data protection laws, you have the right to:</p>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of your personal data
            </li>
            <li>
              <strong>Rectification:</strong> Request correction of inaccurate
              data
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your data (&quot;right to
              be forgotten&quot;)
            </li>
            <li>
              <strong>Restriction:</strong> Request limited processing of your
              data
            </li>
            <li>
              <strong>Portability:</strong> Request transfer of your data to
              another service
            </li>
            <li>
              <strong>Objection:</strong> Object to processing based on
              legitimate interests
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Withdraw consent at any time
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at privacy@thesimplestream.com.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries
            outside the UK/EEA, including the United States (for AWS services).
            We ensure appropriate safeguards are in place, such as Standard
            Contractual Clauses.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for individuals under 18. We do not
            knowingly collect information from children. If you believe we have
            collected data from a child, please contact us immediately.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes via email or through the Service. Your
            continued use after changes constitutes acceptance of the updated
            policy.
          </p>

          <h2>12. Contact Us</h2>
          <p>For questions about this Privacy Policy, please contact:</p>
          <p>
            Email: privacy@thesimplestream.com
          </p>
          <p>
            You also have the right to lodge a complaint with the Information
            Commissioner&apos;s Office (ICO) if you believe we have not handled your
            data appropriately.
          </p>
        </div>
      </div>
    </div>
  );
}
