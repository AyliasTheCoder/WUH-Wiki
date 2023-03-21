const express = require("express");

const app = express();

app.use(express.static("public_wuh"));

module.exports = {
  app,
};
