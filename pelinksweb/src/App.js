
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import PreLanding from './PreLanding';
import HomePage from './HomePage';
import PelinksVisuals from './PelinksVisuals';
import ContactPage from './components/ContactPage';
import GalleryPage from './components/GalleryPage';
import UnderConstruction from './components/UnderConstruction';
import IndustriesPage from './components/IndustriesPage';
import RealEstatePage from './components/industries/RealEstatePage';
import RetailPage from './components/industries/RetailPage';
import HospitalityPage from './components/industries/HospitalityPage';
import GovernmentPage from './components/industries/GovernmentPage';
import EducationPage from './components/industries/EducationPage';
import HealthcarePage from './components/industries/HealthcarePage';
import BankingPage from './components/industries/BankingPage';
import OilGasPage from './components/industries/OilGasPage';
import ReligiousPage from './components/industries/ReligiousPage';
import ManufacturingPage from './components/industries/ManufacturingPage';
import FloatingActions from './components/FloatingActions';

function AppContent() {
  const location = useLocation();
  const [showPreLanding, setShowPreLanding] = useState(() => {
    const hasHash = Boolean(location.hash);
    return location.pathname === '/' && !hasHash;
  });

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const target = document.getElementById(id);
    if (!target) return;
    const timeout = setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => clearTimeout(timeout);
  }, [location.hash]);

  const handlePreLandingComplete = () => {
    setShowPreLanding(false);
  };

  return (
    <div className="App">
      {showPreLanding ? (
        <PreLanding onComplete={handlePreLandingComplete} />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pelinks-visuals" element={<PelinksVisuals />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/real-estate" element={<RealEstatePage />} />
            <Route path="/industries/retail" element={<RetailPage />} />
            <Route path="/industries/hospitality" element={<HospitalityPage />} />
            <Route path="/industries/government" element={<GovernmentPage />} />
            <Route path="/industries/education" element={<EducationPage />} />
            <Route path="/industries/healthcare" element={<HealthcarePage />} />
            <Route path="/industries/banking" element={<BankingPage />} />
            <Route path="/industries/oil-gas" element={<OilGasPage />} />
            <Route path="/industries/religious" element={<ReligiousPage />} />
            <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
            <Route path="/under-construction" element={<UnderConstruction />} />
          </Routes>
          <FloatingActions />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
