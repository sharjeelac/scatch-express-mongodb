const express = require("express");
const router = express.Router();
const userModel = require("../models/user-Model.js");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateToken = require('../utils/generateToken.js')


router.get("/test", (req, res) => {
  res.send("User Route Working");
});

router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const newUser = await userModel.create({
      fullname,
      email,
      password : hash,
    });

    const token = generateToken(newUser)
    console.log(token)
    res.cookie('token', token)
    res.send('User Created')
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
