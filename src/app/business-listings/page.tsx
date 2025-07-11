import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'El Paso Business Listings | Local Directory - KLAQ 95.5 FM',
  description: 'Find local El Paso businesses and services. KLAQ supports the local community with our comprehensive business directory.',
  keywords: 'El Paso businesses, local directory, El Paso services, local companies, business listings',
  openGraph: {
    title: 'El Paso Business Listings | Local Directory - KLAQ 95.5 FM',
    description: 'Find local El Paso businesses and services with KLAQ\'s business directory.',
    type: 'website',
    url: 'https://klaq.com/business-listings',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function BusinessListingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-3xl">🏢</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Business Listings
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-200">
              El Paso Local Directory
            </p>
            <div className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
              <p>
                Supporting local El Paso businesses that make our community strong. 
                Find trusted local services and discover what the Borderland has to offer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Local Business Categories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🍕</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Restaurants & Food</h3>
            <p className="text-gray-600">Local eateries, food trucks, and catering services</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🛠️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Home Services</h3>
            <p className="text-gray-600">Contractors, repair services, and home improvement</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🚗</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Automotive</h3>
            <p className="text-gray-600">Car dealers, repair shops, and auto services</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🏥</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h3>
            <p className="text-gray-600">Medical professionals and healthcare services</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🛍️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Retail & Shopping</h3>
            <p className="text-gray-600">Local shops, boutiques, and specialty stores</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">💼</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Services</h3>
            <p className="text-gray-600">Legal, financial, and business consulting</p>
          </div>
        </div>
      </div>

      {/* Featured Businesses */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Local Businesses
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Supporting Local Economy</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  KLAQ is proud to support local El Paso businesses that make our 
                  community vibrant and strong. These businesses employ our neighbors, 
                  support local families, and contribute to the unique character of 
                  the Borderland.
                </p>
                <p>
                  When you choose local businesses, you're investing in your community. 
                  Every dollar spent locally helps create jobs, supports families, and 
                  builds a stronger El Paso for everyone.
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Why Shop Local:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      <span>Supports local jobs and families</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                      <span>Keeps money in the local economy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                      <span>Creates unique community character</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      <span>Provides personalized service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How to Get Listed</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Is your business part of the El Paso community? We'd love to help 
                  you connect with local customers who value what you do.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Contact KLAQ</h4>
                      <p className="text-sm">Call our business development team</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-600 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Advertising Options</h4>
                      <p className="text-sm">Learn about our advertising packages</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-semibold">Community Events</h4>
                      <p className="text-sm">Participate in KLAQ events and remotes</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/advertise"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <span className="mr-2">📢</span>
                    Learn About Advertising
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Spotlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Local Business Spotlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white">🍔</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Local Restaurants</h3>
            <p className="text-gray-600 text-sm mb-4">
              From authentic Mexican cuisine to innovative fusion, El Paso's restaurant 
              scene offers incredible diversity and flavor.
            </p>
            <div className="text-blue-600 font-semibold text-sm">Featured on KLAQ</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white">🎨</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Arts & Culture</h3>
            <p className="text-gray-600 text-sm mb-4">
              Local artists, galleries, and cultural venues that make El Paso a 
              vibrant place to live and visit.
            </p>
            <div className="text-indigo-600 font-semibold text-sm">Community Partners</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white">🏠</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Home Services</h3>
            <p className="text-gray-600 text-sm mb-4">
              Trusted contractors, service providers, and home improvement 
              professionals serving the El Paso area.
            </p>
            <div className="text-purple-600 font-semibold text-sm">KLAQ Recommended</div>
          </div>
        </div>
      </div>

      {/* Contact for Business Owners */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Business Owners: Connect with KLAQ
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white">📞</span>
                </div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600 text-sm">(915) 581-1055</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white">📧</span>
                </div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm">business@klaq.com</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white">📍</span>
                </div>
                <h3 className="font-semibold text-gray-900">Visit</h3>
                <p className="text-gray-600 text-sm">Downtown El Paso</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              <span className="mr-2">💼</span>
              Contact Our Business Team
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Discover Local El Paso
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Supporting businesses that make our community great
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/advertise"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📢</span>
              Advertise with KLAQ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
