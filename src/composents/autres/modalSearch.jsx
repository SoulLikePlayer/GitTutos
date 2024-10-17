// ModalSearch.js
import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseUtilisateur";
import '../../style/autre/ModalSearch.css';

const ModalSearch = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const fetchUsers = async () => {
        let { data, error } = await supabase
          .from("users")
          .select("id, username")
          .ilike("username", `%${searchTerm}%`);

        if (!error) {
          setResults(data);
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
                <a href={`/profil-utilisateur/${user.id}`}>{user.username}</a>
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
