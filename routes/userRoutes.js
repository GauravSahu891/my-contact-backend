const express = require("express");
const { registerUser, loginUser, CurrentUser} = require("../controllers/userController");

const router = express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/current",CurrentUser);

module.exports = router;