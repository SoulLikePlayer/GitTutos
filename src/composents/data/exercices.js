// ../data/exercices.js
const sousExercices1 = [
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour initialiser un nouveau dépôt Git.",
    fragments: ["git", "init", "<nom_du_dépôt>", "."],
    incorrectFragments: ["create", "repository", "new", "folder"],
    solution: [
      "git init <nom_du_dépôt>",
      "git init .",
      "git init --bare",
      "git init"
    ]
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git init'?</strong>",
    options: [
      "Crée un nouveau dossier",
      "Initialise un nouveau dépôt Git",
      "Ajoute un fichier au dépôt",
    ],
    answer: 1,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour créer une branche nommée 'develop'.",
    fragments: ["git", "branch", "<branche>", "develop", "-b", "checkout"],
    incorrectFragments: ["make", "create", "switch"],
    solution: [
      "git branch <branche>",
      "git branch develop",
      "git checkout -b develop"
    ]
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git branch'?</strong>",
    options: [
      "Crée une nouvelle branche",
      "Affiche les branches existantes",
      "Supprime une branche",
    ],
    answer: 1,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour faire un commit avec le message 'Initial commit'.",
    fragments: ["git", "commit", "-m", "'<message>'", "'Initial commit'", "\"<message>\"", "\"Initial commit\""],
    incorrectFragments: ["push", "add", "log"],
    solution: [
      "git commit -m '<message>'",
      "git commit -m 'Initial commit'",
      "git commit -m \"Initial commit\""
    ]
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour taguer la version 1.0 de votre projet.",
    fragments: ["git", "tag", "<tag>", "-a", "-m", "<message>", "v1.0"],
    incorrectFragments: ["label", "version", "commit"],
    solution: [
      "git tag <tag>",
      "git tag -a <nom_du_tag> -m <message>",
      "git tag -a v1.0 -m 'Version 1.0'"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour pousser des changements vers le dépôt distant.",
    fragments: ["git", "push", "<remote>", "<branche>", "origin"],
    incorrectFragments: ["git", "pull", "commit", "add"],
    solution: [
      "git push <remote> <branche>",
      "git push origin main"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Quel est l'ordre correct des commandes pour faire un commit?</strong>",
    options: [
      "git add <message> puis git commit -m '<message>'",
      "git commit -m '<message>' puis git add <message>",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour visualiser l'historique des commits.",
    fragments: ["git", "log", "--oneline", "--graph", "--all", "-p"],
    incorrectFragments: ["git", "status", "git", "diff"],
    solution: [
      "git log",
      "git log --oneline",
      "git log --graph",
      "git log --all",
      "git log --oneline --graph",
      "git log --oneline --all",
      "git log -p",
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour supprimer une branche.",
    fragments: ["git", "branch", "-d", "<branche>", "-D"],
    incorrectFragments: ["git", "remove", "<branche>", "delete"],
    solution: [
      "git branch -d <branche>",
      "git branch -D <branche>"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour cloner un dépôt distant.",
    fragments: ["git", "clone", "<url_du_dépôt>", "https://github.com/username/repo.git"],
    incorrectFragments: ["git", "copy", "pull", "fetch"],
    solution: [
      "git clone <url_du_dépôt>",
      "git clone https://github.com/username/repo.git"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git clone'?</strong>",
    options: [
      "Télécharge les fichiers du dépôt",
      "Crée une nouvelle branche",
      "Supprime un dépôt",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour fusionner une branche nommée 'feature' dans 'main'.",
    fragments: ["git", "merge", "<branche>", "feature"],
    incorrectFragments: ["git", "combine", "join", "connect"],
    solution: [
      "git merge <branche>",
      "git merge feature",
      "git merge develop"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour voir les différences entre votre dépôt et le dépôt distant.",
    fragments: ["git", "diff", "<remote>/<branche>", "origin"],
    incorrectFragments: ["git", "compare", "status"],
    solution: [
      "git diff <remote>/<branche>",
      "git diff origin/main"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour annuler les modifications dans un fichier.",
    fragments: ["git", "checkout", "--", "<fichier>", "restore"],
    incorrectFragments: ["git", "reset", "revert"],
    solution: [
      "git checkout -- <fichier>",
      "git restore <fichier>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git checkout -- <fichier>'?</strong>",
    options: [
      "Annule les modifications non validées",
      "Change de branche",
      "Supprime le fichier",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour afficher l'état de votre dépôt.",
    fragments: ["git", "status"],
    incorrectFragments: ["git", "check", "log"],
    solution: [
      "git status"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git status'?</strong>",
    options: [
      "Affiche l'historique des commits",
      "Montre les fichiers modifiés et en attente",
      "Affiche les branches existantes",
    ],
    answer: 1,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour réinitialiser votre dépôt à un commit précédent.",
    fragments: ["git", "reset", "--hard", "<commit>", "HEAD~1"],
    incorrectFragments: ["git", "revert", "checkout"],
    solution: [
      "git reset --hard <commit>",
      "git reset --hard HEAD~1"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour afficher les logs avec un format compact.",
    fragments: ["git", "log", "--oneline", "--decorate"],
    incorrectFragments: ["git", "show", "history"],
    solution: [
      "git log --oneline",
      "git log --oneline --decorate"
    ],
  },
];

const sousExercices2 = [
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour réinitialiser votre dépôt à l'état d'un commit spécifique sans perdre les modifications dans votre répertoire de travail.",
    fragments: ["git", "reset", "--soft", "<commit>", "--mixed", "--hard"],
    incorrectFragments: ["git", "revert", "checkout"],
    solution: [
      "git reset --soft <commit>",
      "git reset --mixed <commit>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git revert <commit>'?</strong>",
    options: [
      "Supprime le commit spécifié",
      "Annule les modifications d'un commit en créant un nouveau commit",
      "Réinitialise le dépôt à un état précédent",
    ],
    answer: 1,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour afficher les différences entre les fichiers dans le répertoire de travail et le dernier commit.",
    fragments: ["git", "diff", "--cached", "<fichier>"],
    incorrectFragments: ["git", "status", "log"],
    solution: [
      "git diff --cached",
      "git diff <fichier>"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour créer un nouvel alias Git nommé 'st' pour 'status'.",
    fragments: ["git", "config", "--global", "alias.st", "status", "user.name"],
    incorrectFragments: ["git", "create", "alias", "set"],
    solution: ["git config --global alias.st status"],
  },
  {
    type: "qcm",
    question: "<strong>Quel est l'effet de la commande 'git cherry-pick <commit>'?</strong>",
    options: [
      "Fusionne deux branches",
      "Applique un commit spécifique d'une autre branche dans la branche actuelle",
      "Supprime le dernier commit",
    ],
    answer: 1,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour créer une branche à partir d'un commit spécifique.",
    fragments: ["git", "branch", "<nouvelle_branche>", "<commit>", "HEAD"],
    incorrectFragments: ["git", "checkout", "create", "make"],
    solution: ["git branch <nouvelle_branche> <commit>"],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour appliquer un patch à partir d'un fichier de diff.",
    fragments: ["git", "apply", "<fichier_de_diff>", "--stat", "--check"],
    incorrectFragments: ["git", "patch", "merge"],
    solution: [
      "git apply <fichier_de_diff>",
      "git apply --stat <fichier_de_diff>",
      "git apply --check <fichier_de_diff>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git stash'?</strong>",
    options: [
      "Sauvegarde temporairement les modifications non validées",
      "Supprime les fichiers du répertoire de travail",
      "Crée un nouvel commit sans le valider",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour pousser tous les tags vers le dépôt distant.",
    fragments: ["git", "push", "--tags", "<remote>"],
    incorrectFragments: ["git", "send", "tag"],
    solution: [
      "git push --tags",
      "git push <remote> --tags"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour créer un nouvel upstream pour une branche.",
    fragments: ["git", "push", "--set-upstream", "<remote>", "<branche>", "--force"],
    incorrectFragments: ["git", "branch", "link", "set"],
    solution: [
      "git push --set-upstream <remote> <branche>",
      "git push -u <remote> <branche>"
    ],
  },
];

const sousExercices3 = [
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour fusionner une branche en utilisant une stratégie de fusion spécifique.",
    fragments: ["git", "merge", "--strategy", "<stratégie>", "<branche>", "--no-ff", "--ff"],
    incorrectFragments: ["git", "combine", "join", "connect"],
    solution: [
      "git merge --strategy <stratégie> <branche>",
      "git merge --no-ff <branche>",
      "git merge --ff <branche>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git stash pop'?</strong>",
    options: [
      "Applique les modifications sauvegardées et les supprime de la pile",
      "Supprime les modifications non validées",
      "Sauvegarde les modifications sans les supprimer",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour créer un tag annoté à une version spécifique.",
    fragments: ["git", "tag", "-a", "<tag>", "-m", "'<message>'", "<commit>", "--force"],
    incorrectFragments: ["git", "label", "version", "commit"],
    solution: [
      "git tag -a <tag> -m '<message>' <commit>",
      "git tag -a <tag> -m '<message>' --force <commit>"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour voir les commits de la branche actuelle sous forme graphique.",
    fragments: ["git", "log", "--graph", "--oneline", "--decorate"],
    incorrectFragments: ["git", "show", "history"],
    solution: [
      "git log --graph",
      "git log --graph --oneline",
      "git log --graph --decorate"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git cherry'?</strong>",
    options: [
      "Montre les commits dans la branche actuelle qui ne sont pas dans la branche donnée",
      "Supprime les commits",
      "Fusionne les branches",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour réinitialiser un fichier à l'état du dernier commit tout en conservant les modifications non validées dans l'index.",
    fragments: ["git", "reset", "<fichier>", "--soft", "--mixed"],
    incorrectFragments: ["git", "revert", "checkout"],
    solution: [
      "git reset <fichier>",
      "git reset --soft <fichier>",
      "git reset --mixed <fichier>"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour rétablir une branche à un état précédent à l'aide de reflog.",
    fragments: ["git", "reset", "--hard", "HEAD@{<n>}", "HEAD~<n>"],
    incorrectFragments: ["git", "revert", "checkout"],
    solution: [
      "git reset --hard HEAD@{<n>}",
      "git reset --hard HEAD~<n>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git rebase'?</strong>",
    options: [
      "Applique les commits d'une branche sur une autre tout en réécrivant l'historique",
      "Fusionne les branches",
      "Affiche les différences entre deux branches",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour appliquer un rebase interactif à partir de 3 commits.",
    fragments: ["git", "rebase", "-i", "HEAD~3", "HEAD~n"],
    incorrectFragments: ["git", "merge", "cherry-pick"],
    solution: [
      "git rebase -i HEAD~3",
      "git rebase -i HEAD~n"
    ],
  },
];

const sousExercices4 = [
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour forcer le push d'une branche vers un dépôt distant.",
    fragments: ["git", "push", "--force", "<remote>", "<branche>", "--force-with-lease"],
    incorrectFragments: ["git", "push", "origin", "reset"],
    solution: [
      "git push --force <remote> <branche>",
      "git push --force-with-lease <remote> <branche>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git config --global user.email '<email>'?</strong>",
    options: [
      "Définit l'adresse e-mail pour les commits",
      "Change l'adresse e-mail sur le dépôt distant",
      "Crée un nouvel alias",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour afficher les commits en cours de rebase.",
    fragments: ["git", "rebase", "--continue", "--abort", "--skip"],
    incorrectFragments: ["git", "reset", "merge"],
    solution: [
      "git rebase --continue",
      "git rebase --abort",
      "git rebase --skip"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour supprimer un tag local.",
    fragments: ["git", "tag", "-d", "<tag>", "--delete"],
    incorrectFragments: ["git", "remove", "<tag>", "delete"],
    solution: [
      "git tag -d <tag>",
      "git tag --delete <tag>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git fetch'?</strong>",
    options: [
      "Télécharge les modifications à partir d'un dépôt distant sans les fusionner",
      "Fusionne les branches",
      "Supprime une branche",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour supprimer un commit de l'historique en utilisant 'revert'.",
    fragments: ["git", "revert", "<commit>", "--no-edit", "--no-commit"],
    incorrectFragments: ["git", "reset", "checkout"],
    solution: [
      "git revert <commit>",
      "git revert --no-edit <commit>",
      "git revert --no-commit <commit>"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour cloner un dépôt en utilisant le protocole SSH.",
    fragments: ["git", "clone", "ssh://<url_du_dépôt>", "<nom_du_dépôt>"],
    incorrectFragments: ["git", "copy", "pull", "fetch"],
    solution: [
      "git clone ssh://<url_du_dépôt>",
      "git clone ssh://<url_du_dépôt> <nom_du_dépôt>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git branch -m <ancien_nom> <nouveau_nom>'?</strong>",
    options: [
      "Renomme une branche",
      "Supprime une branche",
      "Affiche les branches existantes",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour afficher les branches locales et distantes.",
    fragments: ["git", "branch", "-a", "--list"],
    incorrectFragments: ["git", "branches", "show"],
    solution: [
      "git branch -a",
      "git branch --list"
    ],
  },
];

const sousExercices5 = [
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour appliquer les modifications stockées dans le stash sans les supprimer.",
    fragments: ["git", "stash", "apply", "drop", "pop"],
    incorrectFragments: ["git", "drop", "pop", "clear"],
    solution: [
      "git stash apply",
      "git stash pop" // Inclus pour montrer qu'il s'agit d'une autre option, même si elle supprime le stash.
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git clean -f'?</strong>",
    options: [
      "Supprime les fichiers non suivis dans le répertoire de travail",
      "Rétablit les fichiers supprimés",
      "Fusionne les branches",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour changer l'auteur d'un commit.",
    fragments: ["git", "commit", "--amend", "--author", "'<nom> <<email>>'", "--no-edit"],
    incorrectFragments: ["git", "reset", "checkout"],
    solution: [
      "git commit --amend --author '<nom> <<email>>'",
      "git commit --amend --author '<nom> <<email>>' --no-edit"
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour afficher la différence entre le dépôt local et le dépôt distant.",
    fragments: ["git", "diff", "<remote>/<branche>", "--stat", "--cached"],
    incorrectFragments: ["git", "compare", "status"],
    solution: [
      "git diff <remote>/<branche>",
      "git diff --stat <remote>/<branche>",
      "git diff --cached <remote>/<branche>"
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git bisect'?</strong>",
    options: [
      "Permet de trouver le commit qui a introduit un bogue en utilisant une recherche binaire",
      "Supprime les commits",
      "Affiche les différences entre deux branches",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour créer une branche à partir de HEAD.",
    fragments: ["git", "branch", "<nom_branche>", "HEAD", "checkout"],
    incorrectFragments: ["git", "checkout", "create"],
    solution: [
      "git branch <nom_branche> HEAD",
      "git checkout -b <nom_branche>" // Utilisation de checkout pour créer une branche à partir de HEAD.
    ],
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour supprimer tous les fichiers non suivis.",
    fragments: ["git", "clean", "-fd", "--dry-run"],
    incorrectFragments: ["git", "remove", "delete"],
    solution: [
      "git clean -fd",
      "git clean -fd --dry-run" // Pour tester ce que cela ferait sans supprimer réellement.
    ],
  },
  {
    type: "qcm",
    question: "<strong>Que fait la commande 'git log --stat'?</strong>",
    options: [
      "Affiche l'historique des commits avec des statistiques sur les fichiers modifiés",
      "Affiche uniquement les commits",
      "Supprime les commits",
    ],
    answer: 0,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour créer un nouvel alias Git nommé 'ci' pour 'commit'.",
    fragments: ["git", "config", "--global", "alias.ci", "commit", "--local"],
    incorrectFragments: ["git", "create", "alias", "set"],
    solution: [
      "git config --global alias.ci commit",
      "git config --local alias.ci commit" // Ajout pour créer un alias localement.
    ],
  },
];


const sousExercices6 = [
  {
    type: "qcm",
    question: "<strong>Quelle est la différence principale entre 'git fetch' et 'git pull'?</strong>",
    options: [
      "Les deux mettent à jour les branches locales et distantes.",
      "'git fetch' télécharge les changements sans les appliquer, alors que 'git pull' applique les changements.",
      "'git pull' télécharge les modifications sans les appliquer.",
    ],
    answer: 1,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour pousser votre branche locale 'feature' vers le dépôt distant 'origin'.",
    fragments: ["git", "push", "origin", "feature", "--set-upstream", "--force"],
    incorrectFragments: ["pull", "checkout", "reset"],
    solution: [
      "git push origin feature",
      "git push --set-upstream origin feature",
    ],
  },
  {
    type: "analyse",
    enonce: `Voici une séquence de commandes exécutées dans un dépôt local : <br />
    1. \`git add .\` <br />
    2. \`git commit -m 'Ajout des fichiers'\` <br />
    3. \`git reset --hard HEAD~1\` <br />
    4. \`git status\` <br />
    Que montre la commande \`git status\` après cette série d'actions ?`,
    options: [
      "Le dépôt est propre, aucun fichier n'est modifié.",
      "Les fichiers sont toujours en attente d'être commités.",
      "Les fichiers ajoutés dans \`git add .\` ont été perdus.",
      "Il y a un conflit de merge à résoudre.",
    ],
    answer: 2, // Les fichiers ajoutés ont été perdus avec le reset --hard
  },
  {
    type: "qcm",
    question: "<strong>Que fait exactement la commande 'git stash'?</strong>",
    options: [
      "Elle supprime toutes les modifications locales.",
      "Elle sauvegarde temporairement les modifications locales pour les appliquer plus tard.",
      "Elle applique les modifications d'une autre branche.",
    ],
    answer: 1,
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour créer une nouvelle branche appelée 'feature' et basculer dessus.",
    fragments: ["git", "checkout", "-b", "branch", "feature", "main"],
    incorrectFragments: ["merge", "reset", "pull"],
    solution: [
      "git checkout -b feature",
    ],
  },
  {
    type: "analyse",
    enonce: `Un utilisateur exécute les commandes suivantes dans un dépôt partagé : <br />
    1. \`git pull origin main\` <br />
    2. \`git add .\` <br />
    3. \`git commit -m 'Modification importante'\` <br />
    4. \`git push origin main\` <br />
    Cependant, après la commande \`git push\`, une erreur est affichée : 'rejected: non-fast-forward'. Quelle est la cause de cette erreur ?`,
    options: [
      "Il y a un conflit de merge non résolu.",
      "Des modifications ont été poussées par un autre utilisateur avant que les changements locaux ne soient poussés.",
      "Le dépôt local n'est pas connecté au dépôt distant.",
    ],
    answer: 1, // Un autre utilisateur a probablement poussé des modifications.
  },
  {
    type: "scenario",
    enonce: `Scénario : Vous travaillez sur une branche 'feature' et vous souhaitez intégrer les dernières modifications de 'main' sans créer de commit de fusion. Quelle série de commandes Git devriez-vous utiliser ? <br />
    
    Options : <br />
    a) \`git checkout main\` puis \`git merge feature\` <br /> 
    b) \`git checkout feature\` puis \`git pull origin main\` <br /> 
    c) \`git checkout feature\` puis \`git rebase main\`  <br />
    d) \`git merge main feature\``,
    options: [
      "a) et d)",
      "b) et c)",
      "c) uniquement",
      "d) uniquement",
    ],
    answer: 2, // c) uniquement
  },
  {
    type: "qcm",
    question: "<strong>Quelle commande permet de visualiser les différences entre deux branches?</strong>",
    options: [
      "git diff branch1 branch2",
      "git compare branch1 branch2",
      "git show branch1..branch2",
      "git log branch1 branch2",
    ],
    answer: 0, // git diff branch1 branch2
  },
  {
    type: "construction",
    enonce: "<strong>Complétez la commande</strong> pour réécrire l'historique des 3 derniers commits en éditant les messages de commit.",
    fragments: ["git", "rebase", "-i", "HEAD~", "3", "commit"],
    incorrectFragments: ["merge", "reset", "checkout"],
    solution: [
      "git rebase -i HEAD~3",
    ],
  },
  {
    type: "analyse",
    enonce: `Après avoir effectué un rebase interactif, vous constatez que certains commits sont manquants. Quelle commande pouvez-vous utiliser pour retrouver ces commits perdus ? <br />
    
    Options : <br />
    a) git reflog  <br />
    b) git log --all  <br />
    c) git fsck --lost-found <br />  
    d) git stash list`,
    options: [
      "a) et b)",
      "c) uniquement",
      "a) uniquement",
      "d) et a)",
    ],
    answer: 0, // a) et b)
  },
  {
    type: "scenario",
    enonce: `Scénario : Vous avez cloné un dépôt avec plusieurs remotes. Le remote par défaut est 'origin', mais vous souhaitez ajouter un second remote nommé 'backup' pointant vers une autre URL. Quelle commande utilisez-vous ? <br />
    
    Options : <br />
    a) git remote add backup <URL_backup>  <br />
    b) git remote set-url backup <URL_backup>  <br />
    c) git remote add origin <URL_backup>  <br />
    d) git remote rename origin backup`,
    options: [
      "a) uniquement",
      "b) et c)",
      "d) uniquement",
      "a) et b)",
    ],
    answer: 0, // a) uniquement
  },
];


const exercices = [
  {
    id: 1,
    title: "Exercice 1 : Démarrage avec Git",
    sousExercices: [...sousExercices1]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5), 
  },
  {
    id: 2,
    title: "Exercice 2 : Gestion des branches",
    sousExercices: [...sousExercices2]
      .sort(() => Math.random() - 0.5) 
      .slice(0, 5), 
  },
  {
    id: 3,
    title: "Exercice 3 : Historique et Réinitialisation",
    sousExercices: [...sousExercices3]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5), 
  },
  {
    id: 4,
    title: "Exercice 4 : Fusion et Rebasage",
    sousExercices: [...sousExercices4]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5), 
  },
  {
    id: 5,
    title: "Exercice 5 : Outils avancés Git",
    sousExercices: [...sousExercices5]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5), 
  },
  {
    id: 6,
    title: "Exerice 6 : Scénarios Avancés Git",
    sousExercices: [...sousExercices6]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5),
  }
];

export default exercices;


