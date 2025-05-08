// import express
const express = require("express");

// init express router
const router = express.Router();

// import register controller
const RegisterController = require("../controllers/RegisterController");

// import validator register
const { validateRegister } = require("../utils/validators/auth");

// define router for register
router.post('/register', validateRegister, RegisterController.register);

// export router
module.exports = router