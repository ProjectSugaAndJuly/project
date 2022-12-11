import axios from "axios";
//הצגת מתכונים


export const getRecipeAction = () => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getRecipe/" )
            .then(
                (response) => {
                    console.log(response);
                    dispatch( {type:"GET_RECIPIES", payload:response.data} );
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//הצגת מתכונים של משתמש לפי קוד משתמש
export const getRecipeUserByIdUAction = (id) => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getRecipeUserByIdU/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//הצגת כל המתכונים שמחכים לאישור פירסום
export const getRecipeThatWeitingForPublishAction = () => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getRecipeThatWeitingForPublish/" )
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד מתכון ומציגה אותו 
export const getRecipeByIdAction = (id) => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getRecipeById/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד מתכון ומוסיפה לו לייק 
export const addLikeToRecipeByIdAction = (id) => {
    return (dispatch) => {
        axios
            .put("http://localhost:8080/recipe/addLikeToRecipeById/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד מתכון ןמורידה לו לייק 
export const subLikeToRecipeByIdAction = (id) => {
    return (dispatch) => {
        axios
            .put("http://localhost:8080/recipe/subLikeToRecipeById/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד מתכון ומוסיפה לו צפייה 
export const addWatchToRecipeByIdAction = (id) => {
    return (dispatch) => {
        axios
            .put("http://localhost:8080/recipe/addWatchToRecipeById/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data)); //{type:"SAVE_ALL_LIST", payload: response.data}
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד קטגוריה ומציגה את כל המתכונים בקטגוריה זו
export const getRecipeByIdCategoryAction = (id) => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getRecipeByIdCategory/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllRecipes(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד תת קטגוריה ומציגה את כל המתכונים בקטגוריה זו
export const getRecipeByIdSubCategoryAction = (id) => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getRecipeByIdSubCategory/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד משתמש ומציגה את המתכונים שלו 
export const getRecipeByIdUserAction = (id) => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getRecipeByIdUser/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד מתכון שלא פורסם ומפרסמת אותו
export const publishRecipeByIdAction = (id) => {
    return (dispatch) => {
        axios
            .put("http://localhost:8080/recipe/publishRecipeById/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};

//פונקציה שמקבלת קוד מתכון שלא פורסם ולא מפרסמת אותו
export const notPublishRecipeByIdAction = (id) => {
    return (dispatch) => {
        axios
            .put("http://localhost:8080/recipe/notPublishRecipeById/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//הוספת מתכון
export const addRecipeAction = () => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/recipe/addRecipe/" )
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//עידכון מתכון
export const updeteRecipeByIdAction = (id) => {
    return (dispatch) => {
        axios
            .put("http://localhost:8080/recipe/updeteRecipeById/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//מחיקת מתכון
export const deleteRecipeByIdAction = (id) => {
    return (dispatch) => {
        axios
            .delete("http://localhost:8080/recipe/deleteRecipeById/" + id)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד משתמש ומציגה את המתכונים שהוא לא אלרגי אליהם //xxxxxxxxxxxxxxxxxלתקןxxxxxxx
export const getRecipeNotAllergyByIdUserAction = (idU) => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getRecipeNotAllergyByIdUser/" + idU)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};
//פונקציה שמקבלת קוד משתמש ומציגה את כל המתכונים שאהב 
export const getLikeRecipeByIdUserAction = (idU) => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/recipe/getLikeRecipeByIdUser/" + idU)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveAllList(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};

export const saveAllRecipes = (list) => {
    return {
      type: "GET_RECIPIES",
      payload: list,
    };
  };
  export const saveAllList = (list) => {
    return {
      type: "GET_RECIPIES",
      payload: list,
    };
  };