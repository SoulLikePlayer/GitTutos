import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom'; // Ajout de useLocation pour récupérer l'état de navigation
import '../../style/Page/profil.css';
import { supabase } from '../autres/supabaseUtilisateur';

const OtherProfil = () => {
    const { userId } = useParams();
    const location = useLocation();
    const [error, setError] = useState(null);
    const [profileData, setProfileData] = useState(location.state?.userData || null); // Utiliser les données passées ou null
    const [userTitle, setUserTitle] = useState(null);

    const fetchProfileData = async () => {
        try {
            if (!profileData) {
                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', userId)
                    .single();

                if (userError) throw userError;
                setProfileData(userData);
            }

            const { data: titleData, error: titleError } = await supabase
                .from('usertitles')
                .select(`
                    titre_id,
                    titre(titre_nom)
                `)
                .eq('user_id', userId)
                .limit(1)
                .single();

            if (titleError) throw titleError;
            setUserTitle(titleData);  // Stocker le titre unique
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (!profileData) {
            fetchProfileData();
        }
    }, [profileData]);

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!profileData) {
        return <p>Chargement des données...</p>;
    }

    return (
        <div className="user-content">
            <div className="user-section">
                <h1>Profil : {profileData.username}</h1>
                <p>Date de création : {new Date(profileData.created_at).toLocaleDateString()}</p>
                <p>Email : {profileData.email}</p>
                <p>Pseudo : {profileData.username}</p>
            </div>

            <div className="user-titles-section">
                <h2>Titre</h2>
                {userTitle ? (
                    <p>{userTitle.titre.titre_nom}</p>
                ) : (
                    <p>Aucun titre obtenu.</p>
                )}
            </div>

            <div className="user-bio-section">
                <h2>Biographie</h2>
                <div>
                    <p>{profileData.bio ? profileData.bio : "Aucune biographie ajoutée."}</p>
                </div>
            </div>
        </div>
    );
};

export default OtherProfil;
