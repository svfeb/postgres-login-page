const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const payApi = require("./pay");

const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(payApi);

module.exports = router;
