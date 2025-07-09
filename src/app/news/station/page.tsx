import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, ArrowRight, Music, MapPin, Calendar, Radio } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Station News - 95.5 KLAQ',
  description: 'Latest updates from KLAQ 95.5 FM including rock news, local El Paso updates, and concert announcements.',
}

export default function StationNewsPage() {
  const rockNews = [
    {
      id: 1,
      title: 'The Black Sabbath Deep Cut Ghost\'s Tobias Forge Initially Wanted to Sing at Farewell Show',
      excerpt: 'Ghost frontman Tobias Forge reveals the Black Sabbath deep cut he initially wanted to perform at the band\'s farewell show.',
      author: 'Lauryn Schaffner',
      date: '2025-07-09',
      timeAgo: '2 hours ago'
    },
    {
      id: 2,
      title: 'Would Dave Abbruzzese Rejoin Pearl Jam? Drummer Shares Response Statement',
      excerpt: 'Former Pearl Jam drummer Dave Abbruzzese opens up about whether he would consider rejoining the iconic grunge band.',
      author: 'Chad Childers',
      date: '2025-07-09',
      timeAgo: '2 hours ago'
    },
    {
      id: 3,
      title: 'Original Pearl Jam Drummer Dave Krusen Shares Whether He\'d Rejoin Band Following Matt Cameron Split',
      excerpt: 'Dave Krusen, Pearl Jam\'s original drummer, discusses the possibility of returning to the band following Matt Cameron\'s departure.',
      author: 'Lauryn Schaffner',
      date: '2025-07-08',
      timeAgo: '20 hours ago'
    },
    {
      id: 4,
      title: '\'Pasta and War Movies\' – What Ozzy and Yungblud Have in Common',
      excerpt: 'Despite their generational differences, Ozzy Osbourne and Yungblud share some surprising common interests.',
      author: 'Bryan Rolli',
      date: '2025-07-08',
      timeAgo: '21 hours ago'
    }
  ]

  const localNews = [
    {
      id: 5,
      title: 'Mexico Stuns USA In Gold Cup As Gulf Of Mexico Trends',
      excerpt: 'Mexico defeated the USA in a thrilling Gold Cup match that has El Paso sports fans buzzing. The victory sparked celebrations across the border region.',
      author: 'Joanna Barba',
      date: '2025-07-09',
      timeAgo: '4 hours ago'
    },
    {
      id: 6,
      title: 'Steve Kaplowitz Celebrates 30 Years On-Air with 600 ESPN El Paso',
      excerpt: 'Local radio veteran Steve Kaplowitz marks three decades of broadcasting excellence with Townsquare Media El Paso.',
      author: 'KLAQ Staff',
      date: '2025-07-07',
      timeAgo: '2 days ago'
    },
    {
      id: 7,
      title: 'El Paso Bands Have a Chance to Play 2025 Vans Warped Tour',
      excerpt: 'These talented local bands have a chance to represent El Paso at the Vans Warped Tour 30 Years show through Battle of the Bands competition.',
      author: 'Daniel Paulus',
      date: '2025-07-05',
      timeAgo: '4 days ago'
    },
    {
      id: 8,
      title: 'Check Your Fridge For This Massive Bacon Recall Affecting El Paso',
      excerpt: 'A major bacon recall affects products nationwide, including those distributed to El Paso area stores. Here\'s what consumers need to know.',
      author: 'KLAQ Staff',
      date: '2025-07-04',
      timeAgo: '5 days ago'
    }
  ]

  const concertNews = [
    {
      id: 9,
      title: 'KLAQ Rocks the Park This Fall With Scott Stapp and Poppy',
      excerpt: 'Rock returns to downtown El Paso this October 4 when KLAQ Rocks The Park. Here\'s what you need to know about one of the biggest music events of the year.',
      author: 'Kevin Vargas',
      date: '2025-07-06',
      timeAgo: '3 days ago',
      venue: 'Downtown El Paso',
      eventDate: 'October 4, 2025'
    },
    {
      id: 10,
      title: 'This Candlelight Metallica Concert Is Coming to El Paso',
      excerpt: 'Metallica fans in El Paso won\'t want to miss this candlelight concert. A one-of-a-kind tribute in a glowing, atmospheric venue.',
      author: 'Joanna Barba',
      date: '2025-07-03',
      timeAgo: '6 days ago',
      venue: 'Historic Venue TBA',
      eventDate: 'September 15, 2025'
    },
    {
      id: 11,
      title: 'Cool Canyon Nights Returns to El Paso May 15',
      excerpt: 'Townsquare Media El Paso and El Paso Live are thrilled to announce the highly anticipated return of the Cool Canyon Nights Music Series, presented by West Star.',
      author: '93.1 KISS-FM',
      date: '2025-07-01',
      timeAgo: '1 week ago',
      venue: 'McKelligon Canyon',
      eventDate: 'May 15, 2025'
    },
    {
      id: 12,
      title: 'Get Your KLAQ Rocks The Park Tickets Here',
      excerpt: 'Scott Stapp of Creed and Poppy headline one of the biggest shows coming to El Paso this year. Tickets are now available.',
      author: 'Aaron Savage',
      date: '2025-06-28',
      timeAgo: '2 weeks ago',
      venue: 'Downtown El Paso',
      eventDate: 'October 4, 2025'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Radio className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">
              Station News
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Latest updates from KLAQ 95.5 FM including rock news, local El Paso updates, and concert announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://klaq.netlify.app/news/rock-news/" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Rock News
              </Link>
              <Link href="https://klaq.netlify.app/news/local/" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Local News
              </Link>
              <Link href="https://klaq.netlify.app/news/concerts/" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Concert News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive news coverage across different categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="https://klaq.netlify.app/news/rock-news/" className="group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-lg text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                <Music className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Rock News</h3>
                <p className="text-red-100 text-sm">Latest rock music news, band updates, and industry insights</p>
                <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link href="https://klaq.netlify.app/news/concerts/" className="group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-lg text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Concert News</h3>
                <p className="text-red-100 text-sm">Upcoming shows, tour announcements, and event coverage</p>
                <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link href="https://klaq.netlify.app/news/local/" className="group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-lg text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                <MapPin className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Local News</h3>
                <p className="text-red-100 text-sm">El Paso area news, events, and community updates</p>
                <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link href="https://klaq.netlify.app/news/station/" className="group">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-lg text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                <Radio className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Station News</h3>
                <p className="text-red-100 text-sm">KLAQ 95.5 FM updates, DJ news, and station announcements</p>
                <ArrowRight className="w-5 h-5 mt-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">News Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Rock News Category */}
            <Link 
              href="https://klaq.netlify.app/news/rock-news/" 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-red-600 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Music className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Rock News</h3>
              <p className="text-gray-600 text-sm text-center">
                Latest rock music news, artist updates, and industry insights
              </p>
              <div className="mt-4 text-center">
                <span className="text-red-600 font-semibold group-hover:text-red-800 transition-colors">
                  View Articles →
                </span>
              </div>
            </Link>

            {/* Concert News Category */}
            <Link 
              href="https://klaq.netlify.app/news/concerts/" 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-red-600 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Concert News</h3>
              <p className="text-gray-600 text-sm text-center">
                Upcoming concerts, tour announcements, and event coverage
              </p>
              <div className="mt-4 text-center">
                <span className="text-red-600 font-semibold group-hover:text-red-800 transition-colors">
                  View Articles →
                </span>
              </div>
            </Link>

            {/* Local News Category */}
            <Link 
              href="https://klaq.netlify.app/news/local/" 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-red-600 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Local News</h3>
              <p className="text-gray-600 text-sm text-center">
                El Paso community news and local events coverage
              </p>
              <div className="mt-4 text-center">
                <span className="text-red-600 font-semibold group-hover:text-red-800 transition-colors">
                  View Articles →
                </span>
              </div>
            </Link>

            {/* Station News Category */}
            <Link 
              href="https://klaq.netlify.app/news/station/" 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-red-600 group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Radio className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Station News</h3>
              <p className="text-gray-600 text-sm text-center">
                KLAQ updates, DJ news, and station announcements
              </p>
              <div className="mt-4 text-center">
                <span className="text-red-600 font-semibold group-hover:text-red-800 transition-colors">
                  View Articles →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Rock News Section */}
      <section id="rock-news" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Music className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Rock News</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {rockNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Rock News
                  </span>
                  <span className="text-sm text-gray-500">{article.timeAgo}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="https://klaq.netlify.app/news/rock-news/" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              View All Rock News
            </Link>
          </div>
        </div>
      </section>

      {/* Local News Section */}
      <section id="local-news" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <MapPin className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Local News</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {localNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Local News
                  </span>
                  <span className="text-sm text-gray-500">{article.timeAgo}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="https://klaq.netlify.app/news/local/" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              View All Local News
            </Link>
          </div>
        </div>
      </section>

      {/* Concert News Section */}
      <section id="concert-news" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Calendar className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Concert News</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {concertNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Concert News
                  </span>
                  <span className="text-sm text-gray-500">{article.timeAgo}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                {article.venue && article.eventDate && (
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{article.venue}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{article.eventDate}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="https://klaq.netlify.app/news/concerts/" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              View All Concert News
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stay Updated with KLAQ
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get the latest rock news, local updates, and concert announcements 
            delivered straight to your inbox.
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
