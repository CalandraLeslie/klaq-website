'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';
import { fetchCurrentTrack, fetchListenerCount, getCurrentShow } from '@/utils/klaqApi';

// Utility function to format numbers consistently on server and client
const formatListeners = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

interface ListenNowPlayerProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  showNowPlaying?: boolean;
  compact?: boolean;
}

export default function ListenNowPlayer({ 
  isPlaying, 
  onPlayToggle, 
  showNowPlaying = true, 
  compact = false 
}: ListenNowPlayerProps) {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentShow, setCurrentShow] = useState('KLAQ Rocks');
  const [listeners, setListeners] = useState(2847);
  const [isLoading, setIsLoading] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    title: 'Rock Hits All Day',
    artist: '95.5 KLAQ',
    album: '',
    year: ''
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  const streamUrl = "https://live.amperwave.net/direct/townsquare-klaqaac-ibc3";

  // Track hydration to prevent mismatches
  useEffect(() => {
    setIsClient(true);
    setCurrentShow('KLAQ Rocks');
  }, []);

  // Update current show every minute
  useEffect(() => {
    const updateShow = () => {
      setCurrentShow('KLAQ Rocks');
    };
    
    const interval = setInterval(updateShow, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (audioRef.current) {
      audioRef.current.volume = newMuted ? 0 : volume;
    }
  };

  const reloadStream = () => {
    setStreamError(false);
    setIsLoading(true);
    if (audioRef.current) {
      audioRef.current.load();
    }
    setTimeout(() => setIsLoading(false), 2000);
  };

  const togglePlayback = () => {
    if (streamError) {
      window.open('https://live.amperwave.net/direct/townsquare-klaqaac-ibc3', '_blank');
      return;
    }
    
    setIsLoading(true);
    onPlayToggle();
    
    if (!isPlaying && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log('Playback failed:', error);
          setStreamError(true);
          setIsLoading(false);
        });
    } else if (audioRef.current) {
      audioRef.current.pause();
      setIsLoading(false);
    }
  };

  if (!isClient) {
    return (
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <audio
        ref={audioRef}
        src={streamUrl}
        preload="none"
        onError={() => setStreamError(true)}
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
      />
      
      {/* Main Listen Now Player */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-900/20"></div>
      {isPlaying && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-xl border border-white/20 animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">
        {/* Error Display */}
        {streamError && (
          <div className="mb-4 p-3 bg-gray-800/50 border border-gray-600/50 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-200">
                {streamError ? "Stream temporarily unavailable. Redirecting to external player..." : "Stream error occurred"}
              </p>
              <button
                onClick={reloadStream}
                className="ml-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Radio className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">95.5 KLAQ</h3>
              <p className="text-base text-gray-100">Live Stream</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-base">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>{isClient ? formatListeners(listeners) : '2,847'} listeners</span>
          </div>
        </div>

        {/* Now Playing */}
        <div className="mb-4">
          <p className="text-sm text-gray-100 mb-1">Now Playing</p>
          <div className="space-y-1">
            <h4 className="font-semibold truncate">{currentTrack.title}</h4>
            <p className="text-sm text-gray-100">
              {currentTrack.artist} • El Paso's Best Rock
            </p>
          </div>
        </div>

        {/* Current Show */}
        <div className="mb-6">
          <p className="text-sm text-gray-100 mb-1">Current Show</p>
          <p className="font-medium">{currentShow}</p>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlayback}
              disabled={isLoading}
              className="w-12 h-12 bg-white/20 border border-white/30 hover:border-white/60 rounded-full flex items-center justify-center transition-all duration-200 focus-visible disabled:opacity-50"
              aria-label={isPlaying ? 'Pause stream' : 'Play stream'}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="p-2 text-white hover:text-gray-300 transition-colors duration-200 focus-visible"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            <div className="flex-1 max-w-24">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-100">Frequency</p>
            <p className="text-sm font-semibold">95.5 FM</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
