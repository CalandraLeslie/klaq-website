import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Music, Ticket, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concert News & Events - 95.5 KLAQ',
  description: 'Stay up to date with the latest concert news, upcoming rock shows, and live music events in El Paso and beyond.',
}

export default function ConcertNewsPage() {
  const concertNews = [
    {
      id: 1,
      title: 'KLAQ Rocks the Park Returns with Scott Stapp and Poppy',
      date: 'October 4, 2025',
      venue: 'Downtown El Paso',
      excerpt: 'Rock returns to downtown El Paso this October 4 when KLAQ Rocks The Park. Here\'s what you need to know about one of the biggest music events of the year.',
      category: 'Major Event',
      status: 'upcoming',
      ticketInfo: 'Tickets available now'
    },
    {
      id: 2,
      title: 'Candlelight Metallica Concert Coming to El Paso',
      date: 'September 15, 2025',
      venue: 'Historic Venue TBA',
      excerpt: 'Metallica fans in El Paso won\'t want to miss this candlelight concert. A one-of-a-kind tribute in a glowing, atmospheric venue.',
      category: 'Special Event',
      status: 'upcoming',
      ticketInfo: 'Limited seating available'
    },
    {
      id: 3,
      title: 'Cool Canyon Nights Music Series Returns',
      date: 'May 15, 2025',
      venue: 'McKelligon Canyon',
      excerpt: 'Townsquare Media El Paso and El Paso Live are thrilled to announce the highly anticipated return of the Cool Canyon Nights Music Series, presented by West Star.',
      category: 'Concert Series',
      status: 'ongoing',
      ticketInfo: 'Season passes available'
    },
    {
      id: 4,
      title: 'El Paso Bands Compete for Vans Warped Tour Spot',
      date: 'Various Dates',
      venue: 'Multiple Venues',
      excerpt: 'These talented local bands have a chance to represent El Paso at the Vans Warped Tour 30 Years show. Battle of the bands competition underway.',
      category: 'Local Music',
      status: 'ongoing',
      ticketInfo: 'Support local bands'
    }
  ]

  const upcomingShows = [
    {
      artist: 'Scott Stapp of Creed',
      date: 'October 4, 2025',
      venue: 'KLAQ Rocks the Park',
      status: 'on-sale'
    },
    {
      artist: 'Poppy',
      date: 'October 4, 2025',
      venue: 'KLAQ Rocks the Park',
      status: 'on-sale'
    },
    {
      artist: 'Metallica Tribute',
      date: 'September 15, 2025',
      venue: 'Candlelight Concert',
      status: 'limited'
    }
  ]

  const musicNews = [
    {
      title: 'The Black Sabbath Deep Cut Ghost\'s Tobias Forge Initially Wanted to Sing',
      category: 'Rock News',
      timeAgo: '2 hours ago'
    },
    {
      title: 'Would Dave Abbruzzese Rejoin Pearl Jam? Drummer Shares Response',
      category: 'Rock News',
      timeAgo: '2 hours ago'
    },
    {
      title: 'Original Pearl Jam Drummer Dave Krusen Shares Whether He\'d Rejoin Band',
      category: 'Band News',
      timeAgo: '20 hours ago'
    }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Music className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">
              Concert News & Events
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Stay up to date with the latest concert news, upcoming rock shows, 
              and live music events in El Paso and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Concert News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Concert News
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {concertNews.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                      {news.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      news.status === 'upcoming' ? 'bg-green-500 text-white' : 
                      news.status === 'ongoing' ? 'bg-blue-500 text-white' : 
                      'bg-gray-500 text-white'
                    }`}>
                      {news.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {news.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(news.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{news.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Ticket className="w-4 h-4 mr-2" />
                      <span>{news.ticketInfo}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {news.excerpt}
                  </p>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      Read More
                    </button>
                    <button className="px-4 py-3 border border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Upcoming Shows
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingShows.map((show, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{show.artist}</h3>
                  <div className="flex items-center justify-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(show.date)}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{show.venue}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    show.status === 'on-sale' ? 'bg-green-100 text-green-800' : 
                    show.status === 'limited' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {show.status === 'on-sale' ? 'Tickets Available' : 
                     show.status === 'limited' ? 'Limited Tickets' : 'Sold Out'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Music News
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md">
              {musicNews.map((news, index) => (
                <div key={index} className={`p-6 ${index !== musicNews.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h3>
                      <div className="flex items-center text-gray-600">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mr-3">
                          {news.category}
                        </span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{news.timeAgo}</span>
                      </div>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Never Miss a Show
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get notified about upcoming concerts, ticket sales, and exclusive 
            presale opportunities before anyone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
