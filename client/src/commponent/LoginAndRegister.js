import "./LoginAndRegister.css"
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import { logInAction } from "../action/user";
import { connect } from "react-redux";

function LoginAndRegister(props) {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const navigate = useNavigate();
    const user = {};
    const formData = {
        username: "",
        email: "",
        password: ""
    }


    const change = (e) => {
        const { name, value } = e.target;
        user[name] = value;
    }
    const loginAndRegister = (event) => {
        event.preventDefault();
        console.log(formData);
        //שליפת המידע הקיים בטופס
        const form = event.target;
        formData.username = form.username.value;
        formData.email = form.email.value;
        formData.password = form.password.value;

        if (!checkPassword(formData.password))
            alert("הכנס 6 תווים לפחות")
        //supposed to send formData to server
        alert(`User ${formData.username} has loginAndRegister.`)
        console.log(formData);

        if (true) {
            navigate("/list-recipe");
        }

        if (true) {
            navigate("/list-recipe");
        }

        const fd = new FormData();
        fd.append("file", File);
        fd.append("fileName", fileName);
        // try {
        //     axios.post("http://localhost:8080/upload/1", fd);
        // }
        // catch (e) {
        //     console.log("an error in axios");
        // }
    }

    const checkPassword = (password) => {
        return password.length > 6;
    }
    const logIn = (event) => {
        event.preventDefault();
        props.logInAction(formData.email, formData.password);
        console.log(formData.email, formData.password);
        // nav("/homePage");
      };

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        console.log(e.target.files[0]);
        console.log(e.target.files[0].name);

    }
    return (
        <>
            <div id="loginAndRegister">
                <div id="Register">
                    {/* הרשמה */}
                    <h1>Register</h1>
                    <form onSubmit={(event) => { loginAndRegister(event) }} >
                        <input type="text" name="username" placeholder="הכנס שם משתמש" onChange={change} />
                        <input type="email" name="email" placeholder="הכנס כתובת מייל" onChange={change} />
                        <input type="password" name="password" placeholder="הכנס סיסמא" onChange={change} />
                        <input type="file" onChange={saveFile}></input>
                        {/* כשלוחציפ על "הרשם" לעשות טלרט שמציג את כל הפרטים */}
                        <button type="submit" onClick={alert(saveFile)}>הירשם</button>
                    </form>
                </div>
                {/* כניסה */}
                <div id="Login">
                    <h1>Login</h1>
                    <form onSubmit={(event) => { logIn(event) }} >
                        <input type="email" name="email" placeholder="הכנס כתובת מייל" onChange={change} />
                        <input type="password" name="password" placeholder="הכנס סיסמא" onChange={change} />
                        <button type="submit" >התחבר</button>
                    </form>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };
export default connect(mapStateToProps, { logInAction })(LoginAndRegister);
