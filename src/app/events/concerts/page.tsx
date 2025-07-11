import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Music, Ticket, Star, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rock Concerts & Live Shows | KLAQ 95.5 FM El Paso',
  description: 'Discover the hottest rock concerts and live music events in El Paso and beyond. Get tickets, venue info, and exclusive presale access through KLAQ.',
  keywords: 'rock concerts, live music, El Paso concerts, concert tickets, rock shows, live events',
  openGraph: {
    title: 'Rock Concerts & Live Shows | KLAQ 95.5 FM El Paso',
    description: 'Discover the hottest rock concerts and live music events in El Paso and beyond.',
    type: 'website',
    url: 'https://klaq.com/events/concerts',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function ConcertsPage() {
  const upcomingConcerts = [
    {
      artist: "Metallica",
      venue: "Don Haskins Center",
      date: "August 15, 2025",
      time: "7:30 PM",
      price: "Starting at $89",
      status: "On Sale",
      description: "The metal legends return to El Paso with their M72 World Tour"
    },
    {
      artist: "Red Hot Chili Peppers",
      venue: "Sun Bowl Stadium",
      date: "September 22, 2025", 
      time: "6:00 PM",
      price: "Starting at $75",
      status: "Presale",
      description: "Funk-rock icons bringing their 2025 tour to the Sun City"
    },
    {
      artist: "Foo Fighters",
      venue: "El Paso County Coliseum",
      date: "October 8, 2025",
      time: "8:00 PM", 
      price: "Starting at $95",
      status: "Coming Soon",
      description: "Dave Grohl and the Fighters rock El Paso once again"
    },
    {
      artist: "Green Day",
      venue: "Abraham Chavez Theatre",
      date: "November 3, 2025",
      time: "7:00 PM",
      price: "Starting at $65",
      status: "On Sale",
      description: "Pop-punk legends celebrate their Saviors Tour"
    },
    {
      artist: "Tool",
      venue: "Don Haskins Center", 
      date: "December 14, 2025",
      time: "8:30 PM",
      price: "Starting at $125",
      status: "VIP Only",
      description: "Progressive metal masters return with their Fear Inoculum tour"
    },
    {
      artist: "The Black Keys",
      venue: "Lowbrow Palace",
      date: "January 18, 2026",
      time: "9:00 PM",
      price: "Starting at $55",
      status: "On Sale", 
      description: "Blues-rock duo brings their intimate tour to El Paso"
    }
  ]

  const venues = [
    {
      name: "Don Haskins Center",
      capacity: "12,222",
      address: "500 W University Ave, El Paso, TX",
      description: "Premier arena venue for major touring acts"
    },
    {
      name: "El Paso County Coliseum",
      capacity: "5,500", 
      address: "4100 E Paisano Dr, El Paso, TX",
      description: "Historic venue hosting concerts since 1942"
    },
    {
      name: "Abraham Chavez Theatre",
      capacity: "2,500",
      address: "1 Civic Center Plz, El Paso, TX", 
      description: "Downtown cultural center for touring shows"
    },
    {
      name: "Sun Bowl Stadium",
      capacity: "51,500",
      address: "500 W University Ave, El Paso, TX",
      description: "Outdoor stadium for massive concerts and festivals"
    }
  ]

  return (
    <div className="page-container bg-white">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 border border-white/30 rounded-full px-6 py-3 mb-8">
              <Music className="w-5 h-5" />
              <span className="font-medium text-lg">Live Music Events</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Rock <span className="text-orange-300">Concerts</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-red-100 mt-6 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience the power of live rock music in El Paso. From intimate club shows to massive arena spectacles, 
              KLAQ brings you the best concerts and exclusive presale opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Ticket className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exclusive Presales</h3>
                <p className="text-red-100 text-base leading-relaxed">Get tickets before the general public</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Venues</h3>
                <p className="text-red-100 text-base leading-relaxed">El Paso's best concert venues</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">VIP Experiences</h3>
                <p className="text-red-100 text-base leading-relaxed">Meet & greets and backstage access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Concerts */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Concerts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't miss these incredible live music experiences coming to El Paso
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {upcomingConcerts.map((concert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{concert.artist}</h3>
                      <div className="flex items-center space-x-2 text-gray-600 mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-base">{concert.venue}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-base">{concert.date} • {concert.time}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      concert.status === 'On Sale' ? 'bg-green-100 text-green-800' :
                      concert.status === 'Presale' ? 'bg-blue-100 text-blue-800' :
                      concert.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {concert.status}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">{concert.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Tickets from</span>
                      <p className="text-xl font-bold text-red-600">{concert.price}</p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                        Get Tickets
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
          
          <div className="text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              View All Upcoming Shows
            </button>
          </div>
        </div>
      </section>

      {/* Concert Venues */}
      <section className="py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">El Paso Concert Venues</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the premier venues where rock legends take the stage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{venue.name}</h3>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {venue.capacity} seats
                  </span>
                </div>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">{venue.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{venue.address}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Tickets */}
      <section className="py-20 bg-red-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Get Tickets</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Follow these simple steps to secure your spot at the hottest rock shows
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Join KLAQ VIP</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Sign up for our VIP club to get exclusive presale codes and early access to tickets
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Presale Code</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Listen to KLAQ for presale announcements or check your VIP member email
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Buy Tickets</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Use your presale code on Ticketmaster or the venue's official website
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/vip" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 inline-block">
                Join KLAQ VIP Club
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Concert Calendar CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-responsive text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss a Show</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Stay up to date with all the latest concert announcements, presale opportunities, and show reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              Subscribe to Concert Alerts
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200">
              Follow KLAQ on Social
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
