import React from "react";

import Dashboard from "./modules/Dashboard";
import AppProviders from "./context/AppProviders";

export default function App() {
  return (
    <AppProviders>
      <Dashboard />
    </AppProviders>
  );
}
