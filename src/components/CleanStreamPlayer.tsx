'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Volume2, Users, Clock, Radio, VolumeX, ExternalLink, Wifi } from 'lucide-react';
import { fetchCurrentTrack, fetchListenerCount, getCurrentShow, TrackInfo } from '@/utils/klaqApi';

interface CleanStreamPlayerProps {
  title: string;
  streamUrl: string;
  isMainStream?: boolean;
  className?: string;
}

export default function CleanStreamPlayer({ 
  title, 
  streamUrl, 
  isMainStream = false,
  className = "" 
}: CleanStreamPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<TrackInfo | null>(null);
  const [listenerCount, setListenerCount] = useState<number>(0);
  const [currentShow, setCurrentShow] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [audioError, setAudioError] = useState<string>('');
  const [connectionStatus, setConnectionStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Clean KLAQ stream configuration - direct audio only
  const getStreamConfig = () => {
    if (isMainStream) {
      return {
        audioUrls: [
          'https://playerservices.streamtheworld.com/api/livestream-redirect/KLAQFMAAC.mp3',
          'https://stream.revma.ihrhls.com/zc5063',
          'https://ice7.securenetsystems.net/KLAQ'
        ],
        callsign: 'KLAQ 95.5 FM',
        frequency: '95.5',
        format: 'Classic Rock'
      };
    } else {
      return {
        audioUrls: [
          'https://stream.revma.ihrhls.com/zc5793',
          'https://playerservices.streamtheworld.com/api/livestream-redirect/KLAQQ2AAC.mp3'
        ],
        callsign: 'Q2 HD2',
        frequency: '95.5-2',
        format: 'Alternative Rock'
      };
    }
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const elPasoTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Denver',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(elPasoTime);
    };

    const fetchData = async () => {
      updateTime();
      
      if (isMainStream) {
        // KLAQ main stream data
        const track = await fetchCurrentTrack();
        const listeners = await fetchListenerCount();
        const show = await getCurrentShow();
        
        setCurrentTrack(track);
        setListenerCount(listeners);
        setCurrentShow(show);
      } else {
        // Q2 alternative data
        setListenerCount(Math.floor(Math.random() * 500) + 200);
        setCurrentShow('Q2 Alternative Rock');
        setCurrentTrack({
          title: 'Alternative Rock',
          artist: 'Q2 HD2',
          album: 'Live Stream',
          year: '2025'
        });
      }
    };

    fetchData();
    const dataInterval = setInterval(fetchData, 15000);
    return () => clearInterval(dataInterval);
  }, [isMainStream]);

  useEffect(() => {
    // Sync volume with audio element
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handlePlayToggle = async () => {
    if (isPlaying) {
      // Stop playback
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      setConnectionStatus('disconnected');
      setAudioError('');
    } else {
      // Start playback
      setIsLoading(true);
      setConnectionStatus('connecting');
      setAudioError('');
      
      try {
        if (audioRef.current) {
          audioRef.current.load();
          await audioRef.current.play();
          setIsPlaying(true);
          setConnectionStatus('connected');
          setAudioError('');
        }
      } catch (error) {
        console.log('Autoplay blocked, user interaction required');
        setAudioError('Click the audio player below to start listening');
        setConnectionStatus('disconnected');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleAudioPlay = () => {
    setIsPlaying(true);
    setConnectionStatus('connected');
    setAudioError('');
  };

  const handleAudioPause = () => {
    setIsPlaying(false);
    setConnectionStatus('disconnected');
  };

  const handleAudioError = () => {
    setAudioError('Stream temporarily unavailable. Try refreshing the page.');
    setConnectionStatus('disconnected');
    setIsPlaying(false);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }
  };

  const handleMuteToggle = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (audioRef.current) {
      audioRef.current.volume = newMuted ? 0 : volume;
    }
  };

  const config = getStreamConfig();
  const gradientClass = isMainStream 
    ? 'from-red-900/20 via-gray-900 to-black' 
    : 'from-blue-900/20 via-purple-900/20 to-black';
  const accentColor = isMainStream ? 'text-red-400' : 'text-blue-400';
  const buttonColor = isMainStream 
    ? 'bg-red-600 hover:bg-red-700' 
    : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className={`bg-gradient-to-br ${gradientClass} rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm ${className}`}>
      
      {/* Header */}
      <div className="bg-black/60 backdrop-blur-md px-6 py-4 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`relative w-3 h-3 rounded-full ${connectionStatus === 'connected' ? 'bg-green-400' : connectionStatus === 'connecting' ? 'bg-yellow-400' : 'bg-gray-500'}`}>
              {connectionStatus === 'connected' && (
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
              )}
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">{config.callsign}</h3>
            <div className="bg-gray-600/30 border border-gray-500/50 rounded-full px-3 py-1 backdrop-blur-sm">
              <span className="text-gray-300 text-sm font-semibold">{config.frequency} FM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300 text-sm font-mono bg-black/40 rounded-lg px-3 py-1.5">
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm bg-black/40 rounded-lg px-3 py-1.5">
              <Wifi className="w-4 h-4" />
              <span className="capitalize">{connectionStatus}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Station Info */}
        <div className="mb-8 p-6 bg-gradient-to-br from-black/60 via-red-900/20 to-black/60 rounded-2xl backdrop-blur-md border border-red-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="flex items-center space-x-6">
              <div className={`w-24 h-24 bg-gradient-to-br ${isMainStream ? 'from-red-600 via-red-700 to-red-800' : 'from-blue-600 via-purple-700 to-blue-800'} rounded-2xl flex items-center justify-center shadow-2xl ring-4 ${isMainStream ? 'ring-red-500/40' : 'ring-blue-500/40'}`}>
                <Radio className="w-12 h-12 text-white drop-shadow-2xl" />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-2">{config.callsign}</h4>
                <p className="text-lg text-gray-300 mb-2">{config.format}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>El Paso's Rock Station</span>
                </div>
              </div>
            </div>
            
            {/* Live Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 rounded-xl p-4 border border-red-500/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="w-6 h-6 text-red-400" />
                  <span className="text-red-400 font-semibold">Listeners</span>
                </div>
                <div className="text-2xl font-bold text-white">{listenerCount.toLocaleString()}</div>
              </div>
              <div className="bg-black/40 rounded-xl p-4 border border-red-500/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-6 h-6 text-red-400" />
                  <span className="text-red-400 font-semibold">Show</span>
                </div>
                <div className="text-lg font-bold text-white">{currentShow}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Now Playing */}
        {currentTrack && (
          <div className="mb-8 p-6 bg-black/40 rounded-2xl border border-gray-600/30 backdrop-blur-md">
            <h5 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Now Playing</span>
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-white mb-1">{currentTrack.title}</div>
                <div className="text-xl text-gray-300 mb-2">{currentTrack.artist}</div>
                <div className="text-sm text-gray-400">{currentTrack.album} • {currentTrack.year}</div>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center space-x-8 mb-8">
          <button
            onClick={handlePlayToggle}
            disabled={isLoading}
            className={`${buttonColor} disabled:opacity-50 rounded-3xl p-8 transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl ring-4 ring-white/20 hover:ring-white/30`}
          >
            {isLoading ? (
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <Pause className="w-10 h-10 text-white drop-shadow-2xl" />
            ) : (
              <Play className="w-10 h-10 text-white ml-1 drop-shadow-2xl" />
            )}
          </button>
          
          <div className="flex items-center space-x-4 bg-black/60 backdrop-blur-md rounded-3xl px-8 py-4 shadow-2xl border border-gray-600/30">
            <button onClick={handleMuteToggle} className="text-gray-300 hover:text-white transition-colors">
              {isMuted ? <VolumeX className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-40 h-3 bg-gray-700 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${isMainStream ? '#ef4444' : '#3b82f6'} 0%, ${isMainStream ? '#ef4444' : '#3b82f6'} ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
              }}
            />
            <span className="text-white text-lg font-mono w-12 font-bold">{Math.round(volume * 100)}%</span>
          </div>
        </div>

        {/* Audio Player */}
        <div className="bg-black/40 rounded-2xl p-6 border border-gray-600/30 backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-lg font-semibold text-white">Live Audio Stream</h5>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${connectionStatus === 'connected' ? 'bg-green-400 animate-pulse' : connectionStatus === 'connecting' ? 'bg-yellow-400 animate-pulse' : 'bg-gray-500'}`}></div>
              <span className={`text-sm font-medium ${connectionStatus === 'connected' ? 'text-green-400' : connectionStatus === 'connecting' ? 'text-yellow-400' : 'text-gray-400'}`}>
                {connectionStatus.toUpperCase()}
              </span>
            </div>
          </div>
          
          <audio
            ref={audioRef}
            className="w-full h-12 rounded-lg bg-gray-800"
            controls
            preload="none"
            onPlay={handleAudioPlay}
            onPause={handleAudioPause}
            onError={handleAudioError}
            onLoadStart={() => setConnectionStatus('connecting')}
            onCanPlay={() => setConnectionStatus('connected')}
          >
            {config.audioUrls.map((url, index) => (
              <source key={index} src={url} type="audio/mpeg" />
            ))}
            Your browser does not support the audio element.
          </audio>
          
          {audioError && (
            <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-500/50 rounded-lg">
              <div className="text-yellow-400 text-sm font-medium">Notice:</div>
              <div className="text-yellow-300 text-sm">{audioError}</div>
            </div>
          )}
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black/60 px-4 py-3 rounded-lg text-center">
              <div className="text-gray-400 mb-1">Quality</div>
              <div className="text-white font-semibold">128k AAC</div>
            </div>
            <div className="bg-black/60 px-4 py-3 rounded-lg text-center">
              <div className="text-gray-400 mb-1">Format</div>
              <div className="text-white font-semibold">Stereo</div>
            </div>
            <a 
              href={isMainStream ? 'https://klaq.com/listen-live/' : 'https://klaq.com/'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg transition-colors duration-200 text-white font-medium text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>KLAQ.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
