import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'El Paso Weather | Local Weather Updates - KLAQ 95.5 FM',
  description: 'Stay updated with El Paso weather conditions, forecasts, and alerts. KLAQ keeps you informed about Borderland weather.',
  keywords: 'El Paso weather, Texas weather, weather forecast, local weather, Borderland weather',
  openGraph: {
    title: 'El Paso Weather | Local Weather Updates - KLAQ 95.5 FM',
    description: 'Stay updated with El Paso weather conditions and forecasts.',
    type: 'website',
    url: 'https://klaq.com/weather',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-sky-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-3xl">☀️</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-blue-200 bg-clip-text text-transparent">
              El Paso Weather
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-sky-200">
              Your Local Weather Source
            </p>
            <div className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
              <p>
                Stay informed about El Paso and Borderland weather conditions with 
                KLAQ's comprehensive weather updates and forecasts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Weather Widget */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Current Conditions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl">
              <div className="text-4xl mb-2">☀️</div>
              <h3 className="text-lg font-bold text-gray-900">El Paso</h3>
              <p className="text-2xl font-bold text-sky-600">75°F</p>
              <p className="text-gray-600">Sunny</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
              <div className="text-4xl mb-2">🌤️</div>
              <h3 className="text-lg font-bold text-gray-900">Las Cruces</h3>
              <p className="text-2xl font-bold text-blue-600">73°F</p>
              <p className="text-gray-600">Partly Cloudy</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl">
              <div className="text-4xl mb-2">☀️</div>
              <h3 className="text-lg font-bold text-gray-900">Juárez</h3>
              <p className="text-2xl font-bold text-cyan-600">76°F</p>
              <p className="text-gray-600">Clear</p>
            </div>
          </div>
        </div>

        {/* Weather Features */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">7-Day Forecast</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <h4 className="font-semibold">Today</h4>
                    <p className="text-sm text-gray-600">Sunny</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">82°/58°</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌤️</span>
                  <div>
                    <h4 className="font-semibold">Tomorrow</h4>
                    <p className="text-sm text-gray-600">Partly Cloudy</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">79°/55°</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">☀️</span>
                  <div>
                    <h4 className="font-semibold">Wednesday</h4>
                    <p className="text-sm text-gray-600">Sunny</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">84°/61°</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌥️</span>
                  <div>
                    <h4 className="font-semibold">Thursday</h4>
                    <p className="text-sm text-gray-600">Mostly Cloudy</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">78°/54°</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Weather Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-sky-50 rounded-lg">
                <div className="text-2xl mb-2">💨</div>
                <h4 className="font-semibold text-gray-900">Wind</h4>
                <p className="text-sky-600">8 mph SW</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">💧</div>
                <h4 className="font-semibold text-gray-900">Humidity</h4>
                <p className="text-blue-600">25%</p>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg">
                <div className="text-2xl mb-2">👁️</div>
                <h4 className="font-semibold text-gray-900">Visibility</h4>
                <p className="text-cyan-600">10 miles</p>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <div className="text-2xl mb-2">🌅</div>
                <h4 className="font-semibold text-gray-900">UV Index</h4>
                <p className="text-teal-600">High (8)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Weather Alerts & Safety
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌪️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Severe Weather</h3>
              <p className="text-gray-600">Stay alert for thunderstorms and high winds during monsoon season</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌡️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Extreme Heat</h3>
              <p className="text-gray-600">Summer temperatures can exceed 100°F - stay hydrated and cool</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dust Storms</h3>
              <p className="text-gray-600">High winds can create dangerous dust storm conditions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desert Climate Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Understanding El Paso's Desert Climate
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Year-Round Weather</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">☀️</span>
                </div>
                <div>
                  <h4 className="font-semibold">Spring (March-May)</h4>
                  <p className="text-sm">Mild temperatures, occasional windy days, perfect outdoor weather</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🌡️</span>
                </div>
                <div>
                  <h4 className="font-semibold">Summer (June-August)</h4>
                  <p className="text-sm">Hot and dry, monsoon storms in late summer</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🍂</span>
                </div>
                <div>
                  <h4 className="font-semibold">Fall (September-November)</h4>
                  <p className="text-sm">Cooling temperatures, clear skies, beautiful weather</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">❄️</span>
                </div>
                <div>
                  <h4 className="font-semibold">Winter (December-February)</h4>
                  <p className="text-sm">Mild days, cool nights, occasional light snow</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Weather Safety Tips</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold">Sun Protection</h4>
                  <p className="text-sm">Use sunscreen, wear hats, and seek shade during peak hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold">Stay Hydrated</h4>
                  <p className="text-sm">Drink plenty of water, especially during summer months</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold">Dust Storm Safety</h4>
                  <p className="text-sm">Pull over and wait when visibility is reduced</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold">Monsoon Awareness</h4>
                  <p className="text-sm">Avoid flooded roads and stay indoors during storms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Resources */}
      <div className="bg-gradient-to-r from-sky-100 to-cyan-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Weather Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Emergency Weather Info</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Listen to KLAQ</h4>
                    <p className="text-sm">We provide weather updates and emergency information</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Weather Apps</h4>
                    <p className="text-sm">Download official weather apps for alerts</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">National Weather Service</h4>
                    <p className="text-sm">Official forecasts and warnings for El Paso</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Weather on KLAQ</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  KLAQ provides regular weather updates throughout the day to keep 
                  you informed about current conditions and upcoming changes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-sky-600 rounded-full"></div>
                    <span>Hourly weather updates during shows</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <span>Severe weather alerts and safety information</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-cyan-600 rounded-full"></div>
                    <span>Weekend and holiday forecasts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                    <span>Special event weather updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Weather Aware with KLAQ
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            Your trusted source for El Paso weather updates and safety information
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
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Contact KLAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
