const express = require("express");
const likeForReplyRouter = express.Router();
const {promiseQuery}=require('../sqlConnection');
//פונקציה שקולטת שמי שנותן לייק לתגובה היא שומרת את המשתמש שנתן את הלייק
likeForReplyRouter.post("/addLikeToReplyByIdU", async (req, res) => {
    const l = req.body.like_for_reply;
    try {
        const queryString1 = `insert into star_chef.like_for_reply (Id,IdUser,IdReply)
        values (0,'${l.IdUser}',${l.IdReply})`;
        let rows = await promiseQuery(queryString1);
        //InsertId של מתכון לתמונה
        //const IdR = rows.insertId
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
module.exports = likeForReplyRouter;