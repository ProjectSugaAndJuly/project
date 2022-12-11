import { useNavigate } from "react-router";
import "./Login.css";
import { logInAction } from "../action/user";
import { connect } from "react-redux";

const Login = (props) => {
  let nav = useNavigate();
  let l = {
    Password: "",
    Mail: "",
  };

  const change = (e) => {
    let { name, value, type } = e.target;
    // if (type === "number")
    //     value = +value;
    //     if(type==="password" && value.length===8)
    //       value = +value;
    l[name] = value;
  };

  const logIn = (event) => {
    event.preventDefault();
    props.logInAction(l.email, l.password);
    // nav("/homePage");
  };

  if (props.currentType == 1) nav("/managerNavBar");
  else nav("/homePage");

  return (
    <>
      <h1>התחברות</h1>
      <form role="form">
        {/* <div class="form-group">
                    <label>שם משתמש</label>
                    <input type="text" name="name" class="form-control" placeholder="הכנס שם משתמש" />
                </div> */}  
        <div className="form-group">
          <label>מייל</label>
          <input
            type="email"
            name="Mail"
            className="form-control"
            placeholder="הכנס מייל"
            onChange={(event) => change(event)}
          />
        </div>
        <div className="form-group">
          <label>סיסמא</label>
          <input
            type="password"
            name="Password"
            className="form-control"
            placeholder="הכנס סיסמא"
            onChange={(event) => change(event)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-default"
          onClick={(e) => {
            logIn(e);
          }}
        >
          התחבר
        </button>
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentType: state.currentType,
  };
};
export default connect(mapStateToProps, { logInAction })(Login);
