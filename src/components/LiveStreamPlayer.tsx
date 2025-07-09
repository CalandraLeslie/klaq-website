'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

// Utility function to format numbers consistently on server and client
const formatListeners = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

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
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Track hydration to prevent mismatches
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Current track state (updated from KLAQ's now playing API)
  const [currentTrack, setCurrentTrack] = useState({
    title: 'The Emptiness Machine',
    artist: 'Linkin Park',
    album: 'From Zero'
  });

  // Handle audio element
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      const handleLoadStart = () => {
        setIsLoading(true);
        setStreamError(null);
      };
      const handleCanPlay = () => {
        setIsLoading(false);
        setStreamError(null);
      };
      const handleError = (e: Event) => {
        setIsLoading(false);
        console.error('Stream error:', e);
        const target = e.target as HTMLAudioElement;
        const error = target?.error;
        let errorMessage = 'Stream temporarily unavailable. Please try again.';
        
        if (error) {
          switch (error.code) {
            case MediaError.MEDIA_ERR_ABORTED:
              errorMessage = 'Stream playback aborted';
              break;
            case MediaError.MEDIA_ERR_NETWORK:
              errorMessage = 'Network error while loading stream';
              break;
            case MediaError.MEDIA_ERR_DECODE:
              errorMessage = 'Stream format error';
              break;
            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
              errorMessage = 'Stream source not supported';
              break;
          }
        }
        
        setStreamError(errorMessage);
      };
      const handleStalled = () => {
        console.log('Stream stalled, attempting to reconnect...');
        setStreamError('Connection unstable, reconnecting...');
      };
      const handleAbort = () => {
        setIsLoading(false);
        setStreamError('Stream connection aborted');
      };

      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('stalled', handleStalled);
      audio.addEventListener('abort', handleAbort);

      return () => {
        audio.removeEventListener('loadstart', handleLoadStart);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('stalled', handleStalled);
        audio.removeEventListener('abort', handleAbort);
      };
    }
  }, []);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        setIsLoading(true);
        setStreamError(null);
        
        // Attempt to play with retry logic
        const attemptPlay = async (retries = 3) => {
          try {
            // Ensure the audio is loaded first
            if (audioRef.current) {
              audioRef.current.load();
              await audioRef.current.play();
              setIsLoading(false);
              console.log('Stream started successfully');
            }
          } catch (error) {
            console.error('Play attempt failed:', error);
            if (retries > 0) {
              console.log(`Retrying play... (${retries} attempts left)`);
              setTimeout(() => attemptPlay(retries - 1), 1000);
            } else {
              if (error instanceof Error) {
                if (error.name === 'NotAllowedError') {
                  setStreamError('Please click play to start the stream (browser autoplay policy)');
                } else if (error.name === 'NotSupportedError') {
                  setStreamError('Stream format not supported by your browser');
                } else if (error.name === 'AbortError') {
                  setStreamError('Stream connection was interrupted');
                } else {
                  setStreamError('Unable to start stream. Please check your connection.');
                }
              } else {
                setStreamError('Unable to start stream. Please check your connection.');
              }
              setIsLoading(false);
            }
          }
        };
        
        attemptPlay();
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

  // KLAQ now playing API integration
  useEffect(() => {
    // Function to fetch current track from KLAQ's now playing API
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('https://np.tritondigital.com/public/nowplaying?mountName=KLAQ&numberToFetch=1&eventType=track');
        const data = await response.json();
        
        if (data && data.nowplaying && data.nowplaying.length > 0) {
          const track = data.nowplaying[0];
          setCurrentTrack({
            title: track.songTitle || 'Classic Rock',
            artist: track.artistName || 'KLAQ 95.5',
            album: track.albumName || ''
          });
        }
      } catch (error) {
        console.log('Could not fetch current track info, using fallback');
        // Fallback to demo tracks if API fails
        const tracks = [
          { title: 'The Emptiness Machine', artist: 'Linkin Park', album: 'From Zero' },
          { title: 'Black Dog', artist: 'Led Zeppelin', album: 'Led Zeppelin IV' },
          { title: 'Blurry', artist: 'Puddle Of Mudd', album: 'Come Clean' },
          { title: 'Ace of Spades', artist: 'Motorhead', album: 'Bloodcovered' },
          { title: 'Today\'s Song', artist: 'Foo Fighters', album: 'Today\'s Song - Single' }
        ];
        
        if (isPlaying) {
          const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
          setCurrentTrack(randomTrack);
        }
      }
    };

    // Fetch immediately and then every 30 seconds
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    
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

  const reloadStream = () => {
    if (audioRef.current) {
      setIsLoading(true);
      setStreamError(null);
      audioRef.current.load();
    }
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
        {/* Primary KLAQ 95.5 FM El Paso stream - iHeartRadio */}
        <source src="https://stream.revma.ihrhls.com/zc185" type="audio/mpeg" />
        {/* KLAQ StreamTheWorld stream */}
        <source src="https://playerservices.streamtheworld.com/api/livestream-redirect/KLAQFM.mp3" type="audio/mpeg" />
        {/* KLAQ backup stream */}
        <source src="https://ice1.iheartradio.com/live/185?cid=main&pname=TD&pversion=5.3.0-145&mount=web&program=klaq" type="audio/mpeg" />
      </audio>

      <div className="relative z-10">
        {/* Error Display */}
        {streamError && (
          <div className="mb-4 p-3 bg-red-800/50 border border-red-600/50 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm text-red-200">{streamError}</p>
              <button
                onClick={reloadStream}
                className="ml-2 px-3 py-1 bg-red-700 hover:bg-red-600 rounded text-xs transition-colors"
              >
                Retry
              </button>
            </div>
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
            <span>{isClient ? formatListeners(listeners) : '1,247'} listeners</span>
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
              className="w-12 h-12 bg-white/20 border border-white/30 hover:border-white/60 rounded-full flex items-center justify-center transition-all duration-200 focus-visible disabled:opacity-50"
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
                className="p-2 text-white hover:text-red-300 transition-colors duration-200 focus-visible"
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
