import React from 'react';
import { useParams } from 'react-router-dom';
import coursTheorique from '../data/CoursThéorique'; // Assurez-vous que le chemin est correct
import '../../style/Page/CoursThéorique.css';

const CoursTheorique = () => {
  const { chapitreNumero } = useParams();

  // Trouver le chapitre correspondant
  const chapitre = coursTheorique.chapitres.find(chap => chap.chapitre === chapitreNumero);

  // Si le chapitre n'est pas trouvé, afficher un message d'erreur
  if (!chapitre) {
    return <h2>Chapitre non trouvé</h2>;
  }

  return (
    <div className="cours-theorique">
      <header className="cours-header">
        <h1>{chapitre.titre}</h1>
        <p>{chapitre.description}</p>
      </header>
      <main className="cours-content">
        {Object.entries(chapitre.subchapter.contenue).map(([key, section]) => (
          <section key={key} className="cours-section">
            <h2>{section.titre}</h2>
            <p>{section.texte}</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default CoursTheorique;
