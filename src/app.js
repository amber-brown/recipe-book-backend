const express = require("express");
const cors = require("cors");

const Recipe = require("./models/recipe");

const app = express();
app.use(cors());

/***
  GET /recipes
  Returns all recipe JSON objects
***/
app.get("/recipes", (req, res) => {
  Recipe.find((err, recipes) => {
    if (err) throw new Error("Cannot find recipes");
    res.json(recipes);
  });
});

/***
  GET /recipes/:recipeId
  Params:
    recipeId: String
  Returns a single recipe JSON object by ID
***/
app.get("/recipes/:recipeId", (req, res) => {
  const id = { _id: req.params.recipeId };
  Recipe.findOne(id, (err, recipe) => {
    if (err) throw new Error("Cannot get recipe details");
    res.json(recipe);
  });
});

module.exports = app;
