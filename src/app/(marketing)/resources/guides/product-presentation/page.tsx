import Link from 'next/link';
import { ArrowLeft, BookOpen, Eye, Hand, RotateCcw, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Product Presentation Techniques',
  description:
    'How to showcase products effectively and create urgency during your live shopping streams.',
};

export default function ProductPresentationGuidePage() {
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
              <BookOpen className="w-4 h-4" />
              <span>Best Practices</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Product Presentation Techniques
            </h1>
            <p className="text-gray-600 mb-8">
              How to showcase products effectively and create urgency during live streams.
            </p>

            {/* The SHOW Framework */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">1</span>
                The SHOW Framework
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Use this simple framework for every product you present:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <h3 className="font-bold text-blue-900 text-lg">S - Story</h3>
                    <p className="text-blue-800 text-sm">Tell the story behind the product. Why did you choose it? What makes it special?</p>
                  </div>
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                    <h3 className="font-bold text-green-900 text-lg">H - Highlight</h3>
                    <p className="text-green-800 text-sm">Highlight the key features and benefits. What problem does it solve?</p>
                  </div>
                  <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                    <h3 className="font-bold text-purple-900 text-lg">O - Options</h3>
                    <p className="text-purple-800 text-sm">Show different colours, sizes, or variations. Help viewers find their perfect match.</p>
                  </div>
                  <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                    <h3 className="font-bold text-orange-900 text-lg">W - Why Now</h3>
                    <p className="text-orange-800 text-sm">Create urgency. Limited stock, stream-only offer, or seasonal relevance.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Visual Presentation */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">2</span>
                Visual Presentation
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  How you physically show products matters as much as what you say about them.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-5 h-5 text-blue-600" />
                      <h3 className="font-medium text-gray-900">Show All Angles</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Slowly rotate the product. Show front, back, sides, and any details.
                      Viewers can&apos;t pick it up, so be their hands.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Hand className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">Demonstrate Touch</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Scrunch fabric to show texture, flex shoes to show flexibility,
                      tap surfaces to convey sturdiness.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <RotateCcw className="w-5 h-5 text-purple-600" />
                      <h3 className="font-medium text-gray-900">Show Scale</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Hold products next to common objects or yourself.
                      &quot;It fits perfectly in my hand&quot; or &quot;About the size of a paperback.&quot;
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5 text-orange-600" />
                      <h3 className="font-medium text-gray-900">Use Good Lighting</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Move products into the light. Show how colours look in natural light
                      versus artificial light if relevant.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Pro Tip: The Pause</h3>
                  <p className="text-sm text-blue-800">
                    When showing a product, hold it still for 3-5 seconds. Constant movement
                    makes it hard for viewers to focus and for the product overlay to be useful.
                  </p>
                </div>
              </div>
            </section>

            {/* Try-On & Demonstration */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">3</span>
                Try-On &amp; Demonstration
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Seeing products in use is the closest viewers get to trying them themselves.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Fashion &amp; Accessories</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Try on clothing items whenever possible</li>
                      <li>• Show how jewellery looks when worn</li>
                      <li>• Demonstrate how bags sit on your shoulder</li>
                      <li>• Model sunglasses, hats, and accessories</li>
                      <li>• Share your size for reference</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Beauty &amp; Skincare</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Swatch products on your hand or arm</li>
                      <li>• Apply lipstick or eyeshadow on camera</li>
                      <li>• Show texture by spreading cream on hand</li>
                      <li>• Demonstrate application techniques</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Home &amp; Lifestyle</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Show products in context (on a table, shelf)</li>
                      <li>• Demonstrate how items work or function</li>
                      <li>• Open packaging to show what&apos;s inside</li>
                      <li>• Compare sizes if you have multiple</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* What to Say */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">4</span>
                What to Say About Products
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Structure your product talk around these key points:
                </p>

                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900 mb-1">Materials &amp; Quality</h3>
                    <p className="text-sm text-gray-600">
                      &quot;This is 100% cotton, really soft and breathable. Feel how thick and
                      substantial the fabric is - this will last.&quot;
                    </p>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900 mb-1">Fit &amp; Sizing</h3>
                    <p className="text-sm text-gray-600">
                      &quot;I&apos;m wearing a size medium. I&apos;m 5&apos;6&quot; and it hits right at my hip.
                      Size up if you want a looser fit.&quot;
                    </p>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900 mb-1">Use Cases</h3>
                    <p className="text-sm text-gray-600">
                      &quot;Perfect for work, but also casual enough for weekend brunch.
                      I&apos;ve been wearing it everywhere.&quot;
                    </p>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900 mb-1">Personal Recommendation</h3>
                    <p className="text-sm text-gray-600">
                      &quot;Honestly, this is one of my favourites. I bought one for myself
                      and my sister asked me where I got it.&quot;
                    </p>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-gray-900 mb-1">Price &amp; Value</h3>
                    <p className="text-sm text-gray-600">
                      &quot;At £45, this is such a great price point. Similar quality elsewhere
                      would be double.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Handling Questions */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">5</span>
                Handling Product Questions
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Questions are buying signals. Handle them well to close sales.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">Common Questions &amp; How to Answer</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-green-800">&quot;What size should I get?&quot;</p>
                        <p className="text-sm text-green-700">Share your size, height/measurements, and how the item fits. Recommend sizing up or down based on fit preference.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">&quot;Is the colour true to the picture?&quot;</p>
                        <p className="text-sm text-green-700">Move it into good light. Compare to something viewers know: &quot;It&apos;s more of a dusty rose than a bright pink.&quot;</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">&quot;How does it wash/care?&quot;</p>
                        <p className="text-sm text-green-700">Read the care label on camera. Share your experience: &quot;I&apos;ve washed mine several times with no issues.&quot;</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h3 className="font-medium text-yellow-900 mb-2">If You Don&apos;t Know the Answer</h3>
                    <p className="text-sm text-yellow-800">
                      Be honest: &quot;Great question! I&apos;m not 100% sure about that. Let me check and
                      I&apos;ll follow up in the chat.&quot; Never make up information.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Timing & Flow */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">6</span>
                Timing &amp; Flow
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  How long to spend on each product and when to move on.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-medium text-gray-900 mb-2">Recommended Timing</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Quick item (simple accessory)</span>
                      <span className="font-medium text-gray-900">1-2 minutes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Standard product</span>
                      <span className="font-medium text-gray-900">2-4 minutes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">Featured/hero product</span>
                      <span className="font-medium text-gray-900">4-6 minutes</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Try-on or demonstration</span>
                      <span className="font-medium text-gray-900">5-8 minutes</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Watch for questions slowing down - signal to move on</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">If chat is buzzing about a product, spend more time</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Give viewers time to add to cart before moving on</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Return to popular products later in the stream</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Order */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">7</span>
                Strategic Product Order
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  The order you show products affects sales. Plan your lineup strategically.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="text-2xl font-bold text-blue-600">1st</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Hook Product</h3>
                      <p className="text-sm text-gray-600">Start with something exciting to capture attention. Best seller or new arrival.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="text-2xl font-bold text-gray-400">2-3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Complementary Items</h3>
                      <p className="text-sm text-gray-600">Products that go with your hook. Build on the momentum.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="text-2xl font-bold text-gray-400">Mid</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Mix of Products</h3>
                      <p className="text-sm text-gray-600">Variety of price points and categories. Keep things interesting.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 flex-shrink-0 text-center">
                      <span className="text-2xl font-bold text-green-600">End</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Showstopper</h3>
                      <p className="text-sm text-gray-600">Save something special for the end. Reward viewers who stayed.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Have 2-3 &quot;backup&quot; products ready in case you run out of things
                    to show or want to extend the stream.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-gray-600">Ready to showcase your products?</p>
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
