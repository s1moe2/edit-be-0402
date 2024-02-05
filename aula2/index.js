const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("[request]", req.method, req.url);
  next();
  console.log("[response]", req.method, req.url, res.statusCode);
});

app.post("/tracking", (req, res) => {
  res.status(200).send("package is on the way");
});

app.get("/tracking", (req, res) => {
  res.status(200).send("package is on the way");
});

app.listen(3000, () => {
  console.log("server is running (express)");
});
