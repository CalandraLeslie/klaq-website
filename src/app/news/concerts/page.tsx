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

const concertNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Metallica Announces Summer Tour with Stop in El Paso',
    excerpt: 'The metal legends will bring their M72 World Tour to the Don Haskins Center this August.',
    author: 'Buzz Adams',
    publishDate: '2025-07-08',
    category: 'Concert',
    tags: ['Metallica', 'Concert', 'El Paso', 'Metal'],
    readTime: '3 min read'
  },
  {
    id: '12',
    title: 'Tool Announces El Paso Date for Fear Inoculum Tour',
    excerpt: 'Progressive metal masters return to the Sun City after five years.',
    author: 'Chuck Armstrong',
    publishDate: '2025-06-20',
    category: 'Concert',
    tags: ['Tool', 'Progressive Metal', 'Don Haskins Center', 'Tour'],
    readTime: '2 min read'
  },
  {
    id: '13',
    title: 'Outdoor Concert Series Returns to Centennial Hills Park',
    excerpt: 'Free summer concerts featuring local and regional rock acts.',
    author: 'Kat',
    publishDate: '2025-06-15',
    category: 'Concert',
    tags: ['Outdoor', 'Free Concert', 'Summer Series', 'Local Music'],
    readTime: '3 min read'
  },
  {
    id: '14',
    title: 'Foo Fighters Confirm Headlining Slot at KLAQ Rock Festival',
    excerpt: 'Dave Grohl and company will close out Saturday night in style.',
    author: 'Glenn Garza',
    publishDate: '2025-06-10',
    category: 'Concert',
    tags: ['Foo Fighters', 'Festival', 'KLAQ', 'Headliner'],
    readTime: '2 min read'
  }
]

export default function ConcertNewsPage() {
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
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-orange-200 hover:text-white">Home</Link>
            <span className="mx-2">•</span>
            <Link href="/news" className="text-orange-200 hover:text-white">News</Link>
            <span className="mx-2">•</span>
            <span>Concert News</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">
            Concert News & Tours
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Stay informed about upcoming concerts, tour announcements, and live music events in El Paso and beyond.
          </p>
        </div>
      </section>

      {/* Concert Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Concerts This Month</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Major Venues</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Festivals This Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Concert Attendees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows Banner */}
      <section className="py-8 bg-orange-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎸 Next Big Show</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-orange-600">Metallica - M72 World Tour</h3>
                <p className="text-gray-600">Don Haskins Center • August 15, 2025 • 7:30 PM</p>
                <p className="text-sm text-gray-500 mt-1">Tickets on sale Friday, July 12th at 10:00 AM</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link 
                  href="/news/1" 
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                >
                  Read More
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
            {concertNewsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Concert Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                      Concert News
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors duration-300">
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

      {/* Major Venues */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            El Paso Concert Venues
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Don Haskins Center</h3>
              <p className="text-orange-600 text-sm mb-2">12,000+ capacity arena venue</p>
              <p className="text-gray-600 text-xs">Major touring acts and sporting events</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">El Paso County Coliseum</h3>
              <p className="text-orange-600 text-sm mb-2">7,000+ capacity multi-purpose venue</p>
              <p className="text-gray-600 text-xs">Concerts, rodeos, and community events</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Abraham Chavez Theatre</h3>
              <p className="text-orange-600 text-sm mb-2">2,500+ seat performing arts center</p>
              <p className="text-gray-600 text-xs">Theater, concerts, and cultural events</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Plaza Theatre</h3>
              <p className="text-orange-600 text-sm mb-2">Historic 2,050-seat venue</p>
              <p className="text-gray-600 text-xs">Concerts, films, and special events</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Centennial Hills Park</h3>
              <p className="text-orange-600 text-sm mb-2">Outdoor amphitheater</p>
              <p className="text-gray-600 text-xs">Summer concert series and festivals</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-bold text-orange-800 mb-2">Speaking Rock Entertainment</h3>
              <p className="text-orange-600 text-sm mb-2">Gaming and entertainment complex</p>
              <p className="text-gray-600 text-xs">Casino concerts and special events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
          >
            ← Back to All News
          </Link>
        </div>
      </section>
    </main>
  )
}
