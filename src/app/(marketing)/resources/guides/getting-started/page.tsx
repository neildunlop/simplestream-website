import Link from 'next/link';
import { ArrowLeft, Play, ShoppingBag, Video, Users, Check, Settings, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Getting Started with Live Shopping',
  description:
    'Everything you need to know to run your first successful live shopping event with The Simple Stream.',
};

export default function GettingStartedGuidePage() {
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
              <Play className="w-4 h-4" />
              <span>Getting Started</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Getting Started with Live Shopping
            </h1>
            <p className="text-gray-600 mb-8">
              Everything you need to know to run your first successful live shopping event.
            </p>

            {/* What is Live Shopping */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">1</span>
                What is Live Shopping?
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Live shopping combines the engagement of live video with the convenience of e-commerce.
                  It allows you to showcase products in real-time while viewers can purchase directly during the stream.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Video className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-medium text-gray-900 mb-1">Live Broadcast</h3>
                    <p className="text-sm text-gray-600">Stream directly from your browser in HD quality</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ShoppingBag className="w-8 h-8 text-green-600 mb-2" />
                    <h3 className="font-medium text-gray-900 mb-1">Instant Purchase</h3>
                    <p className="text-sm text-gray-600">Viewers buy products without leaving the stream</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Users className="w-8 h-8 text-purple-600 mb-2" />
                    <h3 className="font-medium text-gray-900 mb-1">Real Engagement</h3>
                    <p className="text-sm text-gray-600">Chat with viewers and answer questions live</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Before Your First Stream */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">2</span>
                Before Your First Stream
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">Complete these steps to set up your account:</p>
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900 mb-2">Connect Your Shopify Store</h3>
                    <p className="text-gray-600 text-sm">
                      Link your Shopify store with one click. Your products will sync automatically,
                      and all orders will appear in your Shopify dashboard.
                    </p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900 mb-2">Select Products to Feature</h3>
                    <p className="text-gray-600 text-sm">
                      Choose which products you want to showcase during your stream.
                      You can add or remove products at any time before or during your broadcast.
                    </p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900 mb-2">Test Your Equipment</h3>
                    <p className="text-gray-600 text-sm">
                      Check your camera, microphone, and internet connection.
                      Good lighting and clear audio make a big difference in viewer engagement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Running Your Stream */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">3</span>
                Running Your Stream
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">Here&apos;s how a typical live shopping stream works:</p>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Go Live</h4>
                      <p className="text-gray-600 text-sm">Click the broadcast button to start streaming. Your video feed will be live instantly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Show Products</h4>
                      <p className="text-gray-600 text-sm">Use keyboard shortcuts (1-9) or click to display product overlays. Viewers see the product with price and can add to cart.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Engage with Viewers</h4>
                      <p className="text-gray-600 text-sm">Read and respond to chat messages. Answer questions about products, sizes, materials, and availability.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-medium text-gray-900">End Stream</h4>
                      <p className="text-gray-600 text-sm">When you&apos;re finished, end the stream. Your recording will be available for replay if enabled.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Product Overlays */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">4</span>
                Using Product Overlays
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Product overlays are the key to live shopping. When you trigger a product,
                  viewers see a card with the product image, name, price, and an &quot;Add to Cart&quot; button.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-medium text-gray-900 mb-2">Keyboard Shortcuts</h3>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-white p-2 rounded text-center">
                      <code className="bg-gray-100 px-2 py-1 rounded">1-9</code>
                      <p className="text-gray-600 mt-1">Show product 1-9</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <code className="bg-gray-100 px-2 py-1 rounded">Esc</code>
                      <p className="text-gray-600 mt-1">Hide overlay</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center">
                      <code className="bg-gray-100 px-2 py-1 rounded">Space</code>
                      <p className="text-gray-600 mt-1">Toggle display</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Set up your products in the order you plan to show them.
                    This makes it easy to cycle through using keyboard shortcuts during your stream.
                  </p>
                </div>
              </div>
            </section>

            {/* Equipment Checklist */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">5</span>
                Equipment Checklist
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">You don&apos;t need expensive equipment to start. Here&apos;s what you need:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">Essential</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-green-800">
                        <Check className="w-4 h-4" />
                        Webcam or smartphone camera
                      </li>
                      <li className="flex items-center gap-2 text-sm text-green-800">
                        <Check className="w-4 h-4" />
                        Stable internet connection (10+ Mbps upload)
                      </li>
                      <li className="flex items-center gap-2 text-sm text-green-800">
                        <Check className="w-4 h-4" />
                        Good lighting (natural or ring light)
                      </li>
                      <li className="flex items-center gap-2 text-sm text-green-800">
                        <Check className="w-4 h-4" />
                        Quiet environment
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Nice to Have</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-gray-400" />
                        External microphone
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-gray-400" />
                        Tripod or phone stand
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-gray-400" />
                        Second monitor for chat
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-gray-400" />
                        Professional backdrop
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips for Success */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">6</span>
                Tips for Your First Stream
              </h2>
              <div className="pl-10">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Start Small</h3>
                    <p className="text-sm text-gray-600">
                      Plan a 15-30 minute stream with 5-10 products. You can always go longer once you&apos;re comfortable.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Be Yourself</h3>
                    <p className="text-sm text-gray-600">
                      Viewers connect with authenticity. Share your genuine enthusiasm for products and don&apos;t worry about being perfect.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Prepare Talking Points</h3>
                    <p className="text-sm text-gray-600">
                      Have notes about each product: key features, sizing, materials, and why you love it.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Promote in Advance</h3>
                    <p className="text-sm text-gray-600">
                      Tell your audience when you&apos;re going live. Post on social media and email your list at least 24 hours before.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mobile Streaming */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">7</span>
                Streaming from Mobile
              </h2>
              <div className="pl-10">
                <div className="flex items-start gap-4">
                  <Smartphone className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 mb-4">
                      The Simple Stream works on mobile devices. Many successful retailers stream directly from their phones.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Use landscape orientation for better framing
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Connect to WiFi for stable streaming
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Use a tripod or phone stand
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-600" />
                        Close other apps to free up resources
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-gray-600">Ready to start your live shopping journey?</p>
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
