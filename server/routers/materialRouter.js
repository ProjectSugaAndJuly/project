const express = require("express");
const materialRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = materialRouter;