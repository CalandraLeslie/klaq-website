import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Local News - 95.5 KLAQ',
  description: 'Local El Paso news, community events, and music scene updates from KLAQ 95.5 FM.',
};

export default function LocalNewsPage() {
  const localNews = [
    {
      id: 1,
      title: 'El Paso Band "Desert Thunder" Signs Major Record Deal',
      date: '2024-07-08',
      excerpt: 'Local rock band Desert Thunder signs with Atlantic Records after viral social media success.',
      location: 'El Paso, TX',
      category: 'Music Scene'
    },
    {
      id: 2,
      title: 'KLAQ Summer Concert Series at San Jacinto Plaza',
      date: '2024-07-06',
      excerpt: 'Free weekly concerts featuring local bands every Friday evening through August.',
      location: 'Downtown El Paso',
      category: 'Community Events'
    },
    {
      id: 3,
      title: 'New Music Venue "The Underground" Opens in Central El Paso',
      date: '2024-07-04',
      excerpt: 'Intimate 300-capacity venue focuses on supporting local and touring rock acts.',
      location: 'Central El Paso',
      category: 'Venue News'
    },
    {
      id: 4,
      title: 'UTEP Student Band Wins Regional Battle of the Bands',
      date: '2024-07-02',
      excerpt: '"Static Horizon" from UTEP takes first place and wins recording studio time.',
      location: 'UTEP Campus',
      category: 'Music Competition'
    },
    {
      id: 5,
      title: 'El Paso Music Academy Receives Grant for Rock Program',
      date: '2024-06-30',
      excerpt: '$50,000 grant will fund new rock music education program for local youth.',
      location: 'East El Paso',
      category: 'Education'
    },
    {
      id: 6,
      title: 'Memorial Park to Host Free Rock Festival',
      date: '2024-06-28',
      excerpt: 'City announces three-day festival featuring local bands and food vendors.',
      location: 'Memorial Park',
      category: 'Community Events'
    }
  ];

  const categories = ['All', 'Music Scene', 'Community Events', 'Venue News', 'Music Competition', 'Education'];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/news"
            className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
          <h1 className="text-4xl font-bold mb-4">Local News</h1>
          <p className="text-xl text-red-100">
            El Paso music scene, community events, and local music news
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="space-y-6">
          {localNews.map((article, index) => (
            <article
              key={article.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                index === 0 ? 'lg:flex' : ''
              }`}
            >
              {index === 0 ? (
                // Featured article layout
                <>
                  <div className="lg:w-1/3 aspect-video lg:aspect-square bg-gray-200 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h2>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{article.location}</span>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/news/${article.id}`}
                      className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                    >
                      Read Full Story
                    </Link>
                  </div>
                </>
              ) : (
                // Regular article layout
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {article.title}
                  </h2>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{article.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <Link
                    href={`/news/${article.id}`}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Community Spotlight */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Support Local Music</h2>
          <p className="text-red-100 mb-6 text-lg">
            KLAQ 95.5 is committed to supporting the El Paso music scene. Know a local band that deserves airplay? Submit their music for consideration!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
            >
              Submit Music
            </Link>
            <Link
              href="/events"
              className="border border-white text-white py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center font-semibold"
            >
              Local Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
