import Link from 'next/link'

interface StationEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  venue: string
  address: string
  ticketPrice: string
  status: 'upcoming' | 'on-sale' | 'sold-out' | 'past' | 'free'
  type: string
  featured?: boolean
  perks?: string[]
}

const stationEvents: StationEvent[] = [
  {
    id: '1',
    title: 'KLAQ Listener Appreciation Night',
    description: 'Join us for our annual celebration of our amazing listeners! Live music, prizes, food, and drinks at the historic Plaza Theatre. Special acoustic performances by local rock bands and surprise guest appearances.',
    date: '2025-12-15',
    time: '7:00 PM',
    venue: 'Plaza Theatre',
    address: '125 Pioneer Plaza, El Paso, TX 79901',
    ticketPrice: 'FREE',
    status: 'upcoming',
    type: 'Annual Event',
    featured: true,
    perks: ['Free admission', 'Free drinks & appetizers', 'Exclusive KLAQ merchandise', 'Meet & greet with DJs', 'Prize giveaways']
  },
  {
    id: '2',
    title: 'KLAQ Morning Show Live Remote',
    description: 'Catch Buzz Adams and the morning crew broadcasting live from Sunland Park Mall! Come hang out, win prizes, and be part of the show. Plus, get your chance to be on the air!',
    date: '2025-08-22',
    time: '6:00 AM - 10:00 AM',
    venue: 'Sunland Park Mall',
    address: '750 Sunland Park Dr, El Paso, TX 79922',
    ticketPrice: 'FREE',
    status: 'upcoming',
    type: 'Live Remote',
    perks: ['Free KLAQ swag', 'Chance to be on-air', 'Prize wheel spins', 'Meet the morning crew']
  },
  {
    id: '3',
    title: 'KLAQ Rock & Bowl Tournament',
    description: 'Annual charity bowling tournament benefiting local music education programs. Form your team of 4 and compete for prizes while supporting a great cause!',
    date: '2025-09-14',
    time: '2:00 PM - 6:00 PM',
    venue: 'AMF Western Bowl',
    address: '6530 N Mesa St, El Paso, TX 79912',
    ticketPrice: '$40 per person',
    status: 'on-sale',
    type: 'Charity Event',
    featured: true,
    perks: ['Includes shoes & 3 games', 'Pizza & drinks', 'Prize drawings', 'Team trophies', 'Support music education']
  },
  {
    id: '4',
    title: 'KLAQ VIP Concert Experience',
    description: 'Exclusive backstage access and meet & greet opportunity with major touring acts. Limited to KLAQ VIP members only. Includes premium seating and catered reception.',
    date: '2025-10-05',
    time: '6:00 PM',
    venue: 'Don Haskins Center',
    address: '1851 Wiggins Rd, El Paso, TX 79968',
    ticketPrice: 'VIP Members Only',
    status: 'upcoming',
    type: 'VIP Experience',
    perks: ['Backstage access', 'Meet & greet', 'Premium seating', 'Catered reception', 'Exclusive merchandise']
  },
  {
    id: '5',
    title: 'KLAQ Summer BBQ & Rock Out',
    description: 'Annual summer party featuring BBQ, cold drinks, and live music from local rock bands. Family-friendly event with games, prizes, and good vibes all around!',
    date: '2025-07-12',
    time: '4:00 PM - 10:00 PM',
    venue: 'Memorial Park',
    address: '1701 N Copia St, El Paso, TX 79903',
    ticketPrice: '$25 adults, $10 kids',
    status: 'on-sale',
    type: 'Summer Event',
    perks: ['BBQ dinner included', 'Live local bands', 'Kids activities', 'Prize giveaways', 'KLAQ DJ appearances']
  },
  {
    id: '6',
    title: 'KLAQ New Year\'s Eve Bash',
    description: 'Ring in the New Year with KLAQ! Live music, champagne toast at midnight, and the best rock hits to close out the year. 21+ event with premium open bar.',
    date: '2025-12-31',
    time: '9:00 PM - 1:00 AM',
    venue: 'Hotel Paso del Norte Rooftop',
    address: '101 S El Paso St, El Paso, TX 79901',
    ticketPrice: '$75 - $150',
    status: 'upcoming',
    type: 'New Year\'s Event',
    perks: ['Premium open bar', 'Champagne toast', 'Live DJ sets', 'City views', 'Late night snacks']
  },
  {
    id: '7',
    title: 'KLAQ Battle of the Bands',
    description: 'Annual competition for local rock bands to win recording time, radio airplay, and cash prizes. Three rounds of competition leading up to the finale concert.',
    date: '2025-11-08',
    time: '7:00 PM',
    venue: 'Lowbrow Palace',
    address: '2036 E Yandell Dr, El Paso, TX 79903',
    ticketPrice: '$20',
    status: 'upcoming',
    type: 'Competition',
    featured: true,
    perks: ['Support local bands', 'Win prizes', 'Discover new music', 'Vote for favorites', 'After-party included']
  },
  {
    id: '8',
    title: 'KLAQ Acoustic Sessions',
    description: 'Intimate acoustic performances by touring and local artists in our station studio. Limited seating for an up-close and personal musical experience.',
    date: '2025-09-28',
    time: '7:30 PM',
    venue: 'KLAQ Studios',
    address: '4045 E Paisano Dr, El Paso, TX 79905',
    ticketPrice: '$35',
    status: 'on-sale',
    type: 'Acoustic Session',
    perks: ['Intimate setting', 'Meet the artists', 'Exclusive performances', 'Drinks & snacks', 'Studio tour']
  }
]

