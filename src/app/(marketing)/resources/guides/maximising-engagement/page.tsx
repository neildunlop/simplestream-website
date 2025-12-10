import Link from 'next/link';
import { ArrowLeft, BarChart3, Users, MessageSquare, Clock, Gift, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Maximising Engagement',
  description:
    'Strategies for keeping viewers engaged and driving more sales during your live shopping streams.',
};

export default function MaximisingEngagementGuidePage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <Link
            href="/resources"
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-8">
            <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
              <BarChart3 className="w-4 h-4" />
              <span>Strategy</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Maximising Engagement
            </h1>
            <p className="text-gray-600 mb-8">
              Strategies for keeping viewers engaged and driving more sales during streams.
            </p>

            {/* Why Engagement Matters */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">1</span>
                Why Engagement Matters
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Engaged viewers are buying viewers. The more interaction during your stream,
                  the more likely viewers are to purchase.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600 mb-1">3x</p>
                    <p className="text-sm text-blue-800">Higher conversion when viewers chat</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-green-600 mb-1">40%</p>
                    <p className="text-sm text-green-800">Longer watch time with interaction</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-purple-600 mb-1">2x</p>
                    <p className="text-sm text-purple-800">More likely to return for next stream</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Building Connection */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">2</span>
                Building Connection
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Viewers buy from people they like. Building genuine connection is your biggest advantage over traditional e-commerce.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <h3 className="font-medium text-gray-900">Be Authentic</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Share your genuine enthusiasm. Talk about why you chose these products for your store.
                      Your passion is contagious.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      <h3 className="font-medium text-gray-900">Greet Viewers by Name</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      &quot;Welcome Sarah!&quot; - Acknowledging viewers makes them feel special and more likely to engage.
                      Thank returning viewers especially.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-green-500" />
                      <h3 className="font-medium text-gray-900">Share Stories</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Tell the story behind products. Where did you find it? Why do you love it?
                      Personal stories sell better than feature lists.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Chat Engagement */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">3</span>
                Mastering Live Chat
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Chat is your direct line to customers. Active chat keeps viewers watching and buying.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h3 className="font-medium text-blue-900 mb-2">Chat Best Practices</h3>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• Read and respond to messages every 2-3 minutes</li>
                    <li>• Call out viewers by name when answering</li>
                    <li>• Thank viewers when they make a purchase</li>
                    <li>• Ask follow-up questions to keep conversation going</li>
                    <li>• Pin important messages or announcements</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Conversation Starters</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>&quot;Where&apos;s everyone watching from today?&quot;</li>
                    <li>&quot;Have any of you tried this brand before?&quot;</li>
                    <li>&quot;What colours are you loving this season?&quot;</li>
                    <li>&quot;Should I show the blue or the green first?&quot;</li>
                    <li>&quot;Any requests for what to show next?&quot;</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Creating Urgency */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">4</span>
                Creating Urgency
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Urgency drives action. Give viewers a reason to buy now rather than later.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <h3 className="font-medium text-orange-900">Time-Limited Offers</h3>
                    </div>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>&quot;Stream-only 20% off for the next 10 minutes!&quot;</li>
                      <li>&quot;Free shipping for orders placed during the stream&quot;</li>
                      <li>&quot;This discount code expires when we end&quot;</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-red-600" />
                      <h3 className="font-medium text-red-900">Scarcity</h3>
                    </div>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>&quot;Only 3 left in this colour!&quot;</li>
                      <li>&quot;This is from our limited collection&quot;</li>
                      <li>&quot;Once it&apos;s gone, it&apos;s gone&quot;</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Only create urgency that&apos;s genuine. False scarcity damages trust.
                    If you say there are only 3 left, there should only be 3 left.
                  </p>
                </div>
              </div>
            </section>

            {/* Interactive Elements */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">5</span>
                Interactive Elements
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  Turn passive watching into active participation with these techniques.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Polls &amp; Voting</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Let viewers choose what happens next:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>&quot;Type 1 for the dress, 2 for the jumpsuit - which should I show next?&quot;</li>
                      <li>&quot;Should I try this on? Yes or No in the chat!&quot;</li>
                      <li>&quot;What colour do you want to see styled?&quot;</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Q&amp;A Sessions</h3>
                    <p className="text-sm text-gray-600">
                      Dedicate time to answer questions. &quot;Let&apos;s take a quick Q&amp;A break -
                      drop your questions in the chat!&quot;
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-5 h-5 text-purple-500" />
                      <h3 className="font-medium text-gray-900">Giveaways &amp; Prizes</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Run occasional giveaways to boost engagement: &quot;Everyone who orders
                      during the stream is entered to win a £50 gift card!&quot;
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Stream Structure */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">6</span>
                Stream Structure
              </h2>
              <div className="pl-10">
                <p className="text-gray-600 mb-4">
                  A well-structured stream keeps viewers engaged from start to finish.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-sm font-medium text-blue-600">0-5 min</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Welcome &amp; Warm-up</h3>
                      <p className="text-sm text-gray-600">Greet viewers, chat casually, let audience build up before showing products.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-sm font-medium text-blue-600">5-10 min</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Hook Product</h3>
                      <p className="text-sm text-gray-600">Start with your most exciting or best-selling product to capture attention.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-sm font-medium text-blue-600">10-40 min</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Main Content</h3>
                      <p className="text-sm text-gray-600">Cycle through products, answer questions, create urgency. Mix in chat breaks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-sm font-medium text-blue-600">40-50 min</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Recap &amp; Final Push</h3>
                      <p className="text-sm text-gray-600">Show top products again, remind of any offers, final call to action.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-20 flex-shrink-0">
                      <span className="text-sm font-medium text-blue-600">50-60 min</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Wind Down</h3>
                      <p className="text-sm text-gray-600">Thank viewers, announce next stream, encourage follows/notifications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Retention Strategies */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">7</span>
                Keeping Viewers Watching
              </h2>
              <div className="pl-10">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Tease What&apos;s Coming</h3>
                    <p className="text-sm text-gray-600">
                      &quot;Stay tuned - I&apos;ve saved my favourite piece for later!&quot;
                      Give viewers a reason to keep watching.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Vary Your Pace</h3>
                    <p className="text-sm text-gray-600">
                      Mix high-energy product reveals with calmer chat moments.
                      Constant high energy is exhausting for viewers.
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">Acknowledge New Joiners</h3>
                    <p className="text-sm text-gray-600">
                      Periodically welcome new viewers and briefly recap what they&apos;ve missed.
                      &quot;For those just joining, we&apos;re looking at our new summer collection!&quot;
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900 mb-2">End-of-Stream Exclusive</h3>
                    <p className="text-sm text-gray-600">
                      Offer something special for viewers who stay until the end.
                      &quot;Everyone watching at the end gets an extra 10% off!&quot;
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <p className="text-gray-600">Ready to build an engaged audience?</p>
                <a href="https://app.thesimplestream.com/register">
                  <Button>
                    Start Free Trial
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
