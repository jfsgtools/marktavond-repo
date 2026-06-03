'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppLogo from '@/components/ui/AppLogo';

interface LoginFormProps {
  onLogin: () => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [gebruikersnaam, setGebruikersnaam] = useState('');
  const [wachtwoord, setWachtwoord] = useState('');
  const [fout, setFout] = useState('');
  const [laden, setLaden] = useState(false);
  const [zichtbaar, setZichtbaar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFout('');
    setLaden(true);

    // Mock authentication — static credentials
    setTimeout(() => {
      if (gebruikersnaam === 'admin' && wachtwoord === 'bam2026') {
        onLogin();
      } else {
        setFout('Onjuiste gebruikersnaam of wachtwoord.');
        setLaden(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 blob-primary rounded-full" aria-hidden />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 blob-accent rounded-full" aria-hidden />
      <div className="grain-overlay absolute inset-0" aria-hidden />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-3">
            <AppLogo size={48} />
            <span className="font-black text-3xl tracking-tight" style={{ letterSpacing: '-0.03em' }}>
              BamBurgers
            </span>
          </div>
          <p className="text-muted-foreground text-sm font-medium">Admin Paneel · Beveiligde Toegang</p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <h1 className="font-black text-2xl text-foreground mb-2">Inloggen</h1>
          <p className="text-muted-foreground text-sm mb-8">Voer je beheerdergegevens in om door te gaan.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            {/* Gebruikersnaam */}
            <div className="flex flex-col gap-2">
              <label htmlFor="gebruikersnaam" className="text-sm font-bold text-foreground">
                Gebruikersnaam
              </label>
              <div className="relative">
                <Icon name="UserIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="gebruikersnaam"
                  type="text"
                  autoComplete="username"
                  value={gebruikersnaam}
                  onChange={(e) => setGebruikersnaam(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-11 pr-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  required
                />
              </div>
            </div>

            {/* Wachtwoord */}
            <div className="flex flex-col gap-2">
              <label htmlFor="wachtwoord" className="text-sm font-bold text-foreground">
                Wachtwoord
              </label>
              <div className="relative">
                <Icon name="LockClosedIcon" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="wachtwoord"
                  type={zichtbaar ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={wachtwoord}
                  onChange={(e) => setWachtwoord(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setZichtbaar(!zichtbaar)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={zichtbaar ? 'Wachtwoord verbergen' : 'Wachtwoord tonen'}
                >
                  <Icon name={zichtbaar ? 'EyeSlashIcon' : 'EyeIcon'} size={18} />
                </button>
              </div>
            </div>

            {/* Error */}
            {fout && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                <Icon name="ExclamationCircleIcon" size={16} className="flex-shrink-0" />
                {fout}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={laden}
              className="btn-primary w-full py-3.5 text-base justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {laden ? (
                <>
                  <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                  Inloggen...
                </>
              ) : (
                <>
                  <Icon name="ArrowRightEndOnRectangleIcon" size={18} />
                  Inloggen
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Alleen voor BamBurgers beheerders · Schoolmarkt 2026
        </p>
      </div>
    </div>
  );
}