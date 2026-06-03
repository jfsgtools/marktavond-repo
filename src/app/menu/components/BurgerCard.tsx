import React from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

export interface Burger {
  id: number;
  naam: string;
  beschrijving: string;
  ingredienten: string[];
  prijs: number;
  label?: string;
  labelKleur?: string;
  afbeelding: string;
  altTekst: string;
  populair?: boolean;
}

interface BurgerCardProps {
  burger: Burger;
  groot?: boolean;
}

export default function BurgerCard({ burger, groot = false }: BurgerCardProps) {
  return (
    <article
      className={`burger-card flex flex-col overflow-hidden group ${groot ? 'sm:col-span-2' : ''}`}
      aria-label={`${burger.naam} - €${burger.prijs.toFixed(2).replace('.', ',')}`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden flex-shrink-0 ${groot ? 'h-64 sm:h-72' : 'h-48'}`}>
        <AppImage
          src={burger.afbeelding}
          alt={burger.altTekst}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
        />
        {burger.label && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full text-white ${burger.labelKleur || 'bg-primary'}`}
          >
            {burger.label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h2 className="font-black text-xl text-foreground leading-tight">{burger.naam}</h2>
          <span className="price-tag text-primary flex-shrink-0">
            €{burger.prijs.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{burger.beschrijving}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {burger.ingredienten.map((ing) => (
            <span key={ing} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full font-medium">
              {ing}
            </span>
          ))}
        </div>

        {burger.populair && (
          <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-primary">
            <Icon name="FireIcon" size={14} variant="solid" className="text-primary" />
            Meest besteld vandaag
          </div>
        )}
      </div>
    </article>
  );
}