import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseUtilisateur";
import { useNavigate } from 'react-router-dom';
import '../../style/autre/ModalSearch.css';

const ModalSearch = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length > 0) {
      const fetchUsers = async () => {
        let { data, error } = await supabase
          .from("users")
          .select(`
            id, username, email, bio, created_at,
            usertitles (
              titre: titre_id (titre_nom)
            )
          `)
          .ilike("username", `%${searchTerm}%`);

        if (!error) {
          setResults(data);
        } else {
          console.error(error);
        }
      };
      fetchUsers();
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.className === "modal-search-overlay") {
      onClose();
    }
  };

  const handleUserClick = (user) => {
    navigate(`/profil-utilisateur/${user.id}`, { state: { userData: user } });
    onClose();
  };

  return (
    <div className="modal-search-overlay" onClick={handleClickOutside}>
      <div className="modal-search-content">
        <input
          type="text"
          placeholder="Rechercher un collaborateur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="modal-search-input"
        />
        {results.length > 0 ? (
          <ul className="search-results">
            {results.map((user) => (
              <li key={user.id}>
                <button onClick={() => handleUserClick(user)}>
                  {user.username} - {user.usertitles[0]?.titre?.titre_nom || 'Aucun titre'}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          searchTerm && <p>Aucun utilisateur trouvé</p>
        )}
      </div>
    </div>
  );
};

export default ModalSearch;
