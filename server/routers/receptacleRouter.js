const express = require("express");
const receptacleRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = receptacleRouter;