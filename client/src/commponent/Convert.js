import "./Convert.css"

export default function Convert() {

    const formData = {
        glass: "",
        tablespoon: "",
        teaspoon: "",
        gram:""
    }


    const convert = (event) => {
        event.preventDefault();
        console.log(FormData);
        //     //שליפת המידע הקיים בטופס
        const form = event.target;
        formData.glass = form.glass.value;
        formData.tablespoon = form.tablespoon.value;
        formData.teaspoon = form.teaspoon.value;       
        formData.gram = form.gram.value;
    }

    return (
        <>
            <h1> Convert </h1>
            <form onSubmit={(event) => { convert(event) }} >
                <img src="/images/icons/glass.png" id="asas"></img>
                <input type="number" name="glass" placeholder="teaspoon" onChange={(e) => { formData.glass = e.target.value }} />
                <img src="/images/icons/tablespoon.png" id="asas"></img>
                <input type="number" name="tablespoon" placeholder="tablespoon" onChange={(e) => { formData.tablespoon = e.target.value }} />
                <img src="/images/icons/teaspoon.png" id="asas"></img>
                <input type="number" name="teaspoon" placeholder="teaspoon" onChange={(e) => { formData.teaspoon = e.target.value }} />
                <img src="/images/icons/gram.png" id="asas"></img>
                {/* <h6>gram</h6> */}
                <input type="number" name="gram" placeholder="gram" onChange={(e) => { formData.gram = e.target.value }} /><br/>
                <button type="submit">שלח</button>
            </form>
        </>
    )

}