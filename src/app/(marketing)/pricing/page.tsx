import { Check, X, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing that scales with you. No setup fees. Cancel anytime. Start with a 14-day free trial.',
};

const plans = [
  {
    name: 'Starter',
    price: 199,
    description: 'Perfect for small retailers just getting started with live shopping.',
    streams: 10,
    viewers: 50,
    duration: '2 hours',
    storage: '25 GB',
    quality: '720p',
    retention: '7 days',
    features: [
      { name: 'Shopify Integration', included: true },
      { name: 'HD Live Streaming', included: true },
      { name: 'Product Overlays', included: true },
      { name: 'Live Chat', included: true },
      { name: 'Basic Analytics', included: true },
      { name: 'Email Support', included: true },
      { name: 'Scheduled Streams', included: false },
      { name: 'Multi-Product Display', included: false },
      { name: 'Custom Branding', included: false },
      { name: 'Priority Support', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 499,
    description: 'For growing retailers who stream regularly and need more capacity.',
    streams: 20,
    viewers: 75,
    duration: '4 hours',
    storage: '100 GB',
    quality: '1080p',
    retention: '30 days',
    featured: true,
    features: [
      { name: 'Shopify Integration', included: true },
      { name: 'Full HD Streaming', included: true },
      { name: 'Product Overlays', included: true },
      { name: 'Live Chat', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Chat & Email Support', included: true },
      { name: 'Scheduled Streams', included: true },
      { name: 'Multi-Product Display', included: true },
      { name: 'Custom Branding', included: false },
      { name: 'Priority Support', included: false },
    ],
  },
  {
    name: 'Business',
    price: 999,
    description: 'For established retailers with high-volume streaming needs.',
    streams: 30,
    viewers: 100,
    duration: '6 hours',
    storage: '500 GB',
    quality: '1080p',
    retention: '90 days',
    features: [
      { name: 'Shopify Integration', included: true },
      { name: 'Full HD Streaming', included: true },
      { name: 'Product Overlays', included: true },
      { name: 'Live Chat', included: true },
      { name: 'Full Analytics Suite', included: true },
      { name: 'Priority Support', included: true },
      { name: 'Scheduled Streams', included: true },
      { name: 'Multi-Product Display', included: true },
      { name: 'Custom Branding', included: true },
      { name: 'Phone Support', included: true },
    ],
  },
];

const faqs = [
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees. Ever. You only pay your monthly subscription.',
  },
  {
    question: 'Can I change plans?',
    answer:
      'Yes, upgrade or downgrade anytime. Upgrades are immediate. Downgrades take effect at the next billing cycle.',
  },
  {
    question: 'Is there a contract?',
    answer:
      'No long-term contracts. Month-to-month billing. Cancel anytime with no penalties.',
  },
  {
    question: 'What happens if I exceed my limits?',
    answer:
      "We'll notify you when you're approaching limits. You can upgrade your plan or purchase additional capacity.",
  },
  {
    question: 'Do you take a commission on sales?',
    answer:
      'No! Unlike marketplace platforms, we charge 0% commission. All your revenue is yours.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! All plans include a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What Shopify plans do you support?',
    answer:
      'We support all Shopify plans, from Basic to Plus. Integration works via the Storefront API.',
  },
  {
    question: 'Can I use my own domain?',
    answer:
      'Yes! You can embed the player on your own website or use our hosted pages with custom branding.',
  },
];

export default function PricingPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Simple Pricing That Scales With You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start small. Grow big. No surprises. All plans include a 14-day free
            trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white border rounded-2xl p-8 relative ${
                plan.featured
                  ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {plan.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  &pound;{plan.price}
                </span>
                <span className="text-gray-600">/month</span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{plan.streams} streams/month</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Up to {plan.viewers} concurrent viewers</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{plan.duration} max stream duration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{plan.storage} recording storage</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Up to {plan.quality} quality</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{plan.retention} replay retention</span>
                </div>
              </div>

              <div className="border-t pt-6 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature.name} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/signup">
                <Button
                  className="w-full"
                  variant={plan.featured ? 'default' : 'outline'}
                  size="lg"
                >
                  Start Free Trial
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-gray-300 mb-6">
                  For large retailers with custom requirements. Unlimited streams,
                  unlimited viewers, 4K streaming, dedicated support, and custom
                  integrations.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Unlimited streams
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Unlimited concurrent viewers
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    4K streaming quality
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Custom integrations
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-2">Custom Pricing</p>
                <p className="text-gray-400 mb-6">Tailored to your needs</p>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-20">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            No setup fees
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            0% sales commission
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            No credit card required
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-6">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Link href="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
