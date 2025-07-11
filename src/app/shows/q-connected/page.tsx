import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Q Connected with Joanna Barba | KLAQ 95.5 FM',
  description: 'Join Joanna Barba for Q Connected on KLAQ 95.5 FM. Connecting El Paso through rock music and community conversation.',
  keywords: 'Q Connected, Joanna Barba, KLAQ, El Paso radio, rock radio, afternoon show',
  openGraph: {
    title: 'Q Connected with Joanna Barba | KLAQ 95.5 FM',
    description: 'Join Joanna Barba for Q Connected on KLAQ 95.5 FM.',
    type: 'website',
    url: 'https://klaq.com/shows/q-connected',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function QConnectedShow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Q Connected
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-purple-200">
                with Joanna Barba
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span>Monday - Friday, 2:00 PM - 6:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
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
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ON AIR</span>
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
              About Q Connected
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Q Connected with Joanna Barba is more than just an afternoon rock show – it's El Paso's 
                connection point for music, community, and conversation. Joanna brings a fresh perspective 
                to afternoon drive time, combining the best rock hits with meaningful discussions about 
                what matters most to our community.
              </p>
              <p>
                Every weekday from 2 to 6 PM, Joanna connects with listeners through interactive segments, 
                local spotlights, and the rock music that defines our desert city. Whether you're heading 
                home from work, picking up the kids, or just need some great music to power through your 
                afternoon, Q Connected is your soundtrack.
              </p>
              <p>
                The show features regular segments that highlight local businesses, community events, and 
                the stories that make El Paso unique. Joanna's passion for the city and its people shines 
                through every show, making Q Connected a true reflection of El Paso's spirit.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Show Information</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-900">Time:</span>
                <p className="text-gray-600">Monday - Friday, 2:00 PM - 6:00 PM</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Host:</span>
                <p className="text-gray-600">Joanna Barba</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Format:</span>
                <p className="text-gray-600">Rock Music & Community Focus</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Phone:</span>
                <p className="text-gray-600">
                  <a href="tel:+19155446955" className="text-pink-600 hover:text-pink-700">
                    (915) 544-6955
                  </a>
                </p>
              </div>
            </div>
            <Link
              href="/listen"
              className="mt-6 w-full bg-pink-600 text-white py-3 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🎵</span>
              Listen Live Now
            </Link>
          </div>
        </div>

        {/* Show Segments */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Regular Show Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Local Business Spotlight</h4>
              <p className="text-gray-600 text-sm">
                Highlighting the best of El Paso's local business community
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-red-100 rounded-xl">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎭</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Community Events</h4>
              <p className="text-gray-600 text-sm">
                Keep up with what's happening around El Paso
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-100 to-purple-100 rounded-xl">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Drive Time Rock</h4>
              <p className="text-gray-600 text-sm">
                Perfect rock hits for your afternoon commute
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Listener Connect</h4>
              <p className="text-gray-600 text-sm">
                Interactive conversations with El Paso listeners
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-100 to-red-100 rounded-xl">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Feel Good Friday</h4>
              <p className="text-gray-600 text-sm">
                End your week on a positive note with uplifting stories
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-red-100 to-purple-100 rounded-xl">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎸</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">New Music Monday</h4>
              <p className="text-gray-600 text-sm">
                Discover the latest rock releases every week
              </p>
            </div>
          </div>
        </div>

        {/* Meet Joanna Barba */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Meet Joanna Barba
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Joanna Barba is a passionate advocate for El Paso and the rock music that brings 
                our community together. Born in El Paso, she has deep roots in the city and 
                understands what makes this desert community so special.
              </p>
              <p>
                With a background in journalism and communications, Joanna brings a unique perspective 
                to radio that combines entertainment with meaningful community connection. She's 
                dedicated to showcasing the best of El Paso – from local musicians to small businesses 
                to the everyday heroes who make our city great.
              </p>
              <p>
                When she's not on the air, Joanna volunteers with local charities, attends community 
                events, and enjoys exploring El Paso's growing food and arts scene. She believes that 
                radio should be more than just music – it should be a bridge that connects people 
                and celebrates what makes each community unique.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">About Joanna</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Background</h4>
                  <p className="text-gray-600">Journalism & Communications</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hometown</h4>
                  <p className="text-gray-600">Born and raised in El Paso</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Passion</h4>
                  <p className="text-gray-600">Community connection & local music</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Volunteer Work</h4>
                  <p className="text-gray-600">Local charities & community events</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Focus */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Connecting Our Community
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Local Business Support</h3>
              <p className="text-gray-600 mb-4">
                Q Connected regularly features local El Paso businesses, giving them a platform 
                to share their story and connect with potential customers. From family restaurants 
                to art galleries, Joanna showcases the entrepreneurs who make El Paso unique.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Want to be featured?</strong> Local businesses can contact the show 
                  to be included in our community spotlight segments.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Event Promotion</h3>
              <p className="text-gray-600 mb-4">
                Stay connected to what's happening in El Paso. Q Connected keeps listeners informed 
                about concerts, festivals, charity events, and other community gatherings that bring 
                our city together.
              </p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm text-pink-800">
                  <strong>Have an event?</strong> Submit your community event details to be 
                  featured on Q Connected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect with Q Connected */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Get Connected with Q Connected
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold mb-4">Call the Show</h3>
              <p className="mb-4 text-purple-100">
                Share your story, request a song, or just say hello to Joanna
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
              <h3 className="text-lg font-bold mb-4">Submit Events</h3>
              <p className="mb-4 text-purple-100">
                Let us know about your community event or business
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
              >
                <span className="mr-2">📧</span>
                Contact Us
              </Link>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Social Media</h3>
              <p className="mb-4 text-purple-100">
                Follow Q Connected for community updates and behind-the-scenes content
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
