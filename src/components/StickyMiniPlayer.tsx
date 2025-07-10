'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import NowPlayingWidget from './NowPlayingWidget';

interface StickyMiniPlayerProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  onClose?: () => void;
}

export default function StickyMiniPlayer({ 
  isPlaying, 
  onPlayToggle, 
  onClose 
}: StickyMiniPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide with animation when playing changes
  useEffect(() => {
    if (isPlaying) {
      setIsVisible(true);
    } else {
      // Delay hiding to allow for smooth transition
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-300 ease-in-out ${
      isPlaying ? 'translate-y-0' : 'translate-y-full'
    }`}>
      {/* Expanded Widget */}
      {isExpanded && (
        <div className="bg-white border-t border-gray-200 shadow-2xl p-4">
          <NowPlayingWidget 
            isPlaying={isPlaying}
            onPlayToggle={onPlayToggle}
            compact={false}
          />
        </div>
      )}
      
      {/* Mini Player Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left - Now Playing Info */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-3 flex-1 text-left hover:bg-white/10 rounded-lg p-2 transition-colors"
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Volume2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">LIVE</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">95.5 KLAQ</span>
                </div>
                <p className="text-sm text-red-100 truncate">
                  The Emptiness Machine • Linkin Park
                </p>
              </div>
            </button>

            {/* Center - Play Controls */}
            <div className="flex items-center space-x-2 px-4">
              <button
                onClick={onPlayToggle}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>
            </div>

            {/* Right - Close Button */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:flex w-8 h-8 items-center justify-center text-red-200 hover:text-white transition-colors"
                aria-label={isExpanded ? 'Collapse' : 'Expand'}
              >
                <div className={`w-4 h-0.5 bg-current transform transition-transform ${
                  isExpanded ? 'rotate-45' : ''
                }`}></div>
                <div className={`w-4 h-0.5 bg-current transform transition-transform ${
                  isExpanded ? '-rotate-45 -translate-x-4' : ''
                }`}></div>
              </button>
              
              {onClose && (
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-red-200 hover:text-white transition-colors"
                  aria-label="Close player"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
