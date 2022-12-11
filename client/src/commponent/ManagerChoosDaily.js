import "./ManagerChoosDaily.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
export default function ManagerChoosDaily() {
    const [recipes, setRecipes] = useState([]);
    const [searchResultRecipe, setSearchResultRecipe] = useState([]);
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        const dataFromServer = [
            {
                id: 10,
                name: "עוגת שמרים",
                estimatedPreparationTime: "01:30:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 11,
                idStatusResipe: 1,
                numOfEnter: 6,
                img: "FIL_6721736_1648564138994.jpg",

            }, {
                id: 10,
                name: "עוגת שמרים",
                estimatedPreparationTime: "01:30:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 41,
                idStatusResipe: 1,
                numOfEnter: 6,
                img: "עוגת-דונאטס-וממתקים-מעוצבת-עם-בצק-סוכר-valerscake.jpg",

            }, {
                id: 10,
                name: "עוגת שמרים",
                estimatedPreparationTime: "01:30:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 78,
                idStatusResipe: 1,
                numOfEnter: 6,
                img: "spinach-cannelloni.jpg",

            }, {
                id: 10,
                name: "עוגת שמרים",
                estimatedPreparationTime: "01:30:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 2,
                idStatusResipe: 1,
                numOfEnter: 6,
                img: "Recipe-10492-YPsWAkSlFI51wBbW.jpg",

            }, {
                id: 10,
                name: "עוגת שמרים",
                estimatedPreparationTime: "01:30:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 15,
                idStatusResipe: 1,
                numOfEnter: 6,
                img: "Recipe-10692-FoAbfhipzRmRlmQu.jpg",

            }, {
                id: 10,
                name: "עוגת שמרים",
                estimatedPreparationTime: "01:30:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 78,
                idStatusResipe: 1,
                numOfEnter: 6,
                img: "Recipe-10844-l4phxvobwuwm3cjm.jpg",

            }, {
                id: 10,
                name: "עוגת שמרים",
                estimatedPreparationTime: "01:30:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 78,
                idStatusResipe: 1,
                numOfEnter: 6,
                img: "oreo_cheesecake5-360x240.jpg",

            },
            {
                id: 11,
                name: "עוגת גבינה",
                estimatedPreparationTime: "00:45:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 400,
                idStatusResipe: 1,
                numOfEnter: 15,
                img: "Recipe-11474-n63pjg4wj4a5ltga.jpg"
            },
            {
                id: 13,
                name: "לחם",
                estimatedPreparationTime: "01:45:00",
                quantityDiners: 5,
                idUser: 1,
                idCategory: 1,
                idSubCategory: 7,
                likke: 100,
                idStatusResipe: 1,
                numOfEnter: 3,
                img: "meatSponsered.jpg"
            },
            {
                id: 12,
                name: "אייס פקאן",
                likke: 1300,
                numOfEnter: 2000,
                img: "Recipe-10844-l4phxvobwuwm3cjm.jpg"
            },
            {
                id: 14,
                name: "עוגת שייש",
                likke: 450,
                numOfEnter: 20,
                img: "Recipe-10402-H5x2mUDyqVaLhtOs.jpg"
            },
            {
                id: 15,
                name: "סלט טוסט",
                likke: 800,
                numOfEnter: 8000,
                img: "spinach-cannelloni.jpg"
            },
            {
                id: 16,
                name: " מילק שייק",
                likke: 785,
                numOfEnter: 800,
                img: "Recipe-11474-n63pjg4wj4a5ltga.jpg"
            },
            {
                id: 17,
                name: " פרוזן",
                likke: 956,
                numOfEnter: 7585,
                img: "meattt13-300x200.jpg"
            },

            {
                id: 18,
                name: " הום פרייז",
                likke: 1500,
                numOfEnter: 5000,
                img: "Pistachio-biscuit-balls-cake1-555x833.jpg"
            },
            {
                id: 19,
                name: "לחם הבית",
                likke: 784,
                numOfEnter: 45,
                img: "featured.jpg"
            },
            {
                id: 20,
                name: "פסטה",
                likke: 400,
                numOfEnter: 45,
                img: "delicious-smoothies-with-kiwi-lemon.jpg"
            },
            {
                id: 21,
                name: "רביולי",
                likke: 156,
                numOfEnter: 200,
                img: "pizza.jpg"
            },
            {
                id: 22,
                name: "עוגת יומולדת",
                likke: 7,
                numOfEnter: 5122,
                img: "Crispy-baked-Cauliflower.jpg"
            },
            {
                id: 23,
                name: "עוגת מספרים",
                likke: 852,
                numOfEnter: 963,
                img: "לאתר.jpg"
            },
            {
                id: 24,
                name: "סלט הבית",
                likke: 741,
                numOfEnter: 854,
                img: "ארוחת-בוקר-ב-2-דקות-גלית-בר-1-1.jpg"
            },
            {
                id: 25,
                name: "פיצה",
                likke: 25,
                numOfEnter: 4521,
                img: "IMG-6149-scaled.jpg"
            },
            {
                id: 26,
                name: "מוקרם",
                likke: 75,
                numOfEnter: 15,
                img: "כחולה-חדשה-800x800.jpg"
            },
            {
                id: 27,
                name: "פוקצ'ה",
                likke: 23,
                numOfEnter: 8541,
                img: "קינוחי-ויטרינה-2.jpg"
            },
            {
                id: 28,
                name: "מוקפץ",
                likke: 452,
                numOfEnter: 5214,
                img: "ארוחות-ביניים.jpg"
            },
            {
                id: 29,
                name: "סיגרים",
                likke: 1,
                numOfEnter: 852,
                img: "קינוח-אישי-פרלינה-ומוס-שוקולד-300x225.jpg"
            },
            {
                id: 30,
                name: "פנקיק",
                likke: 85,
                numOfEnter: 15,
                img: "0000002222.jpg"
            },
            {
                id: 31,
                name: "וופל בלגי",
                likke: 6,
                numOfEnter: 789,
                img: "008.jpg"
            },
            {
                id: 32,
                name: "עוגת שמרים",
                likke: 45,
                numOfEnter: 12,
                img: "14.jpg"
            },
            {
                id: 33,
                name: "עוגת גבינה",
                likke: 48,
                numOfEnter: 15,
                img: "14-355x236.jpg"
            },

            {
                id: 34,
                name: " גבינה",
                likke: 10,
                numOfEnter: 15,
                img: "-56-1.jpg"
            }
        ];
        setRecipes(dataFromServer);
        setSearchResultRecipe(dataFromServer);
    }, [])

    useEffect(() => {
        const newData = [];
        for (let i = 0; i < recipes.length; i++) {
            const data = {
                img: recipes[i].img,
                cols: recipes[i].likke > 100 ? 2 : recipes[i].likke > 20 ? 1 : 1,
                rows: recipes[i].likke > 50 ? 2 : recipes[i].likke > 20 ? 1 : 1,
                title: recipes[i].name
            }
            newData.push(data);
        }
        setItemData(newData);

    }, [searchResultRecipe])

    let searchText = "";

    const searchRecipe = (text) => {

        searchText = text;
        if (text == "")
            setSearchResultRecipe([...recipes]);
        else {
            const filteredArr = recipes.filter(r => r.name.includes(text));
            setSearchResultRecipe(filteredArr);
        }


    }

    const sortByHighLikeAndEnter = () => {
        const modifiedSearchArr = [...searchResultRecipe]
        const sortedArr = modifiedSearchArr.sort((a, b) => { return a.likke - b.likke });
        const sorteArr = modifiedSearchArr.sort((a, b) => { return a.numOfEnter - b.numOfEnter });

        setSearchResultRecipe([...sortedArr]);
        setSearchResultRecipe([...sorteArr]);

    }



    //material!!!
    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `/images/${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `/images/${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    return (
        <>
            <h1>Manager Choos Daily</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="חיפוש" variant="standard" />
            </Box>
            {
                <div>
                    <ImageList sx={{ width: 1536, height: 450 }} cols={4}
                        rowHeight={150}>
                        {itemData.map((item) => {


                            const x = srcset(item.img, 121, item.cols, item.rows);
                            console.log(x);
                            return (


                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
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
            }
        </>
    )

}