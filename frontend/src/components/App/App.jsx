import React from "react";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Header from "../Header/Header";
import About from "../About/About";
import Contact from "../Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
