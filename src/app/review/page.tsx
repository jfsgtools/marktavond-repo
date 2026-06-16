'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';
import Link from 'next/link';
import LogoText from '../../components/ui/LogoText';
import Review from '../../components/ui/Review';
import ViewGuestReview, { GuestReview } from './components/GuestReview';

// const GuestReviews: GuestReview[] = [
//   {
//     naam: 'Anoniem Onbekend',
//     plaats: 'Ontspanje',
//     review: 5,
//     tekst: 'Wonderschone, bijzondere tekst die ontzettend lang is. Zo lang dat lang lang is, is lang lang allang geweest. Voor een ontiegelijk lange zin is dit lang.'
//   }
// ];

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
            <section className="pt-32 pb-8 px-6 relative overflow-hidden" data-reveal-section>
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
            <section data-reveal-section className="px-7 md:px-12 py-12 relative overflow-hidden">
              {/* Reviews */}

              {/* TEMP */}
              <div className='reveal-up opacity-100 py-20 flex flex-col justify-center'>
                <h2 className='font-black text-gray-400/35 text-center text-3xl'>Er zijn nog geen reviews geplaatst</h2>
              </div>

              {/* HOLDER */}
              {/* <div className='reveal-up opacity-100 py-8 md:py-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center'>
                <ViewGuestReview review={GuestReviews[0]} />
              </div> */}
            </section>
            
            <section data-reveal-section className="py-12 px-7 relative overflow-hidden">
              {/* HelpText */}
              <div className="reveal-up opacity-100 mt-5 my-7 relative z-10 mx-auto max-w-7xl border-2 border-secondary rounded-md p-7 w-auto">
                <p className="text-muted-foreground leading-relaxed">
                  Wilt u nou ook een review laten plaatsen? Dat kan! U kan 'm bij onze kraam komen opschrijven, of u stuurt een mailtje naar ons.
                  <br /> Mail de review naar<> </>
                  <Link href="mailto:bamburgersbv@gmail.com?subject=BamBurgers%20Review" className='underline font-semibold text-accent'>bamburgersbv@gmail.com</Link>
                  <> </>en schrijf uw voor- en achternaam, plaats en cijfer van 1 tot 5 op.
                   <br /> Eventueel kan u hier ook een stukje tekst bij zetten, die wij dan laten zien.
                   <br /> Groetjes van Team <span className='font-bold'><span className='text-primary'>Bam</span><span className='text-secondary'>Burgers</span></span>!
                </p>
              </div>
            </section>            
        </main>
        <Footer />
    </>);
}