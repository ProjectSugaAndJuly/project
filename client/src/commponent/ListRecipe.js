import "./ListRecipe.css"
import React from "react";
import ListRecipe from "./ListRecipe.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { render } from "@testing-library/react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { autocompleteClasses, Box, TextField } from "@mui/material";
import { FormatOverline, OnDeviceTrainingSharp } from "@mui/icons-material";
import { unstable_createCssVarsProvider } from "@mui/system";
import { GridLoadingOverlay, GridNoRowsOverlay } from "@mui/x-data-grid";
import { getRecipeAction } from "../action/recipe";



function ListRecipes() {

    const dispatch = useDispatch();

    //משתנים של רידיוסר
    const recipies = useSelector((state) => state.recipies)
    console.log("list recipies", recipies)
    // משתנים של תצוגה
    const [searchResultRecipe, setSearchResultRecipe] = useState([]);

    useEffect(() => {

     
        setSearchResultRecipe(recipies);
    }, [])



    let searchText = "";

    const searchRecipe = (text) => {
        console.log(text);
        if (text == "")
            setSearchResultRecipe([...recipies]);
        else {
            const changedRecipies = [...recipies];
            const filteredArr = changedRecipies.filter(r => r.Name.includes(text));
            setSearchResultRecipe(filteredArr);
        }
    }

    const sortByHighLikeAndEnter = () => {
        // const modifiedSearchArr = [...searchResultRecipe]
        // const sortedArr = modifiedSearchArr.sort((a, b) => { return a.likke - b.likke });
        // const sorteArr = modifiedSearchArr.sort((a, b) => { return a.numOfEnter - b.numOfEnter });

        // setSearchResultRecipe([...sortedArr]);
        // setSearchResultRecipe([...sorteArr]);

    }
    // const sortByHighEnter = () => {
    //     const modifiedSearchArr = [...searchResultRecipe]
    //     const sortedArr = modifiedSearchArr.sort((a, b) => { return a.numOfEnter - b.numOfEnter });
    //     setSearchResultRecipe([...sortedArr]);
    // }


    //---------------------------------------------material-ui!!!
    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `/images/${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `/images/${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }





    return (
        <><br />
            <TextField id="standard-basic" label="חיפוש" variant="standard" onChange={(e) => searchRecipe(e.target.value)} /><br />

            {/* <div>
                <h1>ListRecipe</h1>
            </div> */}

            {/* <input type="search" placeholder="הכנס שם מתכון"
                onChange={(e) => { searchRecipe(e.target.value) }} />
            <button onClick={sortByHighLikeAndEnter}>מיון לייקים וצפיות</button> */}
            {/* <button onClick={sortByHighEnter}>מיין לפי מספר צפיות </button> */}

            {
                // searchResultRecipe.map((r) => <p key={r.name}>{r.name} | {r.likke} | {r.numOfEnter}{/* | {r.pidture}*/}</p>)
                // Recipes.map(r=> <ListRecipe/>)
            }

            {
                // <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                <a href="recipe">

                    <div>
                        {/* height: 'GridNoRowsOverlay' */}
                        <ImageList sx={{ width: 1536, height: 450 }} cols={4}
                            rowHeight={150}>
                            {searchResultRecipe.map((item) => {


                                const x = srcset(item.images[0].Picture + '.jpg', 121, item.cols, item.rows);
                                return (

                                    <ImageListItem key={item.images[0].Picture} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            {...x}
                                            alt={item.title}
                                            loading="lazy"
                                        />

                                        <ImageListItemBar
                                            sx={{
                                                background:
                                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                            }}
                                            title={item.title}
                                            position="top"
                                            actionIcon={
                                                <IconButton
                                                    sx={{ color: 'white' }}
                                                    aria-label={`star ${item.title}`}
                                                >
                                                    <PlayArrowIcon /><h6>1200</h6>
                                                    <FavoriteBorderIcon /><h6>127k</h6>
                                                </IconButton>


                                            }
                                            actionPosition="left"

                                        />

                                    </ImageListItem>
                                )

                            })
                            }
                        </ImageList>
                    </div>
                </a>
            }

        </>
    )
}
//     )
// }


export default ListRecipes;