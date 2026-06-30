import React from 'react';
import Link from 'next/link';
import AppLogo from '../components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-5 sm:py-8 px-6 -mt-14">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 lg:gap-4">
        <div className="flex items-center gap-1 lg:gap-2">
          <AppLogo size={28} />
          <span className='visible lg:hidden'/>
          {/* Scheiding tussen text en logo */}
          <span className="font-black text-base tracking-tight hidden sm:block" style={{ letterSpacing: '-0.02em' }}>
            BamBurgers
          </span>
          <span className="text-muted-foreground text-sm">©2026</span>
        </div>

        <nav className="flex items-center gap-2 lg:gap-6" aria-label="Footer navigatie">
          <Link href="/menu" className="text-sm font-600 text-muted-foreground hover:text-foreground transition-colors">
            Menu
          </Link>
          <Link href="/about" className="text-sm font-600 text-muted-foreground hover:text-foreground transition-colors">
            Over Ons
          </Link>
          <Link href="/doelen" className='text-sm font-600 text-muted-foreground hover:text-foreground transition-colors'>
            Onze Doelen
          </Link>
          <Link href="/review" className='text-sm font-600 text-muted-foreground hover:text-foreground transition-colors'>
            Gastenboek
          </Link>          
          <Link href="/admin-panel" className="text-sm font-600 text-muted-foreground hover:text-foreground transition-colors">
            Admin
          </Link>
        </nav>

        <p className="text-xs text-muted-foreground text-center hidden sm:visible lg:hidden sm:flex items-center justify-center flex-col">
          <span className='block'>Een Project</span> voor <span className='block'>Marktavond 2026</span>
        </p>
        <p className='text-xs text-muted-foreground text-center visible sm:hidden lg:visible lg:flex items-center justify-center'>
          Een Project voor Marktavond 2026
        </p>
      </div>
    </footer>
  );
}