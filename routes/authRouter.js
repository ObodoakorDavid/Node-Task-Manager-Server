/** @format */

const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  authHome,
} = require("../controllers/authController");

router.get("/", authHome);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
