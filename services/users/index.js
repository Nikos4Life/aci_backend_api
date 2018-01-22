import User from '../../models/user.model';

async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
}

async function createUser(req, res) {
  const newUser = new User({
    username: req.body.username
  });
  try {
    let user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.json(error);
  }
}

module.exports = {
  getUsers: getUsers,
  createUser: createUser
};