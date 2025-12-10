import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PrintButton } from '@/components/ui/print-button';

export const metadata = {
  title: 'Stream Planning Template - Download',
  description:
    'Template for planning your product lineup and stream structure for live shopping.',
};

export default function StreamPlanningDownloadPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link
            href="/resources"
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>
          <PrintButton />
        </div>

        {/* Printable Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 print:shadow-none print:border-none">
          <div className="p-8 print:p-0">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Stream Planning Template
              </h1>
              <p className="text-gray-600">
                Plan your product lineup and stream structure for maximum engagement
              </p>
              <p className="text-sm text-blue-600 mt-2">thesimplestream.com</p>
            </div>

            {/* Stream Details */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Stream Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stream Title</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[2rem]"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date &amp; Time</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[2rem]"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target Duration</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[2rem]"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Theme/Occasion</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[2rem]"></div>
                </div>
              </div>
            </section>

            {/* Goals */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Stream Goals</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target Viewers</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[1.5rem]"></div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sales Target (£)</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[1.5rem]"></div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Products to Show</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[1.5rem]"></div>
                </div>
              </div>
            </section>

            {/* Special Offers */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Special Offers &amp; Promotions</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Discount Code</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[1.5rem]"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Offer Details</label>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[1.5rem]"></div>
                </div>
              </div>
            </section>

            {/* Product Lineup */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Product Lineup</h2>
              <p className="text-sm text-gray-600 mb-4">List products in the order you plan to show them</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 w-8">#</th>
                      <th className="text-left py-2">Product Name</th>
                      <th className="text-left py-2 w-20">Price</th>
                      <th className="text-left py-2 w-16">Stock</th>
                      <th className="text-left py-2 w-16">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <tr key={num} className="border-b border-gray-200">
                        <td className="py-3 text-gray-500">{num}</td>
                        <td className="py-3"><div className="border-b border-gray-200 min-h-[1.5rem]"></div></td>
                        <td className="py-3"><div className="border-b border-gray-200 min-h-[1.5rem]"></div></td>
                        <td className="py-3"><div className="border-b border-gray-200 min-h-[1.5rem]"></div></td>
                        <td className="py-3"><div className="border-b border-gray-200 min-h-[1.5rem]"></div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Stream Structure */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Stream Structure</h2>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-700">Opening (0-5 min)</span>
                  </div>
                  <div className="border-b-2 border-blue-200 pb-2 min-h-[2rem]"></div>
                  <p className="text-xs text-blue-600 mt-1">Welcome viewers, introduce yourself, preview what&apos;s coming</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-green-700">Hook Product (5-10 min)</span>
                  </div>
                  <div className="border-b-2 border-green-200 pb-2 min-h-[2rem]"></div>
                  <p className="text-xs text-green-600 mt-1">Start with your most exciting product to capture attention</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">Main Content (10-40 min)</span>
                  </div>
                  <div className="border-b-2 border-gray-300 pb-2 min-h-[2rem]"></div>
                  <p className="text-xs text-gray-600 mt-1">Cycle through products, engage with chat, create urgency</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-purple-700">Recap &amp; Final Push (40-50 min)</span>
                  </div>
                  <div className="border-b-2 border-purple-200 pb-2 min-h-[2rem]"></div>
                  <p className="text-xs text-purple-600 mt-1">Show top products again, remind of offers, last call</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-orange-700">Closing (50-60 min)</span>
                  </div>
                  <div className="border-b-2 border-orange-200 pb-2 min-h-[2rem]"></div>
                  <p className="text-xs text-orange-600 mt-1">Thank viewers, announce next stream, final goodbyes</p>
                </div>
              </div>
            </section>

            {/* Talking Points */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Talking Points</h2>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-start gap-2">
                    <span className="text-gray-400 text-sm">{num}.</span>
                    <div className="flex-1 border-b-2 border-gray-300 pb-2 min-h-[1.5rem]"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Notes */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Notes</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4"></div>
                <div className="border-b border-gray-200 pb-4"></div>
                <div className="border-b border-gray-200 pb-4"></div>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} The Simple Stream. All rights reserved.</p>
              <p className="mt-1">Download more resources at thesimplestream.com/resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
