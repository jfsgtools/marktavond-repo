'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';
import Link from 'next/link';

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
            <section className="pt-32 pb-16 px-6 relative overflow-hidden" data-reveal-section>
                <div className="max-w-6xl mx-auto relative z-10 reveal-up">
                    <div className="mb-4">
                        <span className="section-label inline-flex items-center gap-2">
                            <span className="w-6 h-px bg-primary inline-block" />
                            Gastenboek
                        </span>
                    </div>
                    <h1 className=" text-display font-black text-foreground mb-6" style={{ maxWidth: '16ch' }}>
                    Mensen<br />
                    Over <span className="text-primary">Bam</span><span className='text-secondary'>Burgers</span>
                    </h1>
                    <p className=" text-muted-foreground text-lg max-w-xl leading-relaxed">
                        Lees hier onze reviews en schrijf ook zelf in ons gastenboek
                    </p>
                </div>
            </section>
            <section data-reveal-section className="py-12 px-6">
             <h1 className='reveal-up font-bold text-xl text-primary text-center'>IN DEVELOPMENT</h1>
            </section>            
        </main>
        <Footer />
    </>);
}