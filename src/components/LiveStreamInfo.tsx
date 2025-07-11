'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, Users, Radio, Music, Calendar } from 'lucide-react';

interface StreamData {
  isPlaying: boolean;
  currentShow: string;
  showHost: string;
  showTime: string;
  song: string;
  artist: string;
  album: string;
  year: string;
  listeners: number;
  duration: string;
  currentTime: string;
  progress: number;
}

interface LiveStreamInfoProps {
  compact?: boolean;
  showControls?: boolean;
}

export default function LiveStreamInfo({ 
  compact = false, 
  showControls = true 
}: LiveStreamInfoProps) {
  const [streamData, setStreamData] = useState<StreamData>({
    isPlaying: false,
    currentShow: 'The Buzz Adams Morning Show',
    showHost: 'Buzz Adams, Joanna Barba & Nico',
    showTime: '5:00 AM - 10:00 AM',
    song: 'The Emptiness Machine',
    artist: 'Linkin Park',
    album: 'From Zero',
    year: '2024',
    listeners: 1247,
    duration: '4:12',
    currentTime: '2:34',
    progress: 62
  });

  const [volume, setVolume] = useState(75);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  // Initialize audio element for KLAQ stream
  useEffect(() => {
    const audio = new Audio('https://player.amperwave.net/5063/stream');
    audio.crossOrigin = 'anonymous';
    setAudioElement(audio);

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Update stream data periodically
  useEffect(() => {
    const updateStreamData = async () => {
      try {
        // Simulate API call to get current track and show info
        // In production, this would call the actual KLAQ API endpoints
        const currentHour = new Date().getHours();
        let currentShow = 'KLAQ Music';
        let showHost = 'El Paso\'s Best Rock';
        let showTime = '';

        if (currentHour >= 5 && currentHour < 10) {
          currentShow = 'The Buzz Adams Morning Show';
          showHost = 'Buzz Adams, Joanna Barba & Nico';
          showTime = '5:00 AM - 10:00 AM';
        } else if (currentHour >= 10 && currentHour < 15) {
          currentShow = 'Midday Rock';
          showHost = 'Glenn Garza (Dubba G)';
          showTime = '10:00 AM - 3:00 PM';
        } else if (currentHour >= 19 && currentHour < 24) {
          currentShow = 'Loudwire Nights';
          showHost = 'Chuck Armstrong';
          showTime = '7:00 PM - 12:00 AM';
        } else {
          showTime = '24/7 Rock Music';
        }

        setStreamData(prev => ({
          ...prev,
          currentShow,
          showHost,
          showTime,
          listeners: Math.floor(Math.random() * 500) + 1000 // Simulate listener count
        }));
      } catch (error) {
        console.error('Error updating stream data:', error);
      }
    };

    updateStreamData();
    const interval = setInterval(updateStreamData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const togglePlayPause = () => {
    if (!audioElement) return;

    if (streamData.isPlaying) {
      audioElement.pause();
      setStreamData(prev => ({ ...prev, isPlaying: false }));
    } else {
      audioElement.play().catch(error => {
        console.error('Error playing stream:', error);
      });
      setStreamData(prev => ({ ...prev, isPlaying: true }));
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioElement) {
      audioElement.volume = newVolume / 100;
    }
  };

  if (compact) {
    return (
      <div className="bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl p-4">
        <div className="flex items-center space-x-4">
          {showControls && (
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label={streamData.isPlaying ? 'Pause stream' : 'Play stream'}
            >
              {streamData.isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="text-white font-semibold truncate">
              {streamData.song}
            </div>
            <div className="text-gray-400 text-sm truncate">
              {streamData.artist} • {streamData.currentShow}
            </div>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <Users className="w-4 h-4 mr-1" />
            {streamData.listeners.toLocaleString()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
            <Radio className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">95.5 KLAQ</h3>
            <p className="text-red-400 text-sm font-medium">EL PASO'S BEST ROCK</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-300">
            <Users className="w-5 h-5 mr-2 text-red-500" />
            <span className="text-lg font-semibold">{streamData.listeners.toLocaleString()}</span>
            <span className="text-sm ml-1">listeners</span>
          </div>
          
          <div className={`w-3 h-3 rounded-full ${streamData.isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
        </div>
      </div>

      {/* Current Show Info */}
      <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
        <div className="flex items-center space-x-3 mb-2">
          <Calendar className="w-5 h-5 text-red-500" />
          <span className="text-red-400 text-sm font-medium uppercase tracking-wide">Now On Air</span>
        </div>
        <h4 className="text-white font-bold text-xl mb-1">{streamData.currentShow}</h4>
        <p className="text-gray-300 text-sm">{streamData.showHost}</p>
        {streamData.showTime && (
          <p className="text-gray-400 text-sm mt-1">{streamData.showTime}</p>
        )}
      </div>

      {/* Now Playing */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <Music className="w-5 h-5 text-red-500" />
          <span className="text-red-400 text-sm font-medium uppercase tracking-wide">Now Playing</span>
        </div>
        
        <div className="space-y-2">
          <h5 className="text-white font-bold text-lg leading-tight">{streamData.song}</h5>
          <p className="text-gray-300 font-medium">{streamData.artist}</p>
          <div className="flex items-center space-x-4 text-gray-400 text-sm">
            <span>{streamData.album}</span>
            <span>•</span>
            <span>{streamData.year}</span>
            <span>•</span>
            <span>{streamData.currentTime} / {streamData.duration}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${streamData.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlayPause}
              className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label={streamData.isPlaying ? 'Pause stream' : 'Play stream'}
            >
              {streamData.isPlaying ? (
                <Pause className="w-7 h-7 text-white" />
              ) : (
                <Play className="w-7 h-7 text-white ml-1" />
              )}
            </button>
            
            <div className="text-white text-sm font-medium">
              {streamData.isPlaying ? 'Live Stream' : 'Click to Listen'}
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-3">
            <Volume2 className="w-5 h-5 text-gray-400" />
            <div className="w-20">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <span className="text-gray-400 text-sm w-8">{volume}%</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
