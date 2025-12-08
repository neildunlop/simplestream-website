# Marketing Website - Next.js Implementation Guide

## Quick Start

This guide shows you how to build the marketing website using your existing Next.js project.

---

## Project Structure

```
your-project/
├── app/
│   ├── (marketing)/              # Marketing site group
│   │   ├── layout.tsx            # Marketing layout (header + footer)
│   │   ├── page.tsx              # Homepage
│   │   ├── features/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── industries/
│   │   │   ├── page.tsx          # Industries hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual industry pages
│   │   ├── how-it-works/
│   │   │   └── page.tsx
│   │   ├── resources/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── demo/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   ├── (platform)/               # Existing platform app (separate layout)
│   │   └── ...
│   └── api/
│       ├── contact/
│       │   └── route.ts          # Contact form handler
│       └── demo/
│           └── route.ts          # Demo request handler
├── components/
│   └── marketing/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── FeatureGrid.tsx
│       ├── PricingTable.tsx
│       ├── Testimonial.tsx
│       ├── CTA.tsx
│       └── ...
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── features/
│   │   └── industries/
│   └── videos/
└── content/
    ├── industries/
    │   ├── collectables.mdx
    │   ├── fashion.mdx
    │   ├── beauty.mdx
    │   └── home.mdx
    └── blog/
        └── ...
```

---

## Step 1: Create Marketing Layout

```tsx
// app/(marketing)/layout.tsx

import { Header } from '@/components/marketing/Header';
import { Footer } from '@/components/marketing/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
```

---

## Step 2: Create Header Component

```tsx
// components/marketing/Header.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg" />
            <span className="text-xl font-bold">YourBrand</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-gray-700 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/industries"
              className="text-gray-700 hover:text-gray-900"
            >
              Industries
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-gray-900"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/demo">
              <Button variant="outline">Request Demo</Button>
            </Link>
            <Link href="/signup">
              <Button>Start Free Trial</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/features"
              className="block text-gray-700 hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-700 hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/industries"
              className="block text-gray-700 hover:text-gray-900"
            >
              Industries
            </Link>
            <Link
              href="/resources"
              className="block text-gray-700 hover:text-gray-900"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/demo" className="block">
                <Button variant="outline" className="w-full">
                  Request Demo
                </Button>
              </Link>
              <Link href="/signup" className="block">
                <Button className="w-full">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
```

---

## Step 3: Create Footer Component

```tsx
// components/marketing/Footer.tsx

import Link from 'next/link';
import { Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="hover:text-white">
                  All Resources
                </Link>
              </li>
              <li>
                <Link href="/guides/getting-started" className="hover:text-white">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/guides/best-practices" className="hover:text-white">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2025 YourBrand. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://twitter.com/yourbrand"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/yourbrand"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@yourbrand.com" className="hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## Step 4: Create Homepage

```tsx
// app/(marketing)/page.tsx

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Video, ShoppingCart, BarChart3, MessageSquare, Smartphone, Shield } from 'lucide-react';

