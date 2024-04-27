module.exports = app => {
    app.use("/api/movies", router);
  };
  const moviesController = require("../controllers/movies.controller.js");
  let router = require("express").Router();
  
    // Routes pour la gestion des films
    router.get("/movies", moviesController.findAllMovies);
    router.post("/movies", moviesController.addMovie);
    router.put("/movies/:id", moviesController.updateMovie);
    router.delete("/movies/:id", moviesController.deleteMovie);
  
