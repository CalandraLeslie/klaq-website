import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chuck Armstrong - Loudwire Nights Host | KLAQ 95.5 FM',
  description: 'Meet Chuck Armstrong, host of Loudwire Nights on KLAQ 95.5 FM. Heavy metal and hard rock programming every weeknight.',
  keywords: 'Chuck Armstrong, KLAQ DJ, Loudwire Nights, heavy metal, hard rock host',
  openGraph: {
    title: 'Chuck Armstrong - Loudwire Nights Host | KLAQ 95.5 FM',
    description: 'Meet Chuck Armstrong, host of Loudwire Nights on KLAQ 95.5 FM.',
    type: 'website',
    url: 'https://klaq.com/djs/chuck-armstrong',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function ChuckArmstrongPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Chuck Armstrong
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-red-200">
                Loudwire Nights Host
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span>Weeknights 7:00 PM - 12:00 AM</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Heavy Metal Authority</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src="/images/djs/chuck-armstrong.jpg"
                  alt="Chuck Armstrong"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">METAL</span>
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
            <h2 className="text-3xl font-bold text-white mb-6">
              About Chuck Armstrong
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Chuck Armstrong is the commanding voice behind Loudwire Nights, KLAQ's premier 
                heavy metal and hard rock programming. With an encyclopedic knowledge of metal 
                music and an authentic passion for the heaviest sounds on earth, Chuck delivers 
                the most intense radio experience in El Paso every weeknight.
              </p>
              <p>
                As a lifelong metalhead and experienced radio professional, Chuck understands 
                the culture, history, and power of heavy music like few others. His deep 
                appreciation for everything from classic metal pioneers to the latest extreme 
                metal releases makes him the perfect guide through the heavy music landscape.
              </p>
              <p>
                Chuck's approach to metal radio is both knowledgeable and accessible. Whether 
                he's spinning a Black Sabbath classic or introducing listeners to an underground 
                death metal band, he provides the context and enthusiasm that helps both veteran 
                metalheads and newcomers appreciate the artistry and power of heavy music.
              </p>
              <p>
                Beyond the microphone, Chuck is deeply connected to the metal community, 
                attending concerts, supporting local metal bands, and staying current with 
                the ever-evolving heavy music scene. His genuine love for the music translates 
                into programming that metalheads can trust and respect.
              </p>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-red-400">Show:</span>
                <p className="text-gray-300">Loudwire Nights</p>
              </div>
              <div>
                <span className="font-semibold text-red-400">Time:</span>
                <p className="text-gray-300">Weeknights 7:00 PM - 12:00 AM</p>
              </div>
              <div>
                <span className="font-semibold text-red-400">Specialty:</span>
                <p className="text-gray-300">Heavy Metal & Hard Rock</p>
              </div>
              <div>
                <span className="font-semibold text-red-400">Experience:</span>
                <p className="text-gray-300">Metal Music Expert</p>
              </div>
              <div>
                <span className="font-semibold text-red-400">Style:</span>
                <p className="text-gray-300">Authentic & Intense</p>
              </div>
            </div>
            <Link
              href="/shows/loudwire-nights"
              className="mt-6 w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🔥</span>
              Learn About Loudwire Nights
            </Link>
          </div>
        </div>
      </div>

      {/* Metal Expertise */}
      <div className="bg-black/40 backdrop-blur-sm border border-red-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Metal Music Mastery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-gray-900/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔥</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Classic Metal</h3>
              <p className="text-gray-400">Deep knowledge of metal's founding fathers and legendary albums</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/20 to-black/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Modern Metal</h3>
              <p className="text-gray-400">Current with today's metal scene and emerging subgenres</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-gray-900/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💀</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Extreme Metal</h3>
              <p className="text-gray-400">Expert in death, black, and extreme metal subgenres</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/20 to-black/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎸</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Technical Mastery</h3>
              <p className="text-gray-400">Appreciation for musical complexity and technical skill</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-gray-900/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Global Scene</h3>
              <p className="text-gray-400">Knowledge of international metal scenes and cultures</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/20 to-black/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Metal History</h3>
              <p className="text-gray-400">Deep understanding of metal's evolution and influences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programming Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Heavy Music Philosophy
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                "Metal is more than just music – it's a way of life, a community, and an art form 
                that deserves respect and understanding," Chuck explains. His programming reflects 
                this philosophy, treating heavy music with the reverence and expertise it deserves.
              </p>
              <p>
                Chuck believes in the power of heavy music to inspire, motivate, and unite people. 
                Whether he's playing a crushing death metal track or a melodic power metal anthem, 
                he understands the emotional and cultural significance of each song.
              </p>
              <p>
                His goal is to create an authentic metal experience that both educates and 
                entertains, introducing listeners to new bands while honoring the classics that 
                built the foundation of heavy music.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900/20 to-gray-900/20 border border-red-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Metal Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white">Authenticity</h4>
                  <p className="text-gray-400">Genuine passion and respect for metal culture</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white">Education</h4>
                  <p className="text-gray-400">Teaching listeners about metal history and culture</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white">Discovery</h4>
                  <p className="text-gray-400">Introducing new and underground metal bands</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white">Community</h4>
                  <p className="text-gray-400">Building connections within the metal community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Favorite Metal Bands */}
      <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 border-t border-red-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Chuck's Essential Metal Artists
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Black Sabbath', 'Metallica', 'Iron Maiden', 'Judas Priest',
              'Slayer', 'Megadeth', 'Pantera', 'Tool', 'Opeth', 'Mastodon',
              'Gojira', 'Lamb of God', 'Amon Amarth', 'Children of Bodom',
              'In Flames', 'Arch Enemy', 'Testament', 'Exodus', 'Death Angel', 'Machine Head'
            ].map((artist, index) => (
              <div
                key={artist}
                className="text-center p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-200 border border-red-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {artist.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-300">{artist}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-gradient-to-r from-red-600 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the Metal Brotherhood
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Experience the heaviest show on KLAQ with Chuck Armstrong
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🔥</span>
              Listen to Loudwire Nights
            </Link>
            <a
              href="tel:+19155446955"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Request Metal
            </a>
            <Link
              href="/news/rock-news"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📰</span>
              Metal News
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
