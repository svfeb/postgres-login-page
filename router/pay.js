const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/pay",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("You have a total of: 2400$");
  }
);
module.exports = router;
