'use client';

import React, { useEffect, useRef } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
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

  return (
    <div
      ref={containerRef}
      className="intro-screen"
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
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="120" aria-hidden="true">
            <rect width="120" height="120" rx="28" fill="#E8300A" />
            {/* Burger illustration */}
            {/* Bottom bun */}
            <path d="M24 78 Q60 90 96 78 L96 86 Q60 96 24 86 Z" fill="#FFFFFF" opacity="0.9" />
            {/* Patty */}
            <rect x="20" y="62" width="80" height="14" rx="7" fill="#F5A623" />
            {/* Lettuce wave */}
            <path d="M18 58 Q30 52 42 58 Q54 64 66 58 Q78 52 90 58 Q96 61 102 58 L102 62 Q96 65 90 62 Q78 56 66 62 Q54 68 42 62 Q30 56 18 62 Z" fill="#FFFFFF" opacity="0.7" />
            {/* Top bun */}
            <path d="M24 42 Q60 28 96 42 L96 56 Q60 60 24 56 Z" fill="#FFFFFF" opacity="0.9" />
            {/* Sesam seeds */}
            <ellipse cx="45" cy="37" rx="4" ry="2.5" fill="#F5A623" transform="rotate(-15 45 37)" />
            <ellipse cx="60" cy="33" rx="4" ry="2.5" fill="#F5A623" transform="rotate(5 60 33)" />
            <ellipse cx="75" cy="37" rx="4" ry="2.5" fill="#F5A623" transform="rotate(15 75 37)" />
          </svg>
        </div>

        {/* Brand text with individual letters */}
        <div className="intro-brand-text flex items-center" aria-label="BamBurgers">
          {brandText.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => { if (el) lettersRef.current[i] = el; }}
              className={`intro-letter ${char === 'B' ? (i === 0 ? 'letter-b1' : 'letter-b2') : ''}`}
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