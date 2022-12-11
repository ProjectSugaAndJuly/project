const express = require("express");
const recipeRouter = express.Router();
const { promiseQuery } = require('../sqlConnection');

//הצגת מתכונים
recipeRouter.get("/getRecipe", async (req, res) => {
    const queryString = `SELECT r.*  ,c.Name as category , sc.Name as subCategory
    FROM star_chef.recipe r JOIN star_chef.category  c ON r.IdCategory = c.Id  JOIN star_chef.category sc ON r.IdSubCategory = sc.Id
    where IdStatusResipe=2;`;
    try {
        const recipies = await promiseQuery(queryString); //חוזר מערך של מתכונים
        for (let i = 0; i < recipies.length; i++) { //לכל מתכון לבצע שליפה של התמונות שלו
            const imagesQuery = `SELECT * FROM star_chef.picture_for_recipe WHERE IdRecipe = ${recipies[i].Id};`;
            const images = await promiseQuery(imagesQuery);
            recipies[i].images = images;//הוספת התמונות כתכונה באובייקט המתכון
        }
        for (let i = 0; i < recipies.length; i++) { //לכל מתכון לבצע שליפה של התמונות שלו
            const videoQuery = `SELECT * FROM star_chef.video_for_recipe WHERE IdRecipe = ${recipies[i].Id};`;
            const video = await promiseQuery(videoQuery);
            recipies[i].video = video;//הוספת התמונות כתכונה באובייקט המתכון
        }
        for (let i = 0; i < recipies.length; i++) { //לכל מתכון לבצע שליפה של התמונות שלו
            const insQuery = `SELECT * FROM star_chef.instruction WHERE IdRecipe = ${recipies[i].Id};`;
            const ins = await promiseQuery(insQuery);
            recipies[i].ins = ins;//הוספת התמונות כתכונה באובייקט המתכון
        }
        for (let i = 0; i < recipies.length; i++) { //לכל מתכון לבצע שליפה של התמונות שלו
            const ingQuery = `SELECT * FROM star_chef.material_for_recipe WHERE IdRecipe = ${recipies[i].Id};`;
            const ing = await promiseQuery(ingQuery);
            recipies[i].ing = ing;//הוספת התמונות כתכונה באובייקט המתכון
        }
        for (let i = 0; i < recipies.length; i++) { //לכל מתכון לבצע שליפה של התמונות שלו
            const baserQuery = `SELECT * FROM star_chef.baser_recipe WHERE IdRecipe = ${recipies[i].Id};`;
            const baser = await promiseQuery(baserQuery);
            recipies[i].baser = baser;//הוספת התמונות כתכונה באובייקט המתכון
        }
        for (let i = 0; i < recipies.length; i++) { //לכל מתכון לבצע שליפה של התמונות שלו
            const replyQuery = `SELECT * FROM star_chef.reply WHERE IdRecipe = ${recipies[i].Id};`;
            const reply = await promiseQuery(replyQuery);
            recipies[i].reply = reply;//הוספת התמונות כתכונה באובייקט המתכון
        }
        //יש לבצע את אותו דבר גם על הסרטות, הוראות, רכיבים, איחול
        res.send(recipies);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }

})
//הצגת מתכונים של משתמש לפי קוד משתמש
recipeRouter.get("/getRecipeUserByIdU/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `SELECT * FROM star_chef.recipe  where IdUser=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }

})
// //פונקציה שמציגה את כל המתכונים שהמשתמש אהב באמצעות קוד משתמש
// recipeRouter.get("/getLoveRecipeUserByIdU/:id", async (req, res) => {
//     const id = req.params.id;
//     const queryString = `SELECT * FROM star_chef.recipe  where IdUser=${id}`;
//     try {
//         const rows = await promiseQuery(queryString);
//         res.send(rows);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).send(err.sqlMessage);
//     }

