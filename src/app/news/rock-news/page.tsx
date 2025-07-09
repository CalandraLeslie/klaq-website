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

const rockNewsArticles: NewsArticle[] = [
  {
    id: '3',
    title: 'Pearl Jam\'s New Album "Dark Matter" Rocks the Charts',
    excerpt: 'The Seattle legends return with their most powerful album in years.',
    author: 'Chuck Armstrong',
    publishDate: '2025-07-06',
    category: 'Rock News',
    tags: ['Pearl Jam', 'New Album', 'Grunge', 'Chart'],
    readTime: '3 min read'
  },
  {
    id: '5',
    title: 'Rock and Roll Hall of Fame Announces 2025 Inductees',
    excerpt: 'Several classic rock icons finally get their due recognition.',
    author: 'Nico Adjemian',
    publishDate: '2025-07-04',
    category: 'Rock News',
    tags: ['Hall of Fame', 'Classic Rock', 'Induction', 'Awards'],
    readTime: '3 min read'
  },
  {
    id: '7',
    title: 'Green Day Announces New Stadium Tour',
    excerpt: 'The punk rock legends are hitting the road for their biggest tour yet.',
    author: 'Chuck Armstrong',
    publishDate: '2025-07-02',
    category: 'Rock News',
    tags: ['Green Day', 'Tour', 'Stadium', 'Punk Rock'],
    readTime: '2 min read'
  },
  {
    id: '8',
    title: 'AC/DC Teases New Material on Social Media',
    excerpt: 'Cryptic posts suggest the Australian rockers are working on something big.',
    author: 'Glenn Garza',
    publishDate: '2025-07-01',
    category: 'Rock News',
    tags: ['AC/DC', 'New Music', 'Social Media', 'Hard Rock'],
    readTime: '2 min read'
  }
]

export default function RockNewsPage() {
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
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6">
            <Link href="/" className="text-purple-200 hover:text-white">Home</Link>
            <span className="mx-2">•</span>
            <Link href="/news" className="text-purple-200 hover:text-white">News</Link>
            <span className="mx-2">•</span>
            <span>Rock News</span>
          </nav>
          <h1 className="text-5xl font-bold mb-4">
            Rock Music News
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Stay up to date with the latest rock music releases, industry news, chart updates, and everything happening in the world of rock.
          </p>
        </div>
      </section>

      {/* Category Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{rockNewsArticles.length}</div>
                <div className="text-sm text-gray-600">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4</div>
                <div className="text-sm text-gray-600">Contributors</div>
              </div>
            </div>
            <Link 
              href="/news" 
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Back to All News
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rockNewsArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Rock News Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                      Rock News
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors duration-300">
                    <Link href={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>By {article.author}</span>
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 3).map((tag) => (
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

      {/* Related Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/news/local" className="group">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-100 hover:border-green-300 transition-colors duration-300">
                <h3 className="text-lg font-bold text-green-800 mb-2 group-hover:text-green-600">
                  Local Scene
                </h3>
                <p className="text-green-600 text-sm">
                  El Paso music news and local band spotlights
                </p>
              </div>
            </Link>
            <Link href="/news/concerts" className="group">
              <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300">
                <h3 className="text-lg font-bold text-orange-800 mb-2 group-hover:text-orange-600">
                  Concerts
                </h3>
                <p className="text-orange-600 text-sm">
                  Tour announcements and live music updates
                </p>
              </div>
            </Link>
            <Link href="/news/station" className="group">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-100 hover:border-red-300 transition-colors duration-300">
                <h3 className="text-lg font-bold text-red-800 mb-2 group-hover:text-red-600">
                  Station News
                </h3>
                <p className="text-red-600 text-sm">
                  KLAQ events, contests, and announcements
                </p>
              </div>
            </Link>
            <Link href="/news/industry" className="group">
              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-colors duration-300">
                <h3 className="text-lg font-bold text-blue-800 mb-2 group-hover:text-blue-600">
                  Industry News
                </h3>
                <p className="text-blue-600 text-sm">
                  Music business and industry developments
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
