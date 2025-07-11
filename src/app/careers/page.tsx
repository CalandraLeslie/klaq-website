import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers & Internships | Join the KLAQ Team',
  description: 'Join the KLAQ family! Explore career opportunities and internship programs at El Paso\'s Best Rock station. We\'re looking for passionate radio professionals.',
  keywords: 'KLAQ careers, radio jobs, internships, El Paso jobs, broadcasting careers, media jobs',
  openGraph: {
    title: 'Careers & Internships | Join the KLAQ Team',
    description: 'Join the KLAQ family! Explore career opportunities and internship programs.',
    type: 'website',
    url: 'https://klaq.com/careers',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-3xl">🚀</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-purple-200">
              Careers & Internships at KLAQ
            </p>
            <div className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
              <p>
                Ready to rock your career? KLAQ is always looking for passionate, 
                creative, and dedicated people to join our team and help make El Paso's Best Rock even better.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200 font-semibold"
              >
                <span className="mr-2">📧</span>
                Submit Application
              </Link>
              <Link
                href="#internships"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-200 font-semibold"
              >
                <span className="mr-2">🎓</span>
                Internship Info
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why KLAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Work at KLAQ?
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                KLAQ isn't just a radio station – we're a family. For decades, we've 
                been El Paso's soundtrack, and our team is the heart of everything we do. 
                When you join KLAQ, you're not just taking a job, you're becoming part 
                of a legacy.
              </p>
              <p>
                We believe in fostering creativity, encouraging innovation, and supporting 
                professional growth. Our team members are passionate about music, 
                entertainment, and serving the El Paso community.
              </p>
              <p>
                From on-air personalities to behind-the-scenes technical wizards, 
                sales professionals to digital content creators – every role at KLAQ 
                contributes to our mission of keeping El Paso rocking.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Team Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🎵</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Creative Freedom</h4>
                  <p className="text-gray-600">Express your creativity and ideas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">📈</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Growth Opportunities</h4>
                  <p className="text-gray-600">Advance your career in broadcasting</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Industry Recognition</h4>
                  <p className="text-gray-600">Work for El Paso's #1 rock station</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">🤝</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Team Environment</h4>
                  <p className="text-gray-600">Collaborative and supportive culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">On-Air Talent</h3>
              <p className="text-gray-600">Radio hosts, DJs, and on-air personalities</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600">Audio producers, editors, and content creators</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Engineering</h3>
              <p className="text-gray-600">Broadcast engineers and technical support</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sales</h3>
              <p className="text-gray-600">Account executives and sales support</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Media</h3>
              <p className="text-gray-600">Social media, web content, and digital marketing</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <div className="w-16 h-16 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Administration</h3>
              <p className="text-gray-600">Operations, HR, and business support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Program */}
      <div id="internships" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Internship Program
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Program Overview</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                KLAQ's internship program offers students and recent graduates hands-on 
                experience in radio broadcasting, digital media, and entertainment marketing. 
                Our interns work alongside industry professionals and gain real-world 
                experience in all aspects of radio operations.
              </p>
              <p>
                Whether you're studying communications, marketing, music business, or 
                related fields, our internship program provides valuable insight into 
                the broadcasting industry and career development opportunities.
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Program Benefits:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    <span>Hands-on radio production experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <span>Mentorship from industry professionals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                    <span>Portfolio development opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    <span>Networking within the industry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Internship Areas</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">On-Air Production</h4>
                <p className="text-gray-600 text-sm">Learn radio hosting, interviewing, and live broadcasting</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Audio Production</h4>
                <p className="text-gray-600 text-sm">Create commercials, promos, and show content</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Digital Marketing</h4>
                <p className="text-gray-600 text-sm">Social media management and content creation</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Event Production</h4>
                <p className="text-gray-600 text-sm">Support live events and remote broadcasts</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Sales Support</h4>
                <p className="text-gray-600 text-sm">Learn radio advertising and client relations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Apply
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Career Positions</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Submit Resume</h4>
                    <p className="text-sm">Send your resume and cover letter</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Portfolio/Demo</h4>
                    <p className="text-sm">Include relevant work samples if applicable</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Interview Process</h4>
                    <p className="text-sm">Phone screening followed by in-person interview</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Background Check</h4>
                    <p className="text-sm">Standard employment verification process</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Internship Applications</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Academic Standing</h4>
                    <p className="text-sm">Must be enrolled student or recent graduate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Application Letter</h4>
                    <p className="text-sm">Explain your interests and career goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Schedule Flexibility</h4>
                    <p className="text-sm">Ability to commit to regular schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Interview & Tour</h4>
                    <p className="text-sm">Meet the team and see our facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We're Looking For */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What We're Looking For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Qualities</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Passionate about music and entertainment</p>
                <p>• Creative and innovative thinking</p>
                <p>• Strong communication skills</p>
                <p>• Team player with positive attitude</p>
                <p>• Reliable and professional</p>
                <p>• Adaptable to fast-paced environment</p>
                <p>• Commitment to excellence</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Professional Skills</h3>
              <div className="space-y-3 text-gray-700">
                <p>• Relevant education or experience</p>
                <p>• Audio production knowledge (preferred)</p>
                <p>• Social media and digital marketing familiarity</p>
                <p>• Public speaking and presentation abilities</p>
                <p>• Computer proficiency and tech-savvy</p>
                <p>• Customer service orientation</p>
                <p>• Willingness to learn and grow</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Rock Your Career?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join the KLAQ family and help us keep El Paso rocking!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📧</span>
              Send Application
            </Link>
            <Link
              href="/listen"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📻</span>
              Listen Live
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              Contact Us
            </Link>
          </div>
          <div className="mt-8 text-center">
            <p className="text-purple-200">
              Email your resume and cover letter to: <strong>careers@klaq.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
