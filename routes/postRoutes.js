const express = require("express");
const PostRouter = express.Router();

module.exports = PostRouter;

const posts = [
  { id: 1, title: "Welcome to Express Router" },
  { id: 2, title: "Building RESTful APIs with Express" },
];
PostRouter.get("/", (req, res) => {
  res.json(posts);
});
PostRouter.get("/:id", (req, res) => {
  res.json({ message: `Post with ID ${req.params.id} details` });
});
PostRouter.post("/", (req, res) => {
  res.json({ message: `Post Created` });
});
PostRouter.put("/:id", (req, res) => {
  res.json({ message: `Post Updated` });
});

PostRouter.delete("/:id", (req, res) => {
  res.json({ message: `Post Deleted` });
});
