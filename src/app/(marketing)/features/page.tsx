import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Video,
  ShoppingCart,
  BarChart3,
  MessageSquare,
  Smartphone,
  Shield,
  Zap,
  Clock,
  Palette,
  Users,
  Keyboard,
  Globe,
  Play,
  RefreshCw,
  Database,
  Lock,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Features',
  description:
    'Discover all the features that make The Simple Stream the best live shopping platform for retailers. HD streaming, Shopify integration, real-time analytics, and more.',
};

const mainFeatures = [
  {
    icon: Video,
    title: 'HD Live Streaming',
    description:
      'Professional-grade video streaming up to 1080p. Powered by Amazon IVS for reliable, low-latency broadcasts that keep viewers engaged.',
    details: [
      'Up to 1080p Full HD quality',
      '2-5 second ultra-low latency',
      'Adaptive bitrate streaming',
      'Global CDN delivery',
      'Auto-quality adjustment',
    ],
    color: 'blue',
    image: '/images/features/streaming.jpg',
    imageAlt: 'Professional live streaming setup',
  },
  {
    icon: ShoppingCart,
    title: 'Shopify Integration',
    description:
      'One-click OAuth integration with your Shopify store. Products sync automatically, and orders flow straight to your existing workflow.',
    details: [
      'One-click store connection',
      'Automatic product sync',
      'Real-time inventory updates',
      'Direct checkout to Shopify',
      'Works with all Shopify plans',
    ],
    color: 'green',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    imageAlt: 'E-commerce shopping experience',
  },
  {
    icon: Play,
    title: 'Product Overlays',
    description:
      'Show products during your stream with beautiful overlays. Viewers can add to cart without leaving the video.',
    details: [
      'Trigger products with hotkeys (1-9)',
      'Customizable display duration',
      'One-click add to cart',
      'Auto-hide or manual control',
      'Mobile-optimized design',
    ],
    color: 'purple',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    imageAlt: 'Product showcase overlay interface',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description:
      'Real-time chat powered by Amazon IVS. Engage with your audience, answer questions, and build community.',
    details: [
      'Real-time messaging',
      'Moderation tools',
      'User management',
      'Rate limiting built-in',
      'Emoji support',
    ],
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80',
    imageAlt: 'Live chat and messaging interface',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description:
      'Understand your audience and optimize your streams with detailed analytics on viewers, engagement, and sales.',
    details: [
      'Real-time viewer count',
      'Peak viewer tracking',
      'Product performance metrics',
      'Stream history and trends',
      'Export capabilities',
    ],
    color: 'indigo',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    imageAlt: 'Analytics dashboard with charts',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    description:
      'Viewers can watch and shop from any device. No app download required. Responsive design that works everywhere.',
    details: [
      'Works on all devices',
      'No app download needed',
      'Touch-optimized controls',
      'Responsive video player',
      'Mobile checkout flow',
    ],
    color: 'pink',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    imageAlt: 'Mobile shopping experience',
  },
];

const additionalFeatures = [
  {
    icon: Keyboard,
    title: 'Keyboard Shortcuts',
    description: 'Control your stream efficiently with keyboard shortcuts. Show products, manage chat, and more.',
  },
  {
    icon: Globe,
    title: 'Browser Broadcasting',
    description: 'Stream directly from your browser. No OBS or external software required.',
  },
  {
    icon: RefreshCw,
    title: 'Stream Replays',
    description: 'Automatically record streams for replay. Product interactions are preserved.',
  },
  {
    icon: Clock,
    title: 'Scheduled Streams',
    description: 'Plan your streams in advance. Share links before going live.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'Match your brand with customizable colors, logos, and styling.',
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Invite team members with role-based permissions. Collaborate on streams.',
  },
  {
    icon: Database,
    title: 'Recording Storage',
    description: 'Store stream recordings in the cloud. Access replays anytime.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'GDPR compliant. Encrypted data. Enterprise-grade infrastructure.',
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
};

export default function FeaturesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Everything You Need to Sell Live
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional tools designed for retailers who want to connect with
            customers in real-time. No technical expertise required.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-20 mb-20">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color];
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className={isEven ? '' : 'md:order-2'}>
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} mb-6`}
                  >
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center`}>
                          <Zap className={`w-3 h-3 ${colors.text}`} />
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={isEven ? '' : 'md:order-1'}>
                  <div className="aspect-video rounded-2xl overflow-hidden relative">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            And So Much More
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Video className="w-5 h-5 text-blue-600" />
                Video Streaming
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Resolution: Up to 1080p Full HD</li>
                <li>Latency: 2-5 seconds (low-latency mode)</li>
                <li>Bitrate: Adaptive, up to 8.5 Mbps</li>
                <li>Codec: H.264/AVC</li>
                <li>Protocol: HLS with LL-HLS support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Security & Compliance
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>GDPR compliant</li>
                <li>SOC 2 infrastructure (AWS)</li>
                <li>TLS 1.2+ encryption</li>
                <li>OAuth 2.0 authentication</li>
                <li>Role-based access control</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-600" />
                Infrastructure
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>99.9% uptime SLA</li>
                <li>Global CDN (CloudFront)</li>
                <li>Auto-scaling capacity</li>
                <li>Multi-region redundancy</li>
                <li>24/7 monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to see it in action?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial and experience the power of live
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
        </div>
      </div>
    </div>
  );
}
