const User = require("../../models/user");

async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
}

module.exports = {
  getUsers: getUsers
};