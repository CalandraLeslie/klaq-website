'use client';

import Link from 'next/link';
import { Clock, MapPin, Radio, Calendar, Users, Mail } from 'lucide-react';

// DJ data based on official KLAQ website
const klaqDJs = [
  {
    id: 'buzz-adams',
    name: 'Buzz Adams',
    role: 'Morning Show Host',
    show: 'The Buzz Adams Morning Show',
    timeSlot: '5:00 AM - 10:00 AM',
    days: 'Monday - Friday',
    image: '/images/djs/buzz-adams.jpg', // Placeholder for official KLAQ photo
    bio: 'Buzz Adams is a proud Okie hailing from the 41st largest city in the Sooner state. After stints in the manufacturing and agriculture sectors, a young Buzz realized early on that he wasn\'t "cut out" for "real work". He decided to pursue radio and has achieved local stardom on KLAQ.',
    socialMedia: {
      twitter: '@BuzzAdamsShow',
      instagram: '@buzzadamsshow'
    },
    favoriteQuote: 'Real work is overrated!',
    hometown: 'Oklahoma'
  },
  {
    id: 'joanna-barba',
    name: 'Joanna Barba',
    role: 'Producer / Entertainment Reporter',
    show: 'The Buzz Adams Morning Show',
    timeSlot: '5:00 AM - 10:00 AM',
    days: 'Monday - Friday',
    image: '/images/djs/joanna-barba.jpg', // Placeholder for official KLAQ photo
    bio: 'Joanna Barba, AKA Joanna Barbacoa, is the producer for the Buzz Adams Morning Show. She\'s known for her infectious laugh and loves all things entertainment: movies, shows, games, and celebrity gossip. Joanna owns four cats and proudly embraces being called the "cat lady".',
    socialMedia: {
      twitter: '@JoannaBarbacoa',
      instagram: '@joannabarbacoa'
    },
    favoriteQuote: 'Sometimes talking in movie quotes is the best way to communicate!',
    hometown: 'El Paso, TX (Northeast Side)'
  },
  {
    id: 'nico',
    name: 'Nico Adjemian',
    role: 'Co-Host / Stand-Up Comedian',
    show: 'The Buzz Adams Morning Show',
    timeSlot: '5:00 AM - 10:00 AM',
    days: 'Monday - Friday',
    image: '/images/djs/nico-adjemian.jpg', // Placeholder for official KLAQ photo
    bio: 'Nico is a nationally touring stand-up comic and co-host of the Buzz Adams Morning Show. Born and raised in El Paso, he graduated from Silva Magnet/Jefferson High School. A former EMT, Nico decided to make people feel better through laughter instead.',
    socialMedia: {
      twitter: '@NicoAdjemian',
      instagram: '@nicoadjemian'
    },
    favoriteQuote: 'Making people laugh is better than any emergency call!',
    hometown: 'El Paso, TX',
    credentials: 'Former EMT, Nationally Touring Comedian'
  },
  {
    id: 'dubba-g',
    name: 'Glenn "Dubba G" Garza',
    role: 'Afternoon Drive Host',
    show: 'Middays with Glenn Garza',
    timeSlot: '2:00 PM - 7:00 PM',
    days: 'Monday - Friday',
    image: '/images/djs/glenn-garza.jpg', // Placeholder for official KLAQ photo
    bio: 'Known as "Dubba-G," Glenn has been rocking the Borderland for years and is one of the most trusted voices when it comes to all things rock. He also knows all the best bars, where to find the best steaks, tacos, and various junk food around town.',
    socialMedia: {
      twitter: '@DubbaG',
      instagram: '@dubbag_klaq'
    },
    favoriteQuote: 'Rock and roll, great food, and good times!',
    hometown: 'El Paso, TX',
    specialties: ['Local Food Expert', 'Rock Music Encyclopedia']
  },
  {
    id: 'chuck-armstrong',
    name: 'Chuck Armstrong',
    role: 'Evening Host',
    show: 'Loudwire Nights',
    timeSlot: '7:00 PM - 12:00 AM',
    days: 'Monday - Friday',
    image: '/images/djs/chuck-armstrong.jpg', // Placeholder for official KLAQ photo
    bio: 'For as long as he can remember, Chuck has been crazy about rock and roll. His first concert was Def Leppard when he was five years old and the rest, as they say, is history. Chuck is the host of Loudwire Nights and brings "THE ROCK THAT MATTERS!"',
    socialMedia: {
      twitter: '@ChuckArmstrong',
      instagram: '@chuckarmstrong'
    },
    favoriteQuote: 'THE ROCK THAT MATTERS!',
    firstConcert: 'Def Leppard (age 5)',
    specialties: ['Rock History', 'Concert Reviews']
  },
  {
    id: 'kat',
    name: 'Kat',
    role: 'Digital Content Creator / Producer',
    show: 'Various Shows',
    timeSlot: 'Various',
    days: 'Monday - Friday',
    image: '/images/djs/kat.jpg',
    bio: 'Kat is a digital content creator and on-air personality who works for Townsquare Media in El Paso, Texas. She brings fresh energy and creativity to KLAQ\'s digital presence and social media engagement.',
    socialMedia: {
      twitter: '@KatKLAQ',
      instagram: '@katklaq'
    },
    favoriteQuote: 'Creating content that rocks El Paso!',
    hometown: 'El Paso, TX',
    experience: 'Digital Content Specialist'
  }
];

