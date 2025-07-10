'use client';

import { useState, useEffect } from 'react';
import { fetchCurrentTrack, fetchListenerCount, getCurrentShow } from '@/utils/klaqApi';

interface NowPlayingData {
  song: string;
  artist: string;
  album: string;
  year: string;
  currentShow: string;
  listeners: number;
  progress: number;
  duration: string;
  currentTime: string;
}

interface NowPlayingWidgetProps {
  isPlaying?: boolean;
  onPlayToggle?: () => void;
  compact?: boolean;
}

export default function NowPlayingWidget({ 
  isPlaying = false, 
  onPlayToggle, 
  compact = false 
}: NowPlayingWidgetProps) {

  const [nowPlaying, setNowPlaying] = useState<NowPlayingData>({
    song: 'The Emptiness Machine',
    artist: 'Linkin Park',
    album: 'From Zero',
    year: '2024',
    currentShow: getCurrentShow(),
    listeners: 1247,
    progress: 62,
    duration: '4:12',
    currentTime: '2:34'
  });

  // Fetch real now playing data from KLAQ APIs using shared utilities
  useEffect(() => {
    const updateTrackInfo = async () => {
      const trackInfo = await fetchCurrentTrack();
      setNowPlaying(prev => ({
        ...prev,
        song: trackInfo.title,
        artist: trackInfo.artist,
        album: trackInfo.album,
        year: trackInfo.year,
        currentShow: getCurrentShow()
      }));
    };

    const updateListenerCount = async () => {
      const count = await fetchListenerCount();
      setNowPlaying(prev => ({ ...prev, listeners: count }));
    };

    // Fetch data immediately
    updateTrackInfo();
    updateListenerCount();
    
    // Set up intervals
    const trackInterval = setInterval(updateTrackInfo, 30000); // Every 30 seconds
    const listenerInterval = setInterval(updateListenerCount, 60000); // Every minute
    const progressInterval = setInterval(() => {
      setNowPlaying(prev => ({
        ...prev,
        progress: (prev.progress + 1) % 100,
        currentShow: getCurrentShow() // Update show info
      }));
    }, 5000);

    return () => {
      clearInterval(trackInterval);
      clearInterval(listenerInterval);
      clearInterval(progressInterval);
    };
  }, []);

  if (compact) {
    return (
      <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">LIVE</span>
          </div>
          <div className="text-xs text-gray-300">{nowPlaying.listeners.toLocaleString()} listeners</div>
        </div>
        
        <div className="mb-3">
          <div className="text-sm font-bold truncate">{nowPlaying.song}</div>
          <div className="text-xs text-gray-300 truncate">{nowPlaying.artist}</div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={onPlayToggle}
            className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              {isPlaying ? (
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zM11 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              )}
            </svg>
          </button>
          
          <div className="flex-1">
            <div className="w-full bg-white/20 rounded-full h-1">
              <div 
                className="bg-red-500 h-1 rounded-full transition-all duration-1000" 
                style={{ width: `${nowPlaying.progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="text-xs text-gray-400">{nowPlaying.currentTime}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <h2 className="text-xl font-bold">LIVE ON AIR</h2>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">{nowPlaying.listeners.toLocaleString()}</span>
            <span className="text-gray-300">listeners</span>
          </div>
          <div className="text-red-400 font-bold">95.5 FM</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Now Playing Info */}
        <div>
          <div className="text-sm text-gray-300 mb-1">NOW PLAYING</div>
          <div className="text-2xl font-bold mb-1">{nowPlaying.song}</div>
          <div className="text-lg text-gray-300 mb-2">{nowPlaying.artist}</div>
          <div className="text-sm text-gray-400">
            {nowPlaying.album}{nowPlaying.year && ` (${nowPlaying.year})`}
          </div>
          
          <div className="mt-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.766 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.766l3.617-2.816a1 1 0 011.617.816z" clipRule="evenodd" />
                <path d="M14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.414A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.829 1 1 0 010-1.414z" />
              </svg>
              <span>{nowPlaying.currentShow}</span>
            </div>
          </div>
        </div>
        
        {/* Live Stream Player Controls */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full max-w-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold">KLAQ 95.5 FM</div>
              <div className="text-xs text-gray-300">EL PASO</div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={onPlayToggle}
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  {isPlaying ? (
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zM11 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  )}
                </svg>
              </button>
              
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs text-gray-300 mb-1">
                  <span>Volume</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.766 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.766l3.617-2.816a1 1 0 011.617.816z" clipRule="evenodd" />
                  <path d="M14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.414A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.829 1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            
            <div className="mt-3 text-center">
              <div className="text-xs text-gray-300">
                {isPlaying ? 'Now Playing' : 'Listen Live'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar for Song */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
          <span>{nowPlaying.currentTime}</span>
          <span>{nowPlaying.duration}</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-1">
          <div 
            className="bg-red-500 h-1 rounded-full transition-all duration-1000" 
            style={{ width: `${nowPlaying.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
