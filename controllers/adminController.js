const customFs = require("../lib/fsDeal");
const users = new customFs("../model/users.json");
const allGroups = new customFs("../model/group.json");
const allCourses = new customFs("../model/courses.json");
const hw = new customFs("../model/homework.json");

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
      const courses = JSON.parse(allCourses.read());
      res.render("nestedEJS/courses.ejs", { courses });
    } catch (error) {
      console.log(error);
    }
  }
  async groups(_, res) {
    try {
      const groups = JSON.parse(allGroups.read());
      res.render("nestedEJS/groups.ejs", { groups });
    } catch (error) {
      console.log(error);
    }
  }
  async addTeacher(req, res) {
    try {
      const { name, tel, course, gender, group } = req.body;
      const allUsers = JSON.parse(users.read());
      allUsers.push({
        id: allUsers.length + 1,
        name,
        password: tel,
        course,
        gender,
        group,
        role: "teacher",
      });
      users.write(allUsers);
      res.redirect("/admin/teachers");
    } catch (err) {
      console.log(err);
    }
  }
  async addStudent(req, res) {
    try {
      const { name, tel, course, gender, group } = req.body;
      const allUsers = JSON.parse(users.read());
      allUsers.push({
        id: allUsers.length + 1,
        name,
        password: tel,
        course,
        gender,
        group,
        role: "student",
      });
      users.write(allUsers);
      res.redirect("/admin/students");
    } catch (err) {
      console.log(err);
    }
  }
  async addGroup(req, res) {
    try {
      const { name } = req.body;
      const groups = JSON.parse(allGroups.read());
      groups.push({
        id: groups.length + 1,
        name,
      });
      allGroups.write(groups);
      res.redirect("/admin/groups");
    } catch (err) {
      console.log(err);
    }
  }
  async addCourse(req, res) {
    try {
      const { name } = req.body;
      const courses = JSON.parse(allCourses.read());
      courses.push({
        id: courses.length + 1,
        name,
      });
      allCourses.write(courses);
      res.redirect("/admin/courses");
    } catch (err) {
      console.log(err);
    }
  }
  async teacher__students(_, res) {
    try {
      const students = JSON.parse(users.read()).filter(
        (item) => item.role === "student"
      );
      res.render("nestedEJS/teacherStudents.ejs", { students });
    } catch (error) {
      console.log(error);
    }
  }
  async teacher__groups(_, res) {
    try {
      const groups = JSON.parse(allGroups.read());
      res.render("nestedEJS/teacherGroups.ejs", { groups });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new adminController();
