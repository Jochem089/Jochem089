import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    );
}

export default App;
