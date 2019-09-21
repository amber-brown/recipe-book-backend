module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: "recipe-book"
    },
    binary: {
      version: "3.6.10",
      skipMD5: true
    },
    autoStart: false
  }
};
