const express = require("express");
const router = express.Router();
const FS = require("../lib/fsDeal");
const users = new FS("../model/users.json");
const Login = require("./authController");

router.get("/", (req, res) => {
  const foundUsers = JSON.parse(users.read());
  res.render("login");
  console.log(foundUsers);
});

router.post("/");

module.exports = router;
