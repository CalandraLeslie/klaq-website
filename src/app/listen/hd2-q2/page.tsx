import type { Metadata } from 'next'
import Q2Player from '@/components/Q2Player'

export const metadata: Metadata = {
  title: 'Q2 - The Alternative - HD2 | KLAQ 95.5 FM',
  description: 'Listen to Q2 - The Alternative on KLAQ HD2. The best alternative rock music 24/7 with no commercials. Stream live now.',
  keywords: 'Q2, alternative rock, HD2, KLAQ, streaming, alternative music, rock radio, El Paso',
  openGraph: {
    title: 'Q2 - The Alternative - HD2 | KLAQ 95.5 FM',
    description: 'Listen to Q2 - The Alternative on KLAQ HD2. The best alternative rock music 24/7 with no commercials.',
    type: 'website',
    url: 'https://klaq.com/listen/hd2-q2',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function Q2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Q2 - The Alternative
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200">
              KLAQ HD2 - Pure Alternative Rock, No Commercials
            </p>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Broadcasting Live from El Paso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Q2 Player Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <Q2Player />
        </div>
      </div>

      {/* About Q2 Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Q2 - The Alternative
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Q2 - The Alternative is KLAQ's HD2 digital channel, delivering the best in alternative rock 
                music 24 hours a day, 7 days a week. Our carefully curated playlist features both classic 
                alternative hits and today's cutting-edge alternative rock.
              </p>
              <p>
                From grunge pioneers like Nirvana and Pearl Jam to modern alternative acts like Arctic Monkeys 
                and The Killers, Q2 provides the soundtrack for alternative music lovers in El Paso and beyond.
              </p>
              <p>
                Best of all, Q2 streams commercial-free, giving you uninterrupted alternative rock whenever 
                you need it. Whether you're at work, at home, or on the go, Q2 is your alternative rock companion.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Q2?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Commercial-Free Streaming</h4>
                  <p className="text-gray-600">Enjoy uninterrupted alternative rock all day long</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Curated Playlists</h4>
                  <p className="text-gray-600">Hand-picked alternative tracks from every era</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">HD Quality Audio</h4>
                  <p className="text-gray-600">Crystal clear digital sound quality</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                  <p className="text-gray-600">Stream anywhere, anytime on any device</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Artists Section */}
      <div className="bg-white/50 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Alternative Artists on Q2
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Nirvana', 'Pearl Jam', 'Radiohead', 'The Killers', 'Arctic Monkeys', 'Foo Fighters',
              'Red Hot Chili Peppers', 'Smashing Pumpkins', 'Stone Temple Pilots', 'Alice in Chains',
              'Soundgarden', 'Bush', 'Live', 'Collective Soul', 'Filter', 'Seven Mary Three'
            ].map((artist, index) => (
              <div
                key={artist}
                className="text-center p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">
                    {artist.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900">{artist}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Listen Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How to Listen to Q2
          </h2>
          <p className="text-lg text-gray-600">
            Multiple ways to enjoy Q2 - The Alternative wherever you are
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/60 rounded-2xl hover:bg-white/80 transition-all duration-200">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🎵</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Online Streaming</h3>
            <p className="text-gray-600">
              Listen live on this page or through our mobile-friendly web player. 
              Works on any device with an internet connection.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/60 rounded-2xl hover:bg-white/80 transition-all duration-200">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-slate-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">📻</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">HD Radio</h3>
            <p className="text-gray-600">
              Tune your HD Radio to 95.5 HD2 for crystal clear digital audio quality. 
              Available throughout the El Paso metro area.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white/60 rounded-2xl hover:bg-white/80 transition-all duration-200">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Apps</h3>
            <p className="text-gray-600">
              Download radio apps that support HD Radio streaming or use our web player 
              directly in your mobile browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
