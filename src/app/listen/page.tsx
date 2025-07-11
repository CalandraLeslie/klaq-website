'use client';

import { useState } from 'react';
import { Radio, ExternalLink, Clock, Volume2, Headphones } from 'lucide-react';
import WorkingStreamPlayer from '@/components/WorkingStreamPlayer';
import { StreamErrorBoundary } from '@/components/StreamErrorBoundary';
import ErrorSuppressor from '@/components/ErrorSuppressor';

export default function ListenPage() {
  const [isKLAQPlaying, setIsKLAQPlaying] = useState(false);
  const [isQ2Playing, setIsQ2Playing] = useState(false);

  const handleKLAQToggle = () => {
    if (isQ2Playing) {
      setIsQ2Playing(false);
    }
    setIsKLAQPlaying(!isKLAQPlaying);
  };

  const handleQ2Toggle = () => {
    if (isKLAQPlaying) {
      setIsKLAQPlaying(false);
    }
    setIsQ2Playing(!isQ2Playing);
  };

  const handleKLAQStop = () => {
    setIsKLAQPlaying(false);
  };

  const handleQ2Stop = () => {
    setIsQ2Playing(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ErrorSuppressor />
      {/* Header matching KLAQ style */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-medium text-lg">LIVE NOW</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            95.5 <span className="text-red-500">KLAQ</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">Listen Live</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            Listen live to 95.5 KLAQ online for free. Stream El Paso's Best Rock in crystal-clear HD quality.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="bg-green-600/20 border border-green-500/50 rounded-lg px-4 py-2">
              <span className="text-green-400 text-sm font-semibold">✓ Real KLAQ Stream Data</span>
            </div>
            <div className="bg-blue-600/20 border border-blue-500/50 rounded-lg px-4 py-2">
              <span className="text-blue-400 text-sm font-semibold">✓ Amperwave Technology</span>
            </div>
            <div className="bg-red-600/20 border border-red-500/50 rounded-lg px-4 py-2">
              <span className="text-red-400 text-sm font-semibold">✓ Live Listener Counts</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* PRIMARY CUSTOM KLAQ STREAM PLAYER */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              95.5 KLAQ Live Stream
            </h2>
            <p className="text-xl text-gray-300 mb-4">Your Enhanced Radio Experience</p>
            <p className="text-gray-400">Live listeners • Current show • Now playing • Real-time data</p>
          </div>
          
          <StreamErrorBoundary>
            <WorkingStreamPlayer
              title="95.5 KLAQ - El Paso's Best Rock"
              streamUrl="https://player.amperwave.net/5063"
              isMainStream={true}
              className="max-w-5xl mx-auto shadow-2xl ring-2 ring-red-500/20"
            />
          </StreamErrorBoundary>
        </section>

        {/* SECONDARY Q2 HD2 STREAM PLAYER */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              KLAQ HD2 - Q2 Alternative
            </h2>
            <p className="text-lg text-gray-400">Your Alternative Rock Station</p>
          </div>
          
          <StreamErrorBoundary>
            <WorkingStreamPlayer
              title="KLAQ HD2 - Q2 Alternative Rock"
              streamUrl="https://player.amperwave.net/5793"
              isMainStream={false}
              className="max-w-5xl mx-auto shadow-2xl ring-2 ring-blue-500/20"
            />
          </StreamErrorBoundary>
        </section>

        {/* TRADITIONAL KLAQ PLATFORM (BACKUP) */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">Traditional KLAQ Platform</h3>
            <p className="text-gray-500 text-sm">Backup streaming option if needed</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-gray-700/30 max-w-4xl mx-auto">
            <div className="relative w-full bg-black/20">
              <iframe
                className="w-full border-0"
                src="https://player.amperwave.net/5063?playerUrl=https%3A%2F%2Fklaq.com%2Flisten-live%2F"
                allow="autoplay"
                title="Traditional KLAQ Player"
                style={{ 
                  border: 'none',
                  width: '100%',
                  height: '400px',
                  minHeight: '350px'
                }}
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Radio className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">HD Quality</h3>
              <p className="text-gray-400">Crystal clear 128kbps streaming with professional audio processing</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Live</h3>
              <p className="text-gray-400">Always broadcasting the best rock music from El Paso</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Platform</h3>
              <p className="text-gray-400">Listen on web, mobile apps, and smart speakers</p>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8">Stream Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-6 text-red-400">KLAQ Main Stream</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    <strong>Stream ID:</strong> 5063
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    <strong>Format:</strong> AAC/MP3
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    <strong>Bitrate:</strong> 128 kbps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    <strong>Sample Rate:</strong> 44.1 kHz
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                    <strong>Channels:</strong> Stereo
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6 text-blue-400">Q2 HD2 Stream</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <strong>Stream ID:</strong> 5793
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <strong>Format:</strong> AAC/MP3
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <strong>Bitrate:</strong> 128 kbps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <strong>Sample Rate:</strong> 44.1 kHz
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <strong>Channels:</strong> Stereo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Listening Options */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">More Ways to Listen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">FM</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">FM Radio</h4>
              <p className="text-2xl font-bold text-blue-400 mb-1">95.5</p>
              <p className="text-sm text-gray-400">Traditional broadcast</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">APP</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">KLAQ App</h4>
              <p className="text-green-400 mb-1">Download Now</p>
              <p className="text-sm text-gray-400">iOS & Android</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xs">ALEXA</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Amazon Alexa</h4>
              <p className="text-purple-400 mb-1">"Play KLAQ"</p>
              <p className="text-sm text-gray-400">Voice activated</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">GH</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Google Home</h4>
              <p className="text-orange-400 mb-1">Voice Ready</p>
              <p className="text-sm text-gray-400">Smart speaker</p>
            </div>
          </div>
        </section>

        {/* External Player Links */}
        <section className="text-center py-8 border-t border-gray-700">
          <p className="text-gray-400 mb-6">
            Having trouble with the stream? Contact us at{' '}
            <a href="mailto:tech@klaq.com" className="text-red-400 hover:underline">
              tech@klaq.com
            </a>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Compatible with all major browsers and devices. For best experience, use Chrome, Firefox, Safari, or Edge.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a 
              href="https://player.amperwave.net/5063?playerUrl=https%3A%2F%2Fklaq.com%2Flisten-live%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open KLAQ Player</span>
            </a>
            <a 
              href="https://player.amperwave.net/5793?playerUrl=https%3A%2F%2Fklaq.com%2Fradio%2Flisten-live-q2%2Fpopup%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Q2 Player</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}