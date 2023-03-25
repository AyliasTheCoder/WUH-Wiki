const express = require("express");
const vhost = require("vhost");
const fs = require("fs");
const path = require("path");

setTimeout(() => {
  process.exit(0);
}, 10 * 60 * 1000);

express()
  .use(vhost("wuh.localhost", require("./subdomains/wuh.js").app))
  .use(vhost("wuh.aylias.me", require("./subdomains/wuh.js").app))
  .use(vhost("wiki.wakeuphatemusic.com", require("./subdomains/wuh.js").app))
  .listen(80);
