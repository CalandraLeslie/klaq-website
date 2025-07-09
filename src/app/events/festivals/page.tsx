import Link from 'next/link'

interface Festival {
  id: string
  title: string
  description: string
  date: string
  endDate?: string
  venue: string
  address: string
  ticketPrice: string
  headliners: string[]
  genres: string[]
  status: 'on-sale' | 'upcoming' | 'sold-out' | 'past'
  featured?: boolean
  ticketUrl?: string
  capacity: string
}

const festivals: Festival[] = [
  {
    id: '1',
    title: 'KLAQ Summer Rock Festival 2025',
    description: 'The biggest rock festival in the Southwest! Two days of non-stop rock featuring multiple stages, food vendors, craft beer gardens, and camping options. Experience the ultimate rock festival with both legendary acts and emerging artists.',
    date: '2025-09-21',
    endDate: '2025-09-22',
    venue: 'Ascarate Park',
    address: '6900 Delta Dr, El Paso, TX 79905',
    ticketPrice: '$125 - $299',
    headliners: ['Foo Fighters', 'Green Day', 'Pearl Jam', 'Alice in Chains'],
    genres: ['Rock', 'Alternative', 'Grunge', 'Punk'],
    status: 'on-sale',
    featured: true,
    ticketUrl: 'https://klaqrockfest.com',
    capacity: '50,000'
  },
  {
    id: '2',
    title: 'Desert Rock Fest',
    description: 'A celebration of desert rock and stoner metal featuring bands from across the Southwest. Three days of heavy riffs, psychedelic vibes, and underground acts you won\'t see anywhere else.',
    date: '2025-11-08',
    endDate: '2025-11-10',
    venue: 'Franklin Mountains Ranch',
    address: '1051 McKelligon Canyon Rd, El Paso, TX 79930',
    ticketPrice: '$89 - $199',
    headliners: ['Kyuss Lives!', 'Fu Manchu', 'Electric Wizard', 'Sleep'],
    genres: ['Desert Rock', 'Stoner Metal', 'Doom', 'Psychedelic'],
    status: 'upcoming',
    featured: true,
    ticketUrl: 'https://desertrockfest.com',
    capacity: '15,000'
  },
  {
    id: '3',
    title: 'El Paso Metal Festival',
    description: 'The heaviest festival in Texas! Three days of extreme metal featuring death metal, black metal, and thrash acts from around the world. Not for the faint of heart.',
    date: '2025-10-31',
    endDate: '2025-11-02',
    venue: 'El Paso County Coliseum Complex',
    address: '4100 E Paisano Dr, El Paso, TX 79905',
    ticketPrice: '$75 - $165',
    headliners: ['Cannibal Corpse', 'Emperor', 'Testament', 'Power Trip'],
    genres: ['Death Metal', 'Black Metal', 'Thrash', 'Extreme Metal'],
    status: 'upcoming',
    capacity: '10,000'
  },
  {
    id: '4',
    title: 'Borderland Music Festival',
    description: 'A unique cross-cultural festival celebrating the music of the US-Mexico border region. Features rock, Latin rock, and fusion acts that represent our diverse community.',
    date: '2025-05-15',
    endDate: '2025-05-17',
    venue: 'Chamizal National Memorial',
    address: '800 S San Marcial St, El Paso, TX 79905',
    ticketPrice: '$65 - $145',
    headliners: ['Mana', 'Los Lonely Boys', 'Café Tacvba', 'Aterciopelados'],
    genres: ['Latin Rock', 'Fusion', 'Alternative', 'World Music'],
    status: 'upcoming',
    capacity: '20,000'
  },
  {
    id: '5',
    title: 'Franklin Mountains Acoustic Festival',
    description: 'An intimate outdoor festival focusing on acoustic and unplugged performances. Enjoy music in a beautiful natural setting with craft vendors and local food.',
    date: '2025-04-12',
    endDate: '2025-04-13',
    venue: 'Franklin Mountains State Park',
    address: '1331 McKelligon Canyon Rd, El Paso, TX 79930',
    ticketPrice: '$45 - $85',
    headliners: ['Chris Cornell Tribute', 'Unplugged Sessions', 'Local Acoustic Acts'],
    genres: ['Acoustic', 'Folk Rock', 'Indie', 'Singer-Songwriter'],
    status: 'upcoming',
    capacity: '5,000'
  },
  {
    id: '6',
    title: 'Retro Rock Revival Festival',
    description: 'Travel back in time with tribute bands and classic rock acts! Three days of nostalgia featuring the best tribute acts and classic rock legends still touring.',
    date: '2025-08-08',
    endDate: '2025-08-10',
    venue: 'Sun Bowl Stadium',
    address: '1 Sun Bowl Dr, El Paso, TX 79968',
    ticketPrice: '$55 - $125',
    headliners: ['Classic Rock Tributes', 'The Iron Maidens', 'Zeppelin Live', 'AC/DC Tribute'],
    genres: ['Classic Rock', 'Tribute', 'Retro', 'Arena Rock'],
    status: 'upcoming',
    capacity: '25,000'
  }
]

