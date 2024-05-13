import React from "react";
import "./NavBar.css";
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </nav>
    )
}

export default NavBar;