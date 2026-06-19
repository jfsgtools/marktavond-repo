'use client'

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';
import Link from 'next/link';
import BamBurgers from '../../components/ui/LogoText';
import { Bold } from 'lucide-react';


export default function MarktAvondInfoPage() {
      const revealRef = useRef<HTMLDivElement>(null);
    
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
          { threshold: 0.1 }
        );
    
        document.querySelectorAll('[data-reveal-section]').forEach((section) => {
          observer.observe(section);
        });
    
        return () => observer.disconnect();
      }, []);
    
    return ( <>
        <Header forceShow />
        <main className="min-h-screen bg-background">
            {/* Hero */}
            <section className="pt-32 pb-8 px-6 relative overflow-hidden" data-reveal-section>
                <div className="max-w-6xl mx-auto relative z-10 reveal-up">
                    <div className="mb-4">
                        <span className="section-label inline-flex items-center gap-2">
                            <span className="w-6 h-px bg-primary inline-block" />
                            Marktavond 2026
                        </span>
                    </div>
                    <h1 className=" text-display font-black text-foreground mb-6" style={{ maxWidth: '16ch' }}>
                    Waar en Wanneer
                    <br /> <BamBurgers bold />
                    </h1>
                    <p className=" text-muted-foreground text-lg max-w-xl leading-relaxed">
                        Lees hier meer info over de Marktavond!
                    </p>
                </div>
            </section>
        {/* Story section — asymmetric split */}
        <section data-reveal-section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <AppImage
                  src="/assets/fruytier/topview.png"
                  alt="Overzicht van de marktavond van 2024"
                  fill
                  className="object-cover" />
              </div>
            </div>

            <div className="reveal-up opacity-100 flex flex-col gap-6 lg:pl-6">
              <p className="text-muted-foreground leading-relaxed">
                Op <span className='text-accent font-semibold'>19 Juni 2026</span> zullen wij als <BamBurgers bold /> aanwezig zijn op de Marktavond van 2026.
                Maar, wat is de marktavond, en waar is hij voor?
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                De marktavond is een jaarlijkse avond georganiseerd door de onderbouwleerlingen en -docenten van de Jacobus Fruytier scholengemeenschap in Apeldoorn.
                Leerlingen krijgen hier de kans om een bedrijfje op te zetten en zo veel en goed mogelijk te verkopen. De opbrengst van deze avond wordt gedoneert aan een goed doel.
                De leerlingen hebben vier maanden om alles te regelen, van sponsoren tot producten. 's Avonds is dan iedereen welkom, wie je ook bent.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                Wil jij nou ook ervaren hoe zo'n marktavond is? Kom dan gezellig langs!
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                <span className='font-semibold'>Openingstijden:</span><br />
                19 Juni 2026; 16:30 - 19:30
              </p>
              <div className='flex flex-col sm:flex-row gap-3 flex-shrink-0'>
                <Link href="https://maps.app.goo.gl/GZLLDgkUo5xttLvXA" className="btn-primary self-start mt-[0.10rem]">
                    <Icon name="LocationIcon" size={18} />
                    Bekijk Locatie
                </Link>
                <Link href='/about' className='btn-outline gap-1 self-start'>
                    <Icon name="InformationCircleIcon" size={18} />
                    Over <BamBurgers/>
                </Link>
              </div>
            </div>
          </div>
        </section>
        </main>
        <Footer />
    </>);
}