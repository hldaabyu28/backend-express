// import express
const express = require("express");

// init express router
const router = express.Router();

// import register controller
const registerController = require("../controllers/RegisterController");

// import login controller
const loginController = require("../controllers/LoginController");

// import validator register
const { validateRegister, validateLogin } = require("../utils/validators/auth");

// define router for register
router.post('/register', validateRegister, registerController.register);

// define router for login
router.post('/login', validateLogin,loginController.login);

// export router
module.exports = router