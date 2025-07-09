import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community Events - 95.5 KLAQ',
  description: 'Join KLAQ 95.5 FM at community events throughout El Paso. Rock out with your neighbors!',
};

export default function CommunityEventsPage() {
  const communityEvents = [
    {
      id: 1,
      title: 'KLAQ Rock the Block',
      date: '2024-08-15',
      time: '6:00 PM',
      location: 'Cleveland Square Park',
      description: 'Join us for a free community concert featuring local rock bands.',
      attendees: 250
    },
    {
      id: 2,
      title: 'El Paso Music Festival',
      date: '2024-09-20',
      time: '2:00 PM',
      location: 'San Jacinto Plaza',
      description: 'KLAQ presents local and regional rock acts in downtown El Paso.',
      attendees: 500
    },
    {
      id: 3,
      title: 'Holiday Rock Celebration',
      date: '2024-12-15',
      time: '7:00 PM',
      location: 'Don Haskins Center',
      description: 'Annual holiday celebration with classic rock favorites.',
      attendees: 1200
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/events"
            className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>
          <h1 className="text-4xl font-bold mb-4">Community Events</h1>
          <p className="text-xl text-red-100">
            Join KLAQ 95.5 FM at community events throughout El Paso
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {communityEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h2>
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.attendees} expected attendees</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  {event.description}
                </p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-gray-700 mb-6">
            Want to bring KLAQ 95.5 to your community event? We love supporting local gatherings with live broadcasts, DJ appearances, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors text-center"
            >
              Contact Us
            </Link>
            <Link
              href="/events"
              className="border border-red-600 text-red-600 py-3 px-6 rounded-lg hover:bg-red-50 transition-colors text-center"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
