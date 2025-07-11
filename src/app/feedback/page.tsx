import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Feedback - Tell Us What You Think | KLAQ 95.5 FM',
  description: 'Share your feedback with KLAQ! Let us know what you think about our programming, DJs, music, and how we can serve El Paso better.',
  keywords: 'KLAQ feedback, listener feedback, radio feedback, El Paso radio, suggestions',
  openGraph: {
    title: 'Feedback - Tell Us What You Think | KLAQ 95.5 FM',
    description: 'Share your feedback with KLAQ! Let us know what you think.',
    type: 'website',
    url: 'https://klaq.com/feedback',
    siteName: 'KLAQ 95.5 FM'
  }
}

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-3xl">💬</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
              Your Feedback
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-orange-200">
              Tell Us What You Think
            </p>
            <div className="max-w-3xl mx-auto text-lg text-gray-200 mb-8">
              <p>
                Your opinion matters to us! Help KLAQ continue to be El Paso's Best Rock 
                station by sharing your thoughts, suggestions, and feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Share Your Thoughts</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="feedback-type" className="block text-sm font-medium text-gray-700 mb-2">
                Feedback Type
              </label>
              <select
                id="feedback-type"
                name="feedback-type"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Select feedback type</option>
                <option value="programming">Programming & Music</option>
                <option value="djs">DJs & Hosts</option>
                <option value="contests">Contests & Events</option>
                <option value="website">Website & Technology</option>
                <option value="advertising">Advertising</option>
                <option value="suggestion">General Suggestion</option>
                <option value="complaint">Complaint</option>
                <option value="compliment">Compliment</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Brief description of your feedback"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Feedback
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                I'd like to receive updates and news from KLAQ
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-semibold text-lg"
            >
              Send Feedback
            </button>
          </form>
        </div>
      </div>

      {/* Why Your Feedback Matters */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Your Feedback Matters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Better Programming</h3>
              <p className="text-gray-600">Your input helps us choose the music and shows you want to hear</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎙️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Improved Shows</h3>
              <p className="text-gray-600">Feedback helps our DJs and hosts connect better with listeners</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Better Experience</h3>
              <p className="text-gray-600">We use your suggestions to improve everything we do</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Ways to Connect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Other Ways to Connect
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Call or Text Us</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold">Request Line</h4>
                  <p className="text-sm">(915) 581-1055</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">💬</span>
                </div>
                <div>
                  <h4 className="font-semibold">Text KLAQ</h4>
                  <p className="text-sm">Text 877-877</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm">feedback@klaq.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Social Media</h3>
            <div className="space-y-4 text-gray-700">
              <p>Follow us and share your thoughts on social media:</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📘</span>
                  </div>
                  <span>Facebook: @KLAQRocks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🐦</span>
                  </div>
                  <span>Twitter: @KLAQ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📸</span>
                  </div>
                  <span>Instagram: @klaqofficial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Keep the Conversation Going
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Your feedback helps us rock El Paso better every day
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
