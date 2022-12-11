import "./MyNutritionist.css"
import React, { useState } from "react";
import { ButtonBase, TextField } from "@material-ui/core";
import { Button } from "bootstrap";
import { color } from "@mui/system";

const App = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("מיתחת לממוצע");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("ממוצע תקין");
    } else if (val > 24.9 && val < 30) {
      setInfo("מעל הממוצע");
    } else {
      setInfo("שמן מאוד");
    }
  };
  return (
    <>
    <img src="/images/tzunaeet.png" id="tztz"/> 
    <div id="divv">
      <h1><span>BMI</span> Calculator</h1>
      <TextField 
      type="text"
      onChange={(e) => setHeight(e.target.value)}
      id="standard-basic" 
      label="הכנס גובה" 
      variant="standard" /><br/>
      {/* <input
        type="text"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="הכנס גובה"
      /> */}
      <TextField 
      type="text"
      onChange={(e) => setWeight(e.target.value)}
      id="standard-basic" 
      label="הכנס משקל" 
      variant="standard" /><br/><br/>
      {/* <input
        type="text"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="הכנס משקל"
      /> */}
      {/* <button onClick={handleBmi}>Calculate</button> */}
      <ButtonBase id="ButtonBase" color="secondary" onClick={handleBmi} >Calculate</ButtonBase><br/><br/>
      <h1>{bmi}</h1>
      <h2>{info}</h2>
    </div>
    </>
  );
};

export default App;
