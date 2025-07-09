import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Music Festivals - 95.5 KLAQ',
  description: 'Rock out at the best music festivals in El Paso and beyond. KLAQ brings you festival coverage and exclusive access!',
};

export default function FestivalEventsPage() {
  const festivals = [
    {
      id: 1,
      title: 'El Paso Rock Fest',
      date: '2024-09-14',
      endDate: '2024-09-15',
      location: 'Ascarate Park',
      headliners: ['Alice in Chains', 'Stone Temple Pilots', 'Bush'],
      description: 'Two days of non-stop rock featuring legendary bands and rising stars.',
      price: '$150 - $400',
      rating: 4.8,
      expectedAttendance: '25,000'
    },
    {
      id: 2,
      title: 'Desert Rock Festival',
      date: '2024-10-25',
      endDate: '2024-10-27',
      location: 'Franklin Mountains State Park',
      headliners: ['Tool', 'Perfect Circle', 'Mastodon'],
      description: 'Progressive and alternative rock in the stunning desert landscape.',
      price: '$200 - $500',
      rating: 4.9,
      expectedAttendance: '15,000'
    },
    {
      id: 3,
      title: 'KLAQ Summer Jam',
      date: '2024-07-20',
      endDate: '2024-07-21',
      location: 'Cohen Stadium',
      headliners: ['Green Day', 'The Offspring', 'Bad Religion'],
      description: 'KLAQ\'s signature summer festival featuring punk and alternative rock.',
      price: '$120 - $350',
      rating: 4.7,
      expectedAttendance: '18,000'
    }
  ];

  const formatDate = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start.toDateString() === end.toDateString()) {
      return start.toLocaleDateString();
    }
    
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
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
          <h1 className="text-4xl font-bold mb-4">Music Festivals</h1>
          <p className="text-xl text-red-100">
            Epic multi-day rock festivals in El Paso and the Southwest
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {festivals.map((festival) => (
            <div
              key={festival.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {festival.title}
                    </h2>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(festival.date, festival.endDate)}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{festival.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{festival.expectedAttendance} expected attendees</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-2">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      <span className="font-semibold">{festival.rating}</span>
                    </div>
                    <p className="text-2xl font-bold text-red-600">
                      {festival.price}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Headliners</h3>
                  <div className="flex flex-wrap gap-2">
                    {festival.headliners.map((headliner, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {headliner}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-lg">
                  {festival.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                    Get Festival Passes
                  </button>
                  <button className="px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-semibold">
                    View Lineup
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Festival Coverage by KLAQ</h2>
          <p className="text-red-100 mb-6 text-lg">
            KLAQ 95.5 provides exclusive coverage of all major rock festivals. Get behind-the-scenes access, artist interviews, and live broadcasts from the festival grounds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/listen"
              className="bg-white text-red-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
            >
              Listen Live
            </Link>
            <Link
              href="/news"
              className="border border-white text-white py-3 px-6 rounded-lg hover:bg-white/10 transition-colors text-center font-semibold"
            >
              Festival News
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
