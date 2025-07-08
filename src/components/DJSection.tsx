'use client';

import { useState } from 'react';
import { Clock, Twitter, Instagram, Facebook, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

interface DJ {
  id: string;
  name: string;
  showName: string;
  timeSlot: string;
  bio: string;
  image?: string;
  social: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  specialties: string[];
  yearsOnAir: number;
}

// Real KLAQ DJ data based on official klaq.com
const djProfiles: DJ[] = [
  {
    id: 'buzz-adams',
    name: 'Buzz Adams',
    showName: 'The Buzz Adams Morning Show',
    timeSlot: '5:00 AM - 10:00 AM',
    bio: 'Buzz Adams is a proud Okie hailing from the 41st largest city in the Sooner state. After stints in the manufacturing and agriculture sectors, a young Buzz realized early on that he wasn\'t "cut out" for "real work". He decided to pursue radio and has achieved local stardom on KLAQ.',
    image: '/images/djs/buzz-adams.jpg',
    social: {
      twitter: '@BuzzAdamsShow',
      instagram: '@buzzadamsshow'
    },
    specialties: ['Morning Show', 'Local News', 'Comedy'],
    yearsOnAir: 15
  },
  {
    id: 'joanna-barba',
    name: 'Joanna Barba',
    showName: 'The Buzz Adams Morning Show',
    timeSlot: '5:00 AM - 10:00 AM',
    bio: 'Joanna Barba, AKA Joanna Barbacoa, is the producer for the Buzz Adams Morning Show. She\'s known for her infectious laugh and loves all things entertainment: movies, shows, games, and celebrity gossip.',
    image: '/images/djs/joanna-barba.jpg',
    social: {
      twitter: '@JoannaBarbacoa',
      instagram: '@joannabarbacoa'
    },
    specialties: ['Entertainment', 'Movies & TV', 'Celebrity Gossip'],
    yearsOnAir: 8
  },
  {
    id: 'nico-adjemian',
    name: 'Nico Adjemian',
    showName: 'The Buzz Adams Morning Show',
    timeSlot: '5:00 AM - 10:00 AM',
    bio: 'Nico is a nationally touring stand-up comic and co-host of the Buzz Adams Morning Show. Born and raised in El Paso, he graduated from Silva Magnet/Jefferson High School. A former EMT, Nico decided to make people feel better through laughter instead.',
    image: '/images/djs/nico-adjemian.jpg',
    social: {
      twitter: '@NicoAdjemian',
      instagram: '@nicoadjemian'
    },
    specialties: ['Stand-up Comedy', 'Local Stories', 'Former EMT'],
    yearsOnAir: 6
  },
  {
    id: 'glenn-garza',
    name: 'Glenn "Dubba G" Garza',
    showName: 'Middays with Glenn Garza',
    timeSlot: '2:00 PM - 7:00 PM',
    bio: 'Known as "Dubba-G," Glenn has been rocking the Borderland for years and is one of the most trusted voices when it comes to all things rock. He also knows all the best bars, where to find the best steaks, tacos, and various junk food around town.',
    image: '/images/djs/glenn-garza.jpg',
    social: {
      twitter: '@DubbaG',
      instagram: '@dubbag_klaq'
    },
    specialties: ['Rock Music', 'Local Food', 'El Paso Culture'],
    yearsOnAir: 12
  },
  {
    id: 'chuck-armstrong',
    name: 'Chuck Armstrong',
    showName: 'Loudwire Nights',
    timeSlot: '7:00 PM - 12:00 AM',
    bio: 'For as long as he can remember, Chuck has been crazy about rock and roll. His first concert was Def Leppard when he was five years old and the rest, as they say, is history. Chuck brings "THE ROCK THAT MATTERS!"',
    image: '/images/djs/chuck-armstrong.jpg',
    social: {
      twitter: '@ChuckArmstrong',
      instagram: '@chuckarmstrong'
    },
    specialties: ['Rock History', 'Concert Reviews', 'Metal'],
    yearsOnAir: 7
  },
  {
    id: 'kat',
    name: 'Kat',
    showName: 'Digital Content Creator',
    timeSlot: 'Various',
    bio: 'Kat is a digital content creator and on-air personality who works for Townsquare Media in El Paso, Texas. She brings fresh energy and creativity to KLAQ\'s digital presence.',
    image: '/images/djs/kat.jpg',
    social: {
      twitter: '@KatKLAQ',
      instagram: '@katklaq'
    },
    specialties: ['Digital Content', 'Social Media', 'Creative Production'],
    yearsOnAir: 5
  }
];

export default function DJSection() {
  const [selectedDJ, setSelectedDJ] = useState<DJ | null>(null);

  const openDJModal = (dj: DJ) => {
    setSelectedDJ(dj);
  };

  const closeDJModal = () => {
    setSelectedDJ(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the DJs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The voices behind El Paso's best rock station - bringing you the music and entertainment you love 24/7
          </p>
        </motion.div>

        {/* DJ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {djProfiles.map((dj, index) => (
            <motion.div
              key={dj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* DJ Image/Avatar */}
              <div className="aspect-square bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
                {dj.image ? (
                  <img
                    src={dj.image}
                    alt={dj.name}
                    className="w-full h-full object-contain bg-gray-100"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center" style={{ display: dj.image ? 'none' : 'flex' }}>
                  <Mic className="w-16 h-16 text-white/80" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* DJ Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{dj.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{dj.showName}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{dj.timeSlot}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{dj.bio}</p>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {dj.specialties.slice(0, 2).map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {dj.specialties.length > 2 && (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{dj.specialties.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {dj.social.twitter && (
                      <a
                        href={`https://twitter.com/${dj.social.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        aria-label={`${dj.name} on Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {dj.social.instagram && (
                      <a
                        href={`https://instagram.com/${dj.social.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-pink-600 hover:text-pink-700 transition-colors duration-200"
                        aria-label={`${dj.name} on Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {dj.social.facebook && (
                      <a
                        href={`https://facebook.com${dj.social.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        aria-label={`${dj.name} on Facebook`}
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => openDJModal(dj)}
                    className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 focus-visible"
                  >
                    Learn More
                  </button>
                </div>

                {/* Years on Air */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    {dj.yearsOnAir} years on air
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Daily Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {djProfiles.map((dj) => (
              <div
                key={`schedule-${dj.id}`}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">{dj.showName}</p>
                  <p className="text-sm text-gray-600">{dj.name}</p>
                </div>
                <p className="text-sm font-medium text-red-600">{dj.timeSlot}</p>
              </div>
            ))}
          </div>
          
          {/* Meet More DJs Button */}
          <div className="text-center mt-8">
            <a
              href="/djs"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 focus-visible"
            >
              <span>Meet All Our DJs</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <p className="text-sm text-gray-600 mt-2">
              Learn more about our entire team and their stories
            </p>
          </div>
        </motion.div>
      </div>

      {/* DJ Detail Modal */}
      {selectedDJ && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeDJModal}
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedDJ.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{selectedDJ.showName}</p>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{selectedDJ.timeSlot}</span>
                  </div>
                </div>
                <button
                  onClick={closeDJModal}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <span className="text-2xl text-gray-500">×</span>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                  <p className="text-gray-600">{selectedDJ.bio}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDJ.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600">{selectedDJ.yearsOnAir} years on air at KLAQ</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Follow {selectedDJ.name}</h4>
                  <div className="flex space-x-3">
                    {selectedDJ.social.twitter && (
                      <a
                        href={`https://twitter.com/${selectedDJ.social.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 rounded-lg transition-colors duration-200"
                      >
                        <Twitter className="w-4 h-4" />
                        <span>{selectedDJ.social.twitter}</span>
                      </a>
                    )}
                    {selectedDJ.social.instagram && (
                      <a
                        href={`https://instagram.com/${selectedDJ.social.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 text-pink-600 hover:text-pink-700 border border-pink-200 hover:border-pink-300 rounded-lg transition-colors duration-200"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>{selectedDJ.social.instagram}</span>
                      </a>
                    )}
                    {selectedDJ.social.facebook && (
                      <a
                        href={`https://facebook.com${selectedDJ.social.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 rounded-lg transition-colors duration-200"
                      >
                        <Facebook className="w-4 h-4" />
                        <span>Facebook</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
