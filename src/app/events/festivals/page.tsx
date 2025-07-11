import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Music, Star, Tent, Volume2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rock Festivals & Music Events | KLAQ 95.5 FM El Paso',
  description: 'Discover the best rock and music festivals in Texas and the Southwest. Multi-day events featuring top artists, camping, and non-stop rock music.',
  keywords: 'rock festivals, music festivals, Texas festivals, Southwest music events, multi-day concerts',
  openGraph: {
    title: 'Rock Festivals & Music Events | KLAQ 95.5 FM El Paso',
    description: 'Discover the best rock and music festivals in Texas and the Southwest.',
    type: 'website',
    url: 'https://klaq.com/events/festivals',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function FestivalsPage() {
  const upcomingFestivals = [
    {
      name: "Austin City Limits Music Festival",
      location: "Austin, TX",
      dates: "October 4-6 & 11-13, 2025",
      headliners: ["Pearl Jam", "The Killers", "Billie Eilish"],
      price: "Starting at $149/day",
      status: "Early Bird",
      description: "Austin's premier music festival featuring 8 stages and 130+ artists across multiple genres"
    },
    {
      name: "Aftershock Festival", 
      location: "Sacramento, CA",
      dates: "October 10-13, 2025",
      headliners: ["Metallica", "Korn", "Avenged Sevenfold"],
      price: "Starting at $199/day",
      status: "On Sale",
      description: "The West Coast's biggest rock festival with 4 days of heavy music and craft experiences"
    },
    {
      name: "Welcome to Rockville",
      location: "Daytona Beach, FL", 
      dates: "May 15-18, 2025",
      headliners: ["Foo Fighters", "Tool", "Nine Inch Nails"],
      price: "Starting at $179/day",
      status: "VIP Available",
      description: "Florida's loudest party featuring the biggest names in rock and metal"
    },
    {
      name: "Sonic Temple Art + Music Festival",
      location: "Columbus, OH",
      dates: "May 8-11, 2025", 
      headliners: ["System of a Down", "Disturbed", "Alice in Chains"],
      price: "Starting at $169/day",
      status: "On Sale",
      description: "Art meets music in this immersive festival experience with top rock acts"
    },
    {
      name: "Louder Than Life",
      location: "Louisville, KY",
      dates: "September 26-29, 2025",
      headliners: ["Slipknot", "Rob Zombie", "Five Finger Death Punch"], 
      price: "Starting at $189/day",
      status: "Coming Soon",
      description: "Kentucky's biggest rock festival featuring bourbon, food, and crushing rock music"
    },
    {
      name: "Rocklahoma", 
      location: "Pryor, OK",
      dates: "May 23-25, 2025",
      headliners: ["Ozzy Osbourne", "Judas Priest", "Black Sabbath"],
      price: "Starting at $159/day", 
      status: "Early Bird",
      description: "Oklahoma's premier rock festival celebrating classic and modern rock legends"
    }
  ]

  const festivalGuide = [
    {
      title: "What to Bring",
      items: ["Comfortable shoes", "Sunscreen & hat", "Portable charger", "Cash for vendors", "Refillable water bottle", "Rain poncho"]
    },
    {
      title: "Festival Camping",
      items: ["Tent & sleeping gear", "Camping chairs", "Cooler with ice", "Camping permits", "Shower supplies", "Flashlight/lantern"]
    },
    {
      title: "Food & Drinks", 
      items: ["Sealed snacks", "Empty water bottles", "Food vendor cash", "Dietary restrictions plan", "Hangover prevention", "Stay hydrated"]
    },
    {
      title: "Safety Tips",
      items: ["Buddy system", "Meeting points", "Emergency contacts", "First aid basics", "Weather awareness", "Hearing protection"]
    }
  ]

  const festivalTypes = [
    {
      name: "Multi-Genre Festivals",
      description: "Large festivals featuring rock, pop, indie, and electronic acts",
      examples: ["Austin City Limits", "Lollapalooza", "Bonnaroo"],
      icon: Music
    },
    {
      name: "Rock & Metal Festivals", 
      description: "Heavy music festivals focused on rock, metal, and alternative genres",
      examples: ["Aftershock", "Welcome to Rockville", "Louder Than Life"],
      icon: Volume2
    },
    {
      name: "Camping Festivals",
      description: "Multi-day events with on-site camping and 24/7 music experiences", 
      examples: ["Rocklahoma", "Sonic Temple", "Download Festival"],
      icon: Tent
    },
    {
      name: "One-Day Events",
      description: "Single-day festivals perfect for a quick music fix",
      examples: ["KLAQ Rocks the Park", "Local amphitheater shows"],
      icon: Calendar
    }
  ]

  return (
    <div className="page-container bg-white">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8">
              <Tent className="w-5 h-5" />
              <span className="font-medium text-lg">Multi-Day Music Events</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Rock <span className="text-purple-300">Festivals</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-purple-100 mt-6 max-w-3xl mx-auto mb-12 leading-relaxed">
              Immerse yourself in days of non-stop rock music. From intimate camping festivals to massive 
              multi-stage spectacles, experience the ultimate live music adventures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Multiple Stages</h3>
                <p className="text-purple-100 text-base leading-relaxed">Non-stop music across multiple venues</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-purple-100 text-base leading-relaxed">Connect with fellow rock fans</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exclusive Acts</h3>
                <p className="text-purple-100 text-base leading-relaxed">See rare performances and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Festivals */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Festivals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Plan your next festival adventure with these incredible multi-day music experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {upcomingFestivals.map((festival, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{festival.name}</h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-base">{festival.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-base">{festival.dates}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      festival.status === 'On Sale' ? 'bg-green-100 text-green-800' :
                      festival.status === 'Early Bird' ? 'bg-blue-100 text-blue-800' :
                      festival.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {festival.status}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">{festival.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Headliners</p>
                    <div className="flex flex-wrap gap-2">
                      {festival.headliners.map((artist, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Passes from</span>
                      <p className="text-xl font-bold text-purple-600">{festival.price}</p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                        Get Passes
                      </button>
                      <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              View Festival Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Festival Types */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Festivals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find the perfect festival experience that matches your music taste and adventure level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivalTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                  </div>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">{type.description}</p>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Examples:</p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, idx) => (
                        <span key={idx} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Festival Survival Guide */}
      <section className="py-20 bg-purple-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Festival Survival Guide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Make the most of your festival experience with these essential tips and gear recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {festivalGuide.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss a Festival</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Get festival announcements, lineup reveals, and early bird ticket opportunities delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              Subscribe to Festival Alerts
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              Download Festival Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
