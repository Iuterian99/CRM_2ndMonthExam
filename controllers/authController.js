const FS = require("../lib/fsDeal");
const { signUser, verifyUser } = require("../lib/jwt");
const users = new FS("../model/users.json");
module.exports = {
  Login: (req, res, next) => {
    try {
      const { name, password } = req.body;

      const allUsers = JSON.parse(users.read());
      foundUser = allUsers.find(
        (e) => e.name == name && e.password == password
      );
      const token = signUser({ name, password });
      res.cookie("Token", token);

      if (!foundUser) {
        return res.redirect("/");
      }
      req.body.role = foundUser.role;
      next();
    } catch (err) {
      console.log(err);
    }
  },

  isLogged: (req, res, next) => {
    const userToken = req.cookies.Token;

    if (!userToken) {
      return res.redirect("/");
    }
    next();
  },
};
