const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  products: {
    type: Array,
    default: [],
  },
  picture: db,
});


module.exports = mongoose.model('Owner', ownerSchema)