const express = require("express");
const categoryForRecipeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = categoryForRecipeRouter;