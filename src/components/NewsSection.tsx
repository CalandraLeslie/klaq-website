'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: Date;
  category: string;
  readTime: number;
  image?: string;
  featured?: boolean;
}

const mockArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'See the Plaza Theatre in 1963 for \'The Birds\' El Paso Premiere',
    excerpt: 'A nostalgic look back at the historic Plaza Theatre and its role in El Paso\'s entertainment history during the premiere of Alfred Hitchcock\'s thriller.',
    author: 'Joanna Barba',
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    category: 'Local History',
    readTime: 3,
    featured: true
  },
  {
    id: '2',
    title: 'Judas Priest Announces 2025 Tour Dates',
    excerpt: 'The metal legends are bringing their farewell tour to select cities, with rumors of a potential El Paso stop.',
    author: 'Chuck Armstrong',
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    category: 'Music News',
    readTime: 2
  },
  {
    id: '3',
    title: 'Hall Pass Cash 2025: Get Ready for a New School Year',
    excerpt: 'Win a $500 prepaid Visa gift card to help with back-to-school expenses. Contest details and how to enter.',
    author: 'Meg Dowdy',
    publishedAt: new Date(Date.now() - 21 * 60 * 60 * 1000), // 21 hours ago
    category: 'Contests',
    readTime: 2
  },
  {
    id: '4',
    title: 'Black Sabbath\'s Final Show: Rockers Share Reactions',
    excerpt: 'Musicians and fans react to Ozzy Osbourne and Black Sabbath\'s emotional farewell performance.',
    author: 'Jordan Blum',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    category: 'Music News',
    readTime: 4
  },
  {
    id: '5',
    title: 'The 25 Best Progressive Metal Albums of the 2000s',
    excerpt: 'Our definitive ranking of the most influential progressive metal albums from the decade that defined the genre.',
    author: 'Jordan Blum',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    category: 'Music Lists',
    readTime: 8
  },
  {
    id: '6',
    title: 'KLAQ Rocks the Park 2025: Lineup Announcement',
    excerpt: 'Get ready for another epic summer concert experience. Early bird tickets now available.',
    author: 'Daniel Paulus',
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    category: 'Events',
    readTime: 3
  }
];

const categories = ['All', 'Music News', 'Local History', 'Contests', 'Events', 'Music Lists'];

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleArticles, setVisibleArticles] = useState(6);

  const filteredArticles = selectedCategory === 'All' 
    ? mockArticles 
    : mockArticles.filter(article => article.category === selectedCategory);

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const featuredArticle = mockArticles.find(article => article.featured);
  const regularArticles = displayedArticles.filter(article => !article.featured);

  const loadMoreArticles = () => {
    setVisibleArticles(prev => prev + 6);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest rock music news, local events, and stories from El Paso
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleArticles(6);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 focus-visible ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          {featuredArticle && selectedCategory === 'All' && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link 
                href={`/news/${featuredArticle.id}`}
                className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full mb-2">
                      {featuredArticle.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors">
                      {featuredArticle.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>By {featuredArticle.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime} min read</span>
                      </div>
                    </div>
                    <span>{formatDistanceToNow(featuredArticle.publishedAt, { addSuffix: true })}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Regular Articles */}
          <div className={`${featuredArticle && selectedCategory === 'All' ? 'lg:col-span-1' : 'lg:col-span-3'}`}>
            <div className={`grid gap-6 ${featuredArticle && selectedCategory === 'All' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}`}>
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link 
                    href={`/news/${article.id}`}
                    className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-2">
                          <span>{article.author}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{article.readTime}m</span>
                          </div>
                        </div>
                        <span>{formatDistanceToNow(article.publishedAt, { addSuffix: true })}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Load More Button */}
        {visibleArticles < filteredArticles.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={loadMoreArticles}
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 focus-visible"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Load More Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 mt-16 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
          <p className="mb-6 text-red-100">
            Get the latest rock news, contest alerts, and event updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Email address"
            />
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 focus-visible">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
