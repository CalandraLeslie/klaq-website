'use client';

import { useState } from 'react';
import { Radio, ExternalLink, Clock, Volume2, Headphones } from 'lucide-react';
import KLAQStreamPlayer from '@/components/KLAQStreamPlayer';

export default function ListenLiveAdvanced() {
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
      {/* Header matching KLAQ style */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-medium">LIVE NOW</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            95.5 <span className="text-red-500">KLAQ</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">Listen Live</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Listen live to 95.5 KLAQ online for free. Stream El Paso's Best Rock in crystal-clear HD quality.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main KLAQ Stream */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-center mb-2">95.5 KLAQ Main Stream</h2>
            <p className="text-gray-400 text-center">El Paso's Best Rock - Live 24/7</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl">
            {/* Iframe Player Container */}
            <div className="relative w-full h-[500px] bg-black rounded-lg overflow-hidden mb-6">
              <iframe
                className="w-full h-full border-0"
                src="https://player.amperwave.net/5063?playerUrl=https%3A%2F%2Fklaq.com%2Flisten-live%2F"
                allow="autoplay"
                title="Listen Live - 95.5 KLAQ"
                style={{ border: 'none' }}
              />
            </div>

            {/* Custom Controls */}
            <KLAQStreamPlayer
              streamId="5063"
              title="95.5 KLAQ"
              isPlaying={isKLAQPlaying}
              onPlayToggle={handleKLAQToggle}
              onStop={handleKLAQStop}
              showFullPlayer={false}
            />
          </div>
        </div>

        {/* Q2 HD2 Stream */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-center mb-2">KLAQ HD2 - Q2</h2>
            <p className="text-gray-400 text-center">Alternative Rock Station</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-6 shadow-2xl">
            {/* Iframe Player Container */}
            <div className="relative w-full h-[500px] bg-black rounded-lg overflow-hidden mb-6">
              <iframe
                className="w-full h-full border-0"
                src="https://player.amperwave.net/5793?playerUrl=https%3A%2F%2Fklaq.com%2Fradio%2Flisten-live-q2%2Fpopup%2F"
                allow="autoplay"
                title="KLAQ HD2 Listen Live Player"
                style={{ border: 'none' }}
              />
            </div>

            {/* Custom Controls */}
            <KLAQStreamPlayer
              streamId="5793"
              title="KLAQ HD2"
              isPlaying={isQ2Playing}
              onPlayToggle={handleQ2Toggle}
              onStop={handleQ2Stop}
              showFullPlayer={false}
            />
          </div>
        </div>

        {/* Stream Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Radio className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">HD Quality</h3>
            <p className="text-gray-400">128 kbps stereo streaming</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Live</h3>
            <p className="text-gray-400">Always broadcasting rock</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multi-Platform</h3>
            <p className="text-gray-400">Web, mobile, smart speakers</p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Stream Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-400">KLAQ Main Stream (5063)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Format:</strong> AAC/MP3</li>
                <li>• <strong>Bitrate:</strong> 128 kbps</li>
                <li>• <strong>Sample Rate:</strong> 44.1 kHz</li>
                <li>• <strong>Channels:</strong> Stereo</li>
                <li>• <strong>Stream URL:</strong> Amperwave Network</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Q2 HD2 Stream (5793)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Format:</strong> AAC/MP3</li>
                <li>• <strong>Bitrate:</strong> 128 kbps</li>
                <li>• <strong>Sample Rate:</strong> 44.1 kHz</li>
                <li>• <strong>Channels:</strong> Stereo</li>
                <li>• <strong>Stream URL:</strong> Amperwave Network</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alternative Listening Options */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">More Ways to Listen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">FM</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">FM Radio</h4>
              <p className="text-2xl font-bold text-blue-400">95.5</p>
              <p className="text-sm text-gray-400">Traditional broadcast</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">APP</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">KLAQ App</h4>
              <p className="text-green-400">Download Now</p>
              <p className="text-sm text-gray-400">iOS & Android</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xs">ALEXA</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Amazon Alexa</h4>
              <p className="text-purple-400">"Play KLAQ"</p>
              <p className="text-sm text-gray-400">Voice activated</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">GH</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Google Home</h4>
              <p className="text-orange-400">Voice Ready</p>
              <p className="text-sm text-gray-400">Smart speaker</p>
            </div>
          </div>
        </div>

        {/* Footer Information */}
        <div className="text-center text-gray-400 py-8 border-t border-gray-700">
          <p className="mb-4">
            Having trouble with the stream? Contact us at{' '}
            <a href="mailto:tech@klaq.com" className="text-red-400 hover:underline">
              tech@klaq.com
            </a>
          </p>
          <p className="text-sm mb-4">
            Compatible with all major browsers and devices. For best experience, use Chrome, Firefox, Safari, or Edge.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm">
            <a 
              href="https://player.amperwave.net/5063?playerUrl=https%3A%2F%2Fklaq.com%2Flisten-live%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open KLAQ Player</span>
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="https://player.amperwave.net/5793?playerUrl=https%3A%2F%2Fklaq.com%2Fradio%2Flisten-live-q2%2Fpopup%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Q2 Player</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
