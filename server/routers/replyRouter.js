const express = require("express");
const replyRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');

// שכחתי איך עושים שליפהההההההההההה
//שליפת תגובות
// replyRouter.get("/getReply", async (req, res) => {
//     const queryString = `SELECT * FROM star_chef.reply`;
//     try {
//         res.send(queryString);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).send(err.sqlMessage);
//     }

// })


//הוספת תגובה
replyRouter.post("/addReply", async (req, res) => {
    const r = req.body.reply;
    const l = req.body.likeForRecipe;
    try {
        const queryString1 = `insert into star_chef.reply (Id,IdRecipe,IdUser,IdCommentForResponse,Likke,Date,Text)
        values (0,${r.IdRecipe},${r.IdUser},${r.IdCommentForResponse},${r.Likke},'${r.Date}','${r.Text}')`;
        let rows = await promiseQuery(queryString1);

        //InsertId של לייק לתגובה
        const IdR = rows.insertId
        for (let i = 0; i < l.length; i++) {
            const queryString2 = `insert into star_chef.like_for_reply (Id,IdUser,IdReply)
        values (0,'${l[i]}',${IdR})`;
            rows = await promiseQuery(queryString2);
        }       
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//פונקציה שמוסיפה לייק לתגובה
replyRouter.put("/addLikeToReplyById/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `UPDATE star_chef.reply SET Likke=Likke+1  where Id=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
//פונקציה שמורידה לייק לתגובה
replyRouter.put("/subLikeToReplyById/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `UPDATE star_chef.reply SET Likke=Likke-1  where Id=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
module.exports = replyRouter;