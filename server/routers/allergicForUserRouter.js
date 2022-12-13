const express = require("express");
const allergicForUserRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');
const b=5;
module.exports = allergicForUserRouter;