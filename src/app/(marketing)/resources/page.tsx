import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  PlayCircle,
  FileText,
  Download,
  ArrowRight,
  Lightbulb,
  BarChart3,
  ShoppingCart,
} from 'lucide-react';

export const metadata = {
  title: 'Resources',
  description:
    'Guides, tutorials, and best practices for live shopping success. Learn how to grow your business with The Simple Stream.',
};

const guides = [
  {
    title: 'Getting Started with Live Shopping',
    description:
      'Everything you need to know to run your first successful live shopping event.',
    icon: PlayCircle,
    category: 'Getting Started',
    readTime: '10 min read',
  },
  {
    title: 'Shopify Integration Guide',
    description:
      'Step-by-step guide to connecting your Shopify store and syncing products.',
    icon: ShoppingCart,
    category: 'Integration',
    readTime: '5 min read',
  },
  {
    title: 'Live Streaming Best Practices',
    description:
      'Tips for lighting, audio, and presentation to create professional streams.',
    icon: Lightbulb,
    category: 'Best Practices',
    readTime: '15 min read',
  },
  {
    title: 'Maximizing Engagement',
    description:
      'Strategies for keeping viewers engaged and driving more sales during streams.',
    icon: BarChart3,
    category: 'Strategy',
    readTime: '12 min read',
  },
  {
    title: 'Product Presentation Techniques',
    description:
      'How to showcase products effectively and create urgency during live streams.',
    icon: BookOpen,
    category: 'Best Practices',
    readTime: '8 min read',
  },
  {
    title: 'Analytics & Performance Tracking',
    description:
      'Understanding your stream analytics and optimizing for better results.',
    icon: FileText,
    category: 'Analytics',
    readTime: '10 min read',
  },
];

const resources = [
  {
    title: 'Live Shopping Checklist',
    description: 'Pre-stream checklist to ensure you\'re ready for a successful broadcast.',
    type: 'PDF Download',
    icon: Download,
  },
  {
    title: 'Stream Planning Template',
    description: 'Template for planning your product lineup and stream structure.',
    type: 'PDF Download',
    icon: Download,
  },
  {
    title: 'Lighting Setup Guide',
    description: 'Recommended lighting setups for different budgets and spaces.',
    type: 'PDF Download',
    icon: Download,
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Resources & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed with live shopping. Guides, best
            practices, and downloadable resources.
          </p>
        </div>

        {/* Featured Guides */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Guides & Tutorials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <div
                  key={guide.title}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
                    <Icon className="w-4 h-4" />
                    <span>{guide.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {guide.readTime}
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            Downloadable Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.title}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <span className="text-sm text-blue-600 font-medium">
                    {resource.type}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold mb-8">Quick Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Before Your Stream</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Test your camera and microphone</li>
                <li>• Check your lighting setup</li>
                <li>• Prepare products in order</li>
                <li>• Run a private test stream</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">During Your Stream</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Greet viewers as they join</li>
                <li>• Answer questions promptly</li>
                <li>• Show products from multiple angles</li>
                <li>• Create urgency with limited offers</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Product Presentation</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Demonstrate products in use</li>
                <li>• Discuss materials and quality</li>
                <li>• Compare sizes or variations</li>
                <li>• Share personal recommendations</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">After Your Stream</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Review your analytics</li>
                <li>• Note what worked well</li>
                <li>• Follow up with customers</li>
                <li>• Plan your next stream</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long should my streams be?',
                a: 'Most successful streams run 30-60 minutes. This gives enough time to showcase products while keeping viewers engaged.',
              },
              {
                q: 'What equipment do I need?',
                a: 'Start with your smartphone or laptop webcam. Good lighting (ring light or natural light) and stable internet are most important.',
              },
              {
                q: 'How do I promote my streams?',
                a: 'Share on social media, email your list, and create countdown posts. Consistency helps build an audience over time.',
              },
              {
                q: 'Can I stream from my phone?',
                a: 'Yes! Our browser-based streaming works on mobile devices. Many retailers stream directly from their phones.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="font-semibold mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to put these tips into practice?
          </h2>
          <p className="text-gray-600 mb-6">
            Start your free trial and experience live shopping for yourself.
          </p>
          <Link href="/signup">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
