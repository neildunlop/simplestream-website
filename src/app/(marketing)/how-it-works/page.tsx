import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ShoppingBag,
  Video,
  Users,
  ArrowRight,
  Check,
  Play,
  Keyboard,
  ShoppingCart,
  BarChart3,
} from 'lucide-react';

export const metadata = {
  title: 'How It Works',
  description:
    'Learn how The Simple Stream works. Connect your Shopify store, go live, and start selling in minutes.',
};

const steps = [
  {
    number: 1,
    title: 'Connect Your Shopify Store',
    description:
      'One-click OAuth integration connects your Shopify store instantly. Your products sync automatically - no manual data entry required.',
    icon: ShoppingBag,
    details: [
      'Secure OAuth authentication',
      'Automatic product import',
      'Real-time inventory sync',
      'Works with all Shopify plans',
    ],
  },
  {
    number: 2,
    title: 'Set Up Your Stream',
    description:
      'Create a new stream, select your products, and customize your settings. No technical expertise needed.',
    icon: Video,
    details: [
      'Choose products to feature',
      'Set stream quality (720p or 1080p)',
      'Configure product overlay timing',
      'Schedule or go live immediately',
    ],
  },
  {
    number: 3,
    title: 'Go Live From Your Browser',
    description:
      'Start streaming directly from your browser. No OBS or external software required. Use keyboard shortcuts to show products.',
    icon: Play,
    details: [
      'Browser-based broadcasting',
      'Keyboard shortcuts (1-9) for products',
      'Real-time preview',
      'Stream from any device with a camera',
    ],
  },
  {
    number: 4,
    title: 'Engage Your Audience',
    description:
      'Chat with viewers in real-time. Answer questions, build relationships, and create an interactive shopping experience.',
    icon: Users,
    details: [
      'Live chat with moderation',
      'Viewer count tracking',
      'Interactive Q&A sessions',
      'Build community and loyalty',
    ],
  },
  {
    number: 5,
    title: 'Show Products Live',
    description:
      'Trigger product overlays during your stream. Viewers see product details and can add to cart with one click.',
    icon: ShoppingCart,
    details: [
      'Press 1-9 to show products',
      'Product image, name, and price displayed',
      'One-click add to cart',
      'Auto-hide or manual control',
    ],
  },
  {
    number: 6,
    title: 'Track Performance',
    description:
      'Monitor your stream analytics in real-time. See viewer counts, product engagement, and sales performance.',
    icon: BarChart3,
    details: [
      'Real-time viewer analytics',
      'Product performance tracking',
      'Sales attribution',
      'Stream history and trends',
    ],
  },
];

const benefits = [
  {
    title: 'No Developers Required',
    description: 'Set up and go live without any coding knowledge.',
  },
  {
    title: 'Direct Shopify Integration',
    description: 'Orders flow directly to your existing Shopify workflow.',
  },
  {
    title: 'Low Latency',
    description: '2-5 second delay for real-time interaction with viewers.',
  },
  {
    title: 'Works Everywhere',
    description: 'Viewers watch on any device, no app download needed.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How The Simple Stream Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From connecting your store to making your first sale - get started
            in minutes, not months.
          </p>
        </div>

        {/* Video Demo Placeholder */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer hover:bg-blue-700 transition-colors">
                <Play className="w-10 h-10 text-white fill-white" />
              </div>
              <p className="text-gray-600 font-medium">Watch How It Works</p>
              <p className="text-gray-500 text-sm mt-1">2 minute overview</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-16">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-4">
                      {step.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 mb-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Keyboard className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
          </div>
          <p className="text-gray-300 mb-8">
            Control your stream efficiently with keyboard shortcuts. Show
            products, hide overlays, and more - all without touching your mouse.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="bg-gray-700 px-3 py-1 rounded text-sm font-mono">
                  1-9
                </kbd>
              </div>
              <p className="text-sm text-gray-400">Show product 1-9</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="bg-gray-700 px-3 py-1 rounded text-sm font-mono">
                  ESC
                </kbd>
              </div>
              <p className="text-sm text-gray-400">Hide current overlay</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="bg-gray-700 px-3 py-1 rounded text-sm font-mono">
                  Space
                </kbd>
              </div>
              <p className="text-sm text-gray-400">Toggle mute</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Why Retailers Love The Simple Stream
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Start Selling Live?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join retailers who are already growing their business with live
            shopping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                Request a Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            14-day free trial &bull; No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}
