const userModel = require("../models/user-Model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken.js");

module.exports.userRegister = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const checkUser = await userModel.findOne({ email: email });
    if (checkUser) return res.status(401).send("Email have already an account");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      fullname,
      email,
      password: hash,
    });

    const token = generateToken(newUser);

    res.send("User Created");
  } catch (error) {
    res.send(error.message);
  }
};

module.exports.userLogin = async (req, res) => {
  const { fullname, email, password } = req.body;
  const checkuser = await userModel.findOne({ email: email });

  if (!checkuser) return res.send("email or password is incorrect");

  const checkPassword = await bcrypt.compare(password, checkuser.password);
  if (!checkPassword) return res.send("email or password is incorrect");

  const token = generateToken(checkuser)
  res.cookie('token', token)

  res.send("You are loggind");
};
