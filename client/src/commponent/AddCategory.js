import { Button, TextField } from "@material-ui/core"
import "./AddCategory.css"


export default function AddCategory() {


  return (

    <>


      <h1>AddCategory</h1>

      <div className="card">
        <h1>הוספת קטגוריה</h1>
        {/* <img src="/images/1fbgdzs2w8zkmsfm.jpg" alt="Avatar" className="card" /> */}
        <div className="container">
        <TextField id="standard-basic" label="שם הקטגוריה" variant="standard" /><br/><br/>
        <Button variant="outlined">הוסף</Button>
        </div>
      </div>
      
      <div className="card">
      <h1>הוספת תת קטגוריה</h1>
        {/* <img src="/images/1fbgdzs2w8zkmsfm.jpg" alt="Avatar" className="card" /> */}
        <div className="container">
          <p>בחר לאיזו קטגוריה לשייך:</p>
          <Button variant="contained">ארוחות</Button><br/><br/>
          <Button variant="contained">קינוחים</Button><br/><br/>
          <Button variant="contained">עוגות</Button><br/><br/>
          <Button variant="contained">פסח</Button><br/><br/><br/>

        <TextField id="standard-basic" label="שם התת קטגוריה החדשה" variant="standard" /><br/><br/>
        <Button variant="outlined">הוסף</Button>
        </div>
      </div>
    </>
  )

}