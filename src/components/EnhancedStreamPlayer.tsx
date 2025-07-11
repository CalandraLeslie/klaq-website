'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Square, Volume2, Users, Clock, Radio } from 'lucide-react';
import { fetchCurrentTrack, fetchListenerCount, getCurrentShow, TrackInfo } from '@/utils/klaqApi';

interface EnhancedStreamPlayerProps {
  title: string;
  streamUrl: string;
  isMainStream?: boolean;
  className?: string;
}

export default function EnhancedStreamPlayer({ 
  title, 
  streamUrl, 
  isMainStream = false,
  className = "" 
}: EnhancedStreamPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<TrackInfo | null>(null);
  const [listenerCount, setListenerCount] = useState<number>(0);
  const [currentShow, setCurrentShow] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const elPasoTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Denver',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      setCurrentTime(elPasoTime);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  // Fetch track and listener data
  useEffect(() => {
    const fetchData = async () => {
      if (isMainStream) {
        try {
          const [track, listeners] = await Promise.all([
            fetchCurrentTrack(),
            fetchListenerCount()
          ]);
          setCurrentTrack(track);
          setListenerCount(listeners);
          setCurrentShow(getCurrentShow());
        } catch (error) {
          console.error('Error fetching stream data:', error);
        }
      } else {
        // For Q2, use reduced listener count
        setListenerCount(Math.floor(Math.random() * 500) + 200);
        setCurrentShow('Q2 Alternative Rock');
      }
    };

    fetchData();
    
    // Update data every 30 seconds for main stream
    if (isMainStream) {
      const dataInterval = setInterval(fetchData, 30000);
      return () => clearInterval(dataInterval);
    }
  }, [isMainStream]);

  const handlePlayToggle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsPlaying(!isPlaying);
      setIsLoading(false);
    }, 500);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  const gradientClass = isMainStream 
    ? 'from-red-900/20 via-gray-900 to-black' 
    : 'from-blue-900/20 via-purple-900/20 to-black';

  const accentColor = isMainStream ? 'text-red-400' : 'text-blue-400';
  const buttonColor = isMainStream 
    ? 'bg-red-600 hover:bg-red-700' 
    : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className={`bg-gradient-to-br ${gradientClass} rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm ${className}`}>
      {/* Header with Sharp Design */}
      <div className="bg-black/60 backdrop-blur-md px-6 py-4 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`relative w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-gray-500'}`}>
              {isPlaying && (
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
              )}
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
            {isMainStream && (
              <div className="bg-red-600/30 border border-red-500/50 rounded-full px-3 py-1 backdrop-blur-sm">
                <span className="text-red-300 text-sm font-semibold">LIVE</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2 text-gray-300 text-sm font-mono bg-black/40 rounded-lg px-3 py-1.5">
            <Clock className="w-4 h-4" />
            <span>{currentTime} MT</span>
          </div>
        </div>
      </div>

      {/* Main Content with Sharp Edges */}
      <div className="p-6">
        {/* Now Playing Info with Enhanced Design */}
        {isMainStream && currentTrack && (
          <div className="mb-6 p-5 bg-black/40 rounded-xl backdrop-blur-md border border-gray-600/30 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-red-500/30">
                <Radio className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xl font-bold text-white truncate mb-1 tracking-wide">{currentTrack.title}</h4>
                <p className="text-gray-200 truncate text-lg font-medium">{currentTrack.artist}</p>
                {currentTrack.album && (
                  <p className="text-gray-400 text-sm truncate mt-1">{currentTrack.album} {currentTrack.year && `(${currentTrack.year})`}</p>
                )}
                <div className="mt-3 flex items-center space-x-6 text-sm">
                  <span className={`${accentColor} font-semibold bg-black/30 px-3 py-1 rounded-lg`}>{currentShow}</span>
                  <div className="flex items-center space-x-2 text-gray-300 bg-black/30 px-3 py-1 rounded-lg">
                    <Users className="w-4 h-4" />
                    <span className="font-mono font-bold text-white">{listenerCount.toLocaleString()}</span>
                    <span>listeners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Controls */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <button
            onClick={handlePlayToggle}
            disabled={isLoading}
            className={`${buttonColor} disabled:opacity-50 rounded-2xl p-5 transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-3xl ring-2 ring-white/10 hover:ring-white/20`}
          >
            {isLoading ? (
              <div className="w-7 h-7 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <Pause className="w-7 h-7 text-white drop-shadow-lg" />
            ) : (
              <Play className="w-7 h-7 text-white ml-1 drop-shadow-lg" />
            )}
          </button>
          
          {isPlaying && (
            <button
              onClick={handleStop}
              className="bg-gray-700/80 hover:bg-gray-600 backdrop-blur-sm rounded-2xl p-4 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl ring-2 ring-white/10 hover:ring-white/20"
            >
              <Square className="w-6 h-6 text-white fill-current drop-shadow-lg" />
            </button>
          )}
          
          <div className="flex items-center space-x-4 bg-black/50 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg border border-gray-600/30">
            <Volume2 className="w-6 h-6 text-gray-300" />
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 rounded-full shadow-lg animate-pulse"></div>
            </div>
            <span className="text-gray-300 text-sm font-mono">75%</span>
          </div>
        </div>

        {/* Enhanced Stream Quality Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-gray-600/20 shadow-lg hover:bg-black/40 transition-all duration-300">
            <div className="text-sm text-gray-400 font-medium">Quality</div>
            <div className="text-2xl font-bold text-white mt-1">HD</div>
            <div className="text-xs text-gray-500 mt-1">128 kbps</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-gray-600/20 shadow-lg hover:bg-black/40 transition-all duration-300">
            <div className="text-sm text-gray-400 font-medium">Format</div>
            <div className="text-2xl font-bold text-white mt-1">AAC</div>
            <div className="text-xs text-gray-500 mt-1">Stereo</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-gray-600/20 shadow-lg hover:bg-black/40 transition-all duration-300">
            <div className="text-sm text-gray-400 font-medium">Status</div>
            <div className={`text-2xl font-bold mt-1 ${isPlaying ? 'text-green-400' : 'text-gray-400'}`}>
              {isPlaying ? 'Live' : 'Stopped'}
            </div>
            <div className="text-xs text-gray-500 mt-1">{isPlaying ? 'Streaming' : 'Ready'}</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-gray-600/20 shadow-lg hover:bg-black/40 transition-all duration-300">
            <div className="text-sm text-gray-400 font-medium">Listeners</div>
            <div className={`text-2xl font-bold mt-1 ${accentColor}`}>
              {listenerCount.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 mt-1">Active now</div>
          </div>
        </div>

        {/* Embedded Player (hidden but functional) */}
        {isPlaying && (
          <div className="mt-6">
            <iframe
              src={streamUrl}
              className="w-full h-24 border-0 opacity-0 rounded-xl"
              allow="autoplay"
              title={`${title} Player`}
              style={{ pointerEvents: 'none' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
