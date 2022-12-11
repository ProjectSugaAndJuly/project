const express = require("express");
const pictureForRecipeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = pictureForRecipeRouter;