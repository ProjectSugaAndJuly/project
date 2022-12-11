const express = require("express");
const convertRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = convertRouter;