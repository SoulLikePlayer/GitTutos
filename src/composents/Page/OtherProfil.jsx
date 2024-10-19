import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import '../../style/Page/profil.css';
import { supabase } from '../autres/supabaseUtilisateur';

const OtherProfil = () => {
    const { userId } = useParams();
    const location = useLocation();
    const [error, setError] = useState(null);
    const [profileData, setProfileData] = useState(location.state?.userData || null);
    const [userTitle, setUserTitle] = useState(location.state?.userData?.usertitles?.[0]?.titre?.titre_nom || null);

    const fetchProfileData = async () => {
        try {
            if (!profileData) {
                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select(`
                        *,
                        usertitles (
                            titre: titre_id (titre_nom)
                        )
                    `)
                    .eq('id', userId)
                    .single();

                if (userError) throw userError;
                setProfileData(userData);
                setUserTitle(userData.usertitles[0]?.titre?.titre_nom || null);
            }
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
                <p>Pseudo : {profileData.username}</p>
            </div>

            <div className="user-titles-section">
                <h2>Titre</h2>
                {userTitle ? (
                    <p>{userTitle}</p>
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