export default function FestivalsPage() {
  const featuredFestivals = festivals.filter(festival => festival.featured)
  const upcomingFestivals = festivals.filter(festival => festival.status === 'upcoming' || festival.status === 'on-sale')

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const formatDateRange = (startDate: string, endDate?: string) => {
    if (!endDate) return formatDate(startDate)
    
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString('en-US', { month: 'long' })} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`
    } else {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`
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
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-orange-200 hover:text-white">Home</Link>
            <span className="mx-2">•</span>
            <Link href="/events" className="text-orange-200 hover:text-white">Events</Link>
            <span className="mx-2">•</span>
            <span>Festivals</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">
            Rock Festivals in El Paso
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Experience the best music festivals in the Southwest. From massive rock festivals to intimate 
            gatherings, discover multi-day events that celebrate the power of live music.
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
            <span className="px-6 py-3 rounded-lg bg-orange-600 text-white font-medium">
              Festivals
            </span>
            <Link href="/events/station-events" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Station Events
            </Link>
            <Link href="/events/community" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 font-medium">
              Community Events
            </Link>
          </div>
        </div>
      </section>

      {/* Festival Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{upcomingFestivals.length}</div>
              <div className="text-sm text-gray-600">Upcoming Festivals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">Performing Artists</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">150K+</div>
              <div className="text-sm text-gray-600">Festival Attendees</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">Festival Venues</div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Festival Highlight */}
      <section className="py-8 bg-orange-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎪 Next Major Festival</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-600">KLAQ Summer Rock Festival 2025</h3>
                <p className="text-gray-600">Ascarate Park • September 21-22, 2025</p>
                <p className="text-sm text-gray-500 mt-1">Featuring Foo Fighters, Green Day, Pearl Jam, and more!</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a 
                  href="https://klaqrockfest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                >
                  Get Festival Passes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Festivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Festivals
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredFestivals.map((festival) => (
              <div key={festival.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200">
                <div className="relative h-64 bg-gradient-to-r from-orange-400 to-orange-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">Festival Banner</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(festival.status)}`}>
                      {festival.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                      {festival.capacity} Capacity
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {festival.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {festival.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">🎤 Headliners:</h4>
                    <div className="flex flex-wrap gap-2">
                      {festival.headliners.map((artist) => (
                        <span key={artist} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">📅</span>
                      <span>{formatDateRange(festival.date, festival.endDate)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">📍</span>
                      <span>{festival.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">🎵</span>
                      <span>{festival.genres.join(', ')}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-semibold mr-2">💰</span>
                      <span>{festival.ticketPrice}</span>
                    </div>
                  </div>
                  
                  {festival.ticketUrl && (
                    <a 
                      href={festival.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 inline-block"
                    >
                      Buy Festival Passes
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Festivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            All Upcoming Festivals
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivals.map((festival) => (
              <div key={festival.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-r from-orange-400 to-orange-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold">Festival</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(festival.status)}`}>
                      {festival.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                      {festival.capacity}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {festival.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {formatDateRange(festival.date, festival.endDate)}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    📍 {festival.venue}
                  </p>
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Headliners:</p>
                    <p className="text-sm text-gray-700">{festival.headliners.slice(0, 2).join(', ')}</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {festival.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-semibold text-sm">
                      {festival.ticketPrice}
                    </span>
                    {festival.ticketUrl && (
                      <a 
                        href={festival.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 text-sm"
                      >
                        Get Passes →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Info */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Festival Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🎪 What to Expect</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>• Multiple stages with continuous music</p>
                <p>• Food vendors and craft beer gardens</p>
                <p>• Merchandise booths and art vendors</p>
                <p>• VIP areas and premium experiences</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🏕️ Camping & Lodging</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>• On-site camping available for most festivals</p>
                <p>• RV hookups and amenities</p>
                <p>• Partner hotels with shuttle service</p>
                <p>• Glamping options for premium experience</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🚗 Transportation</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>• Shuttle service from designated areas</p>
                <p>• Ride-share pickup/drop-off zones</p>
                <p>• On-site parking available</p>
                <p>• Public transportation options</p>
              </div>
            </div>
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
