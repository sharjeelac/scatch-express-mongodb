const userModel = require("../models/user-Model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken.js");
const productModel = require("../models/product-Model.js");

module.exports.userRegister = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const checkUser = await userModel.findOne({ email: email });
    if (checkUser) {
      req.flash("error", "email already register");
      return res.redirect("/");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      fullname,
      email,
      password: hash,
    });

    const token = generateToken(newUser);
    res.cookie("token", token);

    res.redirect('/shop')
  } catch (error) {
    res.send(error.message);
  }
};

module.exports.userLogin = async (req, res) => {
  const { fullname, email, password } = req.body;
  const checkuser = await userModel.findOne({ email: email });

  if (!checkuser) {
    req.flash("error", "invalid Credential");
    return res.redirect("/");
  }

  const checkPassword = await bcrypt.compare(password, checkuser.password);
  if (!checkPassword) {
    req.flash("error", "invalid Credential");
    return res.redirect("/");
  }

  const token = generateToken(checkuser);
  res.cookie("token", token);

  res.redirect('/shop')
};

module.exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};
