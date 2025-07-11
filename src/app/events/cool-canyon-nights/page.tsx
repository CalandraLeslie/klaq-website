import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cool Canyon Nights - Summer Concert Series | KLAQ 95.5 FM',
  description: 'Join KLAQ for Cool Canyon Nights, our premier summer concert series featuring top rock acts in the beautiful Texas hill country.',
  keywords: 'Cool Canyon Nights, KLAQ concerts, summer concert series, Texas hill country, rock concerts',
  openGraph: {
    title: 'Cool Canyon Nights - Summer Concert Series | KLAQ 95.5 FM',
    description: 'Join KLAQ for Cool Canyon Nights, our premier summer concert series.',
    type: 'website',
    url: 'https://klaq.com/events/cool-canyon-nights',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function CoolCanyonNightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Cool Canyon Nights
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-200">
              Summer Concert Series
            </p>
            <div className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
              <p>
                Experience the magic of live rock music under the Texas stars at KLAQ's 
                premier summer concert series in the stunning hill country canyon setting.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/events"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 font-semibold"
              >
                <span className="mr-2">🎪</span>
                All Events
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-200 font-semibold"
              >
                <span className="mr-2">📞</span>
                Contact for Info
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Event Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Cool Canyon Nights
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Cool Canyon Nights is KLAQ's signature summer concert series that brings 
                together rock music fans from across the Southwest for unforgettable 
                performances in one of Texas's most beautiful natural amphitheater settings.
              </p>
              <p>
                Set against the backdrop of majestic canyon walls and under the vast Texas 
                sky, these concerts offer an intimate yet spectacular concert experience 
                that combines the best of live rock music with the natural beauty of the 
                hill country.
              </p>
              <p>
                Each summer, we curate a lineup of both established rock legends and 
                emerging artists, creating nights of music that become treasured memories 
                for fans of all ages.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📅</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Season</h4>
                  <p className="text-gray-600">June through September</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Canyon Amphitheater, Texas Hill Country</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🎵</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Music</h4>
                  <p className="text-gray-600">Rock, Classic Rock, Alternative</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🎪</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Format</h4>
                  <p className="text-gray-600">Outdoor concerts under the stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concert Features */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Makes Cool Canyon Nights Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏔️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Scenic Setting</h3>
              <p className="text-gray-600">Natural canyon amphitheater with stunning rock formations</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Intimate Experience</h3>
              <p className="text-gray-600">Close-up performances in a more personal setting</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Amazing Acoustics</h3>
              <p className="text-gray-600">Natural canyon walls provide incredible sound quality</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌌</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Starlit Nights</h3>
              <p className="text-gray-600">Concert under the vast Texas night sky</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🍔</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Full Experience</h3>
              <p className="text-gray-600">Food vendors, merchandise, and activities</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🚗</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Access</h3>
              <p className="text-gray-600">Convenient parking and shuttle services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Past Performers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Past Performers
        </h2>
        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="font-bold text-gray-900">Rock Legends</h3>
              <p className="text-gray-600 text-sm">Classic rock icons and hall of famers</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="font-bold text-gray-900">Modern Rock</h3>
              <p className="text-gray-600 text-sm">Today's chart-topping rock artists</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="font-bold text-gray-900">Alternative Acts</h3>
              <p className="text-gray-600 text-sm">Cutting-edge alternative and indie rock</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="font-bold text-gray-900">Local Favorites</h3>
              <p className="text-gray-600 text-sm">Texas and Southwest regional artists</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="font-bold text-gray-900">Rising Stars</h3>
              <p className="text-gray-600 text-sm">Tomorrow's rock superstars</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="font-bold text-gray-900">Special Guests</h3>
              <p className="text-gray-600 text-sm">Surprise appearances and collaborations</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-700 text-lg">
              Each year brings new surprises and unforgettable performances that make 
              Cool Canyon Nights the premier summer concert destination in the Southwest.
            </p>
          </div>
        </div>
      </div>

      {/* Planning Your Visit */}
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Planning Your Cool Canyon Nights Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Arrival & Parking</h4>
                    <p className="text-sm">Gates open 2 hours before show time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Seating</h4>
                    <p className="text-sm">General admission with blanket and chair areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Food & Drinks</h4>
                    <p className="text-sm">Multiple vendors and beverage options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Weather</h4>
                    <p className="text-sm">Outdoor venue - come prepared for conditions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What to Bring</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Seating</h4>
                    <p className="text-sm">Blankets, low-back chairs, or stadium cushions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Weather Gear</h4>
                    <p className="text-sm">Layers for temperature changes after sunset</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Personal Items</h4>
                    <p className="text-sm">Sunscreen, water bottle, and comfortable shoes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Optional</h4>
                    <p className="text-sm">Camera for memories (check venue policy)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Cool Canyon Nights
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join KLAQ for an unforgettable summer of live rock music under the Texas stars
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📻</span>
              Listen for Updates
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎪</span>
              All KLAQ Events
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Get More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
