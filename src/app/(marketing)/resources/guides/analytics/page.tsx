import Link from 'next/link';
import { ArrowLeft, FileText, BarChart3, Users, TrendingUp, Eye, ShoppingCart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Analytics & Performance Tracking',
  description:
    'Understanding your stream analytics and optimising for better results with The Simple Stream.',
};

export default function AnalyticsGuidePage() {
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
              <FileText className="w-4 h-4" />
              <span>Analytics</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Analytics &amp; Performance Tracking
            </h1>
            <p className="text-gray-600 mb-8">
              Understanding your stream analytics and optimising for better results.
            </p>

            {/* Why Analytics Matter */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">1</span>
                Why Analytics Matter
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Data helps you understand what&apos;s working and what isn&apos;t. Regular review of your
                  analytics leads to better streams and more sales over time.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-medium text-gray-900 mb-1">Track Growth</h3>
                    <p className="text-sm text-gray-600">See how your audience grows over time</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-medium text-gray-900 mb-1">Understand Behaviour</h3>
                    <p className="text-sm text-gray-600">Learn what keeps viewers watching</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <ShoppingCart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-medium text-gray-900 mb-1">Optimise Sales</h3>
                    <p className="text-sm text-gray-600">Identify your best-performing products</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Metrics */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">2</span>
                Key Metrics Explained
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Here are the most important metrics to track and what they mean:
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <h3 className="font-medium text-gray-900">Viewer Count</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 font-medium">Current Viewers</p>
                        <p className="text-gray-600">How many people are watching right now. Fluctuates throughout the stream.</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Peak Viewers</p>
                        <p className="text-gray-600">The highest number of concurrent viewers during your stream.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">Watch Time</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 font-medium">Total Viewer Hours</p>
                        <p className="text-gray-600">Combined time all viewers spent watching. Higher = more engaged audience.</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Average Watch Duration</p>
                        <p className="text-gray-600">How long the typical viewer stays. Aim for 10+ minutes.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ShoppingCart className="w-5 h-5 text-purple-600" />
                      <h3 className="font-medium text-gray-900">Product Performance</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 font-medium">Product Clicks</p>
                        <p className="text-gray-600">How many times viewers clicked on product overlays.</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Add to Cart</p>
                        <p className="text-gray-600">Number of items added to cart during the stream.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-orange-600" />
                      <h3 className="font-medium text-gray-900">Conversion Metrics</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-700 font-medium">Conversion Rate</p>
                        <p className="text-gray-600">Percentage of viewers who made a purchase. Industry average: 2-5%.</p>
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">Revenue Per Viewer</p>
                        <p className="text-gray-600">Total revenue divided by unique viewers. Track this over time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reading Your Dashboard */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">3</span>
                Reading Your Dashboard
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Your analytics dashboard shows both real-time and historical data.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">During Your Stream</h3>
                    <p className="text-sm text-blue-800 mb-2">
                      The live dashboard shows real-time metrics:
                    </p>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Current viewer count (updates every few seconds)</li>
                      <li>• Peak viewers so far</li>
                      <li>• Stream duration</li>
                      <li>• Products shown count</li>
                      <li>• Chat message volume</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">After Your Stream</h3>
                    <p className="text-sm text-green-800 mb-2">
                      Full analytics become available after your stream ends:
                    </p>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Total unique viewers</li>
                      <li>• Complete watch time data</li>
                      <li>• Product click and conversion data</li>
                      <li>• Viewer retention curve</li>
                      <li>• Comparison with previous streams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Benchmarks */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">4</span>
                Benchmarks &amp; Goals
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  How do your numbers compare? Here are typical ranges for live shopping streams:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 pr-4 font-medium text-gray-900">Metric</th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900">Starting Out</th>
                        <th className="text-center py-3 px-4 font-medium text-gray-900">Growing</th>
                        <th className="text-center py-3 pl-4 font-medium text-gray-900">Established</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="py-3 pr-4 text-gray-700">Peak Viewers</td>
                        <td className="py-3 px-4 text-center text-gray-600">5-20</td>
                        <td className="py-3 px-4 text-center text-gray-600">20-100</td>
                        <td className="py-3 pl-4 text-center text-gray-600">100+</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-gray-700">Avg Watch Duration</td>
                        <td className="py-3 px-4 text-center text-gray-600">5-8 min</td>
                        <td className="py-3 px-4 text-center text-gray-600">8-15 min</td>
                        <td className="py-3 pl-4 text-center text-gray-600">15+ min</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-gray-700">Conversion Rate</td>
                        <td className="py-3 px-4 text-center text-gray-600">1-2%</td>
                        <td className="py-3 px-4 text-center text-gray-600">2-5%</td>
                        <td className="py-3 pl-4 text-center text-gray-600">5-10%</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-gray-700">Chat Engagement</td>
                        <td className="py-3 px-4 text-center text-gray-600">10-20%</td>
                        <td className="py-3 px-4 text-center text-gray-600">20-40%</td>
                        <td className="py-3 pl-4 text-center text-gray-600">40%+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Remember:</strong> Your first streams will have lower numbers. Focus on improvement
                    over time rather than hitting specific targets immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* Improving Performance */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">5</span>
                Improving Your Numbers
              </h2>
              <div className="pl-10">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Low Viewer Count?</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Promote streams 24-48 hours in advance</li>
                      <li>• Post on social media when going live</li>
                      <li>• Email your list before each stream</li>
                      <li>• Stream at consistent times so viewers know when to tune in</li>
                      <li>• Collaborate with other creators or brands</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Short Watch Duration?</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Start with an exciting hook product</li>
                      <li>• Tease upcoming products throughout</li>
                      <li>• Engage more with chat - viewers stay when acknowledged</li>
                      <li>• Vary your pace and energy</li>
                      <li>• Offer end-of-stream exclusives</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Low Conversion Rate?</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Create more urgency (limited time offers, low stock)</li>
                      <li>• Spend more time on each product</li>
                      <li>• Answer questions thoroughly</li>
                      <li>• Show products being worn/used</li>
                      <li>• Make sure product overlays are visible long enough</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Low Chat Engagement?</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ask questions directly to viewers</li>
                      <li>• Respond to every message you can</li>
                      <li>• Use viewer names when responding</li>
                      <li>• Run polls and votes</li>
                      <li>• Thank viewers when they engage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tracking Over Time */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">6</span>
                Tracking Progress Over Time
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Individual stream metrics matter less than trends over time. Review your analytics weekly.
                </p>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                  <h3 className="font-medium text-blue-900 mb-2">Weekly Review Checklist</h3>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Compare this week&apos;s viewer count to last week</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Review your top-performing products</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Check average watch duration trend</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Note what worked well and what didn&apos;t</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Set one goal for improvement next week</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Questions to Ask Yourself</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Which day/time had the best viewership?</li>
                    <li>• Which products got the most clicks and conversions?</li>
                    <li>• When did viewers drop off?</li>
                    <li>• What topics generated the most chat engagement?</li>
                    <li>• Did any promotional strategy work particularly well?</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Product Analytics */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">7</span>
                Product-Level Analytics
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Understanding which products perform best helps you plan future streams.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">High Clicks, Low Conversion</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Viewers are interested but not buying. This might mean:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Price point is too high - consider a discount</li>
                      <li>• Need more information about the product</li>
                      <li>• Sizing or options are unclear</li>
                      <li>• Checkout friction - is your store optimised?</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Low Clicks, High Conversion</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Those who click are buying, but not many are clicking:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Spend more time on this product</li>
                      <li>• Position it earlier in your stream</li>
                      <li>• Make the product overlay more prominent</li>
                      <li>• Better product photography might help</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">High Clicks, High Conversion</h3>
                    <p className="text-sm text-green-800">
                      Your star products! Feature these prominently, use them to open streams,
                      and find similar products to add to your catalogue.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-gray-600">Ready to start tracking your performance?</p>
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