// })
//הצגת כל המתכונים שמחכים לאישור פירסום
recipeRouter.get("/getRecipeThatWeitingForPublish", async (req, res) => {
    const queryString = `SELECT * FROM star_chef.recipe where IdStatusResipe=1`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }

})
//פונקציה שמקבלת קוד מתכון ומציגה אותו 
recipeRouter.get("/getRecipeById/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `SELECT * FROM star_chef.recipe where Id=${id} and IdStatusResipe=2`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//פונקציה שמקבלת קוד מתכון ומוסיפה לו לייק 
recipeRouter.put("/addLikeToRecipeById/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `UPDATE star_chef.recipe SET Likke=Likke+1  where Id=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//פונקציה שמקבלת קוד מתכון ןמורידה לו לייק 
recipeRouter.put("/subLikeToRecipeById/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `UPDATE star_chef.recipe SET Likke=Likke-1  where Id=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//פונקציה שמקבלת קוד מתכון ומוסיפה לו צפייה 
recipeRouter.put("/addWatchToRecipeById/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `UPDATE star_chef.recipe SET NumOfEnter=NumOfEnter+1  where Id=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//פונקציה שמקבלת קוד קטגוריה ומציגה את כל המתכונים בקטגוריה זו
recipeRouter.get("/getRecipeByIdCategory/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `star_chef.recipe where IdCategory=${id} and IdStatusResipe=2`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//פונקציה שמקבלת קוד תת קטגוריה ומציגה את כל המתכונים בקטגוריה זו
recipeRouter.get("/getRecipeByIdSubCategory/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `SELECT * FROM star_chef.recipe where IdSubCategory=${id} and IdStatusResipe=2`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//פונקציה שמקבלת קוד משתמש ומציגה את המתכונים שלו 
recipeRouter.get("/getRecipeByIdUser/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `SELECT * FROM star_chef.recipe where IdUser=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
//פונקציה שמקבלת קוד מתכון שלא פורסם ומפרסמת אותו
recipeRouter.put("/publishRecipeById/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `UPDATE star_chef.recipe SET IdStatusResipe=2  where Id=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
//פונקציה שמקבלת קוד מתכון שלא פורסם ולא מפרסמת אותו
recipeRouter.put("/notPublishRecipeById/:id", async (req, res) => {
    const id = req.params.id;
    const queryString = `UPDATE star_chef.recipe SET IdStatusResipe=4  where Id=${id}`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
//הוספת מתכון
recipeRouter.post("/addRecipe", async (req, res) => {
    //  {   }  צד לקוח: בניה של ה-body  
    console.log("Hllow");
    console.log(req.body);

    const r = req.body;  //אובייקט שמכיל את כל המידע על המתכון
    const ins = r.instructions;  // הוראהמערך שבו אובייקטים שבכל אחד מחורוזת של הוראה בתכונה name
    const ing = r.ingredients;
    // const m = r.ingredients;
    // const p = req.body.picturesForRecipe;
    // const v = req.body.videosForRecipe;
    // const b = req.body.baser_recipe;
    //const cfr = req.body.category_for_recipe;

    try {
        //------------------------------1
        //פקודת הוספת פרטי מתכון פשוטים
        //  (שם, זמן הכנה, כמות סועדים, איחול, קוד משתמש, קוד קטגוריה, קוד תת קטגוריה, סטטוס מתכון, לייקים, מספר כניסות)
        const queryString1 = `insert into star_chef.recipe (Id,Name,EstimatedPreparationTime,QuantityDiners,IdUser,IdCategory,IdSubCategory,IdStatusResipe,Likke,NumOfEnter)
        values (0,'${r.name}','${r.time}',${r.countDinners},1,1,5,1,0,0)`;
        console.log(queryString1);
        //הפעלת השאילתא בדאטה בייס
        let result = await promiseQuery(queryString1);
        //בתוך המידע שחזר יש את קוד הרשומה החדשה - המתכון החדש 
        const newRecipeId = result.insertId;

        //-------------------------------2
        //הוספת הוראות למתכון
        let queryString2 = `insert into star_chef.instruction (Id,IdRecipe,Text) values`;
        for (let i = 0; i < ins.length-1; i++) {
            queryString2 += ` (0,${newRecipeId},'${ins[i].name}'),`;
        }
        queryString2 += ` (0,${newRecipeId},'${ins[ ins.length-1 ].name}')`;
        result = await promiseQuery(queryString2);

        //------------------------------3
        //הוספת רכיבים למתכון
        let queryString3 = `insert into star_chef.material_for_recipe (Id,IdRecipe, IdMaterial, IdReceptacle, Quantity, IdWeightType) values`;
        for (let i = 0; i < ing.length; i++) {
            queryString3 += ` (0,${newRecipeId},${ing[i].name},${ing[i].kibul},${ing[i].count},${ing[i].type})`;
            result = await promiseQuery(queryString3);
        }


        //console.log(rows);
        //InsertId של מתכון לתמונה
        // const IdR = rows.insertId
        // for (let i = 0; i < p.length; i++) {
        //     const queryString3 = `insert into star_chef.picture_for_recipe (Id,IdRecipe,Picture)
        // values (0,${IdR},'${p[i]}')`;
        //     rows = await promiseQuery(queryString3);
        // }

        //InsertId של מתכון לחומרים למתכון                                
        // for (let i = 0; i < m.length; i++) {
        //     const queryString4 = `insert into star_chef.material_for_recipe (Id,IdRecipe,IdMaterial,IdReceptacle,Quantity,IdWeightType)
        // values (0,${IdR},${m[i].IdMaterial},${m[i].IdReceptacle},${m[i].Quantity},${m[i].IdWeightType})`;
        //     rows = await promiseQuery(queryString4);
        // }

        //InsertId של מתכון לוידאו למתכון                                
        // for (let i = 0; i < v.length; i++) {
        //     const queryString5 = `insert into star_chef.video_for_recipe (Id,IdRecipe,Video)
        // values (0,${IdR},'${v[i]}')`;
        //     rows = await promiseQuery(queryString5);
        // }



        //InsertId של מתכון לאיחול למתכון
        // for (let i = 0; i < b.length; i++) {
        //     const queryString7 = `insert into star_chef.baser_recipe (Id,IdRecipe,Baser)
        // values (0,${IdR},'${b[i]}')`;
        //     rows = await promiseQuery(queryString7);
        // }
        //InsertId של מתכון קטגוריה למתכון
        // for (let i = 0; i < cfr.length; i++) {
        //     const queryString8 = `insert into star_chef.category_for_recipe (Id,IdRecipe,IdCategory)
        //         values (0,${IdR},${cfr[i]})`;
        //     rows = await promiseQuery(queryString8);
        // }
        res.send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
//עידכון מתכון
recipeRouter.put("/updeteRecipeById/:id", async (req, res) => {
    const id = req.params.id;
    const upRecipe = req.body.recipe;
    const m = req.body.materialsForRecipe;
    const p = req.body.picturesForRecipe;
    const v = req.body.videosForRecipe;
    const ins = req.body.instructions;
    const b = req.body.baser_recipe;
    //const cfr = req.body.category_for_recipe;
    try {
        const queryString1 = `update star_chef.recipe set Name='${upRecipe.Name}', EstimatedPreparationTime='${upRecipe.EstimatedPreparationTime}'
        ,QuantityDiners=${upRecipe.QuantityDiners},IdCategory=${upRecipe.IdCategory},IdSubCategory=${upRecipe.IdSubCategory}
         where Id=${id}`;

        let rows = await promiseQuery(queryString1);



        for (let i = 0; i < m.length; i++) {
            const queryString2 = `update star_chef.material_for_recipe set IdMaterial=${m[i].IdMaterial}, IdReceptacle=${m[i].IdReceptacle}
            ,Quantity=${m[i].Quantity},IdWeightType=${m[i].IdWeightType} where IdRecipe=${id}`;
            rows = await promiseQuery(queryString2);
        }

        for (let i = 0; i < p.length; i++) {
            const queryString3 = `update star_chef.picture_for_recipe set Picture='${p[i].Picture}' where IdRecipe=${id}`;
            rows = await promiseQuery(queryString3);
        }

        for (let i = 0; i < v.length; i++) {
            const queryString4 = `update star_chef.video_for_recipe set Video='${v[i].Video}' where IdRecipe=${id}`;
            rows = await promiseQuery(queryString4);
        }

        for (let i = 0; i < ins.length; i++) {
            const queryString5 = `update star_chef.instruction set Text='${ins[i].Text}' where IdRecipe=${id}`;
            rows = await promiseQuery(queryString5);
        }

        for (let i = 0; i < b.length; i++) {
            const queryString6 = `update star_chef.baser_recipe set Baser='${b[i].Baser}' where IdRecipe=${id}`;
            rows = await promiseQuery(queryString6);
        }
        //InsertId של מתכון קטגוריה למתכון
        // for (let i = 0; i < cfr.length; i++) {
        //     const queryString7 = `update star_chef.category_for_recipe set IdCategory=${cfr[i].IdCategory} where IdRecipe=${id}`;
        //     rows = await promiseQuery(queryString7);
        // }
        res.send("Update!");
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
//מחיקת מתכון
recipeRouter.delete("/deleteRecipeById/:id", async (req, res) => {
    const delRecipe = req.params.id;
    //const cfr = req.body.category_for_recipe;
    const queryString1 = `DELETE from star_chef.recipe where Id=${delRecipe}`;
    try {
        const queryString2 = `DELETE star_chef.material_for_recipe where IdRecipe=${delRecipe}`;
        rows = await promiseQuery(queryString2);
        const queryString3 = `DELETE star_chef.picture_for_recipe where IdRecipe=${delRecipe}`;
        rows = await promiseQuery(queryString3);
        const queryString4 = `DELETE star_chef.video_for_recipe where IdRecipe=${delRecipe}`;
        rows = await promiseQuery(queryString4);
        const queryString5 = `DELETE star_chef.instruction where IdRecipe=${delRecipe}`;
        rows = await promiseQuery(queryString5);
        const queryString6 = `DELETE star_chef.baser_recipe where IdRecipe=${delRecipe}`;
        rows = await promiseQuery(queryString6);
        const queryString7 = `DELETE star_chef.like_for_recipe where IdRecipe=${delRecipe}`;
        rows = await promiseQuery(queryString7);
        const queryString8 = `DELETE star_chef.reply where IdRecipe=${delRecipe}`;
        rows = await promiseQuery(queryString8);
        const queryString9 = `DELETE star_chef.num_recipe_arrivals where IdRecipe=${delRecipe}`;
        rows = await promiseQuery(queryString9);

        //     const queryString8 = `DELETE star_chef.category_for_recipe where IdRecipe=${cfr[i].id}`;
        //     rows = await promiseQuery(queryString8);
        let rows = await promiseQuery(queryString1);
        //console.log("Hllow");
        res.send("Deleted!");
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})
//פונקציה שמקבלת קוד משתמש ומציגה את המתכונים שהוא לא אלרגי אליהם //xxxxxxxxxxxxxxxxxלתקןxxxxxxxxxxxxxxxxxxx
recipeRouter.get("/getRecipeNotAllergyByIdUser/:idU", async (req, res) => {
    const idU = req.params.idU;
    const upRecipe = req.body.recipe;
    const m = req.body.materialsForRecipe;
    try {
        // const queryString = `
        // SELECT R.[*]
        // FROM star_chef.recipe R join allergic_for_user AFU as R.[IdUser]=AFU.[IdUser] 
        // join material_for_recipe MFR as R.[Id]=AFU.[IdRecipe] 
        // join material M AFU.[IdMaterial]=M.[Id]
        // where AFU.IdUser=${idU} and SELECT * FROM star_chef.material_for_recipe where IdMaterial != AFU.IdMaterial
        // `;

        const queryString1 = `SELECT * FROM star_chef.recipe`;
        let rows = await promiseQuery(queryString1);
        const IdR = rows.insertId;

        for (let i = 0; i < m.length; i++) {
            const queryString2 = `SELECT * FROM star_chef.allergic_for_user where IdUser=${Uid})`;
            rows = await promiseQuery(queryString2);
        }
        for (let i = 0; i < m.length; i++) {
            const queryString3 = `SELECT * FROM star_chef.allergic_for_user where IdUser=${idU})`;
            rows = await promiseQuery(queryString3);
        }

        //const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//פונקציה שמקבלת קוד משתמש ומציגה את כל המתכונים שאהב 
recipeRouter.get("/getLikeRecipeByIdUser/:idU", async (req, res) => {
    const idU = req.params.idU;
    const queryString = `SELECT R*
    FROM star_chef.recipe R join star_chef.like_for_recipe LFR on R.[Id]=LFR.[IdRecipe]  
    where LFR.IdUser=${idU} and LFR.IdRecipe=R.Id`;
    try {
        const rows = await promiseQuery(queryString);
        res.send(rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
    }
})

//console.log("zehava!!!");
module.exports = recipeRouter;