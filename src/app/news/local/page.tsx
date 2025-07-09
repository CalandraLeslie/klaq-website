import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, User, ArrowRight, MapPin, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Local News - 95.5 KLAQ',
  description: 'Latest local El Paso news, community events, and regional updates from KLAQ 95.5 FM.',
}

export default function LocalNewsPage() {
  const localNews = [
    {
      id: 1,
      title: 'Mexico Stuns USA In Gold Cup As Gulf Of Mexico Trends',
      excerpt: 'Mexico defeated the USA in a thrilling Gold Cup match that has El Paso sports fans buzzing. The victory sparked celebrations across the border region.',
      author: 'Joanna Barba',
      date: '2025-07-09',
      timeAgo: '4 hours ago',
      category: 'Sports',
      location: 'El Paso',
      image: '/images/news/gold-cup.jpg'
    },
    {
      id: 2,
      title: 'Steve Kaplowitz Celebrates 30 Years On-Air with 600 ESPN El Paso',
      excerpt: 'Local radio veteran Steve Kaplowitz marks three decades of broadcasting excellence with Townsquare Media El Paso.',
      author: 'KLAQ Staff',
      date: '2025-07-07',
      timeAgo: '2 days ago',
      category: 'Local Media',
      location: 'El Paso',
      image: '/images/news/steve-kaplowitz.jpg'
    },
    {
      id: 3,
      title: 'El Paso Bands Have a Chance to Play 2025 Vans Warped Tour',
      excerpt: 'These talented local bands have a chance to represent El Paso at the Vans Warped Tour 30 Years show through Battle of the Bands competition.',
      author: 'Daniel Paulus',
      date: '2025-07-05',
      timeAgo: '4 days ago',
      category: 'Music',
      location: 'El Paso',
      image: '/images/news/warped-tour.jpg'
    },
    {
      id: 4,
      title: 'Check Your Fridge For This Massive Bacon Recall Affecting El Paso',
      excerpt: 'A major bacon recall affects products nationwide, including those distributed to El Paso area stores. Here\'s what consumers need to know.',
      author: 'KLAQ Staff',
      date: '2025-07-04',
      timeAgo: '5 days ago',
      category: 'Consumer Alert',
      location: 'El Paso',
      image: '/images/news/bacon-recall.jpg'
    },
    {
      id: 5,
      title: 'El Paso Downtown Revitalization Project Breaks Ground',
      excerpt: 'The city of El Paso officially breaks ground on a major downtown revitalization project that will transform the urban core.',
      author: 'El Paso Times',
      date: '2025-07-03',
      timeAgo: '6 days ago',
      category: 'Development',
      location: 'Downtown El Paso',
      image: '/images/news/downtown-project.jpg'
    },
    {
      id: 6,
      title: 'UTEP Miners Announce New Athletic Director',
      excerpt: 'The University of Texas at El Paso has selected a new athletic director to lead the Miners into the next chapter of collegiate athletics.',
      author: 'UTEP Athletics',
      date: '2025-07-02',
      timeAgo: '1 week ago',
      category: 'Sports',
      location: 'UTEP',
      image: '/images/news/utep-ad.jpg'
    },
    {
      id: 7,
      title: 'El Paso Zoo Welcomes New Baby Elephant',
      excerpt: 'The El Paso Zoo is celebrating the arrival of a new baby elephant, bringing joy to visitors and conservation efforts.',
      author: 'El Paso Zoo',
      date: '2025-07-01',
      timeAgo: '1 week ago',
      category: 'Community',
      location: 'El Paso Zoo',
      image: '/images/news/baby-elephant.jpg'
    },
    {
      id: 8,
      title: 'New Food Truck Park Opens in West El Paso',
      excerpt: 'A new food truck park featuring local cuisine opens in West El Paso, offering residents more dining options and supporting local businesses.',
      author: 'El Paso Inc.',
      date: '2025-06-30',
      timeAgo: '1 week ago',
      category: 'Business',
      location: 'West El Paso',
      image: '/images/news/food-truck-park.jpg'
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
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">Local News</h1>
            <p className="text-xl text-red-100">
              Latest local El Paso news, community events, and regional updates
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {localNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {article.location}
                      </span>
                    </div>
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
          <h2 className="text-3xl font-bold mb-4">Stay Connected with El Paso</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get the latest local news and community updates delivered to your inbox.
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
