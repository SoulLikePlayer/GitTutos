import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageAccueil from './composents/Page/PageAccueil';
import CoursTheorique from './composents/Page/CoursThéorique';
import ExercicesPratiques from './composents/Page/ExercicesPratique';
import PageCommande from './composents/Page/PageCommande';
import Profil from './composents/Page/Profil';

import './App.css';
import Header from './composents/Page/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Auth from './composents/Page/Auth';
import OtherProfil from './composents/Page/OtherProfil';

const App = () => {
  return (
    // Ajout du basename correspondant au nom de ton dépôt GitHub
    <Router basename="/GitTutos">
      <Header />
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/cours-theorique/:chapitreNumero" element={<CoursTheorique />} />
        <Route path="/exercices-pratiques" element={<ExercicesPratiques />} />
        <Route path="/pageCommande/:commandeId" element={<PageCommande />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil-utilisateur/:userId" element={<OtherProfil />} />
      </Routes>
    </Router>
  );
};

export default App;
