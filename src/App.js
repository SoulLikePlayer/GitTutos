import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageAccueil from './composents/Page/PageAccueil';
import CoursTheorique from './composents/Page/CoursThéorique';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/cours-theorique/:chapitreNumero" element={<CoursTheorique />} />
      </Routes>
    </Router>
  );
};

export default App;
