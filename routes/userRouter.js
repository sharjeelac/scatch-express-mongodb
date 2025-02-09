const express = require("express");
const router = express.Router();
const { userRegister } = require("../controllers/user.controllers.js");

router.get("/test", (req, res) => {
  res.send("User Route Working");
});

router.post("/register", userRegister);

module.exports = router;
