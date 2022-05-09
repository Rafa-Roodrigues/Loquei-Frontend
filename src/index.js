import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ProviderTheme } from './hooks/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderTheme>
      <App />
    </ProviderTheme>
  </React.StrictMode>
);