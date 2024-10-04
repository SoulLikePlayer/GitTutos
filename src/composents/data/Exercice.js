const exercices = [
  {
    id: 1,
    enonce: "Créez un projet Git, faites un `git add .` et un `git commit -m \"Votre message ici\"`.",
    maxCommands: 3,
    commandes: [
      "git init",
      "git add .",
      "git commit -m \"Mon premier commit\"",
    ],
  },
  {
    id: 2,
    enonce: "Ajoutez un nouveau fichier, faites un `git add <fichier>` et un `git commit -m \"Ajout d'un fichier\"`.",
    maxCommands: 3,
    commandes: [
      "touch nouveau_fichier.txt", 
      "git add nouveau_fichier.txt",
      "git commit -m \"Ajout d'un fichier\"",
    ],
  },
];

export default exercices;
