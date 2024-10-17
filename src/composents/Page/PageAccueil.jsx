import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import '../../style/Page/PageAccueil.css';

const PageAccueil = () => {
  const chapitreNumero = localStorage.getItem('NumChapitre') || 'Chapitre1';
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div className="page-accueil">
      <header className="header">
        <h1 className="title">Bienvenue sur GitTutos</h1>
        <p className="subtitle">Apprenez et maîtrisez Git de manière interactive</p>
      </header>
      <main className="main-content">
        <section className={user ? "feature" : "disable-feature"}>
          <h2 className="feature-title">
            <Link to={user ? `/cours-theorique/${chapitreNumero}` : ""} className="link">Cours Théoriques</Link>
          </h2>
          <p className="feature-description">
            Explorez les bases de Git avec nos cours détaillés et adaptés à tous les niveaux.
          </p>
        </section>

        <section className={user ? "feature" : "disable-feature"}>
          <h2 className="feature-title">
            <Link to={user ? "/exercices-pratiques" : ""} className="link">Exercices Pratiques</Link>
          </h2>
          <p className="feature-description">
            Entraînez-vous avec des scénarios réalistes pour mettre en pratique vos compétences Git.
          </p>
        </section>

        <section className={user ? "feature" : "disable-feature"}>
          <h2 className="feature-title">
            <Link className='link' to={user ? "/pageCommande/git-init" : ""}>Liste des commandes</Link>
          </h2>  
          <p className="feature-description">
            Apprenez les différentes commandes git disponnible avec leur utilité et leur options.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PageAccueil;
