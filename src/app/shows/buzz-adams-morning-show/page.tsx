import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Buzz Adams Morning Show | KLAQ 95.5 FM',
  description: 'Start your day with The Buzz Adams Morning Show on KLAQ 95.5 FM. Rock music, entertainment, and El Paso\'s favorite morning crew.',
  keywords: 'Buzz Adams, morning show, KLAQ, El Paso radio, rock radio, morning radio',
  openGraph: {
    title: 'The Buzz Adams Morning Show | KLAQ 95.5 FM',
    description: 'Start your day with The Buzz Adams Morning Show on KLAQ 95.5 FM.',
    type: 'website',
    url: 'https://klaq.com/shows/buzz-adams-morning-show',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function BuzzAdamsShow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 via-red-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                The Buzz Adams Morning Show
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-orange-200">
                El Paso's #1 Morning Rock Show
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Monday - Friday, 6:00 AM - 10:00 AM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Live on KLAQ 95.5 FM</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src="/images/djs/buzz-adams.jpg"
                  alt="Buzz Adams"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About The Buzz Adams Morning Show
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Start your day right with The Buzz Adams Morning Show, El Paso's premier morning 
                rock radio experience. Buzz Adams brings you the perfect blend of classic rock hits, 
                the latest rock news, and the most entertaining morning show segments in the Southwest.
              </p>
              <p>
                With over 15 years of experience in rock radio, Buzz knows how to get your morning 
                started with energy, laughs, and the music you want to hear. From breaking rock news 
                to hilarious bits and celebrity interviews, the show delivers everything you need to 
                start your day on the right note.
              </p>
              <p>
                Whether you're getting ready for work, stuck in traffic, or just need some great rock 
                music to energize your morning, The Buzz Adams Morning Show is your daily soundtrack 
                for a better day ahead.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Show Information</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-900">Time:</span>
                <p className="text-gray-600">Monday - Friday, 6:00 AM - 10:00 AM</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Host:</span>
                <p className="text-gray-600">Buzz Adams</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Format:</span>
                <p className="text-gray-600">Rock Music & Entertainment</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Phone:</span>
                <p className="text-gray-600">
                  <a href="tel:+19155446955" className="text-red-600 hover:text-red-700">
                    (915) 544-6955
                  </a>
                </p>
              </div>
            </div>
            <Link
              href="/listen"
              className="mt-6 w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🎵</span>
              Listen Live Now
            </Link>
          </div>
        </div>

        {/* Show Segments */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Regular Show Segments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">☀️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Morning Wake-Up Call</h4>
              <p className="text-gray-600 text-sm">
                High-energy rock hits to get your day started right
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-100 to-gray-100 rounded-xl">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Rock News Update</h4>
              <p className="text-gray-600 text-sm">
                Latest news from the world of rock and metal music
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-orange-100 rounded-xl">
              <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎙️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Celebrity Interviews</h4>
              <p className="text-gray-600 text-sm">
                Exclusive interviews with rock stars and celebrities
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">😂</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Comedy Bits</h4>
              <p className="text-gray-600 text-sm">
                Hilarious segments and funny calls to brighten your morning
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-100 to-gray-100 rounded-xl">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Triple Shot Rock</h4>
              <p className="text-gray-600 text-sm">
                Three songs in a row from the same artist every hour
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-orange-100 rounded-xl">
              <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Listener Call-Ins</h4>
              <p className="text-gray-600 text-sm">
                Interactive segments with El Paso listeners
              </p>
            </div>
          </div>
        </div>

        {/* Meet Buzz Adams */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Meet Buzz Adams
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Buzz Adams is a veteran radio personality with over 15 years of experience 
                entertaining morning listeners across the Southwest. Born and raised in Texas, 
                Buzz has an authentic connection to the culture and music that defines the region.
              </p>
              <p>
                Before joining KLAQ, Buzz worked at several major market rock stations, developing 
                his signature style of high-energy entertainment mixed with genuine personality. 
                He's interviewed some of the biggest names in rock music and has won multiple 
                awards for his morning show format.
              </p>
              <p>
                When he's not on the air, Buzz enjoys attending local concerts, supporting El Paso 
                businesses, and spending time with his family. He's passionate about the local music 
                scene and regularly promotes up-and-coming bands from the area.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">15+ years in rock radio</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Favorite Bands</h4>
                  <p className="text-gray-600">Metallica, Led Zeppelin, Foo Fighters</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hobbies</h4>
                  <p className="text-gray-600">Live concerts, guitar, local music scene</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Awards</h4>
                  <p className="text-gray-600">Multiple regional radio awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect with the Show */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Connect with The Buzz Adams Morning Show
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Call the Show</h3>
              <p className="text-gray-600 mb-4">
                Call in with your comments, questions, or just to say hello
              </p>
              <a
                href="tel:+19155446955"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <span className="mr-2">📞</span>
                (915) 544-6955
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Request Songs</h3>
              <p className="text-gray-600 mb-4">
                Let Buzz know what you want to hear on the morning show
              </p>
              <Link
                href="/listen/request"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
              >
                <span className="mr-2">🎵</span>
                Request a Song
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Social Media</h3>
              <p className="text-gray-600 mb-4">
                Follow the show on social media for behind-the-scenes content
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
