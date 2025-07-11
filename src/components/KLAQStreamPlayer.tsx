'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Square, Volume2, VolumeX, ExternalLink, Clock, Radio } from 'lucide-react';

interface KLAQStreamPlayerProps {
  streamId: string;
  title: string;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onStop: () => void;
  showFullPlayer?: boolean;
}

export default function KLAQStreamPlayer({
  streamId,
  title,
  isPlaying,
  onPlayToggle,
  onStop,
  showFullPlayer = true
}: KLAQStreamPlayerProps) {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Format time to El Paso timezone
  const formatElPasoTime = (): string => {
    return new Date().toLocaleString('en-US', {
      timeZone: 'America/Denver',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      weekday: 'short'
    });
  };

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(formatElPasoTime());
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handlePlay = () => {
    setIsLoading(true);
    setTimeout(() => {
      onPlayToggle();
      setIsLoading(false);
    }, 1000);
  };

  const handleStop = () => {
    onStop();
  };

  const openExternalPlayer = () => {
    const playerUrl = `https://player.amperwave.net/${streamId}?playerUrl=${encodeURIComponent(window.location.href)}`;
    window.open(playerUrl, '_blank', 'width=400,height=600,scrollbars=yes,resizable=yes');
  };

  if (showFullPlayer) {
    return (
      <div className="w-full bg-black rounded-lg overflow-hidden shadow-2xl">
        {/* Iframe Player */}
        <div className="relative w-full h-96">
          <iframe
            className="w-full h-full border-0"
            src={`https://player.amperwave.net/${streamId}?playerUrl=${encodeURIComponent(window.location.href)}`}
            allow="autoplay"
            title={title}
            style={{ border: 'none' }}
          />
        </div>
        
        {/* Custom Controls Overlay */}
        <div className="bg-gradient-to-r from-gray-900 to-black p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-300">Live Stream</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePlay}
                disabled={isLoading}
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200 disabled:opacity-50"
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
                onClick={handleStop}
                disabled={!isPlaying}
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Stop stream"
              >
                <Square className="w-4 h-4" />
              </button>

              <button
                onClick={toggleMute}
                className="p-2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <div className="w-24">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <button
              onClick={openExternalPlayer}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Pop-out</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Compact player
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black p-4 rounded-lg text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePlay}
            disabled={isLoading}
            className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>

          <button
            onClick={handleStop}
            disabled={!isPlaying}
            className="w-8 h-8 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <Square className="w-3 h-3" />
          </button>

          <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-300">{currentTime}</p>
          </div>
        </div>

        <button
          onClick={openExternalPlayer}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
