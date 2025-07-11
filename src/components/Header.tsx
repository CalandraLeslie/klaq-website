'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Radio, ChevronDown } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface NavigationItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Listen', href: '/listen' },
  {
    name: 'Shows',
    href: '/shows',
    dropdown: [
      { name: 'Show Schedule', href: '/shows', description: 'Daily Programming' },
      { name: 'Buzz Adams Morning Show', href: '/shows/buzz-adams', description: 'Weekdays 5-10 AM' },
      { name: 'Q Connected', href: '/shows/q-connected', description: 'New Music Sundays' },
      { name: 'Loudwire Nights', href: '/shows/loudwire-nights', description: 'Chuck Armstrong' },
      { name: 'On Demand Shows', href: '/on-demand', description: 'Listen Anytime' },
    ]
  },
  {
    name: 'DJs',
    href: '/djs',
    dropdown: [
      { name: 'Meet All DJs', href: '/djs', description: 'KLAQ Team' },
      { name: 'Buzz Adams', href: '/djs/buzz-adams', description: 'Morning Show Host' },
      { name: 'Joanna Barba', href: '/djs/joanna-barba', description: 'Morning Show Producer' },
      { name: 'Nico Adjemian', href: '/djs/nico', description: 'Comic & Host' },
      { name: 'Glenn Garza (Dubba G)', href: '/djs/glenn-garza', description: 'Midday Host' },
      { name: 'Chuck Armstrong', href: '/djs/chuck-armstrong', description: 'Loudwire Nights' },
      { name: 'Daniel Paulus', href: '/djs/daniel-paulus', description: 'Producer & Host' },
    ]
  },
  {
    name: 'News',
    href: '/news',
    dropdown: [
      { name: 'Latest News', href: '/news', description: 'All Stories' },
      { name: 'Local News', href: '/news/local', description: 'El Paso & Borderland' },
      { name: 'Rock News', href: '/news/rock-news', description: 'Music Industry' },
      { name: 'Concert News', href: '/news/concerts', description: 'Live Shows & Tours' },
      { name: 'Station News', href: '/news/station', description: 'KLAQ Updates' },
    ]
  },
  {
    name: 'Events',
    href: '/events',
    dropdown: [
      { name: 'Event Calendar', href: '/events', description: 'All Events' },
      { name: 'Concerts', href: '/events/concerts', description: 'Live Music' },
      { name: 'KLAQ Rocks the Park', href: '/events/klaq-rocks-park', description: 'Annual Concert' },
      { name: 'Cool Canyon Nights', href: '/events/cool-canyon-nights', description: 'Summer Series' },
      { name: 'Dallas Cowboys Football', href: '/events/cowboys', description: 'Game Coverage' },
    ]
  },
  {
    name: 'Contests',
    href: '/contests',
    dropdown: [
      { name: 'Current Contests', href: '/contests', description: 'Win Stuff!' },
      { name: 'How to Win', href: '/contests/how-to-win', description: 'Contest Guide' },
      { name: 'VIP Club', href: '/vip', description: 'Exclusive Access' },
      { name: 'Contest Rules', href: '/contest-rules', description: 'Official Rules' },
    ]
  },
  {
    name: 'More',
    href: '/contact',
    dropdown: [
      { name: 'Contact Us', href: '/contact', description: 'Get in Touch' },
      { name: 'Request a Song', href: '/request', description: 'Song Requests' },
      { name: 'Advertise with KLAQ', href: '/advertise', description: 'Business Solutions' },
      { name: 'Careers & Internships', href: '/careers', description: 'Join Our Team' },
      { name: 'Feedback', href: '/feedback', description: 'Tell Us What You Think' },
      { name: 'El Paso Business Listings', href: '/business-listings', description: 'Local Directory' },
      { name: 'Weather', href: '/weather', description: 'El Paso Weather' },
    ]
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setActiveDropdown(null), 150);
  };

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

          {/* Enhanced Desktop Navigation with Dropdowns */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`relative font-semibold text-sm tracking-wide uppercase transition-all duration-300 nav-focus-visible group px-4 py-2 rounded-lg flex items-center space-x-1 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-red-600 hover:bg-gray-50' 
                      : 'text-gray-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="px-4 mb-3">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide border-b border-gray-100 pb-2">
                        {item.name}
                      </h3>
                    </div>
                    <div className="space-y-1 max-h-64 overflow-y-auto">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-6 py-3 text-gray-900 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-900 group-hover:text-red-600">
                                {dropdownItem.name}
                              </p>
                              {dropdownItem.description && (
                                <p className="text-xs text-gray-500 mt-1">
                                  {dropdownItem.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">

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

            {/* Enhanced Navigation Links with Mobile Dropdowns */}
            <div className="space-y-1 mb-8">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-1">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-lg font-semibold text-gray-900 hover:text-red-600 transition-all duration-200 nav-focus-visible group py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <div className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.dropdown && (
                    <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-sm text-gray-600 hover:text-red-600 transition-all duration-200 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div>
                            <p className="font-medium">{dropdownItem.name}</p>
                            {dropdownItem.description && (
                              <p className="text-xs text-gray-400 mt-1">
                                {dropdownItem.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
