import Link from 'next/link';
import { ArrowLeft, Sun, Check, X } from 'lucide-react';
import { PrintButton } from '@/components/ui/print-button';

export const metadata = {
  title: 'Lighting Setup Guide - Download',
  description:
    'Recommended lighting setups for different budgets and spaces for live shopping streams.',
};

export default function LightingGuideDownloadPage() {
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
                Lighting Setup Guide
              </h1>
              <p className="text-gray-600">
                Professional lighting setups for every budget
              </p>
              <p className="text-sm text-blue-600 mt-2">thesimplestream.com</p>
            </div>

            {/* Why Lighting Matters */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                Why Lighting Matters
              </h2>
              <p className="text-gray-700 mb-4">
                Good lighting is the single most important factor for professional-looking streams.
                It affects how your products appear, how you look on camera, and ultimately,
                how much your viewers trust and buy from you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Good Lighting
                  </h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Products look vibrant and appealing</li>
                    <li>• Your face is clearly visible</li>
                    <li>• Colours appear accurate</li>
                    <li>• Professional appearance</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-medium text-red-800 mb-2 flex items-center gap-1">
                    <X className="w-4 h-4" /> Poor Lighting
                  </h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Products look dull and unappealing</li>
                    <li>• Harsh shadows on face</li>
                    <li>• Colours look wrong</li>
                    <li>• Unprofessional appearance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Budget Options */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Setup Options by Budget</h2>

              {/* Free */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Free: Natural Light</h3>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">£0</span>
                </div>
                <p className="text-gray-700 mb-3">
                  The best free option is to use natural daylight from a window.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Position yourself facing a window</strong> - The light should hit your face, not your back</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Avoid direct sunlight</strong> - Diffused light on cloudy days is ideal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Stream during daylight hours</strong> - Best between 10am-4pm</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Limitation:</strong> Only works during daylight, inconsistent on cloudy days</span>
                  </div>
                </div>
              </div>

              {/* Budget */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Budget: Ring Light</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">£20-50</span>
                </div>
                <p className="text-gray-700 mb-3">
                  A ring light provides even, flattering illumination and often includes a phone mount.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Look for 10&quot; or larger</strong> - Bigger = softer, more flattering light</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Adjustable colour temperature</strong> - Match warm or cool lighting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Dimmable brightness</strong> - Control intensity for different settings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Position at eye level</strong> - 60-90cm from your face</span>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-white rounded text-sm">
                  <strong>Recommended:</strong> Neewer 10&quot; Ring Light, ELEGIANT Ring Light with Tripod
                </div>
              </div>

              {/* Mid-Range */}
              <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Mid-Range: LED Panel + Ring Light</h3>
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">£75-150</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Two-light setup for more professional results with better depth.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Key light (LED panel)</strong> - Main light source at 45° angle</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Fill light (ring light)</strong> - Reduces shadows on face</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>CRI 95+</strong> - Higher CRI = more accurate colours</span>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-white rounded text-sm">
                  <strong>Recommended:</strong> Neewer 2-Pack Dimmable LED Panels, Elgato Key Light Mini
                </div>
              </div>

              {/* Professional */}
              <div className="mb-6 p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">Professional: Softbox Kit</h3>
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">£150-300</span>
                </div>
                <p className="text-gray-700 mb-3">
                  Studio-quality lighting with softboxes for the most professional results.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Softbox creates diffused light</strong> - No harsh shadows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Two-point or three-point setup</strong> - Key, fill, and optional backlight</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Consistent results</strong> - Works regardless of ambient light</span>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-white rounded text-sm">
                  <strong>Recommended:</strong> Neewer 700W Softbox Kit, Godox SL60W with Softbox
                </div>
              </div>
            </section>

            {/* Quick Setup Diagrams */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Setup Positions</h2>

              <div className="grid grid-cols-2 gap-6">
                {/* One Light Setup */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-3 text-center">One Light (Ring Light)</h3>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span className="text-white text-xs flex items-center justify-center h-full">You</span>
                    </div>
                    <div className="w-12 h-3 bg-yellow-400 rounded absolute" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}>
                    </div>
                    <div className="w-6 h-6 bg-gray-400 rounded absolute" style={{ bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
                      <span className="text-white text-xs flex items-center justify-center h-full">📷</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Ring light directly in front, camera in centre of ring</p>
                </div>

                {/* Two Light Setup */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-3 text-center">Two Lights (Key + Fill)</h3>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span className="text-white text-xs flex items-center justify-center h-full">You</span>
                    </div>
                    <div className="w-8 h-3 bg-yellow-400 rounded absolute" style={{ top: '25%', left: '25%' }}>
                    </div>
                    <div className="w-6 h-2 bg-yellow-200 rounded absolute" style={{ top: '25%', right: '25%' }}>
                    </div>
                    <div className="w-6 h-6 bg-gray-400 rounded absolute" style={{ bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
                      <span className="text-white text-xs flex items-center justify-center h-full">📷</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 text-center">Key light at 45° (brighter), fill light opposite (dimmer)</p>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">Window behind you</p>
                    <p className="text-sm text-red-700">Creates silhouette effect - always face the light source</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">Overhead lighting only</p>
                    <p className="text-sm text-red-700">Creates unflattering shadows under eyes and chin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">Mixed colour temperatures</p>
                    <p className="text-sm text-red-700">Don&apos;t mix warm (yellow) and cool (blue) lights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-red-800">Light too close or too far</p>
                    <p className="text-sm text-red-700">Too close = harsh; too far = dim. Test and adjust.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Tips */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Tips</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Test your lighting before every stream</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Match all lights to same colour temperature</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Position lights at or slightly above eye level</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Use diffusion for softer, more flattering light</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Check how products look on camera</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Record a test video to review</span>
                </div>
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
