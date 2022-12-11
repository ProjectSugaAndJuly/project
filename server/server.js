const cors = require('cors');
const express = require('express');
const bodyparser = require("body-parser");
const { mysqlConnection } = require('./sqlConnection');
// const ws = require('ws');
// const http = require('http');
const multer = require("multer");
const path = require("path");

const allergicForUserRouter = require("./routers/allergicForUserRouter");
const baserRecipeRouter = require("./routers/baserRecipeRouter");
const categoryForRecipeRouter = require("./routers/categoryForRecipeRouter");
const categoryRouter = require("./routers/categoryRouter");
const chatLiveRouter = require("./routers/chatLiveRouter");
const convertRouter = require("./routers/convertRouter");
const instructionRouter = require("./routers/instructionRouter");
const likeForRecipeRouter = require("./routers/likeForRecipeRouter");
const likeForReplyRouter = require("./routers/likeForReplyRouter");
const materialForRecipeRouter = require("./routers/materialForRecipeRouter");
const materialRouter = require("./routers/materialRouter");
const materialTypeRouter = require("./routers/materialTypeRouter");
const numberOfDailyEnterRouter = require("./routers/numberOfDailyEnterRouter");
const numRecipeArrivalsRouter = require("./routers/numRecipeArrivalsRouter");
const pictureForRecipeRouter = require("./routers/pictureForRecipeRouter");
const pictureRouter = require("./routers/pictureRouter");
const receptacleRouter = require("./routers/receptacleRouter");
const recipeForHomePageRouter = require("./routers/recipeForHomePageRouter");
const recipeRouter = require("./routers/recipeRouter");
const recipeTypeForPublishRouter = require("./routers/recipeTypeForPublishRouter");
const replyRouter = require("./routers/replyRouter");
const statusRecipeRouter = require("./routers/statusRecipeRouter");
const userRouter = require("./routers/userRouter");
const userTypeRouter = require("./routers/userTypeRouter");
const videoForRecipeRouter = require("./routers/videoForRecipeRouter");
const videoRouter = require("./routers/videoRouter");
const weightTypeRouter = require("./routers/weightTypeRouter");

const port = 8080;
const app = express();

app.use(cors());
app.use(express.static("./public"))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// app.use(express.json()); 

app.use("/allergic_for_user", allergicForUserRouter);
app.use("/baser_recipe", baserRecipeRouter);
app.use("/category_for_recipe", categoryForRecipeRouter);
app.use("/category", categoryRouter);
app.use("/chat_live", chatLiveRouter);
app.use("/convert", convertRouter);
app.use("/instruction", instructionRouter);
app.use("/like_for_recipe", likeForRecipeRouter);
app.use("/like_for_reply", likeForReplyRouter);
app.use("/material_for_recipe", materialForRecipeRouter);
app.use("/material", materialRouter);
app.use("/material_type", materialTypeRouter);
app.use("/number_of_daily_enter", numberOfDailyEnterRouter);
app.use("/num_recipe_arrivals", numRecipeArrivalsRouter);
app.use("/picture_for_recipe", pictureForRecipeRouter);
app.use("/picture", pictureRouter);
app.use("/receptacle", receptacleRouter);
app.use("/recipe_for_home_page", recipeForHomePageRouter);
app.use("/recipe", recipeRouter);
app.use("/recipe_type_for_publish", recipeTypeForPublishRouter);
app.use("/reply", replyRouter);
app.use("/status_recipe", statusRecipeRouter);
app.use("/user", userRouter);
app.use("/user_type", userTypeRouter);
app.use("/video_for_recipe", videoForRecipeRouter);
app.use("/video", videoRouter);
app.use("/weight_type", weightTypeRouter);

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/images/');
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }

});

const upload = multer({
    storage: storage
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log("Connection Established Successfully!");
    else
        console.log("Connection Failed!", err);
});

//קבלת תמונת פרופיל של המשתמש
app.post("/upload/:userId", upload.single('file'), async (req, res) => {
    const userId = req.params.userId;
    if (!req.file) {
        console.log("No file upload");
    }
    else {
        console.log(req.file.filename);
        const imgsrc = 'http://127.0.0.1:8080/images/' + req.file.filename;
        const query = `INSERT INTO picture_for_user VALUES (0, '${imgsrc}',${userId})`;
        try {
            const result = await promiseQuery(query);
            res.send(result);
        }
        catch(e){
            res.send(e.message);
        }

    }
})

//קבלת תמונת/ות  של המתכון
app.post("/upload/:recipeId", upload.single('file'), async (req, res) => {
    const recipeId = req.params.recipeId;
    if (!req.file) {
        console.log("No file upload");
    }
    else {
        console.log(req.file.filename);
        const imgsrc = 'http://127.0.0.1:8080/images/' + req.file.filename;
        const query = `INSERT INTO picture_for_recipe VALUES (0, '${recipeId}',${imgsrc})`;
        try {
            const result = await promiseQuery(query);
            res.send(result);
        }
        catch(e){
            res.send(e.message);
        }

    }
})

app.listen(port, () => console.log(`running server ${port}`));
const { promiseQuery } = require('./sqlConnection');
