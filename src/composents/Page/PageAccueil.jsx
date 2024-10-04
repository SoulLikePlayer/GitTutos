import React from 'react';

const PageAccueil = () => {
  return (
    <div className="page-accueil">
      <header className="header">
        <h1 className="title">Bienvenue sur GitTutos</h1>
        <p className="subtitle">Apprenez et maîtrisez Git de manière interactive</p>
      </header>
      <main className="main-content">
        <section className="feature">
          <h2 className="feature-title">Cours Théoriques</h2>
          <p className="feature-description">
            Explorez les bases de Git avec nos cours détaillés et adaptés à tous les niveaux.
          </p>
        </section>
        <section className="feature">
          <h2 className="feature-title">Exercices Pratiques</h2>
          <p className="feature-description">
            Entraînez-vous avec des scénarios réalistes pour mettre en pratique vos compétences Git.
          </p>
        </section>
        <section className="feature">
          <h2 className="feature-title">Importation de Projets Git</h2>
          <p className="feature-description">
            Importez vos projets pour visualiser et analyser l’historique Git de manière intuitive.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PageAccueil;
