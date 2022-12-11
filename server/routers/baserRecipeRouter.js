const express = require("express");
const baserRecipeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = baserRecipeRouter;