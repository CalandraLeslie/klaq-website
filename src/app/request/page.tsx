export default function RequestPage() {
  return (
    <div className="page-container bg-gray-50 overflow-auto">
      <div className="container-responsive py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Request Your Song
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Tell us what you want to hear! Submit your request below or call our request line.
            </p>
          </div>
          
          {/* Quick Request Line CTA */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Quick Request</h2>
            <p className="text-lg mb-3">Call now and talk to a DJ!</p>
            <a 
              href="tel:915-544-5527" 
              className="inline-flex items-center text-3xl font-black tracking-wider hover:text-red-200 transition-colors"
            >
              (915) 544-KLAQ
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Request Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Online Request</h2>
                <p className="text-gray-600">Fill out the form below to request your favorite song</p>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="song" className="block text-sm font-semibold text-gray-900 mb-2">
                    Song Title *
                  </label>
                  <input
                    type="text"
                    id="song"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter the song title"
                    required
                    aria-describedby="song-help"
                  />
                  <p id="song-help" className="text-xs text-gray-500 mt-1">What song would you like to hear?</p>
                </div>
                
                <div>
                  <label htmlFor="artist" className="block text-sm font-semibold text-gray-900 mb-2">
                    Artist *
                  </label>
                  <input
                    type="text"
                    id="artist"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter the artist name"
                    required
                    aria-describedby="artist-help"
                  />
                  <p id="artist-help" className="text-xs text-gray-500 mt-1">Who performs this song?</p>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Your first name"
                    aria-describedby="name-help"
                  />
                  <p id="name-help" className="text-xs text-gray-500 mt-1">We'll mention your name on air if you'd like</p>
                </div>
                
                <div>
                  <label htmlFor="dedication" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message or Dedication (Optional)
                  </label>
                  <textarea
                    id="dedication"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Any special message or dedication?"
                    aria-describedby="dedication-help"
                  />
                  <p id="dedication-help" className="text-xs text-gray-500 mt-1">Share a message or dedicate this song to someone</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="on-air"
                    className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="on-air" className="text-sm text-gray-700 leading-5">
                    I'd like my name and message read on-air
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Submit Request
                </button>
              </form>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Request Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keep requests family-friendly</li>
                  <li>• We play rock music from all decades</li>
                  <li>• Requests help us know what you love</li>
                  <li>• Be patient - we get lots of requests!</li>
                </ul>
              </div>
            </div>

            {/* Contact & Info */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Request</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Call the Studio</h3>
                      <p className="text-gray-600 mb-2">Talk directly to our DJs during live shows</p>
                      <a href="tel:915-544-5527" className="text-red-600 font-semibold hover:text-red-700">
                        (915) 544-KLAQ
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 mb-2">Send requests anytime, day or night</p>
                      <a href="mailto:requests@klaq.com" className="text-blue-600 font-semibold hover:text-blue-700">
                        requests@klaq.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Social Media</h3>
                      <p className="text-gray-600 mb-2">Hit us up on our social channels</p>
                      <div className="flex space-x-4">
                        <a href="https://twitter.com/KLAQ" className="text-green-600 font-semibold hover:text-green-700">
                          Twitter
                        </a>
                        <a href="https://www.facebook.com/KLAQRocks" className="text-green-600 font-semibold hover:text-green-700">
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Requests */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Requests</h2>
                <div className="space-y-4">
                  {[
                    { song: 'Bohemian Rhapsody', artist: 'Queen' },
                    { song: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses' },
                    { song: 'Enter Sandman', artist: 'Metallica' },
                    { song: 'Back in Black', artist: 'AC/DC' },
                  ].map((track, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-semibold text-gray-900">{track.song}</p>
                        <p className="text-sm text-gray-600">{track.artist}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
