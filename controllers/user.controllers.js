const userModel = require("../models/user-Model.js");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generateToken = require('../utils/generateToken.js')


module.exports.userRegister = async (req, res) => {
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

      res.send('User Created')
    } catch (error) {
      res.send(error.message);
    }
  }