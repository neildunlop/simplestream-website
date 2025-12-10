import Link from 'next/link';
import { ArrowLeft, Check, Square } from 'lucide-react';
import { PrintButton } from '@/components/ui/print-button';

export const metadata = {
  title: 'Live Shopping Checklist - Download',
  description:
    'Pre-stream checklist to ensure you\'re ready for a successful live shopping broadcast.',
};

export default function ChecklistDownloadPage() {
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
                Live Shopping Checklist
              </h1>
              <p className="text-gray-600">
                Complete this checklist before every stream to ensure success
              </p>
              <p className="text-sm text-blue-600 mt-2">thesimplestream.com</p>
            </div>

            {/* 24 Hours Before */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                24 Hours Before
              </h2>
              <div className="space-y-3 pl-10">
                <ChecklistItem>Announce stream on social media with date/time</ChecklistItem>
                <ChecklistItem>Send email reminder to your subscriber list</ChecklistItem>
                <ChecklistItem>Confirm products are in stock and ready to show</ChecklistItem>
                <ChecklistItem>Plan your product order and talking points</ChecklistItem>
                <ChecklistItem>Set up any discount codes or special offers</ChecklistItem>
                <ChecklistItem>Test your internet connection speed (10+ Mbps upload)</ChecklistItem>
              </div>
            </section>

            {/* 1 Hour Before */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                1 Hour Before
              </h2>
              <div className="space-y-3 pl-10">
                <ChecklistItem>Set up your streaming space and background</ChecklistItem>
                <ChecklistItem>Arrange products in the order you&apos;ll show them</ChecklistItem>
                <ChecklistItem>Position and test your lighting</ChecklistItem>
                <ChecklistItem>Set up camera at eye level with stable mount</ChecklistItem>
                <ChecklistItem>Close unnecessary browser tabs and applications</ChecklistItem>
                <ChecklistItem>Charge your devices or plug in power</ChecklistItem>
              </div>
            </section>

            {/* 15 Minutes Before */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                15 Minutes Before
              </h2>
              <div className="space-y-3 pl-10">
                <ChecklistItem>Test camera and check your framing</ChecklistItem>
                <ChecklistItem>Test microphone and audio levels</ChecklistItem>
                <ChecklistItem>Do a quick lighting check on camera</ChecklistItem>
                <ChecklistItem>Ensure products are loaded in your stream</ChecklistItem>
                <ChecklistItem>Have water nearby</ChecklistItem>
                <ChecklistItem>Put phone on silent / disable notifications</ChecklistItem>
                <ChecklistItem>Post &quot;Going live in 15 minutes!&quot; reminder</ChecklistItem>
              </div>
            </section>

            {/* Just Before Going Live */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Just Before Going Live
              </h2>
              <div className="space-y-3 pl-10">
                <ChecklistItem>Take a deep breath and smile!</ChecklistItem>
                <ChecklistItem>Check your appearance one last time</ChecklistItem>
                <ChecklistItem>Have your first product ready to show</ChecklistItem>
                <ChecklistItem>Open chat panel to monitor messages</ChecklistItem>
                <ChecklistItem>Click &quot;Go Live&quot; and start engaging!</ChecklistItem>
              </div>
            </section>

            {/* During Stream */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                During Your Stream
              </h2>
              <div className="space-y-3 pl-10">
                <ChecklistItem>Greet viewers by name as they join</ChecklistItem>
                <ChecklistItem>Read and respond to chat messages regularly</ChecklistItem>
                <ChecklistItem>Show products from multiple angles</ChecklistItem>
                <ChecklistItem>Mention prices and any special offers</ChecklistItem>
                <ChecklistItem>Create urgency (&quot;Only 3 left!&quot;)</ChecklistItem>
                <ChecklistItem>Thank viewers when they make purchases</ChecklistItem>
                <ChecklistItem>Remind viewers how to add items to cart</ChecklistItem>
              </div>
            </section>

            {/* After Stream */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                After Your Stream
              </h2>
              <div className="space-y-3 pl-10">
                <ChecklistItem>Thank viewers and announce next stream date</ChecklistItem>
                <ChecklistItem>Review your analytics and viewer count</ChecklistItem>
                <ChecklistItem>Note what worked well and what to improve</ChecklistItem>
                <ChecklistItem>Process and fulfil any orders</ChecklistItem>
                <ChecklistItem>Post highlights or recap on social media</ChecklistItem>
                <ChecklistItem>Schedule your next stream</ChecklistItem>
              </div>
            </section>

            {/* Notes Section */}
            <section className="mt-8 pt-6 border-t border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Notes</h2>
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

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <span className="mt-0.5 print:hidden">
        <Square className="w-5 h-5 text-gray-300 group-hover:text-blue-400" />
      </span>
      <span className="hidden print:block mt-0.5">
        <Check className="w-5 h-5 text-white border border-gray-400 rounded" />
      </span>
      <span className="text-gray-700">{children}</span>
    </label>
  );
}
