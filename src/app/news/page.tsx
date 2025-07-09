import Image from 'next/image'
import Link from 'next/link'

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  category: 'Rock News' | 'Local' | 'Station' | 'Music Industry' | 'Concert'
  featured?: boolean
  image?: string
  tags: string[]
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Metallica Announces Summer Tour with Stop in El Paso',
    excerpt: 'The metal legends will bring their M72 World Tour to the Don Haskins Center this August.',
    content: 'Metallica has officially announced their highly anticipated summer tour dates, with El Paso making the cut! The legendary metal band will perform at the Don Haskins Center on August 15th as part of their M72 World Tour. This marks their first appearance in El Paso since 2019.',
    author: 'Buzz Adams',
    publishDate: '2025-07-08',
    category: 'Concert',
    featured: true,
    image: '/images/news/metallica-tour.jpg',
    tags: ['Metallica', 'Concert', 'El Paso', 'Metal']
  },
  {
    id: '2',
    title: 'KLAQ\'s Summer Rock Festival Lineup Revealed',
    excerpt: 'Get ready for the biggest rock festival in the Southwest this September.',
    content: 'KLAQ is proud to announce the lineup for our annual Summer Rock Festival! Headliners include Foo Fighters, Green Day, and local favorites from across the Southwest. The festival will take place at Ascarate Park on September 21-22.',
    author: 'Kat',
    publishDate: '2025-07-07',
    category: 'Station',
    featured: true,
    image: '/images/news/rock-festival.jpg',
    tags: ['KLAQ', 'Festival', 'Foo Fighters', 'Green Day']
  },
  {
    id: '3',
    title: 'Pearl Jam\'s New Album "Dark Matter" Rocks the Charts',
    excerpt: 'The Seattle legends return with their most powerful album in years.',
    content: 'Pearl Jam\'s latest release "Dark Matter" has shot straight to #1 on the rock charts, proving that the grunge pioneers still have what it takes. The album features 11 tracks of pure rock energy that longtime fans will absolutely love.',
    author: 'Chuck Armstrong',
    publishDate: '2025-07-06',
    category: 'Rock News',
    image: '/images/news/pearl-jam.jpg',
    tags: ['Pearl Jam', 'New Album', 'Grunge', 'Chart']
  },
  {
    id: '4',
    title: 'El Paso Music Scene Spotlight: Local Band "Desert Kings" Signs Record Deal',
    excerpt: 'Homegrown talent gets picked up by major label after years of grinding.',
    content: 'El Paso\'s own Desert Kings have officially signed with Atlantic Records! The four-piece rock band has been a staple of the local music scene for over five years, and their hard work has finally paid off. Catch them at Lowbrow Palace this weekend for what might be their last local show before hitting the big time.',
    author: 'Glenn Garza',
    publishDate: '2025-07-05',
    category: 'Local',
    image: '/images/news/desert-kings.jpg',
    tags: ['El Paso', 'Local Music', 'Record Deal', 'Desert Kings']
  },
  {
    id: '5',
    title: 'Rock and Roll Hall of Fame Announces 2025 Inductees',
    excerpt: 'Several classic rock icons finally get their due recognition.',
    content: 'The Rock and Roll Hall of Fame has announced its 2025 class of inductees, including long-overdue recognition for several classic rock legends. The ceremony will take place in Cleveland this October, and KLAQ will be providing exclusive coverage.',
    author: 'Nico Adjemian',
    publishDate: '2025-07-04',
    category: 'Rock News',
    image: '/images/news/hall-of-fame.jpg',
    tags: ['Hall of Fame', 'Classic Rock', 'Induction', 'Awards']
  },
  {
    id: '6',
    title: 'KLAQ Listener Appreciation Night - Thank You El Paso!',
    excerpt: 'Over 2,000 fans joined us for an unforgettable night of rock at The Plaza Theatre.',
    content: 'What an incredible night! Our annual Listener Appreciation event at The Plaza Theatre was a massive success, with over 2,000 of our amazing listeners joining us for live music, prizes, and great company. Thank you to everyone who came out and made it special!',
    author: 'Joanna Barba',
    publishDate: '2025-07-03',
    category: 'Station',
    image: '/images/news/appreciation-night.jpg',
    tags: ['KLAQ', 'Fans', 'Event', 'Plaza Theatre']
  }
]

export default function NewsPage() {
  const featuredArticles = newsArticles.filter(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Rock News': return 'bg-purple-100 text-purple-800'
      case 'Local': return 'bg-green-100 text-green-800'
      case 'Station': return 'bg-red-100 text-red-800'
      case 'Music Industry': return 'bg-blue-100 text-blue-800'
      case 'Concert': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            KLAQ Rock News
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Stay connected with the latest in rock music, local El Paso scene updates, 
            and everything happening at your favorite rock station.
          </p>
        </div>
      </section>

      {/* Breaking News Banner */}
      <section className="bg-black text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mr-4">
              BREAKING
            </span>
            <p className="text-sm">
              🎸 Metallica tickets go on sale Friday at 10 AM • Desert Kings signs with Atlantic Records
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Stories
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {article.image && (
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">News Image Placeholder</span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">
                      {formatDate(article.publishDate)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors duration-300">
                    <Link href={`/news/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {article.author}
                    </span>
                    <Link 
                      href={`/news/${article.id}`}
                      className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
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

      {/* All News Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Latest News
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
              All News
            </button>
            <Link href="/news/rock-news" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300">
              Rock News
            </Link>
            <Link href="/news/local" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-green-100 hover:text-green-700 transition-colors duration-300">
              Local Scene
            </Link>
            <Link href="/news/station" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-red-100 hover:text-red-700 transition-colors duration-300">
              Station Updates
            </Link>
            <Link href="/news/concerts" className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors duration-300">
              Concerts
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {article.image && (
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">News Image</span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-300">
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
                      <span key={tag} className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
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

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay In The Loop
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest rock news, concert announcements, and KLAQ updates delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Follow KLAQ on Social Media
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get real-time updates, behind-the-scenes content, and interact with fellow rock fans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Follow on Facebook
            </a>
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300"
            >
              Follow on Twitter
            </a>
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
