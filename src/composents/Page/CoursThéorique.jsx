import React from 'react';
import { useParams, Link } from 'react-router-dom';
import coursTheorique from '../data/CoursThéorique'; // Assurez-vous que le chemin est correct
import '../../style/Page/CoursThéorique.css'; // Ajoutez votre style pour ce composant

const CoursTheorique = () => {
  const { chapitreNumero } = useParams();

  // Trouver le chapitre correspondant
  const chapitreIndex = coursTheorique.chapitres.findIndex(chap => chap.chapitre === chapitreNumero);
  
  // Si le chapitre n'est pas trouvé, afficher un message d'erreur
  if (chapitreIndex === -1) {
    return <h2>Chapitre non trouvé</h2>;
  }

  const chapitre = coursTheorique.chapitres[chapitreIndex];
  const previousChapitre = chapitreIndex > 0 ? coursTheorique.chapitres[chapitreIndex - 1] : null;
  const nextChapitre = chapitreIndex < coursTheorique.chapitres.length - 1 ? coursTheorique.chapitres[chapitreIndex + 1] : null;

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
            <p dangerouslySetInnerHTML={{ __html: section.texte }} />
          </section>
        ))}
      </main>
      
      {/* Navigation entre les chapitres */}
      <footer className="cours-navigation">
        {previousChapitre && (
          <Link to={`/cours-theorique/${previousChapitre.chapitre}`} className="nav-button">
            Chapitre Précédent
          </Link>
        )}
        {nextChapitre && (
          <Link to={`/cours-theorique/${nextChapitre.chapitre}`} className="nav-button">
            Chapitre Suivant
          </Link>
        )}
      </footer>
    </div>
  );
};

export default CoursTheorique;
