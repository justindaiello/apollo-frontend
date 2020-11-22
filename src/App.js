import React from 'react';

import AppProviders from './context/AppProviders';

export default function App() {
  return (
    <AppProviders>
      <p>Link Shortener App</p>
    </AppProviders>
  );
}
