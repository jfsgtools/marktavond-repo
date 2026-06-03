'use client';

import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamCard, { TeamLid } from './components/TeamCard';
import StatBlock from './components/StatBlock';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const teamleden: TeamLid[] = [
{
  naam: 'Daan Vermeer',
  rol: 'Oprichter & Hoofdkok',
  afbeelding: "https://img.rocket.new/generatedImages/rocket_gen_img_184970afd-1763296633055.png",
  altTekst: 'Jonge man met vriendelijke glimlach, casual kleding, heldere achtergrond',
  emoji: '👨‍🍳'
},
{
  naam: 'Yasmine El Haddad',
  rol: 'Marketing & Sociale Media',
  afbeelding: "https://images.unsplash.com/photo-1730344996660-5d87635efdf3",
  altTekst: 'Jonge vrouw met zelfverzekerde uitstraling, lichte achtergrond',
  emoji: '📱'
},
{
  naam: 'Luca de Bruin',
  rol: 'Financiën & Kassa',
  afbeelding: "https://images.unsplash.com/photo-1726440464439-81579d883f5e",
  altTekst: 'Jonge man casual gekleed, neutraal glimlachend, lichte achtergrond',
  emoji: '💰'
},
{
  naam: 'Sofia Janssen',
  rol: 'Inkoop & Logistiek',
  afbeelding: "https://img.rocket.new/generatedImages/rocket_gen_img_14e26f464-1763301161655.png",
  altTekst: 'Jonge vrouw met enthousiaste uitstraling, heldere neutrale achtergrond',
  emoji: '🛒'
},
{
  naam: 'Noor van Dijk',
  rol: 'Kwaliteitscontrole',
  afbeelding: "https://img.rocket.new/generatedImages/rocket_gen_img_14e26f464-1763301161655.png",
  altTekst: 'Jonge vrouw met professionele maar vriendelijke uitstraling, lichte achtergrond',
  emoji: '✅'
},
{
  naam: 'Bram Pieterse',
  rol: 'Assistent-kok',
  afbeelding: "https://img.rocket.new/generatedImages/rocket_gen_img_1d4884314-1763296936686.png",
  altTekst: 'Jonge man met rustige uitstraling, neutraal gekleed, lichte achtergrond',
  emoji: '🍔'
}];


export default function AboutPage() {
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

  return (
    <>
      <Header forceShow />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 blob-primary rounded-full" aria-hidden />
          <div className="grain-overlay absolute inset-0" aria-hidden />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="reveal-up opacity-100 mb-4">
              <span className="section-label inline-flex items-center gap-2">
                <span className="w-6 h-px bg-primary inline-block" />
                Ons Verhaal
              </span>
            </div>
            <h1 className="reveal-up opacity-100 text-display font-black text-foreground mb-6" style={{ maxWidth: '16ch' }}>
              Burgers Gemaakt<br />
              Door <span className="text-primary">Scholieren.</span>
            </h1>
            <p className="reveal-up opacity-100 text-muted-foreground text-lg max-w-xl leading-relaxed">
              BamBurgers begon als een project voor economie — en groeide uit tot het populairste kraam op de schoolmarkt.
            </p>
          </div>
        </section>

        {/* Story section — asymmetric split */}
        <section data-reveal-section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <AppImage
                  src="https://images.unsplash.com/photo-1446611983031-127e7aa3794a"
                  alt="Hamburger verse ingrediënten uitgestald op een houten tafel, bovenaanzicht, helder daglicht"
                  fill
                  className="object-cover" />
                
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-5 rounded-2xl max-w-xs shadow-xl hidden sm:block">
                <p className="text-sm font-bold leading-snug italic">
                  "We wilden iets echts bouwen — niet alleen een cijfer halen."
                </p>
                <p className="text-white/70 text-xs mt-2 font-semibold">— Daan, oprichter</p>
              </div>
            </div>

            <div className="reveal-up opacity-100 flex flex-col gap-6 lg:pl-6">
              <h2 className="text-section font-black text-foreground">
                Hoe het<br />allemaal begon
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In september 2025 kregen zes leerlingen van klas 4A de opdracht: bouw een bedrijf. Meeste groepen kozen voor een app of een webshop. Wij kozen voor burgers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Drie weken lang testten we recepten in Daans keuken. Zijn moeder werd ons eerste testpubliek. Toen ze voor de derde keer terugkwam voor een tweede burger, wisten we: dit gaat werken.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Op de eerste schoolmarkt verkochten we in 45 minuten 67 burgers en moesten we mensen teleurstellen. Dat nooit meer. Nu maken we er elke dag 120+.
              </p>
              <Link href="/menu" className="btn-primary self-start">
                <Icon name="DocumentTextIcon" size={18} />
                Bekijk Ons Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section data-reveal-section className="py-16 px-6 bg-foreground">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-black text-white text-section mb-12">
              BamBurgers in Cijfers
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
              <StatBlock getal={120} suffix="+" label="Burgers per dag" />
              <StatBlock getal={5} label="Unieke burgers" />
              <StatBlock getal={98} suffix="%" label="Tevreden klanten" />
              <StatBlock getal={6} label="Teamleden" />
            </div>
          </div>
        </section>

        {/* Missie */}
        <section data-reveal-section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Mission statement — spans 2 */}
              <div className="reveal-up opacity-100 lg:col-span-2 bg-muted rounded-2xl p-8 sm:p-12 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 blob-primary rounded-full" aria-hidden />
                <div className="relative z-10">
                  <span className="section-label block mb-6">Onze Missie</span>
                  <p className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
                    Lekker eten hoeft niet duur te zijn. Wij bewijzen dat scholieren echte ondernemers zijn.
                  </p>
                </div>
                <div className="flex gap-3 mt-8 relative z-10 flex-wrap">
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wide">Vers</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wide">Eerlijk</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wide">Betaalbaar</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wide">Door scholieren</span>
                </div>
              </div>

              {/* Values card */}
              <div className="reveal-up opacity-100 bg-primary rounded-2xl p-8 flex flex-col gap-6 text-white">
                <span className="section-label text-white/60">Onze Waarden</span>
                <ul className="flex flex-col gap-4 flex-1">
                  {['Kwaliteit boven kwantiteit', 'Transparante prijzen', 'Geen verspilling', 'Plezier in het werk'].map((waarde) =>
                  <li key={waarde} className="flex items-center gap-3 text-sm font-semibold">
                      <Icon name="CheckCircleIcon" size={18} className="text-white/70 flex-shrink-0" variant="solid" />
                      {waarde}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section data-reveal-section className="py-16 px-6 bg-muted">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 reveal-up opacity-100">
              <span className="section-label block mb-3">Het Team</span>
              <h2 className="text-section font-black text-foreground">
                De mensen achter de burger
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {teamleden.map((lid) =>
              <div key={lid.naam} className="reveal-up opacity-100">
                  <TeamCard lid={lid} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-section font-black text-foreground mb-4">
              Klaar voor een <span className="text-primary">Bam</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Kom langs bij onze kraam — maandag t/m vrijdag in de kantine.
            </p>
            <Link href="/menu" className="btn-primary text-base px-8 py-4">
              <Icon name="DocumentTextIcon" size={20} />
              Bekijk het Volledige Menu
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>);

}