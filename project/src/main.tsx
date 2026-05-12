
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
