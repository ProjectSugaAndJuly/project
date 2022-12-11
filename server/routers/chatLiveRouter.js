const express = require("express");
const chatLiveRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = chatLiveRouter;