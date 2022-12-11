import React, { useEffect, useState } from 'react';
import './App.css';
import About from './commponent/About';
import RecipeBeaforPublish from './commponent/RecipeBeaforPublish';
import AddRecipe from './commponent/AddRecipe';
import ChatLive from './commponent/ChatLive';
import Convert from './commponent/Convert';


import NumOfEnter from './commponent/NumOfEnter';
import DeleteRecipe from './commponent/DeleteRecipe';
import ManagerChoosWeekly from './commponent/ManagerChoosWeekly';
import ListUsers from './commponent/ListUsers';
import EditAbout from './commponent/EditAbout';
import AddCategory from './commponent/AddCategory';
import UpdateRecipe from './commponent/UpdateRecipe';
import HomeManager from './commponent/HomeManager';
import HomeUser from './commponent/HomeUser';
import ListRecipe from './commponent/ListRecipe';
import LoginAndRegister from './commponent/LoginAndRegister';
import ManagerChoosDaily from './commponent/ManagerChoosDaily';
import ManagerChoosTop from './commponent/ManagerChoosTop';
import MyNutritionist from './commponent/MyNutritionist';
import Navbar from './commponent/Navbar';
import NavbarManager from './commponent/NavbarManager';
import AddSuccses from './commponent/AddSuccses';
import NavbarUser from './commponent/NavbarUser';
import Recipe from './commponent/Recipe';
import Rpley from './commponent/Rpley';
import UserBook from './commponent/UserBook';
import UserRecipeLike from './commponent/UserRecipeLike';
import Mail from './commponent/Mail';
// import Carousel from './commponent/Carousel';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Carousel } from 'react-responsive-carousel';
import Login from './commponent/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeAction } from './action/recipe';
import { getUsersAction } from './action/user';
import { getCategoriesAction } from './action/category';
import { Box } from '@mui/system';
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


function App() {


  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
 const [open, setOpen] = useState(false);


  useEffect(async () => {
    dispatch(getRecipeAction()); //הפעלה של פוקנציה שהולכת לשרת ואח''כ ע''י דיספאטצ' מעדכנת את הסטייט
    dispatch(getUsersAction());
    dispatch(getCategoriesAction());

  }, [])

  useEffect(async () => {
      handleClickOpen();
      setTimeout(2000, handleClose);
  },[message])
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">

    {message!=""&&<Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                 handleClose();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>} 
      
      <Navbar />

      <Routes>
        <Route path="login-and-register" element={<LoginAndRegister />} ></Route>
        <Route path="list-recipe" element={<ListRecipe />} ></Route>
        <Route path="my-nutritionist" element={<MyNutritionist />} ></Route>
        <Route path="about" element={<About />} ></Route>
        <Route path="convert" element={<Convert />} ></Route>
        <Route path="user-recipe-like" element={<UserRecipeLike />} ></Route>
        <Route path="user-book" element={<UserBook />} ></Route>
        <Route path="mail" element={<Mail />} ></Route>
        <Route path="add-recipe" element={<AddRecipe />} ></Route>
        <Route path="recipe" element={<Recipe />}></Route>
        <Route path="recipe-beafor-publish" element={<RecipeBeaforPublish />}></Route>
        <Route path="add-succses" element={<AddSuccses />}></Route>
        <Route path="rpley" element={<Rpley />}></Route>
        <Route path="home-maneger" element={<HomeManager />} ></Route>
        <Route path="update-recipe" element={<UpdateRecipe />} ></Route>
        <Route path="add-category" element={<AddCategory />} ></Route>
        <Route path="edit-about" element={<EditAbout />} ></Route>
        <Route path="list-users" element={<ListUsers />} ></Route>
        <Route path="manager-choos-weekly" element={<ManagerChoosWeekly />} ></Route>
        <Route path="delete-recipe" element={<DeleteRecipe />} ></Route>
        <Route path="num-of-enter" element={<NumOfEnter />} ></Route>
        <Route path="manager-choos-top" element={<ManagerChoosTop />} ></Route>
        <Route path="manager-choos-daily" element={<ManagerChoosDaily />} ></Route>


        <Route path="home-manager" element={<HomeManager />} >
          <Route path="manager-choos-daily" element={<ManagerChoosDaily />} />
          <Route path="manager-choos-top" element={<ManagerChoosTop />} />
          <Route path="add-recipe" element={<AddRecipe />} />
          <Route path="list-recipe" element={<ListRecipe />} />
          <Route path="recipe-beafor-publish" element={<RecipeBeaforPublish />} />
          <Route path="update-recipe" element={<UpdateRecipe />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="edit-about" element={<EditAbout />} />
          <Route path="list-users" element={<ListUsers />} />
          <Route path="manager-choos-weekly" element={<ManagerChoosWeekly />} />
          <Route path="delete-recipe" element={<DeleteRecipe />} />
          <Route path="num-of-enter" element={<NumOfEnter />} />

          {/* <Route path="login-and-register" element={<LoginAndRegister />} /> */}
          {/* <Route path="recipe" element={<Recipe />} /> */}
          {/* <Route path="add-succses" element={<AddSuccses />}/> */}
          {/* <Route path="rpley" element={<Rpley />}/> */}


        </Route>

        <Route path="home-user" element={<HomeUser />} >
          <Route path="chat-live" element={<ChatLive />} />
          <Route path="convert" element={<Convert />} />
          <Route path="mail" element={<Mail />} />
          <Route path="my-nutritionist" element={<MyNutritionist />} />
          <Route path="user-book" element={<UserBook />} />
          <Route path="user-recipe-like" element={<UserRecipeLike />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="login-and-register" element={<LoginAndRegister />} />
          <Route path="login" element={<Login />} />
          <Route path="list-recipe" element={<ListRecipe />} />
          <Route path="add-recipe" element={<AddRecipe />} />
          <Route path="about" element={<About />} />
          <Route path="recipe-beafor-publish" element={<RecipeBeaforPublish />} />
          <Route path="add-succses" element={<AddSuccses />} />
          <Route path="rpley" element={<Rpley />} />

        </Route>


      </Routes>







    </div>
  );
}

export default App;
