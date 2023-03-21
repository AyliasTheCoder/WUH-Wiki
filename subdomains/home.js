const express = require("express");

const app = express();

app.use(express.static("public_home"));

module.exports = {
  app,
};
