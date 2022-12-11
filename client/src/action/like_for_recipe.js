import axios from "axios";
//שליפת רשימת המתכונים שהמשתמש אהב באמצעות קוד משתמש
export const getRecipeUserLikeByIdUserAction = (id) => {
    return (dispatch) => {
      axios
        .get("http://localhost:8080/like_for_recipe/getRecipeUserLikeByIdUser/" + id)
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