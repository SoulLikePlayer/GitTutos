import React from "react";
import { useParams } from "react-router-dom";
import ListeCommande from '../data/commande'; 
import '../../style/Page/PageCommande.css';

const PageCommande = () => {
    const { commandeId } = useParams();
    const commande = ListeCommande.commande.find(com => com.id === commandeId);

    if (!commande) {
        return <h2>Commande non trouvée</h2>;
    }

    return (
        <div className="content">
            <h1>Liste des commandes</h1>
            <div className="commande-content">
                <section className="commande-section">
                    <h2>{commande.nom}</h2>

                    {/* Description Section */}
                    <h3 className="subTitle">Description</h3>
                    <p>{commande.description}</p> 

                    {/* Options Section */}
                    <h3 className="subTitle">Options :</h3>
                    <ul className="subContainer">
                        {commande.option.map((opt, idx) => (
                            <li key={idx}>
                                <strong>{opt}</strong>: {commande.explicationOption[opt] || "Pas d'explication fournie."}
                            </li>
                        ))}
                    </ul>

                    {/* Syntax Section */}
                    <h3 className="subTitle">Syntax :</h3>
                    <ul className="subContainer">
                        {commande.syntax.map((syn, idx) => (
                            <li key={idx}>
                                <strong>{syn}</strong>: {commande.explicationSyntax[syn] || "Pas d'explication fournie."}
                            </li>
                        ))}
                    </ul>

                    {/* Example Section */}
                    {commande.exemple && (
                        <div>
                            <h3 className="subTitle">Exemples :</h3>
                            <ul className="subContainer">
                                {commande.exemple.map((ex, idx) => (
                                    <li key={idx}>
                                        <p><strong>Situation :</strong> {ex.situation}</p>
                                        <p><strong>Commande :</strong> {ex.commande}</p>
                                        <p><strong>Résultat :</strong> {ex.resultat}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default PageCommande;
