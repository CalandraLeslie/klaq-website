import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Radio, 
  Users, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  DollarSign,
  Megaphone,
  Building,
  Star,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advertise with KLAQ - Reach El Paso\'s Rock Audience | 95.5 KLAQ',
  description: 'Advertise your business on KLAQ 95.5 FM and reach El Paso\'s most engaged rock music audience. Premium radio advertising solutions for local businesses.',
  keywords: 'KLAQ advertising, El Paso radio ads, rock music advertising, local business promotion',
}

export default function AdvertisePage() {
  const packages = [
    {
      name: 'Local Business Starter',
      price: 'Starting at $299/month',
      features: [
        '30-second commercials',
        'Peak time rotation',
        'Online directory listing',
        'Social media mentions',
        'Monthly performance report'
      ],
      ideal: 'Small businesses & startups'
    },
    {
      name: 'Premium Brand Package',
      price: 'Starting at $799/month',
      features: [
        '60-second commercials',
        'Prime time guaranteed spots',
        'Live DJ endorsements',
        'Event sponsorship opportunities',
        'Digital advertising bundle',
        'Custom jingle creation'
      ],
      ideal: 'Established brands & franchises'
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom pricing',
      features: [
        'Unlimited commercial length',
        'Priority scheduling',
        'Exclusive sponsorships',
        'Live remote broadcasts',
        'Year-round campaign management',
        'Advanced analytics & reporting'
      ],
      ideal: 'Large corporations & chains'
    }
  ]

  const demographics = [
    { label: 'Age 25-54', percentage: '68%', description: 'Prime spending demographic' },
    { label: 'Male Audience', percentage: '58%', description: 'Rock music preference' },
    { label: 'Household Income $50K+', percentage: '72%', description: 'Strong purchasing power' },
    { label: 'El Paso Metro Area', percentage: '85%', description: 'Local market reach' }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Targeted Audience',
      description: 'Reach El Paso\'s most engaged rock music fans aged 25-54'
    },
    {
      icon: Radio,
      title: 'Market Leader',
      description: '#1 rock station in El Paso with loyal listener base'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of driving traffic and sales for local businesses'
    },
    {
      icon: Users,
      title: 'Community Trust',
      description: 'KLAQ hosts are trusted voices in the El Paso community'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advertise with <span className="text-red-400">KLAQ</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Reach El Paso's most engaged rock music audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="#packages" 
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose KLAQ */}
      <section className="py-16">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose KLAQ for Your Advertising?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-center mb-12">Our Audience Demographics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {demographics.map((demo, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{demo.percentage}</div>
                <h3 className="text-lg font-semibold mb-1">{demo.label}</h3>
                <p className="text-gray-600 text-sm">{demo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Packages */}
      <section id="packages" className="py-16">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-center mb-12">Advertising Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-red-600 mb-4">{pkg.price}</p>
                <p className="text-gray-600 mb-6">{pkg.ideal}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ready to Advertise with KLAQ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get Your Custom Quote</h3>
                <p className="text-gray-300 mb-6">
                  Contact our advertising team to discuss your business goals and create a custom advertising package that fits your budget and objectives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-400 mr-3" />
                    <span>(915) 544-KLAQ</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-red-400 mr-3" />
                    <span>advertising@klaq.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-red-400 mr-3" />
                    <span>El Paso, Texas</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/contact" 
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-colors"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
