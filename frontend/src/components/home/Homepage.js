import React, {useState} from "react";
import {Button} from "@mui/material";

function HomePage() {
    const [count, setCount] = useState(0)

    function handleClick() {
        console.log("clicked");
        setCount(count + 1)
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-4">
                <h1>Welcome to my site!</h1>
                <p>This is a simple test project</p>
                <Button variant="contained" onClick={handleClick}>Click me!</Button>
                <p>Counter: { count }</p>
            </div>
        </div>
    )
}

export default HomePage;