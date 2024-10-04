// src/data/CoursTheorique.js

const coursTheorique = {
  chapitres: [
    {
      chapitre: "Chapitre1",
      titre: "Qu'est-ce que Git ?",
      description: "Ici, nous allons donc voir ce qu'est Git et son utilité.",
      subchapter: {
        subchapterNumber: "1",
        contenue: {
          introduction: {
            titre: "Introduction à Git",
            texte: "Git est un système de contrôle de version distribué qui permet de suivre les modifications apportées aux fichiers et de coordonner le travail entre plusieurs personnes sur un projet."
          },
          historique: {
            titre: "Historique de Git",
            texte: "Git a été créé par Linus Torvalds en 2005 pour le développement du noyau Linux."
          },
          principes_fonctionnels: {
            titre: "Principes Fonctionnels de Git",
            texte: "Git fonctionne sur plusieurs principes clés : Snapshot, Distribution et Branches."
          },
          avantages: {
            titre: "Avantages de Git",
            texte: "L'utilisation de Git présente plusieurs avantages, comme son efficacité et sa capacité de collaboration."
          },
          commandes_fondamentales: {
            titre: "Commandes Fondamentales de Git",
            texte: "Voici quelques commandes de base de Git : git init, git clone, git add, git commit, git push, git pull."
          },
          cas_dutilisation: {
            titre: "Cas d'Utilisation de Git",
            texte: "Git est utilisé dans divers scénarios comme le développement de logiciels et la gestion de configuration."
          },
          conclusion: {
            titre: "Conclusion",
            texte: "Git est un outil indispensable pour le développement moderne."
          }
        }
      }
    },
    {
      chapitre: "Chapitre2",
      titre: "Les Commandes de Base de Git",
      description: "Comprendre les commandes fondamentales de Git.",
      subchapter: {
        subchapterNumber: "2",
        contenue: {
          introduction: {
            titre: "Introduction aux Commandes",
            texte: "Les commandes de Git vous permettent de gérer votre dépôt et de suivre vos modifications."
          },
          git_init: {
            titre: "git init",
            texte: "Cette commande initialise un nouveau dépôt Git dans le répertoire courant."
          },
          git_add: {
            titre: "git add",
            texte: "Cette commande ajoute des fichiers au prochain commit."
          },
          git_commit: {
            titre: "git commit",
            texte: "Cette commande enregistre les modifications ajoutées à l'historique du projet."
          },
          git_push: {
            titre: "git push",
            texte: "Cette commande pousse vos commits vers un dépôt distant."
          },
          git_pull: {
            titre: "git pull",
            texte: "Cette commande récupère les modifications d'un dépôt distant et les fusionne."
          },
          conclusion: {
            titre: "Conclusion",
            texte: "Maîtriser ces commandes est essentiel pour travailler efficacement avec Git."
          }
        }
      }
    },
    {
      chapitre: "Chapitre3",
      titre: "Branches dans Git",
      description: "Comprendre et gérer les branches dans Git.",
      subchapter: {
        subchapterNumber: "3",
        contenue: {
          introduction: {
            titre: "Qu'est-ce qu'une Branche ?",
            texte: "Les branches vous permettent de travailler sur différentes versions d'un projet en parallèle."
          },
          creation_branches: {
            titre: "Création de Branches",
            texte: "Utilisez la commande git branch pour créer une nouvelle branche."
          },
          changement_de_branche: {
            titre: "Changer de Branche",
            texte: "La commande git checkout vous permet de changer de branche."
          },
          fusion_des_branches: {
            titre: "Fusion des Branches",
            texte: "Utilisez git merge pour fusionner une branche dans une autre."
          },
          suppression_de_branche: {
            titre: "Suppression de Branche",
            texte: "La commande git branch -d permet de supprimer une branche."
          },
          conclusion: {
            titre: "Conclusion",
            texte: "Les branches sont un outil puissant pour gérer les développements parallèles."
          }
        }
      }
    },
    {
      chapitre: "Chapitre4",
      titre: "Résolution des Conflits",
      description: "Apprendre à résoudre les conflits dans Git.",
      subchapter: {
        subchapterNumber: "4",
        contenue: {
          introduction: {
            titre: "Comprendre les Conflits",
            texte: "Les conflits surviennent lorsque deux branches modifient la même ligne d'un fichier."
          },
          detection_de_conflits: {
            titre: "Détection de Conflits",
            texte: "Git vous avertit des conflits lors d'une fusion."
          },
          resolution_de_conflits: {
            titre: "Résolution de Conflits",
            texte: "Pour résoudre un conflit, éditez le fichier, corrigez les conflits, puis validez les modifications."
          },
          conseils: {
            titre: "Conseils pour Éviter les Conflits",
            texte: "Communiquez avec votre équipe et intégrez régulièrement les modifications."
          },
          conclusion: {
            titre: "Conclusion",
            texte: "Savoir gérer les conflits est essentiel pour une collaboration efficace."
          }
        }
      }
    }
  ]
};

export default coursTheorique;
