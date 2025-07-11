import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nico Adjemian - Radio Host & Comedian | KLAQ 95.5 FM',
  description: 'Meet Nico Adjemian, KLAQ\'s multi-talented radio host and comedian. Bringing humor and entertainment to El Paso radio.',
  keywords: 'Nico Adjemian, KLAQ DJ, comedian, radio host, El Paso entertainment',
  openGraph: {
    title: 'Nico Adjemian - Radio Host & Comedian | KLAQ 95.5 FM',
    description: 'Meet Nico Adjemian, KLAQ\'s multi-talented radio host and comedian.',
    type: 'website',
    url: 'https://klaq.com/djs/nico',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function NicoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Nico Adjemian
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-blue-200">
                Radio Host & Comedian
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span>Multi-Platform Entertainment</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Comedy & Music Combined</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src="/images/djs/nico-adjemian.jpg"
                  alt="Nico Adjemian"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FUNNY</span>
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
              About Nico Adjemian
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Nico Adjemian is a multi-talented entertainer who brings a unique blend of comedy 
                and music expertise to KLAQ 95.5 FM. As both a skilled radio host and accomplished 
                comedian, Nico has the rare ability to seamlessly combine humor with rock music 
                in a way that keeps listeners engaged and entertained.
              </p>
              <p>
                With a background in stand-up comedy and extensive radio experience, Nico 
                understands the art of timing, audience engagement, and creating memorable 
                moments on the air. His quick wit and natural comedic instincts make him a 
                valuable addition to KLAQ's diverse lineup of personalities.
              </p>
              <p>
                Nico's approach to radio is refreshingly authentic and spontaneous. Whether he's 
                delivering hilarious commentary on the day's events, conducting entertaining 
                interviews, or just having fun between songs, he brings an energy and humor 
                that brightens listeners' days.
              </p>
              <p>
                Beyond radio, Nico continues to perform stand-up comedy and is actively involved 
                in El Paso's entertainment scene. His diverse talents and genuine personality 
                have made him a favorite among KLAQ listeners who appreciate both great rock 
                music and good laughs.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900">Role:</span>
                <p className="text-gray-600">Radio Host & Comedian</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Specialties:</span>
                <p className="text-gray-600">Stand-up Comedy, Radio Hosting</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Style:</span>
                <p className="text-gray-600">Humor meets Rock Music</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Background:</span>
                <p className="text-gray-600">Professional Comedian</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Focus:</span>
                <p className="text-gray-600">Entertainment & Engagement</p>
              </div>
            </div>
            <Link
              href="/listen"
              className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🎵</span>
              Listen Live
            </Link>
          </div>
        </div>
      </div>

      {/* Comedy & Radio Skills */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comedy Meets Rock Radio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">😂</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stand-Up Comedy</h3>
              <p className="text-gray-600">Professional comedian with extensive stage experience</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Radio Hosting</h3>
              <p className="text-gray-600">Natural on-air personality with excellent timing</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎭</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Character Work</h3>
              <p className="text-gray-600">Skilled at creating memorable on-air characters and bits</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Music Knowledge</h3>
              <p className="text-gray-600">Deep appreciation for rock music and its history</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Spontaneous Humor</h3>
              <p className="text-gray-600">Quick wit and ability to improvise comedic moments</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Audience Connection</h3>
              <p className="text-gray-600">Natural ability to connect with radio listeners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comedy Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comedy & Radio Philosophy
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nico believes that laughter is one of the most powerful ways to connect with 
                people. His comedy style is observational, relatable, and never mean-spirited – 
                perfect for the diverse KLAQ audience that tunes in throughout the day.
              </p>
              <p>
                "Radio gives me the unique opportunity to combine two of my biggest passions: 
                comedy and rock music," Nico explains. "There's nothing better than making 
                someone laugh while they're listening to their favorite song."
              </p>
              <p>
                His approach to radio comedy is spontaneous yet thoughtful. He understands 
                that radio listeners want to be entertained but also informed, so he strikes 
                a balance between humor and substance that keeps people coming back for more.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Comedy Strengths</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Observational Humor</h4>
                  <p className="text-gray-600">Finding comedy in everyday situations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Clean Comedy</h4>
                  <p className="text-gray-600">Family-friendly humor appropriate for all listeners</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Interactive Style</h4>
                  <p className="text-gray-600">Engaging listeners in comedic conversations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Musical Comedy</h4>
                  <p className="text-gray-600">Incorporating humor into music discussions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Background */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Performance Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎭</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stand-Up Venues</h3>
              <p className="text-gray-600">Performed at comedy clubs and venues across the Southwest</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">📻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Radio Experience</h3>
              <p className="text-gray-600">Multiple markets and formats in radio broadcasting</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎪</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Events</h3>
              <p className="text-gray-600">MC and entertainment for concerts and special events</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Media Work</h3>
              <p className="text-gray-600">Various media appearances and entertainment projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* KLAQ Integration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Bringing Laughter to KLAQ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">On-Air Contributions</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Hilarious commentary and observations</p>
                <p>• Character voices and comedic bits</p>
                <p>• Interactive comedy segments with listeners</p>
                <p>• Humorous takes on rock music and pop culture</p>
                <p>• Special comedy features and recurring segments</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">KLAQ Events</h3>
              <div className="space-y-3 text-gray-600">
                <p>• MC for station concerts and festivals</p>
                <p>• Comedy entertainment at live broadcasts</p>
                <p>• Special guest appearances at community events</p>
                <p>• Promotional events with comedic elements</p>
                <p>• Charity events and fundraisers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Laugh Along with Nico
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Tune in for comedy, music, and good times on KLAQ 95.5 FM
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
              Call In
            </a>
            <Link
              href="/events"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎭</span>
              See Nico Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
