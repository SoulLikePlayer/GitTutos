import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import coursTheorique from '../data/CoursThéorique'; // Assurez-vous que le chemin est correct
import '../../style/Page/CoursThéorique.css'; // Ajoutez votre style pour ce composant

const CoursTheorique = () => {
  const { chapitreNumero: urlChapitreNumero } = useParams(); 
  const [chapitreNumero, setChapitreNumero] = useState(() => {
    return urlChapitreNumero || localStorage.getItem("NumChapitre") || 'Chapitre1';
  });

  useEffect(() => {
    localStorage.setItem('NumChapitre', chapitreNumero);
  }, [chapitreNumero]);

  const chapitreIndex = coursTheorique.chapitres.findIndex(chap => chap.chapitre === chapitreNumero);

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

      <footer className="cours-navigation">
        <Link
          to={previousChapitre ? `/cours-theorique/${previousChapitre.chapitre}` : '#'}
          className={`nav-button prev-chap ${!previousChapitre ? 'disabled' : ''}`}
          onClick={() => previousChapitre && setChapitreNumero(previousChapitre.chapitre)}
          disabled={!previousChapitre} 
        >
          Chapitre Précédent
        </Link>

        <Link
          to={nextChapitre ? `/cours-theorique/${nextChapitre.chapitre}` : '#'}
          className={`nav-button next-chap ${!nextChapitre ? 'disabled' : ''}`}
          onClick={() => nextChapitre && setChapitreNumero(nextChapitre.chapitre)}
          disabled={!nextChapitre}
        >
          Chapitre Suivant
        </Link>
      </footer>
    </div>
  );
};

export default CoursTheorique;
