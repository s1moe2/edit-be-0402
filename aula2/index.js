const express = require("express");
const app = express();

app.use(express.json());

const posts = [
  {
    id: 1,
    title: "express tutotial",
    content: "lorem ipsum",
    date: new Date("2020-04-23"),
    tags: ["tag1", "tag2"],
  },
];

app.use((req, res, next) => {
  console.log("[request]", req.method, req.url);
  next();
  console.log("[response]", req.method, req.url, res.statusCode);
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.post("/posts", (req, res) => {
  // validations
  if (!req.body.title || req.body.title.length < 5) {
    return res.status(400).json({
      error: "invalid title",
    });
  }

  // add to database
  posts.push(req.body);

  // response
  res.status(201).json(posts[posts.length - 1]);
});

app.listen(3000, () => {
  console.log("server is running (express)");
});
