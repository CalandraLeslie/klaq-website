'use client';

import { useState } from 'react';
import { Play, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import LiveStreamPlayer from './LiveStreamPlayer';

interface HeroSectionProps {
  isPlaying?: boolean;
  onPlayToggle?: () => void;
}

export default function HeroSection({ isPlaying = false, onPlayToggle }: HeroSectionProps) {

  const upcomingEvents = [
    {
      title: 'KLAQ Rocks the Park',
      date: 'July 15, 2025',
      location: 'Cohen Stadium',
      time: '7:00 PM'
    },
    {
      title: 'Cool Canyon Nights',
      date: 'August 5, 2025',
      location: 'McKelligon Canyon',
      time: '6:30 PM'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(220,38,38,0.1)_49%,rgba(220,38,38,0.1)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4">
                🔴 LIVE NOW
              </span>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                95.5{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                  KLAQ
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
                El Paso's Best Rock
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Your home for the best rock music, live shows, local news, and the 
              music that moves El Paso. Tune in now and rock with us!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                onClick={onPlayToggle}
                className="flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 focus-visible group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Listen Live Now</span>
              </button>
              
              <button className="flex items-center justify-center space-x-3 bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 focus-visible group">
                <Calendar className="w-5 h-5" />
                <span>View Events</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 text-center"
            >
              <div>
                <p className="text-2xl font-bold text-red-400">95.5</p>
                <p className="text-sm text-gray-400">FM Frequency</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-400">24/7</p>
                <p className="text-sm text-gray-400">Live Stream</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-400">1M+</p>
                <p className="text-sm text-gray-400">Monthly Listeners</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Live Stream Player & Events */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <LiveStreamPlayer
              isPlaying={isPlaying}
              onPlayToggle={onPlayToggle || (() => {})}
            />

            {/* Upcoming Events */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-red-400" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="bg-white/5 border border-white/20 rounded-lg p-4 hover:border-white/40 transition-all duration-200"
                  >
                    <h4 className="font-semibold text-white mb-1">{event.title}</h4>
                    <div className="flex items-center text-sm text-gray-300 space-x-4">
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
