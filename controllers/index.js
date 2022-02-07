const express = require("express");
const router = express.Router();
const FS = require("../lib/fsDeal");
const users = new FS("../model/users.json");
const { Login, isLogged } = require("./authController");
const { verifyUser } = require("../lib/jwt");
const { SECRET_KEY } = require("../config");

router.get("/", (req, res) => {
  const foundUsers = JSON.parse(users.read());
  res.render("login");
  console.log(foundUsers);
});

router.use(isLogged);

router.post("/login", Login, (req, res) => {
  const { role } = req.body;
  const hasLogin = verifyUser(userToken, SECRET_KEY);

  if (req.name == hasLogin.name && req.password == hasLogin.password) {
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
  } else {
    res.redirect("/login");
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
