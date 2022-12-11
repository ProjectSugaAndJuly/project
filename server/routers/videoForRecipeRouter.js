const express = require("express");
const videoForRecipeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = videoForRecipeRouter;