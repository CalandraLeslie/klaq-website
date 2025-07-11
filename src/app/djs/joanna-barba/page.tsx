import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Joanna Barba - Q Connected Host | KLAQ 95.5 FM',
  description: 'Meet Joanna Barba, host of Q Connected on KLAQ 95.5 FM. Connecting El Paso through rock music and community conversation.',
  keywords: 'Joanna Barba, KLAQ DJ, Q Connected, El Paso radio, afternoon show host',
  openGraph: {
    title: 'Joanna Barba - Q Connected Host | KLAQ 95.5 FM',
    description: 'Meet Joanna Barba, host of Q Connected on KLAQ 95.5 FM.',
    type: 'website',
    url: 'https://klaq.com/djs/joanna-barba',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function JoannaBarbaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Joanna Barba
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-purple-200">
                Host of Q Connected
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  <span>Weekdays 2:00 PM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Connecting El Paso Through Rock</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src="/images/djs/joanna-barba.jpg"
                  alt="Joanna Barba"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ON AIR</span>
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
              About Joanna Barba
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Joanna Barba is the passionate voice behind Q Connected, KLAQ's afternoon drive 
                show that brings El Paso together through music, conversation, and community 
                connection. Born and raised in El Paso, Joanna has deep roots in the city and 
                an authentic understanding of what makes the Sun City special.
              </p>
              <p>
                With a background in journalism and communications, Joanna brings a unique 
                perspective to radio that combines entertainment with meaningful community 
                engagement. Her show isn't just about playing great rock music – it's about 
                creating connections between listeners and highlighting the people, places, 
                and events that make El Paso home.
              </p>
              <p>
                Joanna's approach to radio is refreshingly genuine. She sees her role as more 
                than just a DJ – she's a community connector, local advocate, and friend to 
                everyone tuning in during their afternoon commute. Her passion for El Paso 
                shines through every segment, interview, and song choice.
              </p>
              <p>
                When she's not on the air, Joanna is actively involved in local charities, 
                attends community events, and explores El Paso's growing arts and food scene. 
                She believes that radio should serve the community it broadcasts to, and Q 
                Connected reflects that philosophy every day.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900">Show:</span>
                <p className="text-gray-600">Q Connected</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Time:</span>
                <p className="text-gray-600">Weekdays 2:00 PM - 6:00 PM</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Background:</span>
                <p className="text-gray-600">Journalism & Communications</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Hometown:</span>
                <p className="text-gray-600">El Paso, Texas</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Focus:</span>
                <p className="text-gray-600">Community Connection</p>
              </div>
            </div>
            <Link
              href="/shows/q-connected"
              className="mt-6 w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🎵</span>
              Learn About Q Connected
            </Link>
          </div>
        </div>
      </div>

      {/* Community Focus */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Community Connection
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Local Business Support</h3>
              <p className="text-gray-600">Regularly features and promotes El Paso's small businesses</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎭</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Event Promotion</h3>
              <p className="text-gray-600">Keeps listeners informed about local concerts and festivals</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Charity Work</h3>
              <p className="text-gray-600">Active volunteer with local charities and causes</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Arts Advocate</h3>
              <p className="text-gray-600">Supporter of El Paso's growing arts and culture scene</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🍴</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Food Scene Explorer</h3>
              <p className="text-gray-600">Highlights El Paso's diverse culinary landscape</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Listener Connection</h3>
              <p className="text-gray-600">Creates meaningful conversations with the community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Show Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Radio with Purpose
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                For Joanna, radio is about more than just playing music. Q Connected serves 
                as a bridge between community members, a platform for local voices, and a 
                celebration of everything that makes El Paso unique.
              </p>
              <p>
                "I believe radio should reflect the community it serves," Joanna says. "Every 
                show is an opportunity to connect people, share stories, and highlight the 
                incredible things happening in our city."
              </p>
              <p>
                This philosophy drives everything from her music selection to her interview 
                choices. Whether she's featuring a local restaurant owner, promoting a charity 
                event, or just having a conversation with a listener, every element of Q 
                Connected is designed to strengthen the bonds within El Paso's community.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Show Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Authenticity</h4>
                  <p className="text-gray-600">Genuine conversations and real connections</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community First</h4>
                  <p className="text-gray-600">Always putting El Paso's interests at the forefront</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Inclusivity</h4>
                  <p className="text-gray-600">Welcoming all voices and perspectives</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Local Pride</h4>
                  <p className="text-gray-600">Celebrating what makes El Paso special</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Interests */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Beyond the Microphone
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Journalism</h3>
              <p className="text-gray-600">Passionate about storytelling and community journalism</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🌮</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Food Explorer</h3>
              <p className="text-gray-600">Always seeking out the best local restaurants and hidden gems</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Arts Enthusiast</h3>
              <p className="text-gray-600">Regular attendee of local art galleries and cultural events</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🏃‍♀️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Active Lifestyle</h3>
              <p className="text-gray-600">Enjoys hiking and exploring El Paso's outdoor spaces</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Connected with Joanna
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join the conversation and become part of El Paso's community connection
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎵</span>
              Listen to Q Connected
            </Link>
            <a
              href="tel:+19155446955"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Call the Show
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📧</span>
              Submit Event Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
