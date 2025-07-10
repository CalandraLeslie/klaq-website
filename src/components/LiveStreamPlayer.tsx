'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';
import NowPlayingWidget from './NowPlayingWidget';

// Utility function to format numbers consistently on server and client
const formatListeners = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

interface LiveStreamPlayerProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  showNowPlaying?: boolean;
  compact?: boolean;
}

export default function LiveStreamPlayer({ 
  isPlaying, 
  onPlayToggle, 
  showNowPlaying = true, 
  compact = false 
}: LiveStreamPlayerProps) {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentShow, setCurrentShow] = useState('Rock Block');
  const [listeners, setListeners] = useState(1247);
  const [isLoading, setIsLoading] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const streamUrl = "https://live.amperwave.net/direct/townsquare-klaqfmaac-ibc3";

  // Function to get current show based on time
  const getCurrentShow = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Weekend vs Weekday schedule
    if (dayOfWeek === 0 || dayOfWeek === 6) { // Weekend
      if (currentHour >= 6 && currentHour < 10) {
        return 'Weekend Rock';
      } else if (currentHour >= 10 && currentHour < 14) {
        return 'Classic Rock Saturday';
      } else if (currentHour >= 14 && currentHour < 18) {
        return 'Rock Block';
      } else if (currentHour >= 18 && currentHour < 22) {
        return 'Saturday Night Rock';
      } else {
        return 'Overnight Rock';
      }
    } else { // Weekday
      if (currentHour >= 6 && currentHour < 10) {
        return 'The Buzz Adams Morning Show';
      } else if (currentHour >= 10 && currentHour < 15) {
        return 'Kat & the Morning Crew';
      } else if (currentHour >= 15 && currentHour < 19) {
        return 'Joanna Barba Show';
      } else if (currentHour >= 19 && currentHour < 23) {
        return 'Chuck Armstrong Night Show';
      } else {
        return 'Overnight Rock';
      }
    }
  };

  // Track hydration to prevent mismatches
  useEffect(() => {
    setIsClient(true);
    setCurrentShow(getCurrentShow());
  }, []);

  // Update current show every minute
  useEffect(() => {
    const updateShow = () => {
      setCurrentShow(getCurrentShow());
    };
    
    const interval = setInterval(updateShow, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Current track state (updated from KLAQ's now playing API)
  const [currentTrack, setCurrentTrack] = useState({
    title: 'The Emptiness Machine',
    artist: 'Linkin Park',
    album: 'From Zero'
  });

  // Handle play/pause with new stream logic
  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      onPlayToggle();
    } else {
      setIsLoading(true);
      setStreamError(false);
      
      audioRef.current?.play().catch(error => {
        console.error("Audio playback failed:", error);
        setStreamError(true);
        setIsLoading(false);
        // Open external player as fallback
        window.open("https://klaq.com/listen-live/", "_blank", "noopener,noreferrer");
      });
    }
  };

  // Handle audio events
  useEffect(() => {
    const handlePlay = () => {
      setIsLoading(false);
      setStreamError(false);
    };
    
    const handleError = () => {
      setStreamError(true);
      setIsLoading(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('play', handlePlay);
      audioElement.addEventListener('error', handleError);
      audioElement.addEventListener('loadstart', handleLoadStart);
      audioElement.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('play', handlePlay);
        audioElement.removeEventListener('error', handleError);
        audioElement.removeEventListener('loadstart', handleLoadStart);
        audioElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  // Handle play/pause from parent component
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        setIsLoading(true);
        setStreamError(false);
        audioRef.current.load();
        audioRef.current.play().catch(error => {
          console.error("Play attempt failed:", error);
          setStreamError(true);
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
        console.log('Could not fetch current track info, using fallback', error);
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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const reloadStream = () => {
    if (audioRef.current) {
      setIsLoading(true);
      setStreamError(false);
      audioRef.current.load();
    }
  };

  return (
    <div className="space-y-4">
      {/* Now Playing Widget */}
      {showNowPlaying && (
        <NowPlayingWidget 
          isPlaying={isPlaying}
          onPlayToggle={onPlayToggle}
          compact={compact}
        />
      )}
      
      {/* Main Stream Player */}
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

      {/* Audio element with stream URL */}
      <audio
        ref={audioRef}
        src={streamUrl}
        preload="none"
        crossOrigin="anonymous"
        className="hidden"
      />

      <div className="relative z-10">
        {/* Error Display */}
        {streamError && (
          <div className="mb-4 p-3 bg-red-800/50 border border-red-600/50 rounded-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm text-red-200">
                {streamError ? "Stream temporarily unavailable. Redirecting to external player..." : "Stream error occurred"}
              </p>
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
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Radio className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">95.5 KLAQ</h3>
              <p className="text-base text-red-100">Live Stream</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-base">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>{isClient ? formatListeners(listeners) : '1,247'} listeners</span>
          </div>
        </div>

        {/* Now Playing */}
        <div className="mb-4">
          <p className="text-sm text-red-100 mb-1">Now Playing</p>
          <div className="space-y-1">
            <h4 className="font-semibold truncate">{currentTrack.title}</h4>
            <p className="text-sm text-red-100">
              {currentTrack.artist} • {currentTrack.album}
            </p>
          </div>
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
              onClick={togglePlayback}
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
                  onChange={handleVolumeChange}
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
    </div>
  );
}
