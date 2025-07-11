'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Clock, User, ArrowRight, Newspaper, Headphones, Music, Users } from 'lucide-react'

export default function NewsPageClient() {
  // Live stream info state
  const [nowPlaying, setNowPlaying] = useState({
    title: 'Loading...',
    artist: 'KLAQ 95.5 FM',
    show: 'Rock Block'
  })
  const [listeners, setListeners] = useState(1247)

  // Format listener count
  const formatListeners = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  // Fetch current track and update listener count
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('https://np.tritondigital.com/public/nowplaying?mountName=KLAQ&numberToFetch=1&eventType=track')
        const data = await response.json()
        
        if (data && data.nowplaying && data.nowplaying.length > 0) {
          const track = data.nowplaying[0]
          setNowPlaying({
            title: track.songTitle || 'Classic Rock',
            artist: track.artistName || 'KLAQ 95.5 FM',
            show: track.programName || 'Rock Block'
          })
        }
      } catch (error) {
        console.log('Could not fetch current track info, using fallback', error)
        // Fallback to demo tracks if API fails
        const tracks = [
          { title: 'The Emptiness Machine', artist: 'Linkin Park', show: 'Rock Block' },
          { title: 'Black Dog', artist: 'Led Zeppelin', show: 'Classic Rock Hour' },
          { title: 'Ace of Spades', artist: 'Motorhead', show: 'Metal Mayhem' },
          { title: 'Today\'s Song', artist: 'Foo Fighters', show: 'Modern Rock' }
        ]
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)]
        setNowPlaying(randomTrack)
      }
    }

    // Mock listener count updates
    const updateListeners = () => {
      setListeners((prev: number) => prev + Math.floor(Math.random() * 10 - 5))
    }

    // Initial fetch
    fetchNowPlaying()
    updateListeners()

    // Set up intervals
    const trackInterval = setInterval(fetchNowPlaying, 30000) // Every 30 seconds
    const listenerInterval = setInterval(updateListeners, 15000) // Every 15 seconds

    return () => {
      clearInterval(trackInterval)
      clearInterval(listenerInterval)
    }
  }, [])

  const featuredNews = [
    {
      id: 1,
      title: 'Mexico Stuns USA In Gold Cup As Gulf Of Mexico Trends',
      excerpt: 'Mexico defeated the USA in a thrilling Gold Cup match that has El Paso sports fans buzzing. The victory sparked celebrations across the border region.',
      author: 'Sports Reporter',
      date: '2025-07-09',
      category: 'Sports',
      image: '/images/news/gold-cup.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'The Black Sabbath Deep Cut Ghost\'s Tobias Forge Initially Wanted to Sing',
      excerpt: 'Ghost frontman Tobias Forge reveals the Black Sabbath deep cut he initially wanted to perform at the band\'s farewell show.',
      author: 'Lauryn Schaffner',
      date: '2025-07-09',
      category: 'Rock News',
      image: '/images/news/black-sabbath.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Would Dave Abbruzzese Rejoin Pearl Jam? Drummer Shares Response',
      excerpt: 'Former Pearl Jam drummer Dave Abbruzzese opens up about whether he would consider rejoining the iconic grunge band.',
      author: 'Chad Childers',
      date: '2025-07-09',
      category: 'Rock News',
      image: '/images/news/pearl-jam.jpg',
      featured: true
    }
  ]

  const latestNews = [
    {
      id: 4,
      title: 'Original Pearl Jam Drummer Dave Krusen Shares Whether He\'d Rejoin Band',
      excerpt: 'Dave Krusen, Pearl Jam\'s original drummer, discusses the possibility of returning to the band following Matt Cameron\'s departure.',
      author: 'Lauryn Schaffner',
      date: '2025-07-08',
      category: 'Rock News'
    },
    {
      id: 5,
      title: '\'Pasta and War Movies\' – What Ozzy and Yungblud Have in Common',
      excerpt: 'Despite their generational differences, Ozzy Osbourne and Yungblud share some surprising common interests.',
      author: 'Bryan Rolli',
      date: '2025-07-08',
      category: 'Rock News'
    },
    {
      id: 6,
      title: 'El Paso Music Festival Announces 2025 Lineup',
      excerpt: 'The annual El Paso Music Festival reveals an incredible roster of rock, metal, and alternative acts for this year\'s event.',
      author: 'KLAQ Staff',
      date: '2025-07-07',
      category: 'Local News'
    },
    {
      id: 7,
      title: 'Metallica Announces Stadium Tour with Special El Paso Date',
      excerpt: 'The metal legends confirm their massive stadium tour will include a stop at the Sun Bowl, marking their return to El Paso.',
      author: 'KLAQ Staff',
      date: '2025-07-06',
      category: 'Concert News'
    },
    {
      id: 8,
      title: 'Red Hot Chili Peppers Drop Surprise New Single',
      excerpt: 'The funk-rock icons release their first new material in two years, giving fans a taste of what\'s to come from their upcoming album.',
      author: 'Chad Childers',
      date: '2025-07-06',
      category: 'Rock News'
    },
    {
      id: 9,
      title: 'Local Band Desert Kings Signs Major Label Deal',
      excerpt: 'El Paso\'s Desert Kings become the latest local act to break into the mainstream, signing with Atlantic Records.',
      author: 'KLAQ Staff',
      date: '2025-07-05',
      category: 'Local News'
    },
    {
      id: 10,
      title: 'Green Day Announces 30th Anniversary American Idiot Tour',
      excerpt: 'The punk rock trio will perform their iconic album in its entirety on a special anniversary tour hitting major cities.',
      author: 'Loudwire Staff',
      date: '2025-07-05',
      category: 'Concert News'
    },
    {
      id: 11,
      title: 'Foo Fighters Tease New Material in Studio Updates',
      excerpt: 'Dave Grohl and company share behind-the-scenes footage from the studio, hinting at their next musical direction.',
      author: 'Bryan Rolli',
      date: '2025-07-04',
      category: 'Rock News'
    },
    {
      id: 12,
      title: 'KLAQ Rocks the Park 2025 Date Confirmed',
      excerpt: 'El Paso\'s premier rock festival announces its official date and teases an amazing lineup for this year\'s event.',
      author: 'KLAQ Staff',
      date: '2025-07-04',
      category: 'Station News'
    },
    {
      id: 13,
      title: 'Alice in Chains Guitarist Jerry Cantrell Announces Solo Tour',
      excerpt: 'The legendary guitarist announces solo dates showcasing material from his latest album and classic Alice in Chains tracks.',
      author: 'Lauryn Schaffner',
      date: '2025-07-03',
      category: 'Concert News'
    },
    {
      id: 13,
      title: 'Breaking: System of a Down Announces El Paso Return After 15 Years',
      excerpt: 'The metal legends confirm their highly anticipated return to El Paso with a Don Haskins Center show scheduled for fall 2025.',
      author: 'KLAQ Staff',
      date: '2025-01-12',
      category: 'Concert News'
    },
    {
      id: 14,
      title: 'Local Venue The Lowbrow Palace Announces Major Renovation',
      excerpt: 'El Paso\'s beloved indie venue reveals plans for significant upgrades including new sound system and expanded capacity.',
      author: 'Maria Rodriguez',
      date: '2025-01-11',
      category: 'Local News'
    },
    {
      id: 15,
      title: 'Foo Fighters Add Second El Paso Date Due to Overwhelming Demand',
      excerpt: 'After selling out in minutes, the rock icons announce an additional show at the Sun Bowl for their upcoming tour.',
      author: 'KLAQ Staff',
      date: '2025-01-10',
      category: 'Concert News'
    },
    {
      id: 16,
      title: 'El Paso\'s Neon Desert Music Festival Confirms 2025 Dates',
      excerpt: 'The annual music festival announces its return with promises of the biggest rock lineup yet for the 2025 edition.',
      author: 'Festival Team',
      date: '2025-01-09',
      category: 'Local News'
    }
  ]

  const newsCategories = [
    { name: 'Rock News', count: 28, href: '/news/rock-news' },
    { name: 'Local News', count: 18, href: '/news/local' },
    { name: 'Concert News', count: 22, href: '/news/concerts' },
    { name: 'Station News', count: 12, href: '/news/station' }
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <main className="page-container bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <Newspaper className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Rock News Central
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mt-4 max-w-3xl mx-auto">
              Stay current with the latest rock music news, band updates, concert announcements, 
              and entertainment stories from around the world and right here in El Paso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/news/rock-news" className="btn-primary bg-white text-red-600 hover:bg-red-50">
                Rock News
              </Link>
              <Link href="/news/local" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Local News
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stream Info */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Now Playing on KLAQ 95.5</p>
                <h3 className="text-lg font-bold">{nowPlaying.title}</h3>
                <p className="text-sm text-gray-300">{nowPlaying.artist} • {nowPlaying.show}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Live</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">{formatListeners(listeners)} listeners</span>
              </div>
              <Link 
                href="/listen"
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Listen Live
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-black text-red-500 py-3 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-red-500 text-white px-4 py-2 text-sm font-bold mr-6 rounded">BREAKING</span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                <span className="mx-8">🎸 Metallica announces surprise El Paso show at Don Haskins Center</span>
                <span className="mx-8">📻 KLAQ wins "Best Rock Station" award for 5th consecutive year</span>
                <span className="mx-8">🤘 Alice in Chains confirms new album release date</span>
                <span className="mx-8">🎵 Local band "Desert Storm" signs major record deal</span>
                <span className="mx-8">🔥 Tool drops cryptic teaser for upcoming El Paso appearance</span>
                <span className="mx-8">🎤 Foo Fighters add second El Paso date due to demand</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Stories
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{formatDate(article.date)}</span>
                    </div>
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
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest News
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {latestNews.slice(0, 8).map((article) => (
                  <article key={article.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">
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
              
              {/* More News Button */}
              <div className="text-center mt-8">
                <Link 
                  href="/news/rock-news"
                  className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  View All Rock News
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Stories */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4">🔥 Trending Stories</h3>
                <div className="space-y-3">
                  <Link href="/news/1" className="block hover:bg-red-400 p-3 rounded-lg transition-colors">
                    <h4 className="font-semibold mb-1">Linkin Park Announces Reunion Tour</h4>
                    <p className="text-red-100 text-sm">The band reveals massive world tour plans...</p>
                  </Link>
                  <Link href="/news/2" className="block hover:bg-red-400 p-3 rounded-lg transition-colors">
                    <h4 className="font-semibold mb-1">Tool Drops Cryptic Album Teaser</h4>
                    <p className="text-red-100 text-sm">Mysterious social media posts hint at new material...</p>
                  </Link>
                  <Link href="/news/3" className="block hover:bg-red-400 p-3 rounded-lg transition-colors">
                    <h4 className="font-semibold mb-1">El Paso Venue Hosts Secret Show</h4>
                    <p className="text-red-100 text-sm">Major rock act surprises local fans...</p>
                  </Link>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {newsCategories.map((category) => (
                    <Link 
                      key={category.name}
                      href={category.href}
                      className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{category.name}</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Listen Live */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-6">
                <Headphones className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Listen Live</h3>
                <p className="text-red-100 mb-4">
                  Stay connected to the latest news as it happens on KLAQ 95.5 FM
                </p>
                <Link 
                  href="/listen"
                  className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  Listen Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get the latest rock music news, concert updates, and KLAQ exclusives 
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
