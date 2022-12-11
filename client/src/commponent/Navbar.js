import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import ListRecipe from './ListRecipe';
import LoginAndRegister from "./LoginAndRegister";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ScienceIcon from '@mui/icons-material/Science';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import DraftsIcon from '@mui/icons-material/Drafts';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { SignalCellularNull } from "@material-ui/icons";
import { getCategoriesAction } from "../action/category";
import { getRecipeByIdCategoryAction } from "../action/recipe";
// import CancelRoundedIcon from '@material-ui/icons/CancelRounded'
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //משתנים של רידיוסר
  const categories = useSelector((state) => state.categories);
  console.log("list categories", categories)


  useEffect(() => {

  }, [])


  //מה שזוהרה עשתה
  // useEffect(() => {
  //   props.getCategoriesAction();
  // }, []);
  // const goToList=(category,subCategory) =>{
  //   // props.getRecipeByIdCategoryAction(id);
  //   const data = { category: category, subCategory: subCategory };
  //   dispatch({ type: "FILTER_RECIPIES_BY_CATEGORY", payload: data });
  // }
  const [value, setValue] = "";

  const showByCategory = (category, subCategory) => {
    const data = { category: category, subCategory: subCategory };
    dispatch({ type: "FILTER_RECIPIES_BY_CATEGORY", payload: data });

  }
  return (<>
    <header>StarChef</header>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#dcc8cc" }} >
      <div className="container-fluid">
        <Link to="home-user" className="nav-link">דף הבית  ||</Link>
        <Link to="home-maneger" className="nav-link">דף הבית של המנהל</Link>

        {/* <a className="navbar-brand" href="#" Link to="user-recipe-like">דף הבית</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
        <Link to="/" className="nav-link">דף הבית</Link>
        </li> */}
            {/* <li className="nav-item">
        <Link to="list-recipe" className="nav-link" >עולם המתכונים</Link>
        </li> */}
            <li className="nav-item dropdown">
              < a onClick={() => { navigate("list-recipe") }} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                עולם המתכונים
              </a>
              {/* < Link className="nav-link dropdown-toggle" to="list-recipe" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                עולם המתכונים
              </Link> */}
              {/*//מה שזוהרה עשתה*/}
              {/* {props.categories.map(c =>
                        <div className="dropdown">
                            <button className="dropbtn"> {c.Name}</button>
                            <div className="dropdown-content">
                                {c.subCategories.length != 0 && c.subCategories.map(te =>
                                    <Link to="/list-recipe" onClick={() => {  goToList(c.Name,c.subCategories[0].Name) }}>{te.Name} </Link>)
                                }
                            </div>
                        </div>
                    )} */}




              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map(
                  c => (
                    <li>
                      <a className="dropdown-item" onClick={(e) => { e.preventDefault(); showByCategory(c.Name, null) }}><b>{c.Name}</b></a>
                      {c.subCategories.map(sc => (
                        <dl><a className="dropdown-item" onClick={(e) => { e.preventDefault(); showByCategory(c.Name, sc.Name) }}>{sc.Name}</a></dl>

                      ))
                      }
                    </li>))}

                {/* <li><hr className="dropdown-divider"/></li>*/}
              </ul>
            </li>
            {/* <li className="nav-item">
        <Link to="home-manager" className="nav-link">מנהל</Link>
        </li>
        <li className="nav-item">
        <Link to="home-user" className="nav-link">משתמש</Link>
        </li> */}
            <li>
              <Link to="my-nutritionist" className="nav-link">התזונאית שלי</Link>
            </li>

            <li className="nav-item">
              <Link to="about" className="nav-link">אודות</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="add-recipe" className="nav-link">הוספת</Link>
            </li> */}
            <li className="nav-item ">
              <Link to="add-recipe" className="nav-link">הוספת מתכון</Link>
            </li>


            {/* <li className="nav-item ">
        <Link to="recipe" className="nav-link"> מתכון</Link>
        </li>  */}

            {/* https://www.w3schools.com/howto/default_page2.asp */}
            <li>
              <Link to="login-and-register" className="nav-link"><PersonIcon /></Link>
            </li>
            {/* <li className="nav-item ">
        <Link to="recipe" className="nav-link">מתכון</Link>
        </li>  */}

            <li className="nav-item">
              <Link to="convert" className="nav-link"><ScienceIcon /></Link>
            </li>
            <li className="nav-item">
              <Link to="user-book" className="nav-link"><MenuBookIcon /></Link>
            </li>
            <li className="nav-item">
              <Link to="user-recipe-like" className="nav-link"><FavoriteIcon /></Link>
            </li>
            {/* <li className="nav-item">
              <Link to="mail" className="nav-link"><DraftsIcon /></Link>
            </li> */}



            {/* <li className="nav-item">
        <Link to="chat-live" className="nav-link">צ'אט</Link>
        </li> */}
            {/* <li className="nav-item">
        <Link to="manager-choos" className="nav-link">בחירת מתכון</Link>
        </li>
        <li className="nav-item">
        <Link to="manager-choos-top" className="nav-link">בחירת מתכון מוביל</Link>
        </li> */}
          </ul>
          <form className="d-flex" role="search">

            <TextField
              placeholder="Search"
              type="text"
              variant="outlined"
              fullWidth
              size="small"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),

                endAdornment: value && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setValue("")}
                  ><CancelRoundedIcon /></IconButton>
                )
              }}

            />

            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">חיפוש מתכון</button> */}
          </form>
          {/* <nav className="">
            <div className="">
              <form className="d-flex" role="search">
                <input className="" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="" type="submit">חיפוש</button>
              </form>
            </div>
          </nav> */}
        </div>
      </div>
    </nav >


  </>)
}


export default Navbar;


