const express = require("express");
const weightTypeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = weightTypeRouter;