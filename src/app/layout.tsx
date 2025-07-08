'use client';

import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useRef, useEffect } from 'react';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isStreamPlaying, setIsStreamPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [streamError, setStreamError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle audio element events
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
      const handleError = () => {
        setIsLoading(false);
        setStreamError('Stream temporarily unavailable. Please try again.');
        setIsStreamPlaying(false);
      };

      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);

      return () => {
        audio.removeEventListener('loadstart', handleLoadStart);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
      };
    }
  }, []);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isStreamPlaying) {
        setIsLoading(true);
        setStreamError(null);
        
        const attemptPlay = async () => {
          try {
            if (audioRef.current) {
              audioRef.current.load();
              await audioRef.current.play();
              setIsLoading(false);
            }
          } catch (error) {
            console.error('Play failed:', error);
            setIsLoading(false);
            if (error instanceof Error && error.name === 'NotAllowedError') {
              setStreamError('Please click play to start the stream');
            } else {
              setStreamError('Unable to start stream. Please try again.');
            }
            setIsStreamPlaying(false);
          }
        };
        
        attemptPlay();
      } else {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsLoading(false);
      }
    }
  }, [isStreamPlaying]);

  const handleStreamToggle = () => {
    setIsStreamPlaying(!isStreamPlaying);
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>95.5 KLAQ - El Paso's Best Rock</title>
        <meta name="description" content="El Paso's premier rock radio station. Listen live, check out our DJs, and stay up to date with the latest rock music and local news." />
        <meta name="keywords" content="KLAQ, 95.5, El Paso, rock radio, live streaming, music, radio station" />
        <meta property="og:title" content="95.5 KLAQ - El Paso's Best Rock" />
        <meta property="og:description" content="El Paso's premier rock radio station featuring live streaming and the best rock music." />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${inter.variable} ${robotoCondensed.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Global Audio Element for Live Stream */}
        <audio
          ref={audioRef}
          preload="none"
          crossOrigin="anonymous"
          className="hidden"
        >
          <source src="https://stream.revma.ihrhls.com/zc185" type="audio/mpeg" />
          <source src="https://playerservices.streamtheworld.com/api/livestream-redirect/KLAQ.mp3" type="audio/mpeg" />
          <source src="https://ice1.somafm.com/groovesalad-256-mp3" type="audio/mpeg" />
        </audio>

        {/* Stream Error Notification */}
        {streamError && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <span className="text-sm">{streamError}</span>
              <button
                onClick={() => setStreamError(null)}
                className="text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <Header 
          isPlaying={isStreamPlaying || isLoading} 
          onPlayToggle={handleStreamToggle} 
        />
        <main className="pt-28 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
