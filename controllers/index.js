const express = require("express");
const router = express.Router();
const FS = require("../lib/fsDeal");
const users = new FS("../model/users.json");
const { Login, isLogged } = require("./authController");

router.get("/", (req, res) => {
  const foundUsers = JSON.parse(users.read());
  res.render("login");
  console.log(foundUsers);
});

router.use(isLogged);

router.post("/login", Login, (req, res) => {
  const { role } = req.body;

  if (role == "admin") {
    res.redirect("/admin");
  } else if (role == "teacher") {
    res.redirect("/teacher");
  } else {
    res.status(401).send({
      message: "Unothorised user",
      status: "404 Not Found",
    });
  }
});

router.get("/admin", (req, res) => {
  console.log(req.cookies.Token);
  res.render("admin");
});

router.get("/teacher", (req, res) => {
  res.render("teacher");
});

router.get("/admin/teachers", (req, res) => {
  res.render("nestedEJS/teachers.ejs");
});

module.exports = router;
