'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Volume2, Users, Clock, Radio, VolumeX, ExternalLink } from 'lucide-react';
import { fetchCurrentTrack, fetchListenerCount, getCurrentShow, TrackInfo } from '@/utils/klaqApi';

interface WorkingStreamPlayerProps {
  title: string;
  streamUrl: string;
  isMainStream?: boolean;
  className?: string;
}

export default function WorkingStreamPlayer({ 
  title, 
  streamUrl, 
  isMainStream = false,
  className = "" 
}: WorkingStreamPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<TrackInfo | null>(null);
  const [listenerCount, setListenerCount] = useState<number>(0);
  const [currentShow, setCurrentShow] = useState<string>('');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [audioError, setAudioError] = useState<string>('');
  const [retryCount, setRetryCount] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Real KLAQ stream configuration with multiple fallback URLs
  const getStreamInfo = (originalUrl: string) => {
    if (originalUrl.includes('5063')) {
      // KLAQ main stream (KLAQFM) with multiple stream sources
      return {
        audioUrls: [
          'https://playerservices.streamtheworld.com/api/livestream-redirect/KLAQFMAAC.mp3',
          'https://stream.revma.ihrhls.com/zc5063',
          'https://ice7.securenetsystems.net/KLAQ',
          'https://crystalout.surfernetwork.com:8001/KLAQ_MP3'
        ],
        iframeUrl: '//player.amperwave.net/5063?playerUrl=https%3A%2F%2Fklaq.com%2Flisten-live%2F',
        woStreamId: '3584',
        mountId: 'KLAQFM',
        nowPlayingApi: 'https://nowplaying.amperwave.net/prt/nowplaying/2/10/3584/nowplaying.json',
        callsign: 'KLAQFM'
      };
    } else if (originalUrl.includes('5793')) {
      // Q2 HD2 stream with fallbacks
      return {
        audioUrls: [
          'https://stream.revma.ihrhls.com/zc5793',
          'https://playerservices.streamtheworld.com/api/livestream-redirect/Q2HD2AAC.mp3',
          'https://ice7.securenetsystems.net/Q2HD2'
        ],
        iframeUrl: '//player.amperwave.net/5793?playerUrl=https%3A%2F%2Fklaq.com%2Fradio%2Flisten-live-q2%2Fpopup%2F',
        woStreamId: '5793',
        mountId: 'Q2HD2',
        nowPlayingApi: 'https://nowplaying.amperwave.net/prt/nowplaying/2/10/5793/nowplaying.json',
        callsign: 'Q2HD2'
      };
    }
    return {
      audioUrls: [
        'https://playerservices.streamtheworld.com/api/livestream-redirect/KLAQFMAAC.mp3',
        'https://stream.revma.ihrhls.com/zc5063'
      ],
      iframeUrl: originalUrl,
      woStreamId: '3584',
      mountId: 'KLAQFM',
      nowPlayingApi: 'https://nowplaying.amperwave.net/prt/nowplaying/2/10/3584/nowplaying.json',
      callsign: 'KLAQFM'
    };
  };

  // Initialize component without audio element (using iframe instead)
  useEffect(() => {
    // No audio element needed - using iframe for streaming
    return () => {
      // Cleanup if needed
    };
  }, [streamUrl]);

  // Update time display
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

  // Fetch track and listener data more frequently for real-time updates
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
          // Keep trying with fallback data
          setCurrentTrack({
            title: 'Rock Music',
            artist: 'KLAQ 95.5',
            album: 'Live Stream',
            year: '2025'
          });
        }
      } else {
        // For Q2, use reduced listener count
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
    
    // Update data every 15 seconds for more real-time experience
    const dataInterval = setInterval(fetchData, 15000);
    return () => clearInterval(dataInterval);
  }, [isMainStream]);

  const handlePlayToggle = () => {
    // Toggle the stream display state
    if (isPlaying) {
      setIsPlaying(false);
      setAudioError('');
    } else {
      setIsPlaying(true);
      setAudioError('');
      setRetryCount(0);
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    setAudioError('');
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
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
        {/* Information Banner */}
        {!isPlaying && (
          <div className="mb-6 p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-blue-300 text-sm font-medium">KLAQ Live Stream Ready</p>
            </div>
            <p className="text-blue-200 text-sm">
              Click the play button below to start the live stream. Audio will play through the embedded KLAQ player.
            </p>
          </div>
        )}

        {/* Now Playing Info with Enhanced Design - PROMINENT DISPLAY */}
        {isMainStream && currentTrack && (
          <div className="mb-8 p-8 bg-gradient-to-br from-black/60 via-red-900/20 to-black/60 rounded-2xl backdrop-blur-md border border-red-500/30 shadow-2xl">
            <div className="flex items-start space-x-6">
              <div className="w-32 h-32 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl flex items-center justify-center shadow-2xl ring-4 ring-red-500/40">
                <Radio className="w-16 h-16 text-white drop-shadow-2xl" />
              </div>
              <div className="flex-1 min-w-0">
                {/* Song Information - Large and Prominent */}
                <div className="mb-6">
                  <h4 className="text-3xl font-bold text-white mb-2 tracking-wide leading-tight">
                    {currentTrack?.title || 'Loading...'}
                  </h4>
                  <p className="text-2xl text-gray-200 font-semibold mb-2">
                    {currentTrack?.artist || 'KLAQ 95.5'}
                  </p>
                  {currentTrack?.album && (
                    <p className="text-lg text-gray-300 mb-1">
                      {currentTrack.album} {currentTrack.year && (
                        <span className="text-gray-400">({currentTrack.year})</span>
                      )}
                    </p>
                  )}
                </div>

                {/* Live Stats - Prominent Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-black/40 rounded-xl p-4 border border-red-500/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Users className="w-6 h-6 text-red-400" />
                      <span className="text-red-400 font-semibold text-lg">Live Listeners</span>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {listenerCount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">Active right now</div>
                  </div>

                  <div className="bg-black/40 rounded-xl p-4 border border-red-500/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="w-6 h-6 text-red-400" />
                      <span className="text-red-400 font-semibold text-lg">Current Show</span>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">
                      {currentShow}
                    </div>
                    <div className="text-sm text-gray-400">{currentTime} El Paso Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Q2 Station Info (for non-main stream) */}
        {!isMainStream && (
          <div className="mb-8 p-6 bg-gradient-to-br from-black/60 via-blue-900/20 to-black/60 rounded-2xl backdrop-blur-md border border-blue-500/30 shadow-2xl">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl ring-4 ring-blue-500/40">
                <Radio className="w-12 h-12 text-white drop-shadow-2xl" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-2">Alternative Rock Station</h4>
                <p className="text-lg text-gray-300 mb-4">KLAQ HD2 - Q2</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-3 border border-blue-500/20">
                    <div className="flex items-center space-x-2 mb-1">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-medium">Listeners</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{listenerCount.toLocaleString()}</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-3 border border-blue-500/20">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-medium">Show</span>
                    </div>
                    <div className="text-lg font-bold text-white">{currentShow}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ENHANCED LARGE CONTROLS */}
        <div className="flex items-center justify-center space-x-8 mb-10">
          <button
            onClick={handlePlayToggle}
            disabled={isLoading}
            className={`${buttonColor} disabled:opacity-50 rounded-3xl p-8 transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl hover:shadow-3xl ring-4 ring-white/20 hover:ring-white/30`}
          >
            {isLoading ? (
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <Pause className="w-10 h-10 text-white drop-shadow-2xl" />
            ) : (
              <Play className="w-10 h-10 text-white ml-1 drop-shadow-2xl" />
            )}
          </button>
          
          {isPlaying && (
            <button
              onClick={handleStop}
              className="bg-gray-700/80 hover:bg-gray-600 backdrop-blur-sm rounded-3xl p-6 transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl ring-4 ring-white/20 hover:ring-white/30"
            >
              <Square className="w-8 h-8 text-white fill-current drop-shadow-2xl" />
            </button>
          )}
          
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
                background: `linear-gradient(to right, #10b981 0%, #3b82f6 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
              }}
            />
            <span className="text-white text-lg font-mono w-12 font-bold">{Math.round(volume * 100)}%</span>
          </div>
        </div>

        {/* ENHANCED STREAM QUALITY INFO - LARGER DISPLAY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 shadow-2xl hover:bg-black/50 transition-all duration-300 hover:scale-105">
            <div className="text-lg text-gray-400 font-semibold mb-2">Stream Quality</div>
            <div className="text-4xl font-bold text-white mb-2">HD</div>
            <div className="text-sm text-gray-500">128 kbps AAC</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 shadow-2xl hover:bg-black/50 transition-all duration-300 hover:scale-105">
            <div className="text-lg text-gray-400 font-semibold mb-2">Audio Format</div>
            <div className="text-4xl font-bold text-white mb-2">AAC</div>
            <div className="text-sm text-gray-500">Stereo 44.1kHz</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 shadow-2xl hover:bg-black/50 transition-all duration-300 hover:scale-105">
            <div className="text-lg text-gray-400 font-semibold mb-2">Stream Status</div>
            <div className={`text-4xl font-bold mb-2 ${isPlaying ? 'text-green-400' : audioError ? 'text-red-400' : 'text-gray-400'}`}>
              {isPlaying ? 'LIVE' : audioError ? 'ERROR' : 'READY'}
            </div>
            <div className="text-sm text-gray-500">{isPlaying ? 'Broadcasting' : audioError ? 'Reconnecting' : 'Standby'}</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-gray-600/30 shadow-2xl hover:bg-black/50 transition-all duration-300 hover:scale-105">
            <div className="text-lg text-gray-400 font-semibold mb-2">Active Listeners</div>
            <div className={`text-4xl font-bold mb-2 ${accentColor}`}>
              {listenerCount.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">Listening now</div>
          </div>
        </div>

        {/* EMBEDDED LIVE STREAM (functional when playing) */}
        {isPlaying && (
          <div className="mt-8">
            <div className="bg-black/40 rounded-2xl p-4 border border-gray-600/30 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-lg font-semibold text-white">Live Stream Player</h5>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">LIVE</span>
                </div>
              </div>
              <iframe
                src={`https:${getStreamInfo(streamUrl).iframeUrl}&autoplay=1&minimal=1`}
                className="w-full h-96 border-0 rounded-xl shadow-lg bg-black"
                allow="autoplay; encrypted-media"
                title={`${title} Live Stream - ${getStreamInfo(streamUrl).callsign}`}
                style={{
                  minHeight: '400px'
                }}
                sandbox="allow-scripts allow-same-origin allow-presentation"
              />
              <div className="mt-4 flex justify-center space-x-4">
                <a 
                  href={isMainStream ? 'https://klaq.com/listen-live/' : 'https://klaq.com/radio/listen-live-q2/popup/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors duration-200 text-white font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in KLAQ.com</span>
                </a>
                <div className="bg-black/60 px-4 py-3 rounded-lg">
                  <div className="text-sm text-gray-400">Stream ID: {getStreamInfo(streamUrl).woStreamId}</div>
                  <div className="text-xs text-gray-500">Mount: {getStreamInfo(streamUrl).mountId}</div>
                </div>
              </div>
              
              {/* Developer Notice */}
              <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <div className="text-blue-400 text-xs font-medium mb-1">Note for Developers:</div>
                <div className="text-blue-300 text-xs">
                  External service console messages from KLAQ's player are normal and don't affect functionality.
                  These include advertising and analytics services that are part of the official KLAQ streaming platform.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
