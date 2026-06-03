'use client';

import React, { useState } from 'react';
import AppLogo from '../../../components/ui/AppLogo';
import Icon from '../../../components/ui/AppIcon';
import Link from 'next/link';

interface DashboardProps {
  user: string;
  onLogout: () => void;
}

type Pagina = 'overzicht' | 'menu' | 'bestellingen';

const mockBestellingen = [
  { id: 'BB-001', burger: 'De Classic Bam', leerling: 'Thomas K.', klas: '4A', prijs: 4.50, tijd: '12:03', status: 'Klaar' },
  { id: 'BB-002', burger: 'De Spicy Bam', leerling: 'Fatima A.', klas: '3B', prijs: 5.00, tijd: '12:07', status: 'Bezig' },
  { id: 'BB-003', burger: 'De Veggie Bam', leerling: 'Lars M.', klas: '5V', prijs: 4.50, tijd: '12:09', status: 'Klaar' },
  { id: 'BB-004', burger: 'De Double Bam', leerling: 'Aisha B.', klas: '4A', prijs: 6.00, tijd: '12:11', status: 'Wacht' },
  { id: 'BB-005', burger: 'De Cheese Bam', leerling: 'Ruben V.', klas: '6V', prijs: 5.00, tijd: '12:14', status: 'Bezig' },
  { id: 'BB-006', burger: 'De Classic Bam', leerling: 'Merel D.', klas: '3A', prijs: 4.50, tijd: '12:16', status: 'Klaar' },
  { id: 'BB-007', burger: 'De Double Bam', leerling: 'Sven P.', klas: '5H', prijs: 6.00, tijd: '12:18', status: 'Wacht' },
];

const mockMenu = [
  { naam: 'De Classic Bam', prijs: 4.50, verkocht: 48, voorraad: 72 },
  { naam: 'De Cheese Bam', prijs: 5.00, verkocht: 21, voorraad: 30 },
  { naam: 'De Spicy Bam', prijs: 5.00, verkocht: 19, voorraad: 25 },
  { naam: 'De Veggie Bam', prijs: 4.50, verkocht: 17, voorraad: 20 },
  { naam: 'De Double Bam', prijs: 6.00, verkocht: 15, voorraad: 18 },
];

