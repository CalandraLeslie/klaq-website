import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Radio, Gift, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Station Events - 95.5 KLAQ',
  description: 'Join KLAQ 95.5 FM at exclusive station events, remote broadcasts, and special appearances throughout El Paso.',
};

export default function StationEventsPage() {
  const stationEvents = [
    {
      id: 1,
      title: 'KLAQ Remote Broadcast',
      date: '2024-08-10',
      time: '7:00 AM - 10:00 AM',
      location: 'Sunland Park Mall',
      type: 'Remote Broadcast',
      description: 'Join Buzz Adams and the morning crew for a live remote broadcast. Meet the DJs, win prizes, and rock out!',
      features: ['Live DJ Meet & Greet', 'Prize Giveaways', 'Music & Fun']
    },
    {
      id: 2,
      title: 'KLAQ Listener Appreciation Day',
      date: '2024-09-05',
      time: '12:00 PM - 6:00 PM',
      location: 'KLAQ Studios',
      type: 'Open House',
      description: 'Exclusive behind-the-scenes tour of KLAQ studios, meet all your favorite DJs, and celebrate with fellow rock fans.',
      features: ['Studio Tours', 'DJ Meet & Greets', 'Exclusive Merchandise', 'Live Performances']
    },
    {
      id: 3,
      title: 'Rock & Shop Event',
      date: '2024-08-25',
      time: '11:00 AM - 3:00 PM',
      location: 'Bassett Center',
      type: 'Remote Broadcast',
      description: 'KLAQ teams up with local retailers for a day of shopping, music, and prizes.',
      features: ['Special Discounts', 'Music & Entertainment', 'Prize Wheel']
    },
    {
      id: 4,
      title: 'KLAQ Car Show Appearance',
      date: '2024-10-12',
      time: '10:00 AM - 4:00 PM',
      location: 'Memorial Park',
      type: 'Special Appearance',
      description: 'KLAQ DJs judge the classic car show and provide entertainment for all attendees.',
      features: ['Classic Rock Soundtrack', 'DJ Appearances', 'Prize Giveaways']
    },
    {
      id: 5,
      title: 'Holiday Party Remote',
      date: '2024-12-20',
      time: '4:00 PM - 7:00 PM',
      location: 'Westside Event Center',
      type: 'Holiday Event',
      description: 'Celebrate the holidays with KLAQ! Live broadcast, holiday music, and special guests.',
      features: ['Holiday Music', 'Special Guests', 'Hot Chocolate & Treats', 'Family Fun']
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Remote Broadcast':
        return 'bg-blue-100 text-blue-800';
      case 'Open House':
        return 'bg-green-100 text-green-800';
      case 'Special Appearance':
        return 'bg-purple-100 text-purple-800';
      case 'Holiday Event':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
          <h1 className="text-4xl font-bold mb-4">Station Events</h1>
          <p className="text-xl text-red-100">
            Exclusive KLAQ 95.5 events, remote broadcasts, and special appearances
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {stationEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h2>
                  </div>
                  <Radio className="w-6 h-6 text-red-500 ml-4" />
                </div>
                
                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {event.description}
                </p>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Gift className="w-4 h-4 mr-1" />
                    Event Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                  Get Event Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-red-600" />
              Want KLAQ at Your Event?
            </h2>
            <p className="text-gray-700 mb-4">
              Planning a community event, grand opening, or celebration? KLAQ loves supporting local businesses and organizations with remote broadcasts and DJ appearances.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Request Appearance
            </Link>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Radio className="w-5 h-5 mr-2 text-red-600" />
              Stay Updated
            </h2>
            <p className="text-gray-700 mb-4">
              Never miss a KLAQ event! Follow us on social media and tune in daily for announcements about upcoming remote broadcasts and special appearances.
            </p>
            <div className="flex gap-3">
              <Link
                href="/listen"
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                Listen Live
              </Link>
              <Link
                href="#"
                className="border border-red-600 text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors text-sm"
              >
                Follow Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
