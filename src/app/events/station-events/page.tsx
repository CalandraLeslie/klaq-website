import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Music, Star, Gift, Mic, Radio, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KLAQ Station Events & Exclusive Experiences | 95.5 FM El Paso',
  description: 'Join KLAQ for exclusive station events, DJ meet & greets, live broadcasts, and special promotions. VIP experiences for El Paso\'s rock community.',
  keywords: 'KLAQ events, station events, DJ meet and greets, live broadcasts, VIP experiences, radio promotions',
  openGraph: {
    title: 'KLAQ Station Events & Exclusive Experiences | 95.5 FM El Paso',
    description: 'Join KLAQ for exclusive station events and VIP experiences.',
    type: 'website',
    url: 'https://klaq.com/events/station-events',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function StationEventsPage() {
  const upcomingEvents = [
    {
      title: "KLAQ Rocks the Park 2025",
      date: "September 14, 2025",
      time: "4:00 PM - 11:00 PM",
      venue: "Ascarate Park",
      description: "Our biggest annual event featuring multiple stages, food trucks, and top rock acts",
      type: "Annual Festival",
      tickets: "Free with RSVP",
      features: ["3 Stages", "Food Trucks", "Merch Booths", "Meet & Greets"]
    },
    {
      title: "Buzz Adams Morning Show Live",
      date: "August 25, 2025", 
      time: "6:00 AM - 10:00 AM",
      venue: "Sunland Park Mall",
      description: "Watch the morning show broadcast live with games, prizes, and special guests",
      type: "Live Broadcast",
      tickets: "Free",
      features: ["Live Games", "Prize Wheel", "Photo Ops", "Free Coffee"]
    },
    {
      title: "VIP Album Release Party",
      date: "September 8, 2025",
      time: "7:00 PM - 10:00 PM", 
      venue: "KLAQ Studios",
      description: "Exclusive listening party for Pearl Jam's new album with the KLAQ team",
      type: "VIP Event",
      tickets: "VIP Members Only",
      features: ["Exclusive Access", "Meet DJs", "Premium Snacks", "Signed Merch"]
    },
    {
      title: "KLAQ Mobile Studio Tour",
      date: "Every Friday",
      time: "12:00 PM - 6:00 PM",
      venue: "Various Locations",
      description: "Our mobile studio visits different El Paso locations for live broadcasts",
      type: "Weekly Tour",
      tickets: "Free",
      features: ["Live DJ Sets", "Station Merch", "Photo Booth", "Listener Games"]
    },
    {
      title: "Behind the Mic: Studio Tours",
      date: "Second Saturday Monthly",
      time: "10:00 AM - 2:00 PM",
      venue: "KLAQ Studios",
      description: "Go behind the scenes and see how your favorite radio station operates",
      type: "Studio Tour", 
      tickets: "$10 (Charity Donation)",
      features: ["Studio Access", "DJ Q&A", "Equipment Demo", "KLAQ History"]
    },
    {
      title: "Local Artist Spotlight",
      date: "Third Thursday Monthly",
      time: "6:00 PM - 9:00 PM",
      venue: "KLAQ Performance Space", 
      description: "Showcasing the best local El Paso rock talent with live performances",
      type: "Live Performance",
      tickets: "Free with RSVP",
      features: ["Live Music", "Artist Interviews", "Demo Submissions", "Networking"]
    }
  ]

  const eventTypes = [
    {
      name: "Live Broadcasts",
      icon: Radio,
      description: "Watch your favorite KLAQ shows broadcast live from various El Paso locations",
      frequency: "Weekly",
      examples: ["Morning show remotes", "Concert broadcasts", "Special event coverage"]
    },
    {
      name: "VIP Experiences",
      icon: Star,
      description: "Exclusive events for KLAQ VIP members with special access and perks",
      frequency: "Monthly",
      examples: ["Album listening parties", "Artist meet & greets", "Studio sessions"]
    },
    {
      name: "Community Outreach",
      icon: Users, 
      description: "KLAQ giving back to the El Paso community through charitable events",
      frequency: "Quarterly",
      examples: ["Charity concerts", "Food drives", "School visits"]
    },
    {
      name: "Promotional Events",
      icon: Gift,
      description: "Fun promotional activities with prizes, giveaways, and exclusive experiences",
      frequency: "Bi-weekly", 
      examples: ["Contest finale parties", "Sponsor events", "Product launches"]
    }
  ]

  const vipBenefits = [
    {
      title: "Exclusive Events",
      description: "Access to VIP-only listening parties, meet & greets, and special broadcasts",
      icon: Star
    },
    {
      title: "Priority Seating",
      description: "Best seats at KLAQ events and concerts we sponsor or broadcast",
      icon: Users
    },
    {
      title: "Backstage Access", 
      description: "Behind-the-scenes access to KLAQ studios and select concert venues",
      icon: Camera
    },
    {
      title: "DJ Interaction",
      description: "Extended time with KLAQ DJs at special meet & greet sessions",
      icon: Mic
    },
    {
      title: "Early Access",
      description: "First to know about events, tickets, and special announcements",
      icon: Clock
    },
    {
      title: "Exclusive Merch",
      description: "Limited edition KLAQ merchandise only available to VIP members",
      icon: Gift
    }
  ]

  const pastEvents = [
    {
      name: "KLAQ 40th Anniversary Celebration",
      date: "2024",
      attendance: "2,500+",
      highlights: ["Live performances", "DJ reunion", "Historical displays", "Fan testimonials"]
    },
    {
      name: "Metallica Album Release Party",
      date: "2023", 
      attendance: "VIP Only",
      highlights: ["Exclusive listening", "Band interview", "Signed memorabilia", "Premium experience"]
    },
    {
      name: "Summer Concert Series",
      date: "2023",
      attendance: "8,000+",
      highlights: ["5 outdoor shows", "Local food vendors", "Free admission", "Family friendly"]
    },
    {
      name: "Holiday Toy Drive Concert",
      date: "2023",
      attendance: "1,200+", 
      highlights: ["Charity focus", "Local bands", "Toy collections", "Community spirit"]
    }
  ]

  return (
    <div className="page-container bg-white">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-red-600 to-purple-600 text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8">
              <Radio className="w-5 h-5" />
              <span className="font-medium text-lg">Exclusive KLAQ Events</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Station <span className="text-purple-300">Events</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-red-100 mt-6 max-w-3xl mx-auto mb-12 leading-relaxed">
              Get exclusive access to KLAQ events, live broadcasts, DJ meet & greets, and VIP experiences. 
              Join the inner circle of El Paso's premier rock station.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">VIP Access</h3>
                <p className="text-red-100 text-base leading-relaxed">Exclusive events and backstage experiences</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Meet the DJs</h3>
                <p className="text-red-100 text-base leading-relaxed">Personal interactions with your favorite hosts</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exclusive Perks</h3>
                <p className="text-red-100 text-base leading-relaxed">Special prizes and limited edition merchandise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Station Events */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming KLAQ Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't miss these exclusive opportunities to connect with KLAQ and experience rock radio up close
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-base">{event.venue}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-base">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-base">{event.time}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'Annual Festival' ? 'bg-red-100 text-red-800' :
                      event.type === 'Live Broadcast' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'VIP Event' ? 'bg-purple-100 text-purple-800' :
                      event.type === 'Weekly Tour' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.type}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">{event.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.features.map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Admission</span>
                      <p className="text-lg font-bold text-red-600">{event.tickets}</p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                        RSVP Now
                      </button>
                      <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Station Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              KLAQ hosts a variety of events throughout the year, each offering unique experiences for our listeners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                      <p className="text-sm text-red-600 font-medium">{type.frequency}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">{type.description}</p>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Examples:</p>
                    <div className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* VIP Benefits */}
      <section className="py-20 bg-red-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">KLAQ VIP Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Upgrade your KLAQ experience with VIP membership and unlock exclusive access to special events and perks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {vipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
          
          <div className="text-center">
            <Link href="/vip" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 inline-block">
              Become a VIP Member
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Past Event Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Check out some of our most memorable station events from recent years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{event.name}</h3>
                    <p className="text-gray-600">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Attendance</p>
                    <p className="font-bold text-red-600">{event.attendance}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {event.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Notifications CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss a KLAQ Event</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Be the first to know about upcoming station events, VIP opportunities, and exclusive experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              Subscribe to Event Alerts
            </button>
            <Link href="/vip" className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 inline-block">
              Upgrade to VIP
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
