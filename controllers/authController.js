const FS = require("fs");
const users = new FS("../lib/fsDeal");
module.exports = {
  Login: (req, res) => {
    try {
      //
    } catch (err) {
      console.log(err);
    }
  },
  Register: (req, res) => {
    try {
      const { name, password } = req.body;
      console.log(name, password, users);
    } catch (err) {
      console.log(err);
    }
  },
};
