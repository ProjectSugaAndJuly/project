const express = require("express");
const categoryRouter = express.Router();
const { promiseQuery } = require('../sqlConnection');

//שליפת קטגוריות
categoryRouter.get("/getCategories", async (req, res) => {
    const queryString = `SELECT * FROM star_chef.category`;
    try {
        const allCategories = await promiseQuery(queryString);//שךיפת כל הקטדוריות מועורבבות
        const categories = allCategories.filter(c => c.IdCategory == null);//סינון הקטגוריות הראשיות
       const result = [];
        //לכל קטגוריה ראשית נמצא את כל התת קטגוריות שלה
        for (let i = 0; i < categories.length; i++) {
            categories[i].subCategories = allCategories.filter(cc => cc.IdCategory == categories[i].Id);
        }
        res.send(categories);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }

})

//לא לשכוח לעשות פונקציה שמאפשרת למנהל להוסיף קטגוריה וגם תת קטגוריה

module.exports = categoryRouter;