export const metadata = {
  title: 'Live Shopping Platform | Professional Streaming for Retailers',
  description: 'Turn your products into live shopping events. HD streaming, Shopify integration, 0% commission. Start selling live in days.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Turn Your Products Into Live Shopping Events
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional live streaming platform that integrates with your
                Shopify store. Start selling live in days, not months.
              </p>
              <div className="flex gap-4">
                <Link href="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                14-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
            <div className="relative">
              {/* Placeholder for hero image/video */}
              <div className="aspect-video bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Stop Losing Sales to Complicated Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise solutions cost £50,000+ per year. Social platforms
              don't integrate with your store. Marketplaces take 8% commission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2 text-lg">Affordable</h3>
              <p className="text-3xl font-bold mb-2">£199/month</p>
              <p className="text-gray-600">No long contracts</p>
              <p className="text-gray-600">Scale as you grow</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2 text-lg">Simple</h3>
              <p className="text-3xl font-bold mb-2">Live in days</p>
              <p className="text-gray-600">No developers needed</p>
              <p className="text-gray-600">Shopify integration</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="font-semibold mb-2 text-lg">Yours</h3>
              <p className="text-3xl font-bold mb-2">0% commission</p>
              <p className="text-gray-600">Own your data</p>
              <p className="text-gray-600">Own your customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need to Sell Live
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <Video className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">HD Live Streaming</h3>
              <p className="text-gray-600">
                Professional video quality up to 1080p. Reliable streaming
                powered by Amazon IVS.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <ShoppingCart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Shopify Integration
              </h3>
              <p className="text-gray-600">
                Sync products automatically. Viewers buy in real-time. Orders go
                straight to Shopify.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600">
                Track viewers, sales, and engagement. Understand what sells and
                why.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Live Chat & Engagement
              </h3>
              <p className="text-gray-600">
                Interact with customers in real-time. Answer questions. Build
                relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Mobile-First Design
              </h3>
              <p className="text-gray-600">
                Viewers watch anywhere. No app download needed. Works on all
                devices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade infrastructure. 99.9% uptime. GDPR compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Start Selling Live in 3 Simple Steps
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Connect Your Shopify Store
                </h3>
                <p className="text-gray-600">
                  One-click integration. Your products sync automatically.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Go Live</h3>
                <p className="text-gray-600">
                  Stream from your phone or computer. Show your products.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Watch Sales Roll In
                </h3>
                <p className="text-gray-600">
                  Viewers buy in real-time. Orders sync to Shopify
                  automatically.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/signup">
              <Button size="lg">Start Your Free Trial</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for Retailers Like You</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link
              href="/industries/collectables"
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
              <h3 className="font-semibold mb-2">Collectables</h3>
              <p className="text-sm text-gray-600">
                Show condition, build trust, sell unique items
              </p>
            </Link>
            <Link
              href="/industries/fashion"
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
              <h3 className="font-semibold mb-2">Fashion & Apparel</h3>
              <p className="text-sm text-gray-600">
                Model clothes live, answer fit questions
              </p>
            </Link>
            <Link
              href="/industries/beauty"
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
              <h3 className="font-semibold mb-2">Beauty & Cosmetics</h3>
              <p className="text-sm text-gray-600">
                Demonstrate products, share tutorials
              </p>
            </Link>
            <Link
              href="/industries/home"
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
              <h3 className="font-semibold mb-2">Home & Lifestyle</h3>
              <p className="text-sm text-gray-600">
                Room makeovers, product demos
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Selling Live?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join retailers who've switched from expensive enterprise platforms
            and commission-heavy marketplaces.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Schedule a Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
```

---

## Step 5: Create Pricing Page

```tsx
// app/(marketing)/pricing/page.tsx

import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Pricing | YourBrand',
  description: 'Simple, transparent pricing that scales with you. No setup fees. Cancel anytime.',
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 199,
      streams: 10,
      viewers: 50,
      duration: '2 hours',
      storage: '25 GB',
      quality: '720p',
      features: [
        'Shopify Integration',
        'HD Live Streaming',
        'Analytics',
        'Live Chat',
        'Email Support',
        '7-day retention',
      ],
    },
    {
      name: 'Professional',
      price: 499,
      streams: 20,
      viewers: 75,
      duration: '4 hours',
      storage: '100 GB',
      quality: '1080p',
      featured: true,
      features: [
        'Everything in Starter',
        'Chat Support',
        'Scheduled Streams',
        'Multi-Product Display',
        '30-day retention',
      ],
    },
    {
      name: 'Business',
      price: 999,
      streams: 30,
      viewers: 100,
      duration: '6 hours',
      storage: '500 GB',
      quality: '1080p',
      features: [
        'Everything in Professional',
        'Phone Support',
        'Priority Support',
        'Custom Branding',
        '90-day retention',
      ],
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Simple Pricing That Scales With You
          </h1>
          <p className="text-xl text-gray-600">
            Start small. Grow big. No surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-lg p-8 ${
                plan.featured ? 'ring-2 ring-blue-600 shadow-xl' : ''
              }`}
            >
              {plan.featured && (
                <div className="text-blue-600 font-semibold text-sm mb-2">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">£{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{plan.streams} streams/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Up to {plan.viewers} viewers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{plan.duration} max stream</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{plan.storage} storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Up to {plan.quality}</span>
                </li>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/signup">
                <Button
                  className="w-full"
                  variant={plan.featured ? 'default' : 'outline'}
                >
                  Start Trial
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-16">
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
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees. Ever.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I change plans?</h3>
              <p className="text-gray-600">
                Yes, upgrade or downgrade anytime. Upgrades are immediate.
                Downgrades take effect at next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a contract?</h3>
              <p className="text-gray-600">
                No long-term contracts. Month-to-month billing. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Step 6: Create Contact Form Handler

```tsx
// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10),
  interest: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Send email notification
    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'hello@yourdomain.com', // Your email
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${data.interest || 'General inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'hello@yourdomain.com',
      to: data.email,
      subject: 'Thanks for contacting us!',
      html: `
        <h2>Thanks for reaching out!</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br/>The Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

---

## Step 7: Environment Variables

```bash
# .env.local

# Resend (for email notifications)
RESEND_API_KEY=re_xxxxx

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Your platform URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

---

## Step 8: Deploy

```bash
# Install dependencies
npm install resend zod

# Test locally
npm run dev

# Deploy to Vercel
vercel --prod
```

---

## Next Steps

1. **Copy Content** - Use the content from MARKETING_WEBSITE_SPEC.md
2. **Add Images** - Create/purchase hero images, screenshots, icons
3. **Setup Analytics** - Install Plausible or PostHog
4. **SEO Optimization** - Add meta tags, sitemap, robots.txt
5. **Legal Pages** - Add Terms, Privacy, Cookie policies
6. **Test Forms** - Ensure contact/demo forms work
7. **Mobile Test** - Check responsive design
8. **Performance** - Optimize images, lazy load
9. **Launch** - Deploy and announce!

---

## Pro Tips

1. **Use placeholders** - Don't wait for perfect images. Use gray boxes initially.
2. **Start simple** - Build Homepage + Pricing first. Add other pages later.
3. **Real content** - Use real copy, not Lorem Ipsum. It helps you think through messaging.
4. **Mobile first** - Design for mobile, scale up to desktop.
5. **Test early** - Get feedback from potential customers ASAP.
6. **Iterate** - Don't aim for perfection. Ship, learn, improve.

Ready to build?
