import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

export const metadata = {
  title: 'Industries',
  description:
    'See how retailers in different industries use The Simple Stream for live shopping. Collectables, fashion, beauty, home goods, and more.',
};

const industries = [
  {
    slug: 'collectables',
    title: 'Collectables & Trading Cards',
    image: '/images/industries/collectables.jpg',
    imageAlt: 'Trading cards and collectables display',
    description:
      'Perfect for sports cards, Pokemon, vintage toys, and unique collectables. Show condition, build trust, and create urgency.',
    benefits: [
      'Show item condition in real-time',
      'Build trust with live authentication',
      'Create urgency with limited items',
      'Answer collector questions instantly',
    ],
    color: 'from-amber-100 to-orange-100',
    stats: {
      avgOrder: '£85',
      conversion: '12%',
      engagement: '45 min',
    },
  },
  {
    slug: 'fashion',
    title: 'Fashion & Apparel',
    image: '/images/industries/fashion.jpg',
    imageAlt: 'Fashion model in elegant pink dress',
    description:
      'Model clothes live, show fit and movement, answer sizing questions in real-time. Perfect for boutiques and fashion brands.',
    benefits: [
      'Model clothes in real-time',
      'Answer sizing questions live',
      'Show fabric and details up close',
      'Style multiple outfit combinations',
    ],
    color: 'from-pink-100 to-rose-100',
    stats: {
      avgOrder: '£120',
      conversion: '15%',
      engagement: '35 min',
    },
  },
  {
    slug: 'beauty',
    title: 'Beauty & Cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    imageAlt: 'Beauty and cosmetics products',
    description:
      'Demonstrate products, show application techniques, and share tutorials. Build trust by showing real results.',
    benefits: [
      'Live product demonstrations',
      'Tutorial-style content',
      'Show true colours and textures',
      'Answer skincare questions',
    ],
    color: 'from-purple-100 to-violet-100',
    stats: {
      avgOrder: '£65',
      conversion: '18%',
      engagement: '30 min',
    },
  },
  {
    slug: 'home',
    title: 'Home & Lifestyle',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    imageAlt: 'Modern home interior design',
    description:
      'Room makeovers, product demos, and lifestyle content. Show products in real settings and inspire purchases.',
    benefits: [
      'Show products in real settings',
      'Demonstrate functionality',
      'Create lifestyle content',
      'Upsell complementary items',
    ],
    color: 'from-green-100 to-emerald-100',
    stats: {
      avgOrder: '£95',
      conversion: '10%',
      engagement: '40 min',
    },
  },
  {
    slug: 'jewelry',
    title: 'Jewelry & Accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    imageAlt: 'Elegant jewelry display',
    description:
      'Showcase sparkle, detail, and craftsmanship. Let customers see pieces from every angle before buying.',
    benefits: [
      'Show sparkle and detail',
      'Demonstrate scale and fit',
      'Build trust with close-ups',
      'Answer material questions',
    ],
    color: 'from-cyan-100 to-sky-100',
    stats: {
      avgOrder: '£150',
      conversion: '8%',
      engagement: '25 min',
    },
  },
  {
    slug: 'electronics',
    title: 'Electronics & Gadgets',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80',
    imageAlt: 'Electronics and gadgets showcase',
    description:
      'Unbox, demo, and explain features. Help customers understand products before they buy.',
    benefits: [
      'Live unboxing content',
      'Feature demonstrations',
      'Compare models side-by-side',
      'Answer technical questions',
    ],
    color: 'from-slate-100 to-gray-100',
    stats: {
      avgOrder: '£180',
      conversion: '7%',
      engagement: '50 min',
    },
  },
];

export default function IndustriesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Built for Retailers Like You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses in different industries are using live shopping
            to grow their sales and build stronger customer relationships.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry) => (
            <div
              key={industry.slug}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  {industry.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Live Shopping Works */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Why Live Shopping Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">3x</p>
              <p className="text-gray-600">
                Higher conversion than traditional e-commerce
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">40%</p>
              <p className="text-gray-600">Lower return rates</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">5x</p>
              <p className="text-gray-600">
                More engagement than static product pages
              </p>
            </div>
          </div>
        </div>

        {/* Common Benefits */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Benefits Across All Industries
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Build trust and authenticity with real-time interaction',
              'Answer questions before customers bounce',
              'Create urgency and excitement around products',
              'Reduce returns by showing products clearly',
              'Build a community of loyal customers',
              'Stand out from competitors with unique content',
              'Collect customer feedback in real-time',
              'Drive impulse purchases with limited-time offers',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Don&apos;t see your industry?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The Simple Stream works for any retail business. Let&apos;s chat about how
            live shopping can work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Contact Us
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
