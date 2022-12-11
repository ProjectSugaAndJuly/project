import axios from "axios";
//פונקציה שקולטת שמי שנותן לייק לתגובה היא שומרת את המשתמש שנתן את הלייק
export const addLikeToReplyByIdUAction = (listType) => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/like_for_reply/addLikeToReplyByIdU/" + listType)
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