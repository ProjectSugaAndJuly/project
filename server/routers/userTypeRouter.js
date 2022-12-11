const express = require("express");
const userTypeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = userTypeRouter;