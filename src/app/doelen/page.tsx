'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';
import Link from 'next/link';
import BamBurgers from '../../components/ui/LogoText';

export default function DoelenPage() {
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
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-4">
                        <span className="section-label inline-flex items-center gap-2">
                            <span className="w-6 h-px bg-primary inline-block" />
                            Stichting Jafet
                        </span>
                    </div>
                    <h1 className=" text-display font-black text-foreground mb-6" style={{ maxWidth: '16ch' }}>
                    <BamBurgers bold/><br />
                    Voor <span className="text-primary">Mensen.</span>
                    </h1>
                    <p className=" text-muted-foreground text-lg max-w-xl leading-relaxed">
                        Lees hier meer info over ons goede doel: <span className='text-secondary font-bold'>Stichting Jafet</span>
                    </p>
                </div>
            </section>
                    {/* Story section — asymmetric split */}
            <section data-reveal-section className="py-12 px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <AppImage
                    src="/assets/jafet/banner.png"
                    alt="Jafet in actie"
                    fill
                    className="object-cover" />
                    
                </div>
                {/* Floating quote card */}
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-5 rounded-2xl max-w-xs shadow-xl hidden sm:block">
                    <p className="text-sm font-bold leading-snug italic">
                    "Omzien naar kansarme kinderen in Rio de Janeiro"
                    </p>
                    <p className="text-white/70 text-xs mt-2 font-semibold">— Stichting Jafet (<Link href="https://jafet.nl/" className='underline font-bold'>JAFET.NL</Link>)</p>
                </div>
                </div>

                <div className="reveal-up opacity-100 flex flex-col gap-6 lg:pl-6">
                <p className="text-muted-foreground leading-relaxed">
                    <span className="font-bold text-primary">Stichting Jafet</span> ondersteunt het werk van <span className='font-bold text-secondary'>Janneke en Fernando Galvâo - Hulst</span> en zamelt geld in om dit werk voort te zetten en uit te breiden.                </p>
                <p className='text-muted-foreground leading relaxed'>
                    Het doel van deze marktavond is geld ophalen voor deze mensen om hun werk mogelijk te maken. Wij ondersteunen dit omdat wij als <BamBurgers bold={true} /> vinden dat elk mens een fatsoenlijke leefomgeving moet hebben en God voor zichzelf mag ervaren!
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Wilt u nou ook helpen? Dat kan! De eerste manier is gebed. Verleidingen zijn groot, en God's genade en liefde zijn onmisbaar! Een andere manier is om natuurlijk naar onze kraam te komen en onze <BamBurgers bold={true} /> te proeven!
                </p>
                <p className='text-accent text-shadow font-extrabold leading-relaxed'>
                    Bekijk de website van Stichting Jafet voor meer informatie.
                </p>
                <Link href="https://jafet.nl/" className="btn-primary self-start">
                    <Icon name="ArrowTopRightOnSquareIcon" size={18} />
                    Bekijk Website
                    
                </Link>
                </div>
            </div>
            </section>
        </main>
        <Footer />
    </>);
}