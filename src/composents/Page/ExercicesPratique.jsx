import React, { useState, useEffect } from 'react';
import '../../style/Page/PartieExercice.css'; // Assurez-vous d'avoir ce fichier CSS
import exercices from '../data/Exercice'; // Assurez-vous que le chemin est correct
import Modal from '../autres/modal';

const ExercicesPratiques = () => {
  const [input, setInput] = useState('');
  const [log, setLog] = useState([]);
  const [commandCount, setCommandCount] = useState(0);
  const [currentExercice, setCurrentExercice] = useState(exercices[0]);
  const [projectCreated, setProjectCreated] = useState(false);
  const [filesAdded, setFilesAdded] = useState(false);
  const [commitMessage, setCommitMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [gitLog, setGitLog] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  
  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      setTimeTaken(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer); // Nettoyez l'intervalle à la désactivation du composant
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (commandCount < currentExercice.maxCommands) {
      const expectedCommand = currentExercice.commandes[commandCount];

      // Vérifiez si la commande entrée est correcte
      if (input.trim() === expectedCommand) {
        // Ajouter une entrée de log
        setLog((prevLog) => [
          ...prevLog,
          { command: input, output: 'Commande exécutée avec succès.' },
        ]);
        setSuccessMessage(`Commande réussie: ${input}`);
        setErrorMessage('');

        // Gérer les différentes commandes
        if (input.startsWith('git init')) {
          setProjectCreated(true);
        } else if (input.startsWith('git add .')) {
          setFilesAdded(true);
        } else if (input.startsWith('git commit')) {
          const commitMessage = input.split('"')[1]; // Obtenir le message de commit
          setCommitMessage(commitMessage);
          const commitHash = Math.random().toString(36).substring(2, 15);
          setGitLog((prevGitLog) => [
            ...prevGitLog,
            `commit ${commitHash}\nAuthor: User <user@example.com>\nDate: ${new Date().toLocaleString()}\n\n    ${commitMessage}`,
          ]);
        }

        setCommandCount(commandCount + 1);
        setInput('');

        // Vérifiez si l'exercice est terminé
        if (commandCount + 1 === currentExercice.maxCommands) {
          setModalOpen(true); // Ouvrir la modale
        }
      } else {
        setLog((prevLog) => [
          ...prevLog,
          { command: input, output: 'Commande incorrecte, essayez encore.' },
        ]);
        setErrorMessage(`Échec: Commande '${input}' est incorrecte.`);
        setInput('');
      }
    } else {
      alert('Nombre maximum de commandes atteint.');
    }
  };

  // Calcul du pourcentage de réussite
  const successRate = Math.floor((commandCount / currentExercice.maxCommands) * 100);

  if (!currentExercice) {
    return <h2>Chargement de l'exercice...</h2>;
  }

  return (
    <div className="exercices-pratiques">
      <h2>Exercice Pratique: {currentExercice.title}</h2>
      <p>{currentExercice.enonce}</p>
      <div className="container">
        <div className="simulation">
          <h3>Simulation des étapes</h3>
          <div className="step">
            <p><strong>Création du projet:</strong> {projectCreated ? '✔️ Projet créé' : '❌ Projet non créé'}</p>
          </div>
          <div className="step">
            <p><strong>Ajout de fichiers:</strong> {filesAdded ? '✔️ Fichiers ajoutés' : '❌ Aucun fichier ajouté'}</p>
          </div>
          <div className="step">
            <p><strong>Message de commit:</strong> {commitMessage || '❌ Aucun commit effectué'}</p>
          </div>
          <h4>Log Git:</h4>
          <pre className="git-log">{gitLog.join('\n\n')}</pre>
        </div>

        <div className="terminal">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Entrez une commande Git"
              autoFocus
            />
            <button type="submit">Exécuter</button>
          </form>
          <div className="log">
            {log.map((entry, index) => (
              <div key={index}>
                <div className="command">> {entry.command}</div>
                <div className="output">{entry.output}</div>
              </div>
            ))}
          </div>
          <div className="command-count">
            Commandes exécutées: {commandCount}/{currentExercice.maxCommands}
          </div>
          {successMessage && <div className="success">{successMessage}</div>}
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
      </div>

      {/* Modale pour afficher le résultat de l'exercice */}
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        successRate={successRate} 
        timeTaken={timeTaken} 
      />
    </div>
  );
};

export default ExercicesPratiques;