const seeder = require("mongoose-seed");
const CONFIG = require("../config");
const data = require("./data");

// Connect to MongoDB via Mongoose
seeder.connect(CONFIG.MONGO_URI, function() {
  // Load Mongoose models
  seeder.loadModels(["src/models/recipe.js"]);

  // Clear specified collections
  seeder.clearModels(["recipes"], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});
