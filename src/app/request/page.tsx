import { Metadata } from 'next'
import Link from 'next/link'
import { Music, Phone, Mail, MessageCircle, Send, Clock, Heart, Mic, Radio } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Request Your Favorite Rock Songs | KLAQ 95.5 FM',
  description: 'Request your favorite rock songs on KLAQ 95.5 FM. Call our request line, use our online form, or hit us up on social media.',
  keywords: 'KLAQ song request, rock music request, El Paso radio request, 95.5 FM request line',
}

export default function RequestPage() {
  const recentRequests = [
    { song: 'Enter Sandman', artist: 'Metallica', time: '2 minutes ago' },
    { song: 'Back in Black', artist: 'AC/DC', time: '5 minutes ago' },
    { song: 'Don\'t Stop Believin\'', artist: 'Journey', time: '8 minutes ago' },
    { song: 'Pour Some Sugar On Me', artist: 'Def Leppard', time: '12 minutes ago' },
    { song: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', time: '15 minutes ago' }
  ]

  const popularRequests = [
    { song: 'Bohemian Rhapsody', artist: 'Queen', count: '47 requests this week' },
    { song: 'Stairway to Heaven', artist: 'Led Zeppelin', count: '42 requests this week' },
    { song: 'Free Bird', artist: 'Lynyrd Skynyrd', count: '38 requests this week' },
    { song: 'Hotel California', artist: 'Eagles', count: '35 requests this week' },
    { song: 'Thunderstruck', artist: 'AC/DC', count: '33 requests this week' }
  ]

  return (
    <main className="page-container bg-gray-50">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container-responsive text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-800 p-4 rounded-full">
              <Music className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Request Your <span className="text-red-200">Rock</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mt-4 max-w-3xl mx-auto">
            Want to hear your favorite song on KLAQ? Send us your request and help shape the sound of El Paso's Best Rock!
          </p>
          <div className="flex items-center justify-center space-x-4 text-lg mt-8">
            <Radio className="w-6 h-6 text-red-200" />
            <span>Request Line: (915) 544-KLAQ</span>
          </div>
        </div>
      </section>

      {/* Request Form & Activity */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Request Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Mic className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold">Submit Your Request</h2>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="song" className="block text-sm font-medium text-gray-700 mb-2">
                    Song Title *
                  </label>
                  <input
                    type="text"
                    id="song"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter song title"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="artist" className="block text-sm font-medium text-gray-700 mb-2">
                    Artist *
                  </label>
                  <input
                    type="text"
                    id="artist"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter artist name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label htmlFor="dedication" className="block text-sm font-medium text-gray-700 mb-2">
                    Dedication (Optional)
                  </label>
                  <textarea
                    id="dedication"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Want to dedicate this song to someone special? Let us know!"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="on-air"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="on-air" className="ml-2 block text-sm text-gray-700">
                    I would like my name and dedication read on-air
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Request
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Request Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keep requests appropriate for all audiences</li>
                  <li>• We play rock music from the 70s, 80s, 90s, and today</li>
                  <li>• Requests are not guaranteed to be played</li>
                  <li>• No explicit content or profanity</li>
                  <li>• Have fun and rock on! 🤘</li>
                </ul>
              </div>
            </div>

            {/* Recent & Popular Requests */}
            <div className="space-y-8">
              {/* Recent Requests */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold">Recent Requests</h2>
                </div>
                
                <div className="space-y-4">
                  {recentRequests.map((request, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <h3 className="font-semibold text-gray-900">{request.song}</h3>
                        <p className="text-gray-600">{request.artist}</p>
                      </div>
                      <span className="text-sm text-gray-500">{request.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Requests */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold">Most Requested</h2>
                </div>
                
                <div className="space-y-4">
                  {popularRequests.map((request, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <h3 className="font-semibold text-gray-900">{request.song}</h3>
                        <p className="text-gray-600">{request.artist}</p>
                      </div>
                      <span className="text-sm text-red-500 font-medium">{request.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Can't Wait?</h2>
                <p className="text-lg mb-4">Call our request line right now!</p>
                <div className="text-3xl font-bold mb-4">(915) 544-KLAQ</div>
                <p className="text-sm opacity-90">
                  Our DJs are standing by to take your requests during live shows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Request Methods */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-center mb-12">More Ways to Request</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call the Station</h3>
              <p className="text-gray-600 mb-4">
                Call our request line and talk directly to our DJs
              </p>
              <a href="tel:915-544-KLAQ" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-colors">
                Call (915) 544-KLAQ
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Send us your requests via email anytime
              </p>
              <a href="mailto:requests@klaq.com" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold inline-block transition-colors">
                Send Email
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media</h3>
              <p className="text-gray-600 mb-4">
                Hit us up on social media with your requests
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/KLAQ" className="text-red-600 hover:text-red-700 font-medium">Twitter</a>
                <a href="https://www.facebook.com/KLAQRocks" className="text-red-600 hover:text-red-700 font-medium">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
