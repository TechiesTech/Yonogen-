import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage.tsx';
import { TermsAndConditionsPage } from './components/TermsAndConditionsPage.tsx';
import { NotFoundPage } from './components/NotFoundPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      {/* Catch-all 404 route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
