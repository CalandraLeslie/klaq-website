'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NewsSection from '@/components/NewsSection';
import DJSection from '@/components/DJSection';

export default function Home() {
  const [isStreamPlaying, setIsStreamPlaying] = useState(false);

  const handleStreamToggle = () => {
    setIsStreamPlaying(!isStreamPlaying);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <NewsSection />
        <DJSection />
      </main>
      
      <Footer />
    </div>
  );
}
