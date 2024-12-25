import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ICTNetworkPage from './pages/ICTNetworkPage';
import TelecommunicationPage from './pages/TelecommunicationPage';
import DuctileIronPage from './pages/DuctileIronPage';
import IntroAnimation from './components/intro/IntroAnimation';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <LanguageProvider>
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="ict-network" element={<ICTNetworkPage />} />
              <Route path="telecommunication" element={<TelecommunicationPage />} />
              <Route path="ductile-iron" element={<DuctileIronPage />} />
            </Route>
          </Routes>
        </Router>
      )}
    </LanguageProvider>
  );
}

export default App;