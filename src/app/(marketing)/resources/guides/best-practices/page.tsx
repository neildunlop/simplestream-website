import Link from 'next/link';
import { ArrowLeft, Lightbulb, Check, Sun, Mic, Camera, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Live Streaming Best Practices',
  description:
    'Tips for lighting, audio, and presentation to create professional live shopping streams.',
};

export default function BestPracticesGuidePage() {
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
              <Lightbulb className="w-4 h-4" />
              <span>Best Practices</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Live Streaming Best Practices
            </h1>
            <p className="text-gray-600 mb-8">
              Tips for lighting, audio, and presentation to create professional streams.
            </p>

            {/* Lighting Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">1</span>
                Lighting Setup
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Good lighting is the single most important factor for professional-looking streams.
                  Poor lighting makes products look dull and unprofessional.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-5 h-5 text-green-600" />
                      <h3 className="font-medium text-green-900">Good Lighting</h3>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Face a window for natural light</li>
                      <li>• Use a ring light at eye level</li>
                      <li>• Soft, diffused lighting</li>
                      <li>• Light from the front</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-5 h-5 text-red-600" />
                      <h3 className="font-medium text-red-900">Avoid</h3>
                    </div>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Window behind you (backlit)</li>
                      <li>• Overhead ceiling lights only</li>
                      <li>• Harsh shadows on face</li>
                      <li>• Mixed colour temperatures</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Budget-Friendly Setups</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-medium text-gray-500 w-16">Free</span>
                      <p className="text-sm text-gray-600">Face a window during daylight hours. Natural light is flattering and free.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-medium text-gray-500 w-16">£20-50</span>
                      <p className="text-sm text-gray-600">Ring light with phone holder. Great for mobile streaming.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-medium text-gray-500 w-16">£100+</span>
                      <p className="text-sm text-gray-600">Softbox or key light setup. Professional studio quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Audio Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">2</span>
                Audio Quality
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Viewers will tolerate imperfect video but poor audio makes streams unwatchable.
                  Invest in audio before upgrading your camera.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Mic className="w-5 h-5 text-blue-600" />
                      <h3 className="font-medium text-gray-900">Microphone Options</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Wired earbuds:</strong> The mic in your phone earbuds is better than your laptop mic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Lavalier mic:</strong> Clips to your clothing, great for movement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span><strong>USB microphone:</strong> Best quality for desktop streaming</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Audio Tips</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Stream from a quiet room with doors closed</li>
                    <li>• Turn off fans, air conditioning, or noisy appliances</li>
                    <li>• Soft furnishings help reduce echo</li>
                    <li>• Test your audio before going live</li>
                    <li>• Position mic close to your mouth (6-12 inches)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Camera Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">3</span>
                Camera &amp; Framing
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Modern smartphone cameras are excellent for live streaming.
                  Focus on framing and stability rather than expensive equipment.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="w-5 h-5 text-blue-600" />
                      <h3 className="font-medium text-gray-900">Camera Options</h3>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Smartphone (rear camera is best)</li>
                      <li>• Laptop webcam (decent for starting)</li>
                      <li>• External USB webcam (1080p+)</li>
                      <li>• DSLR/mirrorless with capture card</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Framing Tips</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Position camera at eye level</li>
                      <li>• Leave headroom above your head</li>
                      <li>• Fill the frame (not too far away)</li>
                      <li>• Use landscape orientation</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-medium text-orange-900 mb-2">Stability is Key</h3>
                  <p className="text-sm text-orange-800">
                    Shaky video is distracting. Use a tripod, phone stand, or prop your device against something stable.
                    Even a stack of books works in a pinch.
                  </p>
                </div>
              </div>
            </section>

            {/* Background Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">4</span>
                Background &amp; Environment
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Your background should be clean and on-brand without distracting from your products.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-medium text-green-900 mb-2">Good Backgrounds</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Plain wall in a neutral colour</li>
                      <li>• Tidy retail space or showroom</li>
                      <li>• Branded backdrop or banner</li>
                      <li>• Styled shelving with your products</li>
                      <li>• Professional backdrop cloth</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h3 className="font-medium text-red-900 mb-2">Avoid</h3>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Messy rooms or visible clutter</li>
                      <li>• Busy patterns that distract</li>
                      <li>• Windows (causes backlighting)</li>
                      <li>• Areas where people walk behind you</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Internet Section */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">5</span>
                Internet Connection
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  A stable internet connection is essential for smooth streaming.
                </p>

                <div className="p-4 bg-gray-50 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wifi className="w-5 h-5 text-blue-600" />
                    <h3 className="font-medium text-gray-900">Recommended Speeds</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>720p streaming:</strong></p>
                      <p className="text-gray-900">5+ Mbps upload</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>1080p streaming:</strong></p>
                      <p className="text-gray-900">10+ Mbps upload</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Use wired Ethernet when possible (more stable than WiFi)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Close other applications using bandwidth</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Ask others not to stream or download during your broadcast</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Test your connection with a speed test before going live</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Pre-Stream Checklist */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">6</span>
                Pre-Stream Checklist
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Run through this checklist before every stream:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Camera positioned and stable</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Lighting set up and tested</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Microphone connected and tested</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Background tidy and presentable</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Internet connection tested</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Products ready and in order</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Phone on silent / notifications off</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <input type="checkbox" className="rounded border-gray-300" disabled />
                      <span>Water nearby (streams can be long!)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">7</span>
                Common Mistakes to Avoid
              </h2>
              <div className="pl-10">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-1">Looking at the screen instead of the camera</h3>
                    <p className="text-sm text-gray-600">
                      Eye contact builds connection. Look at your camera lens, not your face on screen.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-1">Holding products too close or too far</h3>
                    <p className="text-sm text-gray-600">
                      Find the sweet spot where products are clearly visible. Practice before going live.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-1">Rushing through products</h3>
                    <p className="text-sm text-gray-600">
                      Give viewers time to see and consider each item. 2-3 minutes per product is typical.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-1">Ignoring chat messages</h3>
                    <p className="text-sm text-gray-600">
                      Engagement drives sales. Acknowledge viewers and answer questions promptly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-gray-600">Ready to put these tips into practice?</p>
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
