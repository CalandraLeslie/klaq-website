import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Daniel Paulus - Producer & Host | KLAQ 95.5 FM',
  description: 'Meet Daniel Paulus, KLAQ\'s multi-talented producer and host. Behind-the-scenes expertise and on-air entertainment.',
  keywords: 'Daniel Paulus, KLAQ producer, radio host, El Paso radio, producer',
  openGraph: {
    title: 'Daniel Paulus - Producer & Host | KLAQ 95.5 FM',
    description: 'Meet Daniel Paulus, KLAQ\'s multi-talented producer and host.',
    type: 'website',
    url: 'https://klaq.com/djs/daniel-paulus',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function DanielPaulusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-900 via-cyan-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent">
                Daniel Paulus
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-teal-200">
                Producer & Host
              </p>
              <div className="space-y-3 text-lg">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span>Behind-the-Scenes Excellence</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span>Multi-Platform Production</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src="/images/djs/daniel-paulus.jpg"
                  alt="Daniel Paulus"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PRODUCER</span>
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
              About Daniel Paulus
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Daniel Paulus is the versatile talent behind much of KLAQ's polished on-air 
                sound and creative content. As both a skilled producer and engaging host, 
                Daniel brings a unique combination of technical expertise and on-air charisma 
                that enhances every aspect of KLAQ's programming.
              </p>
              <p>
                With extensive experience in radio production, Daniel understands the intricate 
                details that make radio programming flow seamlessly. From crafting compelling 
                audio segments to coordinating complex live broadcasts, his behind-the-scenes 
                work ensures that KLAQ maintains its professional sound and high production values.
              </p>
              <p>
                As a host, Daniel brings a fresh perspective and natural communication skills 
                that connect with listeners. Whether filling in for other hosts, conducting 
                interviews, or leading special programming, he demonstrates the versatility 
                and professionalism that makes him an invaluable part of the KLAQ team.
              </p>
              <p>
                Daniel's dual role as producer and host gives him a comprehensive understanding 
                of radio from both sides of the microphone. This unique perspective allows him 
                to contribute to KLAQ's success in multiple ways, from creating compelling 
                content to delivering engaging on-air performances.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900">Primary Role:</span>
                <p className="text-gray-600">Producer & Host</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Specialties:</span>
                <p className="text-gray-600">Audio Production, Content Creation</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Skills:</span>
                <p className="text-gray-600">Technical & Creative</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Approach:</span>
                <p className="text-gray-600">Detail-Oriented Professional</p>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Focus:</span>
                <p className="text-gray-600">Quality & Innovation</p>
              </div>
            </div>
            <Link
              href="/listen"
              className="mt-6 w-full bg-cyan-600 text-white py-3 px-4 rounded-lg hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="mr-2">🎵</span>
              Listen Live
            </Link>
          </div>
        </div>
      </div>

      {/* Production Skills */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Production & Broadcasting Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎚️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Audio Production</h3>
              <p className="text-gray-600">Expert in professional audio editing and mixing</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">On-Air Hosting</h3>
              <p className="text-gray-600">Natural communication skills and listener engagement</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Content Creation</h3>
              <p className="text-gray-600">Creative development of engaging radio content</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Expertise</h3>
              <p className="text-gray-600">Proficient with broadcast equipment and software</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Show Production</h3>
              <p className="text-gray-600">Comprehensive show planning and execution</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Works seamlessly with all KLAQ personalities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Behind the Scenes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Producer's Perspective
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Daniel's role as a producer gives him a unique understanding of what makes 
                great radio. He works behind the scenes to ensure that every show runs smoothly, 
                every technical element functions perfectly, and every piece of content meets 
                KLAQ's high standards.
              </p>
              <p>
                "Production is about more than just technical skills," Daniel explains. "It's 
                about understanding the vision of each show and finding creative ways to bring 
                that vision to life through sound, timing, and seamless execution."
              </p>
              <p>
                His attention to detail and commitment to quality enhancement every aspect of 
                KLAQ's programming, from the clarity of live broadcasts to the polish of 
                produced segments that keep listeners engaged and entertained.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Production Responsibilities</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Content Development</h4>
                  <p className="text-gray-600">Creating engaging segments and features</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-cyan-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Audio Engineering</h4>
                  <p className="text-gray-600">Ensuring broadcast quality and clarity</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Show Coordination</h4>
                  <p className="text-gray-600">Managing technical aspects of live shows</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Control</h4>
                  <p className="text-gray-600">Maintaining KLAQ's professional standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hosting Style */}
      <div className="bg-gradient-to-r from-teal-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            On-Air Versatility
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎤</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fill-In Host</h3>
              <p className="text-gray-600">Seamlessly covers for other KLAQ personalities</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Special Programming</h3>
              <p className="text-gray-600">Hosts unique shows and special events</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🎙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Interview Skills</h3>
              <p className="text-gray-600">Conducts engaging interviews with guests</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">📻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Events</h3>
              <p className="text-gray-600">MC and host for KLAQ remote broadcasts</p>
            </div>
          </div>
        </div>
      </div>

      {/* KLAQ Contributions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Contributing to KLAQ's Success
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Production Excellence</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Creates high-quality audio content and segments</p>
                <p>• Ensures technical smooth operation of live shows</p>
                <p>• Develops innovative programming concepts</p>
                <p>• Maintains professional broadcast standards</p>
                <p>• Collaborates on station promotions and events</p>
                <p>• Provides technical support for all programming</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">On-Air Contributions</h3>
              <div className="space-y-3 text-gray-600">
                <p>• Provides reliable fill-in hosting when needed</p>
                <p>• Hosts special programming and events</p>
                <p>• Conducts professional interviews and segments</p>
                <p>• Represents KLAQ at community events</p>
                <p>• Supports promotional activities and contests</p>
                <p>• Maintains consistent brand voice and quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the KLAQ Difference
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Daniel's behind-the-scenes excellence and on-air talent help make KLAQ El Paso's best rock station
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎵</span>
              Listen Live
            </Link>
            <Link
              href="/shows"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📻</span>
              Show Schedule
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">🎭</span>
              KLAQ Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
