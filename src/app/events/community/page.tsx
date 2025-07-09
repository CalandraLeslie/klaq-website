import Link from 'next/link'

interface CommunityEvent {
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
  organizer: string
  featured?: boolean
  cause?: string
}

const communityEvents: CommunityEvent[] = [
  {
    id: '1',
    title: 'Centennial Hills Summer Concert Series',
    description: 'Free outdoor concerts every Friday night featuring local and regional rock acts. Bring your lawn chairs and enjoy music under the stars! Food trucks and local vendors on-site.',
    date: '2025-07-18',
    time: '7:00 PM - 10:00 PM',
    venue: 'Centennial Hills Park',
    address: '1600 Titanic Dr, El Paso, TX 79912',
    ticketPrice: 'FREE',
    status: 'free',
    type: 'Concert Series',
    organizer: 'City of El Paso Parks & Recreation',
    featured: true,
    cause: 'Supporting local music'
  },
  {
    id: '2',
    title: 'Rock for Relief Benefit Concert',
    description: 'Local bands unite for a cause! All proceeds benefit families affected by recent floods in our community. Featuring 8 local rock bands, silent auction, and food vendors.',
    date: '2025-08-30',
    time: '2:00 PM - 11:00 PM',
    venue: 'Memorial Park Amphitheater',
    address: '1701 N Copia St, El Paso, TX 79903',
    ticketPrice: '$25 donation',
    status: 'on-sale',
    type: 'Benefit Concert',
    organizer: 'El Paso Music Coalition',
    featured: true,
    cause: 'Flood relief fund'
  },
  {
    id: '3',
    title: 'Local Band Showcase',
    description: 'Discover El Paso\'s best up-and-coming rock bands at our monthly showcase. This month featuring Desert Kings, Electric Mesa, Sonic Riot, and more emerging local talent.',
    date: '2025-07-25',
    time: '8:00 PM - 12:00 AM',
    venue: 'Lowbrow Palace',
    address: '2036 E Yandell Dr, El Paso, TX 79903',
    ticketPrice: '$15',
    status: 'on-sale',
    type: 'Music Showcase',
    organizer: 'Lowbrow Palace & Local Music Network'
  },
  {
    id: '4',
    title: 'Youth Music Education Fundraiser',
    description: 'Support music education in El Paso schools! Silent auction, live performances by student bands, and appearances by local rock musicians as mentors.',
    date: '2025-09-12',
    time: '6:00 PM - 10:00 PM',
    venue: 'El Paso High School Auditorium',
    address: '800 E Schuster Ave, El Paso, TX 79902',
    ticketPrice: '$20',
    status: 'upcoming',
    type: 'Education Fundraiser',
    organizer: 'El Paso ISD Music Department',
    cause: 'Music education funding'
  },
  {
    id: '5',
    title: 'Veterans Rock Tribute Night',
    description: 'Honoring our local veterans with an evening of classic rock covers performed by veteran musicians. Free admission for all veterans and active military.',
    date: '2025-11-11',
    time: '7:00 PM - 11:00 PM',
    venue: 'VFW Post 8797',
    address: '4550 Paisano Dr, El Paso, TX 79905',
    ticketPrice: 'FREE for veterans, $10 general',
    status: 'upcoming',
    type: 'Tribute Event',
    organizer: 'El Paso Veterans of Foreign Wars',
    cause: 'Veteran support services'
  },
  {
    id: '6',
    title: 'Downtown Block Party & Street Festival',
    description: 'Annual street festival with live music on multiple stages, local food vendors, artisan booths, and family activities. Celebrating El Paso\'s vibrant downtown culture.',
    date: '2025-10-19',
    time: '12:00 PM - 10:00 PM',
    venue: 'Downtown Arts District',
    address: 'E San Antonio Ave, El Paso, TX 79901',
    ticketPrice: 'FREE',
    status: 'free',
    type: 'Street Festival',
    organizer: 'Downtown El Paso Association',
    featured: true
  },
  {
    id: '7',
    title: 'Battle of the Garage Bands',
    description: 'High school and college bands compete for recording time, equipment prizes, and opening slots for major shows. Public voting and professional judges.',
    date: '2025-08-17',
    time: '7:00 PM - 11:00 PM',
    venue: 'Tricky Falls',
    address: '2401 E Paisano Dr, El Paso, TX 79905',
    ticketPrice: '$12',
    status: 'on-sale',
    type: 'Band Competition',
    organizer: 'El Paso Music Scene'
  },
  {
    id: '8',
    title: 'Rock & Roll Food Drive Concert',
    description: 'Help stock local food banks while enjoying great live music! Admission is 5 non-perishable food items or $10 cash donation. Multiple local bands performing.',
    date: '2025-12-08',
    time: '6:00 PM - 10:00 PM',
    venue: 'UTEP Union Building East',
    address: '500 W University Ave, El Paso, TX 79968',
    ticketPrice: '5 food items or $10',
    status: 'upcoming',
    type: 'Food Drive',
    organizer: 'UTEP Student Activities',
    cause: 'El Paso Food Bank'
  },
  {
    id: '9',
    title: 'Sunset Sessions at Franklin Mountains',
    description: 'Acoustic performances in a beautiful natural setting. Bring blankets and enjoy music as the sun sets over El Paso. Local folk and rock artists performing.',
    date: '2025-09-28',
    time: '6:30 PM - 9:00 PM',
    venue: 'Franklin Mountains State Park',
    address: '1331 McKelligon Canyon Rd, El Paso, TX 79930',
    ticketPrice: '$8 park entry',
    status: 'upcoming',
    type: 'Acoustic Series',
    organizer: 'Texas Parks & Wildlife'
  },
  {
    id: '10',
    title: 'Women in Rock Showcase',
    description: 'Celebrating female musicians and artists in the El Paso rock scene. All-female lineup with networking opportunities and panel discussions about women in music.',
    date: '2025-10-26',
    time: '7:00 PM - 11:00 PM',
    venue: 'The Depot',
    address: '400 W Overland Ave, El Paso, TX 79901',
    ticketPrice: '$18',
    status: 'on-sale',
    type: 'Showcase Event',
    organizer: 'Women in Music El Paso'
  }
]

