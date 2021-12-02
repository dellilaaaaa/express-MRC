const express = require("express");
const route = express.Router();
const {
  getAllUser,
  getUserByUsername,
  addUser,
  deleteUser,
  editUser,
} = require("../controllers/userControllers");
const { mwEditUser, mwDeleteUser } = require("../middleware/middleware");

route.get("/", getAllUser);

route.get("/:username", getUserByUsername);

route.post("/", addUser);

route.delete("/:username", mwDeleteUser, deleteUser);

route.put("/:username", mwEditUser, editUser);

module.exports = route