export default function StationEventsPage() {
  const featuredEvents = stationEvents.filter(event => event.featured)
  const upcomingEvents = stationEvents.filter(event => event.status === 'upcoming' || event.status === 'on-sale')

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-sale': return 'bg-green-500 text-white'
      case 'upcoming': return 'bg-blue-500 text-white'
      case 'free': return 'bg-purple-500 text-white'
      case 'sold-out': return 'bg-red-500 text-white'
      case 'past': return 'bg-gray-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-orange-200 hover:text-white">Home</Link>
            <span className="mx-2">•</span>
            <Link href="/events" className="text-orange-200 hover:text-white">Events</Link>
            <span className="mx-2">•</span>
            <span>Station Events</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">
            KLAQ Station Events
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Exclusive events hosted by KLAQ 95.5! Join us for listener appreciation nights, 
            live remotes, charity events, and special experiences you can't get anywhere else.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/events/concerts" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Concerts
            </Link>
            <Link href="/events/festivals" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Festivals
            </Link>
            <span className="px-6 py-3 rounded-lg bg-orange-600 text-white font-medium">
              Station Events
            </span>
            <Link href="/events/community" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Community Events
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stationEvents.length}</div>
              <div className="text-gray-600">Upcoming Events</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Events</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Listeners Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">$100K+</div>
              <div className="text-gray-600">Raised for Charity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Station Events
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gradient-to-br from-orange-400 to-red-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">KLAQ Event</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                      {event.status === 'free' ? 'FREE EVENT' : event.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                      {event.type}
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
                      <span className="font-bold text-orange-600">{event.ticketPrice}</span>
                    </div>
                  </div>
                  {event.perks && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">What's Included:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {event.perks.map((perk, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-orange-500 mr-2">✓</span>
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
                      {event.ticketPrice === 'FREE' || event.ticketPrice.includes('FREE') ? 'RSVP Now' : 'Get Tickets'}
                    </button>
                    <button className="px-4 py-3 border border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            All Station Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-orange-300 to-red-400">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold">KLAQ</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                      {event.status === 'free' ? 'FREE' : event.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📅</span>
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📍</span>
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">💰</span>
                      <span className="font-bold text-orange-600">{event.ticketPrice}</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
                    {event.ticketPrice === 'FREE' || event.ticketPrice.includes('FREE') ? 'RSVP' : 'Get Tickets'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Attend KLAQ Events?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Exclusive Access</h3>
              <p className="text-gray-600 text-sm">Meet artists, DJs, and get behind-the-scenes experiences</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Amazing Prizes</h3>
              <p className="text-gray-600 text-sm">Win concert tickets, merchandise, and cash prizes</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Impact</h3>
              <p className="text-gray-600 text-sm">Support local charities and music education programs</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Unforgettable Fun</h3>
              <p className="text-gray-600 text-sm">Create memories with fellow rock fans and the KLAQ family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Never Miss a KLAQ Event!
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Sign up for our event newsletter and be the first to know about exclusive station events, 
            VIP experiences, and listener appreciation events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Back to Events */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/events" 
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
          >
            ← Back to All Events
          </Link>
        </div>
      </section>
    </main>
  )
}
