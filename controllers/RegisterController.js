// import express
const express = require("express");

// import validation result
const { validationResult } = require("express-validator");

// import bycrpt
const bcrypt = require("bcryptjs");

// import prisma
const prisma = require("../prisma/client");

// function register
const register = async (req, res) => {
  // periksa hasil validasi
  const errros = validationResult(req);

  if (!errros.isEmpty()) {
    // jika ada error, kembalikan error ke pengguna
    return res.status(422).json({
      success: false,
      message: "Validation error",
      errros: errros.array(),
    });
  }
  // hash password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    // insert data
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
    });

    // return response json
    res.status(201).send({
      success: true,
      message: "Register successfully",
      data: user,
    });
  } catch (error) {
    // return response json
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  register,
};
