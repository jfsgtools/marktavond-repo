'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '../../components/ui/AppImage';

interface IntroScreenProps {
  onComplete: () => void;
  isVisible?: boolean;
}

export default function IntroScreen({ onComplete, isVisible = true }: IntroScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const brandText = 'BamBurgers';

  useEffect(() => {
    // Animate letters in on mount using CSS transitions staggered via inline style
    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px) rotate(-8deg)';
      el.style.transition = `opacity 0.5s ease ${0.1 + i * 0.06}s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + i * 0.06}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) rotate(0deg)';
        });
      });
    });

    if (logoRef.current) {
      logoRef.current.style.opacity = '0';
      logoRef.current.style.transform = 'scale(0.6) rotate(-12deg)';
      logoRef.current.style.transition = 'opacity 0.6s ease 0.05s, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (logoRef.current) {
            logoRef.current.style.opacity = '1';
            logoRef.current.style.transform = 'scale(1) rotate(0deg)';
          }
        });
      });
    }
  }, []);

  const handleClick = () => {
    if (!containerRef.current) return;

    // Animate letters out with stagger
    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.transition = `opacity 0.3s ease ${i * 0.03}s, transform 0.4s cubic-bezier(0.55, 0, 1, 0.45) ${i * 0.03}s`;
      el.style.opacity = '0';
      el.style.transform = 'translateY(-30px) rotate(5deg)';
    });

    if (logoRef.current) {
      logoRef.current.style.transition = 'opacity 0.4s ease 0.2s, transform 0.5s cubic-bezier(0.55, 0, 1, 0.45) 0.2s';
      logoRef.current.style.opacity = '0';
      logoRef.current.style.transform = 'scale(0.5) translateY(-20px)';
    }

    if (hintRef.current) {
      hintRef.current.style.transition = 'opacity 0.2s ease';
      hintRef.current.style.opacity = '0';
    }

    setTimeout(() => {
      onComplete();
    }, 500);
  };

  const show = isVisible;

  return (
    <div
      ref={containerRef}
      className={`intro-screen ${ show ? 'opacity-100 translate-y-0' : 'bg-transparent'}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Klik om BamBurgers te betreden"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-primary rounded-full" aria-hidden />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 blob-accent rounded-full" aria-hidden />
      <div className="grain-overlay absolute inset-0" aria-hidden />

      <div className="intro-logo-container relative z-10">
        {/* Logo mark */}
        <div ref={logoRef} className="intro-logo-mark flex items-center justify-center">
          <AppImage alt='Raket met erop een hamburger en onder de uitlaat sausspetters' src='/assets/images/app_logo.png' />
        </div>

        {/* Brand text with individual letters */}
        <div className="intro-brand-text flex items-center" aria-label="BamBurgers">
          {brandText.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => { if (el) lettersRef.current[i] = el; }}
              className={`intro-letter p${i < 3 ? '1' : '2'} `}
              aria-hidden="true"
            >
              {char}
            </span>
          ))}
        </div>

        <p ref={hintRef} className="intro-hint">
          Klik om te beginnen
        </p>
      </div>
    </div>
  );
}