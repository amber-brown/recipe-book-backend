const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Recipe = require("./models/recipe");

const app = express();
app.use(cors());

app.get("/recipes", (req, res) => {
  Recipe.find((err, recipes) => {
    if (err) throw new Error("Cannot find recipes");
    res.json(recipes);
  });
});

mongoose.connect("mongodb://localhost/recipe-book", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  app.listen(4000);
});
