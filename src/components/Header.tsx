'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '../components/ui/AppLogo';
import Icon from '../components/ui/AppIcon';
import { Circle, Divide } from 'lucide-react';
import BamBurgers from './ui/LogoText';

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
              className="text-xl tracking-tight text-foreground hidden sm:block"
              style={{ letterSpacing: '-0.03em' }}
            >
              <BamBurgers bold />
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
            <Link href='/marktavond' className='nav-link-dutch text-muted-foreground hover:text-foreground transition-colors'>
              Over Marktavond
            </Link>
            <Link href="/doelen" className="nav-link-dutch text-muted-foreground hover:text-foreground transition-colors">
              Onze Doelen
            </Link>
            <Link href="/review" className="nav-link-dutch text-muted-foreground hover:text-foreground transition-colors">
              Gastenboek
            </Link>
            <Link href="/about#contact" className="nav-link-dutch text-muted-foreground hover:text-foreground transition-colors">
              Contact
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
        <div className="flex items-center gap-3 mb-2">
          <AppLogo size={40} />
          <span className="text-2xl tracking-tight" style={{ letterSpacing: '-0.03em' }}><BamBurgers bold /></span>
        </div>
        <hr className='border-muted-foreground border-solid max-w-xs w-full' />
        <nav className="flex flex-col items-center gap-6 my-2" aria-label="Mobiele navigatie">
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
            href="/marktavond"
            className="nav-link-dutch text-2xl text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Over Marktavond
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
          {/* <hr className='border-muted-foreground border-solid max-w-6xl w-full'/> */}
          <Link
            href="/about#contact"
            className="nav-link-dutch text-2xl text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <hr className='border-muted-foreground border-solid max-w-xs w-full' />
        <section id='social-media' className='px-5 flex flex-row gap-4 mt-8 mb-4'>
          <div id='mailIcon' className='relative w-12 h-12'>
            <div className='absolute inset-0 z-0 flex items-center justify-center'>
              <Circle className='fill-primary-foreground text-primary-foreground drop-shadow-md' size={34} />
            </div>
            <div className='absolute inset-0 z-10 flex items-center justify-center'>
              <Icon
                name='EnvelopeIcon'
                size={24}
                onClick={() => window.open('mailto:bamburgersbv@gmail.com')}
                className='text-accent cursor-pointer'
              />
            </div>
          </div>
          <div id='locationIcon' className='relative w-12 h-12'>
            <div className='absolute inset-0 z-0 flex items-center justify-center'>
              <Circle className='fill-primary-foreground text-primary-foreground drop-shadow-md' size={34} />
            </div>
            <div className='absolute inset-0 z-10 flex items-center justify-center'>
              <Icon
                name='MapPinIcon'
                size={24}
                onClick={() => window.open('https://maps.app.goo.gl/GZLLDgkUo5xttLvXA')}
                className='text-accent cursor-pointer'
              />
            </div>
          </div>
          <div id='callIcon' className='relative w-12 h-12'>
            <div className='absolute inset-0 z-0 flex items-center justify-center'>
              <Circle className='fill-primary-foreground text-primary-foreground drop-shadow-md' size={34} />
            </div>
            <div className='absolute inset-0 z-10 flex items-center justify-center'>
              <Icon
                name='PhoneIcon'
                size={24}
                onClick={() => window.open('tel:+31 6 10161946')}
                className='text-accent cursor-pointer'
              />
            </div>
          </div>
        </section>
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