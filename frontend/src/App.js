import React from "react";
import './App.css';
import NavBar from "./components/navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/home/Homepage";
import About from "./components/about/About";

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
