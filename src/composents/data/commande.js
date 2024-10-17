const ListeCommande = {
    commande : [
        {
            id : "git-init",
            nom : "git init",
            description : "La commande 'git init' est utilisée pour démarrer un nouveau projet sous Git. Cela signifie qu'elle prépare un dossier à être suivi par Git en créant un dossier caché appelé '.git'. Ce dossier contient toutes les informations nécessaires pour que Git puisse suivre les changements faits sur les fichiers de ton projet. C'est la première étape pour utiliser Git dans un projet. Par exemple, si tu travailles sur un site web ou un programme, et que tu veux que Git suive toutes les modifications que tu fais, tu utiliseras 'git init'.",
            option: [
                "--bare", 
                "--template=<template-directory>",
                "--separate-git-dir=<git-directory>",
                "--shared[=(false|true|umask|group|all|world|everybody|0xxx)]",
                "-q ou --quiet",
                "--initial-branch=<branch-name>"   
            ],
            explicationOption: {
                "--bare": "Cette option crée un dépôt sans les fichiers de travail (c'est-à-dire qu'il ne contiendra que les fichiers Git, sans les fichiers de projet habituels). C'est généralement utilisé pour les dépôts sur un serveur.",
                "--template=<template-directory>": "Permet de spécifier un dossier modèle pour la structure du dépôt. Cela peut être utile si tu veux réutiliser certains paramètres ou configurations pour ton dépôt Git.",
                "--separate-git-dir=<git-directory>": "Cette option permet de stocker les fichiers Git (.git) dans un autre répertoire, séparé des fichiers du projet.",
                "--shared": "Contrôle les permissions pour partager le dépôt avec d'autres utilisateurs ou groupes. Tu peux définir les permissions comme 'group' ou 'all' pour que d'autres personnes puissent accéder au dépôt.",
                "-q ou --quiet": "Démarre le dépôt en mode silencieux, sans afficher de message. Utile si tu veux éviter les détails inutiles dans la console.",
                "--initial-branch=<branch-name>": "Permet de spécifier le nom de la première branche créée, au lieu de la branche par défaut 'master' ou 'main'."
            },
            syntax: [
                "git init",
                "git init .", // Fait la même chose que 'git init', initialise le dépôt dans le répertoire courant.
                "git init '<nom du répertoire>'" // Crée un nouveau dépôt Git dans le répertoire spécifié.
            ],
            explicationSyntax: {
                "git init": "Cette commande est utilisée pour démarrer un nouveau dépôt dans le dossier actuel. Cela crée un dossier '.git' dans le répertoire où tu te trouves.",
                "git init .": "C'est une manière alternative d'écrire 'git init'. Le point '.' indique le répertoire courant, donc c'est équivalent.",
                "git init '<nom du répertoire>'": "Tu peux spécifier un nom de répertoire. Git créera un nouveau dossier avec ce nom et y initialisera un dépôt Git."
            },
            exemple: [
                {
                    situation: "Tu commences un projet et tu veux utiliser Git pour suivre l'historique des changements. Tu es dans le répertoire du projet.",
                    commande: "git init",
                    resultat: "Git va créer un dossier caché '.git' dans ce répertoire et commencer à suivre les changements."
                },
                {
                    situation: "Tu veux initialiser un dépôt dans un autre dossier, par exemple, dans un dossier nommé 'mon-projet'.",
                    commande: "git init mon-projet",
                    resultat: "Git va créer le dossier 'mon-projet' et initialiser un dépôt Git à l'intérieur."
                }
            ]
        },
        {
            id : "git-add",
            nom : "git add",
            description : "La commande 'git add' est utilisée pour ajouter des changements dans le répertoire de travail à l'index (staging area). Avant de valider (commit) les changements dans le dépôt, tu dois d'abord les ajouter à l'index. Cette étape est cruciale pour préparer les modifications que tu souhaites inclure dans le prochain commit.",
            option: [
                "--all ou -A", 
                "--patch ou -p",
                "--interactive ou -i",
                "--verbose ou -v"
            ],
            explicationOption: {
                "--all ou -A": "Cette option ajoute tous les fichiers modifiés, supprimés ou nouvellement créés à l'index, assurant que toutes les modifications soient incluses.",
                "--patch ou -p": "Permet de choisir des modifications spécifiques à ajouter à l'index. Cela te donne plus de contrôle sur ce que tu souhaites inclure dans le prochain commit.",
                "--interactive ou -i": "Ouvre une interface interactive pour ajouter des fichiers. Cela te permet de sélectionner facilement les fichiers ou les morceaux de fichiers à ajouter.",
                "--verbose ou -v": "Affiche les fichiers ajoutés à l'index. Utile pour confirmer ce que tu es en train d'ajouter."
            },
            syntax: [
                "git add <fichier>",
                "git add .", // Ajoute tous les fichiers modifiés dans le répertoire courant à l'index.
                "git add -A" // Ajoute tous les changements (ajouts, suppressions et modifications) dans le répertoire à l'index.
            ],
            explicationSyntax: {
                "git add <fichier>": "Cette commande ajoute un fichier spécifique à l'index. Remplace '<fichier>' par le nom du fichier que tu souhaites ajouter.",
                "git add .": "Ajoute tous les fichiers modifiés dans le répertoire courant à l'index, y compris les nouveaux fichiers.",
                "git add -A": "Cette commande ajoute tous les changements dans le répertoire, y compris les fichiers supprimés, au staging area."
            },
            exemple: [
                {
                    situation: "Tu as modifié un fichier nommé 'index.html' et tu veux préparer ce changement pour le prochain commit.",
                    commande: "git add index.html",
                    resultat: "Le fichier 'index.html' est ajouté à l'index et sera inclus dans le prochain commit."
                },
                {
                    situation: "Tu veux ajouter tous les fichiers modifiés et créés dans le répertoire courant.",
                    commande: "git add .",
                    resultat: "Tous les fichiers modifiés et nouvellement créés dans le répertoire courant sont ajoutés à l'index."
                }
            ]
        },
{
            id: "git-commit",
            nom: "git commit",
            description: "La commande 'git commit' enregistre les modifications ajoutées à l'index dans l'historique de version de Git. Chaque commit crée un snapshot de ton projet à un moment donné. Il est important de fournir un message descriptif pour expliquer les changements effectués.",
            option: [
                "-m <message>",
                "--amend",
                "--no-edit",
                "--verbose"
            ],
            explicationOption: {
                "-m <message>": "Permet de spécifier un message de commit directement dans la ligne de commande, sans ouvrir l'éditeur de texte.",
                "--amend": "Modifie le dernier commit en y ajoutant les changements de l'index. Pratique si tu veux corriger le dernier commit sans créer un nouveau.",
                "--no-edit": "Utilisé avec '--amend' pour ne pas modifier le message du dernier commit.",
                "--verbose": "Affiche les différences entre l'index et le dernier commit avant de créer un nouveau commit."
            },
            syntax: [
                "git commit -m 'message'",
                "git commit --amend",
                "git commit -a -m 'message'" // Enregistre tous les fichiers modifiés et les commet.
            ],
            explicationSyntax: {
                "git commit -m 'message'": "Enregistre les modifications de l'index avec un message de commit fourni.",
                "git commit --amend": "Modifie le dernier commit pour inclure les modifications actuelles dans l'index.",
                "git commit -a -m 'message'": "Ajoute tous les fichiers modifiés à l'index et les engage dans un seul commit avec le message spécifié."
            },
            exemple: [
                {
                    situation: "Tu as ajouté des fichiers et tu veux les enregistrer avec un message.",
                    commande: "git commit -m 'Ajout de la page d'accueil'",
                    resultat: "Les modifications sont enregistrées dans l'historique avec le message 'Ajout de la page d'accueil'."
                },
                {
                    situation: "Tu veux corriger le dernier commit en ajoutant un fichier oublié.",
                    commande: "git commit --amend -m 'Ajout de la page d'accueil avec fichiers manquants'",
                    resultat: "Le dernier commit est modifié pour inclure les changements et le message est mis à jour."
                }
            ]
        },
        {
            id: "git-global",
            nom: "git config --global",
            description: "La commande 'git config --global' est utilisée pour configurer les paramètres Git au niveau global pour l'utilisateur actuel. Cela inclut des informations comme le nom et l'email de l'utilisateur, ainsi que d'autres préférences.",
            option: [
                "--edit"
            ],
            explicationOption: {
                "--edit": "Ouvre le fichier de configuration global dans l'éditeur de texte par défaut pour que tu puisses le modifier directement."
            },
            syntax: [
                "git config --global user.name '<Nom>'",
                "git config --global user.email '<Email>'",
                "git config --global --edit"
            ],
            explicationSyntax: {
                "git config --global user.name '<Nom>'": "Configure le nom d'utilisateur pour tous les dépôts Git de l'utilisateur.",
                "git config --global user.email '<Email>'": "Configure l'adresse email pour tous les dépôts Git de l'utilisateur.",
                "git config --global --edit": "Ouvre le fichier de configuration global pour modifications manuelles."
            },
            exemple: [
                {
                    situation: "Tu veux configurer ton nom pour les commits.",
                    commande: "git config --global user.name 'Jean Dupont'",
                    resultat: "Le nom d'utilisateur est enregistré dans la configuration Git globale."
                },
                {
                    situation: "Tu veux configurer ton adresse email pour les commits.",
                    commande: "git config --global user.email 'jean.dupont@example.com'",
                    resultat: "L'adresse email est enregistrée dans la configuration Git globale."
                }
            ]
        },
        {
            id: "git-push",
            nom: "git push",
            description: "La commande 'git push' est utilisée pour transférer les commits locaux vers un dépôt distant. Cela permet de partager les modifications avec d'autres utilisateurs ou d'enregistrer le travail sur un serveur distant.",
            option: [
                "--force",
                "--set-upstream",
                "--quiet"
            ],
            explicationOption: {
                "--force": "Force le transfert des commits même si cela entraîne une perte de données sur le dépôt distant.",
                "--set-upstream": "Liaison de la branche locale avec la branche distante, pour faciliter les futurs push et pull.",
                "--quiet": "Réduit la sortie de la commande pour afficher moins d'informations."
            },
            syntax: [
                "git push <remote> <branch>",
                "git push --force",
                "git push --set-upstream <remote> <branch>"
            ],
            explicationSyntax: {
                "git push <remote> <branch>": "Transfère les commits de la branche spécifiée vers le dépôt distant.",
                "git push --force": "Force le transfert même si cela écrase les modifications distantes.",
                "git push --set-upstream <remote> <branch>": "Configure la branche locale pour suivre la branche distante spécifiée."
            },
            exemple: [
                {
                    situation: "Tu veux envoyer tes commits vers le dépôt distant nommé 'origin' sur la branche 'main'.",
                    commande: "git push origin main",
                    resultat: "Les commits sont envoyés à la branche 'main' du dépôt distant 'origin'."
                },
                {
                    situation: "Tu as besoin d'écraser la branche distante avec tes commits locaux.",
                    commande: "git push --force",
                    resultat: "Les commits locaux remplacent les commits sur la branche distante."
                }
            ]
        },
        {
            id: "git-pull",
            nom: "git pull",
            description: "La commande 'git pull' récupère les modifications d'un dépôt distant et les fusionne avec la branche courante. Cela permet de mettre à jour le dépôt local avec les changements effectués par d'autres utilisateurs.",
            option: [
                "--rebase",
                "--no-commit",
                "--quiet"
            ],
            explicationOption: {
                "--rebase": "Au lieu de fusionner, cela applique les commits locaux après ceux récupérés, ce qui peut rendre l'historique plus linéaire.",
                "--no-commit": "Ne crée pas un commit automatique après la fusion des changements.",
                "--quiet": "Réduit la sortie de la commande."
            },
            syntax: [
                "git pull <remote> <branch>",
                "git pull --rebase",
                "git pull --no-commit"
            ],
            explicationSyntax: {
                "git pull <remote> <branch>": "Récupère et fusionne les modifications du dépôt distant spécifié.",
                "git pull --rebase": "Récupère les modifications et applique les commits locaux après les changements récupérés.",
                "git pull --no-commit": "Récupère les modifications mais ne crée pas de commit automatique."
            },
            exemple: [
                {
                    situation: "Tu veux récupérer les changements de la branche 'main' du dépôt distant 'origin'.",
                    commande: "git pull origin main",
                    resultat: "Les modifications de la branche distante sont récupérées et fusionnées avec ta branche locale."
                },
                {
                    situation: "Tu préfères appliquer tes modifications locales après celles du dépôt distant.",
                    commande: "git pull --rebase",
                    resultat: "Les commits locaux sont appliqués après les changements récupérés."
                }
            ]
        },
        {
            id: "git-status",
            nom: "git status",
            description: "La commande 'git status' affiche l'état actuel de ton dépôt Git. Elle montre les fichiers qui ont été modifiés, ceux qui sont prêts à être engagés (staged), ainsi que les fichiers qui ne sont pas suivis.",
            option: [
                "-s ou --short",
                "-b ou --branch"
            ],
            explicationOption: {
                "-s ou --short": "Affiche un état abrégé de ton dépôt, avec des symboles pour représenter l'état des fichiers.",
                "-b ou --branch": "Affiche des informations sur la branche courante et son état par rapport à la branche distante."
            },
            syntax: [
                "git status",
                "git status -s",
                "git status -b"
            ],
            explicationSyntax: {
                "git status": "Affiche les fichiers modifiés, ajoutés et non suivis dans le dépôt.",
                "git status -s": "Affiche un résumé des fichiers avec des symboles pour une lecture rapide.",
                "git status -b": "Montre des informations sur la branche actuelle."
            },
            exemple: [
                {
                    situation: "Tu veux voir les changements non engagés et les fichiers non suivis dans ton dépôt.",
                    commande: "git status",
                    resultat: "Git affiche l'état des fichiers, indiquant lesquels sont modifiés ou non suivis."
                },
                {
                    situation: "Tu souhaites une vue abrégée de l'état de ton dépôt.",
                    commande: "git status -s",
                    resultat: "Git affiche l'état des fichiers de manière concise."
                }
            ]
        },
        {
            id: "git-log",
            nom: "git log",
            description: "La commande 'git log' affiche l'historique des commits pour la branche courante. Elle montre les informations des commits, y compris les identifiants, les auteurs, les dates et les messages.",
            option: [
                "--oneline",
                "--graph",
                "--decorate"
            ],
            explicationOption: {
                "--oneline": "Affiche chaque commit sur une seule ligne, ce qui rend la lecture plus facile.",
                "--graph": "Affiche un graphique ASCII de l'historique des commits pour visualiser la structure des branches.",
                "--decorate": "Affiche les références des branches et des tags en plus des commits."
            },
            syntax: [
                "git log",
                "git log --oneline",
                "git log --graph --decorate"
            ],
            explicationSyntax: {
                "git log": "Affiche l'historique complet des commits pour la branche courante.",
                "git log --oneline": "Affiche l'historique des commits de manière condensée, avec un seul identifiant et message par ligne.",
                "git log --graph --decorate": "Affiche l'historique avec une représentation graphique et les références des branches."
            },
            exemple: [
                {
                    situation: "Tu veux voir tous les commits de l'historique.",
                    commande: "git log",
                    resultat: "Git affiche tous les commits avec leurs détails, y compris les messages et les auteurs."
                },
                {
                    situation: "Tu veux une vue rapide et condensée de l'historique des commits.",
                    commande: "git log --oneline",
                    resultat: "Git affiche chaque commit sur une seule ligne, simplifiant la lecture."
                }
            ]
        },
 {
            id : "git-clone",
            nom : "git clone",
            description : "La commande 'git clone' est utilisée pour créer une copie locale d'un dépôt distant. Cela inclut tout l'historique de version du projet.",
            option: [
                "--branch <branch>",
                "--depth <depth>",
                "--single-branch"
            ],
            explicationOption: {
                "--branch <branch>": "Permet de cloner une branche spécifique du dépôt au lieu de la branche par défaut.",
                "--depth <depth>": "Crée un clone superficiel avec un historique limité. Utile pour économiser de l'espace et du temps.",
                "--single-branch": "Clone uniquement la branche spécifiée, sans les autres branches du dépôt."
            },
            syntax: [
                "git clone <repository>",
                "git clone --branch <branch> <repository>",
                "git clone --depth <depth> <repository>"
            ],
            explicationSyntax: {
                "git clone <repository>": "Clone le dépôt spécifié à l'URL.",
                "git clone --branch <branch> <repository>": "Clone une branche spécifique du dépôt.",
                "git clone --depth <depth> <repository>": "Clone le dépôt avec un historique limité."
            },
            exemple: [
                {
                    situation: "Tu veux créer une copie locale d'un dépôt distant.",
                    commande: "git clone https://github.com/utilisateur/repo.git",
                    resultat: "Une copie locale du dépôt est créée dans un dossier 'repo'."
                },
                {
                    situation: "Tu veux cloner une branche spécifique d'un dépôt.",
                    commande: "git clone --branch develop https://github.com/utilisateur/repo.git",
                    resultat: "La branche 'develop' est clonée du dépôt."
                }
            ]
        },
        {
            id : "git-branch",
            nom : "git branch",
            description : "La commande 'git branch' permet de gérer les branches dans un dépôt Git. Elle peut être utilisée pour lister, créer ou supprimer des branches.",
            option: [
                "-d <branch>",
                "-m <old-branch> <new-branch>",
                "-a"
            ],
            explicationOption: {
                "-d <branch>": "Supprime la branche spécifiée si elle a été fusionnée.",
                "-m <old-branch> <new-branch>": "Renomme une branche existante.",
                "-a": "Affiche toutes les branches, y compris les branches distantes."
            },
            syntax: [
                "git branch",
                "git branch <new-branch>",
                "git branch -d <branch>"
            ],
            explicationSyntax: {
                "git branch": "Affiche la liste des branches locales dans le dépôt.",
                "git branch <new-branch>": "Crée une nouvelle branche avec le nom spécifié.",
                "git branch -d <branch>": "Supprime la branche spécifiée."
            },
            exemple: [
                {
                    situation: "Tu veux voir toutes les branches dans ton dépôt.",
                    commande: "git branch",
                    resultat: "Git affiche la liste de toutes les branches locales."
                },
                {
                    situation: "Tu veux créer une nouvelle branche pour commencer un nouveau développement.",
                    commande: "git branch feature-nouvelle-fonctionnalite",
                    resultat: "Une nouvelle branche 'feature-nouvelle-fonctionnalite' est créée."
                }
            ]
        },
        {
            id : "git-checkout",
            nom : "git checkout",
            description : "La commande 'git checkout' est utilisée pour naviguer entre les branches et restaurer les fichiers ou les révisions dans le dépôt.",
            option: [
                "-b <branch>",
                "--orphan <new-branch>",
                "--track <branch>"
            ],
            explicationOption: {
                "-b <branch>": "Crée et passe à une nouvelle branche.",
                "--orphan <new-branch>": "Crée une nouvelle branche sans historique.",
                "--track <branch>": "Crée une branche locale qui suit une branche distante."
            },
            syntax: [
                "git checkout <branch>",
                "git checkout -b <new-branch>",
                "git checkout -- <file>"
            ],
            explicationSyntax: {
                "git checkout <branch>": "Passe à la branche spécifiée.",
                "git checkout -b <new-branch>": "Crée et passe à la nouvelle branche.",
                "git checkout -- <file>": "Restaure le fichier spécifié à partir de l'index."
            },
            exemple: [
                {
                    situation: "Tu veux passer à la branche 'develop'.",
                    commande: "git checkout develop",
                    resultat: "La branche 'develop' est maintenant active."
                },
                {
                    situation: "Tu veux créer une nouvelle branche 'feature-nouvelle' et y passer.",
                    commande: "git checkout -b feature-nouvelle",
                    resultat: "Une nouvelle branche 'feature-nouvelle' est créée et activée."
                }
            ]
        },
        {
            id : "git-merge",
            nom : "git merge",
            description : "La commande 'git merge' permet de fusionner les changements d'une branche dans la branche actuelle. C'est une manière de combiner le travail de plusieurs branches.",
            option: [
                "--no-ff",
                "--squash",
                "--abort"
            ],
            explicationOption: {
                "--no-ff": "Force la création d'un commit de fusion même si la fusion peut être effectuée avec un fast-forward.",
                "--squash": "Fusionne les modifications de la branche sans créer de commit de fusion, les changements restent dans l'index.",
                "--abort": "Annule la fusion en cours et restaure l'état du dépôt à avant la fusion."
            },
            syntax: [
                "git merge <branch>",
                "git merge --no-ff <branch>",
                "git merge --squash <branch>"
            ],
            explicationSyntax: {
                "git merge <branch>": "Fusionne la branche spécifiée dans la branche actuelle.",
                "git merge --no-ff <branch>": "Effectue une fusion en créant un commit même si un fast-forward est possible.",
                "git merge --squash <branch>": "Fusionne les modifications sans créer de commit de fusion."
            },
            exemple: [
                {
                    situation: "Tu veux fusionner la branche 'feature-nouvelle' dans 'main'.",
                    commande: "git merge feature-nouvelle",
                    resultat: "Les changements de la branche 'feature-nouvelle' sont fusionnés dans 'main'."
                },
                {
                    situation: "Tu souhaites fusionner sans fast-forward.",
                    commande: "git merge --no-ff feature-nouvelle",
                    resultat: "Un commit de fusion est créé pour combiner 'feature-nouvelle' dans 'main'."
                }
            ]
        },
        {
            id : "git-rebase",
            nom : "git rebase",
            description : "La commande 'git rebase' permet de déplacer ou de combiner des séries de commits d'une branche à une autre. Cela aide à maintenir un historique de commit plus propre.",
            option: [
                "--onto <newbase>",
                "--interactive",
                "--abort"
            ],
            explicationOption: {
                "--onto <newbase>": "Déplace les commits sur un nouvel emplacement.",
                "--interactive": "Permet de modifier les commits de manière interactive (modifier, supprimer, réorganiser).",
                "--abort": "Annule le rebase en cours et restaure l'état du dépôt."
            },
            syntax: [
                "git rebase <branch>",
                "git rebase --onto <newbase> <upstream> <branch>",
                "git rebase -i <base>"
            ],
            explicationSyntax: {
                "git rebase <branch>": "Déplace la branche courante pour commencer à partir de la branche spécifiée.",
                "git rebase --onto <newbase> <upstream> <branch>": "Déplace les commits d'une branche vers un nouvel emplacement.",
                "git rebase -i <base>": "Lance un rebase interactif pour modifier les commits."
            },
            exemple: [
                {
                    situation: "Tu veux déplacer la branche 'feature-nouvelle' sur la branche 'main'.",
                    commande: "git rebase main",
                    resultat: "Les commits de 'feature-nouvelle' sont déplacés pour commencer à partir de 'main'."
                },
                {
                    situation: "Tu veux faire un rebase interactif pour réorganiser les commits.",
                    commande: "git rebase -i HEAD~3",
                    resultat: "Un éditeur s'ouvre pour te permettre de modifier les trois derniers commits."
                }
            ]
        },
        {
            id : "git-reset",
            nom : "git reset",
            description : "La commande 'git reset' est utilisée pour annuler des modifications et réinitialiser l'état de l'index et du répertoire de travail.",
            option: [
                "--soft <commit>",
                "--mixed <commit>",
                "--hard <commit>"
            ],
            explicationOption: {
                "--soft <commit>": "Réinitialise l'index à l'état du commit spécifié, mais laisse les modifications dans le répertoire de travail.",
                "--mixed <commit>": "Réinitialise l'index et le répertoire de travail à l'état du commit spécifié.",
                "--hard <commit>": "Réinitialise tout, l'index et le répertoire de travail, à l'état du commit spécifié."
            },
            syntax: [
                "git reset --soft <commit>",
                "git reset --mixed <commit>",
                "git reset --hard <commit>"
            ],
            explicationSyntax: {
                "git reset --soft <commit>": "Réinitialise l'index, les changements restent dans le répertoire de travail.",
                "git reset --mixed <commit>": "Réinitialise l'index et le répertoire de travail pour correspondre à un commit.",
                "git reset --hard <commit>": "Réinitialise complètement à un état de commit, perdant les changements non enregistrés."
            },
            exemple: [
                {
                    situation: "Tu veux annuler le dernier commit tout en conservant les modifications.",
                    commande: "git reset --soft HEAD~1",
                    resultat: "Le dernier commit est annulé, mais les modifications restent dans l'index."
                },
                {
                    situation: "Tu veux annuler le dernier commit et les changements.",
                    commande: "git reset --hard HEAD~1",
                    resultat: "Le dernier commit et les changements sont complètement annulés."
                }
            ]
        }
    ]
};

export default ListeCommande;
