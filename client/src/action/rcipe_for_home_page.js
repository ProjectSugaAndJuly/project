import axios from "axios";
//פונקציה שמקבלת קוד מתכון ומוסיפה אותו כמתכון מוביל
export const addTopRecipeAction = (id) => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/rcipe_for_home_page/addTopRecipe/" + id)
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
//פונקציה שמקבלת קוד מתכון ומוסיפה אותו כמתכון יומי
export const addDailyRecipeAction = (id) => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/rcipe_for_home_page/addDailyRecipe/" + id)
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
//פונקציה שמקבלת קוד מתכון ומוסיפה אותו כמתכון שבועי
export const addWeeklyRecipeAction = (id) => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/rcipe_for_home_page/addWeeklyRecipe/" + id)
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
