'use client';

import { useState } from 'react';
import LiveStreamPlayer from '@/components/LiveStreamPlayer';
import { Radio, Clock, Headphones, Share2, Volume2 } from 'lucide-react';

export default function ListenPage() {
  const [isStreamPlaying, setIsStreamPlaying] = useState(false);

  const handleStreamToggle = () => {
    setIsStreamPlaying(!isStreamPlaying);
  };

  return (
    <div className="page-container bg-white">
      {/* Hero Section */}
      <section className="page-hero bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-medium text-lg">LIVE NOW</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8">
                Listen <span className="text-red-500">Live</span>
              </h1>
              
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-6 max-w-3xl mx-auto mb-12 leading-relaxed">
                Stream 95.5 KLAQ live and experience El Paso's Best Rock in crystal-clear HD quality. 
                No ads, no interruptions – just pure rock music 24/7.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Radio className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">HD Quality</h3>
                  <p className="text-gray-400 text-base leading-relaxed">Crystal clear digital audio streaming</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">24/7 Live</h3>
                  <p className="text-gray-400 text-base leading-relaxed">Always on, always rocking</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Headphones className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Mobile Ready</h3>
                  <p className="text-gray-400 text-base leading-relaxed">Listen anywhere, anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stream Player Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-responsive">
            <div className="max-w-2xl mx-auto">
              <LiveStreamPlayer
                isPlaying={isStreamPlaying}
                onPlayToggle={handleStreamToggle}
              />
              
              {/* Additional Controls */}
              <div className="mt-10 bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Stream Options</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Main Stream</h4>
                    <p className="text-base text-gray-600 mb-4 leading-relaxed">High quality stereo stream</p>
                    <div className="flex items-center space-x-2 text-base text-gray-500">
                      <Volume2 className="w-5 h-5" />
                      <span>128 kbps • Stereo</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile Stream</h4>
                    <p className="text-base text-gray-600 mb-4 leading-relaxed">Optimized for mobile devices</p>
                    <div className="flex items-center space-x-2 text-base text-gray-500">
                      <Volume2 className="w-5 h-5" />
                      <span>64 kbps • Mono</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Share This Stream</h4>
                      <p className="text-base text-gray-600">Tell your friends about KLAQ</p>
                    </div>
                    <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 text-base font-medium">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Ways to Listen */}
        <section className="py-20 bg-white">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                More Ways to Listen
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">FM</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">FM Radio</h3>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">Traditional radio broadcast</p>
                  <p className="text-3xl font-bold text-blue-500">95.5</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-base">APP</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">KLAQ App</h3>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">Download our mobile app</p>
                  <p className="text-base text-green-600 font-medium">Available on iOS & Android</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-sm">ALEXA</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Amazon Alexa</h3>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">Just say "Play KLAQ"</p>
                  <p className="text-base text-purple-600 font-medium">Voice activated</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-base">GH</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Home</h3>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">Voice command streaming</p>
                  <p className="text-base text-orange-600 font-medium">Smart speaker ready</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Info */}
        <section className="py-20 bg-gray-50">
          <div className="container-responsive">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-12">Stream Information</h2>
              
              <div className="bg-white rounded-xl shadow-lg p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Audio Quality</h3>
                    <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                      <li>• Bitrate: 128 kbps</li>
                      <li>• Sample Rate: 44.1 kHz</li>
                      <li>• Format: MP3</li>
                      <li>• Channels: Stereo</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Compatibility</h3>
                    <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                      <li>• All major web browsers</li>
                      <li>• iOS and Android devices</li>
                      <li>• Smart speakers</li>
                      <li>• Media players</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-10 pt-10 border-t border-gray-200">
                  <p className="text-base text-gray-500 leading-relaxed">
                    Having trouble with the stream? Contact us at{' '}
                    <a href="mailto:tech@klaq.com" className="text-red-600 hover:underline font-medium">
                      tech@klaq.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}