import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageAccueil from './composents/Page/PageAccueil';
import CoursTheorique from './composents/Page/CoursThéorique';
import ExercicesPratiques from './composents/Page/ExercicesPratique';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/cours-theorique/:chapitreNumero" element={<CoursTheorique />} />
        <Route path="/exercices-pratiques" element={<ExercicesPratiques />} />
      </Routes>
    </Router>
  );
};

export default App;
