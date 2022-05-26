import React from "react";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Header from "../Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />}>
          darkroom
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
