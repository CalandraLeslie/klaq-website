import Image from 'next/image'
import Link from 'next/link'

interface Contest {
  id: string
  title: string
  description: string
  prize: string
  startDate: string
  endDate: string
  howToEnter: string[]
  rules: string[]
  status: 'active' | 'coming-soon' | 'ended'
  featured?: boolean
  prizeValue?: string
  eligibility: string
}

const contests: Contest[] = [
  {
    id: '1',
    title: 'Win a Year of Concert Tickets!',
    description: 'The ultimate music lover\'s prize! Win tickets to EVERY major concert in El Paso for an entire year. That\'s right - every show, every artist, every venue.',
    prize: 'Concert tickets to every major show in El Paso for 12 months',
    startDate: '2025-07-01',
    endDate: '2025-07-31',
    howToEnter: [
      'Listen for the keyword every weekday at 7:20 AM, 12:20 PM, and 5:20 PM',
      'Call (915) 581-1955 when you hear the keyword',
      'Be caller #9 to win daily prizes and qualify for the grand prize',
      'Enter online at klaq955.com/contests',
      'Follow @KLAQ955 on social media for bonus entries'
    ],
    rules: [
      'Must be 18 years or older to enter',
      'El Paso County residents only',
      'One entry per person per day',
      'Employees of KLAQ and their families are not eligible',
      'Winner will be selected on August 1st, 2025'
    ],
    status: 'active',
    featured: true,
    prizeValue: '$5,000+',
    eligibility: '18+, El Paso County residents'
  },
  {
    id: '2',
    title: 'Metallica VIP Experience',
    description: 'Get the ultimate Metallica experience! Win VIP tickets, backstage passes, meet & greet, and exclusive merchandise for the M72 World Tour show.',
    prize: 'VIP tickets, backstage passes, meet & greet with Metallica, exclusive merchandise package',
    startDate: '2025-07-08',
    endDate: '2025-08-10',
    howToEnter: [
      'Text METALLICA to 95955',
      'Listen for contest announcements during The Buzz Adams Morning Show',
      'Enter your details on our website',
      'Share the contest on social media for bonus entries'
    ],
    rules: [
      'Must be 18 years or older',
      'Residents of Texas, New Mexico, and Arizona eligible',
      'One text entry per phone number',
      'Winner announced August 11th'
    ],
    status: 'active',
    featured: true,
    prizeValue: '$2,500',
    eligibility: '18+, TX/NM/AZ residents'
  },
  {
    id: '3',
    title: 'KLAQ Rock Festival VIP Package',
    description: 'Experience the KLAQ Summer Rock Festival like a rockstar! VIP passes, premium viewing area, backstage access, catered meals, and exclusive merchandise.',
    prize: '2-day VIP festival passes, premium viewing, backstage access, catered meals, exclusive merch',
    startDate: '2025-06-15',
    endDate: '2025-09-15',
    howToEnter: [
      'Listen for the "Festival Friday" keyword every Friday at 3 PM',
      'Call (915) 581-1955 when you hear it',
      'Register online at klaqrockfest.com',
      'Follow KLAQ on Instagram and tag 3 friends'
    ],
    rules: [
      'Must be 21 years or older',
      'Southwest US residents only',
      'Limit one entry per person per week',
      'Photo ID required for winner verification'
    ],
    status: 'active',
    prizeValue: '$1,500',
    eligibility: '21+, Southwest US residents'
  },
  {
    id: '4',
    title: 'Ultimate Guitar Giveaway',
    description: 'Win a signed guitar from a rock legend plus a $1,000 Guitar Center gift card. Perfect for aspiring rockstars and collectors alike!',
    prize: 'Signed guitar from rock legend + $1,000 Guitar Center gift card',
    startDate: '2025-08-01',
    endDate: '2025-08-31',
    howToEnter: [
      'Submit a 30-second video of you playing guitar',
      'Upload to social media with #KLAQGuitarGiveaway',
      'Tag @KLAQ955 in your post',
      'Enter online with video link'
    ],
    rules: [
      'Open to all ages with parent consent for minors',
      'Video must be original performance',
      'Any skill level welcome',
      'Multiple entries allowed with different videos'
    ],
    status: 'coming-soon',
    prizeValue: '$2,000+',
    eligibility: 'All ages (parent consent for minors)'
  },
  {
    id: '5',
    title: 'Road Trip Rock Adventure',
    description: 'Win a $3,000 road trip package to see your favorite band in another city! Includes flights or gas money, hotel, tickets, and spending cash.',
    prize: '$3,000 road trip package including travel, hotel, concert tickets, and spending money',
    startDate: '2025-09-01',
    endDate: '2025-09-30',
    howToEnter: [
      'Tell us your dream concert destination in 50 words or less',
      'Submit entry online',
      'Must follow KLAQ on all social platforms',
      'Share your entry story on social media'
    ],
    rules: [
      'Must be 18 years or older',
      'US residents only',
      'Valid passport required for international destinations',
      'Travel must be completed within 12 months'
    ],
    status: 'coming-soon',
    prizeValue: '$3,000',
    eligibility: '18+, US residents'
  }
]

