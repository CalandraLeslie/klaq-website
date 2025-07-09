import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, ArrowRight, Music, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rock News - 95.5 KLAQ',
  description: 'Latest rock music news, band updates, and industry insights from KLAQ 95.5 FM.',
}

export default function RockNewsPage() {
  const rockNews = [
    {
      id: 1,
      title: 'The Black Sabbath Deep Cut Ghost\'s Tobias Forge Initially Wanted to Sing at Farewell Show',
      excerpt: 'Ghost frontman Tobias Forge reveals the Black Sabbath deep cut he initially wanted to perform at the band\'s farewell show during their final tour.',
      author: 'Lauryn Schaffner',
      date: '2025-07-09',
      timeAgo: '2 hours ago',
      category: 'Rock News',
      image: '/images/news/ghost-sabbath.jpg'
    },
    {
      id: 2,
      title: 'Would Dave Abbruzzese Rejoin Pearl Jam? Drummer Shares Response Statement',
      excerpt: 'Former Pearl Jam drummer Dave Abbruzzese opens up about whether he would consider rejoining the iconic grunge band after recent lineup changes.',
      author: 'Chad Childers',
      date: '2025-07-09',
      timeAgo: '3 hours ago',
      category: 'Rock News',
      image: '/images/news/pearl-jam-drummer.jpg'
    },
    {
      id: 3,
      title: 'Original Pearl Jam Drummer Dave Krusen Shares Whether He\'d Rejoin Band Following Matt Cameron Split',
      excerpt: 'Dave Krusen, Pearl Jam\'s original drummer, discusses the possibility of returning to the band following Matt Cameron\'s departure.',
      author: 'Lauryn Schaffner',
      date: '2025-07-08',
      timeAgo: '1 day ago',
      category: 'Rock News',
      image: '/images/news/pearl-jam-krusen.jpg'
    },
    {
      id: 4,
      title: '\'Pasta and War Movies\' – What Ozzy and Yungblud Have in Common',
      excerpt: 'Despite their generational differences, Ozzy Osbourne and Yungblud share some surprising common interests that brought them together.',
      author: 'Bryan Rolli',
      date: '2025-07-08',
      timeAgo: '1 day ago',
      category: 'Rock News',
      image: '/images/news/ozzy-yungblud.jpg'
    },
    {
      id: 5,
      title: 'Metallica Announces New Album Recording Sessions Begin This Fall',
      excerpt: 'The metal legends are heading back to the studio to work on their next album, the follow-up to 2016\'s Hardwired... to Self-Destruct.',
      author: 'Metal Hammer',
      date: '2025-07-07',
      timeAgo: '2 days ago',
      category: 'Rock News',
      image: '/images/news/metallica-studio.jpg'
    },
    {
      id: 6,
      title: 'Foo Fighters Tease New Music With Cryptic Social Media Posts',
      excerpt: 'Dave Grohl and company have been posting mysterious images and sounds on social media, hinting at new material coming soon.',
      author: 'Rock Sound',
      date: '2025-07-06',
      timeAgo: '3 days ago',
      category: 'Rock News',
      image: '/images/news/foo-fighters-tease.jpg'
    },
    {
      id: 7,
      title: 'Alice in Chains Celebrates 30 Years of \'Dirt\' with Special Vinyl Release',
      excerpt: 'The grunge icons are commemorating three decades of their landmark album with a limited edition vinyl box set.',
      author: 'Alternative Press',
      date: '2025-07-05',
      timeAgo: '4 days ago',
      category: 'Rock News',
      image: '/images/news/alice-chains-dirt.jpg'
    },
    {
      id: 8,
      title: 'Tool\'s Danny Carey Discusses Band\'s Future and Upcoming Projects',
      excerpt: 'The legendary drummer opens up about Tool\'s creative process and what fans can expect from the band in the coming months.',
      author: 'Modern Drummer',
      date: '2025-07-04',
      timeAgo: '5 days ago',
      category: 'Rock News',
      image: '/images/news/tool-danny-carey.jpg'
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
            <Music className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Rock News</h1>
            <p className="text-xl text-red-100">
              Latest rock music news, band updates, and industry insights
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {rockNews.map((article) => (
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
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Rock News</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get the latest rock music news and updates delivered straight to your inbox.
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
