const express = require("express");
const materialTypeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = materialTypeRouter;