'use client';

import { useState } from 'react';
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
      <HeroSection 
        isPlaying={isStreamPlaying} 
        onPlayToggle={handleStreamToggle} 
      />
      <NewsSection />
      <DJSection />
    </div>
  );
}