const express = require("express");
const numberOfDailyEnterRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

//לשאול את המורה
//פונקציה שצוברת צפיות יומיות לאתר
numberOfDailyEnterRouter.put("/addEnterToWeb/getDate", async (req, res) => {
    const date = req.params.getDate;
    const queryString = `UPDATE star_chef.number_of_daily_enters SET Enter'sNumber=Enter'sNumber+1  where Date=${date}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage); 
    }
})

module.exports = numberOfDailyEnterRouter;