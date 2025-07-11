import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Glenn Garza (Dubba G) - Midday Host | KLAQ 95.5 FM',
  description: 'Meet Glenn Garza, known as Dubba G, KLAQ\'s midday rock host. Keeping the energy high with the best rock music.',
  keywords: 'Glenn Garza, Dubba G, KLAQ DJ, midday host, El Paso radio, rock music',
  openGraph: {
    title: 'Glenn Garza (Dubba G) - Midday Host | KLAQ 95.5 FM',
    description: 'Meet Glenn Garza, known as Dubba G, KLAQ\'s midday rock host.',
    type: 'website',
    url: 'https://klaq.com/djs/glenn-garza',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function GlennGarzaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 via-blue-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
                Glenn Garza
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-green-200">
                "Dubba G" - Midday Host
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Midday Rock Power</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Classic & Modern Rock</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src="/images/djs/glenn-garza.jpg"
                  alt="Glenn Garza (Dubba G)"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DUBBA G</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Glenn "Dubba G" Garza
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Glenn Garza, better known to KLAQ listeners as "Dubba G," is the driving force 
                behind KLAQ's midday programming. With his distinctive voice and extensive rock 
                music knowledge, Glenn keeps the energy high and the music flowing during the 
                crucial midday hours when listeners need that extra boost.
              </p>
              <p>
                A true student of rock music, Glenn has spent years building his expertise across 
                all eras and subgenres of rock. From classic rock anthems to modern alternative 
                hits, he has an innate ability to select the perfect song for any moment, keeping 
                listeners engaged and energized throughout their day.
              </p>
              <p>
                Glenn's radio style is both professional and personable. He understands that 
                midday listeners often need motivation, whether they're at work, running errands, 
                or just taking a break from their busy lives. His programming reflects this 
                understanding, combining high-energy rock with just the right amount of commentary 
                and interaction.
              </p>
              <p>
                Beyond his on-air work, Glenn is passionate about supporting the local music scene 
                and introducing KLAQ listeners to both emerging artists and forgotten gems from 
                rock's rich history. His dedication to the music and the station has made him 
                a respected voice in El Paso radio.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900">On-Air Name:</span>
                <p className="text-gray-600">Dubba G</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Shift:</span>
                <p className="text-gray-600">Midday Programming</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Specialty:</span>
                <p className="text-gray-600">Rock Music Curation</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Style:</span>
                <p className="text-gray-600">High-Energy Professional</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Focus:</span>
                <p className="text-gray-600">Music & Listener Engagement</p>
              </div>
            </div>
            <Link
              href="/listen"
              className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🎵</span>
              Listen Live
            </Link>
          </div>
        </div>
      </div>

      {/* Music Expertise */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Rock Music Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Classic Rock</h3>
              <p className="text-gray-600">Deep knowledge of rock's golden era and legendary artists</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modern Rock</h3>
              <p className="text-gray-600">Current with today's rock and alternative music scene</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💿</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Deep Cuts</h3>
              <p className="text-gray-600">Uncovers hidden gems and album tracks listeners love</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Perfect Timing</h3>
              <p className="text-gray-600">Knows exactly when to play the right song</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Radio Flow</h3>
              <p className="text-gray-600">Creates seamless listening experiences</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Support</h3>
              <p className="text-gray-600">Champions El Paso and regional rock artists</p>
            </div>
          </div>
        </div>
      </div>

      {/* Midday Programming */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Midday Rock Programming
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Glenn understands that midday radio serves a unique purpose in listeners' lives. 
                Whether people are at work, taking lunch breaks, or running errands, they need 
                music that energizes and motivates them to power through their day.
              </p>
              <p>
                His programming philosophy centers on creating the perfect soundtrack for 
                productivity and positivity. Glenn carefully balances familiar favorites with 
                exciting discoveries, ensuring that every hour offers something to keep 
                listeners engaged and entertained.
              </p>
              <p>
                "The midday shift is all about momentum," Glenn explains. "People tune in 
                looking for that extra push to get through their day, and I want to make 
                sure the music I play gives them exactly that energy they need."
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Programming Elements</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Energy Flow</h4>
                  <p className="text-gray-600">Carefully crafted music sets to maintain energy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Music Discovery</h4>
                  <p className="text-gray-600">Introducing listeners to new and classic tracks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Listener Interaction</h4>
                  <p className="text-gray-600">Engaging with the KLAQ community throughout the day</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Delivery</h4>
                  <p className="text-gray-600">Smooth, informative presentation style</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Favorite Artists */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Glenn's Go-To Artists
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Led Zeppelin', 'AC/DC', 'Rush', 'Pearl Jam',
              'Foo Fighters', 'Red Hot Chili Peppers', 'Stone Temple Pilots', 'Soundgarden',
              'Alice in Chains', 'Metallica', 'Black Sabbath', 'Queen',
              'The Who', 'Pink Floyd', 'Nirvana', 'Tool'
            ].map((artist, index) => (
              <div
                key={artist}
                className="text-center p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {artist.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900">{artist}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Behind the Scenes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Behind the Microphone
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Daily Preparation</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Reviews new music releases and industry news</p>
                <p>• Plans music flow and energy progression</p>
                <p>• Prepares interesting facts about artists and songs</p>
                <p>• Coordinates with other KLAQ programming</p>
                <p>• Stays connected with listener feedback and requests</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Professional Approach</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Maintains consistent energy and professionalism</p>
                <p>• Balances music with appropriate commentary</p>
                <p>• Supports KLAQ's community involvement</p>
                <p>• Collaborates with other station personalities</p>
                <p>• Continuously updates music knowledge and trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rock Your Midday with Dubba G
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get the energy you need to power through your day with the best rock music
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎵</span>
              Listen Live
            </Link>
            <a
              href="tel:+19155446955"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Request a Song
            </a>
            <Link
              href="/shows"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📻</span>
              Show Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
