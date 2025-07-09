import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, DollarSign, Music } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Concert Events - 95.5 KLAQ',
  description: 'Discover upcoming rock concerts and live music events in El Paso. KLAQ brings you the best rock shows!',
};

export default function ConcertEventsPage() {
  const concerts = [
    {
      id: 1,
      title: 'Metallica World Tour',
      artist: 'Metallica',
      date: '2024-10-15',
      time: '8:00 PM',
      venue: 'Don Haskins Center',
      price: '$85 - $250',
      description: 'The legendary metal band returns to El Paso with their world tour featuring classic hits and new material.',
      ticketUrl: '#'
    },
    {
      id: 2,
      title: 'Foo Fighters Live',
      artist: 'Foo Fighters',
      date: '2024-11-08',
      time: '7:30 PM',
      venue: 'El Paso County Coliseum',
      price: '$65 - $180',
      description: 'Dave Grohl and the Foo Fighters bring their high-energy rock show to the Sun City.',
      ticketUrl: '#'
    },
    {
      id: 3,
      title: 'Local Legends Showcase',
      artist: 'Various Artists',
      date: '2024-09-30',
      time: '6:00 PM',
      venue: 'Tricky Falls',
      price: '$25 - $45',
      description: 'KLAQ presents the best local rock bands in an intimate venue setting.',
      ticketUrl: '#'
    },
    {
      id: 4,
      title: 'Classic Rock Revival',
      artist: 'Journey & Foreigner',
      date: '2024-12-05',
      time: '7:00 PM',
      venue: 'Abraham Chavez Theatre',
      price: '$95 - $275',
      description: 'Two classic rock legends share the stage for an unforgettable night of hits.',
      ticketUrl: '#'
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
          <h1 className="text-4xl font-bold mb-4">Concert Events</h1>
          <p className="text-xl text-red-100">
            The hottest rock concerts and live music events in El Paso
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {concerts.map((concert) => (
            <div
              key={concert.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      {concert.title}
                    </h2>
                    <p className="text-lg text-red-600 font-semibold">
                      {concert.artist}
                    </p>
                  </div>
                  <Music className="w-8 h-8 text-red-500" />
                </div>
                
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(concert.date).toLocaleDateString()} at {concert.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{concert.venue}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>{concert.price}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {concert.description}
                </p>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    Get Tickets
                  </button>
                  <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Concert Alerts</h2>
          <p className="text-gray-700 mb-6">
            Never miss your favorite artists! Sign up for KLAQ concert alerts and be the first to know about upcoming shows, presale codes, and exclusive events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email for concert alerts"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
