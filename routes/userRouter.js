const express = require("express");
const router = express.Router();
const {
  userRegister,
  userLogin,
  logout,
} = require("../controllers/user.controllers.js");
const isLoggedIn = require("../middlewares/isLoggined.js");
const productModel = require("../models/product-Model.js");

router.get("/test", (req, res) => {
  res.send("User Route Working");
});

router.get("/shop", isLoggedIn, async (req, res) => {
  const products = await productModel.find();
  const success = req.flash("success");
  res.render("shop", { products, success });
});

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/logout", logout);

module.exports = router;
