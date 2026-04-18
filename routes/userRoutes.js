const express = require("express");
const UserRouter = express.Router();

module.exports = UserRouter;
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];



UserRouter.get("/", (req, res) => {
  res.json(users);
});
UserRouter.get("/:id", (req, res) => {
  res.json({ message: `User with ID ${req.params.id} details` });
});
UserRouter.post("/", (req, res) => {
  res.json({ message: "users created" });
});
UserRouter.put("/:id", (req, res) => {
  res.json({ message: `User updated` });
});
UserRouter.delete("/:id", (req, res) => {
  res.json({ message: `User deleted` });
});
