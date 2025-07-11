import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Request a Song | KLAQ 95.5 FM',
  description: 'Request your favorite rock songs on KLAQ 95.5 FM. Submit song requests online or call the studio directly.',
  keywords: 'song request, KLAQ, rock music, request line, El Paso radio',
  openGraph: {
    title: 'Request a Song | KLAQ 95.5 FM',
    description: 'Request your favorite rock songs on KLAQ 95.5 FM. Submit requests online or call us.',
    type: 'website',
    url: 'https://klaq.com/listen/request',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function SongRequestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-gray-50 to-black/5">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-red-200 to-gray-200 bg-clip-text text-transparent">
              Request a Song
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-200">
              Tell Us What You Want to Hear on KLAQ 95.5 FM
            </p>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">We're Listening</span>
            </div>
          </div>
        </div>
      </div>

      {/* Request Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How to Request Your Favorite Songs
          </h2>
          <p className="text-lg text-gray-600">
            Choose your preferred method to request songs on El Paso's Rock Station
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Call Request */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Call the Request Line</h3>
              <p className="text-gray-600 mb-6">
                Call our request line and speak directly with our on-air personality. 
                The fastest way to get your song on the air!
              </p>
              <a
                href="tel:+19155446955"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 mb-4"
              >
                <span className="mr-2">📞</span>
                Call (915) 544-6955
              </a>
              <div className="text-sm text-gray-500">
                Available during live shows
              </div>
            </div>
          </div>

          {/* Online Request */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Online</h3>
              <p className="text-gray-600 mb-6">
                Use our online form to submit your song request. Include details about 
                the artist and song you want to hear.
              </p>
              <Link
                href="/request"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 mb-4"
              >
                <span className="mr-2">💻</span>
                Submit Request Form
              </Link>
              <div className="text-sm text-gray-500">
                Available 24/7
              </div>
            </div>
          </div>
        </div>

        {/* Request Guidelines */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Song Request Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-green-600">
                ✓ What We Love to Play
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>• Classic rock hits from the 70s, 80s, and 90s</p>
                <p>• Modern rock and alternative rock</p>
                <p>• Hard rock and metal favorites</p>
                <p>• Deep cuts from popular rock artists</p>
                <p>• Songs that fit our rock format</p>
                <p>• Requests during appropriate time slots</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-red-600">
                ✗ What We Can't Play
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>• Songs with explicit content during daytime hours</p>
                <p>• Music that doesn't fit our rock format</p>
                <p>• Songs played in the last 2 hours</p>
                <p>• Requests during commercial breaks</p>
                <p>• Songs not in our music library</p>
                <p>• Duplicate requests from the same caller</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Requests */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Most Requested Songs This Week
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { artist: 'Metallica', song: 'Enter Sandman', requests: 47 },
              { artist: 'Led Zeppelin', song: 'Black Dog', requests: 42 },
              { artist: 'AC/DC', song: 'Back in Black', requests: 38 },
              { artist: 'Guns N\' Roses', song: 'Sweet Child O\' Mine', requests: 35 },
              { artist: 'Queen', song: 'Bohemian Rhapsody', requests: 33 },
              { artist: 'Pink Floyd', song: 'Comfortably Numb', requests: 31 },
              { artist: 'The Rolling Stones', song: 'Paint It Black', requests: 29 },
              { artist: 'Nirvana', song: 'Smells Like Teen Spirit', requests: 27 },
              { artist: 'Pearl Jam', song: 'Alive', requests: 25 }
            ].map((song, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-red-600">#{index + 1}</span>
                  <span className="text-sm text-gray-500">{song.requests} requests</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{song.song}</h3>
                <p className="text-gray-600 text-sm">{song.artist}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Request Tips */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tips for Getting Your Request Played
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Best Times to Request</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>Mornings (6-10 AM):</strong> During the Buzz Adams Morning Show</p>
                <p>• <strong>Afternoons (2-6 PM):</strong> Peak listening hours</p>
                <p>• <strong>Evenings (6-10 PM):</strong> Drive time programming</p>
                <p>• <strong>Weekends:</strong> More flexibility for requests</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">How to Make Your Request Stand Out</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Be specific with artist and song title</p>
                <p>• Mention why the song is meaningful to you</p>
                <p>• Request during slower periods for better chances</p>
                <p>• Be patient - we try to honor all appropriate requests</p>
                <p>• Follow us on social media for request opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Requests */}
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Follow Us for More Request Opportunities
          </h2>
          <p className="text-xl mb-8 text-red-100">
            We often take requests through our social media channels during special shows and events
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <span className="mr-2">📘</span>
              Facebook
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <span className="mr-2">🐦</span>
              Twitter
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <span className="mr-2">📷</span>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
