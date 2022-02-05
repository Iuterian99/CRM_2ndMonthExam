const { verify, sign } = require("jsonwebtoken");

const signUser = (payload) => sign(payload, SEKRET_KEY);
const verifyUser = (payload) => verify(payload, SEKRET_KEY);

module.exports = {
  signUser,
  verifyUser,
};
