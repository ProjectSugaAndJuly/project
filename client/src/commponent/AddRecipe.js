import { Link, Outlet } from "react-router-dom";

import "./AddRecipe.css";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Autocomplete, Button, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from "@mui/material";
import { CheckBox, Label, RadioButtonChecked } from "@mui/icons-material";
import DiningIcon from '@mui/icons-material/Dining';
import { DropzoneArea } from "material-ui-dropzone";
import { DropzoneAreaBase } from 'material-ui-dropzone';
import axios from "axios";
import { useEffect, useState } from "react";
// import { DropzoneArea } from 'material-ui-dropzone';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

// זה האינפוט


export default function AddRecipe() {

    const [currency, setCurrency] = React.useState('EUR');

    const currencies = [];

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    //מערכים ואובייקט לשמירת המידע על המתכון החדש
    const [ingredients, setIngredients] = useState([]); //מערך  רכיבים במתכון
    const [instructions, setInstructions] = useState([]);  //מערך הוראות להכנה
    const [images, setImages] = useState([]);              //מערך תמונות מקומפוננטת גרירה
    const [videos, setVideos] = useState([]);
    const [recipeData, setRecipeData] = useState({
        name: "",
        time: "",
        countDinners: "",
        category: "",
        basser: "",
        images: [],
        videos: [],
        ingredients: [],
        instructions: []
    })


    //מערכים שנשלפים בשביל הרשימות הנפתחות
    const [material, setMaterial] = useState([]);
    const [weightType, setWeightType] = useState([]);
    const [receptacle, setReceptacle] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState("");



    useEffect(() => {

        //שליפה של כל הקטגוריות
        axios.get('http://localhost:8080/category/getCategories').then(res => {
            setCategories(res.data);
            console.log("הקטגוירות הגיעו", res.data);
        })

        //שליפה של כל החומרים
        // axios.get('http://localhost:8080/category/getCategories').then(res => {
        //     setCategories(res.data);
        // })
        //שליפה של כל הכלי קיבול
        // axios.get('http://localhost:8080/category/getCategories').then(res => {
        //     setCategories(res.data);
        // })

        //שליפה של כל הסוגי משקל
        // axios.get('http://localhost:8080/category/getCategories').then(res => {
        //     setCategories(res.data);
        // })



    }, [])




    //אובייקט שמייצג מידע של רכיב (שם כמות יחידת מידה סוג משקל)
    const ingredientData = {

    }
    //אובייקט שמכיל טקסט של הוראת מתכון
    const instructionsData = {

    }





    //הוספת רכיב למערך הרכיבים
    const addIngredient = (event) => {
        event.preventDefault();
        // console.log(ingredientData);
        const copyRowes = [...ingredients];
        copyRowes.push(ingredientData)
        setIngredients(copyRowes);
    }
    //הוספת הוראה למערך ההוראות
    const addInstructions = (event) => {
        event.preventDefault();
        // console.log(instructionsData);
        const copyRowes = [...instructions];
        copyRowes.push(instructionsData)
        setInstructions(copyRowes);
    }

    const addRecipe = (event) => {
        event.preventDefault();
        recipeData.images = images;
        recipeData.videos = videos;
        recipeData.ingredients = ingredients;
        recipeData.instructions = instructions;
        console.log("the recipe that will be sent to server: ", recipeData);

        axios.post('http://localhost:8080/recipe/addRecipe', recipeData).then((res) => {
            console.log(res)
        })
    }


    return (
        <>
            <h1>Add Recipe</h1>
            <form>


                <div className="addrecipe">
                    <input type="text" name="name" placeholder="שם המתכון" onChange={(e) => { setRecipeData({ ...recipeData, name: e.target.value }) }} /><br /><br />
                    <input type="time" name="time" placeholder="זמן הכנה משוער" onChange={(e) => { setRecipeData({ ...recipeData, time: e.target.value }) }} /><br /><br />
                    <input type="text" name="countDinners" placeholder="כמות סועדים" onChange={(e) => { setRecipeData({ ...recipeData, countDinners: e.target.value }) }} /><br />
                </div>
                <div id="imageAdd">
                    <DropzoneArea
                        acceptedFiles={['image/*']}
                        dropzoneText={"הוסף תמונה"}
                        onChange={(files) => { console.log('Images:', files); setImages(files); }}
                    /></div>

                <div id="videoAdd">
                    <DropzoneAreaBase
                        acceptedFiles={['video/*']}
                        dropzoneText={"הוסף סירטון"}
                        onAdd={(files) => { console.log('Videos:', files); const oldVideos = [...videos]; oldVideos.push(...files); setVideos(oldVideos); }}
                        maxFileSize={10242880}
                    /></div>


                {/*הוספת רכיבים  */}
                <div>
                    {/* <input type="text" name="שם המוצר" placeholder="שם המוצר:" onChange={(e) => { ingredientData.name = e.target.value }} /> */}
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="שם מוצר"
                                value={currency}
                                onChange={(e) => { ingredientData.name = e.target.value }}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </div>
                    </Box>
                    <input type="text" name="כמות החומר" placeholder="כמות החומר" onChange={(e) => { ingredientData.count = e.target.value }} />

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="כלי קיבול"
                                value={currency}
                                onChange={(e) => { ingredientData.kibul = e.target.value }}
                            // onChange={(e) => { ingredientData.name = e.target.value }}                    
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </div>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="צורת שקילה"
                                value={currency}
                                onChange={(e) => { ingredientData.type = e.target.value }}
                            // onChange={(e) => { ingredientData.name = e.target.value }}                    
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </div>
                    </Box>


                    {/* <input type="text" name="ע''י כלי קיבול" placeholder="ע''י כלי קיבול" onChange={(e) => { ingredientData.kibul = e.target.value }} />
                    <input type="text" name="סוג משקל" placeholder="סוג משקל" onChange={(e) => { ingredientData.type = e.target.value }} /><br /> */}
                    <button onClick={(event) => addIngredient(event)} >הוסף חומר</button><br />
                </div>
                <TableContainer component={Paper} id="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right" id="row">שם המוצר</TableCell>
                                <TableCell align="right" id="row">כמות החומר</TableCell>
                                <TableCell align="right" id="row">ע"י כלי קיבול</TableCell>
                                <TableCell align="right" id="row">סוג משקל</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right" id="row">{row.name}</TableCell>
                                    <TableCell align="right" id="row">{row.count}</TableCell>
                                    <TableCell align="right" id="row">{row.kibul}</TableCell>
                                    <TableCell align="right" id="row">{row.type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* בחירת קטגוריות */}
                {categories.length > 0 && <div id="category">
                    <h1> הכנס לקטגוריות:</h1>
                    <FormGroup>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={categories[0].Name}
                            name="categories"
                        >
                            {categories.map((c) => <FormControlLabel value={c.Name} control={<Radio />} label={c.Name} onChange={() => { setSelectedCategory(c); console.log(c) }} />)}
                        </RadioGroup>
                    </FormGroup>
                    {selectedCategory == null ? <></> :
                        <>
                            <h2>בחר תת קטגוריה</h2>
                            {/* <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={selectedCategory.category[0]} name="sub-categories">
                                {selectedCategory.subCategories.map((sc) => <FormControlLabel control={<Radio />} label={sc.Name} value={sc.Name} onChange={() => { setSelectedSubCategory(sc) }} />)}
                            </RadioGroup> */}
                        </>
                    }

                    {/*
                    */}
                </div>
                }
                {/* אופן ההכנה */}
                <div id="ofen_hachana">
                    <h1>אופן ההכנה בנקודות</h1>
                    <input type="text" name="ofen_hachana" placeholder="הכנס הוראה למתכון" onChange={(e) => { instructionsData.name = e.target.value }}></input><br /><br />
                    <button onClick={(event) => addInstructions(event)} >הוסף הוראה</button><br /><br />
                    {instructions.map((ins) => <h5><DiningIcon /> {ins.name}</h5>)}

                </div>

                {/* הוספת איחול */}
                <div id="hichul">
                    <input type="text" name="basser" id="hichul1" placeholder="הוסף איחול למתכון: בתאבון או כל איחול אחר" onChange={(e) => { setRecipeData({ ...recipeData, basser: e.target.value }) }}></input><br /><br />
                </div>

                {/* כפתור שמירת מתכון */}
                <Button type="submit" onClick={(event) => addRecipe(event)}>הוסף  מתכון </Button>
            </form>


            {/* // זה האינפוט */}




        </>
    )
}



