'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Square, Volume2, Clock, Users, Music } from 'lucide-react';
import { fetchCurrentTrack, fetchListenerCount, getCurrentShow } from '@/utils/klaqApi';

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

interface NowPlayingData {
  title: string;
  artist: string;
  album: string;
  year: string;
  albumArt?: string;
  listeners: number;
  showName: string;
  elPasoTime: string;
}

interface NowPlayingWidgetProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
  onStop?: () => void;
  compact?: boolean;
}

export default function NowPlayingWidget({ 
  isPlaying, 
  onPlayToggle, 
  onStop,
  compact = false 
}: NowPlayingWidgetProps) {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData>({
    title: 'Loading...',
    artist: 'KLAQ 95.5',
    album: '',
    year: '',
    listeners: 0,
    showName: 'Loading...',
    elPasoTime: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initial data fetch
    updateNowPlaying();
    updateTime();
    
    // Set up real-time updates
    const dataInterval = setInterval(updateNowPlaying, 30000); // Every 30 seconds
    const timeInterval = setInterval(updateTime, 1000); // Every second
    
    return () => {
      clearInterval(dataInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const updateTime = () => {
    setNowPlaying(prev => ({
      ...prev,
      elPasoTime: formatElPasoTime()
    }));
  };

  const updateNowPlaying = async () => {
    try {
      setIsLoading(true);
      
      // Fetch all data in parallel
      const [trackData, listenerData, showData] = await Promise.all([
        fetchCurrentTrack(),
        fetchListenerCount(),
        getCurrentShow()
      ]);

      setNowPlaying(prev => ({
        ...prev,
        title: (trackData as any)?.title || 'KLAQ Rocks',
        artist: (trackData as any)?.artist || '95.5 KLAQ',
        album: (trackData as any)?.album || '',
        year: (trackData as any)?.year || '',
        albumArt: (trackData as any)?.albumArt,
        listeners: typeof listenerData === 'number' ? listenerData : (listenerData as any)?.listeners || 0,
        showName: typeof showData === 'string' ? showData : (showData as any)?.showName || 'KLAQ Rocks'
      }));
    } catch (error) {
      console.error('Error fetching now playing data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStop = () => {
    if (onStop) {
      onStop();
    }
  };

  if (compact) {
    return (
      <div className="flex items-center space-x-4 bg-gray-800 text-white p-4 rounded-lg">
        {/* Album Art */}
        <div className="w-12 h-12 rounded overflow-hidden bg-gray-700 flex-shrink-0">
          {nowPlaying.albumArt ? (
            <img 
              src={nowPlaying.albumArt} 
              alt={`${nowPlaying.album} album art`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
              <Music className="w-5 h-5 text-gray-400" />
            </div>
          )}
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold truncate text-sm">{nowPlaying.title}</h4>
          <p className="text-xs text-gray-300 truncate">{nowPlaying.artist}</p>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onPlayToggle}
            className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </button>
          
          {isPlaying && (
            <button
              onClick={handleStop}
              className="w-8 h-8 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
            >
              <Square className="w-3 h-3 text-white" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Music className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Now Playing</h3>
          </div>
          
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{nowPlaying.elPasoTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{nowPlaying.listeners.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start space-x-4">
          {/* Album Art */}
          <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0">
            {nowPlaying.albumArt ? (
              <img 
                src={nowPlaying.albumArt} 
                alt={`${nowPlaying.album} album art`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <Music className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>

          {/* Track Details */}
          <div className="flex-1 min-w-0">
            <h4 className="text-xl font-bold mb-1 text-white">{nowPlaying.title}</h4>
            <p className="text-lg text-gray-300 mb-1">{nowPlaying.artist}</p>
            {nowPlaying.album && (
              <p className="text-sm text-gray-400">
                {nowPlaying.album} {nowPlaying.year && `(${nowPlaying.year})`}
              </p>
            )}
            
            {/* Show Info */}
            <div className="mt-3 p-3 bg-gray-700/50 rounded-lg">
              <p className="text-sm text-gray-400">Current Show</p>
              <p className="font-semibold">{nowPlaying.showName}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <button
              onClick={onPlayToggle}
              disabled={isLoading}
              className="w-12 h-12 bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded-full flex items-center justify-center transition-all duration-200"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>

            {/* Stop Button */}
            <button
              onClick={handleStop}
              disabled={!isPlaying}
              className="w-10 h-10 bg-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-200"
            >
              <Square className="w-4 h-4 text-white" />
            </button>

            <div className="ml-4">
              <p className="text-xs text-gray-400">95.5 FM</p>
              <p className="text-sm font-semibold">KLAQ</p>
            </div>
          </div>

          {/* Live indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">LIVE</span>
          </div>
        </div>

        {/* Progress bar effect */}
        {isPlaying && (
          <div className="mt-4">
            <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse"></div>
            </div>
          </div>
        )}

        <div className="text-gray-400 text-sm">
          El Paso, TX • {nowPlaying.elPasoTime}
        </div>
      </div>
    </div>
  );
}
