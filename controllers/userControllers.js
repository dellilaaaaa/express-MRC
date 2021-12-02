const dataUser = require("../models/user");

module.exports = {
  getAllUser: (req, res) => {
    res.json(dataUser);
  },

  getUserByUsername: (req, res) => {
    const { username } = req.params;

    let user = dataUser.find((item) => item.username == username);
    if (user) {
      res.json(user);
    } else {
      res.json("user not found");
    }
  },

  addUser: (req, res) => {
    let user = req.body;

    if (dataUser.find((item) => item.username === user.username)) {
      res.json("user already exist");
    } else if (user) {
      dataUser.push(user);
      res.json(user);
    }
  },

  deleteUser: (req, res) => {
    const { username } = req.params;

    let user = dataUser.find((item) => item.username == username);
    if (user) {
      dataUser.splice(dataUser.indexOf(user), 1);
      res.json("user has been deleted");
    } else {
      res.json("user not found");
    }
  },

  editUser: (req, res) => {
    const { username } = req.params;
    let user = dataUser.find((item) => item.username == username);
    if (user) {
      let update = {
        id: req.body.id,
        name: req.body.name,
        username: user.username,
        email: req.body.email,
        password: req.body.password,
      };
      dataUser.splice(dataUser.indexOf(user), 1, update);
      res.json("user has been updated");
    }
  },
};
