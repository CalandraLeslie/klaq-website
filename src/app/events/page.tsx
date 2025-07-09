import Image from 'next/image'
import Link from 'next/link'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  venue: string
  address: string
  ticketPrice: string
  category: 'Concert' | 'Festival' | 'Station Event' | 'Community'
  featured?: boolean
  image?: string
  ticketUrl?: string
  status: 'upcoming' | 'on-sale' | 'sold-out' | 'past'
}

const events: Event[] = [
  {
    id: '1',
    title: 'Metallica - M72 World Tour',
    description: 'The metal legends bring their epic M72 World Tour to El Paso! Experience an unforgettable night of heavy metal with special guests Pantera and Mammoth WVH.',
    date: '2025-08-15',
    time: '7:30 PM',
    venue: 'Don Haskins Center',
    address: '1851 Wiggins Rd, El Paso, TX 79968',
    ticketPrice: '$75 - $350',
    category: 'Concert',
    featured: true,
    image: '/images/events/metallica-concert.jpg',
    ticketUrl: 'https://ticketmaster.com',
    status: 'on-sale'
  },
  {
    id: '2',
    title: 'KLAQ Summer Rock Festival 2025',
    description: 'The biggest rock festival in the Southwest! Two days of non-stop rock featuring Foo Fighters, Green Day, Pearl Jam, and many more.',
    date: '2025-09-21',
    time: '12:00 PM',
    venue: 'Ascarate Park',
    address: '6900 Delta Dr, El Paso, TX 79905',
    ticketPrice: '$125 - $299',
    category: 'Festival',
    featured: true,
    image: '/images/events/rock-festival.jpg',
    ticketUrl: 'https://klaqrockfest.com',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'KLAQ Listener Appreciation Night',
    description: 'Join us for our annual celebration of our amazing listeners! Live music, prizes, food, and drinks at the historic Plaza Theatre.',
    date: '2025-12-15',
    time: '7:00 PM',
    venue: 'Plaza Theatre',
    address: '125 Pioneer Plaza, El Paso, TX 79901',
    ticketPrice: 'FREE',
    category: 'Station Event',
    image: '/images/events/appreciation-night.jpg',
    status: 'upcoming'
  },
  {
    id: '4',
    title: 'Tool - Fear Inoculum Tour',
    description: 'Progressive metal masters Tool return to El Paso with their mind-bending live show featuring songs from their latest album and classic hits.',
    date: '2025-10-12',
    time: '8:00 PM',
    venue: 'Don Haskins Center',
    address: '1851 Wiggins Rd, El Paso, TX 79968',
    ticketPrice: '$89 - $250',
    category: 'Concert',
    image: '/images/events/tool-concert.jpg',
    ticketUrl: 'https://ticketmaster.com',
    status: 'upcoming'
  },
  {
    id: '5',
    title: 'Centennial Hills Summer Concert Series',
    description: 'Free outdoor concerts every Friday night featuring local and regional rock acts. Bring your lawn chairs and enjoy music under the stars!',
    date: '2025-07-18',
    time: '7:00 PM',
    venue: 'Centennial Hills Park',
    address: '1600 Titanic Dr, El Paso, TX 79912',
    ticketPrice: 'FREE',
    category: 'Community',
    image: '/images/events/outdoor-concert.jpg',
    status: 'upcoming'
  },
  {
    id: '6',
    title: 'Local Band Showcase',
    description: 'Discover El Paso\'s best up-and-coming rock bands at our monthly showcase. This month featuring Desert Kings, Electric Mesa, and Sonic Riot.',
    date: '2025-07-25',
    time: '8:00 PM',
    venue: 'Lowbrow Palace',
    address: '2036 E Yandell Dr, El Paso, TX 79903',
    ticketPrice: '$15',
    category: 'Community',
    image: '/images/events/local-showcase.jpg',
    status: 'on-sale'
  }
]

export default function EventsPage() {
  const featuredEvents = events.filter(event => event.featured)
  const upcomingEvents = events.filter(event => event.status === 'upcoming' || event.status === 'on-sale')

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Concert': return 'bg-purple-100 text-purple-800'
      case 'Festival': return 'bg-orange-100 text-orange-800'
      case 'Station Event': return 'bg-red-100 text-red-800'
      case 'Community': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-sale': return 'bg-green-500 text-white'
      case 'upcoming': return 'bg-blue-500 text-white'
      case 'sold-out': return 'bg-red-500 text-white'
      case 'past': return 'bg-gray-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            KLAQ Events
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Discover the hottest concerts, festivals, and events in El Paso. From major touring acts 
            to local showcases, we've got your live music calendar covered.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{upcomingEvents.length}</div>
              <div className="text-sm text-gray-600">Upcoming Events</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Major Venues</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">Annual Festivals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">52</div>
              <div className="text-sm text-gray-600">Events Per Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Events
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Event Image</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                      {event.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">📅</span>
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">🕗</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">📍</span>
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">💰</span>
                      <span>{event.ticketPrice}</span>
                    </div>
                  </div>
                  {event.ticketUrl && (
                    <a 
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 inline-block"
                    >
                      Get Tickets
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            All Upcoming Events
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
              All Events
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300">
              Concerts
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors duration-300">
              Festivals
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-red-100 hover:text-red-700 transition-colors duration-300">
              Station Events
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-green-100 hover:text-green-700 transition-colors duration-300">
              Community
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Event Image</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(event.status)}`}>
                      {event.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {formatDate(event.date)} • {event.time}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    📍 {event.venue}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {event.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-semibold">
                      {event.ticketPrice}
                    </span>
                    {event.ticketUrl ? (
                      <a 
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                      >
                        Get Tickets →
                      </a>
                    ) : (
                      <span className="text-green-600 font-semibold">Free Event</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            El Paso Event Venues
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Don Haskins Center</h3>
              <p className="text-gray-600 text-sm mb-2">12,000+ capacity arena</p>
              <p className="text-gray-500 text-xs">Major touring acts and sporting events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Plaza Theatre</h3>
              <p className="text-gray-600 text-sm mb-2">Historic 2,050-seat venue</p>
              <p className="text-gray-500 text-xs">Concerts, films, and special events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ascarate Park</h3>
              <p className="text-gray-600 text-sm mb-2">Large outdoor venue</p>
              <p className="text-gray-500 text-xs">Festivals and community events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lowbrow Palace</h3>
              <p className="text-gray-600 text-sm mb-2">Intimate live music venue</p>
              <p className="text-gray-500 text-xs">Local and touring acts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Abraham Chavez Theatre</h3>
              <p className="text-gray-600 text-sm mb-2">2,500+ seat performing arts center</p>
              <p className="text-gray-500 text-xs">Theater, concerts, and cultural events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Centennial Hills Park</h3>
              <p className="text-gray-600 text-sm mb-2">Outdoor amphitheater</p>
              <p className="text-gray-500 text-xs">Free summer concert series</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Never Miss an Event
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get notified about upcoming concerts, festivals, and exclusive KLAQ events before tickets go on sale.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-orange-300 focus:ring-2 focus:ring-orange-300 focus:border-transparent text-gray-900"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
