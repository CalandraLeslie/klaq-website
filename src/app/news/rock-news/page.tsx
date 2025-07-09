import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Music, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rock News - 95.5 KLAQ',
  description: 'Latest rock music news, album releases, band updates, and industry news from KLAQ 95.5 FM.',
};

export default function RockNewsPage() {
  const rockNews = [
    {
      id: 1,
      title: 'Metallica Announces New Album "72 Seasons" Tour',
      date: '2024-07-09',
      excerpt: 'The metal legends reveal details about their upcoming world tour supporting their latest album.',
      category: 'Tour News',
      trending: true
    },
    {
      id: 2,
      title: 'Foo Fighters Release Surprise EP "But Here We Are"',
      date: '2024-07-08',
      excerpt: 'Dave Grohl and company drop unexpected new music following their emotional return to the stage.',
      category: 'New Releases',
      trending: true
    },
    {
      id: 3,
      title: 'Rock and Roll Hall of Fame 2025 Nominees Announced',
      date: '2024-07-07',
      excerpt: 'Candidates include Soundgarden, Jane\'s Addiction, and other influential rock acts.',
      category: 'Industry News',
      trending: false
    },
    {
      id: 4,
      title: 'Pearl Jam\'s Eddie Vedder Announces Solo Tour',
      date: '2024-07-06',
      excerpt: 'The Pearl Jam frontman will perform intimate acoustic shows across the United States.',
      category: 'Solo Projects',
      trending: false
    },
    {
      id: 5,
      title: 'AC/DC Teases Return with Studio Photos',
      date: '2024-07-05',
      excerpt: 'Social media posts suggest the legendary band is working on new material.',
      category: 'Band Updates',
      trending: true
    },
    {
      id: 6,
      title: 'Green Day\'s "American Idiot" Musical Returns to Broadway',
      date: '2024-07-04',
      excerpt: 'The punk rock opera makes its Broadway comeback with an updated production.',
      category: 'Entertainment',
      trending: false
    },
    {
      id: 7,
      title: 'Tool\'s Danny Carey Discusses New Album Progress',
      date: '2024-07-03',
      excerpt: 'The drummer reveals the band is in early stages of writing their next release.',
      category: 'Band Updates',
      trending: false
    },
    {
      id: 8,
      title: 'Red Hot Chili Peppers Extend Stadium Tour',
      date: '2024-07-02',
      excerpt: 'Additional dates added due to overwhelming demand for the funk rock legends.',
      category: 'Tour News',
      trending: false
    }
  ];

  const categories = ['All', 'Tour News', 'New Releases', 'Industry News', 'Solo Projects', 'Band Updates', 'Entertainment'];

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
          <h1 className="text-4xl font-bold mb-4">Rock News</h1>
          <p className="text-xl text-red-100">
            Latest rock music news, album releases, and industry updates
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Trending Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-red-600" />
            Trending Now
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rockNews.filter(article => article.trending).map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-red-600"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link
                    href={`/news/${article.id}`}
                    className="text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

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

        {/* All News Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Rock News</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {rockNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {article.trending && (
                      <TrendingUp className="w-4 h-4 text-red-600" />
                    )}
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <Link
                  href={`/news/${article.id}`}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Read Full Story →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <div className="flex items-start">
            <Music className="w-8 h-8 text-red-600 mr-4 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rock News Digest</h2>
              <p className="text-gray-700 mb-6">
                Get the latest rock news delivered to your inbox every week. Stay up to date with album releases, tour announcements, and industry happenings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email for weekly rock news"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
