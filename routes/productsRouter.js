const express = require("express");
const router = express.Router();
const productModel = require("../models/product-Model");
const upload = require("../config/multer.config");

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    console.log("Received Data", req.body)

    await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });

    req.flash("success", "product created successfully");
    res.redirect("/owners/adminpanel");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
