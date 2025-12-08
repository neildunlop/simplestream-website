export const metadata = {
  title: 'Cookie Policy',
  description:
    'The Simple Stream Cookie Policy - Learn how we use cookies and similar technologies.',
};

export default function CookiesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Cookie Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: December 2024</p>

        <div className="prose prose-gray max-w-none">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help websites remember your preferences, understand
            how you use the site, and improve your experience.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>The Simple Stream uses cookies and similar technologies to:</p>
          <ul>
            <li>Keep you signed in to your account</li>
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our Service</li>
            <li>Improve our Service based on usage patterns</li>
            <li>Provide security features</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>

          <h3>3.1 Essential Cookies</h3>
          <p>
            These cookies are necessary for the Service to function properly.
            They enable core features like authentication, security, and account
            management.
          </p>
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-2 text-left">Cookie</th>
                <th className="border p-2 text-left">Purpose</th>
                <th className="border p-2 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">session_id</td>
                <td className="border p-2">Maintains your login session</td>
                <td className="border p-2">Session</td>
              </tr>
              <tr>
                <td className="border p-2">csrf_token</td>
                <td className="border p-2">Security protection</td>
                <td className="border p-2">Session</td>
              </tr>
            </tbody>
          </table>

          <h3>3.2 Functional Cookies</h3>
          <p>
            These cookies remember your preferences to provide enhanced features.
          </p>
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-2 text-left">Cookie</th>
                <th className="border p-2 text-left">Purpose</th>
                <th className="border p-2 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">preferences</td>
                <td className="border p-2">Stores your display preferences</td>
                <td className="border p-2">1 year</td>
              </tr>
              <tr>
                <td className="border p-2">language</td>
                <td className="border p-2">Remembers your language choice</td>
                <td className="border p-2">1 year</td>
              </tr>
            </tbody>
          </table>

          <h3>3.3 Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our
            Service by collecting anonymous usage information.
          </p>
          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="border p-2 text-left">Cookie</th>
                <th className="border p-2 text-left">Purpose</th>
                <th className="border p-2 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">_analytics</td>
                <td className="border p-2">Usage analytics</td>
                <td className="border p-2">1 year</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Third-Party Cookies</h2>
          <p>
            Some cookies on our Service are set by third-party services we use:
          </p>
          <ul>
            <li>
              <strong>Plausible Analytics:</strong> Privacy-friendly analytics
              (no cookies by default)
            </li>
            <li>
              <strong>Stripe:</strong> Payment processing (when you make a
              payment)
            </li>
          </ul>

          <h2>5. Managing Cookies</h2>
          <p>You can control cookies through your browser settings:</p>
          <ul>
            <li>
              <strong>Chrome:</strong> Settings &gt; Privacy and security &gt;
              Cookies
            </li>
            <li>
              <strong>Firefox:</strong> Settings &gt; Privacy & Security &gt;
              Cookies
            </li>
            <li>
              <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies
            </li>
            <li>
              <strong>Edge:</strong> Settings &gt; Cookies and site permissions
            </li>
          </ul>
          <p>
            Note: Disabling essential cookies may prevent you from using some
            features of the Service.
          </p>

          <h2>6. Do Not Track</h2>
          <p>
            Our Service currently does not respond to &quot;Do Not Track&quot; signals.
            However, you can opt out of analytics cookies as described above.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us
            at:
          </p>
          <p>
            Email: privacy@thesimplestream.com
            <br />
            Address: London, United Kingdom
          </p>
        </div>
      </div>
    </div>
  );
}
