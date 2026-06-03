'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BurgerCard, { Burger } from './components/BurgerCard';
import Icon from '@/components/ui/AppIcon';

const burgers: Burger[] = [
{
  id: 1,
  naam: 'De Classic Bam',
  beschrijving: 'Onze handgemaakte rundvleespatty met dubbele cheddar, verse sla, tomaat en onze geheime Bam-saus op een geroosterd sesambroodje.',
  ingredienten: ['Rundvlees', 'Cheddar', 'Sla', 'Tomaat', 'Bam-saus', 'Sesambroodje'],
  prijs: 4.5,
  label: 'Bestseller',
  labelKleur: 'bg-primary',
  afbeelding: "https://images.unsplash.com/photo-1708989173581-df1a5b95bd81",
  altTekst: 'Klassieke burger met kaas en sla op een sesambroodje, warm zijlicht, donkere achtergrond',
  populair: true
},
{
  id: 2,
  naam: 'De Cheese Bam',
  beschrijving: 'Drievoudige kaaslaag — cheddar, gouda en brie — gesmolten over een sappige patty met rode ui en mosterd-mayonaise.',
  ingredienten: ['Rundvlees', 'Cheddar', 'Gouda', 'Brie', 'Rode ui', 'Mosterd-mayo'],
  prijs: 5.0,
  label: 'Nieuw',
  labelKleur: 'bg-secondary',
  afbeelding: "https://images.unsplash.com/photo-1619901282828-7cbde1c89884",
  altTekst: 'Burger overdekt met gesmolten kaas op een licht broodje, close-up, warm geel licht',
  populair: false
},
{
  id: 3,
  naam: 'De Spicy Bam',
  beschrijving: 'Voor de durvers. Jalapeños, sriracha-mayo, gerookte paprika en een knapperige onion ring on top. Niet voor bange mensen.',
  ingredienten: ['Rundvlees', 'Jalapeños', 'Sriracha-mayo', 'Onion ring', 'Paprika'],
  prijs: 5.0,
  label: '🔥 Heet',
  labelKleur: 'bg-orange-600',
  afbeelding: "https://img.rocket.new/generatedImages/rocket_gen_img_177e0ada2-1772288634169.png",
  altTekst: 'Pittige burger met jalapeños en rode saus, donkere achtergrond, dramatisch licht',
  populair: false
},
{
  id: 4,
  naam: 'De Veggie Bam',
  beschrijving: 'Volledig plantaardig. Krokante kikkererwtenpatty met avocado, zongedroogde tomaat, rucola en citroen-tahini saus.',
  ingredienten: ['Kikkererwten', 'Avocado', 'Rucola', 'Zongedroogde tomaat', 'Tahini'],
  prijs: 4.5,
  label: '🌱 Veggie',
  labelKleur: 'bg-green-600',
  afbeelding: "https://images.unsplash.com/photo-1543339462-88f4850abc5b",
  altTekst: 'Vegetarische burger met avocado en groene bladeren, helder daglicht, witte achtergrond',
  populair: false
},
{
  id: 5,
  naam: 'De Double Bam',
  beschrijving: 'Twee patties, dubbele kaas, dubbele smaak. Met bacon, caramelui, barbecuesaus en augurk. De echte schoollunch upgrade.',
  ingredienten: ['2x Rundvlees', 'Bacon', 'Caramelui', 'BBQ-saus', 'Augurk', 'Cheddar'],
  prijs: 6.0,
  label: 'Extra Groot',
  labelKleur: 'bg-foreground',
  afbeelding: "https://images.unsplash.com/photo-1654682095423-997f19f047c9",
  altTekst: 'Dubbele burger met bacon en kaas gestapeld hoog, dramatische studio belichting',
  populair: true
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
            <div className="reveal-up opacity-100 mb-4">
              <span className="section-label inline-flex items-center gap-2">
                <span className="w-6 h-px bg-primary inline-block" />
                Onze Menukaart
              </span>
            </div>
            <h1 className="reveal-up opacity-100 text-display font-black text-foreground mb-4">
              Kies Jouw<br />
              <span className="text-primary">Bam.</span>
            </h1>
            <p className="reveal-up opacity-100 text-muted-foreground text-lg max-w-lg leading-relaxed">
              Vijf handgemaakte burgers, elke dag vers. Geen nummers, geen bullshit — gewoon goede burgers voor een eerlijke prijs.
            </p>
          </div>
        </section>

        {/* Burger grid */}
        {/* BENTO AUDIT:
             Array has 5 cards: [ClassicBam(groot), CheeseBam, SpicyBam, VeggieBam, DoubleBam(groot)]
             Row 1: [col-1..2: ClassicBam cs-2] [col-3: CheeseBam cs-1]
             Row 2: [col-1..2: ClassicBam rs continues] [col-3: SpicyBam cs-1]
             Row 3: [col-1: VeggieBam cs-1] [col-2..3: DoubleBam cs-2]
             Placed 5/5 cards ✓
          */}
        <section ref={sectionRef} className="pb-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* ClassicBam — groot, col-span-2 */}
            <div className="reveal-up opacity-100 lg:col-span-2">
              <BurgerCard burger={burgers[0]} groot />
            </div>

            {/* CheeseBam */}
            <div className="reveal-up opacity-100">
              <BurgerCard burger={burgers[1]} />
            </div>

            {/* SpicyBam */}
            <div className="reveal-up opacity-100">
              <BurgerCard burger={burgers[2]} />
            </div>

            {/* VeggieBam */}
            <div className="reveal-up opacity-100">
              <BurgerCard burger={burgers[3]} />
            </div>

            {/* DoubleBam — groot, col-span-2 */}
            <div className="reveal-up opacity-100 sm:col-span-2 lg:col-span-1">
              <BurgerCard burger={burgers[4]} />
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
                <p className="text-white/60 text-sm">Maandag t/m vrijdag · 12:00 – 13:30</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="MapPinIcon" size={24} className="text-accent" />
              <div>
                <p className="font-black text-white text-sm">Locatie</p>
                <p className="text-white/60 text-sm">Schoolkantine · Hal B</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="BanknotesIcon" size={24} className="text-accent" />
              <div>
                <p className="font-black text-white text-sm">Betalen</p>
                <p className="text-white/60 text-sm">Pin of contant</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}