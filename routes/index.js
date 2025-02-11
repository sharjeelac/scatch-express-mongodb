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

router.get("/cart", isLoggedIn, async (req, res) => {
  const user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");

  console.log("User Cart:", user.cart); // Check karne ke liye
  console.log(
    "Discount Values:",
    user.cart.map((item) => item.discount)
  ); // Yeh check karega ki discount exist karta hai ya nahi

  const bill = user.cart.reduce((total, item) => {
    return total + (Number(item.price) - Number(item.discount) + 20);
  }, 0);

  let totalDiscount = user.cart.reduce(
    (acc, item) => acc + (item.discount || 0),
    0
  ); // Ensure discount is not undefined

  res.render("cart", {
    user: user,
    bill: bill,
    discount: totalDiscount,
  });
});

module.exports = router;
