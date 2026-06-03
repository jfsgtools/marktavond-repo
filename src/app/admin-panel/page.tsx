'use client';

import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

export default function AdminPanelPage() {
  const [ingelogd, setIngelogd] = useState(false);

  return ingelogd ? (
    <Dashboard onLogout={() => setIngelogd(false)} />
  ) : (
    <LoginForm onLogin={() => setIngelogd(true)} />
  );
}