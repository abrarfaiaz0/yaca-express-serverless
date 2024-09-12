const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/", (req, res) => {
  res.json({ test: 1 });
});

app.get("/users", (req, res) => {
  res.json({ test: 2 });
});

module.exports.handler = serverless(app);
