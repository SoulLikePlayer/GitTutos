import React, { useEffect } from "react";
import '../../style/autre/modal.css';
import { supabase } from '../autres/supabaseUtilisateur';

const Modal = ({ isOpen, onClose, pourcentage, time, experience }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const callAddXpFunction = async () => {
    if (user && user.id) {
      try {
        // Appeler la fonction SQL stockée pour ajouter de l'XP
        const { error } = await supabase
          .rpc('add_xp', { 
            user_id: user.id, 
            xp_to_add: experience 
          });

        if (error) {
          console.error("Error adding XP:", error);
        } else {
          // Si l'ajout de l'XP est réussi, mettre à jour le titre de l'utilisateur
          await updateUserTitle(user.id);
        }
      } catch (err) {
        console.error("Error calling add_xp function:", err);
      }
    }
  };

  const updateUserTitle = async (userId) => {
  try {
    const { error } = await supabase
      .rpc('update_user_title', { user_id_param: userId });

    if (error) {
      console.error("Error updating user title:", error);
    }
  } catch (err) {
    console.error("Error calling update_user_title function:", err);
  }
};

  useEffect(() => {
    if (isOpen) {
      callAddXpFunction();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <button className="modal-close" onClick={onClose}>
        &times;
      </button>
      <div className="modal-content">
        <div className="modal-body">
          <div className="time">
            <h4>Temps pris :</h4>
            <p>{time}s</p>
          </div>
          <div className="pourcentage">
            <h4>Pourcentage :</h4>
            <p>{pourcentage}%</p>
          </div>
          <div className="experience">
            <h4>Expérience gagnée :</h4>
            <p>{experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
