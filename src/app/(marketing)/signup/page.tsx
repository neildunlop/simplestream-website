'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Play, ArrowRight, Shield, Clock, CreditCard } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would create the account
    // For now, redirect to a placeholder
    alert('Sign up functionality would be implemented here. This would connect to your auth system.');
  };

  const benefits = [
    '14-day free trial',
    'No credit card required',
    'Full access to all features',
    'Cancel anytime',
    'Shopify integration included',
    'Email support',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Benefits */}
          <div className="hidden lg:block">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                The Simple Stream
              </span>
            </Link>

            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Start Selling Live in Minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join retailers who are growing their business with live shopping.
              No technical skills required.
            </p>

            <div className="space-y-4 mb-12">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="text-center mb-8 lg:hidden">
                <Link href="/" className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    The Simple Stream
                  </span>
                </Link>
              </div>

              <h2 className="text-2xl font-bold mb-2 text-gray-900 text-center lg:text-left">
                Start Your Free Trial
              </h2>
              <p className="text-gray-600 mb-8 text-center lg:text-left">
                Create your account and go live in minutes.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Work Email</Label>
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

                <div>
                  <Label htmlFor="name">Full Name</Label>
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
                  <Label htmlFor="company">Company / Store Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Your store name"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Create a password"
                    minLength={8}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum 8 characters
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>14-day trial</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  <span>No card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>

              <p className="text-center text-sm text-gray-500 mt-6">
                By creating an account, you agree to our{' '}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="mt-8 pt-6 border-t text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
