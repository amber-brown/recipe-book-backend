const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [Map],
  method: [String],
  time: Map,
  serves: Number,
  self_url: String,
  image: String
});

module.exports = mongoose.model("recipes", recipeSchema);
