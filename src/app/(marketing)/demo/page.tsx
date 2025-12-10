'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Check, Calendar, Video, Users, Clock } from 'lucide-react';

export default function DemoPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    industry: '',
    currentSolution: '',
    monthlyRevenue: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const benefits = [
    {
      icon: Video,
      title: 'Live Platform Demo',
      description: 'See all features in action with a personalised walkthrough.',
    },
    {
      icon: Users,
      title: 'Q&A Session',
      description: 'Ask questions specific to your business needs.',
    },
    {
      icon: Calendar,
      title: 'Custom Use Cases',
      description: 'We\'ll show how The Simple Stream fits your industry.',
    },
    {
      icon: Clock,
      title: '30 Minutes',
      description: 'Quick, focused demo. No pressure, no obligation.',
    },
  ];

  if (formState === 'success') {
    return (
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            Demo Request Received!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thanks for your interest in The Simple Stream. We&apos;ll reach out within 24
            hours to schedule your personalised demo.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 text-left">
            <h2 className="font-semibold mb-4 text-gray-900">
              What happens next?
            </h2>
            <ol className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  1
                </span>
                <span>
                  We&apos;ll review your information and prepare a demo tailored to
                  your needs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  2
                </span>
                <span>
                  Our team will reach out via email to schedule a convenient time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                  3
                </span>
                <span>
                  Join a 30-minute call to see The Simple Stream in action and ask
                  questions.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Request a Personalised Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how The Simple Stream can help your business sell more with live
            shopping. Get a personalised walkthrough tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Benefits */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              What You&apos;ll Get
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">No pressure sales.</strong> We
                believe in showing you value, not pushing for a sale. If
                The Simple Stream isn&apos;t right for you, we&apos;ll tell you.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="+44 (0) 123 456 7890"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="https://yourstore.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    >
                      <option value="">Select your industry</option>
                      <option value="collectables">Collectables & Trading Cards</option>
                      <option value="fashion">Fashion & Apparel</option>
                      <option value="beauty">Beauty & Cosmetics</option>
                      <option value="home">Home & Lifestyle</option>
                      <option value="jewelry">Jewelry & Accessories</option>
                      <option value="electronics">Electronics & Gadgets</option>
                      <option value="food">Food & Beverage</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currentSolution">
                      Current Selling Platform
                    </Label>
                    <Select
                      id="currentSolution"
                      name="currentSolution"
                      value={formData.currentSolution}
                      onChange={handleChange}
                      className="mt-1"
                    >
                      <option value="">Select an option</option>
                      <option value="none">No live selling yet</option>
                      <option value="instagram">Instagram Live</option>
                      <option value="facebook">Facebook Live</option>
                      <option value="whatnot">Whatnot</option>
                      <option value="tiktok">TikTok Live</option>
                      <option value="other">Other platform</option>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="monthlyRevenue">
                    Monthly E-commerce Revenue
                  </Label>
                  <Select
                    id="monthlyRevenue"
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleChange}
                    className="mt-1"
                  >
                    <option value="">Select an option</option>
                    <option value="under5k">Under &pound;5,000</option>
                    <option value="5k-20k">&pound;5,000 - &pound;20,000</option>
                    <option value="20k-50k">&pound;20,000 - &pound;50,000</option>
                    <option value="50k-100k">&pound;50,000 - &pound;100,000</option>
                    <option value="over100k">Over &pound;100,000</option>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">
                    Anything specific you&apos;d like to see?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us about your goals, challenges, or specific features you're interested in..."
                  />
                </div>

                {formState === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
                    Something went wrong. Please try again or email us at
                    hello@thesimplestream.com
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={formState === 'loading'}
                  className="w-full"
                >
                  {formState === 'loading' ? 'Submitting...' : 'Request Demo'}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
