import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Music, Heart, Coffee, Mic2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community Events & Rock Gatherings | KLAQ 95.5 FM El Paso',
  description: 'Join the KLAQ community at local rock events, listening parties, meetups, and fan gatherings throughout El Paso and the Borderland.',
  keywords: 'community events, rock meetups, listening parties, fan gatherings, El Paso rock community',
  openGraph: {
    title: 'Community Events & Rock Gatherings | KLAQ 95.5 FM El Paso',
    description: 'Join the KLAQ community at local rock events and fan gatherings.',
    type: 'website',
    url: 'https://klaq.com/events/community',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function CommunityEventsPage() {
  const upcomingEvents = [
    {
      title: "KLAQ Rock Trivia Night",
      venue: "The Lowbrow Palace",
      date: "Every Wednesday",
      time: "8:00 PM - 10:00 PM",
      description: "Test your rock knowledge with fellow fans. Prizes include concert tickets and KLAQ merch!",
      type: "Weekly",
      host: "DJ Glenn Garza"
    },
    {
      title: "New Album Listening Party",
      venue: "Ardovino's Desert Crossing",
      date: "August 20, 2025",
      time: "7:00 PM - 9:00 PM", 
      description: "Join us for an exclusive first listen to Pearl Jam's new album with fellow rock fans",
      type: "Special Event",
      host: "Buzz Adams"
    },
    {
      title: "KLAQ Coffee & Rock Talk",
      venue: "Kinley House Coffee",
      date: "Every Saturday",
      time: "10:00 AM - 12:00 PM",
      description: "Casual morning meetup to discuss the latest in rock music over great coffee",
      type: "Weekly", 
      host: "Community Volunteers"
    },
    {
      title: "Local Band Showcase",
      venue: "The Depot",
      date: "First Friday Monthly",
      time: "7:00 PM - 11:00 PM",
      description: "Discover and support local El Paso rock bands in an intimate venue setting",
      type: "Monthly",
      host: "Chuck Armstrong"
    },
    {
      title: "Vinyl Record Swap Meet",
      venue: "Sunset Heights Community Center",
      date: "Third Saturday Monthly", 
      time: "2:00 PM - 6:00 PM",
      description: "Buy, sell, and trade rare vinyl records with collectors and music enthusiasts",
      type: "Monthly",
      host: "KLAQ Vinyl Club"
    },
    {
      title: "Rock History Book Club",
      venue: "BookFellas",
      date: "Last Thursday Monthly",
      time: "6:30 PM - 8:00 PM",
      description: "Deep dive into rock history with monthly book discussions and author meet & greets",
      type: "Monthly", 
      host: "Joanna Barba"
    }
  ]

  const communityGroups = [
    {
      name: "KLAQ Vinyl Collectors",
      members: "450+",
      description: "Connect with fellow vinyl enthusiasts, share rare finds, and organize record swaps",
      meeting: "Monthly"
    },
    {
      name: "El Paso Rock Photography",
      members: "280+", 
      description: "Concert photographers sharing tips, techniques, and epic rock show photos",
      meeting: "Bi-weekly"
    },
    {
      name: "Borderland Metal Heads",
      members: "350+",
      description: "Heavy music fans discussing the latest metal releases and local metal scene",
      meeting: "Weekly"
    },
    {
      name: "KLAQ Road Trip Crew",
      members: "125+",
      description: "Organize group trips to concerts, festivals, and rock events across the Southwest",
      meeting: "As needed"
    },
    {
      name: "Women in Rock EP",
      members: "200+",
      description: "Supporting female rock musicians and fans in the El Paso music community", 
      meeting: "Monthly"
    },
    {
      name: "Young Rockers Club",
      members: "150+",
      description: "Rock fans under 25 sharing new music discoveries and organizing age-appropriate events",
      meeting: "Bi-weekly"
    }
  ]

  const eventCategories = [
    {
      name: "Listening Parties",
      icon: Music,
      description: "Exclusive first listens to new albums and rare recordings",
      frequency: "Monthly",
      examples: ["New release parties", "Classic album anniversaries", "Rare bootleg sessions"]
    },
    {
      name: "Meet & Greets",
      icon: Users,
      description: "Connect with KLAQ DJs and special guests in intimate settings",
      frequency: "Quarterly", 
      examples: ["DJ coffee meetups", "Artist Q&A sessions", "Behind-the-scenes tours"]
    },
    {
      name: "Trivia & Games",
      icon: Mic2,
      description: "Test your rock knowledge and compete for awesome prizes",
      frequency: "Weekly",
      examples: ["Rock trivia nights", "Name that tune", "Air guitar contests"]
    },
    {
      name: "Social Meetups",
      icon: Coffee,
      description: "Casual gatherings to discuss music and build friendships",
      frequency: "Weekly",
      examples: ["Coffee shop hangouts", "Happy hour meetups", "Food truck gatherings"]
    }
  ]

  return (
    <div className="page-container bg-white">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8">
              <Heart className="w-5 h-5" />
              <span className="font-medium text-lg">Community Powered</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Rock <span className="text-green-300">Community</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-green-100 mt-6 max-w-3xl mx-auto mb-12 leading-relaxed">
              Connect with fellow rock fans at local events, listening parties, and gatherings. 
              Because rock is better when shared with others who get it.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Meet Fellow Fans</h3>
                <p className="text-green-100 text-base leading-relaxed">Connect with like-minded rock enthusiasts</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discover New Music</h3>
                <p className="text-green-100 text-base leading-relaxed">Share and explore new rock discoveries</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Regular Events</h3>
                <p className="text-green-100 text-base leading-relaxed">Weekly and monthly gatherings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Community Events */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Community Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join your fellow KLAQ listeners at these fun, friendly, and rock-filled gatherings
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{event.date} • {event.time}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Weekly' ? 'bg-green-100 text-green-800' :
                      event.type === 'Monthly' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.type}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Hosted by <span className="font-medium text-green-600">{event.host}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        RSVP
                      </button>
                      <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              View Full Event Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Community Groups */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Community Groups</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find your tribe within the larger KLAQ community. Each group focuses on different aspects of rock culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityGroups.map((group, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{group.name}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {group.members} members
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{group.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Meets {group.meeting}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Join Group
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-green-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Community Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking for intimate discussions or lively competitions, we have events for every type of rock fan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-green-600 font-medium">{category.frequency}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">{category.description}</p>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Examples:</p>
                    <div className="space-y-1">
                      {category.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1 h-1 bg-green-600 rounded-full"></div>
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

      {/* How to Get Involved */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Get Involved</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Joining the KLAQ community is easy and free. Here's how to get started
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sign Up</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Create your free KLAQ community account to access event RSVPs and group discussions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Your Groups</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Browse our community groups and join the ones that match your interests and schedule
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Attend Events</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  RSVP for events that interest you and start meeting fellow rock fans in person
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/community/signup" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 inline-block">
                Join KLAQ Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold mb-6">Building a Positive Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Our community thrives on respect, inclusivity, and shared passion for rock music. 
            Read our guidelines to ensure everyone has a great experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              View Community Guidelines
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              Become an Event Host
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