export default function ContestPage() {
  const activeContests = contests.filter(contest => contest.status === 'active')
  const comingSoonContests = contests.filter(contest => contest.status === 'coming-soon')
  const featuredContests = contests.filter(contest => contest.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500 text-white'
      case 'coming-soon': return 'bg-blue-500 text-white'
      case 'ended': return 'bg-gray-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getDaysLeft = (endDate: string) => {
    const end = new Date(endDate)
    const today = new Date()
    const diffTime = end.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            KLAQ Contests & Giveaways
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl">
            Win amazing prizes with KLAQ 95.5 FM! From concert tickets and VIP experiences 
            to cash prizes and exclusive merchandise - we've got contests for every rock fan.
          </p>
        </div>
      </section>

      {/* Contest Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">{activeContests.length}</div>
              <div className="text-sm text-gray-600">Active Contests</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">$15K+</div>
              <div className="text-sm text-gray-600">Total Prize Value</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Winners This Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Ways to Win</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Contests */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Contests
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredContests.map((contest) => (
              <div key={contest.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-200">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(contest.status)}`}>
                      {contest.status.replace('-', ' ').toUpperCase()}
                    </span>
                    {contest.status === 'active' && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        {getDaysLeft(contest.endDate)} DAYS LEFT
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {contest.title}
                  </h3>
                  <p className="text-yellow-100 font-semibold">
                    Prize Value: {contest.prizeValue}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {contest.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">🏆 You Could Win:</h4>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">
                      {contest.prize}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">📅 Contest Period:</h4>
                    <p className="text-gray-700">
                      {formatDate(contest.startDate)} - {formatDate(contest.endDate)}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">✅ Eligibility:</h4>
                    <p className="text-gray-700">
                      {contest.eligibility}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">🎯 How to Enter:</h4>
                    <ul className="text-gray-700 space-y-2">
                      {contest.howToEnter.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {contest.status === 'active' && (
                    <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-700 transition-colors duration-300">
                      ENTER NOW
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Contests */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            All Contests
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contests.map((contest) => (
              <div key={contest.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(contest.status)}`}>
                      {contest.status.replace('-', ' ').toUpperCase()}
                    </span>
                    {contest.status === 'active' && (
                      <span className="text-red-600 font-bold text-sm">
                        {getDaysLeft(contest.endDate)} days left
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {contest.title}
                  </h3>
                  
                  <p className="text-yellow-600 font-semibold mb-3">
                    {contest.prizeValue}
                  </p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {contest.description.substring(0, 120)}...
                  </p>
                  
                  <div className="text-xs text-gray-600 mb-4">
                    <p>Ends: {formatDate(contest.endDate)}</p>
                    <p>Eligibility: {contest.eligibility}</p>
                  </div>
                  
                  {contest.status === 'active' ? (
                    <button className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-300">
                      Enter Contest
                    </button>
                  ) : contest.status === 'coming-soon' ? (
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold" disabled>
                      Coming Soon
                    </button>
                  ) : (
                    <button className="w-full bg-gray-400 text-white py-2 rounded-lg font-semibold" disabled>
                      Contest Ended
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contest Rules & Info */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contest Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📞 How to Enter by Phone</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Request Line:</strong> (915) 581-1955</p>
                <p><strong>Studio Line:</strong> (915) 595-KLAQ</p>
                <p>Listen for keywords and call to enter!</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">💻 Online Entry</h3>
              <div className="space-y-2 text-gray-700">
                <p>Visit klaq955.com/contests</p>
                <p>Fill out the entry form</p>
                <p>Follow the specific contest instructions</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📱 Social Media</h3>
              <div className="space-y-2 text-gray-700">
                <p>Follow @KLAQ955 on all platforms</p>
                <p>Watch for contest announcements</p>
                <p>Get bonus entries by sharing</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">General Contest Rules</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Eligibility</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Must be 18+ unless otherwise specified</li>
                  <li>• Valid ID required for prize pickup</li>
                  <li>• Employees and families not eligible</li>
                  <li>• One entry per person unless stated</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Prize Information</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Prizes have no cash value</li>
                  <li>• Winners responsible for taxes</li>
                  <li>• 30 days to claim prizes</li>
                  <li>• Photo/audio consent required</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/contest-rules" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                View Complete Contest Rules →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Win?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on amazing prizes! Listen to KLAQ 95.5 FM for contest announcements and follow us on social media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/listen" 
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Listen Live
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors duration-300">
              Follow on Social Media
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
