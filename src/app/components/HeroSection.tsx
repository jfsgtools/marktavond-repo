'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen pt-28 pb-20 px-6 flex flex-col justify-center relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-primary rounded-full" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-accent rounded-full" aria-hidden />
      <div className="grain-overlay absolute inset-0" aria-hidden />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top label */}
        <div className="reveal-up opacity-100 mb-6">
          <span className="section-label inline-flex items-center gap-2">
            <span className="w-6 h-px bg-primary inline-block" />
            Marktavond 2026
          </span>
        </div>

        {/* Main headline */}
        <h1 className="reveal-up opacity-100 text-hero-xl font-black text-foreground mb-8" style={{ maxWidth: '14ch' }}>
          Ontploffend <br />
          <span className="text-primary ml-8">lekker.</span><br />
        </h1>

        {/* Sub + CTA */}
        <div className="reveal-up opacity-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
          <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
            Zelfgemaakte burgers, eerlijke prijzen — <span className="text-accent font-black">14 juni</span> vers op de marktavond.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/menu" className="btn-primary">
              <Icon name="DocumentTextIcon" size={18} />
              Bekijk Menu
            </Link>
            <Link href="/about" className="btn-outline">
              Ons Verhaal
            </Link>
          </div>
        </div>

        {/* Bento grid */}
        {/* BENTO AUDIT:
             Array has 4 cards: [Featured, Stat1, Stat2, Fresh]
             Row 1: [col-1..2: Featured cs-2] [col-3: Stat1 cs-1]
             Row 2: [col-1..2: Featured rs-2 continues] [col-3: Stat2 cs-1]
             Row 3: [col-1..3: Fresh cs-3]
             Placed 4/4 cards ✓
          */}
        <div className="reveal-up opacity-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Featured burger card — spans 2 cols, 2 rows */}
          <div className="burger-card sm:col-span-2 sm:row-span-2 relative overflow-hidden min-h-[320px] group">
            <AppImage
              src="https://images.unsplash.com/photo-1688912739425-67191f6823f3"
              alt="Sappige gegrilde burger met kaas, sla en tomaat op een sesambroodje, warm licht van boven"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority />
            
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-xs font-black uppercase tracking-widest text-accent mb-2 block">Bestseller</span>
              <h2 className="text-2xl font-black leading-tight mb-1">De Classic Bam</h2>
              <p className="text-white/80 text-sm mb-3">Dubbele kaas, huissaus, verse groenten</p>
              <span className="price-tag text-accent">€ 4,50</span>
            </div>
          </div>

          {/* Stat card 1 */}
          <div className="burger-card bg-primary p-6 flex flex-col justify-between min-h-[150px]">
            <Icon name="FireIcon" size={28} className="text-white/60" variant="solid" />
            <div>
              <div className="stat-number" style={{ color: 'white'}} >120+</div>
              <p className="text-white/70 text-sm font-semibold mt-1">Burgers per dag</p>
            </div>
          </div>

          {/* Stat card 2 */}
          <div className="burger-card bg-foreground p-6 flex flex-col justify-between min-h-[150px]">
            <Icon name="StarIcon" size={28} className="text-accent/60" variant="solid" />
            <div>
              <div className="stat-number text-accent">5</div>
              <p className="text-muted text-sm font-semibold mt-1" style={{ color: 'rgba(250,250,248,0.6)' }}>Unieke burgers</p>
            </div>
          </div>

          {/* Fresh label card — full width */}
          <div className="burger-card sm:col-span-3 bg-muted p-6 flex items-center justify-between gap-4 overflow-hidden relative">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-accent/10 to-transparent" aria-hidden />
            <div>
              <p className="section-label mb-1">Biologisch* vers</p>
              <p className="font-black text-xl text-foreground">Geen conserveermiddelen. Vers van de boerderij.</p>
            </div>
            <Link href="/menu" className="btn-primary flex-shrink-0 text-sm">
              Bekijk Alles
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>);

}