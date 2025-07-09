import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Radio, Award, Mic } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Station News - 95.5 KLAQ',
  description: 'Latest news and updates from KLAQ 95.5 FM, including DJ updates, station events, and community involvement.',
};

export default function StationNewsPage() {
  const stationNews = [
    {
      id: 1,
      title: 'KLAQ Wins "Best Rock Station" at El Paso Media Awards',
      date: '2024-07-08',
      excerpt: 'KLAQ 95.5 FM takes home the top honor for the third consecutive year at the annual El Paso Media Awards.',
      category: 'Awards',
      featured: true
    },
    {
      id: 2,
      title: 'Buzz Adams Morning Show Celebrates 5 Years',
      date: '2024-07-05',
      excerpt: 'The popular morning show reaches a major milestone with special guest appearances and listener celebrations.',
      category: 'Show Updates',
      featured: false
    },
    {
      id: 3,
      title: 'KLAQ Partners with Local Food Bank for Summer Drive',
      date: '2024-07-03',
      excerpt: 'Station launches month-long food drive to support El Paso families during summer months.',
      category: 'Community',
      featured: false
    },
    {
      id: 4,
      title: 'New Weekend Show "Classic Rock Café" Debuts',
      date: '2024-07-01',
      excerpt: 'Saturday morning program features deep cuts and classic rock stories with host Glenn Garza.',
      category: 'Programming',
      featured: false
    },
    {
      id: 5,
      title: 'KLAQ Studios Get Major Technology Upgrade',
      date: '2024-06-28',
      excerpt: 'State-of-the-art equipment installation improves sound quality and streaming capabilities.',
      category: 'Technology',
      featured: false
    },
    {
      id: 6,
      title: 'Kat Joins KLAQ for Afternoon Drive Time',
      date: '2024-06-25',
      excerpt: 'Experienced radio personality brings fresh energy to weekday afternoon programming.',
      category: 'Staff Updates',
      featured: false
    },
    {
      id: 7,
      title: 'KLAQ Launches Mobile App with Enhanced Features',
      date: '2024-06-20',
      excerpt: 'New app includes live streaming, concert alerts, and exclusive content for listeners.',
      category: 'Technology',
      featured: false
    },
    {
      id: 8,
      title: 'Station Raises $25,000 for Local Music Education',
      date: '2024-06-15',
      excerpt: 'Successful charity drive supports instrument purchases for El Paso school districts.',
      category: 'Community',
      featured: false
    }
  ];

  const categories = ['All', 'Awards', 'Show Updates', 'Community', 'Programming', 'Technology', 'Staff Updates'];

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
          <h1 className="text-4xl font-bold mb-4">Station News</h1>
          <p className="text-xl text-red-100">
            Latest updates from KLAQ 95.5 FM and behind-the-scenes happenings
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        {stationNews.filter(article => article.featured).map((article) => (
          <div key={article.id} className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 lg:flex lg:items-center">
                <div className="lg:w-1/4 mb-6 lg:mb-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="lg:w-3/4 lg:pl-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                      Featured
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/news/${article.id}`}
                    className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    Read Full Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stationNews.filter(article => !article.featured).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
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

        {/* Station Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Radio className="w-5 h-5 mr-2 text-red-600" />
              About KLAQ 95.5
            </h2>
            <p className="text-gray-700 mb-4">
              KLAQ 95.5 FM has been El Paso's premier rock radio station for over two decades, delivering the best classic and modern rock to the Sun City and surrounding areas.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Broadcasting since 1999</li>
              <li>• 50,000+ daily listeners</li>
              <li>• Community-focused programming</li>
              <li>• Award-winning DJs and shows</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Mic className="w-5 h-5 mr-2 text-red-600" />
              Join Our Team
            </h2>
            <p className="text-gray-700 mb-4">
              Interested in a career in radio? KLAQ is always looking for passionate individuals to join our team in various roles from on-air talent to production.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              View Opportunities
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Stay Connected with KLAQ</h2>
          <p className="text-red-100 mb-6 text-lg">
            Get the latest station news, contest announcements, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email for station updates"
              className="flex-1 px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-white"
            />
            <button className="bg-white text-red-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
