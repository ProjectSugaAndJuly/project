const express = require("express");
const materialForRecipeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = materialForRecipeRouter;