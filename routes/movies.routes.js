module.exports = app => {
    app.use("/api/movies", router);
  };
  const moviesController = require("../controllers/movies.controller.js");
  let router = require("express").Router();
  
    // Routes pour la gestion des films
    router.get("/", moviesController.findAllMovies);
    router.post("/", moviesController.addMovie);
    router.put("/:id", moviesController.updateMovie);
    router.delete("/:id", moviesController.deleteMovie);
  
