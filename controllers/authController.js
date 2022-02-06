const FS = require("../lib/fsDeal");
const users = new FS("../model/users.json");
module.exports = {
  Login: (req, res) => {
    try {
      const { name, password } = req.body;

      const allUsers = JSON.parse(users.read());
      foundUser = allUsers.find((e) => e.name == name, e.password == password);

      if (!foundUser) {
        res.status(404).send({
          message: "User not found",
          status: 404,
        });
      }
      req.body.role = foundUser.role;
      console.log(foundUser);
    } catch (err) {
      console.log(err);
    }
  },
};
