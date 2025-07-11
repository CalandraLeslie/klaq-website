'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Square, Volume2, VolumeX, Radio, Clock } from 'lucide-react';
import { fetchCurrentTrack, fetchListenerCount, getCurrentShow } from '@/utils/klaqApi';

// Utility function to format numbers consistently on server and client
const formatListeners = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Format time to El Paso timezone (MST/MDT - America/Denver)
const formatElPasoTime = (): string => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'America/Denver',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    weekday: 'short'
  });
};

interface TrackInfo {
  title: string;
  artist: string;
  album: string;
  year: string;
  albumArt?: string;
}

interface Q2PlayerProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  onStop?: () => void;
  showNowPlaying?: boolean;
  compact?: boolean;
}

export default function Q2Player({ 
  isPlaying, 
  onPlayToggle,
  onStop,
  showNowPlaying = true, 
  compact = false 
}: Q2PlayerProps) {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentShow, setCurrentShow] = useState('Loading...');
  const [listeners, setListeners] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentTrack, setCurrentTrack] = useState<TrackInfo>({
    title: 'Loading...',
    artist: 'Q2 HD2',
    album: '',
    year: '',
    albumArt: undefined
  });
  const audioRef = useRef<HTMLAudioElement>(null);

  const streamUrl = "https://live.amperwave.net/direct/townsquare-klaqhd2aac-ibc3";

  // Track hydration to prevent mismatches
  useEffect(() => {
    setIsClient(true);
    updateCurrentTime();
    
    // Initial data fetch for Q2 HD2 stream
    fetchRealTimeData();
    
    // Set up intervals for real-time updates
    const timeInterval = setInterval(updateCurrentTime, 1000);
    const dataInterval = setInterval(fetchRealTimeData, 30000); // Update every 30 seconds
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(dataInterval);
    };
  }, []);

  const updateCurrentTime = () => {
    setCurrentTime(formatElPasoTime());
  };

  const fetchRealTimeData = async () => {
    try {
      // For Q2 HD2, we might use different API endpoints or adapt the data
      const trackData = await fetchCurrentTrack();
      if (trackData && typeof trackData === 'object') {
        setCurrentTrack({
          title: (trackData as any).title || 'Alternative Rock',
          artist: (trackData as any).artist || 'Q2 HD2',
          album: (trackData as any).album || '',
          year: (trackData as any).year || '',
          albumArt: (trackData as any).albumArt
        });
      }

      // Q2 typically has fewer listeners than main KLAQ
      const listenerData = await fetchListenerCount();
      if (typeof listenerData === 'number') {
        setListeners(Math.floor(listenerData * 0.3)); // Estimate Q2 as ~30% of main stream
      } else if (listenerData && typeof (listenerData as any).listeners === 'number') {
        setListeners(Math.floor((listenerData as any).listeners * 0.3));
      }

      // Get Q2-specific show info
      const showData = await getCurrentShow();
      if (typeof showData === 'string') {
        setCurrentShow(showData);
      } else if (showData && (showData as any).showName) {
        setCurrentShow((showData as any).showName);
      } else {
        setCurrentShow('Alternative Rock');
      }
    } catch (error) {
      console.error('Error fetching Q2 real-time data:', error);
      // Fallback to Q2-specific defaults
      setCurrentShow('Alternative Rock');
    }
  };

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
      window.open('https://live.amperwave.net/direct/townsquare-klaqhd2aac-ibc3', '_blank');
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

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsLoading(false);
    if (onStop) {
      onStop();
    }
  };

  if (!isClient) {
    return (
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
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
      
      {/* Main Q2 Player */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-purple-900/20"></div>
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
            <div className="mb-4 p-3 bg-blue-800/50 border border-blue-600/50 rounded-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm text-blue-200">
                  {streamError ? "Stream temporarily unavailable. Redirecting to external player..." : "Stream error occurred"}
                </p>
                <button
                  onClick={reloadStream}
                  className="ml-2 px-3 py-1 bg-blue-700 hover:bg-blue-600 rounded text-xs transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Header with Time */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Radio className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Q2 - The Alternative</h3>
                <p className="text-base text-blue-100">HD2 Stream</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm text-blue-100 mb-1">
                <Clock className="w-4 h-4" />
                <span>{currentTime}</span>
              </div>
              <div className="flex items-center space-x-2 text-base">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>{isClient && listeners > 0 ? formatListeners(listeners) : 'Loading...'} listeners</span>
              </div>
            </div>
          </div>

          {/* Now Playing with Album Art */}
          <div className="mb-4">
            <p className="text-sm text-blue-100 mb-2">Now Playing</p>
            <div className="flex items-center space-x-4">
              {/* Album Art */}
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-blue-700 flex-shrink-0">
                {currentTrack.albumArt ? (
                  <img 
                    src={currentTrack.albumArt} 
                    alt={`${currentTrack.album} album art`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center">
                    <Radio className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </div>
              
              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold truncate text-lg">{currentTrack.title}</h4>
                <p className="text-sm text-blue-100 truncate">{currentTrack.artist}</p>
                {currentTrack.album && (
                  <p className="text-xs text-blue-300 truncate">
                    {currentTrack.album} {currentTrack.year && `(${currentTrack.year})`}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Current Show */}
          <div className="mb-6">
            <p className="text-sm text-blue-100 mb-1">Current Show</p>
            <p className="font-medium">{currentShow}</p>
          </div>

          {/* Player Controls with Stop Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Play/Pause Button */}
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

              {/* Stop Button */}
              <button
                onClick={handleStop}
                disabled={!isPlaying}
                className="w-10 h-10 bg-red-600/20 border border-red-400/30 hover:border-red-400/60 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-200 focus-visible"
                aria-label="Stop stream"
              >
                <Square className="w-4 h-4 text-red-400" />
              </button>

              {/* Volume Controls */}
              <button
                onClick={toggleMute}
                className="p-2 text-white hover:text-blue-300 transition-colors duration-200 focus-visible"
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
              <p className="text-xs text-blue-100">HD2 Alternative</p>
              <p className="text-sm font-semibold">95.5 FM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}