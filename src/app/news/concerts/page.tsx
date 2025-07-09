import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, ArrowRight, Calendar, MapPin, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concert News - 95.5 KLAQ',
  description: 'Latest concert announcements, tour dates, and live music events from KLAQ 95.5 FM.',
}

export default function ConcertNewsPage() {
  const concertNews = [
    {
      id: 1,
      title: 'KLAQ Rocks the Park This Fall With Scott Stapp and Poppy',
      excerpt: 'Rock returns to downtown El Paso this October 4 when KLAQ Rocks The Park. Here\'s what you need to know about one of the biggest music events of the year.',
      author: 'Kevin Vargas',
      date: '2025-07-06',
      timeAgo: '3 days ago',
      category: 'Concert News',
      venue: 'Downtown El Paso',
      eventDate: 'October 4, 2025',
      image: '/images/concerts/klaq-rocks-park.jpg'
    },
    {
      id: 2,
      title: 'This Candlelight Metallica Concert Is Coming to El Paso',
      excerpt: 'Metallica fans in El Paso won\'t want to miss this candlelight concert. A one-of-a-kind tribute in a glowing, atmospheric venue.',
      author: 'Joanna Barba',
      date: '2025-07-03',
      timeAgo: '6 days ago',
      category: 'Concert News',
      venue: 'Historic Venue TBA',
      eventDate: 'September 15, 2025',
      image: '/images/concerts/metallica-candlelight.jpg'
    },
    {
      id: 3,
      title: 'Cool Canyon Nights Returns to El Paso May 15',
      excerpt: 'Townsquare Media El Paso and El Paso Live are thrilled to announce the highly anticipated return of the Cool Canyon Nights Music Series, presented by West Star.',
      author: '93.1 KISS-FM',
      date: '2025-07-01',
      timeAgo: '1 week ago',
      category: 'Concert News',
      venue: 'McKelligon Canyon',
      eventDate: 'May 15, 2025',
      image: '/images/concerts/cool-canyon-nights.jpg'
    },
    {
      id: 4,
      title: 'Get Your KLAQ Rocks The Park Tickets Here',
      excerpt: 'Scott Stapp of Creed and Poppy headline one of the biggest shows coming to El Paso this year. Tickets are now available.',
      author: 'Aaron Savage',
      date: '2025-06-28',
      timeAgo: '2 weeks ago',
      category: 'Concert News',
      venue: 'Downtown El Paso',
      eventDate: 'October 4, 2025',
      image: '/images/concerts/klaq-tickets.jpg'
    },
    {
      id: 5,
      title: 'Metallica World Tour 2025 Announces Additional Dates',
      excerpt: 'The metal legends have added more cities to their massive world tour, with rumors of a Texas stop still circulating.',
      author: 'Metal Hammer',
      date: '2025-06-25',
      timeAgo: '2 weeks ago',
      category: 'Concert News',
      venue: 'Various Venues',
      eventDate: 'TBA 2025',
      image: '/images/concerts/metallica-tour.jpg'
    },
    {
      id: 6,
      title: 'Foo Fighters Announce Stadium Tour with Special Guests',
      excerpt: 'Dave Grohl and company are hitting the road with a massive stadium tour featuring some of rock\'s biggest names.',
      author: 'Rolling Stone',
      date: '2025-06-20',
      timeAgo: '3 weeks ago',
      category: 'Concert News',
      venue: 'Multiple Stadiums',
      eventDate: 'Summer 2025',
      image: '/images/concerts/foo-fighters-stadium.jpg'
    },
    {
      id: 7,
      title: 'Local El Paso Band Wins Battle of the Bands Competition',
      excerpt: 'Desert Storm takes home the top prize and a chance to open for a major touring act at the Don Haskins Center.',
      author: 'KLAQ Staff',
      date: '2025-06-18',
      timeAgo: '3 weeks ago',
      category: 'Concert News',
      venue: 'Don Haskins Center',
      eventDate: 'August 12, 2025',
      image: '/images/concerts/desert-storm-wins.jpg'
    },
    {
      id: 8,
      title: 'Tool Announces Intimate Theater Shows Across Southwest',
      excerpt: 'The progressive metal band is playing smaller venues for a more intimate experience with fans.',
      author: 'Guitar World',
      date: '2025-06-15',
      timeAgo: '3 weeks ago',
      category: 'Concert News',
      venue: 'Various Theaters',
      eventDate: 'Fall 2025',
      image: '/images/concerts/tool-intimate.jpg'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link 
              href="/news" 
              className="inline-flex items-center text-red-100 hover:text-white transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to News
            </Link>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Concert News</h1>
            <p className="text-xl text-red-100">
              Latest concert announcements, tour dates, and live music events
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {concertNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.timeAgo}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                    <Link href={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  {/* Event Details */}
                  {article.venue && article.eventDate && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center text-sm text-red-800">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="font-medium">Venue:</span>
                          <span className="ml-2">{article.venue}</span>
                        </div>
                        <div className="flex items-center text-sm text-red-800">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">Date:</span>
                          <span className="ml-2">{article.eventDate}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    
                    <Link 
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Show</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get concert announcements and ticket alerts delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
