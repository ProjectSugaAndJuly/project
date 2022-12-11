const express = require("express");
const instructionRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = instructionRouter;