
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PreLanding from './PreLanding';
import HomePage from './HomePage';
import PelinksVisuals from './PelinksVisuals';

function App() {
  const [showPreLanding, setShowPreLanding] = useState(true);

  const handlePreLandingComplete = () => {
    setShowPreLanding(false);
  };

  return (
    <Router>
      <div className="App">
        {showPreLanding ? (
          <PreLanding onComplete={handlePreLandingComplete} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pelinks-visuals" element={<PelinksVisuals />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
