import axios from "axios";

// export const addEnterToWebAction = (listType) => {
//     return (dispatch) => {
//         axios
//             .put("http://localhost:8080/number_of_daily_enters/addEnterToWeb/" + listType)
//             .then(
//                 (response) => {
//                     console.log(response);
//                     dispatch(saveAllList(response.data));
//                 },
//                 (err) => {
//                     console.log(err);
//                     console.log("קרתה שגיאה");
//                 }
//             );
//     };
// };