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
    description: 'Perfect for testing live commerce and occasional streams.',
    streams: 10,
    viewers: 35,
    duration: '2 hours',
    storage: '25 GB',
    retention: '7 days',
    teamMembers: 1,
    features: [
      { name: 'Shopify Integration', included: true },
      { name: 'HD Streaming (Adaptive)', included: true },
      { name: 'Product Overlays', included: true },
      { name: 'Live Chat & Moderation', included: true },
      { name: 'Basic Analytics', included: true },
      { name: 'Email Support (1 business day)', included: true },
      { name: 'Scheduled Streams', included: true },
      { name: 'Multi-Product Display', included: true },
      { name: 'Custom Branding', included: false },
      { name: 'Priority Support', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 499,
    description: 'For growing retailers who stream regularly. All features unlocked.',
    streams: 25,
    viewers: 100,
    duration: '4 hours',
    storage: '100 GB',
    retention: '30 days',
    teamMembers: 5,
    featured: true,
    features: [
      { name: 'Shopify Integration', included: true },
      { name: 'HD Streaming (Adaptive)', included: true },
      { name: 'Product Overlays', included: true },
      { name: 'Live Chat & Moderation', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Priority Support (4-hour response)', included: true },
      { name: 'Scheduled Streams', included: true },
      { name: 'Multi-Product Display', included: true },
      { name: 'Custom Branding', included: true },
      { name: 'Chat Support', included: true },
    ],
  },
  {
    name: 'Business',
    price: 999,
    description: 'For high-volume retailers with teams. API access included.',
    streams: 40,
    viewers: 150,
    duration: '6 hours',
    storage: '500 GB',
    retention: '90 days',
    teamMembers: 20,
    features: [
      { name: 'Shopify Integration', included: true },
      { name: 'HD Streaming (Adaptive)', included: true },
      { name: 'Product Overlays', included: true },
      { name: 'Live Chat & Moderation', included: true },
      { name: 'Full Analytics Suite', included: true },
      { name: 'Phone Support (1-hour response)', included: true },
      { name: 'Scheduled Streams', included: true },
      { name: 'Multi-Product Display', included: true },
      { name: 'Custom Branding & CSS', included: true },
      { name: 'API Access', included: true },
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
      'Yes! Upgrade anytime (takes effect immediately). Downgrade anytime (takes effect next billing cycle). No penalties.',
  },
  {
    question: 'Is there a contract?',
    answer:
      'No long-term contracts. Month-to-month billing. Cancel anytime with no penalties.',
  },
  {
    question: 'What happens if I exceed my limits?',
    answer:
      "We'll notify you before you hit limits. You can upgrade or purchase additional capacity. We'll never cut you off mid-stream.",
  },
  {
    question: 'Do you take a commission on sales?',
    answer:
      'No! Unlike marketplace platforms, we charge 0% commission. All your revenue is yours. If you sell £10,000/month on marketplaces, you might pay £800 in commission (8%). With us, you pay £0.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! All plans include a 14-day free trial with full access to your chosen plan\'s features. No credit card required to start.',
  },
  {
    question: 'What streaming quality do I get?',
    answer:
      'All plans include professional HD streaming with adaptive bitrate technology. Viewers automatically receive the best quality for their internet connection, ensuring smooth, buffer-free viewing for everyone.',
  },
  {
    question: 'What Shopify plans do you support?',
    answer:
      'We support all Shopify plans - Basic, Shopify, Advanced, and Shopify Plus. Integration works seamlessly via the Storefront API.',
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
                  <span>{plan.teamMembers} team member{plan.teamMembers > 1 ? 's' : ''}</span>
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

              <a href="https://app.thesimplestream.com/register">
                <Button
                  className="w-full"
                  variant={plan.featured ? 'default' : 'outline'}
                  size="lg"
                >
                  Start Free Trial
                </Button>
              </a>
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
                  For major retailers with complex needs. White-label solution with
                  unlimited capacity and dedicated support.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Unlimited streams & viewers
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    4K streaming available
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    White-label & 99.9% SLA
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Custom integrations & SSO
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    24/7 priority support
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-2">Custom Pricing</p>
                <p className="text-gray-400 mb-6">Tailored to your requirements</p>
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
            0% commission
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            HD streaming
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            GDPR compliant
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
          <a href="https://app.thesimplestream.com/register">
            <Button size="lg">Start Free Trial</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
