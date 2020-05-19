const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const userSchema = require("../models/user");

mongoose.set("useCreateIndex", true);

// *******   Signup  *******
router.post("/signup", (req, res) => {
  let user = new userSchema();
  const { email, password } = req.body;

  user.email = email;
  user.password = password;

  user.save(err => {
    if (err) {
      return res.status(400).send("Confict- this email already has an account");
    }

    return res.json({
      success: true
    });
  });
});

// *******   Login  *******
router.post("/", (req, res) => {
  const { email, password } = req.body;
  userSchema.findOne({ email: email }, (err, user) => {
    if (err) {
      res.status(400).send(err);
    }
    if (!user) {
      res.status(400).send(err);
    }
    if (password !== user.password) {
      res.status(400).send("Password conflict");
    } else {
      res.status(200).send({ message: "success" });
    }
  });
});

module.exports = router;
