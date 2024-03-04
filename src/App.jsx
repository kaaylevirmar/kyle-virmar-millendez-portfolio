import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
        <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
