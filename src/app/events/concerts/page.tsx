import Link from 'next/link'

interface Concert {
  id: string
  title: string
  artist: string
  description: string
  date: string
  time: string
  venue: string
  address: string
  ticketPrice: string
  status: 'on-sale' | 'upcoming' | 'sold-out' | 'past'
  genre: string
  ticketUrl?: string
  featured?: boolean
}

const concerts: Concert[] = [
  {
    id: '1',
    title: 'Metallica - M72 World Tour',
    artist: 'Metallica',
    description: 'The metal legends bring their epic M72 World Tour to El Paso! Experience an unforgettable night of heavy metal with special guests Pantera and Mammoth WVH. No songs repeated between nights!',
    date: '2025-08-15',
    time: '7:30 PM',
    venue: 'Don Haskins Center',
    address: '1851 Wiggins Rd, El Paso, TX 79968',
    ticketPrice: '$75 - $350',
    status: 'on-sale',
    genre: 'Heavy Metal',
    ticketUrl: 'https://ticketmaster.com',
    featured: true
  },
  {
    id: '2',
    title: 'Tool - Fear Inoculum Tour',
    artist: 'Tool',
    description: 'Progressive metal masters Tool return to El Paso with their mind-bending live show featuring songs from their latest album and classic hits spanning their 30-year career.',
    date: '2025-10-12',
    time: '8:00 PM',
    venue: 'Don Haskins Center',
    address: '1851 Wiggins Rd, El Paso, TX 79968',
    ticketPrice: '$89 - $250',
    status: 'upcoming',
    genre: 'Progressive Metal',
    ticketUrl: 'https://ticketmaster.com',
    featured: true
  },
  {
    id: '3',
    title: 'Alice in Chains - Dirt 30th Anniversary Tour',
    artist: 'Alice in Chains',
    description: 'Celebrating 30 years of their landmark album "Dirt," Alice in Chains performs the album in its entirety plus fan favorites from their extensive catalog.',
    date: '2025-09-28',
    time: '8:00 PM',
    venue: 'El Paso County Coliseum',
    address: '4100 E Paisano Dr, El Paso, TX 79905',
    ticketPrice: '$65 - $175',
    status: 'upcoming',
    genre: 'Grunge/Alternative Metal',
    ticketUrl: 'https://ticketmaster.com'
  },
  {
    id: '4',
    title: 'Black Sabbath Tribute - Sabbath Bloody Sabbath',
    artist: 'Sabbath Bloody Sabbath (Tribute)',
    description: 'The ultimate Black Sabbath tribute experience! Perfect recreation of the heavy metal pioneers\' greatest songs with authentic sound and stage presence.',
    date: '2025-11-15',
    time: '8:00 PM',
    venue: 'Abraham Chavez Theatre',
    address: '1 Civic Center Plaza, El Paso, TX 79901',
    ticketPrice: '$35 - $85',
    status: 'upcoming',
    genre: 'Heavy Metal Tribute'
  },
  {
    id: '5',
    title: 'Queens of the Stone Age',
    artist: 'Queens of the Stone Age',
    description: 'Josh Homme and the desert rock masters bring their hypnotic sound and explosive live energy to El Paso for one unforgettable night.',
    date: '2025-12-03',
    time: '8:30 PM',
    venue: 'Don Haskins Center',
    address: '1851 Wiggins Rd, El Paso, TX 79968',
    ticketPrice: '$55 - $150',
    status: 'upcoming',
    genre: 'Desert Rock/Alternative',
    ticketUrl: 'https://ticketmaster.com'
  },
  {
    id: '6',
    title: 'The Darkness - Permission to Land 20th Anniversary',
    artist: 'The Darkness',
    description: 'British rock legends The Darkness celebrate 20 years of their breakthrough album with a high-energy show full of guitar solos and falsetto vocals.',
    date: '2025-10-25',
    time: '7:00 PM',
    venue: 'Plaza Theatre',
    address: '125 Pioneer Plaza, El Paso, TX 79901',
    ticketPrice: '$45 - $95',
    status: 'upcoming',
    genre: 'British Rock'
  }
]

