import React from 'react';
import AppImage from '../../../components/ui/AppImage';

interface TeamLid {
  naam: string;
  rol: string;
  afbeelding: string;
  altTekst: string;
  emoji: string;
}

interface TeamCardProps {
  lid: TeamLid;
}

export default function TeamCard({ lid }: TeamCardProps) {
  return (
    <article className="flex flex-col items-center text-center group">
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-4 border-2 border-border group-hover:border-primary transition-colors duration-300">
        <AppImage
          src={lid.afbeelding}
          alt={lid.altTekst}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="text-2xl mb-1">{lid.emoji}</div>
      <h3 className="font-black text-foreground text-base">{lid.naam}</h3>
      <p className="text-muted-foreground text-sm font-medium">{lid.rol}</p>
    </article>
  );
}

export type { TeamLid };