import axios from "axios";

export const getUsersAction = () => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/user/getUsers/" )
            .then(
                (response) => {
                    console.log(response);
                    dispatch( {type:"GET_USERS", payload:response.data} );
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};

export const addUserAction = () => {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/user/addUser/" )
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

export const logInAction = (Mail,Password) => {
    return (dispatch) => {
        axios.post("http://localhost:8080/user/login/"+ Mail ,"/"+Password)
            .then(
                (response) => {
                    console.log(response);
                    dispatch(saveUser(response.data));
                },
                (err) => {
                    console.log(err);
                    console.log("קרתה שגיאה");
                }
            );
    };
};


export const updateUserAction = (user) => {
    return (dispatch) => {
        axios.put("http://localhost:8080/user/updateUserById/" + user.Id, user)
            .then(
                (response) => {
                    console.log(response);
                    dispatch({type:"UPDATE_USER", payload: response.data});
                    dispatch({type:"UPDATE_MESSAGE", payload:response.data.message})
                },
                (err) => {
                    console.log(err);
                    dispatch({type:"UPDATE_MESSAGE", payload:"שגיאת שרת נסה מאוחר יותר"})
                }
            );
    };
};

export const saveUser = (user) => {
    return {
      type: "USER_LOGGED_IN",
      payload: user,
    };
  };
  export const saveAllList = (user) => {
    return {
      type: "USER_LOGGED_IN",
      payload: user,
    };
  };