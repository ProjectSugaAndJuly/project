const express = require("express");
const likeForRecipeRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

//שליפת רשימת המתכונים שהמשתמש אהב באמצעות קוד משתמש
likeForRecipeRouter.get("/getRecipeUserLikeByIdUser/:id", async (req, res) => {
    const id = req.params.id;
    const r = req.body.recipe;

    try {
        const queryString1 = `SELECT * FROM star_chef.like_for_recipe where IdUser=${id}`;
        const rows = await promiseQuery(queryString1);
        const IdR = rows.insertId;
        // for (let i = 0; i < r.length; i++) {
        //     const queryString2 = `SELECT * FROM star_chef.recipe (Id,Name,EstimatedPreparationTime,QuantityDiners,IdUser,IdCategory,IdSubCategory,Likke,IdStatusResipe,NumOfEnter)
        // values (${IdR},'${r[i].Name}','${r[i].EstimatedPreparationTime}',${r[i]}.QuantityDiners,${r[i]}.IdUser,${r[i]}.IdCategory,${r[i]}.IdSubCategory,${r[i]}.Likke,${r[i]}.IdStatusResipe,${r[i]}.NumOfEnter)`;
        //     rows = await promiseQuery(queryString2);
        // }
        for (let i = 0; i < r.length; i++) {
            const queryString2 = `SELECT * FROM star_chef.recipe where Id=${IdR}`;
            rows = await promiseQuery(queryString2);
        }
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

module.exports = likeForRecipeRouter;