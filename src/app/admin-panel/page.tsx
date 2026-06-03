'use client';

import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

export default function AdminPanelPage() {
  // const [ingelogd, setIngelogd] = useState<string | null>(null);

  // return ingelogd ? (
  //   <Dashboard onLogout={() => setIngelogd(false)} />
  // ) : (
  //   <LoginForm onLogin={() => setIngelogd(true)} />
  // );
  const [gebruiker, setGebruiker] = useState<string | null>(null);

  return gebruiker ? (
    <Dashboard user={gebruiker} onLogout={() => setGebruiker(null)} />
  ) : (
    <LoginForm onLogin={(user) => setGebruiker(user)} />
  );

}