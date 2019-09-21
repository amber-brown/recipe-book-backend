const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  app.listen(4000);
});
