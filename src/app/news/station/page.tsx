import Link from 'next/link'

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  author: string
  publishDate: string
  category: string
  tags: string[]
  readTime: string
}

const stationNewsArticles: NewsArticle[] = [
  {
    id: '2',
    title: 'KLAQ\'s Summer Rock Festival Lineup Revealed',
    excerpt: 'Get ready for the biggest rock festival in the Southwest this September.',
    author: 'Kat',
    publishDate: '2025-07-07',
    category: 'Station',
    tags: ['KLAQ', 'Festival', 'Foo Fighters', 'Green Day'],
    readTime: '4 min read'
  },
  {
    id: '6',
    title: 'KLAQ Listener Appreciation Night - Thank You El Paso!',
    excerpt: 'Over 2,000 fans joined us for an unforgettable night of rock at The Plaza Theatre.',
    author: 'Joanna Barba',
    publishDate: '2025-07-03',
    category: 'Station',
    tags: ['KLAQ', 'Fans', 'Event', 'Plaza Theatre'],
    readTime: '4 min read'
  },
  {
    id: '15',
    title: 'KLAQ Announces New Contest: Win a Year of Concert Tickets',
    excerpt: 'Grand prize winner gets tickets to every major concert in El Paso for a full year.',
    author: 'Buzz Adams',
    publishDate: '2025-06-28',
    category: 'Station',
    tags: ['Contest', 'Prizes', 'Concert Tickets', 'KLAQ'],
    readTime: '2 min read'
  },
  {
    id: '16',
    title: 'KLAQ Mobile App Gets Major Update with New Features',
    excerpt: 'Enhanced streaming, exclusive content, and interactive features now available.',
    author: 'Tech Team',
    publishDate: '2025-06-25',
    category: 'Station',
    tags: ['Mobile App', 'Update', 'Technology', 'Features'],
    readTime: '3 min read'
  }
]

export default function StationNewsPage() {
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
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-red-200 hover:text-white">Home</Link>
            <span className="mx-2">•</span>
            <Link href="/news" className="text-red-200 hover:text-white">News</Link>
            <span className="mx-2">•</span>
            <span>Station News</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">
            KLAQ 95.5 Station News
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Stay updated with the latest happenings at KLAQ, including contests, events, programming updates, and community involvement.
          </p>
        </div>
      </section>

      {/* Station Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">95.5 FM</div>
              <div className="text-sm text-gray-600">Frequency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Rock Music</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100K+</div>
              <div className="text-sm text-gray-600">Weekly Listeners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">30+</div>
              <div className="text-sm text-gray-600">Years On Air</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Contest Highlight */}
      <section className="py-8 bg-red-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎁 Current Contest</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-red-600">Win a Year of Concert Tickets!</h3>
                <p className="text-gray-600">Grand prize includes tickets to every major concert in El Paso</p>
                <p className="text-sm text-gray-500 mt-1">Contest ends July 31st • Multiple ways to enter</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link 
                  href="/contest" 
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Enter Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {stationNewsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">KLAQ Station Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                      Station News
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors duration-300">
                    <Link href={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>By {article.author}</span>
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Station Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Makes KLAQ Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Rock Music 24/7</h3>
              <p className="text-gray-600 text-sm">Classic rock, modern rock, and everything in between</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Amazing Contests</h3>
              <p className="text-gray-600 text-sm">Concert tickets, meet & greets, and exclusive prizes</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local DJs</h3>
              <p className="text-gray-600 text-sm">Experienced hosts who know and love El Paso</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New Music First</h3>
              <p className="text-gray-600 text-sm">Hear the latest rock releases before anyone else</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Events</h3>
              <p className="text-gray-600 text-sm">Concerts, festivals, and listener appreciation events</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-gray-600 text-sm">Stream live, request songs, and stay connected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch With KLAQ</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-bold mb-2">Call the Studio</h3>
              <p className="text-red-100">(915) 595-KLAQ</p>
              <p className="text-red-100">(915) 595-5527</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Request Line</h3>
              <p className="text-red-100">(915) 581-1955</p>
              <p className="text-red-100 text-sm">24/7 Song Requests</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Social Media</h3>
              <p className="text-red-100">@KLAQ955</p>
              <p className="text-red-100 text-sm">Follow us everywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            ← Back to All News
          </Link>
        </div>
      </section>
    </main>
  )
}
