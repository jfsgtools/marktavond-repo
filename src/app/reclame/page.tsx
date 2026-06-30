'use client';
import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppImage from "../../components/ui/AppImage";
import Icon from "../../components/ui/AppIcon";
import BamBurgers from "../../components/ui/LogoText";

export default function ReclamePage() {
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
        <main className="min-h-screen bg-background mb-10 sm:-mb-28">
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
                    Reclame voor
                    <br /> <BamBurgers bold />
                    </h1>
                    <p className=" text-muted-foreground text-lg max-w-xl leading-relaxed">
                        Bewonder het prachtige werk van onze geweldige reclameontwerper!
                    </p>
                </div>
            </section>
            {/* Banners */}
            <section className="px-7 pt-12 pb-0 relative overflow-hidden" data-reveal-section>
                <div className="
                grid grid-flow-row items-center grid-cols-1 sm:grid-cols-5 
                reveal-up opacity-100 bg-white mt-5 my-7 relative z-10 mx-auto max-w-7xl border-2 border-primary-foreground rounded-md p-2 w-auto">
                    <AppImage src="/assets/reclame/poster.png" alt="" className="reveal-up rounded-md border-transparent border-4" />
                    <AppImage src="/assets/reclame/banner/drinken.png" alt="" className="reveal-up rounded-md border-transparent border-4" />
                    <AppImage src="/assets/reclame/banner/eten-1.png" alt="" className="reveal-up rounded-md border-transparent border-4" />
                    <AppImage src="/assets/reclame/banner/eten-2.png" alt="" className="reveal-up rounded-md border-transparent border-4" />
                    <AppImage src="/assets/reclame/price.png" alt="" className="reveal-up rounded-md border-transparent border-4" />
                </div>
            </section>
        </main>
        <Footer  />
    </> );
};
