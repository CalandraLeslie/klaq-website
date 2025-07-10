import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Gift, Trophy, Phone, Radio } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Win Big with KLAQ Contests - 95.5 KLAQ',
  description: 'Enter to win amazing prizes with KLAQ 95.5 FM contests! From concert tickets to cash prizes, we have giveaways happening all the time.',
}

export default function ContestPage() {
  const activeContests = [
    {
      id: 1,
      title: 'Hall Pass Cash 2025',
      prize: '$500 Prepaid Visa Gift Card',
      description: 'Get ready for a new school year with a $500 prepaid Visa Gift Card to help you prep for back-to-school shopping.',
      status: 'active',
      deadline: 'August 31, 2025',
      howToEnter: 'Listen to KLAQ and enter online',
      category: 'Cash Prize'
    },
    {
      id: 2,
      title: 'Judas Priest Trip to LA',
      prize: 'Trip to Los Angeles + Concert Tickets',
      description: 'You and a guest could fly to Los Angeles to experience Judas Priest and Alice Cooper in concert at the Kia Forum this October.',
      status: 'active',
      deadline: 'October 15, 2025',
      howToEnter: 'Listen for your chance to win',
      category: 'Concert & Travel'
    },
    {
      id: 3,
      title: 'Ozzy Limited Edition Box Set',
      prize: 'Autographed Ozzy Vinyl Collection',
      description: 'WIN: Limited-Edition Box Set of Ozzy\'s Solo Catalog on Vinyl — Autographed by Ozzy + Numbered 666. This is your chance to win Ozzy\'s complete solo discography on vinyl.',
      status: 'active',
      deadline: 'September 30, 2025',
      howToEnter: 'Enter online at KLAQ.com',
      category: 'Music Memorabilia'
    },
    {
      id: 4,
      title: 'Sturgis Motorcycle Rally',
      prize: 'Wristbands to Full Throttle Saloon',
      description: 'Enter to Win Wristbands to the Full Throttle Saloon + 85th Annual Sturgis Motorcycle Rally. The 85th annual Sturgis Motorcycle Rally is set for Aug. 1-10.',
      status: 'active',
      deadline: 'August 1, 2025',
      howToEnter: 'Listen to Chuck Armstrong',
      category: 'Event Tickets'
    }
  ]

  const pastWinners = [
    {
      name: 'Maria Rodriguez',
      prize: 'Concert Tickets',
      month: 'June 2025'
    },
    {
      name: 'David Thompson',
      prize: '$1,000 Cash',
      month: 'May 2025'
    },
    {
      name: 'Sarah Johnson',
      prize: 'VIP Experience',
      month: 'April 2025'
    }
  ]

  const contestRules = [
    'Must be 18 years or older to enter',
    'One entry per person per contest',
    'Employees of Townsquare Media not eligible',
    'Must be legal resident of Texas',
    'Winners responsible for all taxes',
    'Prize has no cash value'
  ]

  return (
    <main className="page-container bg-gray-50">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Win Big with KLAQ!
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mt-4 max-w-3xl mx-auto">
              Enter to win amazing prizes with KLAQ 95.5 FM contests and giveaways. 
              From concert tickets to cash prizes, we have something exciting for everyone in the KLAQ family!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="#contests" className="btn-primary bg-white text-red-600 hover:bg-red-50">
                View Active Contests
              </Link>
              <Link href="/contest-rules" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Contest Rules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Active Contests */}
      <section id="contests" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Active Contests
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {activeContests.map((contest) => (
              <div key={contest.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                      {contest.category}
                    </span>
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {contest.title}
                  </h3>
                  <div className="text-xl font-semibold text-red-600 mb-4">
                    Prize: {contest.prize}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {contest.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">Deadline: {contest.deadline}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Radio className="w-4 h-4 mr-2" />
                      <span>{contest.howToEnter}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                      Enter Now
                    </button>
                    <button className="px-4 py-3 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Win */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            How to Win with KLAQ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Listen Live</h3>
              <p className="text-gray-600">
                Tune in to KLAQ 95.5 FM throughout the day for your chance to win. 
                Contest announcements happen during regular programming.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call to Win</h3>
              <p className="text-gray-600">
                Be caller #9 when you hear the contest announcement. 
                Have your phone ready and be prepared to answer quickly!
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Entry</h3>
              <p className="text-gray-600">
                Some contests offer online entry at KLAQ.com. 
                Follow the instructions and enter for your chance to win!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Winners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Recent Winners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pastWinners.map((winner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{winner.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{winner.prize}</p>
                <p className="text-gray-600">{winner.month}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contest Rules Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Contest Rules
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">General Rules</h3>
              <ul className="space-y-3">
                {contestRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link href="/contest-rules" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  View Complete Rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Win?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't miss your chance to win amazing prizes! 
            Tune in to KLAQ 95.5 FM and enter our contests today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listen" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Listen Live
            </Link>
            <Link href="/app" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Download App
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
