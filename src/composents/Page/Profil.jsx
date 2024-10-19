import React, { useState, useEffect } from "react";
import '../../style/Page/profil.css';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../autres/supabaseUtilisateur';

const Profil = () => {
    const [error, setError] = useState(null);
    const [profileData, setProfileData] = useState(null);
    const [userTitle, setUserTitle] = useState(null);
    const [bio, setBio] = useState('');
    const [isEditingBio, setIsEditingBio] = useState(false);
    const user = JSON.parse(sessionStorage.getItem('user'));
    const navigate = useNavigate();

    const fetchProfileData = async () => {
        if (user && user.id) {
            try {
                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', user.id)
                    .single();

                if (userError) throw userError;
                setProfileData(userData);
                setBio(userData.bio || '');

                const { data: titleData, error: titleError } = await supabase
                    .from('usertitles')
                    .select(`
                        titre_id,
                        titre(titre_nom)
                    `)
                    .eq('user_id', user.id)
                    .limit(1)
                    .single();

                if (titleError) throw titleError;
                setUserTitle(titleData);
            } catch (error) {
                setError(error.message);
            }
        } else {
            setError("Utilisateur non trouvé.");
        }
    };

    const updateBio = async () => {
        try {
            const { error: updateError } = await supabase
                .from('users')
                .update({ bio })
                .eq('id', user.id);

            if (updateError) throw updateError;

            setIsEditingBio(false);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchProfileData();
    }, []);

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
        window.location.reload();
    };

    const handleDisconnected = () => {
        try{

        }catch (error){
            setError(error.message);
        }
    }

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
                {isEditingBio ? (
                    <div>
                        <textarea 
                            value={bio} 
                            onChange={(e) => setBio(e.target.value)} 
                            rows="5"
                        />
                        <button onClick={updateBio}>Enregistrer</button>
                        <button onClick={() => setIsEditingBio(false)}>Annuler</button>
                    </div>
                ) : (
                    <div>
                        <p>{bio ? bio : "Aucune biographie ajoutée."}</p>
                        <button onClick={() => setIsEditingBio(true)}>Modifier la bio</button>
                    </div>
                )}
            </div>

            <button onClick={handleLogout}>Se déconnecter</button>
            <button onClick={handleDisconnected}>Se désinscrire</button>
        </div>
    );
};

export default Profil;