export default function CommunityEventsPage() {
  const featuredEvents = communityEvents.filter(event => event.featured)
  const upcomingEvents = communityEvents.filter(event => event.status === 'upcoming' || event.status === 'on-sale' || event.status === 'free')
  const freeEvents = communityEvents.filter(event => event.ticketPrice === 'FREE' || event.status === 'free')

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
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-emerald-200 hover:text-white">Home</Link>
            <span className="mx-2">•</span>
            <Link href="/events" className="text-emerald-200 hover:text-white">Events</Link>
            <span className="mx-2">•</span>
            <span>Community Events</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">
            Community Rock Events
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Discover local music events that bring our rock community together. From benefit concerts 
            to local showcases, these grassroots events celebrate El Paso's vibrant music scene.
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
            <Link href="/events/station-events" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Station Events
            </Link>
            <span className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium">
              Community Events
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{communityEvents.length}</div>
              <div className="text-gray-600">Community Events</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{freeEvents.length}</div>
              <div className="text-gray-600">Free Events</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
              <div className="text-gray-600">Local Venues</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100+</div>
              <div className="text-gray-600">Local Bands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Community Events
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gradient-to-br from-emerald-400 to-teal-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">Community Event</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                      {event.status === 'free' ? 'FREE EVENT' : event.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                    {event.cause && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {event.cause}
                      </span>
                    )}
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
                      <span className="font-semibold mr-2">🎫</span>
                      <span className="font-bold text-emerald-600">{event.ticketPrice}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">🤝</span>
                      <span className="text-sm">{event.organizer}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300">
                      {event.ticketPrice === 'FREE' || event.status === 'free' ? 'Learn More' : 'Get Tickets'}
                    </button>
                    <button className="px-4 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-300">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Community Events */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            All Community Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-emerald-300 to-teal-400">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold">Community</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                      {event.status === 'free' ? 'FREE' : event.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-1">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                    {event.cause && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Benefit
                      </span>
                    )}
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
                      <span className="mr-2">🎫</span>
                      <span className="font-bold text-emerald-600">{event.ticketPrice}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    Organized by: {event.organizer}
                  </div>
                  <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300">
                    {event.ticketPrice === 'FREE' || event.status === 'free' ? 'Learn More' : 'Get Tickets'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Community Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Support Local Artists</h3>
              <p className="text-gray-600 text-sm">Help emerging musicians get exposure and grow their careers</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Benefit Causes</h3>
              <p className="text-gray-600 text-sm">Many events raise funds for local charities and causes</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Music Education</h3>
              <p className="text-gray-600 text-sm">Support music programs in schools and youth organizations</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Build Community</h3>
              <p className="text-gray-600 text-sm">Connect rock fans and create lasting friendships</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Get Involved in the Scene
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Attend Events</h3>
              <p className="text-gray-600 mb-4">Show up and support local musicians and causes. Your presence makes a difference!</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Follow event pages on social media</li>
                <li>• Invite friends to join you</li>
                <li>• Buy merchandise to support artists</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">Help make events happen by volunteering your time and skills.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Event setup and cleanup</li>
                <li>• Registration and ticket sales</li>
                <li>• Sound and lighting assistance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organize</h3>
              <p className="text-gray-600 mb-4">Start your own community event or help existing organizers.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Partner with local venues</li>
                <li>• Connect with other organizers</li>
                <li>• Reach out to KLAQ for promotion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stay Connected to the Community
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Get notified about local music events, benefit concerts, and opportunities 
            to support El Paso's vibrant rock community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
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
            className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
          >
            ← Back to All Events
          </Link>
        </div>
      </section>
    </main>
  )
}
