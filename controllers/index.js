const express = require("express");
const router = express.Router();
const FS = require("../lib/fsDeal");
const users = new FS("../model/users.json");
const { Login, isLogged } = require("./authController");
const adminController = require("../controllers/adminController");

router.get("/", (req, res) => {
  const foundUsers = JSON.parse(users.read());
  res.render("login");
  console.log(foundUsers);
});

router.post("/login", Login, (req, res) => {
  const { role } = req.body;

  if (role === "admin") {
    res.redirect("/admin");
  } else if (role === "teacher") {
    res.redirect("/teacher");
  } else {
    res.redirect("/");
  }
});

router.use(isLogged);

router.get("/admin", (req, res) => {
  console.log(req.cookies.Token);
  res.render("admin");
});

router.get("/teacher", (req, res) => {
  res.render("teacher");
});

router
  .get("/admin/teachers", adminController.teachers)
  .get("/admin/students", adminController.students)
  .get("/admin/groups", adminController.groups)
  .get("/admin/courses", adminController.course)
  .post("/admin/teachers", adminController.addTeacher)
  .post("/admin/students", adminController.addStudent)
  .post("/admin/groups", adminController.addGroup)
  .post("/admin/courses", adminController.addCourse)
  .get("/teacher/students", adminController.teacher__students)
  .get("/teacher/groups", adminController.teacher__groups)
  .post("/teacher/students", adminController.teacherAddStudent)
  .post("/teacher/groups", adminController.teacherAddGroup);

module.exports = router;
