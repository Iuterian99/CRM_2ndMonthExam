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
      console.log(name, password);
    } catch (err) {
      console.log(err);
    }
  },
};
