module.exports = app => {
const express = require("express");
const router = express.Router(); // Initialisation du routeur express

const moviesController = require("../controllers/movies.controller");

// Routes pour la gestion des films
router.get("/movies", moviesController.findAllMovies);
router.post("/movies", moviesController.addMovie);
router.put("/movies/:id", moviesController.updateMovie);
router.delete("/movies/:id", moviesController.deleteMovie);
};