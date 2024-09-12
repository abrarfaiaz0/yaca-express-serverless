const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/signup", (req, res) => {
  res.json({ test: 2 });
});

app.get("/users", (req, res) => {
  res.json({ test: 2 });
});

app.get("/", (req, res) => {
  res.json({ test: 1 });
});

module.exports.handler = serverless(app);
