import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobile Apps - Listen Anywhere | KLAQ 95.5 FM',
  description: 'Download the KLAQ mobile app and listen to El Paso\'s Rock Station anywhere. Available for iOS and Android with live streaming and more.',
  keywords: 'KLAQ app, mobile app, iOS, Android, streaming, radio app, El Paso radio',
  openGraph: {
    title: 'Mobile Apps - Listen Anywhere | KLAQ 95.5 FM',
    description: 'Download the KLAQ mobile app and listen to El Paso\'s Rock Station anywhere.',
    type: 'website',
    url: 'https://klaq.com/listen/mobile-apps',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-gray-50 to-black/5">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-gray-200 bg-clip-text text-transparent">
              KLAQ Mobile Apps
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-200">
              Take El Paso's Rock Station Everywhere You Go
            </p>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Stream Live 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Download the Official KLAQ App
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get instant access to KLAQ 95.5 FM with our free mobile app. Stream live, 
            stay updated with the latest rock news, and never miss your favorite shows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* iOS App */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS App</h3>
              <p className="text-gray-600 mb-6">
                Download the KLAQ app for iPhone and iPad. Compatible with iOS 12.0 and later.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 mb-4"
              >
                <span className="mr-2">📱</span>
                Download on the App Store
              </a>
              <div className="text-sm text-gray-500">
                Compatible with iPhone, iPad, and iPod touch
              </div>
            </div>
          </div>

          {/* Android App */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Android App</h3>
              <p className="text-gray-600 mb-6">
                Get the KLAQ app for Android devices. Compatible with Android 5.0 and up.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 mb-4"
              >
                <span className="mr-2">🤖</span>
                Get it on Google Play
              </a>
              <div className="text-sm text-gray-500">
                Compatible with phones and tablets
              </div>
            </div>
          </div>
        </div>

        {/* App Features */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            App Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">🎵</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Live Streaming</h4>
              <p className="text-gray-600 text-sm">
                Stream KLAQ 95.5 FM live anywhere with high-quality audio
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">🎤</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Show Information</h4>
              <p className="text-gray-600 text-sm">
                Get details about current shows, DJs, and upcoming programming
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">📰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Rock News</h4>
              <p className="text-gray-600 text-sm">
                Stay updated with the latest rock and metal news from around the world
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">🎫</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Contest Updates</h4>
              <p className="text-gray-600 text-sm">
                Get notified about contests and special promotions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">⏰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Alarm Clock</h4>
              <p className="text-gray-600 text-sm">
                Wake up to KLAQ with the built-in alarm clock feature
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">📞</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Call the Station</h4>
              <p className="text-gray-600 text-sm">
                Quick access to call KLAQ directly from the app
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Listening Options */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Other Ways to Listen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Player</h3>
              <p className="text-gray-600 mb-4">
                Listen directly on our website using any web browser
              </p>
              <Link
                href="/listen"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Listen Online
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">📻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Radio</h3>
              <p className="text-gray-600 mb-4">
                Tune to 95.5 FM on any traditional radio in the El Paso area
              </p>
              <div className="text-red-600 font-bold text-lg">95.5 FM</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-red-600 text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">HD Radio</h3>
              <p className="text-gray-600 mb-4">
                Experience crystal clear digital sound with HD Radio technology
              </p>
              <Link
                href="/listen/hd2-q2"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Q2 Alternative
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Need Help with the App?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Troubleshooting Tips</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Ensure you have a stable internet connection</p>
                <p>• Close and restart the app if streaming stops</p>
                <p>• Check your device's volume and app permissions</p>
                <p>• Update to the latest version of the app</p>
                <p>• Restart your device if problems persist</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Support</h3>
              <div className="space-y-3 text-gray-600">
                <p>If you're still experiencing issues with the KLAQ app:</p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@klaq.com" className="text-red-600 hover:text-red-700">
                    support@klaq.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+19155446955" className="text-red-600 hover:text-red-700">
                    (915) 544-6955
                  </a>
                </p>
                <p>
                  <strong>Business Hours:</strong> Monday - Friday, 8 AM - 5 PM MT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
