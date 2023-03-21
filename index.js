const express = require("express");
const vhost = require("vhost");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../taskify_save");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

express()
  .use(vhost("wuh.localhost", require("./subdomains/wuh.js").app))
  .use(vhost("wuh.aylias.me", require("./subdomains/wuh.js").app))
  .use(vhost("wiki.wakeuphatemusic.com", require("./subdomains/wuh.js").app))
  .listen(80);
