import "./RecipeBeaforPublish.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { RadioButtonChecked } from "@mui/icons-material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function RecipeBeaforPublish() {
    return (
        <>
            {/* <h1>Recipe Beafor Publish</h1> */}

            <div id="name_recipe">
                <h1>פנקייק</h1><h3 id="name_recipe1">אבישג חברוני</h3>
            </div>

            <div id="category_recipe">
                <h1>ארוחות</h1><h3 id="category_recipe1">פרווה</h3>
            </div>

            <div id="material">
                <h1 id="materialH1">החומרים</h1>
                <div id="calc">
                    <h5>מספר סועדים:  5</h5>
                </div>
                <h5><FiberManualRecordIcon />1 כוס שמן</h5>
                <h5> <FiberManualRecordIcon />2 כוס חלב</h5>
                <h5><FiberManualRecordIcon />חצי סירופ מייפל</h5>
                <h5><FiberManualRecordIcon />כפית קקאו</h5>
                <h5><FiberManualRecordIcon />חצי כפית פודינג</h5>
                <h5><FiberManualRecordIcon />50 גרם חמאה</h5>
            </div>
            <div id="ofen_hachana">
                <h1 id="materialH1">אופן ההכנה</h1>
                <h5><FiberManualRecordIcon />לשפוך את המיים והחלב ותוך הקערה</h5>
                <h5><FiberManualRecordIcon /> לערבב הייטב</h5>
                <h5><FiberManualRecordIcon /> להוסיף את הקמח והקקאו</h5>
                <h5><FiberManualRecordIcon /> לערבב הייטב עד לקבלת תערובת אחידה</h5>
                <h5><FiberManualRecordIcon /> להמיס את החמאה</h5>
                <h5><FiberManualRecordIcon /> להוסיף את החמאה ושאר המוצרים</h5>
                <h5><FiberManualRecordIcon /> לערבב הייטב</h5>
                <h5><FiberManualRecordIcon /> לשפוך לתוך מחבט חמה כמויות קטנות</h5>
                <h5><FiberManualRecordIcon /> לחכות למראה זהוב</h5>
            </div>

            <div id="gallery">
                <ArrowBackIosIcon id="left" />
                <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="big_img"></img>
                <div id="list_img">
                    <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img>
                    <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img>
                    <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img>
                    <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img>
                    {/* <img src='/images/Recipe-10492-YPsWAkSlFI51wBbW.jpg' id="small_img"></img> */}
                </div>
                <ArrowForwardIosIcon id="right" />
            </div>
            <div id="hichul">
                <h1>בתאבון</h1>
            </div>
            <div id="a_href">
                <a href="add-recipe">לשינוי</a>
                <a href="add-succses">הוספה</a>
            </div>
        </>
    )

}