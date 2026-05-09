const express = require("express");
const healthRoute = require("./routes/health.route");

const app = express();
app.use(express.json());

app.use("/api/v1/health", healthRoute);

app.get("/", (req, res) => {
  res.send("🚀 Node DevOps API Running Successfully!");
});

module.exports = app;