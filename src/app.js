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

module.exports = app;
