const express = require("express");
const statusRecipeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = statusRecipeRouter;