const statusKleur: Record<string, string> = {
  Klaar: 'bg-green-100 text-green-700',
  Bezig: 'bg-yellow-100 text-yellow-700',
  Wacht: 'bg-gray-100 text-gray-600',
};

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [actiefPagina, setActiefPagina] = useState<Pagina>('overzicht');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const totaalOmzet = mockBestellingen.reduce((sum, b) => sum + b.prijs, 0);
  const totaalBestellingen = mockBestellingen.length;
  const klaarbestellingen = mockBestellingen.filter((b) => b.status === 'Klaar').length;

  const navItems: { id: Pagina; label: string; icon: string }[] = [
    { id: 'overzicht', label: 'Overzicht', icon: 'HomeIcon' },
    { id: 'bestellingen', label: 'Bestellingen', icon: 'ClipboardDocumentListIcon' },
    { id: 'menu', label: 'Menu Beheer', icon: 'DocumentTextIcon' },
  ];

  return (
    <div className="min-h-screen bg-muted flex">
      {/* Sidebar */}
      <aside
        className={`admin-sidebar flex-shrink-0 flex flex-col fixed lg:relative z-50 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <AppLogo size={32} />
            <span className="font-black text-lg text-white tracking-tight" style={{ letterSpacing: '-0.02em' }}>
              BamBurgers
            </span>
          </div>
          <p className="text-white/40 text-xs font-medium mt-1 ml-11">Admin Paneel</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1" aria-label="Admin navigatie">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiefPagina(item.id); setSidebarOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all w-full text-left ${
                actiefPagina === item.id
                  ? 'bg-primary text-white' :'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon name={item.icon as 'HomeIcon'} size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 py-6 border-t border-white/10">
          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-white/60 hover:text-white hover:bg-white/10 transition-all w-full"
          >
            <Icon name="ArrowLeftEndOnRectangleIcon" size={18} />
            Uitloggen
          </button>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-white/60 hover:text-white hover:bg-white/10 transition-all mt-1"
          >
            <Icon name="HomeIcon" size={18} />
            Naar Website
          </Link>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setSidebarOpen(true)}
              aria-label="Menu openen"
            >
              <Icon name="Bars3Icon" size={22} />
            </button>
            <div>
              <h1 className="font-black text-lg text-foreground">
                {navItems.find((n) => n.id === actiefPagina)?.label}
              </h1>
              <p className="text-muted-foreground text-xs">
                {new Date().toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {user}
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* OVERZICHT */}
          {actiefPagina === 'overzicht' && (
            <div className="flex flex-col gap-6">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="admin-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground text-sm font-semibold">Omzet Vandaag</span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon name="BanknotesIcon" size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-foreground">€{totaalOmzet.toFixed(2).replace('.', ',')}</div>
                  <p className="text-muted-foreground text-xs mt-1">+12% t.o.v. gisteren</p>
                </div>

                <div className="admin-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground text-sm font-semibold">Bestellingen</span>
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <Icon name="ClipboardDocumentListIcon" size={20} className="text-secondary" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-foreground">{totaalBestellingen}</div>
                  <p className="text-muted-foreground text-xs mt-1">{klaarbestellingen} klaar</p>
                </div>

                <div className="admin-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground text-sm font-semibold">Populairste Burger</span>
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                      <Icon name="FireIcon" size={20} className="text-orange-500" variant="solid" />
                    </div>
                  </div>
                  <div className="text-xl font-black text-foreground">Classic Bam</div>
                  <p className="text-muted-foreground text-xs mt-1">48 verkocht vandaag</p>
                </div>
              </div>

              {/* Recent orders */}
              <div className="admin-card overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h2 className="font-black text-foreground">Recente Bestellingen</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider">ID</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider">Burger</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider hidden sm:table-cell">Leerling</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider hidden md:table-cell">Tijd</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider">Prijs</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockBestellingen.map((bestelling) => (
                        <tr key={bestelling.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{bestelling.id}</td>
                          <td className="px-6 py-4 font-semibold text-foreground">{bestelling.burger}</td>
                          <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{bestelling.leerling} · {bestelling.klas}</td>
                          <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{bestelling.tijd}</td>
                          <td className="px-6 py-4 font-bold text-foreground">€{bestelling.prijs.toFixed(2).replace('.', ',')}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusKleur[bestelling.status]}`}>
                              {bestelling.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* BESTELLINGEN */}
          {actiefPagina === 'bestellingen' && (
            <div className="flex flex-col gap-6">
              <div className="admin-card overflow-hidden">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h2 className="font-black text-foreground">Alle Bestellingen Vandaag</h2>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-black">
                    {mockBestellingen.length} totaal
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider">Order</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider">Burger</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider hidden sm:table-cell">Leerling</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider hidden sm:table-cell">Klas</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider hidden md:table-cell">Tijd</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider">Prijs</th>
                        <th className="text-left px-6 py-3 text-muted-foreground font-bold text-xs uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockBestellingen.map((bestelling) => (
                        <tr key={bestelling.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{bestelling.id}</td>
                          <td className="px-6 py-4 font-semibold text-foreground">{bestelling.burger}</td>
                          <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{bestelling.leerling}</td>
                          <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">{bestelling.klas}</td>
                          <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{bestelling.tijd}</td>
                          <td className="px-6 py-4 font-bold text-foreground">€{bestelling.prijs.toFixed(2).replace('.', ',')}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusKleur[bestelling.status]}`}>
                              {bestelling.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 border-t border-border flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Totaal omzet: <strong className="text-foreground">€{totaalOmzet.toFixed(2).replace('.', ',')}</strong>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* MENU BEHEER */}
          {actiefPagina === 'menu' && (
            <div className="flex flex-col gap-6">
              <div className="admin-card overflow-hidden">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h2 className="font-black text-foreground">Menu Overzicht</h2>
                  <span className="text-xs text-muted-foreground font-medium">5 burgers actief</span>
                </div>
                <div className="divide-y divide-border">
                  {mockMenu.map((item) => (
                    <div key={item.naam} className="px-6 py-5 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="FireIcon" size={18} className="text-primary" variant="solid" />
                        </div>
                        <div>
                          <p className="font-black text-foreground text-sm">{item.naam}</p>
                          <p className="text-muted-foreground text-xs mt-0.5">
                            {item.verkocht} verkocht · {item.voorraad} resterend
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-black text-foreground">€{item.prijs.toFixed(2).replace('.', ',')}</span>
                        <div className="w-24 bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${Math.min((item.verkocht / (item.verkocht + item.voorraad)) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="admin-card p-6">
                <h3 className="font-black text-foreground mb-4">Snelle Acties</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="btn-outline text-sm px-4 py-2.5">
                    <Icon name="PlusCircleIcon" size={16} />
                    Burger Toevoegen
                  </button>
                  <button className="btn-outline text-sm px-4 py-2.5">
                    <Icon name="ArrowDownTrayIcon" size={16} />
                    Exporteer Data
                  </button>
                  <button className="btn-outline text-sm px-4 py-2.5">
                    <Icon name="PrinterIcon" size={16} />
                    Print Menukaart
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Opmerking: Dit is een statisch demo-paneel. Wijzigingen worden niet opgeslagen.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}