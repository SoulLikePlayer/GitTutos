import React from 'react';

const Modal = ({ isOpen, onClose, successRate, timeTaken }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Exercice Terminé</h2>
        <p>Pourcentage de réussite: {successRate}%</p>
        <p>Temps pris: {timeTaken} secondes</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;
