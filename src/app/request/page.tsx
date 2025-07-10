import Link from 'next/link';
import { Music, Phone, Mail, MessageCircle } from 'lucide-react';

export default function RequestPage() {
  return (
    <main className="page-container bg-gray-50">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container-responsive text-center">
          <Music className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Request Your Favorite Rock Songs
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mt-4 max-w-3xl mx-auto">
            Got a song that rocks your world? Let us know! Request your favorite tracks and 
            we'll do our best to get them on the air. Help shape the sound of El Paso's Best Rock.
          </p>
        </div>
      </section>

      {/* Request Methods */}
      <section className="py-16">
        <div className="container-responsive">
          <h2 className="section-title text-center mb-12">How to Request a Song</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call the Station</h3>
              <p className="content-text mb-4">
                Call our request line and talk directly to our DJs
              </p>
              <a href="tel:915-544-9555" className="btn-primary inline-block">
                Call (915) 544-9555
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="content-text mb-4">
                Send us your requests via email anytime
              </p>
              <a href="mailto:requests@klaq.com" className="btn-secondary inline-block">
                Send Email
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media</h3>
              <p className="content-text mb-4">
                Hit us up on social media with your requests
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-red-600 hover:text-red-700 font-medium">Twitter</a>
                <a href="#" className="text-red-600 hover:text-red-700 font-medium">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Guidelines */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8">Request Guidelines</h2>
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Keep it Rock</h3>
                  <p className="content-text">We play rock music, so make sure your requests fit our format - classic rock, modern rock, alternative, and metal.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Be Patient</h3>
                  <p className="content-text">We get lots of requests! While we can't play every song, we do our best to honor as many as possible.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Be Specific</h3>
                  <p className="content-text">Include both the song title and artist name to help us find exactly what you're looking for.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
