import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dallas Cowboys Football on KLAQ | Game Coverage & Analysis',
  description: 'Follow America\'s Team with KLAQ! Get Cowboys game coverage, analysis, and fan discussions on El Paso\'s Best Rock station.',
  keywords: 'Dallas Cowboys, football, KLAQ, game coverage, Cowboys fans, NFL, El Paso',
  openGraph: {
    title: 'Dallas Cowboys Football on KLAQ | Game Coverage & Analysis',
    description: 'Follow America\'s Team with KLAQ! Cowboys game coverage and fan discussions.',
    type: 'website',
    url: 'https://klaq.com/events/cowboys',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function CowboysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-silver-50 to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-gray-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-3xl">⭐</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-gray-200 bg-clip-text text-transparent">
                Cowboys Football
              </h1>
            </div>
            <p className="text-2xl md:text-3xl mb-8 text-blue-200">
              America's Team on El Paso's Best Rock
            </p>
            <div className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
              <p>
                KLAQ brings you comprehensive Dallas Cowboys coverage, from game day 
                excitement to season analysis, connecting El Paso Cowboys fans with 
                America's Team all season long.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/listen"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold"
              >
                <span className="mr-2">📻</span>
                Listen Live
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-200 font-semibold"
              >
                <span className="mr-2">🎪</span>
                All Events
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cowboys Coverage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cowboys Nation in El Paso
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                El Paso has always been Cowboys country, and KLAQ is proud to serve 
                as the unofficial home for Cowboys fans in the Borderland. From 
                passionate game day discussions to season-long analysis, we keep 
                you connected to America's Team.
              </p>
              <p>
                Our DJs and hosts are genuine Cowboys fans who understand the passion, 
                frustration, and excitement that comes with following the star. Whether 
                it's celebrating a victory or analyzing what went wrong, we're right 
                there with you through every snap.
              </p>
              <p>
                Throughout the season, KLAQ provides pre-game coverage, post-game 
                analysis, and ongoing discussions about everything Cowboys-related, 
                from roster moves to playoff hopes.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cowboys Coverage</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🏈</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Game Day Coverage</h4>
                  <p className="text-gray-600">Pre-game buildup and post-game analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📊</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Season Analysis</h4>
                  <p className="text-gray-600">Weekly breakdown and discussion</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Breaking News</h4>
                  <p className="text-gray-600">Latest Cowboys news and updates</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🎤</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fan Discussions</h4>
                  <p className="text-gray-600">Call-ins and fan perspective shows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Season Features */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cowboys Season on KLAQ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏈</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Game Day Excitement</h3>
              <p className="text-gray-600">Build up the excitement before every Cowboys game</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Commentary</h3>
              <p className="text-gray-600">Real-time reactions and analysis during games</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Player Spotlights</h3>
              <p className="text-gray-600">Feature your favorite Cowboys stars</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stats & Analysis</h3>
              <p className="text-gray-600">Deep dive into team and player statistics</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fan Call-Ins</h3>
              <p className="text-gray-600">Share your thoughts and predictions</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Championship Dreams</h3>
              <p className="text-gray-600">Following the journey to the Super Bowl</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cowboys History */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          America's Team Legacy
        </h2>
        <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Championship History</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <span>Super Bowl Championships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">10</span>
                  </div>
                  <span>Conference Championships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">24</span>
                  </div>
                  <span>Division Championships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <span>Multiple Hall of Fame players</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legendary Moments</h3>
              <div className="space-y-3 text-gray-700">
                <p>• "The Catch" and other playoff classics</p>
                <p>• Three Super Bowls in the 1990s dynasty</p>
                <p>• Iconic players from Staubach to Prescott</p>
                <p>• America's Team moniker and global fanbase</p>
                <p>• Historic rivalries and memorable games</p>
                <p>• AT&T Stadium and the Star in Frisco</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fan Community */}
      <div className="bg-gradient-to-r from-blue-100 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cowboys Fans in El Paso
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Join the Discussion</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Call the Station</h4>
                    <p className="text-sm">Share your Cowboys thoughts on-air</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Tune In</h4>
                    <p className="text-sm">Listen for Cowboys updates throughout the day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Game Day</h4>
                    <p className="text-sm">Special programming on game days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Follow Along</h4>
                    <p className="text-sm">Season-long coverage and analysis</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Cowboys Pride</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Being a Cowboys fan means more than just following a team – it's about 
                  being part of a passionate community that spans generations and geography.
                </p>
                <p>
                  In El Paso, we understand that loyalty. We've been through the highs 
                  and lows, the championships and the heartbreaks, and we'll continue 
                  to stand by America's Team no matter what.
                </p>
                <p>
                  KLAQ is your home for Cowboys coverage because we're fans just like you. 
                  We feel the same excitement, the same frustration, and the same hope 
                  for next season.
                </p>
                <p className="font-semibold text-blue-600">
                  How 'bout them Cowboys! 🏈⭐
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            America's Team, El Paso's Station
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Follow the Cowboys with KLAQ all season long
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📻</span>
              Listen Live
            </Link>
            <Link
              href="/shows"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎙️</span>
              Show Schedule
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
