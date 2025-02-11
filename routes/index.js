const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggined.js");
const productModel = require("../models/product-Model.js");
const userModel = require("../models/user-Model.js");

router.get("/", (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, loggedin: false });
});

router.get("/shop", isLoggedIn, async (req, res) => {
  const products = await productModel.find();
  const success = req.flash("success");
  res.render("shop", { products, success });
});

router.get("/addtocart/:id", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  user.cart.push(req.params.id);
  await user.save();
  req.flash("success", "Added to cart");
  res.redirect("/users/shop");
});

router.get("/cart", isLoggedIn, (req, res) => {
  res.render("cart");
});
module.exports = router;
