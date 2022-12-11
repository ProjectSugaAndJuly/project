const express = require("express");
const recipeTypeForPublishRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');




module.exports = recipeTypeForPublishRouter;