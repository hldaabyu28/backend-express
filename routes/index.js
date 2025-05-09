// import express
const express = require("express");

// init express router
const router = express.Router();

// import verifiytoken
const verifyToken = require("../middlewares/auth");

// import register controller
const registerController = require("../controllers/RegisterController");

// import login controller
const loginController = require("../controllers/LoginController");

// import user controller
const userController = require("../controllers/UserController");

// import validator register
const { validateRegister, validateLogin } = require("../utils/validators/auth");

//import validate user
const { validateUser } = require('../utils/validators/user');

// define router for register
router.post('/register', validateRegister, registerController.register);

// define router for login
router.post('/login', validateLogin,loginController.login);

// define router for user
router.get('/admin/users', verifyToken, userController.findUsers);

//define route for user create
router.post('/admin/users', verifyToken, validateUser, userController.createUser);

// define route for user by id
router.get('/admin/users/:id', verifyToken, userController.findUserById);

// define route for user update
router.put('/admin/users/:id', verifyToken, validateUser, userController.updateUser);

// define route for user delete
router.delete('/admin/users/:id', verifyToken, userController.deleteUser);

// export router
module.exports = router