export default function ConcertsPage() {
  const featuredConcerts = concerts.filter(concert => concert.featured)
  const upcomingConcerts = concerts.filter(concert => concert.status === 'upcoming' || concert.status === 'on-sale')

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
      case 'sold-out': return 'bg-red-500 text-white'
      case 'past': return 'bg-gray-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-purple-200 hover:text-white">Home</Link>
            <span className="mx-2">•</span>
            <Link href="/events" className="text-purple-200 hover:text-white">Events</Link>
            <span className="mx-2">•</span>
            <span>Concerts</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">
            Rock Concerts in El Paso
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Discover the hottest rock concerts coming to El Paso. From metal legends to indie favorites, 
            we've got your live music calendar covered.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium">
              Concerts
            </span>
            <Link href="/events/festivals" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Festivals
            </Link>
            <Link href="/events/station-events" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Station Events
            </Link>
            <Link href="/events/community" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Community Events
            </Link>
          </div>
        </div>
      </section>

      {/* Concert Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{upcomingConcerts.length}</div>
              <div className="text-sm text-gray-600">Upcoming Shows</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">Concert Venues</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Shows Per Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">200K+</div>
              <div className="text-sm text-gray-600">Concert Attendees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Big Show */}
      <section className="py-8 bg-purple-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎸 Next Major Concert</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-purple-600">Metallica - M72 World Tour</h3>
                <p className="text-gray-600">Don Haskins Center • August 15, 2025 • 7:30 PM</p>
                <p className="text-sm text-gray-500 mt-1">With special guests Pantera and Mammoth WVH</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a 
                  href="https://ticketmaster.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
                >
                  Get Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Concerts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Concerts
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredConcerts.map((concert) => (
              <div key={concert.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Concert Image</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(concert.status)}`}>
                      {concert.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {concert.genre}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {concert.artist}
                  </h3>
                  <h4 className="text-lg text-purple-600 font-semibold mb-3">
                    {concert.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {concert.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">📅</span>
                      <span>{formatDate(concert.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">🕗</span>
                      <span>{concert.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">📍</span>
                      <span>{concert.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">💰</span>
                      <span>{concert.ticketPrice}</span>
                    </div>
                  </div>
                  {concert.ticketUrl && (
                    <a 
                      href={concert.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 inline-block"
                    >
                      Buy Tickets
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Concerts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            All Upcoming Concerts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concerts.map((concert) => (
              <div key={concert.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Concert Image</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(concert.status)}`}>
                      {concert.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                      {concert.genre}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {concert.artist}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-2 text-sm">
                    {concert.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {formatDate(concert.date)} • {concert.time}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    📍 {concert.venue}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {concert.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-semibold text-sm">
                      {concert.ticketPrice}
                    </span>
                    {concert.ticketUrl && (
                      <a 
                        href={concert.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300 text-sm"
                      >
                        Get Tickets →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concert Venues */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            El Paso Concert Venues
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Don Haskins Center</h3>
              <p className="text-gray-600 text-sm mb-2">12,000+ capacity arena</p>
              <p className="text-gray-500 text-xs">Major touring acts and sporting events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">El Paso County Coliseum</h3>
              <p className="text-gray-600 text-sm mb-2">7,000+ capacity venue</p>
              <p className="text-gray-500 text-xs">Concerts and multi-purpose events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Abraham Chavez Theatre</h3>
              <p className="text-gray-600 text-sm mb-2">2,500+ seat performing arts center</p>
              <p className="text-gray-500 text-xs">Theater, concerts, and cultural events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Plaza Theatre</h3>
              <p className="text-gray-600 text-sm mb-2">Historic 2,050-seat venue</p>
              <p className="text-gray-500 text-xs">Concerts, films, and special events</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lowbrow Palace</h3>
              <p className="text-gray-600 text-sm mb-2">Intimate live music venue</p>
              <p className="text-gray-500 text-xs">Local and touring acts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Depot</h3>
              <p className="text-gray-600 text-sm mb-2">Historic downtown venue</p>
              <p className="text-gray-500 text-xs">Intimate concerts and events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Events */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/events" 
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
          >
            ← Back to All Events
          </Link>
        </div>
      </section>
    </main>
  )
}
