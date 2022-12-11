const express = require("express");
const userRouter = express.Router();
const { promiseQuery } = require('../sqlConnection');

//שליפת רשי
// מת משתמשים
userRouter.get("/getUsers", async (req, res) => {

    try {
        //console.log("------")
        const queryString = `SELECT * FROM star_chef.user`;
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//הוספת משתמש
userRouter.post("/addUser", async (req, res) => {
    const u = req.body.user;
    const p = req.body.picture;
    const arrayA = req.body.arrayA;

    try {
        const queryString2 = `insert into star_chef.user (Id,Name,Mail,Password,IdUserType)
                            values (0,'${u.Name}','${u.Mail}','${u.Password}',2)`;
        const rows = await promiseQuery(queryString2);
        const IdU = rows.InsertId

        const queryString1 = `insert into star_chef.picture_for_user (Id,Picture,IdUser)
                         values (0,'${p.Picture}',${IdU})`;
        const p = await promiseQuery(queryString1);

        for (let i = 0; i < arrayA.length; i++) {
            const queryString3 = `insert into star_chef.allergic_for_user (Id,IdUser,IdMaterial)
                                values (0,${IdU},${arrayA[i]})`;
            const rows = await promiseQuery(queryString3);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

userRouter.put("/updateUserById/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const user = req.body;
        console.log("user to update" , user);
        const queryString = `update star_chef.user 
                        set Name= '${user.Name}', Mail='${user.Mail}', Password='${user.Password}' 
                        where Id=${id}`;
        const result = await promiseQuery(queryString);
        res.status(200).send({ message: "הנתונים התעדכנו בהצלחה!", user: user });
    }
    catch (e) {
        res.status(500).send(e);
    }
})
// //---דוגמאאאאא--------הוספת משתמש
// userRouter.post("/addUser", async(req, res) => {
//     const u = req.body.user;
//     const r = req.body.picture;

//     const queryString1 = `insert into star_chef.picture (Id,Picture)
//                          values (0,'${r.Picture}')`;
//                          try{
//                             const r=await promiseQuery(queryString1); 
//                             const queryString2 = `insert into star_chef.user (Name,Mail,Password,IdUserType,IdProfilePicture)
//                             values ('${u.Name}','${u.Mail}','${u.Password}',${u.IdUserType},'${r.InsertId}')`;

//                                const rows=await promiseQuery(queryString2);
//                                res.send(rows.InsertId);

//                                const queryString2 = `insert into star_chef.user (Name,Mail,Password,IdUserType,IdProfilePicture)
//                                values ('${u.Name}','${u.Mail}','${u.Password}',${u.IdUserType},'${r.InsertId}')`;

//                             }
//                             catch(err)
//                             {
//                                 console.log(err);
//                                 res.status(500).send(err.sqlMessage);
//                             }


// })
// התחברות משתמש
userRouter.get("/login/:Mail/:Password", async (req, res) => {
    const u = req.body;
    console.log(user);

    try {
        const queryString = `SELECT * FROM star_chef.user WHERE Mail = '${u.Mail}' and Password='${u.Password}' `;
        const rows = await promiseQuery(queryString);
        if (rows.length == 0) // לא נמצא משתמש
            res.send({ success: false, message: "שם משתמש אינו קיים!" });
        else {
            const u = rows[0]; // שליפת האובייקט של המתשמש 
            if (u.passwordUser != user.passwordUser)
                res.send({ success: false, message: "סיסמא שגויה!" });
            else
                res.send({ success: true, user: u });
        }
    }
    catch (err) {
        console.log(err.sqlMessage)
        res.status(500).send(err.sqlMessage);
    }
})


module.exports = userRouter;