// controllers/auteurs.controller.js

const db = require("../models");
const Auteur = db.auteurs;

// Récupérer tous les auteurs depuis la base de données
exports.findAllAuteurs = (req, res) => {
  Auteur.find({}, 'authors')  // Sélectionner uniquement le champ 'authors'
    .then(auteurs => {
      // Mappez chaque document pour extraire uniquement les noms d'auteurs
      const nomsAuteurs = auteurs.flatMap(auteur => auteur.authors);
      const htmlResponse = `
        <html>
          <head>
            <title>Liste des Auteurs</title>
            <style>
              body { font-family: Arial, sans-serif; }
              ul { padding-left: 20px; }
            </style>
          </head>
          <body>
            <h1>Liste des Auteurs</h1>
            <ul>
              ${nomsAuteurs.map(auteur => `<li>${auteur}</li>`).join('')}
            </ul>
          </body>
        </html>
      `;
      res.set('Content-Type', 'text/html');
      res.status(200).send(htmlResponse);
    })
    .catch(err => {
      res.status(500).json({ message: err.message || "Une erreur s'est produite lors de la récupération des auteurs." });
    });
};
