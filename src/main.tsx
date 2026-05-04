import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Guard for window.fetch in environments where it is read-only
try {
  const originalFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get: () => originalFetch,
    set: () => { console.warn('Something tried to overwrite window.fetch'); },
    configurable: true
  });
} catch (e) {
  console.warn('Could not protect window.fetch', e);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
