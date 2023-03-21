const express = require("express");

const app = express();

app.use(express.static("public_taskify"));

module.exports = {
  app,
};
