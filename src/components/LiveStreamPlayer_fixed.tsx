'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveStreamPlayerProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
}

export default function LiveStreamPlayer({ isPlaying, onPlayToggle }: LiveStreamPlayerProps) {
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [currentShow, setCurrentShow] = useState('Rock Block');
  const [listeners, setListeners] = useState(1247);
  const [isLoading, setIsLoading] = useState(false);
  const [streamError, setStreamError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Mock current track (in real implementation, this would come from an API)
  const [currentTrack, setCurrentTrack] = useState({
    title: 'The Emptiness Machine',
    artist: 'Linkin Park',
    album: 'From Zero'
  });

  // Handle audio element
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => {
        setIsLoading(false);
        setStreamError(null);
      };
      const handleError = () => {
        setIsLoading(false);
        setStreamError('Stream temporarily unavailable');
      };

      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);

      return () => {
        audio.removeEventListener('loadstart', handleLoadStart);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
      };
    }
  }, []);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        setIsLoading(true);
        audioRef.current.play().catch(() => {
          setStreamError('Unable to start stream');
          setIsLoading(false);
        });
      } else {
        audioRef.current.pause();
        setIsLoading(false);
      }
    }
  }, [isPlaying]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Mock listener count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setListeners(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Mock track changes
  useEffect(() => {
    const tracks = [
      { title: 'The Emptiness Machine', artist: 'Linkin Park', album: 'From Zero' },
      { title: 'Black Dog', artist: 'Led Zeppelin', album: 'Led Zeppelin IV' },
      { title: 'Blurry', artist: 'Puddle Of Mudd', album: 'Come Clean' },
      { title: 'Ace of Spades', artist: 'Motorhead', album: 'Bloodcovered' },
      { title: 'Today\'s Song', artist: 'Foo Fighters', album: 'Today\'s Song - Single' }
    ];

    const interval = setInterval(() => {
      if (isPlaying) {
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        setCurrentTrack(randomTrack);
      }
    }, 45000); // Change every 45 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-800/20"></div>
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

      {/* Audio element with actual stream URL */}
      <audio
        ref={audioRef}
        preload="none"
        crossOrigin="anonymous"
        className="hidden"
      >
        {/* Demo stream URL - replace with actual KLAQ stream */}
        <source src="https://radio.klaq.com/stream" type="audio/mpeg" />
        <source src="https://stream.example.com/klaq" type="audio/mpeg" />
        {/* Fallback for demo purposes */}
        <source src="data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAGQAAAW1wMyBQcm8gdjAuMDFIAAAAAA==" type="audio/mpeg" />
      </audio>

      <div className="relative z-10">
        {/* Error Display */}
        {streamError && (
          <div className="mb-4 p-3 bg-red-800/50 border border-red-600/50 rounded-lg">
            <p className="text-sm text-red-200">{streamError}</p>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">95.5 KLAQ</h3>
              <p className="text-sm text-red-100">Live Stream</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>{listeners.toLocaleString()} listeners</span>
          </div>
        </div>

        {/* Now Playing */}
        <div className="mb-4">
          <p className="text-sm text-red-100 mb-1">Now Playing</p>
          <motion.div
            key={currentTrack.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-1"
          >
            <h4 className="font-semibold truncate">{currentTrack.title}</h4>
            <p className="text-sm text-red-100">
              {currentTrack.artist} • {currentTrack.album}
            </p>
          </motion.div>
        </div>

        {/* Current Show */}
        <div className="mb-6">
          <p className="text-sm text-red-100 mb-1">Current Show</p>
          <p className="font-medium">{currentShow}</p>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onPlayToggle}
              disabled={isLoading}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 focus-visible disabled:opacity-50"
              aria-label={isPlaying ? 'Pause stream' : 'Play stream'}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 focus-visible"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <div className="flex items-center space-x-2 min-w-24">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  aria-label="Volume control"
                />
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-red-100">Frequency</p>
            <p className="font-bold">95.5 FM</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
