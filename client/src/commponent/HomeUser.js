import "./HomeUser.css"
import { Link, Outlet } from "react-router-dom";

export default function HomeUser() {
    return (
        <>
            <div id="card">
                < div id="card_img">
                    <img id="immg" src="/images/82dfbc9750754535ca45d2bf6e6e0bc2.jpg"></img>
                </div>
                <div id="card_text">
                    {/* style="direction: rtl" */}
                    <h1>המתכון היומי</h1><br /><br /><br />
                    <h4>שוגה המגניבה הפתיעה במתכון חדשני ומיוחד<br />
                        במינו של מנה אחרונה חלבית  בקיצור אחד הדברים טיייייל...</h4>
                </div>
            </div>
            <div id="card">
                
                <div id="card_text1">
                    {/* style="direction: rtl" */}
                    <h1>המתכון השבועי</h1><br /><br /><br />
                    <h4>שוגה המגניבה הפתיעה במתכון חדשני ומיוחד<br />
                        במינו של מנה אחרונה חלבית  בקיצור אחד הדברים טיייייל...</h4>
                </div>
                < div id="card_img1">
                    <img id="immg1" src="/images/1fbgdzs2w8zkmsfm.jpg"></img>
                </div>
            </div>
            <div id="card">
                < div id="card_img">
                    <img id="immg" src="/images/FIL_6721736_1648564138994.jpg"></img>
                </div>
                <div id="card_text">
                    {/* style="direction: rtl" */}
                    <h1>מתכונים מובילים</h1><br /><br /><br />
                    <h4>שוגה המגניבה הפתיעה במתכון חדשני ומיוחד<br />
                        במינו של מנה אחרונה חלבית  בקיצור אחד הדברים טיייייל...</h4>
                </div>
            </div>
        </>
    )

}