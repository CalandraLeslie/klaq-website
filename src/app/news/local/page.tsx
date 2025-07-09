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

const localNewsArticles: NewsArticle[] = [
  {
    id: '4',
    title: 'El Paso Music Scene Spotlight: Local Band "Desert Kings" Signs Record Deal',
    excerpt: 'Homegrown talent gets picked up by major label after years of grinding.',
    author: 'Glenn Garza',
    publishDate: '2025-07-05',
    category: 'Local',
    tags: ['El Paso', 'Local Music', 'Record Deal', 'Desert Kings'],
    readTime: '4 min read'
  },
  {
    id: '9',
    title: 'Lowbrow Palace Celebrates 10 Years of Live Music',
    excerpt: 'The iconic El Paso venue reflects on a decade of supporting local artists.',
    author: 'Joanna Barba',
    publishDate: '2025-06-30',
    category: 'Local',
    tags: ['Lowbrow Palace', 'El Paso', 'Anniversary', 'Live Music'],
    readTime: '3 min read'
  },
  {
    id: '10',
    title: 'UTEP Student Band "Electric Mesa" Wins Battle of the Bands',
    excerpt: 'University students take home the grand prize at annual competition.',
    author: 'Kat',
    publishDate: '2025-06-28',
    category: 'Local',
    tags: ['UTEP', 'Battle of the Bands', 'Students', 'Competition'],
    readTime: '2 min read'
  },
  {
    id: '11',
    title: 'New Music Venue "The Underground" Opens in Downtown El Paso',
    excerpt: 'Another great addition to El Paso\'s growing live music scene.',
    author: 'Buzz Adams',
    publishDate: '2025-06-25',
    category: 'Local',
    tags: ['Downtown', 'New Venue', 'The Underground', 'Live Music'],
    readTime: '3 min read'
  }
]

export default function LocalNewsPage() {
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
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-green-200 hover:text-white">Home</Link>
            <span className="mx-2">•</span>
            <Link href="/news" className="text-green-200 hover:text-white">News</Link>
            <span className="mx-2">•</span>
            <span>Local Scene</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">
            El Paso Local Music Scene
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Discover the vibrant music scene in El Paso and the Borderland. From rising local bands to established venues, we cover it all.
          </p>
        </div>
      </section>

      {/* Local Scene Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{localNewsArticles.length}</div>
              <div className="text-sm text-gray-600">Local Stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Music Venues</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Local Bands</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">Weekly</div>
              <div className="text-sm text-gray-600">Live Shows</div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {localNewsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Local Scene Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Local Scene
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors duration-300">
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

      {/* Local Venues Spotlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Local Venues
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Lowbrow Palace</h3>
              <p className="text-green-600 text-sm mb-3">El Paso's premier dive bar and music venue</p>
              <p className="text-gray-600 text-xs">2036 E Yandell Dr</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">The Depot</h3>
              <p className="text-green-600 text-sm mb-3">Historic venue in the heart of downtown</p>
              <p className="text-gray-600 text-xs">400 W San Antonio Ave</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">Tricky Falls</h3>
              <p className="text-green-600 text-sm mb-3">All-ages venue supporting emerging artists</p>
              <p className="text-gray-600 text-xs">209 S El Paso St</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            ← Back to All News
          </Link>
        </div>
      </section>
    </main>
  )
}
