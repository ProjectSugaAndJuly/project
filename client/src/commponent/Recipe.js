import "./Recipe.css"
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CreateIcon from '@mui/icons-material/Create';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CardMedia, Checkbox, FormControlLabel, FormGroup, Radio } from "@mui/material";
import { RadioButtonChecked } from "@mui/icons-material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rpley from "./Rpley.js";
import BannerExample from "./Carousel";

export default function Recipe() {

    const [Recipe, setRecipe] = useState(null);
    const [status, setStatus] = useState("show");

    useEffect(() => {
        const dataFromServer = {
            id: 10,
            name: "עוגת שמרים",
            estimatedPreparationTime: "01:30:00",
            quantityDiners: 5,
            idUser: 1,
            idCategory: 1,
            idSubCategory: 7,
            likke: 78,
            idStatusResipe: 1,
            numOfEnter: 6

        }
        setRecipe(dataFromServer);
        setStatus("show");
    }, [])




    const deleteRecipe = () => {
        const toDelete = prompt("(האם אתה בטוח שאתה רוצה למחוק? (כן/לא");
        if (toDelete == "כן")
            alert(`המתכון ${Recipe.name} נמחק בהצלחה`);

        //שליחה למחיקה בשרת
    }

    return (
        <>

            <div id="name_recipe">
                <h1>פנקייק</h1><h3 id="name_recipe1">אבישג חברוני</h3>
            </div>
            <div id="category_recipe">
                <h1>ארוחות</h1><h3 id="category_recipe1">פרווה</h3>
            </div>

            <div id="material">
                <h1 id="materialH1">החומרים</h1>
                <div id="calc">
                    <h3>מספר סועדים</h3>
                    <RemoveIcon id="minus" />
                    <input type="number" id="input_count" value={5} ></input>
                    <AddIcon id="plus" />
                </div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="1 כוס שמן" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="2 כוס חלב" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="חציך סירופ מייפל" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="כפית קקאו" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="חצי כפית פודינג" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="50 גרם חמאה" />
                </FormGroup>
            </div>
            <div id="ofen_hachana">
                <h1 id="materialH1">אופן ההכנה</h1>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="לשפוך את המיים והחלב לתוך הקערה" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="לערבב היטב" />
                </FormGroup>           <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="להוסיך את הקמח והקקאו" />
                </FormGroup>           <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="לערבב הייטב עד לקבלת תערובת אחידה" />
                </FormGroup>           <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="להמיס את החמאה" />
                </FormGroup>           <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="להוסיף את החמאה ושאר המוצרים" />
                </FormGroup>           <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="לערבב הייטב" />
                </FormGroup>           <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="לשפוך לתוך מחבת חמה כמויות קטנות" />
                </FormGroup>           <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="לחכות למראה זהוב" />
                </FormGroup>
            </div>"
            <BannerExample />
          
            {/* <div id="gallery">
                <ArrowBackIosIcon id="left" />
                <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="big_img"></img>
                <div id="list_img">
                    <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img>
                    <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img>
                    <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img>
                    <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img>
                     <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img> 
                </div>
                <ArrowForwardIosIcon id="right" />
            </div>    */}
            <div id="hichull">
                <h1>בתאבון</h1>
            </div>
            <Rpley id="rpley" />













            <br /><br /><br /><br />
            <div id="recipe">
                <button onClick={() => { setStatus("edit") }}><CreateIcon /></button>
                <button onClick={() => { setStatus("add") }}><ControlPointIcon /></button>
                <button onClick={deleteRecipe}><DeleteIcon /></button>

            </div>


            {status == "show" && Recipe ?

                <div className="card">
                    <p> שם מתכון: {Recipe.name}</p>
                    {/*<p> תמונת מתכון {Recipe.}</p>   לשאול את המורה איך מכניסים תמונה?? */}
                    <p>  מספר לייקים: {Recipe.likke}</p>
                    <p>  מספר צפיות: {Recipe.numOfEnter}</p>
                </div> : Recipe ?

                    <form className="card">

                        {status == "add" ? <h1>הוספת מתכון</h1> : <h1>עדכון מתכון</h1>}
                        <input type="text" value={Recipe.name} onChange={e => setRecipe({ ...Recipe, name: e.target.value })} />
                        {/* <input type="text" value={Recipe.name} onChange={e =>setRecipe({...Recipe, name: e.target.value})}/>////תמונהההה */}
                        <input type="text" value={Recipe.likke} onChange={e => setRecipe({ ...Recipe, likke: e.target.value })} />
                        <input type="text" value={Recipe.numOfEnter} onChange={e => setRecipe({ ...Recipe, numOfEnter: e.target.value })} />

                        {/* צריך לעשות גם עדכון בדטא בייס */}
                        <button onClick={() => setStatus("show")}>שמור</button>





                        {/* <p> שם מתכון: {Recipe.name}</p>
              {/*<p> תמונת מתכון {Recipe.}</p>   לשאול את המורה איך מכניסים תמונה?? */}
                        {/* <p>  מספר לייקים: {Recipe.likke}</p>
              <p>  מספר צפיות: {Recipe.numOfEnter}</p> */}
                    </form>
                    : <></>

            }

        </>
    )

}