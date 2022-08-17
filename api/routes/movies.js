const express = require("express");
const moviesRouter = express.Router();
const movieController = require("../controllers/movies.controller")

moviesRouter.get("/allUserMovies", movieController.allUserMovies)
moviesRouter.post("/addMovie", movieController.addMovie)
moviesRouter.put("/removeMovie", movieController.deleteMovie)


module.exports = moviesRouter