export default function DJsPage() {
  return (
    <div className="page-container bg-gray-50">
      {/* Hero Section */}
      <div className="page-hero bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container-responsive">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">Meet Your Rock Family</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-red-100 mt-4 max-w-3xl mx-auto">
              Get to know the passionate voices bringing you El Paso's Best Rock 24/7. 
              Our talented DJs are your connection to the music you love and the community you're part of.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-red-100">
              <div className="flex items-center space-x-2">
                <Radio className="w-5 h-5" />
                <span className="font-medium">Live & Local</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">Your Rock Family</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">El Paso, TX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DJs Grid */}
      <div className="container-responsive py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {klaqDJs.map((dj) => (
            <div key={dj.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* DJ Image */}
              <div className="relative h-64 bg-gradient-to-br from-red-500 to-red-700 overflow-hidden">
                <img
                  src={dj.image}
                  alt={dj.name}
                  className="w-full h-full object-contain bg-gray-100"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                </div>
                {/* Show info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg">{dj.name}</h3>
                  <p className="text-red-200 text-sm">{dj.role}</p>
                </div>
              </div>

              {/* DJ Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{dj.show}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      <span>{dj.timeSlot}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-red-500" />
                      <span>{dj.days}</span>
                    </div>
                    {dj.hometown && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span>{dj.hometown}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                  {dj.bio}
                </p>

                {dj.favoriteQuote && (
                  <blockquote className="border-l-4 border-red-500 pl-3 mb-4">
                    <p className="text-sm italic text-gray-600">"{dj.favoriteQuote}"</p>
                  </blockquote>
                )}

                {/* Social Media Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {dj.socialMedia?.twitter && (
                      <a
                        href={`https://twitter.com/${dj.socialMedia.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label={`Follow ${dj.name} on Twitter`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                    {dj.socialMedia?.instagram && (
                      <a
                        href={`https://instagram.com/${dj.socialMedia.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition-colors"
                        aria-label={`Follow ${dj.name} on Instagram`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <Link
                    href={`mailto:${dj.name.toLowerCase().replace(' ', '.')}@klaq.com`}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label={`Email ${dj.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-responsive text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Connect with Our DJs?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Call the request line, follow them on social media, or tune in live!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:9155445527"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              📞 Call (915) 544-KLAQ
            </a>
            <Link
              href="/listen"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              🎧 Listen Live
            </Link>
            <Link
              href="/contact"
              className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              📧 Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Show Schedule */}
      <div className="bg-white py-16">
        <div className="container-responsive">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Daily Schedule</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { time: '5:00 AM - 10:00 AM', show: 'The Buzz Adams Morning Show', host: 'Buzz, Joanna & Nico' },
                { time: '10:00 AM - 2:00 PM', show: "El Paso's Best Rock", host: 'Music & More' },
                { time: '2:00 PM - 7:00 PM', show: 'Glenn Garza', host: 'Dubba G' },
                { time: '7:00 PM - 12:00 AM', show: 'Loudwire Nights', host: 'Chuck Armstrong' },
                { time: '12:00 AM - 5:00 AM', show: 'Overnight Rock', host: 'KLAQ Classics' },
                { time: 'Weekends', show: 'Weekend Rock', host: 'Special Programming' }
              ].map((slot, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">{slot.show}</h3>
                      <p className="text-sm text-gray-600">{slot.host}</p>
                    </div>
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {slot.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
