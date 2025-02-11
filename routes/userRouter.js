const express = require("express");
const router = express.Router();
const { userRegister, userLogin, logout } = require("../controllers/user.controllers.js");

router.get("/test", (req, res) => {
  res.send("User Route Working");
});

router.post("/register", userRegister);
router.post('/login', userLogin)
router.get('/logout', logout)

module.exports = router;
