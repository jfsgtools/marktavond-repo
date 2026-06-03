import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AppLogo size={28} />
          <span className="font-black text-base tracking-tight hidden sm:block" style={{ letterSpacing: '-0.02em' }}>
            BamBurgers
          </span>
          <span className="text-muted-foreground text-sm">© 2026</span>
        </div>

        <nav className="flex items-center gap-6" aria-label="Footer navigatie">
          <Link href="/menu" className="text-sm font-600 text-muted-foreground hover:text-foreground transition-colors">
            Menu
          </Link>
          <Link href="/about" className="text-sm font-600 text-muted-foreground hover:text-foreground transition-colors">
            Over Ons
          </Link>
          <Link href="/admin-panel" className="text-sm font-600 text-muted-foreground hover:text-foreground transition-colors">
            Admin
          </Link>
        </nav>

        <p className="text-xs text-muted-foreground text-center sm:text-right">
          Schoolmarkt project · Gemaakt met ❤️
        </p>
      </div>
    </footer>
  );
}