import { Metadata } from 'next'
import NewsPageClient from './NewsPageClient'

export const metadata: Metadata = {
  title: 'KLAQ News - Rock Music News & Updates - 95.5 KLAQ',
  description: 'Stay up to date with the latest rock music news, band updates, concert announcements, and entertainment news from KLAQ 95.5 FM.',
}

export default function NewsPage() {
  return <NewsPageClient />
}
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
        console.log('Could not fetch current track info, using fallback')
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
      author: 'Joanna Barba',
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
      title: 'Steve Kaplowitz Celebrates 30 Years On-Air with 600 ESPN El Paso',
      excerpt: 'Local radio veteran Steve Kaplowitz marks three decades of broadcasting excellence with Townsquare Media El Paso.',
      author: 'KLAQ Staff',
      date: '2025-07-07',
      category: 'Local News'
    },
    {
      id: 7,
      title: 'Check Your Fridge For This Massive Bacon Recall',
      excerpt: 'A major bacon recall affects products nationwide. Here\'s what El Paso consumers need to know.',
      author: 'KLAQ Staff',
      date: '2025-07-06',
      category: 'Consumer News'
    }
  ]

  const newsCategories = [
    { name: 'Rock News', count: 15, href: '/news/rock-news' },
    { name: 'Local News', count: 8, href: '/news/local' },
    { name: 'Concert News', count: 12, href: '/news/concerts' },
    { name: 'Station News', count: 5, href: '/news/station' }
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
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Newspaper className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">
              KLAQ News
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Stay up to date with the latest rock music news, band updates, 
              concert announcements, and entertainment news from KLAQ 95.5 FM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/news/rock-news" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
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
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {latestNews.map((article) => (
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
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

            {/* Sidebar */}
            <div className="space-y-8">
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
