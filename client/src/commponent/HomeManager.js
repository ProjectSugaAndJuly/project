import "./HomeManager.css";
import { Link, Outlet } from "react-router-dom";
import { IndeterminateCheckBoxSharp } from "@mui/icons-material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


export default function HomeManager() {
    return (
        <>
            <h1>Home Manager</h1>
            <Box
                sx={{
                    display: 'inline-block',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                >
                    <Button href="add-recipe">הוספת מתכון</Button><br />
                    {/* כרגע זה על קומפוננטה שמראה מה יש בה אבל באמת צריך לטפל בקומפוננטות האמיתיות של הדפים הללו */}
                    <Button href="delete-recipe">מחיקת מתכון</Button><br />
                    <Button href="update-recipe">עידכון מתכון</Button><br />
                    <Button href="user-book">עולם המתכונים</Button><br />
                    {/*  */}
                    <Button href="manager-choos-daily">בחירת מתכון יומי</Button><br />
                    <Button href="manager-choos-weekly">בחירת מתכון שבועי</Button><br />
                    <Button href="manager-choos-top">בחירת מתכונים מובילים</Button><br />
                    <Button href="add-category">ניהול קטגוריות</Button><br />
                    <Button href="edit-about">עריכת דף האודות</Button><br />
                    <Button href="list-users">צפיה ברשימת המשתמשים</Button><br />
                    <Button href="recipe-beafor-publish">צפייה בבקשות העלאה של המשתמשים</Button><br />
                    <Button href="num-of-enter">צפיה במספר הכניסות לאתר</Button><br />


                </ButtonGroup>
            </Box>
        </>
    )

}