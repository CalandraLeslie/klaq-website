'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Play, Radio, Volume2 } from 'lucide-react';

interface HeaderProps {
  isPlaying?: boolean;
  onPlayToggle?: () => void;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Listen Live', href: '/listen' },
  { name: 'Shows', href: '/shows' },
  { name: 'DJs', href: '/djs' },
  { name: 'News', href: '/news' },
  { name: 'Events', href: '/events' },
  { name: 'Contest', href: '/contest' },
  { name: 'Request', href: '/request' },
];

export default function Header({ isPlaying = false, onPlayToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-200/50'
          : 'bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl border-b border-gray-700/50'
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global navigation">
        <div className="flex items-center justify-between py-5">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-4 group relative">
            <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
              scrolled 
                ? 'bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-500/25' 
                : 'bg-gradient-to-br from-red-500 to-red-600 shadow-2xl shadow-red-500/40'
            }`}>
              <Radio className="w-8 h-8 text-white" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-baseline space-x-2">
                <h1 className={`text-3xl font-black tracking-tight transition-all duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  95.5
                </h1>
                <span className={`text-2xl font-bold transition-all duration-300 ${
                  scrolled ? 'text-red-600' : 'text-red-400'
                }`}>
                  KLAQ
                </span>
              </div>
              <p className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                scrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                EL PASO'S BEST ROCK
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-semibold text-base tracking-wide uppercase transition-all duration-300 nav-focus-visible group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-red-600' 
                    : 'text-gray-100 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300 ${
                  scrolled ? 'bg-red-600' : 'bg-red-400'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Enhanced Live Stream Control & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Professional Live Stream Button */}
            <button
              onClick={onPlayToggle}
              className={`relative flex items-center space-x-3 px-6 py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 focus-visible group overflow-hidden ${
                isPlaying
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-xl shadow-red-500/30'
                  : scrolled
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black shadow-lg shadow-gray-500/20'
                  : 'bg-gradient-to-r from-white/20 to-white/10 text-white hover:from-white/30 hover:to-white/20 backdrop-blur-sm border border-white/20'
              }`}
              aria-label={isPlaying ? 'Pause live stream' : 'Play live stream'}
            >
              {/* Animated background for live state */}
              {isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 animate-pulse"></div>
              )}
              
              <div className="relative z-10 flex items-center space-x-3">
                <div className={`flex items-center justify-center w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`}>
                  {isPlaying ? (
                    <Volume2 className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </div>
                
                <div className="hidden sm:block text-left">
                  <div className="flex items-center space-x-2">
                    <span className="font-black">
                      {isPlaying ? 'LIVE' : 'LISTEN LIVE'}
                    </span>
                    {isPlaying && (
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                    )}
                  </div>
                  {isPlaying && (
                    <div className="text-xs font-medium opacity-90">
                      95.5 FM • ON AIR
                    </div>
                  )}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Enhanced Mobile Menu Button */}
            <button
              type="button"
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 focus-visible group ${
                scrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-gray-200 hover:text-white'
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Menu className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <>
          {/* Enhanced Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Enhanced Menu Panel */}
          <div
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-8 py-8 sm:max-w-sm lg:hidden shadow-2xl"
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Radio className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">95.5 KLAQ</h2>
                  <p className="text-sm font-medium text-gray-600">EL PASO'S BEST ROCK</p>
                </div>
              </Link>
              <button
                type="button"
                className="p-2 text-gray-700 hover:text-red-600 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Enhanced Navigation Links */}
            <div className="space-y-2 mb-8">
              {navigation.map((item, index) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-lg font-semibold text-gray-900 hover:text-red-600 transition-all duration-200 nav-focus-visible group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <div className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Enhanced Live Stream Section */}
            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={() => {
                  onPlayToggle?.();
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isPlaying
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl shadow-red-500/30'
                    : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black'
                }`}
              >
                <div className="flex items-center justify-center w-6 h-6">
                  {isPlaying ? (
                    <Volume2 className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </div>
                <span>{isPlaying ? 'LIVE ON AIR' : 'LISTEN LIVE'}</span>
                {isPlaying && (
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                )}
              </button>
              
              {isPlaying && (
                <p className="text-center text-sm text-gray-600 mt-3 font-medium">
                  95.5 FM • El Paso's Best Rock
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
