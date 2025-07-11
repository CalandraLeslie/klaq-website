import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Loudwire Nights | KLAQ 95.5 FM',
  description: 'Loudwire Nights on KLAQ 95.5 FM. The ultimate heavy metal and hard rock experience every weeknight.',
  keywords: 'Loudwire Nights, heavy metal, hard rock, KLAQ, rock radio, evening show',
  openGraph: {
    title: 'Loudwire Nights | KLAQ 95.5 FM',
    description: 'Loudwire Nights on KLAQ 95.5 FM. The ultimate heavy metal and hard rock experience.',
    type: 'website',
    url: 'https://klaq.com/shows/loudwire-nights',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function LoudwireNightsShow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              LOUDWIRE NIGHTS
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-red-200">
              Heavy Metal. Hard Rock. Pure Power.
            </p>
            <div className="space-y-3 text-lg">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span>Monday - Friday, 7:00 PM - 12:00 AM</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span>The Heaviest Show on KLAQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">
              About Loudwire Nights
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Loudwire Nights brings you the heaviest, most intense rock and metal programming 
                on KLAQ 95.5 FM. From 7 PM to midnight every weeknight, prepare yourself for an 
                unrelenting assault of heavy metal, hard rock, and everything in between.
              </p>
              <p>
                This isn't just background music – Loudwire Nights is a complete heavy music 
                experience featuring the latest metal releases, classic heavy hits, underground 
                discoveries, and exclusive interviews with the biggest names in hard rock and metal.
              </p>
              <p>
                Whether you're a longtime metalhead or just discovering the power of heavy music, 
                Loudwire Nights delivers the intensity and authenticity that true rock fans demand. 
                Turn it up and let the metal take over your night.
              </p>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Show Information</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-red-400">Time:</span>
                <p className="text-gray-300">Monday - Friday, 7:00 PM - 12:00 AM</p>
              </div>
              <div>
                <span className="font-semibold text-red-400">Format:</span>
                <p className="text-gray-300">Heavy Metal & Hard Rock</p>
              </div>
              <div>
                <span className="font-semibold text-red-400">Content:</span>
                <p className="text-gray-300">Loudwire Syndicated Programming</p>
              </div>
              <div>
                <span className="font-semibold text-red-400">Phone:</span>
                <p className="text-gray-300">
                  <a href="tel:+19155446955" className="text-red-400 hover:text-red-300">
                    (915) 544-6955
                  </a>
                </p>
              </div>
            </div>
            <Link
              href="/listen"
              className="mt-6 w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🔥</span>
              Listen Live Now
            </Link>
          </div>
        </div>

        {/* Show Features */}
        <div className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            What to Expect on Loudwire Nights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-gray-900/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔥</span>
              </div>
              <h4 className="font-bold text-white mb-2">New Metal Releases</h4>
              <p className="text-gray-400 text-sm">
                The latest and heaviest new tracks from today's metal scene
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/20 to-black/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-white mb-2">Classic Heavy Hits</h4>
              <p className="text-gray-400 text-sm">
                Timeless metal and hard rock anthems that defined the genre
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-gray-900/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h4 className="font-bold text-white mb-2">Exclusive Interviews</h4>
              <p className="text-gray-400 text-sm">
                In-depth conversations with metal's biggest stars
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/20 to-black/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h4 className="font-bold text-white mb-2">Underground Discoveries</h4>
              <p className="text-gray-400 text-sm">
                Hidden gems and emerging bands from the metal underground
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-gray-900/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎸</span>
              </div>
              <h4 className="font-bold text-white mb-2">Guitar Showcases</h4>
              <p className="text-gray-400 text-sm">
                Featuring the most incredible guitar work in metal
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/20 to-black/20 rounded-xl border border-red-500/10">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💀</span>
              </div>
              <h4 className="font-bold text-white mb-2">Extreme Metal</h4>
              <p className="text-gray-400 text-sm">
                Death metal, black metal, and the most extreme sounds
              </p>
            </div>
          </div>
        </div>

        {/* About Loudwire */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              About Loudwire
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Loudwire is the world's premier destination for hard rock and heavy metal news, 
                reviews, and exclusive content. Since 2011, Loudwire has been the voice of the 
                metal community, bringing fans the latest breaking news, in-depth artist interviews, 
                and comprehensive coverage of the heavy music scene.
              </p>
              <p>
                Loudwire Nights brings that same level of expertise and passion to radio, delivering 
                carefully curated programming that showcases both established legends and emerging 
                talents in the metal world. The show combines Loudwire's deep industry knowledge 
                with the raw power of heavy music.
              </p>
              <p>
                With exclusive content, artist interviews, and access to the latest releases before 
                they hit mainstream radio, Loudwire Nights offers metal fans an authentic and 
                uncompromising heavy music experience.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900/20 to-gray-900/20 border border-red-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Heavy Music Stats</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white">Content Source</h4>
                  <p className="text-gray-400">Syndicated from Loudwire Network</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white">Music Focus</h4>
                  <p className="text-gray-400">Heavy Metal, Hard Rock, Extreme Metal</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white">Target Audience</h4>
                  <p className="text-gray-400">Metalheads & Hard Rock Fans</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-white">Special Features</h4>
                  <p className="text-gray-400">Exclusive interviews & premieres</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metal Genres Covered */}
        <div className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Metal Genres Featured on Loudwire Nights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Thrash Metal', 'Death Metal', 'Black Metal', 'Progressive Metal',
              'Power Metal', 'Doom Metal', 'Metalcore', 'Deathcore',
              'Nu Metal', 'Industrial Metal', 'Symphonic Metal', 'Folk Metal',
              'Groove Metal', 'Melodic Death Metal', 'Post-Metal', 'Sludge Metal',
              'Stoner Metal', 'Alternative Metal', 'Hard Rock', 'Heavy Metal',
              'Speed Metal', 'Gothic Metal', 'Viking Metal', 'Djent'
            ].map((genre, index) => (
              <div
                key={genre}
                className="text-center p-3 bg-gradient-to-br from-red-900/10 to-gray-900/10 rounded-lg hover:from-red-900/20 hover:to-gray-900/20 transition-all duration-200 border border-red-500/10"
              >
                <p className="text-sm font-medium text-gray-300">{genre}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Artists */}
        <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 border border-red-500/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Artists You'll Hear on Loudwire Nights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Metallica', 'Iron Maiden', 'Black Sabbath', 'Judas Priest',
              'Megadeth', 'Slayer', 'Pantera', 'Tool', 'System of a Down',
              'Avenged Sevenfold', 'Five Finger Death Punch', 'Disturbed',
              'Lamb of God', 'Mastodon', 'Gojira', 'Opeth', 'Amon Amarth',
              'Children of Bodom', 'In Flames', 'Arch Enemy', 'Testament',
              'Exodus', 'Death Angel', 'Machine Head'
            ].map((artist, index) => (
              <div
                key={artist}
                className="text-center p-4 bg-black/20 rounded-lg hover:bg-black/40 transition-all duration-200"
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

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-gray-800 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Experience the Power of Loudwire Nights
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold mb-4">Listen Live</h3>
              <p className="mb-4 text-red-100">
                Tune in every weeknight from 7 PM to midnight for the heaviest show on KLAQ
              </p>
              <Link
                href="/listen"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
              >
                <span className="mr-2">🔥</span>
                Listen Now
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Request Metal</h3>
              <p className="mb-4 text-red-100">
                Call in and request your favorite heavy songs during the show
              </p>
              <a
                href="tel:+19155446955"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
              >
                <span className="mr-2">📞</span>
                (915) 544-6955
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Metal News</h3>
              <p className="mb-4 text-red-100">
                Stay updated with the latest heavy music news and releases
              </p>
              <Link
                href="/news/rock-news"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
              >
                <span className="mr-2">📰</span>
                Rock News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
