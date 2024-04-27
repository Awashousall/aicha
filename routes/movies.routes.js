module.exports = app => {
    app.use("/api/movies0", router);
  };
  const movies0 = require("../controllers/movies.controller.js");
  let router = require("express").Router();
  
    // Routes pour la gestion des films
    router.get("/movies", movies0.findAllMovies);
    router.post("/movies", movies0.createMovie);
    router.put("/movies/:id", movies0.updateMovie);
    router.delete("/movies/:id", movies0.deleteMovie);
  
