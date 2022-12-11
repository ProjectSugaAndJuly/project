const express = require("express");
const recipeForHomePageRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

//פונקציה שמקבלת קוד מתכון ומוסיפה אותו כמתכון מוביל
recipeForHomePageRouter.post("/addTopRecipe/id",async (req, res) => {
    const id = req.body.id;    
    const queryString = `insert into star_chef.rcipe_for_home_page (Id,IdRecipe,IdRecipeTypeForPublish)
             values (0,${id},1)`;
             try{
                const rows=await promiseQuery(queryString);
                res.send(rows);
            }
            catch(err){
                console.log(err);
                res.status(500).send(err.sqlMessage);
            }
})

//פונקציה שמקבלת קוד מתכון ומוסיפה אותו כמתכון יומי
recipeForHomePageRouter.post("/addDailyRecipe/id",async (req, res) => {
    const id = req.body.id;    
    const queryString = `insert into star_chef.rcipe_for_home_page (Id,IdRecipe,IdRecipeTypeForPublish)
             values (0,${id},2)`;
             try{
                const rows=await promiseQuery(queryString);
                res.send(rows);
            }
            catch(err){
                console.log(err);
                res.status(500).send(err.sqlMessage);
            }
})

//פונקציה שמקבלת קוד מתכון ומוסיפה אותו כמתכון שבועי
recipeForHomePageRouter.post("/addWeeklyRecipe/id",async (req, res) => {
    const id = req.body.id;    
    const queryString = `insert into star_chef.rcipe_for_home_page (Id,IdRecipe,IdRecipeTypeForPublish)
             values (0,${id},3)`;
             try{
                const rows=await promiseQuery(queryString);
                res.send(rows);
            }
            catch(err){
                console.log(err);
                res.status(500).send(err.sqlMessage);
            }
})
module.exports = recipeForHomePageRouter;