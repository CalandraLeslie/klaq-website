import Link from 'next/link';
import { Calendar, MapPin, Clock, Users, Music, Ticket } from 'lucide-react';

export default function EventsPage() {
  return (
    <main className="page-container bg-gray-50">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container-responsive text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Rock Events & Shows</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mt-4 max-w-3xl mx-auto">
            Discover the hottest concerts, festivals, and rock events happening in El Paso and beyond. 
            Your gateway to unforgettable live music experiences.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-red-100">
            <div className="flex items-center space-x-2">
              <Music className="w-5 h-5" />
              <span className="font-medium">Live Concerts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Festivals</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="font-medium">Community Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="section-title">Event Categories</h2>
            <p className="section-subtitle mx-auto">
              Explore different types of events and find what rocks your world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/events/concerts" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 text-white text-center">
                  <Music className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Concerts</h3>
                </div>
                <div className="p-6">
                  <p className="content-text">
                    Major touring acts and local bands bringing the best rock music to El Paso
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/events/festivals" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Festivals</h3>
                </div>
                <div className="p-6">
                  <p className="content-text">
                    Multi-day music festivals featuring multiple artists and non-stop rock
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/events/community" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 text-white text-center">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Community</h3>
                </div>
                <div className="p-6">
                  <p className="content-text">
                    Local meetups, listening parties, and community-driven rock events
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/events/station-events" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white text-center">
                  <Ticket className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Station Events</h3>
                </div>
                <div className="p-6">
                  <p className="content-text">
                    Exclusive KLAQ events, meet & greets, and special station promotions
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-16 bg-white">
        <div className="container-responsive text-center">
          <h2 className="section-title">Stay in the Loop</h2>
          <p className="section-subtitle mx-auto mb-8">
            Never miss a show! Get notifications about upcoming events and exclusive presale opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Subscribe to Event Alerts
            </button>
            <button className="btn-secondary">
              Follow Us on Social Media
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
