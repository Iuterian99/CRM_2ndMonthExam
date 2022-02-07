const customFs = require("../lib/fsDeal");
const users = new customFs("../model/users.json");

class adminController {
  async redirect(_, res) {
    try {
      res.redirect("/admin/teachers");
    } catch (error) {
      console.log(error);
    }
  }
  async teachers(_, res) {
    try {
      const teachers = JSON.parse(users.read()).filter(
        (item) => item.role === "teacher"
      );
      res.render("nestedEJS/teachers.ejs", { teachers });
    } catch (error) {
      console.log(error);
    }
  }
  async students(_, res) {
    try {
      const students = JSON.parse(users.read()).filter(
        (item) => item.role === "student"
      );
      res.render("nestedEJS/students.ejs", { students });
    } catch (error) {
      console.log(error);
    }
  }
  async course(_, res) {
    try {
      res.render("nestedEJS/courses.ejs");
    } catch (error) {
      console.log(error);
    }
  }
  async groups(_, res) {
    try {
      res.render("nestedEJS/groups.ejs");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new adminController();
