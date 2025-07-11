import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Crown, Ticket, Users, Music, Gift, Calendar, Headphones, Camera, Mic, Clock, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KLAQ VIP Club | Exclusive Member Benefits | 95.5 FM El Paso',
  description: 'Join the KLAQ VIP Club for exclusive concert presales, backstage access, meet & greets with DJs, and premium rock experiences in El Paso.',
  keywords: 'KLAQ VIP, concert presales, backstage access, DJ meet and greets, exclusive events, rock fan club',
  openGraph: {
    title: 'KLAQ VIP Club | Exclusive Member Benefits | 95.5 FM El Paso',
    description: 'Join the KLAQ VIP Club for exclusive concert presales and premium rock experiences.',
    type: 'website',
    url: 'https://klaq.com/vip',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function VIPPage() {
  const membershipTiers = [
    {
      name: "Rock Fan",
      price: "Free",
      duration: "Forever",
      color: "blue",
      popular: false,
      features: [
        "Contest entries",
        "Email newsletters", 
        "Basic event notifications",
        "KLAQ mobile app access",
        "Standard customer support"
      ]
    },
    {
      name: "VIP Member",
      price: "$19.99",
      duration: "per year",
      color: "red",
      popular: true,
      features: [
        "Everything in Rock Fan",
        "Concert presale access",
        "Exclusive VIP events",
        "DJ meet & greet opportunities",
        "KLAQ merchandise discounts",
        "Priority contest entries",
        "VIP customer support line",
        "Early show announcements"
      ]
    },
    {
      name: "Rock Royalty",
      price: "$49.99", 
      duration: "per year",
      color: "purple",
      popular: false,
      features: [
        "Everything in VIP Member",
        "Backstage access opportunities",
        "Exclusive listening parties",
        "Meet touring artists",
        "Limited edition merchandise",
        "Studio tour invitations",
        "VIP parking at events",
        "Personal concierge service",
        "Annual appreciation gift"
      ]
    }
  ]

  const exclusiveBenefits = [
    {
      title: "Concert Presales",
      description: "Get tickets before the general public for all major concerts and festivals",
      icon: Ticket,
      details: ["24-48 hour early access", "Best seat selections", "Presale codes via email", "Mobile app notifications"]
    },
    {
      title: "Backstage Access", 
      description: "Behind-the-scenes access to KLAQ studios and select concert venues",
      icon: Camera,
      details: ["Studio tours", "Sound check access", "Meet the crew", "Exclusive photo opportunities"]
    },
    {
      title: "DJ Meet & Greets",
      description: "Personal interactions with your favorite KLAQ personalities",
      icon: Mic,
      details: ["Monthly meetups", "Coffee with DJs", "Q&A sessions", "Personal dedications"]
    },
    {
      title: "Exclusive Events",
      description: "VIP-only parties, listening sessions, and special broadcasts",
      icon: Star,
      details: ["Album release parties", "Private concerts", "Holiday celebrations", "Anniversary events"]
    },
    {
      title: "Premium Merchandise",
      description: "Limited edition KLAQ gear and discounts on all merchandise",
      icon: Gift,
      details: ["Member-only designs", "20% off all purchases", "Free shipping", "Annual appreciation gift"]
    },
    {
      title: "Priority Support",
      description: "Dedicated VIP support line for faster assistance and personal service",
      icon: Headphones,
      details: ["Direct phone line", "Email priority", "Personal account manager", "Technical support"]
    }
  ]

  const memberPerks = [
    {
      category: "Concert Benefits",
      perks: [
        "48-hour presale access to all major concerts",
        "VIP parking at KLAQ-sponsored events", 
        "Meet & greet opportunities with touring artists",
        "Backstage tours and sound check access",
        "Premium seating upgrades when available"
      ]
    },
    {
      category: "Exclusive Access",
      perks: [
        "Monthly VIP-only events and parties",
        "Private album listening sessions", 
        "Behind-the-scenes studio access",
        "DJ coffee meetups and Q&A sessions",
        "Special broadcast viewing opportunities"
      ]
    },
    {
      category: "Member Rewards",
      perks: [
        "20% discount on all KLAQ merchandise",
        "Free shipping on online orders",
        "Limited edition VIP-only gear",
        "Annual appreciation gift package",
        "Birthday month special offers"
      ]
    },
    {
      category: "Communication",
      perks: [
        "Exclusive VIP newsletter with insider info",
        "Early announcements for shows and events",
        "Direct line to VIP support team",
        "Personal song dedication opportunities",
        "Access to VIP-only social media groups"
      ]
    }
  ]

  const testimonials = [
    {
      name: "Sarah Martinez",
      membership: "Rock Royalty",
      quote: "Being a KLAQ VIP has given me incredible experiences. I've met so many amazing artists and the presale access is unbeatable!",
      avatar: "SM"
    },
    {
      name: "Mike Rodriguez", 
      membership: "VIP Member",
      quote: "The DJ meet & greets are awesome! Buzz Adams is even funnier in person. Worth every penny for a rock fan like me.",
      avatar: "MR"
    },
    {
      name: "Jessica Chen",
      membership: "VIP Member", 
      quote: "I never miss a concert now thanks to the presale access. The VIP events are intimate and so much fun. Love being part of the KLAQ family!",
      avatar: "JC"
    }
  ]

  const faq = [
    {
      question: "How do I get presale codes?",
      answer: "Presale codes are sent via email and mobile app notifications 24-48 hours before public sale. Make sure your contact info is up to date!"
    },
    {
      question: "Can I upgrade my membership?",
      answer: "Yes! You can upgrade anytime and we'll prorate the difference. Your new benefits start immediately."
    },
    {
      question: "What if I miss an event?",
      answer: "We record many VIP events and make them available to members. Plus, we host multiple events monthly so there's always another opportunity."
    },
    {
      question: "Is there a family plan?",
      answer: "We offer family discounts for multiple memberships. Contact our VIP support team for details on family pricing."
    },
    {
      question: "Can I cancel anytime?",
      answer: "VIP memberships are annual subscriptions. You can cancel before your renewal date, and we'll honor your benefits through the paid period."
    }
  ]

  return (
    <div className="page-container bg-white">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-purple-600 via-red-600 to-orange-600 text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8">
              <Crown className="w-5 h-5 text-yellow-300" />
              <span className="font-medium text-lg">Exclusive Membership</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              KLAQ <span className="text-yellow-300">VIP Club</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-purple-100 mt-6 max-w-3xl mx-auto mb-12 leading-relaxed">
              Unlock exclusive access to concerts, backstage experiences, DJ meet & greets, and the ultimate rock fan lifestyle. 
              Join the inner circle of El Paso's premier rock station.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Ticket className="w-10 h-10 text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Concert Presales</h3>
                <p className="text-purple-100 text-base leading-relaxed">First access to the hottest shows</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exclusive Events</h3>
                <p className="text-purple-100 text-base leading-relaxed">VIP-only parties and experiences</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Meet the Team</h3>
                <p className="text-purple-100 text-base leading-relaxed">Personal time with KLAQ DJs</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#membership" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200 inline-block">
                Join VIP Club
              </Link>
              <Link href="#benefits" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200 inline-block">
                See All Benefits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership" className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Level</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select the membership tier that matches your rock passion and get exclusive access to the KLAQ experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                tier.popular ? 'ring-2 ring-red-500 scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${tier.popular ? 'pt-16' : ''}`}>
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      tier.color === 'blue' ? 'bg-blue-100' :
                      tier.color === 'red' ? 'bg-red-100' : 'bg-purple-100'
                    }`}>
                      {tier.color === 'blue' ? <Music className="w-8 h-8 text-blue-600" /> :
                       tier.color === 'red' ? <Star className="w-8 h-8 text-red-600" /> :
                       <Crown className="w-8 h-8 text-purple-600" />}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                      {tier.price !== 'Free' && <span className="text-gray-500 ml-2">{tier.duration}</span>}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          tier.color === 'blue' ? 'text-blue-600' :
                          tier.color === 'red' ? 'text-red-600' : 'text-purple-600'
                        }`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-colors duration-200 ${
                    tier.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                    tier.color === 'red' ? 'bg-red-600 hover:bg-red-700 text-white' :
                    'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}>
                    {tier.price === 'Free' ? 'Sign Up Free' : 'Become a Member'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Exclusive VIP Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover all the amazing perks and experiences that come with KLAQ VIP membership
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {exclusiveBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">{benefit.description}</p>
                  <div className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Member Perks Breakdown */}
      <section className="py-20 bg-red-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Member Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concert access to exclusive merchandise, here's everything you get as a KLAQ VIP member
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memberPerks.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Members Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from real KLAQ VIP members about their exclusive experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{testimonial.avatar}</span>
                </div>
                <blockquote className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-red-600">{testimonial.membership} Member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get answers to common questions about KLAQ VIP membership
              </p>
            </div>
            
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the VIP Experience?</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Don't miss out on exclusive concerts, backstage access, and unforgettable rock experiences. 
            Join thousands of El Paso rock fans in the KLAQ VIP Club today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200">
              Join VIP Club Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200">
              Contact VIP Support
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-red-200 text-sm">
              Questions? Email us at <a href="mailto:vip@klaq.com" className="underline hover:text-white">vip@klaq.com</a> or call (915) 555-KLAQ
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}