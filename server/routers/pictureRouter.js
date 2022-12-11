const express = require("express");
const pictureRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

module.exports = pictureRouter;