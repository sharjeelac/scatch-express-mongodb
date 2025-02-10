const jwt = require("jsonwebtoken");
const userModel = require("../models/user-Model.js");

const isLoggedIn = async (req, res, next) => {
  try {
    // Check if token exists
    if (!req.cookies.token) {
      req.flash("error", "You need to log in first");
      return res.redirect("/");
    }

    // Verify token
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

    // Find user without password field
    const user = await userModel.findOne({ email: decoded.email }).select("-password");

    if (!user) {
      req.flash("error", "User not found");
      return res.redirect("/");
    }

    // Attach user to request object
    req.user = user;

    next();
  } catch (error) {
    req.flash("error", "Invalid or expired token. Please log in again.");
    return res.redirect("/");
  }
};

module.exports = isLoggedIn;
