const express = require("express");
const allergicForUserRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = allergicForUserRouter;