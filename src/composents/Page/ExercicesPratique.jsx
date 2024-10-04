import React, { useState, useEffect } from 'react';
import exercices from '../data/Exercice'; 

const ExercicesPratiques = () => {
  const [input, setInput] = useState('');
  const [log, setLog] = useState([]);
  const [commandCount, setCommandCount] = useState(0);
  const [currentExercice, setCurrentExercice] = useState(null);

  useEffect(() => {
    setCurrentExercice(exercices[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (commandCount < currentExercice.maxCommands) {
      const expectedCommand = currentExercice.commandes[commandCount];

      // Vérifiez si la commande entrée est correcte
      if (input.trim() === expectedCommand) {
        setLog((prevLog) => [
          ...prevLog,
          { command: input, output: 'Commande exécutée avec succès.' },
        ]);
        setInput('');
        setCommandCount(commandCount + 1);
      } else {
        setLog((prevLog) => [
          ...prevLog,
          { command: input, output: 'Commande incorrecte, essayez encore.' },
        ]);
        setInput('');
      }
    } else {
      alert('Nombre maximum de commandes atteint.');
    }
  };

  if (!currentExercice) {
    return <h2>Chargement de l'exercice...</h2>;
  }

  return (
    <div className="exercices-pratiques">
      <h2>Exercices Pratiques</h2>
      <p>{currentExercice.enonce}</p>
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
              <div className="command"> {entry.command}</div>
              <div className="output">{entry.output}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="command-count">
        Commandes exécutées: {commandCount}/{currentExercice.maxCommands}
      </div>
    </div>
  );
};

export default ExercicesPratiques;
