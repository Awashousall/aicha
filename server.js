const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 4002;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à la base de données MongoDB
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connecté à la base de données '${db.url}' !`);
  })
  .catch(err => {
    console.error(`Impossible de se connecter à la base de données '${db.url}' !`, err);
    process.exit();
  });

// Middleware de logging
app.use(logger("dev"));

// Routes
const auteursRoutes = require("./routes/auteurs.routes");
app.use("/api/auteurs", auteursRoutes);

// Route racine
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue dans l'application de gestion des auteurs." });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur Express écoute sur le port ${PORT}.`);
});
