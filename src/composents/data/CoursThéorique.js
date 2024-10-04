const coursTheorique = {
  chapitres: [
    {
      chapitre: "Chapitre1",
      titre: "Introduction à Git",
      description: "Ce chapitre présente Git, son historique, son utilité et son rôle dans le développement logiciel moderne.",
      subchapter: {
        subchapterNumber: "1",
        contenue: {
          introduction: {
            titre: "Qu'est-ce que Git ?",
            texte: "Git est un système de contrôle de version distribué qui permet de suivre les modifications apportées aux fichiers et de coordonner le travail entre plusieurs personnes sur un projet. Il facilite la collaboration et offre un historique complet des modifications."
          },
          historique: {
            titre: "Historique de Git",
            texte: "Git a été créé par Linus Torvalds en 2005 pour le développement du noyau Linux. Son développement a été motivé par le besoin de gérer efficacement les versions dans des projets open source."
          },
          fonctionnement: {
            titre: "Comment fonctionne Git ?",
            texte: "Git fonctionne par des 'snapshots' de fichiers, permettant de conserver des versions à chaque commit. Contrairement aux systèmes de contrôle de version classiques, Git est distribué, chaque développeur ayant une copie complète du dépôt."
          },
          utilite: {
            titre: "Pourquoi utiliser Git ?",
            texte: "Git offre plusieurs avantages :<ul><li><strong>Collaboration :</strong> Facilite le travail en équipe sur un même projet.</li><li><strong>Historique :</strong> Permet de revenir à des versions antérieures.</li><li><strong>Récupération :</strong> Offre la possibilité de restaurer des fichiers perdus.</li></ul>"
          },
          alternatives: {
            titre: "Alternatives à Git",
            texte: "D'autres systèmes de contrôle de version existent, comme Subversion (SVN) et Mercurial. Cependant, Git est le plus populaire, notamment grâce à sa flexibilité et sa rapidité."
          }
        }
      }
    },
    {
      chapitre: "Chapitre2",
      titre: "Installation et Configuration de Git",
      description: "Ce chapitre couvre l'installation de Git sur différents systèmes d'exploitation ainsi que la configuration initiale.",
      subchapter: {
        subchapterNumber: "2",
        contenue: {
          installation: {
            titre: "Installation de Git",
            texte: "Pour installer Git :<ul><li><strong>Windows :</strong> Téléchargez le programme d'installation depuis <a href='https://git-scm.com/download/win'>Git pour Windows</a> et suivez les instructions.</li><li><strong>macOS :</strong> Utilisez Homebrew avec la commande <code>brew install git</code> ou téléchargez-le depuis <a href='https://git-scm.com/download/mac'>Git pour macOS</a>.</li><li><strong>Linux :</strong> Utilisez le gestionnaire de paquets, par exemple :<br><code>sudo apt update</code><br><code>sudo apt install git</code></li></ul>"
          },
          configuration: {
            titre: "Configurer Git",
            texte: "Après l'installation, configurez Git avec votre nom et votre adresse e-mail :<br><code>git config --global user.name \"Votre Nom\"</code><br><code>git config --global user.email \"votre.email@example.com\"</code><br>Vous pouvez également configurer des aliases pour simplifier les commandes."
          },
          verification: {
            titre: "Vérifier l'Installation",
            texte: "Pour vérifier que Git est correctement installé, utilisez la commande :<br><code>git --version</code>. Cela affichera la version de Git installée."
          }
        }
      }
    },
    {
      chapitre: "Chapitre3",
      titre: "Commandes de Base de Git",
      description: "Ce chapitre aborde les commandes essentielles de Git pour commencer à travailler sur des projets.",
      subchapter: {
        subchapterNumber: "3",
        contenue: {
          init: {
            titre: "Initialiser un Dépôt",
            texte: "Pour créer un nouveau dépôt Git, utilisez la commande :<br><code>git init</code>.<br>Cette commande crée un nouveau dossier caché appelé <strong>.git</strong> dans votre répertoire actuel."
          },
          ajout: {
            titre: "Ajouter des Fichiers",
            texte: "Pour ajouter des fichiers au suivi de Git, utilisez :<br><code>git add nom_du_fichier</code> ou pour ajouter tous les fichiers modifiés :<br><code>git add .</code>"
          },
          commit: {
            titre: "Valider des Modifications",
            texte: "Enregistrez les modifications avec un message explicatif :<br><code>git commit -m \"Votre message ici\"</code>."
          },
          historique: {
            titre: "Afficher l'Historique",
            texte: "Pour afficher l'historique des commits, utilisez :<br><code>git log</code>"
          },
          statut: {
            titre: "Vérifier l'État",
            texte: "Pour voir l'état des fichiers dans votre dépôt, utilisez :<br><code>git status</code>"
          },
          supprimer: {
            titre: "Supprimer des Fichiers",
            texte: "Pour supprimer un fichier du suivi de Git, utilisez :<br><code>git rm nom_du_fichier</code>. Pour le supprimer sans le retirer de l'index, utilisez <code>git rm --cached nom_du_fichier</code>."
          },
          tag: {
            titre: "Créer des Tags",
            texte: "Pour marquer des commits avec des tags, utilisez :<br><code>git tag v1.0</code> pour créer un tag, ou <code>git tag -a v1.0 -m \"Version 1.0\"</code> pour un tag annoté."
          }
        }
      }
    },
    {
      chapitre: "Chapitre4",
      titre: "Travailler avec des Dépôts Distants",
      description: "Ce chapitre couvre l'interaction avec des dépôts distants, y compris l'envoi et la récupération de modifications.",
      subchapter: {
        subchapterNumber: "4",
        contenue: {
          remote: {
            titre: "Ajouter un Dépôt Distant",
            texte: "Pour ajouter un dépôt distant, utilisez :<br><code>git remote add origin URL_du_dépôt</code>"
          },
          push: {
            titre: "Envoyer des Modifications",
            texte: "Pour envoyer vos commits locaux vers le dépôt distant :<br><code>git push origin main</code>. Utilisez <code>git push -u origin main</code> pour lier votre branche locale à la branche distante."
          },
          pull: {
            titre: "Récupérer des Modifications",
            texte: "Pour récupérer les modifications du dépôt distant et les fusionner avec votre branche actuelle :<br><code>git pull origin main</code>"
          },
          fetch: {
            titre: "Récupérer des Changements sans Fusionner",
            texte: "Pour récupérer les modifications du dépôt distant sans les fusionner automatiquement, utilisez :<br><code>git fetch</code>"
          },
          clone: {
            titre: "Cloner un Dépôt",
            texte: "Pour cloner un dépôt distant, utilisez :<br><code>git clone URL_du_dépôt</code>. Cela crée une copie locale complète du dépôt."
          },
          branches_distant: {
            titre: "Afficher les Branches Distantes",
            texte: "Pour afficher toutes les branches distantes, utilisez :<br><code>git branch -r</code>"
          }
        }
      }
    },
    {
      chapitre: "Chapitre5",
      titre: "Branches dans Git",
      description: "Ce chapitre traite des branches, un concept clé qui permet de travailler sur différentes versions d'un projet.",
      subchapter: {
        subchapterNumber: "5",
        contenue: {
          creation: {
            titre: "Créer une Branche",
            texte: "Pour créer une nouvelle branche, utilisez :<br><code>git branch nom_de_branche</code>"
          },
          checkout: {
            titre: "Changer de Branche",
            texte: "Pour passer à une autre branche, utilisez :<br><code>git checkout nom_de_branche</code> ou pour créer et passer à une nouvelle branche en une seule commande :<br><code>git checkout -b nom_de_branche</code>"
          },
          merge: {
            titre: "Fusionner des Branches",
            texte: "Pour fusionner une branche avec la branche actuelle, utilisez :<br><code>git merge nom_de_branche</code>"
          },
          suppression: {
            titre: "Supprimer une Branche",
            texte: "Pour supprimer une branche, utilisez :<br><code>git branch -d nom_de_branche</code> pour une suppression sécurisée ou <code>-D</code> pour forcer la suppression."
          },
          renommer: {
            titre: "Renommer une Branche",
            texte: "Pour renommer une branche, utilisez :<br><code>git branch -m ancien_nom nouveau_nom</code>"
          },
          rebase: {
            titre: "Utiliser le Rebase",
            texte: "Pour appliquer les commits d'une branche à une autre en gardant un historique linéaire, utilisez :<br><code>git rebase nom_de_branche</code>"
          }
        }
      }
    },
    {
      chapitre: "Chapitre6",
      titre: "Gestion des Conflits",
      description: "Ce chapitre explique comment gérer les conflits lors de la fusion de branches.",
      subchapter: {
        subchapterNumber: "6",
        contenue: {
          detection: {
            titre: "Détecter un Conflit",
            texte: "Les conflits surviennent lorsque deux branches apportent des modifications incompatibles sur le même fichier. Git vous en informera après une tentative de fusion."
          },
          resolution: {
            titre: "Résoudre un Conflit",
            texte: "Pour résoudre un conflit, ouvrez le fichier concerné et modifiez-le pour choisir les modifications à conserver. Ensuite, ajoutez le fichier et validez la résolution :<br><code>git add nom_du_fichier</code><br><code>git commit</code>"
          }
        }
      }
    },
    {
      chapitre: "Chapitre7",
      titre: "Fonctionnalités Avancées de Git",
      description: "Ce chapitre explore des fonctionnalités avancées pour des utilisateurs plus expérimentés.",
      subchapter: {
        subchapterNumber: "7",
        contenue: {
          rebase: {
            titre: "Rebaser une Branche",
            texte: "Le rebase permet de déplacer une branche à la suite d'une autre pour un historique linéaire :<br><code>git rebase nom_de_branche</code>. Cela évite des merges complexes."
          },
          stash: {
            titre: "Utiliser le Stash",
            texte: "Pour mettre de côté des modifications temporaires, utilisez :<br><code>git stash</code>. Pour récupérer ces modifications, utilisez :<br><code>git stash pop</code>"
          },
          sous_module: {
            titre: "Gérer des Sous-modules",
            texte: "Les sous-modules vous permettent d'intégrer un dépôt Git dans un autre dépôt. Pour ajouter un sous-module :<br><code>git submodule add URL_du_sous_module</code>"
          }
        }
      }
    },
    {
      chapitre: "Chapitre8",
      titre: "GitHub et GitHub Pages",
      description: "Ce chapitre présente GitHub, une plateforme de gestion de dépôt Git, et GitHub Pages pour héberger des sites web.",
      subchapter: {
        subchapterNumber: "8",
        contenue: {
          github: {
            titre: "Qu'est-ce que GitHub ?",
            texte: "GitHub est une plateforme de développement collaboratif qui permet de gérer des dépôts Git en ligne, de collaborer avec d'autres développeurs et d'utiliser des outils intégrés comme les pull requests et les issues."
          },
          pages: {
            titre: "GitHub Pages",
            texte: "GitHub Pages est un service d'hébergement de sites web statiques. Pour l'utiliser, créez une branche nommée <strong>gh-pages</strong> dans votre dépôt et téléchargez vos fichiers HTML."
          },
          collaboration: {
            titre: "Collaboration avec GitHub",
            texte: "Sur GitHub, vous pouvez contribuer à des projets d'autres utilisateurs via des fork et des pull requests, facilitant ainsi le travail collaboratif sur des projets open source."
          }
        }
      }
    },
    {
      chapitre: "Chapitre9",
      titre: "Meilleures Pratiques et Ressources",
      description: "Ce chapitre conclut le cours en fournissant des meilleures pratiques et des ressources pour continuer à apprendre.",
      subchapter: {
        subchapterNumber: "9",
        contenue: {
          meilleures_pratiques: {
            titre: "Meilleures Pratiques",
            texte: "Voici quelques meilleures pratiques lors de l'utilisation de Git :<ul><li>Faites des commits fréquents avec des messages clairs.</li><li>Utilisez des branches pour travailler sur de nouvelles fonctionnalités.</li><li>Gardez votre dépôt propre en supprimant les branches non utilisées.</li></ul>"
          },
          ressources: {
            titre: "Ressources Complémentaires",
            texte: "Pour approfondir vos connaissances sur Git, consultez ces ressources :<ul><li><a href='https://git-scm.com/doc'>Documentation officielle de Git</a></li><li><a href='https://www.atlassian.com/git/tutorials'>Tutoriels Git d'Atlassian</a></li><li><a href='https://learngitbranching.js.org/'>Learn Git Branching (interactif)</a></li></ul>"
          }
        }
      }
    }
  ]
};

export default coursTheorique;
