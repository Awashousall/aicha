const movies = require("../movies.json");

// Récupérer tous les films depuis la base de données.
exports.findAllMovies = (req, res) => {
  res.status(200).json(movies);
};

// routes/movies.routes.js

const express = require("express");
const router = express.Router();
const Movie = require("../models/movies.model");

const db = require("../models");
const Movie = db.movies;

// Créer et enregistrer un nouveau film
exports.createMovie = (req, res) => {
  // Valider la requête
  if (!req.body.title || !req.body.release || !req.body.genre || !req.body.synopsis || !req.body.director || !req.body.actors) {
    res.status(400).json({ message: "Tous les champs doivent être remplis !" });
    return;
  }

  // Créer un nouveau film
  const movie = new Movie({
    title: req.body.title,
    release: req.body.release,
    genre: req.body.genre,
    synopsis: req.body.synopsis,
    director: req.body.director,
    actors: req.body.actors
  });

  // Enregistrer le film dans la base de données
  movie.save()
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message || "Une erreur s'est produite lors de la création du film." });
    });
};


// Mettre à jour un film en fonction de l'ID dans la requête
exports.updateMovie = (req, res) => {
  const id_movie = req.params.id;
  
  Movie.findByIdAndUpdate(id_movie, req.body, { new: true })
    .then(movie => {
      if (!movie) {
        return res.status(404).json({ message: `Film avec l'ID ${id_movie} non trouvé.` });
      }
      res.status(200).json(movie);
    })
    .catch(err => {
      res.status(500).json({ message: `Erreur lors de la mise à jour du film avec l'ID ${id_movie}.` });
    });

    // Supprimer un film avec l'ID spécifié dans la requête
exports.deleteMovie = (req, res) => {
  const id_movie = req.params.id;

  Movie.findByIdAndDelete(id_movie)
    .then(movie => {
      if (!movie) {
        return res.status(404).json({ message: `Film avec l'ID ${id_movie} non trouvé.` });
      }
      res.status(200).json({ message: "Film supprimé avec succès." });
    })
    .catch(err => {
      res.status(500).json({ message: `Erreur lors de la suppression du film avec l'ID ${id_movie}.` });
    });
};
};