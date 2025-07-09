import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Music, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Concert News - 95.5 KLAQ',
  description: 'Latest concert announcements, tour news, and live music updates from KLAQ 95.5 FM El Paso.',
};

export default function ConcertNewsPage() {
  const concertNews = [
    {
      id: 1,
      title: 'Metallica Announces El Paso Date on 2024 World Tour',
      date: '2024-07-05',
      excerpt: 'The metal legends will bring their M72 World Tour to the Don Haskins Center this October.',
      image: '/images/news/metallica-tour.jpg',
      category: 'Tour Announcements'
    },
    {
      id: 2,
      title: 'Local Band "Desert Kings" Opens for Foo Fighters',
      date: '2024-07-03',
      excerpt: 'El Paso\'s own Desert Kings will support Foo Fighters at the upcoming El Paso County Coliseum show.',
      image: '/images/news/desert-kings.jpg',
      category: 'Local Music'
    },
    {
      id: 3,
      title: 'KLAQ Summer Rock Festival Lineup Revealed',
      date: '2024-07-01',
      excerpt: 'Two days of rock featuring Alice in Chains, Stone Temple Pilots, and more at Ascarate Park.',
      image: '/images/news/summer-fest.jpg',
      category: 'Festivals'
    },
    {
      id: 4,
      title: 'Tool Adds Second El Paso Show Due to Demand',
      date: '2024-06-28',
      excerpt: 'Progressive rock masters Tool announce additional show at Don Haskins Center after first show sells out.',
      image: '/images/news/tool-concert.jpg',
      category: 'Concert Updates'
    },
    {
      id: 5,
      title: 'Green Day to Play Intimate Venue Show',
      date: '2024-06-25',
      excerpt: 'Punk rock legends surprise fans with announcement of small venue show at Tricky Falls.',
      image: '/images/news/green-day.jpg',
      category: 'Special Events'
    },
    {
      id: 6,
      title: 'El Paso Concert Venues Announce Safety Protocols',
      date: '2024-06-20',
      excerpt: 'Major venues update safety and security measures for upcoming rock shows and festivals.',
      image: '/images/news/venue-safety.jpg',
      category: 'Industry News'
    }
  ];

  const categories = ['All', 'Tour Announcements', 'Local Music', 'Festivals', 'Concert Updates', 'Special Events', 'Industry News'];

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
          <h1 className="text-4xl font-bold mb-4">Concert News</h1>
          <p className="text-xl text-red-100">
            Latest concert announcements, tour news, and live music updates
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {concertNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <Music className="w-12 h-12 text-gray-400" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Link
                  href={`/news/${article.id}`}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Read More
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated on Concert News</h2>
          <p className="text-gray-700 mb-6">
            Get the latest concert announcements and tour updates delivered straight to your inbox. Never miss your favorite band coming to El Paso!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email for concert alerts"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
