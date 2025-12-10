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
  Play,
  ArrowRight,
  Check,
  Zap,
  Users,
  TrendingUp,
} from 'lucide-react';

const industryPreviews = [
  {
    slug: 'collectables',
    title: 'Collectables',
    description: 'Show condition, build trust, sell unique items live',
    image: '/images/industries/collectables.jpg',
    gradient: 'from-amber-50 to-orange-50',
  },
  {
    slug: 'fashion',
    title: 'Fashion & Apparel',
    description: 'Model clothes live, answer fit questions instantly',
    image: '/images/industries/fashion.jpg',
    gradient: 'from-pink-50 to-rose-50',
  },
  {
    slug: 'beauty',
    title: 'Beauty & Cosmetics',
    description: 'Demonstrate products, share tutorials in real-time',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
    gradient: 'from-purple-50 to-violet-50',
  },
  {
    slug: 'home',
    title: 'Home & Lifestyle',
    description: 'Room makeovers, product demos, and more',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
    gradient: 'from-green-50 to-emerald-50',
  },
];

export const metadata = {
  title: 'Live Shopping Platform | Professional Streaming for Retailers',
  description:
    'Turn your products into live shopping events. HD streaming, Shopify integration, 0% commission. Start selling live in days.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                The future of retail is live
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Turn Your Products Into{' '}
                <span className="text-blue-600">Live Shopping Events</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional live streaming platform that integrates with your
                Shopify store. Start selling live in days, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.thesimplestream.com/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Play className="w-4 h-4 mr-2" />
                    See How It Works
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                14-day free trial &bull; No credit card required &bull; Cancel
                anytime
              </p>
            </div>
            <div className="relative">
              {/* Hero image */}
              <div className="rounded-2xl shadow-2xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                  alt="Live shopping streaming setup with products"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/10" />
                {/* Live badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  LIVE
                </div>
                {/* Viewer count */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm">
                  <Users className="w-4 h-4 inline mr-1" />
                  1.2k watching
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Stop Losing Sales to Complicated Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise solutions cost &pound;50,000+ per year. Social platforms
              don&apos;t integrate with your store. Marketplaces take 8%
              commission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">&pound;</span>
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900">
                Affordable
              </h3>
              <p className="text-3xl font-bold mb-2 text-blue-600">
                &pound;199/month
              </p>
              <p className="text-gray-600">No long contracts</p>
              <p className="text-gray-600">Scale as you grow</p>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900">Simple</h3>
              <p className="text-3xl font-bold mb-2 text-green-600">
                Live in days
              </p>
              <p className="text-gray-600">No developers needed</p>
              <p className="text-gray-600">Shopify integration</p>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2 text-lg text-gray-900">Yours</h3>
              <p className="text-3xl font-bold mb-2 text-purple-600">
                0% commission
              </p>
              <p className="text-gray-600">Own your data</p>
              <p className="text-gray-600">Own your customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything You Need to Sell Live
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tools designed for retailers who want to connect with
              customers in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                HD Live Streaming
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional video quality up to 1080p. Reliable streaming powered
                by Amazon IVS with 2-5 second latency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Shopify Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sync products automatically. Viewers buy in real-time. Orders go
                straight to Shopify.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track viewers, sales, and engagement. Understand what sells and
                why with detailed insights.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Live Chat & Engagement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Interact with customers in real-time. Answer questions. Build
                lasting relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mobile-First Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Viewers watch anywhere. No app download needed. Works on all
                devices seamlessly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Secure & Reliable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade infrastructure. 99.9% uptime. GDPR compliant.
                Your data is safe.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button variant="outline" size="lg">
                See All Features
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Start Selling Live in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              No technical expertise required. Get started in minutes.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Connect Your Shopify Store
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  One-click OAuth integration. Your products sync automatically.
                  No manual data entry required.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Go Live From Your Browser
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stream from your phone or computer. No OBS or external software
                  needed. Show products with keyboard shortcuts.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Watch Sales Roll In
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Viewers buy in real-time with product overlays. Orders sync to
                  Shopify automatically. Track everything in your dashboard.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://app.thesimplestream.com/register">
              <Button size="lg">
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Built for Retailers Like You
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses in your industry are using live shopping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryPreviews.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="aspect-video rounded-xl mb-4 overflow-hidden relative">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/industries">
              <Button variant="outline" size="lg">
                View All Industries
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                99.9%
              </p>
              <p className="text-gray-600">Uptime guaranteed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                2-5s
              </p>
              <p className="text-gray-600">Stream latency</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                HD
              </p>
              <p className="text-gray-600">Adaptive streaming</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                0%
              </p>
              <p className="text-gray-600">Sales commission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start small. Grow big. No surprises.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Starter
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  &pound;199<span className="text-lg font-normal">/mo</span>
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    10 streams/month
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Up to 35 viewers
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    HD streaming
                  </li>
                </ul>
              </div>
              <div className="p-6 border-x border-gray-100">
                <div className="text-sm font-medium text-blue-600 mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Professional
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  &pound;499<span className="text-lg font-normal">/mo</span>
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    25 streams/month
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Up to 100 viewers
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Custom branding
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Business
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  &pound;999<span className="text-lg font-normal">/mo</span>
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    40 streams/month
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Up to 150 viewers
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    API access
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-100">
              <Link href="/pricing">
                <Button size="lg">
                  View Full Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Selling Live?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join retailers who&apos;ve switched from expensive enterprise platforms
            and commission-heavy marketplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.thesimplestream.com/register">
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="!bg-transparent !text-white !border-white hover:!bg-white/10"
              >
                Schedule a Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">
            No credit card required &bull; 14-day free trial &bull; Cancel
            anytime
          </p>
        </div>
      </section>
    </div>
  );
}
