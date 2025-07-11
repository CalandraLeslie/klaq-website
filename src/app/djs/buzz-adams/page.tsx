import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Buzz Adams - Morning Show Host | KLAQ 95.5 FM',
  description: 'Meet Buzz Adams, host of KLAQ\'s #1 Morning Show. Wake up with El Paso\'s favorite morning radio personality weekdays 6-10 AM.',
  keywords: 'Buzz Adams, KLAQ DJ, morning show host, El Paso radio, rock radio host',
  openGraph: {
    title: 'Buzz Adams - Morning Show Host | KLAQ 95.5 FM',
    description: 'Meet Buzz Adams, host of KLAQ\'s #1 Morning Show.',
    type: 'website',
    url: 'https://klaq.com/djs/buzz-adams',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function BuzzAdamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 via-red-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                Buzz Adams
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-orange-200">
                Morning Show Host
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Weekdays 6:00 AM - 10:00 AM</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>El Paso's #1 Morning Show</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src="/images/djs/buzz-adams.jpg"
                  alt="Buzz Adams"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">LIVE</span>
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
              About Buzz Adams
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Buzz Adams has been waking up El Paso for over 15 years as the host of KLAQ's 
                flagship morning show. Born and raised in Texas, Buzz brings an authentic voice 
                and genuine passion for rock music that resonates with listeners across the 
                Southwest.
              </p>
              <p>
                Starting his radio career in college, Buzz quickly discovered his talent for 
                connecting with audiences through humor, music knowledge, and relatable 
                storytelling. His journey through various markets led him to El Paso, where 
                he found his perfect home at KLAQ 95.5 FM.
              </p>
              <p>
                Known for his quick wit, infectious energy, and deep knowledge of rock music, 
                Buzz has built a loyal following of listeners who tune in daily for the perfect 
                blend of classic rock hits, current favorites, and entertaining morning radio 
                that gets their day started right.
              </p>
              <p>
                Beyond the microphone, Buzz is deeply involved in the El Paso community, 
                supporting local charities, attending concerts, and championing local businesses. 
                He's interviewed countless rock legends and continues to be a passionate advocate 
                for both classic and contemporary rock music.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900">Show:</span>
                <p className="text-gray-600">The Buzz Adams Morning Show</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Time:</span>
                <p className="text-gray-600">Weekdays 6:00 AM - 10:00 AM</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Experience:</span>
                <p className="text-gray-600">15+ years in radio</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Hometown:</span>
                <p className="text-gray-600">Texas</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Favorite Bands:</span>
                <p className="text-gray-600">Metallica, Led Zeppelin, Foo Fighters</p>
              </div>
            </div>
            <Link
              href="/shows/buzz-adams-morning-show"
              className="mt-6 w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🎵</span>
              Learn About the Show
            </Link>
          </div>
        </div>
      </div>

      {/* Career Highlights */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Career Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Radio Awards</h3>
              <p className="text-gray-600">Multiple regional radio awards for outstanding morning show programming</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Celebrity Interviews</h3>
              <p className="text-gray-600">Exclusive interviews with major rock artists and celebrities</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Concert Hosting</h3>
              <p className="text-gray-600">Host and MC for major rock concerts and festivals in El Paso</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Work</h3>
              <p className="text-gray-600">Active supporter of local charities and community events</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Market Success</h3>
              <p className="text-gray-600">#1 rated morning show in El Paso rock radio</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Listener Loyalty</h3>
              <p className="text-gray-600">Devoted fanbase spanning multiple generations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Favorite Music */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Buzz's Favorite Artists
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                As a true rock aficionado, Buzz has deep appreciation for both classic rock 
                legends and contemporary artists. His musical knowledge spans decades and 
                subgenres, making him the perfect guide for El Paso's rock journey.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  'Metallica', 'Led Zeppelin', 'Foo Fighters', 'Pearl Jam',
                  'AC/DC', 'Queen', 'Black Sabbath', 'The Beatles',
                  'Rush', 'Pink Floyd', 'Guns N\' Roses', 'Van Halen'
                ].map((artist) => (
                  <div key={artist} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-900 font-medium">{artist}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Interests</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Live Music</h4>
                  <p className="text-gray-600">Regular concert-goer and festival attendee</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Guitar</h4>
                  <p className="text-gray-600">Plays guitar as a hobby</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Local Scene</h4>
                  <p className="text-gray-600">Supporter of El Paso musicians</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Family Time</h4>
                  <p className="text-gray-600">Enjoys spending time with loved ones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Wake Up with Buzz Adams
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Start your day right with El Paso's favorite morning show
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎵</span>
              Listen Live Now
            </Link>
            <a
              href="tel:+19155446955"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Call the Show
            </a>
            <Link
              href="/listen/request"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎤</span>
              Request a Song
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
