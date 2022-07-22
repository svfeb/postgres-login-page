const express = require("express");
const User = require("../models/model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error:", err);
    }
  );
  if (!userWithEmail)
    return res.json({ message: "Email or password does not match" });

  if (userWithEmail.password !== password)
    return res.json({ message: "Email or password does not match" });

  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
    // `${process.env.JWT_SECRET_KEY}`
  );
  res.json({ message: "welcone back!", token: jwtToken });
});

module.exports = router;
