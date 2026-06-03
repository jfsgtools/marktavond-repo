'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IntroScreen from './components/IntroScreen';
import HeroSection from './components/HeroSection';

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

return (
  <>
    {!introComplete && <IntroScreen onComplete={handleIntroComplete} />}

    <div>
      <Header isVisible={introComplete} />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  </>
);
}