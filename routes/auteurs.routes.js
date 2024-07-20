const express = require("express");
const router = express.Router();
const auteurs = require("../controllers/auteurs.controller");


router.get("/", auteurs.findAllAuteurs);

module.exports = router;
