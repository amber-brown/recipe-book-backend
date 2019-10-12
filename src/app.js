const express = require("express");
const cors = require("cors");

const Recipe = require("./models/recipe");

const app = express();
app.use(cors());

app.get("/recipes", (req, res) => {
  Recipe.find((err, recipes) => {
    if (err) throw new Error("Cannot find recipes");
    res.json(recipes);
  });
});

app.get("/recipes/:recipeId", (req, res) => {
  const id = { _id: req.params.recipeId };
  Recipe.findOne(id, (err, recipe) => {
    if (err) throw new Error("Cannot get recipe details");
    res.json(recipe);
  });
});

module.exports = app;
