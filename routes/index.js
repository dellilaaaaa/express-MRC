const express = require("express");
const route = express.Router();

const routeUser = require("./userRouter");
const routeBook = require("./bookRouter")

route.get("/", (req, res) => {
  res.json("ini halaman utama");
});

route.use("/user", routeUser);

route.use("/books", routeBook)

module.exports = route