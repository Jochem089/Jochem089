import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div className="flex mb-8 bg-blue-300">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default NavBar;