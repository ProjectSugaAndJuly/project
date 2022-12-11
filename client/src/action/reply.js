import axios from "axios";

export const addReplyAction = () => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/reply/addReply/" )
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

export const addLikeToReplyByIdAction = (id) => {
    return (dispatch) => {
        axios
            .put("http://localhost:8080/reply/addLikeToReplyById/" + id)
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

export const subLikeToReplyByIdAction = (id) => {
    return (dispatch) => {
        axios
            .put("http://localhost:8080/reply/subLikeToReplyById/" + id)
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