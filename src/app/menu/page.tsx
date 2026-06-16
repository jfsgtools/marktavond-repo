'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BurgerCard, { Burger } from './components/BurgerCard';
import Icon from '../../components/ui/AppIcon';

const burgers: Burger[] = [
{
  id: 1,
  naam: 'De BamBurger',
  beschrijving: 'Onze verse rundvleesburger met verse sla, tomaat en saus op een geroosterde witte bol.',
  ingredienten: ['Rundvlees', 'Sla', 'Tomaat', 'Saus', 'Witte Bol'],
  prijs: 2.5,
  label: 'Bestseller',
  labelKleur: 'bg-primary',
  afbeelding: "https://images.unsplash.com/photo-1708989173581-df1a5b95bd81",
  altTekst: 'Klassieke burger met kaas en sla op een sesambroodje, warm zijlicht, donkere achtergrond',
  populair: true
},
{
  id: 2,
  naam: 'De BoemBurger',
  beschrijving: 'Dubbel zo groot, dubbel zo lekker. Dezelfde ingrediënten, maar alleen voor de échte durvers!',
  ingredienten: ['2x Rundvlees', 'Tomaat', 'Sla', 'Saus', 'Witte Bol',],
  prijs: 4.0,
  label: 'Extra Groot',
  labelKleur: 'bg-foreground',
  afbeelding: "https://images.unsplash.com/photo-1654682095423-997f19f047c9",
  altTekst: 'Dubbele burger met bacon en kaas gestapeld hoog, dramatische studio belichting',
  populair: false
}];


export default function MenuPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header forceShow />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-12 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 blob-primary rounded-full" aria-hidden />
          <div className="grain-overlay absolute inset-0" aria-hidden />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="opacity-100 mb-4">
              <span className="section-label inline-flex items-center gap-2">
                <span className="w-6 h-px bg-primary inline-block" />
                Onze Menukaart
              </span>
            </div>
            <h1 className="opacity-100 text-display font-black text-foreground mb-4">
              Kies Jouw<br />
              <span className="text-primary">Burger</span>
            </h1>
            <p className="opacity-100 text-muted-foreground text-lg max-w-lg leading-relaxed">
              Handgemaakte burgers. Verse ingredienten, geen rotzooi — gewoon de beste burgers voor de beste prijs.
            </p>
          </div>
        </section>

        {/* Burger grid */}
        {/* BENTO AUDIT:
             Array has 2 cards: [ClassicBam(klein), DoubleBam(groot)]
             Row 1: [col-1..2: ClassicBam cs-2] [col-2..3: DoubleBam cs-2]
             Placed 2/2 cards ✓
          */}
        <section ref={sectionRef} className="pb-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-5">
            {/* ClassicBam — klein, col-span-2 */}
            <div className="reveal-up opacity-100 sm:col-span-2 lg:col-span-2">
              <BurgerCard burger={burgers[0]} />
            </div>

            {/* DoubleBam — groot, col-span-2 */}
            <div className="reveal-up opacity-100 sm:col-span-2 lg:col-span-1">
              <BurgerCard burger={burgers[1]} />
            </div>
          </div>
        </section>

        {/* Info strip */}
        <section className="py-12 px-6 bg-foreground">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Icon name="ClockIcon" size={24} className="text-accent" />
              <div>
                <p className="font-black text-white text-sm">Openingstijden</p>
                <p className="text-white/60 text-sm">Vrijdag 19 Juni · 17:30 - 19:30</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="MapPinIcon" size={24} className="text-accent" />
              <div>
                <p className="font-black text-white text-sm">Locatie</p>
                <p className="text-white/60 text-sm">Nog niet bekend</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="BanknotesIcon" size={24} className="text-accent" />
              <div>
                <p className="font-black text-white text-sm">Betalen</p>
                <p className="text-white/60 text-sm">Online of contant</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}