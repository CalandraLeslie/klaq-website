import Image from 'next/image'

interface Show {
  id: string
  title: string
  host: string
  time: string
  days: string
  description: string
  image?: string
  featured?: boolean
}

const shows: Show[] = [
  {
    id: 'buzz-adams-morning-show',
    title: 'The Buzz Adams Morning Show',
    host: 'Buzz Adams',
    time: '6:00 AM - 10:00 AM',
    days: 'Monday - Friday',
    description: 'Wake up with El Paso with Buzz Adams! Start your morning with the latest rock hits, local news, weather updates, and Buzz\'s signature humor that gets the whole city talking.',
    image: '/images/djs/buzz-adams.jpg',
    featured: true
  },
  {
    id: 'kat-afternoon-drive',
    title: 'Kat\'s Afternoon Drive',
    host: 'Kat',
    time: '3:00 PM - 7:00 PM',
    days: 'Monday - Friday',
    description: 'Rock your drive home with Kat! The perfect mix of classic rock, current hits, and traffic updates to get you through El Paso\'s rush hour in style.',
    image: '/images/djs/kat.jpg',
    featured: true
  },
  {
    id: 'metal-mayhem',
    title: 'Metal Mayhem',
    host: 'Chuck Armstrong',
    time: '8:00 PM - 12:00 AM',
    days: 'Friday - Saturday',
    description: 'Turn it up to 11! Chuck brings you the heaviest metal, from classic headbangers to the latest crushing tracks. Not for the faint of heart.',
    image: '/images/djs/chuck-armstrong.jpg'
  },
  {
    id: 'classic-rock-cafe',
    title: 'Classic Rock Café',
    host: 'Glenn Garza',
    time: '10:00 AM - 3:00 PM',
    days: 'Monday - Friday',
    description: 'Take a trip back in time with the greatest rock anthems of all time. Glenn serves up the classics that built rock and roll.',
    image: '/images/djs/glenn-garza.jpg'
  },
  {
    id: 'sunday-rock-block',
    title: 'Sunday Rock Block',
    host: 'Nico Adjemian',
    time: '12:00 PM - 6:00 PM',
    days: 'Sunday',
    description: 'Six hours of non-stop rock to soundtrack your Sunday. From mellow Sunday morning vibes to high-energy rock anthems.',
    image: '/images/djs/nico-adjemian.jpg'
  },
  {
    id: 'late-night-rock',
    title: 'Late Night Rock',
    host: 'Joanna Barba',
    time: '12:00 AM - 6:00 AM',
    days: 'Every Night',
    description: 'For the night owls and early birds. Joanna keeps you company through the late hours with deep cuts and rock essentials.',
    image: '/images/djs/joanna-barba.jpg'
  }
]

export default function ShowsPage() {
  const featuredShows = shows.filter(show => show.featured)
  const regularShows = shows.filter(show => !show.featured)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            KLAQ 95.5 Shows
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Experience the best in rock music with our lineup of talented hosts and DJs. 
            From morning wake-up calls to late-night rock sessions, we've got your day covered.
          </p>
        </div>
      </section>

      {/* Featured Shows */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Featured Shows
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredShows.map((show) => (
              <div key={show.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    {show.image && (
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={show.image}
                          alt={show.host}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {show.title}
                    </h3>
                    <p className="text-red-600 font-semibold mb-1">
                      Hosted by {show.host}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {show.days} • {show.time}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {show.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Shows Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Complete Show Lineup
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show) => (
              <div key={show.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {show.image && (
                  <div className="relative h-48">
                    <Image
                      src={show.image}
                      alt={show.host}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {show.title}
                  </h3>
                  <p className="text-red-600 font-semibold mb-1">
                    {show.host}
                  </p>
                  <p className="text-gray-600 mb-3 text-sm">
                    {show.days} • {show.time}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {show.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Weekly Schedule
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Time</th>
                    <th className="px-4 py-3 text-left">Monday - Friday</th>
                    <th className="px-4 py-3 text-left">Saturday</th>
                    <th className="px-4 py-3 text-left">Sunday</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 font-semibold">6:00 AM - 10:00 AM</td>
                    <td className="px-4 py-4">The Buzz Adams Morning Show</td>
                    <td className="px-4 py-4">Weekend Rock Mix</td>
                    <td className="px-4 py-4">Sunday Morning Rock</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-4 font-semibold">10:00 AM - 3:00 PM</td>
                    <td className="px-4 py-4">Classic Rock Café</td>
                    <td className="px-4 py-4">Saturday Rock Hits</td>
                    <td className="px-4 py-4">Sunday Rock Block</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">3:00 PM - 7:00 PM</td>
                    <td className="px-4 py-4">Kat's Afternoon Drive</td>
                    <td className="px-4 py-4">Weekend Drive Time</td>
                    <td className="px-4 py-4">Sunday Rock Block (cont.)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-4 font-semibold">7:00 PM - 12:00 AM</td>
                    <td className="px-4 py-4">Rock Nights</td>
                    <td className="px-4 py-4">Metal Mayhem</td>
                    <td className="px-4 py-4">Sunday Night Rock</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">12:00 AM - 6:00 AM</td>
                    <td className="px-4 py-4">Late Night Rock</td>
                    <td className="px-4 py-4">Late Night Rock</td>
                    <td className="px-4 py-4">Late Night Rock</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Never Miss Your Favorite Show
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Tune in to KLAQ 95.5 FM or listen online to catch all your favorite shows and discover new ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/listen" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Listen Live
            </a>
            <a 
              href="/request" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300"
            >
              Request a Song
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
