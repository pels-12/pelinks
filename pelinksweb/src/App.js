
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
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
import PelinksVisualsPage from './components/services/PelinksVisualsPage';
import PelinksSolutionsPage from './components/services/PelinksSolutionsPage';
import PelinksImprintPage from './components/services/PelinksImprintPage';
import FabricationConstructionPage from './components/services/FabricationConstructionPage';
import ProcurementContractsPage from './components/services/ProcurementContractsPage';
import ITConsultancyPage from './components/services/ITConsultancyPage';
import FloatingActions from './components/FloatingActions';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/internal/ProtectedRoute';
import InternalLayout from './components/internal/InternalLayout';
import LoginPage from './components/internal/LoginPage';
import Dashboard from './components/internal/Dashboard';
import ClientsPage from './components/internal/ClientsPage';
import QuotationsPage from './components/internal/QuotationsPage';
import QuotationForm from './components/internal/QuotationForm';
import QuotationPDFView from './components/internal/QuotationPDFView';
import InvoicesPage from './components/internal/InvoicesPage';
import InvoiceForm from './components/internal/InvoiceForm';
import InvoicePDFView from './components/internal/InvoicePDFView';
import SettingsPage from './components/internal/SettingsPage';

function AppContent() {
  const location = useLocation();
  const isInternalRoute = location.pathname.startsWith('/internal');
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

  const appRoutes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pelinks-visuals" element={<PelinksVisuals />} />
      <Route path="/services/pelinks-visuals" element={<PelinksVisualsPage />} />
      <Route path="/services/pelinks-solutions" element={<PelinksSolutionsPage />} />
      <Route path="/services/pelinks-imprint" element={<PelinksImprintPage />} />
      <Route path="/services/fabrication-construction" element={<FabricationConstructionPage />} />
      <Route path="/services/procurement-contracts" element={<ProcurementContractsPage />} />
      <Route path="/services/it-consultancy" element={<ITConsultancyPage />} />
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
      <Route path="/internal/login" element={<LoginPage />} />
      <Route
        path="/internal"
        element={
          <ProtectedRoute>
            <InternalLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="quotes" element={<QuotationsPage />} />
        <Route path="quotes/new" element={<QuotationForm />} />
        <Route path="quotes/:id/pdf" element={<QuotationPDFView />} />
        <Route path="invoices" element={<InvoicesPage />} />
        <Route path="invoices/new" element={<InvoiceForm />} />
        <Route path="invoices/:id/pdf" element={<InvoicePDFView />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route index element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );

  return (
    <div className="App">
      {isInternalRoute ? (
        appRoutes
      ) : showPreLanding ? (
        <PreLanding onComplete={handlePreLandingComplete} />
      ) : (
        <>
          {appRoutes}
          <FloatingActions />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
