const express = require("express");
const vhost = require("vhost");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../taskify_save");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

express()
  .use(vhost("taskify.*", require("./subdomains/taskify.js").app))
  .use(vhost("home.*", require("./subdomains/home.js").app))
  .use(vhost("wuh.*", require("./subdomains/wuh.js").app))
  .listen(80);
