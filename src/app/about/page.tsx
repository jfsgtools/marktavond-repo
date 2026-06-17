'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeamCard, { TeamLid } from './components/TeamCard';
import StatBlock from './components/StatBlock';
import AppImage from '../../components/ui/AppImage';
import Icon from '../../components/ui/AppIcon';
import Link from 'next/link';
import BamBurgers from '../../components/ui/LogoText';

const teamleden: TeamLid[] = [
{
  naam: 'Jochem Boer',
  rol: 'Bedrijfsleider',
  afbeelding: "/assets/team/jochem.jpg",
  altTekst: '',
  emoji: '🧑‍💼'
},
{
  naam: 'Cornelis van As',
  rol: 'Administrateur',
  afbeelding: "/assets/team/cornelis.jpg",
  altTekst: '',
  emoji: '💰'
},
{
  naam: 'Guus Beekman',
  rol: 'Reclameontwerker',
  afbeelding: "/assets/team/guus.jpg",
  altTekst: 'Jongen met kort, blond haar, blauwe ogen en een beige zipper aan op een witte achtergrond',
  emoji: '🎨'
},
{
  naam: 'Florian Harbers',
  rol: 'Webdesigner',
  afbeelding: "/assets/team/florian.jpg",
  altTekst: 'Jongen met blond haar, bruine ogen en een witte zipper aan op een witte achtergrond',
  emoji: '🖥️'
}
];


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
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-4">
              <span className="section-label inline-flex items-center gap-2">
                <span className="w-6 h-px bg-primary inline-block" />
                Ons Verhaal
              </span>
            </div>
            <h1 className=" text-display font-black text-foreground mb-6" style={{ maxWidth: '16ch' }}>
              Burgers Gemaakt<br />
              Door <span className="text-primary">Scholieren.</span>
            </h1>
            <p className=" text-muted-foreground text-lg max-w-xl leading-relaxed">
              BamBurgers begon als een project voor economie — en groeide uit tot de beste hamburgerkraam op de marktavond.
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
                  "We wilden iets echts creëren — niet alleen een cijfer en geld (op)halen."
                </p>
                <p className="text-white/70 text-xs mt-2 font-semibold">— Jochem, bedrijfsleider</p>
              </div>
            </div>

            <div className="reveal-up opacity-100 flex flex-col gap-6 lg:pl-6">
              <h2 className="text-section font-black text-foreground">
                Hoe het<br />allemaal begon
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In november 2025 kregen vier leerlingen van klas 3vt bij economie de opdracht: bouw een bedrijf voor de marktavond. Wij kozen voor niet zomaar burgers, maar voor <BamBurgers bold={true} />.
              </p>
              <p className='text-muted-foreground leading relaxed'>
                Het doel van deze marktavond is geld ophalen voor <Link href="/doelen" className='font-black text-primary underline'>Stichting Jafet</Link>. En natuurlijk willen wij ook een hoog cijfer halen!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Drie weken lang testten we recepten. Onze families moesten de marteling ondergaan. Maar toen ze voor de achtste keer terugkwam voor hun zoveelste burger, wisten we: <span className="text-primary font-black">perfect</span>.
              </p>
              <div className='flex flex-col sm:flex-row gap-3 flex-shrink-0'>
                <Link href="/menu" className="btn-primary self-start mt-[0.10rem]">
                  <Icon name="DocumentTextIcon" size={18} />
                  Bekijk Ons Menu
                </Link>
                <Link href="/marktavond" className="btn-outline self-start">
                  Over de Marktavond
                </Link>
              </div>
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
              <StatBlock getal={1} label="Unieke burger" />
              <StatBlock getal={98} suffix="%" label="Tevreden klanten" />
              <StatBlock getal={4} label="Teamleden" />
              <StatBlock getal={1} label="Goed doel" />
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
                    Lekker eten hoeft niet duur te zijn. Wij bewijzen dat scholieren echte ondernemers zijn. En tegelijkertijd toch een goede som geld aan het goede doel kunnen afleveren.
                  </p>
                </div>
                <div className="flex gap-3 mt-8 relative z-10 flex-wrap">
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wide">Vers</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wide">Eerlijk</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wide">Betaalbaar</span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-wide">Liefdadigheid</span>
                </div>
              </div>

              {/* Values card */}
              <div className="reveal-up opacity-100 bg-primary rounded-2xl p-8 flex flex-col gap-6 text-white">
                <span className="section-label text-white/60">Hier Staan Wij Voor:</span>
                <ul className="flex flex-col gap-4 flex-1">
                  {['Kwaliteit', 'Transparante prijzen', 'Geen verspilling', 'Goede doelen'].map((waarde) =>
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
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8">
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
              Klaar voor een <span className="text-primary">knallende</span> ervaring?
            </h2>
            <p className="text-muted-foreground mb-8">
              Kom langs bij onze kraam!
            </p>
            <div className='flex flex-col sm:flex-row gap-3 flex-shrink-0 justify-center'>
              <Link href="/menu" className="btn-primary text-base px-8 py-4">
                <Icon name="DocumentTextIcon" size={20} />
                Bekijk het Volledige Menu
              </Link>
              <Link href="/marktavond" className="btn-outline text-base px-8 py-4">
                <Icon name='InformationCircleIcon' size={28} />
                Over de Marktavond
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div id='contact' className='max-w-4xl mx-auto border-border border-2 rounded-lg mt-28 mb-12 px-4 py-6 grid grid-flow-row gap-2'>
            <h2 className='font-black text-primary text-section text-center'>Contact</h2>
            
            <div id='location' className='contact-item'>
              <div id='icon'>
                <Icon name='MapPinIcon' size={45} className='' />
              </div>
              <div id='text'>
                <h4 className='font-semibold text-xl text-foreground'>
                  Jacobus Fruytier <br className='visible sm:hidden'/>scholengemeenschap
                </h4>
                <p className='font-light text-lg text-muted-foreground'>
                  Anklaarseweg 71<span className='hidden sm:visible sm:inline'>, </span><br className='visible sm:hidden'/>7316 MB  Apeldoorn
                </p>
              </div>
            </div>
            
              <hr className='w-full border-border'/>

            <div id='telephone' className='contact-item'>
              <div id='icon'>
                <Icon name='PhoneIcon' size={45} className='' />
              </div>
              <div id='text'>
                <h4 className='font-semibold text-xl text-foreground'>
                  Telefoonnummer bedrijfsleider
                </h4>
                <p className='font-light text-lg text-muted-foreground'>
                  <Link href='tel:+31 6 81448288' className='underline'>+31 6 81448288</Link>
                </p>
                <h4 className='font-semibold text-xl text-foreground'>
                  Telefoonnummer BamBurgers (alleen op marktavond)
                </h4>
                <p className='font-light text-lg text-muted-foreground'>
                  <Link href='tel:+31 6 10161946' className='underline'>+31 6 10161946</Link>
                </p>
              </div>
            </div>

              <hr className='w-full border-border'/>
            
            <div id='mail' className='contact-item'>
              <div id='icon'>
                <Icon name='EnvelopeIcon' size={45} className='' />
              </div>
              <div id='text'>
                <h4 className='font-semibold text-xl text-foreground'>
                  Emailadres Bedrijfsleider
                </h4>
                <p className='font-light text-lg text-muted-foreground'>
                  <Link href='mailto:190982@leerlingen.jfsg.nl' className='underline'>190982@leerlingen.jfsg.nl</Link>
                </p>
                <h4 className='font-semibold text-xl text-foreground'>
                  Emailadres Bamburgers
                </h4>
                <p className='font-light text-lg text-muted-foreground'>
                  <Link href='mailto:bamburgersbv@gmail.com' className='underline'>bamburgersbv@gmail.com</Link>
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>);

}