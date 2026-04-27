const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "node-demo",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Node.js demo"
  });
});

module.exports = app;
