const express = require("express");
const videoRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = videoRouter;