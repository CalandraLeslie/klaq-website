import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Win Contests | KLAQ 95.5 FM Contest Guide',
  description: 'Learn how to win KLAQ contests! Complete guide to contest rules, tips for winning, and how to participate in KLAQ\'s exciting contests.',
  keywords: 'KLAQ contests, how to win, contest rules, win prizes, radio contests, El Paso contests',
  openGraph: {
    title: 'How to Win Contests | KLAQ 95.5 FM Contest Guide',
    description: 'Learn how to win KLAQ contests! Complete guide and tips for winning.',
    type: 'website',
    url: 'https://klaq.com/contests/how-to-win',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function HowToWinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-3xl">🏆</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
              How to Win
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-green-200">
              Your Guide to KLAQ Contest Success
            </p>
            <div className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
              <p>
                Ready to win big with KLAQ? Follow our proven strategies and insider 
                tips to maximize your chances of winning amazing prizes from El Paso's Best Rock!
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contests"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-semibold"
              >
                <span className="mr-2">🎉</span>
                Current Contests
              </Link>
              <Link
                href="/listen"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-200 font-semibold"
              >
                <span className="mr-2">📻</span>
                Listen Live
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contest Basics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contest Fundamentals
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Winning KLAQ contests starts with understanding how they work. Most 
                of our contests are call-in based, where you need to be the right 
                caller at the right time. Others involve online entries, text messages, 
                or special promotional codes.
              </p>
              <p>
                The key to success is staying informed about when contests happen, 
                what the cue-to-call is, and being ready to participate when the 
                opportunity arises. Timing and preparation are everything!
              </p>
              <p>
                Each contest has specific rules and eligibility requirements. Always 
                listen carefully to the complete contest announcement and make sure 
                you understand what's required to win.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Guide</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Listen Regularly</h4>
                  <p className="text-gray-600">Stay tuned to know when contests happen</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Know the Rules</h4>
                  <p className="text-gray-600">Understand eligibility and requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Be Ready</h4>
                  <p className="text-gray-600">Have phone ready and listen for cues</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Act Fast</h4>
                  <p className="text-gray-600">Call quickly when you hear the cue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winning Strategies */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Proven Winning Strategies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Tuned</h3>
              <p className="text-gray-600">Listen throughout the day to catch contest announcements</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Dialing</h3>
              <p className="text-gray-600">Speed dial KLAQ's number for fastest connection</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Know the Cue</h3>
              <p className="text-gray-600">Listen for specific songs or phrases that trigger contests</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multiple Devices</h3>
              <p className="text-gray-600">Use different phones or devices to increase chances</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Prime Times</h3>
              <p className="text-gray-600">Learn when contests typically happen during shows</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Follow Rules</h3>
              <p className="text-gray-600">Always comply with all contest rules and requirements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contest Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Types of KLAQ Contests
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Call-In Contests</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Caller #7 (or other number)</h4>
                <p className="text-gray-600 text-sm">Be the exact caller number announced to win</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cue to Call</h4>
                <p className="text-gray-600 text-sm">Listen for specific song or phrase, then call in</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Trivia Contests</h4>
                <p className="text-gray-600 text-sm">Answer questions correctly to win prizes</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Name That Tune</h4>
                <p className="text-gray-600 text-sm">Identify songs or artists from audio clips</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Other Contest Types</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Online Entries</h4>
                <p className="text-gray-600 text-sm">Submit entries through our website or social media</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Text Message</h4>
                <p className="text-gray-600 text-sm">Send specific codes via text to enter</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Event Contests</h4>
                <p className="text-gray-600 text-sm">Enter at live events, concerts, or remotes</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">VIP Club</h4>
                <p className="text-gray-600 text-sm">Exclusive contests for VIP members only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-gradient-to-r from-green-100 to-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pro Tips from Contest Winners
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Before You Call</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Program KLAQ's Number</h4>
                    <p className="text-sm">Have it on speed dial for quick access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Clear Phone Line</h4>
                    <p className="text-sm">Make sure your phone has good signal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Listen Closely</h4>
                    <p className="text-sm">Pay attention to all contest details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Be Patient</h4>
                    <p className="text-sm">Sometimes lines are busy - keep trying</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">When You Get Through</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Stay Calm</h4>
                    <p className="text-sm">Take a breath and speak clearly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Be Enthusiastic</h4>
                    <p className="text-sm">Show your excitement about winning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Have Info Ready</h4>
                    <p className="text-sm">Name, age, and contact information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Listen to Instructions</h4>
                    <p className="text-sm">Follow prize claim procedures exactly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contest Rules Reminder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Important Reminders
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Eligibility Requirements</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Must be 18 years or older (unless specified)</p>
                <p>• El Paso area residents (check specific contest rules)</p>
                <p>• Cannot have won a major prize in the last 30 days</p>
                <p>• KLAQ employees and families are not eligible</p>
                <p>• Valid photo ID required for prize pickup</p>
                <p>• Some prizes may require tax documentation</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Prize Claim Process</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Winners must claim prizes within specified time</p>
                <p>• Bring valid ID when picking up prizes</p>
                <p>• Some prizes cannot be transferred or exchanged</p>
                <p>• Large prizes may require tax forms</p>
                <p>• Concert tickets usually available day of show</p>
                <p>• Follow all instructions given by KLAQ staff</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/contest-rules"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-semibold"
            >
              <span className="mr-2">📋</span>
              Read Complete Contest Rules
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Win Big?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Start listening to KLAQ and put these winning strategies to work!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📻</span>
              Listen Live Now
            </Link>
            <Link
              href="/contests"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎉</span>
              Current Contests
            </Link>
            <Link
              href="/vip"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">⭐</span>
              Join VIP Club
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
