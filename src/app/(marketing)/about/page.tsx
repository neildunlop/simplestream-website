import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Heart, Zap, Users } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about The Simple Stream - the live shopping platform built for independent retailers. Our mission is to make live commerce accessible to everyone.',
};

const values = [
  {
    icon: Target,
    title: 'Simplicity First',
    description:
      'We believe powerful tools should be easy to use. No coding required, no complex setup. If it\'s not simple, we\'re not done.',
  },
  {
    icon: Heart,
    title: 'Retailer Success',
    description:
      'Your success is our success. We\'re not a commission-based marketplace. When you win, we win together.',
  },
  {
    icon: Zap,
    title: 'Accessible Innovation',
    description:
      'Enterprise-grade technology at prices small businesses can afford. Everyone deserves access to the best tools.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description:
      'We build what retailers need. Our roadmap is shaped by the people who use our platform every day.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Making Live Commerce Accessible to Everyone
          </h1>
          <p className="text-xl text-gray-600">
            We believe every retailer should have access to the same powerful
            tools that big brands use. The Simple Stream is live shopping made
            simple.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              Live commerce is transforming how people shop online. In Asia, it&apos;s
              already a $500+ billion market. But in the UK and Europe, small and
              medium retailers have been left behind.
            </p>
            <p>
              Enterprise platforms cost tens of thousands of pounds. Social
              platforms don&apos;t integrate with your store. Marketplaces take huge
              commissions and own your customer relationships.
            </p>
            <p>
              We built The Simple Stream to change that. A professional live shopping
              platform that integrates with Shopify, costs a fraction of
              enterprise solutions, and lets you keep 100% of your sales.
            </p>
            <p>
              <strong>
                Our mission is simple: give every retailer the tools to succeed
                with live shopping.
              </strong>
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-2xl border border-gray-200"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why We're Different */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Why We&apos;re Different
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  0% Commission
                </h3>
                <p className="text-gray-600">
                  Unlike marketplaces, we don&apos;t take a cut of your sales. You
                  keep what you earn.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  You Own Your Customers
                </h3>
                <p className="text-gray-600">
                  Your customer data is yours. We never compete with you or sell
                  to your customers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Built for Your Store
                </h3>
                <p className="text-gray-600">
                  We integrate with Shopify, not replace it. Orders flow to your
                  existing workflow.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Enterprise Quality, SMB Pricing
                </h3>
                <p className="text-gray-600">
                  The same technology big brands use, at prices that work for
                  growing businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Built on Enterprise Infrastructure
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The Simple Stream is powered by Amazon IVS (Interactive Video Service) -
            the same technology used by Twitch and major broadcasters. You get
            enterprise-grade reliability without the enterprise price tag.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">99.9%</p>
              <p className="text-gray-600">Uptime SLA</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">2-5s</p>
              <p className="text-gray-600">Latency</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">Global</p>
              <p className="text-gray-600">CDN Coverage</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Start Selling Live?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the retailers who are growing their business with live
            shopping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
