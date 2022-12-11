const express = require("express");
const numRecipeArrivalsRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = numRecipeArrivalsRouter;