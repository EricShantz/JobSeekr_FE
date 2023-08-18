import React, {useState} from "react";

const Home = () => {
    let [apiResponse, setApiResponse] = useState('');

    const handleClick = async() => {
        try{
            //call API
            const response = await fetch('http://localhost:3001/data'); // Make a GET request to the API endpoint
            console.log("response", response)
            const data = await response.json(); // Parse the JSON response
            setApiResponse(data.message);
        } catch (err) {
            console.error(`Error fetching data: ${err}`);
        }
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click Me</button>
            <p>{apiResponse}</p>
        </div>
    )
}

export default Home;