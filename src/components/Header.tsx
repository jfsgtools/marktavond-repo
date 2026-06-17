'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '../components/ui/AppLogo';
import Icon from '../components/ui/AppIcon';

interface HeaderProps {
  isVisible?: boolean;
  forceShow?: boolean;
}

export default function Header({ isVisible = false, forceShow = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const show = isVisible || forceShow;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        } ${scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label="BamBurgers home">
            <AppLogo size={36} />
            <span
              id="header-brand"
              className="font-black text-xl tracking-tight text-foreground hidden sm:block"
              style={{ letterSpacing: '-0.03em' }}
            >
              BamBurgers
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Hoofdnavigatie">
            <Link href="/menu" className="nav-link-dutch text-muted-foreground hover:text-foreground transition-colors">
              Menu
            </Link>
            <Link href="/about" className="nav-link-dutch text-muted-foreground hover:text-foreground transition-colors">
              Over Ons
            </Link>
            <Link href="/doelen" className="nav-link-dutch text-muted-foreground hover:text-foreground transition-colors">
              Onze Doelen
            </Link>
            <Link href="/review" className="nav-link-dutch text-muted-foreground hover:text-foreground transition-colors">
              Gastenboek
            </Link>
            <Link href="/menu" className="btn-primary text-sm">
              Bekijk Menu
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="flex items-center gap-3 mb-8">
          <AppLogo size={40} />
          <span className="font-black text-2xl tracking-tight" style={{ letterSpacing: '-0.03em' }}>BamBurgers</span>
        </div>
        <nav className="flex flex-col items-center gap-6" aria-label="Mobiele navigatie">
          <Link
            href="/"
            className="nav-link-dutch text-2xl text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="nav-link-dutch text-2xl text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="nav-link-dutch text-2xl text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Over Ons
          </Link>
          <Link
            href="/doelen"
            className="nav-link-dutch text-2xl text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Onze Doelen
          </Link>
          <Link
            href="/review"
            className="nav-link-dutch text-2xl text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Gastenboek
          </Link>
          <Link
            href="/menu"
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Bekijk Menu
          </Link>
        </nav>
        <button
          className="absolute top-6 right-6 p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Menu sluiten"
        >
          <Icon name="XMarkIcon" size={28} />
        </button>
      </div>
    </>
  );
}