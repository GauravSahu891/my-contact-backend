const asyncHandler = require("express-async-handler");

// @desc Register a user
// route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req,res) => {
    res.json({message: "Register the user"});
});

// @desc login a user
// route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req,res) => {
    res.json({message: "Login user"});
});

// @desc Current User Info
// route POST /api/users/Current
// @access private
const CurrentUser = asyncHandler(async (req,res) => {
    res.json({message: "Current user information"}); 
});

module.exports = { registerUser, loginUser, CurrentUser};