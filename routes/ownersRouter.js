const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model.js");

if ((process.env.NODE_ENV = "development")) {
  router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res.status(500).send("Only one Onwer Allowed");
    } 

    const {fullname, email, password} = req.body

    const createdOwner = await ownerModel.create({
        fullname,
        email,
        password
    })

    res.send(createdOwner)
  });
}


router.get('/adminpanel', (req , res)=>{
  res.render('createproducts')
})
module.exports = router;
