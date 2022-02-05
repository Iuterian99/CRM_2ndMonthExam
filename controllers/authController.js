const FS = require("fs");
const users = new FS("../lib/fsDeal");
module.exports = {
  Login: (req, res) => {
    try {
      const { name, password } = req.body;

      users.push({ id: users.length + 1, name, password });

      console.log(users);
    } catch (err) {
      console.log(err);
    }
  },
};
