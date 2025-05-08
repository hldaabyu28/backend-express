// import express
const express = require("express");

// Import jwt
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Get token
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ message: "Unauthenticated." });

  // verify token
  jwt.verify(token, process.env.JWT_SCRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
