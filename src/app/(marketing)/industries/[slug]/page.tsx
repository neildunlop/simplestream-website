import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

const industries: Record<
  string,
  {
    title: string;
    emoji: string;
    heroTitle: string;
    heroDescription: string;
    color: string;
    benefits: { title: string; description: string }[];
    useCases: string[];
    tips: { title: string; content: string }[];
    stats: { label: string; value: string }[];
  }
> = {
  collectables: {
    title: 'Collectables & Trading Cards',
    emoji: '🎴',
    heroTitle: 'Sell Collectables Live',
    heroDescription:
      'Perfect for sports cards, Pokemon, vintage toys, and unique items. Build trust by showing condition in real-time.',
    color: 'from-amber-500 to-orange-600',
    benefits: [
      {
        title: 'Show Item Condition',
        description:
          'Let buyers see every angle, corner, and detail. No more disputes about condition.',
      },
      {
        title: 'Build Trust Instantly',
        description:
          'Live video builds trust faster than photos ever could. Buyers see exactly what they\'re getting.',
      },
      {
        title: 'Create Urgency',
        description:
          'One-of-a-kind items sell fast when buyers know others are watching.',
      },
      {
        title: 'Answer Questions Live',
        description:
          'Collectors have detailed questions. Answer them instantly to close the sale.',
      },
    ],
    useCases: [
      'Card breaks and pack openings',
      'Vintage toy shows',
      'Comic book showcases',
      'Memorabilia auctions',
      'Grading reveals',
      'Collection walkthrough',
    ],
    tips: [
      {
        title: 'Good Lighting is Essential',
        content:
          'Invest in ring lights or softboxes. Collectors want to see true colors and condition.',
      },
      {
        title: 'Use a Card Stand',
        content:
          'Show cards without fingerprints. Collectors appreciate careful handling.',
      },
      {
        title: 'Know Your Products',
        content:
          'Be ready to discuss condition, rarity, and market value. Knowledge builds trust.',
      },
    ],
    stats: [
      { label: 'Average Order Value', value: '£85' },
      { label: 'Conversion Rate', value: '12%' },
      { label: 'Avg. Watch Time', value: '45 min' },
    ],
  },
  fashion: {
    title: 'Fashion & Apparel',
    emoji: '👗',
    heroTitle: 'Bring Fashion to Life',
    heroDescription:
      'Model clothes live, show fit and movement, answer sizing questions instantly. Perfect for boutiques and brands.',
    color: 'from-pink-500 to-rose-600',
    benefits: [
      {
        title: 'Show Fit in Motion',
        description:
          'Static photos can\'t show how clothes move and fit. Live video does.',
      },
      {
        title: 'Answer Sizing Questions',
        description:
          'Sizing is the #1 reason for returns. Answer questions live to reduce returns.',
      },
      {
        title: 'Style Complete Looks',
        description:
          'Show how pieces work together. Increase average order value with outfit suggestions.',
      },
      {
        title: 'Create Fashion Shows',
        description:
          'Launch new collections with live fashion shows. Build excitement and drive sales.',
      },
    ],
    useCases: [
      'New arrival reveals',
      'Try-on sessions',
      'Styling tips and outfit ideas',
      'Size comparison demos',
      'Fabric and quality close-ups',
      'Seasonal collection launches',
    ],
    tips: [
      {
        title: 'Model Different Body Types',
        content:
          'Customers want to see how clothes look on people like them. Diversity sells.',
      },
      {
        title: 'Show Movement',
        content:
          'Spin, walk, sit down. Show how clothes behave in real life.',
      },
      {
        title: 'Prepare Size Comparisons',
        content:
          'Have multiple sizes ready to show. Compare how they fit on the same person.',
      },
    ],
    stats: [
      { label: 'Average Order Value', value: '£120' },
      { label: 'Conversion Rate', value: '15%' },
      { label: 'Avg. Watch Time', value: '35 min' },
    ],
  },
  beauty: {
    title: 'Beauty & Cosmetics',
    emoji: '💄',
    heroTitle: 'Demonstrate Beauty Live',
    heroDescription:
      'Show product application, share tutorials, and let customers see real results before they buy.',
    color: 'from-purple-500 to-violet-600',
    benefits: [
      {
        title: 'Live Demonstrations',
        description:
          'Show how products apply, blend, and look in natural light. No filters, no tricks.',
      },
      {
        title: 'Tutorial Content',
        description:
          'Teach techniques while selling products. Educated customers are confident buyers.',
      },
      {
        title: 'True Color Accuracy',
        description:
          'Customers see real colors in real lighting. No more "it looked different online."',
      },
      {
        title: 'Skincare Consultations',
        description:
          'Answer questions about skin types and concerns. Personalized recommendations sell.',
      },
    ],
    useCases: [
      'Makeup tutorials',
      'Product swatches',
      'Skincare routines',
      'New product launches',
      'Before/after transformations',
      'Q&A sessions on ingredients',
    ],
    tips: [
      {
        title: 'Good Lighting is Non-Negotiable',
        content:
          'Natural daylight or high-quality studio lighting. Color accuracy matters in beauty.',
      },
      {
        title: 'Close-Up Camera Ready',
        content:
          'Have a way to show detailed product swatches and application.',
      },
      {
        title: 'Know Your Ingredients',
        content:
          'Be ready to discuss formulations and what makes products special.',
      },
    ],
    stats: [
      { label: 'Average Order Value', value: '£65' },
      { label: 'Conversion Rate', value: '18%' },
      { label: 'Avg. Watch Time', value: '30 min' },
    ],
  },
  home: {
    title: 'Home & Lifestyle',
    emoji: '🏠',
    heroTitle: 'Home Shopping Reimagined',
    heroDescription:
      'Show products in real settings, demonstrate functionality, and inspire purchases with lifestyle content.',
    color: 'from-green-500 to-emerald-600',
    benefits: [
      {
        title: 'Show Real Scale',
        description:
          'How big is it really? Show products in actual rooms to help customers visualize.',
      },
      {
        title: 'Demonstrate Function',
        description:
          'Show products working. Kitchen gadgets, home tech, furniture - see it in action.',
      },
      {
        title: 'Create Lifestyle Content',
        description:
          'Inspire customers with room setups, styling ideas, and home improvement tips.',
      },
      {
        title: 'Bundle Suggestions',
        description:
          'Show how products work together. Increase order value with room packages.',
      },
    ],
    useCases: [
      'Room makeovers',
      'Product demonstrations',
      'Organization tips',
      'Seasonal decor reveals',
      'Kitchen appliance demos',
      'Furniture assembly and styling',
    ],
    tips: [
      {
        title: 'Use Real Rooms',
        content:
          'Show products in actual settings, not just against white backgrounds.',
      },
      {
        title: 'Demonstrate Functionality',
        content:
          'Don\'t just show it - use it. Viewers want to see products in action.',
      },
      {
        title: 'Style Complete Looks',
        content:
          'Show complementary products together. Room vignettes sell more than single items.',
      },
    ],
    stats: [
      { label: 'Average Order Value', value: '£95' },
      { label: 'Conversion Rate', value: '10%' },
      { label: 'Avg. Watch Time', value: '40 min' },
    ],
  },
  jewelry: {
    title: 'Jewelry & Accessories',
    emoji: '💎',
    heroTitle: 'Showcase Every Sparkle',
    heroDescription:
      'Let customers see pieces from every angle. Show scale, detail, and craftsmanship in ways photos never could.',
    color: 'from-cyan-500 to-sky-600',
    benefits: [
      {
        title: 'Show Sparkle & Movement',
        description:
          'Jewelry needs to move to shine. Video captures what photos miss.',
      },
      {
        title: 'Demonstrate Scale',
        description:
          'Show pieces on hands, wrists, and ears. Customers know exactly what they\'re buying.',
      },
      {
        title: 'Detail Close-Ups',
        description:
          'Zoom in on craftsmanship, settings, and details that justify the price.',
      },
      {
        title: 'Build Trust',
        description:
          'Live video is authentic. No photo editing, no tricks. What you see is what you get.',
      },
    ],
    useCases: [
      'Collection showcases',
      'New arrival reveals',
      'Custom piece consultations',
      'Styling sessions',
      'Care and maintenance tips',
      'Materials education',
    ],
    tips: [
      {
        title: 'Macro Lens for Details',
        content:
          'Invest in close-up capability to show intricate details and craftsmanship.',
      },
      {
        title: 'Clean Jewelry Before Showing',
        content:
          'Fingerprints and dust show on camera. Keep pieces pristine.',
      },
      {
        title: 'Know Your Materials',
        content:
          'Be ready to discuss metals, gems, and what makes each piece special.',
      },
    ],
    stats: [
      { label: 'Average Order Value', value: '£150' },
      { label: 'Conversion Rate', value: '8%' },
      { label: 'Avg. Watch Time', value: '25 min' },
    ],
  },
  electronics: {
    title: 'Electronics & Gadgets',
    emoji: '📱',
    heroTitle: 'Demo Tech Live',
    heroDescription:
      'Unbox, demonstrate, and explain features. Help customers understand products before they commit.',
    color: 'from-slate-500 to-gray-600',
    benefits: [
      {
        title: 'Live Unboxing',
        description:
          'Create excitement with live unboxing content. Show everything included.',
      },
      {
        title: 'Feature Demonstrations',
        description:
          'Show products actually working. Buttons, screens, features - see it all.',
      },
      {
        title: 'Compare Models',
        description:
          'Side-by-side comparisons help customers choose the right product.',
      },
      {
        title: 'Answer Technical Questions',
        description:
          'Tech buyers have detailed questions. Expert answers close sales.',
      },
    ],
    useCases: [
      'Product unboxings',
      'Feature walkthroughs',
      'Model comparisons',
      'Setup tutorials',
      'Accessory recommendations',
      'Tech tips and tricks',
    ],
    tips: [
      {
        title: 'Have Products Charged',
        content:
          'Nothing kills a demo like a dead battery. Prepare in advance.',
      },
      {
        title: 'Test Everything First',
        content:
          'Know how products work before going live. No fumbling on camera.',
      },
      {
        title: 'Compare to Competitors',
        content:
          'Honest comparisons build trust. Show why your product is the best choice.',
      },
    ],
    stats: [
      { label: 'Average Order Value', value: '£180' },
      { label: 'Conversion Rate', value: '7%' },
      { label: 'Avg. Watch Time', value: '50 min' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug];
  if (!industry) {
    return { title: 'Industry Not Found' };
  }
  return {
    title: industry.title,
    description: industry.heroDescription,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries[params.slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        {/* Back Link */}
        <Link
          href="/industries"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          All Industries
        </Link>

        {/* Hero */}
        <div
          className={`bg-gradient-to-br ${industry.color} text-white rounded-2xl p-8 md:p-16 mb-16`}
        >
          <div className="max-w-3xl">
            <span className="text-6xl mb-6 block">{industry.emoji}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {industry.heroTitle}
            </h1>
            <p className="text-xl opacity-90 mb-8">
              {industry.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {industry.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl border border-gray-200 text-center"
            >
              <p className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Why Live Shopping Works for {industry.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Popular Use Cases
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {industry.useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-center gap-3 bg-white p-4 rounded-lg"
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Tips for Success
          </h2>
          <div className="space-y-6">
            {industry.tips.map((tip, index) => (
              <div key={tip.title} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Start Selling Live?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join other {industry.title.toLowerCase()} retailers who are growing
            their business with live shopping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.thesimplestream.com/register">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                Request a Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            14-day free trial &bull; No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}
