import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Shopify Integration Guide',
  description:
    'Step-by-step guide to connecting your Shopify store and syncing products with The Simple Stream.',
};

export default function ShopifyIntegrationGuidePage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <Link
            href="/resources"
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-8">
            <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
              <ShoppingCart className="w-4 h-4" />
              <span>Integration</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Shopify Integration Guide
            </h1>
            <p className="text-gray-600 mb-8">
              Learn how to connect your Shopify store to enable live shopping features.
            </p>

            {/* Overview Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">1</span>
                Overview
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  The Simple Stream integrates with your Shopify store to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Import your product catalogue</strong> for use in live streams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Enable checkout</strong> so viewers can purchase products directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Sync product updates</strong> automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Track inventory</strong> in real-time during streams</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Prerequisites Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">2</span>
                Prerequisites
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">Before you begin, ensure you have:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    A Shopify store (any plan - Basic, Shopify, Advanced, or Plus)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Store owner or admin access to your Shopify store
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    A Simple Stream account
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    Products published in your Shopify store
                  </li>
                </ul>
              </div>
            </section>

            {/* Step-by-Step Setup */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">3</span>
                Step-by-Step Setup
              </h2>
              <div className="pl-10 space-y-6">
                {/* Step 1 */}
                <div className="border-l-2 border-gray-200 pl-4">
                  <h3 className="font-medium text-gray-900 mb-2">Step 1: Go to Integrations</h3>
                  <p className="text-gray-600">
                    Log in to your Simple Stream dashboard and navigate to the Integrations section.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="border-l-2 border-gray-200 pl-4">
                  <h3 className="font-medium text-gray-900 mb-2">Step 2: Enter Your Store URL</h3>
                  <p className="text-gray-600 mb-2">
                    Enter your Shopify store URL in the input field. You can use any of these formats:
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1 ml-4">
                    <li><code className="bg-gray-100 px-1 rounded">my-store</code></li>
                    <li><code className="bg-gray-100 px-1 rounded">my-store.myshopify.com</code></li>
                    <li><code className="bg-gray-100 px-1 rounded">https://my-store.myshopify.com</code></li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-2 border-gray-200 pl-4">
                  <h3 className="font-medium text-gray-900 mb-2">Step 3: Click Connect</h3>
                  <p className="text-gray-600">
                    Click the <strong>Connect</strong> button. You&apos;ll be redirected to Shopify to authorise the connection.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="border-l-2 border-gray-200 pl-4">
                  <h3 className="font-medium text-gray-900 mb-2">Step 4: Authorise on Shopify</h3>
                  <p className="text-gray-600 mb-2">
                    If this is your first time connecting, you&apos;ll need to:
                  </p>
                  <ol className="text-gray-600 space-y-1 ml-4 list-decimal list-inside">
                    <li>Log into your Shopify account (if not already logged in)</li>
                    <li>Review the permissions requested</li>
                    <li>Click <strong>Install app</strong> to authorise</li>
                  </ol>
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> If you&apos;re already logged into Shopify and have previously installed the app,
                      this step will happen automatically and you&apos;ll be redirected back instantly.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="border-l-2 border-green-400 pl-4">
                  <h3 className="font-medium text-gray-900 mb-2">Step 5: Done!</h3>
                  <p className="text-gray-600">
                    You&apos;ll be redirected back to Simple Stream with a success message.
                    Your store is now connected and you can start syncing products.
                  </p>
                </div>
              </div>
            </section>

            {/* Syncing Products */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">4</span>
                Syncing Products
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Once connected, your products will sync automatically. You can also trigger a manual sync at any time.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Automatic Sync</h3>
                    <p className="text-sm text-gray-600">
                      Products sync automatically when you connect your store and periodically thereafter.
                      New products, price changes, and inventory updates are reflected automatically.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Manual Sync</h3>
                    <p className="text-sm text-gray-600">
                      Click the &quot;Sync Products&quot; button in your dashboard to force an immediate sync.
                      This is useful after adding new products to your Shopify store.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Permissions Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">5</span>
                Permissions Explained
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  When installing the app, Shopify will ask you to approve these permissions:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 pr-4 font-medium text-gray-900">Permission</th>
                        <th className="text-left py-2 font-medium text-gray-900">What It Does</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-2 pr-4 text-gray-700">Read products</td>
                        <td className="py-2 text-gray-600">Allows us to import your product catalogue</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 text-gray-700">Read/Write checkouts</td>
                        <td className="py-2 text-gray-600">Enables creating checkout sessions for viewers</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 text-gray-700">Storefront access</td>
                        <td className="py-2 text-gray-600">Allows viewers to add products to cart during streams</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 text-gray-700">Read inventory</td>
                        <td className="py-2 text-gray-600">Shows real-time stock levels during streams</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Security Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">6</span>
                Security &amp; Privacy
              </h2>
              <div className="pl-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">What We Access</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Product information (names, prices, images)</li>
                      <li>• Inventory levels</li>
                      <li>• Checkout creation for purchases</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">What We DON&apos;T Access</h3>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Customer personal data</li>
                      <li>• Payment information</li>
                      <li>• Order history</li>
                      <li>• Other apps on your store</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Your Shopify access tokens are encrypted before storage and never exposed in the browser or logs.
                </p>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">7</span>
                Troubleshooting
              </h2>
              <div className="pl-10 space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    &quot;Connection Failed&quot; Error
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>OAuth state validation failed:</strong> Session expired - try again within 10 minutes</li>
                    <li><strong>Failed to connect to Shopify:</strong> Contact Simple Stream support</li>
                    <li><strong>Missing required parameters:</strong> Try connecting again</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    Store Shows as Disconnected
                  </h3>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Check if the app is still installed in Shopify Admin (Settings &gt; Apps)</li>
                    <li>If not installed, click Connect to reinstall</li>
                    <li>If still installed, try disconnecting and reconnecting</li>
                  </ol>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    Products Not Syncing
                  </h3>
                  <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Ensure your store is connected (check Integrations)</li>
                    <li>Click Sync Products to force a refresh</li>
                    <li>Verify your products are published and available in Shopify</li>
                    <li>Check that products have a price set</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Disconnecting Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">8</span>
                Disconnecting Your Store
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">To disconnect your Shopify store:</p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">From Simple Stream:</h3>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Go to the Integrations section in your dashboard</li>
                      <li>Click the Disconnect button</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">From Shopify:</h3>
                    <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                      <li>Go to your Shopify Admin</li>
                      <li>Navigate to Settings &gt; Apps and sales channels</li>
                      <li>Find &quot;The Simple Stream&quot;</li>
                      <li>Click Remove app</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">9</span>
                FAQ
              </h2>
              <div className="pl-10 space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Do I need to pay for a Shopify app subscription?</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    No, The Simple Stream app is included with your Simple Stream subscription.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Will this affect my existing Shopify setup?</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    No, the integration only reads your product data and creates checkouts. It doesn&apos;t modify your store settings, themes, or other apps.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Can I connect multiple Shopify stores?</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Currently, each Simple Stream account can connect one Shopify store. Contact support if you need multi-store support.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">What happens to purchases made through live streams?</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Purchases go through Shopify&apos;s normal checkout. Orders appear in your Shopify Admin, and you fulfil them as usual.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-gray-600">Ready to connect your store?</p>
                <a href="https://app.thesimplestream.com/register">
                  <Button>
                    Start Free Trial
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
