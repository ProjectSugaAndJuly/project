import axios from "axios";
//שליפת קטגוריות
export const getCategoriesAction = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/category/getCategories" )
      .then(
        (response) => {
          console.log(response);
          dispatch({type:"GET_CATEGORIES", payload:response.data});
        },
        (err) => {
          console.log(err);
          console.log("קרתה שגיאה");
        }
      );
  };
};

